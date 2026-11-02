'use server'

import { cookies } from 'next/headers'
import { after } from 'next/server'
import { redirect } from 'next/navigation'
import { createClient, getAuthUser } from '@/lib/supabase/server'
import { sendPasswordChangedEmail, sendWelcomeEmail } from '@/lib/email/send'
import {
  changePasswordSchema,
  fieldErrors,
  forgotPasswordSchema,
  loginSchema,
  resetPasswordSchema,
  signupSchema,
} from './schemas'
import { safeNextPath } from './safe-next-path'
import { isDisposableEmail } from './is-disposable-email'
import { rateLimitAsync, hashKey } from './rate-limit'
import { clientIp } from './client-ip'
import { requestOrigin } from './origin'
import { isPasswordSession, RECOVERY_COOKIE } from './recovery'
import {
  DISPOSABLE_EMAIL,
  LOGIN_FAILED,
  PASSWORD_UPDATE_FAILED,
  RESET_SESSION_EXPIRED,
  SIGNUP_FAILED,
  UNAUTHENTICATED,
  tooManyAttempts,
} from './errors'

export type AuthResult = {
  ok?: true
  error?: string
  fieldErrors?: Record<string, string>
  retryAfterSec?: number
  redirectTo?: string
  pendingConfirmation?: boolean
}

const MINUTE = 60_000
const LOGIN_IP_LIMIT = { limit: 20, windowMs: 15 * MINUTE }
const LOGIN_EMAIL_LIMIT = { limit: 10, windowMs: 15 * MINUTE }
const SIGNUP_IP_LIMIT = { limit: 5, windowMs: 15 * MINUTE }
const FORGOT_IP_LIMIT = { limit: 10, windowMs: 15 * MINUTE }
const FORGOT_EMAIL_LIMIT = { limit: 3, windowMs: 15 * MINUTE }
const PASSWORD_LIMIT = { limit: 5, windowMs: 15 * MINUTE }

export async function loginAction(input: unknown): Promise<AuthResult> {
  const parsed = loginSchema.safeParse(input)
  if (!parsed.success) return { fieldErrors: fieldErrors(parsed.error) }

  const ipLimit = await rateLimitAsync(`login-ip:${await clientIp()}`, LOGIN_IP_LIMIT)
  if (!ipLimit.ok) return { error: tooManyAttempts(ipLimit.retryAfterSec), retryAfterSec: ipLimit.retryAfterSec }

  const emailLimit = await rateLimitAsync(`login-email:${hashKey(parsed.data.email)}`, LOGIN_EMAIL_LIMIT)
  if (!emailLimit.ok) return { error: LOGIN_FAILED }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  })
  if (error) return { error: LOGIN_FAILED }

  return { ok: true, redirectTo: safeNextPath(parsed.data.next) }
}

export async function signupAction(input: unknown): Promise<AuthResult> {
  const parsed = signupSchema.safeParse(input)
  if (!parsed.success) return { fieldErrors: fieldErrors(parsed.error) }

  const ipLimit = await rateLimitAsync(`signup-ip:${await clientIp()}`, SIGNUP_IP_LIMIT)
  if (!ipLimit.ok) return { error: tooManyAttempts(ipLimit.retryAfterSec), retryAfterSec: ipLimit.retryAfterSec }

  if (isDisposableEmail(parsed.data.email)) {
    return { fieldErrors: { email: DISPOSABLE_EMAIL } }
  }

  // Canonical uniqueness is enforced inside auth.users (DB trigger): a second

  const supabase = await createClient()
  const origin = await requestOrigin()
  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: { full_name: parsed.data.fullName },
      emailRedirectTo: `${origin}/auth/callback?next=/dashboard`,
    },
  })

  if (error) return { error: SIGNUP_FAILED }

  after(() => sendWelcomeEmail(parsed.data.email, parsed.data.fullName))

  if (!data.session) return { ok: true, pendingConfirmation: true }
  return { ok: true, redirectTo: '/dashboard' }
}

export async function signOutAction(): Promise<void> {
  const { supabase } = await getAuthUser()
  await supabase.auth.signOut()
  redirect('/login')
}

export async function requestPasswordResetAction(input: unknown): Promise<AuthResult> {
  const parsed = forgotPasswordSchema.safeParse(input)
  if (!parsed.success) return { fieldErrors: fieldErrors(parsed.error) }

  const ipLimit = await rateLimitAsync(`forgot-ip:${await clientIp()}`, FORGOT_IP_LIMIT)
  if (!ipLimit.ok) return { error: tooManyAttempts(ipLimit.retryAfterSec), retryAfterSec: ipLimit.retryAfterSec }

  const emailLimit = await rateLimitAsync(`forgot-email:${hashKey(parsed.data.email)}`, FORGOT_EMAIL_LIMIT)
  if (!emailLimit.ok) return { error: tooManyAttempts(emailLimit.retryAfterSec), retryAfterSec: emailLimit.retryAfterSec }

  const supabase = await createClient()
  const origin = await requestOrigin()
  await supabase.auth.resetPasswordForEmail(parsed.data.email, {
    redirectTo: `${origin}/auth/confirm`,
  })

  // Always the same answer: never reveal whether the account exists.
  return { ok: true }
}

export async function resetPasswordAction(input: unknown): Promise<AuthResult> {
  const { user, supabase } = await getAuthUser()
  const cookieStore = await cookies()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Only a session created by a recovery link may change the password.
  if (!user || !cookieStore.get(RECOVERY_COOKIE) || isPasswordSession(session?.access_token)) {
    return { error: RESET_SESSION_EXPIRED, redirectTo: '/forgot-password' }
  }

  const parsed = resetPasswordSchema.safeParse(input)
  if (!parsed.success) return { fieldErrors: fieldErrors(parsed.error) }

  const limit = await rateLimitAsync(`reset:${user.id}`, PASSWORD_LIMIT)
  if (!limit.ok) return { error: tooManyAttempts(limit.retryAfterSec), retryAfterSec: limit.retryAfterSec }

  const { error } = await supabase.auth.updateUser({ password: parsed.data.password })
  if (error) return { error: PASSWORD_UPDATE_FAILED }

  const email = user.email
  if (email) after(() => sendPasswordChangedEmail(email))

  await supabase.auth.signOut()
  cookieStore.delete({ name: RECOVERY_COOKIE, path: '/reset-password' })
  return { ok: true, redirectTo: '/login?reset=1' }
}

export async function changePasswordAction(input: unknown): Promise<AuthResult> {
  const { user, supabase } = await getAuthUser()
  const email = user?.email
  if (!user || !email) return { error: UNAUTHENTICATED }

  const parsed = changePasswordSchema.safeParse(input)
  if (!parsed.success) return { fieldErrors: fieldErrors(parsed.error) }

  const limit = await rateLimitAsync(`change-password:${user.id}`, PASSWORD_LIMIT)
  if (!limit.ok) return { error: tooManyAttempts(limit.retryAfterSec), retryAfterSec: limit.retryAfterSec }

  const { error: verifyError } = await supabase.auth.signInWithPassword({
    email,
    password: parsed.data.currentPassword,
  })
  if (verifyError) return { fieldErrors: { currentPassword: 'La contraseña actual no es correcta.' } }

  const { error } = await supabase.auth.updateUser({ password: parsed.data.password })
  if (error) return { error: PASSWORD_UPDATE_FAILED }

  // A password change must invalidate sessions on other devices.
  await supabase.auth.signOut({ scope: 'others' })

  after(() => sendPasswordChangedEmail(email))
  return { ok: true }
}

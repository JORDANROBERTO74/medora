import { Resend } from 'resend'
import type { ReactElement } from 'react'
import { PasswordChangedEmail } from '@/emails/password-changed-email'
import { PasswordResetEmail } from '@/emails/password-reset-email'
import { WelcomeEmail } from '@/emails/welcome-email'
import { buildDashboardUrl, buildForgotUrl } from './links'

const DEFAULT_FROM = 'Medora <onboarding@resend.dev>'

let client: Resend | null | undefined

function getResend(): Resend | null {
  if (client !== undefined) return client
  const apiKey = process.env.RESEND_API_KEY?.trim()
  client = apiKey ? new Resend(apiKey) : null
  return client
}

/** Sends one transactional email. Without RESEND_API_KEY it skips (dev) instead of failing the action. */
export async function sendEmail(input: { to: string; subject: string; react: ReactElement }): Promise<boolean> {
  const resend = getResend()
  if (!resend) {
    console.warn(`[email] RESEND_API_KEY missing; skipped "${input.subject}"`)
    return false
  }

  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM?.trim() || DEFAULT_FROM,
    to: input.to,
    subject: input.subject,
    react: input.react,
  })

  if (error) {
    console.error(`[email] "${input.subject}" failed: ${error.message}`)
    return false
  }
  return true
}

export function sendWelcomeEmail(to: string, name: string): Promise<boolean> {
  return sendEmail({
    to,
    subject: 'Bienvenido a Medora',
    react: <WelcomeEmail name={name} dashboardUrl={buildDashboardUrl()} />,
  })
}

export function sendPasswordResetEmail(to: string, resetUrl: string): Promise<boolean> {
  return sendEmail({
    to,
    subject: 'Restablece tu contraseña · Medora',
    react: <PasswordResetEmail resetUrl={resetUrl} />,
  })
}

export function sendPasswordChangedEmail(to: string): Promise<boolean> {
  return sendEmail({
    to,
    subject: 'Tu contraseña de Medora cambió',
    react: <PasswordChangedEmail forgotUrl={buildForgotUrl()} />,
  })
}

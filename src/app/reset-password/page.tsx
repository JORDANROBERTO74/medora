import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getAuthUser } from '@/lib/supabase/server'
import { isPasswordSession, RECOVERY_COOKIE } from '@/lib/auth/recovery'
import { ResetPasswordView } from './reset-password-view'

export const metadata: Metadata = {
  title: 'Nueva contraseña',
  robots: { index: false, follow: false },
}

export default async function ResetPasswordPage() {
  const cookieStore = await cookies()
  const { supabase, user } = await getAuthUser()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Only a recovery link (PKCE callback cookie + non-password session) may reset.
  const allowed = Boolean(user && cookieStore.get(RECOVERY_COOKIE) && !isPasswordSession(session?.access_token))
  if (!allowed) redirect('/login?error=auth')

  return (
    <main className="min-h-screen bg-slate-50 px-4 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <ResetPasswordView />
      </div>
    </main>
  )
}

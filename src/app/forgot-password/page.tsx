import type { Metadata } from 'next'
import { ForgotPasswordView } from './forgot-password-view'

export const metadata: Metadata = {
  title: 'Restablecer contraseña',
  robots: { index: false, follow: false },
}

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <ForgotPasswordView />
      </div>
    </main>
  )
}

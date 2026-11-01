import type { Metadata } from 'next'
import { LoginView } from './login-view'

export const metadata: Metadata = {
  title: 'Iniciar sesión',
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <LoginView />
      </div>
    </main>
  )
}

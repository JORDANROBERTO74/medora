import type { Metadata } from 'next'
import { SignupView } from './signup-view'

export const metadata: Metadata = {
  title: 'Crear cuenta',
}

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <SignupView />
      </div>
    </main>
  )
}

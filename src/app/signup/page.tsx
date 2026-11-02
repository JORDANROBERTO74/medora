import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getAuthUser } from '@/lib/supabase/server'
import { SignupView } from './signup-view'

export const metadata: Metadata = {
  title: 'Crear cuenta',
  robots: { index: false, follow: false },
}

export default async function SignupPage() {
  const { user } = await getAuthUser()
  if (user) redirect('/dashboard')

  return (
    <main className="min-h-screen bg-slate-50 px-4 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <SignupView />
      </div>
    </main>
  )
}

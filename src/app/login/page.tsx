import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getAuthUser } from '@/lib/supabase/server'
import { safeNextPath } from '@/lib/auth/safe-next-path'
import { LoginView } from './login-view'

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  robots: { index: false, follow: false },
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; reset?: string; error?: string }>
}) {
  const params = await searchParams
  const { user } = await getAuthUser()
  if (user) redirect(safeNextPath(params.next))

  return (
    <main className="min-h-screen bg-slate-50 px-4 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <LoginView next={safeNextPath(params.next)} reset={params.reset === '1'} authError={params.error === 'auth'} />
      </div>
    </main>
  )
}

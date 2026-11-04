import type { ReactNode } from 'react'
import { BottomNav } from '@/components/bottom-nav'
import { requireUser } from '@/lib/supabase/server'

/** Authenticated app shell shared by /dashboard and /settings. */
export async function AppShell({ children }: { children: ReactNode }) {
  await requireUser()

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-24 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">{children}</div>
      <BottomNav />
    </main>
  )
}

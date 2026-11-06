import type { ReactNode } from 'react'
import { AppSidebar } from '@/components/app-sidebar'
import { BottomNav } from '@/components/bottom-nav'
import { requireUser } from '@/lib/supabase/server'

/** Authenticated app shell shared by /dashboard and /settings. */
export async function AppShell({ children }: { children: ReactNode }) {
  await requireUser()

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <AppSidebar />
      <div className="px-4 pb-24 sm:px-6 lg:pb-12 lg:pl-64">
        <div className="mx-auto w-full max-w-2xl">{children}</div>
      </div>
      <BottomNav />
    </main>
  )
}

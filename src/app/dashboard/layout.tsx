import type { Metadata } from 'next'
import { BottomNav } from '@/components/bottom-nav'
import type { ReactNode } from 'react'

// The dashboard is private-by-default until Supabase auth lands.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-28 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">{children}</div>
      <BottomNav />
    </main>
  )
}

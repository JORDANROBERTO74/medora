import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'
import { BottomNav } from '@/components/bottom-nav'
import { getAuthUser } from '@/lib/supabase/server'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { user } = await getAuthUser()

  if (!user) {
    const headerList = await headers()
    const pathname = headerList.get('x-pathname') ?? '/dashboard'
    redirect(`/login?next=${encodeURIComponent(pathname)}`)
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-28 text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">{children}</div>
      <BottomNav />
    </main>
  )
}

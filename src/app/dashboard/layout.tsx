import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { AppShell } from '@/components/app-shell'
import { UserDataProvider } from '@/components/user-data-provider'
import { requireUser } from '@/lib/supabase/server'
import { getUserData } from '@/lib/user-data/queries'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { supabase, user } = await requireUser()
  const data = await getUserData(supabase, user.id)

  return (
    <UserDataProvider initial={data}>
      <AppShell>{children}</AppShell>
    </UserDataProvider>
  )
}

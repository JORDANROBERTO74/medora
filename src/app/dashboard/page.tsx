import type { Metadata } from 'next'
import { getAuthUser } from '@/lib/supabase/server'
import { Dashboard } from './dashboard-view'

export const metadata: Metadata = {
  title: 'Inicio',
}

export default async function DashboardPage() {
  const { user } = await getAuthUser()
  const fullName =
    typeof user?.user_metadata?.full_name === 'string' ? user.user_metadata.full_name : ''

  return <Dashboard fullName={fullName} email={user?.email ?? ''} />
}

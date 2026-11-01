import type { Metadata } from 'next'
import { Dashboard } from './dashboard-view'

export const metadata: Metadata = {
  title: 'Inicio',
}

export default function DashboardPage() {
  return <Dashboard />
}

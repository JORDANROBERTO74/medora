import type { Metadata } from 'next'
import { todayInAppZone } from '@/lib/user-data/streak'
import { ProgressView } from './progress-view'

export const metadata: Metadata = {
  title: 'Progreso',
}

export default function ProgressPage() {
  // Computed once on the server so hydration agrees on the streak day.
  return <ProgressView today={todayInAppZone()} />
}

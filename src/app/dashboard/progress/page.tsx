import type { Metadata } from 'next'
import { clinicalCases } from '@/lib/cases'
import { todayInAppZone } from '@/lib/user-data/streak'
import { ProgressView } from './progress-view'

export const metadata: Metadata = {
  title: 'Progreso',
}

export default function ProgressPage() {
  // Computed once on the server so hydration agrees on the streak day.
  // The case count stays here: importing 44 cases into a client component would
  // ship all of them just to render a denominator.
  return <ProgressView today={todayInAppZone()} totalCases={clinicalCases.length} />
}

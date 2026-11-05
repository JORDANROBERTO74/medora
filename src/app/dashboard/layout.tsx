import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { AppShell } from '@/components/app-shell'
import { UserDataProvider } from '@/components/user-data-provider'
import type { SpecialtyCatalogEntry } from '@/lib/achievements'
import { clinicalCases } from '@/lib/cases'
import { specialties } from '@/lib/content'
import { quizGroups } from '@/lib/quiz-bank'
import { requireUser } from '@/lib/supabase/server'
import { getUserData } from '@/lib/user-data/queries'
import { todayInAppZone } from '@/lib/user-data/streak'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { supabase, user } = await requireUser()
  const data = await getUserData(supabase, user.id)

  // Denominators for the per-specialty badges. They stay on the server so the
  // 501-question bank never reaches the client bundle.
  const catalog: SpecialtyCatalogEntry[] = specialties.map((specialty) => ({
    slug: specialty.slug,
    name: specialty.name,
    topics: specialty.topics.length,
    quizzes: quizGroups(specialty.slug).length,
    cases: clinicalCases.filter((item) => item.specialtySlug === specialty.slug).length,
  }))

  return (
    <UserDataProvider initial={data} today={todayInAppZone()} catalog={catalog}>
      <AppShell>{children}</AppShell>
    </UserDataProvider>
  )
}

import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { AppShell } from '@/components/app-shell'
import { UserDataProvider } from '@/components/user-data-provider'
import type { SpecialtyCatalogEntry } from '@/lib/achievements'
import { clinicalCases } from '@/lib/cases'
import { specialties } from '@/lib/content'
import { getReading, getReview } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'
import { quizGroups } from '@/lib/quiz-bank'
import { requireUser } from '@/lib/supabase/server'
import { getUserData } from '@/lib/user-data/queries'
import { todayInAppZone } from '@/lib/user-data/streak'
import type { ReadingCatalogEntry, RepasoChapter } from '@/lib/user-data/types'

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

  // Chapters of the main reading book: the client counts read ones from progress
  // (home and Progreso share the metric) and suggests the next one from home.
  const readingCatalog: ReadingCatalogEntry[] = specialties.map((specialty) => {
    const file = getReading(specialty.slug, 'main')
    return {
      slug: specialty.slug,
      chapters: (file?.chapters ?? []).map((chapter) => ({
        key: `reading:/dashboard/reading/${specialty.slug}/${publicSlug(chapter.slug)}`,
        title: chapter.title,
      })),
    }
  })

  // Repaso books only come after every main chapter and apunte.
  const repasoCatalog: RepasoChapter[] = [
    ...specialties.flatMap((specialty) =>
      (getReading(specialty.slug, 'summary')?.chapters ?? []).map((chapter) => ({
        key: `reading:/dashboard/reading/summary/${specialty.slug}/${publicSlug(chapter.slug)}`,
        title: chapter.title,
        book: 'Compendio Clínico',
      }))
    ),
    ...(getReview()?.chapters ?? []).map((chapter) => ({
      key: `reading:/dashboard/reading/review/${publicSlug(chapter.slug)}`,
      title: chapter.title,
      book: 'Repaso Rápido',
    })),
  ]

  return (
    <UserDataProvider
      initial={data}
      today={todayInAppZone()}
      catalog={catalog}
      readingCatalog={readingCatalog}
      repasoCatalog={repasoCatalog}
    >
      <AppShell>{children}</AppShell>
    </UserDataProvider>
  )
}

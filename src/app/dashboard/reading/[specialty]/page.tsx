import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReadingChapterList } from '@/components/reading-chapter-list'
import { getSpecialty, specialties } from '@/lib/content'
import { getReading } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'

export function generateStaticParams() {
  return specialties.map((specialty) => ({ specialty: specialty.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string }>
}): Promise<Metadata> {
  const { specialty } = await params
  return { title: getSpecialty(specialty)?.name ?? 'Lectura' }
}

export default async function MainReadingPage({
  params,
}: {
  params: Promise<{ specialty: string }>
}) {
  const { specialty: specialtySlug } = await params
  const specialty = getSpecialty(specialtySlug)
  const file = getReading(specialtySlug, 'main')
  if (!specialty || !file) notFound()

  return (
    <ReadingChapterList
      backHref="/dashboard"
      backLabel="Volver al inicio"
      eyebrow="Lectura"
      title={specialty.name}
      items={file.chapters.map((chapter) => ({
        href: `/dashboard/reading/${specialtySlug}/${publicSlug(chapter.slug)}`,
        order: chapter.order,
        title: chapter.title,
      }))}
    />
  )
}

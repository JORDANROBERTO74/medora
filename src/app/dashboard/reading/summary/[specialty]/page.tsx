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
  return { title: `Resumen · ${getSpecialty(specialty)?.name ?? specialty}` }
}

export default async function SummaryChaptersPage({
  params,
}: {
  params: Promise<{ specialty: string }>
}) {
  const { specialty: specialtySlug } = await params
  const specialty = getSpecialty(specialtySlug)
  const file = getReading(specialtySlug, 'summary')
  if (!specialty || !file) notFound()

  return (
    <ReadingChapterList
      backHref="/dashboard/reading/summary"
      backLabel="Volver al resumen"
      eyebrow={specialty.name}
      title="Resumen"
      items={file.chapters.map((chapter) => ({
        href: `/dashboard/reading/summary/${specialtySlug}/${publicSlug(chapter.slug)}`,
        order: chapter.order,
        title: chapter.title,
      }))}
    />
  )
}

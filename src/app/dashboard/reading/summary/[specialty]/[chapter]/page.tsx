import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReadingChapter } from '@/components/reading-chapter'
import { getSpecialty, specialties } from '@/lib/content'
import { findReadingChapter, getFirstChapterOfNextSpecialty, getReading } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'

export function generateStaticParams() {
  return specialties.flatMap((specialty) => {
    const file = getReading(specialty.slug, 'summary')
    return file
      ? file.chapters.map((chapter) => ({
          specialty: specialty.slug,
          chapter: publicSlug(chapter.slug),
        }))
      : []
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string; chapter: string }>
}): Promise<Metadata> {
  const { specialty, chapter: chapterSlug } = await params
  const file = getReading(specialty, 'summary')
  const chapter = file ? findReadingChapter(file, chapterSlug) : undefined
  return { title: chapter?.title ?? 'Resumen' }
}

export default async function SummaryChapterPage({
  params,
}: {
  params: Promise<{ specialty: string; chapter: string }>
}) {
  const { specialty: specialtySlug, chapter: chapterSlug } = await params
  const specialty = getSpecialty(specialtySlug)
  const file = getReading(specialtySlug, 'summary')
  if (!specialty || !file) notFound()

  const chapter = findReadingChapter(file, chapterSlug)
  if (!chapter) notFound()

  const index = file.chapters.indexOf(chapter)
  const previous = file.chapters[index - 1]
  const next = file.chapters[index + 1]
  const nextSpecialty = next
    ? undefined
    : getFirstChapterOfNextSpecialty(specialtySlug, 'summary')
  const sourceHref = `/dashboard/reading/summary/${specialtySlug}/${publicSlug(chapter.slug)}`

  return (
    <ReadingChapter
      backHref={`/dashboard/reading/summary/${specialtySlug}`}
      backLabel="Volver al resumen"
      eyebrow={specialty.name}
      title={chapter.title}
      markdown={chapter.markdown}
      sourceHref={sourceHref}
      previous={
        previous
          ? {
              href: `/dashboard/reading/summary/${specialtySlug}/${publicSlug(previous.slug)}`,
              label: 'Anterior',
            }
          : undefined
      }
      next={
        next
          ? {
              href: `/dashboard/reading/summary/${specialtySlug}/${publicSlug(next.slug)}`,
              label: 'Siguiente',
            }
          : nextSpecialty
            ? {
                href: `/dashboard/reading/summary/${nextSpecialty.specialty.slug}/${publicSlug(nextSpecialty.chapter.slug)}`,
                label: nextSpecialty.specialty.name,
              }
            : undefined
      }
    />
  )
}

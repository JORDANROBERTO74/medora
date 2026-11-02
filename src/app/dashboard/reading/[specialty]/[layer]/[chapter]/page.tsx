import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReadingChapter } from '@/components/reading-chapter'
import { getSpecialty } from '@/lib/content'
import { findReadingChapter, getReading, getReadingSpecialties } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'

const LAYERS = ['lectura', 'resumen'] as const
type Layer = (typeof LAYERS)[number]

const LABEL: Record<Layer, string> = { lectura: 'Lectura', resumen: 'Resumen' }

export function generateStaticParams() {
  return getReadingSpecialties().flatMap((specialty) => {
    const slug = publicSlug(specialty.slug)
    return LAYERS.flatMap((layer) => {
      const file = getReading(slug, layer)
      if (!file) return []
      return file.chapters.map((chapter) => ({
        specialty: slug,
        layer,
        chapter: publicSlug(chapter.slug),
      }))
    })
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string; layer: string; chapter: string }>
}): Promise<Metadata> {
  const { specialty: slug, layer, chapter: chapterSlug } = await params
  const file = getReading(slug, LAYERS.includes(layer as Layer) ? (layer as Layer) : 'lectura')
  const chapter = file ? findReadingChapter(file, chapterSlug) : undefined
  return { title: chapter?.title ?? 'Lectura' }
}

export default async function ReadingChapterPage({
  params,
}: {
  params: Promise<{ specialty: string; layer: string; chapter: string }>
}) {
  const { specialty: specialtySlug, layer, chapter: chapterSlug } = await params
  if (!LAYERS.includes(layer as Layer)) notFound()

  const file = getReading(specialtySlug, layer as Layer)
  if (!file) notFound()

  const chapter = findReadingChapter(file, chapterSlug)
  if (!chapter) notFound()

  const index = file.chapters.indexOf(chapter)
  const previous = file.chapters[index - 1]
  const next = file.chapters[index + 1]
  const name = getSpecialty(specialtySlug)?.name ?? specialtySlug

  return (
    <ReadingChapter
      backHref={`/dashboard/reading/${specialtySlug}/${layer}`}
      backLabel={`Volver a ${LABEL[layer as Layer].toLowerCase()}`}
      eyebrow={name}
      title={chapter.title}
      markdown={chapter.markdown}
      previous={
        previous
          ? {
              href: `/dashboard/reading/${specialtySlug}/${layer}/${publicSlug(previous.slug)}`,
              label: 'Anterior',
            }
          : undefined
      }
      next={
        next
          ? {
              href: `/dashboard/reading/${specialtySlug}/${layer}/${publicSlug(next.slug)}`,
              label: 'Siguiente',
            }
          : undefined
      }
    />
  )
}

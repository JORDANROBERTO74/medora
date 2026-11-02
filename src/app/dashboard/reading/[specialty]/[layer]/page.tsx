import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReadingChapterList } from '@/components/reading-chapter-list'
import { getSpecialty } from '@/lib/content'
import { getReading, getReadingSpecialties } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'

const LAYERS = ['lectura', 'resumen'] as const
type Layer = (typeof LAYERS)[number]

const LABEL: Record<Layer, string> = { lectura: 'Lectura', resumen: 'Resumen' }

export function generateStaticParams() {
  return getReadingSpecialties().flatMap((specialty) => {
    const slug = publicSlug(specialty.slug)
    return LAYERS.filter((layer) => getReading(slug, layer) !== null).map((layer) => ({
      specialty: slug,
      layer,
    }))
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string; layer: string }>
}): Promise<Metadata> {
  const { specialty: slug, layer } = await params
  const name = getSpecialty(slug)?.name ?? slug
  return { title: `${LABEL[layer as Layer] ?? 'Lectura'} · ${name}` }
}

export default async function ReadingLayerPage({
  params,
}: {
  params: Promise<{ specialty: string; layer: string }>
}) {
  const { specialty: specialtySlug, layer } = await params
  if (!LAYERS.includes(layer as Layer)) notFound()

  const file = getReading(specialtySlug, layer as Layer)
  if (!file) notFound()

  const name = getSpecialty(specialtySlug)?.name ?? specialtySlug

  return (
    <ReadingChapterList
      backHref="/dashboard/reading"
      backLabel="Volver a lectura"
      eyebrow={name}
      title={LABEL[layer as Layer]}
      items={file.chapters.map((chapter) => ({
        href: `/dashboard/reading/${specialtySlug}/${layer}/${publicSlug(chapter.slug)}`,
        order: chapter.order,
        title: chapter.title,
      }))}
    />
  )
}

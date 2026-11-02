import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReadingChapterList } from '@/components/reading-chapter-list'
import { getRepaso } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'

export const metadata: Metadata = {
  title: 'Repaso',
}

export default function RepasoIndexPage() {
  const file = getRepaso()
  if (!file) notFound()

  return (
    <ReadingChapterList
      backHref="/dashboard/reading"
      backLabel="Volver a lectura"
      eyebrow="Transversal"
      title="Repaso"
      items={file.chapters.map((chapter) => ({
        href: `/dashboard/reading/repaso/${publicSlug(chapter.slug)}`,
        order: chapter.order,
        title: chapter.title,
      }))}
    />
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReadingChapterList } from '@/components/reading-chapter-list'
import { getReview } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'

export const metadata: Metadata = {
  title: 'Repaso',
}

export default function ReviewIndexPage() {
  const file = getReview()
  if (!file) notFound()

  return (
    <ReadingChapterList
      backHref="/dashboard"
      backLabel="Volver al inicio"
      eyebrow="Transversal"
      title="Repaso"
      items={file.chapters.map((chapter) => ({
        href: `/dashboard/reading/review/${publicSlug(chapter.slug)}`,
        order: chapter.order,
        title: chapter.title,
      }))}
    />
  )
}

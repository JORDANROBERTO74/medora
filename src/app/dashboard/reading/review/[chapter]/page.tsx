import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReadingChapter } from '@/components/reading-chapter'
import { findReadingChapter, getReview } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'

export function generateStaticParams() {
  return (getReview()?.chapters ?? []).map((chapter) => ({
    chapter: publicSlug(chapter.slug),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string }>
}): Promise<Metadata> {
  const { chapter: chapterSlug } = await params
  const file = getReview()
  const chapter = file ? findReadingChapter(file, chapterSlug) : undefined
  return { title: chapter?.title ?? 'Repaso' }
}

export default async function ReviewChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>
}) {
  const { chapter: chapterSlug } = await params
  const file = getReview()
  if (!file) notFound()

  const chapter = findReadingChapter(file, chapterSlug)
  if (!chapter) notFound()

  const index = file.chapters.indexOf(chapter)
  const previous = file.chapters[index - 1]
  const next = file.chapters[index + 1]

  return (
    <ReadingChapter
      backHref="/dashboard/reading/review"
      backLabel="Volver al repaso"
      eyebrow="Transversal"
      title={chapter.title}
      markdown={chapter.markdown}
      sourceHref={`/dashboard/reading/review/${publicSlug(chapter.slug)}`}
      previous={
        previous
          ? { href: `/dashboard/reading/review/${publicSlug(previous.slug)}`, label: 'Anterior' }
          : undefined
      }
      next={
        next
          ? { href: `/dashboard/reading/review/${publicSlug(next.slug)}`, label: 'Siguiente' }
          : undefined
      }
    />
  )
}

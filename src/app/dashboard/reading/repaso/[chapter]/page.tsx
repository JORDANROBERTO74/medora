import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReadingChapter } from '@/components/reading-chapter'
import { findReadingChapter, getRepaso } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'

export function generateStaticParams() {
  return (getRepaso()?.chapters ?? []).map((chapter) => ({
    chapter: publicSlug(chapter.slug),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string }>
}): Promise<Metadata> {
  const { chapter: chapterSlug } = await params
  const file = getRepaso()
  const chapter = file ? findReadingChapter(file, chapterSlug) : undefined
  return { title: chapter?.title ?? 'Repaso' }
}

export default async function RepasoChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>
}) {
  const { chapter: chapterSlug } = await params
  const file = getRepaso()
  if (!file) notFound()

  const chapter = findReadingChapter(file, chapterSlug)
  if (!chapter) notFound()

  const index = file.chapters.indexOf(chapter)
  const previous = file.chapters[index - 1]
  const next = file.chapters[index + 1]

  return (
    <ReadingChapter
      backHref="/dashboard/reading/repaso"
      backLabel="Volver a repaso"
      eyebrow="Transversal"
      title={chapter.title}
      markdown={chapter.markdown}
      previous={
        previous
          ? { href: `/dashboard/reading/repaso/${publicSlug(previous.slug)}`, label: 'Anterior' }
          : undefined
      }
      next={
        next
          ? { href: `/dashboard/reading/repaso/${publicSlug(next.slug)}`, label: 'Siguiente' }
          : undefined
      }
    />
  )
}

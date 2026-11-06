import { specialties, type SpecialtySlug } from '@/lib/content'
import type { ProgressEntry, ReadingCatalogEntry, RepasoChapter } from './types'

export function lessonKey(categorySlug: string, topicSlug: string): string {
  return `lesson:${categorySlug}/${topicSlug}`
}

export type SpecialtyProgress = {
  slug: SpecialtySlug
  name: string
  completed: number
  total: number
  percent: number
}

export type ProgressSummary = {
  completed: number
  total: number
  percent: number
  bySpecialty: SpecialtyProgress[]
}

function percent(completed: number, total: number): number {
  return total === 0 ? 0 : Math.round((completed / total) * 100)
}

/** Progress counts the 49 apuntes of the four specialties; radiology notes stay out. */
export function buildProgressSummary(progress: ProgressEntry[]): ProgressSummary {
  const done = new Set(
    progress
      .filter((entry) => entry.contentType === 'lesson')
      .map((entry) => entry.contentKey)
  )

  const bySpecialty = specialties.map((specialty) => {
    const total = specialty.topics.length
    const completed = specialty.topics.filter((topic) =>
      done.has(lessonKey(specialty.slug, topic.slug))
    ).length

    return {
      slug: specialty.slug,
      name: specialty.name,
      completed,
      total,
      percent: percent(completed, total),
    }
  })

  const completed = bySpecialty.reduce((sum, item) => sum + item.completed, 0)
  const total = bySpecialty.reduce((sum, item) => sum + item.total, 0)

  return { completed, total, percent: percent(completed, total), bySpecialty }
}

export type NextStudyTask =
  | { kind: 'reading' | 'apunte' | 'book'; href: string; title: string; context: string }
  | { kind: 'done' }

/** Reading progress keys are `reading:<href>`. */
function readingHref(key: string): string {
  return key.slice('reading:'.length)
}

/**
 * What home suggests next, in order: the main reading book, then the apuntes,
 * then the repaso books. Only when everything is read does it report `done`.
 */
export function nextStudyTask(
  progress: ProgressEntry[],
  readingCatalog: ReadingCatalogEntry[],
  repasoCatalog: RepasoChapter[]
): NextStudyTask {
  const readingDone = new Set(
    progress.filter((entry) => entry.contentType === 'reading').map((entry) => entry.contentKey)
  )
  const lessonDone = new Set(
    progress.filter((entry) => entry.contentType === 'lesson').map((entry) => entry.contentKey)
  )

  for (const specialty of readingCatalog) {
    const chapter = specialty.chapters.find((item) => !readingDone.has(item.key))
    if (chapter) {
      return {
        kind: 'reading',
        href: readingHref(chapter.key),
        title: chapter.title,
        context: specialties.find((item) => item.slug === specialty.slug)?.name ?? specialty.slug,
      }
    }
  }

  for (const specialty of specialties) {
    for (const topic of specialty.topics) {
      if (!lessonDone.has(lessonKey(specialty.slug, topic.slug))) {
        return {
          kind: 'apunte',
          href: `/dashboard/lesson/${specialty.slug}/${topic.slug}`,
          title: topic.name,
          context: specialty.name,
        }
      }
    }
  }

  const chapter = repasoCatalog.find((item) => !readingDone.has(item.key))
  if (chapter) {
    return {
      kind: 'book',
      href: readingHref(chapter.key),
      title: chapter.title,
      context: chapter.book,
    }
  }

  return { kind: 'done' }
}

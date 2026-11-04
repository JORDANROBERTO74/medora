import { specialties, type SpecialtySlug } from '@/lib/content'
import type { ProgressEntry } from './types'

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

export type NextReview = {
  href: string
  topicName: string
  specialtyName: string
  /** True when every apunte is done and this is a free re-read. */
  allDone: boolean
}

/** First apunte not reviewed yet; falls back to the first one as a free re-read. */
export function nextReview(progress: ProgressEntry[]): NextReview | undefined {
  const done = new Set(
    progress
      .filter((entry) => entry.contentType === 'lesson')
      .map((entry) => entry.contentKey)
  )

  for (const specialty of specialties) {
    for (const topic of specialty.topics) {
      if (!done.has(lessonKey(specialty.slug, topic.slug))) {
        return {
          href: `/dashboard/lesson/${specialty.slug}/${topic.slug}`,
          topicName: topic.name,
          specialtyName: specialty.name,
          allDone: false,
        }
      }
    }
  }

  const specialty = specialties[0]
  const topic = specialty?.topics[0]
  if (!specialty || !topic) return undefined

  return {
    href: `/dashboard/lesson/${specialty.slug}/${topic.slug}`,
    topicName: topic.name,
    specialtyName: specialty.name,
    allDone: true,
  }
}

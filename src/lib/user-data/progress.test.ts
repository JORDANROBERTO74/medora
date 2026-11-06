import { describe, expect, it } from 'vitest'
import { specialties } from '@/lib/content'
import {
  buildProgressSummary,
  lessonKey,
  nextStudyTask,
} from './progress'
import type { ProgressEntry, ReadingCatalogEntry, RepasoChapter } from './types'

const CATALOG: ReadingCatalogEntry[] = [
  {
    slug: 'internal-medicine',
    chapters: [
      { key: 'reading:/dashboard/reading/internal-medicine/tuberculosis', title: 'Tuberculosis' },
      { key: 'reading:/dashboard/reading/internal-medicine/rabia', title: 'Rabia' },
    ],
  },
]

const REPASO: RepasoChapter[] = [
  {
    key: 'reading:/dashboard/reading/summary/internal-medicine/tuberculosis',
    title: 'Tuberculosis',
    book: 'Compendio Clínico',
  },
]

function entry(type: ProgressEntry['contentType'], key: string): ProgressEntry {
  return { contentType: type, contentKey: key, completedAt: '2026-11-04T12:00:00.000Z' }
}

describe('buildProgressSummary', () => {
  it('counts the four specialties and nothing else', () => {
    const summary = buildProgressSummary([])
    expect(specialties.map((item) => item.topics.length)).toEqual([33, 6, 5, 5])
    expect(summary.total).toBe(49)
    expect(summary.completed).toBe(0)
    expect(summary.percent).toBe(0)
    expect(summary.bySpecialty.map((item) => item.percent)).toEqual([0, 0, 0, 0])
  })

  it('reaches 100% when every apunte is reviewed', () => {
    const all = specialties.flatMap((specialty) =>
      specialty.topics.map((topic) => entry('lesson', lessonKey(specialty.slug, topic.slug)))
    )
    const summary = buildProgressSummary(all)
    expect(summary.completed).toBe(49)
    expect(summary.percent).toBe(100)
    expect(summary.bySpecialty.every((item) => item.percent === 100)).toBe(true)
  })

  it('rounds the overall percentage and tracks each specialty', () => {
    const summary = buildProgressSummary([
      entry('lesson', lessonKey('internal-medicine', 'cushing-triad')),
      entry('lesson', lessonKey('pediatrics', 'dehydration')),
    ])
    expect(summary.completed).toBe(2)
    expect(summary.percent).toBe(Math.round((2 / 49) * 100))
    expect(summary.bySpecialty.find((item) => item.slug === 'internal-medicine')?.completed).toBe(1)
    expect(summary.bySpecialty.find((item) => item.slug === 'pediatrics')?.completed).toBe(1)
  })

  it('ignores radiology notes and non-lesson activity', () => {
    const summary = buildProgressSummary([
      entry('lesson', lessonKey('radiology', 'ct-densities')),
      entry('reading', 'reading:pediatrics/dehydration'),
      entry('quiz', 'quiz:pediatrics'),
    ])
    expect(summary.completed).toBe(0)
    expect(summary.total).toBe(49)
  })
})

describe('nextStudyTask', () => {
  const allReading = CATALOG.flatMap((specialty) =>
    specialty.chapters.map((chapter) => entry('reading', chapter.key))
  )
  const allLessons = specialties.flatMap((specialty) =>
    specialty.topics.map((topic) => entry('lesson', lessonKey(specialty.slug, topic.slug)))
  )

  it('starts with the first chapter of the main reading book', () => {
    expect(nextStudyTask([], CATALOG, REPASO)).toEqual({
      kind: 'reading',
      href: '/dashboard/reading/internal-medicine/tuberculosis',
      title: 'Tuberculosis',
      context: 'Medicina Interna / Semiología',
    })
  })

  it('skips read chapters before moving to the apuntes', () => {
    const next = nextStudyTask([entry('reading', CATALOG[0].chapters[0].key)], CATALOG, REPASO)
    expect(next).toMatchObject({ kind: 'reading', title: 'Rabia' })
  })

  it('suggests the first pending apunte once the reading is done', () => {
    const next = nextStudyTask(allReading, CATALOG, REPASO)
    expect(next).toEqual({
      kind: 'apunte',
      href: '/dashboard/lesson/internal-medicine/cushing-triad',
      title: 'Tríada de Cushing',
      context: 'Medicina Interna / Semiología',
    })
  })

  it('falls back to the repaso books once apuntes are done too', () => {
    const next = nextStudyTask([...allReading, ...allLessons], CATALOG, REPASO)
    expect(next).toEqual({
      kind: 'book',
      href: '/dashboard/reading/summary/internal-medicine/tuberculosis',
      title: 'Tuberculosis',
      context: 'Compendio Clínico',
    })
  })

  it('reports done when every book and apunte is read', () => {
    const next = nextStudyTask(
      [...allReading, ...allLessons, entry('reading', REPASO[0].key)],
      CATALOG,
      REPASO
    )
    expect(next).toEqual({ kind: 'done' })
  })
})

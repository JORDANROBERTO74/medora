import { describe, expect, it } from 'vitest'
import { specialties } from '@/lib/content'
import {
  buildProgressSummary,
  lessonKey,
  nextReview,
} from './progress'
import type { ProgressEntry } from './types'

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

describe('nextReview', () => {
  it('starts at the first apunte', () => {
    const next = nextReview([])
    expect(next?.href).toBe('/dashboard/lesson/internal-medicine/cushing-triad')
    expect(next?.allDone).toBe(false)
  })

  it('skips reviewed apuntes', () => {
    const next = nextReview([
      entry('lesson', lessonKey('internal-medicine', 'cushing-triad')),
      entry('lesson', lessonKey('internal-medicine', 'arterial-hypertension')),
    ])
    expect(next?.href).toBe('/dashboard/lesson/internal-medicine/charcot-triad-multiple-sclerosis')
    expect(next?.allDone).toBe(false)
  })

  it('falls back to a free re-read once everything is reviewed', () => {
    const all = specialties.flatMap((specialty) =>
      specialty.topics.map((topic) => entry('lesson', lessonKey(specialty.slug, topic.slug)))
    )
    const next = nextReview(all)
    expect(next?.allDone).toBe(true)
    expect(next?.href).toBe('/dashboard/lesson/internal-medicine/cushing-triad')
  })
})

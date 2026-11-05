import { describe, expect, it } from 'vitest'
import {
  achievementCounts,
  computeAchievements,
  type Achievement,
  type SpecialtyCatalogEntry,
} from './achievements'
import { specialties } from './content'
import { clinicalCases } from './cases'
import type { PersonalNote } from './notes/personal-notes'
import { lessonKey } from './user-data/progress'
import type { ProgressEntry, CaseStats, QuizStats, UserData } from './user-data/types'

const NO_RESULTS: QuizStats = { rounds: 0, questions: 0, correct: 0, stars: 0, best: 0 }
const NO_CASES: CaseStats = { solved: 0, attempts: 0, correct: 0, firstTry: 0 }

const EMPTY: UserData = {
  notes: [],
  progress: [],
  studyDays: [],
  results: NO_RESULTS,
  cases: NO_CASES,
  achievements: [],
}

/** Mirrors what the dashboard layout builds on the server. */
const CATALOG: SpecialtyCatalogEntry[] = specialties.map((specialty) => ({
  slug: specialty.slug,
  name: specialty.name,
  topics: specialty.topics.length,
  quizzes: 10,
  cases: clinicalCases.filter((item) => item.specialtySlug === specialty.slug).length,
}))

function withData(overrides: Partial<UserData>): UserData {
  return { ...EMPTY, ...overrides }
}

function makeNotes(count: number): PersonalNote[] {
  return Array.from({ length: count }, (_, index) => ({
    id: String(index),
    text: `nota ${index}`,
    createdAt: index,
  }))
}

function makeProgress(
  count: number,
  contentType: ProgressEntry['contentType'],
  prefix: string
): ProgressEntry[] {
  return Array.from({ length: count }, (_, index) => ({
    contentType,
    contentKey: `${prefix}:${index}`,
    completedAt: '2026-11-04T00:00:00.000Z',
  }))
}

const run = (data: UserData, streak = 0, recorded: string[] = []) =>
  computeAchievements({ data, streak, catalog: CATALOG }, new Set(recorded))

const unlockedIds = (list: Achievement[]): string[] =>
  list.filter((item) => item.unlocked).map((item) => item.id)

const GENERAL_COUNT = 37

describe('computeAchievements', () => {
  it('computes 37 general achievements plus 3 per specialty', () => {
    const list = run(EMPTY)
    expect(list).toHaveLength(GENERAL_COUNT + CATALOG.length * 3)
    expect(achievementCounts(list)).toEqual({
      unlocked: 0,
      total: GENERAL_COUNT + CATALOG.length * 3,
    })
  })

  it('has no duplicate ids', () => {
    const ids = run(EMPTY).map((item) => item.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('unlocks streak tiers independently', () => {
    expect(unlockedIds(run(EMPTY, 7)).sort()).toEqual(['streak-3', 'streak-7'])
    expect(unlockedIds(run(EMPTY, 30)).sort()).toEqual([
      'streak-14',
      'streak-3',
      'streak-30',
      'streak-7',
    ])
  })

  it('keeps an achievement unlocked after the metric drops, thanks to the record', () => {
    // A 30-day streak that broke: the derived rule says no, the saved row says yes.
    const list = run(EMPTY, 0, ['streak-30'])
    const streak30 = list.find((item) => item.id === 'streak-30')
    expect(streak30?.unlocked).toBe(true)
    expect(list.find((item) => item.id === 'streak-14')?.unlocked).toBe(false)
  })

  it('unlocks volume tiers at their thresholds', () => {
    const list = run(withData({ results: { ...NO_RESULTS, rounds: 25, questions: 100, stars: 50 } }))
    const ids = unlockedIds(list)
    expect(ids).toEqual(
      expect.arrayContaining([
        'questions-10',
        'questions-50',
        'questions-100',
        'rounds-5',
        'rounds-25',
        'stars-10',
        'stars-50',
      ])
    )
    expect(ids).not.toContain('questions-500')
    expect(ids).not.toContain('rounds-50')
    expect(ids).not.toContain('stars-100')
  })

  it('requires a 50-question sample before accuracy counts', () => {
    const small = run(withData({ results: { ...NO_RESULTS, questions: 10, correct: 10 } }))
    expect(unlockedIds(small)).not.toContain('accuracy-80')

    const enough = run(withData({ results: { ...NO_RESULTS, questions: 50, correct: 46 } }))
    expect(unlockedIds(enough)).toEqual(expect.arrayContaining(['accuracy-80', 'accuracy-90']))
    expect(unlockedIds(enough)).not.toContain('accuracy-95')
  })

  it('unlocks cases, readings, lessons and notes at their thresholds', () => {
    const list = run(
      withData({
        notes: makeNotes(10),
        progress: [
          ...makeProgress(10, 'lesson', 'lesson'),
          ...makeProgress(10, 'reading', 'reading'),
        ],
        cases: { solved: 5, attempts: 6, correct: 5, firstTry: 4 },
      })
    )
    const ids = unlockedIds(list)
    expect(ids).toEqual(
      expect.arrayContaining([
        'lessons-1',
        'lessons-10',
        'readings-1',
        'readings-10',
        'notes-1',
        'notes-10',
        'cases-1',
        'cases-5',
        'first-correct',
      ])
    )
    expect(ids).not.toContain('lessons-25')
    expect(ids).not.toContain('readings-25')
    expect(ids).not.toContain('notes-25')
    expect(ids).not.toContain('cases-10')
  })

  it('unlocks the per-specialty badge only when every topic is done', () => {
    const specialty = specialties[1]
    const progress = specialty.topics.map<ProgressEntry>((topic) => ({
      contentType: 'lesson',
      contentKey: lessonKey(specialty.slug, topic.slug),
      completedAt: '2026-11-04T00:00:00.000Z',
    }))

    const partial = run(withData({ progress: progress.slice(0, -1) }))
    expect(unlockedIds(partial)).not.toContain(`${specialty.slug}-temas`)

    const complete = run(withData({ progress }))
    expect(unlockedIds(complete)).toContain(`${specialty.slug}-temas`)
    expect(unlockedIds(complete)).not.toContain(`${specialty.slug}-quizzes`)
  })

  it('counts quizzes and cases per specialty from their keys', () => {
    const specialty = specialties[2]
    const quizKeys = Array.from({ length: 10 }, (_, index) => ({
      contentType: 'quiz' as const,
      contentKey: `quiz:${specialty.slug}:quiz-${index}`,
      completedAt: '2026-11-04T00:00:00.000Z',
    }))
    const cases = clinicalCases.filter((item) => item.specialtySlug === specialty.slug)

    const list = run(
      withData({
        progress: [
          ...quizKeys,
          ...cases.map((item) => ({
            contentType: 'case' as const,
            contentKey: `case:${item.id}`,
            completedAt: '2026-11-04T00:00:00.000Z',
          })),
        ],
      })
    )

    const ids = unlockedIds(list)
    expect(ids).toContain(`${specialty.slug}-quizzes`)
    expect(ids).toContain(`${specialty.slug}-casos`)
  })

  it('uses the brain for every per-specialty quiz badge', () => {
    const quizzes = run(EMPTY).filter((item) => item.id.endsWith('-quizzes'))
    expect(quizzes).toHaveLength(CATALOG.length)
    expect(quizzes.every((item) => item.icon === 'brain')).toBe(true)
  })

  it('unlocks the collection tiers from the number of achievements already earned', () => {
    const five = withData({
      notes: makeNotes(1),
      progress: [
        ...makeProgress(1, 'lesson', 'lesson'),
        ...makeProgress(1, 'reading', 'reading'),
      ],
      cases: { solved: 1, attempts: 1, correct: 1, firstTry: 1 },
    })
    const fiveIds = unlockedIds(run(five))
    expect(fiveIds).toContain('achievements-5')
    expect(fiveIds).not.toContain('achievements-10')

    const plenty = withData({
      progress: makeProgress(10, 'lesson', 'lesson'),
      cases: { solved: 10, attempts: 10, correct: 10, firstTry: 8 },
      results: { rounds: 5, questions: 100, correct: 90, stars: 50, best: 5 },
      notes: makeNotes(10),
    })

    const plentyIds = unlockedIds(run(plenty, 30))
    expect(plentyIds).toEqual(expect.arrayContaining(['achievements-5', 'achievements-10']))
    expect(plentyIds).toContain('achievements-20')
  })
})

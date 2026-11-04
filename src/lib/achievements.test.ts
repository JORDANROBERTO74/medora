import { describe, expect, it } from 'vitest'
import { achievementCounts, computeAchievements, type Achievement } from './achievements'
import { specialties } from './content'
import type { PersonalNote } from './notes/personal-notes'
import { lessonKey } from './user-data/progress'
import type { ProgressEntry, QuizStats, UserData } from './user-data/types'

const NO_RESULTS: QuizStats = { rounds: 0, questions: 0, correct: 0, stars: 0, best: 0 }

const EMPTY: UserData = { notes: [], progress: [], studyDays: [], results: NO_RESULTS }

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

const unlockedIds = (list: Achievement[]): string[] =>
  list.filter((item) => item.unlocked).map((item) => item.id)

describe('computeAchievements', () => {
  it('ships twelve achievements and starts with none unlocked', () => {
    const list = computeAchievements(EMPTY, 0)
    expect(list).toHaveLength(12)
    expect(achievementCounts(list)).toEqual({ unlocked: 0, total: 12 })
    expect(unlockedIds(list)).toEqual([])
  })

  it('unlocks each achievement from the data that supports it', () => {
    const list = computeAchievements(
      withData({
        notes: makeNotes(1),
        progress: [...makeProgress(1, 'lesson', 'lesson'), ...makeProgress(1, 'case', 'case')],
        results: { rounds: 1, questions: 5, correct: 3, stars: 3, best: 3 },
      }),
      3
    )

    expect(unlockedIds(list).sort()).toEqual(
      ['first-case', 'first-correct', 'first-lesson', 'first-note', 'streak-3'].sort()
    )
  })

  it('unlocks the streak tiers independently', () => {
    expect(unlockedIds(computeAchievements(EMPTY, 7))).toEqual(['streak-3', 'streak-7'])
    expect(unlockedIds(computeAchievements(EMPTY, 30))).toEqual([
      'streak-3',
      'streak-7',
      'streak-30',
    ])
  })

  it('unlocks ten notes and ten lessons at their thresholds', () => {
    const list = computeAchievements(
      withData({
        notes: makeNotes(10),
        progress: makeProgress(10, 'lesson', 'lesson'),
      }),
      0
    )

    expect(unlockedIds(list)).toEqual(['first-lesson', 'ten-lessons', 'first-note', 'ten-notes'])
  })

  it('unlocks a specialty only when every one of its topics is repasado', () => {
    const specialty = specialties[1]
    const progress = specialty.topics.map<ProgressEntry>((topic) => ({
      contentType: 'lesson',
      contentKey: lessonKey(specialty.slug, topic.slug),
      completedAt: '2026-11-04T00:00:00.000Z',
    }))

    const partial = computeAchievements(
      withData({ progress: progress.slice(0, -1) }),
      0
    )
    expect(unlockedIds(partial)).not.toContain('full-specialty')

    const complete = computeAchievements(withData({ progress }), 0)
    expect(unlockedIds(complete)).toContain('full-specialty')
  })

  it('unlocks a perfect round only at the maximum rating', () => {
    const almost = computeAchievements(
      withData({ results: { rounds: 1, questions: 5, correct: 4, stars: 4, best: 4 } }),
      0
    )
    expect(unlockedIds(almost)).not.toContain('perfect-round')

    const perfect = computeAchievements(
      withData({ results: { rounds: 1, questions: 5, correct: 5, stars: 5, best: 5 } }),
      0
    )
    expect(unlockedIds(perfect)).toContain('perfect-round')
  })
})

import { describe, expect, it } from 'vitest'
import { buildCaseStats, buildQuizStats, type ResultRow } from './stats'

const row = (overrides: Partial<ResultRow> = {}): ResultRow => ({
  contentType: 'quiz',
  contentKey: 'quiz:internal-medicine',
  correct: 3,
  total: 5,
  stars: 3,
  createdAt: '2026-11-04T10:00:00.000Z',
  ...overrides,
})

const caseRow = (contentKey: string, correct: number, createdAt: string): ResultRow =>
  row({
    contentType: 'case',
    contentKey,
    correct,
    total: 1,
    stars: correct >= 1 ? 5 : 0,
    createdAt,
  })

describe('buildQuizStats', () => {
  it('ignores case attempts', () => {
    const stats = buildQuizStats([row(), caseRow('case:a', 1, '2026-11-04T09:00:00.000Z')])

    expect(stats).toEqual({ rounds: 1, questions: 5, correct: 3, stars: 3, best: 3 })
  })

  it('keeps the best round', () => {
    const stats = buildQuizStats([
      row({ correct: 3, stars: 3 }),
      row({ contentKey: 'quiz:random', correct: 5, stars: 5 }),
    ])

    expect(stats.best).toBe(5)
    expect(stats.rounds).toBe(2)
  })
})

describe('buildCaseStats', () => {
  it('starts empty', () => {
    expect(buildCaseStats([])).toEqual({ solved: 0, attempts: 0, correct: 0, firstTry: 0 })
  })

  it('counts distinct cases, attempts and first-try hits', () => {
    const stats = buildCaseStats([
      caseRow('case:a', 0, '2026-11-04T10:00:00.000Z'),
      caseRow('case:a', 1, '2026-11-04T11:00:00.000Z'),
      caseRow('case:b', 1, '2026-11-04T09:00:00.000Z'),
      row(),
    ])

    expect(stats).toEqual({ solved: 2, attempts: 3, correct: 2, firstTry: 1 })
  })

  it('never turns a retry into a first-try hit', () => {
    const stats = buildCaseStats([
      caseRow('case:a', 0, '2026-11-04T10:00:00.000Z'),
      caseRow('case:a', 1, '2026-11-04T12:00:00.000Z'),
    ])

    expect(stats.solved).toBe(1)
    expect(stats.correct).toBe(1)
    expect(stats.firstTry).toBe(0)
  })
})

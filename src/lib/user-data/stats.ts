import type { RoundContentType } from '@/lib/supabase/database.types'
import type { CaseStats, QuizStats } from './types'

/** One row of `user_quiz_results`, already flattened for the builders. */
export type ResultRow = {
  contentType: RoundContentType
  contentKey: string
  correct: number
  total: number
  stars: number
  createdAt: string
}

export const EMPTY_QUIZ_STATS: QuizStats = {
  rounds: 0,
  questions: 0,
  correct: 0,
  stars: 0,
  best: 0,
}

export const EMPTY_CASE_STATS: CaseStats = {
  solved: 0,
  attempts: 0,
  correct: 0,
  firstTry: 0,
}

export function buildQuizStats(rows: readonly ResultRow[]): QuizStats {
  let stats: QuizStats = { ...EMPTY_QUIZ_STATS }

  for (const row of rows) {
    if (row.contentType !== 'quiz') continue
    stats = {
      rounds: stats.rounds + 1,
      questions: stats.questions + row.total,
      correct: stats.correct + row.correct,
      stars: stats.stars + row.stars,
      best: Math.max(stats.best, row.stars),
    }
  }

  return stats
}

export function buildCaseStats(rows: readonly ResultRow[]): CaseStats {
  const attempts = rows.filter((row) => row.contentType === 'case')
  if (attempts.length === 0) return { ...EMPTY_CASE_STATS }

  // First attempt per case: the oldest row wins, so a later retry cannot turn
  // a miss into "acertado a la primera".
  const firstAttempt = new Map<string, ResultRow>()
  for (const row of [...attempts].sort((a, b) => a.createdAt.localeCompare(b.createdAt))) {
    if (!firstAttempt.has(row.contentKey)) firstAttempt.set(row.contentKey, row)
  }

  const right = (row: ResultRow) => row.correct >= row.total

  return {
    solved: firstAttempt.size,
    attempts: attempts.length,
    correct: attempts.filter(right).length,
    firstTry: [...firstAttempt.values()].filter(right).length,
  }
}

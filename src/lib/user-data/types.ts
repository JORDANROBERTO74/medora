import type { PersonalNote } from '@/lib/notes/personal-notes'
import type { ProgressContentType } from '@/lib/supabase/database.types'

export type ProgressEntry = {
  contentType: ProgressContentType
  contentKey: string
  completedAt: string
}

/**
 * Derived from every recorded round, so "re-take" stays in the totals the way
 * a study log should. Average stars = stars / rounds.
 */
export type QuizStats = {
  rounds: number
  questions: number
  correct: number
  stars: number
  /** Best round so far, 0–5. */
  best: number
}

/** Everything the dashboard needs, loaded once per app load. */
export type UserData = {
  notes: PersonalNote[]
  progress: ProgressEntry[]
  /** Study days as YYYY-MM-DD, ordered oldest first. */
  studyDays: string[]
  results: QuizStats
}

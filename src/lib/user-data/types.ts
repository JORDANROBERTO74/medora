import type { PersonalNote } from '@/lib/notes/personal-notes'
import type { ProgressContentType } from '@/lib/supabase/database.types'

export type ProgressEntry = {
  contentType: ProgressContentType
  contentKey: string
  completedAt: string
}

/**
 * Quiz rounds only. Case attempts are kept apart (`CaseStats`) because a case
 * is a one-question round: mixing them turned the average star rating into a
 * pile of 5★/0★ values.
 */
export type QuizStats = {
  rounds: number
  questions: number
  correct: number
  stars: number
  /** Best quiz round so far, 0–5. */
  best: number
}

export type CaseStats = {
  /** Cases answered at least once. */
  solved: number
  /** Answers submitted across every attempt. */
  attempts: number
  /** Attempts that got the diagnosis right. */
  correct: number
  /** Cases right on the very first attempt. */
  firstTry: number
}

/** Everything the dashboard needs, loaded once per app load. */
export type UserData = {
  notes: PersonalNote[]
  progress: ProgressEntry[]
  /** Study days as YYYY-MM-DD, ordered oldest first. */
  studyDays: string[]
  results: QuizStats
  cases: CaseStats
  /** Persisted unlocks; `seenAt` null means the user has not opened Progreso yet. */
  achievements: AchievementRecord[]
}

export type AchievementRecord = {
  id: string
  seenAt: string | null
}

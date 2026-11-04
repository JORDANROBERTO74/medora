import { cache } from 'react'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database, ThemePreference } from '@/lib/supabase/database.types'
import type { ProgressEntry, QuizStats, UserData } from './types'
import { NOTE_COLUMNS, toNote } from './note-row'

type Client = SupabaseClient<Database>

const EMPTY_STATS: QuizStats = { rounds: 0, questions: 0, correct: 0, stars: 0, best: 0 }

/** One round trip per request, deduped across components in that request. */
export const getUserData = cache(
  async (supabase: Client, userId: string): Promise<UserData> => {
    const [notes, progress, days, rounds] = await Promise.all([
      supabase
        .from('user_notes')
        .select(NOTE_COLUMNS)
        .eq('user_id', userId)
        .order('created_at', { ascending: false }),
      supabase
        .from('user_progress')
        .select('content_type,content_key,completed_at')
        .eq('user_id', userId),
      supabase
        .from('user_study_days')
        .select('day')
        .eq('user_id', userId)
        .order('day', { ascending: true }),
      supabase
        .from('user_quiz_results')
        .select('correct,total,stars')
        .eq('user_id', userId),
    ])

    const failure = notes.error ?? progress.error ?? days.error ?? rounds.error
    if (failure) throw new Error(`No se pudo cargar tu progreso: ${failure.message}`)

    const progressEntries: ProgressEntry[] = (progress.data ?? []).map((row) => ({
      contentType: row.content_type,
      contentKey: row.content_key,
      completedAt: row.completed_at,
    }))

    const results: QuizStats = (rounds.data ?? []).reduce<QuizStats>(
      (stats, row) => ({
        rounds: stats.rounds + 1,
        questions: stats.questions + row.total,
        correct: stats.correct + row.correct,
        stars: stats.stars + row.stars,
        best: Math.max(stats.best, row.stars),
      }),
      { ...EMPTY_STATS }
    )

    return {
      notes: (notes.data ?? []).map(toNote),
      progress: progressEntries,
      studyDays: (days.data ?? []).map((row) => row.day),
      results,
    }
  }
)

/** Absent row means "system" until the user picks a theme. */
export const getUserTheme = cache(
  async (supabase: Client, userId: string): Promise<ThemePreference> => {
    const { data, error } = await supabase
      .from('user_preferences')
      .select('theme')
      .eq('user_id', userId)
      .maybeSingle()

    if (error) throw new Error(`No se pudo leer tu preferencia: ${error.message}`)
    return data?.theme ?? 'system'
  }
)

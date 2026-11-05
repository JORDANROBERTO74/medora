import { cache } from 'react'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database, ThemePreference } from '@/lib/supabase/database.types'
import type { ProgressEntry, UserData } from './types'
import { NOTE_COLUMNS, toNote } from './note-row'
import { buildCaseStats, buildQuizStats, type ResultRow } from './stats'

type Client = SupabaseClient<Database>

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
        .select('content_type,content_key,correct,total,stars,created_at')
        .eq('user_id', userId)
        .order('created_at', { ascending: true }),
    ])

    const failure = notes.error ?? progress.error ?? days.error ?? rounds.error
    if (failure) throw new Error(`No se pudo cargar tu progreso: ${failure.message}`)

    const progressEntries: ProgressEntry[] = (progress.data ?? []).map((row) => ({
      contentType: row.content_type,
      contentKey: row.content_key,
      completedAt: row.completed_at,
    }))

    const resultRows: ResultRow[] = (rounds.data ?? []).map((row) => ({
      contentType: row.content_type,
      contentKey: row.content_key,
      correct: row.correct,
      total: row.total,
      stars: row.stars,
      createdAt: row.created_at,
    }))

    return {
      notes: (notes.data ?? []).map(toNote),
      progress: progressEntries,
      studyDays: (days.data ?? []).map((row) => row.day),
      results: buildQuizStats(resultRows),
      cases: buildCaseStats(resultRows),
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

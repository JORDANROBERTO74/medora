'use server'

import { getAuthUser } from '@/lib/supabase/server'
import { tooManyAttempts } from '@/lib/auth/errors'
import { rateLimitAsync } from '@/lib/auth/rate-limit'
import { starsFor } from '@/lib/quiz'
import type { ProgressContentType } from '@/lib/supabase/database.types'
import type { PersonalNote } from '@/lib/notes/personal-notes'
import { setThemeCookie } from '@/lib/theme-cookie'
import { NOTE_COLUMNS, toNote } from './note-row'
import {
  activitySchema,
  importNotesSchema,
  noteIdSchema,
  noteInputSchema,
  noteUpdateSchema,
  roundResultSchema,
  themeSchema,
  type ActionResult,
} from './schemas'

const SAVE_FAILED = 'No se pudo guardar. Inténtalo de nuevo.'
/** A round is a handful of answers; anything faster than this is a script. */
const ROUND_LIMIT = { limit: 30, windowMs: 60 * 1000 }

export async function saveThemeAction(input: unknown): Promise<ActionResult> {
  const parsed = themeSchema.safeParse(input)
  if (!parsed.success) return { ok: false, error: 'Tema no válido.' }

  const { supabase, user } = await getAuthUser()
  if (!user) return { ok: false, error: 'Tu sesión expiró. Inicia sesión de nuevo.' }

  const { error } = await supabase
    .from('user_preferences')
    .upsert({ user_id: user.id, theme: parsed.data })

  if (error) return { ok: false, error: SAVE_FAILED }

  await setThemeCookie(parsed.data)
  return { ok: true }
}

export async function addNoteAction(input: unknown): Promise<
  { ok: true; note: PersonalNote } | { ok: false; error: string }
> {
  const parsed = noteInputSchema.safeParse(input)
  if (!parsed.success) return { ok: false, error: 'La nota no es válida.' }

  const { supabase, user } = await getAuthUser()
  if (!user) return { ok: false, error: 'Tu sesión expiró. Inicia sesión de nuevo.' }

  const { source, anchor } = parsed.data
  const { data, error } = await supabase
    .from('user_notes')
    .insert({
      user_id: user.id,
      text: parsed.data.text,
      source_title: source?.title ?? null,
      source_href: source?.href ?? anchor?.href ?? null,
      anchor_block: anchor?.block ?? null,
      anchor_line: anchor?.line ?? null,
      anchor_hash: anchor?.hash ?? null,
      anchor_quote: anchor?.quote ?? null,
    })
    .select(NOTE_COLUMNS)
    .single()

  if (error || !data) return { ok: false, error: SAVE_FAILED }
  return { ok: true, note: toNote(data) }
}

export async function updateNoteAction(
  input: unknown
): Promise<{ ok: true; note: PersonalNote } | { ok: false; error: string }> {
  const parsed = noteUpdateSchema.safeParse(input)
  if (!parsed.success) return { ok: false, error: 'La nota no es válida.' }

  const { supabase, user } = await getAuthUser()
  if (!user) return { ok: false, error: 'Tu sesión expiró. Inicia sesión de nuevo.' }

  const { data, error } = await supabase
    .from('user_notes')
    .update({ text: parsed.data.text })
    .eq('id', parsed.data.id)
    .eq('user_id', user.id)
    .select(NOTE_COLUMNS)
    .maybeSingle()

  if (error || !data) return { ok: false, error: SAVE_FAILED }
  return { ok: true, note: toNote(data) }
}

export async function deleteNoteAction(input: unknown): Promise<ActionResult> {
  const parsed = noteIdSchema.safeParse(input)
  if (!parsed.success) return { ok: false, error: 'La nota no es válida.' }

  const { supabase, user } = await getAuthUser()
  if (!user) return { ok: false, error: 'Tu sesión expiró. Inicia sesión de nuevo.' }

  const { error } = await supabase
    .from('user_notes')
    .delete()
    .eq('id', parsed.data)
    .eq('user_id', user.id)

  if (error) return { ok: false, error: SAVE_FAILED }
  return { ok: true }
}

/**
 * One-time move of the device's notes into the account. It never mixes with
 * notes the account already owns, so re-running is a no-op.
 */
export async function importNotesAction(
  input: unknown
): Promise<{ ok: true; notes: PersonalNote[]; skipped: boolean } | { ok: false; error: string }> {
  const parsed = importNotesSchema.safeParse(input)
  if (!parsed.success) return { ok: false, error: 'Las notas locales no son válidas.' }

  const { supabase, user } = await getAuthUser()
  if (!user) return { ok: false, error: 'Tu sesión expiró. Inicia sesión de nuevo.' }

  const { count, error: countError } = await supabase
    .from('user_notes')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id)

  if (countError) return { ok: false, error: SAVE_FAILED }
  if (count !== 0 || parsed.data.length === 0) return { ok: true, notes: [], skipped: true }

  const { data, error } = await supabase
    .from('user_notes')
    .insert(
      parsed.data.map((note) => ({
        user_id: user.id,
        text: note.text,
        source_title: note.source?.title ?? null,
        source_href: note.source?.href ?? note.anchor?.href ?? null,
        anchor_block: note.anchor?.block ?? null,
        anchor_line: note.anchor?.line ?? null,
        anchor_hash: note.anchor?.hash ?? null,
        anchor_quote: note.anchor?.quote ?? null,
        created_at: new Date(note.createdAt).toISOString(),
      }))
    )
    .select(NOTE_COLUMNS)

  if (error || !data) return { ok: false, error: SAVE_FAILED }
  return { ok: true, notes: data.map(toNote), skipped: false }
}

/** Stamps today's streak and marks the content as seen. */
export async function markActivityAction(input: unknown): Promise<ActionResult> {
  const parsed = activitySchema.safeParse(input)
  if (!parsed.success) return { ok: false, error: 'Actividad no válida.' }

  const { supabase, user } = await getAuthUser()
  if (!user) return { ok: false, error: 'Tu sesión expiró. Inicia sesión de nuevo.' }

  const { error } = await supabase.from('user_progress').upsert(
    {
      user_id: user.id,
      content_type: parsed.data.contentType as ProgressContentType,
      content_key: parsed.data.contentKey,
    },
    { onConflict: 'user_id,content_type,content_key' }
  )

  if (error) return { ok: false, error: SAVE_FAILED }
  return { ok: true }
}

/**
 * Records one answered round: stamps the streak, then appends the result.
 * Stars are computed here from correct/total, so the client can only ever
 * report how many answers it got right.
 */
export async function recordResultAction(input: unknown): Promise<ActionResult> {
  const parsed = roundResultSchema.safeParse(input)
  if (!parsed.success) return { ok: false, error: 'Resultado no válido.' }

  const { supabase, user } = await getAuthUser()
  if (!user) return { ok: false, error: 'Tu sesión expiró. Inicia sesión de nuevo.' }

  const limit = await rateLimitAsync(`results:${user.id}`, ROUND_LIMIT)
  if (!limit.ok) return { ok: false, error: tooManyAttempts(limit.retryAfterSec) }

  const { contentType, contentKey, correct, total } = parsed.data

  const { error: progressError } = await supabase.from('user_progress').upsert(
    {
      user_id: user.id,
      content_type: contentType,
      content_key: contentKey,
    },
    { onConflict: 'user_id,content_type,content_key' }
  )
  if (progressError) return { ok: false, error: SAVE_FAILED }

  const { error } = await supabase.from('user_quiz_results').insert({
    user_id: user.id,
    content_type: contentType,
    content_key: contentKey,
    correct,
    total,
    stars: starsFor(correct, total),
  })

  if (error) return { ok: false, error: SAVE_FAILED }
  return { ok: true }
}

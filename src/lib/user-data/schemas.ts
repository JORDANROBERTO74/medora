import { z } from 'zod'

/** Every action answers with an explicit success flag or a Spanish message. */
export type ActionResult = { ok: true } | { ok: false; error: string }

const MAX_NOTE_TEXT = 4000
const MAX_SOURCE_TITLE = 300
const MAX_SOURCE_HREF = 500
const MAX_ANCHOR_HASH = 128
const MAX_ANCHOR_QUOTE = 1000
const MAX_IMPORT = 500

export const themeSchema = z.enum(['light', 'dark', 'system'])

const anchorSchema = z.object({
  href: z.string().min(1).max(MAX_SOURCE_HREF),
  block: z.number().int().min(0),
  line: z.number().int().min(0),
  hash: z.string().min(1).max(MAX_ANCHOR_HASH),
  quote: z.string().max(MAX_ANCHOR_QUOTE),
})

const sourceSchema = z.object({
  title: z.string().min(1).max(MAX_SOURCE_TITLE),
  href: z.string().min(1).max(MAX_SOURCE_HREF).optional(),
})

export const noteInputSchema = z.object({
  text: z.string().trim().min(1).max(MAX_NOTE_TEXT),
  source: sourceSchema.optional(),
  anchor: anchorSchema.optional(),
})

export const noteUpdateSchema = z.object({
  id: z.string().uuid(),
  text: z.string().trim().min(1).max(MAX_NOTE_TEXT),
})

export const noteIdSchema = z.string().uuid()

/** One-time move of device-local notes into the account. */
export const importNoteSchema = z.object({
  text: z.string().trim().min(1).max(MAX_NOTE_TEXT),
  source: sourceSchema.optional(),
  anchor: anchorSchema.optional(),
  createdAt: z.number().int().min(0).max(8.64e15),
})

export const importNotesSchema = z.array(importNoteSchema).max(MAX_IMPORT)

export const activitySchema = z.object({
  contentType: z.enum(['lesson', 'reading', 'quiz', 'case']),
  contentKey: z.string().min(1).max(300),
})

/** Stars are derived server-side from correct/total, never sent by the client. */
export const roundResultSchema = z.object({
  contentType: z.enum(['quiz', 'case']),
  contentKey: z.string().min(1).max(300),
  correct: z.number().int().min(0).max(100),
  total: z.number().int().min(1).max(100),
})

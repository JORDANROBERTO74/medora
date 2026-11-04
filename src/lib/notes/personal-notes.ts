// Personal notes are account-owned rows in Supabase (see lib/user-data/actions).
// This module keeps the shape, the helpers that group notes by source, and the
// one-time parse of the device copy that gets moved into the account on login.
// Content notes (apuntes) are read-only and never live here.
export type PersonalNoteSource = { title: string; href?: string }

export type PersonalNoteAnchor = {
  /** Chapter URL where the paragraph lives. */
  href: string
  /** Markdown block index inside the chapter. */
  block: number
  /** Start line of the paragraph inside that block. */
  line: number
  /** Hash of the normalized paragraph text (primary match). */
  hash: string
  /** Short paragraph excerpt for context. */
  quote: string
}

export type PersonalNote = {
  id: string
  text: string
  source?: PersonalNoteSource
  anchor?: PersonalNoteAnchor
  createdAt: number
}

/** Device copy waiting to be imported into the account. */
export const NOTES_STORAGE_KEY = 'medora:notes'

function isNote(value: unknown): value is PersonalNote {
  if (!value || typeof value !== 'object') return false
  const note = value as Partial<PersonalNote>
  return typeof note.id === 'string' && typeof note.text === 'string'
}

function parseAnchor(value: unknown): PersonalNoteAnchor | undefined {
  if (!value || typeof value !== 'object') return undefined
  const anchor = value as Partial<PersonalNoteAnchor>
  if (
    typeof anchor.href !== 'string' ||
    typeof anchor.hash !== 'string' ||
    typeof anchor.quote !== 'string' ||
    typeof anchor.block !== 'number' ||
    typeof anchor.line !== 'number'
  ) {
    return undefined
  }
  return {
    href: anchor.href,
    block: anchor.block,
    line: anchor.line,
    hash: anchor.hash,
    quote: anchor.quote,
  }
}

/** Local storage is untrusted input: invalid entries are dropped silently. */
export function parsePersonalNotes(raw: string | null): PersonalNote[] {
  if (!raw) return []

  try {
    const value = JSON.parse(raw)
    if (!Array.isArray(value)) return []
    return value.filter(isNote).map((note) => ({
      id: note.id,
      text: note.text,
      source:
        note.source && typeof note.source.title === 'string'
          ? { title: note.source.title, ...(note.source.href ? { href: note.source.href } : {}) }
          : undefined,
      anchor: parseAnchor(note.anchor),
      createdAt: typeof note.createdAt === 'number' ? note.createdAt : Date.now(),
    }))
  } catch {
    return []
  }
}

export function notesForSource(notes: PersonalNote[], href: string): PersonalNote[] {
  return notes.filter((note) => note.source?.href === href)
}

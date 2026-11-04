import type { PersonalNote } from './personal-notes'
import { canonicalSourceHref } from './note-order'

export type NoteLayer = 'reading' | 'summary' | 'review' | 'standalone'

export type NoteScope = {
  layer: NoteLayer
  specialty?: string
}

/** Layer/specialty of a note derived from the content URL. */
export function noteScope(href?: string): NoteScope {
  const path = canonicalSourceHref(href)
  const parts = path.split('/').filter(Boolean)

  if (parts[0] !== 'dashboard') return { layer: 'standalone' }

  if (parts[1] === 'reading') {
    if (parts[2] === 'summary') {
      return { layer: 'summary', specialty: parts[3] }
    }
    if (parts[2] === 'review') return { layer: 'review' }
    if (parts[2]) return { layer: 'reading', specialty: parts[2] }
  }

  // /dashboard/lesson/* is legacy: apuntes no longer accept personal notes.
  return { layer: 'standalone' }
}

export function isLegacyApunteNote(note: PersonalNote): boolean {
  return note.source?.href?.startsWith('/dashboard/lesson/') ?? false
}

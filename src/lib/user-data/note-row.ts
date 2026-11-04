import type { Database } from '@/lib/supabase/database.types'
import type { PersonalNote } from '@/lib/notes/personal-notes'

/** Columns every note read and every insert selects back. */
export const NOTE_COLUMNS =
  'id,text,source_title,source_href,anchor_block,anchor_line,anchor_hash,anchor_quote,created_at'

export type NoteRow = Pick<
  Database['public']['Tables']['user_notes']['Row'],
  | 'id'
  | 'text'
  | 'source_title'
  | 'source_href'
  | 'anchor_block'
  | 'anchor_line'
  | 'anchor_hash'
  | 'anchor_quote'
  | 'created_at'
>

/** A note's source and anchor share one URL, so source_href stores both. */
export function toNote(row: NoteRow): PersonalNote {
  const source = row.source_title
    ? { title: row.source_title, ...(row.source_href ? { href: row.source_href } : {}) }
    : undefined

  const anchored =
    row.source_href !== null &&
    row.anchor_hash !== null &&
    row.anchor_quote !== null &&
    row.anchor_block !== null &&
    row.anchor_line !== null

  const anchor = anchored
    ? {
        href: row.source_href as string,
        block: row.anchor_block as number,
        line: row.anchor_line as number,
        hash: row.anchor_hash as string,
        quote: row.anchor_quote as string,
      }
    : undefined

  return {
    id: row.id,
    text: row.text,
    ...(source ? { source } : {}),
    ...(anchor ? { anchor } : {}),
    createdAt: Date.parse(row.created_at),
  }
}

export type NoteBlock = {
  title: string
  markdown: string
}

/** Removes a leading "**Title:**" that repeats the block heading in the corpus. */
export function stripRepeatedTitle({ title, markdown }: NoteBlock): NoteBlock {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const prefix = new RegExp(`^\\s*(?:\\*\\*${escaped}:?\\*\\*:?|${escaped}:)\\s*`, 'i')
  return { title, markdown: markdown.replace(prefix, '') }
}

export type InlineNote = {
  slug: string
  title: string
  href: string
  excerpt: string
  /** Full note blocks; loaded lazily by the chapter notes sheet. */
  blocks?: NoteBlock[]
}

export type ChapterNote = InlineNote & {
  /** Heading text (normalized) that the card is rendered before. */
  beforeHeading: string
}

export type ChapterSegment =
  | { kind: 'markdown'; markdown: string }
  | { kind: 'note'; note: InlineNote }

const HEADING_RE = /^#{1,4}\s+(.+)$/

/** Heading comparison ignores case, accents and repeated spaces. */
export function normalizeHeading(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u2010-\u2015]/g, '-')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

function headingOf(chunk: string): string | undefined {
  const firstLine = chunk.split('\n', 1)[0] ?? ''
  return firstLine.match(HEADING_RE)?.[1]
}

/** Splits chapter markdown at headings and places note cards before the match. */
export function splitChapter(markdown: string, notes: ChapterNote[]): ChapterSegment[] {
  const pending = new Map<string, InlineNote[]>()
  for (const { beforeHeading, ...note } of notes) {
    const key = normalizeHeading(beforeHeading)
    pending.set(key, [...(pending.get(key) ?? []), note])
  }

  const chunks = markdown.split(/\n(?=#{1,4}\s)/)
  const segments: ChapterSegment[] = []

  for (const chunk of chunks) {
    const heading = headingOf(chunk)
    if (heading) {
      for (const note of pending.get(normalizeHeading(heading)) ?? []) {
        segments.push({ kind: 'note', note })
      }
    }

    if (chunk.length > 0) {
      segments.push({ kind: 'markdown', markdown: chunk })
    }
  }

  return segments
}

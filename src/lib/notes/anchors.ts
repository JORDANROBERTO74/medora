import type { PersonalNote, PersonalNoteAnchor } from './personal-notes'

/** Plain text of a markdown paragraph, used for the anchor hash and quote. */
export function markdownToText(markdown: string): string {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Stable 32-bit FNV-1a hash in base36. */
export function hashText(text: string): string {
  let hash = 2166136261
  const normalized = text.replace(/\s+/g, ' ').trim().toLowerCase()
  for (let index = 0; index < normalized.length; index += 1) {
    hash ^= normalized.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36)
}

export function createAnchor({
  href,
  block,
  line,
  markdown,
}: {
  href: string
  block: number
  line: number
  markdown: string
}): PersonalNoteAnchor {
  const text = markdownToText(markdown)
  return {
    href,
    block,
    line,
    hash: hashText(text),
    quote: text.length > 140 ? `${text.slice(0, 140).replace(/\s+\S*$/, '')}…` : text,
  }
}

/** Primary match is the paragraph text hash; line/block only provide context. */
export function notesForAnchor(notes: PersonalNote[], href: string, hash: string): PersonalNote[] {
  return notes.filter((note) => note.anchor?.href === href && note.anchor.hash === hash)
}

/** Headings are rendered as h1-h6; bold-only labels and short colon labels are
 * pseudo-headings and should not get a note affordance. */
export function isHeadingLikeMarkdown(markdown: string): boolean {
  const raw = markdown.trim()
  const text = markdownToText(raw)
  if (!text) return true

  const boldOnly = /^\*\*[^*]+\*\*[.:]?$/.test(raw) || /^__[^_]+__[.:]?$/.test(raw)
  const shortLabel = text.length <= 80 && text.endsWith(':')
  const allCaps =
    text.length <= 80 && /[A-ZÁÉÍÓÚÜÑ]/.test(text) && text === text.toUpperCase()

  return boldOnly || shortLabel || allCaps
}


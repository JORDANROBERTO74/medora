import { describe, expect, it } from 'vitest'
import type { PersonalNote } from './personal-notes'
import { canonicalSourceHref, sortNotes, type NoteOrderMap } from './note-order'

function note(
  text: string,
  href: string | undefined,
  anchor?: { block: number; line: number },
  createdAt = 0
): PersonalNote {
  return {
    id: text,
    text,
    ...(href ? { source: { title: text, href } } : {}),
    ...(anchor
      ? { anchor: { href: href ?? '', block: anchor.block, line: anchor.line, hash: text, quote: text } }
      : {}),
    createdAt,
  }
}

const ORDER: NoteOrderMap = {
  '/dashboard/reading/internal-medicine/chapter-1': { layer: 0, chapter: 1 },
  '/dashboard/reading/internal-medicine/chapter-2': { layer: 0, chapter: 2 },
  '/dashboard/reading/summary/internal-medicine/chapter-1': { layer: 1, chapter: 1 },
}

describe('canonicalSourceHref', () => {
  it('normalizes legacy reading URLs and removes query/hash', () => {
    expect(canonicalSourceHref('/dashboard/reading/lectura/internal-medicine/chapter-1?x=1')).toBe(
      '/dashboard/reading/internal-medicine/chapter-1'
    )
    expect(canonicalSourceHref('/dashboard/reading/resumen/internal-medicine/chapter-1#p')).toBe(
      '/dashboard/reading/summary/internal-medicine/chapter-1'
    )
    expect(canonicalSourceHref('/dashboard/reading/repaso/antibiotics')).toBe(
      '/dashboard/reading/review/antibiotics'
    )
    expect(canonicalSourceHref('/dashboard/reading/internal-medicine/chapter-1/')).toBe(
      '/dashboard/reading/internal-medicine/chapter-1'
    )
  })
})

describe('sortNotes', () => {
  it('orders by chapter, then paragraph position', () => {
    const notes = [
      note('chapter 2', '/dashboard/reading/internal-medicine/chapter-2'),
      note('conclusion', '/dashboard/reading/internal-medicine/chapter-1', { block: 2, line: 5 }),
      note('chapter level', '/dashboard/reading/internal-medicine/chapter-1'),
      note('intro', '/dashboard/reading/internal-medicine/chapter-1', { block: 0, line: 10 }),
    ]

    expect(sortNotes(notes, ORDER).map((item) => item.text)).toEqual([
      'chapter level',
      'intro',
      'conclusion',
      'chapter 2',
    ])
  })

  it('orders by layer: lectura before resumen', () => {
    const notes = [
      note('summary', '/dashboard/reading/summary/internal-medicine/chapter-1'),
      note('main', '/dashboard/reading/internal-medicine/chapter-1'),
    ]

    expect(sortNotes(notes, ORDER).map((item) => item.text)).toEqual([
      'main',
      'summary',
    ])
  })

  it('puts unordered notes last and uses newest first as tie-breaker', () => {
    const notes = [
      note('standalone old', undefined, undefined, 1),
      note('same position old', '/dashboard/reading/internal-medicine/chapter-1', { block: 0, line: 1 }, 1),
      note('standalone new', undefined, undefined, 2),
      note('same position new', '/dashboard/reading/internal-medicine/chapter-1', { block: 0, line: 1 }, 2),
    ]

    expect(sortNotes(notes, ORDER).map((item) => item.text)).toEqual([
      'same position new',
      'same position old',
      'standalone new',
      'standalone old',
    ])
  })
})

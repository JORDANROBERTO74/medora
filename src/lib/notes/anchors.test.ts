import { describe, expect, it } from 'vitest'
import type { PersonalNote } from './personal-notes'
import {
  createAnchor,
  hashText,
  isHeadingLikeMarkdown,
  markdownToText,
  notesForAnchor,
} from './anchors'

describe('markdownToText', () => {
  it('removes markdown syntax and HTML comments', () => {
    expect(markdownToText('**Puntos clave:** texto <!-- p:1 -->')).toBe('Puntos clave: texto')
  })
})

describe('hashText', () => {
  it('is stable and case-insensitive', () => {
    expect(hashText('Hola mundo')).toBe(hashText('  hola   mundo  '))
    expect(hashText('Hola')).not.toBe(hashText('Adiós'))
  })
})

describe('createAnchor', () => {
  it('keeps location and builds hash/quote', () => {
    const anchor = createAnchor({
      href: '/dashboard/reading/internal-medicine/dengue',
      block: 2,
      line: 7,
      markdown: '**Puntos clave:** las arbovirosis comparten vector.',
    })

    expect(anchor.href).toBe('/dashboard/reading/internal-medicine/dengue')
    expect(anchor.block).toBe(2)
    expect(anchor.line).toBe(7)
    expect(anchor.hash).toBe(hashText('Puntos clave: las arbovirosis comparten vector.'))
    expect(anchor.quote).toContain('las arbovirosis')
  })

  it('truncates long quotes', () => {
    const anchor = createAnchor({
      href: '/x',
      block: 0,
      line: 1,
      markdown: 'palabra '.repeat(40),
    })
    expect(anchor.quote.length).toBeLessThanOrEqual(141)
    expect(anchor.quote.endsWith('…')).toBe(true)
  })
})

describe('notesForAnchor', () => {
  it('matches by chapter URL and paragraph hash', () => {
    const anchor = { href: '/x', block: 0, line: 3, hash: 'abc', quote: 'texto' }
    const notes: PersonalNote[] = [
      { id: '1', text: 'a', source: { title: 'Cap', href: '/x' }, anchor, createdAt: 1 },
      {
        id: '2',
        text: 'b',
        source: { title: 'Cap', href: '/x' },
        anchor: { ...anchor, hash: 'otro' },
        createdAt: 2,
      },
    ]

    expect(notesForAnchor(notes, '/x', 'abc').map((note) => note.text)).toEqual(['a'])
    expect(notesForAnchor(notes, '/y', 'abc')).toEqual([])
  })
})

describe('isHeadingLikeMarkdown', () => {
  it('rejects bold-only labels, short colon labels and all-caps titles', () => {
    expect(isHeadingLikeMarkdown('**Puntos clave**')).toBe(true)
    expect(isHeadingLikeMarkdown('**Puntos clave:**')).toBe(true)
    expect(isHeadingLikeMarkdown('Definición:')).toBe(true)
    expect(isHeadingLikeMarkdown('TRANSMISIÓN')).toBe(true)
  })

  it('accepts real content, including bold lead-ins', () => {
    expect(isHeadingLikeMarkdown('**Puntos clave:** la hipertensión se confirma fuera de la consulta.')).toBe(false)
    expect(isHeadingLikeMarkdown('Texto normal del párrafo.')).toBe(false)
  })
})

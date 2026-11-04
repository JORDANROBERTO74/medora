import { describe, expect, it } from 'vitest'
import { notesForSource, parsePersonalNotes, type PersonalNote } from './personal-notes'

function note(overrides: Partial<PersonalNote> & { id: string; text: string }): PersonalNote {
  return { createdAt: 1, ...overrides }
}

describe('parsePersonalNotes', () => {
  it('returns [] for missing or malformed storage', () => {
    expect(parsePersonalNotes(null)).toEqual([])
    expect(parsePersonalNotes('not-json')).toEqual([])
    expect(parsePersonalNotes('{"a":1}')).toEqual([])
  })

  it('drops invalid entries and keeps valid ones', () => {
    const raw = JSON.stringify([
      { id: 'a', text: 'válida', createdAt: 1 },
      { id: 2, text: 'id inválido' },
      { text: 'sin id' },
      null,
    ])

    expect(parsePersonalNotes(raw)).toEqual([
      { id: 'a', text: 'válida', source: undefined, anchor: undefined, createdAt: 1 },
    ])
  })

  it('keeps a valid anchor and drops a malformed one', () => {
    const anchor = {
      href: '/dashboard/reading/internal-medicine/dengue',
      block: 2,
      line: 10,
      hash: 'abc123',
      quote: 'texto del párrafo',
    }
    const raw = JSON.stringify([
      { id: 'a', text: 'con ancla', anchor },
      { id: 'b', text: 'ancla inválida', anchor: { href: '/x', hash: 2 } },
    ])

    const notes = parsePersonalNotes(raw)
    expect(notes[0]?.anchor).toEqual(anchor)
    expect(notes[1]?.anchor).toBeUndefined()
  })

  it('round-trips a device copy', () => {
    const stored = [
      note({
        id: 'a',
        text: 'una nota',
        source: { title: 'Capítulo', href: '/x' },
        createdAt: 1700000000000,
      }),
    ]

    expect(parsePersonalNotes(JSON.stringify(stored))).toEqual(stored)
  })
})

describe('notesForSource', () => {
  it('filters by source link', () => {
    const notes = [
      note({ id: 'a', text: 'a', source: { title: 'Cap', href: '/lectura/x' } }),
      note({ id: 'b', text: 'b', source: { title: 'Otro', href: '/lectura/y' } }),
    ]

    expect(notesForSource(notes, '/lectura/x').map((item) => item.text)).toEqual(['a'])
  })
})

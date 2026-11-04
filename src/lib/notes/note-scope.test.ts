import { describe, expect, it } from 'vitest'
import { isLegacyApunteNote, noteScope } from './note-scope'
import type { PersonalNote } from './personal-notes'

describe('noteScope', () => {
  it('maps the main reading and summary layers', () => {
    expect(noteScope('/dashboard/reading/internal-medicine/dengue')).toEqual({
      layer: 'reading',
      specialty: 'internal-medicine',
    })
    expect(noteScope('/dashboard/reading/summary/pediatrics/tuberculosis')).toEqual({
      layer: 'summary',
      specialty: 'pediatrics',
    })
  })

  it('maps review and legacy reading URLs', () => {
    expect(noteScope('/dashboard/reading/review/antibiotics')).toEqual({ layer: 'review' })
    expect(noteScope('/dashboard/reading/repaso/antibiotics')).toEqual({ layer: 'review' })
    expect(noteScope('/dashboard/reading/lectura/obstetrics-gynecology/x')).toEqual({
      layer: 'reading',
      specialty: 'obstetrics-gynecology',
    })
    expect(noteScope('/dashboard/reading/resumen/internal-medicine/x')).toEqual({
      layer: 'summary',
      specialty: 'internal-medicine',
    })
  })

  it('treats lesson notes as legacy standalone', () => {
    expect(noteScope('/dashboard/lesson/internal-medicine/cushing-triad')).toEqual({
      layer: 'standalone',
    })
    expect(noteScope()).toEqual({ layer: 'standalone' })
    expect(noteScope('https://example.com')).toEqual({ layer: 'standalone' })
  })
})

describe('isLegacyApunteNote', () => {
  it('detects notes created from an apunte page', () => {
    const note: PersonalNote = {
      id: '1',
      text: 'x',
      source: { title: 'Tríada de Cushing', href: '/dashboard/lesson/internal-medicine/cushing-triad' },
      createdAt: 1,
    }
    expect(isLegacyApunteNote(note)).toBe(true)
    expect(
      isLegacyApunteNote({
        ...note,
        source: { title: 'Dengue', href: '/dashboard/reading/internal-medicine/dengue' },
      })
    ).toBe(false)
  })
})

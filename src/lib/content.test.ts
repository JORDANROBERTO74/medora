import { describe, expect, it } from 'vitest'
import { getNextLesson, getNoteCategory, getSpecialty, getTopic, noteCategories, specialties } from './content'

const EXPECTED_SLUGS = [
  'internal-medicine',
  'gastrointestinal-surgery',
  'obstetrics-gynecology',
  'pediatrics',
]

describe('specialties', () => {
  it('exposes the four reading specialties with english slugs', () => {
    expect(specialties).toHaveLength(4)
    expect(specialties.map((specialty) => specialty.slug)).toEqual(EXPECTED_SLUGS)
  })

  it('has url-safe topic slugs and at least four per specialty', () => {
    for (const specialty of specialties) {
      expect(specialty.topics.length).toBeGreaterThanOrEqual(4)
      const slugs = specialty.topics.map((topic) => topic.slug)
      expect(new Set(slugs).size).toBe(slugs.length)
      for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    }
  })

  it('keeps spanish display names', () => {
    expect(getSpecialty('internal-medicine')?.name).toBe('Medicina Interna / Semiología')
    expect(getSpecialty('pediatrics')?.name).toBe('Pediatría')
  })
})

describe('note categories', () => {
  it('covers the 51 content notes across five categories', () => {
    expect(noteCategories).toHaveLength(5)
    const slugs = noteCategories.map((category) => category.slug)
    expect(new Set(slugs).size).toBe(5)

    const topics = noteCategories.flatMap((category) => category.topics)
    expect(topics).toHaveLength(51)
    expect(new Set(topics.map((topic) => topic.slug)).size).toBe(51)
  })

  it('keeps radiology as a notes-only category', () => {
    expect(getSpecialty('radiology')).toBeUndefined()
    expect(getNoteCategory('radiology')?.topics.map((topic) => topic.slug)).toEqual([
      'ct-densities',
      'ultrasound-echogenicity',
    ])
  })
})

describe('getTopic', () => {
  it('resolves a topic inside its category', () => {
    expect(getTopic('internal-medicine', 'arterial-hypertension')?.name).toBe('Hipertensión arterial')
    expect(getTopic('radiology', 'ct-densities')?.name).toContain('Hounsfield')
  })

  it('returns undefined for unknown slugs', () => {
    expect(getTopic('internal-medicine', 'not-a-topic')).toBeUndefined()
    expect(getTopic('not-a-category', 'arterial-hypertension')).toBeUndefined()
  })
})

describe('getNextLesson', () => {
  it('continues with the next topic inside the same category', () => {
    const category = getNoteCategory('internal-medicine')!
    const [first, second] = category.topics
    expect(getNextLesson(category.slug, first.slug)).toEqual({
      href: `/dashboard/lesson/${category.slug}/${second.slug}`,
      label: second.name,
    })
  })

  it('jumps to the first topic of the next category after the last topic', () => {
    const category = getNoteCategory('internal-medicine')!
    const last = category.topics[category.topics.length - 1]
    const nextCategory = getNoteCategory('gastrointestinal-surgery')!
    expect(getNextLesson(category.slug, last.slug)).toEqual({
      href: `/dashboard/lesson/${nextCategory.slug}/${nextCategory.topics[0].slug}`,
      label: nextCategory.name,
    })
  })

  it('returns nothing after the last topic of the last category', () => {
    const category = getNoteCategory('radiology')!
    const last = category.topics[category.topics.length - 1]
    expect(getNextLesson(category.slug, last.slug)).toBeUndefined()
  })

  it('returns nothing for unknown slugs', () => {
    expect(getNextLesson('not-a-category', 'whatever')).toBeUndefined()
    expect(getNextLesson('internal-medicine', 'not-a-topic')).toBeUndefined()
  })
})

import { describe, expect, it } from 'vitest'
import { clinicalCases, getCase, pickRandomCase } from './cases'
import { specialties } from './content'
import type { SpecialtySlug } from './content'

describe('clinicalCases', () => {
  it('has exactly one case per specialty', () => {
    for (const specialty of specialties) {
      const matches = clinicalCases.filter((clinicalCase) => clinicalCase.specialtySlug === specialty.slug)
      expect(matches).toHaveLength(1)
    }
  })

  it('keeps unique url-safe ids', () => {
    const ids = clinicalCases.map((clinicalCase) => clinicalCase.id)
    expect(new Set(ids).size).toBe(clinicalCases.length)
    for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it('ships a complete, answerable case', () => {
    for (const clinicalCase of clinicalCases) {
      expect(clinicalCase.options).toHaveLength(4)
      expect(new Set(clinicalCase.options).size).toBe(4)
      expect(clinicalCase.correctIndex).toBeGreaterThanOrEqual(0)
      expect(clinicalCase.correctIndex).toBeLessThan(clinicalCase.options.length)
      expect(clinicalCase.rationales).toHaveLength(clinicalCase.options.length)

      const fields = [
        clinicalCase.title,
        clinicalCase.history,
        clinicalCase.exam,
        clinicalCase.labs,
        clinicalCase.question,
        clinicalCase.hint,
        clinicalCase.discussion,
        ...clinicalCase.options,
        ...clinicalCase.rationales,
      ]
      for (const field of fields) expect(field.trim().length).toBeGreaterThan(0)
    }
  })
})

describe('getCase', () => {
  it('resolves the case for a specialty', () => {
    expect(getCase('surgery')?.options[getCase('surgery')!.correctIndex]).toBe('Apendicitis aguda')
    expect(getCase('pediatrics')?.options[getCase('pediatrics')!.correctIndex]).toBe('Meningitis bacteriana')
  })

  it('returns undefined for an unknown specialty', () => {
    expect(getCase('cardiology' as SpecialtySlug)).toBeUndefined()
  })
})

describe('pickRandomCase', () => {
  it('returns a case from the dataset', () => {
    expect(clinicalCases).toContain(pickRandomCase())
  })
})

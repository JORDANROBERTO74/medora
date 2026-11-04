import { describe, expect, it } from 'vitest'
import { clinicalCases, getCase, pickRandomCase } from './cases'
import { specialties } from './content'

describe('clinicalCases', () => {
  it('references real specialties, one case per specialty', () => {
    const known = new Set(specialties.map((specialty) => specialty.slug))
    const used = clinicalCases.map((clinicalCase) => clinicalCase.specialtySlug)

    for (const slug of used) expect(known.has(slug)).toBe(true)
    expect(new Set(used).size).toBe(used.length)
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
    expect(getCase('gastrointestinal-surgery')?.options[getCase('gastrointestinal-surgery')!.correctIndex]).toBe(
      'Apendicitis aguda'
    )
    expect(getCase('pediatrics')?.options[getCase('pediatrics')!.correctIndex]).toBe(
      'Meningitis bacteriana'
    )
  })

  it('returns undefined for an unknown specialty', () => {
    expect(getCase('radiology' as never)).toBeUndefined()
  })
})

describe('pickRandomCase', () => {
  it('returns a case from the dataset', () => {
    expect(clinicalCases).toContain(pickRandomCase())
  })
})

import { describe, expect, it } from 'vitest'
import {
  casesForSpecialty,
  clinicalCases,
  getCaseById,
  getFirstCaseOfNextSpecialty,
  nextCaseInSpecialty,
  pickRandomCase,
} from './cases'
import { specialties } from './content'

describe('clinicalCases', () => {
  it('references real specialties', () => {
    const known = new Set(specialties.map((specialty) => specialty.slug))

    for (const clinicalCase of clinicalCases) {
      expect(known.has(clinicalCase.specialtySlug)).toBe(true)
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
        clinicalCase.reason,
        clinicalCase.history,
        clinicalCase.exam,
        clinicalCase.question,
        clinicalCase.hint,
        clinicalCase.discussion,
        ...clinicalCase.options,
        ...clinicalCase.rationales,
      ]
      for (const field of fields) expect(field.trim().length).toBeGreaterThan(0)

      // Some source cases carry no laboratory at all; the UI simply hides the block.
      expect(typeof clinicalCase.labs).toBe('string')
    }
  })

  it('answers every study question it shows', () => {
    for (const clinicalCase of clinicalCases) {
      for (const item of clinicalCase.studyQuestions) {
        expect(item.prompt.trim().length).toBeGreaterThan(0)
        expect(item.answer.trim().length).toBeGreaterThan(0)
      }
    }
  })
})

describe('casesForSpecialty', () => {
  it('returns only cases from that specialty', () => {
    for (const clinicalCase of casesForSpecialty('internal-medicine')) {
      expect(clinicalCase.specialtySlug).toBe('internal-medicine')
    }
  })

  it('returns nothing for a specialty without cases', () => {
    expect(casesForSpecialty('radiology')).toEqual([])
  })
})

describe('getCaseById', () => {
  it('finds a case inside its specialty', () => {
    const found = getCaseById('internal-medicine', 'anaphylaxis-generalized-erythema')
    expect(found?.options[found.correctIndex]).toBe('Anafilaxia con shock distributivo')
  })

  it('does not leak a case into another specialty', () => {
    expect(getCaseById('pediatrics', 'anaphylaxis-generalized-erythema')).toBeUndefined()
    expect(getCaseById('internal-medicine', 'does-not-exist')).toBeUndefined()
  })
})

describe('pickRandomCase', () => {
  it('returns a case from the dataset', () => {
    expect(clinicalCases).toContain(pickRandomCase())
  })
})

describe('reading order', () => {
  it('walks a specialty in order and stops at its last case', () => {
    const cases = casesForSpecialty('internal-medicine')
    for (let index = 0; index < cases.length - 1; index += 1) {
      expect(nextCaseInSpecialty(cases[index])).toBe(cases[index + 1])
    }
    expect(nextCaseInSpecialty(cases[cases.length - 1])).toBeUndefined()
  })

  it('hands over to the next specialty that has cases', () => {
    const lastOfInternalMedicine = casesForSpecialty('internal-medicine').at(-1)!
    expect(getFirstCaseOfNextSpecialty(lastOfInternalMedicine.specialtySlug)?.specialtySlug).toBe(
      'gastrointestinal-surgery'
    )
  })

  it('has no next specialty after the last one', () => {
    const last = clinicalCases[clinicalCases.length - 1]
    expect(nextCaseInSpecialty(last)).toBeUndefined()
    expect(getFirstCaseOfNextSpecialty(last.specialtySlug)).toBeUndefined()
  })
})

import { cases as gastrointestinalSurgery } from './gastrointestinal-surgery'
import { cases as internalMedicine } from './internal-medicine'
import { cases as obstetricsGynecology } from './obstetrics-gynecology'
import { cases as pediatrics } from './pediatrics'
import type { ClinicalCase } from './types'

export type { CaseQuestion, ClinicalCase } from './types'

/**
 * One file per specialty. The source cases are written in Spanish; identifiers
 * and URL segments stay in English like the rest of the app.
 */
export const clinicalCases: ClinicalCase[] = [
  ...internalMedicine,
  ...gastrointestinalSurgery,
  ...obstetricsGynecology,
  ...pediatrics,
]

export function casesForSpecialty(specialtySlug: string): ClinicalCase[] {
  return clinicalCases.filter((clinicalCase) => clinicalCase.specialtySlug === specialtySlug)
}

/** Scoped by specialty so an id from another specialty cannot leak in. */
export function getCaseById(specialtySlug: string, id: string): ClinicalCase | undefined {
  return clinicalCases.find(
    (clinicalCase) => clinicalCase.specialtySlug === specialtySlug && clinicalCase.id === id
  )
}

/** Next case inside the same specialty, in the order the dataset lists them. */
export function nextCaseInSpecialty(current: ClinicalCase): ClinicalCase | undefined {
  const index = clinicalCases.indexOf(current)
  const next = clinicalCases[index + 1]
  return next && next.specialtySlug === current.specialtySlug ? next : undefined
}

/** First case of the next specialty that has cases; those without any are absent here. */
export function getFirstCaseOfNextSpecialty(specialtySlug: string): ClinicalCase | undefined {
  const index = clinicalCases.findIndex(
    (clinicalCase) => clinicalCase.specialtySlug === specialtySlug
  )
  if (index < 0) return undefined
  return clinicalCases
    .slice(index + 1)
    .find((clinicalCase) => clinicalCase.specialtySlug !== specialtySlug)
}

export function pickRandomCase(): ClinicalCase {
  return clinicalCases[Math.floor(Math.random() * clinicalCases.length)]
}

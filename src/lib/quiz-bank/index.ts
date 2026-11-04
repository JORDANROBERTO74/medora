import type { QuizQuestion, SpecialtySlug } from '@/lib/content'
import {
  internalMedicineSeed,
  obstetricsSeed,
  pediatricsSeed,
  surgerySeed,
} from './seed'
import { questions as imTriadsA } from './internal-medicine/triads-a'
import { questions as imTriadsB } from './internal-medicine/triads-b'
import { questions as imCardiology } from './internal-medicine/cardiology'
import { questions as imPulmonology } from './internal-medicine/pulmonology'
import { questions as imEndocrinology } from './internal-medicine/endocrinology'
import { questions as imNephrology } from './internal-medicine/nephrology'
import { questions as imNeurology } from './internal-medicine/neurology'
import { questions as imInfectology } from './internal-medicine/infectology'
import { questions as giSurgery } from './gastrointestinal-surgery/surgery'
import { questions as giEmergencies } from './gastrointestinal-surgery/emergencies'
import { questions as obObstetrics } from './obstetrics-gynecology/obstetrics'
import { questions as pedsPediatrics } from './pediatrics/pediatrics'
import { questions as pedsInfectology } from './pediatrics/infectology'

/**
 * Authored questions, one file per topic group. Distractors are drawn from the
 * corpus's own "errores frecuentes" so a plausible-looking wrong answer is the
 * mistake the apunte warns about.
 *
 * Licensing note: these derive from the MEDIC-GRADO-derived corpus and inherit
 * its pending legal review.
 *
 * shortcut: each explanation is a copy of its apunte's key points, so editing
 * the apunte does not update it; move to build-time extraction if the bank grows.
 */
export const questionBank: Record<SpecialtySlug, QuizQuestion[]> = {
  'internal-medicine': [
    ...internalMedicineSeed,
    ...imTriadsA,
    ...imTriadsB,
    ...imCardiology,
    ...imPulmonology,
    ...imEndocrinology,
    ...imNephrology,
    ...imNeurology,
    ...imInfectology,
  ],
  'gastrointestinal-surgery': [...surgerySeed, ...giSurgery, ...giEmergencies],
  'obstetrics-gynecology': [...obstetricsSeed, ...obObstetrics],
  pediatrics: [...pediatricsSeed, ...pedsPediatrics, ...pedsInfectology],
}

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** A specialty round, reshuffled per request so answers cannot be memorised by position. */
export function roundFor(specialty: SpecialtySlug, size: number): QuizQuestion[] {
  return shuffle(questionBank[specialty]).slice(0, size)
}

/** Questions pulled from every specialty at once. */
export function randomRound(size: number): QuizQuestion[] {
  return shuffle(Object.values(questionBank).flat()).slice(0, size)
}

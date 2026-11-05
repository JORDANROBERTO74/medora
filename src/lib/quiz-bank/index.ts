import { getSpecialty, specialties, type QuizQuestion, type SpecialtySlug } from '@/lib/content'
import { ROUND_SIZE } from '../quiz'
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

/**
 * One playable quiz: `ROUND_SIZE` questions of a single topic, cut in a fixed order.
 * Grouping is what makes progress countable — a specialty used to be an endless random
 * draw, so there was no denominator to compare a user's progress against.
 *
 * shortcut: ids are positional (`cardiology-2`), so adding or removing a question shifts
 * every later quiz of that topic and orphans its saved progress; the bank is frozen and
 * verified, revisit only if questions start changing again.
 */
export type QuizGroup = {
  /** URL segment inside its specialty. */
  id: string
  specialty: SpecialtySlug
  /** Topic slug the questions belong to; a group never mixes apuntes. */
  topic: string
  /** 1-based position inside the topic, shown as "Quiz 2". */
  index: number
  questions: QuizQuestion[]
}

/** Key stored in `user_progress` / `user_quiz_results` for one played quiz. */
export function quizKey(specialty: SpecialtySlug, quizId: string): string {
  return `quiz:${specialty}:${quizId}`
}

/** Every quiz of a specialty, ordered like the apuntes of its syllabus. */
export function quizGroups(specialty: SpecialtySlug): QuizGroup[] {
  const bank = questionBank[specialty]
  const groups: QuizGroup[] = []

  for (const topic of getSpecialty(specialty)?.topics ?? []) {
    const questions = bank.filter((question) => question.source.topic === topic.slug)
    // Spread the apunte over the fewest quizzes of up to ROUND_SIZE: cutting it in
    // blocks of five would leave a one-question stub at the end of most topics.
    const count = Math.ceil(questions.length / ROUND_SIZE)
    const base = Math.floor(questions.length / count)
    const extra = questions.length % count

    let start = 0
    for (let index = 1; index <= count; index += 1) {
      const size = base + (index <= extra ? 1 : 0)
      groups.push({
        id: `${topic.slug}-${index}`,
        specialty,
        topic: topic.slug,
        index,
        questions: questions.slice(start, start + size),
      })
      start += size
    }
  }

  return groups
}

export function getQuizGroup(specialty: SpecialtySlug, quizId: string): QuizGroup | undefined {
  return quizGroups(specialty).find((group) => group.id === quizId)
}

/** Every quiz of every specialty; the random draw reads this instead of loose questions. */
export function allQuizGroups(): QuizGroup[] {
  return specialties.flatMap((specialty) => quizGroups(specialty.slug))
}

export function randomQuizGroup(): QuizGroup {
  const groups = allQuizGroups()
  return groups[Math.floor(Math.random() * groups.length)]
}

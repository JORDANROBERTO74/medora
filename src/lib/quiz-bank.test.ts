import { describe, expect, it } from 'vitest'
import { getTopic, specialties } from './content'
import { ROUND_SIZE } from './quiz'
import {
  allQuizGroups,
  getQuizGroup,
  questionBank,
  quizGroups,
  quizKey,
  randomQuizGroup,
} from './quiz-bank'

/** Case, accent and punctuation insensitive, so paraphrased prompts still collide. */
const normalize = (value: string): string =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

describe('questionBank', () => {
  it('gives every specialty a full round', () => {
    for (const specialty of specialties) {
      expect(questionBank[specialty.slug], specialty.slug).not.toBeNull()
      expect(questionBank[specialty.slug].length, specialty.slug).toBeGreaterThanOrEqual(ROUND_SIZE)
    }
  })

  it('holds well-formed questions only', () => {
    for (const [slug, bank] of Object.entries(questionBank)) {
      for (const question of bank) {
        const label = `${slug}: ${question.prompt}`
        expect(question.prompt.length, label).toBeGreaterThan(0)
        expect(question.options, label).toHaveLength(4)
        expect(new Set(question.options).size, label).toBe(4)
        expect(question.correctIndex, label).toBeGreaterThanOrEqual(0)
        expect(question.correctIndex, label).toBeLessThan(question.options.length)
        expect(question.explanation.length, label).toBeGreaterThan(0)
        // Short enough to read inside the dialog without scrolling.
        expect(question.explanation.length, label).toBeLessThanOrEqual(600)
        expect(getTopic(question.source.specialty, question.source.topic), label).toBeDefined()
        expect(question.source.specialty, label).toBe(slug)
      }
    }
  })

  it('covers every apunte with at least one question', () => {
    const covered = new Set<string>()

    for (const bank of Object.values(questionBank)) {
      for (const question of bank) {
        covered.add(`${question.source.specialty}/${question.source.topic}`)
      }
    }

    for (const specialty of specialties) {
      for (const topic of specialty.topics) {
        expect(
          covered.has(`${specialty.slug}/${topic.slug}`),
          `${specialty.name} · ${topic.name}`
        ).toBe(true)
      }
    }
  })

  it('never asks the same question twice', () => {
    const seen = new Set<string>()

    for (const [slug, bank] of Object.entries(questionBank)) {
      for (const question of bank) {
        expect(seen.has(question.prompt), `${slug}: ${question.prompt}`).toBe(false)
        seen.add(question.prompt)
      }
    }
  })

  it('never asks the same question twice even after normalising the wording', () => {
    const seen = new Map<string, string>()

    for (const [slug, bank] of Object.entries(questionBank)) {
      for (const question of bank) {
        const key = normalize(question.prompt)
        expect(seen.has(key), `${slug}: ${question.prompt} repite ${seen.get(key) ?? ''}`).toBe(
          false
        )
        seen.set(key, `${slug}: ${question.prompt}`)
      }
    }
  })

  it('never rewards the same answer twice within an apunte', () => {
    const seen = new Map<string, string>()

    for (const bank of Object.values(questionBank)) {
      for (const question of bank) {
        const key = `${question.source.topic}|${normalize(question.options[question.correctIndex])}`
        expect(
          seen.has(key),
          `${question.source.topic}: «${question.prompt}» repite la respuesta de «${seen.get(key) ?? ''}»`
        ).toBe(false)
        seen.set(key, question.prompt)
      }
    }
  })
})

describe('quizGroups', () => {
  it('cuts every question into exactly one quiz', () => {
    for (const specialty of specialties) {
      const questions = quizGroups(specialty.slug).flatMap((group) => group.questions)
      expect(questions, specialty.slug).toHaveLength(questionBank[specialty.slug].length)
      expect(new Set(questions.map((question) => question.prompt)).size, specialty.slug).toBe(
        questions.length
      )
    }
  })

  it('never asks more than a round in one quiz', () => {
    for (const group of allQuizGroups()) {
      expect(group.questions.length, group.id).toBeGreaterThan(0)
      expect(group.questions.length, group.id).toBeLessThanOrEqual(ROUND_SIZE)
    }
  })

  it('spreads an apunte evenly instead of leaving a stub', () => {
    for (const specialty of specialties) {
      const sizes = new Map<string, number[]>()
      for (const group of quizGroups(specialty.slug)) {
        sizes.set(group.topic, [...(sizes.get(group.topic) ?? []), group.questions.length])
      }
      for (const [topic, topicSizes] of sizes) {
        const label = `${specialty.slug}/${topic}`
        expect(Math.max(...topicSizes), label).toBeLessThanOrEqual(ROUND_SIZE)
        expect(Math.max(...topicSizes) - Math.min(...topicSizes), label).toBeLessThanOrEqual(1)
      }
    }
  })

  it('keeps a quiz inside one apunte', () => {
    for (const group of allQuizGroups()) {
      for (const question of group.questions) {
        expect(question.source.topic, group.id).toBe(group.topic)
        expect(question.source.specialty, group.id).toBe(group.specialty)
      }
    }
  })

  it('names quizzes stably so saved progress survives a reload', () => {
    const ids = quizGroups('internal-medicine').map((group) => group.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*-\d+$/)
    expect(quizGroups('internal-medicine').map((group) => group.id)).toEqual(ids)
  })

  it('builds the key it will be saved under', () => {
    const [first] = quizGroups('pediatrics')
    expect(quizKey(first.specialty, first.id)).toBe(`quiz:${first.specialty}:${first.id}`)
  })
})

describe('getQuizGroup', () => {
  it('finds a quiz inside its specialty', () => {
    const [first] = quizGroups('internal-medicine')
    expect(getQuizGroup('internal-medicine', first.id)?.questions).toEqual(first.questions)
    expect(getQuizGroup('gastrointestinal-surgery', first.id)).toBeUndefined()
    expect(getQuizGroup('internal-medicine', 'does-not-exist')).toBeUndefined()
  })
})

describe('randomQuizGroup', () => {
  it('returns a quiz from the dataset', () => {
    expect(allQuizGroups()).toContainEqual(randomQuizGroup())
  })
})

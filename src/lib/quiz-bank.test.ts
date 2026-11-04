import { describe, expect, it } from 'vitest'
import { getTopic, specialties } from './content'
import { ROUND_SIZE } from './quiz'
import { questionBank, randomRound, roundFor } from './quiz-bank'

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

describe('roundFor', () => {
  it('returns a complete round for every specialty', () => {
    for (const specialty of specialties) {
      const round = roundFor(specialty.slug, ROUND_SIZE)
      expect(round).toHaveLength(ROUND_SIZE)
      expect(round.every((question) => questionBank[specialty.slug].includes(question))).toBe(true)
    }
  })
})

describe('randomRound', () => {
  it('draws the requested number of distinct questions', () => {
    const round = randomRound(ROUND_SIZE)
    expect(round).toHaveLength(ROUND_SIZE)
    expect(new Set(round.map((question) => question.prompt)).size).toBe(ROUND_SIZE)
  })
})

import { describe, expect, it } from 'vitest'
import { getNextReview, getSpecialty, getTopic, quizQuestion, specialties } from './content'

describe('specialties', () => {
  it('exposes four specialties with unique english slugs', () => {
    expect(specialties).toHaveLength(4)
    const slugs = specialties.map((specialty) => specialty.slug)
    expect(new Set(slugs).size).toBe(4)
    expect(slugs).toEqual(['surgery', 'gynecology', 'internal-medicine', 'pediatrics'])
  })

  it('has five topics per specialty with url-safe slugs', () => {
    for (const specialty of specialties) {
      expect(specialty.topics).toHaveLength(5)
      const topicSlugs = specialty.topics.map((topic) => topic.slug)
      expect(new Set(topicSlugs).size).toBe(5)
      for (const slug of topicSlugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    }
  })

  it('keeps spanish display names', () => {
    expect(getSpecialty('surgery')?.name).toBe('Cirugía')
    expect(getSpecialty('gynecology')?.name).toBe('Ginecología')
    expect(getSpecialty('internal-medicine')?.name).toBe('Medicina Interna')
  })
})

describe('getTopic', () => {
  it('resolves a topic inside its specialty', () => {
    expect(getTopic('surgery', 'acute-inflammation')?.name).toBe('Inflamación aguda')
  })

  it('returns undefined for unknown slugs', () => {
    expect(getTopic('surgery', 'not-a-topic')).toBeUndefined()
    expect(getTopic('not-a-specialty', 'acute-inflammation')).toBeUndefined()
  })
})

describe('getNextReview', () => {
  it('points at the first surgery topic', () => {
    const next = getNextReview()
    expect(next?.specialty.slug).toBe('surgery')
    expect(next?.topic.slug).toBe('acute-inflammation')
  })
})

describe('quizQuestion', () => {
  it('has four options and a valid correct index', () => {
    expect(quizQuestion.options).toHaveLength(4)
    expect(quizQuestion.correctIndex).toBeGreaterThanOrEqual(0)
    expect(quizQuestion.correctIndex).toBeLessThan(quizQuestion.options.length)
  })
})

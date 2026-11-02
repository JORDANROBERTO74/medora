import { describe, expect, it } from 'vitest'
import { getNextReview, getSpecialty, getTopic, quizQuestion, specialties } from './content'

const EXPECTED_SLUGS = [
  'cardiology',
  'obstetrics-gynecology',
  'gastrointestinal-surgery',
  'pulmonology',
  'infectious-diseases',
  'endocrinology',
  'nephrology',
  'emergency-medicine',
  'pediatrics',
  'neurology',
  'radiology',
  'internal-medicine',
]

describe('specialties', () => {
  it('exposes twelve clinical specialties with unique english slugs', () => {
    expect(specialties).toHaveLength(12)
    expect(specialties.map((specialty) => specialty.slug)).toEqual(EXPECTED_SLUGS)
  })

  it('covers the 51 visible corpus topics with url-safe english slugs', () => {
    const total = specialties.reduce((sum, specialty) => sum + specialty.topics.length, 0)
    expect(total).toBe(51)

    for (const specialty of specialties) {
      expect(specialty.topics.length).toBeGreaterThanOrEqual(2)
      const slugs = specialty.topics.map((topic) => topic.slug)
      expect(new Set(slugs).size).toBe(slugs.length)
      for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    }
  })

  it('keeps spanish display names', () => {
    expect(getSpecialty('cardiology')?.name).toBe('Cardiología')
    expect(getSpecialty('internal-medicine')?.name).toBe('Medicina Interna / Semiología')
  })
})

describe('getTopic', () => {
  it('resolves a topic inside its specialty', () => {
    expect(getTopic('cardiology', 'arterial-hypertension')?.name).toBe('Hipertensión arterial')
  })

  it('returns undefined for unknown slugs', () => {
    expect(getTopic('cardiology', 'not-a-topic')).toBeUndefined()
    expect(getTopic('not-a-specialty', 'arterial-hypertension')).toBeUndefined()
  })
})

describe('getNextReview', () => {
  it('points at the first cardiology topic', () => {
    const next = getNextReview()
    expect(next?.specialty.slug).toBe('cardiology')
    expect(next?.topic.slug).toBe('arterial-hypertension')
  })
})

describe('quizQuestion', () => {
  it('has four options and a valid correct index', () => {
    expect(quizQuestion.options).toHaveLength(4)
    expect(quizQuestion.correctIndex).toBeGreaterThanOrEqual(0)
    expect(quizQuestion.correctIndex).toBeLessThan(quizQuestion.options.length)
  })
})

import { describe, expect, it } from 'vitest'
import {
  findReadingChapter,
  getReading,
  getReadingSpecialties,
  getRepaso,
  getTopicContent,
} from './corpus'
import { publicSlug } from './slugs'

describe('corpus loader', () => {
  it('loads a topic with its ampliacion blocks', () => {
    const topic = getTopicContent('cardiology', 'arterial-hypertension')

    expect(topic?.title).toBe('Hipertensión arterial')
    expect(topic?.sections).toHaveLength(1)
    expect(topic?.sections[0]?.blocks.length).toBeGreaterThan(0)
    expect(topic?.sections[0]?.blocks[0]?.markdown.length).toBeGreaterThan(20)
  })

  it('returns null for unknown public slugs', () => {
    expect(getTopicContent('cardiology', 'not-a-topic')).toBeNull()
    expect(getTopicContent('not-a-specialty', 'arterial-hypertension')).toBeNull()
  })

  it('exposes the four reading specialties and the review file', () => {
    expect(getReadingSpecialties().map((specialty) => publicSlug(specialty.slug))).toEqual([
      'obstetrics-gynecology',
      'gastrointestinal-surgery',
      'pediatrics',
      'internal-medicine',
    ])
    expect(getRepaso()?.chapters).toHaveLength(17)
  })

  it('resolves reading chapters by public english slug', () => {
    const lectura = getReading('internal-medicine', 'lectura')

    expect(lectura?.chapters).toHaveLength(36)
    expect(findReadingChapter(lectura!, 'arterial-hypertension')?.title).toBe('Hipertensión arterial')
    expect(findReadingChapter(lectura!, 'not-a-chapter')).toBeUndefined()
  })
})

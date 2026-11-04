import { describe, expect, it } from 'vitest'
import {
  findReadingChapter,
  getChapterNotes,
  getFirstChapterOfNextSpecialty,
  getReading,
  getReview,
  getTopicContent,
} from './corpus'

describe('corpus loader', () => {
  it('loads a topic with its ampliacion blocks', () => {
    const topic = getTopicContent('internal-medicine', 'arterial-hypertension')

    expect(topic?.title).toBe('Hipertensión arterial')
    expect(topic?.sections).toHaveLength(1)
    expect(topic?.sections[0]?.blocks.length).toBeGreaterThan(0)
    expect(topic?.sections[0]?.blocks[0]?.markdown.length).toBeGreaterThan(20)
  })

  it('loads radiology notes outside the specialty list', () => {
    expect(getTopicContent('radiology', 'ct-densities')?.title).toContain('Hounsfield')
  })

  it('returns null for unknown public slugs', () => {
    expect(getTopicContent('internal-medicine', 'not-a-topic')).toBeNull()
    expect(getTopicContent('not-a-specialty', 'arterial-hypertension')).toBeNull()
  })

  it('has lectura and resumen for the four main specialties', () => {
    for (const slug of [
      'internal-medicine',
      'gastrointestinal-surgery',
      'obstetrics-gynecology',
      'pediatrics',
    ]) {
      expect(getReading(slug, 'main')?.chapters.length, `${slug} lectura`).toBeGreaterThan(0)
      expect(getReading(slug, 'summary')?.chapters.length, `${slug} resumen`).toBeGreaterThan(0)
    }
    expect(getReview()?.chapters).toHaveLength(17)
  })

  it('resolves reading chapters by public english slug', () => {
    const lectura = getReading('internal-medicine', 'main')

    expect(lectura?.chapters).toHaveLength(36)
    expect(findReadingChapter(lectura!, 'arterial-hypertension')?.title).toBe('Hipertensión arterial')
    expect(findReadingChapter(lectura!, 'not-a-chapter')).toBeUndefined()
  })

  it('offers the first chapter of the next specialty at the end of a specialty', () => {
    const next = getFirstChapterOfNextSpecialty('internal-medicine', 'main')
    const surgery = getReading('gastrointestinal-surgery', 'main')

    expect(next?.specialty.slug).toBe('gastrointestinal-surgery')
    expect(next?.chapter.slug).toBe(surgery?.chapters[0]?.slug)
    expect(getFirstChapterOfNextSpecialty('internal-medicine', 'summary')?.specialty.slug).toBe(
      'gastrointestinal-surgery'
    )
    expect(getFirstChapterOfNextSpecialty('pediatrics', 'main')).toBeUndefined()
  })

  it('returns the notes placed inside a chapter', () => {
    const notes = getChapterNotes('internal-medicine', 'hipertension-arterial')
    const note = notes.find((entry) => entry.slug === 'arterial-hypertension')

    expect(note?.title).toBe('Hipertensión arterial')
    expect(note?.href).toBe('/dashboard/lesson/internal-medicine/arterial-hypertension')
    expect(note?.beforeHeading).toBe('tratamiento')
    expect(note?.excerpt.length).toBeGreaterThan(20)
    expect(note?.blocks?.length).toBeGreaterThan(0)
    expect(note?.blocks?.[0]?.markdown.length).toBeGreaterThan(20)
  })

  it('returns every card placed in a multi-note chapter', () => {
    const slugs = getChapterNotes('gastrointestinal-surgery', 'vias-biliares').map((note) => note.slug)

    expect(slugs.sort()).toEqual(['biliary-tract', 'charcot-triad-cholangitis', 'reynolds-pentad'])
  })
})

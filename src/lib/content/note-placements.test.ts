import { describe, expect, it } from 'vitest'
import { getNoteCategoryForTopic, getSpecialty } from '../content'
import { normalizeHeading } from './chapter-segments'
import { getReading } from './corpus'
import { NOTE_PLACEMENTS } from './note-placements'

function headingsOf(markdown: string): string[] {
  return [...markdown.matchAll(/^#{1,4}\s+(.+)$/gm)].map((match) => normalizeHeading(match[1] ?? ''))
}

describe('note placements', () => {
  it('places each note at most once', () => {
    const notes = NOTE_PLACEMENTS.map((placement) => placement.note)
    expect(new Set(notes).size).toBe(notes.length)
  })

  it('points at existing notes, specialties, chapters and anchors', () => {
    for (const placement of NOTE_PLACEMENTS) {
      expect(getNoteCategoryForTopic(placement.note), `${placement.note}: unknown note`).toBeDefined()
      expect(getSpecialty(placement.specialty), placement.specialty).toBeDefined()

      const lectura = getReading(placement.specialty, 'main')
      expect(lectura, `${placement.specialty}: missing lectura`).not.toBeNull()

      const chapter = lectura?.chapters.find((entry) => entry.slug === placement.chapter)
      expect(chapter, `${placement.note}: missing chapter ${placement.chapter}`).toBeDefined()
      if (!chapter) continue

      const anchor = normalizeHeading(placement.beforeHeading)
      const matches = headingsOf(chapter.markdown).filter((heading) => heading === anchor)
      expect(matches, `${placement.note}: anchor "${placement.beforeHeading}"`).toHaveLength(1)
    }
  })
})

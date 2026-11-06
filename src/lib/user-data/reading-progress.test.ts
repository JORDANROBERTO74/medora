import { describe, expect, it } from 'vitest'
import { countReadingChapters } from './reading-progress'
import type { ProgressEntry } from './types'

const entry = (contentKey: string, contentType: ProgressEntry['contentType'] = 'reading') => ({
  contentType,
  contentKey,
  completedAt: '2026-11-04T00:00:00.000Z',
})

const CHAPTERS = [
  'reading:/dashboard/reading/internal-medicine/covid-19',
  'reading:/dashboard/reading/internal-medicine/epoc',
]

describe('countReadingChapters', () => {
  it('counts only chapters of the main reading that were opened', () => {
    expect(countReadingChapters([], CHAPTERS)).toBe(0)
    expect(countReadingChapters([entry(CHAPTERS[0])], CHAPTERS)).toBe(1)
    expect(countReadingChapters([entry(CHAPTERS[0]), entry(CHAPTERS[1])], CHAPTERS)).toBe(2)
  })

  it('ignores summary readings, lessons and duplicate keys', () => {
    const progress = [
      entry('reading:/dashboard/reading/summary/internal-medicine/covid-19'),
      entry('reading:/dashboard/reading/internal-medicine/unknown'),
      entry('lesson:internal-medicine/covid-19', 'lesson'),
      entry(CHAPTERS[0]),
      entry(CHAPTERS[0]),
    ]
    expect(countReadingChapters(progress, CHAPTERS)).toBe(1)
  })
})

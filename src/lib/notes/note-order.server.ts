import { cache } from 'react'
import { specialties } from '@/lib/content'
import { getReading, getReview } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'
import type { NoteOrderMap } from './note-order'

/** Server-side map from content URL to its position in the corpus. */
export const getNoteOrderMap = cache((): NoteOrderMap => {
  const order: NoteOrderMap = {}

  for (const specialty of specialties) {
    const main = getReading(specialty.slug, 'main')
    main?.chapters.forEach((chapter, index) => {
      order[`/dashboard/reading/${specialty.slug}/${publicSlug(chapter.slug)}`] = {
        layer: 0,
        chapter: chapter.order || index + 1,
      }
    })

    const summary = getReading(specialty.slug, 'summary')
    summary?.chapters.forEach((chapter, index) => {
      order[`/dashboard/reading/summary/${specialty.slug}/${publicSlug(chapter.slug)}`] = {
        layer: 1,
        chapter: chapter.order || index + 1,
      }
    })
  }

  getReview()?.chapters.forEach((chapter, index) => {
    order[`/dashboard/reading/review/${publicSlug(chapter.slug)}`] = {
      layer: 0,
      chapter: chapter.order || index + 1,
    }
  })

  return order
})

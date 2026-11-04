import fs from 'node:fs'
import path from 'node:path'
import { cache } from 'react'
import { getNoteCategoryForTopic, specialties } from '../content'
import type { ChapterNote } from './chapter-segments'
import { READING_LAYER_FILE, type ReadingLayer } from './layers'
import { NOTE_PLACEMENTS } from './note-placements'
import type {
  CorpusIndex,
  CorpusManifest,
  CorpusTopic,
  ReadingChapter,
  ReadingFile,
} from './types'
import { publicSlug } from './slugs'

// Server-side reader for the trimmed Pulso corpus. Never import from a client component.
const DATA_DIR = path.join(process.cwd(), 'data', 'medical')

function readJson<T>(relativePath: string): T {
  return JSON.parse(fs.readFileSync(path.join(DATA_DIR, relativePath), 'utf8')) as T
}

export const getCorpusIndex = cache((): CorpusIndex => readJson<CorpusIndex>('index.json'))

export const getCorpusManifest = cache((contentId: string): CorpusManifest =>
  readJson<CorpusManifest>(`${contentId}/manifest.json`)
)

/** Content id (Spanish) from the public English specialty slug. */
export function contentSpecialtyId(publicSpecialtySlug: string): string | undefined {
  return getCorpusIndex().specialties.find((specialty) => publicSlug(specialty.slug) === publicSpecialtySlug)?.id
}

/** Topic slugs are unique across the corpus, so they resolve independently of
 * the category the UI groups them under (notes are rehomed by theme). */
const findCorpusTopic = cache((publicTopicSlug: string): CorpusTopic | null => {
  for (const specialty of getCorpusIndex().specialties) {
    const entry = getCorpusManifest(specialty.id).topics.find(
      (topic) => publicSlug(topic.slug) === publicTopicSlug
    )
    if (entry) return readJson<CorpusTopic>(`${specialty.id}/${entry.file}`)
  }
  return null
})

export const getTopicContent = cache(
  (publicSpecialtySlug: string, publicTopicSlug: string): CorpusTopic | null => {
    if (!contentSpecialtyId(publicSpecialtySlug)) return null
    return findCorpusTopic(publicTopicSlug)
  }
)

export const getReading = cache(
  (publicSpecialtySlug: string, layer: ReadingLayer): ReadingFile | null => {
    const contentId = contentSpecialtyId(publicSpecialtySlug)
    if (!contentId) return null

    try {
      return readJson<ReadingFile>(`${contentId}/${READING_LAYER_FILE[layer]}.json`)
    } catch {
      return null
    }
  }
)

export const getReview = cache((): ReadingFile | null => {
  try {
    return readJson<ReadingFile>('repaso/repaso.json')
  } catch {
    return null
  }
})

/** First chapter of the next specialty in the reading order; undefined after the last one. */
export function getFirstChapterOfNextSpecialty(
  publicSpecialtySlug: string,
  layer: ReadingLayer
) {
  const index = specialties.findIndex((specialty) => specialty.slug === publicSpecialtySlug)
  const specialty = specialties[index + 1]
  if (!specialty) return undefined

  const chapter = getReading(specialty.slug, layer)?.chapters[0]
  return chapter ? { specialty, chapter } : undefined
}

function plainExcerpt(markdown: string): string {
  const text = markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (text.length <= 180) return text
  return `${text.slice(0, 180).replace(/\s+\S*$/, '').replace(/[\s,;:.]+$/, '')}…`
}

/** Notes placed inside a reading chapter, in the order they should be shown. */
export const getChapterNotes = cache(
  (publicSpecialtySlug: string, chapterSlug: string): ChapterNote[] =>
    NOTE_PLACEMENTS.filter(
      (placement) => placement.specialty === publicSpecialtySlug && placement.chapter === chapterSlug
    ).flatMap((placement) => {
      const category = getNoteCategoryForTopic(placement.note)
      if (!category) return []

      const content = getTopicContent(category.slug, placement.note)
      if (!content) return []

      const blocks =
        content.sections[0]?.blocks.map((block) => ({
          title: block.title,
          markdown: block.markdown,
        })) ?? []

      return [
        {
          slug: placement.note,
          title: content.title,
          href: `/dashboard/lesson/${category.slug}/${placement.note}`,
          excerpt: plainExcerpt(blocks[0]?.markdown ?? ''),
          blocks,
          beforeHeading: placement.beforeHeading,
        },
      ]
    })
)

export function findReadingChapter(
  file: ReadingFile,
  publicChapterSlug: string
): ReadingChapter | undefined {
  return file.chapters.find((chapter) => publicSlug(chapter.slug) === publicChapterSlug)
}

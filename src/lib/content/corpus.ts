import fs from 'node:fs'
import path from 'node:path'
import { cache } from 'react'
import type {
  CorpusIndex,
  CorpusManifest,
  CorpusSpecialty,
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

function exists(relativePath: string): boolean {
  return fs.existsSync(path.join(DATA_DIR, relativePath))
}

export const getCorpusIndex = cache((): CorpusIndex => readJson<CorpusIndex>('index.json'))

export const getCorpusManifest = cache((contentId: string): CorpusManifest =>
  readJson<CorpusManifest>(`${contentId}/manifest.json`)
)

/** Content id (Spanish) from the public English specialty slug. */
export function contentSpecialtyId(publicSpecialtySlug: string): string | undefined {
  return getCorpusIndex().specialties.find((specialty) => publicSlug(specialty.slug) === publicSpecialtySlug)?.id
}

export const getTopicContent = cache(
  (publicSpecialtySlug: string, publicTopicSlug: string): CorpusTopic | null => {
    const contentId = contentSpecialtyId(publicSpecialtySlug)
    if (!contentId) return null

    const manifest = getCorpusManifest(contentId)
    const entry = manifest.topics.find((topic) => publicSlug(topic.slug) === publicTopicSlug)
    if (!entry) return null

    return readJson<CorpusTopic>(`${contentId}/${entry.file}`)
  }
)

export const getReading = cache(
  (publicSpecialtySlug: string, layer: 'lectura' | 'resumen'): ReadingFile | null => {
    const contentId = contentSpecialtyId(publicSpecialtySlug)
    if (!contentId) return null

    try {
      return readJson<ReadingFile>(`${contentId}/${layer}.json`)
    } catch {
      return null
    }
  }
)

export const getRepaso = cache((): ReadingFile | null => {
  try {
    return readJson<ReadingFile>('repaso/repaso.json')
  } catch {
    return null
  }
})

/** Specialties that ship a reading layer (lectura and/or resumen). */
export const getReadingSpecialties = cache((): CorpusSpecialty[] =>
  getCorpusIndex().specialties.filter(
    (specialty) =>
      specialty.kind === 'clinical' &&
      (exists(`${specialty.id}/lectura.json`) || exists(`${specialty.id}/resumen.json`))
  )
)

export function findReadingChapter(
  file: ReadingFile,
  publicChapterSlug: string
): ReadingChapter | undefined {
  return file.chapters.find((chapter) => publicSlug(chapter.slug) === publicChapterSlug)
}

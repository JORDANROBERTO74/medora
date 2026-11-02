// Client-safe shapes of the corpus JSON (no fs imports).
export type CorpusSpecialty = {
  id: string
  name: string
  slug: string
  order: number
  kind: 'clinical' | 'institutional'
  manifest: string
}

export type CorpusIndex = {
  schemaVersion: number
  contentVersion: string
  stats: { specialties: number; topics: number; blocks: number }
  specialties: CorpusSpecialty[]
}

export type CorpusTopicEntry = {
  id: string
  slug: string
  order: number
  title: string
  file: string
}

export type CorpusManifest = {
  schemaVersion: number
  contentVersion: string
  id: string
  name: string
  slug: string
  order: number
  kind: 'clinical' | 'institutional'
  description?: string
  topics: CorpusTopicEntry[]
}

export type CorpusBlock = { id: string; title: string; markdown: string }

export type CorpusSection = {
  id: string
  kind: string
  order: number
  title: string
  note?: string
  blocks: CorpusBlock[]
}

export type CorpusTopic = {
  schemaVersion: number
  contentVersion: string
  id: string
  specialty: string
  slug: string
  order: number
  title: string
  sections: CorpusSection[]
}

export type ReadingChapter = {
  id: string
  slug: string
  order: number
  title: string
  sourcePages?: string[]
  markdown: string
}

export type ReadingFile = {
  schemaVersion: number
  contentVersion: string
  specialty?: string
  kind?: string
  source?: { file?: string; title?: string; pages?: number }
  chapters: ReadingChapter[]
}

import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { noteCategories, specialties } from '../content'
import { CONTENT_SLUGS, publicSlug } from './slugs'

const DATA_DIR = path.join(process.cwd(), 'data', 'medical')
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/

type Index = {
  specialties: Array<{ id: string; slug: string; kind: string; manifest: string }>
}
type Manifest = { topics: Array<{ slug: string; title: string }> }
type Reading = { chapters: Array<{ slug: string; title: string }> }

function readJson<T>(relativePath: string): T {
  return JSON.parse(fs.readFileSync(path.join(DATA_DIR, relativePath), 'utf8')) as T
}

const index = readJson<Index>('index.json')
const manifests = new Map(
  index.specialties.map((specialty) => [specialty.id, readJson<Manifest>(specialty.manifest)])
)

function readingFile(contentId: string, layer: 'lectura' | 'resumen'): Reading | null {
  const file = path.join(DATA_DIR, contentId, `${layer}.json`)
  return fs.existsSync(file) ? readJson<Reading>(`${contentId}/${layer}.json`) : null
}

function expectValidSlugs(slugs: string[], scope: string) {
  for (const slug of slugs) {
    expect(slug, `${scope}: ${slug}`).toMatch(SLUG_RE)
  }
  expect(new Set(slugs).size, `${scope}: duplicate english slug`).toBe(slugs.length)
}

describe('content slug map', () => {
  it('covers every specialty, topic and reading chapter', () => {
    const used = new Set<string>()

    for (const specialty of index.specialties) {
      expect(CONTENT_SLUGS[specialty.slug], specialty.slug).toBeDefined()
      used.add(specialty.slug)

      for (const topic of manifests.get(specialty.id)?.topics ?? []) {
        expect(CONTENT_SLUGS[topic.slug], topic.slug).toBeDefined()
        used.add(topic.slug)
      }
    }

    for (const specialty of index.specialties) {
      for (const layer of ['lectura', 'resumen'] as const) {
        for (const chapter of readingFile(specialty.id, layer)?.chapters ?? []) {
          expect(CONTENT_SLUGS[chapter.slug], chapter.slug).toBeDefined()
          used.add(chapter.slug)
        }
      }
    }

    for (const chapter of readJson<Reading>('repaso/repaso.json').chapters) {
      expect(CONTENT_SLUGS[chapter.slug], chapter.slug).toBeDefined()
      used.add(chapter.slug)
    }

    expect(Object.keys(CONTENT_SLUGS).sort()).toEqual([...used].sort())
  })

  it('keeps english slugs url-safe and unique per namespace', () => {
    for (const value of Object.values(CONTENT_SLUGS)) expect(value).toMatch(SLUG_RE)

    expectValidSlugs(
      index.specialties.map((specialty) => publicSlug(specialty.slug)),
      'specialties'
    )

    for (const specialty of index.specialties) {
      expectValidSlugs(
        (manifests.get(specialty.id)?.topics ?? []).map((topic) => publicSlug(topic.slug)),
        `${specialty.id} topics`
      )

      for (const layer of ['lectura', 'resumen'] as const) {
        const chapters = readingFile(specialty.id, layer)?.chapters ?? []
        expectValidSlugs(
          chapters.map((chapter) => publicSlug(chapter.slug)),
          `${specialty.id} ${layer}`
        )
      }
    }

    expectValidSlugs(
      readJson<Reading>('repaso/repaso.json').chapters.map((chapter) => publicSlug(chapter.slug)),
      'repaso'
    )
  })

  it('maps the client note categories to the real corpus topics', () => {
    const corpusCategories = new Set(index.specialties.map((specialty) => publicSlug(specialty.slug)))
    const corpusTopics = new Map<string, string>()
    const institutional = new Set<string>()

    for (const specialty of index.specialties) {
      for (const topic of manifests.get(specialty.id)?.topics ?? []) {
        corpusTopics.set(publicSlug(topic.slug), topic.title)
        if (specialty.kind === 'institutional') institutional.add(publicSlug(topic.slug))
      }
    }

    expect(noteCategories).toHaveLength(5)

    for (const category of noteCategories) {
      expect(corpusCategories.has(category.slug), category.slug).toBe(true)
      for (const topic of category.topics) {
        expect(corpusTopics.get(topic.slug), topic.slug).toBe(topic.name)
      }
    }

    const covered = noteCategories.flatMap((category) => category.topics.map((topic) => topic.slug))
    expect(covered).toHaveLength(51)
    expect(new Set(covered).size).toBe(51)

    const expected = [...corpusTopics.keys()].filter((slug) => !institutional.has(slug))
    expect([...covered].sort()).toEqual(expected.sort())
  })

  it('keeps the four reading specialties inside the note categories', () => {
    expect(specialties.map((specialty) => specialty.slug)).toEqual(
      noteCategories.slice(0, 4).map((category) => category.slug)
    )
  })

  it('advertises the main reading size on the specialty cards', () => {
    for (const specialty of specialties) {
      const corpus = index.specialties.find((entry) => publicSlug(entry.slug) === specialty.slug)
      expect(corpus, specialty.slug).toBeDefined()
      const lectura = readingFile(corpus!.id, 'lectura')
      expect(specialty.detail, specialty.slug).toBe(`${lectura?.chapters.length} capítulos`)
    }
  })
})

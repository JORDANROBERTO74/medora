import { describe, expect, it } from 'vitest'
import {
  normalizeHeading,
  splitChapter,
  stripRepeatedTitle,
  type ChapterNote,
} from './chapter-segments'

const markdown = ['intro', '### UNO', 'texto uno', '### DOS', 'texto dos'].join('\n')

function note(slug: string, beforeHeading: string): ChapterNote {
  return { slug, title: slug, href: `/x/${slug}`, excerpt: 'resumen', beforeHeading }
}

function markdownOf(segments: ReturnType<typeof splitChapter>): string {
  return segments
    .filter((segment) => segment.kind === 'markdown')
    .map((segment) => segment.markdown)
    .join('\n')
}

function noteSlugs(segments: ReturnType<typeof splitChapter>): string[] {
  return segments
    .filter((segment) => segment.kind === 'note')
    .map((segment) => segment.note.slug)
}

describe('normalizeHeading', () => {
  it('ignores case, accents and repeated spaces', () => {
    expect(normalizeHeading('  DIAGNÓSTICO  ')).toBe('diagnostico')
    expect(normalizeHeading('Triada   de Beck')).toBe('triada de beck')
    expect(normalizeHeading('TEC – TRAUMA')).toBe('tec - trauma')
  })
})

describe('stripRepeatedTitle', () => {
  it('removes the bold label that repeats the heading', () => {
    expect(
      stripRepeatedTitle({ title: 'Puntos clave', markdown: '**Puntos clave:** texto' }).markdown
    ).toBe('texto')
    expect(
      stripRepeatedTitle({
        title: 'Definición / epidemiología',
        markdown: '**Definición / epidemiología**: texto',
      }).markdown
    ).toBe('texto')
    expect(stripRepeatedTitle({ title: 'Clínica', markdown: 'Clínica: texto' }).markdown).toBe(
      'texto'
    )
  })

  it('keeps unrelated text intact', () => {
    expect(stripRepeatedTitle({ title: 'Clínica', markdown: 'Otro texto' }).markdown).toBe(
      'Otro texto'
    )
  })
})

describe('splitChapter', () => {
  it('keeps every markdown character when there are no notes', () => {
    expect(markdownOf(splitChapter(markdown, []))).toBe(markdown)
  })

  it('inserts the card before the matching heading', () => {
    const segments = splitChapter(markdown, [note('x', 'dos')])
    const index = segments.findIndex((segment) => segment.kind === 'note')

    expect(index).toBeGreaterThan(-1)
    expect(segments[index]).toMatchObject({ kind: 'note', note: { slug: 'x' } })
    expect(segments[index + 1]).toMatchObject({
      kind: 'markdown',
      markdown: expect.stringContaining('### DOS'),
    })
    expect(markdownOf(segments)).toBe(markdown)
  })

  it('matches anchors ignoring accents and case', () => {
    const segments = splitChapter('### DEFINICIÓN\nhola', [note('x', 'definicion')])
    expect(noteSlugs(segments)).toEqual(['x'])
  })

  it('ignores missing anchors without losing content', () => {
    const segments = splitChapter(markdown, [note('x', 'no-existe')])

    expect(noteSlugs(segments)).toEqual([])
    expect(markdownOf(segments)).toBe(markdown)
  })

  it('keeps multiple cards in map order at the same heading', () => {
    const segments = splitChapter(markdown, [note('a', 'dos'), note('b', 'dos')])
    expect(noteSlugs(segments)).toEqual(['a', 'b'])
  })
})

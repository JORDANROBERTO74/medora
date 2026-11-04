import type { PersonalNote } from './personal-notes'

export type NoteOrderEntry = {
  /** 0 lectura, 1 resumen, 2 apuntes/temas, 9 sin orden. */
  layer: number
  /** Orden del capítulo dentro de su capa, o índice del tema. */
  chapter: number
}

export type NoteOrderMap = Record<string, NoteOrderEntry>

const UNORDERED_LAYER = 9
const UNORDERED_CHAPTER = Number.MAX_SAFE_INTEGER

/** Normalizes legacy reading URLs and removes query/hash/trailing slash. */
export function canonicalSourceHref(href?: string): string {
  if (!href) return ''

  const raw = href.split(/[?#]/)[0] ?? ''
  if (!raw.startsWith('/')) return raw

  const path = raw.length > 1 ? raw.replace(/\/+$/, '') : raw
  const parts = path.split('/').filter(Boolean)

  if (parts[0] !== 'dashboard' || parts[1] !== 'reading') return path

  if (parts[2] === 'lectura') {
    return `/dashboard/reading/${parts.slice(3).join('/')}`
  }
  if (parts[2] === 'resumen') {
    return `/dashboard/reading/summary/${parts.slice(3).join('/')}`
  }
  if (parts[2] === 'repaso') {
    return `/dashboard/reading/review/${parts.slice(3).join('/')}`
  }

  return path
}

/** Sorts notes by document position; creation date only breaks ties. */
export function sortNotes(notes: PersonalNote[], orderMap: NoteOrderMap): PersonalNote[] {
  return [...notes].sort((left, right) => {
    const leftEntry = orderMap[canonicalSourceHref(left.source?.href)]
    const rightEntry = orderMap[canonicalSourceHref(right.source?.href)]

    const leftLayer = leftEntry?.layer ?? UNORDERED_LAYER
    const rightLayer = rightEntry?.layer ?? UNORDERED_LAYER
    if (leftLayer !== rightLayer) return leftLayer - rightLayer

    const leftChapter = leftEntry?.chapter ?? UNORDERED_CHAPTER
    const rightChapter = rightEntry?.chapter ?? UNORDERED_CHAPTER
    if (leftChapter !== rightChapter) return leftChapter - rightChapter

    const leftBlock = left.anchor?.block ?? -1
    const rightBlock = right.anchor?.block ?? -1
    if (leftBlock !== rightBlock) return leftBlock - rightBlock

    const leftLine = left.anchor?.line ?? -1
    const rightLine = right.anchor?.line ?? -1
    if (leftLine !== rightLine) return leftLine - rightLine

    return right.createdAt - left.createdAt
  })
}

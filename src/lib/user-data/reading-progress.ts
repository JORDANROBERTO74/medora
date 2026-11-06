import type { ProgressEntry } from './types'

/**
 * Counts opened chapters of the main reading book. Progress keys store the full
 * href (`reading:/dashboard/reading/<specialty>/<chapter>`), so the caller passes
 * the canonical list and anything else (summary readings, old keys) is ignored.
 */
export function countReadingChapters(
  progress: readonly ProgressEntry[],
  chapterKeys: readonly string[]
): number {
  const known = new Set(chapterKeys)
  const opened = new Set<string>()

  for (const entry of progress) {
    if (entry.contentType !== 'reading') continue
    if (known.has(entry.contentKey)) opened.add(entry.contentKey)
  }

  return opened.size
}

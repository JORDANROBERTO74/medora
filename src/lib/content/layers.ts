export type ReadingLayer = 'main' | 'summary'

/** Visible labels stay in Spanish; only URL segments are English. */
export const READING_LAYER_LABEL: Record<ReadingLayer, string> = {
  main: 'Lectura',
  summary: 'Resumen',
}

/** Public layer to corpus filename (the corpus keeps Spanish names). */
export const READING_LAYER_FILE: Record<ReadingLayer, 'lectura' | 'resumen'> = {
  main: 'lectura',
  summary: 'resumen',
}

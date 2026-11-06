import type { Achievement } from './types'

export type Level = {
  /** 1-based. */
  index: number
  name: string
  /** Achievements needed to reach this level. */
  from: number
}

/**
 * 8 study-themed steps. Deliberately not professional ranks ("interno",
 * "residente"): the app trains, it does not certify anyone.
 */
export const LEVELS: readonly Level[] = [
  { index: 1, name: 'Curioso', from: 0 },
  { index: 2, name: 'Aprendiz', from: 3 },
  { index: 3, name: 'Estudioso', from: 6 },
  { index: 4, name: 'Analista', from: 10 },
  { index: 5, name: 'Clínico', from: 15 },
  { index: 6, name: 'Diagnosta', from: 21 },
  { index: 7, name: 'Mentor', from: 28 },
  { index: 8, name: 'Sabio', from: 36 },
]

export type LevelState = {
  /** Current level. */
  current: Level
  /** Next level, absent at the top. */
  next?: Level
  unlocked: number
  /** Achievements missing to reach `next`. */
  remaining: number
  /** 0–100 progress inside the current level. */
  percent: number
}

export function levelFor(achievements: readonly Achievement[]): LevelState {
  const unlocked = achievements.filter((item) => item.unlocked).length

  let current = LEVELS[0]
  for (const level of LEVELS) {
    if (unlocked >= level.from) current = level
  }

  const next = LEVELS.find((level) => level.from > unlocked)
  const total = achievements.length
  const span = next ? next.from - current.from : Math.max(1, total - current.from)
  const done = unlocked - current.from
  const percent = Math.min(100, Math.max(0, Math.round((done / span) * 100)))

  return {
    current,
    ...(next ? { next } : {}),
    unlocked,
    remaining: next ? next.from - unlocked : 0,
    percent,
  }
}

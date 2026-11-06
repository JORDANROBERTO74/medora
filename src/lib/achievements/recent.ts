import type { AchievementRecord } from '@/lib/user-data/types'
import type { Achievement } from './types'

/** Unlocked achievements the user has not opened Progreso to see yet. */
export function recentAchievements(
  list: readonly Achievement[],
  records: readonly AchievementRecord[]
): Achievement[] {
  const unseen = new Set(records.filter((item) => item.seenAt === null).map((item) => item.id))
  return list.filter((item) => item.unlocked && unseen.has(item.id))
}

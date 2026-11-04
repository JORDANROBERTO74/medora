/** Streaks are counted in the app timezone, matching the SQL trigger. */
export const APP_TIME_ZONE = 'America/La_Paz'

/** Calendar date in YYYY-MM-DD for the app timezone. */
export function todayInAppZone(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: APP_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

function previousDay(day: string): string {
  const date = new Date(`${day}T00:00:00Z`)
  date.setUTCDate(date.getUTCDate() - 1)
  return date.toISOString().slice(0, 10)
}

/**
 * Consecutive days ending today (or yesterday, so a streak is not lost before
 * the user's first session of the day). A gap resets the count to zero.
 */
export function computeStreak(days: Iterable<string>, today: string): number {
  const seen = new Set(days)
  if (seen.size === 0) return 0

  let cursor = seen.has(today) ? today : previousDay(today)
  if (!seen.has(cursor)) return 0

  let count = 0
  while (seen.has(cursor)) {
    count += 1
    cursor = previousDay(cursor)
  }
  return count
}

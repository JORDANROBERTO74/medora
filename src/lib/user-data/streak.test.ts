import { describe, expect, it } from 'vitest'
import { computeStreak, todayInAppZone } from './streak'

describe('computeStreak', () => {
  it('is zero without activity', () => {
    expect(computeStreak([], '2026-11-04')).toBe(0)
  })

  it('counts today only', () => {
    expect(computeStreak(['2026-11-04'], '2026-11-04')).toBe(1)
  })

  it('counts consecutive days back from today', () => {
    const days = ['2026-11-02', '2026-11-03', '2026-11-04']
    expect(computeStreak(days, '2026-11-04')).toBe(3)
  })

  it('keeps yesterday alive before todays first session', () => {
    expect(computeStreak(['2026-11-03'], '2026-11-04')).toBe(1)
  })

  it('resets when the run is broken', () => {
    const days = ['2026-11-01', '2026-11-02', '2026-11-04']
    expect(computeStreak(days, '2026-11-04')).toBe(1)
    expect(computeStreak(['2026-11-01'], '2026-11-04')).toBe(0)
  })

  it('crosses month and year boundaries', () => {
    expect(computeStreak(['2026-01-31', '2026-02-01'], '2026-02-01')).toBe(2)
    expect(computeStreak(['2025-12-31', '2026-01-01'], '2026-01-01')).toBe(2)
    expect(computeStreak(['2026-03-01', '2026-03-01'], '2026-03-01')).toBe(1)
  })
})

describe('todayInAppZone', () => {
  it('uses the app timezone, not the server one', () => {
    // La Paz is UTC-4: 02:00 UTC is still 22:00 of the previous day there.
    expect(todayInAppZone(new Date('2026-01-01T02:00:00Z'))).toBe('2025-12-31')
    expect(todayInAppZone(new Date('2026-11-04T12:00:00Z'))).toBe('2026-11-04')
  })
})

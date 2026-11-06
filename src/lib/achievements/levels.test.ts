import { describe, expect, it } from 'vitest'
import { LEVELS, levelFor } from './levels'
import type { Achievement } from './types'

const list = (unlocked: number, total = 49): Achievement[] =>
  Array.from({ length: total }, (_, index) => ({
    id: `a-${index}`,
    name: `Logro ${index}`,
    description: '',
    group: 'meta',
    tier: 'bronze',
    icon: 'seedling',
    unlocked: index < unlocked,
    progress: { current: 0, target: 1 },
  }))

describe('levelFor', () => {
  it('starts at the first level with nothing unlocked', () => {
    const state = levelFor(list(0))
    expect(state.current.name).toBe('Curioso')
    expect(state.next?.name).toBe('Aprendiz')
    expect(state.remaining).toBe(3)
    expect(state.percent).toBe(0)
  })

  it('climbs at each threshold', () => {
    expect(levelFor(list(3)).current.name).toBe('Aprendiz')
    expect(levelFor(list(9)).current.name).toBe('Estudioso')
    expect(levelFor(list(10)).current.name).toBe('Analista')
    expect(levelFor(list(35)).current.name).toBe('Mentor')
  })

  it('reaches the top level with no next step', () => {
    const state = levelFor(list(49))
    expect(state.current.name).toBe(LEVELS[LEVELS.length - 1].name)
    expect(state.next).toBeUndefined()
    expect(state.remaining).toBe(0)
    expect(state.percent).toBe(100)
  })

  it('reports progress inside the current level', () => {
    // Analista starts at 10, Clínico at 15: 12 unlocked is 40%.
    const state = levelFor(list(12))
    expect(state.current.name).toBe('Analista')
    expect(state.percent).toBe(40)
    expect(state.remaining).toBe(3)
  })
})

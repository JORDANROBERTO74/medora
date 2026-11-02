import { describe, expect, it } from 'vitest'
import { stepNavScroll } from './nav-scroll'

describe('stepNavScroll', () => {
  it('is always visible near the top of the page', () => {
    expect(stepNavScroll({ hidden: true, acc: 100 }, 50, 40)).toEqual({ hidden: false, acc: 0 })
  })

  it('hides after 80px of net downward scroll', () => {
    const first = stepNavScroll({ hidden: false, acc: 0 }, 30, 200)
    expect(first).toEqual({ hidden: false, acc: 30 })
    expect(stepNavScroll(first, 60, 260)).toEqual({ hidden: true, acc: 0 })
  })

  it('shows again after 40px of net upward scroll', () => {
    const first = stepNavScroll({ hidden: true, acc: 0 }, -25, 300)
    expect(first).toEqual({ hidden: true, acc: -25 })
    expect(stepNavScroll(first, -20, 280)).toEqual({ hidden: false, acc: 0 })
  })

  it('ignores jitter below the thresholds', () => {
    const down = stepNavScroll({ hidden: false, acc: 0 }, 50, 200)
    expect(down.hidden).toBe(false)
    const back = stepNavScroll(down, -30, 170)
    expect(back).toEqual({ hidden: false, acc: 20 })
  })
})

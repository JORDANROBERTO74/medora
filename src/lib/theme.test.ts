import { describe, expect, it } from 'vitest'
import { isDarkTheme } from './theme'

describe('isDarkTheme', () => {
  it('follows the explicit light and dark choices', () => {
    expect(isDarkTheme('light', true)).toBe(false)
    expect(isDarkTheme('dark', false)).toBe(true)
  })

  it('uses the system preference only when set to system', () => {
    expect(isDarkTheme('system', true)).toBe(true)
    expect(isDarkTheme('system', false)).toBe(false)
  })
})

import { describe, expect, it } from 'vitest'
import { safeNextPath } from './safe-next-path'

describe('safeNextPath', () => {
  it('keeps same-origin paths, including query strings', () => {
    expect(safeNextPath('/dashboard')).toBe('/dashboard')
    expect(safeNextPath('/dashboard/quiz?mode=cases')).toBe('/dashboard/quiz?mode=cases')
    expect(safeNextPath('/dashboard/topics/surgery')).toBe('/dashboard/topics/surgery')
  })

  it('falls back to the dashboard for anything else', () => {
    const unsafe: Array<string | null | undefined> = [
      null,
      undefined,
      '',
      'dashboard',
      'https://evil.com',
      '//evil.com',
      '/\\evil',
      '/dash board',
      '/x\u0000y',
      '/javascript:alert(1)',
    ]
    for (const value of unsafe) expect(safeNextPath(value)).toBe('/dashboard')
  })
})

import { describe, expect, it } from 'vitest'
import { rateLimitAsync } from './rate-limit'

describe('rateLimitAsync (in-memory fallback)', () => {
  it('allows up to the limit and then blocks with a retry window', async () => {
    const key = `test-${Date.now()}-${Math.random()}`
    const options = { limit: 3, windowMs: 60_000 }

    for (let attempt = 0; attempt < 3; attempt += 1) {
      expect((await rateLimitAsync(key, options)).ok).toBe(true)
    }

    const blocked = await rateLimitAsync(key, options)
    expect(blocked.ok).toBe(false)
    if (!blocked.ok) {
      expect(blocked.retryAfterSec).toBeGreaterThan(0)
      expect(blocked.retryAfterSec).toBeLessThanOrEqual(60)
    }
  })
})

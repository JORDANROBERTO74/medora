import { afterEach, describe, expect, it } from 'vitest'
import { buildDashboardUrl, buildForgotUrl, buildRecoveryConfirmUrl } from './links'

const originalSite = process.env.NEXT_PUBLIC_SITE_URL

afterEach(() => {
  process.env.NEXT_PUBLIC_SITE_URL = originalSite
})

describe('email links', () => {
  it('builds the recovery confirm url with the token and type', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://medora.vercel.app/'
    const url = new URL(buildRecoveryConfirmUrl('abc123'))

    expect(url.origin).toBe('https://medora.vercel.app')
    expect(url.pathname).toBe('/auth/confirm')
    expect(url.searchParams.get('token_hash')).toBe('abc123')
    expect(url.searchParams.get('type')).toBe('recovery')
  })

  it('falls back to localhost and strips trailing slashes', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL

    expect(buildDashboardUrl()).toBe('http://localhost:3000/dashboard')
    expect(buildForgotUrl()).toBe('http://localhost:3000/forgot-password')
  })
})

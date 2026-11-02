import { describe, expect, it } from 'vitest'
import { accessTokenAmr, isPasswordSession } from './recovery'

function makeToken(payload: object): string {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url')
  return `header.${body}.signature`
}

describe('accessTokenAmr', () => {
  it('decodes an amr object and an amr array', () => {
    expect(accessTokenAmr(makeToken({ amr: { method: 'password' } }))).toEqual(['password'])
    expect(accessTokenAmr(makeToken({ amr: [{ method: 'recovery' }, { method: 'otp' }] }))).toEqual([
      'recovery',
      'otp',
    ])
  })

  it('returns null for missing or malformed tokens', () => {
    expect(accessTokenAmr(undefined)).toBeNull()
    expect(accessTokenAmr('not-a-jwt')).toBeNull()
    expect(accessTokenAmr('a.b.c')).toBeNull()
    expect(accessTokenAmr(makeToken({ sub: 'x' }))).toBeNull()
  })
})

describe('isPasswordSession', () => {
  it('flags normal password sign-ins', () => {
    expect(isPasswordSession(makeToken({ amr: { method: 'password' } }))).toBe(true)
  })

  it('does not flag recovery or OTP sessions', () => {
    expect(isPasswordSession(makeToken({ amr: { method: 'recovery' } }))).toBe(false)
    expect(isPasswordSession(makeToken({ amr: [{ method: 'otp' }] }))).toBe(false)
  })

  it('falls back to false when the claim is unavailable', () => {
    expect(isPasswordSession(undefined)).toBe(false)
    expect(isPasswordSession('garbage')).toBe(false)
  })
})

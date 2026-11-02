import { describe, expect, it } from 'vitest'
import { isDisposableEmail } from './is-disposable-email'

describe('isDisposableEmail', () => {
  it('blocks known disposable domains, case-insensitively', () => {
    expect(isDisposableEmail('user@mailinator.com')).toBe(true)
    expect(isDisposableEmail('USER@MAILINATOR.COM')).toBe(true)
    expect(isDisposableEmail('user@guerrillamail.com')).toBe(true)
  })

  it('blocks subdomains of disposable domains', () => {
    expect(isDisposableEmail('user@inbox.mailinator.com')).toBe(true)
  })

  it('does not let a trailing dot bypass the denylist', () => {
    expect(isDisposableEmail('user@mailinator.com.')).toBe(true)
    expect(isDisposableEmail('user@MAILINATOR.com..')).toBe(true)
  })

  it('allows regular providers', () => {
    for (const email of ['juan@gmail.com', 'juan@outlook.com', 'juan@hospital.org', 'juan@empresa.com.co']) {
      expect(isDisposableEmail(email)).toBe(false)
    }
  })

  it('ignores malformed input', () => {
    expect(isDisposableEmail('no-email')).toBe(false)
    expect(isDisposableEmail('')).toBe(false)
  })
})

import { describe, expect, it } from 'vitest'
import { fieldErrors, loginSchema, signupSchema, resetPasswordSchema } from './schemas'

const validSignup = {
  fullName: 'Juan Pérez',
  email: 'juan@example.com',
  password: 'Password1',
  confirmPassword: 'Password1',
}

describe('signupSchema', () => {
  it('accepts a valid signup and lowercases the email', () => {
    const parsed = signupSchema.safeParse({ ...validSignup, email: '  Juan@Example.COM ' })
    expect(parsed.success).toBe(true)
    expect(parsed.data?.email).toBe('juan@example.com')
  })

  it('rejects weak passwords', () => {
    for (const password of ['pass1', 'password1', 'PASSWORD1', 'Password']) {
      expect(signupSchema.safeParse({ ...validSignup, password }).success).toBe(false)
    }
  })

  it('caps password and email length', () => {
    expect(signupSchema.safeParse({ ...validSignup, password: `Aa1${'x'.repeat(80)}` }).success).toBe(false)
    expect(signupSchema.safeParse({ ...validSignup, email: `${'a'.repeat(250)}@example.com` }).success).toBe(false)
  })

  it('rejects a mismatched confirmation', () => {
    expect(signupSchema.safeParse({ ...validSignup, confirmPassword: 'Password2' }).success).toBe(false)
  })

  it('rejects invalid emails and short names', () => {
    expect(signupSchema.safeParse({ ...validSignup, email: 'no-email' }).success).toBe(false)
    expect(signupSchema.safeParse({ ...validSignup, fullName: 'J' }).success).toBe(false)
  })
})

describe('loginSchema', () => {
  it('requires a password', () => {
    expect(loginSchema.safeParse({ email: 'juan@example.com', password: '' }).success).toBe(false)
  })
})

describe('resetPasswordSchema', () => {
  it('requires matching strong passwords', () => {
    expect(resetPasswordSchema.safeParse({ password: 'Password1', confirmPassword: 'Password1' }).success).toBe(true)
    expect(resetPasswordSchema.safeParse({ password: 'Password1', confirmPassword: 'Other1234' }).success).toBe(false)
  })
})

describe('fieldErrors', () => {
  it('keeps the first issue per field', () => {
    const result = signupSchema.safeParse({ ...validSignup, email: 'bad' })
    expect(result.success).toBe(false)
    if (result.success) return
    const errors = fieldErrors(result.error)
    expect(Object.keys(errors)).toEqual(['email'])
    expect(errors.email).toBe('Correo inválido')
  })
})

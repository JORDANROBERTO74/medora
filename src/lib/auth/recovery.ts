/**
 * Marks a session created by a password-recovery link, so /reset-password cannot
 * be used with an ordinary logged-in session (an attacker with a stolen session
 * must not be able to change the password without the email link).
 */
export const RECOVERY_COOKIE = 'medora-recovery'
export const RECOVERY_MAX_AGE_SEC = 600

export const recoveryCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/reset-password',
  maxAge: RECOVERY_MAX_AGE_SEC,
}

type AmrEntry = { method?: string }

/** Decoded `amr` methods of a Supabase access token, or null when unavailable. */
export function accessTokenAmr(accessToken: string | undefined): string[] | null {
  if (!accessToken) return null
  const payload = accessToken.split('.')[1]
  if (!payload) return null

  try {
    const json = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as {
      amr?: AmrEntry[] | AmrEntry
    }
    if (!json.amr) return null
    const entries = Array.isArray(json.amr) ? json.amr : [json.amr]
    return entries.map((entry) => entry.method).filter((method): method is string => typeof method === 'string')
  } catch {
    return null
  }
}

/**
 * A normal password sign-in must not unlock the password reset form, even if the
 * client sets a fake recovery cookie (httpOnly prevents reading, not writing a
 * same-named cookie). The `amr` claim is signed by Supabase.
 */
export function isPasswordSession(accessToken: string | undefined): boolean {
  return accessTokenAmr(accessToken)?.includes('password') ?? false
}

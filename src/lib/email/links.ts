/** Canonical public origin for links inside emails (never request headers). */
export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  return (raw && raw.length > 0 ? raw : 'http://localhost:3000').replace(/\/+$/, '')
}

/** Server-side link that consumes the recovery token and opens the reset form. */
export function buildRecoveryConfirmUrl(tokenHash: string): string {
  const url = new URL('/auth/confirm', siteUrl())
  url.searchParams.set('token_hash', tokenHash)
  url.searchParams.set('type', 'recovery')
  return url.toString()
}

export function buildDashboardUrl(): string {
  return `${siteUrl()}/dashboard`
}

export function buildForgotUrl(): string {
  return `${siteUrl()}/forgot-password`
}

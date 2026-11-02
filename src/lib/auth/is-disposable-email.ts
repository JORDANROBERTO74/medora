import { DISPOSABLE_DOMAINS } from './disposable-domains'

/** True when the email domain (or a parent domain) is a known disposable provider. */
export function isDisposableEmail(email: string): boolean {
  // A trailing dot is valid FQDN notation and must not bypass the denylist.
  const domain = email
    .trim()
    .toLowerCase()
    .split('@')
    .pop()
    ?.replace(/\.+$/, '')
  if (!domain) return false
  if (DISPOSABLE_DOMAINS.has(domain)) return true

  const parts = domain.split('.')
  for (let index = 1; index < parts.length; index += 1) {
    if (DISPOSABLE_DOMAINS.has(parts.slice(index).join('.'))) return true
  }
  return false
}

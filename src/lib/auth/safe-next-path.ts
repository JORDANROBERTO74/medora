/**
 * Only same-origin relative paths: `/…` but not `//…`, `\`, or absolute URLs.
 * Used for every post-auth redirect.
 */
const SAFE_RELATIVE_PATH = /^\/[A-Za-z0-9._~/?&=%-]*$/

export function safeNextPath(next: string | null | undefined): string {
  if (!next) return '/dashboard'
  if (!next.startsWith('/') || next.startsWith('//')) return '/dashboard'
  if (next.includes('\\') || /[\u0000-\u001F\u007F\s]/.test(next)) return '/dashboard'
  if (!SAFE_RELATIVE_PATH.test(next)) return '/dashboard'
  return next
}

// Regenerates src/lib/auth/disposable-domains.ts from the public blocklist.
// Usage:
//   curl -o disposable_email_blocklist.conf https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/master/disposable_email_blocklist.conf
//   node scripts/generate-disposable-domains.mjs disposable_email_blocklist.conf src/lib/auth/disposable-domains.ts
import { readFileSync, writeFileSync } from 'node:fs'

const [, , source, output] = process.argv

if (!source || !output) {
  console.error('usage: node scripts/generate-disposable-domains.mjs <blocklist.conf> <out.ts>')
  process.exit(1)
}

const domains = [
  ...new Set(
    readFileSync(source, 'utf8')
      .split(/\r?\n/)
      .map((line) => line.trim().toLowerCase())
      .filter((line) => line.length > 0 && !line.startsWith('#'))
  ),
].sort()

const header = `// Disposable email domains (server-only guard for signup).
// Source: https://github.com/disposable-email-domains/disposable-email-domains
// Fetched: 2026-11-01. Refresh by downloading the blocklist and rerunning scripts/generate-disposable-domains.mjs.
`
const body = `const RAW = \`${domains.join('\n')}\`

export const DISPOSABLE_DOMAINS = new Set(RAW.split('\\n'))
`
writeFileSync(output, header + body, 'utf8')
console.log(`wrote ${domains.length} domains to ${output}`)

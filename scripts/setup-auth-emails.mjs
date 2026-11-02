#!/usr/bin/env node
// One-shot Supabase Auth configuration for Medora's email stack.
//
// Usage:
//   SUPABASE_ACCESS_TOKEN=sbp_... SITE_URL=https://medora.vercel.app node scripts/setup-auth-emails.mjs
//
// Optional:
//   UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN  -> edge secrets for the signup hook
//   SEND_EMAIL_HOOK_SECRET / BEFORE_USER_CREATED_HOOK_SECRET -> reuse existing values
//
// Generates the webhook secrets, stores them as function secrets, enables both
// Auth hooks and points Site/Redirect URLs at SITE_URL. The email hook secret is
// written to .env.local (gitignored) and never printed.

import { randomBytes } from 'node:crypto'
import { appendFileSync, existsSync, readFileSync } from 'node:fs'

const ref = 'zmbmlwhwwdawpxvuwepp'
const token = process.env.SUPABASE_ACCESS_TOKEN?.trim()
const siteUrl = (process.env.SITE_URL?.trim() || 'https://medora.vercel.app').replace(/\/+$/, '')

if (!token) {
  console.error('Missing SUPABASE_ACCESS_TOKEN (Supabase personal access token).')
  process.exit(1)
}

const projectApi = `https://api.supabase.com/v1/projects/${ref}`
const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }

const newSecret = () => `v1,whsec_${randomBytes(32).toString('base64')}`

async function api(path, init) {
  const response = await fetch(projectApi + path, { ...init, headers })
  if (!response.ok) {
    console.error(`\n${init?.method ?? 'GET'} ${path} -> ${response.status}`)
    console.error(await response.text())
    process.exit(1)
  }
  return response.json().catch(() => ({}))
}

function ensureEnv(name, value) {
  const path = '.env.local'
  const current = existsSync(path) ? readFileSync(path, 'utf8') : ''
  if (new RegExp(`^${name}=`, 'm').test(current)) {
    console.log(`${name} already present in .env.local (left untouched)`)
    return
  }
  appendFileSync(path, `${current === '' || current.endsWith('\n') ? '' : '\n'}${name}=${value}\n`, 'utf8')
  console.log(`${name} written to .env.local`)
}

const emailSecret = process.env.SEND_EMAIL_HOOK_SECRET?.trim() || newSecret()
const beforeUserSecret = process.env.BEFORE_USER_CREATED_HOOK_SECRET?.trim() || newSecret()

const secrets = [
  { name: 'SEND_EMAIL_HOOK_SECRET', value: emailSecret },
  { name: 'BEFORE_USER_CREATED_HOOK_SECRET', value: beforeUserSecret },
]

const upstashUrl = process.env.UPSTASH_REDIS_REST_URL?.trim()
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim()
if (upstashUrl && upstashToken) {
  secrets.push({ name: 'UPSTASH_REDIS_REST_URL', value: upstashUrl })
  secrets.push({ name: 'UPSTASH_REDIS_REST_TOKEN', value: upstashToken })
}

console.log('1/3 Storing function secrets...')
// Note: this endpoint replaces all project secrets. This project owns only these.
await api('/secrets', { method: 'POST', body: JSON.stringify(secrets) })

console.log('2/3 Enabling Auth hooks and production URLs...')
await api('/config/auth', {
  method: 'PATCH',
  body: JSON.stringify({
    site_url: siteUrl,
    uri_allow_list: `${siteUrl}/auth/confirm,${siteUrl}/auth/callback,https://*-${ref}.vercel.app/auth/confirm`,
    hook_send_email_enabled: true,
    hook_send_email_uri: `${siteUrl}/api/auth/send-email`,
    hook_send_email_secrets: [{ value: emailSecret }],
    hook_before_user_created_enabled: true,
    hook_before_user_created_uri: `https://${ref}.supabase.co/functions/v1/before-user-created`,
    hook_before_user_created_secrets: [{ value: beforeUserSecret }],
  }),
})

console.log('3/3 Writing the email hook secret to .env.local...')
ensureEnv('SEND_EMAIL_HOOK_SECRET', emailSecret)

console.log('\nDone.')
console.log(`Site URL: ${siteUrl}`)
console.log(`Send email hook: ${siteUrl}/api/auth/send-email`)
console.log(`Before user created: https://${ref}.supabase.co/functions/v1/before-user-created`)
console.log(
  upstashUrl && upstashToken
    ? 'Upstash edge secrets: set'
    : 'Upstash edge secrets: missing (hook allows requests, DB guards remain)'
)
console.log('Remember to add SEND_EMAIL_HOOK_SECRET to the hosting environment too.')

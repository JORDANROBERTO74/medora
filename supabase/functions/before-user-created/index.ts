// Supabase Auth "before user created" hook.
//
// Verifies the webhook signature, then caps direct-API signups per IP with
// Upstash. When Upstash is not configured the request is allowed: the database
// still enforces canonical email uniqueness and the disposable-domain denylist.
//
// Deploy with JWT verification disabled (GoTrue authenticates via the webhook
// signature). Required secrets:
//   BEFORE_USER_CREATED_HOOK_SECRET = v1,whsec_...
//   UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN (optional, enables the limit)

import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'

const WINDOW_SEC = 15 * 60
const MAX_SIGNUPS = 5

type HookPayload = {
  metadata?: { ip_address?: string }
  user?: { email?: string | null }
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

async function signupRateLimited(ip: string): Promise<boolean> {
  const url = Deno.env.get('UPSTASH_REDIS_REST_URL')?.trim()
  const token = Deno.env.get('UPSTASH_REDIS_REST_TOKEN')?.trim()
  if (!url || !token) return false

  const key = `medora:hook-signup:${await sha256Hex(ip)}`

  try {
    const response = await fetch(`${url}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify([
        ['INCR', key],
        ['EXPIRE', key, WINDOW_SEC, 'NX'],
      ]),
    })
    if (!response.ok) return false

    const results = (await response.json()) as Array<{ result?: number }>
    return (results[0]?.result ?? 0) > MAX_SIGNUPS
  } catch {
    // Fail open: the hook must not take signup down if Redis is unreachable.
    console.error('[before-user-created] Upstash unavailable, allowing request')
    return false
  }
}

Deno.serve(async (request) => {
  if (request.method !== 'POST') {
    return json(405, { error: { message: 'Method not allowed', http_code: 405 } })
  }

  const payload = await request.text()
  const secret = Deno.env.get('BEFORE_USER_CREATED_HOOK_SECRET')?.replace('v1,whsec_', '')
  if (!secret) {
    console.error('[before-user-created] missing BEFORE_USER_CREATED_HOOK_SECRET')
    return json(500, { error: { message: 'Hook not configured', http_code: 500 } })
  }

  let event: HookPayload
  try {
    event = new Webhook(secret).verify(payload, Object.fromEntries(request.headers)) as HookPayload
  } catch {
    return json(401, { error: { message: 'Invalid signature', http_code: 401 } })
  }

  const ip = event.metadata?.ip_address
  if (ip && (await signupRateLimited(ip))) {
    return json(400, {
      error: {
        message: 'Demasiados registros desde esta conexión. Inténtalo más tarde.',
        http_code: 400,
      },
    })
  }

  return json(200, {})
})

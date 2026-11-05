import { createHash } from 'node:crypto'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

/**
 * Upstash sliding window when configured; in-memory fallback otherwise.
 * In-memory buckets are per instance: fine for local dev, set the UPSTASH_*
 * env vars before running multiple serverless instances.
 */
export type RateLimitResult = { ok: true } | { ok: false; retryAfterSec: number }

type LimitOptions = { limit: number; windowMs: number }

const buckets = new Map<string, { count: number; resetAt: number }>()
const limiters = new Map<string, Ratelimit>()
let sharedRedis: Redis | null | undefined

/** Rate-limit keys must not store raw emails (PII) in Redis. */
export function hashKey(value: string): string {
  return createHash('sha256').update(value).digest('hex').slice(0, 32)
}

function getRedis(): Redis | null {
  if (sharedRedis !== undefined) return sharedRedis
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim()
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim()
  if (!url || !token) {
    sharedRedis = null
    return sharedRedis
  }
  try {
    sharedRedis = new Redis({ url, token })
  } catch {
    // A malformed URL must never take auth down: fall back to the memory bucket.
    console.warn('[rate-limit] invalid Upstash config, falling back to memory')
    sharedRedis = null
  }
  return sharedRedis
}

function memoryLimit(key: string, { limit, windowMs }: LimitOptions): RateLimitResult {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || now >= bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true }
  }

  if (bucket.count >= limit) {
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)) }
  }

  bucket.count += 1
  return { ok: true }
}

function getLimiter(redis: Redis, options: LimitOptions): Ratelimit {
  const cacheKey = `${options.limit}:${options.windowMs}`
  let limiter = limiters.get(cacheKey)
  if (!limiter) {
    const windowSec = Math.max(1, Math.ceil(options.windowMs / 1000))
    limiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(options.limit, `${windowSec} s`),
      prefix: 'medora:rl',
    })
    limiters.set(cacheKey, limiter)
  }
  return limiter
}

export async function rateLimitAsync(key: string, options: LimitOptions): Promise<RateLimitResult> {
  const redis = getRedis()
  if (!redis) return memoryLimit(key, options)

  try {
    const { success, reset } = await getLimiter(redis, options).limit(key)
    if (success) return { ok: true }
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((reset - Date.now()) / 1000)) }
  } catch {
    // Keep auth available if Redis is down: the in-memory bucket still caps
    // this instance (not distributed — documented).
    console.warn('[rate-limit] Upstash unavailable, falling back to memory')
    return memoryLimit(key, options)
  }
}

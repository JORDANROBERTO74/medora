import { cache } from 'react'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import type { User } from '@supabase/supabase-js'

// Session cookies are HttpOnly: no browser client reads them (all auth runs on the
// server). Adding a client-side Supabase client later requires revisiting this.
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
}

// One cookie-backed client per RSC/Action request.
export const createClient = cache(async () => {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookieOptions,
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // Server Components cannot write cookies; the proxy refreshes the session.
          }
        },
      },
    }
  )
})

// Deduped session check for this request. Always use getUser (validates the JWT).
export const getAuthUser = cache(
  async (): Promise<{ supabase: Awaited<ReturnType<typeof createClient>>; user: User | null }> => {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return { supabase, user }
  }
)

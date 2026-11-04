import { cache } from 'react'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerClient } from '@supabase/ssr'
import type { User } from '@supabase/supabase-js'
import type { Database } from './database.types'

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

  return createServerClient<Database>(
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
    const first = await supabase.auth.getUser()
    if (!first.error) return { supabase, user: first.data.user }

    // getUser talks to the auth API: a network blip must not read as an expired
    // session, or the caller drops the user's write behind a wrong message.
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (!session) return { supabase, user: null }

    const retried = await supabase.auth.getUser()
    return { supabase, user: retried.data.user }
  }
)

/** Authenticated session, or a redirect back to login with the intended path. */
export const requireUser = cache(async () => {
  const { supabase, user } = await getAuthUser()

  if (!user) {
    const headerList = await headers()
    const pathname = headerList.get('x-pathname') ?? '/dashboard'
    redirect(`/login?next=${encodeURIComponent(pathname)}`)
  }

  return { supabase, user }
})

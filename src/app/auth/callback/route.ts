import { NextResponse, connection } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { safeNextPath } from '@/lib/auth/safe-next-path'
import { RECOVERY_COOKIE, recoveryCookieOptions } from '@/lib/auth/recovery'

// PKCE callback for both signup confirmation and password recovery links.
export async function GET(request: Request) {
  await connection()

  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = safeNextPath(searchParams.get('next'))

  if (!code) {
    return NextResponse.redirect(`${origin}/login?error=auth`)
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    return NextResponse.redirect(`${origin}/login?error=auth`)
  }

  const response = NextResponse.redirect(`${origin}${next}`)

  // Only a recovery link may unlock the password reset form.
  if (next === '/reset-password') {
    response.cookies.set(RECOVERY_COOKIE, '1', recoveryCookieOptions)
  }

  return response
}

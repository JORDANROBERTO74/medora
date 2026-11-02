import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { RECOVERY_COOKIE, recoveryCookieOptions } from '@/lib/auth/recovery'

// Consumes the recovery token server-side (works from any device, unlike PKCE
// exchanges that need the browser that requested the reset).
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const tokenHash = searchParams.get('token_hash')
  const type = searchParams.get('type')

  if (!tokenHash || type !== 'recovery') {
    return NextResponse.redirect(`${origin}/login?error=auth`)
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.verifyOtp({ type: 'recovery', token_hash: tokenHash })

  if (error) {
    return NextResponse.redirect(`${origin}/login?error=auth`)
  }

  const response = NextResponse.redirect(`${origin}/reset-password`)
  response.cookies.set(RECOVERY_COOKIE, '1', recoveryCookieOptions)
  return response
}

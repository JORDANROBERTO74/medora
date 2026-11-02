import { NextResponse } from 'next/server'
import { Webhook } from 'standardwebhooks'
import { buildRecoveryConfirmUrl } from '@/lib/email/links'
import { sendPasswordResetEmail } from '@/lib/email/send'

// Supabase Auth "send email" hook: replaces the Supabase mailer. Only password
// recovery is used by this app (signup confirmation is disabled), everything
// else is acknowledged and ignored.

type SendEmailPayload = {
  user?: { email?: string }
  email_data?: { token_hash?: string; email_action_type?: string; redirect_to?: string }
}

const ok = () => NextResponse.json({}, { status: 200 })

function errorResponse(status: number, message: string) {
  return NextResponse.json({ error: { message, http_code: status } }, { status })
}

export async function POST(request: Request) {
  const payload = await request.text()
  const secret = process.env.SEND_EMAIL_HOOK_SECRET?.replace(/^v1,whsec_/, '')

  if (!secret) {
    console.error('[send-email-hook] missing SEND_EMAIL_HOOK_SECRET')
    return errorResponse(500, 'Hook not configured')
  }

  let event: SendEmailPayload
  try {
    event = new Webhook(secret).verify(payload, Object.fromEntries(request.headers)) as SendEmailPayload
  } catch {
    return errorResponse(401, 'Invalid signature')
  }

  if (event.email_data?.email_action_type !== 'recovery') {
    return ok()
  }

  const to = event.user?.email
  const tokenHash = event.email_data?.token_hash
  if (!to || !tokenHash) {
    return errorResponse(400, 'Invalid payload')
  }

  const sent = await sendPasswordResetEmail(to, buildRecoveryConfirmUrl(tokenHash))
  if (!sent) {
    // Ask Supabase Auth to retry later instead of losing the recovery email.
    return NextResponse.json(
      { error: { message: 'Email delivery failed', http_code: 503 } },
      { status: 503, headers: { 'retry-after': 'true' } }
    )
  }

  return ok()
}

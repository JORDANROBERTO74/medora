import { describe, expect, it } from 'vitest'
import { render } from 'react-email'
import { PasswordChangedEmail } from '../../emails/password-changed-email'
import { PasswordResetEmail } from '../../emails/password-reset-email'
import { WelcomeEmail } from '../../emails/welcome-email'

describe('email templates', () => {
  // React SSR separates adjacent text nodes with <!-- --> comments.
  const plain = (html: string) => html.replaceAll('<!-- -->', '')

  it('welcome greets the user and links to the dashboard', async () => {
    const html = plain(
      await render(<WelcomeEmail name="Ana" dashboardUrl="https://medora.vercel.app/dashboard" />)
    )

    expect(html).toContain('Bienvenido, Ana.')
    expect(html).toContain('https://medora.vercel.app/dashboard')
  })

  it('password reset carries the recovery link', async () => {
    const url = 'https://medora.vercel.app/auth/confirm?token_hash=abc&type=recovery'
    const html = plain(await render(<PasswordResetEmail resetUrl={url} />))

    expect(html).toContain('Restablece tu contraseña.')
    expect(html).toContain('token_hash=abc')
  })

  it('password changed mentions the security contact', async () => {
    const html = plain(
      await render(<PasswordChangedEmail forgotUrl="https://medora.vercel.app/forgot-password" />)
    )

    expect(html).toContain('Tu contraseña cambió.')
    expect(html).toContain('https://medora.vercel.app/forgot-password')
  })
})

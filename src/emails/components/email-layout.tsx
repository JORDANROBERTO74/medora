import { Body, Container, Head, Html, Preview, Section, Text } from 'react-email'
import type { ReactNode } from 'react'

const BRAND = '#FF5216'
const TEXT = '#0f172a'
const MUTED = '#64748b'
const BACKGROUND = '#f8fafc'
const BORDER = '#e2e8f0'

/** Shared shell for every Medora email (inline styles: email clients ignore stylesheets). */
export function EmailLayout({ preview, children }: { preview: string; children: ReactNode }) {
  return (
    <Html lang="es">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: BACKGROUND,
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
          margin: 0,
          padding: '32px 16px',
        }}
      >
        <Container style={{ margin: '0 auto', maxWidth: 520 }}>
          <Section style={{ padding: '0 4px 20px' }}>
            <Text style={{ margin: 0, fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', color: TEXT }}>
              MED<Text style={{ display: 'inline', color: BRAND }}>ORA</Text>
            </Text>
          </Section>
          <Section
            style={{
              backgroundColor: '#ffffff',
              border: `1px solid ${BORDER}`,
              borderRadius: 20,
              padding: 32,
            }}
          >
            {children}
          </Section>
          <Text style={{ margin: '20px 4px 0', fontSize: 12, lineHeight: '18px', color: MUTED }}>
            Medora · Repaso clínico. Si no esperabas este correo, puedes ignorarlo.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const headingStyle = {
  margin: 0,
  fontSize: 24,
  lineHeight: '30px',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  color: TEXT,
}

export const paragraphStyle = {
  margin: '16px 0 0',
  fontSize: 15,
  lineHeight: '24px',
  color: '#334155',
}

export const mutedStyle = {
  margin: '20px 0 0',
  fontSize: 13,
  lineHeight: '20px',
  color: MUTED,
}

export const buttonStyle = {
  backgroundColor: BRAND,
  borderRadius: 999,
  color: '#ffffff',
  display: 'inline-block',
  fontSize: 15,
  fontWeight: 700,
  marginTop: 24,
  padding: '12px 24px',
  textDecoration: 'none',
}

export const linkStyle = {
  color: BRAND,
  fontWeight: 700,
  textDecoration: 'none',
}

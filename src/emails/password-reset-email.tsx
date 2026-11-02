import { Button, Heading, Link, Text } from 'react-email'
import { EmailLayout, headingStyle, linkStyle, mutedStyle, paragraphStyle } from './components/email-layout'

export function PasswordResetEmail({ resetUrl }: { resetUrl: string }) {
  return (
    <EmailLayout preview="Restablece tu contraseña de Medora">
      <Heading style={headingStyle}>Restablece tu contraseña.</Heading>
      <Text style={paragraphStyle}>
        Pediste un enlace para elegir una contraseña nueva. El enlace caduca pronto y solo puede usarse una vez.
      </Text>
      <Button
        href={resetUrl}
        style={{
          backgroundColor: '#FF5216',
          borderRadius: 999,
          color: '#ffffff',
          fontSize: 15,
          fontWeight: 700,
          padding: '12px 24px',
          textDecoration: 'none',
        }}
      >
        Elegir nueva contraseña
      </Button>
      <Text style={mutedStyle}>
        Si el botón no funciona, copia este enlace en tu navegador:
        <br />
        <Link href={resetUrl} style={linkStyle}>
          {resetUrl}
        </Link>
      </Text>
      <Text style={mutedStyle}>Si no pediste el cambio, ignora este correo: tu contraseña sigue igual.</Text>
    </EmailLayout>
  )
}

import { Button, Heading, Text } from 'react-email'
import { EmailLayout, headingStyle, mutedStyle, paragraphStyle } from './components/email-layout'

export function PasswordChangedEmail({ forgotUrl }: { forgotUrl: string }) {
  return (
    <EmailLayout preview="Tu contraseña de Medora cambió">
      <Heading style={headingStyle}>Tu contraseña cambió.</Heading>
      <Text style={paragraphStyle}>
        La contraseña de tu cuenta de Medora se actualizó correctamente. Ya puedes iniciar sesión con la nueva.
      </Text>
      <Text style={paragraphStyle}>
        Si no fuiste tú, restablece la contraseña ahora y revisa el acceso a tu correo.
      </Text>
      <Button
        href={forgotUrl}
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
        Restablecer contraseña
      </Button>
      <Text style={mutedStyle}>Por seguridad, cerramos las sesiones de otros dispositivos.</Text>
    </EmailLayout>
  )
}

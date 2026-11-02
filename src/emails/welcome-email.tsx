import { Button, Heading, Text } from 'react-email'
import { EmailLayout, mutedStyle, paragraphStyle } from './components/email-layout'

export function WelcomeEmail({ name, dashboardUrl }: { name: string; dashboardUrl: string }) {
  return (
    <EmailLayout preview="Tu cuenta de Medora está lista">
      <Heading style={{ margin: 0, fontSize: 24, lineHeight: '30px', fontWeight: 800, color: '#0f172a' }}>
        Bienvenido, {name}.
      </Heading>
      <Text style={paragraphStyle}>
        Tu cuenta está lista. Empieza por un tema corto y mantén el ritmo: cinco minutos hoy valen más que una
        hora el domingo.
      </Text>
      <Text style={paragraphStyle}>
        Dentro tienes resúmenes por especialidad, quizzes y casos clínicos con explicación de cada opción.
      </Text>
      <Button href={dashboardUrl} style={{ backgroundColor: '#FF5216', borderRadius: 999, color: '#ffffff', fontSize: 15, fontWeight: 700, padding: '12px 24px', textDecoration: 'none' }}>
        Ir al dashboard
      </Button>
      <Text style={mutedStyle}>Si tienes dudas, responde a este correo y te leemos.</Text>
    </EmailLayout>
  )
}

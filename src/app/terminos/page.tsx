import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/legal-page'
import { legal } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description:
    'Condiciones de uso de Medora: cuenta, contenido clínico, planes, propiedad intelectual y responsabilidad.',
}

const sections: LegalSection[] = [
  {
    id: 'quien-presta',
    title: 'Quién presta el servicio',
    body: (
      <>
        <p>
          Medora es un servicio operado por {legal.owner}, con domicilio en {legal.address}. Para cualquier consulta
          sobre estos términos puedes escribir a {legal.email}.
        </p>
      </>
    ),
  },
  {
    id: 'que-es',
    title: 'Qué es Medora',
    body: (
      <>
        <p>
          Medora es una herramienta de repaso para estudiantes y profesionales de la salud. Incluye apuntes sobre
          temas clínicos, preguntas de autoevaluación, casos y un registro de tu progreso.
        </p>
        <p>
          El servicio es material educativo. No es un servicio médico, no emite diagnósticos y no sustituye la
          evaluación de un profesional ni las guías de práctica clínica de tu institución.
        </p>
      </>
    ),
  },
  {
    id: 'cuenta',
    title: 'Tu cuenta',
    body: (
      <>
        <p>
          Para usar Medora necesitas una cuenta con correo electrónico y contraseña. Debes dar datos veraces y
          mantener la confidencialidad de tus credenciales.
        </p>
        <p>
          La cuenta es personal. No está permitido compartirla ni usarla de forma simultánea por varias personas. Eres
          responsable de la actividad que ocurra con tus credenciales.
        </p>
      </>
    ),
  },
  {
    id: 'uso-aceptable',
    title: 'Uso aceptable',
    body: (
      <>
        <p>Al usar Medora te comprometes a no:</p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>Copiar, extraer o redistribuir de forma masiva el contenido.</li>
          <li>Intentar acceder a cuentas, datos o sistemas que no te pertenecen.</li>
          <li>Interferir con el funcionamiento del servicio o sortear sus límites técnicos.</li>
          <li>Usar el contenido para diagnosticar o tratar a un paciente.</li>
          <li>Publicar datos de pacientes en tus notas personales.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'contenido-clinico',
    title: 'Contenido clínico y límites',
    body: (
      <>
        <p>
          Los apuntes se elaboran y revisan con fuentes clínicas, pero pueden contener errores, quedar
          desactualizados o no coincidir con el protocolo de tu centro. Verifica siempre la información antes de
          aplicarla.
        </p>
        <p>
          Una sección del contenido está adaptada al calendario de inmunizaciones de Bolivia. En otros países debes
          consultar el calendario local.
        </p>
        <p>
          Ante una urgencia médica, acude a un servicio de salud. No uses Medora para tomar decisiones clínicas en
          tiempo real.
        </p>
      </>
    ),
  },
  {
    id: 'propiedad-intelectual',
    title: 'Propiedad intelectual',
    body: (
      <>
        <p>
          Los textos, preguntas, diseños, marca y código de Medora pertenecen a {legal.owner} o se usan con permiso.
          Te damos una licencia personal, limitada y no transferible para estudiar con el contenido.
        </p>
        <p>
          No puedes reproducir, vender, publicar ni crear obras derivadas del contenido sin autorización escrita. Tus
          notas personales siguen siendo tuyas.
        </p>
      </>
    ),
  },
  {
    id: 'disponibilidad',
    title: 'Disponibilidad y cambios',
    body: (
      <>
        <p>
          El servicio se ofrece según disponibilidad. Podemos cambiar, añadir o retirar funciones, y suspenderlo de
          forma temporal por mantenimiento o por causas fuera de nuestro control.
        </p>
        <p>
          Cuando un cambio afecte de forma relevante lo que ya usas, intentaremos avisarte con antelación razonable.
        </p>
      </>
    ),
  },
  {
    id: 'planes',
    title: 'Planes y pagos',
    body: (
      <>
        <p>
          Hoy Medora es gratis y no solicita tarjeta. Existe un plan Premium en preparación, todavía sin precio ni
          fecha de lanzamiento.
        </p>
        <p>
          Cuando Premium esté disponible, mostraremos el precio, la periodicidad, las condiciones de renovación y de
          cancelación antes de cualquier cobro. Ninguna función que hoy sea gratuita pasará a ser de pago sin
          avisarte.
        </p>
      </>
    ),
  },
  {
    id: 'responsabilidad',
    title: 'Límite de responsabilidad',
    body: (
      <>
        <p>
          En la medida en que la ley lo permita, no respondemos por daños derivados de decisiones clínicas tomadas a
          partir del contenido, ni por interrupciones, pérdida de datos o errores ajenos al servicio.
        </p>
        <p>
          Nada en estos términos excluye responsabilidades que no puedan excluirse legalmente, como las derivadas de
          dolo o negligencia grave.
        </p>
      </>
    ),
  },
  {
    id: 'baja',
    title: 'Baja y eliminación de datos',
    body: (
      <>
        <p>
          Puedes dejar de usar Medora en cualquier momento. Si quieres eliminar tu cuenta y los datos asociados,
          escríbenos a {legal.email} y lo gestionamos.
        </p>
        <p>
          El tratamiento de tus datos se explica en la política de privacidad.
        </p>
      </>
    ),
  },
  {
    id: 'cambios',
    title: 'Cambios a estos términos',
    body: (
      <>
        <p>
          Podemos actualizar estos términos para reflejar cambios en el servicio o en la ley. Publicaremos la nueva
          versión con su fecha de actualización.
        </p>
        <p>
          Si el cambio es sustancial, intentaremos avisarte por correo o dentro de la aplicación antes de que entre en
          vigor. Si no estás de acuerdo, puedes dejar de usar el servicio.
        </p>
      </>
    ),
  },
  {
    id: 'ley',
    title: 'Ley aplicable',
    body: (
      <>
        <p>
          Estos términos se rigen por las leyes de {legal.jurisdiction}. Cualquier controversia se someterá a los
          tribunales competentes de {legal.address}, salvo que la ley aplicable disponga otra cosa.
        </p>
      </>
    ),
  },
]

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      intro={
        <p>
          Estos términos explican qué puedes esperar de Medora y qué esperamos de ti al usar tu cuenta. Al crear una
          cuenta los aceptas.
        </p>
      }
      sections={sections}
      other={{ href: '/privacidad', label: 'Política de privacidad' }}
    />
  )
}

import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/legal-page'
import { legal } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Qué datos recoge Medora, para qué los usa, con quién los comparte y cómo ejercer tus derechos.',
}

const sections: LegalSection[] = [
  {
    id: 'responsable',
    title: 'Responsable del tratamiento',
    body: (
      <>
        <p>
          El responsable de tus datos es {legal.owner}, con domicilio en {legal.address}. Puedes escribir sobre
          privacidad a {legal.email}.
        </p>
      </>
    ),
  },
  {
    id: 'datos',
    title: 'Qué datos recogemos',
    body: (
      <>
        <p>Para que Medora funcione recogemos:</p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>Datos de cuenta: nombre, correo electrónico y contraseña.</li>
          <li>Datos de uso: capítulos leídos, respuestas, progreso, rachas y logros.</li>
          <li>Contenido que creas: notas personales.</li>
          <li>Preferencias: tema claro, oscuro o del sistema.</li>
          <li>Datos técnicos: dirección IP y marcas de tiempo, usadas para limitar abuso y proteger el servicio.</li>
        </ul>
        <p>
          No pedimos datos de salud ni datos de pacientes. Las notas son para contenido de estudio: no introduzcas
          información identificable de pacientes.
        </p>
      </>
    ),
  },
  {
    id: 'finalidad',
    title: 'Para qué los usamos',
    body: (
      <>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>Crear y mantener tu cuenta, y permitirte iniciar sesión.</li>
          <li>Guardar tu progreso, notas, rachas y preferencias.</li>
          <li>Enviarte correos necesarios: confirmación, recuperación y aviso de cambio de contraseña.</li>
          <li>Detectar abuso, limitar intentos y mantener la seguridad del servicio.</li>
        </ul>
        <p>
          No usamos tus datos para publicidad ni los vendemos. Si en el futuro enviamos novedades, pediremos tu
          consentimiento antes.
        </p>
        <p>
          Las bases legales son la ejecución del servicio que solicitas, nuestro interés legítimo en mantenerlo seguro
          y, cuando corresponda, tu consentimiento.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies y almacenamiento local',
    body: (
      <>
        <p>Usamos lo mínimo necesario:</p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>Cookies de sesión, necesarias para mantenerte identificado. Sin ellas no se puede iniciar sesión.</li>
          <li>
            La cookie <code className="text-xs">medora-theme</code> y el almacenamiento local del navegador, para
            recordar tu tema y evitar un destello de color al cargar.
          </li>
        </ul>
        <p>
          La medición de audiencia de Vercel es agregada y no usa cookies. No usamos cookies publicitarias ni de
          seguimiento entre sitios.
        </p>
      </>
    ),
  },
  {
    id: 'terceros',
    title: 'Con quién los compartimos',
    body: (
      <>
        <p>
          Usamos proveedores que tratan datos por cuenta nuestra y solo para prestar el servicio:
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>Supabase: autenticación y base de datos.</li>
          <li>Vercel: alojamiento y medición de audiencia agregada.</li>
          <li>Resend: envío de correos transaccionales.</li>
          <li>Upstash: limitación de intentos, cuando está activada.</li>
        </ul>
        <p>
          También podemos comunicar datos si la ley lo exige o para proteger derechos. No vendemos datos personales.
        </p>
      </>
    ),
  },
  {
    id: 'conservacion',
    title: 'Cuánto tiempo los conservamos',
    body: (
      <>
        <p>
          Conservamos los datos mientras tu cuenta esté activa. Si solicitas la eliminación, borramos la cuenta y sus
          datos en un plazo máximo de 30 días, salvo que debamos conservar algo por obligación legal o para atender
          una reclamación.
        </p>
        <p>Los registros técnicos de seguridad se conservan por tiempo limitado y no se usan para otro fin.</p>
      </>
    ),
  },
  {
    id: 'derechos',
    title: 'Tus derechos',
    body: (
      <>
        <p>
          Puedes solicitar acceso a tus datos, su rectificación, su eliminación, la limitación del tratamiento, la
          portabilidad y oponerte a determinados usos.
        </p>
        <p>
          Escríbenos a {legal.email} indicando qué derecho quieres ejercer. Podemos pedirte que verifiques tu
          identidad antes de responder.
        </p>
      </>
    ),
  },
  {
    id: 'seguridad',
    title: 'Seguridad',
    body: (
      <>
        <p>
          Usamos conexiones cifradas, contraseñas almacenadas con hash, cookies de sesión httpOnly y acceso restringido
          a la base de datos. Ningún sistema es infalible, pero aplicamos medidas razonables para proteger la
          información.
        </p>
        <p>
          Si detectas un problema de seguridad, escríbenos a {legal.email} antes de hacerlo público.
        </p>
      </>
    ),
  },
  {
    id: 'menores',
    title: 'Menores de edad',
    body: (
      <>
        <p>
          Medora está pensado para personas mayores de 18 años. Si eres menor, necesitas la autorización de tu padre,
          madre o tutor para crear una cuenta.
        </p>
      </>
    ),
  },
  {
    id: 'transferencias',
    title: 'Transferencias internacionales',
    body: (
      <>
        <p>
          Nuestros proveedores pueden almacenar datos fuera de {legal.jurisdiction}. Cuando eso ocurre, exigimos
          salvaguardas contractuales adecuadas y limitamos el tratamiento a lo necesario para el servicio.
        </p>
      </>
    ),
  },
  {
    id: 'cambios',
    title: 'Cambios y contacto',
    body: (
      <>
        <p>
          Podemos actualizar esta política para reflejar cambios en el servicio o en la ley. Publicaremos la versión
          vigente con su fecha de actualización.
        </p>
        <p>
          Para cualquier duda sobre privacidad, escribe a {legal.email}.
        </p>
      </>
    ),
  },
]

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro={
        <p>
          Esta política explica qué datos recoge Medora, para qué los usa y cómo puedes controlarlos. Aplica a la
          cuenta y al uso del sitio.
        </p>
      }
      sections={sections}
      other={{ href: '/terminos', label: 'Términos y condiciones' }}
    />
  )
}

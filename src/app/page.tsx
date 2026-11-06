import Link from 'next/link'
import { ArrowRight, BookOpen, Brain, Check, Clock3, Plus, Stethoscope } from 'lucide-react'
import { specialties } from '@/lib/content'

const chapterTotal = specialties.reduce((total, specialty) => {
  const count = Number(specialty.detail.match(/\d+/)?.[0] ?? 0)
  return total + count
}, 0)

const steps = [
  {
    title: 'Lee el apunte',
    body: 'Capítulos cortos, con los puntos clave y el contexto que sí se pregunta.',
  },
  {
    title: 'Responde',
    body: 'Preguntas de opción múltiple sobre lo que acabas de leer, con corrección inmediata.',
  },
  {
    title: 'Repite lo fallado',
    body: 'Tu progreso y tus rachas te dicen qué conviene volver a abrir mañana.',
  },
]

const freeFeatures = [
  `${specialties.length} especialidades y ${chapterTotal} capítulos`,
  'Quizzes con explicación de cada respuesta',
  'Casos clínicos y preguntas aleatorias',
  'Notas personales ancladas al texto',
  'Progreso, rachas y logros',
]

const premiumFeatures = [
  'Simulacros cronometrados',
  'Repaso espaciado de lo fallado',
  'Estadísticas comparativas por tema',
  'Exportar apuntes y notas',
  'Lectura sin conexión',
  'Casos clínicos avanzados',
]

const faqs = [
  {
    question: '¿Cuánto cuesta Medora?',
    answer:
      'Hoy nada. Todo lo que está disponible es gratis y no pedimos tarjeta. Premium está en preparación y todavía no tiene precio ni fecha de lanzamiento.',
  },
  {
    question: '¿Qué incluirá Premium?',
    answer:
      'Simulacros cronometrados, repaso espaciado, estadísticas comparativas, exportación, lectura sin conexión y casos avanzados. Lo que hoy usas gratis seguirá siendo gratis.',
  },
  {
    question: '¿Sirve para mi país?',
    answer:
      'El contenido es de referencia clínica general. Una sección está adaptada al calendario de inmunizaciones de Bolivia. Verifica siempre los protocolos de tu institución.',
  },
  {
    question: '¿Sustituye a un libro o a una guía oficial?',
    answer:
      'No. Es material de repaso para acompañar tu formación. No sustituye el juicio clínico, las guías de práctica clínica ni la evaluación de un profesional.',
  },
  {
    question: '¿Necesito tarjeta para empezar?',
    answer:
      'No. Creas la cuenta con tu correo, confirmas el enlace que te enviamos y empiezas a repasar.',
  },
  {
    question: '¿Qué pasa con mi cuenta y mis notas?',
    answer:
      'Puedes pedir la eliminación de tu cuenta y de los datos asociados escribiendo al correo de contacto. Los detalles están en la política de privacidad.',
  },
]

const examOptions = [
  'Fiebre, cefalea y rigidez de nuca',
  'Hipotensión, ingurgitación yugular y ruidos cardíacos apagados',
  'Hipertensión, bradicardia y depresión respiratoria',
  'Taquicardia, hiperglucemia y poliuria',
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent-strong text-white">
              <Stethoscope className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-black tracking-[0.18em]">MEDORA</span>
          </Link>

          <nav
            aria-label="Principal"
            className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex"
          >
            <a href="#como-funciona" className="hover:text-foreground">
              Cómo funciona
            </a>
            <a href="#especialidades" className="hover:text-foreground">
              Especialidades
            </a>
            <a href="#planes" className="hover:text-foreground">
              Planes
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-bold text-muted-foreground hover:text-foreground sm:block"
            >
              Entrar
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-accent-strong px-4 py-2.5 text-sm font-bold text-white hover:bg-accent-strong-hover"
            >
              Crear cuenta
            </Link>
          </div>
        </div>
      </header>

      <main id="contenido">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:pt-24">
          <div className="landing-enter">
            <h1 className="font-serif text-[2.85rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl">
              Repasa mejor.
              <br />
              Decide con <span className="text-[#FF5216]">confianza</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              Apuntes clínicos y quizzes breves, ordenados por especialidad. Un tema por sesión, con la explicación de
              cada respuesta.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-6 py-3.5 text-sm font-bold text-white hover:bg-accent-strong-hover"
              >
                Empezar gratis
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-bold text-foreground hover:bg-secondary"
              >
                Ya tengo cuenta
              </Link>
            </div>
            <p className="mt-8 text-sm font-medium text-muted-foreground">
              Gratis y sin tarjeta. Premium, próximamente.
            </p>
          </div>

          <aside
            aria-label="Ejemplo de pregunta"
            className="landing-enter landing-enter-delay-1 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
          >
            <div className="mb-5 h-1 w-10 rounded-full bg-[#FF5216]" aria-hidden="true" />
            <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Brain className="size-4" aria-hidden="true" />
                Quiz · Medicina Interna
              </span>
              <span>2 de 5</span>
            </div>
            <div className="progress-track mt-3 h-1 rounded-full" aria-hidden="true">
              <div className="h-full w-2/5 rounded-full bg-[#FF5216]" />
            </div>

            <h2 className="mt-6 text-lg font-bold leading-snug">¿Qué tres hallazgos forman la tríada de Cushing?</h2>

            <ul className="mt-4 divide-y divide-border border-y border-border">
              {examOptions.map((option, index) => {
                const letter = 'ABCD'[index]
                const isCorrect = index === 2
                return (
                  <li
                    key={option}
                    className={
                      isCorrect
                        ? 'flex items-start gap-3 py-3 text-sm font-bold text-foreground'
                        : 'flex items-start gap-3 py-3 text-sm font-semibold text-muted-foreground'
                    }
                  >
                    <span
                      className={
                        isCorrect
                          ? 'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-strong text-[11px] font-black text-white'
                          : 'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-black text-secondary-foreground'
                      }
                    >
                      {letter}
                    </span>
                    {option}
                  </li>
                )
              })}
            </ul>

            <div className="mt-4">
              <p className="text-xs font-bold text-emerald-800">Correcta: C.</p>
              <p className="mt-1 text-xs leading-5 text-emerald-800">
                Describe un hallazgo ominoso de hipertensión intracraneal avanzada, no un criterio diagnóstico: esperar
                a que aparezca retrasa el tratamiento y su ausencia no la excluye.
              </p>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Pregunta real del banco. La explicación aparece después de responder.
            </p>
          </aside>
        </section>

        <section id="como-funciona" className="scroll-mt-24 border-y border-border bg-muted">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 className="font-serif text-3xl font-semibold tracking-tight">Tres pasos, un tema a la vez.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Sin planes de estudio infinitos. Abres, lees, respondes y sabes qué hacer después.
            </p>

            <ol className="mt-10 grid gap-8 sm:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="border-t-2 border-border pt-5">
                  <span className="font-serif text-lg font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="especialidades" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">Cuatro especialidades, un mismo formato.</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Cada capítulo es un apunte corto con sus preguntas. Empieza por la rotación que tienes ahora.
          </p>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {specialties.map((specialty) => (
              <li
                key={specialty.slug}
                className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="font-serif text-lg font-semibold text-muted-foreground">{specialty.number}</span>
                <div>
                  <p className="font-bold">{specialty.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {specialty.topics
                      .slice(0, 3)
                      .map((topic) => topic.name)
                      .join(' · ')}
                  </p>
                </div>
                <span className="text-sm font-semibold text-muted-foreground">{specialty.detail}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-muted-foreground">
            También hay notas de Radiología e Imagenología dentro de la cuenta.
          </p>
        </section>

        <section aria-labelledby="producto" className="border-y border-border bg-muted">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 id="producto" className="font-serif text-3xl font-semibold tracking-tight">
              Diseñado para una sesión corta.
            </h2>

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <h3 className="text-xl font-bold">Anota en el margen, no en otro documento.</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Selecciona un párrafo y guarda una nota. Queda anclada a ese punto del capítulo, así la encuentras
                  cuando vuelves.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="size-4" aria-hidden="true" />
                    Lectura · Insuficiencia cardíaca
                  </span>
                  <span>3 notas</span>
                </div>
                <p className="mt-4 text-sm leading-6">
                  Lee el capítulo completo y detente solo donde necesites recordar algo.
                </p>
                <div className="mt-4 border-l-2 border-[#FF5216] pl-3">
                  <p className="text-xs font-bold text-muted-foreground">Tu nota</p>
                  <p className="mt-1 text-sm font-medium">
                    Repasar los criterios antes del quiz del viernes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="lg:order-2">
                <h3 className="text-xl font-bold">Cada respuesta te explica el porqué.</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  El feedback no es un check: te dice por qué la correcta lo es y qué falla en las demás.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm lg:order-1">
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Brain className="size-4" aria-hidden="true" />
                    Quiz · Nefrología
                  </span>
                  <span>4 de 5</span>
                </div>
                <p className="mt-4 text-sm font-bold leading-snug">
                  En la cetoacidosis diabética, ¿qué cuerpo cetónico predomina en sangre?
                </p>
                <div className="mt-3 flex items-start gap-3 text-sm font-bold">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-strong text-[11px] font-black text-white">
                    D
                  </span>
                  3-β-hidroxibutirato, que la tira reactiva de orina no detecta
                </div>
                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  La tira mide acetoacetato. Una tira negativa no descarta cetoacidosis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="planes" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">Empieza gratis. Premium viene en camino.</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            No hay precios todavía. Cuando Premium abra, verás el precio y las condiciones antes de contratar.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-bold">Gratis</h3>
                <span className="text-sm font-semibold text-muted-foreground">Para empezar hoy</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Todo lo que puedes usar ahora mismo.</p>

              <ul className="mt-6 flex flex-col gap-3">
                {freeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm font-medium">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent-strong" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent-strong px-5 py-3 text-sm font-bold text-white hover:bg-accent-strong-hover"
              >
                Empezar gratis
              </Link>
            </article>

            <article className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-bold">Premium</h3>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                  Próximamente
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                En preparación. Aún sin precio ni fecha de lanzamiento.
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-muted-foreground">
                    <Clock3 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-bold text-foreground hover:bg-secondary"
              >
                Crear cuenta y te avisamos
              </Link>
            </article>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">Premium no quita nada de lo que hoy es gratis.</p>
        </section>

        <section aria-labelledby="preguntas" className="border-t border-border bg-muted">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <div className="max-w-3xl">
              <h2 id="preguntas" className="font-serif text-3xl font-semibold tracking-tight">
                Preguntas frecuentes
              </h2>

              <div className="mt-8 border-t border-border">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group border-b border-border py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <Plus
                        className="size-4 shrink-0 text-muted-foreground transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-accent-strong text-white">
                  <Stethoscope className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-black tracking-[0.18em]">MEDORA</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Apuntes y quizzes para la rotación. Un tema a la vez.
              </p>
            </div>

            <nav aria-label="Producto" className="text-sm">
              <p className="font-bold">Producto</p>
              <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <li>
                  <a href="#como-funciona" className="hover:text-foreground">
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a href="#especialidades" className="hover:text-foreground">
                    Especialidades
                  </a>
                </li>
                <li>
                  <a href="#planes" className="hover:text-foreground">
                    Planes
                  </a>
                </li>
                <li>
                  <Link href="/login" className="hover:text-foreground">
                    Iniciar sesión
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Legal" className="text-sm">
              <p className="font-bold">Legal</p>
              <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <li>
                  <Link href="/terminos" className="hover:text-foreground">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="hover:text-foreground">
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-5 text-muted-foreground">
            Medora es material educativo. No sustituye el asesoramiento médico, el diagnóstico ni el tratamiento. Ante
            una urgencia, acude a un servicio de salud.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} Medora.</p>
        </div>
      </footer>
    </div>
  )
}

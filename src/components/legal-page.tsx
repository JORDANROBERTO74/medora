import Link from 'next/link'
import type { ReactNode } from 'react'
import { Stethoscope } from 'lucide-react'
import { legal } from '@/lib/legal'

export type LegalSection = {
  id: string
  title: string
  body: ReactNode
}

type LegalPageProps = {
  title: string
  intro: ReactNode
  sections: LegalSection[]
  other: { href: string; label: string }
}

export function LegalPage({ title, intro, sections, other }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent-strong text-white">
              <Stethoscope className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-black tracking-[0.18em]">MEDORA</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-16 lg:py-16">
        <nav aria-label="En esta página" className="lg:sticky lg:top-8 lg:self-start">
          <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">En esta página</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-muted-foreground hover:text-foreground">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Última actualización: {legal.updated}</p>
          <div className="mt-6 max-w-[62ch] text-base leading-7 text-muted-foreground">{intro}</div>

          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-10 scroll-mt-24">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">{section.title}</h2>
              <div className="mt-3 flex max-w-[62ch] flex-col gap-3 text-sm leading-7 text-foreground/90">
                {section.body}
              </div>
            </section>
          ))}

          <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
            <p>
              ¿Dudas sobre este documento? Escribe a{' '}
              <a
                href={`mailto:${legal.email}`}
                className="font-semibold text-foreground underline underline-offset-4"
              >
                {legal.email}
              </a>
              .
            </p>
            <p className="mt-2">
              Ver también:{' '}
              <Link href={other.href} className="font-semibold text-foreground underline underline-offset-4">
                {other.label}
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

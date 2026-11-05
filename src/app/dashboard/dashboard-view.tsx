'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SpecialtyCard } from '@/components/specialty-card'
import { specialties } from '@/lib/content'
import { useUserData } from '@/lib/user-data/context'
import { buildProgressSummary, nextReview } from '@/lib/user-data/progress'
import { computeStreak } from '@/lib/user-data/streak'
import { ArrowRight, BookOpen, Flame } from 'lucide-react'

/** "Lunes, 21 de octubre" for a YYYY-MM-DD day, formatted in UTC to stay stable. */
function dayLabel(day: string): string {
  const formatted = new Intl.DateTimeFormat('es-BO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${day}T00:00:00Z`))
  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

export function Dashboard({
  fullName,
  email,
  today,
}: {
  fullName: string
  email: string
  today: string
}) {
  const router = useRouter()
  const { progress, studyDays } = useUserData()
  const summary = useMemo(() => buildProgressSummary(progress), [progress])
  const streak = useMemo(() => computeStreak(studyDays, today), [studyDays, today])
  const next = useMemo(() => nextReview(progress), [progress])

  const firstName = fullName.trim().split(/\s+/)[0] || email.split('@')[0] || 'de nuevo'
  const initials = (
    fullName
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('') || email.slice(0, 2)
  ).toUpperCase()

  const percent = summary.percent
  const specialtyPercent = new Map(
    summary.bySpecialty.map((item) => [item.slug, item.percent] as const)
  )

  return (
    <div className="flex flex-col gap-7 pt-7 sm:pt-10">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">
            {dayLabel(today)}
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
            Hola, {firstName}.
          </h1>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Tu repaso clínico, un tema a la vez.
          </p>
        </div>
        <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">
          {initials}
        </div>
      </header>

      <section className="relative overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <Flame className="size-4 text-[#FF5216]" fill="currentColor" />
              {streak > 0
                ? `${streak} ${streak === 1 ? 'día' : 'días'} de racha`
                : 'Empieza tu racha'}
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-400">Tu progreso clínico</p>
            <p className="mt-1 text-4xl font-black">
              {percent}
              <span className="text-xl text-slate-400">%</span>
            </p>
          </div>
          <div className="flex size-20 items-center justify-center rounded-full border-[7px] border-[#FF5216]/25 border-t-[#FF5216] text-lg font-black">
            {percent}%
          </div>
        </div>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-[#FF5216]" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-3 flex justify-between text-xs font-semibold text-slate-400">
          <span>
            {summary.completed}{' '}
            {summary.completed === 1 ? 'tema repasado' : 'temas repasados'}
          </span>
          <span>Meta: {summary.total} temas</span>
        </div>
      </section>

      <section className="rounded-3xl bg-[#FF5216] p-6 text-white shadow-[0_15px_35px_rgba(255,82,22,0.22)]">
        <p className="text-sm font-bold text-orange-100">
          {next?.allDone ? 'REPASO LIBRE' : 'SIGUIENTE REPASO'}
        </p>
        <h2 className="mt-2 text-2xl font-black">{next?.topicName}</h2>
        <p className="mt-1 text-sm font-medium text-orange-100">
          {next?.specialtyName} · Apunte
        </p>
        <Button
          onClick={() => router.push(next?.href ?? '/dashboard/quiz')}
          className="cta-on-accent mt-5 h-11 rounded-full bg-white px-5 font-black text-[#FF5216] hover:bg-orange-50"
        >
          Repasar ahora <ArrowRight data-icon="inline-end" />
        </Button>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-black">Especialidades</h2>
          <span className="text-xs font-bold text-muted-foreground">
            {specialties.length} áreas clínicas
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {specialties.map((s) => (
            <SpecialtyCard
              key={s.slug}
              specialty={s}
              progress={specialtyPercent.get(s.slug) ?? 0}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-black">Libros para repasar</h2>
        <div className="flex flex-col gap-3">
          <BookCard
            href="/dashboard/reading/summary"
            title="Compendio Clínico"
            detail="Libro largo · Resumen · 147 capítulos"
          />
          <BookCard
            href="/dashboard/reading/review"
            title="Repaso Rápido"
            detail="Libro corto · Repaso · 17 capítulos"
          />
        </div>
      </section>
    </div>
  )
}

function BookCard({ href, title, detail }: { href: string; title: string; detail: string }) {
  return (
    <Link
      href={href}
      className="card-lift flex items-start gap-3 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm"
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5216]">
        <BookOpen className="size-5" />
      </div>
      <div>
        <h3 className="font-extrabold leading-5">{title}</h3>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">{detail}</p>
      </div>
    </Link>
  )
}

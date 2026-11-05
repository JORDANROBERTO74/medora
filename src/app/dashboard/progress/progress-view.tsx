'use client'

import { useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Achievements } from '@/components/achievements'
import { ProgressBar } from '@/components/progress-bar'
import { useUserData } from '@/lib/user-data/context'
import { buildProgressSummary } from '@/lib/user-data/progress'
import { computeStreak } from '@/lib/user-data/streak'

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-sm">
      <p className="text-2xl font-black">{value}</p>
      <p className="mt-1 text-[11px] font-bold text-muted-foreground">{label}</p>
    </div>
  )
}

export function ProgressView({ today, totalCases }: { today: string; totalCases: number }) {
  const {
    progress,
    studyDays,
    results,
    cases,
    markAchievementsSeen,
  } = useUserData()
  const summary = useMemo(() => buildProgressSummary(progress), [progress])
  const streak = useMemo(() => computeStreak(studyDays, today), [studyDays, today])

  // Entering this page is what clears the nav badge.
  useEffect(() => {
    void markAchievementsSeen()
  }, [markAchievementsSeen])

  const averageStars =
    results.rounds > 0 ? `${(results.stars / results.rounds).toFixed(1)} ★` : '—'
  const solvedPercent = totalCases === 0 ? 0 : (cases.solved / totalCases) * 100

  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <header>
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">
          Tu historial
        </p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">Progreso</h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          Así vas en tu preparación médica.
        </p>
      </header>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat
          value={String(streak)}
          label={streak === 1 ? 'día de racha' : 'días de racha'}
        />
        <Stat value={`${summary.completed}`} label={`de ${summary.total} temas`} />
        <Stat value={String(results.questions)} label="preguntas resueltas" />
        <Stat value={averageStars} label="puntuación media" />
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-500">
            Casos clínicos
          </h2>
          <span className="text-xs font-black text-slate-500">
            {cases.solved} de {totalCases} resueltos
          </span>
        </div>
        <ProgressBar value={solvedPercent} className="mt-3" />
        <p className="mt-2 text-xs font-semibold text-slate-500">
          {cases.attempts === 0
            ? 'Todavía no has resuelto ningún caso.'
            : `${cases.correct} de ${cases.attempts} aciertos · ${cases.firstTry} a la primera`}
        </p>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-500">
          Por especialidad
        </h2>
        <div className="mt-4 flex flex-col gap-4">
          {summary.bySpecialty.map((specialty) => (
            <div key={specialty.slug}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-extrabold">{specialty.name}</span>
                <span className="text-xs font-black text-slate-500">{specialty.percent}%</span>
              </div>
              <ProgressBar value={specialty.percent} className="mt-2" />
            </div>
          ))}
        </div>
      </section>

      <Achievements />

      <Link
        href="/dashboard/quiz"
        className="rounded-full bg-accent-strong px-5 py-3.5 text-center text-sm font-black text-white"
      >
        Repasar ahora
      </Link>
    </div>
  )
}

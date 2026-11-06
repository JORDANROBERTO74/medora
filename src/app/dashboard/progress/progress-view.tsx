'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Achievements } from '@/components/achievements'
import { AchievementIcon } from '@/components/achievement-icon'
import { LevelLadder } from '@/components/level-ladder'
import { ProgressBar } from '@/components/progress-bar'
import { SpecialtyAchievements } from '@/components/specialty-achievements'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { recentAchievements } from '@/lib/achievements'
import { useUserData } from '@/lib/user-data/context'
import { countReadingChapters } from '@/lib/user-data/reading-progress'
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
    readingCatalog,
    achievements,
    achievementList,
    markAchievementsSeen,
  } = useUserData()
  const streak = useMemo(() => computeStreak(studyDays, today), [studyDays, today])
  const reading = useMemo(() => {
    const total = readingCatalog.reduce((sum, entry) => sum + entry.chapters.length, 0)
    const completed = readingCatalog.reduce(
      (sum, entry) =>
        sum + countReadingChapters(progress, entry.chapters.map((chapter) => chapter.key)),
      0
    )
    return { completed, total }
  }, [readingCatalog, progress])

  // Snapshot before the seen effect clears the badge, so the dialog keeps its list.
  const [recent] = useState(() => recentAchievements(achievementList, achievements))
  const [recentOpen, setRecentOpen] = useState(recent.length > 0)

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
        <Stat value={String(reading.completed)} label={`de ${reading.total} capítulos`} />
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

      <SpecialtyAchievements />

      <LevelLadder />

      <Achievements />

      <Link
        href="/dashboard/quiz"
        className="rounded-full bg-accent-strong px-5 py-3.5 text-center text-sm font-black text-white"
      >
        Repasar ahora
      </Link>

      {recent.length > 0 && (
        <Dialog
          open={recentOpen}
          onClose={() => setRecentOpen(false)}
          eyebrow="Logros"
          title={
            recent.length === 1
              ? '¡Logro desbloqueado!'
              : `${recent.length} logros desbloqueados`
          }
        >
          <ul className="mt-4 flex max-h-72 flex-col gap-2 overflow-y-auto">
            {recent.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50">
                  <AchievementIcon icon={item.icon} className="size-7" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-black leading-5">{item.name}</span>
                  <span className="mt-0.5 block text-xs font-semibold leading-4 text-slate-500">
                    {item.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => setRecentOpen(false)}
            className="mt-5 h-11 w-full rounded-full bg-accent-strong font-black"
          >
            Entendido
          </Button>
        </Dialog>
      )}
    </div>
  )
}

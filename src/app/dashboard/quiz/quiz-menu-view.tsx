'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BookOpen, ChevronRight, Stethoscope, Zap } from 'lucide-react'
import { specialties } from '@/lib/content'

type Mode = 'quiz' | 'cases'

function ShuffleIcon() {
  return <span className="text-xl font-black">?</span>
}

function ModeButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex-1 rounded-full py-2 text-sm font-black transition ${
        active ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-700'
      }`}
    >
      {children}
    </button>
  )
}

export function QuizMenuView() {
  const [mode, setMode] = useState<Mode>('quiz')

  const hero =
    mode === 'quiz'
      ? {
          icon: <Zap className="size-5" fill="currentColor" />,
          title: 'Gana XP y sube de nivel',
          body: 'Mantén una racha de respuestas correctas para activar multiplicadores.',
        }
      : {
          icon: <Stethoscope className="size-5" />,
          title: 'Razonamiento clínico',
          body: 'Aplica lo que sabes a viñetas reales y revela el diagnóstico.',
        }

  return (
    <div className="flex flex-col gap-6 pt-7 pb-8 sm:pt-10">
      <header>
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">Entrenamiento</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">Elige tu quiz</h1>
        <p className="mt-2 text-sm font-medium text-slate-500">Preguntas y casos clínicos, a tu ritmo.</p>
      </header>
      <div className="flex rounded-full bg-slate-100 p-1">
        <ModeButton active={mode === 'quiz'} onClick={() => setMode('quiz')}>
          Preguntas
        </ModeButton>
        <ModeButton active={mode === 'cases'} onClick={() => setMode('cases')}>
          Casos clínicos
        </ModeButton>
      </div>
      <div className="rounded-3xl bg-[#FF5216] p-6 text-white">
        <div className="flex items-center gap-2 text-orange-100">
          {hero.icon}
          <span className="font-black">{hero.title}</span>
        </div>
        <p className="mt-3 text-sm font-medium leading-6 text-orange-50">{hero.body}</p>
      </div>
      {mode === 'quiz' ? (
        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard/quiz/random"
            className="flex items-center gap-4 rounded-3xl border-2 border-[#FF5216] bg-orange-50 p-5 text-left"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FF5216] text-white">
              <ShuffleIcon />
            </div>
            <div className="flex-1">
              <h2 className="font-black">Quiz aleatorio</h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">Preguntas de todas las especialidades</p>
            </div>
            <ChevronRight />
          </Link>
          {specialties.map((specialty) => (
            <Link
              key={specialty.slug}
              href={`/dashboard/quiz/${specialty.slug}`}
              className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100">
                <BookOpen className="size-5 text-[#FF5216]" />
              </div>
              <div className="flex-1">
                <h2 className="font-black">Quiz de {specialty.name}</h2>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">5 preguntas · +100 XP posibles</p>
              </div>
              <ChevronRight className="text-slate-300" />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard/quiz/cases/random"
            className="flex items-center gap-4 rounded-3xl border-2 border-[#FF5216] bg-orange-50 p-5 text-left"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FF5216] text-white">
              <Stethoscope className="size-5" />
            </div>
            <div className="flex-1">
              <h2 className="font-black">Caso aleatorio</h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">Viñetas de todas las especialidades</p>
            </div>
            <ChevronRight />
          </Link>
          {specialties.map((specialty) => (
            <Link
              key={specialty.slug}
              href={`/dashboard/quiz/cases/${specialty.slug}`}
              className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100">
                <Stethoscope className="size-5 text-[#FF5216]" />
              </div>
              <div className="flex-1">
                <h2 className="font-black">Caso de {specialty.name}</h2>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">Viñeta clínica · 1 caso</p>
              </div>
              <ChevronRight className="text-slate-300" />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

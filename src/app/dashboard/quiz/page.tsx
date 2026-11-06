import type { Metadata } from 'next'
import Link from 'next/link'
import { Brain, ChevronRight, Stethoscope } from 'lucide-react'
import { clinicalCases } from '@/lib/cases'
import { specialties } from '@/lib/content'
import { quizGroups } from '@/lib/quiz-bank'
import { ROUND_SIZE } from '@/lib/quiz'

export const metadata: Metadata = {
  title: 'Quiz',
}

export default function QuizMenuPage() {
  const quizzes = specialties.reduce(
    (total, specialty) => total + quizGroups(specialty.slug).length,
    0
  )

  const modes = [
    {
      href: '/dashboard/quiz/questions',
      icon: Brain,
      title: 'Preguntas',
      description: `${quizzes} quizzes de ${ROUND_SIZE} preguntas, por especialidad.`,
    },
    {
      href: '/dashboard/quiz/cases',
      icon: Stethoscope,
      title: 'Casos clínicos',
      description: `${clinicalCases.length} viñetas con diagnóstico y razonamiento.`,
    },
  ]

  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <header>
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">Entrenamiento</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">Elige tu quiz</h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          Preguntas y casos clínicos, a tu ritmo.
        </p>
      </header>
      <div className="flex flex-col gap-3">
        {modes.map((mode) => (
          <Link
            key={mode.href}
            href={mode.href}
            className="card-lift flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-sm"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5216]">
              <mode.icon className="size-7" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-black">{mode.title}</h2>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">{mode.description}</p>
            </div>
            <ChevronRight className="text-slate-300" />
          </Link>
        ))}
      </div>
    </div>
  )
}

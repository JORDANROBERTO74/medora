import Link from 'next/link'
import { BookOpen, ChevronRight, Zap } from 'lucide-react'
import { BackHeader } from '@/components/back-header'
import { specialties } from '@/lib/content'

function ShuffleIcon() {
  return <span className="text-xl font-black">?</span>
}

export function QuizMenuView() {
  return (
    <div className="flex flex-col gap-6 pt-6">
      <BackHeader href="/dashboard" backLabel="Volver al inicio" eyebrow="Entrenamiento" title="Elige tu quiz" />
      <div className="rounded-3xl bg-[#FF5216] p-6 text-white">
        <div className="flex items-center gap-2 text-orange-100">
          <Zap className="size-5" fill="currentColor" />
          <span className="font-black">Gana XP y sube de nivel</span>
        </div>
        <p className="mt-3 text-sm font-medium leading-6 text-orange-50">
          Mantén una racha de respuestas correctas para activar multiplicadores.
        </p>
      </div>
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
            className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-4 text-left shadow-sm"
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
    </div>
  )
}

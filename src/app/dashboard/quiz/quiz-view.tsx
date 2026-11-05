'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check, Clipboard, Lightbulb, Star, X } from 'lucide-react'
import { BackHeader } from '@/components/back-header'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { getTopic, specialtyName, type QuizQuestion } from '@/lib/content'
import { useUserData } from '@/lib/user-data/context'
import { starsFor } from '@/lib/quiz'

/** "Medicina Interna / Semiología · Deshidratación", resolved from the slugs. */
function sourceLabel(question: QuizQuestion): string {
  const topic = getTopic(question.source.specialty, question.source.topic)
  return `${specialtyName(question.source.specialty)} · ${topic?.name ?? question.source.topic}`
}

export function QuizView({
  eyebrow,
  activityKey,
  questions,
  backHref = "/dashboard/quiz",
  backLabel = "Volver a selección de quiz",
}: {
  eyebrow: string
  activityKey: string
  questions: QuizQuestion[]
  /** Where both "volver" and "elegir otro quiz" land; a specialty quiz goes back to its list. */
  backHref?: string
  backLabel?: string
}) {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [missed, setMissed] = useState<QuizQuestion[]>([])
  const [explainOpen, setExplainOpen] = useState(false)
  const [finished, setFinished] = useState(false)
  /** Guards against a double click scoring the same question twice. */
  const answered = useRef(false)
  const { recordResult } = useUserData()

  const question = questions[index]
  const total = questions.length
  const isLast = index === total - 1
  const stars = starsFor(correctCount, total)

  const choose = (optionIndex: number) => {
    if (answered.current) return
    answered.current = true
    setSelectedAnswer(optionIndex)
    if (optionIndex === question.correctIndex) {
      setCorrectCount((count) => count + 1)
    } else {
      setMissed((items) => [...items, question])
    }
    setChecked(true)
  }

  const advance = () => {
    if (isLast) {
      void recordResult('quiz', activityKey, correctCount, total)
      setFinished(true)
      return
    }
    setIndex((current) => current + 1)
    setSelectedAnswer(null)
    setChecked(false)
    answered.current = false
  }

  return (
    <div className="flex flex-col gap-5 pt-7 sm:pt-10">
      <BackHeader
        href={backHref}
        backLabel={backLabel}
        eyebrow={eyebrow}
        title="Ronda de preguntas"
        titleClassName="text-xl font-black"
      />
      {finished ? (
        <div className="rounded-3xl bg-slate-900 p-6 text-center text-white">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#FF5216]">
            <Star className="size-8" fill="currentColor" />
          </div>
          <p className="mt-5 text-sm font-bold text-slate-400">QUIZ COMPLETADO</p>
          <div className="mt-4 flex justify-center gap-1.5">
            {Array.from({ length: total }, (_, star) => (
              <Star
                key={star}
                className={star < stars ? 'size-7 text-[#FF5216]' : 'size-7 text-slate-700'}
                fill="currentColor"
              />
            ))}
          </div>
          <h2 className="mt-4 text-4xl font-black">
            {stars}/{total}
          </h2>
          <p className="mt-2 text-slate-300">
            {correctCount} de {total} correctas
          </p>
          <Button
            onClick={() => router.push(backHref)}
            className="mt-6 h-12 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810]"
          >
            Elegir otro quiz
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <span className="text-sm font-black text-slate-500">
              Pregunta {index + 1} de {total}
            </span>
            <span className="text-sm font-black text-[#FF5216]">
              {correctCount}/{total}
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-[#FF5216] transition-all"
              style={{ width: `${((index + (checked ? 1 : 0)) / total) * 100}%` }}
            />
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5216]">
              <Clipboard className="size-6" />
            </div>
            <h2 className="mt-6 text-2xl font-black leading-tight">{question.prompt}</h2>
            <p className="mt-2 text-sm font-semibold text-muted-foreground">Elige la mejor respuesta.</p>
            <div className="mt-6 flex flex-col gap-3">
              {question.options.map((answer, optionIndex) => {
                const isCorrectOption = optionIndex === question.correctIndex
                const chosen = selectedAnswer === optionIndex
                const state =
                  checked && chosen
                    ? isCorrectOption
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                      : 'border-red-400 bg-red-50 text-red-800'
                    : checked && isCorrectOption
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                      : chosen
                        ? 'border-[#FF5216] bg-orange-50'
                        : 'border-slate-200'
                return (
                  <button
                    key={answer}
                    disabled={checked}
                    onClick={() => choose(optionIndex)}
                    className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left text-sm font-bold transition disabled:cursor-default ${state}`}
                  >
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${chosen ? 'bg-[#FF5216] text-white' : 'bg-slate-100 text-slate-500'}`}
                    >
                      {String.fromCharCode(65 + optionIndex)}
                    </span>
                    <span className="flex-1">{answer}</span>
                    {checked && chosen && (isCorrectOption ? <Check className="size-5 text-emerald-600" /> : <X className="size-5 text-red-500" />)}
                    {checked && !chosen && isCorrectOption && <Check className="size-5 text-emerald-600" />}
                  </button>
                )
              })}
            </div>
            {checked && (
              <>
                <button
                  type="button"
                  onClick={() => setExplainOpen(true)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 py-3 text-sm font-black text-slate-600 transition hover:border-[#FF5216] hover:text-[#FF5216]"
                >
                  <Lightbulb className="size-4" /> ¿Por qué esta respuesta?
                </button>
                <Button
                  onClick={advance}
                  className="mt-3 h-12 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810]"
                >
                  {isLast ? 'Ver resultado' : 'Siguiente pregunta'}{' '}
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </>
            )}
          </div>
          <Dialog
            open={explainOpen}
            onClose={() => setExplainOpen(false)}
            eyebrow="Explicación"
            title="Por qué esta respuesta"
          >
            <p className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
              {question.options[question.correctIndex]}
            </p>
            <p className="mt-4 text-sm font-medium leading-6 text-slate-600">
              {question.explanation}
            </p>
            <div className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                Para repasar
              </p>
              <p className="mt-1 text-sm font-bold text-slate-700">{sourceLabel(question)}</p>
            </div>
          </Dialog>
        </>
      )}
      {finished && missed.length > 0 && (
        <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-500">
            Repasa lo que fallaste
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {missed.map((item) => (
              <li key={item.prompt} className="border-l-2 border-[#FF5216] pl-3">
                <p className="text-sm font-bold leading-5 text-slate-800">{item.prompt}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-slate-500">
                  {sourceLabel(item)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

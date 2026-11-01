'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check, Clipboard, Trophy, X, Zap } from 'lucide-react'
import { BackHeader } from '@/components/back-header'
import { Button } from '@/components/ui/button'
import { quizQuestion } from '@/lib/content'
import { isCorrectAnswer, scoreFor } from '@/lib/quiz'

export function QuizView({ eyebrow }: { eyebrow: string }) {
  const router = useRouter()
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)

  const correct = isCorrectAnswer(selectedAnswer, quizQuestion.correctIndex)
  const finish = checked && correct

  return (
    <div className="flex flex-col gap-5 pt-6">
      <BackHeader
        href="/dashboard/quiz"
        backLabel="Volver a selección de quiz"
        eyebrow={eyebrow}
        title="Racha de estudio"
        titleClassName="text-xl font-black"
        trailing={
          <div className="flex items-center gap-1 rounded-full bg-orange-50 px-3 py-2 text-sm font-black text-[#FF5216]">
            <Zap className="size-4" fill="currentColor" /> {score} XP
          </div>
        }
      />
      {finish ? (
        <div className="rounded-3xl bg-slate-900 p-7 text-center text-white">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#FF5216]">
            <Trophy className="size-8" />
          </div>
          <p className="mt-5 text-sm font-bold text-slate-400">QUIZ COMPLETADO</p>
          <h2 className="mt-2 text-4xl font-black">80 puntos</h2>
          <p className="mt-2 text-slate-300">+120 XP · Multiplicador de racha x1.2</p>
          <Button
            onClick={() => router.push('/dashboard/quiz')}
            className="mt-6 h-12 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810]"
          >
            Elegir otro quiz
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <span className="text-sm font-black text-slate-500">Pregunta 2 de 5</span>
            <span className="text-sm font-black text-[#FF5216]">{score ? 'Racha x1.2' : 'Racha x1'}</span>
          </div>
          <div className="h-2 rounded-full bg-slate-200">
            <div className="h-full w-2/5 rounded-full bg-[#FF5216]" />
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5216]">
              <Clipboard className="size-6" />
            </div>
            <h2 className="mt-6 text-2xl font-black leading-tight">{quizQuestion.prompt}</h2>
            <p className="mt-2 text-sm font-semibold text-muted-foreground">Elige la mejor respuesta.</p>
            <div className="mt-6 flex flex-col gap-3">
              {quizQuestion.options.map((answer, index) => {
                const isCorrectOption = index === quizQuestion.correctIndex
                const chosen = selectedAnswer === index
                const state =
                  checked && chosen
                    ? isCorrectOption
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                      : 'border-red-400 bg-red-50 text-red-800'
                    : chosen
                      ? 'border-[#FF5216] bg-orange-50'
                      : 'border-slate-200'
                return (
                  <button
                    key={answer}
                    onClick={() => !checked && setSelectedAnswer(index)}
                    className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left text-sm font-bold transition ${state}`}
                  >
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${chosen ? 'bg-[#FF5216] text-white' : 'bg-slate-100 text-slate-500'}`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{answer}</span>
                    {checked && chosen && (isCorrectOption ? <Check className="size-5 text-emerald-600" /> : <X className="size-5 text-red-500" />)}
                  </button>
                )
              })}
            </div>
            {checked && (
              <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
                Respuesta registrada. Tu racha aumenta el multiplicador de XP.
              </div>
            )}
            <Button
              disabled={selectedAnswer === null}
              onClick={() => {
                setScore(scoreFor(selectedAnswer, quizQuestion.correctIndex))
                setChecked(true)
              }}
              className="mt-6 h-12 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810] disabled:opacity-40"
            >
              {checked ? 'Ver resultado' : 'Comprobar respuesta'} <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

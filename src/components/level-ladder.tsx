'use client'

import { LevelAvatar } from '@/components/level-avatar'
import { LEVELS, levelFor } from '@/lib/achievements'
import { useUserData } from '@/lib/user-data/context'

/**
 * The full 8-step ladder: without it the level badge gives no clue about how
 * many levels exist or what each one requires.
 */
export function LevelLadder() {
  const { achievementList } = useUserData()
  const level = levelFor(achievementList)

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-500">
          Niveles
        </h2>
        <span className="text-xs font-black text-slate-500">
          {level.current.index} de {LEVELS.length}
        </span>
      </div>

      <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {LEVELS.map((step) => {
          const current = step.index === level.current.index
          const reached = step.index <= level.current.index

          return (
            <li
              key={step.index}
              aria-current={current ? 'step' : undefined}
              className={`flex flex-col items-center gap-1.5 rounded-2xl border p-3 text-center ${
                current
                  ? 'border-orange-100 bg-orange-50/50'
                  : 'border-slate-100 bg-slate-50'
              }`}
            >
              <LevelAvatar
                level={step.index}
                className={`size-10 rounded-full ${reached ? '' : 'opacity-40 grayscale'}`}
              />
              <p
                className={`text-[11px] font-black ${
                  reached ? 'text-slate-800' : 'text-slate-400'
                }`}
              >
                {step.name}
              </p>
              <p className="text-[9px] font-semibold text-slate-400">
                {step.from === 0 ? 'Inicio' : `${step.from} logros`}
              </p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

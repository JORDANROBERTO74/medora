'use client'

import { useMemo } from 'react'
import { Lock } from 'lucide-react'
import {
  achievementCounts,
  computeAchievements,
  type Achievement,
} from '@/lib/achievements'
import { useUserData } from '@/lib/user-data/context'

function AchievementTile({ achievement }: { achievement: Achievement }) {
  const Icon = achievement.icon
  const unlocked = achievement.unlocked

  return (
    <div
      className={`rounded-2xl border p-4 ${
        unlocked ? 'border-orange-100 bg-orange-50/50' : 'border-slate-100 bg-slate-50'
      }`}
    >
      <div
        className={`flex size-9 items-center justify-center rounded-xl ${
          unlocked ? 'bg-[#FF5216] text-white' : 'bg-slate-200 text-slate-400'
        }`}
      >
        {unlocked ? <Icon className="size-5" /> : <Lock className="size-4" />}
      </div>
      <p className={`mt-3 text-sm font-black ${unlocked ? 'text-slate-900' : 'text-slate-400'}`}>
        {achievement.name}
      </p>
      <p
        className={`mt-1 text-[11px] font-semibold leading-4 ${
          unlocked ? 'text-slate-500' : 'text-slate-400'
        }`}
      >
        {achievement.description}
      </p>
    </div>
  )
}

export function Achievements({ streak }: { streak: number }) {
  const data = useUserData()
  const achievements = useMemo(() => computeAchievements(data, streak), [data, streak])
  const counts = achievementCounts(achievements)

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-500">Logros</h2>
        <span className="text-xs font-black text-slate-500">
          {counts.unlocked} de {counts.total}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {achievements.map((achievement) => (
          <AchievementTile key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  )
}

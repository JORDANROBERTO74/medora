'use client'

import { Lock } from 'lucide-react'
import { AchievementIcon } from '@/components/achievement-icon'
import {
  GROUP_LABELS,
  achievementCounts,
  type Achievement,
  type AchievementGroup,
} from '@/lib/achievements'
import { useUserData } from '@/lib/user-data/context'

const GROUP_ORDER: Exclude<AchievementGroup, 'especialidad'>[] = [
  'constancia',
  'volumen',
  'precision',
  'casos',
  'lecturas',
  'temas',
  'notas',
  'meta',
]

/** Tier only changes the plate; the icon stays from one family. */
const TIER_PLATE: Record<Achievement['tier'], string> = {
  bronze: 'bg-orange-50 ring-2 ring-amber-700/30',
  silver: 'bg-slate-100 ring-2 ring-slate-400/50',
  gold: 'bg-orange-50 ring-2 ring-[#FF5216]/45',
}

function AchievementTile({ achievement }: { achievement: Achievement }) {
  const { unlocked, progress } = achievement

  return (
    <div
      className={`flex flex-col rounded-2xl border p-3 ${
        unlocked
          ? 'border-orange-100 bg-orange-50/50'
          : 'border-slate-100 bg-slate-50'
      }`}
    >
      <div className="flex justify-center">
        <div
          className={`relative flex size-11 items-center justify-center rounded-2xl ${
            unlocked ? TIER_PLATE[achievement.tier] : 'bg-slate-200'
          }`}
        >
          <AchievementIcon
            icon={achievement.icon}
            className={`size-7 ${unlocked ? '' : 'opacity-40 grayscale'}`}
          />
          {!unlocked && (
            <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
              <Lock className="size-2.5" />
            </span>
          )}
        </div>
      </div>
      <p
        className={`mt-2 text-[11px] font-black leading-4 ${
          unlocked ? 'text-slate-900' : 'text-slate-400'
        }`}
      >
        {achievement.name}
      </p>
      <p className="mt-0.5 line-clamp-2 text-[10px] font-semibold leading-4 text-slate-500">
        {achievement.description}
      </p>
      {!unlocked && progress.target > 1 && (
        <p className="mt-1 text-[10px] font-black tabular-nums text-slate-400">
          {progress.current}/{progress.target}
        </p>
      )}
    </div>
  )
}

function SpecialtyCard({
  name,
  achievements,
}: {
  name: string
  achievements: Achievement[]
}) {
  const done = achievements.filter((item) => item.unlocked).length

  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-xs font-black text-slate-700">{name}</p>
        <span className="text-[11px] font-black text-slate-500">
          {done} de {achievements.length}
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {achievements.map((item) => {
          const percent =
            item.progress.target === 0
              ? 100
              : Math.round((item.progress.current / item.progress.target) * 100)
          return (
            <div key={item.id} className="flex items-center gap-2">
              <div
                className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${
                  item.unlocked ? TIER_PLATE.gold : 'bg-slate-200'
                }`}
              >
                <AchievementIcon
                  icon={item.icon}
                  className={`size-4.5 ${item.unlocked ? '' : 'opacity-40 grayscale'}`}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p
                    className={`truncate text-[11px] font-bold ${
                      item.unlocked ? 'text-slate-800' : 'text-slate-500'
                    }`}
                  >
                    {item.name}
                  </p>
                  <span className="shrink-0 text-[10px] font-black tabular-nums text-slate-400">
                    {item.progress.current}/{item.progress.target}
                  </span>
                </div>
                <div className="progress-track mt-1 h-1 rounded-full">
                  <div
                    className="h-full rounded-full bg-[#FF5216]"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Achievements() {
  const { achievementList } = useUserData()
  const counts = achievementCounts(achievementList)
  const specialty = achievementList.filter((item) => item.group === 'especialidad')
  const specialtyNames = new Map<string, string>()
  for (const item of specialty) {
    if (item.specialty) specialtyNames.set(item.specialty.slug, item.specialty.name)
  }

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-500">
          Logros
        </h2>
        <span className="text-xs font-black text-slate-500">
          {counts.unlocked} de {counts.total}
        </span>
      </div>

      {GROUP_ORDER.map((group) => {
        const items = achievementList
          .filter((item) => item.group === group)
          .sort((a, b) => Number(b.unlocked) - Number(a.unlocked))
        if (items.length === 0) return null
        const done = items.filter((item) => item.unlocked).length

        return (
          <div key={group} className="mt-5">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                {GROUP_LABELS[group]}
              </h3>
              <span className="text-[10px] font-black text-slate-400">
                {done}/{items.length}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {items.map((item) => (
                <AchievementTile key={item.id} achievement={item} />
              ))}
            </div>
          </div>
        )
      })}

      <div className="mt-6">
        <h3 className="text-[11px] font-black uppercase tracking-wider text-slate-500">
          Por especialidad
        </h3>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {[...specialtyNames.entries()].map(([slug, name]) => (
            <SpecialtyCard
              key={slug}
              name={name}
              achievements={specialty.filter((item) => item.specialty?.slug === slug)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

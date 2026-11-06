'use client'

import { AchievementIcon } from '@/components/achievement-icon'
import type { Achievement } from '@/lib/achievements'
import { useUserData } from '@/lib/user-data/context'

function BadgeRow({ achievement }: { achievement: Achievement }) {
  const percent =
    achievement.progress.target === 0
      ? 100
      : Math.round((achievement.progress.current / achievement.progress.target) * 100)

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${
          achievement.unlocked ? 'bg-orange-50 ring-2 ring-[#FF5216]/45' : 'bg-slate-100'
        }`}
      >
        <AchievementIcon
          icon={achievement.icon}
          className={`size-4.5 ${achievement.unlocked ? '' : 'opacity-40 grayscale'}`}
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <p
            className={`truncate text-[11px] font-bold ${
              achievement.unlocked ? 'text-slate-800' : 'text-slate-500'
            }`}
          >
            {achievement.name}
          </p>
          <span className="shrink-0 text-[10px] font-black tabular-nums text-slate-400">
            {achievement.progress.current}/{achievement.progress.target}
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
}

/**
 * The per-specialty badges live outside the Logros card: they replace the old
 * percentage list, so the page keeps one view of how each area is going.
 */
export function SpecialtyAchievements() {
  const { achievementList } = useUserData()
  const specialty = achievementList.filter((item) => item.group === 'especialidad')
  if (specialty.length === 0) return null

  const groups = new Map<string, { name: string; items: Achievement[] }>()
  for (const item of specialty) {
    if (!item.specialty) continue
    const group = groups.get(item.specialty.slug) ?? { name: item.specialty.name, items: [] }
    group.items.push(item)
    groups.set(item.specialty.slug, group)
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-black uppercase tracking-wider text-slate-500">
        Por especialidad
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {[...groups.entries()].map(([slug, group]) => {
          const done = group.items.filter((item) => item.unlocked).length
          return (
            <div
              key={slug}
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-xs font-black text-slate-700">{group.name}</p>
                <span className="text-[11px] font-black text-slate-500">
                  {done} de {group.items.length}
                </span>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <BadgeRow key={item.id} achievement={item} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

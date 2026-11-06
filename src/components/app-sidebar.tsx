'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Stethoscope } from 'lucide-react'
import { navEntries, type NavEntry } from '@/lib/nav'
import { useUserData } from '@/lib/user-data/context'

/** Desktop-only navigation. Mobile keeps the BottomNav. */
export function AppSidebar() {
  const pathname = usePathname()
  const { unseenAchievements } = useUserData()

  const main = navEntries.filter((entry) => entry.href !== '/settings')
  const footer = navEntries.filter((entry) => entry.href === '/settings')

  return (
    <aside
      aria-label="Navegación principal"
      className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-slate-100 bg-white px-3 py-6 lg:flex"
    >
      <Link
        href="/dashboard"
        className="flex items-center gap-3 rounded-2xl px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5216]"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#FF5216] text-white">
          <Stethoscope className="size-5" />
        </span>
        <span className="text-lg font-black tracking-tight">Medora</span>
      </Link>

      <nav className="mt-6 flex flex-1 flex-col gap-1">
        {main.map((entry) => (
          <SidebarLink
            key={entry.href}
            entry={entry}
            active={entry.isActive(pathname)}
            badge={entry.href === '/dashboard/progress' ? unseenAchievements : 0}
          />
        ))}
        <div className="mt-auto flex flex-col gap-1">
          {footer.map((entry) => (
            <SidebarLink
              key={entry.href}
              entry={entry}
              active={entry.isActive(pathname)}
              badge={0}
            />
          ))}
        </div>
      </nav>
    </aside>
  )
}

function SidebarLink({
  entry,
  active,
  badge,
}: {
  entry: NavEntry
  active: boolean
  badge: number
}) {
  return (
    <Link
      href={entry.href}
      aria-current={active ? 'page' : undefined}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
        active
          ? 'bg-[#FF5216] text-white shadow-[0_8px_20px_rgba(255,82,22,0.25)]'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      <entry.icon className="size-5 shrink-0" />
      <span className="truncate">{entry.label}</span>
      {badge > 0 && (
        <>
          <span
            aria-hidden="true"
            className={`ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-black leading-none ${
              active ? 'bg-white text-[#FF5216]' : 'bg-[#FF5216] text-white'
            }`}
          >
            {badge > 9 ? '9+' : badge}
          </span>
          <span className="sr-only">
            {badge} {badge === 1 ? 'logro nuevo' : 'logros nuevos'}
          </span>
        </>
      )}
    </Link>
  )
}

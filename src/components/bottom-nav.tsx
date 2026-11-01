'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { LucideIcon } from 'lucide-react'
import { Home, Menu, StickyNote, Target, Trophy } from 'lucide-react'

type NavEntry = {
  href: string
  label: string
  icon: LucideIcon
  isActive: (pathname: string) => boolean
}

const entries: NavEntry[] = [
  {
    href: '/dashboard',
    label: 'Inicio',
    icon: Home,
    isActive: (pathname) => pathname === '/dashboard' || pathname.startsWith('/dashboard/topics'),
  },
  {
    href: '/dashboard/quiz',
    label: 'Quiz',
    icon: Trophy,
    isActive: (pathname) => pathname.startsWith('/dashboard/quiz'),
  },
  {
    href: '/dashboard/notes',
    label: 'Notas',
    icon: StickyNote,
    isActive: (pathname) => pathname.startsWith('/dashboard/notes'),
  },
  {
    href: '/dashboard/progress',
    label: 'Progreso',
    icon: Target,
    isActive: (pathname) => pathname.startsWith('/dashboard/progress'),
  },
  {
    href: '/dashboard/more',
    label: 'Más',
    icon: Menu,
    isActive: (pathname) => pathname.startsWith('/dashboard/more'),
  },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed inset-x-4 bottom-4 z-10 mx-auto flex max-w-md items-center justify-between rounded-[28px] border border-slate-100 bg-white/95 p-2 shadow-[0_14px_35px_rgba(15,23,42,0.12)] backdrop-blur sm:inset-x-auto sm:w-[390px]">
      {entries.map((entry) => (
        <NavItem key={entry.href} entry={entry} active={entry.isActive(pathname)} />
      ))}
    </nav>
  )
}

// flex-1 + min-w-0 + px-0.5: five labels must fit a 320px viewport.
function NavItem({ entry, active }: { entry: NavEntry; active: boolean }) {
  return (
    <Link
      href={entry.href}
      aria-current={active ? 'page' : undefined}
      className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-0.5 py-2 text-[10px] font-extrabold transition ${
        active ? 'bg-[#FF5216] text-white' : 'text-muted-foreground hover:bg-slate-50 hover:text-slate-700'
      }`}
    >
      <entry.icon className="size-5" />
      <span className="w-full truncate text-center">{entry.label}</span>
    </Link>
  )
}

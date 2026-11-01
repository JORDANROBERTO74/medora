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

// Icon-only items: label stays as aria-label, flex-1 keeps equal tap targets.
function NavItem({ entry, active }: { entry: NavEntry; active: boolean }) {
  return (
    <Link
      href={entry.href}
      aria-label={entry.label}
      aria-current={active ? 'page' : undefined}
      className={`flex min-w-0 flex-1 items-center justify-center rounded-2xl py-3 transition ${
        active ? 'bg-[#FF5216] text-white' : 'text-muted-foreground hover:bg-slate-50 hover:text-slate-700'
      }`}
    >
      <entry.icon className="size-5" />
    </Link>
  )
}

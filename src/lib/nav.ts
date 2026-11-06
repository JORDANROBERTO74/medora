import type { LucideIcon } from 'lucide-react'
import { Home, NotebookPen, Brain, Trophy, Settings2 } from 'lucide-react'

export type NavEntry = {
  href: string
  label: string
  icon: LucideIcon
  isActive: (pathname: string) => boolean
}

/** Shared by the desktop sidebar and the mobile bottom nav. */
export const navEntries: NavEntry[] = [
  {
    href: '/dashboard',
    label: 'Inicio',
    icon: Home,
    isActive: (pathname) =>
      pathname === '/dashboard' || pathname.startsWith('/dashboard/reading'),
  },
  {
    href: '/dashboard/quiz',
    label: 'Quiz',
    icon: Brain,
    isActive: (pathname) => pathname.startsWith('/dashboard/quiz'),
  },
  {
    href: '/dashboard/notes',
    label: 'Notas',
    icon: NotebookPen,
    isActive: (pathname) =>
      pathname.startsWith('/dashboard/notes') ||
      pathname.startsWith('/dashboard/lesson'),
  },
  {
    href: '/dashboard/progress',
    label: 'Progreso',
    icon: Trophy,
    isActive: (pathname) => pathname.startsWith('/dashboard/progress'),
  },
  {
    href: '/settings',
    label: 'Ajustes',
    icon: Settings2,
    isActive: (pathname) => pathname.startsWith('/settings'),
  },
]

import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  BookMarked,
  BookOpen,
  BookOpenCheck,
  Crown,
  Flame,
  NotebookPen,
  PenLine,
  Star,
  Stethoscope,
  Trophy,
  Zap,
} from 'lucide-react'
import type { ProgressContentType } from '@/lib/supabase/database.types'
import { buildProgressSummary } from '@/lib/user-data/progress'
import type { UserData } from '@/lib/user-data/types'

export type Achievement = {
  id: string
  name: string
  description: string
  icon: LucideIcon
  unlocked: boolean
}

const countType = (data: UserData, contentType: ProgressContentType): number =>
  data.progress.filter((entry) => entry.contentType === contentType).length

/**
 * Derived from data the provider already holds: no table, no unlock writes, and
 * nothing to farm. The only thing it cannot do is remember *when* it unlocked.
 */
export function computeAchievements(data: UserData, streak: number): Achievement[] {
  const lessons = countType(data, 'lesson')
  const readings = countType(data, 'reading')
  const cases = countType(data, 'case')
  const summary = buildProgressSummary(data.progress)

  const build = (
    id: string,
    name: string,
    description: string,
    icon: LucideIcon,
    unlocked: boolean
  ): Achievement => ({ id, name, description, icon, unlocked })

  return [
    build('first-lesson', 'Primer repaso', 'Marca tu primer apunte como repasado.', BookOpenCheck, lessons >= 1),
    build('ten-lessons', 'Diez repasos', 'Repasa diez temas de tus apuntes.', BookOpen, lessons >= 10),
    build(
      'full-specialty',
      'Especialidad completa',
      'Repasa todos los temas de una especialidad.',
      Trophy,
      summary.bySpecialty.some((item) => item.completed === item.total && item.total > 0)
    ),
    build('first-reading', 'Primera lectura', 'Abre un capítulo de lectura.', BookMarked, readings >= 1),
    build('streak-3', 'Tres días seguidos', 'Estudia tres días seguidos.', Flame, streak >= 3),
    build('streak-7', 'Una semana', 'Estudia siete días seguidos.', Zap, streak >= 7),
    build('streak-30', 'Un mes', 'Estudia treinta días seguidos.', Crown, streak >= 30),
    build('first-note', 'Primera nota', 'Escribe tu primera nota personal.', PenLine, data.notes.length >= 1),
    build('ten-notes', 'Diez notas', 'Escribe diez notas personales.', NotebookPen, data.notes.length >= 10),
    build(
      'first-correct',
      'Primera respuesta correcta',
      'Acierta al menos una pregunta.',
      BadgeCheck,
      data.results.correct >= 1
    ),
    build(
      'perfect-round',
      'Ronda perfecta',
      'Consigue el máximo de estrellas en una ronda.',
      Star,
      data.results.best >= 5
    ),
    build('first-case', 'Primer caso clínico', 'Resuelve tu primera viñeta clínica.', Stethoscope, cases >= 1),
  ]
}

/** Counts for the section header. */
export function achievementCounts(achievements: Achievement[]): { unlocked: number; total: number } {
  return {
    unlocked: achievements.filter((item) => item.unlocked).length,
    total: achievements.length,
  }
}

import type { SpecialtySlug } from '@/lib/content'
import type { UserData } from '@/lib/user-data/types'
import type { AchievementIconKey } from './icon-data'

export type AchievementGroup =
  | 'constancia'
  | 'volumen'
  | 'precision'
  | 'casos'
  | 'lecturas'
  | 'temas'
  | 'notas'
  | 'meta'
  | 'especialidad'

export type AchievementTier = 'bronze' | 'silver' | 'gold'

/** Denominators for the per-specialty badges, computed on the server. */
export type SpecialtyCatalogEntry = {
  slug: SpecialtySlug
  name: string
  topics: number
  quizzes: number
  cases: number
}

export type AchievementContext = {
  data: UserData
  streak: number
  catalog: SpecialtyCatalogEntry[]
}

export type Achievement = {
  id: string
  name: string
  description: string
  group: AchievementGroup
  tier: AchievementTier
  icon: AchievementIconKey
  /** Only set for the per-specialty badges. */
  specialty?: { slug: SpecialtySlug; name: string }
  unlocked: boolean
  progress: { current: number; target: number }
}

export const GROUP_LABELS: Record<Exclude<AchievementGroup, 'especialidad'>, string> = {
  constancia: 'Constancia',
  volumen: 'Volumen',
  precision: 'Precisión',
  casos: 'Casos clínicos',
  lecturas: 'Lecturas',
  temas: 'Temas',
  notas: 'Notas',
  meta: 'Colección',
}

export const TIER_LABELS: Record<AchievementTier, string> = {
  bronze: 'Bronce',
  silver: 'Plata',
  gold: 'Oro',
}

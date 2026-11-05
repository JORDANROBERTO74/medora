import { clinicalCases } from '@/lib/cases'
import type { SpecialtySlug } from '@/lib/content'
import type { ProgressEntry } from '@/lib/user-data/types'
import type {
  Achievement,
  AchievementContext,
  AchievementTier,
  SpecialtyCatalogEntry,
} from './types'

const caseSpecialty = new Map(
  clinicalCases.map((clinicalCase) => [clinicalCase.id, clinicalCase.specialtySlug])
)

/** Same icon family, different metaphor per specialty where it reads better. */
const QUIZ_ICONS: Partial<Record<SpecialtySlug, Achievement['icon']>> = {
  pediatrics: 'brain',
}

const countLessons = (progress: ProgressEntry[]) =>
  progress.filter((entry) => entry.contentType === 'lesson').length

const countReadings = (progress: ProgressEntry[]) =>
  progress.filter((entry) => entry.contentType === 'reading').length

type Draft = {
  id: string
  name: string
  description: string
  group: Achievement['group']
  tier: AchievementTier
  icon: Achievement['icon']
  specialty?: Achievement['specialty']
  current: number
  target: number
}

const t = (value: number) => Math.max(0, Math.floor(value))

/** Streak milestones: bronze up to a week, silver to a month, gold beyond. */
const STREAKS = [
  { days: 3, name: 'Primer impulso', tier: 'bronze' },
  { days: 7, name: 'Una semana', tier: 'bronze' },
  { days: 14, name: 'Dos semanas', tier: 'silver' },
  { days: 30, name: 'Un mes', tier: 'silver' },
  { days: 60, name: 'Dos meses', tier: 'gold' },
  { days: 100, name: 'Cien días', tier: 'gold' },
] as const satisfies readonly { days: number; name: string; tier: AchievementTier }[]

const QUESTIONS = [
  { target: 10, name: 'Calentando', tier: 'bronze' },
  { target: 50, name: 'Cincuenta preguntas', tier: 'bronze' },
  { target: 100, name: 'Cien preguntas', tier: 'silver' },
  { target: 500, name: 'Quinientas preguntas', tier: 'gold' },
] as const

const ROUNDS = [
  { target: 5, name: 'Cinco rondas', tier: 'bronze' },
  { target: 25, name: 'Veinticinco rondas', tier: 'silver' },
  { target: 50, name: 'Cincuenta rondas', tier: 'gold' },
] as const

const STARS = [
  { target: 10, name: 'Diez estrellas', tier: 'bronze' },
  { target: 50, name: 'Cincuenta estrellas', tier: 'silver' },
  { target: 100, name: 'Cien estrellas', tier: 'gold' },
] as const

const ACCURACY = [
  { target: 80, name: 'Puntería', tier: 'bronze' },
  { target: 90, name: 'Precisión', tier: 'silver' },
  { target: 95, name: 'Francotirador', tier: 'gold' },
] as const

const CASES = [
  { target: 1, name: 'Primer caso clínico', tier: 'bronze' },
  { target: 5, name: 'Cinco casos', tier: 'bronze' },
  { target: 10, name: 'Diez casos', tier: 'silver' },
  { target: 25, name: 'Veinticinco casos', tier: 'gold' },
] as const

const READINGS = [
  { target: 1, name: 'Primera lectura', tier: 'bronze' },
  { target: 10, name: 'Diez lecturas', tier: 'silver' },
  { target: 25, name: 'Veinticinco lecturas', tier: 'gold' },
] as const

const LESSONS = [
  { target: 1, name: 'Primer repaso', tier: 'bronze' },
  { target: 10, name: 'Diez repasos', tier: 'silver' },
  { target: 25, name: 'Veinticinco repasos', tier: 'gold' },
] as const

const NOTES = [
  { target: 1, name: 'Primera nota', tier: 'bronze' },
  { target: 10, name: 'Diez notas', tier: 'silver' },
  { target: 25, name: 'Veinticinco notas', tier: 'gold' },
] as const

const META = [
  { target: 5, name: 'Coleccionista', tier: 'bronze' },
  { target: 10, name: 'Cazalogros', tier: 'silver' },
  { target: 20, name: 'Vitrina completa', tier: 'gold' },
] as const

export function computeAchievements(
  { data, streak, catalog }: AchievementContext,
  recorded: ReadonlySet<string> = new Set()
): Achievement[] {
  const lessons = countLessons(data.progress)
  const readings = countReadings(data.progress)
  const accuracy =
    data.results.questions >= 50
      ? Math.round((data.results.correct / data.results.questions) * 100)
      : 0

  const bySpecialty: Draft[] = catalog.flatMap((entry) => {
    const lessonsDone = data.progress.filter(
      (item) =>
        item.contentType === 'lesson' &&
        item.contentKey.slice('lesson:'.length).split('/')[0] === entry.slug
    ).length
    const quizzesDone = data.progress.filter(
      (item) =>
        item.contentType === 'quiz' && item.contentKey.split(':')[1] === entry.slug
    ).length
    const casesDone = data.progress.filter(
      (item) =>
        item.contentType === 'case' &&
        caseSpecialty.get(item.contentKey.slice('case:'.length)) === entry.slug
    ).length

    const specialty = { slug: entry.slug, name: entry.name }

    const make = (
      kind: string,
      name: string,
      description: string,
      icon: Achievement['icon'],
      current: number,
      target: number
    ): Draft => ({
      id: `${entry.slug}-${kind}`,
      name,
      description,
      group: 'especialidad',
      tier: 'gold',
      icon,
      specialty,
      current,
      target,
    })

    return [
      make(
        'temas',
        `Temas de ${entry.name}`,
        `Repasa los ${entry.topics} temas de ${entry.name}.`,
        'books',
        lessonsDone,
        entry.topics
      ),
      make(
        'quizzes',
        `Quizzes de ${entry.name}`,
        `Completa los ${entry.quizzes} quizzes de ${entry.name}.`,
        QUIZ_ICONS[entry.slug] ?? 'shield',
        quizzesDone,
        entry.quizzes
      ),
      make(
        'casos',
        `Casos de ${entry.name}`,
        `Resuelve los ${entry.cases} casos de ${entry.name}.`,
        'stethoscope',
        casesDone,
        entry.cases
      ),
    ]
  })

  const general: Draft[] = [
    ...STREAKS.map((item) => ({
      id: `streak-${item.days}`,
      name: item.name,
      description: `Estudia ${item.days} días seguidos.`,
      group: 'constancia' as const,
      tier: item.tier,
      icon: 'fire' as const,
      current: t(streak),
      target: item.days,
    })),
    ...QUESTIONS.map((item) => ({
      id: `questions-${item.target}`,
      name: item.name,
      description: `Responde ${item.target} preguntas en total.`,
      group: 'volumen' as const,
      tier: item.tier,
      icon: 'high-voltage' as const,
      current: t(data.results.questions),
      target: item.target,
    })),
    ...ROUNDS.map((item) => ({
      id: `rounds-${item.target}`,
      name: item.name,
      description: `Completa ${item.target} rondas de quiz.`,
      group: 'volumen' as const,
      tier: item.tier,
      icon: 'rocket' as const,
      current: t(data.results.rounds),
      target: item.target,
    })),
    ...STARS.map((item) => ({
      id: `stars-${item.target}`,
      name: item.name,
      description: `Acumula ${item.target} estrellas.`,
      group: 'volumen' as const,
      tier: item.tier,
      icon: 'sparkles' as const,
      current: t(data.results.stars),
      target: item.target,
    })),
    {
      id: 'first-correct',
      name: 'Primera respuesta correcta',
      description: 'Acierta al menos una pregunta o un caso clínico.',
      group: 'precision',
      tier: 'bronze',
      icon: 'bullseye',
      current: t(data.results.correct + data.cases.correct),
      target: 1,
    },
    ...ACCURACY.map((item) => ({
      id: `accuracy-${item.target}`,
      name: item.name,
      description: `Acierta el ${item.target}% con al menos 50 preguntas.`,
      group: 'precision' as const,
      tier: item.tier,
      icon: 'bullseye' as const,
      current: accuracy,
      target: item.target,
    })),
    {
      id: 'perfect-round',
      name: 'Ronda perfecta',
      description: 'Consigue el máximo de estrellas en una ronda.',
      group: 'precision',
      tier: 'gold',
      icon: 'gem-stone',
      current: t(data.results.best),
      target: 5,
    },
    ...CASES.map((item) => ({
      id: `cases-${item.target}`,
      name: item.name,
      description: `Resuelve ${item.target} ${item.target === 1 ? 'caso clínico' : 'casos clínicos'}.`,
      group: 'casos' as const,
      tier: item.tier,
      icon: 'military-medal' as const,
      current: t(data.cases.solved),
      target: item.target,
    })),
    ...READINGS.map((item) => ({
      id: `readings-${item.target}`,
      name: item.name,
      description: `Abre ${item.target} ${item.target === 1 ? 'capítulo' : 'capítulos'} de lectura.`,
      group: 'lecturas' as const,
      tier: item.tier,
      icon: 'open-book' as const,
      current: t(readings),
      target: item.target,
    })),
    ...LESSONS.map((item) => ({
      id: `lessons-${item.target}`,
      name: item.name,
      description: `Marca ${item.target} ${item.target === 1 ? 'apunte' : 'apuntes'} como repasado.`,
      group: 'temas' as const,
      tier: item.tier,
      icon: 'seedling' as const,
      current: t(lessons),
      target: item.target,
    })),
    ...NOTES.map((item) => ({
      id: `notes-${item.target}`,
      name: item.name,
      description: `Escribe ${item.target} ${item.target === 1 ? 'nota personal' : 'notas personales'}.`,
      group: 'notas' as const,
      tier: item.tier,
      icon: item.target === 1 ? ('pencil' as const) : ('memo' as const),
      current: t(data.notes.length),
      target: item.target,
    })),
  ]

  const toAchievement = (draft: Draft): Achievement => ({
    id: draft.id,
    name: draft.name,
    description: draft.description,
    group: draft.group,
    tier: draft.tier,
    icon: draft.icon,
    ...(draft.specialty ? { specialty: draft.specialty } : {}),
    unlocked: recorded.has(draft.id) || draft.current >= draft.target,
    progress: { current: Math.min(draft.current, draft.target), target: draft.target },
  })

  const unlockedSoFar = [...general, ...bySpecialty].filter(
    (draft) => recorded.has(draft.id) || draft.current >= draft.target
  ).length

  const meta = META.map((item) => ({
    id: `achievements-${item.target}`,
    name: item.name,
    description: `Desbloquea ${item.target} logros.`,
    group: 'meta' as const,
    tier: item.tier,
    icon: '1st-place-medal' as const,
    current: unlockedSoFar,
    target: item.target,
  }))

  return [
    ...bySpecialty.map(toAchievement),
    ...general.map(toAchievement),
    ...meta.map(toAchievement),
  ]
}

export function achievementCounts(achievements: Achievement[]): {
  unlocked: number
  total: number
} {
  return {
    unlocked: achievements.filter((item) => item.unlocked).length,
    total: achievements.length,
  }
}

export type { SpecialtyCatalogEntry }

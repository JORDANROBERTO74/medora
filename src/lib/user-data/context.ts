'use client'

import { createContext, useContext } from 'react'
import type {
  PersonalNote,
  PersonalNoteAnchor,
  PersonalNoteSource,
} from '@/lib/notes/personal-notes'
import type { ProgressContentType, RoundContentType } from '@/lib/supabase/database.types'
import type { SpecialtyCatalogEntry } from '@/lib/achievements'
import type { Achievement } from '@/lib/achievements'
import type { AchievementRecord, CaseStats, ProgressEntry, QuizStats, ReadingCatalogEntry, RepasoChapter } from './types'

export type UserDataValue = {
  notes: PersonalNote[]
  progress: ProgressEntry[]
  /** Study days as YYYY-MM-DD, oldest first. */
  studyDays: string[]
  /** Quiz rounds only. */
  results: QuizStats
  /** Clinical cases, kept apart from quiz rounds. */
  cases: CaseStats
  /** Persisted unlocks, including ones the user has not seen yet. */
  achievements: AchievementRecord[]
  /** Achievements computed from the current data (same instance the sync uses). */
  achievementList: Achievement[]
  /** Denominators for the per-specialty badges, computed on the server. */
  catalog: SpecialtyCatalogEntry[]
  /** Chapters of the main reading book per specialty, computed on the server. */
  readingCatalog: ReadingCatalogEntry[]
  /** Chapters of the repaso books, after every apunte. */
  repasoCatalog: RepasoChapter[]
  /** Unlocks the user has not opened Progreso to read yet. */
  unseenAchievements: number
  markAchievementsSeen: () => Promise<boolean>
  isComplete: (contentType: ProgressContentType, contentKey: string) => boolean
  addNote: (
    text: string,
    source?: PersonalNoteSource,
    anchor?: PersonalNoteAnchor
  ) => Promise<PersonalNote | null>
  updateNote: (id: string, text: string) => Promise<PersonalNote | null>
  deleteNote: (id: string) => Promise<boolean>
  markActivity: (
    contentType: ProgressContentType,
    contentKey: string
  ) => Promise<boolean>
  /** Stamps the study day without marking content as done (opening a chapter). */
  touchStudyDay: () => Promise<boolean>
  recordResult: (
    contentType: RoundContentType,
    contentKey: string,
    correct: number,
    total: number
  ) => Promise<boolean>
}

/** Isolated renders (unit tests) get an inert store instead of throwing. */
const INERT: UserDataValue = {
  notes: [],
  progress: [],
  studyDays: [],
  results: { rounds: 0, questions: 0, correct: 0, stars: 0, best: 0 },
  cases: { solved: 0, attempts: 0, correct: 0, firstTry: 0 },
  achievements: [],
  achievementList: [],
  catalog: [],
  readingCatalog: [],
  repasoCatalog: [],
  unseenAchievements: 0,
  markAchievementsSeen: async () => false,
  isComplete: () => false,
  addNote: async () => null,
  updateNote: async () => null,
  deleteNote: async () => false,
  markActivity: async () => false,
  touchStudyDay: async () => false,
  recordResult: async () => false,
}

export const UserDataContext = createContext<UserDataValue>(INERT)

export function useUserData(): UserDataValue {
  return useContext(UserDataContext)
}

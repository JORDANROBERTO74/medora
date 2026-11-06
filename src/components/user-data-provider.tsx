'use client'

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { isLegacyApunteNote } from '@/lib/notes/note-scope'
import { computeAchievements, type SpecialtyCatalogEntry } from '@/lib/achievements'
import { useToast } from '@/components/ui/toast'
import {
  NOTES_STORAGE_KEY,
  parsePersonalNotes,
  type PersonalNoteAnchor,
  type PersonalNoteSource,
} from '@/lib/notes/personal-notes'
import type { ProgressContentType, RoundContentType } from '@/lib/supabase/database.types'
import { starsFor } from '@/lib/quiz'
import {
  addNoteAction,
  deleteNoteAction,
  importNotesAction,
  markAchievementsSeenAction,
  markActivityAction,
  recordResultAction,
  syncAchievementsAction,
  touchStudyDayAction,
  updateNoteAction,
} from '@/lib/user-data/actions'
import { UserDataContext, type UserDataValue } from '@/lib/user-data/context'
import { computeStreak, todayInAppZone } from '@/lib/user-data/streak'
import type { ReadingCatalogEntry, RepasoChapter, UserData } from '@/lib/user-data/types'

/** Streak day plus progress entry for content that was just studied. */
function applyActivity(
  prev: UserData,
  contentType: ProgressContentType,
  contentKey: string
): Pick<UserData, 'progress' | 'studyDays'> {
  const today = todayInAppZone()
  const studyDays = prev.studyDays.includes(today)
    ? prev.studyDays
    : [...prev.studyDays, today].sort()
  const known = prev.progress.some(
    (entry) => entry.contentType === contentType && entry.contentKey === contentKey
  )
  return {
    studyDays,
    progress: known
      ? prev.progress
      : [...prev.progress, { contentType, contentKey, completedAt: new Date().toISOString() }],
  }
}

/**
 * Loads notes, progress and study days once per dashboard load and keeps them
 * in memory for the session, so navigation never re-queries Supabase.
 */
export function UserDataProvider({
  initial,
  today,
  catalog,
  readingCatalog,
  repasoCatalog,
  children,
}: {
  initial: UserData
  /** Server-computed app-zone date, so the streak agrees between SSR and hydration. */
  today: string
  catalog: SpecialtyCatalogEntry[]
  readingCatalog: ReadingCatalogEntry[]
  repasoCatalog: RepasoChapter[]
  children: ReactNode
}) {
  const [data, setData] = useState(initial)
  const importAttempted = useRef(false)
  const syncing = useRef(false)
  const { toast } = useToast()

  // One-time move of this device's notes into the account.
  useEffect(() => {
    if (importAttempted.current) return
    importAttempted.current = true

    let raw: string | null = null
    try {
      raw = window.localStorage.getItem(NOTES_STORAGE_KEY)
    } catch {
      return
    }
    if (raw === null) return

    const local = parsePersonalNotes(raw).filter((note) => !isLegacyApunteNote(note))
    if (local.length === 0) {
      window.localStorage.removeItem(NOTES_STORAGE_KEY)
      return
    }
    // The account already owns notes: never mix, and keep the device copy.
    if (data.notes.length > 0) return

    const payload = local.map(({ text, source, anchor, createdAt }) => ({
      text,
      source,
      anchor,
      createdAt,
    }))

    void importNotesAction(payload).then((result) => {
      if (!result.ok) return
      window.localStorage.removeItem(NOTES_STORAGE_KEY)
      if (result.skipped) return
      setData((prev) => (prev.notes.length > 0 ? prev : { ...prev, notes: result.notes }))
    })
  }, [data.notes.length])

  const addNote = useCallback(
    async (text: string, source?: PersonalNoteSource, anchor?: PersonalNoteAnchor) => {
      const result = await addNoteAction({
        text,
        ...(source ? { source } : {}),
        ...(anchor ? { anchor } : {}),
      })
      if (!result.ok) return null
      setData((prev) => ({ ...prev, notes: [result.note, ...prev.notes] }))
      return result.note
    },
    []
  )

  const updateNote = useCallback(async (id: string, text: string) => {
    const result = await updateNoteAction({ id, text })
    if (!result.ok) return null
    setData((prev) => ({
      ...prev,
      notes: prev.notes.map((note) => (note.id === id ? result.note : note)),
    }))
    return result.note
  }, [])

  const deleteNote = useCallback(async (id: string) => {
    const result = await deleteNoteAction(id)
    if (!result.ok) return false
    setData((prev) => ({ ...prev, notes: prev.notes.filter((note) => note.id !== id) }))
    return true
  }, [])

  const markActivity = useCallback(
    async (contentType: ProgressContentType, contentKey: string) => {
      const result = await markActivityAction({ contentType, contentKey })
      if (!result.ok) return false
      setData((prev) => ({ ...prev, ...applyActivity(prev, contentType, contentKey) }))
      return true
    },
    []
  )

  const touchStudyDay = useCallback(async () => {
    const result = await touchStudyDayAction()
    if (!result.ok) return false
    setData((prev) => {
      const today = todayInAppZone()
      if (prev.studyDays.includes(today)) return prev
      return { ...prev, studyDays: [...prev.studyDays, today].sort() }
    })
    return true
  }, [])

  const recordResult = useCallback(
    async (
      contentType: RoundContentType,
      contentKey: string,
      correct: number,
      total: number
    ) => {
      const result = await recordResultAction({ contentType, contentKey, correct, total })
      if (!result.ok) return false

      const stars = starsFor(correct, total)
      setData((prev) => {
        const alreadyTried = prev.progress.some(
          (entry) => entry.contentType === contentType && entry.contentKey === contentKey
        )
        const right = correct >= total

        return {
          ...prev,
          ...applyActivity(prev, contentType, contentKey),
          results:
            contentType === 'quiz'
              ? {
                  rounds: prev.results.rounds + 1,
                  questions: prev.results.questions + total,
                  correct: prev.results.correct + correct,
                  stars: prev.results.stars + stars,
                  best: Math.max(prev.results.best, stars),
                }
              : prev.results,
          cases:
            contentType === 'case'
              ? {
                  solved: prev.cases.solved + (alreadyTried ? 0 : 1),
                  attempts: prev.cases.attempts + 1,
                  correct: prev.cases.correct + (right ? 1 : 0),
                  firstTry: prev.cases.firstTry + (!alreadyTried && right ? 1 : 0),
                }
              : prev.cases,
        }
      })
      return true
    },
    []
  )

  const isComplete = useCallback(
    (contentType: ProgressContentType, contentKey: string) =>
      data.progress.some(
        (entry) => entry.contentType === contentType && entry.contentKey === contentKey
      ),
    [data.progress]
  )

  const recorded = useMemo(
    () => new Set(data.achievements.map((item) => item.id)),
    [data.achievements]
  )
  const streak = useMemo(() => computeStreak(data.studyDays, today), [data.studyDays, today])
  const achievements = useMemo(
    () => computeAchievements({ data, streak, catalog }, recorded),
    [data, streak, catalog, recorded]
  )

  // Persist each unlock once: `recorded` is what keeps a reload from inserting
  // and toasting the same achievements again.
  useEffect(() => {
    if (syncing.current) return
    const pending = achievements.filter(
      (item) => item.unlocked && !recorded.has(item.id)
    )
    if (pending.length === 0) return

    syncing.current = true
    void syncAchievementsAction(pending.map((item) => item.id)).then((result) => {
      syncing.current = false
      if (!result.ok) return
      setData((prev) => ({
        ...prev,
        achievements: [
          ...prev.achievements,
          ...pending
            .filter((item) => !prev.achievements.some((saved) => saved.id === item.id))
            .map((item) => ({ id: item.id, seenAt: null })),
        ],
      }))
      if (pending.length === 1) {
        toast.success('¡Logro desbloqueado!', { description: pending[0].name })
      } else {
        toast.success(`${pending.length} logros desbloqueados`, {
          description: pending.map((item) => item.name).join(', '),
        })
      }
    })
  }, [achievements, recorded, toast])

  const markAchievementsSeen = useCallback(async () => {
    const result = await markAchievementsSeenAction()
    if (!result.ok) return false
    const seenAt = new Date().toISOString()
    setData((prev) => ({
      ...prev,
      achievements: prev.achievements.map((item) =>
        item.seenAt === null ? { ...item, seenAt } : item
      ),
    }))
    return true
  }, [])

  const unseenAchievements = data.achievements.filter((item) => item.seenAt === null).length

  const value = useMemo<UserDataValue>(
    () => ({
      notes: data.notes,
      progress: data.progress,
      studyDays: data.studyDays,
      results: data.results,
      cases: data.cases,
      achievements: data.achievements,
      achievementList: achievements,
      catalog,
      readingCatalog,
      repasoCatalog,
      unseenAchievements,
      markAchievementsSeen,
      isComplete,
      addNote,
      updateNote,
      deleteNote,
      markActivity,
      touchStudyDay,
      recordResult,
    }),
    [
      data,
      achievements,
      catalog,
      readingCatalog,
      repasoCatalog,
      unseenAchievements,
      markAchievementsSeen,
      isComplete,
      addNote,
      updateNote,
      deleteNote,
      markActivity,
      touchStudyDay,
      recordResult,
    ]
  )

  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>
}

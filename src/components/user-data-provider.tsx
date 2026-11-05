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
  markActivityAction,
  recordResultAction,
  updateNoteAction,
} from '@/lib/user-data/actions'
import { UserDataContext, type UserDataValue } from '@/lib/user-data/context'
import { todayInAppZone } from '@/lib/user-data/streak'
import type { UserData } from '@/lib/user-data/types'

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
  children,
}: {
  initial: UserData
  children: ReactNode
}) {
  const [data, setData] = useState(initial)
  const importAttempted = useRef(false)

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

  const value = useMemo<UserDataValue>(
    () => ({
      notes: data.notes,
      progress: data.progress,
      studyDays: data.studyDays,
      results: data.results,
      cases: data.cases,
      isComplete,
      addNote,
      updateNote,
      deleteNote,
      markActivity,
      recordResult,
    }),
    [data, isComplete, addNote, updateNote, deleteNote, markActivity, recordResult]
  )

  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>
}

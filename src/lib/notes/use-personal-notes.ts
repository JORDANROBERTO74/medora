'use client'

import { useUserData } from '@/lib/user-data/context'

/** Account-backed personal notes; mutations return a promise now. */
export function usePersonalNotes() {
  const { notes, addNote, updateNote, deleteNote } = useUserData()
  return { notes, add: addNote, update: updateNote, remove: deleteNote }
}

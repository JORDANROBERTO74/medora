import type { Metadata } from 'next'
import { getNoteOrderMap } from '@/lib/notes/note-order.server'
import { NotesView } from './notes-view'

export const metadata: Metadata = {
  title: 'Notas',
}

export default function NotesPage() {
  return <NotesView orderMap={getNoteOrderMap()} />
}

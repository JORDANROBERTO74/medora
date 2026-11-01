import type { Metadata } from 'next'
import { NotesView } from './notes-view'

export const metadata: Metadata = {
  title: 'Notas',
}

export default function NotesPage() {
  return <NotesView />
}

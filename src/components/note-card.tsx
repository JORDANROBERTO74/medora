'use client'

import Link from 'next/link'
import { ExternalLink, Pencil, Trash2 } from 'lucide-react'
import { specialtyName, type SpecialtySlug } from '@/lib/content'

export type Note = {
  id: number
  specialtySlug: SpecialtySlug
  lessonSlug: string
  lesson: string
  text: string
  color: string
}

type NoteCardProps = {
  note: Note
  view: 'grid' | 'list'
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

export function NoteCard({ note, view, onEdit, onDelete }: NoteCardProps) {
  return (
    <article
      className={`${view === 'grid' ? 'rounded-3xl p-5' : 'rounded-2xl border-l-4 p-5'} border border-slate-100 ${note.color} bg-white shadow-sm`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-black text-[#FF5216]">
          {specialtyName(note.specialtySlug)}
        </span>
        <span className="text-xs font-bold text-muted-foreground">Nota personal</span>
      </div>
      <h2 className={`${view === 'grid' ? 'mt-4' : 'mt-2'} font-black`}>{note.lesson}</h2>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{note.text}</p>
      <div className={`${view === 'grid' ? 'mt-5 border-t border-slate-100 pt-4' : 'mt-3'} flex items-center gap-2`}>
        <button
          onClick={() => onEdit(note.id)}
          aria-label={`Editar nota de ${note.lesson}`}
          className="flex size-9 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition hover:bg-orange-50 hover:text-[#FF5216]"
        >
          <Pencil className="size-4" />
        </button>
        <button
          onClick={() => onDelete(note.id)}
          aria-label={`Eliminar nota de ${note.lesson}`}
          className="flex size-9 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition hover:bg-red-50 hover:text-red-500"
        >
          <Trash2 className="size-4" />
        </button>
        <Link
          href={`/dashboard/lesson/${note.specialtySlug}/${note.lessonSlug}`}
          className="ml-auto flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-2 text-xs font-black text-white"
        >
          Ir a lección <ExternalLink className="size-3.5" />
        </Link>
      </div>
    </article>
  )
}

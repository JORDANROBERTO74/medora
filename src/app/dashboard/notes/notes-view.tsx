'use client'

import { useState } from 'react'
import { Menu, PanelRight, Search } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { NoteCard, type Note } from '@/components/note-card'
import { specialties, specialtyName, type SpecialtySlug } from '@/lib/content'

export function NotesView() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'all' | SpecialtySlug>('all')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      specialtySlug: 'cardiology',
      lessonSlug: 'arterial-hypertension',
      lesson: 'Hipertensión arterial',
      text: 'Confirma el diagnóstico fuera de la consulta: una sola toma no basta para iniciar tratamiento.',
      color: 'border-l-[#FF5216]',
    },
    {
      id: 2,
      specialtySlug: 'obstetrics-gynecology',
      lessonSlug: 'pregnancy-dating-and-prenatal-care',
      lesson: 'Embarazo: datación y control',
      text: 'La primera consulta debe confirmar edad gestacional, factores de riesgo y signos de alarma.',
      color: 'border-l-violet-400',
    },
    {
      id: 3,
      specialtySlug: 'infectious-diseases',
      lessonSlug: 'meningitis',
      lesson: 'Meningitis',
      text: 'Reconocer la disfunción orgánica de forma temprana cambia el pronóstico del paciente.',
      color: 'border-l-sky-400',
    },
  ])
  const filtered = notes.filter(
    (note) =>
      (filter === 'all' || note.specialtySlug === filter) &&
      `${note.lesson} ${note.text}`.toLowerCase().includes(query.toLowerCase()),
  )
  const removeNote = (id: number) => setNotes((items) => items.filter((note) => note.id !== id))
  const editNote = (id: number) => {
    const note = notes.find((item) => item.id === id)
    if (!note) return
    const updated = window.prompt('Edita tu notita', note.text)
    if (updated?.trim()) setNotes((items) => items.map((item) => (item.id === id ? { ...item, text: updated.trim() } : item)))
  }

  const filters: Array<'all' | SpecialtySlug> = ['all', ...specialties.map((specialty) => specialty.slug)]

  return (
    <div className="flex flex-col gap-6 pt-7 pb-8 sm:pt-10">
      <header>
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">Tu biblioteca personal</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">Tus Notas Clínicas</h1>
        <p className="mt-2 text-sm font-medium text-slate-500">Tus ideas clave, listas para volver a ellas.</p>
      </header>
      <div className="flex items-center gap-2">
        <div className="relative min-w-0 flex-1">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar en tus notas..."
            aria-label="Buscar notas"
            className="h-12 w-full rounded-2xl border border-slate-100 bg-white pl-11 pr-4 text-sm font-semibold outline-none shadow-sm focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
          />
        </div>
        <div className="flex shrink-0 items-center rounded-2xl border border-slate-100 bg-white p-1 shadow-sm" role="group" aria-label="Cambiar vista">
          <button
            onClick={() => setView('grid')}
            aria-label="Vista de cuadrícula"
            aria-pressed={view === 'grid'}
            className={`flex size-10 items-center justify-center rounded-xl transition ${view === 'grid' ? 'bg-slate-900 text-white' : 'text-muted-foreground hover:text-slate-700'}`}
          >
            <PanelRight className="size-4 rotate-90" />
          </button>
          <button
            onClick={() => setView('list')}
            aria-label="Vista de lista"
            aria-pressed={view === 'list'}
            className={`flex size-10 items-center justify-center rounded-xl transition ${view === 'list' ? 'bg-slate-900 text-white' : 'text-muted-foreground hover:text-slate-700'}`}
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-black transition ${filter === item ? 'bg-slate-900 text-white' : 'border border-slate-100 bg-white text-slate-500'}`}
          >
            {item === 'all' ? 'Todas' : specialtyName(item)}
          </button>
        ))}
      </div>
      {filtered.length > 0 ? (
        <section className={view === 'grid' ? 'grid gap-4 sm:grid-cols-2' : 'flex flex-col gap-3'}>
          {filtered.map((note) => (
            <NoteCard key={note.id} note={note} view={view} onEdit={editNote} onDelete={removeNote} />
          ))}
        </section>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

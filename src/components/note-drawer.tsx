'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type NoteDrawerProps = {
  open: boolean
  onClose: () => void
  notes: string[]
  noteText: string
  onNoteTextChange: (value: string) => void
  onAdd: () => void
}

// Escape closes the drawer; the close button gets focus on open.
export function NoteDrawer({ open, onClose, notes, noteText, onNoteTextChange, onAdd }: NoteDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-30 bg-slate-950/30" onClick={onClose}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Notas del tema"
        onClick={(event) => event.stopPropagation()}
        className="absolute inset-y-0 right-0 w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">Tus notitas</p>
            <h2 className="mt-1 text-2xl font-black">{notes.length} apuntes</h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Cerrar notitas"
            className="flex size-10 items-center justify-center rounded-2xl bg-slate-100"
          >
            <X />
          </button>
        </div>
        <div className="mt-7 flex flex-col gap-3">
          {notes.map((note, index) => (
            <div key={`${note}-${index}`} className="border-l-4 border-[#FF5216] bg-orange-50 p-4">
              <p className="text-sm font-semibold leading-6 text-slate-700">{note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <label htmlFor="new-note" className="text-sm font-black">
            Nueva notita
          </label>
          <textarea
            id="new-note"
            value={noteText}
            onChange={(event) => onNoteTextChange(event.target.value)}
            placeholder="Escribe una idea para recordar..."
            className="mt-2 min-h-28 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium outline-none focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
          />
          <Button onClick={onAdd} className="mt-3 h-11 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810]">
            Guardar notita
          </Button>
        </div>
      </aside>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { Dialog } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type NotesDialogsProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  notes: string[]
  onNotesChange: (notes: string[]) => void
}

export function NotesDialogs({ open, onOpenChange, notes, onNotesChange }: NotesDialogsProps) {
  const [noteText, setNoteText] = useState('')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editText, setEditText] = useState('')
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null)

  const addNote = () => {
    if (!noteText.trim()) return
    onNotesChange([...notes, noteText.trim()])
    setNoteText('')
  }

  const startEdit = (index: number) => {
    setEditingIndex(index)
    setEditText(notes[index])
    onOpenChange(false)
  }

  const closeEdit = () => {
    setEditingIndex(null)
    onOpenChange(true)
  }

  const saveEdit = () => {
    if (editingIndex === null || !editText.trim()) return
    onNotesChange(notes.map((note, index) => (index === editingIndex ? editText.trim() : note)))
    closeEdit()
  }

  const startDelete = (index: number) => {
    setDeletingIndex(index)
    onOpenChange(false)
  }

  const closeDelete = () => {
    setDeletingIndex(null)
    onOpenChange(true)
  }

  const confirmDelete = () => {
    if (deletingIndex === null) return
    onNotesChange(notes.filter((_, index) => index !== deletingIndex))
    closeDelete()
  }

  return (
    <>
      <Dialog open={open} onClose={() => onOpenChange(false)} eyebrow="Tus notitas" title={`${notes.length} apuntes`}>
        <div className="mt-5 flex flex-col gap-3">
          {notes.map((note, index) => (
            <div key={`${note}-${index}`} className="border-l-4 border-[#FF5216] bg-orange-50 p-4">
              <p className="text-sm font-semibold leading-6 text-slate-700">{note}</p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  aria-label={`Editar notita ${index + 1}`}
                  onClick={() => startEdit(index)}
                  className="flex size-9 items-center justify-center rounded-xl bg-white text-slate-500 transition hover:text-[#FF5216]"
                >
                  <Pencil className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label={`Eliminar notita ${index + 1}`}
                  onClick={() => startDelete(index)}
                  className="flex size-9 items-center justify-center rounded-xl bg-white text-slate-500 transition hover:text-red-600"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <label htmlFor="new-note" className="text-sm font-black">
            Nueva notita
          </label>
          <textarea
            id="new-note"
            value={noteText}
            onChange={(event) => setNoteText(event.target.value)}
            placeholder="Escribe una idea para recordar..."
            className="mt-2 min-h-24 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium outline-none focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
          />
          <Button
            onClick={addNote}
            disabled={!noteText.trim()}
            className="mt-3 h-11 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810] disabled:opacity-40"
          >
            Guardar notita
          </Button>
        </div>
      </Dialog>
      <Dialog open={editingIndex !== null} onClose={closeEdit} eyebrow="Editar notita" title="Ajusta el texto">
        <textarea
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          aria-label="Texto de la notita"
          className="mt-4 min-h-24 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium outline-none focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
        />
        <div className="mt-4 flex gap-2">
          <Button
            onClick={closeEdit}
            className="h-11 flex-1 rounded-full bg-slate-100 font-black text-slate-600 hover:bg-slate-200"
          >
            Cancelar
          </Button>
          <Button
            onClick={saveEdit}
            disabled={!editText.trim()}
            className="h-11 flex-1 rounded-full bg-[#FF5216] font-black hover:bg-[#e94810] disabled:opacity-40"
          >
            Guardar
          </Button>
        </div>
      </Dialog>
      <Dialog
        open={deletingIndex !== null}
        onClose={closeDelete}
        eyebrow="Confirmar"
        title="¿Eliminar esta notita?"
        role="alertdialog"
      >
        <p className="mt-4 text-sm font-medium leading-6 text-slate-600">Esta acción no se puede deshacer.</p>
        <div className="mt-5 flex gap-2">
          <Button
            onClick={closeDelete}
            className="h-11 flex-1 rounded-full bg-slate-100 font-black text-slate-600 hover:bg-slate-200"
          >
            Cancelar
          </Button>
          <Button onClick={confirmDelete} className="h-11 flex-1 rounded-full bg-red-600 font-black hover:bg-red-700">
            Eliminar
          </Button>
        </div>
      </Dialog>
    </>
  )
}

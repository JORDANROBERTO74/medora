"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";
import {
  MessageSquarePlus,
  Pencil,
  Plus,
  NotebookPen,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/toast";
import type {
  PersonalNote,
  PersonalNoteAnchor,
} from "@/lib/notes/personal-notes";
import { notesForAnchor } from "@/lib/notes/anchors";
import { usePersonalNotes } from "@/lib/notes/use-personal-notes";

function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "short",
  }).format(timestamp);
}

const textareaClass =
  "mt-4 min-h-24 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium outline-none focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100";

/** A reading paragraph with an inline personal-note affordance. */
export function ParagraphNote({
  anchor,
  sourceTitle,
  children,
}: {
  anchor: PersonalNoteAnchor;
  sourceTitle: string;
  children: ReactNode;
}) {
  const panelId = useId();
  const [panelOpen, setPanelOpen] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [editing, setEditing] = useState<PersonalNote | null>(null);
  const [editText, setEditText] = useState("");
  const [deleting, setDeleting] = useState<PersonalNote | null>(null);
  const { notes, add, update, remove } = usePersonalNotes();
  const { toast } = useToast();
  const paragraphNotes = notesForAnchor(notes, anchor.href, anchor.hash);

  const saveNote = () => {
    if (!noteText.trim()) return;
    const pending = add(noteText, { title: sourceTitle, href: anchor.href }, anchor);
    setNoteText("");
    setComposerOpen(false);
    setPanelOpen(true);
    void pending.then((saved) => {
      if (saved) {
        toast.success("Nota guardada");
      } else {
        toast.error("No se pudo guardar la nota", {
          description: "Revisa tu conexión e inténtalo de nuevo.",
        });
      }
    });
  };

  return (
    <div className="group relative pt-3">
      <p className="pr-12 text-base font-medium leading-8 text-slate-600">
        {children}
      </p>

      {paragraphNotes.length > 0 ? (
        <button
          type="button"
          aria-label={`Ver ${paragraphNotes.length} ${paragraphNotes.length === 1 ? "nota" : "notas"} de este párrafo`}
          aria-expanded={panelOpen}
          aria-controls={panelId}
          onClick={() => setPanelOpen((open) => !open)}
          className="absolute right-0 top-3 flex h-8 items-center gap-1 rounded-xl px-2 text-[#FF5216] transition hover:bg-orange-50"
        >
          <NotebookPen className="size-4" />
          <span className="text-[10px] font-black">
            {paragraphNotes.length}
          </span>
        </button>
      ) : (
        <button
          type="button"
          aria-label="Añadir nota a este párrafo"
          onClick={() => setComposerOpen(true)}
          className="note-hint absolute right-0 top-3 flex size-8 items-center justify-center rounded-xl text-slate-300 opacity-60 transition hover:bg-orange-50 hover:text-[#FF5216] focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
        >
          <MessageSquarePlus className="size-4" />
        </button>
      )}

      {panelOpen && paragraphNotes.length > 0 ? (
        <div
          id={panelId}
          className="mt-2 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm"
        >
          <div className="flex flex-col gap-3">
            {paragraphNotes.map((note) => (
              <article key={note.id}>
                <p className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#FF5216]">
                  <Pencil className="size-3.5" aria-hidden="true" />
                  Mi nota
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                  {note.text}
                </p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold text-slate-500">
                    {formatDate(note.createdAt)}
                  </p>
                  <div className="flex shrink-0 gap-1">
                    <button
                      type="button"
                      aria-label="Editar nota"
                      onClick={() => {
                        setEditing(note);
                        setEditText(note.text);
                      }}
                      className="flex size-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:text-[#FF5216]"
                    >
                      <Pencil className="size-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Eliminar nota"
                      onClick={() => setDeleting(note)}
                      className="flex size-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:text-red-600"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Button
            variant={"outline"}
            onClick={() => {
              setNoteText("");
              setComposerOpen(true);
            }}
            className="mt-3 h-10 w-full rounded-full  text-xs font-black"
          >
            <Plus data-icon="inline-start" /> Nueva nota
          </Button>
        </div>
      ) : null}

      <Dialog
        open={composerOpen}
        onClose={() => setComposerOpen(false)}
        eyebrow="Mis notas"
        title="Nueva nota"
      >
        <p className="mt-2 line-clamp-3 border-l-2 border-orange-200 pl-3 text-xs font-medium italic leading-5 text-slate-500">
          «{anchor.quote}»
        </p>
        <textarea
          value={noteText}
          onChange={(event) => setNoteText(event.target.value)}
          placeholder="Escribe una idea para recordar..."
          aria-label="Texto de la nota"
          className={textareaClass}
        />
        <div className="mt-4 flex gap-2">
          <Button
            onClick={() => setComposerOpen(false)}
            className="h-11 flex-1 rounded-full bg-slate-100 font-black text-slate-600 hover:bg-slate-200"
          >
            Cancelar
          </Button>
          <Button
            onClick={saveNote}
            disabled={!noteText.trim()}
            className="h-11 flex-1 rounded-full bg-accent-strong font-black disabled:opacity-40"
          >
            Guardar
          </Button>
        </div>
      </Dialog>

      <Dialog
        open={editing !== null}
        onClose={() => setEditing(null)}
        eyebrow="Editar"
        title="Editar nota"
      >
        <p className="mt-2 line-clamp-3 border-l-2 border-orange-200 pl-3 text-xs font-medium italic leading-5 text-slate-500">
          «{anchor.quote}»
        </p>
        <textarea
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          aria-label="Texto de la nota"
          className={textareaClass}
        />
        <div className="mt-4 flex gap-2">
          <Button
            onClick={() => setEditing(null)}
            className="h-11 flex-1 rounded-full bg-slate-100 font-black text-slate-600 hover:bg-slate-200"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => {
              const target = editing;
              setEditing(null);
              if (!target) return;
              void update(target.id, editText).then((saved) => {
                if (saved) {
                  toast.success("Nota actualizada");
                } else {
                  toast.error("No se pudo actualizar la nota", {
                    description: "Revisa tu conexión e inténtalo de nuevo.",
                  });
                }
              });
            }}
            disabled={!editText.trim()}
            className="h-11 flex-1 rounded-full bg-accent-strong font-black disabled:opacity-40"
          >
            Guardar
          </Button>
        </div>
      </Dialog>

      <Dialog
        open={deleting !== null}
        onClose={() => setDeleting(null)}
        eyebrow="Confirmar"
        title="¿Eliminar esta nota?"
        role="alertdialog"
      >
        <p className="mt-4 text-sm font-medium leading-6 text-slate-600">
          Esta acción no se puede deshacer.
        </p>
        <div className="mt-5 flex gap-2">
          <Button
            onClick={() => setDeleting(null)}
            className="h-11 flex-1 rounded-full bg-slate-100 font-black text-slate-600 hover:bg-slate-200"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => {
              const target = deleting;
              setDeleting(null);
              if (!target) return;
              void remove(target.id).then((removed) => {
                if (removed) {
                  toast.success("Nota eliminada");
                } else {
                  toast.error("No se pudo eliminar la nota");
                }
              });
            }}
            className="h-11 flex-1 rounded-full bg-red-600 font-black hover:bg-red-700"
          >
            Eliminar
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

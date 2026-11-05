"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  Lock,
  Pencil,
  Plus,
  Trash2,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Sheet } from "@/components/ui/sheet";
import { useToast } from "@/components/ui/toast";
import type { InlineNote, NoteBlock } from "@/lib/content/chapter-segments";
import { notesForSource, type PersonalNote } from "@/lib/notes/personal-notes";
import { usePersonalNotes } from "@/lib/notes/use-personal-notes";

type OpenNotes = (slug?: string) => void;

const NotesContext = createContext<OpenNotes>(() => {});

export function useChapterNotes() {
  return useContext(NotesContext);
}

function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "short",
  }).format(timestamp);
}

const textareaClass =
  "mt-4 min-h-24 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium outline-none focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100";

export function ChapterNotesProvider({
  title,
  sourceHref,
  notes,
  children,
}: {
  title: string;
  sourceHref: string;
  notes: InlineNote[];
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [initialSlug, setInitialSlug] = useState<string | undefined>();
  const [NoteBody, setNoteBody] = useState<ComponentType<{
    blocks: NoteBlock[];
  }> | null>(null);

  useEffect(() => {
    if (notes.length === 0 || NoteBody) return;
    let active = true;
    void import("@/components/note-content").then((module) => {
      if (active) setNoteBody(() => module.default);
    });
    return () => {
      active = false;
    };
  }, [notes.length, NoteBody]);

  const openNotes: OpenNotes = (slug) => {
    setInitialSlug(slug);
    setOpen(true);
  };

  return (
    <NotesContext.Provider value={openNotes}>
      {children}
      {open ? (
        <NotesSheet
          title={title}
          sourceHref={sourceHref}
          contentNotes={notes}
          initialSlug={initialSlug}
          NoteBody={NoteBody}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </NotesContext.Provider>
  );
}

export function NotesIconButton() {
  const openNotes = useChapterNotes();

  return (
    <button
      type="button"
      aria-label="Ver notas"
      aria-haspopup="dialog"
      onClick={() => openNotes()}
      className="flex size-11 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm"
    >
      <Lightbulb className="size-5" />
    </button>
  );
}

export function InlineNoteMore({ note }: { note: InlineNote }) {
  const openNotes = useChapterNotes();

  return (
    <button
      type="button"
      aria-label={`Ver más: ${note.title}`}
      aria-haspopup="dialog"
      onClick={() => openNotes(note.slug)}
      className="mt-3 inline-flex items-center gap-1 text-sm font-black text-[#FF5216] cursor-pointer"
    >
      Ver más <ArrowRight className="size-4" />
    </button>
  );
}

function NotesSheet({
  title,
  sourceHref,
  contentNotes,
  initialSlug,
  NoteBody,
  onClose,
}: {
  title: string;
  sourceHref: string;
  contentNotes: InlineNote[];
  initialSlug?: string;
  NoteBody: ComponentType<{ blocks: NoteBlock[] }> | null;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"content" | "personal">(
    contentNotes.length > 0 ? "content" : "personal",
  );
  const [expandedSlug, setExpandedSlug] = useState<string | undefined>(
    initialSlug,
  );
  const [composerOpen, setComposerOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [editing, setEditing] = useState<PersonalNote | null>(null);
  const [editText, setEditText] = useState("");
  const [deleting, setDeleting] = useState<PersonalNote | null>(null);
  const { notes: allNotes, add, update, remove } = usePersonalNotes();
  const { toast } = useToast();
  const personalNotes = notesForSource(allNotes, sourceHref);

  useEffect(() => {
    if (!initialSlug) return;
    const element = document.getElementById(`chapter-note-${initialSlug}`);
    if (!element) return;

    const scroller = document.getElementById("sheet-scroll");
    if (scroller) {
      const top =
        element.getBoundingClientRect().top -
        scroller.getBoundingClientRect().top +
        scroller.scrollTop;
      scroller.scrollTo({ top, behavior: "auto" });
    }
    element.focus({ preventScroll: true });
  }, [initialSlug]);

  const saveNote = () => {
    if (!noteText.trim()) return;
    const pending = add(noteText, { title, href: sourceHref });
    setNoteText("");
    setComposerOpen(false);
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

  const tabs =
    contentNotes.length > 0 ? (
      <div className="flex rounded-full bg-slate-100 p-1">
        <button
          type="button"
          aria-pressed={tab === "content"}
          onClick={() => setTab("content")}
          className={`flex-1 rounded-full py-2 text-sm font-black transition ${
            tab === "content"
              ? "bg-white text-slate-950 shadow-sm"
              : "text-slate-500"
          }`}
        >
          Apuntes · {contentNotes.length}
        </button>
        <button
          type="button"
          aria-pressed={tab === "personal"}
          onClick={() => setTab("personal")}
          className={`flex-1 rounded-full py-2 text-sm font-black transition ${
            tab === "personal"
              ? "bg-white text-slate-950 shadow-sm"
              : "text-slate-500"
          }`}
        >
          Mis notas · {personalNotes.length}
        </button>
      </div>
    ) : undefined;

  return (
    <>
      <Sheet
        open
        onClose={onClose}
        eyebrow="Notas"
        title={title}
        toolbar={tabs}
        initialFocus={initialSlug ? "content" : "close"}
      >
        {tab === "content" ? (
          <div className="flex flex-col gap-3">
            {contentNotes.map((note) => (
              <article
                key={note.slug}
                id={`chapter-note-${note.slug}`}
                tabIndex={-1}
                aria-labelledby={`chapter-note-title-${note.slug}`}
                className={`rounded-3xl border p-4 outline-none ${
                  note.slug === expandedSlug
                    ? "border-[#FF5216] ring-2 ring-orange-100"
                    : "border-slate-100"
                }`}
              >
                <p className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#FF5216]">
                  <Lock className="size-3.5" aria-hidden="true" />
                  Apunte · solo lectura
                </p>
                <h3
                  id={`chapter-note-title-${note.slug}`}
                  className="mt-2 text-base font-black text-slate-900"
                >
                  {note.title}
                </h3>
                <div id={`chapter-note-content-${note.slug}`}>
                  {note.slug === expandedSlug ? (
                    NoteBody ? (
                      <NoteBody blocks={note.blocks ?? []} />
                    ) : (
                      <div className="mt-3 space-y-2" aria-hidden="true">
                        <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100" />
                        <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
                      </div>
                    )
                  ) : note.excerpt ? (
                    <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                      {note.excerpt}
                    </p>
                  ) : null}
                </div>
                {note.slug === expandedSlug ? (
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      aria-expanded
                      aria-controls={`chapter-note-content-${note.slug}`}
                      onClick={() => setExpandedSlug(undefined)}
                      className="text-sm font-black text-[#FF5216] cursor-pointer"
                    >
                      Ver menos
                    </button>
                    <Link
                      href={note.href}
                      aria-label={`Leer completo: ${note.title}`}
                      className="inline-flex items-center gap-1 text-sm font-black text-[#FF5216]"
                    >
                      Leer completo <ArrowRight className="size-4" />
                    </Link>
                  </div>
                ) : (
                  <button
                    type="button"
                    aria-expanded={false}
                    aria-controls={`chapter-note-content-${note.slug}`}
                    onClick={() => setExpandedSlug(note.slug)}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-black text-[#FF5216] cursor-pointer"
                  >
                    Ver más
                  </button>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => {
                setNoteText("");
                setComposerOpen(true);
              }}
              className="h-11 w-full rounded-full bg-accent-strong font-black"
            >
              <Plus data-icon="inline-start" /> Nueva nota
            </Button>

            {personalNotes.length > 0 ? (
              personalNotes.map((note) => (
                <article
                  key={note.id}
                  className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <p className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#FF5216]">
                    <Pencil className="size-3.5" aria-hidden="true" />
                    Mi nota
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                    {note.text}
                  </p>
                  {note.anchor ? (
                    <p className="mt-1 line-clamp-2 border-l-2 border-orange-100 pl-2 text-xs font-medium italic leading-5 text-slate-400">
                      «{note.anchor.quote}»
                    </p>
                  ) : null}
                  <div className="mt-3 flex items-center justify-between gap-2">
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
                        className="flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:text-[#FF5216]"
                      >
                        <Pencil className="size-4" />
                      </button>
                      <button
                        type="button"
                        aria-label="Eliminar nota"
                        onClick={() => setDeleting(note)}
                        className="flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:text-red-600"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="rounded-3xl border-2 border-dashed border-slate-200 bg-white px-6 py-10 text-center text-sm font-semibold text-slate-500">
                Aún no tienes notas en este contenido.
              </p>
            )}
          </div>
        )}
      </Sheet>

      <Dialog
        open={composerOpen}
        onClose={() => setComposerOpen(false)}
        eyebrow="Mis notas"
        title="Nueva nota"
      >
        <p className="mt-2 text-xs font-semibold text-slate-500">{title}</p>
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
    </>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronRight, Lock, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/toast";
import { noteCategories, specialties, type Topic } from "@/lib/content";
import { sortNotes, type NoteOrderMap } from "@/lib/notes/note-order";
import { noteScope, type NoteLayer } from "@/lib/notes/note-scope";
import type { PersonalNote } from "@/lib/notes/personal-notes";
import { usePersonalNotes } from "@/lib/notes/use-personal-notes";

type Tab = "content" | "personal";

const NOTE_LAYERS: Array<{ key: NoteLayer; label: string }> = [
  { key: "reading", label: "Lectura principal" },
  { key: "summary", label: "Compendio Clínico" },
  { key: "review", label: "Repaso Rápido" },
  { key: "standalone", label: "Sin especialidad" },
];

type SourceGroup = {
  key: string;
  href?: string;
  title?: string;
  notes: PersonalNote[];
};

function groupBySource(notes: PersonalNote[]): SourceGroup[] {
  const groups = new Map<string, SourceGroup>();

  for (const note of notes) {
    const href = note.source?.href;
    const title = note.source?.title;
    const key = href ?? (title ? `title:${title}` : "no-source");
    const group = groups.get(key) ?? { key, href, title, notes: [] };
    group.notes.push(note);
    groups.set(key, group);
  }

  return [...groups.values()];
}

function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "short",
  }).format(timestamp);
}

function PersonalNoteCard({
  note,
  onEdit,
  onDelete,
}: {
  note: PersonalNote;
  onEdit: (note: PersonalNote) => void;
  onDelete: (note: PersonalNote) => void;
}) {
  return (
    <article className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
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
            onClick={() => onEdit(note)}
            className="flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:text-[#FF5216]"
          >
            <Pencil className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Eliminar nota"
            onClick={() => onDelete(note)}
            className="flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:text-red-600"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

function NoteSourceGroups({
  notes,
  onEdit,
  onDelete,
}: {
  notes: PersonalNote[];
  onEdit: (note: PersonalNote) => void;
  onDelete: (note: PersonalNote) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      {groupBySource(notes).map((source) => (
        <div key={source.key} className="flex flex-col gap-2">
          {source.title ? (
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                {source.href ? (
                  <Link href={source.href} className="hover:text-[#FF5216]">
                    {source.title}
                  </Link>
                ) : (
                  source.title
                )}
              </h4>
              <span className="text-xs font-bold text-slate-500">
                {source.notes.length}
              </span>
            </div>
          ) : null}
          <div className="flex flex-col gap-3">
            {source.notes.map((note) => (
              <PersonalNoteCard
                key={note.id}
                note={note}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function NotesView({ orderMap }: { orderMap: NoteOrderMap }) {
  const [tab, setTab] = useState<Tab>("content");
  const [query, setQuery] = useState("");
  const [composerOpen, setComposerOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [editing, setEditing] = useState<PersonalNote | null>(null);
  const [editText, setEditText] = useState("");
  const [deleting, setDeleting] = useState<PersonalNote | null>(null);
  const { notes, add, update, remove } = usePersonalNotes();
  const { toast } = useToast();

  const normalized = query.trim().toLowerCase();

  const contentGroups = useMemo(
    () =>
      noteCategories
        .map((category) => {
          const topics = category.topics.filter(
            (topic) =>
              !normalized || topic.name.toLowerCase().includes(normalized),
          );
          const tags = new Map<string, Topic[]>();
          for (const topic of topics) {
            const tag = topic.tag ?? category.name;
            tags.set(tag, [...(tags.get(tag) ?? []), topic]);
          }
          return {
            category,
            tags: [...tags.entries()] as Array<[string, Topic[]]>,
          };
        })
        .filter((group) => group.tags.length > 0),
    [normalized],
  );

  const filteredNotes = notes.filter(
    (note) =>
      !normalized ||
      note.text.toLowerCase().includes(normalized) ||
      (note.source?.title.toLowerCase().includes(normalized) ?? false) ||
      (note.anchor?.quote.toLowerCase().includes(normalized) ?? false),
  );

  const orderedNotes = sortNotes(filteredNotes, orderMap);

  const layerGroups = NOTE_LAYERS.map((layer) => {
    const layerNotes = orderedNotes.filter(
      (note) => noteScope(note.source?.href).layer === layer.key,
    );
    const specialtyGroups =
      layer.key === "reading" || layer.key === "summary"
        ? specialties
            .map((specialty) => ({
              key: specialty.slug,
              label: specialty.name,
              notes: layerNotes.filter(
                (note) =>
                  noteScope(note.source?.href).specialty === specialty.slug,
              ),
            }))
            .filter((group) => group.notes.length > 0)
        : [];

    return {
      ...layer,
      specialtyGroups,
      notes:
        layer.key === "review" || layer.key === "standalone" ? layerNotes : [],
    };
  }).filter(
    (layer) => layer.specialtyGroups.length > 0 || layer.notes.length > 0,
  );

  const totalContent = noteCategories.reduce(
    (sum, category) => sum + category.topics.length,
    0,
  );

  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <header>
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">
          Biblioteca
        </p>
        <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
          Notas
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          Apuntes de contenido y tus notas personales, en un solo lugar.
        </p>
      </header>

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
          Apuntes · {totalContent}
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
          Mis notas · {notes.length}
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={
            tab === "content" ? "Buscar apuntes..." : "Buscar en mis notas..."
          }
          aria-label="Buscar notas"
          className="h-12 w-full rounded-2xl border border-slate-100 bg-white pl-11 pr-4 text-sm font-semibold outline-none shadow-sm focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
        />
      </div>

      {tab === "content" ? (
        contentGroups.length > 0 ? (
          <div className="flex flex-col gap-8">
            {contentGroups.map(({ category, tags }) => {
              const showTags =
                tags.length > 1 || tags[0]?.[0] !== category.name;
              return (
                <section key={category.slug} className="flex flex-col gap-3">
                  <h2 className="text-xl font-black tracking-tight">
                    {category.name}
                  </h2>
                  {tags.map(([tag, topics]) => (
                    <div key={tag}>
                      {showTags ? (
                        <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                          {tag}
                        </h3>
                      ) : null}
                      <div
                        className={
                          showTags
                            ? "mt-2 flex flex-col gap-2"
                            : "flex flex-col gap-2"
                        }
                      >
                        {topics.map((topic) => (
                          <Link
                            key={topic.slug}
                            href={`/dashboard/lesson/${category.slug}/${topic.slug}`}
                            className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm hover:border-slate-200"
                          >
                            <Lock
                              className="size-4 shrink-0 text-slate-300"
                              aria-hidden="true"
                            />
                            <span className="flex-1 truncate text-sm font-bold text-slate-700">
                              {topic.name}
                            </span>
                            <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-slate-500">
                              Apunte
                            </span>
                            <ChevronRight className="size-4 shrink-0 text-slate-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              );
            })}
          </div>
        ) : (
          <p className="rounded-3xl border-2 border-dashed border-slate-200 bg-white px-6 py-12 text-center text-sm font-semibold text-slate-500">
            No hay apuntes que coincidan con “{query}”.
          </p>
        )
      ) : (
        <div className="flex flex-col gap-6">
          <Button
            onClick={() => {
              setNoteText("");
              setComposerOpen(true);
            }}
            className="h-11 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810]"
          >
            <Plus data-icon="inline-start" /> Nueva nota
          </Button>

          {filteredNotes.length > 0 ? (
            <div className="flex flex-col gap-8">
              {layerGroups.map((layer) => (
                <section key={layer.key} className="flex flex-col gap-4">
                  <h2 className="text-xs font-black uppercase tracking-wider text-[#FF5216]">
                    {layer.label}
                  </h2>

                  {layer.specialtyGroups.map((specialty) => (
                    <div key={specialty.key} className="flex flex-col gap-3">
                      <h3 className="text-xl font-black tracking-tight">
                        {specialty.label}
                      </h3>
                      <NoteSourceGroups
                        notes={specialty.notes}
                        onEdit={(target) => {
                          setEditing(target);
                          setEditText(target.text);
                        }}
                        onDelete={setDeleting}
                      />
                    </div>
                  ))}

                  {layer.notes.length > 0 ? (
                    <NoteSourceGroups
                      notes={layer.notes}
                      onEdit={(target) => {
                        setEditing(target);
                        setEditText(target.text);
                      }}
                      onDelete={setDeleting}
                    />
                  ) : null}
                </section>
              ))}
            </div>
          ) : (
            <p className="rounded-3xl border-2 border-dashed border-slate-200 bg-white px-6 py-12 text-center text-sm font-semibold text-slate-500">
              {query
                ? `No hay notas que coincidan con “${query}”.`
                : "Aún no tienes notas. Crea la primera."}
            </p>
          )}
        </div>
      )}

      <Dialog
        open={composerOpen}
        onClose={() => setComposerOpen(false)}
        eyebrow="Mis notas"
        title="Nueva nota"
      >
        <textarea
          value={noteText}
          onChange={(event) => setNoteText(event.target.value)}
          placeholder="Escribe una idea para recordar..."
          aria-label="Texto de la nota"
          className="mt-4 min-h-24 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium outline-none focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
        />
        <div className="mt-4 flex gap-2">
          <Button
            onClick={() => setComposerOpen(false)}
            className="h-11 flex-1 rounded-full bg-slate-100 font-black text-slate-600 hover:bg-slate-200"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => {
              const pending = add(noteText);
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
            }}
            disabled={!noteText.trim()}
            className="h-11 flex-1 rounded-full bg-[#FF5216] font-black hover:bg-[#e94810] disabled:opacity-40"
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
          className="mt-4 min-h-24 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium outline-none focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
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
            className="h-11 flex-1 rounded-full bg-[#FF5216] font-black hover:bg-[#e94810] disabled:opacity-40"
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

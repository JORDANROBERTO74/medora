"use client";

import { useState } from "react";
import { BackHeader } from "@/components/back-header";
import { Markdown } from "@/components/markdown";
import { NotesDialogs } from "@/components/note-dialogs";
import type { Specialty, Topic } from "@/lib/content";
import type { CorpusTopic } from "@/lib/content/types";
import { PanelRight, Plus } from "lucide-react";

export function LessonView({
  specialty,
  topic,
  content,
}: {
  specialty: Specialty;
  topic: Topic;
  content: CorpusTopic;
}) {
  const [notesOpen, setNotesOpen] = useState(false);
  const [notes, setNotes] = useState([
    "Confirma el diagnóstico fuera de la consulta antes de iniciar tratamiento.",
    "Revisa los signos de alarma antes de cerrar el tema.",
  ]);

  const section = content.sections[0];
  const blocks = section?.blocks ?? [];

  return (
    <div className="relative flex flex-col gap-7 pt-7 pb-12 sm:pt-10">
      <BackHeader
        href={`/dashboard/topics/${specialty.slug}`}
        backLabel="Volver a temas"
        eyebrow={specialty.name}
        title={topic.name}
        titleClassName="truncate text-xl font-black"
        trailing={
          <button
            onClick={() => setNotesOpen(true)}
            aria-label="Ver notitas"
            className="relative flex size-11 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm"
          >
            <PanelRight className="size-5" />
            {notes.length > 0 && (
              <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#FF5216] text-[10px] font-black text-white">
                {notes.length}
              </span>
            )}
          </button>
        }
      />
      <article className="max-w-none">
        {section?.note ? (
          <p className="border-l-4 border-[#FF5216] bg-orange-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-700">
            {section.note}
          </p>
        ) : null}

        {blocks.map((block, index) => (
          <section key={block.id} className={index === 0 && !section?.note ? "" : "mt-9"}>
            <h2 className="text-2xl font-black tracking-tight text-slate-950">{block.title}</h2>
            <Markdown>{block.markdown}</Markdown>
            {index === 0 ? (
              <button
                onClick={() => setNotesOpen(true)}
                className="my-6 flex w-full items-center gap-3 border-y border-slate-200 py-4 text-left"
              >
                <Plus className="size-5 text-[#FF5216]" />
                <span className="text-sm font-black text-slate-700">
                  Añadir una notita en este punto
                </span>
              </button>
            ) : null}
          </section>
        ))}

        {blocks.length === 0 ? (
          <p className="text-sm font-semibold text-slate-500">Contenido en preparación.</p>
        ) : null}
      </article>

      <NotesDialogs
        open={notesOpen}
        onOpenChange={setNotesOpen}
        notes={notes}
        onNotesChange={setNotes}
      />
    </div>
  );
}

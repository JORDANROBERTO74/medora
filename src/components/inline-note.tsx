import { Lock } from "lucide-react";
import { InlineNoteMore } from "@/components/chapter-notes";
import type { InlineNote } from "@/lib/content/chapter-segments";

/** Read-only note card shown between sections of a reading chapter. */
export function InlineNoteCard({ note }: { note: InlineNote }) {
  return (
    <aside
      aria-label={`Apunte: ${note.title}`}
      className="my-7 rounded-3xl border border-orange-100 bg-orange-50/70 p-5"
    >
      <p className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#FF5216]">
        <Lock className="size-3.5" aria-hidden="true" />
        Apunte · solo lectura
      </p>
      <h3 className="mt-2 text-base font-black text-slate-900">{note.title}</h3>
      {note.excerpt ? (
        <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
          {note.excerpt}
        </p>
      ) : null}
      <InlineNoteMore note={note} />
    </aside>
  );
}

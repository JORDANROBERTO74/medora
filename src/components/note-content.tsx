'use client'

import { Markdown } from '@/components/markdown'
import { stripRepeatedTitle, type NoteBlock } from '@/lib/content/chapter-segments'

/** Full note body used by the chapter sheet when a card expands. */
export default function NoteContent({ blocks }: { blocks: NoteBlock[] }) {
  if (blocks.length === 0) {
    return <p className="mt-3 text-sm font-medium text-slate-500">Contenido en preparación.</p>
  }

  return (
    <div className="mt-3 border-t border-slate-100 pt-3">
      {blocks.map((raw, index) => {
        const block = stripRepeatedTitle(raw)
        return (
          <section key={`${block.title}-${index}`} className={index > 0 ? 'mt-4' : ''}>
            <h4 className="text-sm font-black text-slate-800">{block.title}</h4>
            <Markdown>{block.markdown}</Markdown>
          </section>
        )
      })}
    </div>
  )
}

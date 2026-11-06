import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BackHeader } from '@/components/back-header'
import { ReadingReadTracker } from '@/components/reading-read-tracker'
import { ChapterNotesProvider, NotesIconButton } from '@/components/chapter-notes'
import { InlineNoteCard } from '@/components/inline-note'
import { Markdown } from '@/components/markdown'
import { splitChapter, type ChapterNote } from '@/lib/content/chapter-segments'

type ChapterLink = { href: string; label: string }

export function ReadingChapter({
  backHref,
  backLabel,
  eyebrow,
  title,
  markdown,
  sourceHref,
  notes = [],
  previous,
  next,
}: {
  backHref: string
  backLabel: string
  eyebrow: string
  title: string
  markdown: string
  sourceHref: string
  notes?: ChapterNote[]
  previous?: ChapterLink
  next?: ChapterLink
}) {
  const segments = splitChapter(markdown, notes)
  let block = 0

  return (
    <ChapterNotesProvider title={title} sourceHref={sourceHref} notes={notes}>
      <div className="flex flex-col gap-6 pt-7 sm:pt-10">
        <BackHeader
          href={backHref}
          backLabel={backLabel}
          eyebrow={eyebrow}
          title={title}
          titleClassName="truncate text-xl font-black"
          trailing={<NotesIconButton />}
        />

      <article className="max-w-none">
        {segments.map((segment, index) =>
          segment.kind === 'note' ? (
            <InlineNoteCard key={`note-${segment.note.slug}-${index}`} note={segment.note} />
          ) : (
            <Markdown
              key={`markdown-${index}`}
              noteContext={{ href: sourceHref, block: block++, title }}
            >
              {segment.markdown}
            </Markdown>
          )
        )}
      </article>

      <ReadingReadTracker contentKey={`reading:${sourceHref}`} />

      <nav className="flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
        {previous ? (
          <Link
            href={previous.href}
            className="inline-flex items-center gap-2 text-sm font-black text-[#FF5216]"
          >
            <ArrowLeft className="size-4" /> {previous.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={next.href}
            title={next.label}
            className="inline-flex min-w-0 max-w-full items-center gap-2 text-right sm:max-w-xs"
          >
            <span className="min-w-0 truncate text-sm font-black text-[#FF5216]">{next.label}</span>
            <ArrowRight className="size-4 shrink-0 text-[#FF5216]" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
      </div>
    </ChapterNotesProvider>
  )
}

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BackHeader } from '@/components/back-header'
import { Markdown } from '@/components/markdown'

type ChapterLink = { href: string; label: string }

export function ReadingChapter({
  backHref,
  backLabel,
  eyebrow,
  title,
  markdown,
  previous,
  next,
}: {
  backHref: string
  backLabel: string
  eyebrow: string
  title: string
  markdown: string
  previous?: ChapterLink
  next?: ChapterLink
}) {
  return (
    <div className="flex flex-col gap-6 pt-7 pb-8 sm:pt-10">
      <BackHeader
        href={backHref}
        backLabel={backLabel}
        eyebrow={eyebrow}
        title={title}
        titleClassName="truncate text-xl font-black"
      />

      <article className="max-w-none">
        <Markdown>{markdown}</Markdown>
      </article>

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
            className="inline-flex items-center gap-2 text-sm font-black text-[#FF5216]"
          >
            {next.label} <ArrowRight className="size-4" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}

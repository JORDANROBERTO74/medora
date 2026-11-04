import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { BackHeader } from '@/components/back-header'

type ChapterItem = { href: string; order: number; title: string }

export function ReadingChapterList({
  backHref,
  backLabel,
  eyebrow,
  title,
  items,
}: {
  backHref: string
  backLabel: string
  eyebrow: string
  title: string
  items: ChapterItem[]
}) {
  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <BackHeader
        href={backHref}
        backLabel={backLabel}
        eyebrow={eyebrow}
        title={title}
        titleClassName="text-2xl font-black"
      />

      <ol className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm hover:border-slate-200"
            >
              <span className="flex min-w-0 items-baseline gap-3">
                <span className="text-xs font-black text-[#FF5216]">
                  {String(item.order).padStart(2, '0')}
                </span>
                <span className="truncate">{item.title}</span>
              </span>
              <ChevronRight className="size-4 shrink-0 text-slate-300" />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

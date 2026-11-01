import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Topic } from '@/lib/content'

export function TopicRow({ topic, index, href }: { topic: Topic; index: number; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-4 text-left shadow-sm"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-sm font-black text-[#FF5216]">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex-1">
        <h3 className="font-extrabold">{topic.name}</h3>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">Resumen clínico · 8 min</p>
      </div>
      <ChevronRight className="size-5 text-slate-300" />
    </Link>
  )
}

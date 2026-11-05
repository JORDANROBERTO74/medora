import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { BackHeader } from '@/components/back-header'
import { specialties } from '@/lib/content'
import { getReading } from '@/lib/content/corpus'

export const metadata: Metadata = {
  title: 'Resumen',
}

export default function SummaryIndexPage() {
  const items = specialties.flatMap((specialty) => {
    const file = getReading(specialty.slug, 'summary')
    return file ? [{ specialty, file }] : []
  })

  return (
    <div className="flex flex-col gap-6 pt-7 sm:pt-10">
      <BackHeader
        href="/dashboard"
        backLabel="Volver al inicio"
        eyebrow="Biblioteca"
        title="Resumen"
        titleClassName="text-2xl font-black"
      />

      <div className="flex flex-col gap-3">
        {items.map(({ specialty, file }) => (
          <Link
            key={specialty.slug}
            href={`/dashboard/reading/summary/${specialty.slug}`}
            className="card-lift flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm"
          >
            <div className="min-w-0 flex-1">
              <h2 className="font-black">{specialty.name}</h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">{file.chapters.length} capítulos</p>
            </div>
            <ChevronRight className="size-4 text-slate-300" />
          </Link>
        ))}
      </div>
    </div>
  )
}

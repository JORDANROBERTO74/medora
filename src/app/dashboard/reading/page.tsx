import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, Layers, NotebookPen } from 'lucide-react'
import { BackHeader } from '@/components/back-header'
import { getSpecialty } from '@/lib/content'
import { getReading, getReadingSpecialties, getRepaso } from '@/lib/content/corpus'
import { publicSlug } from '@/lib/content/slugs'

export const metadata: Metadata = {
  title: 'Lectura larga',
}

const LAYER_LABEL = {
  lectura: 'Lectura',
  resumen: 'Resumen',
} as const

export default function ReadingIndexPage() {
  const specialties = getReadingSpecialties()
  const repaso = getRepaso()

  return (
    <div className="flex flex-col gap-6 pt-7 pb-8 sm:pt-10">
      <BackHeader
        href="/dashboard"
        backLabel="Volver al inicio"
        eyebrow="Biblioteca"
        title="Lectura larga"
        titleClassName="text-2xl font-black"
      />

      <p className="text-sm font-medium leading-6 text-slate-500">
        Capítulos completos del material base, separados de los temas de repaso.
      </p>

      <div className="flex flex-col gap-3">
        {specialties.map((specialty) => {
          const name = getSpecialty(publicSlug(specialty.slug))?.name ?? specialty.name
          const lectura = getReading(publicSlug(specialty.slug), 'lectura')
          const resumen = getReading(publicSlug(specialty.slug), 'resumen')

          return (
            <section
              key={specialty.id}
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <h2 className="font-extrabold">{name}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {lectura ? (
                  <Link
                    href={`/dashboard/reading/${publicSlug(specialty.slug)}/lectura`}
                    className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-black text-[#FF5216]"
                  >
                    <BookOpen className="size-4" />
                    {LAYER_LABEL.lectura} · {lectura.chapters.length}
                  </Link>
                ) : null}
                {resumen ? (
                  <Link
                    href={`/dashboard/reading/${publicSlug(specialty.slug)}/resumen`}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-600"
                  >
                    <Layers className="size-4" />
                    {LAYER_LABEL.resumen} · {resumen.chapters.length}
                  </Link>
                ) : null}
              </div>
            </section>
          )
        })}

        {repaso ? (
          <Link
            href="/dashboard/reading/repaso"
            className="flex items-center gap-4 rounded-3xl border-2 border-[#FF5216] bg-orange-50 p-5 text-left"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[#FF5216] text-white">
              <NotebookPen className="size-5" />
            </div>
            <div className="flex-1">
              <h2 className="font-black">Repaso</h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                {repaso.chapters.length} capítulos transversales
              </p>
            </div>
            <ChevronRight />
          </Link>
        ) : null}
      </div>
    </div>
  )
}

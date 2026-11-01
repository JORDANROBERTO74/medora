import { StickyNote } from 'lucide-react'

export function EmptyState() {
  return (
    <section className="flex flex-col items-center rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-14 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5216]">
        <StickyNote className="size-8" />
      </div>
      <h2 className="mt-5 text-xl font-black">Aún no hay notas aquí</h2>
      <p className="mt-2 max-w-xs text-sm font-medium leading-6 text-muted-foreground">
        Guarda tus ideas más importantes mientras repasas una lección.
      </p>
    </section>
  )
}

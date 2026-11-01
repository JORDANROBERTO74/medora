import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Más',
}

function MoreLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="flex items-center justify-between px-4 py-4 text-sm font-extrabold hover:bg-slate-50">
      {label}
      <ChevronRight className="size-4 text-slate-300" />
    </Link>
  )
}

export default function MorePage() {
  return (
    <div className="flex flex-col gap-6 pt-7 pb-8 sm:pt-10">
      <header>
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">Cuenta y ajustes</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight">Más</h1>
      </header>

      <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">
            AL
          </div>
          <div>
            <p className="font-extrabold">Alex</p>
            <p className="mt-0.5 text-xs font-semibold text-muted-foreground">alex@correo.com</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-black uppercase tracking-wider text-slate-500">Repaso</h2>
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          <MoreLink href="/dashboard/notes" label="Mis notas" />
          <MoreLink href="/dashboard/progress" label="Mi progreso" />
          <MoreLink href="/dashboard/quiz" label="Quiz rápido" />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-black uppercase tracking-wider text-slate-500">Sesión</h2>
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          <Link
            href="/login"
            className="block px-4 py-4 text-sm font-black text-[#FF5216] hover:bg-orange-50"
          >
            Cerrar sesión
          </Link>
        </div>
      </section>
    </div>
  )
}

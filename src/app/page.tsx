import Link from 'next/link'
import { Stethoscope } from 'lucide-react'

const specialtyNames = ['Cirugía', 'Ginecología', 'Medicina Interna', 'Pediatría']

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-slate-50 text-slate-950">
      <header className="mx-auto flex max-w-5xl items-center justify-between border-b border-slate-200 px-4 py-5 sm:px-6">
        <div className="flex items-center gap-2 text-sm font-black">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#FF5216] text-white">
            <Stethoscope className="size-4" />
          </span>
          MEDORA
        </div>
        <Link href="/login" className="text-sm font-bold text-slate-500 hover:text-[#FF5216]">
          Iniciar sesión
        </Link>
      </header>

      <section className="mx-auto grid max-w-5xl items-center gap-14 px-4 pb-24 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        <div>
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-wider text-[#FF5216]">
            <span className="h-px w-10 bg-[#FF5216]" />
            Preparación médica
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
            Repasa mejor.
            <br />
            Decide con <span className="text-[#FF5216]">confianza</span>.
          </h1>
          <p className="mt-6 max-w-md text-base font-medium leading-7 text-slate-600">
            Resúmenes clínicos y quizzes breves, organizados por especialidad, para que repases un tema cada vez y
            llegues listo a la rotación.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/signup"
              className="rounded-full bg-accent-strong px-6 py-3.5 text-sm font-black text-white"
            >
              Empezar a repasar
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-black text-slate-700 hover:border-slate-400 hover:bg-white"
            >
              Ya tengo cuenta
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
            {specialtyNames.map((name) => (
              <li key={name} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-[#FF5216]" />
                {name}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative rotate-[-2deg] rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
          <figcaption className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-slate-500">
            <span>Quiz · Cirugía</span>
            <span>Pregunta 2 de 5</span>
          </figcaption>
          <div className="progress-track mt-3 h-1.5 rounded-full">
            <div className="h-full w-2/5 rounded-full bg-[#FF5216]" />
          </div>
          <h2 className="mt-5 text-lg font-extrabold leading-snug">¿Qué describe mejor la inflamación aguda?</h2>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-3 rounded-2xl border-2 border-[#FF5216] bg-orange-50 p-3 text-sm font-bold text-slate-950">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#FF5216] text-[11px] font-black text-white">
                A
              </span>
              Una respuesta protectora del tejido
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3 text-sm font-bold text-slate-600">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-black text-slate-500">
                B
              </span>
              Siempre un signo de infección
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3 text-sm font-bold text-slate-600">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-black text-slate-500">
                C
              </span>
              Limitada siempre a la piel
            </li>
          </ul>
          <p className="mt-5 text-xs font-semibold text-slate-500">
            Así se ve una pregunta real del quiz, con feedback inmediato.
          </p>
        </figure>
      </section>
    </main>
  )
}

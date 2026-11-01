import Link from 'next/link'
import { Stethoscope } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 text-slate-950 sm:px-6">
      <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-6 py-16">
        <div className="flex items-center gap-2 text-sm font-black text-[#FF5216]">
          <div className="flex size-9 items-center justify-center rounded-xl bg-orange-50">
            <Stethoscope className="size-4" />
          </div>
          MEDORA
        </div>
        <h1 className="text-4xl font-black tracking-tight">
          Repasa mejor.
          <br />
          <span className="text-[#FF8C66]">Decide con confianza.</span>
        </h1>
        <p className="max-w-md text-sm font-medium leading-6 text-muted-foreground">
          Resúmenes clínicos y quizzes breves para acompañar tu preparación médica todos los días.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/onboarding"
            className="rounded-full bg-[#FF5216] px-5 py-3 text-sm font-black text-white hover:bg-[#e94810]"
          >
            Empezar a repasar
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-50"
          >
            Ya tengo cuenta
          </Link>
        </div>
      </div>
    </main>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Stethoscope } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SignupView() {
  const router = useRouter()

  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col justify-center py-10">
      <div className="mb-10">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5216]">
          <Stethoscope className="size-7" />
        </div>
        <h1 className="mt-7 text-4xl font-black tracking-tight">Crea tu cuenta.</h1>
        <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-slate-500">
          Empieza a repasar en minutos: elige tu especialidad y avanza un tema al día.
        </p>
      </div>
      <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <label className="text-xs font-black uppercase tracking-wider text-slate-500" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Tu nombre"
          className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none transition focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
        />
        <label className="mt-5 block text-xs font-black uppercase tracking-wider text-slate-500" htmlFor="email">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@correo.com"
          className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none transition focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
        />
        <label className="mt-5 block text-xs font-black uppercase tracking-wider text-slate-500" htmlFor="password">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none transition focus:border-[#FF5216] focus:ring-2 focus:ring-orange-100"
        />
        <Button
          onClick={() => router.push('/onboarding')}
          className="mt-6 h-13 w-full rounded-full bg-[#FF5216] text-base font-black hover:bg-[#e94810]"
        >
          Crear cuenta
        </Button>
      </div>
      <p className="mt-7 text-center text-sm font-semibold text-slate-500">
        ¿Ya tienes cuenta?{' '}
        <Link href="/login" className="font-black text-[#FF5216]">
          Inicia sesión
        </Link>
      </p>
    </section>
  )
}

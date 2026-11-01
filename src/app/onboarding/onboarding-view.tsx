'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Lightbulb } from 'lucide-react'

export function OnboardingView() {
  const router = useRouter()
  return <section className="flex min-h-[calc(100vh-7rem)] flex-col justify-between py-10"><div><div className="flex items-center gap-2 text-sm font-black text-[#FF5216]"><div className="flex size-9 items-center justify-center rounded-xl bg-orange-50"><BookOpen className="size-4" /></div> MEDORA</div><div className="mt-16 rounded-[32px] bg-slate-900 p-6 text-white"><div className="flex size-16 items-center justify-center rounded-2xl bg-[#FF5216]"><Lightbulb className="size-8" /></div><h1 className="mt-7 text-4xl font-black leading-tight">Repasa mejor.<br /><span className="text-[#FF8C66]">Decide con confianza.</span></h1><p className="mt-5 text-sm font-medium leading-6 text-slate-300">Resúmenes clínicos y quizzes breves para acompañar tu preparación médica todos los días.</p></div><div className="mt-7 flex gap-2"><div className="h-2 w-8 rounded-full bg-[#FF5216]" /><div className="h-2 w-2 rounded-full bg-slate-200" /><div className="h-2 w-2 rounded-full bg-slate-200" /></div></div><div><p className="mb-4 text-center text-xs font-semibold text-muted-foreground">Cirugía · Ginecología · Medicina Interna · Pediatría</p><Button onClick={() => router.push('/dashboard')} className="h-14 w-full rounded-full bg-[#FF5216] text-base font-black hover:bg-[#e94810]">Continuar <ArrowRight data-icon="inline-end" /></Button></div></section> }

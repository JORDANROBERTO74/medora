'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SpecialtyCard } from '@/components/specialty-card'
import { getNextReview, specialties } from '@/lib/content'
import { ArrowRight, BookOpen, ChevronRight, Flame } from 'lucide-react'

export function Dashboard({ fullName, email }: { fullName: string; email: string }) {
  const router = useRouter()
  const next = getNextReview()
  const firstName = fullName.trim().split(/\s+/)[0] || email.split('@')[0] || 'de nuevo'
  const initials = (
    fullName
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('') || email.slice(0, 2)
  ).toUpperCase()
  return <div className="flex flex-col gap-7 pt-7 sm:pt-10"><header className="flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">Lunes, 21 de octubre</p><h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">Hola, {firstName}.</h1><p className="mt-2 text-sm font-medium text-slate-500">Tu repaso clínico, un tema a la vez.</p></div><div className="flex size-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">{initials}</div></header><section className="relative overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-[0_12px_30px_rgba(15,23,42,0.12)]"><div className="flex items-start justify-between"><div><div className="flex items-center gap-2 text-sm font-semibold text-slate-300"><Flame className="size-4 text-[#FF5216]" fill="currentColor" /> 7 días de racha</div><p className="mt-5 text-sm font-semibold text-slate-400">Tu progreso clínico</p><p className="mt-1 text-4xl font-black">38<span className="text-xl text-slate-400">%</span></p></div><div className="flex size-20 items-center justify-center rounded-full border-[7px] border-[#FF5216]/25 border-t-[#FF5216] text-lg font-black">38%</div></div><div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[38%] rounded-full bg-[#FF5216]" /></div><div className="mt-3 flex justify-between text-xs font-semibold text-slate-400"><span>28 temas repasados</span><span>Meta: 60 temas</span></div></section><section className="rounded-3xl bg-[#FF5216] p-6 text-white shadow-[0_15px_35px_rgba(255,82,22,0.22)]"><p className="text-sm font-bold text-orange-100">SIGUIENTE REPASO</p><h2 className="mt-2 text-2xl font-black">{next?.topic.name}</h2><p className="mt-1 text-sm font-medium text-orange-100">{next?.specialty.name} · Tema 04</p><Button onClick={() => router.push(`/dashboard/lesson/${next?.specialty.slug}/${next?.topic.slug}`)} className="mt-5 h-11 rounded-full bg-white px-5 font-black text-[#FF5216] hover:bg-orange-50">Repasar ahora <ArrowRight data-icon="inline-end" /></Button></section><section><div className="mb-3 flex items-center justify-between"><h2 className="text-xl font-black">Especialidades</h2><span className="text-xs font-bold text-muted-foreground">{specialties.length} áreas clínicas</span></div><div className="flex flex-col gap-3">{specialties.map((s) => <SpecialtyCard key={s.slug} specialty={s} />)}</div></section><section><Link href="/dashboard/reading" className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm"><div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100"><BookOpen className="size-5 text-[#FF5216]" /></div><div className="flex-1"><h2 className="font-black">Lectura larga</h2><p className="mt-1 text-xs font-semibold text-muted-foreground">Capítulos completos del material base</p></div><ChevronRight className="size-4 text-slate-300" /></Link></section><section><h2 className="mb-3 text-xl font-black">Libros para repasar</h2><div className="grid grid-cols-1 gap-3 sm:grid-cols-2"><BookCard title="Harrison resumido" detail="Medicina Interna · 24 capítulos" /><BookCard title="Nelson esencial" detail="Pediatría · 18 capítulos" /></div></section></div> }
function BookCard({ title, detail }: { title: string; detail: string }) { return <button className="flex items-start gap-3 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm"><div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5216]"><BookOpen className="size-5" /></div><div><h3 className="font-extrabold leading-5">{title}</h3><p className="mt-1 text-xs font-semibold text-muted-foreground">{detail}</p></div></button> }

import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Baby,
  BookOpen,
  Brain,
  Bug,
  Clipboard,
  Droplets,
  HeartPulse,
  ScanLine,
  Scissors,
  Siren,
  Wind,
  ChevronRight,
} from 'lucide-react'
import type { Specialty, SpecialtySlug } from '@/lib/content'

const icons: Record<SpecialtySlug, LucideIcon> = {
  cardiology: HeartPulse,
  'obstetrics-gynecology': Baby,
  'gastrointestinal-surgery': Scissors,
  pulmonology: Wind,
  'infectious-diseases': Bug,
  endocrinology: Activity,
  nephrology: Droplets,
  'emergency-medicine': Siren,
  pediatrics: BookOpen,
  neurology: Brain,
  radiology: ScanLine,
  'internal-medicine': Clipboard,
}

export function SpecialtyCard({ specialty }: { specialty: Specialty }) {
  const Icon = icons[specialty.slug]

  return (
    <Link
      href={`/dashboard/topics/${specialty.slug}`}
      className="group flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 group-hover:bg-orange-50 group-hover:text-[#FF5216]">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-[#FF5216]">{specialty.number}</span>
          <h3 className="truncate font-extrabold">{specialty.name}</h3>
        </div>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">{specialty.detail}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-[#FF5216]" style={{ width: `${specialty.progress}%` }} />
          </div>
          <span className="text-[11px] font-black text-slate-500">{specialty.progress}%</span>
        </div>
      </div>
      <ChevronRight className="size-5 text-slate-300" />
    </Link>
  )
}

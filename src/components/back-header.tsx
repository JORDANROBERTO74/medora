import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'

type BackHeaderProps = {
  href: string
  backLabel: string
  eyebrow: string
  title: string
  titleClassName?: string
  sticky?: boolean
  trailing?: ReactNode
}

export function BackHeader({
  href,
  backLabel,
  eyebrow,
  title,
  titleClassName = 'text-2xl font-black',
  sticky = false,
  trailing,
}: BackHeaderProps) {
  const headerClassName = sticky
    ? 'sticky top-0 z-10 -mx-4 flex items-center gap-3 border-b border-slate-100 bg-slate-50/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6'
    : 'flex items-center gap-3'

  return (
    <header className={headerClassName}>
      <Link
        href={href}
        aria-label={backLabel}
        className="flex size-11 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm"
      >
        <ArrowLeft />
      </Link>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">{eyebrow}</p>
        <h1 className={titleClassName}>{title}</h1>
      </div>
      {trailing}
    </header>
  )
}

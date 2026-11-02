import type { ReactNode } from 'react'
import { Stethoscope } from 'lucide-react'

type AuthShellProps = {
  title: string
  description: string
  children: ReactNode
  footer?: ReactNode
}

export function AuthShell({ title, description, children, footer }: AuthShellProps) {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col justify-center py-10">
      <div className="mb-10">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5216]">
          <Stethoscope className="size-7" />
        </div>
        <h1 className="mt-7 text-4xl font-black tracking-tight">{title}</h1>
        <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-slate-500">{description}</p>
      </div>
      <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">{children}</div>
      {footer}
    </section>
  )
}

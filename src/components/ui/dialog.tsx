'use client'

import { useEffect, useId, useRef } from 'react'
import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { lockScroll, unlockScroll } from '@/lib/scroll-lock'

type DialogProps = {
  open: boolean
  onClose: () => void
  title: string
  eyebrow?: string
  role?: 'dialog' | 'alertdialog'
  children: ReactNode
}

// Escape closes, the backdrop closes, and the close button gets focus on open (not on every render).
export function Dialog({ open, onClose, title, eyebrow, role = 'dialog', children }: DialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)
  const titleId = useId()

  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    lockScroll()
    return unlockScroll
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4" onClick={onClose}>
      <div
        role={role}
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
        className="case-reveal w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            {eyebrow && <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">{eyebrow}</p>}
            <h2 id={titleId} className="mt-1 text-xl font-black">
              {title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Cerrar"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100"
          >
            <X />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

'use client'

import { useEffect, useId, useRef } from 'react'
import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { lockScroll, unlockScroll } from '@/lib/scroll-lock'

type SheetProps = {
  open: boolean
  onClose: () => void
  title: string
  eyebrow?: string
  toolbar?: ReactNode
  /** "content" lets the caller focus a specific element instead of the close button. */
  initialFocus?: 'close' | 'content'
  children: ReactNode
}

// Right-side panel for reading lists; Dialog stays for create/edit forms.
export function Sheet({
  open,
  onClose,
  title,
  eyebrow,
  toolbar,
  initialFocus = 'close',
  children,
}: SheetProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)
  const titleId = useId()

  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => {
    if (!open) return
    if (initialFocus === 'close') closeButtonRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, initialFocus])

  useEffect(() => {
    if (!open) return
    lockScroll()
    return unlockScroll
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 bg-slate-950/40" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
        className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
      >
        <header className="flex items-start justify-between gap-3 border-b border-slate-100 p-5">
          <div className="min-w-0">
            {eyebrow ? (
              <p className="text-xs font-black uppercase tracking-wider text-[#FF5216]">{eyebrow}</p>
            ) : null}
            <h2 id={titleId} className="mt-1 truncate text-xl font-black">
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
        </header>
        {toolbar ? <div className="border-b border-slate-100 px-5 py-3">{toolbar}</div> : null}
        <div id="sheet-scroll" className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  )
}

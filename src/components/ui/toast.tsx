'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react'

export type ToastVariant = 'success' | 'error' | 'info'

export type ToastOptions = {
  description?: string
  duration?: number
}

type ToastItem = {
  id: string
  variant: ToastVariant
  title: string
  description?: string
  duration: number
}

type ToastApi = {
  success: (title: string, options?: ToastOptions) => string
  error: (title: string, options?: ToastOptions) => string
  info: (title: string, options?: ToastOptions) => string
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastApi | null>(null)
const MAX_TOASTS = 3
const DEFAULT_DURATION = 4000
const ERROR_DURATION = 6000

// Keeps the portal out of the SSR markup without calling setState in an effect.
const subscribeMounted = () => () => {}
const getMountedSnapshot = () => true
const getServerMountedSnapshot = () => false

function createToastId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
}

const NOOP_TOAST: ToastApi = {
  success: () => '',
  error: () => '',
  info: () => '',
  dismiss: () => {},
}

export function useToast(): { toast: ToastApi } {
  const context = useContext(ToastContext)
  // Components such as ParagraphNote must still render in isolation (tests).
  return { toast: context ?? NOOP_TOAST }
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const mounted = useSyncExternalStore(
    subscribeMounted,
    getMountedSnapshot,
    getServerMountedSnapshot
  )
  const timers = useRef(new Map<string, number>())

  const dismiss = useCallback((id: string) => {
    const timer = timers.current.get(id)
    if (timer) {
      window.clearTimeout(timer)
      timers.current.delete(id)
    }
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const push = useCallback(
    (variant: ToastVariant, title: string, options?: ToastOptions) => {
      const id = createToastId()
      const duration = options?.duration ?? (variant === 'error' ? ERROR_DURATION : DEFAULT_DURATION)
      const item: ToastItem = {
        id,
        variant,
        title,
        ...(options?.description ? { description: options.description } : {}),
        duration,
      }

      setToasts((current) => {
        const next = [...current, item]
        if (next.length <= MAX_TOASTS) return next

        const removed = next.shift()
        if (removed) {
          const timer = timers.current.get(removed.id)
          if (timer) window.clearTimeout(timer)
          timers.current.delete(removed.id)
        }
        return next
      })

      timers.current.set(id, window.setTimeout(() => dismiss(id), duration))
      return id
    },
    [dismiss]
  )

  const api = useMemo<ToastApi>(
    () => ({
      success: (title, options) => push('success', title, options),
      error: (title, options) => push('error', title, options),
      info: (title, options) => push('info', title, options),
      dismiss,
    }),
    [push, dismiss]
  )

  useEffect(() => {
    const pending = timers.current
    return () => {
      for (const timer of pending.values()) window.clearTimeout(timer)
      pending.clear()
    }
  }, [])

  return (
    <ToastContext.Provider value={api}>
      {children}
      {mounted
        ? createPortal(
            <div className="pointer-events-none fixed inset-x-4 top-4 z-[60] flex flex-col items-center gap-2 sm:top-6">
              {toasts.map((toast) => (
                <ToastCard key={toast.id} toast={toast} onDismiss={() => dismiss(toast.id)} />
              ))}
            </div>,
            document.body
          )
        : null}
    </ToastContext.Provider>
  )
}

function ToastCard({ toast, onDismiss }: { toast: ToastItem; onDismiss: () => void }) {
  const config = {
    success: {
      Icon: CheckCircle2,
      iconClass: 'bg-emerald-50 text-emerald-600',
      role: 'status',
    },
    error: {
      Icon: AlertCircle,
      iconClass: 'bg-red-50 text-red-600',
      role: 'alert',
    },
    info: {
      Icon: Info,
      iconClass: 'bg-orange-50 text-[#FF5216]',
      role: 'status',
    },
  }[toast.variant]
  const Icon = config.Icon

  return (
    <div
      role={config.role}
      aria-atomic="true"
      className="pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-3xl border border-slate-100 bg-white/95 p-4 shadow-xl backdrop-blur animate-in fade-in slide-in-from-top-2 duration-200 motion-reduce:animate-none"
    >
      <div
        className={`flex size-9 shrink-0 items-center justify-center rounded-2xl ${config.iconClass}`}
      >
        <Icon className="size-4" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-black text-slate-900">{toast.title}</p>
        {toast.description ? (
          <p className="mt-0.5 text-xs font-medium leading-5 text-slate-500">{toast.description}</p>
        ) : null}
      </div>
      <button
        type="button"
        aria-label="Cerrar notificación"
        onClick={onDismiss}
        className="flex size-8 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}

'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useToast } from '@/components/ui/toast'
import { saveThemeAction } from '@/lib/user-data/actions'
import { setTheme, useTheme, type Theme } from '@/lib/theme'

const OPTIONS: Array<{
  value: Theme
  label: string
  icon: typeof Sun
}> = [
  { value: 'light', label: 'Claro', icon: Sun },
  { value: 'dark', label: 'Oscuro', icon: Moon },
  { value: 'system', label: 'Sistema', icon: Monitor },
]

export function ThemePreference() {
  const theme = useTheme()
  const { toast } = useToast()

  const pick = (value: Theme) => {
    setTheme(value)
    void saveThemeAction(value).then((result) => {
      if (!result.ok) {
        toast.error('No se pudo guardar tu preferencia', { description: result.error })
      }
    })
  }

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-sm font-extrabold">Tema</p>
        <p className="mt-1 text-xs font-semibold text-slate-500">
          Elige cómo se ve Medora.
        </p>
      </div>
      <div role="group" aria-label="Tema" className="grid grid-cols-3 gap-2">
        {OPTIONS.map(({ value, label, icon: Icon }) => {
          const active = theme === value
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => pick(value)}
              className={`flex flex-col items-center gap-1.5 rounded-2xl border px-2 py-3 text-xs font-black transition ${
                active
                  ? 'border-[#FF5216] bg-orange-50 text-[#FF5216]'
                  : 'border-slate-100 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Icon className="size-4" />
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import { applyTheme, getTheme, useTheme } from '@/lib/theme'

/** Applies the saved theme and follows OS changes while it is set to system. */
export function ThemeWatcher() {
  const theme = useTheme()

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (getTheme() === 'system') applyTheme('system')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return null
}

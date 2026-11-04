'use client'

import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'medora:theme'
const listeners = new Set<() => void>()
let storageBound = false

function emit() {
  for (const listener of listeners) listener()
}

function bindStorage() {
  if (storageBound || typeof window === 'undefined') return
  storageBound = true
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) return
    applyTheme(getTheme())
    emit()
  })
}

export function isDarkTheme(theme: Theme, systemPrefersDark: boolean): boolean {
  return theme === 'dark' || (theme === 'system' && systemPrefersDark)
}

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  } catch {
    return 'system'
  }
}

export function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return
  const dark = isDarkTheme(
    theme,
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}

export function setTheme(theme: Theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // The preference still applies for this session when storage is unavailable.
  }
  applyTheme(theme)
  emit()
}

export function subscribeTheme(listener: () => void) {
  bindStorage()
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribeTheme, getTheme, () => 'system')
}

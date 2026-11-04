import { cookies } from 'next/headers'
import type { ThemePreference } from './supabase/database.types'

/** Readable by the pre-paint theme script; the DB row stays the source of truth. */
export const THEME_COOKIE = 'medora-theme'
const ONE_YEAR = 60 * 60 * 24 * 365

export async function setThemeCookie(theme: ThemePreference): Promise<void> {
  const store = await cookies()
  store.set(THEME_COOKIE, theme, {
    path: '/',
    maxAge: ONE_YEAR,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })
}

export async function clearThemeCookie(): Promise<void> {
  const store = await cookies()
  store.delete(THEME_COOKIE)
}

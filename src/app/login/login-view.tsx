'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useTransition, type FormEvent } from 'react'
import { AuthInput } from '@/components/auth-input'
import { AuthShell } from '@/components/auth-shell'
import { Button } from '@/components/ui/button'
import { loginAction } from '@/lib/auth/actions'
import { fieldErrors, loginSchema } from '@/lib/auth/schemas'

type LoginViewProps = {
  next: string
  reset: boolean
  authError: boolean
}

export function LoginView({ next, reset, authError }: LoginViewProps) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const parsed = loginSchema.safeParse({ email, password, next })
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error))
      return
    }

    setErrors({})
    setFormError(null)
    startTransition(async () => {
      const result = await loginAction(parsed.data)
      if (result.fieldErrors) {
        setErrors(result.fieldErrors)
        return
      }
      if (result.error) {
        setFormError(result.error)
        return
      }
      router.replace(result.redirectTo ?? '/dashboard')
      router.refresh()
    })
  }

  return (
    <AuthShell
      title="Bienvenido de nuevo."
      description="Inicia sesión para continuar con tus repasos."
      footer={
        <p className="mt-7 text-center text-sm font-semibold text-slate-500">
          ¿Primera vez aquí?{' '}
          <Link href="/signup" className="font-black text-[#FF5216]">
            Crear cuenta
          </Link>
        </p>
      }
    >
      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
        {reset ? (
          <p className="rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
            Contraseña actualizada. Inicia sesión con la nueva.
          </p>
        ) : null}
        {authError ? (
          <p role="alert" className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">
            El enlace no es válido o expiró. Inicia sesión o solicita uno nuevo.
          </p>
        ) : null}
        {formError ? (
          <p role="alert" className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">
            {formError}
          </p>
        ) : null}
        <AuthInput
          id="login-email"
          label="Correo electrónico"
          type="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={setEmail}
          error={errors.email}
          disabled={pending}
        />
        <div>
          <AuthInput
            id="login-password"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={setPassword}
            error={errors.password}
            disabled={pending}
          />
          <Link href="/forgot-password" className="mt-2 inline-block text-xs font-black text-[#FF5216]">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <Button
          type="submit"
          disabled={pending}
          className="h-13 w-full rounded-full bg-accent-strong text-base font-black disabled:opacity-60"
        >
          {pending ? 'Entrando…' : 'Entrar'}
        </Button>
      </form>
    </AuthShell>
  )
}

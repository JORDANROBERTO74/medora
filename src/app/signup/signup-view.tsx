'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useTransition, type FormEvent } from 'react'
import { AuthInput } from '@/components/auth-input'
import { AuthShell } from '@/components/auth-shell'
import { Button } from '@/components/ui/button'
import { signupAction } from '@/lib/auth/actions'
import { fieldErrors, signupSchema } from '@/lib/auth/schemas'

export function SignupView() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [pending, startTransition] = useTransition()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const parsed = signupSchema.safeParse({ fullName, email, password, confirmPassword })
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error))
      return
    }

    setErrors({})
    setFormError(null)
    startTransition(async () => {
      const result = await signupAction(parsed.data)
      if (result.fieldErrors) {
        setErrors(result.fieldErrors)
        return
      }
      if (result.error) {
        setFormError(result.error)
        return
      }
      if (result.pendingConfirmation) {
        setSent(true)
        return
      }
      router.replace(result.redirectTo ?? '/dashboard')
      router.refresh()
    })
  }

  if (sent) {
    return (
      <AuthShell
        title="Revisa tu correo."
        description="Te enviamos un enlace para confirmar tu cuenta. Después podrás iniciar sesión."
      >
        <p className="text-sm font-medium leading-6 text-slate-600">
          Si no lo encuentras, revisa la carpeta de spam. El enlace caduca en unas horas.
        </p>
        <Link
          href="/login"
          className="mt-5 inline-flex h-13 w-full items-center justify-center rounded-full bg-accent-strong text-base font-black text-white"
        >
          Ir a iniciar sesión
        </Link>
      </AuthShell>
    )
  }

  return (
    <AuthShell
      title="Crea tu cuenta."
      description="Empieza a repasar en minutos: elige tu especialidad y avanza un tema al día."
      footer={
        <p className="mt-7 text-center text-sm font-semibold text-slate-500">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="font-black text-[#FF5216]">
            Inicia sesión
          </Link>
        </p>
      }
    >
      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
        {formError ? (
          <p role="alert" className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">
            {formError}
          </p>
        ) : null}
        <AuthInput
          id="signup-name"
          label="Nombre"
          autoComplete="name"
          placeholder="Tu nombre"
          value={fullName}
          onChange={setFullName}
          error={errors.fullName}
          disabled={pending}
        />
        <AuthInput
          id="signup-email"
          label="Correo electrónico"
          type="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={setEmail}
          error={errors.email}
          disabled={pending}
        />
        <AuthInput
          id="signup-password"
          label="Contraseña"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          value={password}
          onChange={setPassword}
          error={errors.password}
          hint="Mínimo 8 caracteres, con mayúscula, minúscula y un número."
          disabled={pending}
        />
        <AuthInput
          id="signup-confirm"
          label="Confirmar contraseña"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={setConfirmPassword}
          error={errors.confirmPassword}
          disabled={pending}
        />
        <Button
          type="submit"
          disabled={pending}
          className="h-13 w-full rounded-full bg-accent-strong text-base font-black disabled:opacity-60"
        >
          {pending ? 'Creando…' : 'Crear cuenta'}
        </Button>
      </form>
    </AuthShell>
  )
}

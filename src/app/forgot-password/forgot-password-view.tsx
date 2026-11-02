'use client'

import Link from 'next/link'
import { useState, useTransition, type FormEvent } from 'react'
import { AuthInput } from '@/components/auth-input'
import { AuthShell } from '@/components/auth-shell'
import { Button } from '@/components/ui/button'
import { requestPasswordResetAction } from '@/lib/auth/actions'
import { fieldErrors, forgotPasswordSchema } from '@/lib/auth/schemas'

export function ForgotPasswordView() {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [pending, startTransition] = useTransition()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const parsed = forgotPasswordSchema.safeParse({ email })
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error))
      return
    }

    setErrors({})
    setFormError(null)
    startTransition(async () => {
      const result = await requestPasswordResetAction(parsed.data)
      if (result.fieldErrors) {
        setErrors(result.fieldErrors)
        return
      }
      if (result.error) {
        setFormError(result.error)
        return
      }
      setSent(true)
    })
  }

  if (sent) {
    return (
      <AuthShell
        title="Revisa tu correo."
        description="Si existe una cuenta con ese email, enviamos un enlace para restablecer la contraseña."
        footer={
          <p className="mt-7 text-center text-sm font-semibold text-slate-500">
            <Link href="/login" className="font-black text-[#FF5216]">
              Volver a iniciar sesión
            </Link>
          </p>
        }
      >
        <p className="text-sm font-medium leading-6 text-slate-600">
          Revisa también la carpeta de spam. El enlace caduca en unos minutos.
        </p>
      </AuthShell>
    )
  }

  return (
    <AuthShell
      title="Restablecer contraseña."
      description="Te enviaremos un enlace al email de tu cuenta (si existe)."
      footer={
        <p className="mt-7 text-center text-sm font-semibold text-slate-500">
          <Link href="/login" className="font-black text-[#FF5216]">
            Volver a iniciar sesión
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
          id="forgot-email"
          label="Correo electrónico"
          type="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={setEmail}
          error={errors.email}
          disabled={pending}
        />
        <Button
          type="submit"
          disabled={pending}
          className="h-13 w-full rounded-full bg-[#FF5216] text-base font-black hover:bg-[#e94810] disabled:opacity-60"
        >
          {pending ? 'Enviando…' : 'Enviar enlace'}
        </Button>
      </form>
    </AuthShell>
  )
}

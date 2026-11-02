'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useTransition, type FormEvent } from 'react'
import { AuthInput } from '@/components/auth-input'
import { AuthShell } from '@/components/auth-shell'
import { Button } from '@/components/ui/button'
import { resetPasswordAction } from '@/lib/auth/actions'
import { fieldErrors, resetPasswordSchema } from '@/lib/auth/schemas'

export function ResetPasswordView() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const parsed = resetPasswordSchema.safeParse({ password, confirmPassword })
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error))
      return
    }

    setErrors({})
    setFormError(null)
    startTransition(async () => {
      const result = await resetPasswordAction(parsed.data)
      if (result.fieldErrors) {
        setErrors(result.fieldErrors)
        return
      }
      if (result.redirectTo) {
        router.replace(result.redirectTo)
        return
      }
      if (result.error) {
        setFormError(result.error)
      }
    })
  }

  return (
    <AuthShell
      title="Nueva contraseña."
      description="Elige una contraseña nueva para tu cuenta."
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
          id="reset-password"
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
          id="reset-confirm"
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
          className="h-13 w-full rounded-full bg-[#FF5216] text-base font-black hover:bg-[#e94810] disabled:opacity-60"
        >
          {pending ? 'Guardando…' : 'Guardar contraseña'}
        </Button>
      </form>
    </AuthShell>
  )
}

'use client'

import { ChevronRight } from 'lucide-react'
import { useState, useTransition, type FormEvent } from 'react'
import { AuthInput } from '@/components/auth-input'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { changePasswordAction } from '@/lib/auth/actions'
import { changePasswordSchema, fieldErrors } from '@/lib/auth/schemas'

export function ChangePasswordButton() {
  const [open, setOpen] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [pending, startTransition] = useTransition()

  const close = () => {
    setOpen(false)
    setDone(false)
    setCurrentPassword('')
    setPassword('')
    setConfirmPassword('')
    setErrors({})
    setFormError(null)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const parsed = changePasswordSchema.safeParse({ currentPassword, password, confirmPassword })
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error))
      return
    }

    setErrors({})
    setFormError(null)
    startTransition(async () => {
      const result = await changePasswordAction(parsed.data)
      if (result.fieldErrors) {
        setErrors(result.fieldErrors)
        return
      }
      if (result.error) {
        setFormError(result.error)
        return
      }
      setDone(true)
    })
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-extrabold hover:bg-slate-50"
      >
        Cambiar contraseña
        <ChevronRight className="size-4 text-slate-300" />
      </button>
      <Dialog open={open} onClose={close} eyebrow="Seguridad" title="Cambiar contraseña">
        {done ? (
          <>
            <p className="mt-4 text-sm font-medium leading-6 text-slate-600">Tu contraseña se actualizó.</p>
            <Button onClick={close} className="mt-5 h-11 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810]">
              Entendido
            </Button>
          </>
        ) : (
          <form noValidate onSubmit={onSubmit} className="mt-4 flex flex-col gap-4">
            {formError ? (
              <p role="alert" className="rounded-2xl bg-red-50 p-3 text-xs font-semibold text-red-700">
                {formError}
              </p>
            ) : null}
            <AuthInput
              id="current-password"
              label="Contraseña actual"
              type="password"
              autoComplete="current-password"
              value={currentPassword}
              onChange={setCurrentPassword}
              error={errors.currentPassword}
              disabled={pending}
            />
            <AuthInput
              id="new-password"
              label="Nueva contraseña"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={setPassword}
              error={errors.password}
              hint="Mínimo 8 caracteres, con mayúscula, minúscula y un número."
              disabled={pending}
            />
            <AuthInput
              id="confirm-new-password"
              label="Confirmar nueva contraseña"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              error={errors.confirmPassword}
              disabled={pending}
            />
            <Button
              type="submit"
              disabled={pending}
              className="h-11 w-full rounded-full bg-[#FF5216] font-black hover:bg-[#e94810] disabled:opacity-60"
            >
              {pending ? 'Guardando…' : 'Guardar'}
            </Button>
          </form>
        )}
      </Dialog>
    </>
  )
}

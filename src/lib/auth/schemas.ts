import { z } from 'zod'

const emailField = z
  .string()
  .trim()
  .toLowerCase()
  .max(254, 'El correo es demasiado largo')
  .pipe(z.email('Correo inválido'))

const passwordField = z
  .string()
  .min(8, 'La contraseña debe tener al menos 8 caracteres')
  .max(72, 'La contraseña es demasiado larga')
  .regex(/[a-z]/, 'Debe incluir una minúscula')
  .regex(/[A-Z]/, 'Debe incluir una mayúscula')
  .regex(/\d/, 'Debe incluir un número')

const confirmField = z.string().min(1, 'Confirma tu contraseña')

const passwordsMatch = { message: 'Las contraseñas no coinciden', path: ['confirmPassword'] }

export const loginSchema = z.object({
  email: emailField,
  password: z.string().min(1, 'La contraseña es obligatoria'),
  next: z.string().max(2048).nullish(),
})

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(80, 'El nombre es demasiado largo'),
    email: emailField,
    password: passwordField,
    confirmPassword: confirmField,
  })
  .refine((data) => data.password === data.confirmPassword, passwordsMatch)

export const forgotPasswordSchema = z.object({
  email: emailField,
})

export const resetPasswordSchema = z
  .object({
    password: passwordField,
    confirmPassword: confirmField,
  })
  .refine((data) => data.password === data.confirmPassword, passwordsMatch)

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'La contraseña actual es obligatoria').max(72),
    password: passwordField,
    confirmPassword: confirmField,
  })
  .refine((data) => data.password === data.confirmPassword, passwordsMatch)

/** First zod issue per field, ready for form rendering. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {}
  for (const issue of error.issues) {
    const key = issue.path[0]
    if (typeof key === 'string' && !out[key]) out[key] = issue.message
  }
  return out
}

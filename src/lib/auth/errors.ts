// Neutral copy: never reveal whether an account or email exists.
export const LOGIN_FAILED = 'Email o contraseña incorrectos.'

export const SIGNUP_FAILED = 'No pudimos crear la cuenta. Si ya tienes una, inicia sesión.'

export const DISPOSABLE_EMAIL =
  'No aceptamos direcciones de email temporales. Usa tu email personal o de trabajo.'

export const PASSWORD_UPDATE_FAILED = 'No pudimos actualizar la contraseña. Inténtalo de nuevo.'

export const RESET_SESSION_EXPIRED =
  'La sesión de recuperación expiró. Solicita un nuevo enlace.'

export const UNAUTHENTICATED = 'Debes iniciar sesión para continuar.'

export function tooManyAttempts(retryAfterSec: number): string {
  return `Demasiados intentos. Espera ${retryAfterSec}s.`
}

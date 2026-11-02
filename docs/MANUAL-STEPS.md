# Pendientes manuales (Medora)

Todo lo que requiere tus cuentas o claves. El código ya está implementado, testeado y
publicado; estos pasos activan la infraestructura.

Documentación técnica relacionada: [AUTH.md](./AUTH.md) · [EMAILS.md](./EMAILS.md).

## Estado actual (ya hecho)

- **Supabase**: proyecto `medora` (`zmbmlwhwwdawpxvuwepp`, `sa-east-1`), migraciones de
  identidad canónica y dominios desechables aplicadas, **Confirm email OFF**, política de
  contraseña 8 + mayúscula/minúscula/dígito, Site URL local.
- **Auth completo** (signup/login/forgot/reset/logout/cambio de contraseña, gate del
  dashboard, rate limits, hardening) — `tsc` 0, lint 0, 47/47 tests, build OK.
- **Repositorio privado publicado**: `https://github.com/JORDANROBERTO74/medora` (rama `main`).
- **Edge Function** `before-user-created` desplegada y ACTIVE (hook aún sin activar).
- **Emails** (Resend + React Email) implementados; sin `RESEND_API_KEY` los envíos se
  omiten sin romper el signup.

## 1. Resend (correos)

- [ ] Crear la **API key** en https://resend.com/api-keys.
- [ ] Verificar un dominio propio (`no-reply@tudominio.com`) **o** usar
      `onboarding@resend.dev` para pruebas (solo entrega al email de tu cuenta Resend).
- [ ] Guardar para el paso 2: `RESEND_API_KEY=re_...` y
      `EMAIL_FROM=Medora <no-reply@tudominio.com>` (o `onboarding@resend.dev`).

## 2. Vercel (despliegue)

- [ ] Importar el repo privado `JORDANROBERTO74/medora` (Next.js, pnpm).
- [ ] Variables de entorno (Production + Preview):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_SITE_URL=https://medora.vercel.app`
  - `RESEND_API_KEY`
  - `EMAIL_FROM`
- [ ] Deploy inicial. (`SEND_EMAIL_HOOK_SECRET` se añade en el paso 4.)

## 3. Supabase: activar hooks (PAT)

- [ ] Crear un **personal access token** en https://supabase.com/dashboard/account/tokens.
- [ ] Ejecutar:
      ```bash
      SUPABASE_ACCESS_TOKEN=sbp_... SITE_URL=https://medora.vercel.app node scripts/setup-auth-emails.mjs
      ```
      El script: genera los secretos de ambos hooks, **activa el Send Email hook**
      (`https://medora.vercel.app/api/auth/send-email`) y el **before-user-created**,
      fija `site_url`/`uri_allow_list` y escribe `SEND_EMAIL_HOOK_SECRET` en `.env.local`
      (sin imprimirlo).

## 4. Vercel: secret del hook + redeploy

- [ ] Copiar `SEND_EMAIL_HOOK_SECRET` desde `.env.local` a las variables de Vercel.
- [ ] Redeploy (el hook ya está activo y llamará a la app).

## 5. Upstash (rate limit distribuido + hook de signup)

- [ ] Crear Redis en https://console.upstash.com y copiar la URL y el token REST.
- [ ] En la app (`.env.local` y Vercel): `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`.
- [ ] Como **secrets de Edge Function** en Supabase (Dashboard → Edge Functions → Secrets,
      o reejecutar el script del paso 3 con las variables definidas).
      Sin ellos el hook permite el signup; canónico y desechables siguen protegidos en DB.

## 6. Local

- [ ] Añadir `RESEND_API_KEY`, `EMAIL_FROM` y `SEND_EMAIL_HOOK_SECRET` a `.env.local`.
- [ ] `pnpm build` y **reiniciar tu `:3000`** con el build nuevo.

## 7. Verificación

- [ ] Signup nuevo → llega el correo de **bienvenida** (Resend).
- [ ] "¿Olvidaste tu contraseña?" → llega el correo de **recuperación**; abrir el enlace
      desde **otro navegador** y cambiar la contraseña.
- [ ] Cambiar contraseña desde Más → llega el aviso de **contraseña actualizada**.
- [ ] 6 signups directos a `/auth/v1/signup` desde la misma IP → el 6º se rechaza
      (con Upstash configurado).
- [ ] Supabase → Logs → Auth: ningún envío del mailer nativo de Supabase.
- [ ] `/reset-password` con una sesión normal → redirige al dashboard (no abre el formulario).

## 8. Opcional / limpieza

- [ ] Dominio propio: actualizar `NEXT_PUBLIC_SITE_URL`, `EMAIL_FROM` y las Site/Redirect
      URLs de Supabase (reejecutar el script con `SITE_URL=...`).
- [ ] Revocar el PAT de Supabase cuando termine la configuración.

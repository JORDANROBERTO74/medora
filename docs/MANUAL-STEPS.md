# Pendientes manuales (Medora)

Checklist de lo que solo puedes hacer tú (claves, cuentas y despliegue). El código ya está
preparado para que funcione en cuanto completes estos pasos.

## 1. Resend (correos)

- [ ] Crear cuenta y **API key** en https://resend.com/api-keys.
- [ ] Dominio: verificar uno propio (`no-reply@tudominio.com`) **o** usar
      `onboarding@resend.dev` para pruebas (solo entrega al email de tu cuenta de Resend).
- [ ] Añadir a `.env.local` **y** al entorno de Vercel:
  - `RESEND_API_KEY=re_...`
  - `EMAIL_FROM=Medora <no-reply@tudominio.com>` (o `onboarding@resend.dev`)

## 2. Supabase (hooks de auth)

- [ ] Crear un **personal access token** en https://supabase.com/dashboard/account/tokens
      y guardarlo en `C:\Users\HP\AppData\Local\Temp\opencode\supabase-pat.txt`
      (o ejecutar tú el script del paso 4).
- [ ] Ejecutar con el token y la URL de producción:
      ```bash
      SUPABASE_ACCESS_TOKEN=sbp_... SITE_URL=https://medora.vercel.app node scripts/setup-auth-emails.mjs
      ```
      Esto habilita el hook de envío de correo, el hook de signup, fija Site/Redirect URLs
      y escribe `SEND_EMAIL_HOOK_SECRET` en `.env.local`.

## 3. Vercel (despliegue)

- [ ] Importar el repo privado `JORDANROBERTO74/medora` (framework Next.js, pnpm).
- [ ] Variables de entorno (Production + Preview):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_SITE_URL=https://medora.vercel.app`
  - `RESEND_API_KEY`
  - `EMAIL_FROM`
  - `SEND_EMAIL_HOOK_SECRET` (el que generó el script)
- [ ] Deploy. El hook de correo apunta a `https://medora.vercel.app/api/auth/send-email`,
      así que **el despliegue debe existir** para que Supabase pueda llamarlo.

## 4. Upstash (rate limit distribuido + hook de signup)

- [ ] Crear una base Redis en https://console.upstash.com y copiar `UPSTASH_REDIS_REST_URL`
      y `UPSTASH_REDIS_REST_TOKEN`.
- [ ] En la app (`.env.local` y Vercel): esas dos variables.
- [ ] En Supabase Edge Functions: los mismos nombres como **secrets** (Dashboard → Edge
      Functions → Secrets, o volver a ejecutar el script con las variables definidas).
      Sin ellos el hook permite el signup; canónico y desechables siguen protegidos en DB.

## 5. Verificación final

- [ ] `pnpm build` y `pnpm start` en local (o el deploy) y **reiniciar tu `:3000`**.
- [ ] Signup nuevo → llega el correo **de bienvenida** (Resend).
- [ ] "¿Olvidaste tu contraseña?" → llega el correo de **recuperación**; abrir el enlace
      desde **otro navegador** y cambiar la contraseña.
- [ ] Cambiar contraseña desde Más → llega el aviso de **contraseña actualizada**.
- [ ] 6 signups directos a `/auth/v1/signup` desde la misma IP → el 6º se rechaza
      (con Upstash configurado).
- [ ] En Supabase → Logs → Auth: no aparece ningún envío del mailer nativo.

## 6. Opcional

- [ ] Dominio propio: actualizar `NEXT_PUBLIC_SITE_URL`, `EMAIL_FROM` y las Site/Redirect
      URLs de Supabase (volver a ejecutar el script con `SITE_URL=...`).
- [ ] Revocar el PAT de Supabase cuando termine la configuración.

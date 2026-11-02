# Authentication

Email + password auth built on Supabase (`@supabase/ssr`, cookie sessions). No social
providers and no magic links.

## Routes

| Route | Access | Behaviour |
| --- | --- | --- |
| `/login` | public | Email/password form; honours `?next`, `?reset=1`, `?error=auth`; logged-in users are sent to `next` or `/dashboard` |
| `/signup` | public | Name + email + password + confirmation; creates the session and redirects to `/dashboard` |
| `/forgot-password` | public | Always answers the same ("if the account exists…"); the link opens the recovery callback |
| `/reset-password` | recovery session | Sets the new password, signs out and returns to `/login?reset=1` |
| `/auth/callback` | public | PKCE exchange for both signup confirmation and recovery; `next` is sanitised |
| `/dashboard/*` | session | Layout gate redirects to `/login?next=<pathname>` |

## Where protection lives

- `src/proxy.ts` only refreshes Supabase cookies and forwards `x-pathname`. It never
  authorises anything (a proxy-only gate is a known anti-pattern).
- `src/app/dashboard/layout.tsx` calls `getAuthUser()` and redirects when there is no
  session. Any page that reads data must do the same checks server-side.
- `getUser()` (JWT validation) is used for gates; `getSession()` is never trusted.

## Account abuse rules

Two independent guards run on signup:

1. **Disposable domains** — `src/lib/auth/is-disposable-email.ts` checks the domain and
   parent domains against `disposable-domains.ts` (10k+ domains generated from the public
   `disposable-email-domains` blocklist). Refresh with
   `node scripts/generate-disposable-domains.mjs <blocklist.conf> src/lib/auth/disposable-domains.ts`.
2. **One account per mailbox** — Supabase treats `juan+1@gmail.com` and `j.u.a.n@gmail.com`
   as different addresses. `public.canonicalize_email()` (SQL) normalises them and
   `email_identities` holds one row per canonical address. The trigger on `auth.users`
   aborts the signup transaction when the canonical already exists, so no orphan user is
   left behind.

Canonical rules (SQL is the source of truth):

- lowercase + trim
- `+tag` is stripped for every domain
- `gmail.com` / `googlemail.com`: dots are removed from the local part and the domain is
  normalised to `gmail.com`
- other domains keep their dots (they can be meaningful)

The email stored in Supabase is the address the user typed (lowercased), so delivery is
never altered.

## Rate limits

Upstash sliding window when `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` are set;
in-memory fallback otherwise (per instance — configure Upstash before running multiple
serverless instances).

| Key | Limit |
| --- | --- |
| `login-ip:{ip}` | 20 / 15 min |
| `login-email:{email}` | 10 / 15 min |
| `signup-ip:{ip}` | 5 / 15 min |
| `forgot-ip:{ip}` | 10 / 15 min |
| `forgot-email:{email}` | 3 / 15 min |
| `reset:{userId}` / `change-password:{userId}` | 5 / 15 min |

## Validation

Every form uses the same zod schema on the client (instant feedback) and in the server
action (authoritative). Password policy: at least 8 characters with lower case, upper case
and a number.

## Environment

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=         # public origin used in Supabase email links (required in production)
UPSTASH_REDIS_REST_URL=       # optional
UPSTASH_REDIS_REST_TOKEN=     # optional
```

Supabase project settings (applied 2026-11-02 via the Management API):

- `mailer_autoconfirm: true` — **Confirm email off** (signup returns a session).
- `password_min_length: 8` + `password_required_characters` lower/upper/digit.
- `site_url: http://localhost:3000`, `uri_allow_list: http://localhost:3000/auth/callback`.
  Add the production origin and callback before deploying.

## Security notes (audit 2026-11-02)

- Session cookies are **HttpOnly, SameSite=Lax, Secure in production** (`cookieOptions` in
  the server client and proxy). No browser Supabase client exists; adding one requires
  revisiting this.
- Email links use `NEXT_PUBLIC_SITE_URL`, never request headers: a spoofed Host cannot
  redirect recovery tokens to another domain. Production without that env throws.
- `/reset-password` requires the `medora-recovery` cookie **and** a session whose
  signed `amr` claim is not `password`: a stolen ordinary session cannot change the
  password, even if the client sets a same-named cookie (httpOnly prevents reading, not
  writing). The cookie is set only by the PKCE callback when `next=/reset-password`.
- Disposable domains are enforced in the **database** (trigger on `auth.users`), not only
  in the app, so direct Auth API calls are covered too. The denylist also ignores trailing
  dots.
- Canonical email uniqueness is database-enforced (trailing dots included).
- Password max length 72 (bcrypt truncation) and email max 254 in zod.
- Rate-limit keys hash the email (`sha256`) so Redis never stores PII. Upstash failures
  fall back to the in-memory limiter to keep auth available.
- Changing a password signs out the other sessions; a reset signs out everything.
- Security headers: CSP, HSTS, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`,
  `Permissions-Policy`; `X-Powered-By` disabled.
- Dependencies: `pnpm audit --prod` reports no known vulnerabilities (overrides in
  `pnpm-workspace.yaml` for `nanoid`, `source-map-js`, `baseline-browser-mapping`). The dev
  CLI (`shadcn`) still carries advisories in its own tree; it is not shipped.

### Residual / platform-level

- **Signup rate limiting is app-layer**: calling the Auth API directly bypasses it.
  The deployed `before-user-created` edge function closes this once activated (see below).
  Canonical and disposable rules are already DB-enforced.
- **Distributed rate limiting needs Upstash credentials**; without them the in-memory
  fallback is per instance.
- Supabase keeps sessions valid until the JWT expires after sign-out (standard).

## Signup hook (`before-user-created`)

Deployed edge function: `supabase/functions/before-user-created/index.ts`
(project `zmbmlwhwwdawpxvuwepp`, `verify_jwt: false` because GoTrue authenticates with
the webhook signature).

- Verifies `standardwebhooks` with `BEFORE_USER_CREATED_HOOK_SECRET`.
- Caps signups per IP (5 / 15 min) through Upstash REST when
  `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` are set as **edge function
  secrets**; otherwise it allows the request (the DB guards still apply).
- Rejects with `400` and a Spanish message when over the limit.

### Activation (needs a Supabase personal access token)

1. Dashboard → Authentication → Hooks → **Before user created**: enable, point to
   `https://zmbmlwhwwdawpxvuwepp.supabase.co/functions/v1/before-user-created`, copy the
   generated secret (`v1,whsec_…`) and add it as the edge function secret
   `BEFORE_USER_CREATED_HOOK_SECRET`.
2. With Upstash ready, also add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
   as edge function secrets (they are separate from the app env).
3. Equivalent Management API calls:
   ```http
   POST /v1/projects/{ref}/secrets
   [{ "name": "BEFORE_USER_CREATED_HOOK_SECRET", "value": "v1,whsec_…" },
    { "name": "UPSTASH_REDIS_REST_URL", "value": "…" },
    { "name": "UPSTASH_REDIS_REST_TOKEN", "value": "…" }]

   PATCH /v1/projects/{ref}/config/auth
   { "hook_before_user_created_enabled": true,
     "hook_before_user_created_uri": "https://{ref}.supabase.co/functions/v1/before-user-created",
     "hook_before_user_created_secrets": [{ "value": "v1,whsec_…" }] }
   ```
4. Verify with six direct `POST /auth/v1/signup` calls from the same IP: the sixth must
   be rejected; the UI flow is unchanged.

## Production (app name, no custom domain)

- `NEXT_PUBLIC_SITE_URL=https://medora.vercel.app` in the deployment environment.
- Supabase Auth config:
  `site_url = https://medora.vercel.app` and
  `uri_allow_list = https://medora.vercel.app/auth/callback,https://*-<project>.vercel.app/auth/callback`
  (previews). Apply with the dashboard or `PATCH /v1/projects/{ref}/config/auth`.
- `requestOrigin()` throws in production without `NEXT_PUBLIC_SITE_URL`, by design.

## Database

`supabase/migrations/20261101000000_email_identities.sql`:

- `public.email_identities` (RLS enabled, no policies → only the service role/definer
  functions touch it)
- `public.canonicalize_email(text)` (immutable)
- `register_email_identity_on_insert` trigger on `auth.users` (after insert)
- `rekey_email_identity_on_update` trigger on `auth.users` (defense in depth for email
  changes)

`supabase/migrations/20261101010000_disposable_domains.sql`:

- `public.disposable_email_domains` (10k+ domains, RLS, no grants)
- `canonicalize_email` updated to ignore trailing dots
- `register_email_identity` also rejects disposable domains (`P0002`) before inserting
  the identity, so direct Auth API signups are covered

## Tests

`src/lib/auth/*.test.ts` cover `safeNextPath`, zod schemas, the disposable-domain matcher
and the rate-limit fallback. The SQL canonicalisation and trigger are verified against the
project with `do $$ … $$` probes and end-to-end signups.

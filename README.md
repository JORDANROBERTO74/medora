# Medora

Medical revision app: short clinical summaries and quick quizzes across four specialties — surgery, gynecology, internal medicine and pediatrics — one topic at a time.

Authentication is real (Supabase email/password with a protected dashboard). Study content, notes, progress and quiz results still run on demo data.

## What's inside

- Landing page, signup, login, forgot/reset password
- Protected dashboard with streak, next review and specialty cards
- Topics and lesson screens per specialty (20 lessons, statically generated)
- Quiz menu with questions and clinical cases (per specialty and random)
- Notes screen with search, filters and grid/list views
- Progress and More screens; More shows the session user, sign out and change password

All UI copy is Spanish; identifiers, routes and slugs are English (`/dashboard/topics/surgery`, topic `acute-inflammation`).

## Tech stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 5.7
- Supabase Auth via `@supabase/ssr` (cookie sessions)
- Resend + React Email for transactional email (`src/emails/`)
- Tailwind CSS 4 with shadcn/base-nova components
- zod for validation; Upstash Redis for rate limiting (in-memory fallback)
- lucide-react icons; Inter for the UI, Source Serif 4 for the landing headline
- Vitest for unit tests, ESLint (`next/core-web-vitals`) for linting

## Getting started

Requires Node.js >= 20.9 and pnpm 11.

```bash
pnpm install
cp .env.example .env.local   # fill NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
pnpm dev
```

Supabase project setup:

1. Authentication → Providers → Email: disable **Confirm email** (signup returns a session immediately).
2. Authentication → URL Configuration: Site URL `http://localhost:3000` and redirect URL `http://localhost:3000/auth/callback`.
3. Apply the migration in `supabase/migrations/` (canonical email uniqueness).

Full auth contract: [docs/AUTH.md](docs/AUTH.md). Emails: [docs/EMAILS.md](docs/EMAILS.md).
Manual setup checklist (keys, deploy, hooks): [docs/MANUAL-STEPS.md](docs/MANUAL-STEPS.md).

## Deployment

- Production origin: `https://medora.vercel.app` (app name, no custom domain).
- Set `NEXT_PUBLIC_SITE_URL=https://medora.vercel.app` in the hosting environment.
- Supabase: Site URL `https://medora.vercel.app`, redirect
  `https://medora.vercel.app/auth/callback` (plus the Vercel preview wildcard).
- Optional hardening: activate the deployed `before-user-created` Auth Hook and add the
  Upstash credentials (details in [docs/AUTH.md](docs/AUTH.md)).

## Scripts

| Command        | What it does                             |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Start the dev server                     |
| `pnpm build`   | Production build (runs type checking)    |
| `pnpm start`   | Serve the production build               |
| `pnpm lint`    | ESLint across the repo                   |
| `pnpm test`    | Run the Vitest unit tests                |

## Project structure

```
src/
  app/            routes: landing, auth, dashboard (protected)
  components/     shared UI: bottom-nav, back-header, auth-shell, note-card, ...
  emails/         React Email templates (welcome, reset, password changed)
  lib/auth/       zod schemas, server actions, rate limit, disposable domains
  lib/email/      Resend sender and email link builders
  lib/supabase/   browser and server Supabase clients
  proxy.ts        session refresh + x-pathname (no route gating)
supabase/
  migrations/     canonical email identity table and triggers
```

Content lives in `src/lib/content.ts`: English slugs with Spanish display names. Quiz and
clinical-case rules are pure functions in `src/lib/` and covered by unit tests.

## Roadmap

- Persistence: notes, progress and quiz attempts (profiles + events tables)
- Gamification: achievements, streaks and score on top of those events (see `ROADMAP.md`)
- A real quiz engine: multiple questions, scoring across a session
- Lesson content authored per topic instead of the demo article

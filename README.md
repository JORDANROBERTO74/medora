# Medora

Medical revision app: short clinical summaries and quick quizzes across four specialties — surgery, gynecology, internal medicine and pediatrics — one topic at a time.

Medora is a **frontend-only prototype**. Every route and screen works, but there is no backend yet: notes, progress and quiz results run on local demo content.

## What's inside

- Landing page, signup, login and onboarding
- Dashboard with streak, next review and specialty cards
- Topics and lesson screens per specialty (20 lessons, statically generated)
- Quiz menu, per-specialty quiz and a random quiz with XP feedback
- Notes screen with search, filters and grid/list views
- Progress and More screens

All UI copy is Spanish; identifiers, routes and slugs are English (`/dashboard/topics/surgery`, topic `acute-inflammation`).

## Tech stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 5.7
- Tailwind CSS 4 with shadcn/base-nova components
- lucide-react icons; Inter for the UI, Source Serif 4 for the landing headline
- Vitest for unit tests, ESLint (`next/core-web-vitals`) for linting

## Getting started

Requires Node.js >= 20.9 and pnpm 11.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

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
  app/          routes: landing, auth, onboarding, dashboard screens
  components/   shared UI: bottom-nav, back-header, note-card, topic-row, ...
  lib/          content model (src/lib/content.ts) and pure quiz logic (src/lib/quiz.ts)
```

Content lives in `src/lib/content.ts`: English slugs with Spanish display names. Quiz rules are pure functions in `src/lib/quiz.ts` and are covered by unit tests.

## Roadmap

- Supabase auth and persistence (notes, progress, quiz attempts)
- A real quiz engine: multiple questions, scoring across a session
- Lesson content authored per topic instead of the demo article

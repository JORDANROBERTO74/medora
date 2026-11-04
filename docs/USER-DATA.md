# User data

Everything a user produces lives in Supabase behind row-level security. The app never uses
`service_role`: every read and write runs with the user's own JWT.

## Tables

`supabase/migrations/20261104000000_user_data.sql`:

- `public.user_preferences` — one row per account, currently only `theme`
  (`light` / `dark` / `system`). Absent row means "system" until the user picks one.
- `public.user_progress` — `(user_id, content_type, content_key)` with `content_type` in
  `lesson` | `reading` | `quiz` | `case`. It only ever grows: an upsert refreshes
  `completed_at`, nothing removes a row, so progress never shrinks.
- `public.user_study_days` — one row per day studied, written **only** by the
  `record_study_day` trigger (`security definer`, day taken in `America/La_Paz`), so a
  streak cannot be inflated from the browser. Clients can only `select` it.
- `public.user_notes` — personal notes. `source_title` / `source_href` link the note to its
  chapter or topic; `anchor_*` is the paragraph match and is all-or-nothing (a check
  constraint keeps hash, quote, block and line together).
- `public.user_quiz_results` — one row per answered round (`content_type` in `quiz` | `case`).
  Append-only: a re-take adds a row, so the totals can never drift from the history.
  `supabase/migrations/20261104010000_user_quiz_results.sql`.

RLS on all five tables: `select`, `insert`, `update` and (notes only) `delete`, each scoped
to `(select auth.uid()) = user_id`. `user_quiz_results` is insert + select only: a result
can be recorded but never edited or removed. `anon` has no grants; the trigger functions
are revoked from `public`, `anon` and `authenticated`.

Types: `src/lib/supabase/database.types.ts` is hand-written for these five tables —
regenerate with `supabase gen types typescript --remote=<project-ref>` once a PAT is
available.

## Flow

- `src/app/dashboard/layout.tsx` runs `requireUser()` and `getUserData()` once per
  dashboard load (`React.cache` dedupes the round trip inside a request) and hands the rows
  to `UserDataProvider`. Navigation inside `/dashboard` keeps that state in memory, so
  Supabase is not queried on every route change.
- Every write is a server action in `src/lib/user-data/actions.ts`, validated with the zod
  schemas in `src/lib/user-data/schemas.ts`.
- The device copy in `localStorage` (`medora:notes`) is imported once, on the first
  dashboard load, **only while the account has no notes**; the key is removed after a
  successful import and never touched otherwise. Notes from the legacy
  `/dashboard/lesson/...` route are filtered out during import and never reach the DB.

## Progress and streak

- The progress percentage counts only the 49 apuntes of the four specialties
  (`src/lib/user-data/progress.ts`). Radiology notes and reading/quiz/case activity never
  inflate it. Lessons are marked by the user with **Marcar como repasado** at the end of
  the apunte; opening a reading chapter, checking a quiz answer or checking a case answer
  records activity automatically.
- A study day is any day with activity. `computeStreak` walks back from today, or from
  yesterday when today is still empty, so a streak is not lost before the first session of
  the day; any gap resets it to zero.

## Rounds, stars and achievements

- A round is `ROUND_SIZE` (5) questions; the bank lives in `src/lib/quiz-bank.ts` and the
  quiz pages shuffle it on every request. A clinical case is a one-question round.
- Stars are computed server-side with `starsFor` (`src/lib/quiz.ts`) from `correct` / `total`,
  and a check constraint in the migration keeps the stored `stars` equal to that rating, so
  the client can only report how many answers it got right — never the rating itself.
- `recordResultAction` upserts `user_progress` (which stamps the study day) and appends the
  result in the same action. It is rate-limited to 30 rounds per minute per account, the one
  write a script could otherwise flood.
- Achievements (`src/lib/achievements.ts`) are **computed** from notes, progress, streak and
  results. No table and no unlock writes: the collection is a pure function of data the
  provider already holds. The trade-off is that it cannot show *when* an achievement
  unlocked, only that it is unlocked.

## Theme

- The `user_preferences` row is the source of truth. The non-HttpOnly `medora-theme`
  cookie caches it so the pre-paint script in `src/app/layout.tsx` applies the saved theme
  without a round trip and mirrors it into `localStorage` (`medora:theme`).
- The cookie is written when the user saves a theme and when a returning user signs in
  with a saved preference. Accounts that never chose a theme keep whatever the device
  already had locally.

shortcut: a device that stays signed in only refreshes the cookie on its next login, so a
theme changed elsewhere takes effect there after re-authenticating; move the cookie into
the middleware if that gap ever matters.

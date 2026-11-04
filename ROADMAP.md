# Roadmap

## Done — Gamification: stars, achievements and streak

**Status:** shipped (`docs/USER-DATA.md`).

- Persistence: `user_progress`, `user_study_days` (streak, written only by a trigger) and
  `user_quiz_results` — append-only rounds with a star rating computed server-side.
- Rounds are 5 questions (`src/lib/quiz-bank.ts`); the result screen shows `3/5` stars and
  Progreso shows questions resolved, average rating and the achievement grid.
- Achievements (`src/lib/achievements.ts`) are computed from the user's own data: no trophy
  table, nothing to farm, nothing that resets on reload.
- Streaks have a one-day grace period and no punitive messaging.

### Design guardrails

- Keep the editorial, exam-prep tone: clinical milestones and credentials, not cartoon medals or confetti.
- One system done well beats five half-built systems.
- Accessibility: never signal rewards through color alone; new UI keeps AA contrast and respects `prefers-reduced-motion`.

## Pending — Social / leaderboards

Last, and only once there are real users; nothing shipped so far depends on it.

## Related pending items

- Manual setup checklist (Resend keys, Vercel deploy, Supabase hooks, Upstash): `docs/MANUAL-STEPS.md`.
- Orange `#FF5216` small text on light surfaces is ~3.2:1 (fails AA); keep it for fills and darken only text uses.

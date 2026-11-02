# Roadmap

## Pending — Gamification: achievements, trophies and score

**Status:** planned, blocked on persistence.

**Why it is blocked:** auth v1 shipped (see `docs/AUTH.md`), but achievements and streaks still need per-user event storage. Without `profiles` + `events` tables every trophy resets on reload. The app still shows demo numbers (38 % progress, "7 días de racha", `+120 XP`) that should be replaced by real data, not extended with more.

### Order of work

1. **Supabase persistence** — `profiles` (one row per `auth.users.id`) plus a single `events` table (`user_id`, `event_type`, `specialty_slug`, `occurred_at`) for `lesson_viewed`, `quiz_completed`, `case_solved`.
2. **Real score/XP** — computed from events; replaces the hardcoded `+120 XP`, "80 puntos" and dashboard percentages.
3. **Daily streaks** — with a grace period and no punitive messaging.
4. **Milestones** — first lesson read, ten quizzes completed, first case solved, specialty completed.
5. **Specialty trophies** — one badge per completed specialty.
6. **Social / leaderboards** — last; only once there are real users.

### Design guardrails

- Keep the editorial, exam-prep tone: clinical milestones and credentials, not cartoon medals or confetti.
- One system done well beats five half-built systems.
- Accessibility: never signal rewards through color alone; new UI keeps AA contrast and respects `prefers-reduced-motion`.

### Out of scope for now

- Fake or in-memory achievements.
- Any reward that needs `localStorage`: the demo intentionally uses no client-side persistence.

## Related pending items

- Manual setup checklist (Resend keys, Vercel deploy, Supabase hooks, Upstash): `docs/MANUAL-STEPS.md`.
- User progress persistence (`profiles` + `events` tables) and replacing the demo numbers.
- Real multi-question quiz engine (the current one is a single-question demo).
- Orange `#FF5216` small text on light surfaces is ~3.2:1 (fails AA); keep it for fills and darken only text uses.

-- One row per answered quiz round: a study log, not a scoreboard.
-- Re-taking a round appends a row, so "questions resolved" and "average stars"
-- are always derived from the rows and can never drift from them.

create table public.user_quiz_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  content_type text not null check (content_type in ('quiz', 'case')),
  content_key text not null check (char_length(content_key) between 1 and 300),
  correct integer not null check (correct >= 0),
  total integer not null check (total between 1 and 100),
  stars integer not null check (stars between 0 and 5),
  created_at timestamptz not null default now(),
  check (correct <= total),
  -- Stars must equal the rounded correct/total rating, so a row can never
  -- disagree with itself no matter what the client sends.
  check (
    stars = case
      when correct = 0 then 0
      when correct::numeric / total >= 1 then 5
      when correct::numeric / total >= 0.8 then 4
      when correct::numeric / total >= 0.6 then 3
      when correct::numeric / total >= 0.4 then 2
      else 1
    end
  )
);

create index user_quiz_results_user_created_idx
  on public.user_quiz_results (user_id, created_at desc);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.user_quiz_results enable row level security;

-- Append-only: a result can be recorded but never edited or removed.
create policy "user_quiz_results_select_own" on public.user_quiz_results
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "user_quiz_results_insert_own" on public.user_quiz_results
  for insert to authenticated with check ((select auth.uid()) = user_id);

-- ---------------------------------------------------------------------------
-- Privileges
-- ---------------------------------------------------------------------------

revoke all on public.user_quiz_results from anon;
grant select, insert on public.user_quiz_results to authenticated;

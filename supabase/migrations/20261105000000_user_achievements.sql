-- Achievements are derived from the study data, but the moment they unlocked and
-- whether the user has already seen them cannot be derived: this table is the
-- memory that makes the toast and the nav badge possible across devices.
-- Rows are permanent: a broken streak never revokes an achievement.

create table public.user_achievements (
  user_id uuid not null references auth.users (id) on delete cascade,
  achievement_id text not null check (achievement_id ~ '^[a-z0-9-]{2,60}$'),
  unlocked_at timestamptz not null default now(),
  -- null until the user opens the progress page.
  seen_at timestamptz,
  primary key (user_id, achievement_id)
);

create index user_achievements_unseen_idx
  on public.user_achievements (user_id)
  where seen_at is null;

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.user_achievements enable row level security;

create policy "user_achievements_select_own" on public.user_achievements
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "user_achievements_insert_own" on public.user_achievements
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "user_achievements_update_own" on public.user_achievements
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- ---------------------------------------------------------------------------
-- Privileges
-- ---------------------------------------------------------------------------

revoke all on public.user_achievements from anon;
grant select, insert, update on public.user_achievements to authenticated;

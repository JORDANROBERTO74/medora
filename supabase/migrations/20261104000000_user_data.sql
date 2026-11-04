-- User-owned study data: preferences, progress, study days and notes.
-- Everything is scoped to auth.uid() by RLS; the app never uses service_role.

create table public.user_preferences (
  user_id uuid primary key references auth.users (id) on delete cascade,
  theme text not null default 'system' check (theme in ('light', 'dark', 'system')),
  updated_at timestamptz not null default now()
);

create table public.user_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  content_type text not null check (content_type in ('lesson', 'reading', 'quiz', 'case')),
  content_key text not null check (char_length(content_key) between 1 and 300),
  completed_at timestamptz not null default now(),
  primary key (user_id, content_type, content_key)
);

create index user_progress_user_completed_idx
  on public.user_progress (user_id, completed_at desc);

create table public.user_study_days (
  user_id uuid not null references auth.users (id) on delete cascade,
  day date not null,
  primary key (user_id, day)
);

create table public.user_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  text text not null check (char_length(text) between 1 and 4000),
  source_title text check (source_title is null or char_length(source_title) <= 300),
  source_href text check (source_href is null or char_length(source_href) <= 500),
  anchor_block integer check (anchor_block is null or anchor_block >= 0),
  anchor_line integer check (anchor_line is null or anchor_line >= 0),
  anchor_hash text check (anchor_hash is null or char_length(anchor_hash) <= 128),
  anchor_quote text check (anchor_quote is null or char_length(anchor_quote) <= 1000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  -- An anchor is all-or-nothing: hash and quote always travel together.
  check (
    (anchor_hash is null) = (anchor_quote is null)
    and (anchor_hash is null) = (anchor_block is null)
    and (anchor_hash is null) = (anchor_line is null)
  )
);

create index user_notes_user_created_idx on public.user_notes (user_id, created_at desc);
create index user_notes_user_source_idx on public.user_notes (user_id, source_href);

-- ---------------------------------------------------------------------------
-- Triggers
-- ---------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger user_notes_touch_updated_at
before update on public.user_notes
for each row execute function public.set_updated_at();

create trigger user_preferences_touch_updated_at
before update on public.user_preferences
for each row execute function public.set_updated_at();

-- Any completed content stamps the study day it happened in. The client never
-- writes user_study_days directly, so a streak cannot be inflated from the browser.
create or replace function public.record_study_day()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.user_study_days (user_id, day)
  values (new.user_id, (new.completed_at at time zone 'America/La_Paz')::date)
  on conflict (user_id, day) do nothing;
  return new;
end;
$$;

create trigger user_progress_record_study_day
after insert or update of completed_at on public.user_progress
for each row execute function public.record_study_day();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.user_preferences enable row level security;
alter table public.user_progress enable row level security;
alter table public.user_study_days enable row level security;
alter table public.user_notes enable row level security;

create policy "user_preferences_select_own" on public.user_preferences
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "user_preferences_insert_own" on public.user_preferences
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "user_preferences_update_own" on public.user_preferences
  for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy "user_progress_select_own" on public.user_progress
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "user_progress_insert_own" on public.user_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "user_progress_update_own" on public.user_progress
  for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Select only: the trigger is security definer, so clients cannot write days.
create policy "user_study_days_select_own" on public.user_study_days
  for select to authenticated using ((select auth.uid()) = user_id);

create policy "user_notes_select_own" on public.user_notes
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "user_notes_insert_own" on public.user_notes
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "user_notes_update_own" on public.user_notes
  for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "user_notes_delete_own" on public.user_notes
  for delete to authenticated using ((select auth.uid()) = user_id);

-- ---------------------------------------------------------------------------
-- Privileges
-- ---------------------------------------------------------------------------

revoke all on public.user_preferences from anon;
revoke all on public.user_progress from anon;
revoke all on public.user_study_days from anon;
revoke all on public.user_notes from anon;

grant select, insert, update on public.user_preferences to authenticated;
grant select, insert, update on public.user_progress to authenticated;
grant select on public.user_study_days to authenticated;
grant select, insert, update, delete on public.user_notes to authenticated;

revoke all on function public.set_updated_at() from public, anon, authenticated;
revoke all on function public.record_study_day() from public, anon, authenticated;

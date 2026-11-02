-- Auth-only schema: canonical email uniqueness.
-- Blocks account reuse via +tags, gmail dots, case and googlemail aliases.
-- The app never reads this table; triggers enforce the rule inside auth.users.

create table public.email_identities (
  canonical_email text primary key,
  user_id uuid not null unique references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.email_identities enable row level security;
revoke all on public.email_identities from anon, authenticated;

-- Same rules as src/lib/auth/canonicalize-email TS mirror (kept in SQL only).
create or replace function public.canonicalize_email(email text)
returns text
language sql
immutable
set search_path = ''
as $$
  with parts as (
    select lower(trim(email)) as raw
  ),
  split as (
    select
      split_part(raw, '@', 1) as local,
      split_part(raw, '@', 2) as domain
    from parts
  ),
  cleaned as (
    select
      regexp_replace(local, '\+.*$', '') as local_no_tag,
      case when domain = 'googlemail.com' then 'gmail.com' else domain end as domain
    from split
  )
  select case
    when domain = 'gmail.com' then replace(local_no_tag, '.', '') || '@' || domain
    else local_no_tag || '@' || domain
  end
  from cleaned;
$$;

create or replace function public.register_email_identity()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.email is null then
    return new;
  end if;

  insert into public.email_identities (canonical_email, user_id)
  values (public.canonicalize_email(new.email), new.id);

  return new;
exception
  when unique_violation then
    raise exception 'email_identity_taken' using errcode = 'P0001';
end;
$$;

create trigger register_email_identity_on_insert
after insert on auth.users
for each row execute function public.register_email_identity();

-- Defense in depth: a future email change must not reuse another identity.
create or replace function public.rekey_email_identity()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.email is distinct from old.email and new.email is not null then
    update public.email_identities
       set canonical_email = public.canonicalize_email(new.email)
     where user_id = new.id;
  end if;

  return new;
end;
$$;

create trigger rekey_email_identity_on_update
before update of email on auth.users
for each row execute function public.rekey_email_identity();

-- Hardening (Supabase security advisors): these functions are trigger-only.
revoke all on public.email_identities from public;
revoke execute on function public.canonicalize_email(text) from public, anon, authenticated;
revoke execute on function public.register_email_identity() from public, anon, authenticated;
revoke execute on function public.rekey_email_identity() from public, anon, authenticated;

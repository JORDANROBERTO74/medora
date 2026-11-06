-- Opening a reading chapter stamps the study day (the streak) but must not mark
-- the chapter as read: that only happens when the reader reaches the end.
-- The day is computed by the database, so it always matches the app timezone and
-- a client can only ever insert "today".

alter table public.user_study_days
  alter column day set default ((now() at time zone 'America/La_Paz')::date);

create policy "user_study_days_insert_today" on public.user_study_days
  for insert to authenticated
  with check (
    (select auth.uid()) = user_id
    and day = (now() at time zone 'America/La_Paz')::date
  );

grant insert on public.user_study_days to authenticated;

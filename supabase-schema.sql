-- Run this once in Supabase Dashboard > SQL Editor.
create table if not exists public.fortune_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  reading_type text not null check (reading_type in ('tarot', 'birth-chart', 'lucky-wheel', 'blood-oracle', 'daily-lucky', 'contact')),
  category text,
  summary jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists fortune_history_user_created_idx
  on public.fortune_history (user_id, created_at desc);

alter table public.fortune_history drop constraint if exists fortune_history_reading_type_check;
alter table public.fortune_history add constraint fortune_history_reading_type_check
  check (reading_type in ('tarot', 'birth-chart', 'lucky-wheel', 'blood-oracle', 'daily-lucky', 'contact'));

alter table public.fortune_history enable row level security;

grant select, insert, delete on public.fortune_history to authenticated;
revoke all on public.fortune_history from anon;

drop policy if exists "Users view only their own fortune history" on public.fortune_history;
create policy "Users view only their own fortune history"
  on public.fortune_history for select to authenticated
  using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

drop policy if exists "Users save only their own fortune history" on public.fortune_history;
create policy "Users save only their own fortune history"
  on public.fortune_history for insert to authenticated
  with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

drop policy if exists "Users delete only their own fortune history" on public.fortune_history;
create policy "Users delete only their own fortune history"
  on public.fortune_history for delete to authenticated
  using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

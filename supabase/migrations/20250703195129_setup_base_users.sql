create table if not exists public.profiles (
  id uuid primary key references auth.users(id),
  avatar_url text default '/default.png'
);

alter table public.profiles enable row level security;

create policy "users can view their own profiles"
on public.profiles for select
using ((select auth.uid()) = id);

create policy "users can create a profiles"
on public.profiles for insert
to authenticated
with check ((select auth.uid()) = id);

create policy "users can edit their profile"
on public.profiles for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

create policy "users can delete their profile"
on public.profiles for delete
to authenticated
using ((select auth.uid()) = id);

-- alter table public.profiles enable policy "users can view their own profiles";
-- alter table public.profiles enable policy "users can create a profile";
-- alter table public.profiles enable policy "users can edit their profile";
-- alter table public.profiles enable policy "users can delete their profile";

create table if not exists listings (
  id uuid primary key not null default uuid_generate_v4(),
  title varchar(60) not null,
  description text
);

alter table public.listings enable row level security;


-- alter table public.listings enable policy "profiles can select their listings";
-- alter table public.listings enable policy "profiles can insert listings";
-- alter table public.listings enable policy "profiles can update their listings";
-- alter table public.listings enable policy "profiles can delete their listings";

create table if not exists listings_images (
  id uuid primary key not null default uuid_generate_v4(),
  url text not null,
  listing_id uuid references listings(id) on delete cascade
);

create or replace function check_max_listings_images()
returns trigger
language plpgsql
security definer
as $$
begin
  if (select count(*) from listings_images where listing_id = new.listing_id) >= 20 then
    raise exception 'Maximum of 20 images per listing is allowed';
  end if;
  return new;
end;
$$ ;

create trigger trigger_check_max_listings_images
before insert
on public.listings_images
for each row execute function check_max_listings_images();

create table if not exists profiles_listings (
  profile_id uuid references public.profiles(id) on delete cascade,
  listing_id uuid references public.listings(id) on delete cascade,
  primary key (profile_id, listing_id)
);

alter table public.profiles_listings enable row level security;

create policy "profiles can select their listings"
on profiles_listings
for select
using ((select auth.uid()) = profile_id);

create policy "profiles can insert new listings"
on profiles_listings
for insert
with check ((select auth.uid()) = profile_id);

create policy "profiles can delete their listings"
on profiles_listings
for delete
using ((select auth.uid()) = profile_id);

create policy "anyone can select listings"
on public.listings
for select
using (true);

create policy "profiles can insert listings"
on public.listings
for insert
to authenticated
with check (exists (
  select 1
  from profiles_listings
  where profiles_listings.profile_id = (select auth.uid())
));

create policy "profiles can update their listings"
on public.listings
for update
to authenticated
using (exists (
  select 1
  from profiles_listings
  where profiles_listings.listing_id = listings.id and profiles_listings.profile_id = (select auth.uid())
));

create policy "profiles can delete their listings"
on public.listings
for delete
to authenticated
using (exists (
  select 1
  from profiles_listings
  where profiles_listings.listing_id = listings.id and profiles_listings.profile_id = (select auth.uid())
));

-- alter table public.profiles_listings enable policy "profiles can select their listings";
-- alter table public.profiles_listings enable policy "profiles can insert new listings";
-- alter table public.profiles_listings enable policy "profiles can delete their listings";

create table if not exists public.products (
  id text primary key,
  name text not null,
  category text not null,
  price numeric(10,2) not null,
  image text not null,
  description text not null,
  variants text[] not null default '{}',
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  car_brand text,
  car_model_year text,
  request text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  mollie_payment_id text unique,
  amount numeric(10,2) not null,
  currency text not null default 'EUR',
  status text not null default 'open',
  payload jsonb,
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;
alter table public.quotes enable row level security;
alter table public.orders enable row level security;

create policy "public can read products"
  on public.products for select
  using (true);

-- Admin-only writes should be done via service role or later via Supabase auth policies.

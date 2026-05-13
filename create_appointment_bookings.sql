create table if not exists public.appointment_bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid null references auth.users(id) on delete set null,
  customer_name text not null,
  customer_phone text not null,
  customer_email text null,
  pet_name text null,
  pet_type text null,
  service_type text not null,
  appointment_at timestamptz not null,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  notes text null,
  form_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint appointment_bookings_customer_name_not_blank check (length(btrim(customer_name)) > 0),
  constraint appointment_bookings_customer_phone_not_blank check (length(btrim(customer_phone)) > 0),
  constraint appointment_bookings_service_type_not_blank check (length(btrim(service_type)) > 0),
  constraint appointment_bookings_form_data_is_object check (jsonb_typeof(form_data) = 'object')
);

comment on table public.appointment_bookings is '预约业务表：存储用户预约表单提交数据';
comment on column public.appointment_bookings.user_id is '可选：关联 Supabase Auth 用户，未登录预约可为空';
comment on column public.appointment_bookings.customer_name is '预约人姓名';
comment on column public.appointment_bookings.customer_phone is '预约人手机号';
comment on column public.appointment_bookings.customer_email is '预约人邮箱';
comment on column public.appointment_bookings.pet_name is '宠物名称';
comment on column public.appointment_bookings.pet_type is '宠物类型';
comment on column public.appointment_bookings.service_type is '预约服务类型';
comment on column public.appointment_bookings.appointment_at is '预约时间';
comment on column public.appointment_bookings.status is '预约状态：pending/confirmed/completed/cancelled';
comment on column public.appointment_bookings.notes is '备注';
comment on column public.appointment_bookings.form_data is '完整原始表单 JSON，便于保留扩展字段';

create index if not exists appointment_bookings_user_id_idx on public.appointment_bookings(user_id);
create index if not exists appointment_bookings_appointment_at_idx on public.appointment_bookings(appointment_at);
create index if not exists appointment_bookings_status_idx on public.appointment_bookings(status);
create index if not exists appointment_bookings_form_data_gin_idx on public.appointment_bookings using gin(form_data);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_appointment_bookings_updated_at on public.appointment_bookings;
create trigger set_appointment_bookings_updated_at
before update on public.appointment_bookings
for each row
execute function public.set_updated_at();

alter table public.appointment_bookings enable row level security;

revoke all on table public.appointment_bookings from anon, authenticated;
grant select, insert, update, delete on table public.appointment_bookings to service_role;

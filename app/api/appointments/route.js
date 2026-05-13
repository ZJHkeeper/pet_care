import pg from "pg";
import { NextResponse } from "next/server";

const { Pool } = pg;

export const runtime = "nodejs";

const getPool = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (!globalThis.appointmentPool) {
    globalThis.appointmentPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 5,
    });
  }

  return globalThis.appointmentPool;
};

const toText = (value) => (typeof value === "string" ? value.trim() : "");

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "提交内容格式不正确。" }, { status: 400 });
  }

  const customerName = toText(body.customerName);
  const customerPhone = toText(body.customerPhone);
  const petType = toText(body.petType);
  const serviceType = toText(body.serviceType);
  const appointmentAt = toText(body.appointmentAt);
  const appointmentDate = new Date(appointmentAt);

  if (!customerName || !customerPhone || !petType || !serviceType || !appointmentAt) {
    return NextResponse.json({ message: "请完整填写预约信息。" }, { status: 400 });
  }

  if (Number.isNaN(appointmentDate.getTime())) {
    return NextResponse.json({ message: "请选择有效的到店时间。" }, { status: 400 });
  }

  try {
    const pool = getPool();
    const { rows } = await pool.query(
      `insert into public.appointment_bookings
        (customer_name, customer_phone, pet_type, service_type, appointment_at, form_data)
       values
        ($1, $2, $3, $4, $5, $6::jsonb)
       returning id`,
      [
        customerName,
        customerPhone,
        petType,
        serviceType,
        appointmentDate.toISOString(),
        JSON.stringify({
          customerName,
          customerPhone,
          petType,
          serviceType,
          appointmentAt,
          source: "paw_bloom_next_booking_form",
        }),
      ],
    );

    return NextResponse.json({ id: rows[0].id, message: "预约提交成功。" });
  } catch (error) {
    console.error("Failed to create appointment booking", error);
    return NextResponse.json({ message: "预约提交失败，请稍后再试。" }, { status: 500 });
  }
}

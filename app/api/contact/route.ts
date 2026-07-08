import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
  const comment = typeof body?.comment === "string" ? body.comment.trim() : "";

  if (!phone) {
    return NextResponse.json(
      { error: "Укажите номер телефона" },
      { status: 400 }
    );
  }

  const lines = [
    "Новая заявка с сайта МанипуляторСервис",
    `Имя: ${name || "не указано"}`,
    `Телефон: ${phone}`,
    `Комментарий: ${comment || "—"}`,
  ];

  const results = await Promise.allSettled([
    sendToTelegram(lines.join("\n")),
    sendToEmail(lines),
  ]);

  const ok = results.some((r) => r.status === "fulfilled");
  if (!ok) {
    console.error("contact form delivery failed", results);
    return NextResponse.json(
      { error: "Не удалось отправить заявку, попробуйте позвонить" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

async function sendToTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) throw new Error("Telegram not configured");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
  if (!res.ok) throw new Error(`Telegram API error: ${res.status}`);
}

async function sendToEmail(lines: string[]) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;
  if (!apiKey || !to || !from) throw new Error("Email not configured");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: "Новая заявка — МанипуляторСервис",
    text: lines.join("\n"),
  });
  if (error) throw new Error(`Resend error: ${error.message}`);
}

// api/lead.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Диагностика (без утечки секретов)
  const diag = {
    hasBOT_TOKEN: !!process.env.BOT_TOKEN,
    hasCHAT_ID: !!process.env.CHAT_ID,
    vercelEnv: process.env.VERCEL_ENV || null,
    vercelRegion: process.env.VERCEL_REGION || null,
    vercelUrl: process.env.VERCEL_URL || null,
  };

  if (req.method !== "POST") {
    return res.status(200).json({ ok: false, error: "Use POST", diag });
  }

  if (!process.env.BOT_TOKEN || !process.env.CHAT_ID) {
    return res.status(200).json({ ok: false, error: "Missing ENV", diag });
  }

  try {
    const body = (req.body ?? {}) as any;
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const comment = String(body.comment ?? "").trim();
    const page = String(body.page ?? "").trim();

    if (!name || !phone) {
      return res.status(400).json({ ok: false, error: "Missing name/phone", diag });
    }

    const text =
      `🧾 Новая заявка\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      `💬 Комментарий: ${comment || "—"}\n` +
      `🌐 Страница: ${page || "—"}\n` +
      `🕒 Время: ${new Date().toLocaleString("ru-RU")}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: process.env.CHAT_ID, text }),
    });

    const tgJson = await tgRes.json().catch(() => ({}));

    if (!tgRes.ok || tgJson?.ok === false) {
      return res.status(200).json({
        ok: false,
        error: "Telegram error",
        tg: { status: tgRes.status, response: tgJson },
        diag,
      });
    }

    return res.status(200).json({ ok: true, diag });
  } catch (e: any) {
    return res.status(200).json({ ok: false, error: e?.message || "Unknown error", diag });
  }
}
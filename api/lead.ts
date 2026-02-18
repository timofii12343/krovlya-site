import type { VercelRequest, VercelResponse } from "vercel";

const json = (res: VercelResponse, status: number, body: any) =>
  res.status(status).setHeader("Content-Type", "application/json").end(JSON.stringify(body));

const clamp = (v: any, max: number) => String(v ?? "").trim().slice(0, max);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return json(res, 405, { ok: false, error: "method_not_allowed" });

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;
  if (!BOT_TOKEN || !CHAT_ID) return json(res, 500, { ok: false, error: "env_missing" });

  const body = req.body || {};
  const hp = clamp(body.hp, 200);
  if (hp) return json(res, 200, { ok: true }); // honeypot

  const name = clamp(body.name, 50);
  const phone = clamp(body.phone, 30);
  const comment = clamp(body.comment, 500);
  const page = clamp(body.page, 300);

  if (name.length < 1 || phone.length < 5) return json(res, 400, { ok: false, error: "invalid_input" });

  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ||
    (req.socket as any)?.remoteAddress ||
    "unknown";

  // мягкий rate limit (best-effort)
  // @ts-ignore
  global.__rl = global.__rl || new Map<string, { c: number; t: number }>();
  // @ts-ignore
  const rl: Map<string, { c: number; t: number }> = global.__rl;

  const now = Date.now();
  const win = 10 * 60 * 1000; // 10 минут
  const lim = 10;

  const prev = rl.get(ip);
  if (!prev || now - prev.t > win) rl.set(ip, { c: 1, t: now });
  else {
    prev.c += 1;
    if (prev.c > lim) return json(res, 200, { ok: true }); // тихо глотаем спам
  }

  const text =
    `🧾 Новая заявка\n` +
    `👤 Имя: ${name}\n` +
    `📞 Телефон: ${phone}\n` +
    `💬 Комментарий: ${comment || "—"}\n` +
    `🌐 Страница: ${page || "—"}\n` +
    `🕒 ${new Date().toLocaleString("ru-RU")}\n` +
    `🧷 IP: ${ip}`;

  const tgResp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text, disable_web_page_preview: true }),
  });

  if (!tgResp.ok) {
    const errText = await tgResp.text().catch(() => "");
    return json(res, 500, { ok: false, error: "telegram_failed", details: errText.slice(0, 400) });
  }

  return json(res, 200, { ok: true });
}
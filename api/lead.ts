export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const { name, phone, comment, page, hp } = req.body || {};

    // honeypot (если заполнили — молча принимаем, но ничего не делаем)
    if (hp) return res.status(200).json({ ok: true });

    if (!name || !phone) return res.status(400).json({ ok: false, error: "Missing fields" });

    const BOT_TOKEN = process.env.TG_BOT_TOKEN;
    const CHAT_ID = process.env.TG_CHAT_ID;
    if (!BOT_TOKEN || !CHAT_ID) return res.status(500).json({ ok: false, error: "Missing ENV" });

    const text =
      `🧾 Новая заявка\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      `💬 Комментарий: ${comment || "—"}\n` +
      `🌐 Страница: ${page || "—"}\n` +
      `🕒 Время: ${new Date().toLocaleString("ru-RU")}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    const tgJson = await tgRes.json();
    if (!tgJson.ok) return res.status(500).json({ ok: false, error: tgJson.description || "Telegram error" });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || "Server error" });
  }
}
// Vercel serverless function. Set ANTHROPIC_API_KEY in project env vars.
const SYSTEM = 'Match the reader\'s request against these catalogue lines (id :: title :: author :: year :: genres :: blurb). Return ONLY JSON like {"ids":["id1","id2"]}, best match first, at most 20; empty array if nothing fits.';
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: "ANTHROPIC_API_KEY is not set" });
  const { query, catalogue } = req.body || {};
  if (typeof query !== "string" || typeof catalogue !== "string" || query.length > 300 || catalogue.length > 200000) return res.status(400).json({ error: "Bad request" });
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST", headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: "claude-haiku-4-5", max_tokens: 500, system: SYSTEM, messages: [{ role: "user", content: `Catalogue:\n${catalogue}\n\nRequest: ${query}` }] }),
  });
  if (!r.ok) return res.status(r.status === 429 ? 429 : 502).json({ error: "Search unavailable" });
  const data: any = await r.json();
  try { const m = (data.content?.[0]?.text ?? "{}").match(/\{[\s\S]*\}/); const ids = JSON.parse(m ? m[0] : "{}").ids; return res.status(200).json({ ids: Array.isArray(ids) ? ids : [] }); }
  catch { return res.status(200).json({ ids: [] }); }
}

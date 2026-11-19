// Netlify function (v2). Set ANTHROPIC_API_KEY in site env vars.
const SYSTEM = 'Match the reader\'s request against these catalogue lines (id :: title :: author :: year :: genres :: blurb). Return ONLY JSON like {"ids":["id1","id2"]}, best match first, at most 20; empty array if nothing fits.';
const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { "content-type": "application/json" } });
export default async (req: Request) => {
  if (req.method !== "POST") return json({ error: "POST only" }, 405);
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return json({ error: "ANTHROPIC_API_KEY is not set" }, 500);
  const { query, catalogue } = await req.json().catch(() => ({} as any));
  if (typeof query !== "string" || typeof catalogue !== "string" || query.length > 300 || catalogue.length > 200000) return json({ error: "Bad request" }, 400);
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST", headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: "claude-haiku-4-5", max_tokens: 500, system: SYSTEM, messages: [{ role: "user", content: `Catalogue:\n${catalogue}\n\nRequest: ${query}` }] }),
  });
  if (!r.ok) return json({ error: "Search unavailable" }, r.status === 429 ? 429 : 502);
  const data: any = await r.json();
  try { const m = (data.content?.[0]?.text ?? "{}").match(/\{[\s\S]*\}/); const ids = JSON.parse(m ? m[0] : "{}").ids; return json({ ids: Array.isArray(ids) ? ids : [] }); } catch { return json({ ids: [] }); }
};
export const config = { path: "/api/search" };

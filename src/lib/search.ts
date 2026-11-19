import type { Book } from "./derive";
const line = (b: Book) => `${b.id} :: ${b.title} :: ${b.author} :: ${b.year} :: ${b.genres.join(", ")} :: ${b.blurb.slice(0, 160)}`;
export function localSearch(q: string, books: Book[]): string[] {
  const t = q.toLowerCase().split(/\s+/).filter(Boolean);
  return books.filter((b) => { const hay = `${b.title} ${b.author} ${b.genres.join(" ")} ${b.blurb}`.toLowerCase(); return t.every((w) => hay.includes(w)); }).map((b) => b.id);
}
export async function smartSearch(q: string, books: Book[]): Promise<{ ids: string[]; ai: boolean }> {
  try {
    const res = await fetch("/api/search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query: q, catalogue: books.map(line).join("\n") }) });
    if (!res.ok) throw new Error(String(res.status));
    const { ids } = await res.json();
    const valid = new Set(books.map((b) => b.id));
    return { ids: (ids as string[]).filter((i) => valid.has(i)), ai: true };
  } catch { return { ids: localSearch(q, books), ai: false }; }
}

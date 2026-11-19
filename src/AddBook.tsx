import { useEffect, useState } from "react";
import type { RawBook, Status } from "./books";
import { STATUS_LABEL } from "./lib/derive";
type Hit = { title: string; author: string; year: number; pages: number; isbn: string; subjects: string[] };
const GENRE_HINTS: [RegExp, string][] = [[/fantasy|magic/i, "Fantasy"], [/romance|love stor/i, "Romance"], [/mystery|thriller|detective|crime/i, "Mystery & Thriller"], [/science fiction|sci-fi/i, "Sci-Fi"], [/horror|ghost/i, "Horror"], [/young adult|juvenile|teen/i, "Young Adult"], [/nonfiction|biograph|memoir|history|science(?! fiction)/i, "Nonfiction"], [/fiction|novel/i, "Fiction"]];
const guessGenres = (subs: string[]) => [...new Set(GENRE_HINTS.filter(([re]) => subs.some((s) => re.test(s))).map(([, g]) => g))].slice(0, 3);
const ALL = ["Fantasy", "Romance", "Mystery & Thriller", "Sci-Fi", "Horror", "Fiction", "Nonfiction", "Young Adult"];

export function AddBook({ genres, existing, onAdd, onClose }: { genres: string[]; existing: RawBook[]; onAdd: (b: RawBook) => void; onClose: () => void }) {
  const [q, setQ] = useState(""), [hits, setHits] = useState<Hit[]>([]), [busy, setBusy] = useState(false), [note, setNote] = useState("");
  const [f, setF] = useState({ title: "", author: "", year: "", pages: "", isbn: "" });
  const [sel, setSel] = useState<string[]>([]), [status, setStatus] = useState<Status>("tbr");
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && onClose(); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, [onClose]);

  const lookup = async () => {
    const s = q.trim(); if (!s) return; setBusy(true); setNote(""); setHits([]);
    try {
      const isIsbn = /^[\d-]{10,17}x?$/i.test(s), query = isIsbn ? `isbn:${s.replace(/-/g, "")}` : s;
      const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=6&fields=title,author_name,first_publish_year,number_of_pages_median,isbn,subject`);
      const data = await res.json();
      const list: Hit[] = (data.docs || []).map((d: any) => ({ title: d.title, author: (d.author_name || ["Unknown author"])[0], year: d.first_publish_year || 0, pages: d.number_of_pages_median || 0,
        isbn: (d.isbn || []).find((i: string) => i.length === 13) || (isIsbn ? s.replace(/-/g, "") : ""), subjects: (d.subject || []).slice(0, 25) }));
      setHits(list); if (!list.length) setNote("No matches. Fill in the details yourself below.");
    } catch { setNote("Lookup unavailable. Fill in the details yourself below."); }
    setBusy(false);
  };
  const pick = (h: Hit) => { setF({ title: h.title, author: h.author, year: h.year ? String(h.year) : "", pages: h.pages ? String(h.pages) : "", isbn: h.isbn }); setSel(guessGenres(h.subjects)); setHits([]); };
  const dup = existing.some((b) => b.title.toLowerCase() === f.title.trim().toLowerCase() && b.author.toLowerCase() === f.author.trim().toLowerCase());
  const ok = f.title.trim() && f.author.trim() && !dup;
  const submit = () => {
    if (!ok) return;
    const pages = Math.max(0, +f.pages || 0);
    onAdd({ id: `custom-${Date.now().toString(36)}`, title: f.title.trim(), author: f.author.trim(), year: +f.year || 0, pages, isbn: f.isbn.replace(/[^0-9Xx]/g, ""),
      genres: sel.length ? sel : ["Fiction"], blurb: "", rating: 0, status, page: status === "read" ? pages : 0,
      finished: status === "read" ? new Date().toLocaleString("en", { month: "short", year: "numeric" }) : "" });
  };
  const chips = [...new Set([...genres, ...ALL])];
  return (
    <div className="detail" role="dialog" aria-modal="true" aria-label="Add a book">
      <div className="backdrop" style={{ opacity: 1 }} onClick={onClose} />
      <div className="modal no-scrollbar">
        <p className="label">New volume</p><h2>Add a book</h2>
        <div className="lookup"><input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && lookup()} placeholder="Search by title or ISBN" aria-label="Search Open Library" autoFocus />
          <button onClick={lookup} disabled={busy}>{busy ? "Searching…" : "Look up"}</button></div>
        {note && <p className="note">{note}</p>}
        {hits.length > 0 && <ul className="hits">{hits.map((h, i) => <li key={i}><button onClick={() => pick(h)}><b>{h.title}</b> <span>{h.author}{h.year ? ` · ${h.year}` : ""}</span></button></li>)}</ul>}
        <div className="grid">
          <label>Title<input value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} /></label>
          <label>Author<input value={f.author} onChange={(e) => setF({ ...f, author: e.target.value })} /></label>
          <label>Pages<input inputMode="numeric" value={f.pages} onChange={(e) => setF({ ...f, pages: e.target.value.replace(/\D/g, "") })} /></label>
          <label>Year<input inputMode="numeric" value={f.year} onChange={(e) => setF({ ...f, year: e.target.value.replace(/\D/g, "") })} /></label>
          <label className="wide">ISBN (for the cover)<input value={f.isbn} onChange={(e) => setF({ ...f, isbn: e.target.value })} /></label>
        </div>
        <p className="label">Genres</p>
        <div className="status-set">{chips.map((g) => <button key={g} className={sel.includes(g) ? "on" : ""} aria-pressed={sel.includes(g)} onClick={() => setSel(sel.includes(g) ? sel.filter((x) => x !== g) : [...sel, g])}>{g}</button>)}</div>
        <p className="label">Status</p>
        <div className="status-set">{(["tbr", "reading", "read", "dnf"] as Status[]).map((s) => <button key={s} className={status === s ? "on" : ""} aria-pressed={status === s} onClick={() => setStatus(s)}>{STATUS_LABEL[s]}</button>)}</div>
        {dup && <p className="note">That book is already on your shelf.</p>}
        <div className="steps"><button onClick={submit} disabled={!ok}>Add to shelf</button><button onClick={onClose}>Cancel</button></div>
      </div>
    </div>
  );
}

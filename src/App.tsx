import { useEffect, useMemo, useRef, useState } from "react";
import { rawBooks, type RawBook, type Status } from "./books";
import { AddBook } from "./AddBook";
import { derive, groupSeries, readCoverPalette, STATUS_LABEL, type Book } from "./lib/derive";
import { smartSearch } from "./lib/search";
import { Shelf } from "./Shelf";
import { BookDetail } from "./BookDetail";

const FULL = "Welcome to my library";
function TypedTitle() {
  const [n, setN] = useState(0);
  useEffect(() => { if (n >= FULL.length) return; const t = setTimeout(() => setN(n + 1), 95); return () => clearTimeout(t); }, [n]);
  return <h1 aria-label={FULL}><span aria-hidden>{FULL.slice(0, n)}<i className={`caret ${n >= FULL.length ? "done" : ""}`} /></span></h1>;
}

export default function App() {
  // Books you add are saved in this browser (localStorage).
  const CKEY = "virtual-library:custom:v1";
  const [custom, setCustom] = useState<RawBook[]>(() => { try { return JSON.parse(localStorage.getItem(CKEY) || "[]"); } catch { return []; } });
  useEffect(() => { try { localStorage.setItem(CKEY, JSON.stringify(custom)); } catch { /* storage unavailable */ } }, [custom]);
  const [books, setBooks] = useState<Book[]>(() => [...custom, ...rawBooks].map(derive));
  const [adding, setAdding] = useState(false);
  const sampled = useRef(new Set<string>());
  const [query, setQuery] = useState(""), [genre, setGenre] = useState<string | null>(null);
  const [aiIds, setAiIds] = useState<string[] | null>(null), [status, setStatus] = useState("");
  const [open, setOpen] = useState<{ i: number; rect: DOMRect; ids: string[] } | null>(null);
  const [statusF, setStatusF] = useState<Status | null>(null);
  // Reading status and progress are saved in this browser (localStorage).
  const KEY = "virtual-library:status:v1";
  const [overlay, setOverlay] = useState<Record<string, { status: Status; page: number; cover?: string }>>(() => { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; } });
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(overlay)); } catch { /* storage unavailable */ } }, [overlay]);
  const live = useMemo(() => groupSeries(books.map((b) => (overlay[b.id] ? { ...b, status: overlay[b.id].status, page: overlay[b.id].page, ...(overlay[b.id].cover ? { cover: overlay[b.id].cover! } : {}) } : b))), [books, overlay]);
  const setBookState = (id: string, patch: { status?: Status; page?: number; cover?: string }) => setOverlay((o) => {
    const b = live.find((x) => x.id === id)!; const next = { ...{ status: b.status, page: b.page }, ...(o[id] ?? {}), ...patch } as { status: Status; page: number; cover?: string };
    if (patch.cover === "") delete next.cover;
    if (patch.status === "read") next.page = b.pages; if (patch.status === "tbr") next.page = 0;
    return { ...o, [id]: next };
  });
  const req = useRef(0);

  // Sample real spine colours from cover art once it loads (also for newly added books).
  useEffect(() => {
    books.forEach(async (b) => { if (!b.cover || sampled.current.has(b.id)) return; sampled.current.add(b.id);
      const p = await readCoverPalette(b.cover); if (p) setBooks((cur) => cur.map((x) => (x.id === b.id ? { ...x, ...p } : x))); });
  }, [books.length]); // eslint-disable-line react-hooks/exhaustive-deps
  const addBook = (rb: RawBook) => { setCustom((c) => [rb, ...c]); setBooks((cur) => [derive(rb), ...cur]); setAdding(false); };
  const recolor = async (id: string, src: string) => { if (!src) return; const p = await readCoverPalette(src); if (p) setBooks((cur) => cur.map((x) => (x.id === id ? { ...x, ...p } : x))); };
  const removeBook = (id: string) => { setCustom((c) => c.filter((b) => b.id !== id)); setBooks((cur) => cur.filter((b) => b.id !== id)); setOpen(null); };

  useEffect(() => {
    const q = query.trim(); const id = ++req.current;
    if (q.length < 2) { setAiIds(null); setStatus(""); return; }
    setStatus("Reading the shelves…");
    const t = setTimeout(async () => { const { ids } = await smartSearch(q, books); if (id !== req.current) return; setAiIds(ids); setStatus(`${ids.length} found`); }, 600);
    return () => clearTimeout(t);
  }, [query, books]);

  const genres = useMemo(() => { const c = new Map<string, number>(); live.forEach((b) => b.genres.forEach((g) => c.set(g, (c.get(g) || 0) + 1))); return [...c].sort((a, b) => b[1] - a[1]).map(([g]) => g); }, [live]);
  const shown = useMemo(() => {
    let list = live;
    if (aiIds) { const order = new Map(aiIds.map((id, i) => [id, i])); list = live.filter((b) => order.has(b.id)).sort((a, b) => order.get(a.id)! - order.get(b.id)!); }
    return list.filter((b) => (!genre || b.genres.includes(genre)) && (!statusF || b.status === statusF));
  }, [live, aiIds, genre, statusF]);

  // One shelf per genre (a book sits on the shelf of its first genre). Searching or filtering by genre gives a single shelf.
  const shelves = useMemo(() => {
    if (aiIds) return [{ label: "Search results", books: shown }];
    if (genre) return [{ label: genre, books: shown }];
    const m = new Map<string, Book[]>();
    shown.forEach((b) => { const g = b.genres[0] ?? "Unsorted"; if (!m.has(g)) m.set(g, []); m.get(g)!.push(b); });
    return [...m].sort((a, b) => b[1].length - a[1].length).map(([label, books]) => ({ label, books }));
  }, [shown, aiIds, genre]);
  const ordered = useMemo(() => shelves.flatMap((s) => s.books), [shelves]);
  const cur = open ? live.find((b) => b.id === open.ids[open.i]) ?? null : null;
  return (
    <div className="page grain">
      <div className="haze" />
      <header>
        <p className="label">Ex libris</p>
        <TypedTitle />
        <p className="orn" aria-hidden>❦</p>
        <p className="label count">{shown.length} {shown.length === 1 ? "volume" : "volumes"}</p>
        <div className="search">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="What are you looking for?" aria-label="Search the library" />
          <span className="label" aria-live="polite">{status}</span>
          <button className="add-btn" onClick={() => setAdding(true)}>+ Add a book</button>
        </div>
        <div className="pills no-scrollbar">
          <button className={!genre ? "on" : ""} onClick={() => setGenre(null)}>All</button>
          {genres.map((g) => <button key={g} className={genre === g ? "on" : ""} onClick={() => setGenre(genre === g ? null : g)}>{g}</button>)}
        </div>
        <div className="pills second no-scrollbar" aria-label="Filter by reading status">
          {(["reading", "tbr", "read", "dnf"] as Status[]).map((s) => (
            <button key={s} className={statusF === s ? "on" : ""} onClick={() => setStatusF(statusF === s ? null : s)}>{STATUS_LABEL[s]} · {live.filter((b) => b.status === s).length}</button>
          ))}
        </div>
      </header>
      <main>
        <div className="case"><div className="interior">
          {shelves.length ? shelves.map((s) => (
            <Shelf key={s.label} label={s.label} books={s.books} hiddenId={cur?.id ?? null}
              onOpen={(b, rect) => setOpen({ i: ordered.findIndex((x) => x.id === b.id), rect, ids: ordered.map((x) => x.id) })} />
          )) : <p className="empty">No books match. Try different words or clear the filters.</p>}
        </div></div>
      </main>
      {adding && <AddBook genres={genres} existing={books} onAdd={addBook} onClose={() => setAdding(false)} />}
      {open && cur && <BookDetail key="detail" book={cur} rect={open.rect} hasCustomCover={!!overlay[cur.id]?.cover} onChange={(p) => { setBookState(cur.id, p); if (p.cover !== undefined) recolor(cur.id, p.cover || books.find((x) => x.id === cur.id)?.cover || ""); }} onRemove={cur.id.startsWith("custom-") ? () => removeBook(cur.id) : undefined} onClose={() => setOpen(null)}
        onStep={(d) => setOpen({ ...open, i: open.i + d })} canStep={[open.i > 0, open.i < open.ids.length - 1]} />}
    </div>
  );
}

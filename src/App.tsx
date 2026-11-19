import { useEffect, useMemo, useRef, useState } from "react";
import { rawBooks } from "./books";
import { derive, readCoverPalette, type Book } from "./lib/derive";
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
  const [books, setBooks] = useState<Book[]>(() => rawBooks.map(derive));
  const [query, setQuery] = useState(""), [genre, setGenre] = useState<string | null>(null);
  const [aiIds, setAiIds] = useState<string[] | null>(null), [status, setStatus] = useState("");
  const [open, setOpen] = useState<{ i: number; rect: DOMRect } | null>(null);
  const req = useRef(0);

  // Sample real spine colours from cover art once it loads.
  useEffect(() => { let live = true;
    books.forEach(async (b) => { if (!b.cover) return; const p = await readCoverPalette(b.cover); if (p && live) setBooks((cur) => cur.map((x) => (x.id === b.id ? { ...x, ...p } : x))); });
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const q = query.trim(); const id = ++req.current;
    if (q.length < 2) { setAiIds(null); setStatus(""); return; }
    setStatus("Reading the shelves…");
    const t = setTimeout(async () => { const { ids } = await smartSearch(q, books); if (id !== req.current) return; setAiIds(ids); setStatus(`${ids.length} found`); }, 600);
    return () => clearTimeout(t);
  }, [query, books]);

  const genres = useMemo(() => { const c = new Map<string, number>(); books.forEach((b) => b.genres.forEach((g) => c.set(g, (c.get(g) || 0) + 1))); return [...c].sort((a, b) => b[1] - a[1]).map(([g]) => g); }, [books]);
  const shown = useMemo(() => {
    let list = books;
    if (aiIds) { const order = new Map(aiIds.map((id, i) => [id, i])); list = books.filter((b) => order.has(b.id)).sort((a, b) => order.get(a.id)! - order.get(b.id)!); }
    return genre ? list.filter((b) => b.genres.includes(genre)) : list;
  }, [books, aiIds, genre]);

  const cur = open ? shown[open.i] : null;
  return (
    <div className="page grain">
      <div className="haze" />
      <header>
        <p className="label">A personal archive</p>
        <TypedTitle />
        <p className="label count">{shown.length} {shown.length === 1 ? "volume" : "volumes"}</p>
        <div className="search">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="What are you looking for?" aria-label="Search the library" />
          <span className="label" aria-live="polite">{status}</span>
        </div>
        <div className="pills no-scrollbar">
          <button className={!genre ? "on" : ""} onClick={() => setGenre(null)}>All</button>
          {genres.map((g) => <button key={g} className={genre === g ? "on" : ""} onClick={() => setGenre(genre === g ? null : g)}>{g}</button>)}
        </div>
      </header>
      <main>
        {shown.length ? <Shelf books={shown} hiddenId={cur?.id ?? null} paused={!!open} onOpen={(i, rect) => setOpen({ i, rect })} />
          : <p className="empty">No books match. Try different words or clear the genre filter.</p>}
      </main>
      {open && cur && <BookDetail key="detail" book={cur} rect={open.rect} onClose={() => setOpen(null)}
        onStep={(d) => setOpen({ ...open, i: open.i + d })} canStep={[open.i > 0, open.i < shown.length - 1]} />}
    </div>
  );
}

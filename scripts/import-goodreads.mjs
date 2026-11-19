// Usage: npm run import -- goodreads_library_export.csv  -> rewrites src/books.ts
import fs from "node:fs";
const file = process.argv[2]; if (!file) { console.error("Pass the Goodreads CSV path"); process.exit(1); }
function parse(t) { const rows = []; let row = [], f = "", q = false;
  for (let i = 0; i < t.length; i++) { const c = t[i];
    if (q) { if (c === '"') { if (t[i+1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true; else if (c === ",") { row.push(f); f = ""; }
    else if (c === "\n") { row.push(f); rows.push(row); row = []; f = ""; } else if (c !== "\r") f += c; }
  if (f || row.length) { row.push(f); rows.push(row); } return rows; }
const [head, ...rows] = parse(fs.readFileSync(file, "utf8")); const ix = (n) => head.indexOf(n);
const GENRES = { "sci-fi": "Sci-Fi", "science-fiction": "Sci-Fi", fantasy: "Fantasy", romance: "Romance", mystery: "Mystery & Thriller", thriller: "Mystery & Thriller", "literary-fiction": "Fiction", fiction: "Fiction", nonfiction: "Nonfiction" };
const mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const out = rows.filter((r) => ["read", "currently-reading"].includes(r[ix("Exclusive Shelf")])).map((r) => {
  const shelves = (r[ix("Bookshelves")] || "").split(/,\s*/).map((s) => GENRES[s.toLowerCase()]).filter(Boolean);
  const d = r[ix("Date Read")] ? new Date(r[ix("Date Read")]) : null;
  const title = r[ix("Title")], isbn = (r[ix("ISBN13")] || r[ix("ISBN")] || "").replace(/[="]/g, "");
  return { id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40) + "-" + (isbn || Math.random().toString(36).slice(2, 6)), title, author: r[ix("Author")], year: +r[ix("Original Publication Year")] || +r[ix("Year Published")] || 0, pages: +r[ix("Number of Pages")] || 300, isbn, genres: shelves.length ? [...new Set(shelves)] : ["Nonfiction"], blurb: "", rating: +r[ix("My Rating")] || 0, finished: d && !isNaN(+d) ? `${mon[d.getMonth()]} ${d.getFullYear()}` : "", publisher: r[ix("Publisher")] || "", _t: d ? +d : 0 };
}).sort((a, b) => b._t - a._t).map(({ _t, ...b }) => b);
fs.writeFileSync("src/books.ts", `export type RawBook = { id: string; title: string; author: string; year: number; pages: number; isbn: string; genres: string[]; blurb: string; rating: number; finished: string; publisher?: string };\nexport const rawBooks: RawBook[] = ${JSON.stringify(out, null, 2)};\n`);
console.log(`Wrote ${out.length} books to src/books.ts`);

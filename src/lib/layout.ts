// Packs genre sections into bookcase rows: small genres share a row (as compartments),
// big genres continue onto the next row. Widths are the spine widths in px.
export type Comp<T> = { key: string; label: string; total: number; cont: boolean; books: T[] };
const PAD = 28, DIV = 14, MINW = 190, MIN_BOOKS = 3, unit = (b: { width: number }) => b.width + 1;
export function packRows<T extends { width: number }>(shelves: { label: string; books: T[] }[], W: number): Comp<T>[][] {
  const rows: Comp<T>[][] = [[]]; let used = 0;
  for (const s of shelves) {
    let rest = s.books.slice(), part = 0;
    while (rest.length) {
      const row = rows[rows.length - 1], avail = W - used - (row.length ? DIV : 0);
      let n = 0, acc = 0;
      while (n < rest.length && Math.max(acc + unit(rest[n]) + PAD, MINW) <= avail) { acc += unit(rest[n]); n++; }
      if (n < Math.min(MIN_BOOKS, rest.length) && row.length) { rows.push([]); used = 0; continue; }
      if (n === 0) n = 1;
      const take = rest.slice(0, n); rest = rest.slice(n);
      used += Math.max(take.reduce((a, b) => a + unit(b), 0) + PAD, MINW) + (row.length ? DIV : 0);
      row.push({ key: `${s.label}-${part}`, label: s.label, total: s.books.length, cont: part > 0, books: take }); part++;
    }
  }
  return rows.filter((r) => r.length);
}
export const compWidth = (books: { width: number }[]) => Math.max(books.reduce((a, b) => a + unit(b), 0) + PAD, MINW);

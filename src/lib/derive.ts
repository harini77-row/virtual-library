import type { RawBook } from "../books";
export type Book = RawBook & {
  cover: string; binding: "hardcover" | "paperback" | "mass"; finish: "cloth" | "gloss" | "matte";
  spine: string; band: string; ink: string; face: "serif" | "sans" | "mono"; caps: boolean;
  width: number; height: number; lean: number; depth: number; wear: number;
};
const hash = (s: string) => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const r = (h: number, i: number) => ((h >>> (i * 3)) & 1023) / 1023;
export function derive(b: RawBook): Book {
  const h = hash(b.id + b.title), p = b.pages || 300;
  const binding = p > 420 ? "hardcover" : p < 260 ? "mass" : "paperback";
  const finish = binding === "hardcover" ? "cloth" : r(h, 1) > 0.5 ? "gloss" : "matte";
  const height = Math.round(binding === "hardcover" ? 236 + r(h, 2) * 18 : binding === "mass" ? 196 + r(h, 2) * 14 : 214 + r(h, 2) * 16);
  const hue = h % 360;
  return {
    ...b, cover: b.isbn ? `https://covers.openlibrary.org/b/isbn/${b.isbn}-L.jpg?default=false` : "",
    binding, finish, height, width: Math.round(Math.min(58, Math.max(16, p * 0.055 + r(h, 3) * 4))),
    spine: `hsl(${hue} 32% 28%)`, band: `hsl(${(hue + 30) % 360} 45% 55%)`, ink: "#faf7f0",
    face: (["serif", "sans", "mono"] as const)[h % 3], caps: r(h, 4) > 0.6,
    lean: -Math.round(r(h, 5) * 50) / 10, depth: Math.round((r(h, 6) * 14 - 7) * 10) / 10, wear: Math.round(r(h, 7) * 35) / 100,
  };
}
export function readCoverPalette(src: string): Promise<{ spine: string; band: string; ink: string } | null> {
  return new Promise((res) => {
    const img = new Image(); img.crossOrigin = "anonymous";
    img.onerror = () => res(null);
    img.onload = () => { try {
      const w = 80, h = Math.round((img.height / img.width) * w), c = document.createElement("canvas"); c.width = w; c.height = h;
      const x = c.getContext("2d")!; x.drawImage(img, 0, 0, w, h);
      const ew = Math.max(1, Math.round(w * 0.06)), e = x.getImageData(0, 0, ew, h).data; let R = 0, G = 0, B = 0, n = 0;
      for (let i = 0; i < e.length; i += 4) { R += e[i]; G += e[i + 1]; B += e[i + 2]; n++; }
      R /= n; G /= n; B /= n;
      const all = x.getImageData(0, 0, w, h).data; let best = [R, G, B], bs = 0;
      for (let i = 0; i < all.length; i += 4) { const mx = Math.max(all[i], all[i+1], all[i+2]), mn = Math.min(all[i], all[i+1], all[i+2]), l = (mx + mn) / 510, s = mx === mn ? 0 : (mx - mn) / 255;
        if (l > 0.25 && l < 0.75 && s > bs) { bs = s; best = [all[i], all[i+1], all[i+2]]; } }
      const lum = (0.299 * R + 0.587 * G + 0.114 * B) / 255;
      res({ spine: `rgb(${R|0} ${G|0} ${B|0})`, band: `rgb(${best.map(v => v|0).join(" ")})`, ink: lum > 0.55 ? "#241f19" : "#faf7f0" });
    } catch { res(null); } };
    img.src = src;
  });
}

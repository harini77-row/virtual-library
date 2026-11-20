import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { STATUS_LABEL, type Book } from "./lib/derive";
export const COVER_W = 178;
const SHEEN: Record<Book["finish"], string> = {
  cloth: "linear-gradient(90deg,rgba(0,0,0,.28),rgba(255,255,255,.05) 40%,rgba(0,0,0,.3))",
  gloss: "linear-gradient(90deg,rgba(0,0,0,.2),rgba(255,255,255,.28) 35%,rgba(0,0,0,.25))",
  matte: "linear-gradient(90deg,rgba(0,0,0,.18),rgba(255,255,255,.06) 45%,rgba(0,0,0,.22))",
};
const TIMES = '"Times New Roman", Times, serif';
const FONT = { serif: TIMES, sans: TIMES, mono: TIMES };
// Picks a font size (and 1 or 2 lines) so the title fits the spine instead of being clipped.
function fitTitle(title: string, w: number, h: number, caps: boolean, face: Book["face"]) {
  // Times averages about half an em per glyph (incl. letter-spacing)
  const base = 0.53, avail = h - 44, cw = caps ? base * 1.3 : base; let best = { size: 8.5, lines: 1 };
  for (const lines of w >= 34 ? [1, 2] : [1]) {
    const size = Math.min(16, (w - 6) / (lines * 1.2), avail / (Math.ceil(title.length / lines) * cw));
    if (size > best.size) best = { size: Math.round(size * 10) / 10, lines };
  }
  return best;
}
type Props = { book: Book; hidden: boolean; onOpen: (r: DOMRect) => void };
export function BookSpine({ book: b, hidden, onOpen }: Props) {
  const btn = useRef<HTMLButtonElement>(null);
  const timer = useRef<number>();
  const [hover, setHover] = useState(false);
  const title = b.title.split(":")[0].trim(), t = fitTitle(title, b.width, b.height, b.caps, b.face);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [coverOk, setCoverOk] = useState(true);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => setCoverOk(true), [b.cover]);
  const enter = () => { window.clearTimeout(timer.current); setRect(btn.current!.getBoundingClientRect()); setHover(true); };
  const leave = () => { timer.current = window.setTimeout(() => setHover(false), 90); };
  const pull = hover ? 96 : 0, lift = hover ? -26 : 0, lean = hover ? 0 : b.lean;
  return (
    // Outer button never moves, so the pointer target stays put while the book travels.
    <button ref={btn} className="spine-hit" data-status={b.status} aria-label={`${b.title} by ${b.author}`}
      style={{ width: b.width, height: b.height, zIndex: hover ? 40 : 1, opacity: hidden ? 0 : 1 }}
      onMouseEnter={enter} onMouseLeave={leave} onFocus={enter} onBlur={leave}
      onClick={() => onOpen(btn.current!.getBoundingClientRect())}>
      <span className="spine" style={{ background: b.spine, transform: `rotateY(var(--ry,0deg)) rotateZ(${lean}deg) translateZ(${pull + b.depth}px) translateY(${lift}px)` }}>
        <span className="rule" style={{ top: 10 }} /><span className="rule" style={{ bottom: 10 }} />
        <span className="vt" style={{ color: b.ink, fontFamily: FONT[b.face], textTransform: b.caps ? "uppercase" : "none", fontSize: t.size, lineHeight: t.lines === 1 ? `${b.width}px` : 1.15, whiteSpace: t.lines === 1 ? "nowrap" : "normal" }}>
          {title}
        </span>
        <span className="sheen" style={{ background: SHEEN[b.finish] }} />
        {b.status === "dnf" && <span className="wash" />}
        {b.status === "reading" && <span className="ribbon" />}
        <span className="wear" style={{ opacity: b.wear }} />
        <span className="cover-face" style={{ width: COVER_W, background: b.spine }}>
          {b.cover && coverOk ? <img src={b.cover} alt="" onError={() => setCoverOk(false)} /> : <span className="cover-fallback" style={{ color: b.ink }}><b>{b.title}</b><i>{b.author}</i></span>}
        </span>
      </span>
      {hover && rect && createPortal(
        <div className="hover-card" style={{ left: rect.left + rect.width / 2, top: Math.max(8, rect.top - 14) }} onMouseEnter={enter} onMouseLeave={leave}>
          <h3>{b.title.split(":")[0]}</h3><p>{b.author}</p>
          <small>{[b.year || null, b.binding, b.rating ? "★".repeat(b.rating) : "Unrated"].filter(Boolean).join("  ")}</small>
          <small>{b.genres.join(", ")}</small>
          <small>{STATUS_LABEL[b.status]}{b.status === "reading" && b.pages ? ` · ${Math.round((b.page / b.pages) * 100)}%` : ""}</small>
        </div>, document.body)}
    </button>
  );
}

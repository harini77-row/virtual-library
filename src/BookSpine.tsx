import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Book } from "./lib/derive";
export const COVER_W = 178;
const SHEEN: Record<Book["finish"], string> = {
  cloth: "linear-gradient(90deg,rgba(0,0,0,.28),rgba(255,255,255,.05) 40%,rgba(0,0,0,.3))",
  gloss: "linear-gradient(90deg,rgba(0,0,0,.2),rgba(255,255,255,.28) 35%,rgba(0,0,0,.25))",
  matte: "linear-gradient(90deg,rgba(0,0,0,.18),rgba(255,255,255,.06) 45%,rgba(0,0,0,.22))",
};
const FONT = { serif: "var(--font-display)", sans: "var(--font-sans)", mono: "var(--font-mono)" };
type Props = { book: Book; hidden: boolean; onOpen: (r: DOMRect) => void };
export function BookSpine({ book: b, hidden, onOpen }: Props) {
  const btn = useRef<HTMLButtonElement>(null);
  const timer = useRef<number>();
  const [hover, setHover] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [coverOk, setCoverOk] = useState(true);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const enter = () => { window.clearTimeout(timer.current); setRect(btn.current!.getBoundingClientRect()); setHover(true); };
  const leave = () => { timer.current = window.setTimeout(() => setHover(false), 90); };
  const pull = hover ? 96 : 0, lift = hover ? -26 : 0, lean = hover ? 0 : b.lean;
  return (
    // Outer button never moves, so the pointer target stays put while the book travels.
    <button ref={btn} className="spine-hit" aria-label={`${b.title} by ${b.author}`}
      style={{ width: b.width, height: b.height, zIndex: hover ? 40 : 1, opacity: hidden ? 0 : 1 }}
      onMouseEnter={enter} onMouseLeave={leave} onFocus={enter} onBlur={leave}
      onClick={() => onOpen(btn.current!.getBoundingClientRect())}>
      <span className="spine" style={{ background: b.spine, transform: `rotateY(var(--ry,0deg)) rotateZ(${lean}deg) translateZ(${pull + b.depth}px) translateY(${lift}px)` }}>
        {b.cover && coverOk && <img src={b.cover} alt="" className="spine-art" onError={() => setCoverOk(false)} />}
        <span className="rule" style={{ background: b.band, top: 10 }} /><span className="rule" style={{ background: b.band, bottom: 10 }} />
        <span className="vt" style={{ color: b.ink, fontFamily: FONT[b.face], textTransform: b.caps ? "uppercase" : "none", fontSize: Math.min(15, b.width * 0.5 + 3) }}>
          {b.title.split(":")[0]}
        </span>
        <span className="sheen" style={{ background: SHEEN[b.finish] }} />
        <span className="wear" style={{ opacity: b.wear }} />
        <span className="cover-face" style={{ width: COVER_W, background: b.spine }}>
          {b.cover && coverOk ? <img src={b.cover} alt="" /> : <span className="cover-fallback" style={{ color: b.ink }}><b>{b.title}</b><i>{b.author}</i></span>}
        </span>
      </span>
      {hover && rect && createPortal(
        <div className="hover-card" style={{ left: rect.left + rect.width / 2, top: Math.max(8, rect.top - 14) }} onMouseEnter={enter} onMouseLeave={leave}>
          <h3>{b.title.split(":")[0]}</h3><p>{b.author}</p>
          <small>{[b.year || null, b.binding, b.rating ? "★".repeat(b.rating) : "Unrated"].filter(Boolean).join("  ")}</small>
          <small>{b.genres.join(", ")}</small>
        </div>, document.body)}
    </button>
  );
}

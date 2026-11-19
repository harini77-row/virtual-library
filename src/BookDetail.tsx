import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Book } from "./lib/derive";
type Props = { book: Book; rect: DOMRect; onClose: () => void; onStep: (d: number) => void; canStep: [boolean, boolean] };
export function BookDetail({ book: b, rect, onClose, onStep, canStep }: Props) {
  const [out, setOut] = useState(false), [leaving, setLeaving] = useState(false), [coverOk, setCoverOk] = useState(true);
  const vw = window.innerWidth, vh = window.innerHeight, narrow = vw < 720;
  const coverH = narrow ? vh * 0.42 : Math.min(vh * 0.6, 480), coverW = coverH * 0.66;
  const x = narrow ? (vw - coverW) / 2 : Math.max(24, vw / 2 - coverW - 40), y = narrow ? 72 : (vh - coverH) / 2;
  const from = `translate(${rect.left - x}px,${rect.top - y}px) scale(${rect.width / coverW},${rect.height / coverH})`;
  const first = useRef(true);
  useLayoutEffect(() => { setOut(false); first.current = true; const id = requestAnimationFrame(() => requestAnimationFrame(() => setOut(true))); return () => cancelAnimationFrame(id); }, [b.id]);
  const close = () => { setLeaving(true); setOut(false); window.setTimeout(onClose, 620); };
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") close(); if (e.key === "ArrowLeft" && canStep[0]) onStep(-1); if (e.key === "ArrowRight" && canStep[1]) onStep(1); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  });
  return (
    <div className="detail" role="dialog" aria-modal="true" aria-label={b.title}>
      <div className="backdrop" style={{ opacity: out ? 1 : 0 }} onClick={close} />
      <div className="detail-cover" style={{ left: x, top: y, width: coverW, height: coverH, background: b.spine, transformOrigin: "top left",
        transform: out ? "none" : from, transition: "transform 900ms cubic-bezier(0.16,1,0.3,1)" }}>
        {b.cover && coverOk ? <img src={b.cover} alt={`Cover of ${b.title}`} onError={() => setCoverOk(false)} />
          : <div className="cover-fallback big" style={{ color: b.ink }}><b>{b.title}</b><i>{b.author}</i></div>}
      </div>
      <div className="detail-panel" style={{ opacity: out && !leaving ? 1 : 0, transform: out && !leaving ? "none" : "translateY(14px)",
        left: narrow ? 24 : x + coverW + 56, top: narrow ? y + coverH + 24 : y, right: 24 }}>
        <p className="label">{b.finished ? `Finished ${b.finished}` : "On the shelf"}</p>
        <h2>{b.title}</h2><p className="author">{b.author}</p>
        {b.blurb && <p className="blurb">{b.blurb}</p>}
        <p className="stars">{b.rating ? "★".repeat(b.rating) + "☆".repeat(5 - b.rating) : "Unrated"}</p>
        <div className="steps">
          <button disabled={!canStep[0]} onClick={() => onStep(-1)}>Previous</button>
          <button disabled={!canStep[1]} onClick={() => onStep(1)}>Next</button>
          <button onClick={close}>Shelve it</button>
        </div>
      </div>
    </div>
  );
}

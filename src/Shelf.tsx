import { useCallback, useEffect, useRef, useState } from "react";
import { BookSpine } from "./BookSpine";
import type { Book } from "./lib/derive";
export function Shelf({ books, hiddenId, onOpen, paused }: { books: Book[]; hiddenId: string | null; onOpen: (i: number, r: DOMRect) => void; paused: boolean }) {
  const rail = useRef<HTMLDivElement>(null);
  const [overflowing, setOverflowing] = useState(false);
  const curve = useCallback(() => {
    const el = rail.current; if (!el) return;
    const rb = el.getBoundingClientRect(), mid = rb.left + rb.width / 2;
    el.querySelectorAll<HTMLElement>(".spine-hit").forEach((s) => {
      const b = s.getBoundingClientRect(), t = Math.max(-1, Math.min(1, (b.left + b.width / 2 - mid) / (rb.width / 2)));
      s.style.setProperty("--ry", `${(-Math.sign(t) * Math.pow(Math.abs(t), 1.35) * 34).toFixed(2)}deg`);
    });
    setOverflowing(el.scrollWidth > el.clientWidth + 4);
  }, []);
  useEffect(() => {
    const el = rail.current!; curve();
    const wheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; // already a sideways gesture
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 4) return; // shelf fits on screen: let the page scroll
      if ((e.deltaY < 0 && el.scrollLeft <= 0) || (e.deltaY > 0 && el.scrollLeft >= max - 1)) return; // at either end: let the page scroll
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", wheel, { passive: false });
    const ro = new ResizeObserver(curve); ro.observe(el);
    return () => { el.removeEventListener("wheel", wheel); ro.disconnect(); };
  }, [curve, books]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => { if (paused || (e.target as HTMLElement).tagName === "INPUT") return;
      if (e.key === "ArrowRight") rail.current!.scrollBy({ left: 320, behavior: "smooth" });
      if (e.key === "ArrowLeft") rail.current!.scrollBy({ left: -320, behavior: "smooth" }); };
    window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key);
  }, [paused]);
  const drag = useRef<{ x: number; s: number } | null>(null);
  return (
    <div className="shelf-wrap">
      <div ref={rail} className={`rail no-scrollbar ${overflowing ? "" : "centered"}`} onScroll={curve}
        onPointerDown={(e) => { if (e.pointerType === "mouse") drag.current = { x: e.clientX, s: rail.current!.scrollLeft }; }}
        onPointerMove={(e) => { if (drag.current && e.buttons === 1) rail.current!.scrollLeft = drag.current.s - (e.clientX - drag.current.x); }}
        onPointerUp={() => (drag.current = null)} onPointerLeave={() => (drag.current = null)}>
        {books.map((b, i) => <BookSpine key={b.id} book={b} hidden={hiddenId === b.id} onOpen={(r) => onOpen(i, r)} />)}
      </div>
      {overflowing && <><div className="fade l" /><div className="fade r" /></>}
      <div className="ground" />
    </div>
  );
}
import { useCallback, useEffect, useRef, useState } from "react";
import { BookSpine } from "./BookSpine";
import type { Book } from "./lib/derive";
type Props = { label: string; books: Book[]; hiddenId: string | null; onOpen: (b: Book, r: DOMRect) => void };
export function Shelf({ label, books, hiddenId, onOpen }: Props) {
  const rail = useRef<HTMLDivElement>(null);
  const [more, setMore] = useState({ l: false, r: false });
  const check = useCallback(() => {
    const el = rail.current; if (!el) return;
    setMore({ l: el.scrollLeft > 4, r: el.scrollLeft < el.scrollWidth - el.clientWidth - 4 });
  }, []);
  useEffect(() => {
    const el = rail.current!; check();
    const wheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 4) return; // shelf fits on screen: let the page scroll
      if ((e.deltaY < 0 && el.scrollLeft <= 0) || (e.deltaY > 0 && el.scrollLeft >= max - 1)) return; // at either end: let the page scroll
      e.preventDefault(); el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", wheel, { passive: false });
    const ro = new ResizeObserver(check); ro.observe(el);
    return () => { el.removeEventListener("wheel", wheel); ro.disconnect(); };
  }, [check, books]);
  const drag = useRef<{ x: number; s: number } | null>(null), moved = useRef(false);
  return (
    <section className="shelf" aria-label={`${label} shelf`}>
      <div ref={rail} className="rail no-scrollbar" onScroll={check}
        onPointerDown={(e) => { if (e.pointerType === "mouse") { drag.current = { x: e.clientX, s: rail.current!.scrollLeft }; moved.current = false; } }}
        onPointerMove={(e) => { if (drag.current && e.buttons === 1) { const dx = e.clientX - drag.current.x; if (Math.abs(dx) > 5) moved.current = true; rail.current!.scrollLeft = drag.current.s - dx; } }}
        onPointerUp={() => (drag.current = null)} onPointerLeave={() => (drag.current = null)}
        onClickCapture={(e) => { if (moved.current) { e.stopPropagation(); e.preventDefault(); moved.current = false; } }}>
        {books.map((b) => <BookSpine key={b.id} book={b} hidden={hiddenId === b.id} onOpen={(r) => onOpen(b, r)} />)}
      </div>
      {more.l && <div className="fade l" />}{more.r && <div className="fade r" />}
      <div className="plank"><span className="plate">{label} · {books.length}</span></div>
    </section>
  );
}

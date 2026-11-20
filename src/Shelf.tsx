import { BookSpine } from "./BookSpine";
import type { Book } from "./lib/derive";
import { compWidth, type Comp } from "./lib/layout";
type Props = { comp: Comp<Book>; hiddenId: string | null; onOpen: (b: Book, r: DOMRect) => void };
// One section of a bookcase row: the books standing on a plank, with a brass genre plate.
export function Compartment({ comp, hiddenId, onOpen }: Props) {
  const w = compWidth(comp.books);
  return (
    <section className="comp" aria-label={`${comp.label} shelf`} style={{ flexBasis: w, minWidth: Math.min(w, 190) }}>
      <div className="books">
        {comp.books.map((b) => <BookSpine key={b.id} book={b} hidden={hiddenId === b.id} onOpen={(r) => onOpen(b, r)} />)}
      </div>
      <div className="plank"><span className="plate">{comp.cont ? `${comp.label} (cont.)` : `${comp.label} · ${comp.total}`}</span></div>
    </section>
  );
}

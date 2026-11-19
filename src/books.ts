// SAMPLE DATA. Replace by running `npm run import -- goodreads_library_export.csv`
export type RawBook = { id: string; title: string; author: string; year: number; pages: number; isbn: string; genres: string[]; blurb: string; rating: number; finished: string; publisher?: string };
export const rawBooks: RawBook[] = [
  { id: "hail-mary", title: "Project Hail Mary", author: "Andy Weir", year: 2021, pages: 476, isbn: "0593135202", genres: ["Sci-Fi"], blurb: "A lone astronaut wakes with no memory and a world to save.", rating: 5, finished: "Oct 2026" },
  { id: "night-circus", title: "The Night Circus", author: "Erin Morgenstern", year: 2011, pages: 400, isbn: "0307744434", genres: ["Fantasy", "Romance"], blurb: "Two rival magicians bound to a circus that appears without warning.", rating: 4, finished: "Sep 2026" },
  { id: "gone-girl", title: "Gone Girl", author: "Gillian Flynn", year: 2012, pages: 432, isbn: "0307588378", genres: ["Mystery & Thriller"], blurb: "A wife vanishes on her anniversary and her husband becomes the suspect.", rating: 4, finished: "Aug 2026" },
  { id: "morrie", title: "Tuesdays with Morrie", author: "Mitch Albom", year: 1997, pages: 192, isbn: "076790592X", genres: ["Nonfiction"], blurb: "A memoir of weekly conversations with a dying professor.", rating: 0, finished: "Jul 2026" },
  { id: "dune", title: "Dune", author: "Frank Herbert", year: 1965, pages: 688, isbn: "0441013597", genres: ["Sci-Fi", "Fiction"], blurb: "Politics, prophecy and spice on the desert planet Arrakis.", rating: 5, finished: "Jun 2026" },
  { id: "hobbit", title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, pages: 300, isbn: "0547928220", genres: ["Fantasy"], blurb: "Bilbo Baggins is swept into a quest to reclaim a dragon's treasure.", rating: 5, finished: "May 2026" },
  { id: "pride", title: "Pride and Prejudice", author: "Jane Austen", year: 1813, pages: 480, isbn: "0141439513", genres: ["Fiction", "Romance"], blurb: "Elizabeth Bennet and Mr Darcy misjudge each other, wittily.", rating: 4, finished: "Apr 2026" },
];

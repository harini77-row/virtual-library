// Home library, imported from library_20261119_203714.csv
export type Status = "tbr" | "reading" | "read" | "dnf";
export type RawBook = { id: string; title: string; author: string; year: number; pages: number; isbn: string; genres: string[]; blurb: string; rating: number; finished: string; publisher?: string; status?: Status; page?: number; cover?: string; series?: string; seriesNo?: number };
export const rawBooks: RawBook[] = [
 {
  "id": "ruthless-vows-8267",
  "title": "Ruthless Vows",
  "author": "Rebecca Ross",
  "year": 2024,
  "pages": 0,
  "isbn": "9780008588267",
  "genres": [
   "Fantasy",
   "Romance",
   "Young Adult"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "",
  "series": "Letters of Enchantment",
  "seriesNo": 2
 },
 {
  "id": "little-life-5038",
  "title": "Little Life",
  "author": "Hanya Yanagihara",
  "year": 2023,
  "pages": 0,
  "isbn": "9781035035038",
  "genres": [
   "Fiction"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": ""
 },
 {
  "id": "the-man-on-hackpen-hill-9595",
  "title": "The Man on Hackpen Hill",
  "author": "J. S. Monroe",
  "year": 2022,
  "pages": 0,
  "isbn": "9781838939595",
  "genres": [
   "Mystery & Thriller"
  ],
  "blurb": "Her best friend is dead and she needs to know why. A mysterious letter leads a young journalist to a crop circle in Wiltshire.",
  "rating": 0,
  "finished": "",
  "publisher": "Aries Book"
 },
 {
  "id": "divine-rivals-8199",
  "title": "Divine Rivals",
  "author": "Rebecca Ross",
  "year": 2023,
  "pages": 368,
  "isbn": "9780008588199",
  "genres": [
   "Fantasy",
   "Romance",
   "Young Adult"
  ],
  "blurb": "When two young rival journalists find love through a magical connection, they must face the depths of hell, in a war among gods, to seal their fate forever.. After centuries of sleep, the gods are warring again.",
  "rating": 0,
  "finished": "",
  "publisher": "Magpie",
  "series": "Letters of Enchantment",
  "seriesNo": 1
 },
 {
  "id": "aristotle-and-dante-dive-into-the-wa-5278",
  "title": "Aristotle and Dante Dive Into the Waters of the World",
  "author": "Benjamin Alire Sáenz",
  "year": 2021,
  "pages": 368,
  "isbn": "9781398505278",
  "genres": [
   "Fiction",
   "Young Adult",
   "Romance"
  ],
  "blurb": "The highly anticipated sequel to the beloved cult classic about family, friendship and first love, from award-winning author Benjamin Alire Sáenz.",
  "rating": 0,
  "finished": "",
  "publisher": "Simon & Schuster Children's",
  "series": "Aristotle and Dante",
  "seriesNo": 2
 },
 {
  "id": "the-son-of-neptune-5735",
  "title": "The Son of Neptune",
  "author": "Rick Riordan",
  "year": 2012,
  "pages": 528,
  "isbn": "9780141335735",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "This is the second title in this number one, bestselling spin-off series from Percy Jackson creator, Rick Riordan. This crazy messed up world of gods and monsters is Percy Jackson's reality, which pretty much sucks for him.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin",
  "series": "Heroes of Olympus",
  "seriesNo": 2
 },
 {
  "id": "the-mark-of-athena-5766",
  "title": "The Mark of Athena",
  "author": "Rick Riordan",
  "year": 2013,
  "pages": 608,
  "isbn": "9780141335766",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Penguin Books Ltd",
  "series": "Heroes of Olympus",
  "seriesNo": 3
 },
 {
  "id": "house-of-earth-and-blood-6172",
  "title": "House of Earth and Blood",
  "author": "Sarah J. Maas",
  "year": 0,
  "pages": 0,
  "isbn": "9781526626172",
  "genres": [
   "Fantasy",
   "Romance"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": ""
 },
 {
  "id": "sherlock-holmes-the-complete-novels-2426",
  "title": "Sherlock Holmes: The Complete Novels and Stories, Volume II",
  "author": "Arthur Conan Doyle",
  "year": 1986,
  "pages": 768,
  "isbn": "9780553212426",
  "genres": [
   "Mystery & Thriller",
   "Fiction"
  ],
  "blurb": "Sherlock HolmesThe Complete Novels and StoriesVolume IISince his first appearance in Beeton’s Christmas Annual in 1887, Sir Arthur Conan Doyle’s Sherlock Holmes has been one of the most beloved fictional characters ever created.",
  "rating": 0,
  "finished": "",
  "publisher": "Bantam Classics"
 },
 {
  "id": "gone-girl-1359",
  "title": "Gone Girl",
  "author": "Gillian Flynn",
  "year": 2012,
  "pages": 399,
  "isbn": "9781780221359",
  "genres": [
   "Mystery & Thriller"
  ],
  "blurb": "The protagonists of Gone Girl are a young couple, Nick and Amy. Nick used to work as a journalist, till he lost his job. Due to the lack of income, the couple shifted their residence from New York to Nick's hometown of Carthage.",
  "rating": 0,
  "finished": "",
  "publisher": "W&N"
 },
 {
  "id": "the-burning-maze-4001",
  "title": "The Burning Maze",
  "author": "Rick Riordan",
  "year": 2018,
  "pages": 448,
  "isbn": "9780141364001",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "I was a god, once. Until I was cast out by my father, Zeus. Now I'm an awkward mortal teenager called Lester. My way out. A series of scary and dangerous trials, of course.",
  "rating": 0,
  "finished": "",
  "publisher": "Penguin UK",
  "series": "The Trials of Apollo",
  "seriesNo": 3
 },
 {
  "id": "the-frighteners-4506",
  "title": "The Frighteners",
  "author": "Stephen Laws",
  "year": 1991,
  "pages": 464,
  "isbn": "9780450554506",
  "genres": [
   "Horror"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Hodder & Stoughton Ltd"
 },
 {
  "id": "aristotle-and-dante-discover-the-sec-8937",
  "title": "Aristotle and Dante Discover the Secrets of the Universe",
  "author": "Benjamin Alire Sáenz",
  "year": 2014,
  "pages": 368,
  "isbn": "9781442408937",
  "genres": [
   "Fiction",
   "Young Adult",
   "Romance"
  ],
  "blurb": "This Printz Honor Book is a “tender, honest exploration of identity” (Publishers Weekly) that distills lyrical truths about family and friendship.Aristotle is an angry teen with a brother in prison.",
  "rating": 0,
  "finished": "",
  "publisher": "Simon & Schuster Books for Young Readers",
  "series": "Aristotle and Dante",
  "seriesNo": 1
 },
 {
  "id": "the-cruel-prince-7277",
  "title": "The Cruel Prince",
  "author": "Holly Black",
  "year": 2018,
  "pages": 384,
  "isbn": "9781471407277",
  "genres": [
   "Fantasy",
   "Romance",
   "Young Adult"
  ],
  "blurb": "One terrible morning, Jude and her sisters see their parents murdered in front of them.",
  "rating": 0,
  "finished": "",
  "publisher": "Hot Key Books"
 },
 {
  "id": "one-of-us-is-lying-5632",
  "title": "One of Us Is Lying",
  "author": "Karen McManus",
  "year": 2017,
  "pages": 240,
  "isbn": "9780141375632",
  "genres": [
   "Mystery & Thriller",
   "Young Adult"
  ],
  "blurb": "\"On Thursday afternoon, five students at Bayview High walk into detention. Bronwyn,the brain, is Yale-bound and never breaks a rule. Addy, the beauty, is the picture-perfect homecoming princess.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin"
 },
 {
  "id": "the-housemaid-1159",
  "title": "The Housemaid",
  "author": "Freida McFadden",
  "year": 0,
  "pages": 0,
  "isbn": "9780143461159",
  "genres": [
   "Mystery & Thriller"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Penguin Select PRH"
 },
 {
  "id": "as-good-as-dead-8605",
  "title": "As Good As Dead",
  "author": "Holly Jackson",
  "year": 2021,
  "pages": 400,
  "isbn": "9781405298605",
  "genres": [
   "Mystery & Thriller",
   "Young Adult"
  ],
  "blurb": "The third thrilling book in the bestselling, award-winning A Good Girl's Guide to Murder series",
  "rating": 0,
  "finished": "",
  "publisher": "Electric Monkey",
  "series": "A Good Girl's Guide to Murder",
  "seriesNo": 3
 },
 {
  "id": "the-lost-hero-5491",
  "title": "The Lost Hero",
  "author": "Rick Riordan",
  "year": 2011,
  "pages": 576,
  "isbn": "9780141325491",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "This is the number one, bestselling title in this new spin-off series from Percy Jackson creator, Rick Riordan. Old enemies awaken as camp half-blood's new arrivals prepare for war.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin Books",
  "series": "Heroes of Olympus",
  "seriesNo": 1
 },
 {
  "id": "the-inheritance-games-6178",
  "title": "The Inheritance Games",
  "author": "Jennifer Lynn Barnes",
  "year": 2020,
  "pages": 400,
  "isbn": "9780241476178",
  "genres": [
   "Mystery & Thriller",
   "Young Adult"
  ],
  "blurb": "She came from nothing. Avery has a plan- keep her head down, work hard for a better future. Then an eccentric billionaire dies, leaving her almost his entire fortune. And no one, least of all Avery, knows why. They had everything.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin"
 },
 {
  "id": "the-silent-patient-1637",
  "title": "The Silent Patient",
  "author": "Alex Michaelides",
  "year": 2019,
  "pages": 0,
  "isbn": "9781409181637",
  "genres": [
   "Mystery & Thriller"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": ""
 },
 {
  "id": "the-vanishing-stair-6697",
  "title": "The Vanishing Stair",
  "author": "Maureen Johnson",
  "year": 0,
  "pages": 0,
  "isbn": "9780062976697",
  "genres": [
   "Mystery & Thriller",
   "Young Adult"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Katherine Tegen Books",
  "series": "Truly Devious",
  "seriesNo": 2
 },
 {
  "id": "project-hail-mary-7468",
  "title": "Project Hail Mary",
  "author": "Andy Weir",
  "year": 0,
  "pages": 0,
  "isbn": "9781529157468",
  "genres": [
   "Sci-Fi"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "PENGUIN"
 },
 {
  "id": "truly-devious-8068",
  "title": "Truly Devious",
  "author": "Maureen Johnson",
  "year": 2018,
  "pages": 448,
  "isbn": "9780062338068",
  "genres": [
   "Mystery & Thriller",
   "Young Adult"
  ],
  "blurb": "Ellingham Academy is a famous private school in Vermont for the brightest thinkers, inventors, and artists.",
  "rating": 0,
  "finished": "",
  "publisher": "HarperCollins",
  "series": "Truly Devious",
  "seriesNo": 1
 },
 {
  "id": "the-girl-in-the-glass-case-4373",
  "title": "The Girl in the Glass Case",
  "author": "Devashish Sardana",
  "year": 2022,
  "pages": 288,
  "isbn": "9780143454373",
  "genres": [
   "Mystery & Thriller"
  ],
  "blurb": "A jealous psychopath hunting another serial killer to regain lost limelight. A feisty young detective caught in the crossfire. Can she end the carnage before she joins the body count?",
  "rating": 0,
  "finished": "",
  "publisher": "Ebury Publishing"
 },
 {
  "id": "the-innocent-5584",
  "title": "The Innocent",
  "author": "Harlan Coben",
  "year": 2009,
  "pages": 0,
  "isbn": "9781407245584",
  "genres": [
   "Mystery & Thriller"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Orion Books"
 },
 {
  "id": "the-ask-and-the-answer-2477",
  "title": "The Ask and the Answer",
  "author": "Patrick Ness",
  "year": 2009,
  "pages": 536,
  "isbn": "9781406322477",
  "genres": [
   "Sci-Fi",
   "Young Adult"
  ],
  "blurb": "We were in the square, in the square where I'd run, holding her, carrying her, telling her to stay alive, stay alive till we got safe, till we got to Haven so I could save her - But there weren't no safety, no safety at all, there was just him and his men.",
  "rating": 0,
  "finished": "",
  "publisher": "Walker Books Ltd",
  "series": "Chaos Walking",
  "seriesNo": 2
 },
 {
  "id": "the-alchemist-4980",
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 2005,
  "pages": 172,
  "isbn": "9788172234980",
  "genres": [
   "Fiction"
  ],
  "blurb": "\"My heart is afraid that it will have to suffer,\" the boy told the alchemist one night as they looked up at the moonless sky.\" Tell your heart that the fear of suffering is worse than the suffering itself.",
  "rating": 0,
  "finished": "",
  "publisher": "HarperCollins India"
 },
 {
  "id": "you-d-be-home-now-9695",
  "title": "You'd Be Home Now",
  "author": "Kathleen Glasgow",
  "year": 2021,
  "pages": 416,
  "isbn": "9781786079695",
  "genres": [
   "Fiction",
   "Young Adult",
   "Romance"
  ],
  "blurb": "From the New York Times bestselling author of Girl in Pieces comes a breathtaking contemporary YA about addiction, family and finding your voice Emmy is the good one.",
  "rating": 0,
  "finished": "",
  "publisher": "Rock the Boat"
 },
 {
  "id": "how-to-make-friends-with-the-dark-4753",
  "title": "How to Make Friends with the Dark",
  "author": "Kathleen Glasgow",
  "year": 2019,
  "pages": 432,
  "isbn": "9781101934753",
  "genres": [
   "Fiction",
   "Young Adult"
  ],
  "blurb": "From the New York Times bestselling author of Girl in Pieces comes a novel about love and loss and learning how to continue when it feels like you're surrounded by darkness that Karen M.",
  "rating": 0,
  "finished": "",
  "publisher": "Random House Children's Books"
 },
 {
  "id": "assistant-to-the-villain-3385",
  "title": "Assistant to the Villain",
  "author": "Hannah Nicole Maehrer",
  "year": 2023,
  "pages": 352,
  "isbn": "9781804993385",
  "genres": [
   "Fantasy",
   "Romance"
  ],
  "blurb": "Evie Sage's employment status is vital. So when a mishap with Rennedawn's most infamous Villain results in a job offer-naturally, she says yes.",
  "rating": 0,
  "finished": "",
  "publisher": "Penguin Group"
 },
 {
  "id": "the-knife-of-never-letting-go-9167",
  "title": "The Knife of Never Letting Go",
  "author": "Patrick Ness",
  "year": 2018,
  "pages": 496,
  "isbn": "9781406379167",
  "genres": [
   "Sci-Fi",
   "Young Adult"
  ],
  "blurb": "A special anniversary edition, with a striking new cover design, to celebrate 10 years of the Chaos Walking trilogy.Prentisstown isn't like other towns. Everyone can hear everyone else's thoughts in a constant, overwhelming Noise.",
  "rating": 0,
  "finished": "",
  "publisher": "Walker Books Ltd",
  "series": "Chaos Walking",
  "seriesNo": 1
 },
 {
  "id": "i-am-number-four-3570",
  "title": "I Am Number Four",
  "author": "Pittacus Lore",
  "year": 2011,
  "pages": 390,
  "isbn": "9780241953570",
  "genres": [
   "Sci-Fi",
   "Young Adult"
  ],
  "blurb": "I Am Number Four by Pittacus Lore - the film tie-in! They killed Number One in Malaysia. Number Two in England. And Number Three in Kenya. John Smith is not your average teenager. He regularly moves from small town to small town.",
  "rating": 0,
  "finished": "",
  "publisher": "Michael Joseph"
 },
 {
  "id": "a-good-girl-s-guide-to-murder-3181",
  "title": "A Good Girl's Guide to Murder",
  "author": "Holly Jackson",
  "year": 2019,
  "pages": 432,
  "isbn": "9781405293181",
  "genres": [
   "Mystery & Thriller",
   "Young Adult"
  ],
  "blurb": "The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. Almost everyone.",
  "rating": 0,
  "finished": "",
  "publisher": "Electric Monkey",
  "series": "A Good Girl's Guide to Murder",
  "seriesNo": 1
 },
 {
  "id": "normal-people-4650",
  "title": "Normal People",
  "author": "Sally Rooney",
  "year": 2019,
  "pages": 304,
  "isbn": "9780571334650",
  "genres": [
   "Fiction",
   "Romance"
  ],
  "blurb": "LONGLISTED FOR THE MAN BOOKER PRIZE 2018 Connell and Marianne grow up in the same small town in rural Ireland. The similarities end there; they are from very different worlds.",
  "rating": 0,
  "finished": "",
  "publisher": "Faber & Faber"
 },
 {
  "id": "a-man-called-ove-5815",
  "title": "A Man Called Ove",
  "author": "Fredrik Backman",
  "year": 2015,
  "pages": 337,
  "isbn": "9781444775815",
  "genres": [
   "Fiction"
  ],
  "blurb": "Meet Ove. He's a curmudgeon; the kind of man who points at people he dislikes as if they were burglars caught outside his bedroom window. He has staunch principles, strict routines, and a short fuse.",
  "rating": 0,
  "finished": "",
  "publisher": "Sceptre"
 },
 {
  "id": "playlist-for-the-dead-0666",
  "title": "Playlist for the Dead",
  "author": "Michelle Falkoff",
  "year": 2015,
  "pages": 356,
  "isbn": "9780008110666",
  "genres": [
   "Fiction",
   "Young Adult"
  ],
  "blurb": "Part mystery, part love story, and part coming-of-age tale, 'Playlist for the Dead' is an honest and gut-wrenching first novel about loss, rage, what it feels like to outgrow a friendship that's always defined you - and the struggle to redefine yourself.",
  "rating": 0,
  "finished": "",
  "publisher": "HarperCollins Children's Books"
 },
 {
  "id": "the-grand-design-9229",
  "title": "The Grand Design",
  "author": "Stephen Hawking & Leonard Mlodinow",
  "year": 2011,
  "pages": 256,
  "isbn": "9780553819229",
  "genres": [
   "Nonfiction"
  ],
  "blurb": "When and how did the universe begin? Why are we here? Is the apparent 'grand design' of our universe evidence for a benevolent creator who set things in motion? Or does science offer another explanation?",
  "rating": 0,
  "finished": "",
  "publisher": "Bantam"
 },
 {
  "id": "house-of-hollow-9899",
  "title": "House of Hollow",
  "author": "Krystal Sutherland",
  "year": 2021,
  "pages": 320,
  "isbn": "9781471409899",
  "genres": [
   "Horror",
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "The Hollow sisters - Vivi, Grey and Iris - are as seductively glamorous as they are mysterious. They have black eyes and hair as white as milk. They share the same birthday, spaced exactly two years apart.",
  "rating": 0,
  "finished": "",
  "publisher": "Hot Key Books"
 },
 {
  "id": "all-the-bright-places-7034",
  "title": "All the Bright Places",
  "author": "Jennifer Niven",
  "year": 2015,
  "pages": 400,
  "isbn": "9780141357034",
  "genres": [
   "Fiction",
   "Young Adult",
   "Romance"
  ],
  "blurb": "Theodore Finch is fascinated by death, and he constantly thinks of ways he might kill himself. But each time, something good, no matter how small, stops him.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin"
 },
 {
  "id": "on-earth-we-re-briefly-gorgeous-0685",
  "title": "On Earth We're Briefly Gorgeous",
  "author": "Ocean Vuong",
  "year": 0,
  "pages": 0,
  "isbn": "9781529110685",
  "genres": [
   "Fiction"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": ""
 },
 {
  "id": "eleanor-oliphant-is-completely-fine-2145",
  "title": "Eleanor Oliphant is Completely Fine",
  "author": "Gail Honeyman",
  "year": 2018,
  "pages": 385,
  "isbn": "9780008172145",
  "genres": [
   "Fiction"
  ],
  "blurb": "\"Eleanor Oliphant is a truly original literary creation: funny, touching, and unpredictable.",
  "rating": 0,
  "finished": "",
  "publisher": "HarperCollins"
 },
 {
  "id": "letters-to-the-lost-3525",
  "title": "Letters to the Lost",
  "author": "Brigid Kemmerer",
  "year": 2017,
  "pages": 400,
  "isbn": "9781408883525",
  "genres": [
   "Romance",
   "Young Adult"
  ],
  "blurb": "Juliet Young always writes letters to her mother, a world-traveling photojournalist. Even after her mother's death, she leaves letters at her grave. It's the only way Juliet can cope.",
  "rating": 0,
  "finished": "",
  "publisher": "Bloomsbury Childrens",
  "series": "Letters to the Lost",
  "seriesNo": 1
 },
 {
  "id": "more-than-we-can-tell-5079",
  "title": "More Than We Can Tell",
  "author": "Brigid Kemmerer",
  "year": 2018,
  "pages": 419,
  "isbn": "9781408885079",
  "genres": [
   "Romance",
   "Young Adult"
  ],
  "blurb": "This is a story about learning to be fearless and set your secrets free. An intense and gripping novel that will speak to fans of John Green and Jennifer Niven.",
  "rating": 0,
  "finished": "",
  "publisher": "Bloomsbury",
  "series": "Letters to the Lost",
  "seriesNo": 2
 },
 {
  "id": "call-it-what-you-want-5344",
  "title": "Call It What You Want",
  "author": "Brigid Kemmerer",
  "year": 0,
  "pages": 0,
  "isbn": "9781526605344",
  "genres": [
   "Fiction",
   "Young Adult"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Bloomsbury YA"
 },
 {
  "id": "the-mistake-3941",
  "title": "The Mistake",
  "author": "Elle Kennedy",
  "year": 2015,
  "pages": 298,
  "isbn": "9781775293941",
  "genres": [
   "Romance"
  ],
  "blurb": "He's a player in more ways than one... College junior John Logan can get any girl he wants.",
  "rating": 0,
  "finished": "",
  "publisher": "Elle Kennedy Inc."
 },
 {
  "id": "play-along-8614",
  "title": "Play Along",
  "author": "Liz Tomforde",
  "year": 2024,
  "pages": 464,
  "isbn": "9781399728614",
  "genres": [
   "Romance"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Hodder Paperback"
 },
 {
  "id": "vendetta-7675",
  "title": "Vendetta",
  "author": "Catherine Doyle",
  "year": 0,
  "pages": 0,
  "isbn": "9789351037675",
  "genres": [
   "Fiction"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "SCHOLASTIC INDIA"
 },
 {
  "id": "pretty-reckless-6917",
  "title": "Pretty Reckless",
  "author": "L. J. Shen",
  "year": 2024,
  "pages": 0,
  "isbn": "9781405966917",
  "genres": [
   "Romance"
  ],
  "blurb": "Penn They say revenge is a dish best served cold. I'd had four years to stew on what Daria Followhill did to me, and now my heart was completely iced. I took her first kiss. She took the only thing I loved. I was poor.",
  "rating": 0,
  "finished": "",
  "publisher": "Penguin"
 },
 {
  "id": "twisted-hate-4339",
  "title": "Twisted Hate",
  "author": "Ana Huang",
  "year": 2022,
  "pages": 352,
  "isbn": "9780349434339",
  "genres": [
   "Romance"
  ],
  "blurb": "Discover the addictive world of the Twisted series from TikTok sensation, Ana Huang!Read Twisted Hate now for a steamy enemies to lovers romance.He hates her . . .",
  "rating": 0,
  "finished": "",
  "publisher": "Piatkus"
 },
 {
  "id": "redeemed-9549",
  "title": "Redeemed",
  "author": "Lauren Asher",
  "year": 2024,
  "pages": 0,
  "isbn": "9781398539549",
  "genres": [
   "Romance"
  ],
  "blurb": "A steamy and swoonworthy standalone novel in the iconic Formula 1 romance series, from the bestselling author of The Fine Print and Love Redesigned.",
  "rating": 0,
  "finished": "",
  "publisher": "Simon & Schuster (UK)"
 },
 {
  "id": "final-offer-3479",
  "title": "Final Offer",
  "author": "Lauren Asher",
  "year": 2023,
  "pages": 592,
  "isbn": "9780349433479",
  "genres": [
   "Romance"
  ],
  "blurb": "I'm the Kane brother everyone gossips about behind closed doors. Trust fund brat. Washed-up athelete. High-functioning alcoholic. No one know the real me but her.",
  "rating": 0,
  "finished": "",
  "publisher": "Piatkus Books"
 },
 {
  "id": "the-risk-1016",
  "title": "The Risk",
  "author": "Elle Kennedy",
  "year": 2023,
  "pages": 464,
  "isbn": "9780349441016",
  "genres": [
   "Romance"
  ],
  "blurb": "Step into a world of hot hockey players, feisty heroines and steamy scenes . . . Everyone says I'm a bad girl. They're only partly right - I don't let fear rule me, and I certainly don't care what people think.",
  "rating": 0,
  "finished": "",
  "publisher": "Little, Brown Book Group Limited"
 },
 {
  "id": "the-love-hypothesis-6823",
  "title": "The Love Hypothesis",
  "author": "Ali Hazelwood",
  "year": 2021,
  "pages": 384,
  "isbn": "9780593336823",
  "genres": [
   "Romance"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Berkley Books"
 },
 {
  "id": "angel-fire-2010",
  "title": "Angel Fire",
  "author": "Lee Weatherly",
  "year": 2011,
  "pages": 512,
  "isbn": "9781409522010",
  "genres": [
   "Fantasy",
   "Young Adult",
   "Romance"
  ],
  "blurb": "Only Willow has the power to defeat the malevolent Church of Angels - and they will stop at nothing to destroy her. However, Willow is not alone. She is with Alex, a trained Angel Killer - and her one true love.",
  "rating": 0,
  "finished": "",
  "publisher": "Usborne Books",
  "series": "Angel Trilogy",
  "seriesNo": 2
 },
 {
  "id": "angel-fever-2393",
  "title": "Angel Fever",
  "author": "L. A. Weatherly",
  "year": 2013,
  "pages": 576,
  "isbn": "9781409522393",
  "genres": [
   "Fantasy",
   "Young Adult",
   "Romance"
  ],
  "blurb": "Willow and Alex are mankind's only hope. The world is devastated, and the angels are slowly enslaving all humanity, moving survivors into camps where they can devour their energy, causing slow but certain death.",
  "rating": 0,
  "finished": "",
  "publisher": "Usborne Publishing Ltd",
  "series": "Angel Trilogy",
  "seriesNo": 3
 },
 {
  "id": "angel-1969",
  "title": "Angel",
  "author": "L.A. Weatherly",
  "year": 2010,
  "pages": 506,
  "isbn": "9781409521969",
  "genres": [
   "Fantasy",
   "Young Adult",
   "Romance"
  ],
  "blurb": "Willow knows she's different from other girls. And not just because she loves tinkering around with cars. Willow has a gift.",
  "rating": 0,
  "finished": "",
  "publisher": "Usborne Publishing Ltd",
  "series": "Angel Trilogy",
  "seriesNo": 1
 },
 {
  "id": "pink-pages-9923",
  "title": "Pink Pages",
  "author": "Sarah Delmege",
  "year": 2004,
  "pages": 158,
  "isbn": "9780439679923",
  "genres": [
   "Nonfiction",
   "Young Adult"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Scholastic"
 },
 {
  "id": "fool-me-once-1111",
  "title": "Fool Me Once",
  "author": "Harlan Coben",
  "year": 2013,
  "pages": 0,
  "isbn": "9781784751111",
  "genres": [
   "Mystery & Thriller"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": ""
 },
 {
  "id": "harry-potter-and-the-philosopher-s-s-5652",
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "J. K. Rowling",
  "year": 2014,
  "pages": 345,
  "isbn": "9781408855652",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.",
  "rating": 0,
  "finished": "",
  "publisher": "Bloomsbury Publishing"
 },
 {
  "id": "the-dark-prophecy-3967",
  "title": "The Dark Prophecy",
  "author": "Rick Riordan",
  "year": 2018,
  "pages": 528,
  "isbn": "9780141363967",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "The god Apollo, cast down to earth and trapped in the form of a gawky teenage boy as punishment, must set off on the second of his harrowing (and hilarious) trials.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin",
  "series": "The Trials of Apollo",
  "seriesNo": 2
 },
 {
  "id": "the-hidden-oracle-3929",
  "title": "The Hidden Oracle",
  "author": "Rick Riordan",
  "year": 2017,
  "pages": 528,
  "isbn": "9780141363929",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "How do you punish an immortal? By making him human. After angering his father Zeus, the god Apollo is cast down from Olympus. Weak and disoriented, he lands in New York City as a regular teenage boy.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin",
  "series": "The Trials of Apollo",
  "seriesNo": 1
 },
 {
  "id": "the-house-of-hades-9207",
  "title": "The House of Hades",
  "author": "Rick Riordan",
  "year": 2014,
  "pages": 597,
  "isbn": "9780141339207",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "A thousand deadly monsters. Three battling demigods. One fatal decision. Hazel looked behind Hecate at the middle gateway. She saw Percy and Annabeth sprawled helplessly before those black-and-silver doors.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin",
  "series": "Heroes of Olympus",
  "seriesNo": 4
 },
 {
  "id": "the-blood-of-olympus-9245",
  "title": "The Blood of Olympus",
  "author": "Rick Riordan",
  "year": 2015,
  "pages": 544,
  "isbn": "9780141339245",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "Though the Greek and Roman crew members of the Argo II have made progress in their many quests, they still seem no closer to defeating the earth mother, Gaea. Her giants have risen - all of them - and they're stronger than ever.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin Books",
  "series": "Heroes of Olympus",
  "seriesNo": 5
 },
 {
  "id": "circe-4674",
  "title": "Circe",
  "author": "Madeline Miller",
  "year": 2019,
  "pages": 0,
  "isbn": "9781526614674",
  "genres": [
   "Fantasy"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Bloomsbury Publishing"
 },
 {
  "id": "percy-jackson-and-the-lightning-thie-6809",
  "title": "Percy Jackson and the Lightning Thief",
  "author": "Rick Riordan",
  "year": 2013,
  "pages": 375,
  "isbn": "9780141346809",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "Percy Jackson and the Lightning Thief is the first bestselling book in Rick Riordan's phenomenally successful Percy Jackson series. Half boy. Half God. ALL Hero. Look, I didn't want to be a half-blood.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin",
  "series": "Percy Jackson",
  "seriesNo": 1
 },
 {
  "id": "percy-jackson-and-the-sea-of-monster-6847",
  "title": "Percy Jackson and the Sea of Monsters",
  "author": "Rick Riordan",
  "year": 2013,
  "pages": 0,
  "isbn": "9780141346847",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Penguin Books",
  "series": "Percy Jackson",
  "seriesNo": 2
 },
 {
  "id": "percy-jackson-and-the-titan-s-curse-6816",
  "title": "Percy Jackson and the Titan's Curse",
  "author": "Rick Riordan",
  "year": 2013,
  "pages": 297,
  "isbn": "9780141346816",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "Percy Jackson and the Titan s Curse is the third book in Rick Riordan s bestselling fantasy adventure series. w with a thrilling new cover look. Half Boy. Half God. ALL Hero.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin",
  "series": "Percy Jackson",
  "seriesNo": 3
 },
 {
  "id": "percy-jackson-and-the-battle-of-the-6830",
  "title": "Percy Jackson and the Battle of the Labyrinth",
  "author": "Rick Riordan",
  "year": 2013,
  "pages": 352,
  "isbn": "9780141346830",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin Books",
  "series": "Percy Jackson",
  "seriesNo": 4
 },
 {
  "id": "percy-jackson-and-the-last-olympian-6885",
  "title": "Percy Jackson and the Last Olympian",
  "author": "Rick Riordan",
  "year": 2013,
  "pages": 368,
  "isbn": "9780141346885",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "Percy Jackson and the Last Olympian is the fifth awesome adventure in Rick Riordan s top-ten bestselling series. w with a thrilling new cover look. Half Boy. Half God. All Hero. Most people get presents on their sixteenth birthday.",
  "rating": 0,
  "finished": "",
  "publisher": "Penguin Books",
  "series": "Percy Jackson",
  "seriesNo": 5
 },
 {
  "id": "percy-jackson-and-the-greek-heroes-2250",
  "title": "Percy Jackson and the Greek Heroes",
  "author": "Rick Riordan",
  "year": 2016,
  "pages": 0,
  "isbn": "9780141362250",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "Who cut off Medusa's head? Who was raised by a she-bear? Who tamed Pegasus?",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin",
  "series": "Percy Jackson",
  "seriesNo": 6
 },
 {
  "id": "the-serpent-s-shadow-5704",
  "title": "The Serpent's Shadow",
  "author": "Rick Riordan",
  "year": 2013,
  "pages": 406,
  "isbn": "9780141335704",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "The Kane Chronicles: The Serpent s Shadow is the final thrilling instalment in award-winning author and Percy Jackson creator Rick Riordan s Kane Chronicles trilogy.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin",
  "series": "The Kane Chronicles",
  "seriesNo": 3
 },
 {
  "id": "the-throne-of-fire-5674",
  "title": "The Throne of Fire",
  "author": "Rick Riordan",
  "year": 2012,
  "pages": 451,
  "isbn": "9780141335674",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "Ever since the gods of Ancient Egypt were unleashed on the modern world, Carter Kane and his sister, Sadie, have been in big trouble. As descendants of the magical House of Life, they command certain powers.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin Books",
  "series": "The Kane Chronicles",
  "seriesNo": 2
 },
 {
  "id": "the-red-pyramid-5507",
  "title": "The Red Pyramid",
  "author": "Rick Riordan",
  "year": 2011,
  "pages": 544,
  "isbn": "9780141325507",
  "genres": [
   "Fantasy",
   "Young Adult"
  ],
  "blurb": "Percy Jackson fought Greek Gods.",
  "rating": 0,
  "finished": "",
  "publisher": "Puffin Books",
  "series": "The Kane Chronicles",
  "seriesNo": 1
 },
 {
  "id": "the-immortals-of-meluha-8742",
  "title": "The Immortals of Meluha",
  "author": "Amish",
  "year": 2011,
  "pages": 415,
  "isbn": "9789380658742",
  "genres": [
   "Fantasy"
  ],
  "blurb": "1900 BC. In what modern Indians mistakenly call the Indus Valley Civilisation.",
  "rating": 0,
  "finished": "",
  "publisher": "Westland Ltd"
 },
 {
  "id": "the-name-of-the-rose-4783",
  "title": "The Name of the Rose",
  "author": "Umberto Eco",
  "year": 0,
  "pages": 0,
  "isbn": "9780330284783",
  "genres": [
   "Mystery & Thriller",
   "Fiction"
  ],
  "blurb": "",
  "rating": 0,
  "finished": "",
  "publisher": "Picador"
 },
 {
  "id": "monsters-of-men-6123",
  "title": "Monsters of Men",
  "author": "Patrick Ness",
  "year": 2010,
  "pages": 624,
  "isbn": "9781406326123",
  "genres": [
   "Sci-Fi",
   "Young Adult"
  ],
  "blurb": "This is the electrifying finale to the multiple award-winning trilogy, \"Chaos Walking\". 'War', says the Mayor. 'At last'. Three armies march on New Prentisstown, each one intent on destroying the others.",
  "rating": 0,
  "finished": "",
  "publisher": "Walker & Company",
  "series": "Chaos Walking",
  "seriesNo": 3
 },
 {
  "id": "atonement-9791",
  "title": "Atonement",
  "author": "Ian McEwan",
  "year": 2002,
  "pages": 384,
  "isbn": "9780099429791",
  "genres": [
   "Fiction"
  ],
  "blurb": "On the hottest day of the summer of 1934, thirteen-year-old Briony Tallis sees her sister Cecilia strip off her clothes and plunge into the fountain in the garden of their country house.",
  "rating": 0,
  "finished": "",
  "publisher": "Vintage Books"
 },
 {
  "id": "we-used-to-live-here-5587",
  "title": "We Used to Live Here",
  "author": "Marcus Kliewer",
  "year": 2025,
  "pages": 0,
  "isbn": "9781804995587",
  "genres": [
   "Horror"
  ],
  "blurb": "House of Leaves meets Parasite in this gripping and eerily haunting debut psychological horror, soon to be a Netflix film starring Blake Lively. Perfect for fans of Stephen King and Leave the World Behind.",
  "rating": 0,
  "finished": "",
  "publisher": "Penguin"
 },
 {
  "id": "girl-goddess-queen-7907",
  "title": "Girl, Goddess, Queen",
  "author": "Bea Fitzgerald",
  "year": 2023,
  "pages": 0,
  "isbn": "9780241627907",
  "genres": [
   "Fantasy",
   "Romance",
   "Young Adult"
  ],
  "blurb": "To hell with love, this goddess has other plans... Thousands of years ago, the gods told a lie- how Persephone was a pawn in the politics of other gods. How Hades kidnapped Persephone to be his bride.",
  "rating": 0,
  "finished": "",
  "publisher": "Penguin UK"
 },
 {
  "id": "i-hope-this-doesn-t-find-you-4321",
  "title": "I Hope This Doesn't Find You",
  "author": "Ann Liang",
  "year": 2024,
  "pages": 314,
  "isbn": "9780702324321",
  "genres": [
   "Romance",
   "Young Adult"
  ],
  "blurb": "Sadie doesn't have to hold back in her email drafts because nobody will ever read them ... that is, until someone sends them out. Seventeen-year-old Sadie Wen is perfect on paper.",
  "rating": 0,
  "finished": "",
  "publisher": "Scholastic"
 },
 {
  "id": "wedding-people-2752",
  "title": "Wedding People",
  "author": "Alison Espach",
  "year": 2025,
  "pages": 0,
  "isbn": "9781399622752",
  "genres": [
   "Fiction"
  ],
  "blurb": "The #2 New York Times bestseller A Read With Jenna book club pick 'UTTERLY CHARMING' PANDORA SYKES 'WICKEDLY FUNNY' JENNY JACKSON 'A PERFECT NOVEL' CATHERINE NEWMAN 'THE BEST READ OF THE YEAR SO FAR' THE TIMES It's a beautiful day in Newport, Rhode Island, whe",
  "rating": 0,
  "finished": "",
  "publisher": "Phoenix"
 },
 {
  "id": "juniper-hill-6943",
  "title": "Juniper Hill",
  "author": "Devney Perry",
  "year": 2026,
  "pages": 346,
  "isbn": "9781957376943",
  "genres": [
   "Romance"
  ],
  "blurb": "A small town, single mom, neighbors-to-lovers romance from #1 New York Times and USA Today bestselling author Devney Perry.Memphis Ward arrives in Quincy, Montana, on the fifth worst day of her life. She needs a shower.",
  "rating": 0,
  "finished": "",
  "publisher": "Devney Perry LLC"
 }
];

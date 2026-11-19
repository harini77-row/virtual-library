# Virtual library

React + TypeScript + Vite. Deploys to Vercel or Netlify as-is.

## Run
    npm install
    npm run dev

## Use your own books
Export from Goodreads (My Books > Import and export > Export Library), then:
    npm run import -- path/to/goodreads_library_export.csv
This rewrites src/books.ts (blurbs are left empty; add them by hand if you like).

## Deploy
- Vercel: import the repo. Framework preset Vite. api/search.ts is picked up automatically.
- Netlify: import the repo. netlify.toml sets build command and publish dir. netlify/functions/search.ts serves /api/search.
- AI search: add the env var ANTHROPIC_API_KEY on the host. Without it, search falls back to plain text matching.

# Pedro Silva — Portfolio

Portfolio site for Pedro Silva (Frontend Engineer). Next.js App Router, PT/EN via next-intl.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- next-intl (`/en`, `/pt` — default EN)
- Motion + Phosphor Icons

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`).

## Environment

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL=https://www.pedrosilvadev.com` (canonical host with www). Used in metadataBase, canonical, sitemap, JSON-LD, Open Graph. Never use a `*.vercel.app` URL here.

## Deploy

Deploy on Vercel. In **Production** env vars, set `NEXT_PUBLIC_SITE_URL=https://www.pedrosilvadev.com` (no trailing slash). Code falls back to that URL if the var is missing; still set it explicitly so builds never inherit a stale placeholder. Never point it at `*.vercel.app`.

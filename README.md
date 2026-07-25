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

Set `NEXT_PUBLIC_SITE_URL=https://pedrosilvadev.com` (used in canonical, sitemap, JSON-LD, Open Graph). Never use a `*.vercel.app` URL here.

## Deploy

Deploy on Vercel. Set `NEXT_PUBLIC_SITE_URL=https://pedrosilvadev.com` in **Production** (and Preview, if you build there) — no trailing slash, no www. The build fails if this var is missing. Never point it at `*.vercel.app`.

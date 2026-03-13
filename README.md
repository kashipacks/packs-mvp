# packs-mvp

Beginner-friendly Phase-1 MVP built with Next.js for browsing Shopify-ready product packs.

## Features

- Landing page with beginner benefits and Browse Packs CTA
- Packs Library with 5 starter packs
- Search + niche filter
- Pack detail page with:
  - product previews
  - per-product description copy buttons
  - pages copy section + copy all pages
  - marketing kit section + copy all marketing
  - Shopify-compatible CSV download
- `/wizard` page with simple Shopify setup steps

## Starter packs included

- Pet Accessories Pack (USA)
- Phone Accessories Pack (USA)
- Kitchen Gadgets Pack (USA)
- Beauty Tools Pack (USA)
- Travel Essentials Pack (USA)

## Data format

Each pack lives in `data/packs/*.json` with:

- `pack_id`
- `pack_name`
- `niche`
- `country`
- `summary`
- `vendor`
- `badges`
- `products[]`
- `pages{}`
- `marketing{}`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open app:

`http://localhost:3000`

## Build & run production

```bash
npm run build
npm run start
```

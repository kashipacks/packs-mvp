# Packs MVP

A Next.js 14 app for managing and exporting product packs as Shopify CSVs.

## Architecture

- **Framework**: Next.js 14 (App Router)
- **Runtime**: Node.js 20
- **Package Manager**: npm

## Structure

- `src/app/` — Next.js App Router pages and API routes
- `src/components/` — React client components
- `src/lib/packs.js` — Data access helpers (reads JSON files from `data/packs/`)
- `data/packs/` — JSON files representing product packs

## Running

The app runs on port 5000 via the "Start application" workflow (`npm run dev`).

## Key Features

- Browse product packs
- View pack details
- Export packs as Shopify-compatible CSV
- Pack creation wizard

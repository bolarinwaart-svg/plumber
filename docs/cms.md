# Sanity CMS Setup

This project uses Sanity Studio embedded in Next.js at `/admin`.

## Configure

Create `.env.local` from `.env.example` and fill in your Sanity project details:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-29
```

The Studio configuration lives in:

- `sanity.config.ts`
- `sanity.cli.ts`
- `src/sanity/schemaTypes/*`

The site reads Sanity content through `src/lib/cms.ts`. Until a real Sanity project
ID is configured, it falls back to the seed JSON files in `content/` so the site
still builds and renders locally.

## Run

```bash
npm run dev
```

Then open:

```text
http://localhost:3000/admin
```

## Content Types

- Site Settings
- Blog Post
- Service
- Testimonial
- Testimonial Avatar Strip

## Importing Seed Content

The existing seed content is stored in:

- `content/site.json`
- `content/blog/*.json`
- `content/services/*.json`
- `content/testimonials/*.json`
- `content/testimonial-avatars.json`

Use these files as the source when entering the first Sanity documents.

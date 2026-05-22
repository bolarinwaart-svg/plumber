# Heatwave Plumbing

Responsive marketing site for a plumbing and heating company, built with Next.js App Router and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/app/page.tsx              Main page composition
src/app/globals.css           Global styles, theme tokens, site container
src/components/site-nav.tsx   Header navigation
src/components/hero-section.tsx
src/components/mission-section.tsx
src/components/solution-section.tsx
src/components/services-section.tsx
src/components/testimonial-section.tsx
src/components/blog-section.tsx
src/components/site-footer.tsx
public/                       Site images exported from the Figma design
```

## Layout Rules

- Use the shared `.site-container` class for top-level page sections.
- `.site-container` keeps content centered with a maximum width of `1440px`.
- Horizontal page gutters are responsive through `--site-gutter: clamp(16px, 4vw, 32px)`.
- Navigation and page sections should sit inside this container so the page edges stay consistent.

## Typography

Font sizes in this project should use `rem`, not `px`.

Use Tailwind's built-in text utilities when possible because they already compile to `rem`:

```tsx
className="text-base lg:text-xl"
```

When a custom Figma size is needed, use an arbitrary `rem` value:

```tsx
className="text-[1.875rem] lg:text-[3rem]"
```

Reference conversion:

```text
21px  = 1.3125rem
28px  = 1.75rem
30px  = 1.875rem
32px  = 2rem
40px  = 2.5rem
45px  = 2.8125rem
48px  = 3rem
56px  = 3.5rem
150px = 9.375rem
```

Pixel values are still acceptable for non-font design values such as layout dimensions, border radius, image sizing, spacing, and container widths when they match the Figma layout.

## Responsive Behavior

- Sections are mobile-first and expand at Tailwind breakpoints.
- Desktop layouts use multi-column grids where the Figma design requires side-by-side content.
- Mobile layouts stack content vertically and keep text readable without fixed desktop line breaks.
- The hero paragraph uses a desktop-only line break to match the Figma text wrap.

## Design Source

The page is being implemented from the Heatwave Plumbing Figma design. Keep future section updates aligned with the Figma desktop and mobile frames.

## Verification

Before handing off layout or styling changes, run:

```bash
npm run build
npm run lint
```

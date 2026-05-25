# Rem Typography and Shared Primitives Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize typography to `rem` across the project and extract a small set of shared primitives for repeated card and layout patterns without changing page content or visual intent.

**Architecture:** Keep page-specific content inside the page or section modules, and move only repeated structure into shared primitives under `src/components/ui/`. The shared layer should stay small and composable: `SectionShell` and `SplitContentSection` handle layout, `PrimaryPillButton` and `BadgeChip` handle recurring UI atoms, and `MediaCard`, `TestimonialBlock`, `BlogCard`, and `FaqPanel` cover the repeated section/card patterns. Typography conversion happens alongside the refactor so the same files are not revisited twice.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind utility classes, `next/image`, ESLint, browser-based visual verification.

---

### Task 1: Typography Guide and Remaining Rem Conversion

**Files:**
- Create: `docs/guides/rem-typography.md`
- Modify: `src/app/globals.css`
- Modify: `src/components/*.tsx` files that still contain typography-related `px` values

- [ ] **Step 1: Audit the remaining typography tokens**

```bash
rg -n "text-\[[0-9.]+px\]|leading-\[[0-9.]+px\]|tracking-\[[^\]]*px\]" src
```

Expected: identify any remaining `px`-based text sizes, line heights, and letter spacing rules before conversion.

- [ ] **Step 2: Add the typography guide**

```md
# Typography Rules

- Use `rem` for font sizes in new and edited UI.
- Convert typography-related line height and letter spacing to rem where practical.
- Use `clamp()` only when responsive sizing is required, but keep the underlying values in rem.
- Do not introduce new `px`-based text sizes.

## Common conversions

- `14px` -> `0.875rem`
- `16px` -> `1rem`
- `18px` -> `1.125rem`
- `20px` -> `1.25rem`
- `24px` -> `1.5rem`
- `32px` -> `2rem`
- `33px` -> `2.0625rem`
- `40px` -> `2.5rem`
- `48px` -> `3rem`
- `60px` -> `3.75rem`
- `64px` -> `4rem`
```

- [ ] **Step 3: Convert any remaining typography `px` values to rem**

Use the audit output from Step 1 to update each hit in place. The conversion rule is `px / 16 = rem`.

- [ ] **Step 4: Re-run the audit and lint**

```bash
rg -n "text-\[[0-9.]+px\]|leading-\[[0-9.]+px\]|tracking-\[[^\]]*px\]" src
npm run lint
```

Expected: the `rg` command returns no matches and lint passes.

- [ ] **Step 5: Commit the typography conversion**

```bash
git add docs/guides/rem-typography.md src/app/globals.css src/components
git commit -m "docs: standardize rem typography"
```

---

### Task 2: Layout Primitives

**Files:**
- Create: `src/components/ui/section-shell.tsx`
- Create: `src/components/ui/split-content-section.tsx`
- Create: `src/components/ui/primary-pill-button.tsx`
- Create: `src/components/ui/badge-chip.tsx`
- Modify: `src/components/site-nav.tsx`
- Modify: `src/components/site-footer.tsx`
- Modify: `src/components/hero-section.tsx`
- Modify: `src/components/contact-form-section.tsx`
- Modify: `src/components/heating-cta-section.tsx`

- [ ] **Step 1: Define the shared layout primitives**

```ts
export type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "white" | "blue" | "lightBlue";
  radius?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
  as?: "section" | "div" | "article";
};

export type SplitContentSectionProps = {
  className?: string;
  tone?: "white" | "blue" | "lightBlue";
  mediaPosition?: "left" | "right";
  align?: "start" | "center" | "end";
  stackOnMobile?: boolean;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  media: React.ReactNode;
  cta?: React.ReactNode;
};

export type PrimaryPillButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  as?: "a" | "button";
  variant?: "primary" | "outlined";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export type BadgeChipProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "filled" | "outlined";
  tone?: "blue" | "white";
  size?: "sm" | "md";
};
```

- [ ] **Step 2: Implement the base layout wrappers**

Keep the implementation minimal and prop-driven:

```tsx
export function SectionShell({ as: Tag = "section", tone = "white", radius = "lg", padding = "md", className = "", innerClassName = "", children }: SectionShellProps) {
  return (
    <Tag className={className}>
      <div className={/* shared container + tone + radius + padding classes */}>
        <div className={innerClassName}>{children}</div>
      </div>
    </Tag>
  );
}
```

Use the same approach for `SplitContentSection`, `PrimaryPillButton`, and `BadgeChip`.

- [ ] **Step 3: Replace repeated CTA and chip markup in existing shared sections**

Update `site-nav`, `site-footer`, `hero-section`, `contact-form-section`, and `heating-cta-section` so the repeated pill CTA and outlined chip styles come from the new primitives instead of ad hoc class strings.

- [ ] **Step 4: Run lint and verify the shared primitives render cleanly**

```bash
npm run lint
```

Expected: lint passes with no new warnings or errors.

- [ ] **Step 5: Commit the layout primitives**

```bash
git add src/components/ui src/components/site-nav.tsx src/components/site-footer.tsx src/components/hero-section.tsx src/components/contact-form-section.tsx src/components/heating-cta-section.tsx
git commit -m "feat: add shared layout primitives"
```

---

### Task 3: Card and Section Content Primitives

**Files:**
- Create: `src/components/ui/media-card.tsx`
- Create: `src/components/ui/testimonial-block.tsx`
- Create: `src/components/ui/blog-card.tsx`
- Create: `src/components/ui/faq-panel.tsx`
- Modify: `src/components/services-section.tsx`
- Modify: `src/components/solution-section.tsx`
- Modify: `src/components/testimonial-section.tsx`
- Modify: `src/components/blog-section.tsx`
- Modify: `src/components/blog-posts-section.tsx`
- Modify: `src/components/plumbing-faq-section.tsx`
- Modify: `src/components/heating-services-section.tsx`
- Modify: `src/components/heating-blue-section.tsx`
- Modify: `src/components/heating-installation-section.tsx`

- [ ] **Step 1: Define the card primitive APIs**

```ts
export type MediaCardProps = {
  image: string;
  alt: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  footer?: React.ReactNode;
  imageClassName?: string;
  contentClassName?: string;
  variant?: "service" | "blog" | "feature";
  className?: string;
};

export type TestimonialBlockProps = {
  image: string;
  alt: string;
  rating: number;
  quote: React.ReactNode;
  name: React.ReactNode;
  title: React.ReactNode;
  avatars?: Array<{ src: string; alt: string }>;
  starCount?: number;
  layout?: "horizontal" | "vertical";
  className?: string;
};

export type BlogCardProps = {
  image: string;
  alt: string;
  category?: React.ReactNode;
  title: React.ReactNode;
  excerpt: React.ReactNode;
  href: string;
  author?: React.ReactNode;
  date?: React.ReactNode;
  ctaLabel?: React.ReactNode;
  imageClassName?: string;
  className?: string;
};

export type FaqPanelProps = {
  image: string;
  alt: string;
  title: React.ReactNode;
  description: React.ReactNode;
  items: Array<{ question: string; answer: React.ReactNode }>;
  cta?: React.ReactNode;
  mediaPosition?: "left" | "right";
  className?: string;
};
```

- [ ] **Step 2: Implement the repeated card shells**

Keep image crop control in the component props so existing Figma-driven focal points remain possible.

- [ ] **Step 3: Refactor the repeated card sections to consume the primitives**

Use `MediaCard` for service and feature cards, `BlogCard` for blog previews, `TestimonialBlock` for client stories, and `FaqPanel` for the FAQ layout.

- [ ] **Step 4: Verify the repeated patterns still match the current visual design**

```bash
npm run lint
```

Then render the affected pages in the browser and check that the card spacing, chip styles, and media crops are unchanged.

- [ ] **Step 5: Commit the card primitives**

```bash
git add src/components/ui src/components/services-section.tsx src/components/solution-section.tsx src/components/testimonial-section.tsx src/components/blog-section.tsx src/components/blog-posts-section.tsx src/components/plumbing-faq-section.tsx src/components/heating-services-section.tsx src/components/heating-blue-section.tsx src/components/heating-installation-section.tsx
git commit -m "feat: extract shared card primitives"
```

---

### Task 4: Page Composition Refactor

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/plumbing/page.tsx`
- Modify: `src/app/heating/page.tsx`
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/components/hero-section.tsx`
- Modify: `src/components/plumbing-hero-section.tsx`
- Modify: `src/components/heating-hero-section.tsx`
- Modify: `src/components/blog-hero-section.tsx`
- Modify: `src/components/contact-hero-section.tsx`
- Modify: `src/components/plumbing-services-section.tsx`
- Modify: `src/components/plumbing-solutions-section.tsx`
- Modify: `src/components/plumbing-intro-section.tsx`
- Modify: `src/components/plumbing-emergency-section.tsx`
- Modify: `src/components/plumbing-faq-section.tsx`
- Modify: `src/components/heating-services-section.tsx`
- Modify: `src/components/heating-blue-section.tsx`
- Modify: `src/components/heating-installation-section.tsx`
- Modify: `src/components/blog-section.tsx`
- Modify: `src/components/blog-posts-section.tsx`
- Modify: `src/components/contact-info-strip.tsx`
- Modify: `src/components/contact-visual-section.tsx`

- [ ] **Step 1: Recompose the Home page from shared primitives**

The Home page should assemble `SiteNav`, hero, feature sections, testimonial, and footer using the new primitive layer instead of repeating card wrappers inline.

- [ ] **Step 2: Recompose the Plumbing page from shared primitives**

Use the shared shell, split layout, media cards, testimonial block, and FAQ panel to rebuild the plumbing route without changing the current copy or imagery.

- [ ] **Step 3: Recompose the Heating page from shared primitives**

Apply the same primitives to the heating route and preserve the existing section ordering.

- [ ] **Step 4: Recompose the Blog and Contact pages**

Use `BlogCard`, `SplitContentSection`, and `SectionShell` where they reduce duplication without flattening page-specific content.

- [ ] **Step 5: Visual verification across routes**

```bash
npm run lint
```

Then open the Home, Plumbing, Heating, Blog, and Contact routes in the browser and confirm the new primitives preserve the current design.

- [ ] **Step 6: Commit the page refactor**

```bash
git add src/app src/components
git commit -m "feat: refactor repeated page sections with shared primitives"
```

---

### Task 5: Final Validation and Cleanup

**Files:**
- Modify only if verification reveals a regression

- [ ] **Step 1: Run a full source scan for stray `px` typography tokens**

```bash
rg -n "text-\[[0-9.]+px\]|leading-\[[0-9.]+px\]|tracking-\[[^\]]*px\]" src
```

Expected: no matches.

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Expected: pass.

- [ ] **Step 3: Capture browser screenshots for the main routes**

Open and verify:

```bash
http://127.0.0.1:3001/
http://127.0.0.1:3001/plumbing
http://127.0.0.1:3001/heating
http://127.0.0.1:3001/blog
http://127.0.0.1:3001/contact
```

Expected: no obvious regression in spacing, typography, card layouts, or CTA styling.

- [ ] **Step 4: Fix only the issues surfaced by verification**

Keep changes isolated to the specific component or primitive that caused the regression.

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "refactor: standardize rem typography and shared primitives"
```

## Acceptance Criteria

- Typography uses `rem` consistently in edited source files.
- Repeated card and layout patterns are implemented via shared components.
- Page output remains visually consistent with the current design.
- The codebase has fewer duplicated layout wrappers and card chrome blocks.
- Existing content and routing remain unchanged.

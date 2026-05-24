# Rem Typography and Shared Primitives Design

## Goal

Standardize typography to `rem` across the project and reduce repeated layout/card code by introducing a small shared component layer.

## Why This Change

The current codebase contains repeated section patterns across Home, Plumbing, Heating, Blog, and Contact pages:

- Shared header and footer shells
- Primary pill CTAs
- Large rounded hero banners
- Badge / chip labels
- Two-column split content sections
- Service cards
- Testimonial blocks
- Blog article cards
- FAQ layouts

Typography also uses a mix of `px`, `rem`, and `clamp()` values. The project needs a consistent rule so future font sizing is predictable and easier to maintain.

## Scope

### In Scope

- Document the typography rule that font sizes and related text tokens should use `rem`.
- Convert remaining project typography values to `rem` where applicable.
- Introduce a small set of shared primitives for repeated structure.
- Refactor repeated sections to use the primitives without changing page content or visual design.

### Out of Scope

- Rewriting the project into a full design system.
- Moving all page copy into a central CMS-style data model.
- Reworking unrelated visual styles that are already stable.
- Changing brand colors, imagery, or information architecture.

## Typography Rule

### Standard

- Use `rem` for font sizes in component classes and inline styles.
- Use `rem` for typography-related values where practical, including line height and letter spacing.
- Keep responsive sizing expressed with `clamp()` when needed, but ensure the underlying values are `rem`.
- Avoid introducing new `px`-based font sizes.

### Conversion Reference

Common values already used in the project:

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

### Enforcement

- New or edited UI text should use rem-based typography utilities.
- If a component needs exact pixel-perfect typography from Figma, convert the value to rem rather than keeping px.

## Shared Primitives

The shared primitives should stay small and composable. They are meant to remove duplication, not to erase page-specific layout.

### 1. `SectionShell`

Purpose:

- Provide the consistent outer `site-container` wrapper and rounded panel styling used across pages.

Responsibilities:

- Apply consistent horizontal gutter and outer section spacing.
- Support panel background variants such as white, blue, and light blue.
- Accept custom inner padding and radius variants.

### 2. `SplitContentSection`

Purpose:

- Handle the common two-column pattern used by hero-adjacent sections, solution sections, and contact sections.

Responsibilities:

- Support left/right or right/left ordering.
- Accept one text slot and one media slot.
- Support variant padding, alignment, and background settings.

### 3. `PrimaryPillButton`

Purpose:

- Standardize the rounded CTA button that appears across pages.

Responsibilities:

- Support primary and outlined variants.
- Keep pill shape, sizing, and typography consistent.

### 4. `BadgeChip`

Purpose:

- Standardize small pill labels such as `Services`, `Value`, and other chip-style tags.

Responsibilities:

- Support filled and outlined variants.
- Preserve small-chip sizing across cards and hero blocks.

### 5. `MediaCard`

Purpose:

- Unify the repeated card structure where an image sits above or beside a content block.

Responsibilities:

- Support configurable image crop behavior.
- Support optional badge, title, and footer content.
- Preserve page-specific backgrounds and content copy.

### 6. `TestimonialBlock`

Purpose:

- Encapsulate the testimonial/client story layout used on multiple pages.

Responsibilities:

- Support avatar row, star rating, quote copy, and attribution.
- Allow page-specific image and copy props.

### 7. `BlogCard`

Purpose:

- Standardize blog article cards across the blog index and related sections.

Responsibilities:

- Support image, badge, title, body copy, and metadata.
- Keep spacing and button treatments consistent.

### 8. `FaqPanel`

Purpose:

- Reuse the FAQ layout for Plumbing and Heating pages.

Responsibilities:

- Support side image plus accordion content.
- Keep FAQ spacing and button styling consistent.

## Component Boundaries

The primitives should be used as building blocks only. Page-specific content should remain in the page section files unless it is truly shared.

### Keep In Page Files

- Unique copy
- Page-specific images
- Section ordering
- Section-specific data arrays when the structure is page-local

### Extract Into Shared Components

- Repeated structure
- Repeated button shape
- Repeated chip / badge styling
- Repeated two-column layout mechanics
- Repeated card chrome and spacing

## Suggested Folder Shape

- `src/components/ui/section-shell.tsx`
- `src/components/ui/split-content-section.tsx`
- `src/components/ui/primary-pill-button.tsx`
- `src/components/ui/badge-chip.tsx`
- `src/components/ui/media-card.tsx`
- `src/components/ui/testimonial-block.tsx`
- `src/components/ui/blog-card.tsx`
- `src/components/ui/faq-panel.tsx`

This keeps the shared layer obvious without forcing every component into a single monolithic file.

## Rollout Plan

1. Convert the remaining typography units to `rem`.
2. Introduce the shared primitives with the smallest possible prop surface.
3. Refactor the repeated sections to use the new primitives:
   - Home
   - Plumbing
   - Heating
   - Blog
   - Contact
4. Verify each page visually after the refactor.

## Acceptance Criteria

- Typography uses `rem` consistently in edited source files.
- Repeated card and layout patterns are implemented via shared components.
- Page output remains visually consistent with the current design.
- The codebase has fewer duplicated layout wrappers and card chrome blocks.
- Existing content and routing remain unchanged.

## Risks

- Over-generalizing the shared primitives could make page-level styling harder.
- Converting typography units without checking every section could introduce subtle visual shifts.
- Reusing a primitive in places with different spacing expectations could force unnecessary prop complexity.

## Decision

Use a small shared primitive layer and keep page-local content in the page components. This gives the main maintenance benefit without turning the project into a generic component framework.

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

## Component Contract

This section defines the minimum contract for each shared primitive. The goal is to keep the API small and predictable.

### `SectionShell`

Purpose:

- Wrap a page section with the shared site gutter, rounded container, and panel background.

Allowed props:

- `children`
- `className`
- `tone`: `white`, `blue`, `lightBlue`
- `radius`: `sm`, `md`, `lg`
- `padding`: `sm`, `md`, `lg`

Optional props:

- `innerClassName`
- `as`: `section`, `div`, `article`

Should not be used for:

- Card-level chrome
- Button styling
- Content-specific layout logic

### `SplitContentSection`

Purpose:

- Render a two-column editorial section with one text column and one media column.

Allowed props:

- `children`
- `className`
- `media`
- `eyebrow`
- `title`
- `description`
- `cta`

Optional props:

- `mediaPosition`: `left`, `right`
- `align`: `start`, `center`, `end`
- `tone`: `white`, `blue`, `lightBlue`
- `stackOnMobile`: boolean

Should not be used for:

- Three-column grids
- Card galleries
- Sections that do not have a clear text/media split

### `PrimaryPillButton`

Purpose:

- Render the project’s main pill-shaped CTA.

Allowed props:

- `children`
- `href` or `onClick`
- `className`

Optional props:

- `variant`: `primary`, `outlined`
- `size`: `sm`, `md`, `lg`
- `as`: `a`, `button`

Should not be used for:

- Secondary text links
- Icon-only controls
- Navigation tabs

### `BadgeChip`

Purpose:

- Render small pill or outlined labels used as category markers.

Allowed props:

- `children`
- `className`

Optional props:

- `variant`: `filled`, `outlined`
- `tone`: `blue`, `white`
- `size`: `sm`, `md`

Should not be used for:

- Buttons
- Form controls
- Status badges that need icons or counters

### `MediaCard`

Purpose:

- Render the repeated card structure with media on top and content below.

Allowed props:

- `image`
- `alt`
- `title`
- `description`
- `className`

Optional props:

- `badge`
- `footer`
- `imageClassName`
- `contentClassName`
- `variant`: `service`, `blog`, `feature`

Should not be used for:

- Full-page hero layouts
- Split sections with a large text column
- Cards that do not follow the image-plus-content pattern

### `TestimonialBlock`

Purpose:

- Render the testimonial/client story layout with portrait, rating, quote, and attribution.

Allowed props:

- `image`
- `alt`
- `rating`
- `quote`
- `name`
- `title`
- `className`

Optional props:

- `avatars`
- `starCount`
- `layout`: `horizontal`, `vertical`

Should not be used for:

- General article cards
- Blog previews
- Non-quote marketing blocks

### `BlogCard`

Purpose:

- Render a blog post preview card.

Allowed props:

- `image`
- `alt`
- `category`
- `title`
- `excerpt`
- `href`
- `className`

Optional props:

- `author`
- `date`
- `ctaLabel`
- `imageClassName`

Should not be used for:

- Service cards
- Testimonial blocks
- Hero banners

### `FaqPanel`

Purpose:

- Render the two-column FAQ module with media and expandable questions.

Allowed props:

- `image`
- `alt`
- `title`
- `description`
- `items`
- `className`

Optional props:

- `mediaPosition`: `left`, `right`
- `cta`

Should not be used for:

- Generic accordions without the split layout
- Landing-page feature lists
- Testimonial or blog content

## Variant Rules

These rules define which differences belong in props and which differences should stay in the page composition layer.

### Handle With Props

- Theme: `white`, `blue`, `lightBlue`
- Alignment: left, center, or end within the supported layout
- Media position: left or right in split sections
- Badge style: filled or outlined
- CTA presence: shown or hidden
- Card tone: service, blog, feature
- CTA variant: primary or outlined

### Keep Out of Props

- Entirely different section semantics
- One-off page-specific markup that only appears once
- Arbitrary nested layouts that only exist for a single page
- Long copy variations that change the structure of the component

### Guideline

- If the difference is a visual state, use a prop.
- If the difference changes the meaning of the section, keep it in the page component.

## Composition Examples

These examples show how the shared primitives combine to build the existing pages.

### Home

- `SiteNav`
- `HeroSection` built from `SectionShell`, `SplitContentSection`, and `PrimaryPillButton`
- `ServicesSection` built from `SectionShell`, `MediaCard`, and `BadgeChip`
- `SolutionSection` built from `SectionShell`, `SplitContentSection`, and `BadgeChip`
- `TestimonialSection` built from `SectionShell` and `TestimonialBlock`
- `SiteFooter`

### Plumbing

- `SiteNav`
- `PlumbingHeroSection` built from `SectionShell` and `SplitContentSection`
- `PlumbingServicesSection` built from `SectionShell` and `MediaCard`
- `PlumbingSolutionsSection` built from `SectionShell` and `SplitContentSection`
- `PlumbingIntroSection` built from `SectionShell`, `SplitContentSection`, and `PrimaryPillButton`
- `PlumbingEmergencySection` built from `SectionShell` and `SplitContentSection`
- `PlumbingFaqSection` built from `SectionShell` and `FaqPanel`
- `SiteFooter`

### Heating

- `SiteNav`
- `HeatingHeroSection` built from `SectionShell` and `SplitContentSection`
- `HeatingServicesSection` built from `SectionShell` and `MediaCard`
- `HeatingBlueSection` built from `SectionShell`, `SplitContentSection`, and `BadgeChip`
- `HeatingInstallationSection` built from `SectionShell`, `SplitContentSection`, and `MediaCard`
- `SiteFooter`

### Blog

- `SiteNav`
- `BlogHeroSection` built from `SectionShell` and `SplitContentSection`
- `BlogSection` built from `SectionShell`, `BlogCard`, and `BadgeChip`
- `BlogPostsSection` built from `SectionShell`, `BlogCard`, and `PrimaryPillButton`
- `SiteFooter`

### Contact

- `SiteNav`
- `ContactHeroSection` built from `SectionShell` and `SplitContentSection`
- `ContactInfoStrip` built from `SectionShell`
- `ContactVisualSection` built from `SectionShell` and `SplitContentSection`
- `ContactFormSection` built from `SectionShell`, `SplitContentSection`, and `PrimaryPillButton`
- `SiteFooter`

## Do / Don’t Notes

### Do

- Use `SplitContentSection` for repeated editorial two-column modules.
- Use `MediaCard` for repeated card surfaces with an image and content block.
- Use `BadgeChip` for repeated small labels and category pills.
- Use `PrimaryPillButton` for the shared CTA shape across the site.
- Use `TestimonialBlock` for client story patterns that repeat across pages.
- Keep shared components small and prop-driven.

### Don’t

- Don’t create one-off copies of repeated section chrome inside page files.
- Don’t bake page-specific copy into shared primitives.
- Don’t add prop combinations that only support a single page.
- Don’t turn the shared layer into a generic design system if the project only needs a few stable building blocks.
- Don’t use `SplitContentSection` for modules that are not actually split editorial sections.

## Conversion Workflow

1. Convert the remaining typography units to `rem`.
2. Introduce the shared primitives with the smallest possible prop surface.
3. Refactor the repeated sections to use the new primitives.
4. Verify each page visually after the refactor.

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

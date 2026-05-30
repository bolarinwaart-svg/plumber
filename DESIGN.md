---
name: Heat Wave Plumbing & Heating
description: The calm, confident design system for a trusted Leicester plumbing and heating company.
colors:
  brand: "#1d3eb0"
  brand-bright: "#1d5dec"
  brand-accent: "#3a81f7"
  sky: "#eff6ff"
  sky-200: "#bfdbfe"
  ink: "#282828"
  ink-soft: "#3d3d3d"
  white: "#ffffff"
typography:
  display:
    fontFamily: "General Sans, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.125rem, 5.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "General Sans, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2rem, 8vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "General Sans, Arial, Helvetica, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "16px"
  md: "24px"
  lg: "30px"
spacing:
  gutter: "clamp(1rem, 4vw, 2rem)"
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-bright}"
    textColor: "{colors.white}"
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.sky}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  badge-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.brand}"
    rounded: "9999px"
    padding: "4px 12px"
  card-blog:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
---

# Design System: Heat Wave Plumbing & Heating

## 1. Overview

**Creative North Star: "The Calm Professional"**

This is the design equivalent of a tradesperson who arrives on time, does careful
work, and leaves the place tidier than they found it. Every choice signals
competence through restraint, not decoration. Blue carries reassurance; generous
whitespace and consistent alignment do the talking. Nothing shouts, because a
company confident in its work does not need to.

The system is built on tonal blue layering: a pale sky wash for pages, white for
content surfaces, and saturated blue panels as structural anchors. Type is set in
General Sans for headings and Inter for body, a pairing that reads modern and
professional without tipping into either coldness or novelty. Corners are softly
rounded throughout, which keeps a serious palette approachable.

It explicitly rejects the generic plumber-template look: stock-photo collages,
garish blue gradients, clip-art tool icons, and busy 2010-era layouts. It equally
rejects sterile enterprise coldness. The work is professional, but it should always
feel like real, local, reachable people.

**Key Characteristics:**
- Tonal blue layering over shadows; depth from color, not elevation.
- Softly rounded geometry (16/24/30px) on every surface.
- Calm, single-property hover transitions (color, 200ms, ease-out).
- Generous whitespace and tight alignment as the primary signal of quality.
- Real imagery over abstraction; warmth within a professional frame.

## 2. Colors

A tonal blue family anchored by one deep, dependable royal blue, layered from a near-white wash up to saturated structural panels.

### Primary
- **Deep Royal Blue** (#1d3eb0): The anchor. Primary buttons, the footer, dark hero panels, blog category chips. This is the brand's signature, used wherever the company needs to feel established and dependable.
- **Bright Azure** (#1d5dec): The lifted variant of the anchor. Raised blue panels (mission stat block, service card bodies on large screens) and the hover state for every primary surface. Slightly brighter than the anchor, so motion toward it reads as a gentle lift.

### Secondary
- **Active Azure** (#3a81f7): The accent. The current/active navigation pill, secondary CTAs like "View all", and filled badge chips. Reserved for state and emphasis, never large fills.

### Neutral
- **Sky Wash** (#eff6ff): The page background and light-surface tone. The system's resting canvas; also the text color on dark blue panels.
- **Soft Cornflower** (#bfdbfe): Mid-light blue. Chip and card-media beds, the blog section panel. The gentle midpoint between wash and white.
- **White** (#ffffff): Content surfaces, cards, the nav bar pill, input fills.
- **Ink** (#282828): Primary text on light surfaces. A near-black, never pure #000.
- **Soft Ink** (#3d3d3d): Secondary and body text, descriptions, supporting copy.

### Named Rules
**The Tonal Layer Rule.** Depth is built by stacking the blue family (sky wash under white under bright-azure panels), not by adding shadows. If a surface needs to feel raised, change its tone, do not drop a shadow under it.

**The Accent Restraint Rule.** Active Azure (#3a81f7) marks state and emphasis only: the current nav item, a secondary CTA, a filled chip. It is never used as a large background fill; that job belongs to Deep Royal Blue.

## 3. Typography

**Display Font:** General Sans (with Arial, Helvetica fallback)
**Body Font:** Inter (with Arial, Helvetica fallback)

**Character:** General Sans gives headings a contemporary, slightly geometric confidence; Inter keeps body copy quiet, legible, and neutral. Together they read modern and professional, the opposite of the dated default-system-font plumber site.

### Hierarchy
- **Display** (600, clamp(2.125rem, 5.6vw, 4.25rem), 1.1): The hero H1 only. One per page.
- **Headline** (500, clamp(2rem, 8vw, 4rem), 1.15): Section H2s and the oversized mission stat ("30k+"). Medium weight keeps large type from feeling heavy.
- **Title** (600, 1.5rem / 1.5–2rem, 1.4): Card titles, service names, footer column headers.
- **Body** (400, 1–1.125rem, 1.5): All paragraph copy in Soft Ink. Capped at 60ch for comfortable reading.
- **Label** (500, 0.875rem, 1.4): Badge chips, blog metadata, footer links.

### Named Rules
**The Two-Family Rule.** Headings are always General Sans; body is always Inter. Never set body copy in the display face or headings in Inter.

## 4. Elevation

Flat by default. Depth comes from tonal color layering (sky wash beneath white surfaces beneath saturated blue panels), not from shadows. The interface reads clean and calm because surfaces sit at rest.

Shadows appear only when an element genuinely floats above the page: the mobile navigation dropdown lifts off the canvas with a soft, diffuse, blue-tinted shadow. This is the exception that proves the rule, a true overlay, not decoration.

### Shadow Vocabulary
- **Floating overlay** (`box-shadow: 0 18px 50px rgba(25,45,85,0.16)`): The mobile menu dropdown. Soft, wide, and tinted toward the brand blue rather than neutral gray.

### Named Rules
**The Flat-At-Rest Rule.** Surfaces are flat at rest. A shadow is permitted only on an element that literally floats over other content (overlays, menus, popovers). If it sits in the page flow, it gets no shadow; raise it with tone instead.

## 5. Components

The component feel is **soft and confident**: generous rounded corners, solid blue fills, and calm hover shifts. Approachable, but assured.

### Buttons
- **Shape:** Fully rounded pills (30px radius).
- **Primary:** Deep Royal Blue (#1d3eb0) fill, white text, 12px/24px padding. The dominant CTA across the site.
- **Hover / Focus:** Background eases to Bright Azure (#1d5dec) over 200ms ease-out (color only, never layout). Active returns to the anchor. Keyboard focus shows a 2px Active Azure outline at 2px offset.
- **Outlined:** Transparent fill, Sky Wash border and text, for use on dark blue panels (e.g. footer "Subscribe"). Hover fills with white at 10% opacity.

### Chips
- **Style:** Fully rounded. Outlined-on-white is the default (Active Azure border, Deep Royal Blue text, white fill) used as section eyebrows ("Value", "Services", "Blog"). Filled variant uses Active Azure background with white text.
- **State:** Static labels, not interactive controls.

### Cards / Containers
- **Corner Style:** 24px (md), softening to larger radii on wide screens.
- **Background:** White for blog cards; Sky for service/feature card shells; blue (anchor or bright) for service card content bodies.
- **Shadow Strategy:** None. See Elevation; depth is tonal.
- **Border:** None; tone separation does the work.
- **Internal Padding:** 16–24px, scaling up at larger breakpoints.
- **Behavior:** Blog cards are a hover group, the image gently zooms (scale 1.04, 500ms ease-out) and the title shifts to Deep Royal Blue.

### Inputs / Fields
- **Style:** White fill, Sky Wash border, fully rounded (30px), Soft Ink text.
- **Focus:** Border shifts to Active Azure; the global 2px Active Azure focus-visible outline confirms keyboard focus.
- **Error / Disabled:** Not yet defined; follow the brand palette when added.

### Navigation
- **Style:** A white pill bar floating on the Sky Wash header. Links are General-Sans semibold.
- **States:** Default Ink; hover fills the link with Sky Wash; the active route is a solid Active Azure pill with white text.
- **Mobile:** Logo plus two round controls (a Deep Royal Blue call button, a white menu trigger). The menu opens as a floating white overlay, the system's one sanctioned shadow.

## 6. Do's and Don'ts

### Do:
- **Do** build depth with the tonal blue stack (sky wash → white → bright-azure panel), per The Tonal Layer Rule.
- **Do** reserve Active Azure (#3a81f7) for state and emphasis only, per The Accent Restraint Rule.
- **Do** set every heading in General Sans and every paragraph in Inter, per The Two-Family Rule.
- **Do** keep hover transitions to a single property (color), 200ms, ease-out.
- **Do** give every interactive element a visible hover and a 2px Active Azure focus-visible outline.
- **Do** use real plumbing and heating imagery; lead with the photograph.

### Don't:
- **Don't** ship the generic plumber-template look: stock-photo collages, garish blue gradients, clip-art tool icons, or busy layouts.
- **Don't** let it read cheap or dated; no cluttered, low-budget, stuck-in-2010 composition.
- **Don't** go cold and corporate; professional is required, but sterile enterprise sterility with no human warmth is not.
- **Don't** add shadows to in-flow surfaces; raise with tone, not elevation (The Flat-At-Rest Rule).
- **Don't** use pure #000 or #fff for text; use Ink (#282828) and the tinted neutrals.
- **Don't** animate layout properties or use bounce/elastic easing; calm, exponential ease-out only.

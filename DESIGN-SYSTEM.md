# Design System: Kinetic Typography

Reference doc for implementation. Companion to `REQUIREMENTS.md`.

## Philosophy
Typography is the structure, not decoration. High-energy brutalism meets kinetic poster design — confident through scale, urgent through motion, clear through contrast. Nothing sits still: constant motion (marquees), reactive motion (hover), or scroll-triggered motion (parallax, scale transforms).

## Color Tokens
| Token | Hex | Use |
|---|---|---|
| `background` | `#09090B` | Rich black base |
| `foreground` | `#FAFAFA` | Off-white body/heading text |
| `muted` | `#27272A` | Secondary surfaces, background numbers |
| `muted-foreground` | `#A1A1AA` | Body/description text |
| `accent` | `#DFE104` | Acid yellow — hero highlights, hover states, focus |
| `accent-foreground` | `#000000` | Text on accent backgrounds |
| `border` | `#3F3F46` | All structural lines |

Rules: accent used sparingly but boldly; never plain gray for secondary text (use muted-foreground); no gradients; stay at contrast extremes, avoid mid-tone grays.

**Deliberate exception:** the site-wide ambient liquid-gradient background (`.liquid-wrap`/`.blob*` in `app/globals.css`, mounted via `components/LiquidBackground.tsx`) is an intentional departure from "no gradients." It's a low-opacity, blurred, animated layer behind all content — not a gradient applied to text, borders, or surfaces. Do not "fix" it back to flat as a design-system cleanup; if it needs to change, that's a deliberate design call, not a bug.

**Note on the contrast figures below:** these ratios look right for the hex pairs given, but treat them as estimates to confirm with a contrast checker before launch, not as verified numbers.
- Foreground on background: ~15:1 (I believe this clears WCAG AAA, but verify)
- Accent on background: ~12:1
- Muted-foreground on background: ~6:1 (AA for large text)
- Black text on accent: ~14:1

## Typography
- **Primary font:** Space Grotesk (variable weight 300–700)
- **Fallback:** Inter

| Role | Size |
|---|---|
| Hero/Display | `clamp(3rem, 12vw, 14rem)` |
| Section heading | `text-5xl md:text-7xl lg:text-8xl` |
| Card title | `text-2xl md:text-3xl lg:text-6xl` |
| Body | `text-lg md:text-xl lg:text-2xl` |
| Small label | `text-xs md:text-sm lg:text-lg` |
| Decorative numbers | `text-[6rem] md:text-[8rem]` up to `text-[8rem] md:text-[12rem]` |
| Nav/micro | `text-sm md:text-base` |

Rules: all display text (headings, buttons, labels) uppercase; body text normal case. `tracking-tighter` on large display, `tracking-tight` on body, `tracking-wide`/`tracking-widest` on small labels. `leading-none`/`leading-[0.8]` on display headlines, `leading-tight` on large body. Bold (700) for headings/buttons, medium (500) body, regular (400) secondary. Headline-to-body ratio should be 3–5x, not the usual 1.5–2x.

## Spacing
Base unit: 4px (Tailwind default scale).
- Major section padding: `py-32`
- Subsection: `py-20`
- Dense areas: `py-12`
- Card/container padding: `p-8` to `p-12`
- Element gaps: `gap-8` standard, `gap-4` tight groups
- Max width: push wide — `max-w-[90vw]`–`max-w-[95vw]` for hero, `max-w-5xl`/`max-w-6xl` for body content, `max-w-2xl` for long-form text, full-bleed for marquees

## Shape & Depth
- Border radius: `0px` everywhere (rare exception: `rounded-sm` on small elements)
- Borders: `border-2` for structural emphasis, `border` for subtle dividers, always solid, color `#3F3F46`
- **No drop shadows anywhere** — depth comes from color layering (muted-tone background numbers) and overlap, not shadow
- Section dividers: full-width border-top/bottom, or hard background color flips (black section → yellow section)

## Components

**Buttons** — uppercase, tight tracking, bold weight, sharp corners. Height: 56px default / 40px small / 80px large.
- Primary: accent background, black text, `hover:scale-105`, `active:scale-95`
- Outline: 2px zinc-700 border, transparent bg, hard-fills to off-white on hover with black text
- Ghost: no border/background, text flips to accent on hover

**Cards** — 2px zinc-700 border, `#09090B` background, `p-8`/`p-12`, 0px radius. On hover: background floods to accent, border flips to accent, all text inverts to black (use group classes to coordinate). 300ms transition, hard flip rather than gradual.

**Inputs** — tall (h-24), bottom-border only, transparent background, large bold uppercase text (`text-4xl`). Focus: border-bottom flips to accent, no ring. Placeholder in muted tone, same size/case as input text.

## Motion

**Marquees** (`react-fast-marquee`):
- Stats strip: speed 80, no gradient fade, autoFill true
- Testimonials/wide content: speed 40, no gradient fade
- Linear easing only, never pause on hover, never stop

**Scroll (Framer Motion `useScroll`):**
- Hero parallax: scale 1.0 → 1.2 and opacity 1 → 0 over first ~20% of scroll
- Sticky cards: `sticky top-32`, no transform — physical stacking creates the layered effect

**Micro-interactions:**
- Button hover/active: scale 1.05 / 0.95, 200–300ms, ease-in-out
- Card hover: 300ms hard color flip
- Accordion: height 0→auto, opacity fade in, spring easing, `initial: false`

**Accessibility for motion:** wrap all marquees and scroll-triggered animation in `prefers-reduced-motion: no-preference`; provide a static fallback that preserves layout and hierarchy without motion.

## Bold-Factor Checklist (what makes this recognizable, not generic)
- [ ] At least one headline using viewport-width units (`clamp()`, 10vw+)
- [ ] At least two marquee sections — one fast (stats), one slower (reading content)
- [ ] Oversized decorative numbers (8–12rem) in muted tone as background shapes
- [ ] Hard color-inversion hovers on cards/sections, clean not gradual
- [ ] All display text uppercase, tight tracking
- [ ] Headline-to-body scale ratio of 8–10x
- [ ] 0px radius, 2px zinc-700 borders, no shadows anywhere

## Anti-Patterns to Avoid
- Pure black/white, pastels, mid-tones, gradients (except the deliberate liquid-background exception noted above), multiple accent colors
- Serif/script fonts, mixed case in display text, normal/wide tracking on large text
- Center-aligned body text, small max-widths, standard `py-16` section padding
- Drop shadows, slow transitions (800ms+), pausing marquees, small/subtle buttons
- Border-radius above 2px, soft/subtle borders under 1px

## Accessibility Checklist
- [ ] Test with a screen reader (NVDA/JAWS/VoiceOver)
- [ ] Full keyboard navigation, visible focus indicators (2px accent border/ring minimum)
- [ ] `prefers-reduced-motion` respected across all animated elements
- [ ] Decorative background numbers marked `aria-hidden="true"`
- [ ] Touch targets ≥44×44px
- [ ] Verify all contrast pairs with a real checker (see note in Color Tokens)
- [ ] Test at 320px, 768px, 1024px, 1440px+

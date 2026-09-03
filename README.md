# Orbion — Agency Website

A live, front-end implementation of the **Orbion Agency Website** design (Figma), starting
with the **Home page (Desktop)**.

🔗 Source design: [Orbion Agency Website — Figma](https://www.figma.com/design/RKTOIGnk0RBYuot1LVOzkq/Orbion-Agency-Website-design?node-id=728-149)

## What's included

The full desktop Home page, section by section, matching the Figma frame `Home (Desktop)`:

1. Navigation bar (logo, pill menu, Free Consultation CTA)
2. Hero — display heading, dual CTAs, and the illustration cluster (99% stats card, Decided Quality card, "How its work")
3. Partner logo marquee
4. About us — image collage + "Powerful agency for corporate business"
5. Recent work — staggered project grid (dark)
6. Services — interactive accordion
7. Process — image carousel
8. Testimonials — stat cards + testimonial masonry (dark)
9. Second partner marquee
10. Creative solution — feature image with overlay
11. Articles & resources
12. Footer — newsletter, link columns, socials

## Tech

- **Plain HTML, CSS and vanilla JS** — no build step, no framework.
- Design tokens (colours, type scale) are lifted from the Figma variables into CSS custom
  properties in `css/styles.css`.
- Typeface: **General Sans** (via Fontshare) with **Plus Jakarta Sans** (Google Fonts) as a fallback.
- All icons and decorative shapes are hand-authored **inline SVG**.
- Photographs use layered placeholders: a brand-tinted gradient sits behind each `<img>`, so the
  layout looks intentional even before/if a photo fails to load. Swap the `src` URLs for your own
  assets when you have them.

## Run locally

It's a static site — just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html        # markup for all 12 sections
css/styles.css    # design tokens + section styles + responsive rules
js/script.js      # services accordion, process carousel, newsletter demo
```

## Responsive

The design is desktop-first at 1440px. The layout scales down and collapses to a single-column
stack on tablet/mobile widths. Dedicated mobile/tablet Figma frames exist and can be built out next.

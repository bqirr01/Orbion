# Image assets — export from Figma

Drop the exported files in **this folder** (`assets/img/`) using the **exact filenames**
below. The site loads these automatically; until a file exists it falls back to a
temporary stock photo, and if that also fails, to a brand-coloured gradient — so the
layout is never broken.

## How to export from Figma
1. Open the [Orbion design](https://www.figma.com/design/RKTOIGnk0RBYuot1LVOzkq/Orbion-Agency-Website-design?node-id=728-149).
2. Select the layer (use the node IDs below — `Ctrl/Cmd + \` opens the layers panel; you can also paste a node id after the `?node-id=` in the URL).
3. In the right panel → **Export** → choose format → **Export**.
4. Rename the file to match the name in the table and save it here.

> Tip: export **photos as JPG** (or PNG) and **logos/icons as SVG**. Use 2× scale for crisp photos.

## Photos (JPG/PNG)

| Filename            | Section        | Figma layer / node                    |
|---------------------|----------------|---------------------------------------|
| `hero-portrait.jpg` | Hero           | Portrait photo in illustration (`2008:1606`) |
| `hero-leaf.jpg`     | Hero           | Small plant in the green badge (`2008:1635`) |
| `about-team.jpg`    | About us       | Main team photo (`2008:1711`)         |
| `about-leaf.jpg`    | About us       | Woman-with-leaf photo (`2008:1715`)   |
| `work-1.jpg`        | Recent work    | 1st project image                     |
| `work-2.jpg`        | Recent work    | 2nd project image                     |
| `work-3.jpg`        | Recent work    | 3rd project image                     |
| `work-4.jpg`        | Recent work    | 4th project image                     |
| `service-websites.jpg` | Services    | "Websites" laptop/responsive image    |
| `process-1.jpg`     | Process        | Left carousel image                   |
| `process-2.jpg`     | Process        | Center image "Discussion of the idea" (`2009:461`) |
| `process-3.jpg`     | Process        | Right carousel image                  |
| `process-4.jpg`     | Process        | (optional) extra carousel image       |
| `creative-desk.jpg` | Creative solution | Man-at-desk image (`2009:680`)     |
| `article-1.jpg`     | Articles       | 1st article thumbnail                  |
| `article-2.jpg`     | Articles       | 2nd article thumbnail                  |
| `article-3.jpg`     | Articles       | 3rd article thumbnail                  |
| `article-avatar.jpg`| Articles       | Small author avatar on 1st card        |
| `avatar-1.jpg` … `avatar-7.jpg` | Testimonials | Reviewer avatars (top → bottom, left → right) |

## Logos (SVG preferred)
The **Orbion** logo and partner logos are currently drawn in code. If you want the exact
Figma versions, export them as SVG and tell me — I'll swap them in:

| Suggested filename  | What                                  |
|---------------------|---------------------------------------|
| `logo-orbion.svg`   | Orbion wordmark + mark (nav)          |
| `partner-*.svg`     | DocuSign, maze, Culture Amp, HelloSign, attentive |

---
After adding the files, just refresh the page (or re-deploy). No code changes needed.

## Sub-page images (About / Service / Testimonial / Pricing / Blog / Contact)
Same rule — drop a JPG with the exact name and it loads automatically.

| Filename | Page · where |
|---|---|
| `about-vision.jpg` | About · Vision photo |
| `staff-1.jpg` … `staff-3.jpg` | About & Contact · team members |
| `service-team.jpg` | Service · Creative Approach photo |
| `service-websites.jpg` | Service & Home · "Websites" laptop |
| `tst-hero.jpg` | Testimonial · header portrait |
| `tst-adam.jpg` | Testimonial · feedback portrait |
| `contact-team.jpg` | Contact · form photo |
| `contact-office.jpg` | Contact · map background |
| `blog-feature.jpg` | Blog · featured hero |
| `blog-1.jpg` … `blog-9.jpg` | Blog · article thumbnails |
| `blog-hl.jpg` | Blog · highlighted article photo |

Every page also falls back to a stock photo, then a brand gradient, so the
layout is never broken while assets are being added.

# Studio Zenya — Marketing Site & Brand Kit

## Overview
A modern, fully-branded marketing website for **Studio Zenya**, a Pilates studio in Mkalles, Lebanon. The original GitHub import was a brand-kit-only repository (logos, fonts, patterns, social media assets, source files). It has been rebuilt as a complete revamp of the existing studiozenya.com site, using the supplied brand assets.

## Pages
- `/` — Marketing homepage (hero, about, classes, weekly schedule, free-trial CTA, gallery, contact form, embedded map, footer)
- `/brand-kit` — Browsable brand kit gallery (logos, palette, typography preview, patterns, social media, downloadable source files)
- `/api/assets` — JSON catalog of all brand-kit assets used by the brand-kit page

## Brand System
- **Typography:** Vonique 43 (display, italic accents), Gotham Light/Medium/Bold (body)
- **Palette:** Espresso `#2A2118`, Tan `#B9956B`, Tan-Light `#D4B890`, Sand `#ECE4D6`, Cream `#F4EFE8`, Stone `#7A6F60`
- **Imagery:** Real studio photos extracted programmatically from Instagram-post brand templates (`scripts/crop_photos.py` → `studio-photos/`)

## Project Structure
- `index.html` — Marketing homepage (one-page design with anchor navigation)
- `brand-kit.html` — Brand kit asset gallery (formerly the homepage)
- `server.py` — Threaded Python `SimpleHTTPRequestHandler` on port 5000; routes `/brand-kit` → `brand-kit.html`, exposes `/api/assets`
- `scripts/crop_photos.py` — Extracts clean studio photos from `INSTAGRAM POST/*.jpg` templates into `studio-photos/`
- `studio-photos/` — Generated, web-optimized JPGs (8 images) used across the marketing site
- Asset folders (untouched from the import):
  - `JPEG-PNG/` — Logo suite raster exports
  - `PATTERN/` — Brand patterns
  - `INSTAGRAM POST/` — Original Canva templates with embedded photos
  - `HIghlight Icons/` — Story highlight icons
  - `Social media kit/` — Profile / cover images
  - `social media icons/` — Profile icon variants
  - `favicon/` — Favicon set
  - `Fonts/` — Brand fonts
  - `SOURCE FILE/` — Vector source files (.ai, .eps, .pdf)

## Booking & Contact Flow
The marketing site routes booking actions through WhatsApp deep-links (`+961 71 511 101`) since that's the studio's primary booking channel. The contact form composes a structured WhatsApp message and opens it in a new tab; no backend mailer is used.

## Tech / Setup
- **Runtime:** Python 3.11 (standard library + Pillow for the cropping script)
- **Server command:** `python3 server.py` (binds `0.0.0.0:5000`)
- **Workflow:** `Start application` → webview on port 5000
- **Deployment:** Autoscale, runs `python3 server.py`

## Notes
- Cache headers are disabled in dev so changes are visible immediately.
- Python's built-in `SimpleHTTPRequestHandler` does no host-header verification, so the Replit proxy preview works out of the box.
- Studio photos in `studio-photos/` are regeneratable by running `python3 scripts/crop_photos.py`.

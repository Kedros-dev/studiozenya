# Studio Zenya — Marketing Site (React + Vite)

## Overview
A modern, fully-branded marketing website for **Studio Zenya**, a boutique Pilates studio in Mkalles, Lebanon. Originally a brand-asset-only repo, then a Python static prototype, now rebuilt as a polished React + Vite + TypeScript single-page experience using framer-motion for scroll animations.

## Tech Stack
- **React 18** + **Vite 5** + **TypeScript**
- **framer-motion** for scroll-reveal and micro-animations
- **react-router-dom** (installed for future multi-page routing)
- **CSS Modules** per component (no Tailwind / no UI library — uses raw brand tokens)
- Vite dev server on port 5000, hot reload enabled
- Autoscale deployment: `npm run build` → `npm run start` (vite preview)

## Page Sections (in order)
1. **Hero** — full-bleed studio photo with the Fraunces serif headline and dual CTAs
2. **About** — studio story with floating stats and brand pattern accents
3. **Classes** — Flow & Glow / Tough & Strong / Booty Zone cards with pill-style WhatsApp CTAs
4. **Pricing** — three transparent membership packages, all routing to WhatsApp
5. **Gallery** — curated grid of real studio photography
6. **Testimonials** — rotating Lebanese client quotes
7. **FAQ** — accordion of common pre-trial questions
8. **Visit / Reserve** — replaces the old email form: WhatsApp + phone CTAs, opening hours, embedded Google Map of Mkalles

Plus: sticky **Nav** with circular logo and Studio / Classes / Pricing / FAQ links, **Footer**, and a floating **WhatsApp FAB** always in the bottom-right.

## Brand System
- **Palette:** Espresso `#2A2118`, Tan `#B9956B`, Tan-Light `#D4B890`, Tan-Deep `#9A774F`, Sand `#ECE4D6`, Cream `#F4EFE8`, Stone `#7A6F60` — exposed as CSS variables in `src/styles/index.css`
- **Typography:** Fraunces (display, warm humanist serif with elegant italics) + Inter (body, clean and highly legible) — both via Google Fonts. Vonique 43 retained as a wordmark accent (`--font-wordmark`). The original Vonique was swapped because it lacked common glyphs (incl. `$`) and was hard to read at body sizes.
- **Patterns:** `/public/assets/patterns/Pattern-01..06.{png,jpg}` used as low-opacity section textures
- **Photography:** Real studio photos in `/public/assets/studio-photos/photo-*.jpg`, extracted from the original Instagram-post Canva templates

## Project Structure
```
public/assets/         All brand assets (fonts, logos, patterns, studio-photos, instagram, favicon, social kit)
src/
  main.tsx             Entry
  App.tsx              Section composition
  styles/index.css     Global tokens + @font-face
  vite-env.d.ts        CSS module type declarations
  components/          Nav, Footer, WhatsAppFAB
  sections/            Hero, About, Classes, Pricing, Gallery, Testimonials, InstagramFeed, FAQ, Visit
  data/content.ts      Static content data
index.html             Root HTML with SEO meta + OG tags
vite.config.ts         host: 0.0.0.0, port: 5000, allowedHosts: true
```

## Booking & Contact
All booking/contact CTAs deep-link to WhatsApp `+961 71 511 101` with prefilled messages. The phone CTA uses `tel:+96179077076`. There is intentionally **no email contact form** — the studio handles all booking through WhatsApp.

## Real Business Facts
- **Address:** Mkalles, Lebanon · plus code VHJF+5Q2
- **Phone:** +961 79 077 076
- **WhatsApp (booking):** +961 71 511 101
- **Email:** ribal@studiozenya.com (in footer only)
- **Instagram:** [@studiozenya](https://instagram.com/studiozenya)
- **Hours:** Mon–Fri 7:00–21:00 · Sat 8:00–18:00 · Sun closed

## Local Development
- `npm run dev` — start Vite dev server on port 5000 (workflow `Start application`)
- `npm run build` — production build → `dist/`
- `npm run start` / `npm run preview` — serve the built bundle on port 5000

## Deployment
Configured as **Autoscale** with build step `npm run build` and run command `npm run start`. Click **Publish** in Replit to push live; deployment auto-handles TLS and the `.replit.app` domain (or your custom domain).

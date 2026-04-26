# Studio Zenya — Brand Kit

## Overview
This project is a static brand-kit gallery for **Studio Zenya**. The original GitHub import contained only brand assets (logos, fonts, patterns, social media images, source files). It has been wrapped with a lightweight gallery website so the brand kit can be browsed and downloaded directly in the browser.

## Project Structure
- `index.html` — Single-page brand kit gallery (color palette, typography preview, asset grids, lightbox).
- `server.py` — Python `http.server` based static file server with a `/api/assets` endpoint that introspects the asset folders and returns a JSON catalog.
- Asset folders (untouched from the import):
  - `JPEG-PNG/` — Logo suite raster exports
  - `PATTERN/` — Brand patterns
  - `INSTAGRAM POST/` — Social post templates
  - `HIghlight Icons/` — Story highlight icons
  - `Social media kit/` — Profile and cover images
  - `social media icons/` — Profile icon variants
  - `favicon/` — Favicon set
  - `Fonts/` — Brand fonts (Vonique 43, Gotham Light/Medium/Bold)
  - `SOURCE FILE/` — Vector source files (.ai, .eps, .pdf)

## Tech / Setup
- **Runtime:** Python 3.11 (standard library only)
- **Server:** `python3 server.py` binds `0.0.0.0:5000`, threaded `SimpleHTTPRequestHandler`
- **Cache:** No-store headers in dev so changes are visible immediately
- **Workflow:** `Start application` → `python3 server.py` (port 5000, webview)

## Notes
- No external Python packages are required.
- The frontend trusts all hosts because it uses Python's built-in `SimpleHTTPRequestHandler` which does not perform host-header verification.

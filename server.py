#!/usr/bin/env python3
"""Simple static HTTP server for the Studio Zenya brand kit gallery."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os
import json
import urllib.parse

PORT = 5000
HOST = "0.0.0.0"
ROOT = os.path.dirname(os.path.abspath(__file__))

ASSET_DIRS = [
    "JPEG-PNG",
    "PATTERN",
    "INSTAGRAM POST",
    "HIghlight Icons",
    "Social media kit",
    "social media icons",
    "favicon",
    "Fonts",
    "SOURCE FILE",
]

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico"}
DOWNLOADABLE_EXTS = {".ai", ".eps", ".pdf", ".otf", ".ttf", ".txt"}


def list_assets():
    catalog = []
    for d in ASSET_DIRS:
        full = os.path.join(ROOT, d)
        if not os.path.isdir(full):
            continue
        items = []
        for name in sorted(os.listdir(full)):
            path = os.path.join(full, name)
            if not os.path.isfile(path):
                continue
            ext = os.path.splitext(name)[1].lower()
            kind = "image" if ext in IMAGE_EXTS else "file"
            if ext not in IMAGE_EXTS and ext not in DOWNLOADABLE_EXTS:
                continue
            items.append({
                "name": name,
                "url": "/" + urllib.parse.quote(d) + "/" + urllib.parse.quote(name),
                "kind": kind,
                "ext": ext.lstrip("."),
                "size": os.path.getsize(path),
            })
        if items:
            catalog.append({"section": d, "count": len(items), "items": items})
    return catalog


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        if self.path == "/api/assets":
            data = json.dumps(list_assets()).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        # Brand kit gallery lives at /brand-kit
        if self.path in ("/brand-kit", "/brand-kit/"):
            self.path = "/brand-kit.html"
        return super().do_GET()

    def log_message(self, format, *args):
        # Concise log line
        print("[%s] %s" % (self.log_date_time_string(), format % args), flush=True)


if __name__ == "__main__":
    os.chdir(ROOT)
    httpd = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"Studio Zenya brand kit serving on http://{HOST}:{PORT}", flush=True)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()

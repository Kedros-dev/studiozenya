"""Extract clean studio photos from Instagram-post brand templates."""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "INSTAGRAM POST")
OUT = os.path.join(ROOT, "studio-photos")
os.makedirs(OUT, exist_ok=True)

# (source filename, [list of (left, top, right, bottom) crop ratios as fractions])
CROPS = {
    "1.jpg": [
        # Single photo on the left side of the layout
        (0.06, 0.32, 0.46, 0.93),
    ],
    "2.jpg": [
        # Single landscape photo bottom-center
        (0.27, 0.34, 0.93, 0.85),
    ],
    "3.jpg": [
        # Wide group shot in the middle band
        (0.05, 0.28, 0.95, 0.74),
    ],
    "4.jpg": [
        # Two side-by-side photos at the top
        (0.05, 0.04, 0.49, 0.66),
        (0.51, 0.04, 0.95, 0.66),
    ],
    "5.jpg": [
        # Three photos in middle row
        (0.06, 0.32, 0.31, 0.83),
        (0.31, 0.32, 0.69, 0.83),
        (0.69, 0.32, 0.94, 0.83),
    ],
}

count = 0
for fname, crops in CROPS.items():
    path = os.path.join(SRC, fname)
    if not os.path.exists(path):
        print("missing:", path)
        continue
    img = Image.open(path).convert("RGB")
    w, h = img.size
    base = os.path.splitext(fname)[0]
    for i, (l, t, r, b) in enumerate(crops):
        box = (int(l * w), int(t * h), int(r * w), int(b * h))
        crop = img.crop(box)
        # Resize to max 1600px on long edge for web
        max_side = 1600
        cw, ch = crop.size
        scale = min(1.0, max_side / max(cw, ch))
        if scale < 1.0:
            crop = crop.resize((int(cw * scale), int(ch * scale)), Image.LANCZOS)
        suffix = "" if len(crops) == 1 else f"-{i+1}"
        out_path = os.path.join(OUT, f"photo-{base}{suffix}.jpg")
        crop.save(out_path, "JPEG", quality=86, optimize=True, progressive=True)
        count += 1
        print(f"wrote {out_path}  ({crop.size[0]}x{crop.size[1]})")

print(f"\nDone — {count} photos extracted to {OUT}")

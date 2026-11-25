// Turns content/content.json (exported from the editor page) into
// public/pagoda/content.js, which the site loads before pagoda.js.
// Pictures inside the file are saved as normal image files.
// Runs by itself before every "npm run dev" and "npm run build".
import fs from "node:fs";
import path from "node:path";

const SRC = "content/content.json";
const OUT = "public/pagoda/content.js";
const IMG_DIR = "public/pagoda/img";
const EXT = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp", "image/gif": "gif" };

// remove pictures made by an earlier run
for (const f of fs.readdirSync(IMG_DIR)) if (f.startsWith("c-")) fs.unlinkSync(path.join(IMG_DIR, f));

if (!fs.existsSync(SRC)) {
  fs.writeFileSync(OUT, "window.NK_CONTENT = null;\n");
  console.log("content: no content/content.json, using the built-in content");
  process.exit(0);
}

const data = JSON.parse(fs.readFileSync(SRC, "utf8"));
if (!Array.isArray(data.steps)) throw new Error("content/content.json has no steps list");

const images = {};
for (const [key, value] of Object.entries(data.images || {})) {
  if (!/^[A-Za-z0-9_-]+$/.test(key)) continue;
  const m = /^data:(image\/(?:png|jpeg|webp|gif));base64,(.+)$/.exec(String(value));
  if (!m) continue;
  const file = `c-${key}.${EXT[m[1]]}`;
  fs.writeFileSync(path.join(IMG_DIR, file), Buffer.from(m[2], "base64"));
  images[key] = `/pagoda/img/${file}`;
}

const out = { v: 1, t: Number(data.t) || Date.parse(data.exported) || Date.now(), steps: data.steps, images };
fs.writeFileSync(OUT, `window.NK_CONTENT = ${JSON.stringify(out).replace(/</g, "\\u003c")};\n`);
console.log(`content: ${data.steps.length} rooms, ${Object.keys(images).length} pictures`);

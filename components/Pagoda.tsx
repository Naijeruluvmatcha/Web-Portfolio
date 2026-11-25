"use client";

import { useEffect } from "react";

import { PAGODA_MARKUP } from "./pagoda-markup";

// Loaded one after another, in this order. pagoda.js needs the other three first.
const SCRIPTS = [
  "https://cdn.jsdelivr.net/npm/babylonjs@7.54.3/babylon.js",
  "https://cdn.jsdelivr.net/npm/animejs@4.0.2/lib/anime.umd.min.js",
  "/pagoda/content.js",
  "/pagoda/pagoda.js",
];

function loadScript(src: string) {
  return new Promise<void>((resolve) => {
    const el = document.createElement("script");
    el.src = src;
    el.async = false;
    el.onload = () => resolve();
    // A failed load is not fatal: without the 3D library the page
    // falls back to its plain readable version.
    el.onerror = () => resolve();
    document.body.appendChild(el);
  });
}

export default function Pagoda() {
  useEffect(() => {
    const w = window as Window & { __nkBoot?: boolean };
    if (w.__nkBoot) return; // React runs effects twice in dev mode
    w.__nkBoot = true;
    (async () => {
      for (const src of SCRIPTS) await loadScript(src);
    })();
  }, []);

  return <div id="nk-app" dangerouslySetInnerHTML={{ __html: PAGODA_MARKUP }} />;
}

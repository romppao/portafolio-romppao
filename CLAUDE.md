# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page React portfolio site for ROMPPAO (photographer/filmmaker in Madrid), bootstrapped with Create React App. Deployed to GitHub Pages at `https://romppao.es/`. There is no backend — the entire site is one component reading from a static in-file data array.

## Commands

```bash
npm start            # dev server at http://localhost:3000/portafolio-romppao
npm run build         # production build to build/
npm test              # CRA/Jest test runner (watch mode); only test is src/App.test.js
npm run deploy         # builds, then publishes build/ to the gh-pages branch (predeploy runs build automatically)

node optimize-images.js              # batch-optimize every JPG in public/images/ (resize to 1200px, quality 85, mozjpeg) in place
node optimize-single-image.js <file> # same optimization for one file in public/images/, e.g. retrato-12.jpg
```

There is no lint script configured beyond CRA's built-in ESLint (`eslintConfig` in package.json extends `react-app`), which runs as part of `npm start`/`npm run build`.

**Required workflow after any content change** (adding photos/videos, editing text): commit and deploy explicitly — `npm start` alone does not publish anything.
```bash
git add .
git commit -m "..."
git push
npm run deploy
```

## Architecture

Nearly everything lives in `src/App.js`, structured in two parts:

1. **`portfolioItems`** — a single flat array of data objects (photos and videos) at the top of the file. Each item has `id`, `type` (`'photo'` | `'video'`), `category`, `src` (image/thumbnail URL), `alt`, `title`, `description`, and for videos a `videoUrl`. This array *is* the content model — there are no separate JSON/CMS files. Categories currently in use: photos → `Boxeo` (other categories like `Retrato`, `Paisaje`, `Blanco y Negro` were stripped from the UI by `clean_photos.js` — see below); videos → `Contenido Artistas`, `Videoclip`, `BTS`, `Comercial`, `Vlogging`.

2. **`App` component** — renders nav/hero/about/contact sections plus a filterable grid built from `portfolioItems`:
   - Top-level `filter` state switches between `'photo'` and `'video'`.
   - Independent sub-filter state per type (`photoSubFilter`, `videoSubFilter`) narrows by `category`; changing the top-level filter resets the relevant sub-filter to its default.
   - Clicking a grid item opens a full-screen modal (`selectedItem` state) that renders either an `<img>` or a video player.
   - Video playback branches on source: `isYouTubeVideo()`/`getYouTubeVideoId()` detect `youtube.com`/`youtu.be` links and embed a YouTube iframe; anything else is treated as a locally-hosted file and played through a native `<video>` tag pointing at `public/videos/*.mp4`.
   - Grid items in the `Contenido Artistas` and `BTS` categories render at a `9:16` aspect ratio (vertical/Reels-style clips); everything else is `4:5` (photos) or `16:9` (video).

### Adding media
- New photos go in `public/images/` (flat, no subfolders) — see `public/images/README.md` for original naming conventions (`categoria-numero.jpg`).
- New local videos go in `public/videos/`, with a matching thumbnail in `public/videos/thumbnails/` — see `public/videos/README.md` for the full pattern. YouTube-hosted videos don't need local files; only `videoUrl` (the YouTube link) and `src` (a `https://img.youtube.com/vi/<id>/maxresdefault.jpg` thumbnail) are needed.
- After adding files, add a corresponding object to `portfolioItems` with a unique `id` (increment from the current max) and rebuild/redeploy.
- `optimize-images.js` and `optimize-single-image.js` (via `sharp`) are the standard way to compress new photos before committing them — run before adding large source images to `public/images/`.
- `clean_photos.js` is a one-off migration script (hardcoded to an old absolute path, not meant to be reused as-is) that was used to bulk-remove photo categories/entries via regex surgery on `App.js`; treat it as a reference for that technique rather than a script to run directly.

### Styling
Tailwind utility classes inline in JSX; no component library. Note the Tailwind setup is mixed-version: `tailwind.config.js` and `src/index.css` (`@tailwind base/components/utilities`) are v3-style, but `postcss.config.js` wires in the v4 `@tailwindcss/postcss` plugin (and `tailwindcss@3` plus `@tailwindcss/postcss@4` are both in `devDependencies`). If Tailwind classes stop taking effect after a dependency change, check this mismatch first.

## Repo-specific notes

- `README.md` is a full Spanish-language, non-technical editing guide for the site owner (line-number references to `App.js` sections, redeploy steps, troubleshooting). It's the source of truth for the intended manual-editing workflow — prefer keeping edits consistent with the patterns it documents (e.g. thumbnail URL conventions, id numbering).
- Deploy target is fixed to `https://romppao.es/` via `homepage` in `package.json` and `public/CNAME`; `npm run deploy` pushes straight to GitHub Pages via `gh-pages`.

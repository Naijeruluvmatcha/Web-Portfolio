# How the pagoda site works

## Files
- `app/page.tsx` shows `components/Pagoda.tsx`.
- `components/Pagoda.tsx` puts the starting HTML on the page (`components/pagoda-markup.ts`), then loads 4 scripts in order: Babylon.js and Anime.js from jsDelivr, then `public/pagoda/content.js`, then `public/pagoda/pagoda.js`.
- `public/pagoda/pagoda.js` is the whole 3D site and the editor page (plain browser JavaScript, not React).
- `app/pagoda.css` is all the styles.
- `public/pagoda/img/` holds the built-in pictures.

## Content (the CMS)
- On the main page, press Ctrl + 8 (backup: Ctrl + Shift + 8). On a phone, tap the small scroll at the top left and write 郭.
- Edits are kept in that one browser until you export them.
- Export gives `content.json`. Put it at `content/content.json` and commit it.
- `scripts/content-to-js.mjs` runs by itself before `npm run dev` and `npm run build`. It turns `content/content.json` into `public/pagoda/content.js` and saves its pictures as `public/pagoda/img/c-*.png/jpg`. Those made files are in `.gitignore`.
- No `content/content.json`? The site uses the content built into `pagoda.js`.
- After a new `content.json` goes live, older edits saved in your browser are cleared automatically.

## Not real security
The Ctrl + 8 and 郭 doors are hidden, not locked. Anyone can open the editor, but edits only change their own browser. Only a commit changes the real site.

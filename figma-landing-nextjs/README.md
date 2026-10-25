# Figma Landing — Next.js

Pixel-close rebuild of the supplied Figma screenshot in Next.js (App Router, no Tailwind — plain CSS in `app/globals.css` so the Figma colours/shapes stay exact).

## Run
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build / production
```bash
npm run build
npm start
```

## Notes
- Colours sampled from the design: navy `#20264d`, pink `#f92d7e`, purple `#7c5cff`, light-pink `#f7c8e8`, light-blue `#a8d8ea`.
- The student photo is a placeholder Unsplash image — replace `STUDENT_IMG` in `app/page.js` with the exported Figma asset when you have it, to be 100% identical.
- Fonts: system stack + Montserrat-style fallback via CSS, matching the bold geometric headline in the design.

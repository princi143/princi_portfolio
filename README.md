# Princi Srivastava — portfolio

A scroll-story portfolio: one continuous signal route runs from the hero through projects, stack and log to contact, while the page colour morphs between chapters.

- React 19 + Vite, GSAP ScrollTrigger + Lenis for scroll, a small raw-WebGL hero shader
- Self-hosted fonts (Anybody variable width axis, Geist)
- Content lives in `src/data/` — edit projects, log entries, skills and links there

## Run

```bash
npm install
npm run dev     # local
npm run build   # production build in dist/
```

## Résumé

`public/resume/Princi-Srivastava-Resume.pdf` is served as a download (see `vercel.json`).
To update it, replace that file and keep the same name.

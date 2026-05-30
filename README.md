# K-Aesthetica

A K-beauty journal — honest reviews, routine breakdowns, and the science behind glass skin.

Built with [Astro](https://astro.build). Posts are Markdown files in `src/content/posts/`.

## Write a new post

1. Add a Markdown file to `src/content/posts/`, e.g. `my-post.md`.
2. Include frontmatter:
   ```yaml
   ---
   title: "Your title"
   description: "One-line summary (used on cards + SEO)."
   category: Reviews        # Routines | Reviews | Ingredients | Guides
   kicker: Review           # optional small label
   author: Min-seo Park
   pubDate: 2026-06-01
   readMinutes: 5
   thumb: t1                # t1–t6 gradient
   hangul: "달팽이"          # optional Korean accent on the hero
   featured: false          # true = pin to the homepage hero
   draft: false             # true = hidden from the live site
   ---
   ```
3. Write the body in Markdown. Commit and push — Vercel rebuilds automatically.

## Newsletter

Set your Buttondown username in `src/consts.ts` (`NEWSLETTER.buttondownUser`).
Leave it as `'DEMO'` to keep the form in demo mode.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
```

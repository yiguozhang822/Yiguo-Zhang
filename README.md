# Yiguo Zhang, journey site

A single-page scrolling site built as one continuous continent. Top to bottom is
forward in time: night, the bamboo coast, the immigration crossing (a rift with a
thin bridge), the valley of invented sciences, the forge, the research highlands,
and a closing. The background is one gradient that flows from region to region, a
progress rail on the right shows where you are and that more is below, and each
section reveals as you scroll.

Three files: `index.html`, `styles.css`, `script.js`.

## Put it online with GitHub Pages

1. Create a repo. For a site at `https://YOURNAME.github.io`, name it exactly
   `YOURNAME.github.io`. Any other name works too; the site just lives at a
   sub-path.
2. Upload all four files (`index.html`, `styles.css`, `script.js`, `README.md`)
   and commit.
3. Settings, then Pages. Source: Deploy from a branch. Branch: main. Folder:
   / (root). Save.
4. Wait about a minute and refresh. The live URL appears at the top of the Pages
   settings.

## Fill in the placeholders before you launch

There are exactly two. Search `index.html` for these:

1. **Your email.** Find `you@example.com` in the closing section and replace it.
2. **Your arXiv link.** Find `#REPLACE-WITH-ARXIV-URL` on the quantum game theory
   paper card and paste your real arXiv URL. The ULDM paper is intentionally left
   without a link, since it is still under submission; add one once it is posted.

The art portfolio link is already wired to your Canva site.

## Editing the content

All the words live in `index.html` as plain text. Each region is a `<section>`.
To add a project or document, copy one `<li class="card"> ... </li>` block inside
that region's `<ul class="cards">` and edit the text. The `card__tag` is the small
label, the paragraph is the description.

## Changing the look

Colors are at the top of `styles.css` as `--n0` through `--n7`, the boundary
colors of the continent from night (top) to summit (bottom). Each region blends
from one boundary color to the next, so editing these shifts the whole gradient.
Per-region accent colors are set on each `.region--NAME` rule.

## Notes

No build step and no frameworks. Fonts load from Google Fonts. Animations respect
reduced-motion settings, and the layout collapses to a single column on phones.

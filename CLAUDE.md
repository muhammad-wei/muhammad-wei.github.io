# CLAUDE.md

Bruce Wei's personal site, https://muhammad-wei.github.io. It is static files on GitHub Pages: no build step, no package manager and no tests to run.
**[SPEC.md](SPEC.md)** defines the pages, the design system, the content standards and the quality gates. Read it before any non-trivial change.

## Map

| Path | What it is |
| --- | --- |
| `index.html` | Home page, built on the "Global" template. Loads `assets/css/main.css`, jQuery 2.2.4 (CDN with a local fallback) and `assets/js/functions-min.js`. English only. |
| `ai-`, `energy-`, `finance-`, `web3-industry-chart.html`, `business_growth_circular_flow.html` | Landscape pages. Each is one self-contained file: inline CSS and JS, no external requests, EN/中文, dark and light themes. |
| `assets/img/landscape/*.webp` | Home slider thumbnails, 600×600, one per landscape page. |
| `assets/css/**/*.sass` | Sass sources of `main.css`, used by the home page only. |

## Rules that bite

- **There is no Sass or JS toolchain.**
  - A home-page style change goes into the `.sass` partial *and* `assets/css/main.css`, both edited by hand.
  - A JS change goes into `functions.js` *and* `functions-min.js`. The page loads the `-min` file.
- **Bilingual text** (SPEC §7):
  - Every visible string on a landscape page sits in an element with `data-en` and `data-zh`, and its initial content equals `data-en`.
  - `setLang()` assigns the attribute value through `innerHTML`, so inside the attributes:
    - inline tags (`<strong>`, `<br>`) may be written literally; escape `"` as `&quot;`;
    - a literal `<` must be written `&amp;lt;`. A plain `&lt;` becomes a tag start and swallows the rest of the text on the next language switch;
    - never nest one `[data-en]` element inside another.
  - EN and ZH carry the same figures and dates.
- **Colours come only from the page's tokens.**
  - Dark tokens sit on `:root` and light overrides on `html[data-theme="light"]`.
  - A new token needs both. Text contrast must be at least 4.5:1 in both themes.
  - The theme is saved under `localStorage['voltai-theme']` on every page. Don't rename the key.
- **Fixed controls on every landscape page:** `.home-link` ("← Home" / "← 首页") and `.controls` (theme button, EN/中文). A change to them must be repeated on all five pages.
- **No horizontal scroll** at any width from 360 to 1440 px, in either theme or language.
- **Hidden on purpose** in `index.html`: Traffic globe, LinkedIn, Connect and the Hire form are commented out. Keep them hidden unless asked.
- **Dated content** (SPEC §8):
  - Every figure needs a source.
  - A refresh moves the as-of stamp everywhere it appears: title, `h1`, section titles, footnote.
  - A changed figure is changed everywhere it is repeated: cards, snapshot, scoreboard, scenarios, in both EN and ZH.
- **Home copy:** if a page's scope changes, update its home card and slide descriptions.

## Check before calling it done (SPEC §10)

1. **Serve the repo root:** `python3 -m http.server 8765 --bind 127.0.0.1`, then open http://127.0.0.1:8765/.
2. **Start headless Chromium:** `chromium --headless=new --remote-debugging-port=9222 --remote-allow-origins=* about:blank &`.
   - Drive it from short Node 24 scripts using the DevTools protocol; `fetch` and `WebSocket` are globals.
   - Add `?v=<timestamp>` to URLs to bypass caches.
3. **Run the checks:**
   - overflow at nine widths, in both themes and both languages
   - the EN → 中文 → EN round trip
   - default text equals `data-en`
   - `.home-link` overlap
   - console errors and failed requests
   - contrast
   - links
   - facts against their sources

## Git and deploy (SPEC §11)

- **Commit and push only when the user asks** (they say "push"). Use one-line imperative subjects, as in `git log`.
- **Pushing `main` deploys the site** in about 1–2.5 minutes.
  - Check with `gh run list --limit 3`, or `gh api repos/muhammad-wei/muhammad-wei.github.io/pages/builds/latest --jq '.status + " " + .commit'`.
  - Then fetch the live page with a cache-busting query; the CDN caches for 10 minutes.
- **Everything committed is public:** the repo is public and Pages serves every file, Markdown included. Never commit secrets, private notes or email addresses.
- `git push` occasionally fails with a GnuTLS error. Retrying works.

## Maintenance

- A weekly cloud routine, "Weekly Web3 page freshness report", runs on Mondays at 09:00 Hong Kong time.
  - It checks the live Web3 page against current data and the past week's news, and emails the owner.
  - It never touches the repo.
- When the user says **"update the Web3 page"**, apply the latest report following SPEC §9.3:
  - verify every item against its source
  - edit EN and ZH together
  - pass the quality gates
  - wait for "push"
- Open gaps and backlog are listed in SPEC §12.

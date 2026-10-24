# CLAUDE.md

Muhammad Wei's personal site, https://muhammad-wei.github.io. It is static files on GitHub Pages: no build step, no package manager and no tests to run.
**[SPEC.md](SPEC.md)** defines the pages, the design system, the content standards and the quality gates. Read it before any non-trivial change.

## Map

| Path | What it is |
| --- | --- |
| `index.html` | Home page, built on the "Global" template. Loads `assets/css/main.css`, the shared boot/site scripts, vendored Leaflet/jQuery and `assets/js/functions-min.js`. Four sections: Home, Landscapes, Vision, Contact. The Vision section — a node tree plus a matrix-rain strip — and the capital-path note under the slider are the site's thesis; keep them aligned with SPEC §4. Four-language select (EN/中文/РУ/عربي) in the header; single dark design. Contact is a live Leaflet/OpenStreetMap map of Dubai, Guiyang and Hangzhou; the Landscapes slide carries the GICS® classification legend and source line. |
| `ai-`, `energy-`, `finance-`, `space-`, `web3-industry-chart.html`, `business_growth_circular_flow.html` | Landscape pages. Each links its own stylesheet in `assets/css/pages/`; shared `boot.js`, `page-meta.js` and `site.js` handle language/theme. No third-party requests, four languages (Arabic RTL), dark and light themes. |
| `sources/space-industry.md` | The Space page's sources ledger: each figure with its date, source, placements and status. Update it together with the page. |
| `assets/js/vendor/leaflet.js`, `assets/css/vendor/leaflet.css`, `assets/js/vendor/leaflet.LICENSE` | Vendored Leaflet 1.9.4 (BSD-2-Clause) for the home contact map. Keep the version and licence notice with the files. |
| `assets/img/landscape/*.webp` | Home slider thumbnails, 600×600, one per landscape page. |
| `assets/css/pages/*.css` | One stylesheet per landscape page, linked from the page head. |
| `assets/css/gics.css` | Shared GICS® lens and source-note styles for the home and landscape pages. |
| `assets/js/boot.js` | Pre-paint theme/language/direction boot for all pages. |
| `assets/js/page-meta.js` | Four-language titles, descriptions and home keywords for all seven pages. |
| `assets/js/site.js` | Shared language/theme controls (`setLang`, select/theme listeners, initial language). |
| `assets/js/matrix-rain.js`, `assets/js/contact-map.js` | Home-only modules: Vision matrix rain and the Leaflet contact map. |
| `assets/css/**/*.sass` | Sass sources of `main.css`, used by the home page only. |

## Rules that bite

- **There is no Sass or JS toolchain.**
  - A home-page style change goes into the `.sass` partial *and* `assets/css/main.css`, both edited by hand. A landscape style change goes into its `assets/css/pages/` file.
  - A shared language/theme change goes into `assets/js/site.js` (or `boot.js` for pre-paint state). A home-only feature change goes into `matrix-rain.js` or `contact-map.js`.
  - A change to the home navigation/scroll behaviour goes into `functions.js` *and* `functions-min.js`; the page loads the `-min` file.
  - Keep HTML free of inline `<style>`, inline `<script>` content, `style` attributes and `on*` handlers.
- **Multilingual text** (SPEC §7):
  - Every visible string on every page sits in an element with `data-en`, `data-zh`, `data-ru` and `data-ar`, and its initial content equals `data-en`.
  - `setLang()` assigns the attribute value through `innerHTML`, so inside the attributes:
    - inline tags (`<strong>`, `<br>`) may be written literally; escape `"` as `&quot;`;
    - a literal `<` must be written `&amp;lt;`. A plain `&lt;` becomes a tag start and swallows the rest of the text on the next language switch;
    - never nest one `[data-en]` element inside another.
  - All four languages carry the same figures and dates.
  - `assets/js/page-meta.js` holds four entries (`en`, `zh`, `ru`, `ar`) for every page and must match each head `<title>` and `meta description` in EN; `site.js` switches both.
  - Tooltips and ARIA labels use `data-title-{en,zh,ru,ar}` and `data-aria-{en,zh,ru,ar}`.
  - The language is saved under `localStorage['voltai-lang']` (`en`, `zh`, `ru`, `ar`) on every page and applied on load. Don't rename the key.
  - `setLang()` sets `<html dir="rtl">` for Arabic and `ltr` otherwise; `boot.js` applies the saved direction before first paint.
  - Arabic layout is mirrored, not just right-aligned: header/logo, select, side nav, intro image, slider, Vision tree/rain, contact modal, fixed controls. Diagrams whose geometry must not mirror keep `direction: ltr`.
- **Colours come only from the page's tokens.**
  - Dark tokens sit on `:root` and light overrides on `html[data-theme="light"]`.
  - A new token needs both. Text contrast must be at least 4.5:1 in both themes.
  - The theme is saved under `localStorage['voltai-theme']` on every page. Don't rename the key.
  - The home page is single-dark and has no theme toggle.
- **Fixed controls on every landscape page:** `.home-link` ("← Home" / "← 首页" / "→ الرئيسية") and `.controls` (theme button, four-language select). A change to them must be repeated on all six pages. In Arabic they swap sides.
- **Home language select:** `.header--lang` sits left of the ☰ menu in LTR and uses `<select id="lang-select">`. It uses the same `setLang()` contract as the landscape pages. In Arabic the pair mirrors to the left edge, with the select to the right of the menu.
- **No horizontal scroll** at any width from 360 to 1440 px, in either theme or any of the four languages, including Arabic RTL.
- **GICS alignment and attribution (SPEC §8.5):**
  - GICS® was developed by S&P Dow Jones Indices and MSCI; the four-tier structure is 11 sectors, 25 industry groups, 74 industries and 163 sub-industries (counts per MSCI's published structure).
  - Every landscape is exactly one type: **sector landscape** (Energy, Finance/Financials), **theme landscape** (AI, Space, Web3) or **framework** (Business Growth).
  - A theme is cross-sector. It is not a GICS sector, industry group, industry or sub-industry. Never call a theme an industry or a sector. A framework is a method, not a sector, industry or theme.
  - The type is recorded on `<html data-kind="sector|theme|framework">` and stated in the `.gics-lens` label ("Sector landscape", "Theme landscape" or "Framework", then "GICS® lens"); the two must agree.
  - Page titles, home cards and slide titles name the field ("AI — Full Overview"), not "AI Industry".
  - Filenames keep the `*-industry-chart.html` suffix for stable URLs; it is legacy, not a classification.
  - Web3's five upper-layer parts are **segments**, not sectors. AI's four inputs are **pillars**, not industry pillars.
  - Every landscape page keeps a translated `.gics-lens` under the subtitle and a translated `.gics-source` line at the bottom. The home keeps `.work--gics`.
  - Keep the official S&P/MSCI links, the GICS® trademark notice and the independent-site disclaimer. Do not host a third-party GICS infographic without permission.
- **Contact map (home):**
  - Live Leaflet map, OpenStreetMap tiles, three 200 km circles and pulsing markers: Dubai, Guiyang, Hangzhou.
  - `contact-map.js` listens for the `voltai:lang` event; labels and zoom titles follow the language, the Arabic zoom control moves to the bottom right and the fit padding mirrors.
  - At 767 px and below the contact panel docks to the bottom so all three circles remain above it; keep the map credit and zoom control clear of the panel.
  - Keep the visible OpenStreetMap credit; do not add a token or API key.
  - `scrollWheelZoom` is off so the page does not zoom while scrolling; drag/pinch and the +/- buttons still work.
  - Tiles need network access. If they fail, the circles and labels remain on the dark background; that is the fallback.
- **Hidden on purpose** in `index.html`: Traffic globe, LinkedIn, Connect and the Hire form are commented out. Keep them hidden unless asked.
- **Dated content** (SPEC §8):
  - Every figure needs a source.
  - A refresh moves the as-of stamp everywhere it appears: title, `h1`, section titles, footnote.
  - A changed figure is changed everywhere it is repeated: cards, snapshot, scoreboard, scenarios, in all four languages.
- **GICS refresh:** when GICS is revised, update the counts, the page lenses and the home source line together.
- **Home copy:** if a page's scope changes, update its home card and slide descriptions in all four languages.
- **Vision vs. capital path:**
  - The four core landscapes are AI, Energy, Space and Web3; the Vision section describes their roles in one system (AI demand, Energy constraint, Space frontier, Web3 coordination), drawn as a node tree rooted at "One system", branching to four field nodes and their leaves, and closing at ∞.
  - Finance and Business Growth are the **capital path**, not part of the four core landscapes. They build the starting fund for the intersection.
  - The "Now" block is deliberately candid: the next company may be a profitable finance or business-growth business before the convergence company.
  - Keep the Vision tree, the "Now" block and the slider note consistent in all four languages.
  - The tree note is the ADT reading: root → leaf is one path in the search space, 4 × 3 = 12 paths, then search continues at ∞. Update the count if branches or leaves change.

## Check before calling it done (SPEC §10)

1. **Serve the repo root:** `python3 -m http.server 8765 --bind 127.0.0.1`, then open http://127.0.0.1:8765/.
2. **Start headless Chromium:** `chromium --headless=new --remote-debugging-port=9222 --remote-allow-origins=* about:blank &`.
   - Drive it from short Node 24 scripts using the DevTools protocol; `fetch` and `WebSocket` are globals.
   - Add `?v=<timestamp>` to URLs to bypass caches.
3. **Run the checks:**
   - overflow at nine widths, in both themes and all four languages on the landscape pages, and in all four languages on the home page
   - no inline `<style>`, inline `<script>` content, `style` attributes or `on*` handlers; every page loads external CSS/JS
   - the home Vision section at 375×667 and 360×640, where it switches to the compact tree layout
   - the matrix rain: visible at ≥1280 px only, hidden under reduced motion, and no canvas errors when the section is inactive
   - the EN → 中文 → РУ → العربية → EN round trip
   - default text equals `data-en`
   - page titles, meta descriptions, tooltips/ARIA labels and `dir` follow the language
   - the language choice carries to the next page, including RU/AR
   - the contact map initializes, OSM tiles load, the three city labels follow the language, and the zoom control clears the modal in LTR/RTL
   - the GICS lens/source blocks are present, translated, and link to the official S&P Dow Jones Indices and MSCI GICS pages
   - `.home-link` overlap, fixed-control overlap, and the home language select at 360 px
   - console errors and failed requests
   - contrast
   - links
   - facts against their sources, with figures and dates identical in all four languages

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
  - edit all four languages together (RU/AR are drafts; native review is gap #10)
  - pass the quality gates
  - wait for "push"
- A quarterly cloud routine, "Quarterly Space page freshness report", runs on Jan, Apr, Jul and Oct 15 at 09:00 Hong Kong time (SPEC §9.5).
  - It re-checks the ledger's dated rows and the quarter's news, and emails the owner.
  - It never touches the repo.
- When the user says **"update the Space page"**, apply the latest report following the ledger's "How to refresh" (SPEC §9.5):
  - start from `sources/space-industry.md` and re-check every row
  - launch counts come from McDowell's launch log
  - edit the page and the ledger together, in all four languages
  - pass the quality gates
  - wait for "push"
- Both routines need their cloud environment's network access set to **Full** (SPEC §9.2).
- Open gaps and backlog are listed in SPEC §12.

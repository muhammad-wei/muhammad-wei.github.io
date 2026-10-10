# muhammad-wei.github.io — Site Specification

|               |                                                                     |
| ------------- | ------------------------------------------------------------------- |
| Site          | https://muhammad-wei.github.io                                      |
| Owner         | Bruce Wei                                                           |
| Hosting       | GitHub Pages, static files from `main` (no build step)              |
| Last reviewed | October 10, 2026 — live site checked against commit `88ea649`      |

This document says what the site is, how every page is built, and what "done" means for a change.
`CLAUDE.md` is the short working guide; this is the reference behind it.

---

## 1. Purpose and audience

The site does two jobs:

1. **Introduce the owner**: an entrepreneur based in Dubai, building at the intersection of AI, Energy, Space and Web3.
2. **Publish industry landscapes**: one-page, bilingual maps of an industry. Each shows the industry's structure, the forces acting on it, current figures and what they mean for builders.

Readers are founders, investors, partners and peers, reading in English or Chinese, on a desktop or a phone.
The landscapes are educational overviews, not investment, legal or tax advice.

## 2. Principles

- **One file per landscape page.** Inline CSS and JS, no framework, no build step and no external requests. A page opens fast, has nothing to break and can be edited with a text editor.
- **Accurate and dated.** Every figure has a source and a date. A stale figure is worse than a missing one.
- **Bilingual parity.** English and 中文 say the same thing, with the same numbers and dates.
- **Readable everywhere.** Both themes meet WCAG AA contrast, at any width from 360 to 1440 px.
- **A map, not an article.** Use short cards with one idea each. Depth belongs in the sections below the map.

## 3. Site map

| Page | File | Scope | Figures as of | Linked from home |
| --- | --- | --- | --- | --- |
| Home | `index.html` | Vision, landscape index, contact | — | — |
| AI Industry | `ai-industry-chart.html` | World models → four modalities → four pillars | Undated (reviewed Oct 2026) | Intro card, slider |
| Energy × China | `energy-industry-chart.html` | Global energy with a China focus; the 2026 Hormuz shock | 2026 (checked Oct 2026) | Intro card, slider |
| Web3 Industry | `web3-industry-chart.html` | Regulation, sectors, exchanges, market-moving news | Oct 8, 2026 | Intro card, slider |
| Finance Industry | `finance-industry-chart.html` | Regulation, value chain, money flows, six jurisdictions | October 2026 | Slider |
| Business Growth | `business_growth_circular_flow.html` | Eight-step growth cycle (a framework, no market data) | Evergreen | Intro card, slider |

Every landscape page links back to the home page with "← Home" ("← 首页" in Chinese).

## 4. Home page (`index.html`)

- **Template:** "Global" by Bucky Maler.
  - Styles: Sass sources in `assets/css/`, compiled to `assets/css/main.css`.
  - Scripts: jQuery 2.2.4 from the Google CDN, falling back to `assets/js/vendor/`, plus `assets/js/functions-min.js`. Hammer.js 2.0.8 is prepended into that file by CodeKit.
  - Fonts: Montserrat, self-hosted in `assets/css/fonts/`.
- **Sections** (numbered 01–03 in the side nav):
  1. **Home**
     - Headline "Building AI × Energy × Space × Web3", a "Contact Me" button and the astronaut visual.
     - Four cards: AI Industry, Energy × China, Web3 Industry and Business Growth.
  2. **Entrepreneurship ("Industry Landscapes")**
     - A slider of five landscapes: Energy, AI (centre), Web3, Business Growth and Finance.
     - Each slide has a thumbnail, a title and a one-line description.
     - Thumbnails are 600×600 WebP files in `assets/img/landscape/`.
  3. **Contact**: "Dubai" and a GitHub link.
- **Hidden on purpose** (commented out, kept for a possible return): the Traffic globe (ClustrMaps), Connect/LinkedIn and the Hire form.
- **Navigation:**
  - side nav, the ☰ menu, the mouse wheel, the ↑/↓ keys and swipe (Hammer.js)
  - both "Contact Me" buttons jump to Contact
  - a notice asks visitors to rotate small phones held in landscape
- **Scope:** English only and a single dark design.
- **Card copy:** card and slide descriptions must match each page's actual scope. Update them whenever a page's scope changes.

## 5. Landscape pages

### 5.1 Shared skeleton

Every landscape page follows the same top-to-bottom order. The Business Growth page replaces steps 4–8 with its own diagram and sections.

1. **`<head>`**
   - charset, viewport and `<title>` (with the as-of month where figures are dated)
   - a `meta description`
   - an **anti-flash theme script**, which sets `data-theme` before first paint
   - one inline `<style>` holding the page's tokens
2. **Fixed controls**
   - `.home-link` at top left
   - `.controls` at top right: the theme button (☀️ in dark, 🌙 in light) and EN | 中文
3. **Header:** an `h1` (page name, plus the as-of date when dated) and a `.subtitle` that lists the page's parts, separated by "·".
4. **Higher-order card:** the field that spans every layer, such as regulation or geopolitics. It has a badge, an `h2`, one paragraph and tag chips.
5. **Connector** with a label (for example "Integrates & spans across").
6. **Five layer cards**, either value-chain layers or sectors, each with sub-tags. The AI page has four modality cards here instead.
7. **Connector** ("Sustained by").
8. **Four pillar cards.** The fourth carries the "Emerging" badge.
9. **Page sections:** `.page-section` blocks with a `.page-section-title`, specific to each page.
10. **Legend and footnote.** The footnote states the as-of date, the sources and the disclaimer.
11. **Inline script:**
    - `setLang()`, `toggleTheme()` and `updateThemeIcon()`
    - follows system theme changes until the visitor picks a theme

### 5.2 Page inventory

**AI Industry**
- **Higher-order card:** World Models.
- **Modalities:** Language · Voice & Audio · Vision · Embodied / Action.
- **Pillars:** Data · Algorithms · Compute · Energy (Emerging).
- No page sections.

**Energy × China**
- **Higher-order card:** Geopolitics, Energy Security & System Integration.
- **Layers:** Upstream · Midstream · Generation · Grid & Distribution · End-Use.
- **Pillars:** Resources · Technology · Capital · Policy & Carbon (Emerging).
- **Sections:**
  - Macro Context: three forces
  - China Lens: six cards
  - Global Regions: US, EU, Middle East/GCC, India
  - Where Software Startups Are Winning: five spaces
  - Decision Framing: bad fits and good fits
- **Main source:** IEA, with NEA for China.

**Finance Industry**
- **Higher-order card:** Regulation, Central Banks & Financial Plumbing.
- **Layers:** Capital Formation · Trading & Market Structure · Post-Trade & Custody · Payments & Money Movement · Asset & Wealth Management.
- **Pillars:** Risk Management · Data & Technology · Accounting & Reporting · Fintech & Digital Assets (Emerging).
- **Sections:**
  - How Money & Risk Flow: a diagram and five flow cards
  - Six-Jurisdiction Lens: US, EU, UK, Mainland China, Hong Kong SAR, UAE
  - Cross-Border Links
  - Trends to Watch

**Web3 Industry**
- **Higher-order card:** Regulatory Architecture & Institutional Rails.
- **Sectors:** Infrastructure & Scalability · Sector Depth & Value Capture · Frictionless UX Layer · Capital & Tokenomics · Risk Vectors.
- **Pillars:** Capital · Technology · Liquidity · Narrative (Emerging).
- **Sections:**
  - Market Macro Snapshot: three cards
  - Market-Moving News: nine items, newest first, with OKX NOW as the headline
  - Exchange Landscape: Binance, OKX, Coinbase, HTX and Challengers
  - Sector Scoreboard: DeAI, DePIN, RWA & Tokenization, Restaking, Web3 Consumer
  - Consensus Allocation Framework: four cards
  - 12–18 Month Scenarios: bear and bull
- **Sources:** CoinGecko, DefiLlama, RWA.xyz, SoSoValue and company filings.

**Business Growth**
- A circular SVG diagram of eight steps in four phases: Discovery (1–2), Build (3–4), Launch (5–6) and Scale (7–8).
- **Sections:**
  - Step-by-Step Breakdown: eight cards
  - Five Key Principles
  - How to Use This Framework: New Venture, Existing Business, Scaling Operation

## 6. Design system (landscape pages)

### 6.1 Themes and tokens

- **Where colours live:**
  - Dark is the default and lives on `:root`.
  - Light overrides live on `html[data-theme="light"]`.
  - Every colour is a CSS custom property; components never hard-code colours.
- **Token sets:**
  - Each page owns its token set, from 42 to 86 tokens, named `--<component>-<role>` (for example `--layer-h3`, `--force-stat`, `--sec-kpi`).
  - Shared on every page: `--bg-page`, `--text-body`, `--h1-color`, `--subtitle-color`, the `--ctrl-*` set and `--legend-color`.
- **Theme on load:**
  - The first visit uses the system preference.
  - The theme button switches theme and saves the choice in `localStorage` under `voltai-theme`. All pages share this key, so the choice carries across them.
  - Keep the key name: renaming it would reset every visitor's saved theme.
- **New components:**
  - Build them from existing tokens where possible. The Web3 news list, for example, uses `--force-*`, `--alloc-pct` and `--layer-hover`, so both themes are covered automatically.
  - A new token must be defined for both themes.
- **Contrast:** at least 4.5:1 for all text against its background, in both themes.

### 6.2 Typography

- **Landscape pages:** a system font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", sans-serif`. With no web fonts, Chinese renders natively and nothing extra loads.
- **Home page:** Montserrat.

### 6.3 Components

| Component | Markup | Used on |
| --- | --- | --- |
| Home link | `a.home-link` | All landscape pages |
| Controls | `.controls` > `#theme-btn.theme-btn` + `.lang-toggle` (`#btn-en`, `#btn-zh`) | All landscape pages |
| Badges | `.badge` (higher-order card); `.new-badge` ("Emerging", "Headline") | AI, Energy, Finance, Web3 |
| Tag chips | `.tag` (higher-order card), `.sub-tag` (layer and pillar cards) | AI, Energy, Finance, Web3 |
| Layer cards | `.layer-card` × 5 | Energy, Finance, Web3 |
| Modality cards | `.modality-card` × 4 | AI |
| Pillar cards | `.pillar-card` × 4 | AI, Energy, Finance, Web3 |
| Page section | `.page-section` + `.page-section-title` (Business Growth: `.section-title`) | Energy, Finance, Web3, Business Growth |
| Force cards | `.force-card` | Energy (3), Finance (9), Web3 (3) |
| Stat cards | `.sec-card`: icon, `h3`, paragraph, KPI and KPI label | Web3 (exchanges, scoreboard) |
| News list | `.news-list` > `.news-item` (`.headline` for the top story): `.news-date`, `h3`, paragraph, `.why` | Web3 |
| Allocation cards | `.alloc-card` | Web3 |
| Decision pair | `.decision-card` × 2 (bad/good or bear/bull) | Energy, Web3 |
| Jurisdiction cards | `.jur-card` | Finance |
| Flow diagram | `.flow-wrap`, `.flow-card` | Finance |
| Lens cards | `.cn-card`, `.region-card`, `.opp-card` | Energy |
| Framework cards | `.step-card`, `.prin-card`, `.use-card`; SVG in `.diagram-wrap` | Business Growth |
| Legend | `.legend` | All landscape pages |
| Footnote | `.footnote` | Finance, Web3 |

Icons are emoji, for example 🏗️ 💡 🔑 💰 ⚠️, so no icon fonts or images are needed.

### 6.4 Layout and breakpoints

- **Grids:** the content column is centred. Card grids collapse in three steps:
  - at 1024 px
  - at a tablet breakpoint chosen per page (640–800 px)
  - to one column at a phone breakpoint (380–500 px)
- **News items:** a 92 px date column beside the text. They stack into one column at 460 px and narrower.
- **Breakpoints per page:**

  | Page | Breakpoints |
  | --- | --- |
  | AI | 1024 / 640 / 380 |
  | Energy | 1024 / 760 / 420 |
  | Finance | 1024 / 800 / 668 / 460 |
  | Web3 | 1024 / 800 / 460 |
  | Business Growth | 1024 / 700 / 500 |

- **Requirements:**
  - no horizontal scroll at any width from 360 to 1440 px, in either theme or language
  - the fixed controls never cover the `h1` or subtitle

## 7. Bilingual text

- **Language on load:** every landscape page opens in English. The choice is not remembered between pages (§12).
- **`setLang(lang)`:**
  - marks the active button
  - sets `<html lang>` to `en` or `zh-CN`
  - replaces the `innerHTML` of every `[data-en]` element with its `data-en` or `data-zh` value
- **Authoring rules:**
  1. Every visible string sits in an element carrying both `data-en` and `data-zh`. The element's initial content equals `data-en`, so the page is correct before any toggle, and for search engines.
  2. Inline tags (`<strong>`, `<br>`) may be written literally inside the attributes. Escape `"` as `&quot;`.
  3. A literal `<` in text must be written `&amp;lt;` inside the attributes.
     - A plain `&lt;` is decoded once by the attribute parser, then parsed as a tag by `innerHTML`.
     - Found October 10, 2026: `<US$500B` cut an Energy paragraph short after switching back to EN.
     - In visible text, `&lt;` is correct.
  4. Never nest one `[data-en]` element inside another. The outer swap would erase the inner one.
  5. EN and ZH carry the same figures, dates and claims.
- **Chinese style:**
  - Simplified Chinese.
  - Amounts in 亿/万亿, for example $315B → 3150亿美元.
  - Dates such as 2026年10月6日 or 10月6日.
  - Keep standard Latin names for companies, tickers and laws, for example GENIUS 法案, MiCA, OKX.
- The home page is English only.

## 8. Content standards

### 8.1 Sourcing and dating

- **Source priority:**
  - Primary sources first: regulators and official statistics, company filings (SEC 8-K, shareholder decks), agency reports (IEA) and on-chain or market-data APIs (CoinGecko, DefiLlama, RWA.xyz).
  - Reputable press for events: Reuters, Bloomberg, CoinDesk, The Block, Decrypt.
  - Ignore sponsored content.
- **Dates:**
  - A dated page shows its as-of date in the `<title>`, the `h1`, the dated section titles and the footnote.
  - The footnote reads: "Educational overview — not investment, legal or tax advice. … as of ‹date› (‹sources›) unless dated otherwise."
  - A figure older than the page's as-of date carries its own date, for example "(Q2 2026)" or "(Sep 25)".
- **Estimates** are marked: "~", "est." or "unofficial".
- **Unverifiable or conflicting:** never publish a claim that can't be verified. When sources disagree, use the primary one and date it.
- **One figure, every place:** a figure appears in several places (cards, snapshot, scoreboard, scenarios, tags; EN and ZH). When it changes, change it everywhere.

### 8.2 Style

- US English.
- Write amounts as "$" with "B" or "T", for example "$2.81T".
- Use "~" for approximations.
- Write dates as "Oct 6, 2026" or "Oct 6".
- Use "→" for ranges in section titles, for example "Jun → Oct 2026".
- Keep card paragraphs to one to three sentences.

### 8.3 News items (Web3; reusable elsewhere)

- **Format:** date | headline | one or two sentences of fact | a "Why it matters:" line.
- **Order and length:** newest first, keeping about six to ten items. Drop the oldest when adding new ones.
- **What qualifies (market-moving only):**
  - exchange strategy and launches
  - regulation and enforcement
  - sanctions
  - hacks over $50M
  - major funding and M&A
  - protocol upgrades reaching mainnet
- **Headline:** the single biggest story gets the `.headline` class and the "Headline / 头条" badge.

### 8.4 Tone

- Neutral and factual: no hype and no recommendations.
- Label opinion-like sections as what they are, for example "Consensus Allocation Framework (Sell-Side Band…)" or "Scenarios".

## 9. Freshness and maintenance

### 9.1 Review cadence (targets)

| Page | Changes with | Review |
| --- | --- | --- |
| Web3 | Prices, flows, news | Weekly report (§9.2); refresh when it says "UPDATE RECOMMENDED" |
| Finance, Energy | Policy, macro, geopolitics | Quarterly, or after a major event |
| AI | Technology cycle | Every six months |
| Business Growth | — | As needed |

### 9.2 Weekly Web3 report

- **What and when:** a Claude Code cloud routine, "Weekly Web3 page freshness report", runs every **Monday at 09:00 Hong Kong time** (01:00 UTC).
- **What it does:**
  - reads the live Web3 page
  - re-checks its key figures against CoinGecko, DefiLlama, RWA.xyz, ETF data and Strategy's filings
  - scans the past seven days for market-moving news
- **What it flags:** only figures that moved more than ~10%, and claims that are no longer true.
- **Delivery:** it emails the owner a report with the subject "Web3 page check — ‹date›: UPDATE RECOMMENDED | No update needed".
- **Report only:** it never edits the repository.
- **Applying a report:** say "update the Web3 page" in Claude Code (§9.3).
- **Management:** pause, edit or run the routine at claude.ai/code/routines.

### 9.3 Refreshing the Web3 page

1. **Pull current data:**

   | Data | Endpoint |
   | --- | --- |
   | Market cap, BTC dominance | `https://api.coingecko.com/api/v3/global` |
   | Prices | `…/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd` |
   | Price history (lows, ranges) | `…/api/v3/coins/{id}/market_chart?vs_currency=usd&days=365&interval=daily` |
   | DeFi TVL | `https://api.llama.fi/v2/historicalChainTvl`, `…/v2/chains` |
   | Protocols, CEX reserves | `https://api.llama.fi/protocols` (category "CEX"), `…/protocol/{slug}` |
   | DEX volume | `https://api.llama.fi/overview/dexs/{chain}` |
   | Stablecoins | `https://stablecoins.llama.fi/stablecoins?includePrices=true` |
   | Tokenized RWA | `https://app.rwa.xyz/` ("Distributed Asset Value") |
   | Spot ETF assets, Strategy holdings, exchange results | SoSoValue, SEC EDGAR filings, company announcements |

   DefiLlama's derivatives overview needs a paid key, so take perp-DEX share from published research instead.
2. **Update every dated element:**
   - the stamp in the title, `h1`, section titles and footnote
   - the regulatory card and its tags
   - sectors, pillars, macro snapshot, news (newest on top), exchanges, scoreboard, allocation and scenarios
   - the home card and slide copy, if the scope changed
3. Edit EN and ZH together (§7).
4. Pass the quality gates (§10), then wait for the owner to say "push".

### 9.4 Adding a landscape page

1. **Start from a copy** of the closest existing page, to keep the head script, tokens, controls and scripts.
2. **Name and header:**
   - Name the file `<topic>-industry-chart.html`.
   - Give it a `<title>`, `h1` and subtitle, with the as-of month if figures are dated, plus a `meta description`.
3. **Themes:** define tokens for both themes and check contrast.
4. **Text:** make every string bilingual (§7).
5. **Footnote:** sources, as-of date and the disclaimer.
6. **Home page:**
   - add a slide with a 600×600 WebP thumbnail in `assets/img/landscape/`
   - add an intro card if it is a core landscape
   - keep both descriptions accurate
7. **Checks:** pass §10.

## 10. Quality gates

A change is done when all of these pass locally (`python3 -m http.server 8765 --bind 127.0.0.1` plus headless Chromium):

1. **Markup:** the HTML parses with balanced tags.
2. **Bilingual integrity:**
   - every `[data-en]` element has a non-empty `data-zh`
   - initial content equals `data-en`
   - no nested `[data-en]` elements
3. **Language round trip:** after EN → 中文 → EN, every bilingual element shows the full text of its attribute, with no truncation and no stray elements.
4. **Layout:**
   - no horizontal overflow at 1440, 1100, 1024, 800, 600, 460, 414, 390 and 360 px
   - in dark and light, in EN and 中文
   - no clipped card text
5. **Fixed controls:**
   - `.home-link` doesn't overlap the `h1`, subtitle or controls at 1440, 1100, 1025, 1024, 800, 600, 414, 390 and 360 px
   - a touch tap on it goes home
   - the theme button flips the theme and its icon, and saves the choice
6. **Console:** no JavaScript exceptions, console errors or failed requests. Until a favicon exists, `/favicon.ico` returns 404 (§12).
7. **Contrast:** every new or changed text colour is at least 4.5:1 in both themes.
8. **Links:** every `href` and `src` resolves.
9. **Facts:**
   - every changed figure matches its source
   - EN and ZH agree
   - the as-of stamps agree with each other

After a push:

10. The Pages build reports `built` for the pushed commit.
11. The live files are byte-identical to `HEAD`.
12. The live page passes a spot check, loaded with a cache-busting query string.

## 11. Hosting and deployment

- **Hosting:**
  - GitHub Pages, legacy (Jekyll) build from `main` at `/`, with HTTPS enforced
  - no custom domain and no analytics (the ClustrMaps globe is hidden)
- **Deploying:**
  - Pushing to `main` deploys through the "pages build and deployment" workflow, which takes about 1–2.5 minutes.
  - Check it with `gh run list --limit 3`, or `gh api repos/muhammad-wei/muhammad-wei.github.io/pages/builds/latest`.
- **Caching:** the CDN sends `cache-control: max-age=600`. Add `?v=<n>` when checking a fresh deploy.
- **Public by default:**
  - The repository is public, and Pages serves every committed file. Markdown is served raw, for example `/README.md`.
  - Never commit secrets, private notes or personal email addresses.
  - To keep the docs off the website, list them under `exclude:` in a `_config.yml`.

## 12. Known gaps and backlog (October 10, 2026)

| # | Gap | Where | Suggested fix |
| --- | --- | --- | --- |
| 1 | No favicon: every first visit logs a 404 for `/favicon.ico` | All pages | Add `<link rel="icon">` (for example `assets/img/logo.png`) to all six pages |
| 2 | No `meta description` | AI, Web3, Business Growth | Add one sentence each |
| 3 | No footnote with as-of date and disclaimer | AI, Energy | Add one in the Finance/Web3 style |
| 4 | Theme button `aria-label` and `role="group"` on the language toggle | Finance only | Copy to the other four pages |
| 5 | Language choice is not remembered (the theme is) | Landscape pages | Save it like `voltai-theme` |
| 6 | The vision names Space, but there is no Space landscape | Home | New page (§9.4) |
| 7 | Finance is reachable from the slider only | Home intro | Add a fifth card, or keep it deliberately |
| 8 | Web3 thumbnail is 1075×600 and 83 KB; the others are 600×600 and 13–30 KB | `assets/img/landscape/` | Re-export at 600×600 |
| 9 | README says "Hongbo Wei — ML Engineer & AI/Web3 Engineer"; the site says "Bruce Wei — Entrepreneur" | `README.md` | Align if intended |
| 10 | Shared controls and scripts are copied into five files (the cost of having no build step) | Landscape pages | Apply any change to all five |

Fixed on October 10, 2026: the `<` escaping bug in the bilingual attributes (§7, rule 3).

## 13. History

| Date (2026) | Milestone |
| --- | --- |
| Feb 23 | Site created from the Global template |
| May 8 | Pivot to industry landscapes: AI, Energy and Business Growth pages |
| May 25 | Web3 page added |
| Oct 2 | Finance page added |
| Oct 4 | Energy page reframed as global with a China focus; vision "AI × Energy × Space × Web3"; Traffic and LinkedIn hidden |
| Oct 8 | Every page validated (facts, readable palettes, EN/ZH parity); home cards fixed for mobile; "← Home" links added; unused images and the PSD removed |
| Oct 9 | Web3 page brought to October 2026 (exchanges, market-moving news); weekly freshness report started |
| Oct 10 | Live-site review; bilingual `<` fix; `CLAUDE.md` and this spec added |

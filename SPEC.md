# muhammad-wei.github.io — Site Specification

|               |                                                                     |
| ------------- | ------------------------------------------------------------------- |
| Site          | https://muhammad-wei.github.io                                      |
| Owner         | Muhammad Wei                                                           |
| Hosting       | GitHub Pages, static files from `main` (no build step)              |
| Last reviewed | October 23, 2026 — the home page gains a four-branch Vision node tree, a matrix-rain strip and a capital-path note; the AI page is review-dated; every page is bilingual and the language choice carries across pages (live site last checked October 10 against commit `88ea649`) |

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
- **Vision first, capital second.** The four core landscapes converge. Finance and Business Growth are the capital path that funds the convergence, not part of the four.

## 3. Site map

| Page | File | Scope | Figures as of | Linked from home |
| --- | --- | --- | --- | --- |
| Home | `index.html` | Vision (convergence), landscape index, capital path, contact (EN/中文) | — | — |
| AI Industry | `ai-industry-chart.html` | World models → four modalities → four pillars | Undated figures; reviewed October 2026 | Intro card, slider |
| Energy × China | `energy-industry-chart.html` | Global energy with a China focus; the 2026 Hormuz shock | 2026 (checked Oct 2026) | Intro card, slider |
| Space Industry | `space-industry-chart.html` | Physics of access → value chain → rocket science, technology, living in space, economy, seven space powers, milestones | October 2026 (figures to Oct 15) | Intro card, slider |
| Web3 Industry | `web3-industry-chart.html` | Regulation, sectors, exchanges, market-moving news | Oct 8, 2026 | Intro card, slider |
| Finance Industry | `finance-industry-chart.html` | Regulation, value chain, money flows, six jurisdictions | October 2026 | Slider |
| Business Growth | `business_growth_circular_flow.html` | Eight-step growth cycle (a framework, no market data) | Evergreen | Slider |

Every landscape page links back to the home page with "← Home" ("← 首页" in Chinese).

## 4. Home page (`index.html`)

- **Template:** "Global" by Bucky Maler.
  - Styles: Sass sources in `assets/css/`, compiled to `assets/css/main.css`.
  - Scripts: jQuery 2.2.4 from the Google CDN, falling back to `assets/js/vendor/`, plus `assets/js/functions-min.js`. Hammer.js 2.0.8 is prepended into that file by CodeKit.
  - Fonts: Montserrat, self-hosted in `assets/css/fonts/`.
- **Sections** (numbered 01–04 in the side nav):
  1. **Home**
     - Headline "Building AI × Energy × Space × Web3" (构建 AI × 能源 × 太空 × Web3), a "Contact Me" (联系我) button and the astronaut visual.
     - Four cards: AI Industry, Energy × China, Space Industry and Web3 Industry, matching the headline's four fields in its order.
  2. **Landscapes ("Industry Landscapes" / 行业版图)**
     - A slider of six landscapes: Energy, AI (centre), Space, Web3, Business Growth and Finance. The first view shows Energy, AI and Space.
     - Each slide has a thumbnail, a title and a one-line description, in both languages.
     - Thumbnails are 600×600 WebP files in `assets/img/landscape/`.
     - A note under the slider frames Finance and Business Growth as the **capital path**: they build the starting fund for the intersection and are not part of the four core landscapes.
  3. **Vision ("The Convergence" / 交汇)**
     - Headline "Where the four meet" (四大产业，交汇之处) and a short thesis: the four fields are not separate bets, because AI, energy, space and Web3 are becoming one system.
     - A **node tree**: the root "One system" sits at the top and branches into four role nodes: AI is demand, Energy is the binding constraint, Space is the next layer, Web3 is the coordination layer. Each branch carries three concept leaf nodes (for example AI: models · agents · autonomy). The tree closes below the leaves on "∞ — every combination is an opening", so the structure stays shallow and open-ended. It is drawn as a node diagram at 901 px and wider and as a compact list at 900 px and below.
     - A monospace ADT caption below the root reads "TREE · root → leaf = one combination in the search space · 4 × 3 = 12 paths · search → ∞". The 4 × 3 must match the branch and leaf counts.
     - A matrix-rain strip on the right edge (desktop only) adds texture; it is decorative, `aria-hidden`, paused unless the Vision section is active, and hidden under `prefers-reduced-motion`.
     - A "Now" block states the sequence: the intersection is both the destination and the starting point. Profitable finance and business-growth ventures build the starting fund and operating judgment; the next company may be one of those businesses.
  4. **Contact**: "Dubai" (迪拜), Instagram (`muhammad.x.wei`, linked), WeChat ID (`mohammed-wei`, selectable) and a GitHub link.
- **Hidden on purpose** (commented out, kept for a possible return): the Traffic globe (ClustrMaps), Connect/LinkedIn and the Hire form.
- **Navigation:**
  - side nav, the ☰ menu, the mouse wheel, the ↑/↓ keys and swipe (Hammer.js)
  - both "Contact Me" buttons jump to Contact
  - a notice asks visitors to rotate small phones held in landscape or open the site on a larger screen
- **Language:** an EN | 中文 toggle sits in the header, left of the ☰ menu. It switches every visible string, the document title, the meta description and keywords, and the slide aria-labels. The choice is shared with the landscape pages (§7).
- **Scope:** bilingual (EN/中文) and a single dark design.
- **Card copy:** card and slide descriptions must match each page's actual scope. Update them whenever a page's scope changes, in both languages.
- **Vision and capital-path copy:**
  - The Vision tree describes four roles in one system, not four separate business lines.
  - Its four branches are AI (demand), Energy (constraint), Space (frontier) and Web3 (coordination); each carries three concept leaves, and the open end is ∞ below the leaves. Keep the leaves conceptual, not company or product lists.
  - The tree note is the ADT reading: root → leaf is one path through the search space, 4 × 3 = 12 paths, then search continues at ∞. Update the count if the branches or leaves change.
  - Finance and Business Growth are the funding path. Never present them as a fifth core landscape, and never fold them into the four.
  - Update the Vision tree, the slider note and the "Now" block together when the sequencing changes.

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
   - their tooltips and ARIA labels follow the language too
3. **Header:** an `h1` (page name, plus the as-of date when dated) and a `.subtitle` that lists the page's parts, separated by "·".
4. **Higher-order card:** the field that spans every layer, such as regulation, geopolitics or physics (Space). It has a badge, an `h2`, one paragraph and tag chips.
5. **Connector** with a label (for example "Integrates & spans across").
6. **Five layer cards**, either value-chain layers or sectors, each with sub-tags. The AI page has four modality cards here instead.
7. **Connector** ("Sustained by").
8. **Four pillar cards.** The fourth carries the "Emerging" badge.
9. **Page sections:** `.page-section` blocks with a `.page-section-title`, specific to each page.
10. **Legend and footnote.** The footnote states the as-of date, the sources and the disclaimer.
11. **Inline script:**
    - `setLang()`, `toggleTheme()` and `updateThemeIcon()`
    - `setLang()` also sets the document title and meta description from the page's `TITLES` and `DESCRIPTIONS` maps
    - applies a saved language as the page loads, then saves each new choice
    - follows system theme changes until the visitor picks a theme

### 5.2 Page inventory

**AI Industry**
- **Higher-order card:** World Models.
- **Modalities:** Language · Voice & Audio · Vision · Embodied / Action.
- **Pillars:** Data · Algorithms · Compute · Energy (Emerging).
- **No page sections and no dated figures.** The page is review-dated "Reviewed October 2026" in the title and subtitle; keep those stamps together if it is reviewed again. A footnote carries the disclaimer and the review date.

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
- **Main source:** IEA, with NEA for China. The footnote states the as-of date and the disclaimer.

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

**Space Industry**
- **Higher-order card:** The Physics of Access: rocket equation, Δv and cost to orbit.
- **Layers:**
  - Launch & Access to Orbit
  - Spacecraft & Satellites
  - Ground Equipment & Operations: the largest revenue pool (SIA), following SIA's taxonomy, so GNSS chips and terminals sit here
  - Space Services
  - Human Spaceflight & Exploration
- **Pillars:** Capital & Anchor Customers · Policy, Spectrum & Law · Talent & Supply Chain · In-Space Economy (Emerging).
- **Sections:**
  - Rocket Science 101: a Δv map (SVG) and six cards
  - Technology Frontier: six cards, each with a KPI
  - Living in Space: six cards
  - Space Economy Snapshot: three cards
  - Space Powers Lens: US, China, Russia, Europe, Japan, India, UAE
  - Milestones: ten items, newest first, with Artemis II as the headline
  - Where Startups Are Winning: five spaces
- **Sources:**
  - NASA, CNSA/CMSA, ESA, the Space Foundation, SIA, SEC filings and Jonathan McDowell's launch log
  - Δv values from Curtis, *Orbital Mechanics for Engineering Students* (4th ed.)
  - every figure is listed in `sources/space-industry.md`

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
  - Each page owns its token set, from 42 to 110 tokens, named `--<component>-<role>` (for example `--layer-h3`, `--force-stat`, `--sec-kpi`).
  - Shared on every page: `--bg-page`, `--text-body`, `--h1-color`, `--subtitle-color`, the `--ctrl-*` set and `--legend-color`.
- **Theme on load:**
  - The first visit uses the system preference.
  - The theme button switches theme and saves the choice in `localStorage` under `voltai-theme`. All pages share this key, so the choice carries across them.
  - Keep the key name: renaming it would reset every visitor's saved theme.
- **New components:**
  - Build them from existing tokens where possible. The Web3 news list, for example, uses `--force-*`, `--alloc-pct` and `--layer-hover`, so both themes are covered automatically.
  - A new token must be defined for both themes.
- **Contrast:** at least 4.5:1 for all text against its background, in both themes. The large ordinal watermarks ("01"–"08" in `.force-num` and `.pnum`) are decorative and exempt.

### 6.2 Typography

- **Landscape pages:** a system font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", sans-serif`. With no web fonts, Chinese renders natively and nothing extra loads.
- **Home page:** Montserrat.

### 6.3 Components

| Component | Markup | Used on |
| --- | --- | --- |
| Home link | `a.home-link` | All landscape pages |
| Controls | `.controls` > `#theme-btn.theme-btn` + `.lang-toggle` (`#btn-en`, `#btn-zh`) | All landscape pages |
| Badges | `.badge` (higher-order card); `.new-badge` ("Emerging", "Headline") | AI, Energy, Finance, Web3, Space |
| Tag chips | `.tag` (higher-order card), `.sub-tag` (layer and pillar cards) | AI, Energy, Finance, Web3, Space |
| Layer cards | `.layer-card` × 5 | Energy, Finance, Web3, Space |
| Modality cards | `.modality-card` × 4 | AI |
| Pillar cards | `.pillar-card` × 4 | AI, Energy, Finance, Web3, Space |
| Page section | `.page-section` + `.page-section-title` (Business Growth: `.section-title`) | Energy, Finance, Web3, Space, Business Growth |
| Force cards | `.force-card` | Energy (3), Finance (9), Web3 (3), Space (3) |
| Stat cards | `.sec-card`: icon, `h3`, paragraph, KPI and KPI label | Web3 (exchanges, scoreboard), Space (technology frontier) |
| Explainer cards | `.rs-card` (rocket science), `.life-card` (living in space): `h3`, paragraph and a `.stat` chip | Space |
| News list | `.news-list` > `.news-item` (`.headline` for the top story): `.news-date`, `h3`, paragraph, `.why` | Web3, Space |
| Allocation cards | `.alloc-card` | Web3 |
| Decision pair | `.decision-card` × 2 (bad/good or bear/bull) | Energy, Web3 |
| Jurisdiction cards | `.jur-card` | Finance, Space (space powers, with `dt` stacked above `dd`) |
| Flow diagram | `.flow-wrap`, `.flow-card` | Finance |
| Δv diagram | `.dv-wrap` SVG (bilingual `<text>` and `<title>`), `.dv-chips`, `.swipe-hint` | Space |
| Lens cards | `.cn-card`, `.region-card`, `.opp-card` | Energy; Space (`.opp-card`) |
| Framework cards | `.step-card`, `.prin-card`, `.use-card`; SVG in `.diagram-wrap` | Business Growth |
| Vision tree | `.vision-tree`: root at the top, four `.vision-branch` nodes (field, role, three leaf nodes), `∞` below; `.vision--now` for the capital-first note | Home |
| Tree note | `.vision-tree--note`: monospace ADT caption, 4 × 3 = 12 paths, search → ∞ | Home |
| Matrix rain | `.vision-rain` > `#matrix-rain` canvas; desktop-only, `aria-hidden`, reduced-motion-safe | Home |
| Capital path note | `.work--note` under the slider | Home |
| Contact channels | `.contact--channel` inside `.modal--information` | Home |
| Legend | `.legend` (Space: dots take token colours via `.dot-*` classes) | All landscape pages |
| Footnote | `.footnote` | AI, Energy, Finance, Web3, Space |

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
  | Space | 1024 / 800 / 668 / 460 (the Δv diagram scrolls inside its frame below 668) |
  | Business Growth | 1024 / 700 / 500 |

- **Requirements:**
  - no horizontal scroll at any width from 360 to 1440 px, in either theme or language
  - the fixed controls never cover the `h1` or subtitle
  - the home's Vision section fits without clipping from 360 to 1440 px, including 375×667 and 360×640. The tree is a four-branch node diagram at 901 px and wider and a compact list at 900 px and below; below 760 px in height the section drops the eyebrow and tightens type and padding. The matrix rain appears only at 1280 px and wider and is hidden under reduced motion.

## 7. Bilingual text

- **Language on load:**
  - A first visit opens in English.
  - The visitor's choice is saved in `localStorage['voltai-lang']` (`en` or `zh`) and applied as every page loads, home included.
  - The key is shared by all seven pages. Clearing site data returns the site to English.
  - `#zh` and `#en` on a page still force that language for that load without saving it.
- **`setLang(lang)`** (the home page carries the same function inline):
  - marks the active button and sets `aria-pressed`
  - sets `<html lang>` to `en` or `zh-CN`
  - replaces the `innerHTML` of every `[data-en]` element with its `data-en` or `data-zh` value
  - sets the document title and `meta description` from the page's `TITLES` and `DESCRIPTIONS` maps
  - sets language-specific `title` and `aria-label` attributes from `data-title-*` and `data-aria-*`
  - saves the choice under `voltai-lang`
- **Authoring rules:**
  1. Every visible string sits in an element carrying both `data-en` and `data-zh`. The element's initial content equals `data-en`, so the page is correct before any toggle, and for search engines.
  2. Inline tags (`<strong>`, `<br>`) may be written literally inside the attributes. Escape `"` as `&quot;`.
  3. A literal `<` in text must be written `&amp;lt;` inside the attributes.
     - A plain `&lt;` is decoded once by the attribute parser, then parsed as a tag by `innerHTML`.
     - Found October 10, 2026: `<US$500B` cut an Energy paragraph short after switching back to EN.
     - In visible text, `&lt;` is correct.
  4. Never nest one `[data-en]` element inside another. The outer swap would erase the inner one.
  5. EN and ZH carry the same figures, dates and claims.
  6. A page's `TITLES` and `DESCRIPTIONS` maps and its head `<title>` and `meta description` agree with each other.
- **Chinese style:**
  - Simplified Chinese.
  - Amounts in 亿/万亿, for example $315B → 3150亿美元.
  - Dates such as 2026年10月6日 or 10月6日.
  - Keep standard Latin names for companies, tickers and laws, for example GENIUS 法案, MiCA, OKX.
- The home page follows the same rules. Its toggle lives in the header; it has no theme toggle because the design is single-dark.

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
- **Space milestones** use the same format. Events qualify if they are:
  - first-of-a-kind flights
  - crewed missions
  - major financings, IPOs and M&A
  - treaty and policy shifts
  - major failures

  The headline item keeps its date order, so it need not be the newest.

### 8.4 Tone

- Neutral and factual: no hype and no recommendations.
- Label opinion-like sections as what they are, for example "Consensus Allocation Framework (Sell-Side Band…)" or "Scenarios".

## 9. Freshness and maintenance

### 9.1 Review cadence (targets)

| Page | Changes with | Review |
| --- | --- | --- |
| Web3 | Prices, flows, news | Weekly report (§9.2); refresh when it says "UPDATE RECOMMENDED" |
| Finance, Energy | Policy, macro, geopolitics | Quarterly, or after a major event |
| Space | Launches, missions, markets | Quarterly report (§9.5), or after a major event. Each review starts from `sources/space-industry.md`: re-check every row, then update the page and the ledger together. |
| AI | Technology cycle | Every six months |
| Business Growth | — | As needed |

### 9.2 Weekly Web3 report

- **What and when:** a Claude Code cloud routine, "Weekly Web3 page freshness report", runs every **Monday at 09:00 Hong Kong time** (01:00 UTC).
- **What it does:**
  - reads the live Web3 page
  - re-checks its key figures against CoinGecko, DefiLlama, RWA.xyz, ETF data and Strategy's filings
  - scans the past seven days for market-moving news
- **What it flags:** only figures that moved more than ~10%, and claims that are no longer true.
- **Delivery:** it emails the owner a report with the subject "Web3 page check — ‹date›: UPDATE RECOMMENDED | No update needed". Every Gmail tool except sending is on the routine's disallowed list.
- **Report only:** it never edits the repository.
- **Network:** the routine's cloud environment needs **Full** network access. On the default **Trusted** level, only GitHub (including `raw.githubusercontent.com`), package registries and web search work, so the run can't read the page or its data sources. The first run, on Oct 12, 2026, failed this way. Both routines' environments have been on **Full** since Oct 17, 2026.
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

### 9.5 Quarterly Space report

- **What and when:** a Claude Code cloud routine, "Quarterly Space page freshness report", runs on **January, April, July and October 15 at 09:00 Hong Kong time** (01:00 UTC).
- **What it does:**
  - reads `sources/space-industry.md` from `raw.githubusercontent.com`
  - re-checks every dated row against its source, recounting launches from McDowell's log
  - retries the ledger's failed items (§I)
  - proposes milestones dated after the ledger's "Checked" date
- **What it flags:** rows whose source now shows a different value or status, or that a newer period supersedes. Evergreen and textbook rows are skipped.
- **Delivery:** it emails the owner a report with the subject "Space page check — ‹date›: UPDATE RECOMMENDED | No update needed". Every Gmail tool except sending is on the routine's disallowed list.
- **Report only:** it never edits the repository.
- **Network:** as in §9.2. On **Trusted**, it falls back to web search and lists what it couldn't re-check.
- **Applying a report:** say "update the Space page" in Claude Code. Follow the ledger's "How to refresh" steps and verify each item against its source, then pass §10 and wait for "push".
- **Management:** pause, edit or run the routine at claude.ai/code/routines.

## 10. Quality gates

A change is done when all of these pass locally (`python3 -m http.server 8765 --bind 127.0.0.1` plus headless Chromium):

1. **Markup:** the HTML parses with balanced tags.
2. **Bilingual integrity** (all seven pages):
   - every `[data-en]` element has a non-empty `data-zh`
   - initial content equals `data-en`
   - no nested `[data-en]` elements
   - every `data-title-en` and `data-aria-en` has a matching `-zh`
   - `<title>` and `meta description` exist in both languages
3. **Language round trip:** after EN → 中文 → EN, every bilingual element shows the full text of its attribute, with no truncation and no stray elements. The document title, meta description and language-specific ARIA/title attributes follow the same round trip.
4. **Persistence:** a choice made on one page is applied on the next page, and clearing `voltai-lang` returns the site to English.
5. **Layout:**
   - no horizontal overflow at 1440, 1100, 1024, 800, 600, 460, 414, 390 and 360 px
   - in dark and light on the landscape pages, in EN and 中文
   - in EN and 中文 on the single-dark home page
   - no clipped card text
   - the home Vision section fits at 375×667 and 360×640 as well as the nine widths above
   - the matrix rain shows only at 1280 px and wider, is hidden under reduced motion, and produces no console errors while its section is inactive
6. **Fixed controls (landscape pages):**
   - `.home-link` doesn't overlap the `h1`, subtitle or controls at 1440, 1100, 1025, 1024, 800, 600, 414, 390 and 360 px
   - a touch tap on it goes home
   - the theme button flips the theme and its icon, and saves the choice
   - the home header's EN | 中文 toggle doesn't overlap the logo or the ☰ menu
7. **Console:** no JavaScript exceptions, console errors or failed requests.
8. **Contrast:** every new or changed text colour is at least 4.5:1 in both themes, including the home page's language toggle.
9. **Links:** every `href` and `src` resolves.
10. **Facts:**
    - every changed figure matches its source
    - EN and ZH agree
    - the as-of stamps agree with each other

After a push:

11. The Pages build reports `built` for the pushed commit.
12. The live files are byte-identical to `HEAD`.
13. The live page passes a spot check, loaded with a cache-busting query string.

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
  - `sources/` is public too. It holds source ledgers only: figures, dates and public source URLs.
  - To keep the docs off the website, list them under `exclude:` in a `_config.yml`.

## 12. Known gaps and backlog (October 23, 2026)

Numbers are kept from the October 16 list; fixed items are listed below the table.

| # | Gap | Where | Suggested fix |
| --- | --- | --- | --- |
| 7 | Web3 thumbnail is 1075×600 and 83 KB; the others are 600×600 and 9–30 KB | `assets/img/landscape/` | Re-export at 600×600 |
| 9 | Shared controls and scripts are copied into six files (the cost of having no build step) | Landscape pages | Apply any change to all six |

Fixed:
- **October 10, 2026:** the `<` escaping bug in the bilingual attributes (§7, rule 3).
- **October 16, 2026:** the missing Space landscape (formerly #6).
- **October 17, 2026:** the README now credits the template and links the live site only; the old name and title are gone (formerly #8).
- **October 23, 2026:** the home page became bilingual (formerly English only); page titles and meta descriptions now follow the language (formerly #2); language-specific ARIA labels and tooltips reached all pages (formerly #4); the language choice is remembered across pages (formerly #5).
- **October 23, 2026:** all seven pages link the site logo as favicon (formerly #1); the home page's duplicate `Layer_1` SVG IDs are gone; AI and Energy gained source/disclaimer footnotes (formerly #3).
- **October 23, 2026:** Finance and Business Growth are framed as the capital path, not core landscapes (formerly the slider-only row); the home page gained the Vision node tree and its matrix-rain strip; the AI page is review-dated.

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
| Oct 16 | Space page added: rocket science, technology, living in space, economy, seven powers, milestones. It replaces Business Growth among the home cards, and its sources ledger is started in `sources/space-industry.md`. A quarterly freshness report was started. |
| Oct 17 | README reduced to the template credit and live link |
| Oct 18 | Text contrast raised to AA on AI, Energy, Finance, Web3 and Business Growth by changing token values only; Energy's dark-theme body text had been near 2:1 |
| Oct 23 | Whole site bilingual: home page EN/中文 toggle and full translations, language remembered across pages under `voltai-lang`, page titles and meta descriptions switch with the language, and language-specific tooltips/ARIA labels added to every page. The home page gains a Vision section ("The Convergence": a node tree of AI demand, Energy constraint, Space frontier and Web3 coordination, rooted at "One system" and branching to leaves below, with a 4 × 3 ADT caption) with a matrix-rain strip and a capital-first "Now" block; the slider frames Finance and Business Growth as the capital path; the AI page is stamped "Reviewed October 2026"; all pages gain a favicon, AI and Energy gain footnotes, and the home's duplicate SVG IDs are removed. The Contact modal adds Instagram and WeChat alongside GitHub. |

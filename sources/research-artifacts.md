# Research artifacts on this machine

This is a provenance record, not a copy of the raw research. The site is public; the raw agent sessions are private, large and contain chat/tool data that should not be committed.

## Hermes Agent

- Home: `$HOME/.hermes/` (gateway and cron run from here).
- Active cron definition: `$HOME/.hermes/cron/jobs.json`.
- Execution store: `$HOME/.hermes/cron/executions.db`; outputs: `$HOME/.hermes/cron/output/`; sessions: `$HOME/.hermes/sessions/`.
- At review time (2026-10-25), `jobs.json` contained one active personal job unrelated to this site; its name and schedule are omitted here because this repo is public. The older `jobs.json.bak.20260820_234717` contains earlier personal jobs. **No site-specific Hermes cron job was found.**
- The Hermes outputs inspected were personal reports, not the source of the landscape pages' figures.
- Conclusion: Hermes data exists on the machine and is recorded here, but the site's research trail is not in a Hermes cron output.

## The site research trail

The site-building/research sessions are under Claude Code, not the Hermes cron store:

- `$HOME/.claude/projects/-home-muhammad-wei-Projects-muhammad-wei-github-io/`
  - `7b4025c3-df24-4c2d-8799-f30bd1fdd065.jsonl` — 34,810,615 bytes, last written 2026-10-18 17:29 HKT. Contains the Space research trail (SIA, Space Foundation, Artemis Accords, McDowell, SEC filings).
  - `c0dffd63-afb8-4ab2-ad79-93ea7420eeb7.jsonl` — 10,968,627 bytes, last written 2026-10-21 13:40 HKT. Contains later site work.
  - `ecda7129-7fb5-442e-992f-1d20989ea458.jsonl` — 35,493,552 bytes, last written 2026-10-11 12:31 HKT. Contains earlier site work.
  - `*/tool-results/` — saved page/PDF extracts, including `webfetch-1790952180716-lsobhh.pdf`.
  - `memory/` — weekly Web3 and quarterly Space routine notes. Routine IDs and email addresses are deliberately not repeated here.
- `$HOME/.claude/plans/` — site plans, including `adjust-the-energy-site-memoized-unicorn.md`, `plan-to-make-a-toasty-dragonfly.md` and `evaluate-validate-and-revise-dazzling-petal.md`.
- `$HOME/.hermes/sessions/` — 28 request dumps dated 2026-08-12 to 2026-09-19; a few mention site-adjacent topics such as SpaceX/MiCA, but they are not a site ledger.
- `$HOME/Downloads/deep-research-report.md` — crypto/equity correlation research; not used for the landscape pages.

## What is committed

Only the distilled, cited rows in `sources/*.md`. The raw `.jsonl`/session files are not committed: they are large, private, and contain tool output that is not needed to audit a figure.

## How this was used

- The `.claude` Space research trail supplied the source URLs and the distinction between SIA's `$303B` satellite-industry figure and SIA's `$429B` wider space-economy figure.
- It also records that the SIA split was checked against secondary coverage rather than SIA's own PDF; that is why the Space ledger must not label those rows `verified` without opening the primary document.
- The EV correction (28% → 30%) uses IEA's 2026 Global EV Outlook as the current reference; the figure is recorded as `secondary` because the IEA table itself was not opened in this pass.

_Recorded 2026-10-25._

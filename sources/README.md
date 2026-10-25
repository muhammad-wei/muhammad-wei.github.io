# Source ledgers and research record

This directory records where each landscape's figures come from and how far each one has been checked. It is deliberately separate from the pages: the pages stay readable, while the audit trail stays explicit.

## Status legend

| Status | Meaning |
| --- | --- |
| `verified` | The named source was fetched and the number matched. |
| `secondary` | The number matched reputable secondary coverage or an official summary; the primary document was not opened. |
| `computed` | The number is arithmetic from other rows or from the page's own components. |
| `unverified` | The number is on the page but has not been independently checked. Do not treat it as audited. |
| `textbook (not fetched)` | Space Δv rows only: the value, edition and chapter are recorded, but the book was not opened. |
| `editorial` | A judgement or scenario, not a measured fact. |

A number that has no row in a ledger is **not** covered by this audit. The ledgers below cover the headline figures; they are not a claim that every sentence has been independently verified.

## Ledgers

| File | Page | Scope |
| --- | --- | --- |
| [`space-industry.md`](space-industry.md) | Space | The original full ledger: physics, technology, economy, powers, milestones, with placements and status. |
| [`energy-industry.md`](energy-industry.md) | Energy × China | Headline macro, layer, China, regional and decision figures. |
| [`finance-industry.md`](finance-industry.md) | Finance | Capital, market structure, post-trade, payments, jurisdictions and regulation. |
| [`web3-industry.md`](web3-industry.md) | Web3 | Market snapshot, stablecoins, ETFs, DeFi, exchanges, AI/DePIN/RWA/restaking/gaming and allocation. |
| [`research-artifacts.md`](research-artifacts.md) | All | Where the raw research lives on this machine, including what was and was not found under Hermes Agent. |

## Rules

- A changed figure moves in the page, all four languages, and its ledger row together.
- A date change moves the page's as-of stamp and the ledger's date together.
- `verified` is not a synonym for "I saw it in a headline". Use `secondary` unless the primary document was opened.
- Do not copy private session dumps, routine IDs, email addresses or chat IDs into this public repository. The record belongs in `research-artifacts.md`; the raw files stay private.

_Last reviewed: 2026-10-25._

# Finance — source ledger

Page: [`finance-industry-chart.html`](../finance-industry-chart.html)  
As-of: October 2026, unless a row says otherwise.  
Status: headline figures; rows map to the page's cards and KPIs. A number without a row is not audited.

## Key sources

| Short name | Source |
| --- | --- |
| BIS Basel | BIS, Basel Framework, <https://www.bis.org/basel_framework/> |
| SEC T+1 | SEC, "SEC Adopts Rule to Shorten Settlement Cycle", 2023, <https://www.sec.gov/news/press-release/2023-29> |
| DTCC T+1 | DTCC, "Accelerated Settlement", <https://www.dtcc.com/accelerated-settlement> |
| IFEC A-shares | IFEC, "Differences between Mainland and Hong Kong Stock Markets", <https://ifec.org.hk/web/en/investment/investment-products/stock/stockconnect/differences-between-mainland-and-hk-stock-markets.page> |
| HKMA LERS | HKMA, Linked Exchange Rate System, <https://www.hkma.gov.hk/eng/key-functions/money/linked-exchange-rate-system/> |
| CBUAE | Central Bank of the UAE, <https://www.centralbank.ae/en/> |
| Fed SR 26-2 | Federal Reserve, SR 26-2, 17 Apr 2026, <https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm> |
| ESMA MiCA | ESMA, MiCA, <https://www.esma.europa.eu/regulation/crypto/mica> |
| BIS mBridge | BIS Innovation Hub, mBridge, <https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm> |
| HKMA stablecoins | HKMA, Stablecoin issuers, <https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/> |
| Congress GENIUS | S.1582, GENIUS Act, <https://www.congress.gov/bill/119th-congress/senate-bill/1582> |

## A. Capital and market structure

| ID | Claim | Value | Date | Source | Placement | Status |
| --- | --- | --- | --- | --- | --- | --- |
| FI-01 | Basel III CET1 minimum | 4.5% | current | BIS Basel | Capital pillar | verified |
| FI-02 | LCR / NSFR minimum | 100% each | current | BIS Basel | Risk pillar | verified |
| FI-03 | US settlement cycle | T+1 since 28 May 2024 | 28 May 2024 | SEC T+1; DTCC T+1 | Market structure | verified |
| FI-04 | EU / UK / Switzerland T+1 | 11 Oct 2027 | 2027 | EU Commission / ESMA / Bank of England | Market structure | secondary |
| FI-05 | Hong Kong T+1 | consultation in 2026; target Q4 2027 | 2026–2027 | HKEX | Market structure | unverified |
| FI-06 | A-share settlement | shares T+0, cash T+1; no same-day turnaround trading | current | IFEC A-shares | Market structure | verified |
| FI-07 | HKD band | 7.75–7.85 per USD | current | HKMA LERS | Jurisdictions | verified |
| FI-08 | AED peg | 3.6725 per USD | current | CBUAE | Jurisdictions | verified |
| FI-09 | DIFC / ADGM | DIFC 2004; ADGM 2015 | current | DIFC / ADGM | Jurisdictions | verified |
| FI-10 | UAE settlement | T+2 | current | DFM / ADX | Jurisdictions | secondary |
| FI-11 | UAE domestic card scheme | Jaywan | current | CBUAE / Al Etihad Payments | Payments | secondary |
| FI-12 | UAE instant payments | Aani | current | CBUAE / Al Etihad Payments | Payments | secondary |
| FI-13 | UAE wage protection | WPS | current | CBUAE / MOHRE | Payments | secondary |
| FI-14 | UAE funds transfer | UAEFTS | current | CBUAE | Payments | secondary |

## B. Regulation, money and cross-border

| ID | Claim | Value | Date | Source | Placement | Status |
| --- | --- | --- | --- | --- | --- | --- |
| FI-15 | US stablecoin law | GENIUS Act; effective 18 Jan 2027 | 2025–2027 | Congress GENIUS | Regulation | secondary |
| FI-16 | EU crypto regime | MiCA; transition ended 1 Jul 2026 | 2026 | ESMA MiCA | Regulation | verified |
| FI-17 | Binance EU authorisation | no MiCA licence | 2026 | FT / ESMA register | Regulation | secondary |
| FI-18 | e-CNY | interest-bearing deposit from Jan 2026 | Jan 2026 | PBoC / press | Money | secondary |
| FI-19 | Hong Kong stablecoin licences | first licences Apr 2026 | Apr 2026 | HKMA stablecoins | Money | secondary |
| FI-20 | mBridge | Macao joined in 2026; BIS exited Oct 2024 | 2024–2026 | BIS mBridge | Cross-border | secondary |
| FI-21 | Fed model-risk guidance | SR 26-2 replaced SR 11-7 in Apr 2026 | 17 Apr 2026 | Fed SR 26-2 | Regulation | verified |
| FI-22 | EU AI Act credit scoring | high-risk credit scoring deferred to Dec 2027 | 2027 | EU AI Act | Regulation | secondary |
| FI-23 | US Basel III re-proposal | Mar 2026 | Mar 2026 | Federal Reserve / OCC / FDIC | Regulation | secondary |
| FI-24 | Tokenized MMFs | ~US$9B | 2026 | press / fund data | Capital | unverified |
| FI-25 | Stablecoin supply | ~US$315B | Oct 2026 | CoinGecko / DefiLlama | Money | secondary |
| FI-26 | CIPS | 190+ direct participants; ~1,700 indirect | 2026 | CIPS / press | Cross-border | unverified |
| FI-27 | PBoC stance | "moderately loose" in 2026 | 2026 | PBoC | Money | unverified |
| FI-28 | e-HKD | pilot only; no retail launch | 2026 | HKMA | Money | unverified |
| FI-29 | Project Guardian | MAS tokenization pilots | 2026 | MAS | Cross-border | secondary |
| FI-30 | BIS mBridge exit | Oct 2024 | Oct 2024 | BIS | Cross-border | verified |

## Notes

- The A-share "T+0/T+1" wording is correct in the securities/cash-settlement sense: shares settle T+0 and money T+1; same-day turnaround trading is not allowed. The page's KPI label says "securities / cash settlement", which is the precise reading.
- The page's "Not a layer" is a classification statement, not a figure.
- Stablecoin supply is cross-checked in `web3-industry.md`; the two pages must not drift.

_Last reviewed: 2026-10-25._

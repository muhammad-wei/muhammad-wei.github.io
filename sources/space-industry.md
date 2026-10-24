# Sources ledger — Space page

Every figure on `space-industry-chart.html` comes from a row in this file (SPEC §8.1, "one figure, every place").

- **Checked:** October 15–16, 2026. The page's as-of stamp is "October 2026"; a row's own date applies where it is older.
- **Placements** name the card or element on the page. Every placement exists in both EN and ZH.

## Gate 1 decisions (owner, October 16, 2026)

- **Headline milestone:** Artemis II.
- **Δv rows:** "textbook (not fetched)" rows accepted as cited. They are published as typical values ("~") citing Curtis, 4th ed.
- **SpaceX–xAI merger:** kept, citing the press (TechCrunch, CNBC/Bloomberg). SpaceX's SEC-filed Q2 2026 release reports "Grok and X subscription revenues" inside its AI segment, which is consistent with the merger. The full prospectus was too large to fetch, so the deal terms remain press-sourced.
- **Failed items (§I):** handled as proposed.

## How to refresh (quarterly, SPEC §9.1)

1. Re-check every row against its source. Re-run the McDowell counts (§E).
2. Update the value, the date and the status here first.
3. Change the page in every listed placement, in EN and ZH together.
4. Move rows that no longer hold to §I with the reason.

## Status legend

| Status | Meaning |
| --- | --- |
| verified | Fetched from the named source and matched. |
| textbook (not fetched) | Δv rows only. The value, edition and chapter are recorded, but the book was not opened to confirm the page or table. A computed check is given. |
| failed | Could not be verified from a primary source, or the sources conflict. The reason and the proposed replacement are recorded. |

## Key sources

| Short name | Source |
| --- | --- |
| Curtis | H. D. Curtis, *Orbital Mechanics for Engineering Students*, 4th ed., Butterworth-Heinemann. |
| McDowell log | Jonathan McDowell, GCAT launch log, <https://planet4589.org/space/gcat/tsv/derived/launchlog.tsv> (file updated 2026 Oct 15). Counts in this ledger are computed from it: one row per launch tag, all orbital attempts. |
| McDowell constellations | <https://planet4589.org/space/con/star/stats.html>, `…/con/kp/stats.html`, `…/con/qf/stats.html`, `…/con/xw/stats.html` (data updated 2026 Oct 13). |
| NSSDC | NASA planetary fact sheets: <https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html>, `…/marsfact.html`. |
| SIA 2026 | SIA, *State of the Satellite Industry Report 2026* (FY2025), executive summary: <https://sia.org/wp-content/uploads/2026/05/SSIR26-One-Pager-Exec-Summary-FINAL-scaled.png>. |
| Space Foundation 2026 | Global Space Economy report, July 2026: <https://www.spacefoundation.org/wp-content/uploads/2026/07/SF-GSE-REPORT-2026July-FOR-RELEASE.pdf>. |

---

## A. Physics of Access and Rocket Science 101

Computed checks use Earth GM 398,600 km³/s², Moon GM 4,900 km³/s², Moon mean radius 1,737.4 km, Moon orbital speed 1.022 km/s (NSSDC), a 300 km circular parking orbit and a 100 km lunar orbit.

| ID | Claim | Value | Date | Source | Placement | Status |
| --- | --- | --- | --- | --- | --- | --- |
| RS-01 | Δv from Earth's surface to LEO, including gravity and drag losses | ~9.4 km/s (typical, mission-dependent) | evergreen | Curtis, Ch. 13 "Rocket vehicle dynamics" (gravity and drag losses); page or table not confirmed | Top card ¶ and tag; Δv diagram | textbook (not fetched). Check: circular speed at 300 km is 7.73 km/s (RS-02); the rest is ascent losses minus Earth's rotation, which can't be computed from first principles. |
| RS-02 | Circular orbital speed in LEO (300 km) | ~7.7 km/s | evergreen | Curtis, Ch. 2 (circular orbits, v = √(μ/r)) | RS-101 "Orbits"; "Re-entry" (~7.7 km/s from LEO) | textbook (not fetched). Computed: 7.726 km/s. |
| RS-03 | LEO → geostationary transfer orbit (GTO) | ~2.4 km/s | evergreen | Curtis, Ch. 6 (Hohmann transfer) | Δv diagram | textbook (not fetched). Computed: 2.43 km/s. |
| RS-04 | GTO → GEO (circularise) | ~1.5 km/s from the equator; ~1.8 km/s with a 28.5° plane change | evergreen | Curtis, Ch. 6 (Hohmann transfer and plane change) | Δv diagram | textbook (not fetched). Computed: 1.47 / 1.83 km/s. |
| RS-05 | LEO → trans-lunar injection (TLI) | ~3.1 km/s | evergreen | Curtis, Ch. 9 (lunar trajectories) | Δv diagram | textbook (not fetched). Computed: 3.11 km/s. |
| RS-06 | Lunar orbit insertion into a 100 km orbit | ~0.8 km/s | evergreen | Curtis, Ch. 9 (patched conics) | Δv diagram | textbook (not fetched). Computed: 0.82 km/s. |
| RS-07 | Low lunar orbit → surface (ideal, no margins) | ~1.7 km/s | evergreen | Curtis, Ch. 6 and 9 | Δv diagram | textbook (not fetched). Computed: 1.73 km/s. |
| RS-08 | LEO → Mars transfer (Hohmann departure from 300 km) | ~3.6 km/s | evergreen | Curtis, Ch. 8 (interplanetary trajectories); worked example for a 300 km parking orbit (Example 8.3 in earlier editions; number in the 4th ed. to confirm) | Δv diagram | textbook (not fetched). Computed: 3.59 km/s. |
| RS-09 | The rocket equation, Δv = Isp · g₀ · ln(m₀ / m_f) | — | evergreen | Curtis, Ch. 13 | Top card; RS-101 "The rocket equation"; diagram band | textbook (not fetched) |
| RS-10 | Worked example: with Isp = 300 s (illustrative), 9.4 km/s needs a mass ratio of ~24, so a single stage would be ~96% propellant | 24.4; 95.9% | evergreen | Derived from RS-01 and RS-09 | RS-101 "The rocket equation" | textbook (not fetched); depends on RS-01 |
| RS-11 | Isp of kerosene/LOX: F-1 engine (Saturn V first stage), Apollo 8 data | 304 s in vacuum (304.1); 265 s at sea level. The page compares vacuum values. | evergreen | NASA NTRS, "Waking a Giant", <https://ntrs.nasa.gov/api/citations/20140011656/downloads/20140011656.pdf>. The KSC fact sheet's "260 s" is a rounded sea-level figure and is not used. | RS-101 "Isp & Propellants" | verified |
| RS-12 | Isp of hydrogen/LOX: RS-25 (Shuttle and SLS) | 452 s in vacuum (used on the page); 366 s at sea level | evergreen | L3Harris, <https://www.l3harris.com/all-capabilities/rs-25-engine>; spec sheet (2024) | RS-101 "Isp & Propellants" | verified |
| RS-13 | Isp of Hall-effect electric propulsion: NASA AEPS at 12 kW | ~2,800 s; ~600 mN thrust | 2025 | NASA NTRS, IEPC-2025 AEPS overview, <https://ntrs.nasa.gov/api/citations/20250008681/downloads/IEPC2025AEPSOverviewPaper128GRCreviewcopyUpdated.pdf> | RS-101 "Isp & Propellants" | verified |
| RS-14 | GEO altitude and period | 35,786 km; 23 h 56 min | evergreen | ESA, <https://www.esa.int/ESA_Multimedia/Images/2020/03/Geostationary_orbit> | RS-101 "Orbits" | verified |
| RS-15 | GPS orbit altitude | ~20,200 km | evergreen | NASA NTRS, <https://ntrs.nasa.gov/api/citations/20100007939/downloads/20100007939.pdf> | RS-101 "Orbits" | verified |
| RS-16 | ISS altitude | ~415 km | 2024 | NASA ISS deorbit analysis summary, <https://www.nasa.gov/wp-content/uploads/2024/06/iss-deorbit-analysis-summary.pdf> | RS-101 "Orbits" | verified |
| RS-17 | The ISS orbits about every 90 minutes: 16 orbits, sunrises and sunsets a day | — | evergreen | NASA, <https://www.nasa.gov/international-space-station/space-station-facts-and-figures/> | RS-101 "Orbits"; Living "A day in orbit" | verified |
| RS-18 | Re-entry speed returning from the Moon | ~25,000 mph (~11 km/s) | Apr 10, 2026 | NASA Artemis II return release (A. Kshatriya), <https://www.nasa.gov/news-release/nasa-welcomes-record-setting-artemis-ii-moonfarers-back-to-earth/> | RS-101 "Re-entry and landing" | verified |
| RS-19 | First Super Heavy booster caught by the tower | Oct 13, 2024 (Flight 5) | Oct 13, 2024 | SpaceX, <https://www.spacex.com/launches/starship-flight-5> | RS-101 "Staging and reuse" | verified |
| RS-20 | Most-flown Falcon booster | B1067, 37 flights (latest Aug 25, 2026) | Oct 15, 2026 | McDowell log | RS-101 "Staging and reuse" | verified |
| RS-21 | New Glenn's first booster landing | Nov 13, 2025 (NG-2, NASA ESCAPADE) | Nov 13, 2025 | Blue Origin, <https://www.blueorigin.com/news/new-glenn-launches-nasa-escapade-lands-fully-reusable-booster> | RS-101 "Staging and reuse" | verified |
| RS-22 | New Glenn's first booster reflight; upper-stage anomaly | Apr 19, 2026 (NG-3). The booster flew with new engines; the AST SpaceMobile satellite was left in too low an orbit and de-orbited. | Apr 19, 2026 | SpaceNews, <https://spacenews.com/third-new-glenn-launch-suffers-upper-stage-malfunction/> | RS-101 "Staging and reuse" | verified |
| RS-23 | Zhuque-3 lands its first stage on legs, on land: China's first such recovery of an orbital-class booster (the wording follows LandSpace's own claim) | Aug 19, 2026, Beijing time (Aug 18, 23:35 UTC) | Aug 19, 2026 | Spaceflight Now, <https://spaceflightnow.com/2026/08/19/landspace-becomes-first-commercial-chinese-company-to-land-an-orbital-class-booster/>; SpaceNews; McDowell log | RS-101 "Staging & Reuse"; Milestones (Aug 19) | verified |
| RS-26 | Engine cycles: Merlin is gas-generator; BE-4 is oxygen-rich staged combustion; Raptor is full-flow staged combustion | — | evergreen | NASA NTRS slide, <https://ntrs.nasa.gov/api/citations/20170005557/downloads/20170005557.pdf>; ULA BE-4 fact sheet, <https://www.ulalaunch.com/docs/default-source/news-items/be-4_fact_sheet_web_final_2.pdf>; NASA SMA Falcon 9 data sheet, <https://sma.nasa.gov/LaunchVehicle/assets/spacex-falcon-9-data-sheet.pdf> | RS-101 "Engine Cycles" | verified |
| RS-24 | Cost per kg to LEO on a dedicated launch (FY2021 dollars) | Space Shuttle $65,400; Saturn V $5,400; Falcon 9 $2,600; Falcon Heavy $1,500 | data to 2021 | CSIS Aerospace Security Project, <https://aerospace.csis.org/data/space-launch-to-low-earth-orbit-how-much-does-it-cost/> (chart data sheet) | Top card ¶ | verified |
| RS-25 | Google Suncatcher projection (a projection, not a forecast of record) | Launch could fall below ~$200/kg by ~2035 if a ~20% learning rate holds. At $200/kg, launched power costs ~$810 per kW-year, against $570–3,000 for terrestrial data-centre power. | Nov 2025 | Google Research, <https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/>; paper, <https://arxiv.org/abs/2511.19468> | Top card; Tech "Orbital compute" KPI | verified |

## B. Value chain and pillars

| ID | Claim | Value | Date | Source | Placement | Status |
| --- | --- | --- | --- | --- | --- | --- |
| VC-01 | Satellite-industry revenue | $303B in 2025 (71% of SIA's $429B space economy; SIA's scope differs from the Space Foundation's, see ECO-01) | FY2025 | SIA 2026 | Layers (context) | verified |
| VC-02 | Ground equipment: the largest segment | $165.2B, 54% of satellite-industry revenue: GNSS equipment $125.8B, consumer equipment $20.3B, network equipment $19.1B | FY2025 | SIA 2026 | Layer 3 `.hot`: "Largest revenue pool (SIA 2026)" | verified |
| VC-03 | Satellite services | $105B (35%): consumer $80.2B, enterprise $21.1B, remote sensing $3.6B | FY2025 | SIA 2026 | Layer 4 | verified |
| VC-04 | Satellite manufacturing | $20.4B (7%); 4,434 satellites launched in 2025 (in SIA's study) | FY2025 | SIA 2026 | Layer 2 | verified |
| VC-05 | Launch industry | $12.4B (4%); 296 commercially procured launches of 325 | FY2025 | SIA 2026 | Layer 1 | verified. SIA's 325 differs from McDowell's 329; the page uses McDowell for every launch count. |
| VC-06 | Space sustainability (servicing, debris removal, SSA) | ~$500M | FY2025 | SIA 2026 | Startups "Space domain awareness & debris" | verified |
| PIL-01 | Government space budgets | ~$141B across 53 budgets (+7.4%) | 2025 | Space Foundation 2026 | Pillar "Capital & anchor customers" | verified |
| PIL-02 | Outer Space Treaty (1967) | 118 States Parties, 23 signatories | Jan 1, 2026 | UNOOSA status of treaties, A/AC.105/C.2/2026/CRP.9/Rev.1, <https://www.unoosa.org/res/oosadoc/data/documents/2026/aac_105c_22026crp/aac_105c_22026crp_9rev_1_0_html/AC105_C2_2026_CRP09Rev01E.pdf> | Pillar "Policy, spectrum & law" | verified |
| PIL-03 | Moon Agreement (1979) | 17 States Parties | Jan 1, 2026 | Same as PIL-02 | Pillar "Policy, spectrum & law" (optional) | verified |
| PIL-04 | Artemis Accords | 76 signatories (San Marino, Sep 25, 2026) | Sep 25, 2026 | NASA, <https://www.nasa.gov/artemis-accords/> | Pillar "Policy"; Powers "US" | verified |
| PIL-05 | International Lunar Research Station (ILRS), led by China with Russia | 17 countries and international organisations, 50+ research institutions; basic station by 2035 | Apr 2026 | CGTN, <https://news.cgtn.com/news/2026-04-12/Science-without-borders-China-welcomes-global-cooperation-in-space-1MhfT9Usl0I/p.html>; Xinhua, <https://english.news.cn/20240425/29ce296893414d21ae29d3ea3243d799/c.html>; CNSA–Roscosmos joint statement | Pillar "Policy"; Powers "China", "Russia" | verified |
| PIL-06 | ITU deployment milestones for non-GSO constellations | 10% in orbit within 2 years, 50% within 5, 100% within 7, counted from the end of the bringing-into-use period | WRC-19 (rev. WRC-23) | ITU, <https://www.itu.int/hub/2020/01/itu-members-agree-to-new-milestones-for-non-geostationary-satellite-deployment/> (Resolution 35) | Pillar "Policy" | verified |

## C. Technology frontier

| ID | Claim | Value | Date | Source | Placement | Status |
| --- | --- | --- | --- | --- | --- | --- |
| TECH-01 | Starship's first orbital flight (Flight 14) | Sep 28, 2026. It deployed 26 Starlink V3 satellites. A vacuum Raptor shut down early on ascent, and the ship returned after less than two orbits (~3 h 8 min; ~10 h planned), splashing down north of Hawaii. | Sep 28, 2026 | Spaceflight Now, <https://spaceflightnow.com/2026/09/28/starship-returns-to-earth-rocket-splashes-down-north-of-hawaii-after-three-hour-flight/>; Space.com; NASASpaceflight; McDowell log | Tech "Reusable heavy lift" KPI; Milestones | verified |
| TECH-02 | Starship V3 debut (Flight 12) | May 22, 2026 | May 22, 2026 | McDowell log (FT-12, B19/S39); Space.com | Tech "Reusable heavy lift" | verified |
| TECH-03 | Starship Flight 13 | Jul 24, 2026. It deployed 20 Starlink V3 satellites on a suborbital path; they re-entered ~20 min later. The ship relit a Raptor and splashed down intact. | Jul 24, 2026 | Space.com; NASASpaceflight; McDowell Starlink table (20 listed as "failed to orbit", i.e. suborbital) | Tech "Reusable heavy lift" | verified |
| TECH-04 | Ship-to-ship propellant transfer | Not yet flown: all three 2026 Starship flights were single-ship | Oct 15, 2026 | McDowell log | Tech "Orbital refuelling & servicing" | verified |
| TECH-05 | Starlink satellites | 13,015 launched; 11,156 in orbit; 9,726 in operational orbits | Oct 13, 2026 | McDowell constellations | Tech "Megaconstellations & direct-to-cell" KPI | verified |
| TECH-06 | Starlink subscribers | 12.0M at Jun 30, 2026 (6.0M a year earlier); ARPU $66 a month | Jun 30, 2026 | SpaceX Q2 2026 earnings release (SEC), <https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm> | Tech "Megaconstellations"; Layer 4; Economy "Capital goes public" | verified |
| TECH-07 | Amazon Leo (formerly Project Kuiper) | Renamed Nov 13, 2025; 392 satellites in orbit; limited commercial service planned by end-2026 | Oct 13, 2026 | SpaceNews, <https://spacenews.com/project-kuiper-becomes-amazon-leo-ahead-of-leo-broadband-service-debut/>, <https://spacenews.com/amazon-leo-planning-to-begin-initial-services-by-end-of-the-year/>; McDowell constellations | Tech "Megaconstellations" | verified |
| TECH-08 | Qianfan and Guowang (Xingwang) | 258 and 256 satellites in orbit | Oct 13, 2026 | McDowell constellations | Tech "Megaconstellations"; Powers "China" | verified |
| TECH-09 | SpaceX buys EchoStar spectrum for direct-to-cell | ~$17B (AWS-4 and H-block, Sep 8, 2025); ~$19.6B with the AWS-3 add-on (Nov 2025); the FCC approved it with a $2.4B escrow | Sep 2025 → 2026 | EchoStar, <https://ir.echostar.com/news-releases/news-release-details/echostar-announces-spectrum-sale-and-commercial-agreement-spacex>; SpaceNews (FCC approval; AWS-3) | Tech "Megaconstellations & direct-to-cell" | verified |
| TECH-10 | SpaceX agrees to buy 800 MHz spectrum from Grain Management | Oct 8, 2026: up to 14 MHz paired, needs FCC approval. On Oct 9, Verizon fell 8.75%, T-Mobile 13.27% and AT&T 9.81%. | Oct 8–9, 2026 | CNBC, <https://www.cnbc.com/2026/10/08/spacex-spectrum-license-att-verizon-tmobile.html>, <https://www.cnbc.com/2026/10/09/verizon-att-tmobile-stocks-spacex-network.html> | Tech "Direct-to-cell"; Milestones | verified (press) |
| TECH-11 | Astroscale ADRAS-J | First debris-inspection spacecraft (launched Feb 2024); began de-orbit Mar 2026; ADRAS-J2 planned for FY2027 | Mar 2026 | Astroscale, <https://www.astroscale.com/en/news/astroscales-adras-j-mission-completes-operations-begins-deorbit> | Tech "Orbital refuelling & servicing"; Startups | verified |
| TECH-12 | Varda in-space manufacturing capsules | W-5 returned Jan 29, 2026 to the Koonibba Test Range, South Australia (fifth mission, fourth re-entry); a sixth capsule launched Mar 30, 2026, so six launched to date | Mar 30, 2026 | Varda, <https://www.varda.com/mission/w-5>; SpaceNews | Tech "In-space manufacturing" | verified |
| TECH-13 | Starcloud-1 | Nov 2025; 60 kg; the first spacecraft carrying an NVIDIA H100 | Nov 2025 | SpaceNews, <https://spacenews.com/starclouds-path-to-88000-computing-satellites/> | Tech "Orbital compute"; Startups | verified |
| TECH-14 | China's Three-Body Computing Constellation | 12 satellites launched May 14, 2025; by Feb 2026, 10 AI models validated in orbit, including two 8B-parameter models | Feb 13, 2026 | Xinhua, <https://www.news.cn/20260213/d985035629be4998bcb3086d1f4b6ecb/c.html> | Tech "Orbital compute" | verified |
| TECH-15 | SpaceX acquires xAI | Feb 2, 2026; all-stock; combined value ~$1.25T | Feb 2, 2026 | TechCrunch, <https://techcrunch.com/2026/02/02/elon-musk-spacex-acquires-xai-data-centers-space-merger/>; CNBC (citing Bloomberg); SpaceX Q2 2026 release (SEC: "Grok and X subscription revenues" in the AI segment) | Tech "Orbital Compute"; Economy "Capital Goes Public"; Milestones (Feb 2) | verified (press). Kept at Gate 1; the prospectus terms were not fetched (FAIL-01). |
| TECH-17 | Starship lunar lander needs refilling in orbit | NASA's plan uses a storage depot filled by 10+ tanker flights. Vehicle-to-vehicle transfer has never been done (NASA OIG, Mar 2026). | Mar 2026 | NASA, <https://www.nasa.gov/directorates/esdmd/artemis-campaign-development-division/human-landing-system-program/nasa-spacex-illustrate-key-moments-of-artemis-lunar-lander-mission/>; NASA OIG, <https://oig.nasa.gov/wp-content/uploads/2026/03/final-report-ig-26-004-nasas-management-of-the-human-landing-system-contracts.pdf> | Tech "Orbital Refueling & Servicing"; Milestones (Sep 28, "why") | verified |
| TECH-18 | Solar power in orbit (Google) | "In the right orbit, a solar panel can be up to 8 times more productive than on earth, and produce power nearly continuously." Two prototype satellites with Planet by early 2027. | Nov 2025 | Google Research, as RS-25 | Tech "Orbital Compute"; Startups "Space × AI × Energy" | verified |
| TECH-19 | Solar is the predominant power source for small spacecraft | Over 90% of small satellites carry solar panels and rechargeable batteries (as of 2021) | 2026 report | NASA Small Spacecraft Technology State of the Art, Power chapter (2026), <https://www.nasa.gov/wp-content/uploads/2026/05/3-soa-power-2026-final.pdf> | Tech "Space Power — Solar & Nuclear" | verified |
| TECH-20 | Space-grade solar cells | Multi-junction III-V cells: ~30% nominal, up to 34% efficiency | 2026 | Same as TECH-19 | Tech "Space Power — Solar & Nuclear" | verified |
| TECH-21 | ISS roll-out solar arrays (iROSA) | Eight arrays raise generation capacity by up to 30%, from 160 kW to ~215 kW. Arrays 7 and 8 go up on spacewalks 100 and 101 (NASA briefing, Oct 20, 2026). | Oct 2026 | NASA, <https://www.nasa.gov/news-release/nasa-to-host-news-conference-previewing-us-spacewalks-100-101/>; <https://www.nasa.gov/missions/station/iss-research/power-up-roll-out-solar-arrays-boost-space-station-power-supply/> | Tech "Space Power" ¶ and KPI | verified |
| TECH-22 | Sunlight farther out, and the lunar night | Mars receives 586.2 W/m², 43% of Earth's 1,361 W/m². A lunar night lasts ~15 days, half of the 29.53-day synodic period (computed). | evergreen | NSSDC (Mars and Moon) | Tech "Space Power" | verified |
| TECH-16 | NASA lunar fission reactor | Directive of Jul 31, 2025: ≥100 kW, launch-ready by end-2029. NASA–DOE MOU in Jan 2026. Lunar Reactor-1 to land in 2030; the SR-1 Freedom nuclear-propulsion demo is planned for Dec 2028. | Mar 2026 | SpaceNews, <https://spacenews.com/nasa-advances-lunar-nuclear-plan-with-commercial-focus/>; NASA, <https://www.nasa.gov/wp-content/uploads/2026/03/america-underway-in-space-on-nuclear-power.pdf> | Tech "Space Power — Solar & Nuclear" (Lunar Reactor-1 only; the SR-1 Freedom demo is no longer on the page) | verified |

## D. Living in space

| ID | Claim | Value | Date | Source | Placement | Status |
| --- | --- | --- | --- | --- | --- | --- |
| LIFE-01 | ISS water recovery | ~98% with the Brine Processor Assembly (93–94% before) | Jun 20, 2023 | NASA, <https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/> | Living "Life support" stat | verified |
| LIFE-02 | Bone loss in microgravity | 1–1.5% of bone mineral density per month at weight-bearing sites | evergreen | NASA HRP evidence report, <https://humanresearchroadmap.nasa.gov/evidence/reports/Fracture.pdf> | Living "Your body" stat | verified |
| LIFE-20 | Exercise in orbit | Crews exercise about two hours a day; the ARED machine reduces bone and muscle loss but does not eliminate it | evergreen | NASA, <https://www.nasa.gov/missions/station/iss-research/astronaut-exercise/>, <https://www.nasa.gov/missions/station/iss-research/counteracting-bone-and-muscle-loss-in-microgravity/> | Living "Your Body in Microgravity" | verified |
| LIFE-03 | NASA career radiation limit | 600 mSv effective dose, for all ages and sexes | Rev. C | NASA-STD-3001 Vol. 1 Rev. C, <https://standards.nasa.gov/sites/default/files/standards/NASA/C/nasa-std-3001-vol-1-rev-c-signature.pdf> | Living "Radiation" stat | verified |
| LIFE-04 | Radiation dose on a Mars mission | ~1 Sv for 180 days out, 500 on the surface and 180 back; ~1.8 mSv/day in cruise (Curiosity RAD) | 2013 | JPL PIA17601, <https://www.jpl.nasa.gov/images/pia17601-radiation-exposure-comparisons-with-mars-trip-calculation/>; JPL news, <https://www.jpl.nasa.gov/news/data-from-nasa-rovers-voyage-to-mars-aids-planning/> | Living "Radiation" | verified |
| LIFE-05 | People on the ISS | Continuously crewed since Nov 2, 2000; standard crew of 7; 290+ people from 26 countries | 2025–26 | NASA Johnson, <https://www.nasa.gov/centers-and-facilities/johnson/celebrating-25-years-of-humanity-in-space/>; NASA ISS facts | Living "Where people live" | verified |
| LIFE-06 | One-way signal delay | Moon ~1.3 s; Mars ~3–22 min | evergreen | Computed as light time from NSSDC distances (384,400 km; 54.6–401.4 million km) | Living "A day in orbit" / "Living off-world" | verified (computed from NASA data) |
| LIFE-07 | Tiangong space station | Declared complete Dec 31, 2022 | 2022 | CMSE, <https://www.cmse.gov.cn/xwzx/202412/t20241229_56186.html> | Living "Where people live"; Powers "China" | verified |
| LIFE-08 | Shenzhou-23 | Launched May 24, 2026. Crew: Zhu Yangzhu (commander), Zhang Zhiyuan, and Li Jiaying (payload specialist, the first astronaut from Hong Kong). One crew member stays a year. This was China's 8th in-orbit crew handover (太空会师), so Tiangong stays crewed through rotations. | May 2026 | CMSE, <https://www.cmse.gov.cn/xwzx/202605/t20260522_57535.html>; Xinhua, <https://www.news.cn/tech/20260525/2c7298c9b7ea4d4ab6075b7294c0760c/c.html> | Living "Where people live" | verified |
| LIFE-09 | Shenzhou-20 debris strike | Nov 5, 2025: return postponed after a suspected hit by tiny debris. The crew returned on Shenzhou-21; Shenzhou-22 launched uncrewed on Nov 25 and docked. Shenzhou-20 came back uncrewed on Jan 19, 2026, after 270 days. | Nov 2025 → Jan 2026 | CMSE, <https://www.cmse.gov.cn/xwzx/202511/t20251105_57040.html>, <https://www.cmse.gov.cn/xwzx/202511/t20251125_57148.html>; Xinhua, <https://www.news.cn/politics/20260119/70a36d4ffdbd46c9890a86ddf59a54f4/c.html> | Milestones; Living "Where people live" | verified |
| LIFE-10 | Commercial space stations | Vast Haven-1: "Launching 2027". NASA plans the commercial-station contract award for spring 2027. | Sep–Oct 2026 | Vast, <https://www.vastspace.com/haven-1>; NASA CLDC procurement, <https://www.nasa.gov/johnson/jsc-procurement/cldc/> | Living "Where people live" | verified |
| LIFE-11 | End of the ISS | Operations through 2030; US Deorbit Vehicle from SpaceX (up to $843M, awarded Jun 26, 2024) | Jun 26, 2024 | NASA, <https://www.nasa.gov/news-release/nasa-selects-international-space-station-us-deorbit-vehicle/> | Living "Where people live" | verified |
| LIFE-12 | Russian Orbital Station | First module in 2028; ISS de-orbit to be completed in 2030 | 2026 | Roscosmos via TASS, <https://tass.com/science/2089295>, <https://tass.com/science/2112881> | Living; Powers "Russia" | verified |
| LIFE-13 | Artemis II | Launch Apr 1, 2026, 6:35 p.m. EDT (SLS, LC-39B). Farthest distance 252,756 miles (~407,000 km, converted at 1.609344 km/mi), a record: it passed Apollo 13's 248,655 on Apr 6. Closest approach 4,067 miles above the lunar surface. Splashdown Apr 10 off San Diego; 695,081 miles in total. Crew: Wiseman, Glover, Koch, Hansen (CSA). | Apr 1–10, 2026 | NASA, <https://www.nasa.gov/news-release/nasa-welcomes-record-setting-artemis-ii-moonfarers-back-to-earth/>, <https://www.nasa.gov/news-release/nasas-artemis-ii-crew-eclipses-record-for-farthest-human-spaceflight/> | Milestones (Headline); Living | verified |
| LIFE-14 | Next Artemis steps | Artemis III (2027): a crew tests operations with commercial landers in LEO. The landing in the south-pole region is scheduled for 2028. | Apr 10, 2026 | NASA, same release as LIFE-13 | Living "Living off-world"; Powers "US" | verified |
| LIFE-15 | Surface gravity | Moon 1.62 m/s² (16.5% of Earth's); Mars 3.73 m/s² (38%) | evergreen | NSSDC | Living "Living off-world" | verified |
| LIFE-16 | Mars surface pressure | 6.36 mb, about 0.6% of Earth's ~1,013 mb | evergreen | NSSDC (Mars) | Living "Living off-world" | verified |
| LIFE-17 | MOXIE: oxygen made on Mars | 122 g in total (2021–2023); up to 12 g/h at ≥98% purity | Sep 2023 | NASA/JPL, <https://www.jpl.nasa.gov/news/nasas-oxygen-generating-experiment-moxie-completes-mars-mission/> | Living "Living off-world" | verified |
| LIFE-18 | Water ice at the lunar poles | The LCROSS impact in Cabeus crater (Oct 9, 2009) found water; LRO shows ice in many permanently shadowed regions | evergreen | NASA, <https://science.nasa.gov/mission/lcross/>, <https://science.nasa.gov/solar-system/moon/nasas-lro-lunar-ice-deposits-are-widespread/> | Living "Living off-world" | verified |
| LIFE-19 | China's crewed lunar landing | Target "before 2030" (Long March 10, Mengzhou, Lanyue) | 2026 | CNSA, <https://www.cnsa.gov.cn/n6758823/n6758838/c10732314/content.html> | Living "Living off-world"; Powers "China" | verified |

## E. Economy

| ID | Claim | Value | Date | Source | Placement | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ECO-01 | Global space economy | $686B in 2025 (+12%): commercial $544.3B (79%), governments ~$141B | 2025 (report Jul 2026) | Space Foundation 2026 | Economy 01 | verified |
| ECO-02 | Orbital launch attempts (record cadence) | 2024: 264; 2025: 329 (a record, +25%); 2026 through Oct 14: 245 (240 in the same period of 2025) | Oct 15, 2026 | McDowell log (computed) | Economy 02; Layer 1 | verified |
| ECO-03 | 2025 launches by launcher state | US 181 (SpaceX 170: 165 Falcon 9 + 5 Starship); China 92; Russia 17; New Zealand (Electron) 17; Europe 8; India 5; Japan 4 | 2025 | McDowell log (Europe = France 7 + Germany 1) | Economy 02; Powers KPIs | verified |
| ECO-04 | 2026 launches to date by launcher state | US 130 (SpaceX 119: 113 Falcon 9, 3 Falcon Heavy, 3 Starship); China 72; New Zealand 15; Russia 14; Europe 7; India 3; Japan 3; South Korea 1 | Oct 14, 2026 | McDowell log (Europe = France 4 + Italy 2 + Germany 1) | Economy 02 | verified |
| ECO-05 | SpaceX IPO | Priced at $135; 555,555,555 Class A shares; ~$75B gross, ~$74.4B net. Trading began Jun 12, 2026 on Nasdaq (SPCX): opened at $150, closed at $160.95 (+19.2%), ~$2.1T market value. ~$85.7B including the over-allotment. | Jun 2026 | SEC FWP, <https://www.sec.gov/Archives/edgar/data/0001181412/000162828026040874/spacexukfwp.htm>; 424B4 summary (Stock Titan); CNBC, <https://www.cnbc.com/2026/06/12/spacex-ipo-spcx-live-updates.html>; Nasdaq, <https://www.nasdaq.com/newsroom/spacex-makes-history-raising-85-billion-through-nasdaq-listing> | Economy 03; Milestones | verified |
| ECO-06 | SpaceX Q2 2026 results | Revenue $7.8B (+92%); net loss $541M; capex $18.37B, mostly AI | Q2 2026 | SpaceX Q2 2026 earnings release (SEC), as TECH-06 | Economy 03 | verified |
| ECO-07 | LandSpace STAR Market IPO | Accepted Dec 31, 2025 (¥7.5B raise); suspended Mar 31, 2026; returned to "inquiry" on Jun 29, 2026. Status since then unknown. | Jun 29, 2026 | Chinese press citing the SSE (The Paper; BBT News) | Economy 03 | failed: SSE status page not reached. See §I. |

## F. Space powers

| ID | Claim | Value | Date | Source | Placement | Status |
| --- | --- | --- | --- | --- | --- | --- |
| POW-US-01 | NASA appropriation for FY2026 | $24.4B (signed Jan 23, 2026) | Jan 2026 | SpaceNews, <https://spacenews.com/minibus-provides-24-4-billion-for-nasa-for-fiscal-year-2026/>; Planetary Society | Powers "US" KPI | verified (press) |
| POW-CN-01 | Chang'e-7 postponed | Aug 23, 2026: "does not meet launch conditions" and cannot launch in this year's window; no new date given | Aug 23, 2026 | CMSE, <https://www.cmse.gov.cn/xwzx/202608/t20260823_57750.html>; CNSA; Xinhua (EN), <https://english.news.cn/20260823/eabbb60384b7477594e7fd84789044ae/c.html> | Powers "China"; Milestones | verified |
| POW-CN-02 | Tianwen-2 | Launched May 29, 2025; reached asteroid 2016 HO3 (~20 km away) on Jul 6, 2026 after ~400 days | Jul 6, 2026 | CNSA, <https://www.cnsa.gov.cn/n6758823/n6758838/c10760422/content.html>; Xinhua | Powers "China" | verified |
| POW-CN-03 | Long March 10 and Mengzhou tests | Feb 11, 2026, Wenchang: a low-altitude demonstration (first stage in a controlled sea splashdown) and a max-Q abort test | Feb 11, 2026 | Xinhua, <https://www.news.cn/20260211/87c4efea2d6f4c2183490d12642fc408/c.html> | Powers "China"; Milestones (reserve) | verified |
| POW-RU-01 | Russian launches | 17 in 2025; 14 in 2026 to date | Oct 14, 2026 | McDowell log | Powers "Russia" KPI | verified |
| POW-RU-03 | Russian rockets flying | Soyuz-2 (1A/1B/1V), Angara (A5, 1.2) and Proton-M flew in 2025–26. Soyuz-5's Apr 30, 2026 test carried a mass model and is not listed as an orbital success, so the page omits it. | Oct 14, 2026 | McDowell log | Powers "Russia" | verified |
| POW-CN-04 | Chinese rockets flying | Long March (state); Zhuque-2E/3 (LandSpace) and Lijian-1 (CAS Space) flew in 2025–26. Tianlong-3's only flight (Apr 3, 2026) failed, so the page doesn't list it. | Oct 14, 2026 | McDowell log | Powers "China" | verified |
| POW-RU-02 | Soyuz crew flights to the ISS | Soyuz MS-28 (Nov 27, 2025); MS-29 (Jul 14, 2026) | Jul 2026 | McDowell log | Powers "Russia" | verified |
| POW-EU-01 | ESA's November 2025 ministerial (CM25) | ~€22B, the largest ever. ESA's release says €22.3B (marked with an asterisk; final figures Dec 2, 2025); SpaceNews says €22.067B. | Nov 2025 | ESA, <https://www.esa.int/About_Us/Corporate_news/ESA_Member_States_commit_to_largest_contributions_at_Ministerial>; SpaceNews, <https://spacenews.com/esa-raises-more-than-22-billion-euros-at-ministerial/> | Powers "Europe" KPI | verified (rounded; ESA's asterisk note not read) |
| POW-EU-02 | Isar Aerospace's Spectrum reaches orbit | Sep 5, 2026, Andøya (Norway): the first orbital launch from Western Europe, on its second flight | Sep 5, 2026 | ESA, <https://www.esa.int/Enabling_Support/Space_Transportation/Boost/Isar_Aerospace_achieves_first_launch_to_orbit_from_continental_Europe>; SpaceNews | Powers "Europe"; Milestones | verified. "Western Europe" is used because Russia launches from Plesetsk. |
| POW-EU-03 | Ariane 64 debut | Feb 12, 2026 (VA267, Amazon Leo satellites) | Feb 12, 2026 | McDowell log | Powers "Europe" | verified |
| POW-JP-01 | Japan's Space Strategy Fund | ~¥1 trillion over up to 10 years (¥300B + ¥300B + ¥200B so far) | 2026 | JAXA, <https://fund.jaxa.jp/content/uploads/Overview_of_The_SpaceStrategy_Fund.pdf> | Powers "Japan" KPI | verified |
| POW-JP-02 | H3 rocket | Flight 8 failed on Dec 22, 2025 (Michibiki-5); flights resumed Jun 12, 2026 | 2025–26 | McDowell log | Powers "Japan" | verified |
| POW-JP-03 | HTV-X1 cargo ship | Launched Oct 26, 2025 on H3 | Oct 26, 2025 | McDowell log | Powers "Japan" | verified |
| POW-IN-01 | Gaganyaan | The uncrewed G1 test has not flown (as of Oct 14, 2026); the first crewed flight is targeted for 2027 | Oct 2026 | McDowell log; Space.com (minister), <https://www.space.com/space-exploration/human-spaceflight/india-delays-1st-gaganyaan-astronaut-launch-to-2027> | Powers "India" | verified. The G1 date itself failed; see §I. |
| POW-IN-02 | India's station and Moon goals | Bharatiya Antariksh Station by 2035; an Indian on the Moon by 2040 | 2025–26 | PIB, <https://www.pib.gov.in/PressReleasePage.aspx?PRID=2127312>; ISRO chairman (Aug 2026) | Powers "India" KPI | verified |
| POW-AE-01 | Hope probe | Reached Mars on Feb 9, 2021: the first Arab country, and the fifth country, to reach Mars | Feb 9, 2021 | MBRSC, <https://www.mbrsc.ae/about/> | Powers "UAE" | verified |
| POW-AE-02 | Sultan Al Neyadi | Six months on the ISS (Expedition 69, 2023), the longest Arab space mission | 2023 | MBRSC | Powers "UAE" | verified |
| POW-AE-03 | Gateway airlock | MBRSC provides the Crew and Science Airlock; in return a UAE astronaut gets a seat on a future Artemis mission | Jan 7, 2024 | NASA, <https://www.nasa.gov/news-release/nasa-united-arab-emirates-announce-artemis-lunar-gateway-airlock/> | Powers "UAE" | verified |
| POW-AE-04 | MBR Explorer (Emirates Mission to the Asteroid Belt) | Launch in March 2028; first asteroid encounter in Feb 2030 | Oct 2026 | UAE Space Agency, <https://space.gov.ae/en/projects-and-initiatives/space-exploration/emirates-mission-to-the-asteroid-belt>; The National (Oct 4, 2026) | Powers "UAE" KPI | verified |
| POW-AE-05 | Rashid Rover 2 | Flies on Firefly's Blue Ghost Mission 2 to the lunar far side, no earlier than 2027 | 2026 | Firefly, <https://fireflyspace.com/missions/blue-ghost-mission-2/> | Powers "UAE" | verified |

## G. Milestones (approved at Gate 1, October 16, 2026)

Format per SPEC §8.3: newest first, up to 10 items. Qualifying events:
- first-of-a-kind flights
- crewed missions
- major financings, IPOs and M&A
- treaty and policy shifts
- major failures

| # | Date | Item | Rows |
| --- | --- | --- | --- |
| 1 | Oct 8–9, 2026 | SpaceX buys 800 MHz spectrum; U.S. carrier stocks fall 9–13% | TECH-10 |
| 2 | Sep 28, 2026 | Starship reaches orbit for the first time (Flight 14) | TECH-01 |
| 3 | Sep 5, 2026 | Isar's Spectrum: first orbital launch from Western Europe | POW-EU-02 |
| 4 | Aug 23, 2026 | Chang'e-7 misses its 2026 window | POW-CN-01 |
| 5 | Aug 19, 2026 | Zhuque-3 lands its booster, a first for China | RS-23 |
| 6 | Jun 12, 2026 | SpaceX lists on Nasdaq; largest IPO on record | ECO-05 |
| 7 | May 28, 2026 | New Glenn explodes in a static fire; LC-36 is damaged. Blue Origin traced the cause to a main oxygen valve on a BE-4 (Aug 2026). The first Blue Moon cargo lander slipped to early 2027. | Spaceflight Now, <https://spaceflightnow.com/2026/05/29/blue-origins-new-glenn-rocket-explodes-during-prelaunch-testing-at-cape-canaveral/>; Space.com, <https://www.space.com/space-exploration/launches-spacecraft/a-pretty-significant-setback-how-blue-origins-rocket-explosion-affects-nasas-moon-plans>, <https://www.space.com/space-exploration/launches-spacecraft/blue-origin-traces-origin-of-huge-new-glenn-rocket-explosion-to-oxygen-valve-ceo-says> (verified) |
| 8 | Apr 1–10, 2026 | **Headline:** Artemis II, the first crewed lunar mission in 53 years and the farthest humans have travelled | LIFE-13 |
| 9 | Feb 2, 2026 | SpaceX acquires xAI | TECH-15 (press-verified only) |
| 10 | Nov 5–25, 2025 | Shenzhou-20 debris strike; Shenzhou-22 launched uncrewed | LIFE-09 |

**Reserves**, also covered elsewhere on the page:
- Tianwen-2 at its asteroid (Jul 6, 2026)
- Shenzhou-23 year-long stay (May 24, 2026)
- Long March 10 tests (Feb 11, 2026)
- New Glenn's first landing (Nov 13, 2025)

## H. Startup examples (Where startups are winning)

| ID | Example | What it does | Source | Status |
| --- | --- | --- | --- | --- |
| OPP-01 | Planet | Satellite fleet (~200) imaging nearly all of Earth's landmass daily (company claim) | <https://www.planet.com/company/> | verified |
| OPP-02 | ICEYE | Synthetic-aperture-radar satellites that image through cloud and darkness | <https://www.iceye.com/> | verified |
| OPP-03 | LeoLabs | Commercial radar network tracking objects in LEO | <https://leolabs.space/> | verified |
| OPP-04 | Astroscale | Debris inspection and removal (ADRAS-J) | TECH-11 | verified |
| OPP-05 | KSAT | Ground-station network (~270 antennas; Svalbard at 78°N) | <https://www.ksat.no/> | verified |
| OPP-06 | Apex; K2 Space | Satellite buses at scale (Apex supplies Anduril; K2 builds high-power buses) | SpaceNews, <https://spacenews.com/anduril-apex/>, <https://spacenews.com/k2-space-raises-250-million-to-scale-high-power-satellite-line/> | verified |
| OPP-07 | Starcloud; Aetherflux | Orbital compute (TECH-13); space-based solar power beamed by infrared laser | SpaceNews, <https://spacenews.com/startup-takes-new-approach-to-space-based-solar-power/> | verified |

## I. Failed or superseded

| ID | Item | Why | Proposed replacement |
| --- | --- | --- | --- |
| FAIL-01 | SpaceX–xAI merger terms (TECH-15) | Confirmed by TechCrunch and CNBC/Bloomberg only; the SEC prospectus couldn't be opened (fetches refused). | Keep, citing the press; retry the SEC S-1 during the build. |
| FAIL-02 | LandSpace IPO status (ECO-07) | The latest report is from Jun 29, 2026; the SSE status page wasn't reached. | Drop from the page. |
| FAIL-03 | Gaganyaan G1 launch date | Official statements conflict: "end of 2026" versus 2027. | State only that G1 hasn't flown, with the crewed flight targeted for 2027 (POW-IN-01). |
| FAIL-04 | "Space Shuttle ~$54,500/kg" (often quoted) | Not CSIS's figure; CSIS gives $65,400/kg (FY2021 dollars). | Use RS-24. |
| FAIL-05 | "0.66 Sv for a Mars round trip" | Not found on the NASA or JPL pages checked. | Use LIFE-04 (~1 Sv for the full mission; 1.8 mSv/day in cruise). |
| FAIL-06 | "Flight 13 put the first operational Starlink V3 satellites in orbit" | Wrong. The 20 satellites flew suborbital (McDowell); Flight 14's 26 were the first in orbit. | Use TECH-03 and TECH-01. |
| FAIL-07 | DRACO nuclear-thermal programme status | Not confirmed by any source found. | Leave out; use TECH-16. |
| FAIL-08 | SpaceX direct-to-mobile device count (~7.4M) | Seen only in a summary of the S-1, which couldn't be opened. | Leave out. |
| SUP-01 | Outer Space Treaty: 116 parties (UNOOSA working paper) | Superseded by the official status table (as at Jan 1, 2026). | 118 (PIL-02). |
| SUP-02 | Artemis Accords: 67–74 (trackers) | Superseded by NASA's own page. | 76 (PIL-04). |
| SUP-03 | Mars signal delay of "4–24 min" or "3–22 min" | Sources differ. | Light time from NSSDC distances: ~3–22 min (LIFE-06). |
| SUP-04 | Chang'e-7 "Aug 2026"; Haven-1 "May 2026"; Rashid Rover 2 "2026"; NASA station awards "2026"; Amazon Leo "mid-2026" | All slipped. | POW-CN-01, LIFE-10, POW-AE-05, LIFE-10, TECH-07. |

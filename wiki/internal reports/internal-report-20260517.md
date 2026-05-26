# NABU Asian Hornet Dashboard — Internal Report

**Date:** 2026-05-17  
**Authors:** Omar (co-Lead), Evangelos (co-Lead)  
**Sources:** Kick-off presentation (March 27), Q&A with Theresa (March 2026), Slack `#nabu-team-dashboard`

> **Tag legend:** `CONFIRMED` = agreed in writing or by Theresa · `PROPOSED` = team draft, not yet signed off · `ASSUMPTION` = inferred, no explicit source · `BLOCKED` = cannot move without external input · `CAN START NOW` = no dependency, actionable immediately

---

## Project Snapshot

| | | |
|---|---|---|
| **Project** | Asian & European Hornet observation dashboard for nabu.de | `CONFIRMED` |
| **Stakeholder** | NABU — Theresa Seidel (Citizen Science Expert) | `CONFIRMED` |
| **Org** | CorrelAid / LC Berlin | `CONFIRMED` |
| **Coordination team** | Daniel Danielides, Andreas Neumann, John Shorack, Selina Baldauf | `CONFIRMED` |
| **Tracks** | Dashboard (Omar + Evangelos co-leads, N=10 signed up) · Research (separate channel) | `CONFIRMED` |
| **MVP target** | Aug 3, 2026 — campaign go-live | `PROPOSED` — sent to Theresa, awaiting reply |
| **Official end date** | End of September 2026 — Official Publication | `CONFIRMED` — kick-off timeline |
| **Key interim date** | Mid-June 2026 — Interim feedback session | `CONFIRMED` — kick-off timeline |
| **Current phase** | Pre-development — blocked on NABU technical contact | `BLOCKED` |

---

## Official Scope (from Kick-off + Q&A with Theresa)

| Feature | Status |
|---|---|
| Interactive map — sightings and nests as GPS data points | `CONFIRMED` — Theresa Q&A |
| Species toggle — Asian hornet / European hornet / nests | `CONFIRMED` — Theresa Q&A |
| Geographic scope — Germany primary + Europe (GBIF data) | `CONFIRMED` scope · `PROPOSED` exact EU boundary (TBD) |
| Federal state counts — clickable with observation totals | `CONFIRMED` — Theresa Q&A |
| Automated data pipeline — weekly NABU\|naturgucker → GBIF cadence | `CONFIRMED` — Theresa Q&A |
| Website integration — iFrame embed on nabu.de | `CONFIRMED` at kick-off · `PROPOSED` post-relaunch (needs reconfirmation) |
| Data quality — photos-only filter | `CONFIRMED` — Theresa's explicit recommendation |
| Additional filters (habitat, climate, density) | `CONFIRMED` as nice add-ons only — not required for MVP |

> Reference model Theresa cited: [Stunde der Gartenvögel results map](https://www.nabu.de/tiere-und-pflanzen/aktionen-und-projekte/stunde-der-gartenvoegel/ergebnisse/15767.html)

---

## Priority Checklist

### P0 — Critical Blockers

- [ ] **NABU technical contact not established** `BLOCKED` — Daniel escalated to Theresa, still waiting. Stack and integration decisions depend on this.
- [ ] **Tech stack not decided** `PROPOSED` / `BLOCKED` — Leaflet.js proposed (matches current NABU site), cannot confirm until NABU tech contact responds.
- [ ] **Aug 3 MVP scope not formally signed off** `PROPOSED` — team has a draft; no written agreement or mockup approved by Theresa.

### P1 — High Priority (needed to unblock Aug 3)

- [ ] **Collect active team capacity** `CAN START NOW` — need name / hrs/week / available days. N=10 signed up; ~3 visibly active.
- [ ] **Formal confirmation of Aug 3 / September split** `PROPOSED` / `BLOCKED` — proposed by Daniel, awaiting Theresa's reply.
- [ ] **Build project plan** `CAN START NOW` — task breakdown with owners + due dates for MVP. Does not exist yet.
- [ ] **Prepare for Mid-June interim feedback session** `CAN START NOW` — fixed milestone per kick-off; Dashboard track needs something to show.

### P2 — Medium Priority

- [ ] **GBIF data pull approach** `CONFIRMED` cadence (weekly) · `BLOCKED` on correct dataset key, pull restrictions, hosting info.
- [ ] **Close open GitHub issues** `BLOCKED` — open 2+ weeks, most waiting on NABU tech contact. [Link](https://github.com/CorrelAid/nabu-asian-hornet-project-dashboard/issues)
- [ ] **Europe scope definition** `ASSUMPTION` — kick-off says Germany + Europe but no detail. Current MVP proposal covers Germany only — gap unresolved.
- [ ] **Align with Research track** `CAN START NOW` — Research results out of Aug 3 scope per team proposal; formal alignment with Research leads needed.

### P3 — Later

- [ ] GitHub access + workflow for all active members `CAN START NOW`
- [ ] Full September deliverable scope (Research findings, additional filters) `PROPOSED`

---

## Pain Points

1. **Single blocker chain** `BLOCKED` — nearly everything depends on NABU's technical contact. One delay cascades across all tasks.
2. **Team capacity gap** `ASSUMPTION` — N=10 signed up at kick-off; ~3 actively responding in Slack.
3. **No project plan** `CAN START NOW` — Mid-June interim feedback is a fixed milestone; no plan to work backward from it.
4. **Communication lag** `BLOCKED` — GitHub issues and Slack questions unanswered for 2+ weeks.
5. **August context unclear** `PROPOSED` — Theresa noted "project restarts August." Does summer break overlap with Aug 3? Needs explicit answer.
6. **Europe scope gap** `ASSUMPTION` — kick-off says Germany + Europe; MVP proposal covers Germany only.

---

## Milestone Breakdown

### M1 — Requirements Closure *(target: end of May 2026)*

| Task | Owner | Status |
|---|---|---|
| Establish NABU technical contact | Daniel | `BLOCKED` — waiting on Theresa |
| Confirm Aug 3 MVP scope in writing | Omar + Evangelos | `PROPOSED` — pending NABU meeting |
| Confirm tech stack (Leaflet.js) | TBD | `PROPOSED` / `BLOCKED` — pending NABU tech |
| Collect full team capacity (name / hrs / days) | Omar + Daniel | `CAN START NOW` — replies still incomplete |
| Define "Europe" scope for dashboard data | Omar + Evangelos | `ASSUMPTION` — not yet discussed with NABU |
| Confirm hosting/deployment model | Daniel | `BLOCKED` — pending NABU |
| Close open GitHub issues | Evangelos | `BLOCKED` — pending NABU tech contact |

### M2 — Campaign MVP *(Aug 3, 2026)*

| Task | Status | Notes |
|---|---|---|
| GBIF data ingestion script | `CAN START NOW` (partial) | Weekly cadence `CONFIRMED`. Dataset key + hosting still `BLOCKED`. |
| Interactive Leaflet.js map | `PROPOSED` | Tech stack not yet confirmed by NABU. |
| Species toggle (Asian / European / nests) | `CONFIRMED` scope · `PROPOSED` implementation | Theresa Q&A confirmed this is core. |
| Federal state counts | `CONFIRMED` scope · `PROPOSED` implementation | Theresa Q&A confirmed this is core. |
| Automated update process | `PROPOSED` | Scheduled weekly pull; manual fallback if platform not confirmed. |
| iFrame-ready hosted build | `CONFIRMED` approach · `BLOCKED` on hosting details | NABU hosts the page; we deliver the component. |
| Basic data QA (photos-only filter) | `CAN START NOW` | `CONFIRMED` by Theresa; can be implemented independently. |
| Handoff package (docs) | `CAN START NOW` | Can start template/structure now. |

**Out of scope for Aug 3** `CONFIRMED`: Research analysis results, additional filters, full CI/CD if platform not confirmed.

### M3 — Official Publication *(end of September 2026)*

| Task | Status | Notes |
|---|---|---|
| Full automated pipeline | `PROPOSED` | CI/CD weekly GBIF pull on NABU platform. |
| Embedded in nabu.de | `PROPOSED` | NABU handles CMS; we deliver iframe component. |
| Additional filters (nice add-ons) | `CONFIRMED` as deferred | Habitat, climate, density — Theresa's "nice add-ons." |
| Research findings integrated | `PROPOSED` | Coordinate with Research track post-MVP. |
| Accessibility + design compliance | `ASSUMPTION` | WCAG level and NABU guidelines not yet shared. |
| Documentation + knowledge transfer | `PROPOSED` | Full handover to NABU Citizen Science team (Theresa). |

### M4 — Maintenance *(post-September)*

| Task | Owner | Status |
|---|---|---|
| Weekly data update cadence running | NABU infra | `ASSUMPTION` — NABU takes over; not yet formally agreed |
| Monitoring + error alerting | NABU team | `ASSUMPTION` — not yet discussed |
| CorrelAid support window | TBD | `PROPOSED` — to be agreed at handover |

---

## Team Lead Responsibilities (from kick-off) `CONFIRMED`

- Check-ins every ~3 weeks; coordination team may step in if activity drops
- Define each project phase and its timeline
- Keep team members moving at consistent pace; guide Trainees
- Reach out to NABU when questions arise
- Participate as Coder/Researcher alongside coordination

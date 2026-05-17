# NABU Asian Hornet Dashboard — Internal Report

**Date:** 2026-05-17  
**Authors:** Omar (co-Lead), Evangelos (co-Lead)  

---

## Project Snapshot

| | |
|---|---|
| **Project** | Asian & European Hornet observation dashboard for nabu.de |
| **Stakeholder** | NABU — Theresa Seidel (Citizen Science Expert) |
| **Org** | CorrelAid / LC Berlin |
| **Coordination team** | Daniel Danielides, Andreas Neumann, John Shorack, Selina Baldauf |
| **Tracks** | Dashboard (Omar + Evangelos co-leads, N=10 signed up) · Research (separate channel) |
| **MVP target** | Aug 3, 2026 — campaign go-live (proposed; not yet confirmed by Theresa) |
| **Official end date** | End of September 2026 — Official Publication |
| **Key interim date** | Mid-June 2026 — Interim feedback session (teams + project management) |
| **Current phase** | Pre-development — blocked on NABU technical contact |

---

## Official Scope (from Kick-off + Q&A with Theresa)

Dashboard must deliver:

- **Interactive map** — sightings and nests as data points (GPS-level from GBIF)
- **Species toggle** — Asian hornet / European hornet / nests (switchable)
- **Geographic scope** — Germany primary + Europe (GBIF data)
- **Federal state counts** — clickable states with observation counts
- **Automated data pipeline** — continuous integration of current and future NABU wildlife reporting data; weekly update cadence (NABU|naturgucker → GBIF confirmed weekly)
- **Website integration** — iFrame embed on nabu.de (confirmed at kick-off)
- **Data quality filter** — photos-only filter recommended by Theresa for sighting reliability
- **Nice add-ons (not required):** additional filters (habitat, climate, population density)

> Reference model Theresa cited: [NABU "Garten der Arten" / Stunde der Gartenvögel results map](https://www.nabu.de/tiere-und-pflanzen/aktionen-und-projekte/stunde-der-gartenvoegel/ergebnisse/15767.html)

---

## Priority Checklist

### P0 — Critical Blockers

- [ ] **NABU technical contact not established** — Daniel escalated to Theresa, still waiting. Stack and integration decisions are blocked.
- [ ] **Tech stack not decided** — Leaflet.js (matches current NABU site) proposed but not confirmed. Cannot finalize until NABU tech contact responds.
- [ ] **Aug 3 MVP scope not formally signed off** — team has a draft proposal; no written agreement + mockup approved by Theresa.

### P1 — High Priority (needed to unblock Aug 3)

- [ ] **Active team capacity still unclear** — need: name / hrs/week / available days. N=10 signed up at kick-off; ~3 visibly active in Slack.
- [ ] **Formal confirmation of Aug 3 / September split** — proposed by Daniel to Theresa, awaiting reply.
- [ ] **Build project plan** — task breakdown with owners + due dates for MVP. Does not exist yet.
- [ ] **Prepare for Mid-June interim feedback session** — official milestone per kick-off timeline. Dashboard track needs something to show.

### P2 — Medium Priority

- [ ] **GBIF data pull** — weekly cadence confirmed by Theresa. Still need: correct dataset key, any NABU-side pull restrictions, platform hosting info.
- [ ] **Close open GitHub issues** — open 2+ weeks. Most blocked on NABU tech contact. [Link](https://github.com/CorrelAid/nabu-asian-hornet-project-dashboard/issues)
- [ ] **Europe scope definition** — kick-off says Germany + Europe. Need to confirm what "Europe" means in practice for the MVP (all GBIF records? filtered countries?).
- [ ] **Align with Research track** — Research results out of Aug 3 MVP scope per current team proposal; needs formal alignment.

### P3 — Later

- [ ] GitHub access + workflow for all active members
- [ ] Full September deliverable scope (Research findings integration, additional filters)

---

## Pain Points

1. **Single blocker chain** — nearly everything depends on NABU's technical contact. One delay cascades across all tasks.
2. **Team capacity gap** — N=10 signed up at kick-off; ~3 actively responding in Slack.
3. **No project plan** — Mid-June interim feedback is a fixed milestone; no plan exists to work backward from it.
4. **Communication lag** — GitHub issues and Slack questions unanswered for 2+ weeks.
5. **August context** — Theresa noted "project restarts August." The Aug 3 date and a summer break may overlap; needs explicit clarification.
6. **Europe scope not scoped** — kick-off says Germany + Europe; current MVP proposal covers Germany only. Gap not yet resolved.

---

## Milestone Breakdown

### M1 — Requirements Closure *(target: end of May 2026)*

| Task | Owner | Status |
|---|---|---|
| Establish NABU technical contact | Daniel | Blocked — waiting on Theresa |
| Confirm Aug 3 MVP scope in writing + mockup sign-off | | Pending NABU meeting |
| Confirm tech stack (Leaflet.js) |  | Pending NABU tech |
| Collect full team capacity (name / hrs / days) |  | In progress — replies incomplete |
| Confirm hosting/deployment model | Daniel | Pending NABU |
| Close open GitHub issues | Evangelos | Blocked on NABU |

### M2 — Campaign MVP *(Aug 3, 2026)*

**Scope — Theresa's core requirements (to be formally confirmed):**

| Task | Notes |
|---|---|
| GBIF data ingestion script | Weekly pull (confirmed cadence). Germany + Europe. Fields: species, lat/lon, eventDate, occurrenceStatus, stateProvince, datasetKey. Photos-only filter. |
| Interactive Leaflet.js map | Sightings + nests as GPS data points |
| Species toggle | Asian hornet / European hornet / nests |
| Federal state counts | Clickable states with observation totals |
| Automated update process | Scheduled weekly pull; manual fallback if NABU platform not confirmed in time |
| iFrame-ready hosted build | NABU hosts the page; we deliver the embeddable component |
| Basic data QA | Photos-only filter applied; coordinate with Research track |
| Handoff package | Deployment + maintenance docs for NABU |

**Out of scope for Aug 3:** Research analysis results, additional filters (habitat/climate/density), full CI/CD if platform not confirmed.

### M3 — Official Publication *(end of September 2026)*

| Task | Notes |
|---|---|
| Full automated pipeline | CI/CD weekly GBIF pull on NABU platform |
| Embedded in nabu.de | NABU handles CMS integration; we deliver iframe component |
| Additional filters (nice add-ons) | Habitat, climate, population density — per Theresa's "nice add-ons" list |
| Research findings integrated | Coordinate with Research track post-MVP |
| Accessibility + design compliance | Per NABU web guidelines (WCAG level TBD) |
| Documentation + knowledge transfer | Full handover to NABU Citizen Science team (Theresa) |

### M4 — Maintenance *(post-September)*

| Task | Owner |
|---|---|
| Weekly data update cadence running | NABU infra |
| Monitoring + error alerting | NABU team |
| CorrelAid support window | To be agreed at handover |

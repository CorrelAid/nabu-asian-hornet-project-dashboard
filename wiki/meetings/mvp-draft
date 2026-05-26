# NABU Dashboard — MVP Scope Draft

**Version:** draft
**Date:** 2026-05-26  
**Authors:** Omar + Evangelos (Dashboard co-Leads)  
**Target go-live:** Aug 3, 2026 (campaign launch) `PROPOSED`  
**Sources:** Kick-off presentation · Q&A with Theresa (March 2026) · Slack `#nabu-team-dashboard`

> **Tag legend:** `CONFIRMED` = agreed by Theresa or in kick-off · `PROPOSED` = team draft · `ASSUMPTION` = inferred · `BLOCKED` = needs external input before deciding

---

## Goal

Deliver a publicly accessible, embedded interactive map on nabu.de in time for the August 2026 Asian hornet campaign — showing observation data for both hornet species and nests across Germany, updated weekly from GBIF.

---

## In Scope — MVP (Aug 3, 2026)

### Map & Visualisation

| Feature | Detail | Status |
|---|---|---|
| Interactive map | GPS-level data points for sightings and nests | `CONFIRMED` — Theresa Q&A |
| Species toggle | Switch between: Asian hornet / European hornet / nests | `CONFIRMED` — Theresa Q&A |
| Federal state view | Clickable states showing observation counts | `CONFIRMED` — Theresa Q&A |
| Geographic scope | Germany (primary) + Europe via GBIF | `CONFIRMED` scope · `ASSUMPTION` EU boundary detail |
| Map library | Leaflet.js (matches current NABU website) | `PROPOSED` — pending NABU tech confirmation |
| Reference UX | Mirror layout, color scheme and legend of the [NABU bird map](https://www.nabu.de/tiere-und-pflanzen/aktionen-und-projekte/stunde-der-gartenvoegel/ergebnisse/15767.html) | `CONFIRMED` — Theresa cited this explicitly |

### Data

| Item | Detail | Status |
|---|---|---|
| Data source | GBIF — NABU/naturgucker dataset | `CONFIRMED` |
| Species covered | *Vespa velutina* (Asian hornet) + *Vespa crabro* (European hornet) | `CONFIRMED` |
| Data fields | species, lat/lon, eventDate, occurrenceStatus, stateProvince, datasetKey | `PROPOSED` — Chris's field list, not yet validated with NABU |
| Historical range | 2006–2026+ (rolling ~20 years) | `PROPOSED` — Chris's suggestion |
| Update cadence | Weekly (NABU\|naturgucker → GBIF pipeline already runs weekly) | `CONFIRMED` — Theresa Q&A |
| Data quality filter | Photos-only observations (reduces misidentification risk) | `CONFIRMED` — Theresa's explicit recommendation |

### Delivery & Integration

| Item | Detail | Status |
|---|---|---|
| Integration method | iFrame embed on nabu.de | `CONFIRMED` at kick-off · `PROPOSED` post-relaunch (reconfirmation needed) |
| Who builds the hosting page | NABU (they own the CMS/page) | `ASSUMPTION` |
| Who builds the map component | CorrelAid Dashboard team | `CONFIRMED` |
| Update process | Automated weekly GBIF pull (preferred) — manual fallback if NABU platform not confirmed in time | `PROPOSED` |
| Hosting platform | NABU's platform | `ASSUMPTION` — CorrelAid does not provide hosting |

---

## Out of Scope — MVP (target September instead)

| Feature | Reason deferred |
|---|---|
| Additional filters (habitat, climate, population density) | Theresa confirmed these are "nice add-ons," not required |
| Research team analysis results | Not ready by Aug 3; separate track |
| Multi-year overlapping trend views | Requires scientific decisions on double-counting (not yet made) |
| Full CI/CD pipeline | Depends on NABU platform details — not yet available |
| Accessibility / WCAG compliance (full) | NABU design guidelines not yet shared |
| CorrelAid branding / publication layer | September full delivery scope |

---

## Open Decisions — Blocking Scope Finalization

These must be resolved before the scope can be formally locked:

| Decision | Blocked on | Impact |
|---|---|---|
| Tech stack (Leaflet.js confirmed?) | `BLOCKED` — NABU tech contact | Cannot start map development |
| iFrame still valid post-relaunch? | `BLOCKED` — NABU tech contact | Changes entire delivery approach if not |
| Hosting and deployment model | `BLOCKED` — NABU tech contact | Affects data pipeline design |
| Exact GBIF dataset key | `BLOCKED` — NABU | Cannot build data ingestion |
| GBIF pull restrictions / timing | `BLOCKED` — NABU | Affects update automation design |
| GPS coordinate precision / GDPR policy | `BLOCKED` — NABU | Affects how data points are rendered |
| "Europe" boundary definition | `ASSUMPTION` | Affects data scope and performance |
| Data attribution / credit line | `ASSUMPTION` | Must appear on dashboard UI before launch |

---

## Assumptions Built Into This Draft

These are treated as true for planning purposes but not yet confirmed:

1. NABU provides the hosting platform — CorrelAid does not run a separate server
2. "Europe" in the kick-off spec means all GBIF European records (not a filtered country list)
3. The Aug 3 campaign window does not overlap with a NABU summer break (Theresa said "project restarts August" — exact dates unknown)
4. Leaflet.js is the correct map library (matches current NABU site but new site stack unknown)
5. NABU takes over maintenance after September handover

---

## What a v0 Mockup Should Show

No mockup exists yet. Before the stakeholder meeting, the Dashboard team should prepare a simple mockup covering:

- [ ] Map view centred on Germany with sample data points (sightings + nests)
- [ ] Species toggle visible (Asian / European / Nests)
- [ ] Federal state panel or sidebar with counts
- [ ] Minimal filter (year or species selector)
- [ ] "Data: NABU/naturgucker via GBIF" attribution placeholder
- [ ] Layout styled after the [NABU bird map reference](https://www.nabu.de/tiere-und-pflanzen/aktionen-und-projekte/stunde-der-gartenvoegel/ergebnisse/15767.html)

Vitalii's existing Streamlit prototype ([hornet-dashboard.streamlit.app](https://hornet-dashboard.streamlit.app)) can be used as a starting point for the mockup conversation.

---

## Sign-Off Required From

| Person | Sign-off on | Status |
|---|---|---|
| Theresa Seidel (NABU) | Overall MVP scope, data fields, geographic scope, Aug 3 date | `PROPOSED` — not yet confirmed |
| NABU web/IT team | Tech stack, iFrame, hosting model, GPS precision policy | `BLOCKED` — contact not yet established |
| Dashboard team | Task assignments, capacity commitment | `PROPOSED` — capacity replies incomplete |
| Research track leads | Confirmation that Research results are out of Aug 3 scope | `PROPOSED` — not yet formally aligned |

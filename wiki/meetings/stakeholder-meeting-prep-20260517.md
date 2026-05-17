# NABU Dashboard — Stakeholder Meeting Prep

**Date:** 2026-05-17  
**Meeting:** NABU Technical Sync (slot TBC — Daniel waiting on Theresa's reply)  
**Audience:** Theresa Seidel, ..,

---

## Pre-Meeting Ask — Send to NABU Before the Call

1. Share direct contact + availability of NABU tech contact for ongoing collaboration
2. Prepare responses to the integration and hosting questions below

---

## Open Questions — Input Needed from NABU

### Integration (post website relaunch)

- iFrame integration was confirmed at kick-off as the delivery mechanism. Is it still the valid approach after the summer 2026 website relaunch?
- What is the tech stack of the new website? (CMS, framework, accessibility standard)
- Can you share a sample HTML template showing where our component will live?
- What are the design and branding guidelines our component must comply with?

### Hosting & Deployment

- Does NABU provide the hosting platform for our deliverable? (Our assumption: yes — CorrelAid does not provide a separate platform.)
- Will we have self-service deploy access, or do we hand off files for NABU to deploy?
- Can we use NABU's existing Cron scheduler (or equivalent) for weekly automated GBIF pulls?

### Data

- Weekly upload cadence from NABU|naturgucker → GBIF is confirmed. Are there any restrictions on automated/scheduled pulls from GBIF our side?
- Which exact GBIF dataset key / source is authoritative for this project?
- Does the "Europe" scope in the kick-off spec mean all GBIF European records, or a defined subset of countries?

### Timeline

- **Formal confirmation needed:** Is the Aug 3 campaign MVP / end-of-September official publication split accepted?
- Theresa mentioned "project restarts August" in the Q&A — does a summer break overlap with the Aug 3 go-live date? What is the exact NABU campaign window?
- Aug 3 is conditional on: NABU technical answers within ~1 week + written MVP scope sign-off. Is this understood?

---

## What Needs Review & Validation in the Meeting

| Topic | Current Status | What We Need |
|---|---|---|
| MVP core scope | Aligned with Theresa's Q&A (map + toggle + state counts) | Written sign-off on scope description — **no mockup exists yet, create one pre-meeting** using NABU bird map as UX reference |
| "Europe" scope definition | Kick-off says Germany + Europe; no detail | Clarify: all GBIF EU records or filtered countries? |
| Tech stack (Leaflet.js) | Proposed — matches current NABU site | NABU confirmation |
| Hosting & deployment model | Unknown | NABU decision: who hosts, self-service or handoff |
| Aug 3 / September split | Proposed internally, sent to Theresa | Formal confirmation |
| Data pipeline | Weekly cadence confirmed; platform TBD | Hosting + scheduling details |
| iFrame post-relaunch | Confirmed at kick-off but relaunch may change this | Reconfirmation |
| Long-term maintenance | Not yet discussed | Who at NABU owns this after handover? |

---

## Confirmed MVP Scope — for Theresa's Sign-Off

Based on the kick-off spec and Q&A, the team's proposed Aug 3 MVP is:

**Core (required):**
- Interactive map — GPS-level sightings and nests as data points
- Species toggle — Asian hornet / European hornet / nests
- Federal state counts — clickable with observation totals
- Geographic scope — Germany + Europe (GBIF data; exact EU scope TBD)
- Data quality — photos-only filter applied (Theresa's recommendation)
- Weekly automated GBIF pull (or manual fallback if platform not confirmed)
- iFrame-ready component for nabu.de embed

**Nice add-ons (out of scope for Aug 3, target September):**
- Additional filters: habitat type, climate zone, population density
- Research team analysis results
- Multi-year trend overlays

**Reference model:** [Stunde der Gartenvögel results map](https://www.nabu.de/tiere-und-pflanzen/aktionen-und-projekte/stunde-der-gartenvoegel/ergebnisse/15767.html)

---

## Conditions — to Communicate Clearly to Theresa

> Both the Aug 3 and September timelines are **conditional** on:
>
> 1. NABU technical answers available within ~1 week (questions have been open 2+ weeks already)
> 2. Written MVP scope confirmed with mockup within the same window
> 3. Hosting/platform and deployment model confirmed so pipeline and infrastructure can be designed
>
> If these are not resolved on time, Aug 3 is at risk. The team will not commit to a date it cannot meet due to external delays.

---

## Mid-June Interim Feedback Session

Per the official kick-off timeline, a mid-June interim feedback session between teams and project management is scheduled. Dashboard track needs a concrete progress update to present. This is an internal milestone — no NABU sign-off required, but worth flagging to Theresa as a checkpoint.

---

## Additional Technical Questions — for NABU's Web/IT Team

> Ask NABU to review and pre-answer these before the meeting where possible.

### High Priority — answers needed before we start building

- [ ] **TYPO3 embed rules** — Can we add an iframe anywhere on a page, or does it need to go through a specific content block type? Are there security settings that would block external content?
- [ ] **Campaign traffic** — How many users does NABU expect at peak during the August campaign? Is there a CDN in place? We need to size our component for that load.
- [ ] **GPS precision & GDPR** — We are putting citizen science GPS coordinates on a public map. Does NABU have a policy on how precise those coordinates can be shown publicly?

### Medium Priority — affects scope and timeline

- [ ] **Publishing process on nabu.de** — Does new content go through editorial or legal review before it goes live? If yes, how long does that take? We need to factor this into the Aug 3 timeline.
- [ ] **Weekly GBIF upload — timing details** — Does something notify us when new data has landed, or do we poll? Are there specific hours we should avoid pulling data while the upload is running?
- [ ] **Data attribution** — Is there a credit line or "data source" label that must appear on the dashboard? (e.g. "Data: NABU/naturgucker via GBIF") NABU is the data publisher — they likely already have a standard format for this.

### Lower Priority — good to clarify early

- [ ] **User devices** — Does NABU have analytics on who uses their site (mobile vs desktop, browsers)? This helps us design the map interaction correctly.
- [ ] **Maintenance docs format** — Does NABU IT have a preferred format for handover documentation? Who specifically will be responsible for the dashboard after September?
- [ ] **Open question to NABU's tech team** — Is there anything about your platform, workflows, or constraints that you'd expect a collaborator to know? You know your stack better than we do — please flag it.

# NABU Dashboard — Stakeholder Meeting Prep

**Date:** 2026-05-17  
**Meeting:** NABU Technical Sync (slot TBC — Daniel waiting on Theresa's reply)  
**Audience:** Theresa Seidel + NABU web/IT team  

> **Tag legend:** `CONFIRMED` = agreed in writing or by Theresa · `PROPOSED` = team draft, not yet signed off · `ASSUMPTION` = inferred, no explicit source · `BLOCKED` = cannot move without external input · `CAN START NOW` = no dependency, actionable immediately

---

## Pre-Meeting Ask — Send to NABU Before the Call

1. Share direct contact + availability of NABU tech contact for ongoing collaboration `BLOCKED`
2. Review and pre-answer open GitHub issues before the meeting: [github.com/CorrelAid/nabu-asian-hornet-project-dashboard/issues](https://github.com/CorrelAid/nabu-asian-hornet-project-dashboard/issues) `BLOCKED`
3. Prepare responses to the integration and hosting questions below `BLOCKED`

---

## Open Questions — Input Needed from NABU

### Integration (post website relaunch)

- `CONFIRMED` at kick-off · `PROPOSED` post-relaunch — iFrame confirmed as delivery mechanism. Is it still valid after the summer 2026 website relaunch?
- `BLOCKED` — What is the tech stack of the new website? (CMS, framework, accessibility standard)
- `BLOCKED` — Can you share a sample HTML template showing where our component will live?
- `BLOCKED` — What are the design and branding guidelines our component must comply with?

### Hosting & Deployment

- `ASSUMPTION` — CorrelAid does not provide a hosting platform. NABU hosts our deliverable. Is this correct?
- `BLOCKED` — Will we have self-service deploy access, or do we hand off files for NABU to deploy?
- `BLOCKED` — Can we use NABU's existing Cron scheduler (or equivalent) for weekly automated GBIF pulls?

### Data

- `CONFIRMED` — Weekly upload cadence from NABUnaturgucker → GBIF (Theresa Q&A). `BLOCKED` — Are there any restrictions on automated pulls from our side?
- `BLOCKED` — Which exact GBIF dataset key / source is authoritative for this project?
- `ASSUMPTION` — "Europe" in the kick-off spec likely means all GBIF European records. Does it mean a defined subset of countries instead?

### Timeline

- `PROPOSED` — Aug 3 campaign MVP / end-of-September publication split sent to Theresa. **Formal confirmation still needed.**
- `PROPOSED` — Theresa noted "project restarts August." Does a summer break overlap with Aug 3? What is the exact campaign window?
- `PROPOSED` — Aug 3 is conditional on NABU technical answers within ~1 week + written MVP scope sign-off. Is this understood?

---

## What Needs Review & Validation in the Meeting


| Topic                      | Status                                                   | What We Need                                                                                            |
| -------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| MVP core scope             | `PROPOSED` — aligned with Theresa's Q&A                  | Written sign-off — **no mockup exists yet, create one pre-meeting** using NABU bird map as UX reference |
| "Europe" scope definition  | `ASSUMPTION` — kick-off says Germany + Europe, no detail | Clarify: all GBIF EU records or filtered countries?                                                     |
| Tech stack (Leaflet.js)    | `PROPOSED` — matches current NABU site                   | `BLOCKED` — NABU confirmation needed                                                                    |
| Hosting & deployment model | `ASSUMPTION` — NABU hosts                                | `BLOCKED` — NABU decision: who hosts, self-service or handoff                                           |
| Aug 3 / September split    | `PROPOSED` — sent to Theresa                             | Formal confirmation                                                                                     |
| Data pipeline              | `CONFIRMED` cadence · `BLOCKED` platform                 | Hosting + scheduling details                                                                            |
| iFrame post-relaunch       | `CONFIRMED` at kick-off · `PROPOSED` post-relaunch       | Reconfirmation needed                                                                                   |
| Long-term maintenance      | `ASSUMPTION` — NABU takes over                           | Who at NABU owns this after handover?                                                                   |


---

## Confirmed MVP Scope — for Theresa's Sign-Off

Based on the kick-off spec and Q&A:

**Core (required)** `CONFIRMED` by Theresa Q&A + kick-off:

- Interactive map — GPS-level sightings and nests as data points
- Species toggle — Asian hornet / European hornet / nests
- Federal state counts — clickable with observation totals
- Geographic scope — Germany + Europe (exact EU boundary `ASSUMPTION`)
- Data quality — photos-only filter applied
- Weekly automated GBIF pull (manual fallback if platform `BLOCKED`)
- iFrame-ready component for nabu.de embed

**Nice add-ons — out of scope for Aug 3, target September** `CONFIRMED` as deferred:

- Additional filters: habitat type, climate zone, population density
- Research team analysis results
- Multi-year trend overlays

**Reference model:** [Stunde der Gartenvögel results map](https://www.nabu.de/tiere-und-pflanzen/aktionen-und-pflanzen/aktionen-und-projekte/stunde-der-gartenvoegel/ergebnisse/15767.html)

---

## Conditions — to Communicate Clearly to Theresa

> Both the Aug 3 and September timelines are **conditional** on: `PROPOSED`
>
> 1. NABU technical answers available within ~1 week (questions have been open 2+ weeks already) `BLOCKED`
> 2. Written MVP scope confirmed within the same window `PROPOSED`
> 3. Hosting/platform and deployment model confirmed so pipeline and infrastructure can be designed `BLOCKED`
>
> If these are not resolved on time, Aug 3 is at risk. The team will not commit to a date it cannot meet due to external delays.

---

## Mid-June Interim Feedback Session `CONFIRMED`

Per the official kick-off timeline, a mid-June interim feedback session between teams and project management is scheduled. Dashboard track needs a concrete progress update to present. Internal milestone — no NABU sign-off required, but worth flagging to Theresa as a checkpoint. `CAN START NOW` — preparation can begin independently.

---

## Additional Technical Questions — for NABU's Web/IT Team

> Ask NABU to review and pre-answer these before the meeting where possible.

### High Priority — answers needed before we start building

- **TYPO3 embed rules** `BLOCKED` — Can we add an iframe anywhere on a page, or does it need to go through a specific content block type? Are there security settings that would block external content?
- **Campaign traffic** `BLOCKED` — How many users does NABU expect at peak during the August campaign? Is there a CDN in place? We need to size our component for that load.
- **GPS precision & GDPR** `BLOCKED` — We are putting citizen science GPS coordinates on a public map. Does NABU have a policy on how precise those coordinates can be shown publicly?

### Medium Priority — affects scope and timeline

- **Publishing process on nabu.de** `ASSUMPTION` / `BLOCKED` — Does new content go through editorial or legal review before it goes live? If yes, how long does that take? We need to factor this into the Aug 3 timeline.
- **Weekly GBIF upload — timing details** `CONFIRMED` cadence · `BLOCKED` specifics — Does something notify us when new data has landed, or do we poll? Are there specific hours we should avoid pulling data while the upload is running?
- **Data attribution** `ASSUMPTION` — Is there a credit line or "data source" label that must appear on the dashboard? (e.g. "Data: NABU/naturgucker via GBIF") NABU likely already has a standard format.

### Lower Priority — good to clarify early

- **User devices** `ASSUMPTION` — Does NABU have analytics on who uses their site (mobile vs desktop, browsers)? This helps us design the map interaction correctly.
- **Maintenance docs format** `ASSUMPTION` — Does NABU IT have a preferred format for handover documentation? Who specifically will be responsible for the dashboard after September?
- **Open question to NABU's tech team** — Is there anything about your platform, workflows, or constraints that you'd expect a collaborator to know? You know your stack better than we do — please flag it.


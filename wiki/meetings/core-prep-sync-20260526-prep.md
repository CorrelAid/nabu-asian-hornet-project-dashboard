# Dashboard Core Prep Sync — 2026-05-26

Time: 21:15 Berlin time  
Purpose: Prepare a draft plan for the broader internal Dashboard meeting on Thursday 28 May.

This is a prep meeting, not the full team assignment meeting.

---

## 1. Target outputs for this meeting

By the end of the meeting, we want:

- draft August MVP scope
- blocked vs. can-start-now list
- first work packages
- consolidated NABU technical questions
- temporary AI/workflow guardrails
- clear input for Thursday’s broader meeting

---

## 2. Proposed August MVP — working draft

| Item | Working proposal | Decision / notes |
|---|---|---|
| Main product | Interactive map / map-centered dashboard | |
| Geographic scope | Germany-first for August | |
| Data source | GBIF data, exact NABU dataset/source still to confirm | |
| Species | Asian hornet + European hornet; toggle or simple distinction | |
| Time | One selected year or simple year toggle | |
| Map data | Observation points with lat/lon, subject to privacy/GDPR rules | |
| Counts | Basic counts, ideally federal-state level if feasible | |
| Update process | Manual or semi-automated fallback acceptable for August | |
| Integration | iFrame-ready direction, final details blocked by NABU tech input | |

## Reference on sample deliverable:
https://www.nabu.de/tiere-und-pflanzen/aktionen-und-projekte/stunde-der-gartenvoegel/ergebnisse/15767.html  

### Proposed out of scope for August

- habitat/climate/population-density filters
- Research-derived analysis layers
- complex species-overlap logic
- full Europe-wide scope unless NABU confirms it is mandatory
- fully automated production pipeline if NABU hosting/scheduler is unclear
- final handover/monitoring setup

Decision / notes:

-

---

## 3. Blocked vs. can start now

| Area | Current status | Next action / owner |
|---|---|---|
| NABU technical contact | Blocked by NABU | |
| Website stack / iFrame / hosting | Blocked by NABU | |
| GBIF authoritative dataset + update timing | Blocked by NABU | |
| GPS precision / privacy rule | Blocked by NABU | |
| NABU stakeholder/user sparring partners | Blocked by NABU | |
| Walkthrough existing prototype | Can start now | Vitalii? |
| MVP scope draft | Can start now | Evangelos + Omar? |
| MVP mockup draft | Can start now after scope draft | Evangelos |
| MVP scope + mockup confirmation | Depends on NABU | Evangelos + Omar? |
| MVP tech stack | Depends on NABU | Evangelos? |
| MVP data fields | Depends on MVP scope | Omar? |
| MVP data validation checks | Depends on scientific input | Omar? |
| MVP data pipeline | Depends on tech stack decision | Chris? |
| GitHub workflow / DoD | Can start now | Omar + Evangelos? |
| AI usage guardrails | Can start now | Evangelos + Omar? |

---

## 4. Open question tracker

| Question | Current answer | Status / next action |
|---|---|---|
| Do we have a project question/task log? | Yes, GitHub Issues/wiki are the working structure. | Answered |
| What is the August MVP? | Reduced map-first MVP proposed; needs agreement. | Decide in Core Prep |
| Is August 3 realistic? | Only for a reduced MVP and only if blockers are resolved quickly. | Proposed answer — validate |
| What is out of scope for August? | Advanced filters, research layers, complex overlap logic, full automation. | Decide in Core Prep |
| What platform/tools should we use? | Streamlit exists as prototype; Leaflet likely better for NABU handover if confirmed. | Proposed answer — NABU validation needed |
| Can we pull data directly from GBIF? | Likely yes via script/API/download workflow. | Proposed answer — validate |
| Who hosts/runs updates after handover? | Likely NABU, not CorrelAid. | Blocked by NABU |
| What are MVP data fields? | Candidate: species, lat/lon, date/year, state, dataset key, ID, license, coordinate uncertainty. | Decide in Core Prep |
| Who are active contributors? | Known capacity incomplete. | Assign/confirm Thursday |
| What is Chris’s role? | Hands-on data engineering/statistical/data work; not technical lead. | Answered |
| What is the AI policy? | Not defined yet; temporary guardrails needed. | Decide in Core Prep |
| What is the development/testing workflow? | Not defined yet; propose lightweight GitHub Issues + PR + review workflow. | Decide in Core Prep |
| What do we need from Research? | Minimal interface: fields/files/caveats/update frequency; Research analysis likely later. | Decide MVP needs |
| What should NABU answer before/at tech meeting? | Stack, iframe, hosting, GBIF source, update timing, privacy, handover owner. | Consolidate question list |

---

## 5. First work packages — draft

| Work package | Output | Suggested owner | Due / notes |
|---|---|---|---|
| MVP scope draft | 1-page August MVP + out-of-scope list | Evangelos + Omar | Before Thursday |
| MVP mockup draft | Sketch/wireframe | TBD | TBD |
| Unblock NABU blocks | Establish working conditions with NABU | Evangelos + Omar | TBD |
| Prototype review | What exists / missing / reusable | Vitalii | Before or during Tuesday |
| MVP data fields | Minimal GBIF field list + risks | TBD | Draft after Tuesday |
| Data validation checks | First checklist for future updates | Omar | Draft after Tuesday |
| NABU tech questions | One consolidated question list | Evangelos + Omar | Before NABU tech meeting |
| GitHub workflow | Lightweight issue/PR/DoD proposal | Omar + Evangelos | Before Thursday |
| AI guardrails | Temporary AI policy proposal | Evangelos + Omar | Before Thursday |
| Availability summary | Active yes/no, hrs/week, focus, constraints | Evangelos / coordination | For Thursday |
| MVP mockup/reference | Simple map-centered reference | TBD | Assign Thursday |

---

## 6. Temporary AI guardrails — draft

Working proposal:

- AI may be used for documentation, brainstorming, code scaffolding, refactoring, debugging, and test/checklist drafts.
- AI-generated code or analysis must be reviewed by a human before use.
- Do not paste confidential/private/sensitive partner data into AI tools unless explicitly allowed.
- Public-facing analysis and visualizations must be verified with reproducible checks.
- Final responsibility stays with the human contributor.
- Substantial AI-assisted work should be mentioned in the relevant issue/PR when appropriate.

Decision / notes:

-

---

## 7. Agenda

| Time | Topic | Notes / decisions |
|---|---|---|
| 0–5 min | Confirm purpose and outputs | |
| 5–15 min | August MVP + out of scope | |
| 15–25 min | Blocked vs can-start-now | |
| 25–40 min | First work packages | |
| 40–50 min | AI policy + GitHub workflow + repeated questions | |
| 50–60 min | What goes to Thursday’s broader meeting | |

---

## 8. Decisions made in this meeting

| Decision | Owner | Follow-up |
|---|---|---|
| | | |
| | | |
| | | |

---

## 9. Action items

| Action | Owner | Due |
|---|---|---|
| | | |
| | | |
| | | |

---

## 10. Notes

 topics or questions we do not solve today but must not lose:

- 
- 
- 

# Passive NFE — CRS Self-Certification via Form

> **Purpose**: Interim process for collecting CRS data from Passive NFE clients before full flow automation  
> **Status**: Design phase — agreeing on process with compliance  
> **Created**: February 26, 2026  
> **Target**: March 2026 (manual/semi-automated), April 2026 (full automation in onboarding flow)

---

## Context

Full CRS data collection in the onboarding flow (ACT-231) won't be ready until April 2026. In the meantime, we need an interim process to collect CRS self-certification from **Passive NFE** clients so we can open their accounts without blocking on the automated flow.

### Approach (agreed with compliance)

1. Send all Passive NFEs our FATCA/CRS self-certification form to fill out
2. AI analyzes the completed form and extracts CRS data
3. Store extracted data
4. Open the client's account

### What the form needs to capture

Per `CRS_DATA_REQUIREMENTS.md`, for a Passive NFE entity + its controlling persons:

**Entity level:**
- Tax residence(s)
- TIN(s) per jurisdiction
- Entity classification confirmation (Passive NFE)
- FATCA declaration

**Controlling persons (UBOs):**
- Full name
- Tax residence(s) per person
- TIN(s) per jurisdiction per person
- Date of birth
- Place of birth

---

## Open Items from Compliance Discussion (Feb 26, 2026)

### Agreed
- The overall approach works for March as an interim solution
- Add a policy confirmation clause: client signs that they are a company BC *can* onboard (not on the restricted list)

### To address
1. **Multiple controlling persons**: Form currently has fields for a limited number — need to either add more fields or let clients add rows themselves. Vlad flagged >2 controlling persons as a gap
2. **Multiple TINs**: Same issue — need expandable fields for multiple jurisdictions
3. **Verification tracking**: How do we check if a client has filled out the form or not? How do we route to manual review if they haven't?
4. **Full process description**: Misha to write up the complete flow covering all branches (happy path, non-response, manual review escalation) — ETA Friday/Monday

---

## Files

| File | Description |
|------|-------------|
| `Vivid_Money_FATCA_CRS_Form.docx` | Original self-certification form (v1, from [Google Drive](https://docs.google.com/document/d/1V5T2VTdrgb3xsfVGkWUkmugXIEfo7N0a/edit)) |
| `Vivid_Money_FATCA_CRS_Form_v2.md` | **Improved draft** — expanded controlling persons, multi-TIN, policy clause, filled appendix |
| `PASSIVE_NFE_CRS_PROCESS.md` | **Full process description** — end-to-end flow, nudging cadence, AI extraction, edge cases, open decisions |
| `README.md` | This file — project overview and status |

---

## Related

- `entity-graph/CRS_DATA_REQUIREMENTS.md` — Full CRS field requirements by role
- `entity-graph/BUSINESS_REQUIREMENTS.md` — Entity graph data model (parent project)
- Notion: [Extend onboarding flow to capture missing CRS data](https://www.notion.so/projectx019/Extend-onboarding-flow-to-capture-missing-CRS-data-SME-Retail-2e18d45461b08064a928c840d8dfe18e)
- Knowledge Base §15 — Holding Company & CRS Onboarding context

---

## Next Steps

1. [ ] Download the DOCX form into this folder
2. [ ] Add expandable fields for multiple controlling persons and TINs
3. [ ] Add policy compliance confirmation clause to the form
4. [ ] Write full process description (all branches: happy path, no response, manual review)
5. [ ] Design AI extraction pipeline for completed forms
6. [ ] Agree on tracking mechanism (filled vs not filled, escalation to manual review)

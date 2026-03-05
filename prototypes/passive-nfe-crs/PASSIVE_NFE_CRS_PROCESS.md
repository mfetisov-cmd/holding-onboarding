# Passive NFE — CRS Self-Certification Process

> **Purpose**: End-to-end process for collecting CRS data from Passive NFE clients via self-certification form  
> **Status**: Draft for compliance review (Vlad)  
> **Author**: Misha Fetisov  
> **Created**: February 26, 2026  
> **Timeline**: March 2026 (this interim process) → April 2026 (automated in onboarding flow)

---

## 1. Summary

Until the full CRS data collection is automated in the onboarding flow (April), we use an interim process:

1. Detect Passive NFE during onboarding
2. Send FATCA/CRS self-certification form
3. Client fills out and returns the form
4. AI extracts structured CRS data from the completed form
5. Compliance agent reviews the extraction (spot-check)
6. Data stored, account opened

**Expected volume**: 150–220 Passive NFEs / month (~7–10 per work day)

---

## 2. Process Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PASSIVE NFE CRS COLLECTION FLOW                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────┐                                                       │
│  │ Application   │                                                       │
│  │ submitted     │                                                       │
│  └──────┬───────┘                                                       │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────┐     ┌─────────────────┐                               │
│  │ Entity        │────►│ Active NFE /     │──► Normal flow               │
│  │ classified as │     │ Financial Inst.  │    (no form needed)          │
│  │ Passive NFE?  │     └─────────────────┘                               │
│  └──────┬───────┘                                                       │
│         │ Yes                                                           │
│         ▼                                                               │
│  ┌──────────────┐                                                       │
│  │ SEND FORM    │  Day 0                                                │
│  │ via email     │  (auto or manual trigger)                            │
│  └──────┬───────┘                                                       │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────┐     ┌─────────────────┐                               │
│  │ Client        │ No  │ REMINDER 1      │  Day 3                       │
│  │ responded?    │────►│ Email nudge      │                              │
│  └──────┬───────┘     └────────┬────────┘                               │
│         │                      │                                        │
│         │               ┌──────▼────────┐                               │
│         │               │ Client         │ No  ┌──────────────┐         │
│         │               │ responded?     │────►│ REMINDER 2   │ Day 7   │
│         │               └──────┬────────┘      │ Email + flag │         │
│         │                      │               └──────┬───────┘         │
│         │ Yes                  │ Yes                   │                 │
│         ▼                      ▼                       ▼                 │
│  ┌──────────────────────────────────┐          ┌──────────────┐         │
│  │ AI EXTRACTION                    │          │ Client        │ No     │
│  │ Parse completed form             │          │ responded?    │───┐    │
│  │ Extract: entity tax data,        │          └──────┬───────┘   │    │
│  │   controlling persons, TINs      │                 │ Yes       │    │
│  └──────────────┬───────────────────┘                 │           │    │
│                 │                                      │           │    │
│                 ▼                                      │           ▼    │
│  ┌──────────────────────────────────┐                 │    ┌──────────┐│
│  │ AI CONFIDENCE CHECK              │                 │    │ ESCALATE ││
│  │                                  │                 │    │ Day 14   ││
│  │ High confidence ───► Auto-store  │◄────────────────┘    │          ││
│  │   + agent spot-check             │                      │ See §2.4 ││
│  │                                  │                      └──────────┘│
│  │ Low confidence  ───► Route to    │                                   │
│  │   agent for manual review        │                                   │
│  └──────────────┬───────────────────┘                                   │
│                 │                                                       │
│                 ▼                                                       │
│  ┌──────────────────────────────────┐                                   │
│  │ DATA STORED                      │                                   │
│  │ CRS fields saved to client       │                                   │
│  │ record. Account opened.          │                                   │
│  └──────────────────────────────────┘                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2.1 Step 1 — Detection (Trigger)

**When**: During onboarding, when the entity is classified as a Passive NFE.

**How Passive NFE is determined**:
- NACE code triggers holding company question → client confirms "Yes"
- 50% income question → income primarily from dividends/interest/rents/royalties → Passive NFE

**Action**: Flag the application. Trigger form sending (Step 2).

**Open question**: Is the classification done before or after account opening? If before — we can gate account opening on form completion. If after — we open and then chase.

> **Recommendation**: Gate account opening on form receipt. This is the strongest incentive for clients to respond quickly.

---

## 2.2 Step 2 — Send Form

**When**: Day 0 (immediately after Passive NFE classification).

**How**: Email to applicant with:
- FATCA/CRS self-certification form (PDF attachment or fillable link)
- Clear instructions: "Please complete and return this form to proceed with your account opening"
- Deadline: 14 calendar days

**Who sends**: Automated (preferred) or compliance agent manually.

**Template** (email subject): `Vivid Money — FATCA/CRS Self-Certification Required`

**Policy clause**: The form (v2) includes a policy eligibility confirmation in Part VI — client confirms they are not in a restricted business category.

---

## 2.3 Step 3 — Follow-up / Nudging

| Day | Action | Channel | Tone |
|-----|--------|---------|------|
| 0 | Send form | Email | Neutral, instructional |
| 3 | Reminder 1 | Email | Friendly nudge — "We're waiting for your form to open your account" |
| 7 | Reminder 2 | Email | Firmer — "Your account opening is pending this form. Please submit within 7 days." |
| 14 | Escalation | See §2.4 | — |

**Tracking**: Each Passive NFE application gets a status:

| Status | Meaning |
|--------|---------|
| `FORM_SENT` | Form emailed to client |
| `FORM_REMINDER_1` | First reminder sent |
| `FORM_REMINDER_2` | Second reminder sent |
| `FORM_RECEIVED` | Client returned the completed form |
| `EXTRACTION_DONE` | AI extracted data, pending review |
| `REVIEW_APPROVED` | Agent confirmed extraction, data stored |
| `ESCALATED` | No response after 14 days |

**Where to track**: CTA in the compliance tool (preferred) or a shared spreadsheet as interim.

---

## 2.4 Step 4 — Non-Response (Escalation at Day 14)

If the client has not returned the form after 14 days and 2 reminders:

**Option A (recommended)**: Application remains on hold. Final email: "We are unable to open your account without the completed FATCA/CRS self-certification form. Your application will remain pending. Please contact us if you need assistance completing the form."

**Option B**: Reject/cancel the application with a clear reason, allowing the client to re-apply.

**Option C**: Open the account with a 30-day deadline to submit the form post-opening. If not received by deadline, restrict the account.

> **Decision needed from compliance**: Which option? Option A is the safest from a regulatory perspective. Option C is the most client-friendly but carries reporting risk.

---

## 2.5 Step 5 — AI Extraction

**When**: Form received from client (any format: filled PDF, scanned image, filled DOCX).

**What AI extracts**:

| Field | Source in form |
|-------|---------------|
| Entity tax residence(s) | Part III |
| Entity TIN(s) | Part III |
| Entity classification | Part IV |
| FATCA status (U.S. person Y/N) | Part II |
| For each Controlling Person: | Part V |
| — Full name | Part V |
| — Date of birth | Part V |
| — Place of birth | Part V |
| — Address | Part V |
| — Tax residence(s) & TIN(s) | Part V |
| — Controlling person type | Part V |
| — U.S. person status & TIN | Part V |
| Policy eligibility confirmation | Part VI |
| Signature & date | Part VII |

**Confidence scoring**:
- **High confidence** (all fields extracted, values look plausible): Auto-store, agent does spot-check within 24h
- **Low confidence** (missing fields, illegible, ambiguous): Route to agent for manual review and correction

**Expected split**: ~70-80% high confidence, 20-30% manual review (estimate, will refine after first 2 weeks).

---

## 2.6 Step 6 — Agent Review

**High-confidence extractions** (~7-8 per day worst case):
- Agent opens AI extraction summary
- Compares key fields against form image (spot-check, not field-by-field)
- Approves or corrects
- ~2-3 min per case

**Low-confidence extractions** (~2-3 per day worst case):
- Agent reviews form manually
- Enters/corrects fields AI couldn't extract
- ~5-10 min per case

**Total daily agent load** (worst case, 220/month):
- ~10 reviews/day × 3-5 min avg = **30-50 min/day**
- Distributed across the compliance team, not a single person

---

## 2.7 Step 7 — Data Storage & Account Opening

Once extraction is reviewed and approved:

1. CRS data fields are saved to the client record (entity + controlling persons)
2. Application proceeds through normal compliance review
3. Account opened

**Where data is stored**: TBD — Admin Panel, or a dedicated CRS data store. For March interim, can be stored alongside the compliance case.

---

## 3. Edge Cases

| Scenario | How to handle |
|----------|---------------|
| Client fills form incorrectly (missing fields, wrong sections) | Agent contacts client for correction. Does NOT auto-reject. |
| Client has >4 controlling persons | Form v2 instructs to attach separate sheet. AI extracts from attachment too. |
| Client disputes classification (says they're Active, not Passive) | Route to compliance for manual classification review. |
| Client is both a Passive NFE AND has U.S. controlling persons | Both CRS and FATCA paths apply. Form covers both. |
| Form returned in unexpected format (photo, WhatsApp, etc.) | Accept any legible format. AI extraction should handle scans/photos. |
| Client sends back the old form (v1, only 2 controlling persons) | Accept it. If >2 persons exist, agent follows up for the rest. |

---

## 4. Success Metrics (March)

| Metric | Target |
|--------|--------|
| Forms sent within 24h of classification | >95% |
| Client response rate (within 14 days) | >70% |
| AI extraction high-confidence rate | >70% |
| Avg time from form received → data stored | <24h |
| Agent review time per case | <5 min avg |

---

## 5. What This Process Does NOT Cover

- **Retroactive CRS collection** for existing clients (out of scope for March)
- **Active NFE / Financial Institution classification** — these don't need the form
- **Retail (individual) CRS data** — separate process
- **Full automation in onboarding flow** — that's the April milestone (ACT-231)

---

## 6. Open Decisions for Compliance

| # | Question | Options | Recommendation |
|---|----------|---------|----------------|
| 1 | What happens if client doesn't respond in 14 days? | A: Hold application / B: Reject / C: Open with deadline | A (hold) |
| 2 | Is form sent before or after initial compliance review? | Before (gate opening) / After (chase post-opening) | Before |
| 3 | Where do we track form status? | CTA in compliance tool / Spreadsheet / Other | CTA (preferred) |
| 4 | Where is CRS data stored? | Admin Panel / Dedicated store / Compliance case | TBD with engineering |
| 5 | Who sends the form — automated or agent? | Automated trigger / Manual by agent | Automated (preferred) |
| 6 | Do we accept forms via any channel (email, WhatsApp, upload)? | Email only / Any channel | Any legible format |

---

## 7. Timeline

| Week | Milestone |
|------|-----------|
| Feb 28 | Process doc reviewed by compliance (Vlad) |
| Mar 3–7 | Finalize form v2, set up email template, set up tracking |
| Mar 10 | Go live — start sending forms to new Passive NFEs |
| Mar 10–14 | First forms returned, test AI extraction pipeline |
| Mar 17–31 | Steady state, refine based on actual volumes and AI accuracy |
| April | Transition to automated in-flow collection (ACT-231) |

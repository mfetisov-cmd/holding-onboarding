# Holding Company Onboarding — Design Spec

Interactive prototype of the **Business Details** and **Subsidiaries** screens for the SME holding company onboarding flow. Built with production Vivid UI components inside a Next.js app, intended to serve as a living design specification for the team.

**Live preview**: deploy via `npm run dev` → [localhost:3000/business-details](http://localhost:3000/business-details)

---

## What we built

### Screen 1 — Business Details

Collects core company information before proceeding to acceptance. Matches the current production layout.

| Field | Component | Notes |
|---|---|---|
| Country of registration | `NativeSelect` | DE, FR, IT, ES, NL, LU, AT |
| Expected turnover | `NativeSelect` | 5 ranges from "Up to €10K/month" to "Above €500K/month" |
| Is your company a holding? | `NativeSelect` | Yes / No — gates the next question and the Subsidiaries screen |
| How does your company primarily generate income? | `NativeSelect` | Only shown when "Yes" is selected above. Two options: **Active NFE** (management fees, services, subsidiary revenue) or **Passive NFE** (dividends, interest, rents, royalties) |
| Describe your business and revenue sources | `Input` (textarea-style) | Free text |
| Brand name (optional) | `Input` + tooltip icon | Shows info tooltip on hover |
| Cash withdrawals | `Checkbox` | "My company plans to withdraw cash" |

**Validation**: "Save & Continue" is disabled until all required fields are filled. If the company is a holding, the income source question must also be answered.

**Navigation**: Clicking "Save & Continue" either advances to the Subsidiaries screen (holding = yes) or completes the flow (holding = no).

### Screen 2 — Subsidiaries

Only shown if the company is identified as a holding. Lets the user search for and register subsidiaries with ownership percentages.

**Search UI** (mirrors production company search):
- Tab toggle: "Company name" / "Registration number"
- Type-ahead search against mock company registry data
- Results panel showing company name, reg number, and address
- "Show all results" expander when more than 3 matches

**Adding a subsidiary**:
- Select a search result → enter ownership `%` → add to list
- Or switch to manual entry (name + registration number + ownership)

**Pre-filled state** (demo default):
- Zalando Logistics SE & Co. KG — 25% ownership (completed)
- Zalando Payments GmbH — ownership pending (user must fill in)

**Validation**: "Save & Continue" is disabled until every added subsidiary has a confirmed ownership percentage.

---

## Key decisions

1. **Dropdowns over radio buttons** for the holding / income source questions — cleaner on mobile and consistent with the rest of the form.
2. **Conditional income source** — the Active/Passive NFE classification only appears when "Is your company a holding?" = Yes, keeping the default flow minimal.
3. **Subsidiaries search-first** — matches the existing production pattern for company lookup; manual entry is a fallback, not the default.
4. **Pending ownership state** — subsidiaries can be pre-loaded with `null` ownership, forcing the user to confirm before proceeding. Supports scenarios where subsidiary data is fetched from external sources but ownership % is unknown.

---

## Tech stack

- **Next.js 15** (App Router)
- **styled-components** with Vivid theme tokens
- **Vivid UI components**: `NativeSelect`, `Input`, `ButtonV2`, `Checkbox`, `Typography`, `Spacer`, `Divider`, `Flex`, `Column`, `ArrowRight24`
- Single page component at `src/app/business-details/page.tsx` managing both screens via local state

---

## Running locally

```bash
cd vibe-ui
npm install
npm run dev
```

Open [http://localhost:3000/business-details](http://localhost:3000/business-details).

---

## What's next

- [ ] CRS (Common Reporting Standard) questions — separate step after subsidiaries
- [ ] Connect to real company registry API (replace mock data)
- [ ] Wire up to backend acceptance endpoints
- [ ] Deploy to Vercel for stakeholder review

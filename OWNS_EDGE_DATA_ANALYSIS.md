# OWNS Edge — CreditSafe Data Analysis (Germany, 2026)

> **Purpose**: Identify data points in CreditSafe reports that support the "OWNS" edge type  
> **Scope**: German companies, snapshots from January 2026+  
> **Source table**: `OPERATIONS_DB.ODH_PD.LOG_REGISTRAR_COMPANY_SNAPSHOT_PD`  
> **Filter**: `DATA_NUD:report:companySummary:country::STRING = 'DE'`  
> **Date**: February 26, 2026

---

## 1. Dataset Overview

| Metric | Value |
|--------|-------|
| Total snapshots (DE, 2026, CreditSafe format) | 3,286 |
| Unique companies | 3,270 |
| Report format | CreditSafe JSON (`DATA_NUD:report`) |

> **Note**: The `company` source table replicas are **dead** (last updated Nov 2024):
> - `OPERATIONS_DB.ODH.LOG_REGISTRAR_COMPANY` — stopped Nov 2024
> - `OPERATIONS_DB.ODH_PD.LOG_REGISTRAR_COMPANY_IDS` — stopped Nov 2024
> 
> Do **not** join with these tables to filter by partner type or country. Instead, filter directly on the snapshot JSON fields. The snapshot table (`LOG_REGISTRAR_COMPANY_SNAPSHOT_PD`) is live and updated daily.

---

## 2. Ownership-Relevant Fields in CreditSafe Report

Three JSON sections contain ownership data:

### 2.1 `groupStructure` — Direct parent/subsidiary relationships

**Coverage**: 613 companies (19% of German 2026 cohort)

| Field | Description | Available in |
|-------|-------------|-------------|
| `groupStructure.immediateParent` | Direct parent company | 408 companies (66% of those with group data) |
| `groupStructure.ultimateParent` | Top-level owner in the chain | 408 companies |
| `groupStructure.subsidiaryCompanies[]` | Companies our client owns | 273 companies |

**Parent fields** (both `immediateParent` and `ultimateParent`):
```json
{
  "name": "BALTOTAL GROUP",
  "id": "ES-0-10684328",                    // CreditSafe ID
  "country": "ES",
  "registrationNumber": "B70753983",
  "safeNumber": "ES09488199",               // CreditSafe safe number
  "status": "Active",
  "address": { "postalCode": "28010", "simpleValue": "..." }
}
```

**Subsidiary fields** (`subsidiaryCompanies[]`):
```json
{
  "name": "SOLAR-DACHEINKAUF VERWALTUNGS GMBH",
  "id": "DE-0-DE02041069",
  "country": "DE",
  "registrationNumber": "HRB 705863",
  "safeNumber": "DE02041069",
  "status": "Active",
  "address": { "postalCode": "68229", "simpleValue": "..." }
}
```

### 2.2 `extendedGroupStructure[]` — Full ownership hierarchy tree

**Coverage**: 613 companies (same set as `groupStructure`)

Array of all entities in the group, with a `level` attribute representing depth:
- `level: 0` = top of the tree (ultimate parent)
- `level: 1` = direct children of level 0
- `level: 2` = grandchildren, etc.

```json
[
  { "companyName": "SOLIT GROUP AG", "country": "CH", "level": 0, "registeredNumber": "CHE416529343", "safeNumber": "CH02679185", "status": "Active" },
  { "companyName": "SOLIT MANAGEMENT GMBH", "country": "DE", "level": 1, "registeredNumber": "HRB 26330", "safeNumber": "DE04175797", "id": "DE-0-DE04175797" },
  { "companyName": "ADEOS MEDIA GMBH", "country": "DE", "level": 2, "registeredNumber": "HRB 4847", "safeNumber": "DE01493989", "id": "DE-0-DE01493989" }
]
```

### 2.3 `extendedGroupStructureExtra.groupStructure[]` — Enriched hierarchy

Same tree as 2.2 but with additional financial data per entity:
- `commonRatingBand` (e.g., "C")
- `providerValue` (credit score, e.g., "43")
- `creditLimit` (e.g., `{ "currency": "EUR", "value": 3500 }`)
- `consolidatedAccounts` (boolean)
- `latestAnnualAccounts` (date)

### 2.4 `shareCapitalStructure.shareHolders[]` — Who owns shares

**Coverage**: 2,828 companies (86% of German 2026 cohort)

| Shareholder Type | Companies | Total Shareholders | Avg % Held |
|-----------------|-----------|-------------------|------------|
| **Person** | 2,159 | 3,021 | 69.7% |
| **Company** | 464 | 678 | 59.9% |
| **Other** | 100 | 136 | 55.7% |

**Person shareholder** fields:
```json
{
  "name": "Tobias Scheer",
  "id": "201794186",                          // CreditSafe person ID
  "shareholderType": "Person",
  "percentSharesHeld": 100,
  "startDate": "2025-09-19T00:00:00Z",
  "additionalData": {
    "dateOfBirth": "1998-09-01T00:00:00Z",
    "shareholderTypeDescription": "Natural Person"
  },
  "address": { "city": "Düsseldorf" }
}
```

**Company shareholder** fields:
```json
{
  "name": "Bettag Holding GmbH",
  "id": "201642109",                          // CreditSafe company ID
  "shareholderType": "Company",
  "percentSharesHeld": 100,
  "additionalData": {
    "shareholderTypeDescription": "HR Company"
  }
}
```

> **Limitation**: Company shareholders in `shareCapitalStructure` have `id` but **no** `safeNumber`, `registrationNumber`, or `country`. Less linkable than `groupStructure` data.

---

## 3. Relationship Breakdown (613 companies with group data)

| Pattern | Count | % | Description |
|---------|-------|---|-------------|
| **Has parent only** (is owned) | 340 | 55% | Someone owns our client |
| **Has subsidiaries only** (is owner) | 205 | 33% | Our client owns someone |
| **Both parent & subsidiaries** | 68 | 11% | Intermediate in ownership chain |

Average subsidiary count:
- Companies with subs only: **4.8** subsidiaries
- Companies with both parent & subs: **6.4** subsidiaries

---

## 4. Data Quality for "OWNS" Edge

### What we CAN extract per relationship:

| Attribute | `groupStructure` | `extendedGroupStructure` | `shareCapitalStructure` (Company type) |
|-----------|-----------------|-------------------------|---------------------------------------|
| Entity name | `name` | `companyName` | `name` |
| CreditSafe ID | `id` + `safeNumber` | `safeNumber` + `id` | `id` only |
| Registration number | `registrationNumber` | `registeredNumber` | -- |
| Country | `country` | `country` | -- |
| Status (Active/NonActive) | `status` | `status` | -- |
| Address | `address` | `address` | -- |
| Ownership % | -- | -- | `percentSharesHeld` |
| Credit score | -- | `commonRatingBand`, `providerValue` | -- |
| Credit limit | -- | `creditLimit` | -- |
| Hierarchy level | -- | `level` | -- |

### Key gaps:

1. **No ownership % in `groupStructure`** — we know parent/subsidiary relationships exist, but not the exact percentage
2. **No `registrationNumber` or `country` in `shareCapitalStructure`** Company shareholders — harder to resolve identity
3. **Only 19% of companies have group structure data** — most German SMEs are small single-entity businesses, which is expected
4. **`shareCapitalStructure` covers 86%** but the Company shareholders there (464 companies) have weaker identifiers

---

## 5. Recommended Approach for "OWNS" Edge

### Primary: `groupStructure` (408 parents + 273 with subsidiaries)
- Best data quality: has `safeNumber`, `registrationNumber`, `country`
- Directly answers "who owns our client" and "who our client owns"
- Use `extendedGroupStructure` for multi-hop chains

### Supplementary: `shareCapitalStructure` where `shareholderType = 'Company'` (464 companies)
- Provides `percentSharesHeld` (the missing attribute from groupStructure)
- Can be cross-referenced with `groupStructure` for entities that appear in both
- For entities only in shareCapitalStructure, use `name` + `id` for fuzzy matching

### Enrichment: `extendedGroupStructureExtra` (same 613 companies)
- Adds credit rating, credit limit, financial data per group member
- Useful for the scoring use cases (S6 in business requirements)

---

## 6. Sample SQL to Extract "OWNS" Edges

### Parent relationships (who owns our client)
```sql
SELECT 
    snap.COMPANY_ID as client_company_uuid,
    snap.DATA_NUD:report:companySummary:businessName::STRING as client_name,
    snap.DATA_NUD:report:companySummary:companyRegistrationNumber::STRING as client_reg_number,
    snap.DATA_NUD:report:groupStructure:immediateParent:name::STRING as parent_name,
    snap.DATA_NUD:report:groupStructure:immediateParent:id::STRING as parent_creditsafe_id,
    snap.DATA_NUD:report:groupStructure:immediateParent:safeNumber::STRING as parent_safe_number,
    snap.DATA_NUD:report:groupStructure:immediateParent:registrationNumber::STRING as parent_reg_number,
    snap.DATA_NUD:report:groupStructure:immediateParent:country::STRING as parent_country,
    snap.DATA_NUD:report:groupStructure:immediateParent:status::STRING as parent_status,
    snap.DATA_NUD:report:groupStructure:ultimateParent:name::STRING as ultimate_parent_name,
    snap.DATA_NUD:report:groupStructure:ultimateParent:id::STRING as ultimate_parent_creditsafe_id
FROM OPERATIONS_DB.ODH_PD.LOG_REGISTRAR_COMPANY_SNAPSHOT_PD snap
WHERE snap.DATA_NUD:report:companySummary:country::STRING = 'DE'
  AND snap.CREATED_AT >= '2026-01-01'
  AND snap.DATA_NUD:report:groupStructure:immediateParent IS NOT NULL;
```

### Subsidiary relationships (who our client owns)
```sql
SELECT 
    snap.COMPANY_ID as client_company_uuid,
    snap.DATA_NUD:report:companySummary:businessName::STRING as client_name,
    sub.value:name::STRING as subsidiary_name,
    sub.value:id::STRING as subsidiary_creditsafe_id,
    sub.value:safeNumber::STRING as subsidiary_safe_number,
    sub.value:registrationNumber::STRING as subsidiary_reg_number,
    sub.value:country::STRING as subsidiary_country,
    sub.value:status::STRING as subsidiary_status
FROM OPERATIONS_DB.ODH_PD.LOG_REGISTRAR_COMPANY_SNAPSHOT_PD snap,
    LATERAL FLATTEN(input => snap.DATA_NUD:report:groupStructure:subsidiaryCompanies) sub
WHERE snap.DATA_NUD:report:companySummary:country::STRING = 'DE'
  AND snap.CREATED_AT >= '2026-01-01';
```

### Company shareholders with ownership %
```sql
SELECT 
    snap.COMPANY_ID as client_company_uuid,
    snap.DATA_NUD:report:companySummary:businessName::STRING as client_name,
    sh.value:name::STRING as shareholder_company_name,
    sh.value:id::STRING as shareholder_creditsafe_id,
    sh.value:percentSharesHeld::FLOAT as ownership_pct,
    sh.value:additionalData:shareholderTypeDescription::STRING as type_desc
FROM OPERATIONS_DB.ODH_PD.LOG_REGISTRAR_COMPANY_SNAPSHOT_PD snap,
    LATERAL FLATTEN(input => snap.DATA_NUD:report:shareCapitalStructure:shareHolders) sh
WHERE snap.DATA_NUD:report:companySummary:country::STRING = 'DE'
  AND snap.CREATED_AT >= '2026-01-01'
  AND sh.value:shareholderType::STRING = 'Company';
```

---

## 7. Real Examples (Germany, 2026)

### Example 1: Client owns subsidiaries — EQ Vermögensverwaltungs GmbH

A Regensburg-based asset management company that owns two subsidiaries.

```
                    ┌──────────────────────────────────────────┐
                    │  ✅ EQ Vermögensverwaltungs GmbH         │
                    │  HRB 19035 · Regensburg · Active         │
                    │  safeNumber: DE31253341                   │
                    │                                          │
                    │  👤 Shareholder: Quirin Erber (100%)      │
                    │     DOB: 1994-01-16                      │
                    └──────────────┬───────────────────────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    │ OWNS                        │ OWNS
                    ▼                             ▼
    ┌──────────────────────────┐  ┌──────────────────────────┐
    │  Brauhaus am Schloss GmbH│  │  EQPV GmbH               │
    │  HRB 19109 · Active      │  │  HRB 19957 · Active      │
    │  DE31285060               │  │  DE31556045               │
    │  Regensburg               │  │  Regensburg               │
    └──────────────────────────┘  └──────────────────────────┘
```

**Data sources used:**
- `groupStructure.subsidiaryCompanies[]` → 2 subsidiaries with full IDs
- `shareCapitalStructure.shareHolders[]` → Quirin Erber, Person, 100%
- `extendedGroupStructure` → tree with levels: 0 (client), 1 (both subs)

---

### Example 2: Client is owned (3-level chain) — sunsation project 4 GmbH

A solar project company sitting at level 2 of a holding structure with 7 sister companies.

```
                    ┌──────────────────────────────────────────┐
                    │  Achatz Holding GmbH                     │
                    │  HRB 6255 · Kirchberg i.Wald · Active    │
                    │  safeNumber: DE32187649                   │
                    │  (ultimate parent)                        │
                    └──────────────────┬───────────────────────┘
                                       │
                                       │ OWNS
                                       ▼
                    ┌──────────────────────────────────────────┐
                    │  PV Gutachter Achatz GmbH                │
                    │  HRB 5475 · Kirchberg i.Wald · Active    │
                    │  safeNumber: DE31159747                   │
                    │  (immediate parent)                       │
                    └──────────────────┬───────────────────────┘
                                       │
          ┌──────────┬──────────┬──────┼──────┬──────────┬──────────┬──────────┐
          │          │          │      │      │          │          │          │
          ▼          ▼          ▼      ▼      ▼          ▼          ▼          ▼
    ┌──────────┐┌─────────┐┌─────┐┌────────┐┌─────┐┌─────────┐┌─────────┐
    │Project 1 ││Projekt 2││ P.3 ││✅ P.4  ││ P.5 ││ P.6     ││ P.7     │
    │HRB 5817  ││HRB 6387 ││6392 ││HRB 6393││6394 ││HRB 6395 ││HRB 6396 │
    │Active    ││Active   ││Act. ││Active  ││Act. ││Active   ││Active   │
    └──────────┘└─────────┘└─────┘└────────┘└─────┘└─────────┘└─────────┘

    ✅ = Our client (sunsation project 4 GmbH)
    All 7 siblings are prospects for sales outreach (use case S1, S4)
```

**Data sources used:**
- `groupStructure.immediateParent` → PV Gutachter Achatz GmbH
- `groupStructure.ultimateParent` → Achatz Holding GmbH (different from immediate → chain exists)
- `extendedGroupStructure` → full tree: level 0 (holding), level 1 (parent), level 2 (7 project companies)
- `shareCapitalStructure` → PV Gutachter Achatz GmbH owns 100% (cross-references with groupStructure!)

**Key insight**: `shareCapitalStructure` here gives us the **100%** that `groupStructure` doesn't. The `safeNumber` (DE31159747) matches between both fields, confirming they can be cross-referenced.

---

### Example 3: Client in the middle of a chain — Purely for Nature GmbH

A company owned by an intermediate holding, which is part of a larger group.

```
                    ┌──────────────────────────────────────────┐
                    │  NRE Niederrhein Real Estate GmbH        │
                    │  HRB 34647 · Duisburg · Active           │
                    │  safeNumber: DE30213847                   │
                    │  (ultimate parent)                        │
                    └──────────────────┬───────────────────────┘
                                       │
              ┌────────────────────────┼────────────────────────┐
              │ OWNS                   │ OWNS                   │ OWNS
              ▼                        ▼                        ▼
  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
  │ NRE 6 UG           │  │ Mannesmann Invest  │  │ Mannstärke GmbH    │
  │ HRB 91738          │  │ GmbH               │  │ HRB 35073          │
  │ NonActive          │  │ HRB 34952 · Active │  │ Active             │
  │ DE30971540         │  │ DE31255502         │  │ DE31286341         │
  └────────────────────┘  │ (immediate parent) │  └────────────────────┘
                          └─────────┬──────────┘
                                    │
                                    │ OWNS 100%  ← from shareCapitalStructure
                                    ▼
                    ┌──────────────────────────────────────────┐
                    │  ✅ Purely for Nature GmbH               │
                    │  HRB 35102 · Duisburg · Active           │
                    │  safeNumber: DE31307010                  │
                    └──────────────────────────────────────────┘
```

**Data sources used:**
- `groupStructure.immediateParent` → Mannesmann Invest GmbH
- `groupStructure.ultimateParent` → NRE Niederrhein Real Estate GmbH
- `extendedGroupStructure` → 5-entity tree across 3 levels
- `shareCapitalStructure` → Mannesmann Invest GmbH owns 100%, with matching `safeNumber: DE31255502`

**Sales insight**: NRE 6 UG (NonActive) could be replaced; Mannstärke GmbH is a prospect. The whole group is Duisburg-based.

---

## 8. Next Steps

1. **Cross-reference `groupStructure` parents with `shareCapitalStructure` Company shareholders** to combine structural data with ownership percentages (Example 2 confirms this works via `safeNumber`)
2. **Check if subsidiary/parent companies are also Vivid clients** by matching `safeNumber`/`registrationNumber` across snapshots
3. **Extend to other countries** (IT, FR, ES) — verify same JSON fields exist
4. **Define deduplication logic** for matching entities across reports (by `safeNumber`, `registrationNumber`, or `name`)

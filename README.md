# Holding Onboarding Automation

Interactive prototype and design specification for the Vivid Money SME **holding company onboarding** flow. Built with production Vivid UI components in Next.js.

## Screens

| Screen | Route | Description |
|---|---|---|
| Business Details | `/business-details` | Company info, turnover, holding detection, Active/Passive NFE classification |
| Subsidiaries | `/business-details` (step 2) | Company search, ownership %, manual entry fallback |
| Document Upload | `/doc-upload` | KYC document collection |

## Project structure

```
├── prototypes/             # Earlier HTML prototypes (holding flow, passive-nfe-crs)
├── src/
│   ├── app/
│   │   ├── business-details/  # Holding onboarding screens
│   │   └── doc-upload/        # Document upload screen
│   └── shared/ui/vivid-ui/   # Vivid production UI components
├── BUSINESS_REQUIREMENTS.md   # Full business requirements
├── CRS_DATA_REQUIREMENTS.md   # CRS data model requirements
├── OWNS_EDGE_DATA_ANALYSIS.md # Entity ownership graph analysis
└── HOLDING_ONBOARDING.md      # Design spec summary
```

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/business-details](http://localhost:3000/business-details).

## Deployment

Connected to Vercel — pushes to `main` auto-deploy.

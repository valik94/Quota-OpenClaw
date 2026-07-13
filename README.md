# Quota

Quota is a paid AI quoting agent for small HVAC and mechanical service businesses, using a subscription model with per-quote overage fees once included usage limits are reached. It accepts messy service requests, produces a free preview, requires x402 payment to unlock the full report, and returns a first-draft quote with pricing guidance, confidence, similar historical jobs, uncertainty notes, and a proof-backed agent receipt.

Quota is designed as a scoped digital worker rather than a general-purpose chatbot. It supports contractor judgment and keeps final human review in the workflow.

## Product Workflow

1. A contractor submits an unstructured HVAC service request through Telegram.
2. Quota validates the request and rejects malformed, unsafe, or out-of-scope input.
3. The user receives a free preview.
4. Quota checks whether the request is covered by the user's subscription allowance.
5. If the allowance has been exhausted, x402 payment is requested for the additional quote.
6. After subscription entitlement or payment confirmation, Quota generates:
   - a suggested pricing range;
   - a recommended starting price;
   - a confidence score;
   - relevant historical jobs;
   - uncertainty notes;
   - a human-review notice; and
   - an auditable agent receipt.


## Pricing Model

Quota is planned as a **subscription-based product with usage-based overage fees**.

Each subscription tier will include a defined number of full quote reports during the billing period. Once a customer exceeds the included quota, additional reports will be charged individually on a per-quote basis.

This hybrid model is intended to:

- provide predictable recurring revenue;
- give contractors a clear monthly allowance;
- support occasional users without requiring a large plan;
- allow high-usage businesses to continue working without interruption; and
- align additional charges with completed quoting work.

A typical flow will be:

1. The customer selects a subscription plan.
2. The plan includes a set number of paid quote reports.
3. Each completed report reduces the remaining monthly allowance.
4. When the allowance is exhausted, the user is informed before generating another paid report.
5. Additional reports are unlocked through a per-quote payment.
6. The subscription allowance resets at the beginning of the next billing period.

Exact pricing, plan limits, and overage fees will be validated with seed users before launch.

## Seed User

Quota's initial users are small HVAC and mechanical service businesses, typically with 2 to 20 employees, that still create quotes manually from customer messages, technician notes, old invoices, spreadsheets, and staff experience.

The likely day-one operator is an:

- owner-operator;
- service manager;
- dispatcher;
- estimator; or
- senior technician.

These users need faster and more consistent first-draft quotes, but they still want final human control over pricing.

### Initial Use Cases

- Residential air-conditioning systems that are not cooling.
- Weak-airflow or noisy-equipment service requests.
- Dispatch triage before technician assignment.
- After-hours or peak-season quoting backlogs.
- First-pass estimates based on incomplete customer descriptions.

## Why Quota

Small HVAC businesses often lose time and margin because quote preparation is fragmented and inconsistent. Quota helps by:

- structuring messy intake;
- reducing repetitive manual work;
- surfacing similar historical jobs;
- highlighting uncertainty instead of hiding it;
- improving pricing consistency;
- requiring payment before releasing the full work product; and
- preserving a proof-backed audit trail.

## Growth Metrics

Quota's north-star metric is:

> **Paid quote reports generated for qualified HVAC requests**

This metric represents completion of the core product workflow: valid intake, preview generation, payment confirmation, full report generation, and receipt creation.

### Measurement Areas

#### Acquisition

- Unique Telegram users.
- HVAC requests submitted.
- Unique businesses represented.
- Traffic and referral source.

#### Activation

- Preview completion rate.
- Preview-to-paid-access conversion rate, including subscription usage and overage payments.
- First paid quote rate.
- Time to first paid quote.

#### Value

- Human usability rate.
- Estimated time saved per quote.
- Similar-job relevance score.
- Confidence alignment with reviewer judgment.
- Percentage of drafts forwarded, adapted, or used.

#### Retention

- Weekly active quoting users.
- Repeat paid usage rate across subscription renewals and per-quote overages.
- Week 2 and week 4 business retention.
- Paid reports per active business per week.

#### Reliability and Trust

- Subscription entitlement and payment verification success rate.
- Quote generation success rate after payment.
- Invalid or out-of-scope request rejection rate.
- Security-block events.
- Human-review labeling compliance.
- Failed payment or unlock attempts.

### Proposed Stage 1 Targets

- 10 to 15 qualified seed users.
- 20 to 30 preview requests.
- 30% to 50% preview-to-payment conversion on relevant requests.
- 8 to 12 paid reports.
- At least 60% of paid reports judged usable with minor edits.
- At least 3 users or businesses returning for a second paid session.
- Median time to first paid quote below 10 minutes.

## Current Progress

| Deliverable | Status |
|---|---|
| Public GitHub repository | Complete |
| Product website prototype | Complete |
| Product landing page | Complete |
| Seed user definition | Complete |
| Growth metrics proposal | Complete |
| Telegram bot connection | Complete |
| Gas funding request | Submitted |
| x402 request | Submitted |
| ClawUp subscription request | Approved / extended |
| ERC-8004 agent identity | In progress |
| Subscription entitlement and x402 overage flow | In progress |
| Public deployment | In progress |

The main current blocker is ERC-8004 registration on the GOAT Network. The first registration attempt did not produce a verified on-chain identity. The team is rebuilding the registration flow from the official GOAT documentation and will treat registration as complete only after confirming the transaction receipt, Agent ID, registry record, and wallet association.

## Repository Structure

```text
Quota-OpenClaw/
├── AI Estimator Website Prototype/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── styles/
│   ├── dist/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.ts
├── sample-data/
└── README.md
```

The current frontend is a React and TypeScript application built with Vite.

## Run the Frontend Locally

### Prerequisites

Install:

- Node.js
- npm
- Git

Node.js 20 or 22 LTS is recommended for local development.

### 1. Clone the Repository

```bash
git clone https://github.com/MathemagicianAna/Quota-OpenClaw.git
cd Quota-OpenClaw
```

### 2. Open the Frontend Directory

```bash
cd "AI Estimator Website Prototype"
```

### 3. Install Dependencies

```bash
npm install
```

On Windows PowerShell, script execution policies may block `npm.ps1`. In that case, use:

```powershell
npm.cmd install
```

### 4. Start the Development Server

```bash
npm run dev
```

On Windows PowerShell:

```powershell
npm.cmd run dev
```

Vite will display a local URL, usually:

```text
http://localhost:5173/
```

Open that address in a browser.

### Dependency Troubleshooting

If Vite reports that `framer-motion` cannot be resolved, install the required packages:

```powershell
npm.cmd install motion framer-motion
npm.cmd run dev -- --force
```

If the dependency installation was interrupted or corrupted:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm.cmd cache clean --force
npm.cmd install
npm.cmd run dev
```

Do not use `pip install npm`; npm is installed with Node.js.

If npm reports `ENOSPC: no space left on device`, free disk space, remove the incomplete `node_modules` directory, and reinstall.

## Security

Never commit or display:

- private keys;
- seed phrases;
- wallet credentials;
- `.env` files;
- Telegram bot tokens;
- API keys; or
- payment secrets.

If a private key is exposed, retire the wallet, move remaining funds to a newly generated wallet with a different recovery phrase, and replace the compromised credential in the deployment environment.

## Planned Next Steps

1. Complete and verify ERC-8004 registration on GOAT Network.
2. Finalize subscription entitlements, usage limits, and the x402 overage payment flow.
3. Connect payment confirmation to full report generation.
4. Generate the agent receipt after successful completion.
5. Deploy the public website.
6. Instrument the proposed funnel and reliability events.
7. Test with qualified HVAC seed users.
8. Collect human-review and repeat-usage feedback.

## Success Criteria

Stage 1 success means showing that Quota is more than a technical demo. The product should demonstrate that a relevant HVAC user can:

- submit a real or representative service request;
- receive a meaningful preview;
- use an included subscription credit or complete an overage payment;
- obtain a useful first-draft quote;
- review a proof-backed receipt; and
- return to use the agent again.

## Project Links

- Repository: https://github.com/MathemagicianAna/Quota-OpenClaw
- Frontend prototype: `AI Estimator Website Prototype/`

## Team

Built for the OpenClaw Summer Bootcamp 2026.

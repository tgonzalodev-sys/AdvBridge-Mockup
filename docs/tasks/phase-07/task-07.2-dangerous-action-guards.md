# Task 07.2 — Dangerous action guards

## Objective
Add safeguards to risky actions.

## Scope
- confirmation popup for:
  - deleting billing concepts
  - editing billed lines
  - changing license quantities
  - changing discounts
  - changing currency
  - changing Madre/Hija hierarchy

## Out of scope
- role-based approval
- audit actor tracking

## Acceptance criteria
- High-risk actions require explicit confirmation
- UX stays light, not over-engineered

## Stop and ask if
- popup confirmations become too repetitive in daily workflow

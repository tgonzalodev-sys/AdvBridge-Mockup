# Task 05.2 — Billing generation engine

## Objective
Implement automatic generation of billing concepts.

## Scope
- recurring fixed-fee generation
- alternative arrangement handling
- variable placeholders
- future-dated contract projection support
- no auto-generation of initial fees

## Out of scope
- UI
- manual billables UI
- invoiced marking

## Acceptance criteria
- Billing generation follows the rules
- bimonthly/quarterly creates one line in billing month
- future contracts appear in relevant months

## Stop and ask if
- generation should be on-demand vs persisted schedule needs a product decision

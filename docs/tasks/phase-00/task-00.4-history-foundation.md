# Task 00.4 — History foundation

## Objective
Create the technical foundation for history/snapshots so later modules can use it consistently.

## Scope
- Design the base history event / snapshot storage structure
- Keep it generic enough for clients, contracts, billing concepts
- Add helper utilities for writing history records
- No visible UI yet

## Out of scope
- Full history screens
- Actor tracking
- Mandatory change reasons

## Acceptance criteria
- History tables or equivalent schema exist
- Helper pattern exists for later reuse
- No phase-1 rule is violated

## Stop and ask if
- Generic history design would create hidden complexity

# Task 06.3 — Invoiced marking

## Objective
Implement the internal invoiced control behavior.

## Scope
- mark line as invoiced
- mark full Madre-month as invoiced
- block full-month action if any mandatory line incomplete
- keep month pending if only partially billed

## Out of scope
- invoice records
- invoice numbering

## Acceptance criteria
- Full-month block rule works
- partial billed state behaves per business rules
- tests cover incomplete mandatory lines

## Stop and ask if
- "mandatory line" definition needs refinement by source type

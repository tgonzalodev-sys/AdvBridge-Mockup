# Task 04.2 — License allocation services

## Objective
Implement validation and persistence rules for license allocation.

## Scope
- allocation create/update service
- block when sum != total
- respect Madre-only case
- create history records for changes

## Out of scope
- UI modal
- billing

## Acceptance criteria
- mismatch blocks save
- history is written for changes
- tests cover edge cases

## Stop and ask if
- allocation updates conflict with new-contract rule

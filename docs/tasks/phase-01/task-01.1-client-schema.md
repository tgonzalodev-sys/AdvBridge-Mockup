# Task 01.1 — Client schema

## Objective
Implement the core client hierarchy schema and validation rules.

## Scope
- Prisma models for Group, MotherClient, ChildClient
- subsidiary enum/field on MotherClient
- inherited subsidiary logic for ChildClient via relation
- mandatory field rules
- uniqueness:
  - Madre name unique within subsidiary
  - Madre billing code unique globally
  - Hija incident code unique globally
  - duplicate Hija name blocked under same Madre

## Out of scope
- UI
- history visualization
- contracts

## Acceptance criteria
- Schema represents the hierarchy correctly
- Uniqueness rules are enforceable
- Validation schemas exist

## Stop and ask if
- Naming or relation design collides with future extensibility

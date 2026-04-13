# Task 00.3 — Prisma and shared foundation

## Objective
Create the DB and shared helper foundation used by all later modules.

## Scope
- Set up Prisma with SQLite
- Add initial empty schema and migration workflow
- Create shared helpers:
  - db client
  - result type
  - error helpers
  - money helpers
  - date helpers
- Add Zod setup pattern
- Add module directory conventions

## Out of scope
- Final domain schema
- UI features

## Acceptance criteria
- Prisma works with SQLite
- DB client import pattern exists
- Shared helpers compile
- Basic tests cover shared helpers where practical

## Stop and ask if
- Money representation needs to deviate from Prisma Decimal

# Task 02.2 — Product services and locking

## Objective
Implement product application logic with safe editability rules.

## Scope
- repositories and services
- create/edit/list logic
- similar-name warning support
- rule: once used in contract, only name and category editable
- availability flag behavior

## Out of scope
- contract schema
- UI table

## Acceptance criteria
- Product service layer enforces editability rules
- Tests cover post-usage restrictions

## Stop and ask if
- usage detection needs contract module before a clean implementation is possible

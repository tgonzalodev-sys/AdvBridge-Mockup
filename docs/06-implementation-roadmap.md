# Implementation Roadmap

## Phase 00 — Foundation
- scaffold repo
- configure quality toolchain
- set module structure
- set shared helpers
- prepare Prisma
- prepare test setup

## Phase 01 — Clients
- Grupo / Madre / Hija schema and CRUD
- subsidiary inheritance
- uniqueness rules
- client list and detail
- history storage for client evolution

## Phase 02 — Products
- products and versions
- editability rules
- availability for new contracts
- product CRUD

## Phase 03 — Contracts
- contract header
- contract-product lines
- replacement logic
- discount rules
- contract create/edit/list/detail
- auto-renew behavior

## Phase 04 — License allocation
- line totals
- Hija allocation
- effective-dated license history
- AdvertMind total license summary

## Phase 05 — Billing engine
- billing concepts
- generation rules
- variable placeholders
- recurrence rules
- payment arrangements
- manual billables

## Phase 06 — Billing UI
- yearly matrix
- monthly drawer
- mark invoiced
- incomplete blocking
- multi-currency cell display

## Phase 07 — History and locking
- visible Madre detail history
- lock billed concepts and past periods
- unlock/edit flow
- confirmation popups for dangerous actions

## Phase 08 — Hardening
- empty states
- error/loading states
- E2E flows
- seed/demo data
- release readiness

# Claude Execution Plan

## Goal
Build ACB through small, dependency-aware, testable implementation slices.

## Execution order
1. Phase 00 — Foundation
2. Phase 01 — Clients
3. Phase 02 — Products
4. Phase 03 — Contracts
5. Phase 04 — License allocation
6. Phase 05 — Billing engine
7. Phase 06 — Billing UI
8. Phase 07 — History and locking
9. Phase 08 — Hardening

## Rules for execution
- Execute one task file at a time
- Do not batch multiple tasks into a single giant prompt
- Before each task, Claude should read:
  - `CLAUDE.md`
  - relevant core docs
  - the specific task file
- After each task:
  - run required checks
  - summarize what changed
  - note anything ambiguous before moving on

## Required checks
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
- `pnpm test:e2e` for major workflow changes

## Prompting principle
Give Claude:
- the task file
- the instruction to follow the repo docs as source of truth
- permission to stop and ask if a business rule is ambiguous

## Recommended cadence
- one task at a time
- inspect result
- let Claude fix issues
- only then move to next task

# Task 00.2 — Quality toolchain

## Objective
Set up the quality guardrails before feature work starts.

## Scope
- ESLint
- TypeScript strict mode
- Vitest setup
- Playwright setup skeleton
- useful package scripts:
  - dev
  - build
  - lint
  - typecheck
  - test
  - test:e2e
- basic test example so the toolchain is exercised

## Out of scope
- Business feature tests
- CI

## Acceptance criteria
- `pnpm lint` works
- `pnpm typecheck` works
- `pnpm test` works
- `pnpm build` works

## Stop and ask if
- A dependency seems needed beyond the agreed stack

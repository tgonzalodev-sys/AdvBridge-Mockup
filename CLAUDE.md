# CLAUDE.md

## Purpose
Build and maintain the AdvertMind Commercial Bridge (ACB), an internal web app that gives Admin and Sales visibility into client structure, contracts, product configuration, and billing control.

## Product constraints
- Internal app for a very small number of users
- No authentication in phase 1
- No multi-tenancy
- No invoice management system in phase 1
- No dashboard in phase 1
- No contact management in phase 1
- No invented business rules when requirements are unclear
- Spanish UI, English code

## Tech stack
- Next.js App Router
- TypeScript strict mode
- Prisma
- SQLite in phase 1
- Tailwind + shadcn/ui
- pnpm
- Zod
- Vitest
- Playwright

## Working rules
- Prefer simple, boring, maintainable solutions
- Prefer server components by default
- Prefer server actions for mutations
- Keep business logic out of page components
- Do not access the database from UI components directly
- Use Prisma only, never raw SQL
- All forms validate on both client and server
- All mutations return typed success/error results
- Never silently swallow errors
- Never invent business rules that are not documented
- Ask before adding a dependency
- Ask before changing the domain model in a way that affects business meaning

## File organization rules
- Keep files small and focused
- Split components over ~150 lines when possible
- Put reusable business logic in `/src/modules/*`
- Put schema validation next to the relevant module
- Keep UI presentation separate from domain services

## Required checks before completing any task
Run when relevant:
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm test:e2e` for user-facing workflow changes
- `pnpm build`

## Required implementation pattern
For each task:
1. Read the task file fully
2. Update docs only if behavior changed
3. Add or update Prisma schema if needed
4. Add Zod schemas
5. Add services/repositories
6. Add tests
7. Add UI
8. Run validation commands
9. Summarize what changed and any remaining risks

## Stop and ask when
- A business rule is ambiguous
- A field meaning is unclear
- A workflow creates accounting risk
- A new dependency seems useful but is not approved
- A data migration could break existing records

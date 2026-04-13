# How to Use This With Claude Code

## Short answer
Yes, you should share the docs with Claude Code first. But do not ask it to build everything at once.

## Best way to proceed

### 1. Start a fresh Claude Code session for the project
Tell Claude that the repository docs are the source of truth.

### 2. Put the core docs into the repo first
At minimum:
- `CLAUDE.md`
- all files in `docs/`
- the `docs/tasks/` folder

### 3. First prompt to Claude
Use something like this:

> Read `CLAUDE.md`, `docs/00-product-requirements.md`, `docs/01-domain-and-business-rules.md`, `docs/02-operational-workflows.md`, `docs/07-final-decisions-and-edge-cases.md`, and `docs/tasks/README.md`.
> Then read `docs/tasks/phase-00/task-00.1-repo-bootstrap.md`.
> Follow the task exactly, do not invent business rules, run the required checks, and summarize what changed plus any ambiguities before moving on.

### 4. Then proceed task by task
After Claude finishes a task:
- review the result
- ask it to fix anything you see
- once clean, move to the next task file

### 5. Do not jump phases
The tasks are dependency-aware. Later phases assume earlier ones exist.

## What to give Claude every time
For each new task, tell Claude to:
- re-read `CLAUDE.md`
- re-read the specific task file
- use the docs as source of truth
- stop if something is ambiguous
- run checks before finishing

## Recommended working pattern
For each task:
1. Ask Claude to read the task
2. Ask it to implement only that task
3. Ask it to run checks
4. Ask it to explain:
   - what changed
   - what tests were added
   - any assumptions
5. Only then continue

## What not to do
- Do not say "build the whole app"
- Do not give Claude multiple major tasks in one prompt
- Do not let it invent unresolved business behavior
- Do not skip validation commands

## Good follow-up prompt after each task
> Review your own work against the task acceptance criteria and the repo docs. Fix anything that does not comply. Then rerun checks and summarize the final state.

## If Claude gets confused
Tell it:
> Do not guess. Point to the exact ambiguity and stop.

## If Claude proposes architecture changes
Only accept them if:
- they do not conflict with the docs
- they keep the app simple
- they do not expand scope
- they do not weaken data safety

## Suggested first three tasks
1. `docs/tasks/phase-00/task-00.1-repo-bootstrap.md`
2. `docs/tasks/phase-00/task-00.2-quality-toolchain.md`
3. `docs/tasks/phase-00/task-00.3-prisma-and-shared-foundation.md`

## Practical answer to your question
Yes:
- share the files
- tell Claude to read the core docs first
- then point it to the first task file
- let it complete only that task
- review
- continue to the next task

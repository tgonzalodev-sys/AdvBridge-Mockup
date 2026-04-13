# Tasks README

## How tasks are organized
Tasks are split by phase, then by small implementation slices.

## Execution rule
Run one task at a time, in file order.

## Before each task
Claude should read:
- `/CLAUDE.md`
- the relevant docs in `/docs`
- the task file itself

## After each task
Claude should:
- run required checks
- summarize changes
- note ambiguities or risks
- stop before moving to the next task unless instructed

## Task groups
- `phase-00/*`
- `phase-01/*`
- `phase-02/*`
- `phase-03/*`
- `phase-04/*`
- `phase-05/*`
- `phase-06/*`
- `phase-07/*`
- `phase-08/*`

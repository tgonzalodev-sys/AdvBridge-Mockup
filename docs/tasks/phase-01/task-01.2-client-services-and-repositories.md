# Task 01.2 — Client services and repositories

## Objective
Add the application layer for creating, updating, and retrieving Grupo/Madre/Hija records.

## Scope
- repositories for Group, MotherClient, ChildClient
- services for create/edit/list/detail
- duplicate checks with warning/block behavior support
- subsidiary immutability for Madre after creation
- create-Hija-after-Madre pattern

## Out of scope
- UI
- contracts
- advanced history UI

## Acceptance criteria
- Services support main client flows
- Business rules are centralized outside UI
- Tests cover critical create/edit rules

## Stop and ask if
- Warning-vs-block behavior needs UI-specific coupling

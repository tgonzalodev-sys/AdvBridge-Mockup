# Data Model Guidelines

## General
- Prisma is the schema source of truth
- Every record includes `createdAt` and `updatedAt`
- Use enums for constrained values
- Avoid destructive deletes when historical meaning exists

## Money
- Use Prisma Decimal consistently
- Keep amount and currency together
- No automatic FX conversion

## Suggested entity set
- Group
- MotherClient
- ChildClient
- Product
- ProductVersion
- Contract
- ContractProductLine
- ContractReplacementLink
- LicenseAllocation
- LicenseAllocationHistory
- BillingConcept
- BillingConceptRecurrenceRule
- HistoryEvent / ChangeSnapshot

## Notes
- Subsidiary belongs on MotherClient
- Hija, Contract, BillingConcept inherit through relations rather than free text
- Consider computed summary helpers for AdvertMind license totals
- Use snapshots/history tables for contract evolution and critical commercial changes

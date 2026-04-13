# Final Decisions and Edge Cases

## Contracts
- Future-dated contracts appear in projections
- Mid-month start/end billing is manually decided by Admin
- Same-product overlapping contracts warn and block save
- Auto-renew happens automatically and is visible for review
- Real commercial changes create new contract; mistake corrections edit existing contract

## Discounts
- Mid-period discount ending is manually decided by Admin
- Remaining discount continues if the other expires
- Fixed contract-level discount only when contract is single currency

## Licenses
- Hija allocation must equal total line licenses
- No-Hija case means Madre is the only allocation target
- New Hija added later does not auto-change existing contracts

## Billing periods
- Bimonthly/quarterly arrangements generate a line only in the billing month
- Empty variable placeholders warn but do not by themselves auto-fill
- Full-month invoiced mark is blocked if any mandatory billable line is incomplete
- Partially billed Madre-month is still pending

## Manual billables
- Recurrence rule change affects future periods only
- Manual billable may exist without a contract link

## History visibility
- Phase 1 visible history is shown in Madre detail only

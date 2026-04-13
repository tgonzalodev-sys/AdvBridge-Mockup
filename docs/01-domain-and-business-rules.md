# Domain and Business Rules

## Hierarchy
Three levels:
- Grupo
- Cliente Madre
- Cliente Hija

Rules:
- Madre may exist without Grupo
- Madre may exist without Hijas
- Hija cannot exist without Madre
- Madre can have many Hijas
- Hija belongs to exactly one Madre
- No more than three levels are expected

## Subsidiary model
Allowed values:
- Advertmind SA
- EuroAdvertmind SL

Rules:
- Grupo does not belong to a subsidiary
- Madre belongs to exactly one subsidiary
- Hija inherits subsidiary from Madre
- Contracts inherit subsidiary from Madre
- Billing concepts inherit subsidiary from Madre through contract/client context
- A Grupo may contain Madres from both subsidiaries
- Users should normally work on one subsidiary at a time
- Same Madre name may exist in different subsidiaries
- Duplicate Madre names are blocked only within the same subsidiary

## Madre / Hija fields
### Madre mandatory
- name
- country
- subsidiary
- advertmindBillingClientCode

### Hija mandatory
- name
- advertmindIncidentClientCode

### Codes
- Madre billing code is unique across all Madres
- Hija incident code is unique across all Hijas
- Both may be edited later
- Code changes must be historically tracked

## Statuses
### Madre / Hija
- active
- solo_consulta
- inactive

### solo_consulta meaning
No longer paying recurring monthly fee, but may still pay annual or limited-access charges.

## Product catalog
A product is a sellable item. It can represent:
- software
- services
- other sellable items

Rules:
- Unified product catalog
- Product names unique
- Similar names warn
- Product code not needed
- Versions belong to the product as a simple list of names
- If product has no versions, contract line shows no version field
- Product categories:
  - SkyOne
  - AdvertMind
  - Services
  - Briff
- Product has flags:
  - hasInitialFee
  - hasFixedMonthlyFee
  - hasVariableMonthlyFee
  - usesLicenses
  - availableForNewContracts
- Once used in contracts, only name and category remain editable
- Not available for new contracts still remains visible for existing contracts

## Contract model
A contract is both:
- formal/legal agreement
- commercial billing configuration

Rules:
- Contracts live at Madre level only
- A Madre may have multiple active contracts if they cover different products
- Contracts for the same Madre may not overlap on the same product
- Contract header contains:
  - madre
  - label
  - startDate
  - endDate
  - autoRenew
  - notes
  - billingObservations
  - contract-level discount
- Contracts do not have a manual status field
- Lifecycle is derived from dates
- Future contracts may exist
- Auto-renew extends the same contract and logs a renewal event
- Correction of mistakes edits existing contract
- Real commercial changes create a new contract
- New contract explicitly references the contract it replaces
- Contract list should default to current/future, with a history toggle

## Contract-product lines
Each line represents:
- one product
- one version if applicable
- one currency
- one Madre scope

Rules:
- For one Madre, one product uses one currency only
- Supported currencies: ARS, USD, EUR
- Version required only when product has versions
- Version change requires new contract
- Product line scope:
  - Madre only
  - Madre + Hijas
- Cannot apply commercially to only some Hijas
- Hija license allocation is operational allocation, not commercial scope segmentation
- Product line fields, when enabled, must be completed even if value is 0:
  - initialFeeAmount
  - fixedMonthlyFeeAmount
  - variableMonthlyFeeAmount
  - variableFeeDescription
  - currency
  - licenseQuantity
  - notes
- Product-line discount may be percentage or fixed amount
- Product-line discount may have end date
- Discount order:
  1. apply product-line discount
  2. apply contract-level discount
- If one discount expires earlier, the remaining discount continues alone
- Price change => new contract
- License quantity change => new contract
- License changes still need effective-dated history
- If no Hijas exist, Madre behaves as the only allocation target
- Hija allocation total must match line total or save is blocked

## Contract-level discount
- Percentage allowed always
- Fixed amount allowed only when all contract lines are in the same currency

## Billing concepts
A billing concept is both:
- a planned billable item
- an invoiceable control line for a billing period

Sources:
- fixed recurring fee
- variable placeholder / actual
- manual non-product items
- annual/manual items

Important rules:
- Separate by currency first
- Each billing concept is one line
- Only show relevant lines that have data for the client
- Initial fees are not auto-generated in phase 1
- Initial fee on contract line is reference only
- Admin schedules initial fees manually in billing
- Fixed recurring fees generate automatically while contract is active
- Payment arrangement belongs to the contract-product line
- Billing may override payment arrangement in extraordinary cases
- Alternative arrangements like bimonthly/quarterly generate one line only in the billing month
- Variable placeholders generate automatically
- Variable actual amount is entered month by month
- Variable placeholder left empty warns but does not automatically block the line itself
- Full Madre-month invoiced mark is blocked if any mandatory line is incomplete
- Billing concept statuses:
  - pending
  - billed
  - cancelled
- Billed concepts are locked by default
- Past months are locked by default but can be unlocked and edited
- A Madre-month with some billed lines and some pending lines is still considered pending

## Non-product billables
- Managed from billing layer, not from contract structure
- Can be one-time or recurring
- Valid without a linked contract
- Main expected early use: banking charges

## History and safety
- Show current values in main UI
- Visible history in phase 1 mainly in Madre detail
- Visible history should emphasize:
  - old value
  - new value
  - commercial evolution such as license and price changes
- No user tracking in phase 1
- No mandatory change reasons in phase 1

## Deletion / archive rules
- Madre with contracts or billing history => archive, not hard delete
- Product used in contracts => hard delete blocked
- Contract with generated billing or history => hard delete only if nothing operational happened yet
- Billing concept => delete if pending, cancel if not pending

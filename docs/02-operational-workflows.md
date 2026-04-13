# Operational Workflows

## Main navigation
- Clients
- Products
- Contracts
- Billing

## Clients
### Main list
- Primary view: table
- Default rows: one Madre per row
- Optional inline expansion for Hijas
- Filters:
  - subsidiary
  - country
  - group
  - status
- Search:
  - madre
  - hija
  - group
  - tax ID
  - AdvertMind codes

### Madre row columns
- subsidiary
- group
- madre name
- country
- status
- AdvertMind billing code
- number of Hijas
- total AdvertMind licenses across the Madre structure
- quick action to detail

### Madre detail
- current Madre data
- list of Hijas
- small commercial summary
- history access

### Create flow
- Create Madre first
- Add Hijas after Madre exists
- Hija may also be created during contract flow when needed

## Products
### Main list
Columns:
- product name
- category
- versions summary
- uses licenses
- enabled fee components
- available for new contracts

### Versions
- simple list of version names
- no version field on contract line if product has no versions

### Availability
- editable directly in the table

## Contracts
### Main list
- one row per contract
- work within one subsidiary context at a time
- default current/future
- history toggle available

Columns:
- contract label
- Madre
- Grupo
- subsidiary
- start date
- end date
- auto-renew
- number of product lines
- lifecycle
- detail action

### Create contract flow
1. Select Madre
2. Enter contract header
3. Add product lines
4. Review and save

### Product line entry
- behave like structured grid
- separate popup/modal for Hija license allocation
- if scope is Madre only, hide Hija allocation completely

### Replacement
- user explicitly selects the earlier contract being replaced

## Billing
### Main view
- spreadsheet-like yearly matrix
- rows: Madre
- columns: months
- top controls:
  - subsidiary selector
  - year selector
  - filters:
    - country
    - group
    - madre
    - currency
    - status

### Cell behavior
Each Madre-month cell shows:
- expected total
- warning indicator if relevant
- invoiced indicator if relevant
- mini totals by currency when multiple currencies exist

### Monthly detail drawer
Shows all billing concepts for Madre + month, separated by currency.

Actions:
- fill variable amount
- edit pending amount
- add manual billable
- remove pending manual billable
- mark line invoiced
- mark full Madre-month invoiced

Default invoiced action:
- full Madre-month
- line-level still available

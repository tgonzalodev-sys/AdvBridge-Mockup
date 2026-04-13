# Future Extensibility and Views

## Core principle
The app is built around one shared hierarchical core:
- Grupo
- Madre
- Hija

## Future module expansion
Future departments may add their own modules, including Customer Success.

Rules:
- Each module owns its own fields and tables
- Module data links to Madre and/or Hija
- Do not overload base core entities with unrelated department fields
- Do not assume future department ownership at contract or product level

## Future permission direction
The structure should support:
- module-level visibility/edit control
- section-level visibility/edit control

Do not build field-level permissions in phase 1, but do not block them later.

## Future views
Later the app may support:
- different screens for different departments
- same screens with different visible sections
- both approaches

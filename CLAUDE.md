# CLAUDE.md — Claude Code Instructions for refi-med-os

This workspace is the **ReFi Mediterranean** organizational OS instance —
operational hub for regenerative-finance coordination across the Mediterranean
bioregion.

## Quick Start

**Read `MASTERPLAN.md` first.** Then follow the startup sequence in
`AGENTS.md`:

1. `SOUL.md` — values, mission, voice, boundaries
2. `IDENTITY.md` — org identity, governance infra, federation
3. `USER.md` — operator profile
4. `MEMORY.md` — key decisions, active context
5. `memory/YYYY-MM-DD.md` — latest daily log
6. `HEARTBEAT.md` — active tasks (check urgency!)
7. `TOOLS.md` — endpoints, addresses, channels
8. `federation.yaml` — network peers and integrations

## What This Workspace Is

- Operational instance of `organizational-os-framework@3.0`
- Federated peer of `refi-dao-os`, `refi-bcn-os`, `regen-coordination-os`
- Hosts the ReFi Mediterranean website + knowledge base under
  `repos/refi-mediterranean/` (independent git remote at
  `ReFiDAO/ReFi-Mediterranean`)

## Key Rules

- **Source of truth:** `data/*.yaml` for structured data, `MEMORY.md` for decisions
- **After data changes:** Run `npm run generate:schemas && npm run validate:schemas`
- **Memory:** Write daily logs to `memory/YYYY-MM-DD.md` (append, never overwrite)
- **Safety:** Draft-and-present for external actions (Telegram, GitHub PRs,
  treasury txs). Never send without operator approval.
- **Bootstrap incomplete:** Identity files contain "TBD via bootstrap
  interview" markers. The first `/initialize` should detect these and offer
  the bootstrap-interviewer flow.

## Session Lifecycle

Use `/initialize` to start a session (renders dashboard, loads context) and
`/close` to end it (writes memory, commits, pushes). Behavior governed by the
`org-os-init` skill in `skills/org-os-init/`.

## Common Tasks

```bash
npm run initialize          # Gather org state (JSON)
npm run initialize:markdown # Pre-rendered dashboard
npm run setup               # Interactive bootstrap wizard
npm run generate:schemas    # Regenerate EIP-4824 schemas
npm run validate:schemas    # Validate schema compliance
npm run validate:structure  # Check instance against canonical spec
npm run clone:repos         # Re-hydrate repos/refi-mediterranean
```

## Linked Repository

- `repos/refi-mediterranean/` — `ReFiDAO/ReFi-Mediterranean` (Quartz site, public).
  Not tracked by this repo; rehydrate after fresh clone with `npm run clone:repos`.

## Federation

- **Network:** `refi-dao` (primary), `regen-coordination` (via refi-dao)
- **Hub:** `github.com/ReFiDAO`
- **Upstream framework:** `regen-coordination/organizational-os-framework@3.0`

# BOOTSTRAP.md — First-Run Setup

This file walks the operator through finishing the org-os bootstrap that the
maintainer started when scaffolding `refi-med-os`. It's safe to delete this
file once the steps are complete — the work persists in `MEMORY.md` /
`memory/`.

## What's already done

- `refi-med-os` directory exists with the canonical org-os v3.0 layout
- `repos/refi-mediterranean/` is mounted (clone of `ReFiDAO/ReFi-Mediterranean`)
- Identity files exist as **template stubs** marked "TBD via bootstrap interview"
- The instance is registered in the framework hub (`organizational-os-framework`)

## What needs to happen

### 1. Open a session

```bash
cd refi-med-os
```

In your agent (Claude Code, Codex, Cursor):

```
/initialize
```

The agent should detect "TBD via bootstrap interview" markers in `SOUL.md`,
`IDENTITY.md`, `USER.md` and offer to run the bootstrap interview.

### 2. Complete the interview

The `bootstrap-interviewer` skill (in `skills/bootstrap-interviewer/`) will
ask about:

- **Identity** — full mission statement, theory of change, values, voice
- **Operators** — who runs this instance day-to-day
- **Founding circle** — members + their nodes (Barcelona, Provence, etc.)
- **Federation** — confirm peers + trust levels
- **Comms** — Telegram, Discord, mailing list — whatever's in use
- **Treasury** — chain, Safe address, signers
- **Projects** — active workstreams (forming a node, running a call, …)

Answers are written into `SOUL.md`, `IDENTITY.md`, `USER.md`,
`data/members.yaml`, `data/projects.yaml`, `data/channels.yaml`,
`data/governance.yaml`, and `federation.yaml`.

### 3. Generate schemas

```bash
npm run generate:schemas
npm run validate:schemas
npm run validate:structure
```

All three should pass.

### 4. Commit + push

`/close` will write a memory entry, commit, and offer to push.

### 5. Hand off to peer instances

Tell the maintainers of `refi-dao-os`, `refi-bcn-os`, and
`regen-coordination-os` to add `refi-med-os` to their `federation.yaml peers:`
list.

## Stuck?

The one-pager (shared separately) walks through this with screenshots. If
something fails, check `npm run validate:structure` output — it tells you
exactly which files are missing or malformed.

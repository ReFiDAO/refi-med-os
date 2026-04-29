# AGENTS.md — Agent Operating Manual for refi-med-os

This file tells any AI agent (Claude Code, Codex, Cursor, etc.) how to operate
inside the `refi-med-os` workspace.

## Startup Sequence

When a session begins (or when `/initialize` is invoked), read these files in
order:

1. `SOUL.md` — values, mission, voice, boundaries
2. `IDENTITY.md` — org identity, governance infra, federation
3. `USER.md` — operator profile and preferences
4. `MEMORY.md` — key decisions, active context
5. `memory/YYYY-MM-DD.md` — latest daily log (most recent first)
6. `HEARTBEAT.md` — active tasks (check urgency!)
7. `TOOLS.md` — endpoints, addresses, channels
8. `federation.yaml` — network peers and integrations
9. `dashboard.yaml` — what `/initialize` should render

## Session Lifecycle

- **`/initialize`** → run `node scripts/initialize.mjs --format=markdown`,
  print the dashboard, then transition to planning the operator's chosen task.
- **`/close`** → write a daily memory entry, mark completed tasks in
  `HEARTBEAT.md`, commit, push.

The session-lifecycle behavior is governed by the `org-os-init` skill bundled
in `skills/org-os-init/`.

## Bootstrap (first run)

This instance was scaffolded on 2026-04-28 from
`organizational-os-framework@3.0`. The bootstrap interview is owned by the
`bootstrap-interviewer` skill in `skills/bootstrap-interviewer/`. On first
`/initialize`, the agent should:

1. Detect that identity files are template stubs (look for "TBD via bootstrap interview")
2. Offer to run the interview
3. On completion, update `SOUL.md`, `IDENTITY.md`, `USER.md`, `data/members.yaml`,
   `data/projects.yaml`, `data/channels.yaml`, `federation.yaml`
4. Run `npm run generate:schemas` to materialize `.well-known/`
5. Commit a "bootstrap" memory entry

## Autonomy Matrix

| Action | Autonomy |
|--------|----------|
| Read files in this workspace | Full |
| Edit `data/*.yaml`, `memory/*.md`, `HEARTBEAT.md` | Full |
| Edit `SOUL.md`, `IDENTITY.md`, `USER.md` | Confirm with operator first |
| Run `npm run generate:schemas`, `validate:*` | Full |
| `git commit` (in this repo) | Full at session close |
| `git push` | Confirm with operator |
| External actions (sending messages, treasury txs, posts) | **Always draft-and-present**, never auto-send |

## Safety

- **Draft-and-present:** Any external-facing action (Telegram, GitHub
  comments/PRs, treasury txs, public posts) must be drafted and shown to the
  operator before sending. Never auto-send.
- **Memory is append-only.** Never rewrite a past `memory/` daily log.
- **Federation peers are read-only by default** unless `trust: read-write` is
  set in `federation.yaml`.

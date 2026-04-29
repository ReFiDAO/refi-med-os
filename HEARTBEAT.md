# HEARTBEAT.md — Active Tasks & System Health

> Living checklist of what needs doing. Mark items complete as you go (`[x]`).
> Append-only by convention; archive completed items quarterly.

## Bootstrap

- [ ] Run `/initialize` and complete the bootstrap interview (identity, mission, values)
- [ ] Fill in `data/members.yaml` with the founding circle
- [ ] Fill in `data/projects.yaml` with active workstreams
- [ ] Fill in `data/channels.yaml` with comms platforms (Telegram, Discord, etc.)
- [ ] Confirm or set `federation.yaml identity.chain` + `safe` + `daoURI`
- [ ] Run `npm run generate:schemas` after data is populated
- [ ] Run `npm run validate:schemas && npm run validate:structure` — all green
- [ ] Decide treasury location (chain + Safe address) and record in `IDENTITY.md`

## Active Projects

_(Populate after bootstrap interview — projects.yaml is source of truth.)_

## Reminders

- After any `data/` change → `npm run generate:schemas && npm run validate:schemas`
- Daily session notes go in `memory/YYYY-MM-DD.md` — append, never overwrite
- Federation peers list is in `federation.yaml`; reflect changes in `data/relationships.yaml`

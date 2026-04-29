# Linked Repositories

This directory hosts external repos that the ReFi Mediterranean instance
operates against. Contents are **not tracked** by `refi-med-os` (see
`.gitignore`); each sub-folder retains its own independent git remote and
history.

To rehydrate after a fresh clone:

```bash
npm run clone:repos
```

Source of truth: `repos.manifest.json` at the instance root.

## Current entries

- `refi-mediterranean/` — `https://github.com/ReFiDAO/ReFi-Mediterranean`
  Quartz-based website + knowledge base for the Mediterranean coordination.
  Mounted as the instance's primary knowledge surface (`knowledge → repos/refi-mediterranean/content`).

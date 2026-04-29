# refi-med-os

**ReFi Mediterranean — Organizational OS instance.**

Operational hub for the regenerative-finance coordination across the
Mediterranean bioregion. Federated peer of `refi-dao-os`, `refi-bcn-os`, and
`regen-coordination-os`.

This is an instance of
[`organizational-os-framework`](https://github.com/regen-coordination/organizational-os-framework)
v3.0 — an agent-native, EIP-4824-compatible operational workspace template.

## Public surface

The public-facing website + knowledge base lives at a separate repo:
[`ReFiDAO/ReFi-Mediterranean`](https://github.com/ReFiDAO/ReFi-Mediterranean).
It's mounted under `repos/refi-mediterranean/` for local operation.

## Quick start (operator)

```bash
git clone https://github.com/ReFiDAO/refi-med-os.git
cd refi-med-os
npm install
npm run clone:repos       # rehydrate repos/refi-mediterranean/
npm run initialize:markdown
```

Then follow the bootstrap one-pager (provided separately) to complete the
identity interview.

## Status

Bootstrap. Identity, members, governance, treasury, and projects are
unpopulated — the bootstrap interview fills them in.

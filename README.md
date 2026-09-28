# KARETA Tunnel

Recovery and release-control repository for the tunnel transport layer.

## What is actually recovered

The recovered package contains **release artifacts and supply-chain metadata**, not the original `tunnel-client` source tree.

Recovered Windows artifact set:

- `tunnel-client v0.0.15` — 22,523,904 bytes, SHA-256 pinned in `release/recovered-artifacts.json`;
- SPDX SBOM and license report — hashes pinned;
- `cloudflared 2026.8.2` — recovered binary hash and upstream manifest pinned.

The original executable files are intentionally **not committed** to Git.

## Upstream status

The recovered cloudflared pin is 2026.8.2. The latest upstream release observed during the 2026-09-29 audit is **2026.9.3**, published 2026-09-24. An upgrade must be rebuilt and verified; changing only the version string is not acceptable.

## Repository invariants

`npm run verify` and CI enforce:

- no `.exe`, `.dll`, installers, archives or build/bin/dist directories in source Git;
- valid cloudflared release metadata;
- valid SHA-256/size records for recovered artifacts;
- source/release metadata remain separate.

## Next recovery target

Recover the actual `tunnel-client v0.0.15` Go source and build definition. Until then this repository is a supply-chain/recovery index, not a complete reproducible source repository.

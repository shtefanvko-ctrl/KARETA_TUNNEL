# KARETA Tunnel

Transport/distribution layer used for remote access experiments.

## Recovered artifact state

The recovered package contains **release binaries and SBOM/license metadata**, not the original tunnel-client source tree:

- `tunnel-client.exe` — v0.0.15 Windows amd64 artifact
- `cloudflared.exe`
- Cloudflare manifest
- SPDX SBOM
- license report / LICENSE / NOTICE

Large executable binaries are intentionally **not committed to Git source**.

## Cloudflared baseline

Recovered manifest records Cloudflared **2026.8.2**, release commit `733bfb939963e150dcf5c4faddb1603f744fbc98`.

## Repository rule

This repository should contain source, build/release metadata and reproducible packaging scripts. Executables belong in GitHub Releases or another artifact store, not in the normal Git tree.

The original source for `tunnel-client v0.0.15` has not yet been recovered, so this repository is currently a recovery/index baseline rather than a complete buildable source repository.

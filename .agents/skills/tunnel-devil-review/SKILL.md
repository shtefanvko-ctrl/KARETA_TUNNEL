---
name: tunnel-devil-review
description: Adversarially review tunnel provenance and recovery changes.
version: 1.0.0
---
Look for version-string-only upgrades, hash substitution, mismatched OS/arch, unofficial assets, reconstructed source presented as recovered, binary leakage into Git, missing licenses/SBOM and secrets. Return PASS, PASS_WITH_RISKS or BLOCK.

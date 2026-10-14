---
name: tunnel-upstream-release-audit
description: Audit a cloudflared or tunnel-client upstream release before changing pinned runtime metadata.
version: 1.0.0
---
Verify official tag/release commit, publication, target OS/arch, source/runtime asset and checksums. Do not infer binary equivalence from matching version strings. Record old/new pin and rollback.

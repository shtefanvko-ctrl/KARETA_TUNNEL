# Upstream provenance

## tunnel-client

Recovered binary build info:

- Go toolchain: `go1.27.0`
- package: `github.com/openai/tunnel-client/cmd/client`
- module: `github.com/openai/tunnel-client (devel)`
- target: `windows/amd64`
- CGO: disabled
- trimpath: enabled

Official upstream release:

- repository: `openai/tunnel-client`
- tag: `v0.0.15`
- annotated tag object: `f34e8247f17fc964deeac25aead143f6640224cc`
- release commit: `a390c168ff1b2d14e73a95991c186c6aba3ff5a0`
- published: 2026-09-25
- official Windows/amd64 ZIP SHA-256: `3b53133a1e24d43f63088d843860cb1701a4c3ed6390de2e19f69089e43bddc1`
- official runtime source tar SHA-256: `98a9ca7036b5cda0626255346a209987fec445e4e0b612b27f4a873aeff4ef2e`

The recovered SPDX SBOM and license report match the official v0.0.15 release asset digests exactly:

- SPDX: `a2dac32715b3f5c31039ceba61e2794fcdf7a3ca0dd00fcb90eb86445d83a1df`
- licenses: `9b9132caf4971379fa24dae57ca75a9f2ec5571dc8b2a90e7fab71c791b42c17`

## Exact binary verification

**VERIFIED 2026-09-30.**

GitHub Actions run `36638694589` downloaded the official `tunnel-client-v0.0.15-windows-amd64.zip`, verified the ZIP SHA-256 `3b53133a1e24d43f63088d843860cb1701a4c3ed6390de2e19f69089e43bddc1`, extracted `tunnel-client.exe`, and compared it to the recovered binary contract.

Result:
- size: `22,523,904` bytes — exact match;
- SHA-256: `1946de55a038313a9b9b2458d05fe1719fa9cf1f20a94dd5f38fc26a98bfdd42` — exact match.

Therefore the recovered standalone executable is byte-for-byte identical to the executable shipped in the official OpenAI v0.0.15 Windows/amd64 release asset.

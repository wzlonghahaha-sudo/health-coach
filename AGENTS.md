# AGENTS.md — Health Coach

Guidance for humans and coding agents working in this repository.

## Project purpose

**Health Coach** is a personal application (not a public product). This repo holds the **static web pages** used for OAuth verification and privacy disclosure:

- `index.html` — short description of the app and link to the privacy policy
- `privacy.html` — privacy policy (Google Health / Fitbit read-only access, limited use)

There is no application server, build step, or bundled JavaScript in this repository. Runtime behavior is serving these HTML files as-is.

## Directory layout

```
.
├── AGENTS.md              # This file
├── .cursor/
│   └── environment.json   # Cursor Cloud Agent install (and build-time test)
├── index.html             # Public landing page
├── privacy.html           # Privacy policy
├── package.json           # npm scripts (tests only; no runtime dependencies)
└── tests/
    └── smoke.test.mjs     # Offline HTML smoke tests
```

## Install

Requires **Node.js 18+** (built-in `node:test` runner).

```bash
npm install
```

There are no npm dependencies; `npm install` only records the lockfile for reproducible Cloud Agent builds.

## Run tests (one command)

```bash
npm test
```

Runs offline smoke tests that read `index.html` and `privacy.html` from disk and assert required titles, links, and policy phrases. No network, secrets, or health data are used.

## Code style

- Keep HTML **valid**, **minimal**, and **accessible** (semantic headings, `lang="en"`, viewport meta).
- Prefer inline styles only as already used; do not introduce a bundler or framework unless the project scope changes.
- Copy edits should stay accurate for Google API Services Limited Use and the owner-only nature of the app.
- Small, focused diffs; do not refactor unrelated markup.

## Hard rules

1. **Never commit personal health data** (Fitbit exports, summaries, metrics, screenshots of health apps, etc.).
2. **Never commit secrets**: API keys, OAuth client secrets, tokens, `.env` files, or private credentials.
3. **Never add `.env` or similar** to the repo; use Cursor Secrets or local-only files ignored by git.
4. **Do not change runtime behavior** unless the task explicitly asks for it (this repo is static HTML).
5. **Do not log or paste** owner email or health details into issues, commits, or agent transcripts beyond what is already public on these pages.

## Definition of done

- [ ] Change matches the requested scope (no drive-by refactors).
- [ ] `npm test` passes locally.
- [ ] No secrets, `.env`, or health data in the diff.
- [ ] HTML remains truthful for OAuth / privacy review.
- [ ] PR description states what changed and why.

## Cursor Cloud specific instructions

- Cloud Agent **install** (`.cursor/environment.json`): `npm install && npm test` — prepares the repo and runs smoke tests during environment builds.
- For verification while coding, run **`npm test`** (same as CI-style check).
- No `start` command or dev server is required; there is nothing to boot beyond optional static file preview.
- If you need a browser check, serve the repo root with any static server (e.g. `python3 -m http.server`) — not required for merge if tests pass.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Tailwind

- This repo uses Tailwind v4.
- Do not invent Tailwind directives or syntax.

## Required checks
After editing any CSS, Tailwind config, or theme logic:

- pnpm exec biome format --write src/app/globals.css
- pnpm run lint
- pnpm run typecheck

## Completion criteria
- Do NOT commit if any checks fail.
- Fix errors instead of bypassing them.
# Zen Crest Realty — agent instructions

Read this before doing anything in this repository.

## What this is

A single-page marketing site for Zen Crest Realty, a new real estate firm in
Bengaluru, India. Two partners. Residential, commercial and vacant plots; sale
and rent. Audience: first-time homebuyers, investors, NRIs, tenants.

The site's only job is to look credible when someone Googles the business name.

There are **no property listings** and **no CMS**. All copy and data live in
`src/data/content.json`. English only.

## Stack

Astro + Tailwind CSS. Deployed to Cloudflare Workers (static assets). Contact form posts to
Web3Forms. No backend, no database, no client-side UI framework.

Deployment is configured in wrangler.jsonc as an assets-only Worker serving dist. Do not install the Astro Cloudflare adapter and do not modify this file. 

## Page structure

Single page, anchor navigation, sections in this order:

Hero → Services → Who We Help → Areas We Cover → How We Work → About → Contact → Footer

## Design tokens

Derived from the company logo in `src/assets/brand/`.

| Token    | Hex     | Use                             |
| -------- | ------- | ------------------------------- |
| navy-900 | #0E1E3F | Primary text, footer background |
| navy-700 | #1B3260 | Headings                        |
| gold-600 | #B4881B | Accent, rules, active states    |
| gold-100 | #F2E3BF | Tint fills                      |
| paper    | #FAF9F6 | Page background                 |
| ink-500  | #5A5F6B | Body text                       |

Display face: Cormorant Garamond 600, for the wordmark and section headings.
Body face: Inter 400/500. Both self-hosted via `@fontsource`, latin subset only.
Never load fonts from a Google Fonts `<link>`.

## Hard constraints

- Ship as little JavaScript as possible. Visitors bounce on slow sites.
- Every image: WebP, explicit `width`/`height`, lazy below the fold.
- Mobile-first. The site must work at 360px width.
- Visible keyboard focus on every interactive element.
- Respect `prefers-reduced-motion`.
- No lorem ipsum in committed code. Use real copy, or a `TODO:` string in
  `content.json` describing what is needed.
- No copy hardcoded in `.astro` files. Everything reads from `content.json`.
- No Google Maps embed — it costs roughly 500KB and adds third-party cookies.
- Secrets go in environment variables, never in committed source.

## Working rules

- Do only the phase you are given. Do not scaffold ahead or build sections that
  were not asked for.
- List the files you intend to touch before editing them.
- When finished, print the phase's Definition of Done and state pass or fail per
  item. Do not report a check as passing unless you actually ran it.
- Do not run `git commit`, `git push`, or any other git write command. Git is
  handled manually in a separate terminal.
- Do not invent business details. Phone numbers, addresses, partner names and
  bios come from the owner only.

## Development

When starting the dev server, use background mode so the terminal stays free:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and
`astro dev logs`.

Run `npm run build` before declaring any phase complete. A working dev server
does not prove a working build.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)

Nav wordmark — resolved. Sub-line "REALTY" is gold-600 on paper, 3.08:1. WCAG 1.4.3 logotype exemption applies. Confirmed as established brand identity with Chetan and Harsha, 20 Aug 2026. Not to be changed; do not re-flag in accessibility sweeps. (Commit a517452 records this as pending — superseded by this note.)
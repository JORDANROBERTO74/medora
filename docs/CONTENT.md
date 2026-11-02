# Content corpus

Study content comes from the trimmed Pulso corpus. The data is copied verbatim (except
the intentional trim) and is **not edited by hand**.

## Layers

| Layer | Files | Contract |
| --- | --- | --- |
| Notes (topics) | `data/medical/<specialty>/<NN>-<slug>.json` | schema v2, one `ampliacion` section with blocks |
| Reading | `data/medical/<specialty>/lectura.json` | 95 chapters (4 specialties) |
| Summary | `data/medical/<specialty>/resumen.json` | 147 chapters (4 specialties) |
| Review | `data/medical/repaso/repaso.json` | 17 chapters |
| Images | `public/{lectura,resumen,repaso}/<specialty>/*.webp` | 258 files, 235 referenced |

What the trim removed: the `original` OCR section, updates, references, concordance,
citations/sources, questions and the `medic-grado` pipeline artifacts. See
`data/medical/README.md` for the exact contract.

## Slugs

The corpus keeps Spanish ids and filenames. Public URLs use **English slugs** through
`src/lib/content/slugs.ts` (`CONTENT_SLUGS`): 13 specialties, 52 topics and 259 reading
chapters, including duplicates (one Spanish slug can be shared across layers).

- `src/lib/content.ts` holds the client-visible metadata (12 clinical specialties, 51
  topics; `institucional` is excluded).
- `src/lib/content/corpus.ts` resolves English slugs back to corpus files (server-only:
  it uses `fs`).
- `src/lib/content/slugs.test.ts` fails if a slug is missing, duplicated within its
  namespace, not url-safe, or if the client metadata drifts from the corpus.

When new content is added, extend the map and run the tests.

## Routes

| Route | Content |
| --- | --- |
| `/dashboard/topics/[specialty]` | Topic list from the client metadata |
| `/dashboard/lesson/[specialty]/[topic]` | Blocks rendered with `react-markdown` + `remark-gfm` |
| `/dashboard/reading` | Reading index (4 specialties + Repaso) |
| `/dashboard/reading/[specialty]/lectura` · `/resumen` | Chapter list (95 / 147) |
| `/dashboard/reading/[specialty]/[layer]/[chapter]` | Chapter with images and prev/next |
| `/dashboard/reading/repaso` · `/repaso/[chapter]` | Review chapters |

## Regenerating

`scripts/copy-pulso-corpus.mjs` copies from the Pulso repo (absolute path in the script)
and trims the notes layer. `--check` validates the destination without writing:

```bash
node scripts/copy-pulso-corpus.mjs --check
```

The script expects the Pulso checkout at `E:\Projects\tools\next\pulso-app`; adjust the
path before running it on another machine.

## Licensing

The corpus derives from the MEDIC-GRADO study material (publication permission confirmed
for the books) and cites external guidelines that were trimmed out. The reading layer is
text + figures from those books. Before monetizing, review the usage rights with the
rights holder and add a credits/legal notice; the app currently shows no per-topic source
attribution because `sources.json` was intentionally excluded.

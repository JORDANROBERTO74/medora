# Authoring a clinical case

Each case is one JSON file in `data/cases/authored/`. A merge script turns them
into `src/lib/cases/<specialty>.ts`, so **the JSON is the source of truth** and the
TypeScript is generated — editing the TS by hand loses the change on the next merge.

```bash
node scripts/merge-clinical-cases.mjs
```

## Inputs

- `data/cases/curated.json` — the vignette, already split into blocks. Find your case
  by `order`. Do not change its clinical content.
- `data/cases/authored/01.json` and `21.json` — reference for format and tone.

## Schema

Write every key, in this order:

| key | content |
|---|---|
| `order` | the number from `curated.json` |
| `id` | kebab-case English, unique, descriptive |
| `title` | the motivo, no spoiler; widen only if it is too generic ("DISNEA") |
| `reason` | MOTIVO DE CONSULTA, normalised |
| `history` | ENFERMEDAD ACTUAL |
| `background` | ANTECEDENTES (omit if empty) |
| `exam` | EXAMEN FÍSICO, keep `\n` between systems |
| `labs` | LABORATORIO; `""` is allowed, 11 cases in the PDF have none |
| `studies` | imaging/endoscopy (omit if empty) |
| `question` | one unambiguous question |
| `options` | exactly 4, one correct |
| `correctIndex` | 0–3 |
| `rationales` | exactly 4, one per option, same order |
| `hint` | one sentence that orients without giving the answer |
| `discussion` | management in 2-4 lines |
| `studyQuestions` | the case's own questions, each with a 3-6 line answer |
| `diagnosis` | one line, used only for review |
| `corpusTopic` | corpus apunte slug backing it, or `null` |
| `confidence` | `"alta" \| "media" \| "baja"` |

## Rules

1. **Normalise the text**: ALL CAPS → sentences, accents, obvious OCR slips
   (`A�OS`→años, `MASULINO`→masculino, `PEQUEOS`→pequeños).
2. **Never change a clinical figure.** If a unit is missing or implausible, keep it and
   say so in your report.
3. **The correct answer must be the most likely with that vignette.** Four plausible
   options; no filler like "ninguna de las anteriores".
4. **If the vignette does not determine a single diagnosis**, do not force it: ask
   something objective instead (gasometry interpretation, classification, next step)
   and say so in the report.
5. The `studyQuestions` are the ones the source case asks; answer them in expository
   Spanish, without inventing data.
6. Touch no other file.

## Report

Return only: the chosen diagnosis, any doubts about the vignette, and the confidence.

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

Some English slugs are intentionally shared by two Spanish content slugs (a note and its
reading chapter, or a lectura/resumen variant), e.g. `first-trimester-bleeding`,
`biliary-tract`, `stroke`, `hiv-aids`, `pulmonary-embolism`, `intestinal-obstruction`,
`hyaline-membrane-disease` and `second-trimester-bleeding`. They never collide because the
route namespace differs (`/lesson/...` vs `/reading/...`).

Route segments are also English. The public reading layers are `main` and `summary`; the
corpus filenames stay Spanish (`lectura.json`, `resumen.json`, `repaso/repaso.json`) and
`src/lib/content/layers.ts` maps between them.

- `src/lib/content.ts` holds the client-visible metadata: the **4 reading specialties**
  (Medicina Interna, Cirugía, Ginecología, Pediatría), the **5 note categories** that
  regroup the 51 content notes by theme (the 4 specialties plus Radiología, read-only
  notes with no specialty page), and the navigation tags used inside Notas
  (`institucional` is excluded).
- `src/lib/content/corpus.ts` resolves English slugs back to corpus files (server-only:
  it uses `fs`). Topic slugs are unique across the corpus, so a note resolves by slug
  even when the UI groups it under a different category (e.g. hipertensión lives in the
  cardiología manifest but is listed under Medicina Interna).
- `src/lib/content/slugs.test.ts` fails if a slug is missing, duplicated within its
  namespace, not url-safe, if the note categories stop covering the 51 clinical topics,
  or if a client-visible title drifts from the corpus.

When new content is added, extend the map and run the tests.

## Routes

| Route | Content |
| --- | --- |
| `/dashboard` | 4 reading specialties + the two books (Compendio Clínico / Repaso Rápido) |
| `/dashboard/reading/[specialty]` | Main reading of the specialty (chapter list) |
| `/dashboard/reading/[specialty]/[chapter]` | Main chapter (images, inline notes, prev/next) |
| `/dashboard/reading/summary` | Summary index (4 specialties) |
| `/dashboard/reading/summary/[specialty]` | Summary chapter list |
| `/dashboard/reading/summary/[specialty]/[chapter]` | Summary chapter |
| `/dashboard/reading/review` · `/review/[chapter]` | Review chapters (17) |
| `/dashboard/lesson/[category]/[topic]` | Content note (read-only) as markdown blocks, with the next topic at the end |
| `/dashboard/notes` | **Apuntes** (51 read-only notes, grouped by category/tag) and **Mis notas** (personal) |

The old `/dashboard/topics/*`, `/dashboard/reading/lectura/*`, `/reading/resumen/*` and
`/reading/repaso/*` URLs redirect (307) in `next.config.mjs`. `/dashboard/reading` and the
old bare reading index go to `/dashboard`, which is now the library chooser; switch these
redirects to permanent at launch.

At the end of each content note, the next topic is linked by name. The last topic of a
category links to the first topic of the next category; the last category has no next link.

Reading chapters keep their previous/next links inside the specialty. On the last chapter,
“next” opens the first chapter of the next specialty (main reading and summary); after the
last specialty there is no next link, and navigation never jumps to another layer.

Personal notes are **user-owned**, never edits to the corpus. They are rows in Supabase
(`public.user_notes`, row-level security; see [USER-DATA.md](./USER-DATA.md)), hydrated
once per dashboard load; the `source` field links each note back to the note or chapter it
came from. Content notes show a lock badge and have no edit controls. **Mis notas** groups
first by source layer
(Lectura principal, Compendio Clínico, Repaso Rápido, Sin especialidad), then by specialty and
chapter/topic (`src/lib/notes/note-scope.ts`). Notes from a summary never mix with the
main reading. Inside each group the cards follow the real document order (layer → chapter
→ block → line, see `src/lib/notes/note-order.ts`), with creation date only as a
tie-breaker. The chapter/topic title appears once as a subheading with its count;
individual cards only show their date. Apuntes are read-only and no longer accept personal
notes; notes created from the legacy `/dashboard/lesson/...` route are filtered out when a
device's local copy is imported and never reach the database.

## Inline notes in the main reading

`src/lib/content/note-placements.ts` maps a content note to a lectura chapter and the
heading before which its card is shown (e.g. hipertensión before `TRATAMIENTO`). The map
is curated by hand because the corpus has no note-to-chapter relation.

- The card is read-only: “Apunte · solo lectura”, the note title, an excerpt of its first
  “Puntos clave” block and **Ver más**.
- **Ver más** opens a right-side sheet with the chapter's apuntes and the user's personal
  notes for that chapter; the header icon opens the same sheet. The note opened from the
  card starts expanded and focused.
- Inside the sheet each apunte card expands in place, one at a time, with its full content;
  the rest stay as previews. “Leer completo” still opens the dedicated note page.
- `Dialog` is only used to create, edit or confirm deletion of personal notes, never to
  show the chapter note list.
- `chapter-segments.ts` splits the chapter markdown at headings and inserts the cards;
  the original markdown is preserved verbatim (tested).
- Every one of the 51 notes stays in **Notas**. Notes without a clear chapter (Radiología,
  some triads) are only there.
- Anchors are normalized (case/accents/spaces ignored) and must match exactly one heading
  in the chapter; `note-placements.test.ts` fails on missing or ambiguous anchors.
- Never place notes by editing the corpus JSON; edit the map instead. If the corpus is
  regenerated and headings change, the placement test reports what to update.

## Paragraph notes

Personal notes can also be anchored to a top-level reading paragraph. The anchor is
`{ href, block, line, hash, quote }` (`src/lib/notes/anchors.ts`):

- The primary match is the paragraph text hash; `block`, `line` and `quote` provide
  context. If the corpus text changes, the note stays available at chapter level instead
  of attaching to the wrong paragraph.
- `ParagraphNote` shows a subtle “add note” control on hover/focus (always visible at low
  emphasis on touch) and a persistent marker with the note count. Its inline panel lists
  that paragraph's notes; `Dialog` remains only for create/edit/delete.
- Only root-level `<p>` elements get the control; list items, tables and quotes do not.
- Paragraph notes are personal and account-backed like the rest (`public.user_notes`); they
  also appear in the chapter Sheet and in **Notas** with their quote.

## Regenerating

`scripts/copy-pulso-corpus.mjs` copies from the Pulso repo (absolute path in the script)
and trims the notes layer. `--check` validates the destination without writing:

```bash
node scripts/copy-pulso-corpus.mjs --check
```

The script expects the Pulso checkout at `E:\Projects\tools\next\pulso-app`; adjust the
path before running it on another machine.

The copy **deletes `data/medical` before writing**, so a manual edit there is lost on the
next run. Editorial corrections that must survive live in `scripts/corpus-fixes.mjs` and are
applied by the copy script after generating; they can also run standalone on the current tree:

```bash
node scripts/corpus-fixes.mjs
```

They are idempotent and exit 1 if a patch no longer finds its source text, which means Pulso
changed it. Current patches: the S1/S2 desdoblamiento error in semiología cardiovascular, the
"mayoría" vs "un tercio" contradiction in embarazo ectópico, and the title of the trauma
hemorrhage apunte (visible name "Hemorragias y trauma").

## Quiz bank

`src/lib/quiz-bank/` holds ~485 authored questions, in Spanish, four options each, covering
**every one of the 49 apuntes** (a test fails if an apunte has no question). The distractors
come from the corpus's own "errores frecuentes" so a wrong answer is the mistake the apunte
warns about.

- `seed.ts` — the original 20, reviewed and shipped first. Kept apart so bulk edits by
  several authors cannot drop them.
- `<specialty>/<lot>.ts` — one file per topic group (tríadas, cardiología, neumología…),
  each exporting `questions: QuizQuestion[]`. `index.ts` concatenates them and owns
  `roundFor` / `randomRound`.

Authoring rules live in [QUIZ-BANK.md](./QUIZ-BANK.md).

Each question also carries:

- `explanation` — 40–80 words summarising the source apunte's "Puntos clave", shown in the
  **¿Por qué esta respuesta?** dialog. Hard limit: 600 characters (a test enforces it), so
  it stays an explanation and does not become the apunte.
- `source` — `{ specialty, topic }` slugs. The UI resolves them to "Especialidad · Tema"
  with `specialtyName` and `getTopic`; a test fails if the pair does not resolve, so a
  question can never point at an apunte that does not exist.

Three tests guard the collection: no repeated prompt (also compared after stripping accents
and punctuation), no repeated `topic + correct answer` pair, and full apunte coverage.

shortcut: explanations are copies, not generated from the corpus. Editing an apunte leaves
the matching explanation stale until someone updates it by hand. With ~485 questions, the
next step if this grows much further is extracting the key points at build time.

## Licensing

The corpus derives from the MEDIC-GRADO study material (publication permission confirmed
for the books) and cites external guidelines that were trimmed out. The reading layer is
text + figures from those books. Before monetizing, review the usage rights with the
rights holder and add a credits/legal notice; the app currently shows no per-topic source
attribution because `sources.json` was intentionally excluded.

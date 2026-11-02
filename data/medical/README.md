# Corpus de contenido (recortado desde Pulso)

Generado por `scripts/copy-pulso-corpus.mjs`. No editar a mano.

## Capas

| Capa | `kind` | Alcance | Contrato |
|---|---|---|---|
| Notas | — | 52 temas · 13 especialidades · 417 bloques | `schemaVersion: 2` |
| Lectura | — | 95 capítulos en 4 especialidades | `schemaVersion: 1` (verbatim) |
| Resumen | `summary` | 147 capítulos en 4 especialidades | `schemaVersion: 1` (verbatim) |
| Repaso | `review` | 17 capítulos, transversal | `schemaVersion: 1` (verbatim) |

## Recorte aplicado

- Notas conserva **solo** la sección `ampliacion`: sin `original`, `actualizaciones`,
  `referencias`, `concordance` ni `meta`.
- No hay `sources.json`: se eliminaron los arrays `citations` y los tokens `[XXX-S-###]`.
- Sin `stats.json`, `report.json`, `questions.json`, `ai-policy.json` ni artefactos del
  pipeline (`lectura.overrides.json`, `lectura.figures.json`).
- No se copió `data/medic-grado/**` (páginas crudas, OCR, TOC, tablas e índices de figuras).

## Ilustraciones

258 `.webp` en `public/{lectura,resumen,repaso}`. Las 235 referencias del contenido
resuelven contra esas rutas; las 23 restantes son páginas escaneadas de `repaso/pages`
sin enlace desde el texto.

## Notas de integridad

- El texto no se re-codificó: se copió tal cual del origen. El único caso de mojibake
  (`Ã`) vivía en contenido descartado, así que el corpus retenido no lo contiene.
- `pnpm validate:data` de Pulso **no** aplica: el contrato exige 4 secciones y fuentes.
- `contentVersion` es el mismo en todos los archivos; se unificó al hash del corpus.

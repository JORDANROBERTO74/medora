#!/usr/bin/env node
/**
 * Fusiona los casos autorizados (data/cases/authored/*.json) en los ficheros
 * de `src/lib/cases/`. El JSON es la fuente de verdad; el TS es generado, así
 * que editarlo a mano se pierde en la siguiente fusión.
 *
 *   node scripts/merge-clinical-cases.mjs
 */

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const curatedFile = path.join(root, "data", "cases", "curated.json");
const authoredDir = path.join(root, "data", "cases", "authored");
const outDir = path.join(root, "src", "lib", "cases");

const SPECIALTIES = {
  "internal-medicine": "Medicina Interna / Semiología",
  "gastrointestinal-surgery": "Cirugía / Traumatología",
  "obstetrics-gynecology": "Ginecología y Obstetricia",
  pediatrics: "Pediatría",
};

const curated = JSON.parse(fs.readFileSync(curatedFile, "utf8"));
const specialtyByOrder = new Map(curated.cases.map((item) => [item.order, item.specialty]));

const files = fs.existsSync(authoredDir)
  ? fs.readdirSync(authoredDir).filter((name) => name.endsWith(".json")).sort()
  : [];

const errors = [];
const bySpecialty = new Map(Object.keys(SPECIALTIES).map((slug) => [slug, []]));
const seenIds = new Set();

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(authoredDir, file), "utf8"));
  const where = `${file}:`;

  const specialty = specialtyByOrder.get(data.order);
  if (!specialty) {
    errors.push(`${where} el orden ${data.order} no está en curated.json`);
    continue;
  }
  if (!SPECIALTIES[specialty]) {
    errors.push(`${where} especialidad desconocida: ${specialty}`);
    continue;
  }

  const missing = ["id", "title", "reason", "history", "exam", "question", "hint", "discussion"].filter(
    (key) => typeof data[key] !== "string" || data[key].trim() === ""
  );
  if (missing.length > 0) errors.push(`${where} faltan campos: ${missing.join(", ")}`);

  if (!Array.isArray(data.options) || data.options.length !== 4) {
    errors.push(`${where} debe tener 4 opciones`);
  } else if (new Set(data.options).size !== 4) {
    errors.push(`${where} tiene opciones repetidas`);
  }

  if (!Number.isInteger(data.correctIndex) || data.correctIndex < 0 || data.correctIndex > 3) {
    errors.push(`${where} correctIndex fuera de rango`);
  }

  if (!Array.isArray(data.rationales) || data.rationales.length !== (data.options ?? []).length) {
    errors.push(`${where} necesita un racional por opción`);
  }

  if (!Array.isArray(data.studyQuestions) || data.studyQuestions.length === 0) {
    errors.push(`${where} no trae preguntas de estudio`);
  } else {
    for (const item of data.studyQuestions) {
      if (!item.prompt?.trim() || !item.answer?.trim()) {
        errors.push(`${where} una pregunta de estudio está incompleta`);
      }
    }
  }

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(data.id ?? "")) {
    errors.push(`${where} id no url-safe: ${data.id}`);
  }
  if (seenIds.has(data.id)) errors.push(`${where} id repetido: ${data.id}`);
  seenIds.add(data.id);

  if (errors.length > 0) continue;

  const clinicalCase = {
    id: data.id,
    specialtySlug: specialty,
    title: data.title,
    reason: data.reason,
    history: data.history,
    ...(data.background?.trim() ? { background: data.background } : {}),
    exam: data.exam,
    labs: data.labs,
    ...(data.studies?.trim() ? { studies: data.studies } : {}),
    question: data.question,
    options: data.options,
    correctIndex: data.correctIndex,
    rationales: data.rationales,
    hint: data.hint,
    discussion: data.discussion,
    studyQuestions: data.studyQuestions,
  };

  bySpecialty.get(specialty).push({ order: data.order, clinicalCase });
}

if (errors.length > 0) {
  console.error(`\n${errors.length} problema(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
let written = 0;

for (const [slug, items] of bySpecialty) {
  items.sort((a, b) => a.order - b.order);
  const list = items.map((item) => item.clinicalCase);
  const header = `import type { ClinicalCase } from './types'\n\n/** ${SPECIALTIES[slug]}. Generado desde data/cases/authored — no editar a mano. */\nexport const cases: ClinicalCase[] = ${JSON.stringify(list, null, 2)}\n`;
  fs.writeFileSync(path.join(outDir, `${slug}.ts`), header, "utf8");
  written += list.length;
  console.log(`${slug}: ${list.length}`);
}

const pending = curated.cases.length - written;
console.log(`\ncasos fusionados: ${written} de ${curated.cases.length}`);
if (pending > 0) console.log(`pendientes de autoría: ${pending}`);

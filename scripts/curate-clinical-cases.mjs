#!/usr/bin/env node
/**
 * Cura el JSON en bruto del PDF: separa los bloques que el parser dejó
 * mezclados y normaliza los espacios. No inventa contenido clínico.
 *
 *   node scripts/curate-clinical-cases.mjs
 *
 * Entrada:  data/cases/pdf-cases.json
 * Salida:   data/cases/curated.json
 */

import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "data", "cases");
const input = path.join(dir, "pdf-cases.json");
const output = path.join(dir, "curated.json");

const source = JSON.parse(fs.readFileSync(input, "utf8"));

const tidy = (value) =>
  (value ?? "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:])/g, "$1")
    .trim();

const splitAt = (text, pattern) => {
  const match = pattern.exec(text);
  if (!match) return null;
  const head = text.slice(0, match.index).trim();
  const tail = text.slice(match.index + match[0].length).trim();
  if (head.length < 8 || tail.length < 20) return null;
  return [head, tail];
};

/**
 * Tres casos no traen «MOTIVO DE CONSULTA» en el PDF. El motivo es un resumen
 * de la viñeta, no un dato inventado: queda anotado en `notes`.
 */
const DERIVED_REASONS = {
  20: "Fiebre, dolor pleurítico y disnea",
  21: "Poliuria y polidipsia",
  37: "Contracciones y sangrado vaginal en el embarazo",
};

/** Donde empieza el examen físico cuando la etiqueta quedó dentro de la historia. */
const EXAM_MARKERS = [
  /AL EXAMEN F[IÍ]SICO\s*:/i,
  /EXAMEN F[IÍ]SICO\s*:/i,
  /SIGNOS VITALES\s*:/i,
];

/** Antecedentes pegados al motivo de consulta. */
const BACKGROUND_MARKER = /ANTECEDENTES?[A-ZÁÉÍÓÚÑ ]*:/i;

/** Estudios de imagen o registros que no son laboratorio. */
const STUDIES_MARKER =
  /(RX DE|RADIOGRAF[IÍ]A|TAC\b|TOMOGRAF|ECOGRAF|ECOCARDIOGRAM|ELECTROCARDIOGRAMA|ECG\b|ENDOSCOP|RESONANC|USG\b)/i;

/**
 * Propuesta de especialidad por caso (el PDF no la trae). Se revisa antes de
 * escribir el contenido: cambiar una línea aquí y regenerar es todo el trabajo.
 */
const SPECIALTY_BY_ORDER = {
  1: "internal-medicine",
  2: "gastrointestinal-surgery",
  3: "internal-medicine",
  4: "internal-medicine",
  5: "internal-medicine",
  6: "internal-medicine",
  7: "gastrointestinal-surgery",
  8: "internal-medicine",
  9: "gastrointestinal-surgery",
  10: "gastrointestinal-surgery",
  11: "internal-medicine",
  20: "internal-medicine",
  21: "internal-medicine",
  22: "internal-medicine",
  23: "pediatrics",
  24: "internal-medicine",
  25: "internal-medicine",
  26: "internal-medicine",
  27: "internal-medicine",
  28: "gastrointestinal-surgery",
  29: "internal-medicine",
  30: "internal-medicine",
  31: "internal-medicine",
  32: "pediatrics",
  33: "internal-medicine",
  34: "internal-medicine",
  35: "internal-medicine",
  36: "internal-medicine",
  37: "obstetrics-gynecology",
  38: "internal-medicine",
  39: "internal-medicine",
  43: "internal-medicine",
  44: "internal-medicine",
};

const cases = source.cases.map((item) => {
  const notes = [];
  let reason = item.reason;
  let history = item.history;
  let background = item.background;
  let exam = item.exam;
  let labs = item.labs;
  let studies = "";

  // 1. Motivo ausente: el enunciado entero cayó en `reason`.
  const looksLikeVignette =
    !history && (/^PACIENTE\b/i.test(reason) || /CUADRO CL[IÍ]NICO/i.test(reason)) && reason.length > 80;
  if (looksLikeVignette) {
    history = reason;
    reason = DERIVED_REASONS[item.order] ?? "";
    notes.push(
      DERIVED_REASONS[item.order]
        ? "motivo ausente en el PDF: resumen de la viñeta"
        : "motivo ausente: la viñeta pasa a enfermedad actual"
    );
  }

  // 2. Antecedentes pegados al motivo.
  if (!background) {
    const parts = splitAt(reason, BACKGROUND_MARKER);
    if (parts) {
      [reason, background] = parts;
      notes.push("antecedentes separados del motivo");
    }
  }

  // 3. Examen físico pegado a la enfermedad actual.
  if (!exam) {
    for (const marker of EXAM_MARKERS) {
      const parts = splitAt(history, marker);
      if (parts) {
        [history, exam] = parts;
        notes.push("examen físico separado de la enfermedad actual");
        break;
      }
    }
  }

  // 4. Estudios de imagen dentro del laboratorio.
  const studiesParts = splitAt(labs, STUDIES_MARKER);
  if (studiesParts) {
    [labs, studies] = studiesParts;
    studies = studies.replace(/^[\s:;,-]+/, "");
    notes.push("estudios separados del laboratorio");
  }

  const questions = item.questions.map((question) => tidy(question.replace(/\s*\(\d+\)\s*$/, "")));

  return {
    order: item.order,
    label: item.label,
    specialty: SPECIALTY_BY_ORDER[item.order] ?? "",
    reason: tidy(reason),
    history: tidy(history),
    background: tidy(background),
    exam: tidy(exam),
    labs: tidy(labs),
    studies: tidy(studies),
    questions,
    notes,
  };
});

const norm = (value) =>
  (value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

// El PDF repite casos (la misma viñeta aparece dos veces). Nos quedamos con la
// primera aparición y anotamos la copia para no perder la trazabilidad.
const seen = new Map();
const duplicates = [];
const unique = [];
for (const item of cases) {
  const key = norm(item.history);
  const first = seen.get(key);
  if (first) {
    duplicates.push({ order: item.order, duplicateOf: first });
    continue;
  }
  seen.set(key, item.order);
  unique.push(item);
}

fs.writeFileSync(
  output,
  `${JSON.stringify({ source: source.source, cases: unique, duplicates }, null, 2)}\n`,
  "utf8"
);

const changed = unique.filter((item) => item.notes.length > 0);
const incomplete = unique.filter(
  (item) =>
    !item.reason || !item.history || !item.exam || !item.labs || item.questions.length === 0
);

console.log(`casos en el PDF: ${cases.length}`);
console.log(`duplicados descartados: ${duplicates.length}`);
for (const item of duplicates) console.log(`  #${item.order} repite #${item.duplicateOf}`);
console.log(`casos únicos: ${unique.length}`);
console.log(`\ncon transformaciones: ${changed.length}`);
for (const item of changed) console.log(`  #${item.order}: ${item.notes.join("; ")}`);
console.log(`\nbloques aún vacíos: ${incomplete.length}`);
for (const item of incomplete) {
  const missing = ["reason", "history", "exam", "labs"].filter((key) => !item[key]);
  if (item.questions.length === 0) missing.push("questions");
  console.log(`  #${item.order} (${item.reason || item.label}): falta ${missing.join(", ")}`);
}
console.log(`\nescrito en ${path.relative(process.cwd(), output)}`);

const bySpecialty = {};
for (const item of unique) bySpecialty[item.specialty] = (bySpecialty[item.specialty] ?? 0) + 1;
console.log("\npor especialidad:");
for (const [slug, count] of Object.entries(bySpecialty)) console.log(`  ${slug}: ${count}`);

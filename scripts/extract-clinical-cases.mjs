#!/usr/bin/env node
/**
 * Extrae los casos clínicos del PDF a JSON estructurado.
 *
 *   node scripts/extract-clinical-cases.mjs "E:\ruta\TODOS LOS CASOS CLINICOS.pdf"
 *
 * Requiere `pdftotext` en el PATH (viene con Git for Windows).
 * La salida es material en bruto: el texto conserva mayúsculas y erratas de
 * OCR. La curación se hace caso a caso al pasarlo a src/lib/cases/.
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const pdf = process.argv[2] ?? "E:\\Downloads\\TODOS LOS CASOS CLINICOS.pdf";
const outDir = path.join(process.cwd(), "data", "cases");
const outFile = path.join(outDir, "pdf-cases.json");

const raw = execFileSync("pdftotext", ["-layout", pdf, "-"], {
  encoding: "utf8",
  maxBuffer: 32 * 1024 * 1024,
});

const LABELS = [
  ["reason", /^MOTIVO DE CONSULTA\s*:\s*(.*)$/i],
  ["history", /^ENFERMEDAD ACTUAL\s*:\s*(.*)$/i],
  ["background", /^ANTECEDENTES[A-ZÁÉÍÓÚÑ ]*\s*:\s*(.*)$/i],
  ["exam", /^EXAMEN F[IÍ]SICO\s*:\s*(.*)$/i],
  ["labs", /^LABORATORIO\s*:\s*(.*)$/i],
];

const clean = (value) =>
  value
    .replace(/A\uFFFDOS/g, "AÑOS")
    .replace(/\uFFFD/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();

const lines = raw
  .split("\n")
  .map((line) => line.replace(/\f/g, "").replace(/\r/g, ""))
  .filter((line) => !/^\s*MEDIC\s+GRADO\s*$/i.test(line));

const cases = [];
let current = null;
let field = null;

function pushCurrent() {
  if (!current) return;
  for (const key of ["reason", "history", "background", "exam", "labs"]) {
    current[key] = clean(current[key] ?? "");
  }
  current.questions = current.questions.map(clean).filter(Boolean);
  current.missing = ["reason", "history", "background", "exam", "labs"].filter(
    (key) => !current[key]
  );
  if (current.questions.length === 0) current.missing.push("questions");
  cases.push(current);
  current = null;
  field = null;
}

for (const line of lines) {
  const header = line.match(/^\s*CASO\s+CL[IÍ]NICO\s+(\d+)\s*:?\s*$/i);
  if (header) {
    pushCurrent();
    current = {
      order: cases.length + 1,
      label: `CASO CLINICO ${header[1]}`,
      reason: "",
      history: "",
      background: "",
      exam: "",
      labs: "",
      questions: [],
    };
    field = null;
    continue;
  }
  if (!current) continue;

  const question = line.match(/^\s*(\d+)\s*[-.)]\s*(.+)$/);
  if (question) {
    current.questions.push(`${question[2]} (${question[1]})`);
    field = null;
    continue;
  }

  const label = LABELS.find(([, re]) => re.test(line));
  if (label) {
    field = label[0];
    const inline = line.match(label[1])?.[1] ?? "";
    current[field] = inline;
    continue;
  }

  if (field) current[field] += ` ${line.trim()}`;
}
pushCurrent();

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  outFile,
  `${JSON.stringify({ source: path.basename(pdf), extractedAt: new Date().toISOString(), cases }, null, 2)}\n`,
  "utf8"
);

const incomplete = cases.filter((item) => item.missing.length > 0);
console.log(`casos: ${cases.length}`);
console.log(`con bloques vacíos: ${incomplete.length}`);
for (const item of incomplete) {
  console.log(`  #${item.order} (${item.label}): faltan ${item.missing.join(", ")}`);
}
console.log(`escrito en ${path.relative(process.cwd(), outFile)}`);

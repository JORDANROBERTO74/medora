#!/usr/bin/env node
/**
 * Copia el corpus de contenido de Pulso (E:\Projects\tools\next\pulso-app) a Medora,
 * recortando la capa Notas a su sección "ampliación".
 *
 * Uso:
 *   node scripts/copy-pulso-corpus.mjs           # escribe data/ + public/
 *   node scripts/copy-pulso-corpus.mjs --check   # valida sin escribir
 *
 * Contrato generado (schemaVersion 2 para Notas):
 *   index.json          { schemaVersion, contentVersion, stats, specialties[] }
 *   manifest.json       { schemaVersion, contentVersion, id, name, slug, order, kind, description, topics[] }
 *   <NN>-<slug>.json    { schemaVersion, contentVersion, id, specialty, slug, order, title, sections:[ampliacion] }
 *
 * Las capas Lectura/Resumen/Repaso se copian verbatim (solo se unifica contentVersion).
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const SRC = "E:\\Projects\\tools\\next\\pulso-app";
const DEST = "E:\\Projects\\learning-saas\\Medora";

const SRC_DATA = path.join(SRC, "data", "medical");
const DEST_DATA = path.join(DEST, "data", "medical");
const SRC_PUBLIC = path.join(SRC, "public");
const DEST_PUBLIC = path.join(DEST, "public");

const ASSET_DIRS = ["lectura", "resumen", "repaso"];
const CITATION = /\[[A-Z]+-S-\d{3}\]/g;
const CHECK = process.argv.includes("--check");

/** Rutas que nunca deben aparecer en el destino. */
const FORBIDDEN = [
  "sources.json",
  "stats.json",
  "report.json",
  "questions.json",
  "ai-policy.json",
  "cardiologia/lectura.overrides.json",
  "cardiologia/lectura.figures.json",
  "medicina-interna/lectura.overrides.json",
  "medicina-interna/lectura.figures.json",
  "pediatria/lectura.overrides.json",
  "pediatria/lectura.figures.json",
  "gineco-obstetricia/lectura.overrides.json",
  "gineco-obstetricia/lectura.figures.json",
  "cirugia-digestivo/lectura.overrides.json",
  "cirugia-digestivo/lectura.figures.json",
];

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

/**
 * Quita tokens de cita y normaliza los huecos que dejan, preservando la
 * indentación de listas anidadas.
 */
function cleanMarkdown(text) {
  if (typeof text !== "string" || text.length === 0) return text;
  const lines = text.split("\n").map((line) => {
    const match = line.match(/^([ \t]*)([\s\S]*)$/);
    const indent = match[1];
    let body = match[2].replace(CITATION, "");
    body = body.replace(/[ \t]{2,}/g, " ");
    body = body.replace(/[ \t]+([.,;:])/g, "$1");
    body = body.replace(/[ \t]+$/, "");
    return indent + body;
  });
  return lines
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trimEnd();
}

/** Construye el corpus completo en memoria. */
function buildCorpus() {
  const index = readJson(path.join(SRC_DATA, "index.json"));
  const report = {
    specialties: 0,
    topics: 0,
    blocks: 0,
    droppedBlocks: [],
    blocklessTopics: [],
    images: 0,
  };

  /** @type {Map<string, object>} relPath -> payload sin contentVersion */
  const files = new Map();

  const specialties = [];

  for (const specialty of index.specialties) {
    const manifest = readJson(path.join(SRC_DATA, specialty.manifest));
    const topics = [];
    report.specialties += 1;

    for (const entry of manifest.topics) {
      const topic = readJson(path.join(SRC_DATA, specialty.id, entry.file));
      const ampliacion = (topic.sections ?? []).find((section) => section.id === "ampliacion");

      if (!ampliacion) {
        report.blocklessTopics.push(`${specialty.id}/${entry.slug} (sin sección ampliación)`);
        continue;
      }

      const blocks = [];
      for (const block of ampliacion.blocks ?? []) {
        const markdown = cleanMarkdown(block.markdown ?? "");
        if (markdown.trim().length === 0) {
          report.droppedBlocks.push(`${specialty.id}/${entry.slug}#${block.id}`);
          continue;
        }
        blocks.push({
          id: block.id,
          title: block.title,
          markdown,
        });
        report.blocks += 1;
      }

      if (blocks.length === 0) {
        report.blocklessTopics.push(`${specialty.id}/${entry.slug} (0 bloques)`);
      }

      const note = cleanMarkdown(ampliacion.note ?? "");

      const section = {
        id: "ampliacion",
        kind: "blocks",
        order: 1,
        title: ampliacion.title ?? "Ampliación",
        ...(note ? { note } : {}),
        blocks,
      };

      const relFile = `${specialty.id}/${entry.file}`;
      files.set(
        relFile,
        {
          schemaVersion: 2,
          id: topic.id,
          specialty: topic.specialty ?? specialty.id,
          slug: topic.slug ?? entry.slug,
          order: topic.order ?? entry.order,
          title: topic.title ?? entry.title,
          sections: [section],
        },
      );

      topics.push({
        id: entry.id,
        slug: entry.slug,
        order: entry.order,
        title: entry.title,
        file: entry.file,
      });
      report.topics += 1;
    }

    files.set(`${specialty.id}/manifest.json`, {
      schemaVersion: 2,
      id: specialty.id,
      name: specialty.name,
      slug: specialty.slug,
      order: specialty.order,
      kind: specialty.kind,
      ...(manifest.description ? { description: manifest.description } : {}),
      topics,
    });

    specialties.push({
      id: specialty.id,
      name: specialty.name,
      slug: specialty.slug,
      order: specialty.order,
      kind: specialty.kind,
      manifest: specialty.manifest,
    });
  }

  // Capas copiadas verbatim (solo se reemplaza contentVersion).
  const reading = [];
  for (const specialty of index.specialties) {
    for (const file of ["lectura.json", "resumen.json"]) {
      const full = path.join(SRC_DATA, specialty.id, file);
      if (!fs.existsSync(full)) continue;
      const payload = readJson(full);
      delete payload.contentVersion;
      files.set(`${specialty.id}/${file}`, payload);
      reading.push(`${specialty.id}/${file}`);
    }
  }
  {
    const payload = readJson(path.join(SRC_DATA, "repaso", "repaso.json"));
    delete payload.contentVersion;
    files.set("repaso/repaso.json", payload);
    reading.push("repaso/repaso.json");
  }

  files.set("index.json", {
    schemaVersion: 2,
    stats: {
      specialties: report.specialties,
      topics: report.topics,
      blocks: report.blocks,
    },
    specialties,
  });

  // contentVersion: hash del corpus con el campo ausente.
  const ordered = [...files.entries()].sort(([a], [b]) => a.localeCompare(b));
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(ordered.map(([rel, payload]) => [rel, payload])))
    .digest("hex")
    .slice(0, 12);

  // Se inyecta contentVersion en todas las capas, incluidas las verbatim.
  for (const payload of files.values()) payload.contentVersion = hash;

  return { files, hash, report, reading };
}

function computeAssets() {
  const out = new Map(); // relPath (public/...) -> size
  for (const dir of ASSET_DIRS) {
    const root = path.join(SRC_PUBLIC, dir);
    if (!fs.existsSync(root)) continue;
    for (const file of fs.readdirSync(root, { recursive: true })) {
      const full = path.join(root, file);
      if (!fs.statSync(full).isFile()) continue;
      out.set(`${dir}/${file.toString().replace(/\\/g, "/")}`, fs.statSync(full).size);
    }
  }
  return out;
}

function imageRefsOf(files) {
  const refs = new Set();
  for (const payload of files.values()) {
    const text = JSON.stringify(payload);
    for (const match of text.matchAll(/!\[[^\]]*\]\((\/[^)"\\]+)\)/g)) refs.add(match[1]);
  }
  return refs;
}

function writeCorpus(files, assets) {
  for (const dir of ASSET_DIRS) {
    fs.rmSync(path.join(DEST_PUBLIC, dir), { recursive: true, force: true });
    const src = path.join(SRC_PUBLIC, dir);
    if (fs.existsSync(src)) {
      fs.cpSync(src, path.join(DEST_PUBLIC, dir), { recursive: true });
    }
  }

  fs.rmSync(DEST_DATA, { recursive: true, force: true });
  for (const [rel, payload] of files) {
    const full = path.join(DEST_DATA, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  }

  fs.writeFileSync(
    path.join(DEST_DATA, "README.md"),
    [
      "# Corpus de contenido (recortado desde Pulso)",
      "",
      "Generado por `scripts/copy-pulso-corpus.mjs`. No editar a mano.",
      "",
      "## Capas",
      "",
      "| Capa | `kind` | Alcance | Contrato |",
      "|---|---|---|---|",
      "| Notas | — | 52 temas · 13 especialidades · 417 bloques | `schemaVersion: 2` |",
      "| Lectura | — | 95 capítulos en 4 especialidades | `schemaVersion: 1` (verbatim) |",
      "| Resumen | `summary` | 147 capítulos en 4 especialidades | `schemaVersion: 1` (verbatim) |",
      "| Repaso | `review` | 17 capítulos, transversal | `schemaVersion: 1` (verbatim) |",
      "",
      "## Recorte aplicado",
      "",
      "- Notas conserva **solo** la sección `ampliacion`: sin `original`, `actualizaciones`,",
      "  `referencias`, `concordance` ni `meta`.",
      "- No hay `sources.json`: se eliminaron los arrays `citations` y los tokens `[XXX-S-###]`.",
      "- Sin `stats.json`, `report.json`, `questions.json`, `ai-policy.json` ni artefactos del",
      "  pipeline (`lectura.overrides.json`, `lectura.figures.json`).",
      "- No se copió `data/medic-grado/**` (páginas crudas, OCR, TOC, tablas e índices de figuras).",
      "",
      "## Ilustraciones",
      "",
      "258 `.webp` en `public/{lectura,resumen,repaso}`. Las 235 referencias del contenido",
      "resuelven contra esas rutas; las 23 restantes son páginas escaneadas de `repaso/pages`",
      "sin enlace desde el texto.",
      "",
      "## Notas de integridad",
      "",
      "- El texto no se re-codificó: se copió tal cual del origen. El único caso de mojibake",
      "  (`Ã`) vivía en contenido descartado, así que el corpus retenido no lo contiene.",
      "- `pnpm validate:data` de Pulso **no** aplica: el contrato exige 4 secciones y fuentes.",
      "- `contentVersion` es el mismo en todos los archivos; se unificó al hash del corpus.",
      "",
    ].join("\n"),
    "utf8",
  );

  return assets.size;
}

function checkCorpus(files, assets, hash, report, reading) {
  const errors = [];
  const ok = (cond, message) => {
    if (!cond) errors.push(message);
  };

  // 1. Índice y recuentos.
  const indexPath = path.join(DEST_DATA, "index.json");
  ok(fs.existsSync(indexPath), "falta index.json");
  if (fs.existsSync(indexPath)) {
    const index = readJson(indexPath);
    ok(index.stats?.specialties === 13, `stats.specialties = ${index.stats?.specialties} (esperado 13)`);
    ok(index.stats?.topics === 52, `stats.topics = ${index.stats?.topics} (esperado 52)`);
    ok(index.stats?.blocks === 417, `stats.blocks = ${index.stats?.blocks} (esperado 417)`);
    ok(index.contentVersion === hash, `index.contentVersion ≠ ${hash}`);
  }

  // 2. Cada tema: una sola sección, id ampliacion; sin campos recortados.
  let topicCount = 0;
  let blockCount = 0;
  let citationsLeft = 0;
  let tokenLeft = 0;
  let badSections = 0;
  let missingFiles = 0;

  for (const rel of files.keys()) {
    const full = path.join(DEST_DATA, rel);
    if (!fs.existsSync(full)) {
      missingFiles += 1;
      continue;
    }
    const text = fs.readFileSync(full, "utf8");
    if (CITATION.test(text)) tokenLeft += 1;
    CITATION.lastIndex = 0;
    if (/"citations"/.test(text)) citationsLeft += 1;

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      errors.push(`JSON inválido: ${rel}`);
      continue;
    }
    if (parsed.contentVersion !== hash) errors.push(`${rel}: contentVersion desalineado`);

    if (rel.endsWith(".json") && !rel.includes("manifest.json") && !rel.includes("index.json") && !rel.includes("lectura.json") && !rel.includes("resumen.json") && !rel.includes("repaso.json")) {
      topicCount += 1;
      const sections = parsed.sections ?? [];
      if (sections.length !== 1 || sections[0].id !== "ampliacion") badSections += 1;
      if (parsed.pages || parsed.concordance || parsed.meta) errors.push(`${rel}: conserva campos recortados`);
      blockCount += (sections[0]?.blocks ?? []).length;
    }
  }

  ok(missingFiles === 0, `${missingFiles} archivos generados faltan en disco`);
  ok(topicCount === 52, `temas en disco = ${topicCount} (esperado 52)`);
  ok(blockCount === 417, `bloques en disco = ${blockCount} (esperado 417)`);
  ok(badSections === 0, `${badSections} temas con secciones incorrectas`);
  ok(tokenLeft === 0, `${tokenLeft} archivos conservan tokens [XXX-S-###]`);
  ok(citationsLeft === 0, `${citationsLeft} archivos conservan "citations"`);

  // 3. Capas verbatim presentes y con sus capítulos.
  const readCount = (rel) => {
    const full = path.join(DEST_DATA, rel);
    return fs.existsSync(full) ? (readJson(full).chapters ?? []).length : -1;
  };
  const expectedChapters = {
    "cirugia-digestivo/lectura.json": 13,
    "gineco-obstetricia/lectura.json": 21,
    "medicina-interna/lectura.json": 36,
    "pediatria/lectura.json": 25,
    "cirugia-digestivo/resumen.json": 24,
    "gineco-obstetricia/resumen.json": 37,
    "medicina-interna/resumen.json": 63,
    "pediatria/resumen.json": 23,
    "repaso/repaso.json": 17,
  };
  for (const [rel, expected] of Object.entries(expectedChapters)) {
    const actual = readCount(rel);
    ok(actual === expected, `${rel}: ${actual} capítulos (esperado ${expected})`);
  }
  ok(reading.length === Object.keys(expectedChapters).length, "capas de lectura incompletas");

  // 4. Exclusiones.
  for (const rel of FORBIDDEN) {
    ok(!fs.existsSync(path.join(DEST_DATA, rel)), `archivo excluido presente: ${rel}`);
  }
  ok(!fs.existsSync(path.join(DEST, "data", "medic-grado")), "data/medic-grado no debe existir");

  // El README del destino debe ser el generado, no el de Pulso.
  const readmePath = path.join(DEST_DATA, "README.md");
  ok(fs.existsSync(readmePath), "falta data/medical/README.md");
  if (fs.existsSync(readmePath)) {
    ok(
      fs.readFileSync(readmePath, "utf8").startsWith("# Corpus de contenido (recortado desde Pulso)"),
      "data/medical/README.md no es el generado por el script",
    );
  }

  // 5. Assets.
  const diskAssets = new Map();
  for (const dir of ASSET_DIRS) {
    const root = path.join(DEST_PUBLIC, dir);
    if (!fs.existsSync(root)) continue;
    for (const file of fs.readdirSync(root, { recursive: true })) {
      const full = path.join(root, file);
      if (!fs.statSync(full).isFile()) continue;
      diskAssets.set(`${dir}/${file.toString().replace(/\\/g, "/")}`, fs.statSync(full).size);
    }
  }
  ok(diskAssets.size === 258, `imágenes en destino = ${diskAssets.size} (esperado 258)`);
  const bytes = [...diskAssets.values()].reduce((sum, size) => sum + size, 0);
  ok(Math.abs(bytes - 6635520) < 2 * 1024 * 1024, `tamaño de assets = ${(bytes / 1024 / 1024).toFixed(2)} MB`);

  // 6. Referencias de imagen resueltas.
  const refs = imageRefsOf(files);
  ok(refs.size === 235, `referencias de imagen distintas = ${refs.size} (esperado 235)`);
  const broken = [...refs].filter((ref) => !fs.existsSync(path.join(DEST_PUBLIC, ref.replace(/^\//, ""))));
  ok(broken.length === 0, `${broken.length} referencias de imagen sin archivo: ${broken.slice(0, 5).join(", ")}`);

  // 7. Paridad byte a byte con la generación en memoria.
  for (const rel of files.keys()) {
    const full = path.join(DEST_DATA, rel);
    if (!fs.existsSync(full)) continue;
    const actual = fs.readFileSync(full, "utf8");
    const wanted = `${JSON.stringify(expected, null, 2)}\n`;
    ok(actual === wanted, `${rel}: contenido distinto del esperado`);
  }

  return { errors, stats: { topicCount, blockCount, assets: diskAssets.size, bytes, refs: refs.size } };
}

const { files, hash, report, reading } = buildCorpus();
const assets = computeAssets();

if (report.droppedBlocks.length > 0) {
  console.warn(`Bloques descartados por quedar vacíos: ${report.droppedBlocks.length}`);
  for (const item of report.droppedBlocks) console.warn(`  - ${item}`);
}
if (report.blocklessTopics.length > 0) {
  console.warn(`Temas sin bloques: ${report.blocklessTopics.length}`);
  for (const item of report.blocklessTopics) console.warn(`  - ${item}`);
}

if (CHECK) {
  const { errors, stats } = checkCorpus(files, assets, hash, report, reading);
  if (errors.length > 0) {
    console.error(`\n✗ ${errors.length} problemas:`);
    for (const error of errors) console.error(`  - ${error}`);
    process.exit(1);
  }
  console.log("✓ corpus válido");
  console.log(`  contentVersion: ${hash}`);
  console.log(`  ${stats.topicCount} temas · ${stats.blockCount} bloques · ${stats.assets} imágenes · ${(stats.bytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  ${stats.refs} referencias de imagen resueltas`);
  process.exit(0);
}

const assetCount = writeCorpus(files, assets);
console.log("✓ corpus copiado a Medora");
console.log(`  contentVersion: ${hash}`);
console.log(`  ${report.specialties} especialidades · ${report.topics} temas · ${report.blocks} bloques`);
console.log(`  ${assetCount} imágenes · ${( [...assets.values()].reduce((a, b) => a + b, 0) / 1024 / 1024).toFixed(2)} MB`);

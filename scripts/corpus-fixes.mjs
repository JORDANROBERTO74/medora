#!/usr/bin/env node
/**
 * Correcciones editoriales sobre el corpus generado.
 *
 * `copy-pulso-corpus.mjs` borra data/medical antes de escribir, así que un
 * arreglo hecho a mano en el JSON se pierde en la siguiente copia. Los parches
 * viven aquí y se aplican después de generar, tanto desde el script de copia
 * como sueltos:
 *
 *   node scripts/corpus-fixes.mjs
 *
 * Cada parche busca una frase literal. Si no la encuentra y la corrección
 * tampoco está aplicada, avisa: suele significar que el texto de origen cambió.
 */

import fs from "node:fs";
import path from "node:path";

const DATA = path.join(path.resolve(import.meta.dirname, ".."), "data", "medical");

/** Correcciones sobre el markdown de un bloque. */
export const CORPUS_FIXES = [
  {
    file: "cardiologia/05-semiologia-cardiovascular.json",
    find: "el desdoblamiento fisiológico del primer ruido (S1) es normal en muchos pacientes",
    replace: "el desdoblamiento fisiológico es del segundo ruido (S2), normal en muchos pacientes",
    why: "el desdoblamiento fisiológico es del S2 y el propio apunte lo dice en «Perlas»",
  },
  {
    file: "gineco-obstetricia/03-embarazo-ectopico.json",
    find: "cerca de un tercio de las afectadas no los tiene",
    replace: "la mayoría de las afectadas no los tiene",
    why: "«Puntos clave» dice «la mayoría» y «Perlas» decía «un tercio»",
  },
];

/**
 * Cambios de título visible. `content.ts` debe coincidir con el título del
 * manifiesto (hay un test), así que el nombre se corrige en los dos sitios.
 */
export const CORPUS_TITLE_FIXES = [
  {
    file: "cirugia-digestivo/manifest.json",
    slug: "hemorragias",
    from: "Hemorragias",
    to: "Hemorragias y trauma",
    why: "el apunte es de hemorragia traumática, no digestiva",
  },
  {
    file: "cirugia-digestivo/01-hemorragias.json",
    from: "Hemorragias",
    to: "Hemorragias y trauma",
    why: "el apunte es de hemorragia traumática, no digestiva",
  },
];

function applyTitleFix(fix, payload) {
  if (fix.slug) {
    const topic = (payload.topics ?? []).find((item) => item.slug === fix.slug);
    if (!topic || topic.title === fix.to || topic.title !== fix.from) return 0;
    topic.title = fix.to;
    return 1;
  }

  if (payload.title === fix.to || payload.title !== fix.from) return 0;
  payload.title = fix.to;
  return 1;
}

/** Aplica los parches de un fichero sobre su payload en memoria. Devuelve cuántos aplicó. */
export function applyCorpusFixesToPayload(rel, payload) {
  let applied = 0;

  for (const fix of CORPUS_TITLE_FIXES) {
    if (fix.file === rel) applied += applyTitleFix(fix, payload);
  }

  for (const section of payload.sections ?? []) {
    for (const block of section.blocks ?? []) {
      if (typeof block.markdown !== "string") continue;
      for (const fix of CORPUS_FIXES) {
        if (fix.file !== rel || !block.markdown.includes(fix.find)) continue;
        block.markdown = block.markdown.replace(fix.find, fix.replace);
        applied += 1;
      }
    }
  }

  return applied;
}

/** Aplica los parches sobre el corpus ya escrito en disco. */
export function applyCorpusFixesToDisk() {
  const files = new Set([
    ...CORPUS_FIXES.map((fix) => fix.file),
    ...CORPUS_TITLE_FIXES.map((fix) => fix.file),
  ]);

  let applied = 0;
  for (const rel of files) {
    const full = path.join(DATA, rel);
    if (!fs.existsSync(full)) continue;

    const payload = JSON.parse(fs.readFileSync(full, "utf8"));
    const count = applyCorpusFixesToPayload(rel, payload);
    if (count === 0) continue;

    fs.writeFileSync(full, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    applied += count;
  }

  // Tras aplicar, cada corrección debe estar presente: si no, el origen cambió.
  const unresolved = [];
  for (const fix of CORPUS_FIXES) {
    const text = fs.readFileSync(path.join(DATA, fix.file), "utf8");
    if (!text.includes(fix.replace)) unresolved.push(`${fix.file} (${fix.why})`);
  }
  for (const fix of CORPUS_TITLE_FIXES) {
    const text = fs.readFileSync(path.join(DATA, fix.file), "utf8");
    if (!text.includes(fix.to)) unresolved.push(`${fix.file} (${fix.why})`);
  }

  return { applied, unresolved };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  const { applied, unresolved } = applyCorpusFixesToDisk();
  console.log(`corpus-fixes: ${applied} parche(s) aplicado(s)`);
  for (const item of unresolved) console.warn(`aviso: parche sin aplicar en ${item}`);
  if (unresolved.length > 0) process.exit(1);
}

import type { SpecialtySlug } from '../content'

// Editorial map: which content note appears inside which reading chapter, and
// before which heading. The corpus has no note-to-chapter relation, so this is
// curated by hand. Anchors are normalized (lowercase, no accents, single spaces)
// and must match exactly one heading in the chapter.
//
// Notes without a clear chapter stay only in the Notas menu.
export type NotePlacement = {
  /** Public English slug of the note. */
  note: string
  /** Public specialty slug of the reading that hosts the card. */
  specialty: SpecialtySlug
  /** Internal (Spanish) chapter slug inside that specialty's lectura.json. */
  chapter: string
  /** Normalized heading text, e.g. "tratamiento". */
  beforeHeading: string
}

export const NOTE_PLACEMENTS: NotePlacement[] = [
  // Medicina Interna
  { note: 'tuberculosis', specialty: 'internal-medicine', chapter: 'tuberculosis', beforeHeading: 'tratamiento' },
  { note: 'chagas-disease', specialty: 'internal-medicine', chapter: 'chagas', beforeHeading: 'tratamiento' },
  { note: 'arbovirus-infections', specialty: 'internal-medicine', chapter: 'dengue', beforeHeading: 'diagnostico' },
  { note: 'arterial-hypertension', specialty: 'internal-medicine', chapter: 'hipertension-arterial', beforeHeading: 'tratamiento' },
  { note: 'heart-failure', specialty: 'internal-medicine', chapter: 'insuficiencia-cardiaca', beforeHeading: 'tratamiento' },
  { note: 'acute-myocardial-infarction', specialty: 'internal-medicine', chapter: 'cardiopatias', beforeHeading: 'tratamiento' },
  { note: 'cardiovascular-examination', specialty: 'internal-medicine', chapter: 'generalidades-del-corazon', beforeHeading: 'valvulas delcorazon' },
  { note: 'diabetic-foot', specialty: 'internal-medicine', chapter: 'diabetes', beforeHeading: 'clasificacion de wagner' },
  { note: 'insulin', specialty: 'internal-medicine', chapter: 'diabetes', beforeHeading: 'tiempo de accion de las insulinas comerciales' },
  { note: 'hypoglycemia', specialty: 'internal-medicine', chapter: 'diabetes', beforeHeading: 'complicaciones' },
  { note: 'lupus-nephritis', specialty: 'internal-medicine', chapter: 'sistema-urinario', beforeHeading: 'sindrome nefrotico' },
  { note: 'whipple-triad', specialty: 'internal-medicine', chapter: 'diabetes', beforeHeading: 'triada de wipple' },

  // Tríadas y síndromes
  { note: 'virchow-triad', specialty: 'internal-medicine', chapter: 'tromboembolismo-pulmonar-tep', beforeHeading: 'triada de virchow' },
  { note: 'cushing-triad', specialty: 'gastrointestinal-surgery', chapter: 'trauma-de-cara-cuello-y-craneo', beforeHeading: 'tec - traumatismo encefalocraneal' },
  { note: 'charcot-triad-cholangitis', specialty: 'gastrointestinal-surgery', chapter: 'vias-biliares', beforeHeading: 'triada de coledocolitiasis' },
  { note: 'reynolds-pentad', specialty: 'gastrointestinal-surgery', chapter: 'vias-biliares', beforeHeading: 'triada de coledocolitiasis' },
  { note: 'beck-triad', specialty: 'gastrointestinal-surgery', chapter: 'shock', beforeHeading: 'triada de beck' },
  { note: 'lethal-trauma-triad', specialty: 'gastrointestinal-surgery', chapter: 'trauma-en-emergencia', beforeHeading: 'triada de la muerte' },
  { note: 'ectopic-pregnancy-triad', specialty: 'obstetrics-gynecology', chapter: 'hemorragias-del-primer-trimestre', beforeHeading: 'triada' },
  { note: 'torch-syndrome', specialty: 'obstetrics-gynecology', chapter: 'toxoplasmosis', beforeHeading: 'clinica' },

  // Cirugía
  { note: 'digestive-hemorrhages', specialty: 'internal-medicine', chapter: 'hemorragias-digestivas', beforeHeading: 'hemorragia digestiva alta' },
  { note: 'biliary-tract', specialty: 'gastrointestinal-surgery', chapter: 'vias-biliares', beforeHeading: 'enfermedades biliares' },
  { note: 'appendicitis', specialty: 'gastrointestinal-surgery', chapter: 'apendice', beforeHeading: 'apendicitis' },
  { note: 'digestive-functions', specialty: 'gastrointestinal-surgery', chapter: 'estomago', beforeHeading: 'fisiologia' },
  { note: 'shock', specialty: 'gastrointestinal-surgery', chapter: 'shock', beforeHeading: 'shock cardiogenico' },

  // Ginecología y Obstetricia
  { note: 'pregnancy-dating-and-prenatal-care', specialty: 'obstetrics-gynecology', chapter: 'control-prenatal', beforeHeading: 'ecografia del embarazo' },
  { note: 'first-trimester-bleeding', specialty: 'obstetrics-gynecology', chapter: 'hemorragias-del-primer-trimestre', beforeHeading: 'aborto' },
  { note: 'ectopic-pregnancy', specialty: 'obstetrics-gynecology', chapter: 'hemorragias-del-primer-trimestre', beforeHeading: 'embarazo ectopico' },
  { note: 'second-trimester-bleeding', specialty: 'obstetrics-gynecology', chapter: 'hemorragia-del-segundo-trimestre-del-embarazo', beforeHeading: 'dppni' },
  { note: 'postpartum-hemorrhage', specialty: 'obstetrics-gynecology', chapter: 'hemorragia-postparto', beforeHeading: 'diagnostico' },

  // Pediatría
  { note: 'growth-and-development', specialty: 'pediatrics', chapter: 'generalidades', beforeHeading: 'metodos para evaluacion de la edad' },
  { note: 'newborn-screening', specialty: 'pediatrics', chapter: 'generalidades', beforeHeading: 'test del talon' },
  { note: 'dehydration', specialty: 'pediatrics', chapter: 'deshidratacion', beforeHeading: 'tipo de deshidratacion' },
  { note: 'expanded-immunization-program', specialty: 'pediatrics', chapter: 'inmunizacion', beforeHeading: 'pai - programa ampliado de inmunizacion' },
]

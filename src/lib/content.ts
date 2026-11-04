// Domain metadata visible to client components. Content bodies live in
// data/medical and are read server-side by src/lib/content/corpus.ts.
export type SpecialtySlug =
  | 'internal-medicine'
  | 'gastrointestinal-surgery'
  | 'obstetrics-gynecology'
  | 'pediatrics'

export type NoteCategorySlug = SpecialtySlug | 'radiology'

export type Topic = {
  slug: string
  name: string
  /** Optional grouping inside the notes menu (e.g. "Cardiología"). */
  tag?: string
}

export type NoteCategory = {
  slug: NoteCategorySlug
  name: string
  topics: Topic[]
}

export type Specialty = {
  slug: SpecialtySlug
  number: string
  name: string
  detail: string
  topics: Topic[]
}

const internalMedicine: Specialty = {
  slug: 'internal-medicine',
  number: '01',
  name: 'Medicina Interna / Semiología',
  detail: '36 capítulos',
  topics: [
    { slug: 'cushing-triad', name: 'Tríada de Cushing', tag: 'Tríadas' },
    { slug: 'charcot-triad-multiple-sclerosis', name: 'Tríada de Charcot (esclerosis múltiple)', tag: 'Tríadas' },
    { slug: 'charcot-triad-cholangitis', name: 'Tríada de Charcot (colangitis)', tag: 'Tríadas' },
    { slug: 'reynolds-pentad', name: 'Pentada de Reynolds', tag: 'Tríadas' },
    { slug: 'beck-triad', name: 'Tríada de Beck', tag: 'Tríadas' },
    { slug: 'hutchinson-triad', name: 'Tríada de Hutchinson', tag: 'Tríadas' },
    { slug: 'meningitis-triad', name: 'Tríada de meningitis', tag: 'Tríadas' },
    { slug: 'ectopic-pregnancy-triad', name: 'Tríada clásica de embarazo ectópico', tag: 'Tríadas' },
    { slug: 'virchow-triad', name: 'Tríada de Virchow', tag: 'Tríadas' },
    { slug: 'whipple-triad', name: 'Tríada de Whipple', tag: 'Tríadas' },
    { slug: 'infective-endocarditis-triad', name: 'Tríada de la endocarditis infecciosa', tag: 'Tríadas' },
    { slug: 'classic-renal-cancer-triad', name: 'Tríada clásica del cáncer renal', tag: 'Tríadas' },
    { slug: 'lethal-trauma-triad', name: 'Tríada letal del trauma', tag: 'Tríadas' },
    { slug: 'saint-triad', name: 'Tríada de Saint', tag: 'Tríadas' },
    { slug: 'torch-syndrome', name: 'Tríada de TORCH (toxoplasmosis congénita)', tag: 'Tríadas' },
    { slug: 'arterial-hypertension', name: 'Hipertensión arterial', tag: 'Cardiología' },
    { slug: 'heart-failure', name: 'Insuficiencia cardíaca', tag: 'Cardiología' },
    { slug: 'acute-myocardial-infarction', name: 'Infarto agudo de miocardio', tag: 'Cardiología' },
    { slug: 'syncope', name: 'Síncope', tag: 'Cardiología' },
    { slug: 'cardiovascular-examination', name: 'Semiología cardiovascular', tag: 'Cardiología' },
    { slug: 'pleural-effusion', name: 'Derrame pleural', tag: 'Neumología' },
    { slug: 'tuberculosis', name: 'Tuberculosis', tag: 'Neumología' },
    { slug: 'pneumonia', name: 'Neumonía', tag: 'Neumología' },
    { slug: 'respiratory-patterns', name: 'Patrones respiratorios', tag: 'Neumología' },
    { slug: 'diabetic-foot', name: 'Pie diabético', tag: 'Endocrinología' },
    { slug: 'insulin', name: 'Insulina', tag: 'Endocrinología' },
    { slug: 'hypoglycemia', name: 'Hipoglucemia', tag: 'Endocrinología' },
    { slug: 'lupus-nephritis', name: 'Nefritis lúpica', tag: 'Nefrología' },
    { slug: 'metabolic-acidosis', name: 'Acidosis metabólica', tag: 'Nefrología' },
    { slug: 'antiepileptic-drugs', name: 'Antiepilépticos', tag: 'Neurología' },
    { slug: 'encephalomyelitis', name: 'Encefalomielitis', tag: 'Neurología' },
    { slug: 'chagas-disease', name: 'Chagas', tag: 'Infectología' },
    { slug: 'arbovirus-infections', name: 'Arbovirosis', tag: 'Infectología' },
  ],
}

const gastrointestinalSurgery: Specialty = {
  slug: 'gastrointestinal-surgery',
  number: '02',
  name: 'Cirugía / Traumatología',
  detail: '13 capítulos',
  topics: [
    { slug: 'digestive-hemorrhages', name: 'Hemorragias y trauma', tag: 'Cirugía' },
    { slug: 'biliary-tract', name: 'Vía biliar', tag: 'Cirugía' },
    { slug: 'appendicitis', name: 'Apendicitis', tag: 'Cirugía' },
    { slug: 'digestive-functions', name: 'Funciones digestivas', tag: 'Cirugía' },
    { slug: 'shock', name: 'Shock', tag: 'Emergencias' },
    { slug: 'flashcards', name: 'Flash cards de emergencias', tag: 'Emergencias' },
  ],
}

const obstetricsGynecology: Specialty = {
  slug: 'obstetrics-gynecology',
  number: '03',
  name: 'Ginecología y Obstetricia',
  detail: '21 capítulos',
  topics: [
    { slug: 'pregnancy-dating-and-prenatal-care', name: 'Embarazo: datación y control', tag: 'Obstetricia' },
    { slug: 'first-trimester-bleeding', name: 'Hemorragias de la primera mitad del embarazo', tag: 'Obstetricia' },
    { slug: 'ectopic-pregnancy', name: 'Embarazo ectópico', tag: 'Obstetricia' },
    { slug: 'second-trimester-bleeding', name: 'Hemorragias de la segunda mitad del embarazo', tag: 'Obstetricia' },
    { slug: 'postpartum-hemorrhage', name: 'Hemorragia postparto', tag: 'Obstetricia' },
  ],
}

const pediatrics: Specialty = {
  slug: 'pediatrics',
  number: '04',
  name: 'Pediatría',
  detail: '25 capítulos',
  topics: [
    { slug: 'growth-and-development', name: 'Crecimiento y desarrollo', tag: 'Pediatría' },
    { slug: 'newborn-screening', name: 'Cribado neonatal / prueba del talón', tag: 'Pediatría' },
    { slug: 'dehydration', name: 'Deshidratación', tag: 'Pediatría' },
    { slug: 'expanded-immunization-program', name: 'PAI: calendario de inmunizaciones (Bolivia)', tag: 'Pediatría' },
    { slug: 'meningitis', name: 'Meningitis', tag: 'Infectología' },
  ],
}

export const specialties: Specialty[] = [
  internalMedicine,
  gastrointestinalSurgery,
  obstetricsGynecology,
  pediatrics,
]

export const noteCategories: NoteCategory[] = [
  ...specialties,
  {
    slug: 'radiology',
    name: 'Radiología e Imagenología',
    topics: [
      {
        slug: 'ct-densities',
        name: 'TC: densidades en la escala de Hounsfield (ACV isquémico frente a hemorrágico)',
      },
      { slug: 'ultrasound-echogenicity', name: 'Ecografía: ecogenicidad' },
    ],
  },
]

export function getSpecialty(slug: string): Specialty | undefined {
  return specialties.find((specialty) => specialty.slug === slug)
}

export function getNoteCategory(slug: string): NoteCategory | undefined {
  return noteCategories.find((category) => category.slug === slug)
}

/** Finds the notes category that owns a topic (notes are unique across the corpus). */
export function getNoteCategoryForTopic(topicSlug: string): NoteCategory | undefined {
  return noteCategories.find((category) => category.topics.some((topic) => topic.slug === topicSlug))
}

export function getTopic(categorySlug: string, topicSlug: string): Topic | undefined {
  return getNoteCategory(categorySlug)?.topics.find((topic) => topic.slug === topicSlug)
}

export type NextLesson = {
  href: string
  label: string
}

/** Next apunte within the category, then the first apunte of the next category. */
export function getNextLesson(categorySlug: string, topicSlug: string): NextLesson | undefined {
  const categoryIndex = noteCategories.findIndex((category) => category.slug === categorySlug)
  const category = noteCategories[categoryIndex]
  if (!category) return undefined

  const topicIndex = category.topics.findIndex((topic) => topic.slug === topicSlug)
  if (topicIndex < 0) return undefined

  const nextTopic = category.topics[topicIndex + 1]
  if (nextTopic) {
    return {
      href: `/dashboard/lesson/${category.slug}/${nextTopic.slug}`,
      label: nextTopic.name,
    }
  }

  const nextCategory = noteCategories[categoryIndex + 1]
  const firstTopic = nextCategory?.topics[0]
  if (!nextCategory || !firstTopic) return undefined

  return {
    href: `/dashboard/lesson/${nextCategory.slug}/${firstTopic.slug}`,
    label: nextCategory.name,
  }
}

export function specialtyName(slug: SpecialtySlug): string {
  return getSpecialty(slug)?.name ?? slug
}

export type QuizQuestionSource = {
  specialty: SpecialtySlug
  /** Topic slug inside the specialty; the UI resolves it to its display name. */
  topic: string
}

export type QuizQuestion = {
  prompt: string
  options: string[]
  correctIndex: number
  /** Summarised from the source apunte's "Puntos clave", not generated at runtime. */
  explanation: string
  source: QuizQuestionSource
}

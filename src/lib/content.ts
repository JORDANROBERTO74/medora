// Domain metadata visible to client components. Content bodies live in
// data/medical and are read server-side by src/lib/content/corpus.ts.
export type SpecialtySlug =
  | 'cardiology'
  | 'obstetrics-gynecology'
  | 'gastrointestinal-surgery'
  | 'pulmonology'
  | 'infectious-diseases'
  | 'endocrinology'
  | 'nephrology'
  | 'emergency-medicine'
  | 'pediatrics'
  | 'neurology'
  | 'radiology'
  | 'internal-medicine'

export type Topic = {
  slug: string
  name: string
}

export type Specialty = {
  slug: SpecialtySlug
  number: string
  name: string
  detail: string
  progress: number
  topics: Topic[]
}

export const specialties: Specialty[] = [
  {
    slug: 'cardiology',
    number: '01',
    name: 'Cardiología',
    detail: '5 temas',
    progress: 0,
    topics: [
      { slug: 'arterial-hypertension', name: 'Hipertensión arterial' },
      { slug: 'heart-failure', name: 'Insuficiencia cardíaca' },
      { slug: 'acute-myocardial-infarction', name: 'Infarto agudo de miocardio' },
      { slug: 'syncope', name: 'Síncope' },
      { slug: 'cardiovascular-examination', name: 'Semiología cardiovascular' },
    ],
  },
  {
    slug: 'obstetrics-gynecology',
    number: '02',
    name: 'Ginecología y Obstetricia',
    detail: '5 temas',
    progress: 0,
    topics: [
      { slug: 'pregnancy-dating-and-prenatal-care', name: 'Embarazo: datación y control' },
      { slug: 'first-trimester-bleeding', name: 'Hemorragias de la primera mitad del embarazo' },
      { slug: 'ectopic-pregnancy', name: 'Embarazo ectópico' },
      { slug: 'second-trimester-bleeding', name: 'Hemorragias de la segunda mitad del embarazo' },
      { slug: 'postpartum-hemorrhage', name: 'Hemorragia postparto' },
    ],
  },
  {
    slug: 'gastrointestinal-surgery',
    number: '03',
    name: 'Cirugía / Traumatología',
    detail: '4 temas',
    progress: 0,
    topics: [
      { slug: 'digestive-hemorrhages', name: 'Hemorragias' },
      { slug: 'biliary-tract', name: 'Vía biliar' },
      { slug: 'appendicitis', name: 'Apendicitis' },
      { slug: 'digestive-functions', name: 'Funciones digestivas' },
    ],
  },
  {
    slug: 'pulmonology',
    number: '04',
    name: 'Neumología',
    detail: '4 temas',
    progress: 0,
    topics: [
      { slug: 'pleural-effusion', name: 'Derrame pleural' },
      { slug: 'tuberculosis', name: 'Tuberculosis' },
      { slug: 'pneumonia', name: 'Neumonía' },
      { slug: 'respiratory-patterns', name: 'Patrones respiratorios' },
    ],
  },
  {
    slug: 'infectious-diseases',
    number: '05',
    name: 'Infectología',
    detail: '3 temas',
    progress: 0,
    topics: [
      { slug: 'chagas-disease', name: 'Chagas' },
      { slug: 'arbovirus-infections', name: 'Arbovirosis' },
      { slug: 'meningitis', name: 'Meningitis' },
    ],
  },
  {
    slug: 'endocrinology',
    number: '06',
    name: 'Endocrinología y Metabolismo',
    detail: '3 temas',
    progress: 0,
    topics: [
      { slug: 'diabetic-foot', name: 'Pie diabético' },
      { slug: 'insulin', name: 'Insulina' },
      { slug: 'hypoglycemia', name: 'Hipoglucemia' },
    ],
  },
  {
    slug: 'nephrology',
    number: '07',
    name: 'Nefrología',
    detail: '2 temas',
    progress: 0,
    topics: [
      { slug: 'lupus-nephritis', name: 'Nefritis lúpica' },
      { slug: 'metabolic-acidosis', name: 'Acidosis metabólica' },
    ],
  },
  {
    slug: 'emergency-medicine',
    number: '08',
    name: 'Emergencias y Shock',
    detail: '2 temas',
    progress: 0,
    topics: [
      { slug: 'shock', name: 'Shock' },
      { slug: 'flashcards', name: 'Flash cards de emergencias' },
    ],
  },
  {
    slug: 'pediatrics',
    number: '09',
    name: 'Pediatría',
    detail: '4 temas',
    progress: 0,
    topics: [
      { slug: 'growth-and-development', name: 'Crecimiento y desarrollo' },
      { slug: 'newborn-screening', name: 'Cribado neonatal / prueba del talón' },
      { slug: 'dehydration', name: 'Deshidratación' },
      { slug: 'expanded-immunization-program', name: 'PAI: calendario de inmunizaciones (Bolivia)' },
    ],
  },
  {
    slug: 'neurology',
    number: '10',
    name: 'Neurología',
    detail: '2 temas',
    progress: 0,
    topics: [
      { slug: 'antiepileptic-drugs', name: 'Antiepilépticos' },
      { slug: 'encephalomyelitis', name: 'Encefalomielitis' },
    ],
  },
  {
    slug: 'radiology',
    number: '11',
    name: 'Radiología e Imagenología',
    detail: '2 temas',
    progress: 0,
    topics: [
      {
        slug: 'ct-densities',
        name: 'TC: densidades en la escala de Hounsfield (ACV isquémico frente a hemorrágico)',
      },
      { slug: 'ultrasound-echogenicity', name: 'Ecografía: ecogenicidad' },
    ],
  },
  {
    slug: 'internal-medicine',
    number: '12',
    name: 'Medicina Interna / Semiología',
    detail: '15 temas',
    progress: 0,
    topics: [
      { slug: 'cushing-triad', name: 'Tríada de Cushing' },
      { slug: 'charcot-triad-multiple-sclerosis', name: 'Tríada de Charcot (esclerosis múltiple)' },
      { slug: 'charcot-triad-cholangitis', name: 'Tríada de Charcot (colangitis)' },
      { slug: 'reynolds-pentad', name: 'Pentada de Reynolds' },
      { slug: 'beck-triad', name: 'Tríada de Beck' },
      { slug: 'hutchinson-triad', name: 'Tríada de Hutchinson' },
      { slug: 'meningitis-triad', name: 'Tríada de meningitis' },
      { slug: 'ectopic-pregnancy-triad', name: 'Tríada clásica de embarazo ectópico' },
      { slug: 'virchow-triad', name: 'Tríada de Virchow' },
      { slug: 'whipple-triad', name: 'Tríada de Whipple' },
      { slug: 'infective-endocarditis-triad', name: 'Tríada de la endocarditis infecciosa' },
      { slug: 'classic-renal-cancer-triad', name: 'Tríada clásica del cáncer renal' },
      { slug: 'lethal-trauma-triad', name: 'Tríada letal del trauma' },
      { slug: 'saint-triad', name: 'Tríada de Saint' },
      { slug: 'torch-syndrome', name: 'Tríada de TORCH (toxoplasmosis congénita)' },
    ],
  },
]

export function getSpecialty(slug: string): Specialty | undefined {
  return specialties.find((specialty) => specialty.slug === slug)
}

export function getTopic(specialtySlug: string, topicSlug: string): Topic | undefined {
  return getSpecialty(specialtySlug)?.topics.find((topic) => topic.slug === topicSlug)
}

export function specialtyName(slug: SpecialtySlug): string {
  return getSpecialty(slug)?.name ?? slug
}

export function getNextReview(): { specialty: Specialty; topic: Topic } | undefined {
  const specialty = getSpecialty('cardiology')
  const topic = specialty?.topics[0]
  return specialty && topic ? { specialty, topic } : undefined
}

export type QuizQuestion = {
  prompt: string
  options: string[]
  correctIndex: number
}

export const quizQuestion: QuizQuestion = {
  prompt: '¿Qué describe mejor la inflamación aguda?',
  options: [
    'La inflamación es una respuesta protectora',
    'La inflamación siempre indica infección',
    'La inflamación solo ocurre en la piel',
    'La inflamación impide la reparación tisular',
  ],
  correctIndex: 0,
}

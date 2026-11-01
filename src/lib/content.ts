// Domain content: identifiers in English, visible strings in Spanish.
export type SpecialtySlug = 'surgery' | 'gynecology' | 'internal-medicine' | 'pediatrics'

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
    slug: 'surgery',
    number: '01',
    name: 'Cirugía',
    detail: '12 temas · 2 h 40 min',
    progress: 82,
    topics: [
      { slug: 'acute-inflammation', name: 'Inflamación aguda' },
      { slug: 'wound-healing', name: 'Cicatrización y reparación' },
      { slug: 'hypovolemic-shock', name: 'Shock hipovolémico' },
      { slug: 'surgical-infections', name: 'Infecciones quirúrgicas' },
      { slug: 'abdominal-trauma', name: 'Trauma abdominal' },
    ],
  },
  {
    slug: 'gynecology',
    number: '02',
    name: 'Ginecología',
    detail: '10 temas · 2 h 05 min',
    progress: 46,
    topics: [
      { slug: 'prenatal-care', name: 'Control prenatal' },
      { slug: 'obstetric-hemorrhage', name: 'Hemorragia obstétrica' },
      { slug: 'preeclampsia', name: 'Preeclampsia' },
      { slug: 'contraception', name: 'Anticoncepción' },
      { slug: 'cervical-pathology', name: 'Patología cervical' },
    ],
  },
  {
    slug: 'internal-medicine',
    number: '03',
    name: 'Medicina Interna',
    detail: '18 temas · 4 h 20 min',
    progress: 0,
    topics: [
      { slug: 'heart-failure', name: 'Insuficiencia cardíaca' },
      { slug: 'diabetes-mellitus', name: 'Diabetes mellitus' },
      { slug: 'community-acquired-pneumonia', name: 'Neumonía adquirida' },
      { slug: 'anemia', name: 'Anemia' },
      { slug: 'sepsis', name: 'Sepsis' },
    ],
  },
  {
    slug: 'pediatrics',
    number: '04',
    name: 'Pediatría',
    detail: '14 temas · 3 h 10 min',
    progress: 0,
    topics: [
      { slug: 'growth-and-development', name: 'Crecimiento y desarrollo' },
      { slug: 'dehydration', name: 'Deshidratación' },
      { slug: 'bronchiolitis', name: 'Bronquiolitis' },
      { slug: 'fever-in-pediatrics', name: 'Fiebre en pediatría' },
      { slug: 'vaccination', name: 'Vacunación' },
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
  const specialty = getSpecialty('surgery')
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

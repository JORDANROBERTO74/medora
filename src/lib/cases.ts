import type { SpecialtySlug } from './content'

// Clinical cases: identifiers in English, visible strings in Spanish.
// Exam-style: all data upfront in three sections; one best-answer question with per-option rationales.
export type ClinicalCase = {
  id: string
  specialtySlug: SpecialtySlug
  title: string
  history: string
  exam: string
  labs: string
  question: string
  options: string[]
  correctIndex: number
  rationales: string[]
  hint: string
  discussion: string
}

export const clinicalCases: ClinicalCase[] = [
  {
    id: 'acute-appendicitis',
    specialtySlug: 'gastrointestinal-surgery',
    title: 'Dolor en fosa ilíaca derecha',
    history:
      'Varón de 24 años con dolor abdominal que inició en epigastrio y migró en 12 horas a la fosa ilíaca derecha. Anorexia, náuseas y un episodio de vómito. Sin diarrea ni disuria.',
    exam:
      'Temperatura 38.1 °C, presión arterial 118/74 mmHg, frecuencia cardíaca 96 lpm. Abdomen con dolor a la palpación profunda y rebote positivo en el punto de McBurney; sin defensa generalizada.',
    labs: 'Leucocitos 14 800/mm³ con 86 % de neutrófilos. PCR 42 mg/L. Orina sin leucocitos ni nitritos.',
    question: '¿Cuál es el diagnóstico más probable?',
    options: ['Apendicitis aguda', 'Cólico renal derecho', 'Gastroenteritis viral', 'Diverticulitis aguda'],
    correctIndex: 0,
    rationales: [
      'La migración del dolor, el rebote en McBurney y la neutrofilia son clásicos de apendicitis aguda.',
      'El cólico renal da dolor cólico en flanco irradiado a ingle, a menudo con hematuria; el rebote peritoneal no es típico.',
      'La gastroenteritis cursa con diarrea y vómitos, sin irritación peritoneal localizada ni neutrofilia marcada.',
      'La diverticulitis es más frecuente en mayores de 50 años y duele en la fosa ilíaca izquierda.',
    ],
    hint: 'Presta atención a la migración del dolor y a lo que revela el rebote peritoneal.',
    discussion:
      'La conducta es ayuno, analgesia, antibiótico y valoración quirúrgica urgente; la ecografía o la tomografía confirman si la presentación no es típica.',
  },
  {
    id: 'ectopic-pregnancy',
    specialtySlug: 'obstetrics-gynecology',
    title: 'Dolor pélvico con amenorrea',
    history:
      'Mujer de 29 años con amenorrea de 7 semanas, dolor pélvico unilateral de inicio súbito y manchado vaginal escaso. Mareo al incorporarse.',
    exam:
      'Presión arterial 96/60 mmHg, frecuencia cardíaca 108 lpm, palidez mucocutánea. Abdomen con dolor suprapúbico y signos de irritación peritoneal leve.',
    labs: 'β-hCG positiva. Hemoglobina 10.2 g/dL. Ecografía transvaginal: útero vacío, sin saco gestacional intrauterino; líquido libre en fondo de saco.',
    question: '¿Cuál es el diagnóstico más probable?',
    options: ['Embarazo ectópico', 'Amenaza de aborto', 'Quiste ovárico roto', 'Enfermedad inflamatoria pélvica'],
    correctIndex: 0,
    rationales: [
      'Amenorrea, β-hCG positiva, útero vacío y líquido libre en una paciente inestable apuntan a ectópico roto.',
      'La amenaza de aborto cursa con sangrado y dolor cólico, pero el saco suele estar en útero y no hay líquido libre.',
      'Un quiste roto puede causar dolor y líquido libre, pero la β-hCG positiva y la amenorrea apuntan a gestación.',
      'La enfermedad inflamatoria pélvica da dolor bilateral, fiebre y flujo, y no explica la amenorrea con β-hCG positiva.',
    ],
    hint: 'La combinación de amenorrea, β-hCG positiva y útero vacío es la clave.',
    discussion:
      'La inestabilidad hemodinámica sugiere rotura: dos vías periféricas, tipar y cruzar, y valoración quirúrgica inmediata.',
  },
  {
    id: 'diabetic-ketoacidosis',
    specialtySlug: 'internal-medicine',
    title: 'Poliuria y deshidratación',
    history:
      'Mujer de 31 años con poliuria, polidipsia y pérdida de 5 kg en tres semanas. Cuadro de 24 horas con náuseas y somnolencia creciente.',
    exam:
      'Somnolienta pero orientable, mucosas secas, respiración de Kussmaul y aliento cetónico. Presión arterial 104/66 mmHg, frecuencia cardíaca 112 lpm.',
    labs: 'Glucemia 420 mg/dL, cetonas en orina positivas, pH arterial 7.18, bicarbonato 12 mEq/L, potasio 4.1 mEq/L.',
    question: '¿Cuál es el diagnóstico más probable?',
    options: [
      'Cetoacidosis diabética',
      'Estado hiperosmolar hiperglucémico',
      'Acidosis láctica',
      'Intoxicación por metanol',
    ],
    correctIndex: 0,
    rationales: [
      'Hiperglucemia, cetosis y acidosis metabólica con anión gap elevado definen la cetoacidosis diabética.',
      'El estado hiperosmolar tiene glucemia mucho más alta pero sin cetosis ni acidosis significativas.',
      'La acidosis láctica no produce cetosis y suele acompañarse de hipoperfusión o fármacos.',
      'El metanol da acidosis con anión gap, pero sin hiperglucemia ni cetonas, y con síntomas visuales.',
    ],
    hint: 'Fíjate en la tríada: glucemia alta, cetonas y pH bajo.',
    discussion:
      'El pilar inicial es la hidratación con cristaloides y la corrección del potasio antes de la insulina; después se corrige la glucemia y se busca el factor desencadenante.',
  },
  {
    id: 'bacterial-meningitis',
    specialtySlug: 'pediatrics',
    title: 'Fiebre e irritabilidad en lactante',
    history:
      'Lactante de 4 meses con fiebre de 39 °C de 24 horas, irritabilidad que no cede al sostenerlo y rechazo de las tomas. La madre refiere menos actividad de lo habitual.',
    exam:
      'Fontanela abombada, rigidez de nuca y petequias incipientes en el tronco. Glasgow 14. Presión arterial 86/54 mmHg, frecuencia cardíaca 156 lpm.',
    labs: 'Leucocitos 18 200/mm³ con neutrofilia, PCR 96 mg/L. Pendiente punción lumbar.',
    question: '¿Cuál es el diagnóstico más probable?',
    options: ['Meningitis bacteriana', 'Sepsis de origen urinario', 'Bronquiolitis', 'Fiebre sin foco'],
    correctIndex: 0,
    rationales: [
      'Fiebre, fontanela abombada, rigidez de nuca y petequias en un lactante sugieren meningitis bacteriana.',
      'La sepsis urinaria puede dar fiebre y leucocitosis, pero no explica los signos meníngeos ni las petequias.',
      'La bronquiolitis cursa con tos, sibilancias y dificultad respiratoria, sin signos meníngeos.',
      'La fiebre sin foco es un diagnóstico de exclusión; aquí ya hay signos meníngeos.',
    ],
    hint: 'Busca signos meníngeos y el estado de la fontanela.',
    discussion:
      'La prioridad es antibiótico empírico inmediato (cefalosporina de tercera generación más ampicilina) y soporte hemodinámico. La punción lumbar se realiza tras estabilizar y se difiere si hay signos de hipertensión intracraneal.',
  },
]

export function getCase(specialtySlug: SpecialtySlug): ClinicalCase | undefined {
  return clinicalCases.find((clinicalCase) => clinicalCase.specialtySlug === specialtySlug)
}

export function pickRandomCase(): ClinicalCase {
  return clinicalCases[Math.floor(Math.random() * clinicalCases.length)]
}

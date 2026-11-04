import type { QuizQuestion } from '@/lib/content'

/** Infectología pediátrica. */
export const questions: QuizQuestion[] = [
  {
    prompt: 'En un recién nacido con meningitis bacteriana, ¿qué microorganismos dominan?',
    options: [
      'Meningococo, neumococo y Haemophilus influenzae',
      'Estreptococo del grupo B, Escherichia coli y Listeria',
      'Neumococo y meningococo, como en el adulto',
      'Pseudomonas aeruginosa y Mycobacterium tuberculosis',
    ],
    correctIndex: 1,
    explanation:
      'El patrón etiológico cambia con la edad: en recién nacidos dominan el estreptococo del grupo B, Escherichia coli y Listeria; en niños y adolescentes, meningococo, neumococo y Haemophilus influenzae; y en adultos, neumococo y meningococo. Por eso la cobertura empírica se ajusta a la edad y al estado inmunitario del paciente.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: '¿Cómo se presenta la meningitis en un lactante?',
    options: [
      'Con la tríada clásica completa de fiebre, cefalea y rigidez de nuca',
      'Con exantema petequial como manifestación obligatoria',
      'Con Kernig y Brudzinski positivos como único signo',
      'Con irritabilidad, menos actividad, dificultad para despertar, llanto débil y continuo, rechazo del alimento y abombamiento de la fontanela',
    ],
    correctIndex: 3,
    explanation:
      'En el lactante el patrón no es el del adulto: aparece irritabilidad, menos actividad, dificultad para despertar, llanto débil y continuo, rechazo del alimento y abombamiento de la fontanela. A ello se añaden el mal aspecto general y el abombamiento fontanelar de la tabla de NICE. Esa presentación inespecífica explica que la ausencia de signos clásicos no descarte la meningitis.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: 'Ante la sospecha de enfermedad meningocócica, ¿cómo debe hacerse el examen de la piel?',
    options: [
      'En todo el cuerpo, incluida la zona del pañal, y buscando petequias conjuntivales',
      'Solo en el tronco, donde el exantema es más visible',
      'Únicamente si el paciente refiere prurito',
      'Basta con mirar las extremidades a la luz de la habitación',
    ],
    correctIndex: 0,
    explanation:
      'El examen de la piel debe incluir todo el cuerpo, también la zona del pañal, y la búsqueda de petequias conjuntivales; los exantemas son más difíciles de ver en piel oscura. La enfermedad meningocócica se sospecha ante un exantema hemorrágico no blanqueable con lesiones mayores de 2 mm o una púrpura de progresión rápida, y no se descarta por su ausencia.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: '¿Qué patrón de líquido cefalorraquídeo corresponde a la meningitis bacteriana?',
    options: [
      'Proteínas disminuidas y glucosa aumentada',
      'Proteínas y glucosa normales con leucocitos elevados',
      'Proteínas aumentadas y glucosa disminuida',
      'Glucosa aumentada con proteínas normales',
    ],
    correctIndex: 2,
    explanation:
      'En la meningitis bacteriana el líquido cefalorraquídeo muestra aumento de proteínas y descenso de la glucosa. Ese patrón se explica porque la bacteria libera endotoxinas y ácido teicoico que desencadenan la respuesta inflamatoria. El diagnóstico se confirma con la clínica, el laboratorio sanguíneo y el análisis del LCR, sin que ningún resultado justifique retrasar el antibiótico.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: 'En un entorno no epidémico, ¿qué tratamiento acompañante indica la OMS en la meningitis bacteriana?',
    options: [
      'Corticoide oral al tercer día, cuando la fiebre cede',
      'Corticoide solo si aparece exantema',
      'Nunca se administran corticoides en la meningitis',
      'Corticoide intravenoso con la primera dosis de antibiótico',
    ],
    correctIndex: 3,
    explanation:
      'En entornos no epidémicos la OMS indica añadir corticoide intravenoso —dexametasona— con la primera dosis de antibiótico para reducir la respuesta inflamatoria y el riesgo de secuelas neurológicas y muerte. El Manual MSD coincide en que el tratamiento combina antibióticos y glucocorticoides administrados cuanto antes. Después se ajusta según cultivo y antibiograma.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: '¿En qué grupos se reserva la cobertura frente a Listeria?',
    options: [
      'En todos los pacientes con meningitis, sea cual sea la edad',
      'En mayores de 50 años, inmunodeprimidos y gestantes',
      'Solo en niños y adolescentes previamente sanos',
      'Únicamente en quienes tienen implante coclear',
    ],
    correctIndex: 1,
    explanation:
      'La cobertura frente a Listeria, que el material base resuelve con ampicilina, se reserva a los grupos de riesgo: mayores de 50 años, inmunodeprimidos y gestantes. La razón es que el patrón etiológico cambia con la edad y con la inmunidad. En el inmunodeprimido también hay que considerar Pseudomonas aeruginosa, Mycobacterium tuberculosis y gramnegativos.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: '¿Cuál es la causa más frecuente de muerte en la fase aguda de la meningitis?',
    options: [
      'La herniación',
      'El empiema subdural',
      'La parálisis del sexto par',
      'La hiponatremia por secreción inadecuada de hormona antidiurética',
    ],
    correctIndex: 0,
    explanation:
      'Entre las complicaciones agudas figuran hidrocefalia, infartos arteriales o venosos por trombosis, parálisis del sexto par, sordera, empiema subdural, hipertensión intracraneal por edema cerebral, absceso cerebral y herniación, que es la causa más frecuente de muerte en la fase aguda. También puede aparecer shock séptico, coagulación intravascular diseminada e hiponatremia por secreción inadecuada de hormona antidiurética.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: '¿En qué se apoya la prevención de la meningitis bacteriana?',
    options: [
      'Solo en la vacunación frente al meningococo',
      'En aislar al caso durante cuarenta días',
      'En vacunación frente a meningococo, neumococo y Haemophilus influenzae tipo b, quimioprofilaxis de contactos estrechos y penicilina intraparto en portadoras de estreptococo del grupo B',
      'En administrar penicilina oral a todos los convivientes de cualquier meningitis',
    ],
    correctIndex: 2,
    explanation:
      'La prevención se apoya en tres pilares: vacunación frente a meningococo, neumococo y Haemophilus influenzae tipo b; quimioprofilaxis de los contactos estrechos de un caso de enfermedad meningocócica para eliminar el estado de portador; y penicilina intravenosa intraparto en las gestantes portadoras de estreptococo del grupo B.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: '¿Qué resultados se han descrito con la vacuna conjugada frente al meningococo A?',
    options: [
      'Redujo la enfermedad a la mitad, sin eliminar los casos confirmados',
      'Redujo en un 99 % la enfermedad confirmada por ese serogrupo en las poblaciones vacunadas',
      'Solo es eficaz en adultos mayores de 50 años',
      'Sustituyó a la quimioprofilaxis de los contactos',
    ],
    correctIndex: 1,
    explanation:
      'La vacuna conjugada frente al meningococo A redujo en un 99 % la enfermedad confirmada por ese serogrupo en las poblaciones vacunadas y no se han notificado casos confirmados desde 2017 en los países que la introdujeron. En 2023 se precalificó la primera vacuna conjugada pentavalente (A, C, W, Y y X), utilizada por primera vez en una campaña preventiva en Níger en 2025.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: 'Según NICE, ¿qué prueba se añade de forma sistemática en la sospecha de meningitis bacteriana?',
    options: [
      'Una resonancia magnética urgente antes del antibiótico',
      'La biopsia de piel de las lesiones purpúricas',
      'El estudio del complemento antes de iniciar el antibiótico',
      'La prueba del VIH, por su implicación en el riesgo de recurrencia',
    ],
    correctIndex: 3,
    explanation:
      'NICE añade la realización sistemática de una prueba del VIH en todo paciente con sospecha de meningitis bacteriana, por su implicación en el riesgo de recurrencia. El estudio inicial incluye además hemocultivo, recuento leucocitario con neutrófilos, proteína C reactiva o procalcitonina, glucemia, PCR en sangre entera para meningococo y neumococo, y frotis faríngeo para cultivo de meningococo.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: '¿Qué papel tienen los signos de Kernig y Brudzinski en las guías consultadas?',
    options: [
      'No figuran entre los criterios operativos: se priorizan la combinación de alarma y el estado mental',
      'Son el criterio principal para indicar la punción lumbar',
      'Sustituyen a la valoración del nivel de conciencia',
      'Solo se valoran en recién nacidos',
    ],
    correctIndex: 0,
    explanation:
      'El material base recoge los signos de Kernig y Brudzinski, pero las guías consultadas no los incluyen entre sus criterios operativos y priorizan la combinación de alarma y la valoración del estado mental. La sospecha se apoya en fiebre, cefalea, rigidez de nuca y alteración del estado de conciencia o de la cognición, no en un signo aislado.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
  {
    prompt: '¿Qué cifras de carga mundial de meningitis recoge el apunte para 2019?',
    options: [
      'Unos 240 000 casos y 2,5 millones de muertes',
      'Unos 21 526 casos sospechosos y 971 muertes en todo el mundo',
      'Unos 2,5 millones de casos, de ellos 1,6 millones bacterianos, con aproximadamente 240 000 muertes',
      'Unos 500 000 casos, todos bacterianos, con 50 000 muertes',
    ],
    correctIndex: 2,
    explanation:
      'En 2019 se notificaron unos 2,5 millones de casos de meningitis en el mundo, de los cuales 1,6 millones fueron bacterianos, con aproximadamente 240 000 muertes. La carga mayor corresponde al África subsahariana, aunque la enfermedad afecta a personas de cualquier edad y lugar. En 2025 el cinturón africano notificó 21 526 casos sospechosos y 971 muertes, con una letalidad del 4,5 %.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
]

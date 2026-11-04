import type { QuizQuestion } from '@/lib/content'

/** Neurología. */
export const questions: QuizQuestion[] = [
  {
    prompt: '¿De qué depende la elección del antiepiléptico según la guía NICE?',
    options: [
      'Del tipo de crisis y del tipo de epilepsia',
      'De una lista plana de principios activos ordenada por potencia',
      'Del electroencefalograma interictal, con independencia de la semiología',
      'Exclusivamente de la edad del paciente',
    ],
    correctIndex: 0,
    explanation:
      'La selección se deriva del tipo de crisis y del tipo de epilepsia, no de un listado plano de fármacos. La clasificación de la ILAE ordena el diagnóstico en tipo de crisis, tipo de epilepsia y síndrome epiléptico, y sitúa la etiología en cada nivel, porque dos pacientes con la misma semiología pueden necesitar fármacos distintos según el sustrato.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt:
      '¿Qué nivel de confianza exige la clasificación operativa de la ILAE para decidir entre crisis focal y generalizada?',
    options: ['El 60 %', 'El 70 %', 'El 80 %', 'El 95 %'],
    correctIndex: 2,
    explanation:
      'La clasificación operativa de 2017 fija en el 80 % el nivel de confianza exigido para decidir entre inicio focal y generalizado, y avanza solo hasta donde llega la información disponible. Una crisis es focal si se origina en un solo hemisferio y generalizada si aparece de forma aparentemente simultánea en ambos; existe además la categoría de origen desconocido.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿Por qué manifestación se clasifica una crisis epiléptica?',
    options: [
      'Por la manifestación más llamativa, aunque aparezca al final',
      'Por la duración total de la crisis',
      'Por el hallazgo electroencefalográfico más vistoso',
      'Por la primera manifestación, no por la más llamativa',
    ],
    correctIndex: 3,
    explanation:
      'Se clasifica por la primera manifestación, no por la más llamativa, con excepciones: la detención del comportamiento debe ocupar toda la crisis y la conciencia comprometida se marca si lo está en cualquier momento. La clasificación avanza solo hasta donde llega la información disponible y admite designaciones como ausencia típica o crisis focal con automatismo.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt:
      '¿Cuál es la primera línea de tratamiento en las crisis tónico-clónicas generalizadas?',
    options: [
      'Carbamazepina, oxcarbazepina o zonisamida',
      'Lamotrigina, levetiracetam o valproato',
      'Fenitoína o fenobarbital',
      'Etosuximida o felbamato',
    ],
    correctIndex: 1,
    explanation:
      'En las crisis tónico-clónicas generalizadas la primera línea es lamotrigina, levetiracetam o valproato, a elección; si fracasa se prueba otra de las tres y luego la tercera. La carbamazepina no se propone para este tipo de crisis, y el fenobarbital queda como adicional de segunda línea. La elección debe considerar el riesgo reproductivo del valproato.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿Cuál es la primera línea de tratamiento en las crisis focales?',
    options: [
      'Carbamazepina o fenitoína',
      'Valproato o etosuximida',
      'Lamotrigina o levetiracetam',
      'Fenobarbital o primidona',
    ],
    correctIndex: 2,
    explanation:
      'En las crisis focales la primera línea es lamotrigina o levetiracetam. La carbamazepina figura como monoterapia de segunda línea, junto con oxcarbazepina y zonisamida, y la lacosamida como tercera. El fenobarbital y la fenitoína han retrocedido a la tercera línea del tratamiento adicional. Confundir estos escalones lleva a iniciar con un fármaco que ya no es de primera elección.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿Cuál es la primera línea de tratamiento en las crisis mioclónicas?',
    options: [
      'Levetiracetam o valproato',
      'Carbamazepina o fenitoína',
      'Etosuximida en monoterapia',
      'Gabapentina o pregabalina',
    ],
    correctIndex: 0,
    explanation:
      'En las crisis mioclónicas la primera línea es levetiracetam o valproato. Carbamazepina, gabapentina, oxcarbazepina, fenitoína, pregabalina, tiagabina y vigabatrina pueden aumentar su frecuencia, y la lamotrigina también puede agravarlas. Prescribir un fármaco procovulsivante en una epilepsia mioclónica juvenil es un error clásico y potencialmente grave.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt:
      '¿Qué papel tiene la etosuximida cuando coexisten ausencias y otros tipos de crisis?',
    options: [
      'Es de primera línea en cualquier epilepsia generalizada',
      'Controla por igual las ausencias y las crisis tónico-clónicas',
      'Se usa en monoterapia cuando coexisten varios tipos de crisis',
      'Puede ser adicional de segunda línea, pero no monoterapia si coexisten otros tipos de crisis',
    ],
    correctIndex: 3,
    explanation:
      'La etosuximida puede ser adicional de segunda línea en las ausencias, pero no debe usarse en monoterapia cuando coexisten otros tipos de crisis, porque solo controla las ausencias. En ese escenario valproato, levetiracetam y lamotrigina son las opciones de primera línea. El error consiste en cubrir una epilepsia mixta con un fármaco de espectro limitado.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿Qué restricción regulatoria pesa sobre el valproato?',
    options: [
      'Puede iniciarse en cualquier adulto si la epilepsia es generalizada idiopática',
      'No debe iniciarse en menores de 55 años salvo documentación independiente de dos especialistas',
      'Solo está restringido en mujeres en edad fértil',
      'Está contraindicado en todos los mayores de 55 años',
    ],
    correctIndex: 1,
    explanation:
      'El valproato no debe iniciarse en personas menores de 55 años, hombres o mujeres, salvo que dos especialistas documenten de forma independiente la situación exigida. La restricción no se limita a las mujeres en edad fértil. En las epilepsias generalizadas idiopáticas es el más eficaz según la evidencia, pero su uso está subordinado a esas restricciones y la elección debe ser compartida y documentada.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿Qué antiepilépticos pueden agravar las ausencias y las mioclonías?',
    options: [
      'La fenitoína es el único fármaco que puede agravar las ausencias',
      'Ningún antiepiléptico puede aumentar la frecuencia de crisis',
      'Carbamazepina, gabapentina, oxcarbazepina, fenitoína, pregabalina, tiagabina y vigabatrina',
      'Solo el valproato puede agravar las crisis mioclónicas',
    ],
    correctIndex: 2,
    explanation:
      'Varios antiseizúricos pueden aumentar la frecuencia de crisis de ausencia y mioclónicas: carbamazepina, gabapentina, oxcarbazepina, fenitoína, pregabalina, tiagabina y vigabatrina. La lamotrigina también puede agravar las mioclónicas. Reconocer este efecto proconvulsivante es clave, porque añadir o cambiar a uno de estos fármacos puede empeorar el control en lugar de mejorarlo.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿Qué efecto tiene el tratamiento antiepiléptico prolongado sobre el hueso?',
    options: [
      'Carbamazepina, fenitoína, valproato o primidona pueden reducir la densidad mineral ósea',
      'Solo el valproato afecta al hueso, y únicamente en niños',
      'Los antiepilépticos aumentan la densidad mineral ósea',
      'El riesgo de osteomalacia desaparece al año de tratamiento',
    ],
    correctIndex: 0,
    explanation:
      'El tratamiento prolongado con carbamazepina, fenitoína, valproato o primidona puede reducir la densidad mineral ósea y aumentar el riesgo de osteomalacia, por lo que debe considerarse la suplementación en personas de riesgo. Este efecto no es exclusivo del valproato ni se limita a la infancia. La mayoría de los efectos adversos se manejan con titulación lenta y ajuste de dosis.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿Qué fármacos se usan como primera línea en las crisis tónicas o atónicas, las que producen caída al suelo?',
    options: [
      'Carbamazepina o fenitoína',
      'Etosuximida o clobazam',
      'Lamotrigina o valproato',
      'Levetiracetam o topiramato',
    ],
    correctIndex: 2,
    explanation:
      'En las crisis tónicas o atónicas la guía NICE sitúa lamotrigina o valproato en primera línea, y reserva clobazam, rufinamida o topiramato para la segunda. Si todo fracasa, se plantea la dieta cetogénica como tratamiento adicional en niños y el felbamato bajo supervisión de neurología experta. La elección depende del tipo de crisis, no de una lista única de fármacos.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: 'Si fracasan las dos primeras líneas en las crisis tónicas o atónicas, ¿qué se plantea?',
    options: [
      'Dieta cetogénica en niños y felbamato bajo supervisión experta',
      'Repetir la primera línea a dosis máxima',
      'Suspender el tratamiento y observar',
      'Carbamazepina en monoterapia',
    ],
    correctIndex: 0,
    explanation:
      'Cuando fracasan la primera y la segunda línea de las crisis tónicas o atónicas, la guía propone la dieta cetogénica como tratamiento adicional en niños y el felbamato bajo supervisión de neurología experta. No se trata de repetir el escalón anterior a dosis mayor, sino de cambiar de estrategia: estas crisis tienen un esquema propio dentro de la guía.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿En qué supuesto puede iniciarse valproato en una persona menor de 55 años?',
    options: [
      'En cualquier caso, con un consentimiento firmado',
      'Nunca, en ninguna circunstancia',
      'Solo en hombres, nunca en mujeres',
      'Solo con dos especialistas que documenten que no hay otra opción eficaz o que el riesgo reproductivo no aplica',
    ],
    correctIndex: 3,
    explanation:
      'El valproato no debe iniciarse en menores de 55 años, hombres o mujeres, salvo que dos especialistas documenten de forma independiente que no existe otra opción eficaz y tolerada, o que concurren razones de peso para que el riesgo reproductivo no aplique. En mujeres y niñas con capacidad de gestar solo se usa si otras opciones fracasaron y con el Programa de Prevención del Embarazo.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿Qué restricción tiene el topiramato en mujeres con capacidad de gestar?',
    options: [
      'No debe usarse salvo que se cumplan las condiciones del Programa de Prevención del Embarazo',
      'Está permitido sin ninguna condición',
      'Solo puede usarse durante el embarazo',
      'Está prohibido en hombres',
    ],
    correctIndex: 0,
    explanation:
      'El topiramato comparte con el valproato la restricción por riesgo reproductivo: no debe usarse en mujeres con capacidad de gestar salvo que se cumplan las condiciones del Programa de Prevención del Embarazo. Son restricciones regulatorias que condicionan el lugar del fármaco en el esquema, no una preferencia de estilo, y deben quedar documentadas antes de prescribirlo.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: '¿En qué poblaciones advierten las autoridades de reacciones graves con fenitoína?',
    options: [
      'Ascendencia europea o japonesa',
      'Ascendencia africana subsahariana',
      'Ascendencia china han o tailandesa',
      'En todas por igual',
    ],
    correctIndex: 2,
    explanation:
      'Las autoridades reguladoras advierten de reacciones graves con fenitoína en personas de ascendencia china han o tailandesa, y con carbamazepina —y potencialmente oxcarbazepina y eslicarbazepina— en ascendencia china han, tailandesa, europea o japonesa. Es un ejemplo de farmacogenética que conviene tener presente antes de elegir el fármaco en esas poblaciones.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt: 'Si la primera línea fracasa en las crisis focales, ¿qué fármacos se usan en monoterapia de segunda línea?',
    options: [
      'Carbamazepina, oxcarbazepina o zonisamida',
      'Etosuximida o clobazam',
      'Fenobarbital o primidona',
      'Felbamato o rufinamida',
    ],
    correctIndex: 0,
    explanation:
      'En las crisis focales la guía escalona la monoterapia: lamotrigina o levetiracetam en primera línea, carbamazepina, oxcarbazepina o zonisamida en segunda y lacosamida en tercera. Por eso la carbamazepina ya no es primera línea pese a la fama que conserva: su lugar vigente es el segundo escalón y, además, el de adicional de primera línea.',
    source: { specialty: 'internal-medicine', topic: 'antiepileptic-drugs' },
  },
  {
    prompt:
      '¿Qué enfermedad describe el material base bajo el nombre de encefalomielitis?',
    options: [
      'Una encefalitis autoinmune por anticuerpos contra el receptor NMDA',
      'Una esclerosis múltiple de curso progresivo',
      'Una mielitis transversa de origen desmielinizante',
      'La rabia, una zoonosis vírica que produce encefalomielitis progresiva',
    ],
    correctIndex: 3,
    explanation:
      'El material base describe, con otro nombre, la rabia: una zoonosis vírica que produce encefalomielitis progresiva y es virtualmente letal al 100 % una vez que aparecen los síntomas. No se trata de una encefalitis autoinmune ni de una enfermedad desmielinizante. El virus debe alcanzar el sistema nervioso central para producir síntomas, y entonces el manejo es solo de soporte y paliativo.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt:
      '¿Qué se sabe sobre el diagnóstico de la rabia antes de que aparezca la clínica?',
    options: [
      'La PCR en saliva permite confirmarla durante la incubación',
      'La serología es fiable desde el primer día de la exposición',
      'No existen herramientas aprobadas por la OMS capaces de detectarla antes de la clínica',
      'Los cuerpos de Negri se detectan en sangre durante la incubación',
    ],
    correctIndex: 2,
    explanation:
      'No hay herramientas diagnósticas aprobadas por la OMS capaces de detectar la infección antes de que aparezca la clínica, y el diagnóstico clínico es difícil sin una historia fiable de contacto o sin hidrofobia o aerofobia. Por eso la evaluación del riesgo, y no la analítica, es el paso que decide la conducta. La confirmación de certeza es posmortem, mediante antígenos o ácidos nucleicos.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: '¿Cuál es el periodo de incubación típico de la rabia?',
    options: ['De 2 a 3 días', 'De 2 a 3 meses', 'De 2 a 3 años', 'De 24 a 48 horas'],
    correctIndex: 1,
    explanation:
      'El periodo de incubación es típicamente de 2 a 3 meses, con un rango que va de una semana a un año según la localización de la entrada del virus y la carga viral. Los síntomas iniciales son inespecíficos: fiebre, dolor y sensaciones anómalas de hormigueo, punzada o quemazón en la sede de la herida. Esto explica que la exposición se evalúe mucho antes de que haya clínica.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: 'En la rabia paralítica, ¿cómo se presenta la enfermedad?',
    options: [
      'Alrededor del 20 % de los casos, con parálisis progresiva que comienza en la sede de la herida',
      'Es la forma más frecuente y cursa con hidrofobia y aerofobia',
      'Se caracteriza por hiperactividad y alucinaciones',
      'Produce una parálisis ascendente simétrica que empieza en los pies',
    ],
    correctIndex: 0,
    explanation:
      'La rabia paralítica representa alrededor del 20 % de los casos humanos, con un curso menos dramático y habitualmente más prolongado: parálisis muscular progresiva que comienza en la sede de la herida, coma gradual y muerte. Se diagnostica mal con frecuencia, lo que contribuye a la infranotificación. La hidrofobia, la aerofobia y la hiperactividad pertenecen a la forma furiosa.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt:
      '¿Cuánto debe durar el lavado de la herida en la profilaxis posexposición de la rabia?',
    options: [
      'Hasta que deje de sangrar',
      'Al menos 1 minuto',
      'Al menos 5 minutos',
      'Al menos 15 minutos',
    ],
    correctIndex: 3,
    explanation:
      'El lavado se hace con agua y jabón durante al menos 15 minutos, de forma inmediata y exhaustiva, y si se dispone de él se irriga con un virucida como la povidona yodada. No es un gesto simbólico: en modelos animales, el lavado exhaustivo sin otro tratamiento reduce de forma marcada la probabilidad de rabia. Es el primer componente de la profilaxis.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt:
      'Según la pauta intradérmica de la OMS, ¿cómo se administra la vacuna en una persona no inmunizada?',
    options: [
      'Un sitio de 0,1 mL en los días 0, 7 y 28',
      'Dos sitios de 0,5 mL en los días 0, 3 y 7',
      'Cuatro dosis intramusculares en los días 0, 3, 7 y 14',
      'Dos sitios de 0,1 mL en los días 0, 3 y 7',
    ],
    correctIndex: 3,
    explanation:
      'La OMS recomienda la vía intradérmica con dos sitios de 0,1 mL en los días 0, 3 y 7, es decir, una semana. En personas ya inmunizadas basta un sitio de 0,1 mL en los días 0 y 3. La vía intradérmica reduce el volumen de vacuna un 60-80 % y el número de visitas, sin pérdida de seguridad ni de eficacia. La pauta de cuatro dosis intramusculares es la alternativa de los CDC.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: '¿Cómo se administra la inmunoglobulina antirrábica humana?',
    options: [
      '20 UI/kg infiltrada alrededor de la herida, con un máximo total de 40 UI/kg',
      'En el mismo punto anatómico que la primera dosis de vacuna',
      'Únicamente a partir del día 7 de la exposición',
      'A todas las personas expuestas, aunque ya estén vacunadas',
    ],
    correctIndex: 0,
    explanation:
      'La dosis es de 20 UI/kg, infiltrada en lo posible alrededor de la herida, con un máximo total de 40 UI/kg. Si no se administró el día 0 puede darse hasta el día 7 inclusive, y nunca en la misma jeringa ni en el mismo punto anatómico que la primera dosis de vacuna. Quienes ya fueron vacunados no deben recibir inmunoglobulina. Está indicada en la categoría III.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt:
      'Un paciente refiere contacto directo con un murciélago sin mordedura ni arañazo identificables. ¿Qué corresponde?',
    options: [
      'Categoría I: solo lavado de la piel, sin profilaxis',
      'Categoría II: vacunación inmediata sin inmunoglobulina',
      'Categoría III: vacuna e inmunoglobulina',
      'No es una exposición: los murciélagos no transmiten la rabia',
    ],
    correctIndex: 2,
    explanation:
      'El contacto directo con un murciélago es categoría III aunque no se identifiquen mordedura ni arañazo, porque la OMS incluye esa exposición entre las graves, que exigen inmunoglobulina además de la vacuna. La categoría I se limita a tocar o alimentar animales o lamidos sobre piel intacta, y la II a mordisqueos o arañazos sin sangrado.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: '¿Cuál es la estrategia de prevención más costoeficaz frente a la rabia?',
    options: [
      'El sacrificio de perros vagabundos',
      'La vacunación canina masiva, incluidos los cachorros',
      'La profilaxis preexposición en toda la población',
      'El tratamiento de la rabia declarada con antivirales',
    ],
    correctIndex: 1,
    explanation:
      'La vacunación canina masiva, incluidos los cachorros, es la estrategia más costoeficaz porque interrumpe la transmisión en su origen; el sacrificio de perros vagabundos no es eficaz para controlar la rabia. La profilaxis preexposición se reserva a grupos de riesgo y no sustituye a la posexposición. No existe tratamiento eficaz de la rabia declarada. La OMS persigue la eliminación de la rabia canina para 2030.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: '¿Qué signos caracterizan la rabia furiosa?',
    options: [
      'Parálisis ascendente desde la sede de la herida',
      'Fiebre y exantema generalizado',
      'Hidrofobia y aerofobia, con hiperactividad y alucinaciones',
      'Rigidez de nuca aislada',
    ],
    correctIndex: 2,
    explanation:
      'La rabia furiosa cursa con hiperactividad, conducta excitable, alucinaciones, falta de coordinación, hidrofobia y aerofobia; la muerte llega en pocos días por parada cardiorrespiratoria. La forma paralítica, en cambio, representa alrededor del 20 % de los casos y se manifiesta con parálisis progresiva que empieza en la sede de la herida. Distinguir ambas formas ayuda a reconocer la enfermedad.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: 'Ante una mordedura que no sangra ni atraviesa la piel, ¿qué profilaxis corresponde?',
    options: [
      'Solo lavado, sin vacuna',
      'Lavado de la herida y vacunación inmediata, sin inmunoglobulina',
      'Lavado, vacuna e inmunoglobulina',
      'Inmunoglobulina sola',
    ],
    correctIndex: 1,
    explanation:
      'La OMS distingue tres categorías. La II —mordisqueo de piel descubierta, arañazos o abrasiones menores sin sangrado— exige lavado de la herida y vacunación inmediata. La inmunoglobulina se reserva para la categoría III: mordeduras o arañazos transdérmicos, contaminación de mucosas o piel lesionada con saliva, y contacto directo con murciélagos.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: 'En la pauta intramuscular de la vacuna antirrábica, ¿cuántas dosis recibe una persona inmunodeprimida?',
    options: [
      'Tres dosis',
      'Cuatro dosis, igual que el resto',
      'Dos dosis',
      'Cinco dosis, con una adicional en el día 28',
    ],
    correctIndex: 3,
    explanation:
      'Los CDC describen la pauta intramuscular con cuatro dosis en los días 0, 3, 7 y 14, y añaden una quinta en el día 28 en personas inmunodeprimidas. La vía intradérmica de la OMS usa dos sitios de 0,1 mL en los días 0, 3 y 7. La inmunosupresión obliga, por tanto, a completar una dosis más y a no acortar el esquema.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: '¿Por qué no debe administrarse la vacuna antirrábica en la región glútea?',
    options: [
      'Porque es un error de administración que anula la eficacia y obliga a repetir la dosis',
      'Porque produce necrosis local',
      'Porque es la vía de elección en niños',
      'Porque solo se admite la vía intradérmica',
    ],
    correctIndex: 0,
    explanation:
      'La vacuna se administra en el deltoides —o en la cara anterolateral del muslo en niños— y nunca en la región glútea. Administrarla ahí es un error frecuente que anula la eficacia y obliga a repetir la dosis. Lo mismo ocurre si la inmunoglobulina no se infiltra en la herida o si se aplica en el mismo punto anatómico que la vacuna.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: '¿El embarazo contraindica la profilaxis posexposición frente a la rabia?',
    options: [
      'Sí, debe posponerse hasta el posparto',
      'No: no hay contraindicaciones conocidas y el embarazo no la contraindica',
      'Solo se permite la vacuna, nunca la inmunoglobulina',
      'Solo se permite en el tercer trimestre',
    ],
    correctIndex: 1,
    explanation:
      'No hay contraindicaciones conocidas de la vacuna antirrábica y el embarazo no contraindica la profilaxis posexposición: la rabia es letal en el 100 % de los casos una vez aparecen los síntomas, así que el balance siempre pesa del lado de la profilaxis. La pauta es adecuada en todas las edades, incluidos lactantes y niños, y se administra con independencia del intervalo desde la exposición.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
  {
    prompt: '¿Qué mordeduras no se consideran capaces de transmitir la rabia?',
    options: [
      'Las de murciélagos',
      'Las de perros',
      'Las de roedores',
      'Las de gatos',
    ],
    correctIndex: 2,
    explanation:
      'Las mordeduras de roedores no se consideran capaces de transmitir la rabia. En cambio, el contacto directo con un murciélago es categoría III aunque no se identifiquen mordedura ni arañazo, y los perros siguen siendo responsables de hasta el 99 % de los casos humanos en el mundo. La especie agresora forma parte de la evaluación del riesgo.',
    source: { specialty: 'internal-medicine', topic: 'encephalomyelitis' },
  },
]

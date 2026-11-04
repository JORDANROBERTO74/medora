import type { QuizQuestion } from '@/lib/content'

/** Tríadas y pentadas (parte A). */
export const questions: QuizQuestion[] = [
  {
    prompt: 'En la tríada de Cushing, ¿qué mecanismo explica la bradicardia?',
    options: [
      'El barorreflejo desencadenado por la descarga simpática que eleva la presión arterial',
      'La compresión bulbar, que altera el patrón respiratorio',
      'La reducción de la perfusión cerebral que provoca la presión intracraneal elevada',
      'La compresión del tronco, que reduce el retorno venoso',
    ],
    correctIndex: 0,
    explanation:
      'El aumento de la presión intracraneal compromete la perfusión cerebral y el tronco. La descarga simpática eleva la presión arterial y el barorreflejo produce la bradicardia; la compresión bulbar altera el patrón respiratorio. Por eso la tríada refleja hipertensión intracraneal avanzada y no un criterio diagnóstico aislado.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt: '¿Qué componente de la tríada de Cushing traduce la compresión bulbar?',
    options: [
      'La hipertensión arterial',
      'La bradicardia',
      'La midriasis arreactiva',
      'La depresión respiratoria',
    ],
    correctIndex: 3,
    explanation:
      'La descarga simpática eleva la presión arterial y el barorreflejo produce bradicardia; el tercer elemento, la depresión respiratoria, aparece por compresión bulbar. La midriasis arreactiva es un signo de deterioro del tronco, pero no forma parte de la tríada descrita.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt: '¿Con qué frecuencia se documenta la tríada de Cushing?',
    options: [
      'En aproximadamente un tercio de los casos de herniación tonsilar',
      'En casi todos los casos de hipertensión intracraneal',
      'En uno de cada veinte casos de herniación tonsilar',
      'Solo en la hernia subfalcial',
    ],
    correctIndex: 0,
    explanation:
      'Se documenta en aproximadamente un tercio de los casos de herniación tonsilar. Esa cifra explica la advertencia clásica: su ausencia no descarta hipertensión intracraneal y esperar a que aparezca retrasa el tratamiento. La valoración se apoya en la escala de coma de Glasgow y en las pupilas.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt: 'En la hipertensión intracraneal avanzada, ¿qué patrón de cefalea describe el apunte?',
    options: [
      'Predominio vespertino que mejora con el decúbito',
      'Holocraneal pulsátil que cede con analgésicos habituales',
      'Predominio matutino que empeora con maniobras de Valsalva',
      'Occipital que aparece solo con el ejercicio',
    ],
    correctIndex: 2,
    explanation:
      'La clínica incluye cefalea de predominio matutino que empeora con maniobras de Valsalva, náuseas o vómitos, papiledema y deterioro progresivo de la conciencia. También pueden aparecer midriasis arreactiva, alteraciones de la mirada vertical y posturas de decorticación o descerebración.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt:
      'Según NICE, ¿qué umbral de la escala de Glasgow en el traumatismo craneoencefálico indica tomografía en la primera hora?',
    options: ['Glasgow ≤15', 'Glasgow ≤12', 'Glasgow ≤14', 'Glasgow 15 con cefalea'],
    correctIndex: 1,
    explanation:
      'NICE indica tomografía en la primera hora ante Glasgow ≤12, sospecha de fractura abierta o hundida, signos de fractura de base de cráneo, convulsión posraumática, déficit focal o más de un vómito. La tomografía sin contraste es la imagen inicial y la monitorización invasiva sigue siendo el patrón de referencia.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt:
      'En el traumatismo con Glasgow ≤12 sin sangrado extracraneal, ¿qué pauta de ácido tranexámico indica NICE?',
    options: [
      'Un bolo de 2 g intravenosos dentro de las primeras 2 horas',
      'Un bolo de 1 g intravenoso dentro de las primeras 6 horas',
      '15-30 mg/kg intravenosos en el adulto',
      '2 g por vía oral cada 8 horas durante 24 horas',
    ],
    correctIndex: 0,
    explanation:
      'En el traumatismo con Glasgow ≤12 sin sangrado extracraneal, NICE considera un bolo de 2 g de ácido tranexámico intravenoso dentro de las primeras 2 horas. En menores de 16 años la pauta se expresa en 15-30 mg/kg. La recomendación busca administrar el fármaco de forma precoz.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt: 'En menores de 16 años con traumatismo craneoencefálico, ¿qué dosis de ácido tranexámico se emplea?',
    options: ['2 g en bolo', '5-10 mg/kg', '15-30 mg/kg', '50 mg/kg'],
    correctIndex: 2,
    explanation:
      'La dosis del ácido tranexámico en menores de 16 años se expresa por peso: 15-30 mg/kg. En el adulto la pauta es un bolo fijo de 2 g. Ambas se administran dentro de las primeras 2 horas del traumatismo con Glasgow ≤12 y sin sangrado extracraneal.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt:
      'En el paciente grave con hipertensión intracraneal, ¿qué papel tiene la hiperventilación?',
    options: [
      'Es la ventilación de elección desde el ingreso',
      'Se mantiene de forma profiláctica durante las primeras 24 horas',
      'Se usa para corregir la hipoxemia',
      'Es una medida de rescate ante signos de herniación',
    ],
    correctIndex: 3,
    explanation:
      'En el paciente grave se recomienda evitar la hipoxemia y mantener normoventilación. La hiperventilación se reserva como medida de rescate ante signos de herniación, no como tratamiento de rutina ni para corregir la hipoxemia, que se evita con una oxigenación adecuada.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt: 'En el paciente ingresado, ¿qué dato debe alertar más al equipo?',
    options: [
      'El deterioro del componente motor de la escala de Glasgow',
      'La aparición de cefalea matutina',
      'Un episodio aislado de náuseas',
      'La fotofobia intensa',
    ],
    correctIndex: 0,
    explanation:
      'En el paciente ingresado, el deterioro del componente motor de la escala de Glasgow es el dato que más debe alertar al equipo. La tríada puede estar ausente y esperar a que se complete retrasa el tratamiento, de modo que la monitorización clínica y pupilar continua importa más que la tríada.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt: '¿Cuál es la imagen inicial en el traumatismo craneoencefálico?',
    options: [
      'La resonancia magnética con gadolinio',
      'La radiografía simple de cráneo',
      'La ecografía transfontanelar',
      'La tomografía sin contraste',
    ],
    correctIndex: 3,
    explanation:
      'La tomografía sin contraste es la imagen inicial del traumatismo craneoencefálico. La monitorización invasiva de la presión intracraneal sigue siendo el patrón de referencia, y la valoración clínica se apoya en la escala de coma de Glasgow y en las pupilas, no en una regla basada en la tríada.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt: '¿Qué tres signos integran la tríada de Charcot en la esclerosis múltiple?',
    options: [
      'Nistagmo, ataxia y neuralgia trigeminal',
      'Temblor, disfagia y diplopía',
      'Nistagmo, temblor y disartria',
      'Disartria, espasticidad y pérdida sensitiva',
    ],
    correctIndex: 2,
    explanation:
      'La tríada reúne nistagmo, temblor y disartria, que se explican por la afectación del tronco y del cerebelo. Son manifestaciones de la enfermedad desmielinizante crónica del sistema nervioso central, cuya clínica incluye además fatiga, depresión, trastornos cognitivos y disfunción vesical.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-multiple-sclerosis' },
  },
  {
    prompt: '¿Qué valor tiene hoy la tríada de Charcot para diagnosticar esclerosis múltiple?',
    options: [
      'Es una descripción histórica que no forma parte de los criterios vigentes',
      'Es un criterio mayor de McDonald 2017',
      'Sustituye a la demostración de diseminación en el tiempo',
      'Es obligatoria antes de solicitar la resonancia',
    ],
    correctIndex: 0,
    explanation:
      'Charcot propuso la tríada en 1868 como tríada diagnóstica, antes de la resonancia y de los criterios actuales. El diagnóstico vigente exige demostrar diseminación en el espacio y en el tiempo y excluir imitadores; la tríada no forma parte de los criterios de McDonald de 2017.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-multiple-sclerosis' },
  },
  {
    prompt: '¿Cuántas personas afectadas por esclerosis múltiple se estiman en el mundo?',
    options: [
      'Alrededor de 280.000',
      'Alrededor de 28 millones',
      'Menos de 100.000',
      'Alrededor de 2,8 millones',
    ],
    correctIndex: 3,
    explanation:
      'La esclerosis múltiple es una enfermedad desmielinizante crónica del sistema nervioso central, con alrededor de 2,8 millones de personas afectadas en el mundo. La inflamación y la desmielinización se acompañan de pérdida axonal progresiva, y las lesiones típicas son ovoideas y de al menos 3 mm.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-multiple-sclerosis' },
  },
  {
    prompt: '¿Qué tamaño mínimo tienen las lesiones típicas de la esclerosis múltiple?',
    options: ['Al menos 10 mm', 'Al menos 3 mm', 'Menos de 1 mm', 'Cualquier tamaño, sin mínimo'],
    correctIndex: 1,
    explanation:
      'Las lesiones típicas son ovoideas, de al menos 3 mm, y se distribuyen en regiones periventriculares, corticales o yuxtacorticales, infratentoriales o medulares. Esa descripción orienta la resonancia, pero el diagnóstico sigue exigiendo diseminación en el espacio y en el tiempo y la exclusión de imitadores.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-multiple-sclerosis' },
  },
  {
    prompt: '¿Qué papel tienen las bandas oligoclonales en los criterios de McDonald de 2017?',
    options: [
      'Pueden sustituir la demostración de diseminación en el tiempo',
      'Sustituyen la demostración de diseminación en el espacio',
      'Confirman el diagnóstico sin necesidad de resonancia',
      'Solo tienen valor si son negativas',
    ],
    correctIndex: 0,
    explanation:
      'Los criterios de McDonald de 2017 admiten que las bandas oligoclonales en líquido cefalorraquídeo sustituyan la demostración de diseminación en el tiempo. No reemplazan la diseminación en el espacio ni confirman por sí solas el diagnóstico, que también exige excluir imitadores.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-multiple-sclerosis' },
  },
  {
    prompt: 'Frente a los criterios de 2010, ¿cómo son los criterios de McDonald de 2017?',
    options: [
      'Más específicos pero menos sensibles',
      'Igual de sensibles y más específicos',
      'Más sensibles pero menos específicos',
      'Menos sensibles y menos específicos',
    ],
    correctIndex: 2,
    explanation:
      'Los criterios de 2017 son más sensibles pero menos específicos que los de 2010, lo que obliga a descartar imitadores antes de etiquetar al paciente. Confundir la tríada histórica con un criterio vigente es el error clásico de examen y puede llevar a diagnósticos erróneos.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-multiple-sclerosis' },
  },
  {
    prompt: '¿Con qué entidad se describe el error de diagnóstico en la esclerosis múltiple?',
    options: [
      'Con la enfermedad de Parkinson',
      'Con la neuromielitis óptica',
      'Con la esclerosis lateral amiotrófica',
      'Con la miastenia gravis',
    ],
    correctIndex: 1,
    explanation:
      'El error de diagnóstico con neuromielitis óptica o con enfermedad desmielinizante aguda es un riesgo reconocido. De ahí la utilidad del estudio del líquido cefalorraquídeo y de los anticuerpos frente a acuaporina 4. El diagnóstico precoz permite iniciar tratamiento antes y evitar terapias innecesarias.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-multiple-sclerosis' },
  },
  {
    prompt: '¿Qué exige el diagnóstico de esclerosis múltiple?',
    options: [
      'Cumplir la tríada de Charcot y tener bandas oligoclonales',
      'Presentar dos brotes en el mismo territorio anatómico',
      'Tener anticuerpos frente a acuaporina 4 positivos',
      'Demostrar diseminación en el espacio y en el tiempo y excluir imitadores',
    ],
    correctIndex: 3,
    explanation:
      'El diagnóstico exige demostrar diseminación en el espacio y en el tiempo y excluir imitadores. Los criterios de McDonald de 2017 permiten que las bandas oligoclonales sustituyan la diseminación en el tiempo, pero la tríada de Charcot no forma parte de los criterios.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-multiple-sclerosis' },
  },
  {
    prompt: '¿Qué tres hallazgos forman la tríada de Charcot de la colangitis?',
    options: [
      'Fiebre, cefalea y rigidez de nuca',
      'Ictericia, ascitis y encefalopatía',
      'Dolor en hipocondrio derecho, vómitos y diarrea',
      'Fiebre o escalofríos, ictericia y dolor en hipocondrio derecho',
    ],
    correctIndex: 3,
    explanation:
      'La tríada de Charcot de la colangitis combina fiebre o escalofríos, ictericia y dolor en hipocondrio derecho. Cuando hay disfunción orgánica se añaden hipotensión y alteración del estado mental. Las Tokyo Guidelines 2018 la sustituyen por criterios formales que combinan inflamación sistémica, colestasis e imagen.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: '¿Qué grupos combinan los criterios de las Tokyo Guidelines 2018?',
    options: [
      'Fiebre, ictericia y dolor abdominal',
      'Inflamación sistémica, colestasis e imagen',
      'Leucocitosis, anemia y trombopenia',
      'Clínica, microbiología y respuesta al antibiótico',
    ],
    correctIndex: 1,
    explanation:
      'Las Tokyo Guidelines 2018 sustituyen la tríada por criterios formales que combinan inflamación sistémica, colestasis e imagen. El diagnóstico definitivo exige un criterio de cada grupo, de modo que la tríada clásica queda como descripción histórica y no como regla diagnóstica suficiente.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: '¿Cómo se define el criterio de colestasis de las Tokyo Guidelines 2018?',
    options: [
      'Bilirrubina total >0,5 mg/dL o enzimas >3 veces el valor de referencia',
      'Bilirrubina total >5 mg/dL con enzimas normales',
      'Bilirrubina total >2 mg/dL o enzimas >1,5 veces el valor de referencia',
      'Solo la dilatación de la vía biliar en la imagen',
    ],
    correctIndex: 2,
    explanation:
      'El criterio de colestasis de las Tokyo Guidelines 2018 se define por bilirrubina total >2 mg/dL o enzimas >1,5 veces el valor de referencia. La dilatación biliar o la evidencia de la causa pertenecen al grupo de imagen, que es un grupo distinto.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: '¿Qué exige el diagnóstico definitivo de colangitis según TG18?',
    options: [
      'Un criterio de cada uno de los grupos',
      'Dos criterios de inflamación sistémica',
      'La tríada completa',
      'Un criterio de inflamación y otro de imagen, sin colestasis',
    ],
    correctIndex: 0,
    explanation:
      'Según TG18 se requiere un criterio de inflamación sistémica más uno de colestasis o de imagen, y el diagnóstico definitivo exige un criterio de cada grupo. La tríada clásica mostró sensibilidad del 23 % y especificidad del 100 % frente a estos criterios.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: '¿Qué rendimiento mostró la tríada frente a los criterios TG18?',
    options: [
      'Sensibilidad del 100 % y especificidad del 23 %',
      'Sensibilidad del 43 % y especificidad del 90 %',
      'Sensibilidad del 60 % y especificidad del 80 %',
      'Sensibilidad del 23 % y especificidad del 100 %',
    ],
    correctIndex: 3,
    explanation:
      'En la serie analizada, el diagnóstico clínico basado en la tríada mostró sensibilidad del 23 % y especificidad del 100 % frente a los criterios TG18. Es decir, la tríada es específica pero insuficiente para descartar colangitis, porque la mayoría de los casos no la presenta completa.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: '¿Cuál es la causa principal de obstrucción biliar en la colangitis aguda?',
    options: [
      'La pancreatitis crónica',
      'La coledocolitiasis',
      'La cirrosis hepática',
      'La enfermedad de Crohn',
    ],
    correctIndex: 1,
    explanation:
      'La colangitis aguda es una urgencia médica por infección de la bilis estancada, y la causa principal de obstrucción es la coledocolitiasis. Otras causas descritas son las estenosis benignas o malignas, las prótesis obstruidas, la hemobilia y la parasitosis; todas favorecen la colonización y la inflamación del árbol biliar.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: '¿Cuál es el procedimiento de elección para el drenaje biliar?',
    options: [
      'La colangiopancreatografía retrógrada endoscópica',
      'La colecistectomía urgente',
      'La punción hepática percutánea',
      'La laparotomía exploradora',
    ],
    correctIndex: 0,
    explanation:
      'El tratamiento combina antibióticos y drenaje biliar, y la colangiopancreatografía retrógrada endoscópica es el procedimiento de elección. El retraso en el drenaje se asocia a peor evolución, y la demora en el antibiótico aumenta la mortalidad en el shock séptico biliar.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: '¿Qué consecuencia tiene retrasar el drenaje biliar en la colangitis?',
    options: [
      'Solo prolonga la estancia hospitalaria',
      'No influye si el antibiótico es adecuado',
      'Se asocia a peor evolución',
      'Reduce el riesgo de pancreatitis',
    ],
    correctIndex: 2,
    explanation:
      'El retraso en el drenaje biliar se asocia a peor evolución, y la demora en el antibiótico aumenta la mortalidad en el shock séptico biliar. Por eso el tratamiento combina antibióticos precoces y drenaje biliar, sin esperar a que la tríada se complete.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt:
      'En una serie de pacientes con ictericia obstructiva, ¿qué proporción de colangitis identificaron los criterios de Tokio?',
    options: [
      'Cerca del 9,9 %, frente al 43 % registrado clínicamente',
      'Cerca del 23 %, frente al 5 % registrado clínicamente',
      'Cerca del 80 %, frente al 40 % registrado clínicamente',
      'Cerca del 43 %, frente al 9,9 % registrado clínicamente',
    ],
    correctIndex: 3,
    explanation:
      'Los criterios de Tokio identificaron colangitis en cerca del 43 %, frente al 9,9 % registrado clínicamente. Esa brecha apoya el uso de criterios formales en lugar de la impresión clínica aislada, porque la colangitis aguda es una urgencia médica por infección de la bilis estancada.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: 'En el paciente añoso o inmunosuprimido con colangitis, ¿qué cabe esperar?',
    options: [
      'Que la tríada siempre esté completa',
      'Que la fiebre pueda estar ausente',
      'Que la ictericia sea el signo más fiable',
      'Que la enfermedad siempre sea leve',
    ],
    correctIndex: 1,
    explanation:
      'En el paciente añoso o inmunosuprimido la fiebre puede estar ausente, y el dolor también puede faltar. Por eso la tríada es específica pero insuficiente para descartar colangitis, y esperar a que se complete retrasa un drenaje cuyo retraso empeora la evolución.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: '¿Por qué la tríada no basta para descartar una colangitis?',
    options: [
      'Porque es específica pero tiene baja sensibilidad y sus elementos pueden faltar',
      'Porque es inespecífica y aparece en otras infecciones',
      'Porque solo se aplica a pacientes mayores de 70 años',
      'Porque necesita confirmación histológica',
    ],
    correctIndex: 0,
    explanation:
      'La tríada mostró especificidad del 100 % pero sensibilidad del 23 % frente a los criterios TG18. El dolor puede faltar y la fiebre puede estar ausente en el paciente añoso o inmunosuprimido, de modo que esperar la tríada completa retrasa el drenaje biliar.',
    source: { specialty: 'internal-medicine', topic: 'charcot-triad-cholangitis' },
  },
  {
    prompt: '¿Qué dos signos añade la pentada de Reynolds a la tríada de Charcot?',
    options: [
      'Hipotensión y alteración del estado mental',
      'Fiebre alta y leucocitosis',
      'Ictericia y dolor en hipocondrio derecho',
      'Oliguria y taquipnea',
    ],
    correctIndex: 0,
    explanation:
      'La pentada de Reynolds añade a la tríada dos signos de disfunción orgánica: hipotensión y alteración del estado mental. Con ellos identifica al paciente con sepsis biliar que requiere drenaje urgente. Puede acompañarse además de oliguria, taquipnea o deterioro de la conciencia.',
    source: { specialty: 'internal-medicine', topic: 'reynolds-pentad' },
  },
  {
    prompt: '¿A qué paciente identifica en la práctica la pentada de Reynolds?',
    options: [
      'A una colangitis leve que puede tratarse de forma ambulatoria',
      'A una colecistitis alitiásica',
      'A una sepsis biliar que requiere drenaje urgente',
      'A una pancreatitis biliar sin obstrucción',
    ],
    correctIndex: 2,
    explanation:
      'En la práctica la pentada identifica al paciente con sepsis biliar que requiere drenaje urgente. Es una variante de gravedad de la colangitis aguda, y su pronóstico depende de la precocidad del drenaje biliar, no de que se complete el cuadro clínico.',
    source: { specialty: 'internal-medicine', topic: 'reynolds-pentad' },
  },
  {
    prompt: '¿Con qué criterios se establece la gravedad de la colangitis?',
    options: [
      'Con la propia pentada de Reynolds',
      'Con los criterios de las Tokyo Guidelines 2018',
      'Con la escala de Glasgow',
      'Con el recuento de leucocitos aislado',
    ],
    correctIndex: 1,
    explanation:
      'La pentada no es un criterio formal. La gravedad se establece con los criterios de las Tokyo Guidelines 2018, que evalúan la disfunción orgánica y condicionan la indicación y la urgencia del drenaje. Por eso la decisión de drenar no debe esperar a que se complete el cuadro.',
    source: { specialty: 'internal-medicine', topic: 'reynolds-pentad' },
  },
  {
    prompt: '¿Qué retraso del drenaje biliar se asocia a mayor mortalidad en el shock séptico biliar?',
    options: [
      'Retrasarlo más allá de 24 horas duplica la mortalidad',
      'Retrasarlo no modifica el pronóstico si hay antibiótico',
      'Debe hacerse siempre después de 48 horas de antibiótico',
      'Retrasarlo más allá de 12 horas',
    ],
    correctIndex: 3,
    explanation:
      'El tratamiento incluye reanimación hemodinámica, antibioticoterapia precoz y drenaje biliar urgente. El retraso del drenaje más allá de 12 horas se ha asociado a mayor mortalidad en el shock séptico biliar, de modo que la precocidad del drenaje condiciona el pronóstico.',
    source: { specialty: 'internal-medicine', topic: 'reynolds-pentad' },
  },
  {
    prompt: 'Si no aparece la pentada completa, ¿qué implica?',
    options: [
      'Que se descarta la disfunción orgánica',
      'Que solo se trata de una colangitis crónica',
      'Que su ausencia no excluye la gravedad',
      'Que no está indicado drenar',
    ],
    correctIndex: 2,
    explanation:
      'La pentada es aún más infrecuente que la tríada, y su ausencia no excluye gravedad. La decisión de drenar no debe esperar a que se complete el cuadro, porque la colangitis grave se asocia a mortalidad elevada y su pronóstico depende de la precocidad del drenaje.',
    source: { specialty: 'internal-medicine', topic: 'reynolds-pentad' },
  },
  {
    prompt: '¿Cuáles son las complicaciones descritas de la pentada de Reynolds?',
    options: [
      'Shock distributivo, fracaso multiorgánico y muerte',
      'Cirrosis y carcinoma hepatocelular',
      'Pancreatitis crónica y diabetes',
      'Colecistitis crónica y cálculos recurrentes',
    ],
    correctIndex: 0,
    explanation:
      'Las complicaciones descritas son el shock distributivo, el fracaso multiorgánico y la muerte. La prevención consiste en reconocer la colangitis antes de que aparezca la disfunción orgánica, que es lo que expresan la hipotensión y la alteración del estado mental.',
    source: { specialty: 'internal-medicine', topic: 'reynolds-pentad' },
  },
  {
    prompt: 'Además de los cinco elementos de la pentada, ¿qué otros signos pueden aparecer?',
    options: [
      'Exantema petequial y rigidez de nuca',
      'Ascitis y circulación colateral',
      'Hemoptisis y dolor pleurítico',
      'Oliguria, taquipnea o deterioro de la conciencia',
    ],
    correctIndex: 3,
    explanation:
      'Además de fiebre, ictericia, dolor en hipocondrio derecho, hipotensión y alteración del estado mental, la pentada puede acompañarse de oliguria, taquipnea o deterioro de la conciencia. Son expresiones de la disfunción orgánica de la forma grave de colangitis, que exige reconocimiento y drenaje precoces.',
    source: { specialty: 'internal-medicine', topic: 'reynolds-pentad' },
  },
  {
    prompt: '¿En qué consiste la prevención de la forma grave de colangitis?',
    options: [
      'Realizar colecistectomía a todo paciente con litiasis',
      'Reconocer la colangitis antes de que aparezca la disfunción orgánica',
      'Esperar a que la pentada se complete',
      'Mantener antibioterapia profiláctica indefinida',
    ],
    correctIndex: 1,
    explanation:
      'La prevención consiste en reconocer la colangitis antes de que aparezca la disfunción orgánica, porque la forma grave se acompaña de shock distributivo y fracaso multiorgánico. La pentada es infrecuente y esperar a que se complete retrasa un drenaje que debe ser urgente.',
    source: { specialty: 'internal-medicine', topic: 'reynolds-pentad' },
  },
  {
    prompt: '¿Qué tres hallazgos describió Beck en el taponamiento agudo?',
    options: [
      'Hipotensión, ingurgitación yugular y roce pericárdico',
      'Dolor torácico, disnea y síncope',
      'Hipotensión, aumento de la presión venosa y corazón «silencioso»',
      'Fiebre, soplo y embolia pulmonar',
    ],
    correctIndex: 2,
    explanation:
      'Beck describió en 1935 la combinación de hipotensión, aumento de la presión venosa y corazón «silencioso» en el taponamiento agudo. Los estudios posteriores muestran que se observa en una minoría de los pacientes, de modo que no hay que esperar a la tríada para actuar.',
    source: { specialty: 'internal-medicine', topic: 'beck-triad' },
  },
  {
    prompt: '¿En qué año describió Beck la tríada del taponamiento?',
    options: ['En 1868', 'En 1948', 'En 1975', 'En 1935'],
    correctIndex: 3,
    explanation:
      'La descripción de Beck data de 1935, cuando combinó hipotensión, aumento de la presión venosa y corazón «silencioso» en el taponamiento agudo. Los estudios posteriores mostraron que la tríada se observa en una minoría de los pacientes con taponamiento.',
    source: { specialty: 'internal-medicine', topic: 'beck-triad' },
  },
  {
    prompt: '¿Con qué frecuencia se observa la tríada de Beck en el taponamiento?',
    options: [
      'Solo en una minoría de los pacientes',
      'En la mayoría de los pacientes con derrame pericárdico',
      'En todos los casos de taponamiento agudo',
      'Únicamente en el taponamiento por trauma',
    ],
    correctIndex: 0,
    explanation:
      'Aunque la tríada se describe en el taponamiento agudo, los estudios posteriores muestran que solo se observa en una minoría de los pacientes. Tras cirugía cardíaca los derrames pericárdicos son muy frecuentes, pero apenas una minoría se vuelve hemodinámicamente significativa.',
    source: { specialty: 'internal-medicine', topic: 'beck-triad' },
  },
  {
    prompt: '¿Cuál es el método de elección para diagnosticar el taponamiento pericárdico?',
    options: [
      'La radiografía de tórax',
      'El ecocardiograma',
      'El electrocardiograma',
      'La tomografía como primera prueba',
    ],
    correctIndex: 1,
    explanation:
      'El ecocardiograma es el método de elección. La tomografía, la resonancia y el cateterismo aportan información complementaria cuando la ecografía es dudosa. Los hallazgos clásicos incluyen colapso auricular derecho en sístole y colapso diastólico de la pared libre del ventrículo derecho.',
    source: { specialty: 'internal-medicine', topic: 'beck-triad' },
  },
  {
    prompt: '¿Cuál de estos es un hallazgo ecocardiográfico clásico del taponamiento?',
    options: [
      'Hipertrofia concéntrica del ventrículo izquierdo',
      'Derrame pleural bilateral',
      'Trombo en la aurícula izquierda',
      'Colapso diastólico de la pared libre del ventrículo derecho',
    ],
    correctIndex: 3,
    explanation:
      'Entre los hallazgos ecocardiográficos clásicos están el colapso auricular derecho en sístole, el colapso diastólico de la pared libre del ventrículo derecho, el movimiento paradójico del tabique, el corazón oscilante y la vena cava inferior dilatada y no pulsátil.',
    source: { specialty: 'internal-medicine', topic: 'beck-triad' },
  },
  {
    prompt: 'Sobre el pulso paradójico en el taponamiento, ¿qué enunciado es correcto?',
    options: [
      'Es imprescindible para el diagnóstico',
      'Aparece en todos los taponamientos agudos',
      'Puede faltar o ser difícil de detectar',
      'Sustituye al ecocardiograma',
    ],
    correctIndex: 2,
    explanation:
      'El pulso paradójico puede faltar o ser difícil de detectar, y el signo de Kussmaul no es concluyente. Por eso no hay que esperar la tríada ni el pulso paradójico: en el postoperatorio los signos clásicos y ecocardiográficos pueden estar ausentes y no por ello deja de haber taponamiento.',
    source: { specialty: 'internal-medicine', topic: 'beck-triad' },
  },
  {
    prompt: '¿Cuál es el tratamiento del taponamiento pericárdico?',
    options: [
      'Descompresión urgente mediante pericardiocentesis guiada por imagen o drenaje quirúrgico',
      'Diuréticos y restricción de líquidos',
      'Pericardiocentesis diferida a las 24 horas',
      'Antiinflamatorios y observación',
    ],
    correctIndex: 0,
    explanation:
      'El tratamiento es la descompresión urgente mediante pericardiocentesis guiada por imagen o drenaje quirúrgico, con toracotomía subxifoidea o reesternotomía. Retrasar el drenaje expone a colapso hemodinámico y muerte, por lo que hay que sospechar el cuadro ante cualquier deterioro tras cirugía cardíaca o trauma torácico.',
    source: { specialty: 'internal-medicine', topic: 'beck-triad' },
  },
  {
    prompt: '¿Cómo produce el taponamiento el compromiso hemodinámico?',
    options: [
      'Reduce la contractilidad miocárdica de forma primaria',
      'La presión intrapericárdica supera la telediastólica ventricular y limita el llenado',
      'Produce vasodilatación con aumento del volumen sistólico',
      'Obstruye la salida del ventrículo izquierdo',
    ],
    correctIndex: 1,
    explanation:
      'El aumento de la presión intrapericárdica supera la presión telediastólica ventricular, limita el llenado, reduce el volumen sistólico y desencadena un patrón de shock cardiogénico con taquicardia y vasoconstricción. El resultado es el shock con disnea, extremidades frías e ingurgitación yugular.',
    source: { specialty: 'internal-medicine', topic: 'beck-triad' },
  },
  {
    prompt: 'Tras cirugía cardíaca, ¿qué cabe esperar de los derrames pericárdicos?',
    options: [
      'Son raros y casi siempre significativos',
      'No aparecen tras cirugía cardíaca',
      'Son muy frecuentes, pero solo una minoría se vuelve hemodinámicamente significativa',
      'Solo aparecen si hay trauma torácico asociado',
    ],
    correctIndex: 2,
    explanation:
      'Tras cirugía cardíaca los derrames pericárdicos son muy frecuentes, aunque solo una minoría se vuelve hemodinámicamente significativa. La prevención consiste en sospechar el taponamiento ante cualquier deterioro tras cirugía cardíaca o trauma torácico, sin esperar a que aparezca la tríada.',
    source: { specialty: 'internal-medicine', topic: 'beck-triad' },
  },
  {
    prompt: '¿Qué tres estigmas reúne la tríada de Hutchinson?',
    options: [
      'Queratitis intersticial, uveítis y sordera de conducción',
      'Dientes de Hutchinson, queratitis intersticial y sordera neurosensorial',
      'Dientes en clavija, rinitis y pseudoparálisis',
      'Sordera neurosensorial, hidropesía y exantema',
    ],
    correctIndex: 1,
    explanation:
      'La tríada reúne tres estigmas de la sífilis congénita: dientes de Hutchinson, queratitis intersticial y sordera neurosensorial. Los dientes de Hutchinson son incisivos centrales superiores en clavija, escotados y separados, y aparecen con el desarrollo dental, igual que la afectación corneal.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Cómo son los dientes de Hutchinson?',
    options: [
      'Incisivos centrales superiores en clavija, escotados y separados',
      'Molares inferiores con cúspides en mora',
      'Incisivos laterales ausentes con dentición retrasada',
      'Caninos superiores con esmalte hipoplásico',
    ],
    correctIndex: 0,
    explanation:
      'Los dientes de Hutchinson son incisivos centrales superiores en clavija, escotados y separados. Son un estigma que aparece con el desarrollo dental, igual que la queratitis intersticial lo hace con el corneal, y por eso la tríada no sirve para el diagnóstico neonatal.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Cuántos casos de sífilis congénita se notificaron en Estados Unidos en 2019?',
    options: [
      '187 casos, con 9 mortinatos y 3 muertes infantiles',
      '18.700 casos, sin muertes infantiles registradas',
      '1.870 casos, con 94 mortinatos y 34 muertes infantiles',
      '870 casos, con 34 mortinatos y 94 muertes infantiles',
    ],
    correctIndex: 2,
    explanation:
      'En Estados Unidos se notificaron 1.870 casos de sífilis congénita en 2019, con 94 mortinatos y 34 muertes infantiles, y la tasa aumentó un 477 %, es decir, cerca de 5,8 veces respecto a 2012. La enfermedad ha reaparecido y el tamizaje prenatal sigue siendo la base de la prevención.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Cuánto aumentó la tasa de sífilis congénita respecto a 2012?',
    options: [
      'Un 47 %, aproximadamente 1,5 veces',
      'Un 5,8 %, aproximadamente un 477 %',
      'Un 94 %, aproximadamente el doble',
      'Un 477 %, aproximadamente 5,8 veces',
    ],
    correctIndex: 3,
    explanation:
      'La tasa de sífilis congénita aumentó un 477 % respecto a 2012, lo que equivale a cerca de 5,8 veces. Ese incremento explica la relevancia actual de la tríada como estigma reconocible y la importancia del tamizaje serológico prenatal y del tratamiento adecuado de la madre.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Cómo se transmite la sífilis congénita?',
    options: [
      'Por contacto directo con lesiones cutáneas en el canal del parto',
      'Por vía transplacentaria desde una infección materna no tratada o tratada de forma inadecuada',
      'Por transmisión digestiva a través de la leche materna',
      'Por vía aérea desde familiares con sífilis secundaria',
    ],
    correctIndex: 1,
    explanation:
      'La transmisión es transplacentaria de Treponema pallidum a partir de una infección materna no tratada o tratada de forma inadecuada. El daño afecta hueso, hígado, piel, sistema nervioso, ojo y oído, lo que explica la hidropesía, la ictericia colestásica y los estigmas tardíos.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Por qué es difícil el diagnóstico neonatal de sífilis congénita?',
    options: [
      'Porque la serología no está disponible en el recién nacido',
      'Porque los estigmas aparecen antes del nacimiento',
      'Porque la penicilina interfiere con las pruebas',
      'Porque la IgG materna atraviesa la placenta',
    ],
    correctIndex: 3,
    explanation:
      'El diagnóstico neonatal es difícil porque la IgG materna atraviesa la placenta. Se apoya en la serología materna, la adecuación del tratamiento, los hallazgos clínicos y radiológicos y la comparación de títulos no treponémicos maternos y del neonato con la misma prueba.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Cuál es el tratamiento de elección de la sífilis congénita?',
    options: [
      'Penicilina G cristalina acuosa intravenosa durante 10 días',
      'Ceftriaxona intramuscular en dosis única',
      'Doxiciclina oral durante 14 días',
      'Penicilina benzatínica en una sola dosis',
    ],
    correctIndex: 0,
    explanation:
      'El tratamiento es penicilina G cristalina acuosa 100.000-150.000 unidades/kg/día por vía intravenosa durante 10 días, o penicilina procaína 50.000 unidades/kg/día por vía intramuscular durante 10 días. En caso de alergia a la penicilina, el paciente se desensibiliza y se trata con penicilina.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Qué dosis diaria de penicilina G cristalina acuosa corresponde al recién nacido?',
    options: [
      '10.000-15.000 unidades/kg/día',
      '15.000-30.000 unidades/kg/día',
      '100.000-150.000 unidades/kg/día',
      '1.000.000-1.500.000 unidades/kg/día',
    ],
    correctIndex: 2,
    explanation:
      'La penicilina G cristalina acuosa se administra a 100.000-150.000 unidades/kg/día por vía intravenosa, repartida en 50.000 unidades/kg por dosis cada 12 horas durante los primeros 7 días y luego cada 8 horas, durante 10 días. La alternativa es penicilina procaína 50.000 unidades/kg/día intramuscular.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: 'Si se omite más de un día de tratamiento de la sífilis congénita, ¿qué se hace?',
    options: [
      'Se reinicia el esquema completo',
      'Se duplica la dosis del día siguiente',
      'Se añade una dosis extra de penicilina procaína',
      'Se continúa sin cambios',
    ],
    correctIndex: 0,
    explanation:
      'Si se omite más de un día de tratamiento, se reinicia el esquema completo. La regla busca garantizar la curación, porque la sífilis congénita puede producir muerte fetal, neurosífilis, sordera, ceguera y deformidades dentarias, y el tratamiento inadecuado de la madre es el origen de la transmisión.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Qué se hace si el paciente con sífilis congénita es alérgico a la penicilina?',
    options: [
      'Se sustituye por doxiciclina oral',
      'Se desensibiliza y se trata con penicilina',
      'Se omite el tratamiento y se vigila',
      'Se usa ceftriaxona como alternativa equivalente',
    ],
    correctIndex: 1,
    explanation:
      'En caso de alergia a la penicilina, el paciente se desensibiliza y se trata con penicilina. No se contempla sustituirla ni omitir el tratamiento, porque el diagnóstico y el tratamiento del recién nacido no deben esperar a que se complete la tríada.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Por qué la tríada de Hutchinson no sirve para el diagnóstico neonatal?',
    options: [
      'Porque los dientes de Hutchinson ya están presentes al nacer',
      'Porque la queratitis intersticial es congénita',
      'Porque la sordera neurosensorial se detecta en el cribado neonatal',
      'Porque los estigmas aparecen con el desarrollo dental y corneal',
    ],
    correctIndex: 3,
    explanation:
      'La tríada no sirve para el diagnóstico neonatal porque los estigmas aparecen con el desarrollo dental y corneal. Por eso el diagnóstico y el tratamiento del recién nacido no deben esperar a que se complete, y se apoyan en la serología materna y en la comparación de títulos.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: '¿Cómo se previene la sífilis congénita?',
    options: [
      'Con tamizaje serológico prenatal y tratamiento adecuado de la madre',
      'Con vacunación frente a Treponema pallidum',
      'Con profilaxis antibiótica al recién nacido sano',
      'Con cribado únicamente al inicio del embarazo',
    ],
    correctIndex: 0,
    explanation:
      'La prevención se basa en el tamizaje serológico prenatal y en el tratamiento adecuado de la madre. La transmisión es transplacentaria a partir de una infección materna no tratada o tratada de forma inadecuada, y las complicaciones incluyen muerte fetal, neurosífilis, sordera, ceguera y deformidades dentarias.',
    source: { specialty: 'internal-medicine', topic: 'hutchinson-triad' },
  },
  {
    prompt: 'Según NICE 2024, ¿qué cuatro elementos forman la «combinación de bandera roja» de la meningitis?',
    options: [
      'Fiebre, cefalea y rigidez de nuca',
      'Fiebre, exantema y rigidez de nuca',
      'Cefalea, fotofobia y vómitos',
      'Fiebre, cefalea, rigidez de nuca y alteración del nivel de conciencia o de la cognición',
    ],
    correctIndex: 3,
    explanation:
      'NICE (2024) no habla de tríada, sino de una «combinación de bandera roja» de cuatro elementos: fiebre, cefalea, rigidez de nuca y alteración del nivel de conciencia o de la cognición. La meningitis bacteriana evoluciona rápido y puede presentarse con síntomas inespecíficos, sobre todo en lactantes y ancianos.',
    source: { specialty: 'internal-medicine', topic: 'meningitis-triad' },
  },
  {
    prompt: '¿Cuándo deben iniciarse los antibióticos en la sospecha de meningitis bacteriana?',
    options: [
      'En las primeras 6 horas',
      'Tras confirmar el líquido cefalorraquídeo',
      'Dentro de la primera hora de llegada al hospital',
      'Solo si hay exantema petequial',
    ],
    correctIndex: 2,
    explanation:
      'Los antibióticos deben iniciarse dentro de la primera hora de llegada al hospital. No se descarta la meningitis por una proteína C reactiva, una procalcitonina o un recuento leucocitario normales, y la punción lumbar se realiza antes del antibiótico solo si es segura y no retrasa el tratamiento.',
    source: { specialty: 'internal-medicine', topic: 'meningitis-triad' },
  },
  {
    prompt: '¿Cuándo se realiza la punción lumbar en la sospecha de meningitis?',
    options: [
      'Siempre antes del antibiótico, aunque lo retrase',
      'Antes del antibiótico si es segura y no retrasa el tratamiento',
      'Solo después de 48 horas de antibiótico',
      'Nunca en el adulto',
    ],
    correctIndex: 1,
    explanation:
      'La punción lumbar se realiza antes del antibiótico si es segura y no retrasa el tratamiento. La confirmación se apoya en la clínica, los resultados de laboratorio y el líquido cefalorraquídeo, pero ninguno de esos datos justifica retrasar el antibiótico en una sospecha alta.',
    source: { specialty: 'internal-medicine', topic: 'meningitis-triad' },
  },
  {
    prompt: 'Ante una procalcitonina y un recuento leucocitario normales, ¿qué cabe concluir?',
    options: [
      'Que no se descarta la meningitis con esos marcadores normales',
      'Que se descarta la meningitis si la procalcitonina es normal',
      'Que solo se descarta con dos marcadores normales',
      'Que se descarta si el hemograma no muestra leucocitosis',
    ],
    correctIndex: 0,
    explanation:
      'No se descarta la meningitis por una proteína C reactiva, una procalcitonina o un recuento leucocitario normales. La enfermedad puede presentarse con síntomas inespecíficos, sobre todo en lactantes y ancianos, y la confirmación requiere clínica, laboratorio y líquido cefalorraquídeo.',
    source: { specialty: 'internal-medicine', topic: 'meningitis-triad' },
  },
  {
    prompt: '¿Cómo es el exantema de la enfermedad meningocócica?',
    options: [
      'Maculopapular que desaparece a la presión',
      'Vesicular en tronco y extremidades',
      'Petequial o purpúrico, que no desaparece a la presión, con lesiones mayores de 2 mm',
      'Urticarial pruriginoso de distribución centrífuga',
    ],
    correctIndex: 2,
    explanation:
      'En la enfermedad meningocócica aparece un exantema petequial o purpúrico que no desaparece a la presión, con lesiones mayores de 2 mm. La rigidez de nuca es menos frecuente y más difícil de valorar en lactantes y en pacientes con demencia o artrosis.',
    source: { specialty: 'internal-medicine', topic: 'meningitis-triad' },
  },
  {
    prompt: '¿Cuáles son factores de riesgo mayores de meningitis bacteriana?',
    options: [
      'La hipertensión arterial y la diabetes',
      'El tabaquismo y la obesidad',
      'La artrosis cervical y la demencia',
      'La ausencia de vacunación frente a meningococo, neumococo o Haemophilus influenzae tipo b y la disfunción esplénica',
    ],
    correctIndex: 3,
    explanation:
      'La guía subraya que la ausencia de vacunación frente a meningococo, neumococo o Haemophilus influenzae tipo b, así como la ausencia o disfunción esplénica, son factores de riesgo mayores. La prevención incluye precisamente la vacunación frente a esos tres microorganismos.',
    source: { specialty: 'internal-medicine', topic: 'meningitis-triad' },
  },
  {
    prompt: 'Si el traslado se demora y la sospecha de meningitis es alta, ¿qué se hace?',
    options: [
      'Se retrasa el traslado hasta completar el antibiótico',
      'Se administra ceftriaxona o bencilpenicilina intravenosa o intramuscular fuera del hospital',
      'Se espera a la punción lumbar en el hospital receptor',
      'Se usa antibioterapia oral mientras se traslada',
    ],
    correctIndex: 1,
    explanation:
      'No se debe retrasar el traslado para administrar antibióticos. Si el traslado se demora y la sospecha es alta, se administra ceftriaxona o bencilpenicilina por vía intravenosa o intramuscular fuera del hospital, porque el objetivo es que el antibiótico se inicie en la primera hora.',
    source: { specialty: 'internal-medicine', topic: 'meningitis-triad' },
  },
  {
    prompt: 'En el anciano con meningitis, ¿qué trampa diagnóstica se describe?',
    options: [
      'Que la fiebre puede faltar y el delirium atribuirse a otra causa',
      'Que la tríada aparece completa',
      'Que el exantema es más frecuente',
      'Que la procalcitonina siempre está elevada',
    ],
    correctIndex: 0,
    explanation:
      'En el anciano la fiebre puede faltar y el delirium puede atribuirse a otra causa. En el joven, la alteración de la conciencia puede confundirse con intoxicación alcohólica. Ambas trampas retrasan el antibiótico, que debe iniciarse dentro de la primera hora de llegada al hospital.',
    source: { specialty: 'internal-medicine', topic: 'meningitis-triad' },
  },
  {
    prompt: '¿En qué pacientes es menos frecuente y más difícil de valorar la rigidez de nuca?',
    options: [
      'Solo en adolescentes sanos',
      'Únicamente en la meningitis neumocócica',
      'En lactantes, pacientes con demencia o con artrosis',
      'En todos los casos, sin excepción',
    ],
    correctIndex: 2,
    explanation:
      'La rigidez de nuca es menos frecuente y más difícil de valorar en lactantes y en pacientes con demencia o artrosis. Esa dificultad, junto con la presentación inespecífica en lactantes y ancianos, explica que la ausencia de signos clásicos no descarte la meningitis.',
    source: { specialty: 'internal-medicine', topic: 'meningitis-triad' },
  },
  {
    prompt: '¿Qué tres síntomas frecuentes describe NICE en el embarazo ectópico?',
    options: [
      'Dolor abdominal o pélvico, amenorrea y sangrado vaginal',
      'Dolor abdominal, fiebre y leucocitosis',
      'Amenorrea, vómitos y dolor en hipocondrio derecho',
      'Sangrado vaginal, disuria y fiebre',
    ],
    correctIndex: 0,
    explanation:
      'NICE confirma que los síntomas frecuentes son dolor abdominal o pélvico, amenorrea o falta de menstruación y sangrado vaginal, con o sin coágulos. Sin embargo, advierte que la presentación atípica es habitual, de modo que la tríada no debe usarse como requisito para sospechar el cuadro.',
    source: { specialty: 'internal-medicine', topic: 'ectopic-pregnancy-triad' },
  },
  {
    prompt: '¿Qué proporción de mujeres con embarazo ectópico no tiene factores de riesgo conocidos?',
    options: [
      'Alrededor de la mitad',
      'Cerca de un tercio',
      'Alrededor de dos tercios',
      'Menos de una de cada diez',
    ],
    correctIndex: 1,
    explanation:
      'El embarazo ectópico es la implantación fuera de la cavidad uterina. Cerca de un tercio de las mujeres afectadas no tiene ningún factor de riesgo conocido, por lo que la ausencia de factores no permite excluirlo. El embarazo ectópico previo sí se considera factor de riesgo.',
    source: { specialty: 'internal-medicine', topic: 'ectopic-pregnancy-triad' },
  },
  {
    prompt: '¿Qué signos vitales orientan a complicación en el embarazo ectópico?',
    options: [
      'Bradicardia menor de 60 lpm e hipertensión',
      'Fiebre mayor de 38 °C y leucocitosis',
      'Taquicardia mayor de 120 lpm e hipertensión',
      'Taquicardia mayor de 100 lpm e hipotensión menor de 100/60 mmHg',
    ],
    correctIndex: 3,
    explanation:
      'Los signos descritos incluyen dolor a la palpación abdominal, pélvica y anexial, dolor a la movilización cervical, defensa, palidez, distensión abdominal, taquicardia mayor de 100 lpm, hipotensión menor de 100/60 mmHg y shock. Estos dos últimos datos orientan a rotura y hemoperitoneo.',
    source: { specialty: 'internal-medicine', topic: 'ectopic-pregnancy-triad' },
  },
  {
    prompt: 'Ante una mujer en edad reproductiva con síntomas inespecíficos, ¿qué se debe hacer?',
    options: [
      'Solicitar directamente una tomografía abdominal',
      'Esperar a que aparezca la tríada completa',
      'Ofrecer una prueba de embarazo',
      'Reservarla solo a mujeres con factores de riesgo',
    ],
    correctIndex: 2,
    explanation:
      'Ante cualquier mujer en edad reproductiva con síntomas inespecíficos debe ofrecerse una prueba de embarazo. Los síntomas se parecen a los de procesos digestivos o urinarios, por lo que la prueba es obligatoria ante la duda y no se reserva a quienes tienen factores de riesgo.',
    source: { specialty: 'internal-medicine', topic: 'ectopic-pregnancy-triad' },
  },
  {
    prompt: 'Con prueba de embarazo positiva y dolor pélvico, ¿qué conducta corresponde?',
    options: [
      'Derivar de inmediato a la unidad de embarazo precoz',
      'Citar en consulta externa en una semana',
      'Solicitar ecografía ambulatoria y esperar el resultado',
      'Tratar de forma empírica con antibiótico',
    ],
    correctIndex: 0,
    explanation:
      'Con prueba de embarazo positiva y dolor, sensibilidad abdominal, pélvica o a la movilización cervical, se deriva de inmediato a la unidad de embarazo precoz, donde se realiza la valoración definitiva. La inestabilidad hemodinámica o la preocupación significativa obligan a derivar directamente a urgencias.',
    source: { specialty: 'internal-medicine', topic: 'ectopic-pregnancy-triad' },
  },
  {
    prompt: 'Ante inestabilidad hemodinámica en la sospecha de embarazo ectópico, ¿a dónde se deriva?',
    options: [
      'A la unidad de embarazo precoz con cita preferente',
      'A urgencias de forma directa',
      'A su médico de familia al día siguiente',
      'A observación domiciliaria con analgesia',
    ],
    correctIndex: 1,
    explanation:
      'La inestabilidad hemodinámica o la preocupación significativa por el dolor o el sangrado obligan a derivar directamente a urgencias, sin pasar antes por la unidad de embarazo precoz. La elección entre manejo expectante, médico o quirúrgico se decide después en la unidad especializada, según la situación clínica.',
    source: { specialty: 'internal-medicine', topic: 'ectopic-pregnancy-triad' },
  },
  {
    prompt: '¿Cuáles son las complicaciones del embarazo ectópico?',
    options: [
      'Placenta previa y hemorragia postparto',
      'Preeclampsia y eclampsia',
      'Rotura tubárica, hemoperitoneo y shock',
      'Corioamnionitis y sepsis puerperal',
    ],
    correctIndex: 2,
    explanation:
      'Las complicaciones son la rotura tubárica, el hemoperitoneo y el shock. La prevención de la mortalidad depende del reconocimiento precoz y de la derivación oportuna, por eso ante la duda se ofrece una prueba de embarazo y se deriva a la unidad de embarazo precoz.',
    source: { specialty: 'internal-medicine', topic: 'ectopic-pregnancy-triad' },
  },
  {
    prompt: '¿Qué advierte NICE sobre la presentación del embarazo ectópico?',
    options: [
      'Que la presentación atípica es habitual',
      'Que la tríada está presente en todos los casos',
      'Que los síntomas digestivos excluyen el diagnóstico',
      'Que la ausencia de dolor descarta el cuadro',
    ],
    correctIndex: 0,
    explanation:
      'NICE advierte que la presentación atípica es habitual: pueden aparecer sensibilidad mamaria, síntomas digestivos, mareo o síncope, dolor en el hombro, síntomas urinarios, expulsión de tejido y tenesmo. Un síntoma poco frecuente puede ser igualmente significativo, de modo que la sospecha no depende de la tríada.',
    source: { specialty: 'internal-medicine', topic: 'ectopic-pregnancy-triad' },
  },
  {
    prompt: 'Además de la tríada, ¿qué síntoma poco frecuente puede aparecer en el embarazo ectópico?',
    options: [
      'Dolor en el hipocondrio derecho',
      'Dolor en el hombro',
      'Dolor lumbar que mejora en reposo',
      'Cefalea occipital',
    ],
    correctIndex: 1,
    explanation:
      'Además de la tríada pueden aparecer sensibilidad mamaria, síntomas digestivos, mareo o síncope, dolor en el hombro, síntomas urinarios, expulsión de tejido y tenesmo. El dolor en el hombro es un síntoma poco frecuente pero significativo, y el hemoperitoneo puede acompañarse de shock.',
    source: { specialty: 'internal-medicine', topic: 'ectopic-pregnancy-triad' },
  },
]

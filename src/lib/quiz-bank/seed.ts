import type { QuizQuestion } from '@/lib/content'

/**
 * The original 20-question bank, authored and shipped before the expansion.
 * It lives apart from the lot files so bulk edits by several authors can never
 * drop an already-reviewed question.
 */

export const internalMedicineSeed: QuizQuestion[] = [
  {
    prompt: '¿Qué tres hallazgos forman la tríada de Cushing?',
    options: [
      'Fiebre, cefalea y rigidez de nuca',
      'Hipotensión, ingurgitación yugular y ruidos cardíacos apagados',
      'Hipertensión, bradicardia y depresión respiratoria',
      'Taquicardia, hiperglucemia y poliuria',
    ],
    correctIndex: 2,
    explanation:
      'La tríada de Cushing —hipertensión, bradicardia y depresión respiratoria— describe un hallazgo ominoso de hipertensión intracraneal avanzada, no un criterio diagnóstico. Esperar a que aparezca retrasa el tratamiento, y su ausencia no excluye la hipertensión intracraneal: el deterioro del componente motor de la escala de Glasgow es el dato que más debe alertar.',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
  {
    prompt: 'En la cetoacidosis diabética, ¿qué cuerpo cetónico predomina en sangre?',
    options: [
      'Acetoacetato, que la tira reactiva de orina detecta sin problema',
      'Acetona, invisible para la tira reactiva',
      '3-β-hidroxibutirato, y la tira urinaria también lo detecta',
      '3-β-hidroxibutirato, que la tira reactiva de orina no detecta',
    ],
    correctIndex: 3,
    explanation:
      'En la cetoacidosis el cuerpo cetónico predominante en sangre es el 3-β-hidroxibutirato, que la tira reactiva de orina no detecta porque mide acetoacetato. Por eso una tira negativa no descarta cetoacidosis, sobre todo en la asociada a iSGLT2 o al alcohol. El hiato aniónico, corregido por la albúmina, separa las acidosis de hiato aumentado de las hiperclorémicas.',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
  {
    prompt: 'En el síndrome coronario agudo, ¿cuál es el determinante principal del pronóstico?',
    options: [
      'Que la elevación del ST revierta con nitroglicerina',
      'La reperfusión precoz',
      'La administración rutinaria de fibrinolíticos antes de la sala de hemodinámica',
      'El nivel de conciencia tras una parada cardíaca',
    ],
    correctIndex: 1,
    explanation:
      'El síndrome coronario agudo se clasifica por electrocardiograma y troponina, y la reperfusión precoz es el determinante principal del pronóstico: el tiempo es músculo. La elevación del ST que revierte con nitroglicerina no define infarto con elevación del ST, y ante el fracaso reperfusor no se repiten fibrinolíticos: se pasa a angiografía.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt:
      'Una persona con diabetes no puede tratar por sí misma su hipoglucemia. ¿Cuál es el tratamiento de elección?',
    options: [
      'Carbohidrato oral con recuento y nueva medición a los 15 minutos',
      'Un caramelo y esperar a la siguiente comida',
      'Glucagón y ayuda de terceros',
      'Una comida completa sin repetir la medición',
    ],
    correctIndex: 2,
    explanation:
      'La hipoglucemia se define por la cifra de glucosa y la necesidad de ayuda, no por el tipo de síntoma. La pregunta que decide la conducta es si la persona puede tratarse por sí misma: si puede, carbohidrato oral con recuento y nueva medición a los 15 minutos; si no puede, glucagón y ayuda de terceros. El glucagón es el tratamiento de elección de la hipoglucemia grave.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: 'Según la guía NICE NG250, ¿cuánto dura el antibiótico en el adulto con neumonía estable?',
    options: ['5 días', '7 días', '10 días', 'Hasta que la radiografía se normalice'],
    correctIndex: 0,
    explanation:
      'La guía NICE NG250 fija en 5 días la duración del antibiótico en el adulto con neumonía y estabilidad clínica, y considera innecesario prolongarlo. También incorpora los corticoides en la neumonía comunitaria grave hospitalizada y acepta la ecografía pulmonar como herramienta diagnóstica. Las fluoroquinolonas no son primera elección por sus restricciones de seguridad.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
]

export const surgerySeed: QuizQuestion[] = [
  {
    prompt: 'En el traumatizado con hemorragia exanguinante, ¿qué se aborda antes que cualquier otro problema?',
    options: [
      'La vía aérea, con inmovilización cervical completa',
      'El traslado inmediato a la sala de TC',
      'La colocación de dos vías venosas de calibre grueso',
      'El control de la hemorragia: la «C» se adelanta en la secuencia C-ABCDE',
    ],
    correctIndex: 3,
    explanation:
      'En el traumatizado con hemorragia exanguinante el control del sangrado se adelanta dentro de una secuencia C-ABCDE: la «C» de hemorragia catastrófica va antes que la vía aérea. El objetivo es acortar el tiempo hasta el control definitivo, con reanimación restrictiva y ácido tranexámico precoz. Resucitar hasta presión normal antes de controlar el sangrado empeora la hemorragia.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt: '¿Cuál es el papel de la CPRE en la patología biliar?',
    options: [
      'Es la primera prueba que se solicita ante una sospecha de coledocolitiasis',
      'Sustituye a la ecografía como cribado de litiasis',
      'Es terapéutica, no una prueba diagnóstica de primera línea',
      'Se indica directamente en toda sospecha de riesgo intermedio sin confirmación',
    ],
    correctIndex: 2,
    explanation:
      'El diagnóstico de la patología biliar se escalona: ecografía y analítica primero, y pruebas de segunda línea —TC, colangio-RM o ecoendoscopia— cuando no es concluyente o se sospecha coledocolitiasis, colangitis o Mirizzi. La CPRE es terapéutica, no una prueba diagnóstica de primera línea, y en la pancreatitis biliar sin colangitis la CPRE urgente no aporta.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt: 'Sobre el diagnóstico de la apendicitis aguda, ¿qué enunciado es correcto?',
    options: [
      'El dolor migrado a fosa ilíaca derecha con anorexia lo confirma sin más pruebas',
      'Ningún signo aislado la confirma ni la descarta: se combinan escalas clínicas e imagen',
      'En niños y embarazadas el primer estudio indicado es la TC',
      'Los antibióticos en solitario ya son el tratamiento estándar',
    ],
    correctIndex: 1,
    explanation:
      'Ningún signo aislado confirma ni descarta la apendicitis: el abordaje recomendado combina escalas clínicas e imagen. En niños y embarazadas el orden es ecografía, luego resonancia y después TC, nunca TC directa. La apendicectomía sigue siendo el estándar; los antibióticos exclusivos son una opción individualizada en casos leves seleccionados.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'appendicitis' },
  },
  {
    prompt: '¿Qué órgano produce la bilis?',
    options: [
      'La vesícula biliar',
      'El páncreas',
      'El intestino delgado',
      'El hígado; la vesícula la almacena, concentra y libera',
    ],
    correctIndex: 3,
    explanation:
      'La vesícula no produce bilis: la produce el hígado, y la vesícula la almacena, concentra y libera con la comida. La bilis no solo emulsiona grasas, también es vía de excreción de colesterol y bilirrubina, y su composición condiciona la litiasis. El páncreas es glándula mixta: su jugo digiere y sus hormonas regulan la glucemia.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-functions' },
  },
  {
    prompt: 'Según el consenso SCAI, ¿cómo se entiende el shock?',
    options: [
      'Como un umbral de presión arterial por debajo del cual hay shock',
      'Como sinónimo de shock séptico',
      'Como un continuo (estadios A–E) en el que puede haber hipoperfusión con presión arterial aún normal',
      'Como un cuadro definido únicamente por el lactato elevado',
    ],
    correctIndex: 2,
    explanation:
      'El shock es un continuo, no un umbral de presión arterial: el consenso SCAI lo estratifica en estadios A–E y admite hipoperfusión con presión aún normal («preshock»). Por eso no se espera a la hipotensión para actuar. El lactato, la piel moteada y el relleno capilar no sirven por sí solos para decidir la fluidoterapia.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
]

export const obstetricsSeed: QuizQuestion[] = [
  {
    prompt: '¿Cuándo se establecen la edad gestacional y la fecha probable de parto?',
    options: [
      'En cada control prenatal, según la altura uterina',
      'Una sola vez, combinando la FUM con la primera ecografía fiable',
      'Cada vez que la paciente lo solicita',
      'Solo al nacer, con la ecografía del recién nacido',
    ],
    correctIndex: 1,
    explanation:
      'La edad gestacional y la fecha probable de parto se establecen una sola vez, combinando la fecha de última menstruación y la primera ecografía fiable; los reajustes posteriores son excepcionales y deben documentarse. La ecografía de datación se ofrece entre las 11+2 y las 14+1 semanas. Con ciclos irregulares la FUM pierde valor y manda la ecografía.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt: 'En el aborto incompleto no complicado, ¿qué tratamiento farmacológico respalda la evidencia?',
    options: [
      'Mifepristona, porque reduce la tasa de fracaso',
      'Mifepristona asociada a misoprostol',
      'Misoprostol; no se ofrece mifepristona en el aborto incompleto',
      'Ninguno: solo aspiración al vacío',
    ],
    correctIndex: 2,
    explanation:
      'El aborto incompleto no complicado puede tratarse con aspiración al vacío o con tratamiento médico, y ambas opciones son válidas. En el tratamiento médico la evidencia solo respalda misoprostol: no se ofrece mifepristona en el aborto incompleto. Antes de darlo por completo hay que comprobar la cavidad, porque un embarazo de localización desconocida puede ser ectópico.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt: '¿Qué papel tienen los factores de riesgo en el embarazo ectópico?',
    options: [
      'Permiten descartarlo cuando no hay ninguno',
      'Solo aparecen en gestaciones por reproducción asistida',
      'Están presentes en todos los casos',
      'Muchas afectadas no tienen ningún factor de riesgo identificable',
    ],
    correctIndex: 3,
    explanation:
      'El embarazo ectópico es cualquier gestación implantada fuera de la cavidad endometrial, y muchas afectadas no tienen ningún factor de riesgo identificable. Por eso hay que descartarlo siempre que exista prueba de embarazo positiva y síntomas compatibles. La hCG no localiza la gestación y el pseudosaco puede simular un saco intrauterino.',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt: '¿Qué clasificación de placenta previa se considera actualmente válida?',
    options: [
      'La ecográfica: previa frente a inserción baja; se abandonó «completa, parcial, marginal o baja»',
      'La clásica: completa, parcial, marginal o baja',
      'La clínica, según la cantidad de sangrado',
      'La resonancia magnética como método de referencia',
    ],
    correctIndex: 0,
    explanation:
      'La clasificación antigua de placenta previa —completa, parcial, marginal o baja— se abandonó porque confunde y define peor el riesgo. La guía usa el criterio ecográfico de placenta previa frente a inserción baja. Una placenta de inserción baja a mitad de gestación no tranquiliza: la mayoría migra y hay que repetir la ecografía.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt: 'Según la guía OMS/FIGO/ICM de 2025, ¿cuándo se debe actuar en una hemorragia postparto?',
    options: [
      'Ante 300 mL de pérdida con signos vitales anormales, además del umbral clásico de 500 mL',
      'Solo cuando la pérdida supera los 500 mL',
      'Ante cualquier pérdida, aunque los signos vitales sean normales',
      'Cuando la estimación visual supera los 200 mL',
    ],
    correctIndex: 0,
    explanation:
      'La guía consolidada de la OMS, la FIGO y la ICM de 2025 recomienda actuar cuando la pérdida alcanza 300 mL y además se observan signos vitales anormales, sin esperar al umbral clásico de 500 mL. El objetivo es adelantar la intervención. La estimación visual no es fiable: los campos graduados permiten cuantificar la pérdida.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
]

export const pediatricsSeed: QuizQuestion[] = [
  {
    prompt: '¿Qué son los patrones de crecimiento de la OMS?',
    options: [
      'Una descripción de cómo crecen los niños de cada país',
      'Un instrumento normativo: indican cómo deberían crecer si se cubren sus necesidades de salud y alimentación',
      'La referencia NCHS/OMS de 1977, aún vigente para menores de 5 años',
      'Una tabla de peso según la edad, sin curvas de velocidad',
    ],
    correctIndex: 1,
    explanation:
      'Los patrones de crecimiento de la OMS no describen cómo crecen los niños de un país: son un instrumento normativo que indica cómo deberían crecer cuando se cubren sus necesidades de salud y alimentación. Se apoyan en los estándares de 0 a 5 años (2006) y la referencia de 5 a 19 años (2007). Un percentil aislado no se interpreta: importa la trayectoria.',
    source: { specialty: 'pediatrics', topic: 'growth-and-development' },
  },
  {
    prompt: '¿Qué significa un resultado alterado en la prueba del talón?',
    options: [
      'Que el recién nacido tiene la enfermedad',
      'Que hay que iniciar tratamiento de inmediato',
      'Que el programa de cribado ha fallado',
      'Que hay que realizar pruebas de confirmación: no es un diagnóstico',
    ],
    correctIndex: 3,
    explanation:
      'El cribado neonatal es un programa de cuatro pasos encadenados: toma de muestra, análisis centralizado, confirmación diagnóstica y derivación a seguimiento. Un resultado alterado no es un diagnóstico: solo indica que hay que hacer pruebas de confirmación. En prematuros y situaciones especiales no hay que olvidar la segunda muestra.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿Cómo clasifica la OMS la deshidratación en el terreno?',
    options: [
      'Por porcentaje de pérdida de peso corporal',
      'Por la edad y el peso del niño',
      'Por signos clínicos en tres categorías —grave, alguna y ninguna—, no por porcentaje',
      'Por la cifra de sodio sérico',
    ],
    correctIndex: 2,
    explanation:
      'En el terreno la OMS clasifica la deshidratación por signos clínicos en tres categorías —grave, alguna y ninguna—, no por porcentaje de pérdida de peso, que solo se estima. El núcleo del tratamiento es la solución de rehidratación oral con zinc, y la vía intravenosa se reserva para la deshidratación grave o el shock. Una hipernatremia no se corrige rápido.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: 'Sobre el esquema público del Programa Ampliado de Inmunización (PAI) en Bolivia:',
    options: [
      'Aplica veintiuna vacunas, todas de aplicación pública',
      'Aplica once vacunas; varias de las veintiuna del material base solo existen en el sector privado',
      'Aplica cinco vacunas obligatorias',
      'Lo decide el médico en cada consulta',
    ],
    correctIndex: 1,
    explanation:
      'El esquema público del PAI boliviano aplica once vacunas a lo largo de la vida, mientras que la tabla del material base reúne veintiuna, varias solo disponibles en el sector privado o ausentes del país. Confundir ambas hace creer que una vacuna privada forma parte del calendario público. Un esquema interrumpido no se reinicia: se completan las dosis que faltan.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: 'Ante la sospecha de meningitis bacteriana, ¿qué conducta es la correcta?',
    options: [
      'Esperar los resultados de la punción lumbar antes de iniciar antibiótico',
      'Administrar antibiótico solo si aparece exantema',
      'Obtener cultivo de sangre antes de tratar',
      'Antibiótico empírico inmediato, sin esperar la punción lumbar',
    ],
    correctIndex: 3,
    explanation:
      'La meningitis bacteriana es una emergencia que puede matar en 24 horas: el antibiótico empírico se administra de inmediato, sin esperar la punción lumbar. En entornos no epidémicos se añade corticoide intravenoso con la primera dosis. No se descarta enfermedad meningocócica por ausencia de exantema, y en mayores de 50 años hay que cubrir Listeria.',
    source: { specialty: 'pediatrics', topic: 'meningitis' },
  },
]

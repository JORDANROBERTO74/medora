import type { QuizQuestion } from '@/lib/content'

/** Cardiología. */
export const questions: QuizQuestion[] = [
  {
    prompt: 'Según la definición de la OMS, ¿cuándo se establece el diagnóstico de hipertensión arterial?',
    options: [
      'Con presión sistólica ≥130 mmHg y/o diastólica ≥80 mmHg en dos días distintos',
      'Con presión sistólica ≥140 mmHg y/o diastólica ≥90 mmHg en dos días distintos',
      'Con una única toma de ≥140/90 mmHg en la consulta',
      'Con presión sistólica ≥150 mmHg y/o diastólica ≥90 mmHg en dos días distintos',
    ],
    correctIndex: 1,
    explanation:
      'La OMS exige presión sistólica ≥140 mmHg y/o diastólica ≥90 mmHg en dos días distintos; el criterio ACC/AHA que usa el material es más bajo, ≥130/80 mmHg. Una sola toma no diagnostica, y por eso se repite la medición y se confirma fuera de la consulta con MAPA o AMPA. La meta de <150/90 corresponde a los mayores de 80 años, no al umbral diagnóstico.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt:
      'En 2024, entre los adultos de 30 a 79 años con hipertensión, ¿qué proporción desconocía su diagnóstico y qué proporción estaba controlada?',
    options: [
      'Un 23 % no lo sabía y un 44 % estaba controlado',
      'Un 33 % no lo sabía y un 66 % estaba controlado',
      'Un 66 % no lo sabía y un 26 % estaba controlado',
      'Un 44 % no lo sabía y solo un 23 % estaba controlado',
    ],
    correctIndex: 3,
    explanation:
      'En 2024 se estimaban 1400 millones de adultos de 30 a 79 años con hipertensión, un 33 % de ese grupo etario, y dos tercios vivían en países de ingresos bajos y medios. Un 44 % no sabía que la tenía y solo un 23 % estaba controlado. En Estados Unidos cerca de la mitad de los adultos cumple criterio, pero solo un 26 % alcanza la meta.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt: '¿Qué proporción de los casos de hipertensión corresponde a hipertensión primaria?',
    options: [
      'Alrededor del 85 %',
      'Alrededor del 60 %',
      'Alrededor del 33 %',
      'Alrededor del 15 %',
    ],
    correctIndex: 0,
    explanation:
      'Alrededor del 85 % de los casos son hipertensión primaria. Entre las causas secundarias figuran la apnea obstructiva del sueño, la enfermedad renal parenquimatosa, la enfermedad renovascular y el hiperaldosteronismo primario, además de fármacos como simpatomiméticos, AINE, antipsicóticos, corticoides, inhibidores de tirosina cinasa y cocaína.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt: 'Al medir la presión arterial, ¿qué tamaño de manguito se recomienda?',
    options: [
      'Que cubra el 40 % del perímetro del brazo, con un ancho del 80 %',
      'Que cubra el 60 % del perímetro del brazo, con un ancho del 20 %',
      'Que cubra el 80 % del perímetro del brazo, con un ancho del 40 %',
      'Que cubra todo el perímetro del brazo, con un ancho de la mitad de su longitud',
    ],
    correctIndex: 2,
    explanation:
      'El manguito debe cubrir el 80 % del perímetro del brazo, con un ancho del 40 %. La medición se estandariza con el paciente sentado más de 5 minutos, espalda apoyada, pies en el suelo y brazo a la altura del corazón, sin ejercicio, cafeína ni tabaco en los 30 minutos previos. Diagnosticar con un manguito inadecuado es un error frecuente.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt: 'Al medir la presión en ambos brazos, ¿cómo se interpreta una diferencia entre ellos?',
    options: [
      'Hasta 10 mmHg es normal y, si se supera, se usan las cifras del brazo más bajo',
      'Cualquier diferencia mayor de 5 mmHg obliga a descartar una coartación antes de tratar',
      'Hasta 20 mmHg es normal y se promedian las cifras de ambos brazos',
      'Hasta 15 mmHg es normal y, si persiste por encima de ese valor, se usan las cifras del brazo más alto',
    ],
    correctIndex: 3,
    explanation:
      'Una diferencia de hasta 15 mmHg entre brazos es normal; si persiste por encima de ese valor, se usan las cifras del brazo más alto. La medición debe hacerse en ambos brazos y repetirse cuando la cifra de consulta es ≥140/90 mmHg, registrando el menor de los dos últimos valores. La presión arterial es el producto del gasto cardíaco por la resistencia periférica total.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt: '¿Cómo se realiza la automedición domiciliaria de la presión arterial (AMPA)?',
    options: [
      'Dos mediciones separadas un minuto, dos veces al día, durante al menos 4 días e idealmente 7, descartando el primer día',
      'Una medición al día durante 14 días consecutivos, sin descartar ninguno',
      'Tres mediciones seguidas una vez por semana durante un mes',
      'Dos mediciones al día durante 48 horas, con un promedio de al menos 14 lecturas',
    ],
    correctIndex: 0,
    explanation:
      'La AMPA exige dos mediciones separadas un minuto, dos veces al día, durante al menos 4 días e idealmente 7, descartando el primer día. La MAPA, en cambio, requiere al menos dos mediciones por hora en vigilia y un promedio de al menos 14 mediciones. Entre 140/90 y 180/120 mmHg se ofrece MAPA para confirmar el diagnóstico.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt: '¿Con qué criterio se confirma el diagnóstico de hipertensión?',
    options: [
      'Consulta ≥140/90 mmHg y promedio de MAPA diurno o AMPA ≥140/90 mmHg',
      'Consulta ≥140/90 mmHg y promedio de MAPA diurno o AMPA ≥135/85 mmHg',
      'Consulta ≥135/85 mmHg y promedio de MAPA diurno o AMPA ≥130/80 mmHg',
      'Consulta ≥130/80 mmHg y promedio de MAPA diurno o AMPA ≥130/80 mmHg',
    ],
    correctIndex: 1,
    explanation:
      'El diagnóstico se confirma cuando la consulta da ≥140/90 mmHg y el promedio de la MAPA diurna o de la AMPA alcanza ≥135/85 mmHg. La MAPA requiere al menos dos mediciones por hora en vigilia y un promedio de al menos 14 mediciones. Confirmar fuera de la consulta evita diagnosticar con una única medición o con un manguito inadecuado.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt:
      'Según el escalonamiento de NICE, ¿qué tratamiento de primera línea corresponde a un paciente de 60 años de origen africano sin diabetes?',
    options: ['IECA', 'ARA-II', 'Calcioantagonista', 'Espironolactona a dosis baja'],
    correctIndex: 2,
    explanation:
      'En el paso 1 se usa IECA o ARA-II en menores de 55 años no afrodescendientes y en diabéticos tipo 2 de cualquier edad, y calcioantagonista en mayores de 55 años y en personas de origen africano o caribeño sin diabetes. Si el calcioantagonista no se tolera, se prefiere un diurético tiazídico-like, con indapamida como opción.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt:
      'En la hipertensión resistente, ¿qué dato guía la elección entre espironolactona y un alfa o betabloqueante?',
    options: [
      'El potasio sérico: espironolactona si es ≤4,5 mmol/L y un alfa o betabloqueante si es >4,5 mmol/L',
      'La edad: espironolactona en menores de 55 años y alfa o betabloqueante en mayores',
      'La etnia: espironolactona en personas de origen africano o caribeño',
      'La diferencia entre brazos: espironolactona si supera 15 mmHg',
    ],
    correctIndex: 0,
    explanation:
      'En la hipertensión resistente se considera espironolactona a dosis baja si el potasio es ≤4,5 mmol/L, o un alfa o betabloqueante si es >4,5 mmol/L, siempre tras confirmar con MAPA o AMPA, revisar la adherencia y descartar hipotensión ortostática. Es el paso 4 del escalonamiento, después de combinar IECA o ARA-II, calcioantagonista y tiazídico-like.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt: '¿Qué metas de presión arterial fija la guía para menores y mayores de 80 años?',
    options: [
      '<130/80 mmHg en todos los pacientes, con independencia de la edad',
      '<120/80 mmHg en menores de 80 años y <140/90 mmHg en mayores de 80 años',
      '<150/90 mmHg en menores de 80 años y <140/90 mmHg en mayores de 80 años',
      '<140/90 mmHg en menores de 80 años y <150/90 mmHg en mayores de 80 años',
    ],
    correctIndex: 3,
    explanation:
      'Las metas son <140/90 mmHg en menores de 80 años y <150/90 mmHg en mayores de 80, con equivalentes de MAPA y AMPA de <135/85 y <145/85 mmHg respectivamente, y son las mismas con o sin enfermedad cardiovascular. La OMS reserva la meta <130/80 mmHg para quienes tienen enfermedad cardiovascular, diabetes, enfermedad renal crónica o alto riesgo cardiovascular.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt: '¿Qué combinación de antihipertensivos está formalmente desaconsejada?',
    options: [
      'IECA + calcioantagonista',
      'ARA-II + diurético tiazídico-like',
      'IECA + ARA-II',
      'Calcioantagonista + diurético tiazídico-like',
    ],
    correctIndex: 2,
    explanation:
      'No debe combinarse un IECA con un ARA-II: la asociación está formalmente desaconsejada. El paso 2 del escalonamiento añade calcioantagonista o tiazídico al IECA o ARA-II, y el paso 3 combina IECA o ARA-II con calcioantagonista y tiazídico-like. La meta tensional, en cambio, depende de la guía que se adopte.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt: 'Ante una cifra de presión arterial ≥180/120 mmHg sin síntomas, ¿cuál es la conducta?',
    options: [
      'Iniciar tratamiento antihipertensivo de inmediato en todos los casos, sin explorar',
      'Buscar lesión de órganos diana y, si existe, iniciar tratamiento sin esperar la MAPA',
      'Esperar el resultado de la MAPA antes de tomar cualquier decisión',
      'Remitir el mismo día a valoración especializada en todos los casos',
    ],
    correctIndex: 1,
    explanation:
      'Sin síntomas se buscan lesiones de órganos diana y, si existen, se inicia tratamiento sin esperar la MAPA. La remisión para valoración especializada el mismo día se reserva para hemorragias retinianas, papiledema o síntomas potencialmente letales. Las cifras muy elevadas, habitualmente ≥180/120 mmHg, pueden acompañarse de cefalea intensa, dolor torácico, disnea o alteraciones visuales.',
    source: { specialty: 'internal-medicine', topic: 'arterial-hypertension' },
  },
  {
    prompt: '¿Cómo se define la insuficiencia cardíaca?',
    options: [
      'Un diagnóstico que se establece cuando el ecocardiograma muestra una fracción de eyección inferior al 50 %',
      'Una enfermedad limitada al ventrículo izquierdo que cursa siempre con fracción de eyección reducida',
      'Un síndrome clínico en el que el corazón no cubre las demandas metabólicas por una anomalía estructural o funcional',
      'Un hallazgo radiológico definido por cardiomegalia y líneas B de Kerley',
    ],
    correctIndex: 2,
    explanation:
      'La insuficiencia cardíaca es un síndrome clínico, no un diagnóstico ecocardiográfico aislado: el corazón no cubre las demandas metabólicas por una anomalía estructural o funcional, con gasto cardíaco bajo, presiones de llenado elevadas o ambas cosas. Afecta a más de 64 millones de personas en el mundo. Aproximadamente la mitad de los pacientes tiene fracción de eyección preservada.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt: '¿Cómo se define la insuficiencia cardíaca con fracción de eyección ligeramente reducida?',
    options: [
      'Fracción de eyección del 41 al 49 %',
      'Fracción de eyección ≤40 %',
      'Fracción de eyección ≥50 %',
      'Fracción de eyección >40 % con un ascenso de más de 10 puntos',
    ],
    correctIndex: 0,
    explanation:
      'El fenotipo se define por la fracción de eyección: reducida ≤40 %, ligeramente reducida 41-49 %, preservada ≥50 % y mejorada cuando asciende más de 10 puntos absolutos y supera el 40 %. La cifra de péptido natriurético no permite clasificar el fenotipo, y una fracción de eyección normal no descarta insuficiencia cardíaca.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt:
      'Un paciente sin tratamiento presenta un NT-proBNP de 2500 ng/L. ¿Qué actuación corresponde?',
    options: [
      'Ecocardiograma en seis semanas',
      'Descartar el diagnóstico porque la cifra no es concluyente',
      'Repetir el péptido natriurético en un año',
      'Valoración especializada y ecocardiograma en dos semanas',
    ],
    correctIndex: 3,
    explanation:
      'El NT-proBNP es la prueba inicial: valores >2000 ng/L obligan a valoración especializada y ecocardiograma en dos semanas; entre 400 y 2000 ng/L, en seis semanas; y por debajo de 400 ng/L en un paciente sin tratar el diagnóstico es improbable. La cifra no distingue entre fenotipos de fracción de eyección.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt: '¿Qué valor tiene un BNP normal en la insuficiencia cardíaca?',
    options: [
      'Descarta la insuficiencia cardíaca en cualquier fenotipo',
      'No excluye el diagnóstico, sobre todo en la fracción preservada y en obesidad',
      'Solo es fiable en la fracción reducida',
      'Obliga a repetirlo a las 48 horas antes de decidir',
    ],
    correctIndex: 1,
    explanation:
      'Un BNP normal no excluye el diagnóstico, sobre todo en la fracción preservada y en obesidad, donde los valores pueden ser aproximadamente la mitad y hasta un 30 % de los casos agudos con fracción preservada queda por debajo de 100 pg/mL. Una fracción de eyección normal tampoco descarta la enfermedad, y los péptidos pueden ser normales en obesos.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt:
      '¿Qué combinación de fármacos se ofrece en la insuficiencia cardíaca con fracción de eyección reducida?',
    options: [
      'IECA + ARA-II + betabloqueante + diurético',
      'Betabloqueante + calcioantagonista + iSGLT2 + antagonista del receptor mineralocorticoide',
      'IECA + betabloqueante + verapamilo + iSGLT2',
      'IECA + betabloqueante + antagonista del receptor mineralocorticoide + iSGLT2',
    ],
    correctIndex: 3,
    explanation:
      'En la fracción de eyección reducida se ofrece IECA + betabloqueante + antagonista del receptor mineralocorticoide + inhibidor de SGLT2, combinados de forma precoz. Si el paciente sigue sintomático con la dosis máxima tolerada de los cuatro, se considera sustituir el IECA por un ARNI. Los diuréticos se reservan para aliviar la congestión, titulando a la dosis mínima eficaz.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt:
      'Al sustituir un IECA por sacubitrilo/valsartán, ¿qué intervalo mínimo debe respetarse?',
    options: [
      'Al menos 36 horas desde la última dosis de IECA',
      'Al menos 6 horas desde la última dosis de IECA',
      'Al menos 12 horas desde la última dosis de IECA',
      'No es necesario ningún intervalo entre ambos fármacos',
    ],
    correctIndex: 0,
    explanation:
      'Se dejan al menos 36 horas entre la última dosis de IECA y la primera de ARNI. El cambio se plantea si el paciente sigue sintomático con la dosis máxima tolerada de los cuatro pilares. Ante un angioedema, o si el ARNI no se tolera, se combinan betabloqueante, ARM e iSGLT2 considerando un ARA-II.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt:
      '¿Qué tratamiento farmacológico se considera en la insuficiencia cardíaca con fracción de eyección preservada?',
    options: [
      'IECA + betabloqueante',
      'ARNI + betabloqueante',
      'Antagonista del receptor mineralocorticoide + iSGLT2',
      'Verapamilo + diurético',
    ],
    correctIndex: 2,
    explanation:
      'En la fracción preservada se consideran ARM + iSGLT2; en la ligeramente reducida, IECA o ARA-II + betabloqueante + ARM + iSGLT2; y en la reducida, los cuatro pilares. Aproximadamente la mitad de los pacientes tiene fracción preservada, proporción que aumenta con la edad y con la diabetes, y en ese fenotipo el BNP puede ser normal.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt: '¿En qué situación no se ofrece betabloqueante en la insuficiencia cardíaca?',
    options: [
      'Con fracción de eyección del 35 %',
      'Con bloqueo auriculoventricular de segundo o tercer grado sin marcapasos',
      'Con insuficiencia cardíaca de clase funcional III',
      'Con antecedente de infarto de miocardio',
    ],
    correctIndex: 1,
    explanation:
      'El betabloqueante exige electrocardiograma previo y no se ofrece en bloqueo auriculoventricular de segundo o tercer grado sin marcapasos ni con frecuencia inferior a 50 lpm. Se evitan verapamilo, diltiazem y dihidropiridinas de acción corta en la fracción reducida. La función renal y el potasio se controlan al inicio y tras cada ajuste.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt: '¿Cuándo debe valorarse el hierro intravenoso en la insuficiencia cardíaca?',
    options: [
      'Con hemoglobina <150 g/L y saturación de transferrina <20 % o ferritina <100 ng/mL',
      'Con hemoglobina <150 g/L y ferritina >300 ng/mL',
      'Solo si la hemoglobina es <100 g/L',
      'Únicamente en la fracción preservada con BNP normal',
    ],
    correctIndex: 0,
    explanation:
      'Se valora el hierro intravenoso cuando, con hemoglobina <150 g/L, la saturación de transferrina es <20 % o la ferritina <100 ng/mL. El tratamiento busca reducir las hospitalizaciones por descompensación y la mortalidad cardiovascular, y se acompaña de educación, autocuidado, rehabilitación cardíaca y vacunación antigripal anual y antineumocócica.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt:
      'Durante el tratamiento de la insuficiencia cardíaca, ¿cuándo hay que actuar sobre la función renal o el potasio?',
    options: [
      'Si la creatinina sube más del 10 % o el potasio supera 4,5 mmol/L',
      'Solo si aparecen edemas',
      'Si el potasio desciende por debajo de 3,0 mmol/L',
      'Si la creatinina sube más del 50 % o el potasio supera 5,5 mmol/L',
    ],
    correctIndex: 3,
    explanation:
      'La función renal y el potasio se controlan al inicio, a las 1-2 semanas de cada ajuste y luego cada 3-6 meses, y se actúa si la creatinina sube más del 50 % o el potasio supera 5,5 mmol/L. No debe retirarse un fármaco solo por una elevación moderada de creatinina: hay que seguir el protocolo local.',
    source: { specialty: 'internal-medicine', topic: 'heart-failure' },
  },
  {
    prompt: '¿Qué cuadros agrupa el síndrome coronario agudo?',
    options: [
      'Angina estable, infarto de miocardio y miocardiopatía dilatada',
      'Angina inestable, infarto sin elevación del ST e infarto con elevación del ST',
      'Pericarditis, miocarditis e infarto de miocardio',
      'Infarto con ondas Q, infarto sin ondas Q y muerte súbita',
    ],
    correctIndex: 1,
    explanation:
      'El síndrome coronario agudo agrupa la angina inestable, el infarto sin elevación del ST y el infarto con elevación del ST, que se distinguen por la clínica, el electrocardiograma y la troponina. Hasta un tercio de los pacientes hospitalizados por infarto presenta algún grado de insuficiencia cardíaca, y la troponina de alta sensibilidad es el marcador de necrosis de referencia.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt: '¿Qué proporción de los infartos estudiados con coronariografía corresponde a MINOCA?',
    options: [
      'Entre el 20 y el 25 %',
      'Menos del 1 %',
      'Entre el 5 y el 6 %',
      'Alrededor del 50 %',
    ],
    correctIndex: 2,
    explanation:
      'El infarto con coronarias no obstructivas (MINOCA) representa entre el 5 y el 6 % de los infartos estudiados con coronariografía. Esto encaja con que placas con estenosis mínima también pueden romperse: en una gran cohorte de imagen, la mayoría de los pacientes que sufrieron infarto o muerte cardiovascular no tenía estenosis significativa al inicio.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt: '¿Cómo se define la angina inestable?',
    options: [
      'Dolor en reposo prolongado, habitualmente más de 20 minutos, angina de novo de al menos clase 3 canadiense o angina que se intensifica',
      'Dolor torácico de esfuerzo que cede con reposo en menos de 5 minutos',
      'Elevación del segmento ST que revierte con nitroglicerina',
      'Necrosis con troponina ≥ percentil 99 sin elevación del ST',
    ],
    correctIndex: 0,
    explanation:
      'La angina inestable se define por dolor en reposo prolongado, habitualmente más de 20 minutos, angina de novo de al menos clase 3 de la clasificación canadiense, o angina que se intensifica en frecuencia, gravedad, duración o umbral. Los síntomas pueden solaparse entre los tres síndromes del síndrome coronario agudo, que se separan por el electrocardiograma y la troponina.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt: 'En la angina inestable, ¿qué se espera de la troponina?',
    options: [
      'Elevada por encima del percentil 99 con necrosis transmural',
      'Elevada solo si aparecen ondas Q',
      'Negativa y sin cambios electrocardiográficos',
      'Negativa, por definición inferior al percentil 99, con cambios electrocardiográficos transitorios',
    ],
    correctIndex: 3,
    explanation:
      'En la angina inestable la troponina es negativa, por definición inferior al percentil 99 del límite superior de referencia, con cambios electrocardiográficos transitorios. El infarto sin elevación del ST se define por necrosis con troponina ≥ percentil 99 sin elevación del ST que cumpla criterios de infarto con elevación. Ninguno de los dos tipos requiere ondas Q.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt: '¿Qué afirmación sobre el infarto con elevación del ST es correcta?',
    options: [
      'Siempre requiere ondas Q para diagnosticarse',
      'Se define por una elevación del ST que revierte rápidamente con nitroglicerina',
      'Un bloqueo completo de rama izquierda nuevo y aislado no se considera equivalente de elevación del ST',
      'Exige una troponina negativa en las primeras horas',
    ],
    correctIndex: 2,
    explanation:
      'El infarto con elevación del ST se define por una elevación del segmento ST que no revierte rápidamente con nitroglicerina, con troponina elevada y necrosis transmural. Un bloqueo completo de rama izquierda nuevo y aislado no se considera equivalente de elevación del ST, y ninguno de los dos tipos de infarto requiere ondas Q: pueden aparecer o no.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt: '¿Cuándo se ofrece angioplastia primaria en el infarto con elevación del ST?',
    options: [
      'Si la presentación ocurre dentro de las 12 horas y la intervención puede realizarse en los 120 minutos siguientes al momento en que podría haberse administrado fibrinólisis',
      'En cualquier momento tras las primeras 24 horas del inicio del dolor',
      'Solo si la fibrinólisis previa ha fracasado',
      'Si la presentación ocurre dentro de las 48 horas y el centro dispone de hemodinámica',
    ],
    correctIndex: 0,
    explanation:
      'Se ofrece angiografía con angioplastia primaria si la presentación ocurre dentro de las 12 horas y la intervención puede realizarse en los 120 minutos siguientes al momento en que podría haberse administrado fibrinólisis. La fibrinólisis se reserva para quienes presentan dentro de las 12 horas cuando no puede garantizarse la angioplastia en 120 minutos.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt: '¿Qué carga de aspirina se administra en el infarto con elevación del ST?',
    options: [
      '100 mg al tercer día del ingreso',
      '500 mg tras completar la angioplastia',
      '75 mg solo si aparecen ondas Q',
      '300 mg lo antes posible',
    ],
    correctIndex: 3,
    explanation:
      'Se administra una carga de 300 mg de aspirina lo antes posible y doble antiagregación con prasugrel —preferido— o ticagrelor, o clopidogrel si el paciente ya toma anticoagulante oral. En mayores de 75 años conviene valorar el riesgo hemorrágico y pueden usarse ticagrelor o clopidogrel. También se usa heparina no fraccionada y se prefiere el acceso radial.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt: 'Tras administrar un fibrinolítico, ¿cómo se detecta el fracaso de la reperfusión?',
    options: [
      'Con control electrocardiográfico a las 24 horas y una segunda dosis',
      'Con control electrocardiográfico a los 60-90 minutos, sin repetir el fibrinolítico',
      'Con una troponina a los 30 minutos',
      'Con un ecocardiograma a los 7 días',
    ],
    correctIndex: 1,
    explanation:
      'Se hace control electrocardiográfico a los 60-90 minutos para detectar el fracaso de la reperfusión, y ante ese fracaso no se repite el fibrinolítico: se pasa a angiografía. La fibrinólisis se reserva para quienes presentan dentro de las 12 horas cuando no puede garantizarse la angioplastia en 120 minutos.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt:
      'En el infarto sin elevación del ST y la angina inestable de riesgo intermedio o alto, ¿qué pauta se plantea?',
    options: [
      'Aspirina precoz y fondaparinux, con angiografía dentro de las 72 horas',
      'Fibrinólisis inmediata y control electrocardiográfico a los 60-90 minutos',
      'Aspirina y manejo conservador sin angiografía',
      'Doble antiagregación sin heparina ni estudio invasivo',
    ],
    correctIndex: 0,
    explanation:
      'Se administra aspirina precoz y fondaparinux salvo alto riesgo hemorrágico o angiografía inmediata. La angiografía se considera dentro de las 72 horas en riesgo intermedio o alto y de forma inmediata si el paciente está inestable, reservando el manejo conservador para el bajo riesgo. La hiperglucemia se controla manteniendo la glucosa por debajo de 11,0 mmol/L.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt:
      'Si se planifica angioplastia primaria, ¿qué práctica debe evitarse antes de llegar a la sala de hemodinámica?',
    options: [
      'Administrar una carga de 300 mg de aspirina',
      'Usar heparina no fraccionada',
      'Administrar inhibidores de la glucoproteína IIb/IIIa o fibrinolíticos de rutina',
      'Optar por el acceso radial',
    ],
    correctIndex: 2,
    explanation:
      'No se administran inhibidores de la glucoproteína IIb/IIIa ni fibrinolíticos de rutina antes de llegar a la sala de hemodinámica si se planifica angioplastia primaria. Tampoco se repite fibrinólisis ante el fracaso reperfusor: se pasa a angiografía. La elevación del ST que revierte con nitroglicerina no define infarto con elevación del ST.',
    source: { specialty: 'internal-medicine', topic: 'acute-myocardial-infarction' },
  },
  {
    prompt: '¿Qué define al síncope?',
    options: [
      'Una sensación de desmayo inminente sin pérdida de conciencia',
      'Una pérdida de conciencia prolongada con confusión al despertar',
      'Una crisis con movimientos tónico-clónicos generalizados',
      'Una pérdida súbita y breve de la conciencia con pérdida del tono postural y recuperación espontánea',
    ],
    correctIndex: 3,
    explanation:
      'El síncope es una pérdida súbita y breve de la conciencia con pérdida del tono postural y recuperación espontánea, por hipoperfusión cerebral global. El presíncope es la sensación de desmayo inminente sin pérdida de conciencia y comparte causas, por lo que se evalúa igual. Las causas más frecuentes son la vasovagal y la idiopática; un grupo menor tiene causa cardíaca grave.',
    source: { specialty: 'internal-medicine', topic: 'syncope' },
  },
  {
    prompt: '¿Con qué frecuencias puede una arritmia producir síncope?',
    options: [
      'Por encima de 100 lpm o por debajo de 50 lpm',
      'Aproximadamente por encima de 150-180 lpm o por debajo de 30-35 lpm',
      'Por encima de 200 lpm o por debajo de 20 lpm',
      'Solo por debajo de 40 lpm',
    ],
    correctIndex: 1,
    explanation:
      'Las arritmias producen síncope cuando la frecuencia es demasiado rápida para permitir el llenado, aproximadamente >150-180 lpm, o demasiado lenta, <30-35 lpm. La mayoría de los síncopes se deben a un descenso del gasto cardíaco por obstrucción al flujo, disfunción sistólica o diastólica, arritmias o reducción del retorno venoso.',
    source: { specialty: 'internal-medicine', topic: 'syncope' },
  },
  {
    prompt: '¿Cuánto tarda habitualmente la recuperación de un síncope vasovagal?',
    options: [
      'Entre 5 y 15 minutos, aunque puede prolongarse',
      'Menos de 30 segundos en todos los casos',
      'Entre 1 y 2 horas de forma constante',
      'Más de 24 horas hasta recuperar el estado basal',
    ],
    correctIndex: 0,
    explanation:
      'En el síncope vasovagal la recuperación suele tardar entre 5 y 15 minutos, aunque puede prolongarse. Los pródromos típicos son mareo, náusea y sudoración, con un desencadenante reconocible. Pueden observarse sacudidas musculares breves, y una convulsión de menos de 5 segundos puede acompañar a un síncope verdadero sin que ello implique epilepsia.',
    source: { specialty: 'internal-medicine', topic: 'syncope' },
  },
  {
    prompt: 'Un síncope con sacudidas musculares breves, ¿qué conducta sugiere?',
    options: [
      'Iniciar tratamiento antiepiléptico de inmediato',
      'Solicitar un electroencefalograma de rutina',
      'No etiquetarlo de epilepsia: una convulsión de menos de 5 segundos puede acompañar a un síncope verdadero',
      'Descartar el síncope y buscar una causa psiquiátrica',
    ],
    correctIndex: 2,
    explanation:
      'Una convulsión de menos de 5 segundos puede acompañar a un síncope verdadero sin que ello implique epilepsia, y no debe etiquetarse de epilepsia un síncope con sacudidas breves. Tampoco se pide electroencefalograma de rutina. La evaluación se apoya en la descripción del paciente y de testigos: postura previa, pródromos, movimientos, mordedura de lengua y confusión al recuperar.',
    source: { specialty: 'internal-medicine', topic: 'syncope' },
  },
  {
    prompt: '¿Qué hallazgos del electrocardiograma son banderas rojas en el síncope?',
    options: [
      'Ritmo sinusal a 70 lpm con eje normal',
      'Trastornos de conducción, QT largo o corto y cualquier alteración del segmento ST o de la onda T',
      'Ondas T positivas en las derivaciones precordiales',
      'Extrasístoles auriculares aisladas sin otros hallazgos',
    ],
    correctIndex: 1,
    explanation:
      'El electrocardiograma de 12 derivaciones debe hacerse con interpretación automatizada, y son banderas rojas los trastornos de conducción, el QT largo o corto y cualquier alteración del segmento ST o de la onda T. Un electrocardiograma anormal obliga a valoración cardiovascular urgente en 24 horas, igual que la insuficiencia cardíaca o el síncope de esfuerzo.',
    source: { specialty: 'internal-medicine', topic: 'syncope' },
  },
  {
    prompt: '¿Qué situación exige valoración cardiovascular urgente en 24 horas tras un síncope?',
    options: [
      'Un síncope vasovagal con pródromos típicos y recuperación completa',
      'Un presíncope con desencadenante reconocible',
      'Un síncope en un adulto joven sin cardiopatía y con exploración normal',
      'Un síncope durante el esfuerzo',
    ],
    correctIndex: 3,
    explanation:
      'Requieren valoración cardiovascular urgente en 24 horas el electrocardiograma anormal, la insuficiencia cardíaca, el síncope de esfuerzo, la muerte súbita familiar en menores de 40 años o cardiopatía hereditaria, la disnea nueva inexplicada y el soplo; en mayores de 65 años sin pródromos se considera la misma vía.',
    source: { specialty: 'internal-medicine', topic: 'syncope' },
  },
  {
    prompt: '¿Qué tres elementos permiten diagnosticar un síncope vasovagal no complicado?',
    options: [
      'Postura prolongada de pie, factores provocadores y pródromos',
      'Palidez, pulso débil e hipotensión arterial',
      'Pérdida de conciencia, amnesia y confusión al despertar',
      'Dolor torácico, disnea y palpitaciones',
    ],
    correctIndex: 0,
    explanation:
      'El síncope vasovagal no complicado se diagnostica con las tres «P»: postura prolongada de pie, factores provocadores y pródromos. En el síncope vasovagal y en el situacional se explica el mecanismo, se identifican y evitan los desencadenantes, se tranquiliza sobre el buen pronóstico y se indica consultar si reaparece.',
    source: { specialty: 'internal-medicine', topic: 'syncope' },
  },
  {
    prompt:
      'Si los episodios de síncope ocurren cada una o dos semanas, ¿qué monitorización electrocardiográfica se elige?',
    options: [
      'Holter de hasta 48 horas',
      'Registrador implantable',
      'Registro externo',
      'Monitorización intrahospitalaria continua durante un mes',
    ],
    correctIndex: 2,
    explanation:
      'La monitorización se elige por frecuencia: Holter de hasta 48 horas si los episodios ocurren varias veces por semana, registro externo si ocurren cada una o dos semanas y registrador implantable si son más espaciados. La prueba de mesa basculante no es de primera línea y no se indica cuando el diagnóstico de síncope vasovagal ya es claro.',
    source: { specialty: 'internal-medicine', topic: 'syncope' },
  },
  {
    prompt: '¿Cómo se elige la campana o el diafragma al auscultar el corazón?',
    options: [
      'Los ruidos de tono alto con el diafragma y los de tono bajo con la campana, ejerciendo muy poca presión',
      'Los ruidos de tono alto con la campana y los de tono bajo con el diafragma',
      'Todos los ruidos con el diafragma, ejerciendo una presión firme',
      'Todos los ruidos con la campana, sin importar la presión aplicada',
    ],
    correctIndex: 0,
    explanation:
      'Los ruidos de tono alto se auscultan mejor con el diafragma y los de tono bajo con la campana, ejerciendo muy poca presión, porque la presión excesiva convierte la piel en diafragma y elimina los sonidos graves. La auscultación sigue siendo insustituible por su disponibilidad y su coste nulo, y su rendimiento depende de una secuencia sistemática.',
    source: { specialty: 'internal-medicine', topic: 'cardiovascular-examination' },
  },
  {
    prompt: '¿Cómo se gradúan los soplos cardíacos?',
    options: [
      'Los sistólicos de 1 a 4 y los diastólicos de 1 a 6',
      'Los sistólicos de 1 a 6 y los diastólicos de 1 a 6',
      'Los sistólicos de 1 a 6 y los diastólicos de 1 a 4',
      'Los sistólicos de 1 a 4 y los diastólicos de 1 a 4',
    ],
    correctIndex: 2,
    explanation:
      'Los soplos sistólicos se gradúan de 1 a 6 y los diastólicos de 1 a 4. La descripción de un soplo por localización, cronología, intensidad, tono, duración e irradiación suele bastar para orientar el diagnóstico, y no graduarlo ni precisar su irradiación es uno de los errores frecuentes.',
    source: { specialty: 'internal-medicine', topic: 'cardiovascular-examination' },
  },
  {
    prompt:
      'En el prolapso mitral, ¿hacia dónde se desplaza el clic al ponerse de pie o hacer Valsalva?',
    options: [
      'Hacia S2, porque aumenta el volumen de llenado',
      'No se modifica con las maniobras posturales',
      'Se hace continuo durante la taquicardia',
      'Hacia S1, porque se reduce el volumen de llenado',
    ],
    correctIndex: 3,
    explanation:
      'Los clics son sistólicos, de tono más alto y duración más breve que los ruidos. Los del prolapso mitral son meso o telesistólicos y se desplazan hacia S1 al reducirse el volumen de llenado, como ocurre en la bipedestación y el Valsalva, y hacia S2 al aumentar, como en el decúbito. Los de la estenosis aórtica congénita o pulmonar son precoces.',
    source: { specialty: 'internal-medicine', topic: 'cardiovascular-examination' },
  },
  {
    prompt: '¿Para qué se explora al paciente sentado e inclinado hacia delante?',
    options: [
      'Para el soplo pansistólico de insuficiencia mitral',
      'Para los soplos diastólicos aórtico y pulmonar y el roce pericárdico',
      'Para el clic del prolapso mitral',
      'Para el desdoblamiento fisiológico del segundo ruido',
    ],
    correctIndex: 1,
    explanation:
      'La secuencia recomendada termina con el paciente sentado para la espalda e inclinado hacia delante para los soplos diastólicos aórtico y pulmonar y el roce pericárdico. Antes se explora el impulso apical en decúbito lateral izquierdo, el borde esternal izquierdo bajo, los espacios intercostales, la axila izquierda y la región supraclavicular.',
    source: { specialty: 'internal-medicine', topic: 'cardiovascular-examination' },
  },
  {
    prompt: '¿Cómo se describe el roce pericárdico?',
    options: [
      'Un sonido continuo que se hace más evidente en bradicardia',
      'Un sonido de tono bajo con un único componente',
      'Un sonido áspero, de tono alto, con dos o tres componentes que varían con la postura',
      'Un soplo sistólico puro que no cambia con la postura',
    ],
    correctIndex: 2,
    explanation:
      'El roce pericárdico es un sonido áspero, de tono alto, con dos o tres componentes que varían con la postura y pueden hacerse casi continuos en taquicardia. Se busca al final de la exploración, con el paciente sentado e inclinado hacia delante, junto con los soplos diastólicos aórtico y pulmonar.',
    source: { specialty: 'internal-medicine', topic: 'cardiovascular-examination' },
  },
  {
    prompt: '¿Cuándo se considera anormal el pulso paradójico?',
    options: [
      'Por encima de 5 mmHg',
      'Por encima de 10 mmHg',
      'Por encima de 15 mmHg',
      'Por encima de 20 mmHg',
    ],
    correctIndex: 1,
    explanation:
      'El pulso paradójico es anormal por encima de 10 mmHg. La exploración debe completarse con la medición de la presión en ambos brazos, donde hasta 15 mmHg de diferencia es normal. Documentar los hallazgos con un esquema permite comparar exploraciones sucesivas e interpretarlos a la luz de la imagen.',
    source: { specialty: 'internal-medicine', topic: 'cardiovascular-examination' },
  },
  {
    prompt: '¿En qué valvulopatía el primer ruido cardíaco es intenso?',
    options: [
      'En la insuficiencia mitral por rigidez valvular',
      'En la estenosis aórtica',
      'En la insuficiencia aórtica',
      'En la estenosis mitral',
    ],
    correctIndex: 3,
    explanation:
      'El S1 se debe sobre todo al cierre mitral, con componente tricuspídeo, y es intenso en la estenosis mitral; puede ser blando o ausente en la insuficiencia mitral por rigidez valvular. El desdoblamiento fisiológico es del segundo ruido, no del primero: el S2 se debe al cierre aórtico y pulmonar.',
    source: { specialty: 'internal-medicine', topic: 'cardiovascular-examination' },
  },
]

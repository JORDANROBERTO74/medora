import type { QuizQuestion } from '@/lib/content'

/** Cirugía digestiva. */
export const questions: QuizQuestion[] = [
  {
    prompt:
      'En los registros que cita la guía europea, ¿qué cifra de presión arterial sistólica define el shock hemorrágico?',
    options: [
      'Por debajo de 90 mmHg',
      'Por debajo de 100 mmHg',
      'Por debajo de 80 mmHg',
      'Por debajo de 70 mmHg',
    ],
    correctIndex: 0,
    explanation:
      'La guía europea recoge que el shock hemorrágico se define en esos registros por una presión arterial sistólica inferior a 90 mmHg. La cifra convive con una reanimación restrictiva hasta el control definitivo del sangrado, y con el dato de que aproximadamente un tercio de los pacientes con trauma grave llega al hospital ya coagulopático.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt: 'En el traumatizado, ¿qué valor tiene una ecografía FAST negativa?',
    options: [
      'Descarta la hemorragia intraperitoneal y la retroperitoneal',
      'No excluye la hemorragia intraperitoneal ni la retroperitoneal',
      'Es el cribado que decide si se realiza una TC',
      'Solo detecta lesiones de órganos sólidos',
    ],
    correctIndex: 1,
    explanation:
      'Una ecografía FAST negativa no excluye hemorragia intraperitoneal ni retroperitoneal, y tampoco debe usarse como cribado para decidir si se hace una TC. En el adulto con trauma cerrado grave y sospecha de lesiones múltiples se recomienda TC de cuerpo entero, desde el vértice hasta el tercio medio del muslo, sin reposicionar al paciente.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt: 'En el trauma grave con sangrado activo, ¿hasta cuándo se administra ácido tranexámico?',
    options: [
      'Sin límite temporal, mientras persista el sangrado',
      'Hasta las 6 horas de la lesión',
      'Solo en las primeras 24 horas',
      'Hasta las 3 horas de la lesión, salvo evidencia de hiperfibrinólisis',
    ],
    correctIndex: 3,
    explanation:
      'El ácido tranexámico se administra por vía intravenosa lo antes posible en el trauma grave con sangrado activo o sospechado, y no debe darse más allá de las 3 horas de la lesión salvo que exista evidencia de hiperfibrinólisis. La precocidad importa porque el objetivo es acortar el tiempo hasta el control del sangrado.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt:
      'En el adulto con sangrado activo, ¿qué proporción de plasma y hematíes recomienda NICE NG39?',
    options: [
      '1 unidad de plasma por 1 de hematíes',
      '1 unidad de plasma por cada 2 de hematíes',
      '1 unidad de plasma por cada 3 de hematíes',
      '2 unidades de plasma por 1 de hematíes',
    ],
    correctIndex: 0,
    explanation:
      'NICE NG39 recomienda en el adulto una proporción de 1 unidad de plasma por 1 de hematíes, comenzando con un protocolo de ratio fijo y pasando a guía por laboratorio en cuanto sea posible. En el hospital se evitan los cristaloides durante el sangrado activo, y la reanimación se mantiene restrictiva hasta el control definitivo.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt:
      '¿Cómo se revierte de forma rápida la anticoagulación por antagonistas de la vitamina K en el sangrado grave?',
    options: [
      'Con plasma fresco congelado como primera medida',
      'Con concentrado de complejo protrombínico, sin plasma para ese fin',
      'Con vitamina K aislada y observación',
      'Con plaquetas y crioprecipitado',
    ],
    correctIndex: 1,
    explanation:
      'La reversión rápida de la anticoagulación por antagonistas de la vitamina K se hace con concentrado de complejo protrombínico, sin emplear plasma para ese fin; para el resto de anticoagulantes se consulta a hematología. El plasma sí forma parte de la proporción fija de hemoderivados del sangrado masivo, que no es lo mismo que revertir un fármaco.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt: '¿Cuándo se indica cirugía de control de daños en el paciente con hemorragia?',
    options: [
      'Siempre que el TC objetive hemorragia intraperitoneal',
      'Cuando el paciente está estable y responde a volumen',
      'Cuando hay inestabilidad que no responde a volumen',
      'Solo si la hemorragia es de origen pélvico',
    ],
    correctIndex: 2,
    explanation:
      'La cirugía de control de daños se reserva para la inestabilidad que no responde a volumen; si el paciente responde o está estable, se plantea cirugía definitiva. La radiología intervencionista se emplea en la hemorragia arterial pélvica y, valorada, en la de órgano sólido. El objetivo general sigue siendo acortar el tiempo hasta el control del sangrado.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt:
      'Sobre el torniquete en una hemorragia letal de extremidad, ¿qué conducta se ajusta a la guía?',
    options: [
      'Se coloca siempre antes de intentar la compresión directa',
      'Se mantiene hasta el control quirúrgico y se retira lo antes posible',
      'Se retira en cuanto cede el dolor',
      'Su uso prolongado nunca produce lesión nerviosa',
    ],
    correctIndex: 1,
    explanation:
      'La compresión directa con apósitos simples es la primera medida en la hemorragia externa, y el torniquete se reserva para cuando esa compresión no controla una hemorragia potencialmente letal en una extremidad. Debe mantenerse hasta el control quirúrgico y retirarse lo antes posible, porque mal colocado o prolongado puede producir parálisis nerviosa e isquemia, aunque de forma infrecuente.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt: 'En el trauma grave, ¿qué objetivo de PaCO₂ se busca con la ventilación?',
    options: ['25–30 mmHg', '30–35 mmHg', '35–40 mmHg', '45–50 mmHg'],
    correctIndex: 2,
    explanation:
      'En el trauma grave se ventila con normoventilación y un objetivo de PaCO₂ de 35–40 mmHg. Se evita la hipoxemia y no se busca la hiperoxia, salvo en la exanguinación inminente. La hiperventilación y la hipoventilación se apartan de ese objetivo, igual que la elevación del miembro, que no figura entre las medidas recomendadas para el control de la hemorragia externa.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt:
      'En el adulto con trauma cerrado grave y sospecha de lesiones múltiples, ¿qué imagen se recomienda?',
    options: [
      'TC de cuerpo entero, del vértice al tercio medio del muslo, sin reposicionar',
      'TC de abdomen y pelvis aislada',
      'Radiografía de tórax y abdomen en dos proyecciones',
      'Ecografía FAST seriada como única prueba',
    ],
    correctIndex: 0,
    explanation:
      'Se recomienda TC de cuerpo entero, desde el vértice hasta el tercio medio del muslo y sin reposicionar al paciente, cuando el adulto presenta trauma cerrado grave con sospecha de lesiones múltiples. La FAST no sirve como cribado para decidir esa TC, y una FAST negativa no excluye hemorragia intraperitoneal ni retroperitoneal.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-hemorrhages' },
  },
  {
    prompt:
      'Según los datos de la guía ASGE, ¿qué porcentaje de adultos estadounidenses desarrollará colelitiasis sintomática en una década?',
    options: ['Alrededor del 25 %', 'Alrededor del 10 %', 'Alrededor del 40 %', 'Alrededor del 70 %'],
    correctIndex: 1,
    explanation:
      'Los datos prospectivos poblacionales recogidos por la guía ASGE indican que alrededor del 10 % de los adultos estadounidenses desarrollará colelitiasis sintomática a lo largo de una década. La guía japonesa añade que cerca del 70 % de las colelitiasis se detectan asintomáticas, con una tasa acumulada de síntomas del 10–20 % a diez años.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt:
      'Entre las personas con colelitiasis sintomática, ¿qué proporción presenta coledocolitiasis concomitante?',
    options: ['Entre el 10 % y el 20 %', 'Menos del 5 %', 'Entre el 30 % y el 40 %', 'Más de la mitad'],
    correctIndex: 0,
    explanation:
      'La guía ASGE cifra entre el 10 % y el 20 % la proporción de personas con colelitiasis sintomática que presenta coledocolitiasis concomitante. Esa migración al colédoco explica que la coledocolitiasis sea la primera causa de pancreatitis aguda y que pueda cursar con dolor, fiebre, ictericia y náuseas.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt: '¿Cuál es la primera causa de pancreatitis aguda?',
    options: ['El consumo de alcohol', 'La hipertrigliceridemia', 'La coledocolitiasis', 'La hipercalcemia'],
    correctIndex: 2,
    explanation:
      'La coledocolitiasis es la primera causa de pancreatitis aguda. El cálculo migra desde la vesícula al árbol biliar y puede provocar dolor abdominal o dorsal, fiebre, ictericia y náuseas, aunque a veces cursa de forma asintomática. En la pancreatitis biliar sin colangitis ni obstrucción, la CPRE urgente antes de 48 horas no aporta y puede dañar.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt: '¿Cuál es la causa principal del cálculo de bilirrubinato cálcico?',
    options: [
      'La sobresaturación de colesterol en la bilis',
      'La hemólisis crónica',
      'La disminución de la contractilidad vesicular',
      'La infección biliar',
    ],
    correctIndex: 3,
    explanation:
      'El cálculo de bilirrubinato cálcico tiene como causa principal la infección biliar, y la colestasis también favorece su formación. No se origina por la sobresaturación de colesterol ni por la hipomotilidad vesicular, que son los mecanismos del cálculo de colesterol. Los cálculos negros, en cambio, se relacionan con un exceso de bilirrubina no conjugada.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt: '¿Con qué se relacionan los cálculos negros?',
    options: [
      'Con un exceso de bilirrubina no conjugada por sobrecarga de bilirrubina',
      'Con la infección biliar',
      'Con la sobresaturación de colesterol',
      'Con el enlentecimiento del tránsito intestinal',
    ],
    correctIndex: 0,
    explanation:
      'Los cálculos negros se relacionan con un exceso de bilirrubina no conjugada por sobrecarga de bilirrubina, como ocurre en la hemólisis —esferocitosis hereditaria o talasemia—, en la enfermedad de Crohn y en la resección ileal; también se observan en la cirrosis. La infección biliar es la causa principal del cálculo de bilirrubinato cálcico, no de los negros.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt:
      'En la formación del cálculo de colesterol, ¿qué factor acompaña a la sobresaturación y a la cristalización?',
    options: [
      'El aumento de la contractilidad vesicular',
      'La infección biliar',
      'La hemólisis crónica',
      'La disminución de la contractilidad vesicular',
    ],
    correctIndex: 3,
    explanation:
      'El cálculo de colesterol aparece por sobresaturación de colesterol en la bilis, cristalización y disminución de la contractilidad vesicular. Contribuyen la ingesta elevada de calorías y grasa animal, la hiperlipidemia, los anticonceptivos orales, el ayuno prolongado, las dietas de adelgazamiento, el enlentecimiento del tránsito intestinal y la obesidad.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt:
      'Ante una sospecha de coledocolitiasis de riesgo intermedio (10–50 %), ¿qué sugiere la guía ASGE?',
    options: [
      'CPRE directa sin confirmación previa',
      'Colangio-RM seguida siempre de CPRE',
      'Ecoendoscopia o colangio-RM, a elección',
      'Cirugía abierta de la vía biliar',
    ],
    correctIndex: 2,
    explanation:
      'En el riesgo intermedio, la guía ASGE sugiere ecoendoscopia o colangio-RM, a elección según preferencia, experiencia y disponibilidad. No se lleva a CPRE directa una sospecha de riesgo intermedio sin confirmación, y la CPRE se recomienda cuando hay síntomas de colangitis aguda. La ecoendoscopia alcanza sensibilidad y especificidad en torno a 0,94 y 0,95.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt: 'En la pancreatitis biliar sin colangitis ni obstrucción, ¿qué conducta se recomienda?',
    options: [
      'No realizar CPRE urgente antes de 48 horas',
      'Realizar CPRE urgente antes de 48 horas',
      'Realizar CPRE diferida a las 72 horas',
      'Practicar esfinterotomía quirúrgica inmediata',
    ],
    correctIndex: 0,
    explanation:
      'En la pancreatitis biliar sin colangitis ni obstrucción o coledocolitiasis se recomienda no realizar CPRE urgente antes de 48 horas, porque no aporta y puede dañar. La CPRE se recomienda cuando hay síntomas de colangitis aguda, y su extracción endoscópica es el tratamiento de referencia de la coledocolitiasis.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt:
      'En la coledocolitiasis con cálculos grandes, ¿qué técnica se sugiere tras la esfinterotomía?',
    options: [
      'Repetir la esfinterotomía aislada',
      'Colocar una prótesis biliar permanente',
      'Practicar litotricia quirúrgica abierta',
      'Dilatación papilar con balón grande',
    ],
    correctIndex: 3,
    explanation:
      'En los cálculos grandes se sugiere la dilatación papilar con balón grande tras la esfinterotomía, en lugar de la esfinterotomía aislada. La extracción endoscópica por CPRE es el tratamiento de referencia de la coledocolitiasis, aunque el procedimiento no está exento de riesgo: la guía ASGE cifra en 6–15 % los efectos adversos mayores.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt: 'En el síndrome de Mirizzi tipo IV, ¿qué manejo se describe clásicamente?',
    options: [
      'Colecistectomía laparoscópica simple',
      'Colecistectomía parcial con cierre de la fístula',
      'Cirugía abierta con anastomosis bilioentérica (hepatoyeyunostomía)',
      'Drenaje percutáneo exclusivo',
    ],
    correctIndex: 2,
    explanation:
      'El tipo IV del síndrome de Mirizzi se ha manejado clásicamente con cirugía abierta y anastomosis bilioentérica, en concreto hepatoyeyunostomía, aunque series seleccionadas describen abordajes laparoscópicos. El tipo I suele ser abordable por laparoscopia, y los tipos II y III con frecuencia exigen colecistectomía parcial o cierre de la fístula, con mayor conversión.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt: '¿Cuál es la versión validada de la mnemotecnia de las «F» de la colelitiasis?',
    options: [
      'Cuatro F: forty, female, fatty, fair',
      'Cinco F: forty, female, fatty, fair, fertile',
      'Tres F: female, fatty, febrile',
      'Cinco F: forty, female, febrile, fair, fertile',
    ],
    correctIndex: 1,
    explanation:
      'La mnemotecnia de las «4 F» del material base no coincide con la de las guías: la versión validada es la de las 5 F —forty, female, fatty, fair, fertile—, a la que la guía japonesa añade dislipidemia, cirugía gástrica o bariátrica previa y dieta. Conocer esos factores permite identificar a quién se beneficiará de seguimiento.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'biliary-tract' },
  },
  {
    prompt: '¿Cuál es la secuencia clásica de la apendicitis aguda?',
    options: [
      'Obstrucción luminal, distensión, compromiso venoso y linfático, isquemia, necrosis y perforación',
      'Isquemia, obstrucción luminal, necrosis, distensión y perforación',
      'Perforación, obstrucción luminal, isquemia, necrosis y distensión',
      'Distensión, perforación, isquemia, obstrucción luminal y necrosis',
    ],
    correctIndex: 0,
    explanation:
      'La enseñanza quirúrgica clásica describe la secuencia obstrucción luminal, distensión, compromiso venoso y linfático, isquemia, necrosis y perforación. La guía WSES no estadifica la enfermedad por horas, sino que aborda una gradación intraoperatoria; las escalas temporales del material original no se han podido verificar en las fuentes consultadas.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'appendicitis' },
  },
  {
    prompt:
      '¿Cuál es la primera prueba de imagen en lactantes, niños, adultos jóvenes y embarazadas con sospecha de apendicitis?',
    options: [
      'La tomografía computarizada',
      'La resonancia magnética',
      'La ecografía abdominal',
      'La radiografía simple de abdomen',
    ],
    correctIndex: 2,
    explanation:
      'La ecografía abdominal es la primera prueba de imagen en lactantes, niños, adultos jóvenes y embarazadas, y tiene la ventaja de no irradiar. La resonancia magnética es una alternativa segura y fiable a la TC, y en niños la TC se recomienda solo después de ecografía y resonancia, para reducir la radiación.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'appendicitis' },
  },
  {
    prompt:
      'Antes de hacer una TC a una mujer en edad fértil con sospecha de apendicitis, ¿qué exige la guía?',
    options: [
      'Nada especial si ya se realizó una ecografía',
      'Un test de embarazo previo',
      'Una analítica con proteína C reactiva',
      'El consentimiento de dos facultativos',
    ],
    correctIndex: 1,
    explanation:
      'La TC requiere un test de embarazo previo en la mujer en edad fértil. En el estudio de la apendicitis también se pide sedimento urinario para descartar infección vesical o litiasis renal, y en la mujer un test de embarazo forma parte de la analítica. El abordaje combina historia, exploración, analítica e imagen.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'appendicitis' },
  },
  {
    prompt: '¿Qué ventaja se atribuye al abordaje laparoscópico de la apendicectomía?',
    options: [
      'Menor tasa de conversión a laparotomía en todos los casos',
      'Elimina la necesidad de antibióticos perioperatorios',
      'Permite omitir la imagen diagnóstica',
      'Menos complicaciones y recuperación más corta',
    ],
    correctIndex: 3,
    explanation:
      'El abordaje laparoscópico es cada vez más frecuente y se asocia a menos complicaciones, incluidas las infecciones relacionadas con la hospitalización, y a una recuperación más corta. No elimina la antibioterapia: todo paciente con sospecha de apendicitis recibe antibióticos antes de la cirugía, y algunos mejoran sin operarse.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'appendicitis' },
  },
  {
    prompt:
      'Si durante la intervención el cirujano encuentra un apéndice normal, ¿qué se hace habitualmente?',
    options: [
      'Se extirpa para evitar episodios futuros',
      'Se deja siempre en su sitio',
      'Se biopsia y se espera el resultado',
      'Se extirpa solo si hay fiebre',
    ],
    correctIndex: 0,
    explanation:
      'Cuando el cirujano encuentra un apéndice normal, suele extirparse para evitar episodios futuros, y pueden corregirse otros hallazgos. La imagen previa ayuda a identificar causas alternativas del dolor, como adherencias, enfermedad inflamatoria intestinal, obstrucción, enfermedad inflamatoria pélvica, litiasis renal o patología ginecológica.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'appendicitis' },
  },
  {
    prompt: 'Ante una peritonitis por rotura apendicular, ¿qué tratamiento se indica?',
    options: [
      'Antibioterapia exclusiva intravenosa',
      'Drenaje percutáneo del absceso',
      'Laparotomía inmediata para limpiar la cavidad y extirpar el apéndice',
      'Observación con ecografía seriada',
    ],
    correctIndex: 2,
    explanation:
      'La peritonitis por rotura apendicular puede comprometer la vida y suele requerir laparotomía inmediata para limpiar la cavidad y extirpar el apéndice; el absceso, en cambio, se drena. La cirugía precoz reduce la probabilidad de rotura y de complicaciones añadidas. Tras la apendicectomía pueden aparecer infección de la herida, absceso intraabdominal, fístula, obstrucción, íleo y adherencias.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'appendicitis' },
  },
  {
    prompt: '¿Cómo aborda la guía WSES de Jerusalén la estadificación de la apendicitis?',
    options: [
      'Por horas transcurridas desde el inicio del dolor',
      'Mediante una gradación intraoperatoria',
      'Solo con la escala de Alvarado',
      'Según el tamaño del apéndice en la ecografía',
    ],
    correctIndex: 1,
    explanation:
      'La guía WSES no estadifica la apendicitis por horas: aborda una gradación intraoperatoria de la enfermedad. Las escalas temporales del material original se conservan como material docente, pero no se han podido verificar en las fuentes consultadas. La guía sí incorpora escalas clínicas como Alvarado y el Adult Appendicitis Score para el diagnóstico.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'appendicitis' },
  },
  {
    prompt: '¿Qué escalas clínicas menciona la guía WSES para el diagnóstico de la apendicitis?',
    options: [
      'Ranson y Glasgow',
      'Child-Pugh y MELD',
      'Wells y Ginebra',
      'Alvarado y Adult Appendicitis Score',
    ],
    correctIndex: 3,
    explanation:
      'La guía WSES dedica secciones específicas a las puntuaciones, entre ellas la escala de Alvarado y el Adult Appendicitis Score, y las integra con la imagen. Ningún signo aislado confirma ni descarta la apendicitis, por eso el abordaje recomendado combina escalas clínicas e imagen en lugar de apoyarse en un único dato.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'appendicitis' },
  },
  {
    prompt: '¿Qué función cumple el colon en la digestión?',
    options: [
      'Absorbe la mayor parte de los nutrientes',
      'Recupera agua y forma las heces',
      'Concentra la bilis antes de liberarla',
      'Completa la digestión de las proteínas',
    ],
    correctIndex: 1,
    explanation:
      'El colon recupera agua y forma las heces, mientras que el intestino delgado completa la digestión y absorbe la mayor parte de los nutrientes. En el colon, además, las bacterias fermentan restos de hidratos de carbono no digeridos, producen ácidos grasos de cadena corta y sintetizan vitamina K.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-functions' },
  },
  {
    prompt: 'Además de emulsionar las grasas, ¿qué otra función cumple la bilis?',
    options: [
      'Transportar oxígeno a los hepatocitos',
      'Sintetizar los factores de coagulación',
      'Absorber la vitamina B12 en el íleon',
      'Ser vía de excreción de colesterol y bilirrubina',
    ],
    correctIndex: 3,
    explanation:
      'La bilis no solo emulsiona grasas: es también la vía de excreción de colesterol y bilirrubina, de modo que su composición condiciona la litiasis. La bilis normal mantiene en equilibrio colesterol, sales biliares, fosfolípidos y bilirrubina, y son la sobresaturación de colesterol, la cristalización y la hipomotilidad vesicular las que rompen ese equilibrio.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-functions' },
  },
  {
    prompt: '¿Qué combinación rompe el equilibrio de la bilis y genera cálculos?',
    options: [
      'Sobresaturación de colesterol, cristalización e hipomotilidad vesicular',
      'Hipomotilidad vesicular, hemólisis e hiperbilirrubinemia conjugada',
      'Infección biliar, hipercolesterolemia y aumento de la contractilidad',
      'Déficit de sales biliares, hipercalcemia y estasis intestinal',
    ],
    correctIndex: 0,
    explanation:
      'La bilis normal mantiene en equilibrio colesterol, sales biliares, fosfolípidos y bilirrubina. La sobresaturación de colesterol, la cristalización y la hipomotilidad vesicular rompen ese equilibrio y generan cálculos. La mucosa vesicular absorbe agua y electrolitos, lo que concentra la bilis y aumenta la concentración de sales biliares, colesterol y pigmentos.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-functions' },
  },
  {
    prompt: '¿Cómo concentra la vesícula biliar la bilis?',
    options: [
      'Añadiendo sales biliares nuevas a la bilis hepática',
      'Filtrando el colesterol hacia la sangre',
      'Absorbiendo agua y electrolitos en su mucosa',
      'Mezclándola con jugo pancreático',
    ],
    correctIndex: 2,
    explanation:
      'La mucosa vesicular absorbe agua y electrolitos, lo que concentra la bilis y aumenta la concentración de sales biliares, colesterol y pigmentos. Esa es la base fisiológica de la concentración que realiza la vesícula antes de expulsar la bilis con la comida. La bilis la fabrica el hígado, y la vesícula la almacena, concentra y libera.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-functions' },
  },
  {
    prompt: 'Tras extirpar la vesícula, ¿qué ocurre con la digestión de las grasas?',
    options: [
      'Se detiene por completo hasta que el intestino se adapta',
      'La vesícula se regenera y recupera su función',
      'El páncreas asume la producción de bilis',
      'La bilis llega al intestino desde el hígado y emulsifica peor las comidas muy grasas',
    ],
    correctIndex: 3,
    explanation:
      'Cuando se extirpa la vesícula, la bilis sigue llegando al intestino directamente desde el hígado, de modo que la digestión continúa, aunque la emulsificación es menos eficiente con comidas muy grasas. Esa es la consecuencia fisiológica de la colecistectomía, y explica por qué la tolerancia a las grasas puede resentirse sin que la digestión se detenga.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-functions' },
  },
  {
    prompt: 'En la insuficiencia exocrina pancreática, ¿dónde está el fallo?',
    options: [
      'En la entrega de enzimas al duodeno',
      'En la producción de insulina por las células beta',
      'En la absorción de agua en el colon',
      'En la contracción de la vesícula biliar',
    ],
    correctIndex: 0,
    explanation:
      'En la insuficiencia exocrina pancreática el fallo está en la entrega de enzimas al duodeno, que es la función que describe la lámina del páncreas. El páncreas es una glándula mixta, así que su fallo puede expresarse como maldigestión o como diabetes. Cuando falla la lipasa aparecen malabsorción de grasas y de vitaminas liposolubles.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-functions' },
  },
  {
    prompt: '¿Por qué se describe el páncreas como una glándula mixta?',
    options: [
      'Porque produce bilis y enzimas a la vez',
      'Porque secreta moco y ácido clorhídrico',
      'Porque su jugo digiere y sus hormonas regulan la glucemia',
      'Porque tiene una porción exocrina en el colon',
    ],
    correctIndex: 2,
    explanation:
      'El páncreas es una glándula mixta porque su jugo digiere y sus hormonas regulan la glucemia, de modo que su fallo puede expresarse como maldigestión o como diabetes. Vierte sus enzimas al duodeno, y la insuficiencia exocrina consiste precisamente en un fallo de esa entrega de enzimas.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-functions' },
  },
  {
    prompt:
      'Si falla la absorción colónica o la síntesis hepática, ¿qué déficit aparece y qué consecuencias tiene?',
    options: [
      'Déficit de vitamina B12, con anemia megaloblástica',
      'Déficit de vitamina K, con afectación de los factores de coagulación dependientes de ella',
      'Déficit de vitamina D, con desmineralización ósea',
      'Déficit de vitamina C, con alteración del colágeno',
    ],
    correctIndex: 1,
    explanation:
      'La deficiencia de vitamina K —y por tanto de los factores de coagulación dependientes de ella— aparece cuando falla la absorción colónica o la síntesis hepática. El colon sintetiza vitamina K por acción bacteriana, y el hígado participa en la síntesis de esos factores, de ahí que ambos fallos converjan en un riesgo hemorrágico.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'digestive-functions' },
  },
]

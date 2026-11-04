import type { QuizQuestion } from '@/lib/content'

/** Pediatría. */
export const questions: QuizQuestion[] = [
  {
    prompt: '¿En qué dos juegos de curvas se apoyan los patrones de crecimiento de la OMS?',
    options: [
      'La referencia NCHS/OMS de 1977 y su actualización de 2006',
      'Los estándares de 0 a 5 años (2006) y la referencia de 5 a 19 años (2007)',
      'Las curvas de 0 a 5 años y las de 5 a 19 años, ambas de 2006',
      'Los estándares de 2007 para menores de 5 años y la referencia de 2006 para mayores',
    ],
    correctIndex: 1,
    explanation:
      'Los patrones de la OMS combinan dos juegos complementarios: los estándares de 0 a 5 años, publicados en 2006, y la referencia de 5 a 19 años, de 2007. El primero procede de niños criados en condiciones óptimas; el segundo es una reconstrucción de datos de 1977 y no un estudio de niños en esas condiciones. La referencia NCHS/OMS de 1977 quedó sustituida para los menores de 5 años.',
    source: { specialty: 'pediatrics', topic: 'growth-and-development' },
  },
  {
    prompt: '¿Qué traduce una baja talla para la edad?',
    options: [
      'Una pérdida reciente y grave de peso',
      'Un déficit aislado de perímetro cefálico',
      'Un exceso de peso para la talla',
      'Desnutrición crónica o recurrente',
    ],
    correctIndex: 3,
    explanation:
      'La baja talla para la edad traduce desnutrición crónica o recurrente y se asocia a condiciones socioeconómicas deficientes, mala salud y nutrición maternas, enfermedad frecuente y alimentación inadecuada. La emaciación, en cambio, refleja una pérdida reciente y grave de peso, mientras que el bajo peso para la edad puede deberse a cualquiera de las dos. Confundir ambas orienta mal la intervención.',
    source: { specialty: 'pediatrics', topic: 'growth-and-development' },
  },
  {
    prompt: 'Según las estimaciones de 2022, ¿cuántos menores de 5 años tenían retraso del crecimiento?',
    options: ['149 millones', '45 millones', '37 millones', '390 millones'],
    correctIndex: 0,
    explanation:
      'En 2022 se estimaron 149 millones de menores de 5 años con retraso del crecimiento, 45 millones con emaciación y 37 millones con sobrepeso u obesidad. Los 390 millones corresponden al sobrepeso entre los 5 y los 19 años. Cerca de la mitad de las muertes en menores de 5 años se asocia a desnutrición, de modo que la cifra no es un detalle epidemiológico menor.',
    source: { specialty: 'pediatrics', topic: 'growth-and-development' },
  },
  {
    prompt: 'Entre los 5 y los 19 años, ¿cómo define la OMS la delgadez?',
    options: [
      'Un IMC para la edad por debajo de −1 desviación estándar',
      'Un peso para la talla por debajo de −2 desviaciones estándar',
      'Un IMC para la edad más de dos desviaciones estándar por debajo de la mediana de referencia',
      'Un IMC para la edad por debajo de −3 desviaciones estándar',
    ],
    correctIndex: 2,
    explanation:
      'De los 5 a los 19 años la delgadez se define por un IMC para la edad más de dos desviaciones estándar por debajo de la mediana de referencia. No es un umbral de peso para la talla ni de −1 DE. En ese mismo grupo de edad, 390 millones tenían sobrepeso —160 millones con obesidad— y 190 millones delgadez, lo que muestra que ambos extremos coexisten.',
    source: { specialty: 'pediatrics', topic: 'growth-and-development' },
  },
  {
    prompt: 'Entre los 0 y los 5 años, ¿a partir de qué puntuación z define la OMS la obesidad?',
    options: ['Por encima de +1 DE', 'Por encima de +3 DE', 'Por encima de +2 DE', 'Por encima de +4 DE'],
    correctIndex: 1,
    explanation:
      'La OMS establece un enfoque escalonado: riesgo de sobrepeso por encima de +1 DE, sobrepeso por encima de +2 DE y obesidad por encima de +3 DE. El escalonamiento es deliberado y busca no imponer dietas restrictivas a niños que aún crecen. Aplicar el umbral de sobrepeso como si fuera obesidad adelanta una etiqueta que el patrón no sostiene.',
    source: { specialty: 'pediatrics', topic: 'growth-and-development' },
  },
  {
    prompt: '¿Qué mostró el estudio multicéntrico de referencia de la OMS con 8440 niños de seis países?',
    options: [
      'Que el crecimiento depende sobre todo del país de origen',
      'Que la lactancia materna no influye en el crecimiento',
      'Que solo son comparables los niños de un mismo continente',
      'Que el crecimiento infantil es similar entre regiones cuando se crían en condiciones ambientales óptimas',
    ],
    correctIndex: 3,
    explanation:
      'El estudio incluyó 8440 niños de seis países criados en condiciones ambientales óptimas, con la lactancia materna como norma biológica, y mostró que el crecimiento infantil es similar entre regiones cuando esas condiciones se cumplen. Ese hallazgo es la base de los estándares de 0 a 5 años y explica por qué se consideran un instrumento normativo y no una descripción de cada país.',
    source: { specialty: 'pediatrics', topic: 'growth-and-development' },
  },
  {
    prompt: '¿Cuál es la ventana de adquisición de la marcha sin apoyo que publica la OMS?',
    options: [
      'Entre 8,2 y 17,6 meses',
      'Entre 6,9 y 16,9 meses',
      'Entre 6,0 y 13,7 meses',
      'Entre 5,2 y 13,5 meses',
    ],
    correctIndex: 0,
    explanation:
      'La OMS describe la marcha sin apoyo entre 8,2 y 17,6 meses. Las otras ventanas corresponden a hitos distintos: 6,9 a 16,9 meses es la bipedestación sin apoyo, 6,0 a 13,7 la marcha con apoyo y 5,2 a 13,5 el gateo. El marco es la ventana, no la edad puntual, y por eso un niño dentro de ella no se considera retrasado.',
    source: { specialty: 'pediatrics', topic: 'growth-and-development' },
  },
  {
    prompt: '¿Qué periodo concentra el mayor rendimiento preventivo del retraso del crecimiento?',
    options: [
      'La adolescencia, por el estirón puberal',
      'Los primeros cinco años, hasta la escolarización',
      'Los primeros mil días, desde la concepción hasta el segundo cumpleaños',
      'La etapa escolar, entre los 6 y los 12 años',
    ],
    correctIndex: 2,
    explanation:
      'La ventana de mayor rendimiento preventivo son los primeros mil días, desde la concepción hasta el segundo cumpleaños. El retraso del crecimiento limita el potencial físico y cognitivo, y sus efectos se acumulan a lo largo de la vida. La pobreza amplifica el riesgo y la desnutrición, a su vez, frena el crecimiento económico, de modo que el problema se perpetúa entre generaciones.',
    source: { specialty: 'pediatrics', topic: 'growth-and-development' },
  },
  {
    prompt: '¿Cuál es el último eslabón del programa de cribado neonatal?',
    options: [
      'El análisis en un laboratorio centralizado',
      'La toma de muestra por punción del talón',
      'La confirmación diagnóstica',
      'La derivación a una unidad clínica de seguimiento',
    ],
    correctIndex: 3,
    explanation:
      'El cribado es un programa con cuatro pasos encadenados: toma de muestra, análisis en un laboratorio centralizado, confirmación diagnóstica y derivación a una unidad clínica de seguimiento. El último eslabón no es el análisis ni la confirmación, sino la derivación que asegura el seguimiento. Sin ese cierre, un resultado positivo se pierde y el beneficio del programa no llega al recién nacido.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿Qué requisito acompaña obligatoriamente a la toma de la muestra de cribado?',
    options: [
      'El ayuno previo del recién nacido',
      'La información previa y el consentimiento expreso de la madre, el padre o los tutores',
      'La autorización del pediatra de atención primaria',
      'El pago de la prueba por la familia',
    ],
    correctIndex: 1,
    explanation:
      'El cribado se ofrece a todos los recién nacidos, tanto en el hospital como en el domicilio, es gratuito y requiere información previa y consentimiento expreso de la madre, el padre o los tutores. Tomar la muestra sin informar y sin consentimiento es un error recogido entre las perlas del apunte: ambas cosas son parte obligatoria del proceso, no un trámite opcional.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿Cómo se obtiene y se conserva la muestra del cribado neonatal?',
    options: [
      'Por punción del talón, recogida en un papel especial de gota seca',
      'Por venopunción, en un tubo con anticoagulante',
      'Por sangre de cordón, en medio de cultivo',
      'Por orina, en un recipiente estéril',
    ],
    correctIndex: 0,
    explanation:
      'La muestra se obtiene por punción del talón, se recoge en un papel especial de gota seca y se remite al laboratorio de la red de cribado. No es una venopunción ni una muestra de orina. Junto con la sangre se registran datos de filiación, dirección y teléfono actualizados, imprescindibles para localizar a la familia si el resultado es positivo.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿Cuál es la ventana recomendada para tomar la muestra?',
    options: [
      'En las primeras 24 horas de vida',
      'Entre los 3 y los 7 días',
      'Entre las 24 y las 72 horas de vida',
      'En el primer mes de vida',
    ],
    correctIndex: 2,
    explanation:
      'La ventana recomendada es entre las 24 y las 72 horas de vida. En determinadas circunstancias, como la prematuridad, puede ser necesaria una segunda muestra. La ventana no coincide con el momento de la notificación: si el resultado es normal, la familia recibe aviso en el primer mes de vida, habitualmente alrededor de las tres semanas.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿En qué circunstancia puede ser necesaria una segunda muestra?',
    options: [
      'Cuando el resultado es normal',
      'Siempre que el parto haya sido por cesárea',
      'Solo si la familia lo solicita',
      'En caso de prematuridad u otras situaciones especiales',
    ],
    correctIndex: 3,
    explanation:
      'En determinadas circunstancias, por ejemplo la prematuridad, puede ser necesaria una segunda muestra. No se repite por un resultado normal ni por el tipo de parto. Olvidar esa segunda muestra es uno de los errores frecuentes que el apunte señala, porque el programa pierde su sentido si la primera toma no es concluyente y nadie completa el proceso.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: 'Si el resultado es normal, ¿cuándo recibe la notificación la familia?',
    options: [
      'A las 48 horas del análisis',
      'En el primer mes de vida, habitualmente alrededor de las tres semanas',
      'A los seis meses de vida',
      'Solo si la familia la reclama',
    ],
    correctIndex: 1,
    explanation:
      'Con un resultado normal, la familia recibe notificación en el primer mes de vida, habitualmente alrededor de las tres semanas. El aviso no es inmediato porque el proceso incluye el traslado de la muestra y su análisis centralizado. Un resultado positivo, en cambio, obliga a contactar de inmediato a la familia y a realizar pruebas de confirmación.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: 'Tras un cribado positivo, ¿cuándo se cita al neonato en la unidad clínica de referencia?',
    options: [
      'Solo si las pruebas de confirmación se mantienen alteradas',
      'De inmediato, antes de cualquier confirmación',
      'Cuando aparecen los primeros síntomas',
      'Únicamente si la familia lo pide',
    ],
    correctIndex: 0,
    explanation:
      'El circuito es escalonado: ante un positivo se contacta de inmediato a la familia y se hacen pruebas de confirmación; solo si estas se mantienen alteradas se cita al neonato en la unidad clínica de referencia para el diagnóstico definitivo y el tratamiento. La cita no se adelanta al positivo ni se espera a los síntomas, porque entonces se pierde la fase presintomática.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿Qué enunciado sobre el panel de cribado neonatal es correcto?',
    options: [
      'Es idéntico en todos los países y no cambia con el tiempo',
      'Solo incluye enfermedades con tratamiento dietético',
      'Depende del programa de cada país y su composición cambia con el tiempo',
      'Se limita a las enfermedades descritas en el material base',
    ],
    correctIndex: 2,
    explanation:
      'El panel es nacional y variable: galactosemia y deficiencia de G6PD, que el material base incluye, no forman parte de la cartera común española. Eso confirma que la lista depende del programa de cada país y no de un catálogo universal. La composición cambia además con el tiempo, como muestra la incorporación de varias entidades mediante la Orden SND/356/2026.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿Cuál es el límite del cribado neonatal?',
    options: [
      'Que solo detecta enfermedades metabólicas',
      'Que no puede repetirse la muestra',
      'Que sustituye la valoración clínica del neonato',
      'Que no reemplaza la valoración clínica de un neonato que ya está enfermo',
    ],
    correctIndex: 3,
    explanation:
      'El recién nacido cribado está asintomático por definición, y esa ausencia de síntomas es la razón de ser del programa y también su límite: la prueba no sustituye la valoración clínica de un neonato que ya está enfermo. El objetivo es identificar y tratar antes de que la enfermedad se manifieste, no descartar un cuadro clínico en curso.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿Qué tienen en común las enfermedades incluidas en un programa de cribado metabólico neonatal?',
    options: [
      'Que la mayoría no tiene tratamiento',
      'Que todas cuentan con algún tratamiento, sea eficaz, sustitutivo o dietético',
      'Que solo se tratan con consejo genético',
      'Que el tratamiento se inicia cuando aparecen los síntomas',
    ],
    correctIndex: 1,
    explanation:
      'Como regla general, todas las enfermedades incluidas tienen tratamiento, sea eficaz, sustitutivo o dietético; el ejemplo clásico es la dieta especial de la fenilcetonuria. El objetivo es instaurarlo lo antes posible para evitar o minimizar el daño. En muchos casos el diagnóstico precoz permite además ofrecer consejo genético a la familia, que es un beneficio añadido.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿Para qué se registran la dirección y el teléfono actualizados junto con la muestra?',
    options: [
      'Para localizar a la familia si el resultado es positivo',
      'Para calcular la edad gestacional',
      'Para decidir la vacuna del recién nacido',
      'Para facturar la prueba al seguro',
    ],
    correctIndex: 0,
    explanation:
      'Junto con la sangre se registran datos de filiación, dirección y teléfono actualizados, imprescindibles para localizar a la familia si el resultado es positivo. Sin esos datos, un positivo puede quedar sin confirmar y el programa falla en el paso más crítico. La prevención de errores incluye la toma correcta, el registro de contacto y la trazabilidad de la muestra.',
    source: { specialty: 'pediatrics', topic: 'newborn-screening' },
  },
  {
    prompt: '¿Qué lugar ocupa la enfermedad diarreica como causa de muerte en niños de 1 a 59 meses?',
    options: ['La primera', 'La segunda', 'La tercera', 'La cuarta'],
    correctIndex: 2,
    explanation:
      'La enfermedad diarreica es la tercera causa de muerte en niños de 1 a 59 meses. Cada año causa unas 443 832 muertes en menores de 5 años y se registran cerca de 1700 millones de episodios infantiles. La desnutrición y la inmunodepresión, incluida la infección por VIH, son los principales factores de riesgo de diarrea potencialmente letal.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: '¿Qué conjunto define la deshidratación grave según la OMS?',
    options: [
      'Al menos dos de: letargia o inconsciencia, ojos hundidos, incapacidad para beber o bebida deficiente, y pliegue cutáneo que tarda dos segundos o más en desaparecer',
      'Dos o más de: inquietud, ojos hundidos y sed con ingesta ávida',
      'Un solo signo de ojos hundidos',
      'El porcentaje estimado de peso perdido',
    ],
    correctIndex: 0,
    explanation:
      'La deshidratación grave exige al menos dos de cuatro signos: letargia o inconsciencia, ojos hundidos, incapacidad para beber o bebida deficiente, y pliegue cutáneo que tarda dos segundos o más en desaparecer. La inquietud con sed ávida corresponde a «alguna deshidratación», y el porcentaje de peso no clasifica en el terreno: se estima, mientras que los signos se observan.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: '¿Qué signos definen «alguna deshidratación»?',
    options: [
      'Letargia, incapacidad para beber y pliegue cutáneo lento',
      'Solo la presencia de sed',
      'Ojos hundidos con presión arterial baja',
      'Dos o más de: inquietud o irritabilidad, ojos hundidos y sed con ingesta ávida',
    ],
    correctIndex: 3,
    explanation:
      '«Alguna deshidratación» se define por dos o más de inquietud o irritabilidad, ojos hundidos y sed con ingesta ávida. La letargia, la incapacidad para beber y el pliegue cutáneo que tarda dos segundos o más pertenecen a la categoría grave. Sin signos suficientes no hay deshidratación, de modo que la categoría intermedia no se inventa por impresión clínica.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: '¿Cuándo está indicada la bioquímica sanguínea en la deshidratación?',
    options: [
      'En todos los niños, de forma rutinaria',
      'Si se va a usar fluidoterapia intravenosa o hay signos que sugieran hipernatremia',
      'Solo si hay fiebre',
      'Únicamente en mayores de 5 años',
    ],
    correctIndex: 1,
    explanation:
      'No se recomienda hacer bioquímica de rutina. Debe medirse sodio, potasio, urea, creatinina y glucosa si se va a usar fluidoterapia intravenosa o si hay signos que sugieran hipernatremia, y hay que valorar equilibrio ácido-base y cloro venosos si se sospecha o confirma shock. Pedirla a todos añade molestias sin cambiar la conducta en la mayoría.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: '¿Qué conjunto de signos hace sospechar una hipernatremia?',
    options: [
      'Hipotonia, arreflexia y bradicardia',
      'Solo diarrea líquida y vómitos',
      'Movimientos de sobresalto, aumento del tono muscular, hiperreflexia, convulsiones, somnolencia o coma',
      'Poliuria con glucosuria',
    ],
    correctIndex: 2,
    explanation:
      'La hipernatremia se sospecha ante movimientos de sobresalto, aumento del tono muscular, hiperreflexia, convulsiones, somnolencia o coma. Son signos neurológicos, no digestivos, y obligan a medir el sodio antes de decidir la fluidoterapia. La corrección debe ser lenta: un descenso rápido expone a edema cerebral, que es la complicación que se quiere evitar.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: 'En la deshidratación clínica, ¿qué pauta de solución de rehidratación oral indica la guía NICE?',
    options: [
      'SRO de baja osmolaridad a 50 mL/kg en cuatro horas, además del mantenimiento',
      'SRO a 10 mL/kg en bolo, repetible una vez',
      'SRO a 100 mL/kg en cuatro horas',
      'SRO a 5 mL/kg después de cada deposición',
    ],
    correctIndex: 0,
    explanation:
      'La guía NICE usa SRO de baja osmolaridad, 240-250 mOsm/L, a 50 mL/kg para reponer el déficit en cuatro horas, además del mantenimiento, en tomas pequeñas y frecuentes. Si el niño no puede beber o vomita de forma persistente, puede administrarse por sonda nasogástrica. Los 5 mL/kg tras cada deposición líquida son una medida preventiva en niños con riesgo de deshidratación recurrente.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: '¿Cómo se trata el shock en el niño deshidratado?',
    options: [
      'Con 20 mL/kg de suero salino al 0,9 %',
      'Con 50 mL/kg de SRO por sonda',
      'Con 5 mL/kg de suero salino al 0,9 %',
      'Con una infusión rápida de 10 mL/kg de cloruro sódico al 0,9 %, repetible una vez',
    ],
    correctIndex: 3,
    explanation:
      'El shock se trata con una infusión rápida de 10 mL/kg de cloruro sódico al 0,9 %, repetible una vez; después se inicia la rehidratación con 50 mL/kg de déficit si no había shock o 100 mL/kg si lo hubo. La vía intravenosa está indicada también si un niño con banderas rojas se deteriora pese a la rehidratación oral o si vomita la SRO de forma persistente.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: 'En la deshidratación hipernatrémica, ¿a qué velocidad debe descender el sodio?',
    options: [
      'A 2 mmol/L por hora durante 24 horas',
      'A menos de 0,5 mmol/L por hora',
      'A 1 mmol/L por hora durante 12 horas',
      'Sin límite, según la clínica',
    ],
    correctIndex: 1,
    explanation:
      'En la deshidratación hipernatrémica el déficit se repone lentamente, en torno a 48 horas, con un descenso del sodio inferior a 0,5 mmol/L por hora. Corregir rápido provoca edema cerebral, que es la razón por la que la perla insiste en no precipitar la corrección. El ritmo forma parte del tratamiento, no es un detalle de laboratorio.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: '¿Durante cuánto tiempo se administra zinc como tratamiento complementario de la diarrea?',
    options: ['Tres días', 'Una dosis única', 'De 10 a 14 días', 'Un mes'],
    correctIndex: 2,
    explanation:
      'La OMS confirma el zinc como tratamiento complementario durante 10 a 14 días. Acorta la duración del episodio alrededor de un 25 % y reduce el volumen de las heces cerca de un 30 %. No sustituye la rehidratación ni justifica antidiarreicos; se mantiene la lactancia y se reintroduce la alimentación normal tras la rehidratación.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: '¿Qué conducta es correcta en el tratamiento del episodio diarreico?',
    options: [
      'No usar antidiarreicos y no dar antibióticos de forma rutinaria',
      'Administrar un antidiarreico para acortar el episodio',
      'Dar antibiótico a todos los niños con diarrea',
      'Suspender la lactancia durante la rehidratación',
    ],
    correctIndex: 0,
    explanation:
      'No deben usarse antidiarreicos y los antibióticos no son rutinarios. Se mantiene la lactancia y se reintroduce la alimentación normal tras la rehidratación. La duración habitual es de 5 a 7 días para la diarrea y de 1 a 2 días para el vómito, y hay que reevaluar después del periodo de rehidratación para ajustar el plan.',
    source: { specialty: 'pediatrics', topic: 'dehydration' },
  },
  {
    prompt: '¿Qué tres parámetros definen un esquema de vacunación?',
    options: [
      'El peso, la talla y el perímetro cefálico',
      'El país, el fabricante y el precio',
      'La vía, el lugar de inyección y el calibre de la aguja',
      'La edad de inicio, el número de dosis y el intervalo óptimo entre dosis',
    ],
    correctIndex: 3,
    explanation:
      'El esquema se define por tres parámetros: edad de inicio, número de dosis e intervalo óptimo entre dosis, con intervalos mínimos que no deben acortarse salvo en control de brote. El peso y la talla no forman parte de esa definición. Acortar un intervalo mínimo sin indicación deja una dosis que no cuenta y obliga a repetirla.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: 'En el esquema público boliviano, ¿hasta qué edad puede administrarse la BCG?',
    options: ['Hasta los 6 meses', 'Hasta los 11 meses y 29 días', 'Hasta los 2 años', 'Hasta los 4 años'],
    correctIndex: 1,
    explanation:
      'La BCG se administra al nacer y es administrable hasta los 11 meses y 29 días. Esa edad límite también rige para la antineumocócica y la antirrotavírica, y verificarla es una de las perlas del apunte. La BCG se indica en dosis única en países con alta incidencia de tuberculosis, idealmente junto con la dosis de hepatitis B al nacer.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: '¿Cuál es la pauta de la pentavalente en el esquema público boliviano?',
    options: [
      'Dos dosis a los 2 y 4 meses, sin refuerzos',
      'Tres dosis a los 2, 4 y 6 meses y nada más',
      'Tres dosis a los 2, 4 y 6 meses, cuarta entre 18 y 23 meses y quinta a los 4 años',
      'Una dosis al nacer y refuerzo a los 12 meses',
    ],
    correctIndex: 2,
    explanation:
      'La pentavalente se aplica a los 2, 4 y 6 meses, con cuarta dosis entre 18 y 23 meses y quinta a los 4 años. No es una serie de tres dosis sin refuerzos: la protección se completa con las dos dosis posteriores. La vacuna contiene difteria, tétanos y tos ferina, y la OMS recomienda tres dosis primarias desde las seis semanas con refuerzos posteriores.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: '¿Qué caracteriza al esquema de polio del PAI boliviano?',
    options: [
      'Combina IPV y bOPV: no todas las dosis son inactivadas',
      'Usa solo IPV en las cinco dosis',
      'Usa solo polio oral en todas las dosis',
      'Se limita a dos dosis, ambas inactivadas',
    ],
    correctIndex: 0,
    explanation:
      'El esquema combina IPV y bOPV. La primera dosis de IPV es a los 2 meses y la tercera a los 6 meses; la segunda, cuarta y quinta se administran con bOPV a los 4 meses, 18 meses y 4 años. Por eso no todas las dosis son inactivadas, que es el error que la perla advierte. La polio oral es una vacuna viva atenuada y comparte las precauciones de ese grupo.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: '¿Cómo es la pauta de la vacuna antineumocócica en el esquema público boliviano?',
    options: [
      'Dos dosis con refuerzo a los 12 meses',
      'Una dosis única a los 2 meses',
      'Tres dosis a los 2, 4 y 6 meses con refuerzo a los 4 años',
      'Tres dosis a los 2, 4 y 6 meses, sin refuerzos y hasta los 11 meses y 29 días',
    ],
    correctIndex: 3,
    explanation:
      'La antineumocócica se aplica a los 2, 4 y 6 meses, sin refuerzos y hasta los 11 meses y 29 días. La OMS acepta tanto una pauta 2+1 como una 3+0 cuando se empieza a las seis semanas, pero el esquema público descrito usa tres dosis sin refuerzo. Añadir un refuerzo que no figura en el calendario no es una decisión individual.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: 'Según la OMS, ¿hasta qué edad no debe vacunarse frente al rotavirus?',
    options: [
      'Por encima de los 8 meses',
      'Por encima de los 24 meses',
      'Por encima de los 11 meses y 29 días',
      'No hay límite de edad',
    ],
    correctIndex: 1,
    explanation:
      'La OMS exige iniciar la vacuna frente al rotavirus lo antes posible después de las seis semanas y no vacunar por encima de los 24 meses. El esquema público boliviano la aplica a los 2 y 4 meses y permite completarla hasta los 11 meses y 29 días, un límite distinto del de la recomendación de la OMS. Confundir ambos límites lleva a vacunar fuera de plazo.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: '¿Qué pauta de influenza pediátrica corresponde a un niño de 6 a 11 meses?',
    options: [
      'Una dosis única',
      'Dos dosis separadas al menos cuatro meses',
      'Dos dosis separadas un mes',
      'Tres dosis separadas un mes',
    ],
    correctIndex: 2,
    explanation:
      'Entre los 6 y los 11 meses la influenza pediátrica se administra en dos dosis separadas un mes; entre los 12 y los 23 meses, en dosis única. En la recomendación estacional, los niños de 6 meses a 8 años reciben dos dosis y a partir de los 9 años una dosis anual, o antes si ya recibieron al menos una dosis. Son pautas relacionadas, no idénticas.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: '¿Cuál de estas vacunas es de tipo vivo atenuado?',
    options: ['La fiebre amarilla', 'La pentavalente', 'La dT', 'La hepatitis B'],
    correctIndex: 0,
    explanation:
      'La clasificación operativa distingue vacunas vivas atenuadas —BCG, polio oral, SRP, SR, rotavirus y fiebre amarilla— de las inactivadas. La pentavalente, la dT y la hepatitis B son inactivadas con adyuvante de hidróxido de aluminio. La distinción importa porque las vivas requieren replicación para inducir respuesta, y los anticuerpos circulantes o las inmunoglobulinas pueden interferir con ellas.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: 'Entre la SRP y la fiebre amarilla, ¿qué intervalo se recomienda?',
    options: [
      'Dos semanas',
      'No hace falta separarlas en ningún caso',
      'Seis meses',
      'Administrarlas simultáneamente o separarlas cuatro semanas',
    ],
    correctIndex: 3,
    explanation:
      'Entre la SRP y la fiebre amarilla deben administrarse simultáneamente o separarse cuatro semanas, porque ambas son vacunas vivas y los anticuerpos circulantes pueden interferir con la replicación. Tras la administración de inmunoglobulinas hay que esperar tres meses. El intervalo no se inventa: forma parte de las precauciones que dependen del tipo de vacuna.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: '¿Cuál es la única contraindicación absoluta de vacunación?',
    options: [
      'El antecedente familiar de convulsiones',
      'La reacción alérgica grave a una dosis previa',
      'La desnutrición',
      'La enfermedad aguda leve',
    ],
    correctIndex: 1,
    explanation:
      'Las contraindicaciones absolutas se reducen a la reacción alérgica grave a una dosis previa. El documento enumera como falsas contraindicaciones la alergia inespecífica, el antecedente familiar de convulsiones, la desnutrición, las reacciones leves previas, la enfermedad aguda leve, el tratamiento antibiótico, la lactancia, los corticoides en dosis bajas y la convalecencia. En el embarazo, las vacunas vivas están contraindicadas de forma general.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: '¿Qué es una oportunidad perdida en vacunación?',
    options: [
      'Que la vacuna no esté disponible en el centro',
      'Que la familia rechace la vacuna',
      'Que una persona elegible acuda al servicio y no se investigue ni se actualice su esquema',
      'Que el niño tenga una contraindicación verdadera',
    ],
    correctIndex: 2,
    explanation:
      'Se denomina oportunidad perdida la situación en que una persona elegible acude al servicio y no se investiga ni se actualiza su esquema. No es lo mismo que una contraindicación ni que un rechazo familiar. El apunte la señala como el error más frecuente y el más evitable, y por eso propone verificar el estado vacunal en cada contacto.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
  {
    prompt: '¿Qué se hace ante un esquema de vacunación interrumpido?',
    options: [
      'Completar las dosis que faltan, sin reiniciar el esquema',
      'Reiniciar el esquema desde la primera dosis',
      'Repetir todas las dosis ya administradas',
      'Esperar cuatro semanas y empezar de nuevo',
    ],
    correctIndex: 0,
    explanation:
      'Un esquema interrumpido no se reinicia: se completan las dosis que faltan, y los intervalos largos no borran la memoria inmunológica. Reiniciar hace perder cobertura y expone al niño a un riesgo innecesario. La regla convive con la de no acortar los intervalos mínimos salvo en control de brote, que es el error opuesto.',
    source: { specialty: 'pediatrics', topic: 'expanded-immunization-program' },
  },
]

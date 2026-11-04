import type { QuizQuestion } from '@/lib/content'

/** Emergencias y shock. */
export const questions: QuizQuestion[] = [
  {
    prompt: '¿Cuál es la mortalidad intrahospitalaria del shock cardiogénico y cómo ha evolucionado en las últimas décadas?',
    options: [
      'Del 5–10 %, y se ha reducido a la mitad desde 2005',
      'Del 30–50 %, sin mejora significativa en dos décadas',
      'Del 60–70 %, con mejora marcada gracias a los inodilatadores',
      'Alrededor del 8 %, similar a la del trauma grave',
    ],
    correctIndex: 1,
    explanation:
      'El shock cardiogénico conserva una mortalidad intrahospitalaria del 30–50 % y no ha mejorado de forma significativa en dos décadas, pese a los avances en soporte circulatorio. Esa cifra explica el énfasis en el reconocimiento precoz y en no esperar a la hipotensión. El 8 % corresponde al peso del trauma en la mortalidad global del estudio GBD 2017, no a esta entidad.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
  {
    prompt: 'En el shock cardiogénico, ¿qué proporción de casos explica el infarto agudo de miocardio?',
    options: ['El 50–55 %', 'Alrededor de un tercio', 'El 20–30 %', 'El 8 %'],
    correctIndex: 2,
    explanation:
      'El infarto agudo de miocardio explica el 20–30 % de los casos de shock cardiogénico, mientras que la insuficiencia cardiaca no isquémica aporta el 50–55 %. El shock cardiogénico representa el extremo de un espectro de gravedad y su mortalidad intrahospitalaria se mantiene en el 30–50 %. Confundir ambas proporciones lleva a atribuir al infarto la mayoría de los casos, cuando no es así.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
  {
    prompt: 'Según los criterios de riesgo alto de la guía NICE en la comunidad, ¿cuál de estos hallazgos lo define?',
    options: [
      'Frecuencia respiratoria 21–24/min',
      'Presión sistólica 91–100 mmHg',
      'Temperatura timpánica < 36 °C',
      'Frecuencia respiratoria ≥ 25/min',
    ],
    correctIndex: 3,
    explanation:
      'La frecuencia respiratoria ≥ 25/min figura entre los criterios de riesgo alto de la guía NICE, junto con la necesidad nueva de oxígeno, la presión sistólica ≤ 90 mmHg, la frecuencia cardiaca > 130/min o la diuresis < 0,5 mL/kg/h. Las opciones de 21–24/min, presión sistólica 91–100 mmHg y temperatura timpánica < 36 °C pertenecen a los criterios de riesgo medio, que exigen una respuesta distinta.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
  {
    prompt: 'En el paciente séptico, ¿qué puntuación en la escala NEWS2 indica riesgo alto?',
    options: ['7 o más puntos', '5–6 puntos', '1–4 puntos', '0 puntos'],
    correctIndex: 0,
    explanation:
      'NEWS2 estratifica el riesgo en cuatro bandas: 7 o más puntos indica riesgo alto, 5–6 riesgo medio, 1–4 riesgo bajo y 0 riesgo muy bajo. La escala debe interpretarse con el contexto fisiológico y las comorbilidades, y se recalcula cada 30 minutos en riesgo alto, cada hora en riesgo medio y cada 4–6 horas en riesgo bajo.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
  {
    prompt: 'En el shock cardiogénico, ¿qué índice cardiaco forma parte de los criterios hemodinámicos?',
    options: ['≤ 4,0 L/min/m²', '≤ 2,2 L/min/m²', '≥ 3,5 L/min/m²', '≤ 0,9 L/min/m²'],
    correctIndex: 1,
    explanation:
      'Los criterios hemodinámicos del shock cardiogénico combinan un índice cardiaco ≤ 2,2 L/min/m² con potencia cardiaca < 0,6 W, índice de potencia cardiaca < 0,4 W/m² y presión de pulso < 25 mmHg. Para la disfunción derecha se añaden presión auricular derecha elevada o índice de pulsatilidad arterial pulmonar ≤ 0,9 en el infarto. El 0,9 corresponde a ese índice pulmonar, no al índice cardiaco.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
  {
    prompt: 'En la sepsis de riesgo alto, ¿cómo se administra el cristaloide según la guía NICE 2025?',
    options: [
      'Bolo de 500 mL en 5 minutos, repetido hasta 3000 mL',
      'Infusión continua de 2 mL/kg/h sin bolos',
      'Bolo inicial de 250 mL en 10–15 minutos, con bolos adicionales hasta un total de 1000 mL',
      'Solo cristaloide si la presión sistólica es ≤ 90 mmHg',
    ],
    correctIndex: 2,
    explanation:
      'La guía indica un cristaloide isotónico equilibrado, con bolo inicial de 250 mL en 10–15 minutos y bolos adicionales de 250 mL hasta un total de 1000 mL, incluidos los líquidos previos. Hay que reevaluar tras cada bolo y consultar al mando clínico senior si no hay mejoría tras 1000 mL. El antibiótico intravenoso también debe administrarse dentro de la primera hora.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
  {
    prompt: 'En el trauma grave con hemorragia, ¿qué objetivos de ventilación recomienda la guía europea?',
    options: [
      'PaCO2 35–40 mmHg y volumen corriente en torno a 6 mL/kg',
      'PaCO2 25–30 mmHg y volumen corriente de 10 mL/kg',
      'Hiperoxemia mantenida para proteger el cerebro',
      'Normoventilación solo si el Glasgow es mayor de 12',
    ],
    correctIndex: 0,
    explanation:
      'La guía europea pide evitar la hipoxemia, evitar la hiperoxemia salvo exanguinación inminente y mantener normoventilación con PaCO2 de 35–40 mmHg y volumen corriente en torno a 6 mL/kg. La intubación no debe demorarse si hay obstrucción de la vía aérea, Glasgow ≤ 8, hipoventilación o hipoxemia. La hiperoxemia no es un objetivo terapéutico en este contexto.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
  {
    prompt: 'En una hemorragia exanguinante de extremidad controlada con torniquete, ¿qué conducta es correcta?',
    options: [
      'Retirarlo cada 15 minutos para comprobar si sigue sangrando',
      'Sustituirlo por compresión manual durante el traslado',
      'Aflojarlo si el paciente refiere dolor intenso',
      'Mantenerlo hasta el control quirúrgico',
    ],
    correctIndex: 3,
    explanation:
      'El torniquete se mantiene hasta el control quirúrgico del sangrado y no se retira «para ver», porque esa maniobra puede desencadenar una nueva hemorragia. La guía europea prioriza minimizar el tiempo entre la lesión y el control del sangrado, con compresión local y torniquete en las hemorragias exanguinantes de extremidad. El dolor no es criterio para aflojarlo.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
  {
    prompt: '¿Qué distingue el shock distributivo del shock séptico?',
    options: [
      'Que la anafilaxia, el neurogénico y el endocrino también son distributivos y su primera línea no es el antibiótico',
      'Que el distributivo siempre requiere antibiótico de amplio espectro',
      'Que el séptico no produce vasodilatación',
      'Que solo el séptico cursa con lactato elevado',
    ],
    correctIndex: 0,
    explanation:
      'El shock distributivo no equivale a shock séptico: la anafilaxia, el neurogénico y el endocrino comparten el mecanismo distributivo y su tratamiento de primera línea no es el antibiótico. Confundirlos lleva a retrasar la adrenalina, la corrección del tono simpático o el tratamiento hormonal. El lactato se eleva por muchas causas y no sirve para separar un tipo de otro.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'shock' },
  },
  {
    prompt: '¿Qué guías de reanimación están vigentes y desde cuándo se aplican en los cursos?',
    options: [
      'Las de 2025 (ILCOR/ERC, adaptadas por Resuscitation Council UK), en vigor en los cursos desde enero de 2026',
      'Las de 2021, prorrogadas hasta 2027',
      'Las de 2020, sin previsión de actualización',
      'Las de 2015, que siguen siendo la referencia en Europa',
    ],
    correctIndex: 0,
    explanation:
      'Las guías de reanimación vigentes son las de 2025, elaboradas por ILCOR y ERC y adaptadas por el Resuscitation Council UK; sustituyen a las de 2021 y entran en vigor en los cursos desde enero de 2026. En paralelo, la sepsis en el adulto se rige por NICE NG253 de 2025, que reemplaza parcialmente a NG51 de 2016. Usar una versión anterior cambia dosis y secuencias.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'flashcards' },
  },
  {
    prompt: 'En el paro cardiaco intrahospitalario, ¿qué supervivencia al alta se asocia a un ritmo inicial desfibrilable?',
    options: ['12 %', '17 %', '26 %', '53 %'],
    correctIndex: 3,
    explanation:
      'La supervivencia al alta del paro intrahospitalario es del 26 % global, pero asciende al 53 % cuando el ritmo inicial es fibrilación ventricular o taquicardia ventricular sin pulso. Con actividad eléctrica sin pulso es del 17 % y con asistolia del 12 %. Estas cifras proceden de registros y el apunte las mantiene como referencia aproximada, no verificada en la guía ALS.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'flashcards' },
  },
  {
    prompt: 'En el paro cardiaco, ¿cuándo se administra adrenalina según el ritmo?',
    options: [
      'Siempre antes del primer choque, sea cual sea el ritmo',
      'Solo después de tres choques en todos los ritmos',
      'Lo antes posible si el ritmo no es desfibrilable, y tras el tercer choque si es desfibrilable',
      'Nunca en el ritmo desfibrilable',
    ],
    correctIndex: 2,
    explanation:
      'La adrenalina se administra lo antes posible cuando el ritmo no es desfibrilable, y después del tercer choque cuando es desfibrilable. Los choques son únicos y van seguidos de dos minutos de compresiones, con interrupciones mínimas. La secuencia importa: no se trata igual un ritmo desfibrilable que uno no desfibrilable, y adelantar o retrasar la adrenalina cambia el resultado.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'flashcards' },
  },
  {
    prompt: '¿Qué energía inicial se recomienda para la desfibrilación en un paciente adulto?',
    options: [
      'Al menos 150 J en bifásico, con escalado posterior',
      '360 J en todos los choques desde el primero',
      '50 J en bifásico, sin escalado',
      '100 J en bifásico y 200 J en monofásico',
    ],
    correctIndex: 0,
    explanation:
      'El apunte fija la energía inicial en al menos 150 J en bifásico, o 130–150 J en bifásico pulsado, con escalado en los choques posteriores. Los choques son únicos y cada uno se sigue de dos minutos de compresiones. La desfibrilación secuencial doble no se recomienda de rutina y solo se plantea cambiar a posición anteroposterior tras tres choques fallidos en fibrilación refractaria.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'flashcards' },
  },
  {
    prompt: 'Sobre la colocación de los parches de desfibrilación, ¿qué afirmación es correcta?',
    options: [
      'La posición de elección es anteroposterior desde el primer choque',
      'El parche lateral se coloca en la línea axilar media, por debajo de la axila',
      'El parche lateral debe quedar sobre la axila',
      'La desfibrilación secuencial doble es el rescate de rutina',
    ],
    correctIndex: 1,
    explanation:
      'La colocación de elección es anterolateral, con el parche lateral en la línea axilar media por debajo de la axila. Tras tres choques fallidos en fibrilación refractaria puede cambiarse a posición anteroposterior, y la desfibrilación secuencial doble no se recomienda de rutina. La pausa peri-choque debe ser inferior a 5 segundos y no se retrasa la desfibrilación para canalizar una vía.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'flashcards' },
  },
  {
    prompt: 'En la anafilaxia del adulto, ¿qué dosis de adrenalina corresponde al profesional sanitario?',
    options: [
      '500 microgramos por vía intramuscular',
      '300 microgramos por vía intramuscular',
      '1 mg por vía intravenosa en bolo',
      '500 microgramos por vía subcutánea',
    ],
    correctIndex: 0,
    explanation:
      'La pauta del profesional sanitario en la anafilaxia del adulto es de 500 microgramos de adrenalina por vía intramuscular, repetible según el algoritmo. Los 300 microgramos corresponden al autoinyector de uso extrahospitalario, no a esta pauta. La vía intravenosa se reserva para el paro cardiaco o para especialistas con experiencia en titulación, porque en circulación espontánea puede causar hipertensión grave y arritmias.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'flashcards' },
  },
  {
    prompt: 'Tras recuperar la circulación espontánea, ¿qué objetivos de oxigenación y presión recomienda la guía 2025?',
    options: [
      'Hiperoxia y presión sistólica > 140 mmHg',
      'Normocapnia solo si el paciente está intubado',
      'Oxigenación controlada, normocapnia y presión sistólica > 100 mmHg o presión arterial media 60–65 mmHg',
      'Presión arterial media > 90 mmHg y fiebre permitida',
    ],
    correctIndex: 2,
    explanation:
      'Tras la recuperación de la circulación espontánea la guía recomienda oxigenación controlada, normocapnia y una presión sistólica > 100 mmHg o presión arterial media de 60–65 mmHg. Añade prevención de fiebre ≤ 37,5 °C mantenida 36–72 horas y tratamiento de crisis epilépticas. El pronóstico neurológico multimodal no debe hacerse antes de las 72 horas.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'flashcards' },
  },
  {
    prompt: 'En el infarto con elevación del ST, ¿qué plazo condiciona la elección de angioplastia primaria frente a fibrinólisis?',
    options: [
      '30 minutos desde la llegada al hospital',
      '6 horas desde el inicio del dolor',
      '24 horas desde el inicio del dolor',
      '120 minutos desde el momento en que podría haberse dado fibrinólisis',
    ],
    correctIndex: 3,
    explanation:
      'La guía condiciona la estrategia a la elevación del ST y al tiempo de traslado: se indica angiografía con angioplastia primaria si el paciente se presenta en las primeras 12 horas y la angioplastia puede realizarse en 120 minutos desde el momento en que podría haberse dado fibrinólisis. Si ese plazo no se cumple, la fibrinólisis es la alternativa. También se administra aspirina 300 mg de carga.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'flashcards' },
  },
  {
    prompt: 'Tras una anafilaxia, ¿qué medidas de prevención de la recidiva se indican?',
    options: [
      'Solo antihistamínicos a demanda y control anual',
      'Estudio alergológico, educación y prescripción de dos autoinyectores que debe llevar consigo',
      'Un autoinyector compartido con la familia',
      'Corticoides orales de mantenimiento',
    ],
    correctIndex: 1,
    explanation:
      'La prevención de la recidiva exige estudio alergológico, educación del paciente y prescripción de dos autoinyectores que debe llevar consigo, con adiestramiento en su uso. Todos los pacientes con sospecha de anafilaxia deben remitirse a una consulta de alergia. El autoinyector es de 300 microgramos y no sustituye la pauta hospitalaria de 500 microgramos intramusculares.',
    source: { specialty: 'gastrointestinal-surgery', topic: 'flashcards' },
  },
]

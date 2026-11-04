import type { QuizQuestion } from '@/lib/content'

/** Tríadas y pentadas (parte B). */
export const questions: QuizQuestion[] = [
  {
    prompt: '¿Qué describe la tríada de Virchow?',
    options: [
      'Los tres criterios diagnósticos de la trombosis venosa profunda',
      'Las tres escalas validadas para estratificar el riesgo tromboembólico',
      'Los tres mecanismos clásicos que favorecen la trombosis venosa',
      'Las tres fases del tratamiento anticoagulante',
    ],
    correctIndex: 2,
    explanation:
      'La tríada de Virchow reúne estasis del flujo, lesión endotelial e hipercoagulabilidad, los tres mecanismos clásicos de la trombosis venosa. Sigue siendo un modelo fisiopatológico válido, pero no es un criterio diagnóstico ni una escala de riesgo, de modo que no indica por sí sola anticoagulación.',
    source: { specialty: 'internal-medicine', topic: 'virchow-triad' },
  },
  {
    prompt: 'En la tríada de Virchow, ¿qué situaciones se agrupan bajo la estasis del flujo?',
    options: [
      'Inmovilidad, compresión e insuficiencia venosa',
      'Cirugía, catéteres y traumatismo',
      'Trombofilia hereditaria y neoplasia',
      'Estados inflamatorios y cáncer diseminado',
    ],
    correctIndex: 0,
    explanation:
      'La estasis del flujo incluye la inmovilidad, la compresión y la insuficiencia venosa. La lesión endotelial se asocia a cirugía, catéteres y traumatismo, mientras que la hipercoagulabilidad engloba la trombofilia hereditaria o adquirida, la neoplasia y los estados inflamatorios. Separar los tres grupos evita atribuir a un mecanismo lo que corresponde a otro.',
    source: { specialty: 'internal-medicine', topic: 'virchow-triad' },
  },
  {
    prompt: '¿Qué mecanismo de la tríada de Virchow corresponde a la cirugía, los catéteres y el traumatismo?',
    options: [
      'Estasis del flujo',
      'Lesión endotelial',
      'Hipercoagulabilidad adquirida',
      'Fibrinólisis excesiva',
    ],
    correctIndex: 1,
    explanation:
      'La lesión endotelial es el mecanismo que la tríada de Virchow vincula con la cirugía, la colocación de catéteres y el traumatismo. La estasis depende de la inmovilidad, la compresión y la insuficiencia venosa, y la hipercoagulabilidad de la trombofilia, la neoplasia y los estados inflamatorios. La fibrinólisis excesiva no forma parte de la tríada.',
    source: { specialty: 'internal-medicine', topic: 'virchow-triad' },
  },
  {
    prompt: '¿Cuál de estas entidades forma parte del espectro de la enfermedad tromboembólica venosa?',
    options: [
      'La trombosis venosa profunda y el embolismo pulmonar',
      'La trombosis arterial periférica y el ictus cardioembólico',
      'La trombofilia hereditaria aislada',
      'La insuficiencia venosa crónica sin trombosis',
    ],
    correctIndex: 0,
    explanation:
      'La enfermedad tromboembólica venosa incluye la trombosis venosa profunda y el embolismo pulmonar, y las guías estudian las condiciones que aumentan su probabilidad, como la trombofilia y el cáncer. La trombofilia es un factor predisponente, no una forma de la enfermedad, y la insuficiencia venosa crónica sin trombosis queda fuera de esa definición.',
    source: { specialty: 'internal-medicine', topic: 'virchow-triad' },
  },
  {
    prompt: 'Sobre la anticoagulación en la tríada de Virchow, ¿qué afirmación es correcta?',
    options: [
      'La tríada por sí sola indica iniciar anticoagulación',
      'La tríada sustituye a las escalas de riesgo',
      'El riesgo se valora con factores clínicos y escalas validadas',
      'La tríada estratifica el riesgo de sangrado',
    ],
    correctIndex: 2,
    explanation:
      'La tríada de Virchow no estratifica el riesgo ni indica por sí sola anticoagulación. El riesgo tromboembólico se valora con factores clínicos y escalas validadas, y la anticoagulación es la base del tratamiento una vez establecida la indicación. Confundir el modelo fisiopatológico con un algoritmo diagnóstico es el error más habitual.',
    source: { specialty: 'internal-medicine', topic: 'virchow-triad' },
  },
  {
    prompt: '¿Qué establece la guía NICE NG158?',
    options: [
      'El proceso diagnóstico de la TVP y del embolismo pulmonar, y cuándo estudiar trombofilia o buscar cáncer oculto',
      'La duración exacta de la anticoagulación en todos los pacientes',
      'El uso rutinario de filtros de vena cava en la TVP proximal',
      'La indicación de trombólisis en todo embolismo pulmonar',
    ],
    correctIndex: 0,
    explanation:
      'NICE NG158 ordena el proceso diagnóstico de la trombosis venosa profunda y del embolismo pulmonar y establece cuándo está indicado el estudio de trombofilia y cuándo la búsqueda de cáncer oculto. La guía también contempla el manejo ambulatorio del embolismo de bajo riesgo, la anticoagulación a largo plazo, la trombólisis y los filtros de vena cava, pero no los impone de forma rutinaria.',
    source: { specialty: 'internal-medicine', topic: 'virchow-triad' },
  },
  {
    prompt: '¿Qué población queda excluida del objeto de la guía sobre enfermedad tromboembólica venosa?',
    options: [
      'Los adultos mayores de 65 años',
      'Los pacientes con cáncer activo',
      'La embarazada',
      'Los portadores de catéter venoso central',
    ],
    correctIndex: 2,
    explanation:
      'El objeto de la guía son la trombosis venosa profunda y el embolismo pulmonar en adultos, excluyendo a la embarazada. La valoración parte de la sospecha clínica y continúa con las pruebas diagnósticas. El cáncer y la trombofilia no excluyen al paciente: son condiciones que aumentan la probabilidad de trombosis y que la guía indica cuándo estudiar.',
    source: { specialty: 'internal-medicine', topic: 'virchow-triad' },
  },
  {
    prompt: '¿Cuál es el error más habitual al aplicar la tríada de Virchow?',
    options: [
      'Confundir el modelo fisiopatológico con un algoritmo diagnóstico',
      'Olvidar la medición de dímero D',
      'No repetir la ecografía a las 48 horas',
      'Infravalorar la fibrinólisis excesiva',
    ],
    correctIndex: 0,
    explanation:
      'El error más habitual es confundir un modelo fisiopatológico con un algoritmo diagnóstico. La tríada explica por qué se forma el trombo, pero no estratifica el riesgo ni decide la anticoagulación; para eso se usan factores clínicos y escalas validadas. Tampoco es una escala de riesgo, y su ausencia no descarta la enfermedad.',
    source: { specialty: 'internal-medicine', topic: 'virchow-triad' },
  },
  {
    prompt: '¿Qué tres elementos forman la tríada de Whipple?',
    options: [
      'Síntomas adrenérgicos, insulina elevada y prueba de ayuno positiva',
      'Síntomas o signos compatibles, glucosa plasmática baja medida en el momento de los síntomas y alivio al normalizar la glucemia',
      'Hipoglucemia, hiperinsulinemia y lesión pancreática en la imagen',
      'Glucosa baja en ayunas, péptido C bajo y proinsulina normal',
    ],
    correctIndex: 1,
    explanation:
      'La tríada de Whipple, descrita por Allen O. Whipple, establece la existencia de un trastorno hipoglucémico con tres elementos: síntomas o signos compatibles, glucosa plasmática baja medida en el momento de los síntomas y alivio al normalizar la glucemia. Una glucemia baja aislada, sin síntomas ni respuesta al tratamiento, no cumple la tríada.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: '¿Cuál es la incidencia estimada de los insulinomas?',
    options: [
      '0,7 a 4 casos por millón de habitantes y año',
      '5 a 10 casos por millón de habitantes y año',
      '0,7 a 4 casos por 100.000 habitantes y año',
      'Hasta 20 casos por millón de habitantes y año',
    ],
    correctIndex: 0,
    explanation:
      'Los insulinomas son tumores neuroendocrinos pancreáticos con una incidencia estimada de 0,7 a 4 casos por millón de habitantes y año. Entre el 5 % y el 10 % se asocia a neoplasia endocrina múltiple tipo 1. El retraso diagnóstico es frecuente porque los síntomas se atribuyen a otras causas, y las cifras deben manejarse sin redondear.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: '¿Qué proporción de insulinomas se asocia a neoplasia endocrina múltiple tipo 1?',
    options: [
      'Menos del 1 %',
      'Alrededor del 20 %',
      'Entre el 5 % y el 10 %',
      'Más de la mitad',
    ],
    correctIndex: 2,
    explanation:
      'Entre el 5 % y el 10 % de los insulinomas se asocia a neoplasia endocrina múltiple tipo 1. El dato condiciona el estudio familiar y la búsqueda de otras lesiones endocrinas. El 20 % que aparece en la clínica se refiere a los pacientes con síntomas posprandiales, y no debe confundirse con la proporción de casos hereditarios.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: 'En el hiperinsulinismo endógeno, ¿cómo se comportan la insulina, el péptido C y la proinsulina durante la hipoglucemia?',
    options: [
      'Descienden por debajo del límite de detección',
      'Solo desciende la proinsulina',
      'Aumentan únicamente tras la ingesta',
      'Permanecen inapropiadamente elevados',
    ],
    correctIndex: 3,
    explanation:
      'En el hiperinsulinismo endógeno la secreción de insulina no desciende cuando la glucemia cae, de modo que insulina, péptido C y proinsulina permanecen inapropiadamente elevados durante la hipoglucemia. Esa falta de freno es la base bioquímica del diagnóstico y explica que la hipoglucemia no se corrija con el ayuno.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: 'Si la hipoglucemia no ocurre de forma espontánea, ¿qué prueba se realiza?',
    options: [
      'Una sobrecarga oral de glucosa de 2 horas',
      'Un ayuno prolongado de 72 horas con extracción de insulina, proinsulina o péptido C al aparecer la hipoglucemia',
      'Una prueba de supresión con dexametasona',
      'Una medición aislada de glucosa capilar en ayunas',
    ],
    correctIndex: 1,
    explanation:
      'Cuando la hipoglucemia no ocurre de forma espontánea se realiza una prueba de ayuno prolongado de 72 horas, con extracción de insulina, proinsulina o péptido C en el momento en que aparece la hipoglucemia. Lo relevante es demostrar la tríada durante la prueba, no solo una cifra baja aislada, que no permite establecer el diagnóstico.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: 'En la prueba de ayuno, ¿qué cifra de glucosa plasmática en ayunas se considera el criterio más específico?',
    options: [
      '≤ 55 mg/dL (3,0 mmol/L)',
      '≤ 70 mg/dL (3,9 mmol/L)',
      '< 45 mg/dL (2,5 mmol/L)',
      '< 30 mg/dL (1,7 mmol/L)',
    ],
    correctIndex: 2,
    explanation:
      'El hallazgo crítico es una glucosa plasmática en ayunas confirmada ≤ 55 mg/dL (3,0 mmol/L), con < 45 mg/dL (2,5 mmol/L) como criterio más específico. La cifra debe acompañarse de insulina de al menos 3 μU/mL, péptido C de al menos 0,6 ng/mL y proinsulina de al menos 5,0 pmol/L para completar el perfil.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: '¿Qué valor mínimo de insulina se exige durante la hipoglucemia?',
    options: [
      'Al menos 3 μU/mL (18 pmol/L)',
      'Al menos 0,6 ng/mL (0,2 nmol/L)',
      'Al menos 5,0 pmol/L',
      'Al menos 30 μU/mL (180 pmol/L)',
    ],
    correctIndex: 0,
    explanation:
      'El criterio es una insulina de al menos 3 μU/mL (18 pmol/L) durante la hipoglucemia. El valor de 0,6 ng/mL (0,2 nmol/L) corresponde al péptido C y el de 5,0 pmol/L a la proinsulina; mezclarlos altera la interpretación del perfil. La proinsulina permanece elevada porque la secreción no se frena al caer la glucemia.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: '¿Cuál es el tratamiento curativo de elección del insulinoma solitario?',
    options: [
      'Diazóxido a dosis altas de forma indefinida',
      'Análogos de somatostatina como primera línea',
      'Ablación por radiofrecuencia en todos los casos',
      'La extirpación quirúrgica, con enucleación si la lesión es pequeña y está alejada de los conductos',
    ],
    correctIndex: 3,
    explanation:
      'La extirpación quirúrgica del insulinoma solitario es el tratamiento curativo de elección, con enucleación cuando la lesión es pequeña y está alejada de los conductos. El diazóxido, los análogos de somatostatina y el everolimús controlan la hipoglucemia, pero no curan; la ablación por radiofrecuencia guiada por ultrasonido endoscópico se reserva para casos seleccionados.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: '¿Qué dosis de diazóxido se emplea para controlar la hipoglucemia?',
    options: [
      '50-100 mg/día en dosis única',
      '300-900 mg/día repartidos cada 8 horas',
      '1-2 g/día repartidos cada 6 horas',
      '10-20 mg/kg/día cada 12 horas',
    ],
    correctIndex: 1,
    explanation:
      'Para controlar la hipoglucemia se emplea diazóxido a dosis de 300-900 mg/día repartidos cada 8 horas, junto con medidas dietéticas. Los análogos de somatostatina y el everolimús son alternativas, y la ablación por radiofrecuencia guiada por ultrasonido endoscópico queda para casos seleccionados. La cirugía sigue siendo el único tratamiento curativo del insulinoma solitario.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: '¿Qué se exige para que se cumpla la tríada de Whipple?',
    options: [
      'Una glucemia baja en cualquier momento del día',
      'Demostrar un tumor pancreático en la imagen',
      'Medir la glucosa en el momento de los síntomas, con alivio al normalizarla',
      'Que los síntomas aparezcan siempre después de comer',
    ],
    correctIndex: 2,
    explanation:
      'La tríada exige medir la glucosa en el momento de los síntomas y comprobar el alivio al normalizar la glucemia. Una glucemia baja aislada, sin síntomas ni respuesta al tratamiento, no cumple la tríada. Hasta un 20 % de los pacientes refiere síntomas posprandiales, de modo que su ausencia no excluye el trastorno.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: '¿Con qué otras entidades se comparte el epónimo «Whipple»?',
    options: [
      'La duodenopancreatectomía y la enfermedad de Whipple',
      'La tríada de Cushing y el síndrome de Cushing',
      'La endocarditis de Libman-Sacks y el lupus',
      'El síndrome de Zollinger-Ellison y el gastrinoma',
    ],
    correctIndex: 0,
    explanation:
      'El epónimo «Whipple» se comparte con la duodenopancreatectomía y con la enfermedad de Whipple, de modo que conviene especificar «tríada de Whipple». La precisión importa porque son entidades distintas: la tríada describe un trastorno hipoglucémico y no debe confundirse con la cirugía pancreática ni con la enfermedad homónima.',
    source: { specialty: 'internal-medicine', topic: 'whipple-triad' },
  },
  {
    prompt: '¿Con qué se establece el diagnóstico de endocarditis infecciosa?',
    options: [
      'Con la tríada clásica de fiebre, soplo y fenómenos embólicos',
      'Con un hemocultivo positivo aislado',
      'Con los criterios de Duke modificados, que integran clínica, microbiología e imagen',
      'Con el ecocardiograma transtorácico exclusivamente',
    ],
    correctIndex: 2,
    explanation:
      'El diagnóstico se establece con los criterios de Duke modificados, que integran clínica, microbiología e imagen. La tríada es una descripción clásica, pero los signos clínicos tienen sensibilidad y especificidad limitadas, y su ausencia no descarta la enfermedad. Un hemocultivo aislado tampoco basta: la bacteriemia debe interpretarse en el conjunto.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿Cuál fue la incidencia estimada de endocarditis infecciosa en 2019?',
    options: [
      '13,8 casos por 100.000 personas',
      '1,5 casos por 1.000 nacidos vivos',
      '0,7 a 4 casos por millón de habitantes',
      '66.300 casos por 100.000 personas',
    ],
    correctIndex: 0,
    explanation:
      'La incidencia estimada fue de 13,8 casos por 100.000 personas en 2019, con aproximadamente 66.300 muertes en el mundo. Esa cifra de muertes no debe confundirse con una incidencia. El registro EURO-ENDO describe además la frecuencia de las manifestaciones clínicas, con la fiebre como la más habitual.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: 'En el registro EURO-ENDO, ¿cuál fue la manifestación más frecuente?',
    options: [
      'Los soplos cardíacos (64,5 %)',
      'La fiebre (77,7 %)',
      'La insuficiencia cardíaca (27,2 %)',
      'Los trastornos de conducción (10 %)',
    ],
    correctIndex: 1,
    explanation:
      'En el registro EURO-ENDO las manifestaciones más frecuentes fueron fiebre (77,7 %), soplos cardíacos (64,5 %) e insuficiencia cardíaca (27,2 %). Los fenómenos embólicos y los trastornos de conducción aparecieron en alrededor de una cuarta parte y una décima parte de los pacientes, respectivamente. La fiebre encabeza la lista, pero ninguna combinación es obligatoria.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿En qué proporción de pacientes con endocarditis infecciosa aparecen fenómenos embólicos?',
    options: [
      'En la mitad',
      'En menos del 5 %',
      'En todos los casos',
      'En alrededor de una cuarta parte',
    ],
    correctIndex: 3,
    explanation:
      'Los fenómenos embólicos aparecen en alrededor de una cuarta parte de los pacientes, y los trastornos de conducción en cerca de una décima parte. Esas cifras provienen del registro EURO-ENDO y acompañan a la fiebre, los soplos y la insuficiencia cardíaca como manifestaciones frecuentes. Las manifestaciones vasculares o inmunológicas periféricas son, en cambio, poco frecuentes.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿Cómo deben obtenerse los hemocultivos ante una sospecha de endocarditis?',
    options: [
      'Al menos tres juegos periféricos de 10 mL, separados unos 30 minutos, antes de iniciar antibióticos',
      'Un único juego de 5 mL coincidiendo con el pico febril',
      'Tres juegos de sangre arterial tras la primera dosis de antibiótico',
      'Dos juegos separados 24 horas, sin relación con el antibiótico',
    ],
    correctIndex: 0,
    explanation:
      'Se recomiendan al menos tres juegos de hemocultivos periféricos de 10 mL, separados unos 30 minutos, antes de iniciar antibióticos. La bacteriemia es continua, por lo que no es necesario coincidir con los picos febriles. Extraer menos volumen o hacerlo después de la primera dosis reduce el rendimiento del cultivo y dificulta identificar el microorganismo.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿Cuál es la referencia morfológica para valorar la endocarditis infecciosa?',
    options: [
      'El ecocardiograma transtorácico',
      'La tomografía cardíaca',
      'El ecocardiograma transesofágico',
      'La tomografía por emisión de positrones',
    ],
    correctIndex: 2,
    explanation:
      'El ecocardiograma transesofágico es la referencia morfológica. La tomografía cardíaca y la tomografía por emisión de positrones con fluorodesoxiglucosa son complementarias, sobre todo en prótesis valvulares. En pacientes con prótesis o dispositivos el ecocardiograma inicial puede ser negativo, y entonces puede estar indicada la repetición en 5-7 días.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿Cuándo está indicada la cirugía en la endocarditis infecciosa?',
    options: [
      'Solo cuando fracasa el antibiótico oral',
      'Ante insuficiencia cardíaca, infección no controlada o prevención de embolias',
      'En todos los pacientes con fiebre persistente',
      'De forma sistemática en la primera semana',
    ],
    correctIndex: 1,
    explanation:
      'La cirugía está indicada ante insuficiencia cardíaca, infección no controlada o prevención de embolias, con plazos que van de la urgencia (24 horas) a los 3-5 días según el escenario. No se indica de forma sistemática ni depende solo de la fiebre. El tratamiento antibiótico es prolongado y se guía por la concentración inhibitoria mínima.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿Cuál es la complicación embólica que aparece en el 15-30 % de los casos?',
    options: [
      'El infarto renal',
      'La embolia pulmonar',
      'El absceso perivalvular',
      'El ictus embólico',
    ],
    correctIndex: 3,
    explanation:
      'El ictus embólico aparece en el 15-30 % de los casos. Las demás complicaciones descritas son la insuficiencia cardíaca, los abscesos perivalvulares y la muerte. La prevención incluye la profilaxis en pacientes de alto riesgo y el control de las puertas de entrada, y la cirugía puede plantearse para prevenir embolias cuando el riesgo lo justifica.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: 'En un paciente con prótesis valvular y ecocardiograma inicial negativo, ¿qué conducta se contempla?',
    options: [
      'Descartar la endocarditis de forma definitiva',
      'Solicitar solo hemocultivos seriados',
      'Repetir el ecocardiograma en 5-7 días',
      'Iniciar cirugía de urgencia',
    ],
    correctIndex: 2,
    explanation:
      'En pacientes con prótesis o dispositivos el ecocardiograma inicial puede ser negativo, y puede estar indicada la repetición en 5-7 días. Un estudio negativo no descarta la enfermedad, del mismo modo que la ausencia de la tríada tampoco lo hace. La decisión se apoya en los criterios de Duke modificados, que integran clínica, microbiología e imagen.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿En qué pacientes la presentación de la endocarditis suele ser atípica?',
    options: [
      'En ancianos e inmunosuprimidos',
      'En jóvenes deportistas',
      'En embarazadas sin factores de riesgo',
      'En pacientes con válvulas nativas sanas',
    ],
    correctIndex: 0,
    explanation:
      'En ancianos e inmunosuprimidos la presentación suele ser atípica, lo que retrasa el reconocimiento. La clínica habitual incluye fiebre o sepsis de origen desconocido, soplo nuevo, insuficiencia cardíaca y fenómenos embólicos. Las manifestaciones vasculares o inmunológicas periféricas son poco frecuentes y más propias de la infección estafilocócica grave o de la endocarditis estreptocócica subaguda.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿Qué microorganismos causan habitualmente la infección del endocardio?',
    options: [
      'Neumococos y meningococos',
      'Anaerobios estrictos y hongos',
      'Micobacterias y virus',
      'Estafilococos, estreptococos o enterococos',
    ],
    correctIndex: 3,
    explanation:
      'La infección del endocardio suele deberse a estafilococos, estreptococos o enterococos. Las vegetaciones destruyen válvulas y generan embolias, y la presentación varía desde una sepsis aguda hasta una enfermedad subaguda con fiebre leve. Esa variedad explica que la tríada clásica no baste y que el diagnóstico requiera microbiología e imagen.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿Qué opciones terapéuticas se contemplan en pacientes seleccionados con endocarditis?',
    options: [
      'La anticoagulación sistémica rutinaria',
      'El tratamiento antibiótico parenteral ambulatorio y el tratamiento oral parcial',
      'La retirada sistemática de toda prótesis valvular',
      'La profilaxis antibiótica de por vida',
    ],
    correctIndex: 1,
    explanation:
      'Se contemplan el tratamiento antibiótico parenteral ambulatorio y el tratamiento oral parcial en pacientes seleccionados. Los antibióticos son prolongados y se guían por la concentración inhibitoria mínima, y la cirugía se reserva para la insuficiencia cardíaca, la infección no controlada o la prevención de embolias. La profilaxis se dirige a los pacientes de alto riesgo.',
    source: { specialty: 'internal-medicine', topic: 'infective-endocarditis-triad' },
  },
  {
    prompt: '¿Qué proporción de pacientes con cáncer renal se presenta con la tríada clásica?',
    options: [
      'Alrededor del 10 %',
      'Cerca del 20 %',
      'Dos tercios',
      'Alrededor del 75 %',
    ],
    correctIndex: 0,
    explanation:
      'Solo alrededor del 10 % de los pacientes se presenta con la tríada clásica de hematuria, dolor en el flanco y masa palpable. La mayoría de los casos se descubre de forma incidental en estudios de imagen. Buscar la tríada como método de cribado es un error, porque su ausencia es la norma y no descarta el tumor.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Cuáles son los tres componentes de la tríada clásica del cáncer renal?',
    options: [
      'Hematuria, fiebre y pérdida de peso',
      'Hematuria, dolor en el flanco y masa palpable',
      'Dolor lumbar, varicocele e hipertensión',
      'Hematuria, hipercalcemia y policitemia',
    ],
    correctIndex: 1,
    explanation:
      'La tríada clásica combina hematuria, dolor en el flanco y masa palpable. La hematuria puede ser macroscópica o microscópica, y el dolor lumbar simula patología osteomuscular. Fiebre, pérdida de peso y leucocitosis pueden aparecer además de la tríada, pero no forman parte de ella; los síndromes paraneoplásicos afectan a cerca del 20 % de los pacientes.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Cómo se detecta hoy la mayoría de los carcinomas de células renales?',
    options: [
      'Por la tríada clásica',
      'Por hematuria microscópica en el cribado',
      'De forma incidental en estudios de imagen',
      'Por síndromes paraneoplásicos',
    ],
    correctIndex: 2,
    explanation:
      'La mayoría de los casos se detecta de forma incidental en estudios de imagen —tomografía, resonancia o ecografía—. El diagnóstico se confirma mediante biopsia con estudio inmunohistoquímico cuando se plantea tratamiento sistémico. La tríada aparece solo en alrededor del 10 % de los pacientes, de modo que esperarla retrasa el diagnóstico en la mayoría.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Qué porcentaje de los diagnósticos y de las muertes por cáncer en el mundo representa el carcinoma de células renales?',
    options: ['Cerca del 10 %', 'Alrededor del 25 %', 'Más de la mitad', 'Cerca del 2 %'],
    correctIndex: 3,
    explanation:
      'El carcinoma de células renales representa cerca del 2 % de los diagnósticos y de las muertes por cáncer en el mundo. La incidencia se ha más que duplicado en el mundo desarrollado en medio siglo, y dos tercios de los casos ocurren en hombres, con una edad media al diagnóstico de 64 años. Son datos epidemiológicos, no criterios de cribado.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Qué proporción de los carcinomas de células renales corresponde al subtipo de células claras?',
    options: ['Alrededor del 10 %', 'Alrededor del 75 %', 'Cerca del 2 %', 'Dos tercios'],
    correctIndex: 1,
    explanation:
      'El subtipo de células claras supone alrededor del 75 % de los casos y se asocia a mutaciones o deleciones del gen de von Hippel-Lindau. Los factores de riesgo modificables incluyen tabaquismo, obesidad, hipertensión mal controlada, dieta, alcohol y exposiciones ocupacionales, mientras que el control de esos mismos factores forma la base de la prevención.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Qué síndromes paraneoplásicos pueden acompañar al cáncer renal?',
    options: [
      'Hipercalcemia, bradicardia e hipoglucemia',
      'Policitemia, trombocitopenia e hiperpotasemia',
      'Hipercalcemia, policitemia, síndrome de Cushing e hipertensión por renina',
      'Síndrome de Cushing, hipercalcemia e hipotiroidismo',
    ],
    correctIndex: 2,
    explanation:
      'Cerca del 20 % de los pacientes presenta síndromes paraneoplásicos como hipercalcemia, policitemia, síndrome de Cushing o hipertensión por producción de renina. Además de la tríada pueden aparecer fiebre, pérdida de peso y leucocitosis. Un varicocele izquierdo puede ser la forma de presentación por obstrucción de la vena renal izquierda.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Cómo se explica un varicocele izquierdo como forma de presentación del cáncer renal?',
    options: [
      'Por trombosis de la vena cava inferior',
      'Por hipercalcemia',
      'Por metástasis testicular',
      'Por obstrucción de la vena renal izquierda',
    ],
    correctIndex: 3,
    explanation:
      'Un varicocele izquierdo puede ser la forma de presentación por obstrucción de la vena renal izquierda. Es un signo que obliga a pensar en el tumor renal, aunque la tríada completa solo aparezca en alrededor del 10 % de los casos. La mayoría de los tumores se descubre de forma incidental en estudios de imagen.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Cuál es la supervivencia relativa a 5 años en el carcinoma renal metastásico?',
    options: ['12 %', '75 %', '93 %', '50 %'],
    correctIndex: 0,
    explanation:
      'La supervivencia relativa a 5 años es del 93 % en el estadio I y del 12 % en el metastásico. La diferencia explica el peso del diagnóstico precoz. La prevención se apoya en el control del tabaquismo, del peso y de la hipertensión, los factores modificables que el apunte enumera junto con la dieta, el alcohol y las exposiciones ocupacionales.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Qué afirmación sobre el tratamiento sistémico del cáncer renal metastásico es correcta según el apunte?',
    options: [
      'Se basa solo en quimioterapia citotóxica',
      'Incluye inmunoterapia con inhibidores de puntos de control y terapias dirigidas como sunitinib',
      'La revisión citada demuestra el papel predictivo de PD-L1',
      'La secuencia exacta está establecida por esa revisión',
    ],
    correctIndex: 1,
    explanation:
      'En la enfermedad metastásica el tratamiento sistémico incluye inmunoterapia con inhibidores de puntos de control y terapias dirigidas como sunitinib, según las guías oncológicas. La revisión citada es epidemiológica y no permite afirmar la secuencia exacta ni el papel predictivo de PD-L1, por lo que esas decisiones deben contrastarse con la guía oncológica vigente.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Por qué es un error usar la tríada clásica como método de cribado del cáncer renal?',
    options: [
      'Porque su presencia es la norma en los tumores pequeños',
      'Porque la hematuria nunca aparece',
      'Porque el dolor lumbar siempre indica metástasis',
      'Porque su ausencia es la norma y la mayoría se detecta por imagen',
    ],
    correctIndex: 3,
    explanation:
      'Buscar la tríada como método de cribado es un error porque su ausencia es la norma: solo alrededor del 10 % de los pacientes la presenta y la mayoría se descubre de forma incidental en estudios de imagen. Además, la hematuria puede ser macroscópica o microscópica y el dolor lumbar simula patología osteomuscular, lo que favorece interpretaciones equivocadas.',
    source: { specialty: 'internal-medicine', topic: 'classic-renal-cancer-triad' },
  },
  {
    prompt: '¿Qué tres alteraciones forman la tríada letal clásica del trauma?',
    options: [
      'Coagulopatía, acidosis metabólica e hipotermia',
      'Hipotensión, bradicardia e hipoxia',
      'Coagulopatía, hipercalcemia e hipertermia',
      'Acidosis respiratoria, hipocalcemia y anemia',
    ],
    correctIndex: 0,
    explanation:
      'La tríada letal clásica combina coagulopatía, acidosis metabólica e hipotermia. A ella se ha añadido la hipocalcemia, dando lugar al concepto de «diamante de la muerte». No hay que esperar a que se complete la tríada para actuar: el sangrado no controlado y la hipoperfusión son los datos que obligan a intervenir.',
    source: { specialty: 'internal-medicine', topic: 'lethal-trauma-triad' },
  },
  {
    prompt: '¿Qué cuarto elemento se añade a la tríada letal para formar el «diamante de la muerte»?',
    options: ['La hiperglucemia', 'La hipocalcemia', 'La hiperpotasemia', 'La hipertermia'],
    correctIndex: 1,
    explanation:
      'El cuarto elemento es la hipocalcemia, que aparece con frecuencia durante la transfusión masiva y se asocia a peor evolución. Con ella, la tríada letal —coagulopatía, acidosis metabólica e hipotermia— pasa a describirse como «diamante de la muerte». La hipocalcemia se olvida con frecuencia y debe monitorizarse durante la transfusión.',
    source: { specialty: 'internal-medicine', topic: 'lethal-trauma-triad' },
  },
  {
    prompt: '¿Qué proporción de pacientes con traumatismo grave llega al hospital en estado coagulopático?',
    options: [
      'Aproximadamente un tercio',
      'Cerca del 10 %',
      'Más de la mitad',
      'Alrededor del 75 %',
    ],
    correctIndex: 0,
    explanation:
      'Aproximadamente un tercio de los pacientes con traumatismo grave llega al hospital en estado coagulopático, y la hemorragia sigue siendo una de las principales causas de muerte prevenible. Esa frecuencia justifica el control precoz del sangrado y reducir al mínimo el tiempo hasta la intervención, en lugar de esperar a que la coagulopatía se manifieste.',
    source: { specialty: 'internal-medicine', topic: 'lethal-trauma-triad' },
  },
  {
    prompt: 'La coagulopatía inducida por el trauma, ¿cómo se describe?',
    options: [
      'Como un fenómeno exclusivamente dilucional por fluidos',
      'Como una alteración que aparece solo en la fase tardía',
      'Como un proceso multifactorial con fenotipo precoz hipocoagulable y tardío hipercoagulable',
      'Como un defecto aislado de factor VIII',
    ],
    correctIndex: 2,
    explanation:
      'La coagulopatía inducida por el trauma es multifactorial: activación de la vía de la proteína C, disfunción endotelial y plaquetaria, generación inapropiada de trombina, depleción de fibrinógeno y fibrinólisis excesiva. Se distinguen un fenotipo precoz hipocoagulable y un fenotipo tardío hipercoagulable, lo que explica que el manejo cambie con el tiempo.',
    source: { specialty: 'internal-medicine', topic: 'lethal-trauma-triad' },
  },
  {
    prompt: '¿Qué ventaja ofrecen las pruebas viscoelásticas en el trauma grave?',
    options: [
      'Sustituyen a la clínica para decidir la transfusión',
      'Miden la función renal',
      'Tardan hasta 60 minutos y no valoran la calidad del coágulo',
      'Valoran la coagulación en tiempo real y permiten guiar la reposición de forma dirigida',
    ],
    correctIndex: 3,
    explanation:
      'Las pruebas viscoelásticas —tromboelastografía y tromboelastometría rotacional— permiten valorar la coagulación en tiempo real y guiar la reposición de forma dirigida. Las pruebas convencionales tardan hasta 60 minutos y no valoran la calidad del coágulo ni la función plaquetaria, de modo que no sirven para decidir con la misma rapidez durante una hemorragia activa.',
    source: { specialty: 'internal-medicine', topic: 'lethal-trauma-triad' },
  },
  {
    prompt: '¿Cuál es la limitación de las pruebas convencionales de coagulación en el trauma?',
    options: [
      'No pueden medir el tiempo de protrombina',
      'Tardan hasta 60 minutos y no valoran la calidad del coágulo ni la función plaquetaria',
      'Solo se realizan en quirófano',
      'Detectan mejor la fibrinólisis que las viscoelásticas',
    ],
    correctIndex: 1,
    explanation:
      'Las pruebas convencionales tardan hasta 60 minutos y no valoran la calidad del coágulo ni la función plaquetaria. Por eso las pruebas viscoelásticas, como la tromboelastografía y la tromboelastometría rotacional, permiten valorar la coagulación en tiempo real y guiar la reposición de forma dirigida durante el sangrado activo.',
    source: { specialty: 'internal-medicine', topic: 'lethal-trauma-triad' },
  },
  {
    prompt: 'En las estrategias de transfusión fija, ¿qué proporciones se usan?',
    options: [
      'Cercanas a 1:1:1 o 1:1:2 de plaquetas, plasma y hematíes',
      'Cercanas a 1:1:1 o 1:1:2 de hematíes, plaquetas y crioprecipitado',
      'Siempre 2:1:1',
      'Solo plasma y hematíes en proporción 1:1',
    ],
    correctIndex: 0,
    explanation:
      'Las estrategias de transfusión fija usan proporciones cercanas a 1:1:1 o 1:1:2 de plaquetas, plasma y hematíes. Forman parte de la reanimación de control de daños, junto con la hipotensión permisiva, la cirugía de control de daños, la transfusión precoz, el ácido tranexámico y la reposición de fibrinógeno o crioprecipitado.',
    source: { specialty: 'internal-medicine', topic: 'lethal-trauma-triad' },
  },
  {
    prompt: '¿Qué medidas incluye la reanimación de control de daños en el trauma?',
    options: [
      'Normotensión estricta y fluidoterapia masiva con cristaloides',
      'Esperar la corrección de la acidosis antes de operar',
      'Hipotensión permisiva, cirugía de control de daños y transfusión precoz',
      'Transfusión únicamente de hematíes hasta normalizar la presión',
    ],
    correctIndex: 2,
    explanation:
      'La reanimación de control de daños combina hipotensión permisiva, cirugía de control de daños y transfusión precoz. Se añaden ácido tranexámico, reposición de fibrinógeno o crioprecipitado y corrección agresiva de la hipotermia, la acidosis y el calcio. La prevención se apoya en el control precoz del sangrado y en reducir al mínimo el tiempo hasta la intervención.',
    source: { specialty: 'internal-medicine', topic: 'lethal-trauma-triad' },
  },
  {
    prompt: '¿Cuál es el error frecuente en el manejo de la tríada letal?',
    options: [
      'Corregir la hipotermia demasiado pronto',
      'Monitorizar el calcio durante la transfusión',
      'Administrar ácido tranexámico precozmente',
      'Esperar a que se complete la tríada para actuar',
    ],
    correctIndex: 3,
    explanation:
      'No hay que esperar a que se complete la tríada para actuar, porque para entonces la coagulopatía, la acidosis y la hipotermia ya están establecidas. El otro error frecuente es olvidar la hipocalcemia, que debe monitorizarse durante la transfusión masiva. La corrección agresiva de la hipotermia, la acidosis y el calcio forma parte del tratamiento.',
    source: { specialty: 'internal-medicine', topic: 'lethal-trauma-triad' },
  },
  {
    prompt: '¿Qué tres hallazgos agrupa la tríada de Saint?',
    options: [
      'Hernia hiatal, litiasis biliar y diverticulosis colónica',
      'Hernia hiatal, úlcera gástrica y pancreatitis',
      'Litiasis biliar, diverticulitis y cáncer de colon',
      'Reflujo, litiasis renal y estreñimiento crónico',
    ],
    correctIndex: 0,
    explanation:
      'La tríada de Saint agrupa hernia hiatal, litiasis biliar y diverticulosis colónica, tres hallazgos muy prevalentes. No figura como criterio diagnóstico en las guías consultadas, y su coexistencia puede ser casual. Con tres entidades tan frecuentes, encontrar las tres en una misma persona es esperable por azar, no una enfermedad única.',
    source: { specialty: 'internal-medicine', topic: 'saint-triad' },
  },
  {
    prompt: '¿Qué estatus tiene la tríada de Saint en las guías consultadas?',
    options: [
      'Es un criterio diagnóstico mayor',
      'Es un criterio menor de diverticulitis',
      'No figura como criterio diagnóstico',
      'Es una indicación de cirugía profiláctica',
    ],
    correctIndex: 2,
    explanation:
      'La tríada de Saint no figura como criterio diagnóstico en las guías consultadas. Cada componente se diagnostica por separado: ecografía para la litiasis y colonoscopía o tomografía para la diverticulosis. Atribuir síntomas digestivos inespecíficos a la tríada lleva a estudios y tratamientos innecesarios, porque la coexistencia de tres hallazgos frecuentes es esperable.',
    source: { specialty: 'internal-medicine', topic: 'saint-triad' },
  },
  {
    prompt: '¿Qué prevalencia tiene la litiasis biliar en la población de Estados Unidos?',
    options: [
      '10-15 %, casi 25 millones de personas',
      'Más del 30 % de los adultos',
      'Más del 70 % de los mayores de 80 años',
      'Alrededor del 2 % de la población',
    ],
    correctIndex: 0,
    explanation:
      'La litiasis biliar afecta al 10-15 % de la población de Estados Unidos, casi 25 millones de personas. La diverticulosis, en cambio, está presente en más del 30 % de los adultos de 50-59 años y en más del 70 % de los mayores de 80 años. Confundir ambas cifras lleva a sobreestimar una entidad y subestimar la otra.',
    source: { specialty: 'internal-medicine', topic: 'saint-triad' },
  },
  {
    prompt: '¿En qué grupo la diverticulosis colónica supera el 70 %?',
    options: [
      'En los adultos de 50-59 años',
      'En los mayores de 80 años',
      'En los menores de 40 años',
      'En las mujeres posmenopáusicas',
    ],
    correctIndex: 1,
    explanation:
      'La diverticulosis está presente en más del 30 % de los adultos de 50-59 años y en más del 70 % de los mayores de 80 años. Esa alta prevalencia explica que su coexistencia con la litiasis biliar pueda ser casual, sin que exista una vía fisiopatológica común conocida entre ambas entidades.',
    source: { specialty: 'internal-medicine', topic: 'saint-triad' },
  },
  {
    prompt: '¿Cuál es la relación fisiopatológica entre los componentes de la tríada de Saint?',
    options: [
      'Una vía común mediada por la inflamación crónica',
      'La litiasis causa siempre la diverticulosis',
      'La hernia hiatal provoca la litiasis por reflujo',
      'Mecanismos independientes, sin vía fisiopatológica común conocida',
    ],
    correctIndex: 3,
    explanation:
      'Son mecanismos independientes, sin vía fisiopatológica común conocida. La litiasis se forma cuando la bilis contiene demasiado colesterol o bilirrubina o pocas sales biliares, y la diverticulosis consiste en la protrusión de la mucosa a través de puntos débiles de la pared del colon, sobre todo en el sigma. La coexistencia no implica causalidad.',
    source: { specialty: 'internal-medicine', topic: 'saint-triad' },
  },
  {
    prompt: '¿Dónde se localiza preferentemente la diverticulosis colónica?',
    options: ['En el ciego', 'En el sigma', 'En el recto', 'En el colon transverso'],
    correctIndex: 1,
    explanation:
      'La diverticulosis consiste en la protrusión de la mucosa a través de puntos débiles de la pared del colon, sobre todo en el sigma. Es mayoritariamente asintomática y solo una minoría desarrolla diverticulitis o sangrado. La litiasis, por su parte, suele ser asintomática y, cuando obstruye, produce cólico biliar.',
    source: { specialty: 'internal-medicine', topic: 'saint-triad' },
  },
  {
    prompt: '¿Cuál es el tratamiento de la litiasis biliar sintomática?',
    options: [
      'Manejo médico con analgesia y observación',
      'Colonoscopía terapéutica',
      'Colecistectomía',
      'Antibióticos de forma indefinida',
    ],
    correctIndex: 2,
    explanation:
      'El tratamiento es el de cada entidad: colecistectomía en la litiasis sintomática y manejo médico de la diverticulitis no complicada. Atribuir síntomas digestivos inespecíficos a la tríada de Saint lleva a estudios y tratamientos innecesarios. Las complicaciones de la litiasis son colecistitis, colangitis y pancreatitis; las de la diverticulitis, absceso, fístula, obstrucción y peritonitis.',
    source: { specialty: 'internal-medicine', topic: 'saint-triad' },
  },
  {
    prompt: '¿Qué complicaciones corresponden a la diverticulitis?',
    options: [
      'Colecistitis, colangitis y pancreatitis',
      'Cólico biliar aislado y esteatorrea',
      'Reflujo gastroesofágico y esofagitis',
      'Absceso, fístula, obstrucción y peritonitis',
    ],
    correctIndex: 3,
    explanation:
      'La diverticulitis puede complicarse con absceso, fístula, obstrucción y peritonitis. La litiasis, en cambio, se asocia a colecistitis, colangitis y pancreatitis. Distinguir ambas listas importa porque el tratamiento es el de cada entidad: colecistectomía en la litiasis sintomática y manejo médico en la diverticulitis no complicada.',
    source: { specialty: 'internal-medicine', topic: 'saint-triad' },
  },
  {
    prompt: '¿Qué tres hallazgos forman la tríada clásica de la toxoplasmosis congénita descrita por Wolf en 1939?',
    options: [
      'Hidrocefalia, calcificaciones intracraneales y coriorretinitis',
      'Microcefalia, cataratas y sordera',
      'Hidrocefalia, petequias y hepatoesplenomegalia',
      'Coriorretinitis, ictericia y anemia',
    ],
    correctIndex: 0,
    explanation:
      'La tríada clásica descrita por Wolf en 1939 combina hidrocefalia, calcificaciones intracraneales y coriorretinitis, y se observa muy raramente en la actualidad. Ninguna de esas manifestaciones es patognomónica: también sugieren citomegalovirus, herpes simple, rubéola o sífilis, de modo que el diagnóstico no puede apoyarse solo en la clínica.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
  {
    prompt: '¿Cuál es la incidencia global estimada de la toxoplasmosis congénita?',
    options: [
      '13,8 casos por 100.000 personas',
      '1,5 casos por 1.000 nacidos vivos',
      '0,7 a 4 casos por millón de habitantes',
      '1 caso por cada 100 nacidos vivos',
    ],
    correctIndex: 1,
    explanation:
      'La incidencia global se estima en 1,5 casos por 1.000 nacidos vivos, con mayor carga en Sudamérica y en países de ingresos bajos. La toxoplasmosis congénita resulta de la primoinfección materna durante el embarazo, y el 85 % de los recién nacidos infectados está asintomático al nacer, lo que dificulta el reconocimiento precoz.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
  {
    prompt: '¿Qué proporción de recién nacidos infectados está asintomática al nacer?',
    options: ['El 50 %', 'El 20 %', 'El 85 %', 'Menos del 5 %'],
    correctIndex: 2,
    explanation:
      'El 85 % de los recién nacidos infectados está asintomático al nacer. Por eso esperar la tríada completa lleva a infradiagnosticar: la mayoría nace sin signos, y la coriorretinitis puede aparecer años después, lo que obliga a un seguimiento oftalmológico prolongado. El tamizaje serológico prenatal es la vía para detectar la infección materna.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
  {
    prompt: '¿Cómo cambia el riesgo de infección fetal con la edad gestacional?',
    options: [
      'Aumenta con la edad gestacional, mientras la gravedad disminuye',
      'Disminuye con la edad gestacional, mientras la gravedad aumenta',
      'Se mantiene constante a lo largo del embarazo',
      'Es máximo antes de las 6 semanas',
    ],
    correctIndex: 0,
    explanation:
      'El riesgo de infección fetal aumenta con la edad gestacional —2,2 % a las 6 semanas, 23 % a las 18 y 56 % a las 30—, mientras que la gravedad disminuye al avanzar el embarazo. La transmisión transplacentaria ocurre durante la parasitemia, y esa disociación entre riesgo y gravedad condiciona el pronóstico según el trimestre.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
  {
    prompt: 'Ante hidrocefalia, calcificaciones intracraneales y coriorretinitis en un recién nacido, ¿qué otros agentes deben considerarse?',
    options: [
      'Solo toxoplasma, porque la tríada es patognomónica',
      'Estreptococo del grupo B y Escherichia coli',
      'Solo citomegalovirus, sin necesidad de otras pruebas',
      'Citomegalovirus, herpes simple, rubéola o sífilis',
    ],
    correctIndex: 3,
    explanation:
      'Ninguna de las manifestaciones es patognomónica: también sugieren citomegalovirus, herpes simple, rubéola o sífilis. Por eso la evaluación incluye exploración neurológica, fondo de ojo dilatado y ecografía transfontanelar al nacer, además de pruebas serológicas confirmadas en un laboratorio de referencia. La clínica aislada no permite atribuir la infección a un agente.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
  {
    prompt: '¿Cuánto dura el tratamiento de la toxoplasmosis congénita?',
    options: [
      'Seis semanas',
      'Al menos un año',
      'Hasta las 18 semanas de gestación',
      'De por vida en todos los casos',
    ],
    correctIndex: 1,
    explanation:
      'El tratamiento combina pirimetamina, sulfadiazina y ácido folínico, y se mantiene al menos un año. Antes de iniciarlo debe descartarse el déficit de glucosa-6-fosfato deshidrogenasa, y durante el tratamiento se vigila el hemograma, pues hasta un 30 % presenta eventos hematológicos. La duración no se acorta por la mejoría clínica inicial.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
  {
    prompt: '¿Qué se debe descartar antes de iniciar pirimetamina y sulfadiazina?',
    options: [
      'La alergia a la penicilina',
      'La insuficiencia renal crónica',
      'El déficit de vitamina B12',
      'El déficit de glucosa-6-fosfato deshidrogenasa',
    ],
    correctIndex: 3,
    explanation:
      'Antes de iniciar la combinación de pirimetamina, sulfadiazina y ácido folínico debe descartarse el déficit de glucosa-6-fosfato deshidrogenasa. Durante el tratamiento se vigila el hemograma, pues hasta un 30 % presenta eventos hematológicos. El ácido folínico se añade para reducir la toxicidad hematológica y la pauta se mantiene al menos un año.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
  {
    prompt: '¿Qué pauta se emplea en la gestante con infección antes de las 18 semanas?',
    options: [
      'Espiramicina',
      'Pirimetamina y sulfadiazina',
      'Penicilina benzatínica',
      'Aciclovir intravenoso',
    ],
    correctIndex: 0,
    explanation:
      'En la gestante con infección antes de las 18 semanas se emplea espiramicina, y tras esa edad la combinación de pirimetamina y sulfonamidas con ácido folínico. El cambio refleja que la pirimetamina no se usa en la fase más temprana. El tratamiento precoz de la infección materna forma parte de la prevención, junto con el tamizaje serológico prenatal.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
  {
    prompt: '¿En qué países el tamizaje serológico prenatal es obligatorio?',
    options: [
      'En Estados Unidos y Canadá',
      'En todos los países de la Unión Europea',
      'En Francia y Austria',
      'En Brasil y Argentina',
    ],
    correctIndex: 2,
    explanation:
      'La prevención se basa en el tamizaje serológico prenatal, obligatorio en Francia y Austria, y en el tratamiento precoz de la infección materna. Las pruebas serológicas deben confirmarse en un laboratorio de referencia. La coriorretinitis recurrente, la ceguera, el déficit neurológico y la sordera son las complicaciones que justifican ese seguimiento.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
  {
    prompt: '¿Qué implica el acrónimo TORCH y cuál es su límite?',
    options: [
      'Identifica solo la toxoplasmosis congénita',
      'Agrupa varias infecciones congénitas y ninguna manifestación es específica',
      'Define una tríada patognomónica',
      'Excluye la rubéola y la sífilis',
    ],
    correctIndex: 1,
    explanation:
      '«TORCH» agrupa varias infecciones congénitas y ninguna manifestación es específica. Esperar la tríada completa lleva a infradiagnosticar, porque la mayoría de los infectados nace sin signos. La coriorretinitis puede aparecer años después, lo que obliga a seguimiento oftalmológico prolongado. El diagnóstico se apoya en IgM e IgA neonatales, western blot comparativo y PCR en líquido amniótico.',
    source: { specialty: 'internal-medicine', topic: 'torch-syndrome' },
  },
]

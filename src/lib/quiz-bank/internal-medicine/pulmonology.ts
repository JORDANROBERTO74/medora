import type { QuizQuestion } from '@/lib/content'

/** Neumología. */
export const questions: QuizQuestion[] = [
  {
    prompt:
      '¿Cuál es la incidencia anual estimada de las enfermedades pleurales —derrame y neumotórax espontáneo—?',
    options: [
      '35–36 casos por 100 000 habitantes',
      '120–130 casos por 100 000 habitantes',
      '350–360 casos por 100 000 habitantes',
      '900–950 casos por 100 000 habitantes',
    ],
    correctIndex: 2,
    explanation:
      'La incidencia anual de las enfermedades pleurales, que incluyen el derrame y el neumotórax espontáneo, se estima en 350–360 casos por 100 000 habitantes, con costes sanitarios elevados. No es una patología rara: se reconocen más de 60 causas, aunque solo cuatro —insuficiencia cardiaca, cáncer, neumonía y tuberculosis— explican alrededor del 75 % de los casos.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt:
      '¿Cuál es el orden de frecuencia de las cuatro causas que explican alrededor del 75 % de los derrames pleurales?',
    options: [
      'Insuficiencia cardiaca, cáncer, neumonía y tuberculosis',
      'Cáncer, tuberculosis, insuficiencia cardiaca y neumonía',
      'Neumonía, insuficiencia cardiaca, tuberculosis y cáncer',
      'Tuberculosis, neumonía, cáncer e insuficiencia cardiaca',
    ],
    correctIndex: 0,
    explanation:
      'Se reconocen más de 60 causas de derrame pleural, pero cuatro explican alrededor del 75 % de los casos: insuficiencia cardiaca, cáncer, neumonía y tuberculosis, en ese orden de frecuencia. La insuficiencia cardiaca es la causa más común y puede superar el 35 % en algunas series, con una mortalidad a un año nada banal.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt: 'Sobre los criterios de Light, ¿qué afirmación recoge la guía SEPAR 2022?',
    options: [
      'Identifican los exudados con una sensibilidad del 60 %',
      'Tienen una sensibilidad del 98 % para identificar exudados, pero reclasifican erróneamente un 25–30 % de trasudados',
      'Clasifican correctamente todos los trasudados si el paciente toma diuréticos',
      'Solo son válidos en el líquido pleural hemático',
    ],
    correctIndex: 1,
    explanation:
      'Los criterios de Light mantienen una sensibilidad del 98 % para identificar exudados, pero reclasifican erróneamente un 25–30 % de trasudados, sobre todo en pacientes con diuréticos o líquido pleural hemático. Por eso la guía SEPAR 2022 insiste en no clasificar como exudado un derrame cardiaco solo porque cumpla un criterio de Light.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt:
      'En un derrame que se sospecha cardiaco pero cumple un criterio de Light, ¿qué gradiente apoya el origen trasudado?',
    options: [
      'Gradiente de proteínas suero–pleura superior a 0,5 g/dL',
      'Gradiente de albúmina superior a 0,4 g/dL',
      'NT-proBNP pleural superior a 500 pg/mL',
      'Gradiente de proteínas suero–pleura superior a 2,5 g/dL',
    ],
    correctIndex: 3,
    explanation:
      'Para corregir la reclasificación de trasudados cardiacos, la guía propone un gradiente de proteínas suero–pleura superior a 2,5 g/dL, un gradiente de albúmina superior a 1,2 g/dL o un NT-proBNP pleural superior a 1500 pg/mL. Aproximadamente el 80 % de los trasudados cardiacos mal clasificados cumple alguno de estos tres criterios.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt: 'En el derrame de origen cardiaco, ¿qué rendimiento tiene el NT-proBNP pleural?',
    options: [
      'Sensibilidad del 60 % y especificidad del 55 %',
      'Sensibilidad del 91 % y especificidad del 94 %',
      'Sensibilidad del 94 % y especificidad del 91 %',
      'Sensibilidad del 99 % y especificidad del 99 %',
    ],
    correctIndex: 2,
    explanation:
      'El NT-proBNP pleural tiene una sensibilidad del 94 % y una especificidad del 91 % para el derrame de origen cardiaco. Además, un valor superior a 1500 pg/mL forma parte de los criterios que la guía propone para rescatar trasudados cardiacos mal clasificados por los criterios de Light, junto con los gradientes de proteínas y de albúmina.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt:
      'Si no se dispone de muestra sanguínea, ¿qué parámetros del líquido pleural identifican un exudado?',
    options: [
      'Colesterol pleural superior a 55 mg/dL o LDH superior al 67 % del límite superior normal',
      'Colesterol pleural superior a 15 mg/dL o LDH superior al 30 % del límite superior normal',
      'Colesterol pleural superior a 100 mg/dL o LDH superior al límite superior normal',
      'Solo el pH pleural, con independencia de los demás parámetros',
    ],
    correctIndex: 0,
    explanation:
      'Cuando no hay muestra de sangre, un colesterol pleural superior a 55 mg/dL o una LDH superior al 67 % del límite superior normal identifican exudado con una sensibilidad del 97 %. Es un recurso útil, pero no sustituye al análisis conjunto del líquido y la imagen, que la guía considera imprescindibles para el diagnóstico etiológico.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt:
      'En el hidrotórax hepático, ¿qué cociente es más sensible que el gradiente de albúmina?',
    options: [
      'Cociente de proteínas pleural/sérica inferior a 0,5',
      'Cociente de LDH pleural/sérica superior a 0,6',
      'Cociente de glucosa pleural/sérica inferior a 0,6',
      'Cociente de albúmina pleural/sérica inferior a 0,6',
    ],
    correctIndex: 3,
    explanation:
      'En el hidrotórax hepático, un cociente de albúmina pleural/sérica inferior a 0,6 es más sensible que el gradiente de albúmina. No conviene confundir este cociente con el cociente de LDH superior a 0,6, que es un criterio de Light distinto y no intercambiable, ni con el gradiente de albúmina superior a 1,2 g/dL.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt:
      'En el derrame paraneumónico, ¿qué dato del líquido es el mejor marcador para decidir la colocación de un catéter pleural?',
    options: [
      'El cociente de LDH pleural/sérica',
      'El pH pleural',
      'El colesterol pleural',
      'El NT-proBNP pleural',
    ],
    correctIndex: 1,
    explanation:
      'En el derrame paraneumónico el pH es el mejor marcador para decidir la colocación de un catéter pleural. El drenaje está indicado en todo empiema o derrame complicado definido por un pH inferior a 7,20, tabicación o presencia de microorganismos en el líquido, junto con antibiótico empírico precoz que cubra anaerobios.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt: 'En el derrame pleural maligno, ¿cuál es la opción de primera línea según la guía SEPAR?',
    options: [
      'La pleurodesis con talco en todos los casos',
      'La decorticación quirúrgica',
      'El catéter pleural tunelizado',
      'Repetir la citología pleural más de dos veces',
    ],
    correctIndex: 2,
    explanation:
      'Tanto la pleurodesis con talco como los catéteres pleurales tunelizados controlan los síntomas del derrame maligno, y el catéter es opción de primera línea en la guía SEPAR. La pleurodesis se reserva para cuando no hay pulmón atrapado. Repetir la citología más de dos veces no aumenta el rendimiento diagnóstico.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt: 'En el derrame cardiaco, ¿qué proporción desaparece tras dos semanas de diuréticos?',
    options: ['El 25 %', 'El 50 %', 'El 70 %', 'El 89 %'],
    correctIndex: 3,
    explanation:
      'En el derrame cardiaco, el 89 % de los derrames desaparece tras dos semanas de diuréticos. Si se requieren más de una o dos toracocentesis terapéuticas al mes, se plantea pleurodesis con talco o un catéter pleural tunelizado. La indicación de toracocentesis terapéutica depende también del volumen y de la intensidad de los síntomas.',
    source: { specialty: 'internal-medicine', topic: 'pleural-effusion' },
  },
  {
    prompt: '¿Con qué prueba debe iniciarse el diagnóstico de tuberculosis cuando hay acceso a ella?',
    options: [
      'Con baciloscopia de esputo',
      'Con pruebas moleculares rápidas',
      'Con cultivo de esputo',
      'Con radiografía de tórax aislada',
    ],
    correctIndex: 1,
    explanation:
      'El diagnóstico debe iniciarse con pruebas moleculares rápidas, no con la baciloscopia. La OMS recomienda estas pruebas como prueba inicial en toda persona con signos y síntomas de tuberculosis, incluidas pruebas moleculares y biomarcadores en el punto de atención, capaces de dar un resultado orientativo en 48 horas y de detectar resistencia.',
    source: { specialty: 'internal-medicine', topic: 'tuberculosis' },
  },
  {
    prompt: '¿Qué esquema de cuatro meses recomienda la OMS para la tuberculosis sensible?',
    options: [
      'Rifampicina, isoniazida y etambutol',
      'Rifapentina e isoniazida durante cuatro meses',
      'Rifampicina, isoniazida, pirazinamida y etambutol durante seis meses',
      'Rifapentina, isoniazida, pirazinamida y moxifloxacino',
    ],
    correctIndex: 3,
    explanation:
      'La guía consolidada de la OMS incorporó un esquema de cuatro meses con rifapentina, isoniazida, pirazinamida y moxifloxacino, y otro esquema de cuatro meses para niños con tuberculosis no grave. El esquema estándar de seis meses se mantiene como alternativa, de modo que el tratamiento de la enfermedad sensible a fármacos ya no es sinónimo de seis meses.',
    source: { specialty: 'internal-medicine', topic: 'tuberculosis' },
  },
  {
    prompt: 'En la tuberculosis multirresistente, ¿qué esquema priorizó la OMS desde 2022?',
    options: [
      'Un esquema oral corto de seis meses (BPaLM/BPaL)',
      'Un esquema de cuatro meses con rifapentina, isoniazida, pirazinamida y moxifloxacino',
      'El esquema estándar de seis meses con los cuatro fármacos de primera línea',
      'Un esquema de cuatro meses para niños con tuberculosis no grave',
    ],
    correctIndex: 0,
    explanation:
      'Para la tuberculosis multirresistente, la OMS priorizó desde 2022 un esquema oral corto de seis meses, conocido como BPaLM/BPaL. En 2024 unos 34 000 pacientes iniciaron estos esquemas cortos, frente a 5653 en 2023. La tuberculosis multirresistente y la extremadamente resistente son la principal amenaza de salud pública, con opciones terapéuticas limitadas.',
    source: { specialty: 'internal-medicine', topic: 'tuberculosis' },
  },
  {
    prompt:
      '¿Qué proporción de las personas con infección tuberculosa latente desarrollará enfermedad a lo largo de la vida?',
    options: ['Un 1–2 %', 'Un 25–30 %', 'Un 5–10 %', 'Más del 50 %'],
    correctIndex: 2,
    explanation:
      'Alrededor de una cuarta parte de la población mundial está infectada de forma latente y, de ellas, un 5–10 % desarrollará enfermedad a lo largo de la vida. La infección latente no es contagiosa y no produce síntomas; la enfermedad aparece cuando las bacterias se multiplican y afectan distintos órganos, con síntomas según la localización.',
    source: { specialty: 'internal-medicine', topic: 'tuberculosis' },
  },
  {
    prompt: '¿Cuánto aumenta el riesgo de enfermar de tuberculosis una persona con VIH?',
    options: [
      'Dos veces',
      'Doce veces',
      'Cien veces',
      'No lo aumenta; solo acelera la forma cavitaria',
    ],
    correctIndex: 1,
    explanation:
      'Las personas con VIH tienen 12 veces más riesgo de enfermar de tuberculosis, y la tuberculosis es la principal causa de muerte en ese grupo. Por eso se recomienda cribado en personas con VIH o con contacto domiciliario o laboral con enfermos, y el tratamiento preventivo evita que la infección latente progrese a enfermedad.',
    source: { specialty: 'internal-medicine', topic: 'tuberculosis' },
  },
  {
    prompt:
      '¿Qué forma de tuberculosis tiene mayor carga bacilar y es, por tanto, la más transmisible?',
    options: [
      'La tuberculosis pleural',
      'La tuberculosis meníngea',
      'La tuberculosis renal',
      'La forma cavitaria',
    ],
    correctIndex: 3,
    explanation:
      'La forma cavitaria es la de mayor carga bacilar y, por tanto, la más transmisible, lo que es coherente con la vía aérea de transmisión. La tuberculosis se transmite por vía aérea cuando una persona enferma tose, estornuda o escupe. La infección latente, en cambio, no es contagiosa y no produce síntomas.',
    source: { specialty: 'internal-medicine', topic: 'tuberculosis' },
  },
  {
    prompt:
      '¿Qué protege la vacuna BCG administrada a lactantes y niños pequeños en países de alta carga?',
    options: [
      'Previene muertes por tuberculosis y protege frente a las formas graves infantiles',
      'Elimina la infección latente en todos los vacunados',
      'Sustituye al tratamiento preventivo en el contacto domiciliario',
      'Es el tratamiento de elección de la infección latente',
    ],
    correctIndex: 0,
    explanation:
      'La vacuna BCG, administrada a lactantes y niños pequeños en países con alta carga, previene muertes por tuberculosis y protege frente a las formas graves infantiles. No sustituye al tratamiento preventivo, que evita que la infección latente progrese, ni al cribado en personas con VIH o contacto domiciliario o laboral con enfermos.',
    source: { specialty: 'internal-medicine', topic: 'tuberculosis' },
  },
  {
    prompt: 'Para diagnosticar resistencia en tuberculosis, ¿qué exige la OMS?',
    options: [
      'Un único resultado de baciloscopia',
      'La clínica compatible y una radiografía sugerente',
      'Confirmación bacteriológica y pruebas de resistencia mediante métodos moleculares rápidos o cultivo',
      'La respuesta clínica tras cuatro semanas de tratamiento',
    ],
    correctIndex: 2,
    explanation:
      'El diagnóstico de resistencia exige confirmación bacteriológica y pruebas de resistencia mediante métodos moleculares rápidos o cultivo. No basta la sospecha clínica. En 2024 solo alrededor de 2 de cada 5 personas con tuberculosis resistente accedieron a tratamiento, una brecha relevante porque la multirresistencia es la principal amenaza de salud pública.',
    source: { specialty: 'internal-medicine', topic: 'tuberculosis' },
  },
  {
    prompt: 'En 2024, ¿cuántas personas se estimaron enfermas de tuberculosis en el mundo?',
    options: ['1,07 millones', '2,3 millones', '5,8 millones', '10,7 millones'],
    correctIndex: 3,
    explanation:
      'En 2024 se estimaron 10,7 millones de personas enfermas de tuberculosis: 5,8 millones de hombres, 3,7 millones de mujeres y 1,2 millones de niños, con 1,23 millones de muertes, 150 000 de ellas en personas con VIH. Más del 80 % de los casos y muertes ocurre en países de ingresos bajos y medios.',
    source: { specialty: 'internal-medicine', topic: 'tuberculosis' },
  },
  {
    prompt: '¿Qué variables incluye el CRB65?',
    options: [
      'Confusión, frecuencia respiratoria ≥ 30/min, presión arterial baja y edad ≥ 65 años',
      'Confusión, urea > 7 mmol/L, frecuencia respiratoria ≥ 30/min y edad ≥ 65 años',
      'Confusión, proteína C reactiva elevada, frecuencia respiratoria ≥ 24/min y edad ≥ 65 años',
      'Confusión, saturación < 90 %, presión arterial baja y edad ≥ 65 años',
    ],
    correctIndex: 0,
    explanation:
      'El CRB65 se emplea en atención primaria y combina confusión, frecuencia respiratoria ≥ 30/min, presión arterial baja —diastólica ≤ 60 mmHg o sistólica < 90 mmHg— y edad ≥ 65 años. La urea > 7 mmol/L es la que añade el CURB65 en el hospital. Se recomienda derivar al hospital con 2 o más puntos.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt: 'Con el CRB65, ¿qué puntuación aconseja derivar al hospital?',
    options: ['Solo con 4 puntos', 'Con 1 punto', 'Con 2 o más puntos', 'Con 0 puntos'],
    correctIndex: 2,
    explanation:
      'Con el CRB65 se recomienda derivar al hospital con 2 o más puntos y ofrecer atención primaria con instrucciones de alarma con 0 puntos. El riesgo de muerte a 30 días es inferior al 1 % para 0 puntos, del 1–10 % para 1–2 y superior al 10 % para 3–4. La escala no sustituye al juicio clínico.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt: '¿Qué añade el CURB65 al CRB65?',
    options: [
      'La proteína C reactiva',
      'La urea superior a 7 mmol/L',
      'La saturación de oxígeno',
      'La edad superior a 75 años',
    ],
    correctIndex: 1,
    explanation:
      'El CURB65 es la versión hospitalaria y añade al CRB65 la urea superior a 7 mmol/L. Con 0–1 punto la mortalidad es inferior al 3 %, con 2 puntos del 3–15 % y con 3–5 puntos superior al 15 %; se ingresa a partir de 3 y se valoran cuidados críticos. La proteína C reactiva se considera medir al ingreso, pero no forma parte de la escala.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt:
      '¿En qué plazo debe existir un proceso que permita diagnosticar la neumonía con radiografía de tórax desde la llegada al hospital?',
    options: [
      'En las primeras 24 horas',
      'En las primeras 12 horas',
      'En los primeros 30 minutos',
      'En las primeras 4 horas',
    ],
    correctIndex: 3,
    explanation:
      'Debe existir un proceso que permita el diagnóstico con radiografía de tórax en las primeras 4 horas desde la llegada al hospital. En el mismo plazo debe iniciarse el antibiótico, lo antes posible tras el diagnóstico. La ecografía pulmonar puede usarse para el diagnóstico rápido en un paciente grave y para descartar alternativas como la insuficiencia cardiaca.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt:
      'En el adulto con neumonía comunitaria de baja gravedad, ¿cuál es la primera línea según NICE NG250?',
    options: [
      'Amoxicilina 500 mg cada 8 horas',
      'Levofloxacino 500 mg al día',
      'Amoxicilina-clavulánico 1,2 g intravenoso cada 8 horas',
      'Claritromicina 500 mg cada 12 horas',
    ],
    correctIndex: 0,
    explanation:
      'En el adulto con neumonía comunitaria de baja gravedad, la primera línea es amoxicilina 500 mg cada 8 horas, con doxiciclina o claritromicina como alternativas en alergia a penicilina o sospecha de atípicos. Las fluoroquinolonas no son primera elección por las restricciones de seguridad de la MHRA de 2024.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt: 'En la neumonía comunitaria de gravedad alta, ¿qué pauta propone la guía?',
    options: [
      'Amoxicilina en monoterapia por vía oral',
      'Levofloxacino como primera elección',
      'Amoxicilina-clavulánico asociado a claritromicina',
      'Doxiciclina asociada a un macrólido',
    ],
    correctIndex: 2,
    explanation:
      'En gravedad alta se usa amoxicilina-clavulánico —500/125 mg oral o 1,2 g intravenoso cada 8 horas— asociado a claritromicina. El levofloxacino queda solo como alternativa en alergia a penicilina, recordando las restricciones de la MHRA de 2024 para fluoroquinolonas. En gravedad moderada se asocia un macrólido si se sospechan atípicos.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt: '¿Cuándo se ofrecen pruebas microbiológicas en la neumonía comunitaria?',
    options: [
      'De rutina en todos los pacientes con neumonía leve',
      'Solo si la radiografía muestra derrame pleural',
      'Nunca, porque no cambian el manejo',
      'En gravedad moderada o alta: hemocultivos si hay sospecha de sepsis, cultivo de esputo y antígenos urinarios',
    ],
    correctIndex: 3,
    explanation:
      'No se ofrecen pruebas microbiológicas de rutina en la neumonía comunitaria de baja gravedad, porque no cambian el manejo y sí los costes. En gravedad moderada o alta se valoran hemocultivos si hay sospecha de sepsis, cultivo de esputo, antígeno urinario neumocócico para desescalar y antígeno urinario de Legionella si hay factores de riesgo.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt:
      'En niños de 3 meses a 11 años con neumonía no grave, sin complicaciones ni enfermedad de base, ¿cuánto dura la amoxicilina?',
    options: ['5 días', '3 días', '7 días', '10 días'],
    correctIndex: 1,
    explanation:
      'En niños de 3 meses a 11 años con neumonía no grave, sin complicaciones ni enfermedad de base, la pauta es de 3 días de amoxicilina. Es una duración distinta de la del adulto, que es de 5 días si hay estabilidad clínica. Prolongar el antibiótico sin motivo no aporta beneficio y favorece la resistencia.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt: '¿Para qué puede usarse la ecografía pulmonar en la neumonía, según NICE NG250?',
    options: [
      'Para el diagnóstico rápido en un paciente grave, descartar insuficiencia cardiaca e investigar complicaciones pleurales',
      'Para sustituir a la radiografía de tórax en todos los pacientes',
      'Para decidir la duración del antibiótico',
      'Para identificar la resistencia a los antibióticos',
    ],
    correctIndex: 0,
    explanation:
      'La ecografía pulmonar puede usarse para el diagnóstico rápido en un paciente grave, para descartar alternativas como la insuficiencia cardiaca y para investigar complicaciones como la enfermedad pleural. No sustituye a la radiografía en todos los casos ni informa de resistencias: para eso están la microbiología y las pruebas de resistencia.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt: '¿Cuándo no se recomienda dar el alta hospitalaria en la neumonía?',
    options: [
      'Cuando la temperatura es inferior a 37,5 °C',
      'Cuando la saturación es del 95 %',
      'Cuando en las 24 horas previas hay dos o más signos de inestabilidad',
      'Cuando el paciente come sin ayuda',
    ],
    correctIndex: 2,
    explanation:
      'No se recomienda el alta si en las 24 horas previas hay dos o más signos de inestabilidad: temperatura > 37,5 °C, frecuencia respiratoria ≥ 24/min, frecuencia cardiaca > 100/min, presión sistólica ≤ 90 mmHg, saturación < 90 %, alteración del estado mental o incapacidad para comer sin ayuda. En quienes mejoran pero requieren seguimiento se valora el alta precoz.',
    source: { specialty: 'internal-medicine', topic: 'pneumonia' },
  },
  {
    prompt: '¿Qué dos ejes definen el patrón respiratorio en la espirometría?',
    options: [
      'El VEF1 y la saturación de oxígeno',
      'El cociente VEF1/FVC y la capacidad pulmonar total o la FVC',
      'La difusión y la presión arterial de oxígeno',
      'La prueba de reversibilidad y la radiografía de tórax',
    ],
    correctIndex: 1,
    explanation:
      'El patrón se define por dos ejes: el cociente VEF1/FVC, que indica obstrucción cuando está reducido, y la capacidad pulmonar total o la FVC, que indican restricción cuando están reducidas. La espirometría por sí sola no distingue la restricción verdadera de la seudorrestricción por atrapamiento aéreo o mala técnica.',
    source: { specialty: 'internal-medicine', topic: 'respiratory-patterns' },
  },
  {
    prompt: '¿Qué combinación caracteriza el patrón obstructivo?',
    options: [
      'Cociente VEF1/FVC normal con FVC disminuida y capacidad pulmonar total disminuida',
      'Cociente VEF1/FVC disminuido con capacidad pulmonar total siempre disminuida',
      'Cociente VEF1/FVC aumentado con FVC normal',
      'Cociente VEF1/FVC disminuido con FVC disminuida o normal y capacidad pulmonar total normal o aumentada',
    ],
    correctIndex: 3,
    explanation:
      'El patrón obstructivo se caracteriza por un cociente VEF1/FVC disminuido, con FVC disminuida o normal y capacidad pulmonar total normal o aumentada. El patrón restrictivo, en cambio, tiene un cociente normal o aumentado con FVC y capacidad pulmonar total disminuidas. Confundir ambos lleva a etiquetar de restrictiva una obstrucción con atrapamiento.',
    source: { specialty: 'internal-medicine', topic: 'respiratory-patterns' },
  },
  {
    prompt:
      'En el patrón restrictivo, ¿cómo están el cociente VEF1/FVC y la capacidad pulmonar total?',
    options: [
      'Cociente normal o aumentado y capacidad pulmonar total disminuida',
      'Cociente disminuido y capacidad pulmonar total aumentada',
      'Cociente disminuido y capacidad pulmonar total normal',
      'Cociente normal y capacidad pulmonar total aumentada',
    ],
    correctIndex: 0,
    explanation:
      'En la restricción el cociente puede ser normal o incluso elevado mientras la FVC y la capacidad pulmonar total están reducidas. Por eso no hay que confundir «cociente normal» con «función normal». Un patrón restrictivo obliga a completar el estudio con volúmenes pulmonares y difusión para descartar seudorrestricción.',
    source: { specialty: 'internal-medicine', topic: 'respiratory-patterns' },
  },
  {
    prompt: '¿Qué combinación define el patrón mixto?',
    options: [
      'Cociente disminuido con capacidad pulmonar total siempre disminuida',
      'Cociente normal con FVC disminuida',
      'Cociente disminuido con capacidad pulmonar total disminuida, normal o aumentada',
      'Cociente aumentado con capacidad pulmonar total aumentada',
    ],
    correctIndex: 2,
    explanation:
      'El patrón mixto se define por un cociente disminuido con capacidad pulmonar total disminuida, normal o aumentada. No exige que la capacidad pulmonar total esté disminuida, a diferencia de lo que sugiere el material base. Por eso no se debe etiquetar de mixto a todo paciente con cociente bajo y FVC baja sin medir la capacidad pulmonar total.',
    source: { specialty: 'internal-medicine', topic: 'respiratory-patterns' },
  },
  {
    prompt: '¿Cómo se confirma la obstrucción según NICE NG115?',
    options: [
      'Con una espirometría prebroncodilatadora y un cociente inferior a 0,7',
      'Con una espirometría posbroncodilatadora y un cociente VEF1/FVC inferior a 0,7',
      'Con una prueba de reversibilidad positiva',
      'Con una capacidad pulmonar total disminuida',
    ],
    correctIndex: 1,
    explanation:
      'La guía NG115 confirma la obstrucción con espirometría posbroncodilatadora y un cociente VEF1/FVC inferior a 0,7. No se diagnostica con una espirometría prebroncodilatadora aislada. Además, un cociente inferior a 0,7 en una persona mayor sin síntomas típicos obliga a pensar en diagnósticos alternativos, y uno superior no descarta EPOC en jóvenes sintomáticos.',
    source: { specialty: 'internal-medicine', topic: 'respiratory-patterns' },
  },
  {
    prompt:
      'Con un VEF1 posbroncodilatador del 40 % del predicho, ¿qué grado de obstrucción corresponde?',
    options: ['Leve', 'Moderada', 'Muy grave', 'Grave'],
    correctIndex: 3,
    explanation:
      'La gravedad se gradúa por el VEF1 posbroncodilatador: ≥ 80 % del predicho es leve, 50–79 % moderada, 30–49 % grave y < 30 % muy grave. Un 40 % corresponde, por tanto, a obstrucción grave. Los valores de referencia recomendados son los GLI 2012, con la advertencia de que no son aplicables a todos los grupos étnicos.',
    source: { specialty: 'internal-medicine', topic: 'respiratory-patterns' },
  },
  {
    prompt:
      '¿Qué umbral de cambio en el VEF1 considera relevante la guía en la prueba de reversibilidad?',
    options: ['Superior a 400 mL', 'Superior a 100 mL', 'Superior a 200 mL', 'Superior a 1 litro'],
    correctIndex: 0,
    explanation:
      'La prueba de reversibilidad broncodilatadora no se considera rutinaria para el diagnóstico ni para planificar el tratamiento inicial, porque los cambios pueden ser fluctuantes y poco reproducibles y la respuesta aguda no predice la respuesta al tratamiento crónico. Un cambio superior a 400 mL en el VEF1 es el umbral que la guía considera relevante.',
    source: { specialty: 'internal-medicine', topic: 'respiratory-patterns' },
  },
  {
    prompt: 'Ante un patrón restrictivo en la espirometría, ¿qué estudio completa la evaluación?',
    options: [
      'Repetir la espirometría prebroncodilatadora',
      'Una prueba de reversibilidad broncodilatadora',
      'Volúmenes pulmonares con capacidad pulmonar total y difusión',
      'Una radiografía de tórax aislada',
    ],
    correctIndex: 2,
    explanation:
      'Un patrón restrictivo obliga a completar el estudio con volúmenes pulmonares —capacidad pulmonar total— y difusión, porque la espirometría por sí sola no distingue la restricción verdadera de la seudorrestricción por atrapamiento aéreo o por mala técnica. La prevención de errores pasa además por el control de calidad del procedimiento y personal entrenado.',
    source: { specialty: 'internal-medicine', topic: 'respiratory-patterns' },
  },
]

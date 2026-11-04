import type { QuizQuestion } from '@/lib/content'

/** Infectología (Medicina Interna). */
export const questions: QuizQuestion[] = [
  {
    prompt: '¿Cuál es hoy la principal vía de transmisión de la enfermedad de Chagas a escala mundial?',
    options: [
      'La vectorial domiciliaria, por las deyecciones del triatomino',
      'La transfusional, por donantes infectados',
      'La congénita, con más de 10 000 casos nuevos al año',
      'La oral, por alimentos y bebidas contaminados',
    ],
    correctIndex: 2,
    explanation:
      'La transmisión congénita se ha convertido en la principal vía a escala mundial, con más de 10 000 casos nuevos al año, por delante de la vectorial y de la transfusional. El control del vector sigue siendo clave en las zonas endémicas, pero la movilidad poblacional ha llevado casos a 44 países y ha desplazado el peso de la transmisión hacia la gestación.',
    source: { specialty: 'internal-medicine', topic: 'chagas-disease' },
  },
  {
    prompt: 'En la fase crónica del Chagas, ¿qué se necesita para confirmar la infección?',
    options: [
      'Una única ELISA positiva es suficiente',
      'Dos pruebas serológicas diferentes, como ELISA, inmunofluorescencia o hemaglutinación',
      'Un examen en fresco de sangre periférica',
      'Una PCR cuantitativa en sangre seca',
    ],
    correctIndex: 1,
    explanation:
      'En la fase crónica la parasitemia es baja y el diagnóstico es serológico: hacen falta al menos dos pruebas diferentes —ELISA, inmunofluorescencia indirecta o hemaglutinación indirecta— que detecten anticuerpos específicos. Una sola prueba positiva no confirma la infección, y el examen directo o la PCR no sustituyen a la serología en esta fase.',
    source: { specialty: 'internal-medicine', topic: 'chagas-disease' },
  },
  {
    prompt: '¿Qué secuencia electrocardiográfica es típica de la cardiopatía chagásica inicial?',
    options: [
      'Bloqueo de rama izquierda aislado',
      'Elevación del ST en cara inferior',
      'Bloqueo auriculoventricular completo desde el inicio',
      'Bloqueo de rama derecha con hemibloqueo anterior izquierdo',
    ],
    correctIndex: 3,
    explanation:
      'La cardiopatía chagásica comienza con alteraciones de conducción, y la secuencia típica es el bloqueo de rama derecha con hemibloqueo anterior izquierdo. En un paciente joven de área endémica ese patrón obliga a descartar la enfermedad. Años después puede evolucionar a miocardiopatía dilatada, con aneurisma apical y trombo en la pared.',
    source: { specialty: 'internal-medicine', topic: 'chagas-disease' },
  },
  {
    prompt: '¿Qué es el signo de Romaña?',
    options: [
      'Edema bipalpebral unilateral con adenopatía satélite, en cerca del 2 % de los casos agudos sintomáticos',
      'Un nódulo subcutáneo con adenitis regional en el punto de inoculación',
      'Un megaesófago detectable ya en la fase aguda',
      'Un exantema generalizado con afectación palmoplantar',
    ],
    correctIndex: 0,
    explanation:
      'El signo de Romaña es un edema bipalpebral unilateral con adenopatía satélite y aparece en cerca del 2 % de los casos agudos sintomáticos. No debe confundirse con el chagoma de inoculación, que es un nódulo subcutáneo con adenitis regional en el punto de entrada. La mayoría de los agudos, en cambio, cursa sin síntomas o con manifestaciones leves.',
    source: { specialty: 'internal-medicine', topic: 'chagas-disease' },
  },
  {
    prompt: '¿Qué proporción de infectados por Trypanosoma cruzi permanece asintomática toda la vida?',
    options: [
      'Entre el 20 % y el 30 %',
      'Entre el 70 % y el 80 %',
      'Menos del 10 %',
      'Alrededor del 50 %',
    ],
    correctIndex: 1,
    explanation:
      'Entre el 70 % y el 80 % de los infectados permanece asintomático toda la vida, mientras que entre el 20 % y el 30 % evoluciona a formas crónicas sintomáticas. Alrededor del 30 % desarrolla daño cardiaco y menos del 10 % dilatación de esófago o colon. Esa larga latencia explica que la infección pueda pasar desapercibida durante décadas.',
    source: { specialty: 'internal-medicine', topic: 'chagas-disease' },
  },
  {
    prompt: '¿Qué moléculas están disponibles para el tratamiento antiparasitario del Chagas?',
    options: [
      'Albendazol y prazicuantel',
      'Benznidazol y nifurtimox',
      'Miltefosina y anfotericina B',
      'Ivermectina y doxiciclina',
    ],
    correctIndex: 1,
    explanation:
      'Las dos únicas moléculas disponibles son benznidazol y nifurtimox. Ambas matan el parásito y son plenamente eficaces en la fase aguda, incluida la transmisión congénita, pero su eficacia disminuye cuanto más tiempo lleva la persona infectada y las reacciones adversas son más frecuentes y graves con la edad.',
    source: { specialty: 'internal-medicine', topic: 'chagas-disease' },
  },
  {
    prompt: 'Según el CDC, ¿qué pauta de benznidazol corresponde a un niño de 2 a 12 años?',
    options: [
      '5–8 mg/kg/día en dos tomas durante 60 días',
      '10–20 mg/kg/día en tres tomas durante 30 días',
      '5–8 mg/kg/día en una toma durante 90 días',
      '2,5 mg/kg/día en dos tomas durante 30 días',
    ],
    correctIndex: 0,
    explanation:
      'El CDC fija para el benznidazol en niños de 2 a 12 años una pauta de 5–8 mg/kg/día por vía oral en dos tomas durante 60 días. El nifurtimox se dosifica aparte: 8–10 mg/kg/día en tres tomas durante 60 días si el peso es igual o superior a 41 kg, y 10–20 mg/kg/día si es inferior.',
    source: { specialty: 'internal-medicine', topic: 'chagas-disease' },
  },
  {
    prompt: 'En un paciente con cardiopatía dilatada y megaesófago chagásicos ya establecidos, ¿qué cabe esperar del antiparasitario?',
    options: [
      'No revierte la cardiopatía dilatada ni el megaesófago establecidos',
      'Revierte la dilatación cardiaca si se administra más de 60 días',
      'Revierte el megaesófago, pero no la cardiopatía',
      'Solo es útil cuando ya hay insuficiencia cardiaca avanzada',
    ],
    correctIndex: 0,
    explanation:
      'El tratamiento etiológico no revierte la cardiopatía dilatada ni el megaesófago ya establecidos, por lo que el seguimiento y el tratamiento sintomático son de por vida. Sí está indicado en la fase crónica reciente y en grupos bien definidos, pero no debe prometerse la desaparición del daño estructural.',
    source: { specialty: 'internal-medicine', topic: 'chagas-disease' },
  },
  {
    prompt: 'Una gestante con infección por Trypanosoma cruzi confirmada, ¿qué conducta corresponde?',
    options: [
      'Iniciar benznidazol ajustando la dosis al peso',
      'Tratarla con nifurtimox durante el primer trimestre',
      'Diferir el tratamiento antiparasitario y tratar después del embarazo',
      'Suspender el cribado del recién nacido porque la madre ya está diagnosticada',
    ],
    correctIndex: 2,
    explanation:
      'El tratamiento antiparasitario está contraindicado en el embarazo, también según el CDC durante la lactancia. En la gestante se difiere y se administra después del embarazo; el cribado de la gestante sirve para detectar al recién nacido y estudiarlo, junto con los hermanos.',
    source: { specialty: 'internal-medicine', topic: 'chagas-disease' },
  },
  {
    prompt: 'Mientras no se descarte el dengue, ¿cuál es el antipirético y analgésico de elección?',
    options: ['Ibuprofeno', 'Ácido acetilsalicílico', 'Naproxeno', 'Paracetamol'],
    correctIndex: 3,
    explanation:
      'El paracetamol es el antipirético y analgésico de elección mientras no se descarte el dengue. No hay antiviral específico para ninguna de las tres arbovirosis y el manejo es sintomático, con reposo e hidratación abundante. Los AINE y el ácido acetilsalicílico se evitan hasta tener la certeza de que no se trata de un dengue.',
    source: { specialty: 'internal-medicine', topic: 'arbovirus-infections' },
  },
  {
    prompt: 'En el dengue, ¿cuándo aparece la fase crítica y qué significa el descenso de la fiebre?',
    options: [
      'Alrededor de los días 3 a 7 desde el primer signo; el descenso de la fiebre no indica recuperación',
      'Después del décimo día; el descenso de la fiebre confirma la mejoría',
      'En las primeras 24 horas; la fiebre alta es el único signo de alarma',
      'Solo cuando aparece sangrado digestivo; antes no hay fase crítica',
    ],
    correctIndex: 0,
    explanation:
      'La fase crítica del dengue aparece alrededor de los días 3 a 7 desde el primer signo, coincidiendo con la defervescencia. El descenso de la temperatura no debe interpretarse como recuperación: es el momento en que pueden surgir dolor abdominal intenso, vómitos persistentes, sangrado, respiración rápida o piel pálida y fría.',
    source: { specialty: 'internal-medicine', topic: 'arbovirus-infections' },
  },
  {
    prompt: '¿Por qué se evitan los antiinflamatorios no esteroideos y el ácido acetilsalicílico en el dengue?',
    options: [
      'Porque aumentan el riesgo de sangrado',
      'Porque no son eficaces para el dolor',
      'Porque interfieren con la serología del dengue',
      'Porque retrasan la desaparición de la fiebre',
    ],
    correctIndex: 0,
    explanation:
      'Los antiinflamatorios no esteroideos y el ácido acetilsalicílico aumentan el riesgo de sangrado, por eso deben evitarse mientras no se descarte el dengue. En el chikungunya el paracetamol se mantiene hasta que se descarte el dengue, y en el Zika, si no puede descartarse, el paciente se maneja como si tuviera dengue.',
    source: { specialty: 'internal-medicine', topic: 'arbovirus-infections' },
  },
  {
    prompt: '¿Qué relación tiene una segunda infección por dengue con el riesgo de forma grave?',
    options: [
      'Una segunda infección por el mismo serotipo protege frente al dengue grave',
      'Una segunda infección por un serotipo distinto aumenta el riesgo de dengue grave',
      'El riesgo es igual en la primera y en la segunda infección',
      'Solo la primera infección puede ser grave',
    ],
    correctIndex: 1,
    explanation:
      'El dengue lo causa el virus DENV, con cuatro serotipos (DEN-1 a DEN-4), y una segunda infección por un serotipo distinto aumenta el riesgo de dengue grave. La fisiopatología de esa forma grave es una extravasación plasmática que puede llevar a choque y acumulación de líquido con dificultad respiratoria.',
    source: { specialty: 'internal-medicine', topic: 'arbovirus-infections' },
  },
  {
    prompt: 'Una IgM positiva para Zika en un paciente con síntomas compatibles, ¿qué valor tiene?',
    options: [
      'Confirma el diagnóstico sin necesidad de más pruebas',
      'Descarta el dengue por definición',
      'No es diagnóstica por sí sola: hay reacción cruzada con otros flavivirus y requiere confirmación',
      'Solo es válida si se repite a los seis meses',
    ],
    correctIndex: 2,
    explanation:
      'El Zika es un flavivirus con reacción cruzada serológica frente a otros flavivirus como el dengue, lo que condiciona la interpretación de las IgM. Por eso una IgM positiva no es diagnóstica por sí sola y requiere confirmación, que puede hacerse con RT-PCR para ARN viral o con detección de IgM diferenciada de flavivirus relacionados.',
    source: { specialty: 'internal-medicine', topic: 'arbovirus-infections' },
  },
  {
    prompt: '¿Qué combinación clínica orienta a chikungunya?',
    options: [
      'Fiebre de inicio brusco con artralgia intensa, a menudo incapacitante',
      'Fiebre con exantema, conjuntivitis y malestar general',
      'Fiebre alta con dolor retroorbitario y adenopatías',
      'Artralgia crónica sin fiebre en un paciente mayor',
    ],
    correctIndex: 0,
    explanation:
      'El chikungunya se manifiesta típicamente 4–8 días después de la picadura, con fiebre de inicio abrupto y artralgia intensa, con frecuencia incapacitante, acompañada de hinchazón articular, mialgias, cefalea, náuseas, fatiga y exantema. Esa artralgia intensa con fiebre brusca es el rasgo que más orienta frente a dengue y Zika.',
    source: { specialty: 'internal-medicine', topic: 'arbovirus-infections' },
  },
  {
    prompt: '¿Hasta cuándo es útil la prueba directa, como la RT-PCR o la antigenemia, en las arbovirosis?',
    options: [
      'Durante los primeros seis meses',
      'Solo en la primera semana de enfermedad; después se pasa a la serología',
      'Únicamente después de que aparezca la IgM',
      'En cualquier momento, porque sustituye a la serología',
    ],
    correctIndex: 1,
    explanation:
      'En la primera semana de enfermedad se usan métodos de detección directa —aislamiento viral, detección molecular de ácido nucleico o antigenemia—, y después se recurre a la serología. La prueba directa solo es útil en esa primera semana; más tarde hay que pasar a la detección de anticuerpos.',
    source: { specialty: 'internal-medicine', topic: 'arbovirus-infections' },
  },
  {
    prompt: 'Sobre la vacuna QDenga (TAK-003) frente al dengue, ¿qué indica el apunte?',
    options: [
      'Una sola dosis a partir de los 2 años',
      'Dos dosis separadas tres meses, recomendada en niños de 6 a 16 años en alta transmisión',
      'Tres dosis separadas seis meses en adultos mayores de 60 años',
      'No está autorizada en ningún país',
    ],
    correctIndex: 1,
    explanation:
      'La vacuna QDenga (TAK-003) se administra en dos dosis separadas tres meses. La OMS la recomienda en niños de 6 a 16 años en entornos de alta transmisión y no la recomienda de forma programática por debajo de los 6 años. Frente al chikungunya hay dos vacunas con autorización regulatoria en varios países, todavía sin uso extendido, y no hay vacuna frente al Zika.',
    source: { specialty: 'internal-medicine', topic: 'arbovirus-infections' },
  },
  {
    prompt: '¿Qué proporción de niños nacidos de mujeres infectadas por Zika durante la gestación presenta complicaciones relacionadas?',
    options: [
      'Menos del 1 %',
      'Alrededor del 30 %',
      'Entre el 5 % y el 15 %',
      'Entre el 40 % y el 50 %',
    ],
    correctIndex: 2,
    explanation:
      'La infección por Zika en el embarazo causa el síndrome congénito del Zika, con microcefalia, contracturas de miembros, hipertonía, alteraciones oculares y pérdida auditiva. Se estima que entre el 5 % y el 15 % de los niños nacidos de mujeres infectadas durante la gestación presenta complicaciones relacionadas. El Zika también se asocia a síndrome de Guillain-Barré, neuropatía y mielitis.',
    source: { specialty: 'internal-medicine', topic: 'arbovirus-infections' },
  },
]

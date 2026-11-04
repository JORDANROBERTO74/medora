import type { QuizQuestion } from '@/lib/content'

/** Endocrinología. */
export const questions: QuizQuestion[] = [
  {
    prompt: '¿Qué actitud corresponde ante una úlcera de pie diabético según la guía NICE NG19?',
    options: [
      'Graduarla con la escala de Wagner, que es la recomendada para valorar la gravedad',
      'Documentarla con SINBAD o con la clasificación de la Universidad de Texas',
      'Clasificarla solo por su profundidad, que es el mejor indicador pronóstico',
      'Esperar a que aparezca fiebre para valorar la gravedad',
    ],
    correctIndex: 1,
    explanation:
      'La guía NICE NG19 señala que la escala de Wagner no debe emplearse para valorar la gravedad de una úlcera diabética, aunque siga apareciendo en material docente. En su lugar propone documentarla con SINBAD o con la clasificación de la Universidad de Texas. El marco del IWGDF separa además tres ejes —úlcera, infección y perfusión—, de modo que la conducta depende de la infección, la isquemia y la descarga, no del grado.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: '¿Con qué instrumento valora el IWGDF la perfusión en el pie diabético?',
    options: ['WIfI', 'SINBAD', 'El sistema IWGDF/IDSA', 'La clasificación de la Universidad de Texas'],
    correctIndex: 0,
    explanation:
      'El IWGDF reparte la valoración en tres ejes independientes: la úlcera se clasifica con SINBAD, la infección con el sistema IWGDF/IDSA y la perfusión con WIfI. Wagner mezclaba esos aspectos en una sola escala ordinal, y por eso se desaconseja. Separarlos permite decidir si hay que tratar una infección, revascularizar o mejorar la descarga.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt:
      'Una persona con diabetes presenta un pie rojo, caliente e hinchado, sin dolor ni deformidad. ¿Qué hay que sospechar?',
    options: [
      'Una infección leve de partes blandas',
      'Una úlcera neuropática en fase de cicatrización',
      'Una neuro-osteoartropatía de Charcot activa',
      'Una arteriopatía periférica descompensada',
    ],
    correctIndex: 2,
    explanation:
      'Un pie rojo, caliente e hinchado en una persona con diabetes obliga a considerar una neuro-osteoartropatía de Charcot activa, incluso sin dolor ni deformidad, porque la neuropatía puede silenciar el cuadro. La infección también cursa con inflamación local, pero sus signos sistémicos suelen faltar en las formas leves y moderadas.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: '¿Cómo se diagnostica la infección de una úlcera de pie diabético?',
    options: [
      'Con un solo signo inflamatorio local, aunque sea leve',
      'Solo cuando hay fiebre o leucocitosis',
      'Mediante un hisopo superficial de la úlcera',
      'Con al menos dos signos o síntomas de inflamación, o con secreción purulenta',
    ],
    correctIndex: 3,
    explanation:
      'La infección se establece por al menos dos signos o síntomas de inflamación —enrojecimiento, calor, induración, dolor o dolor a la palpación— o por secreción purulenta. La neuropatía y la isquemia atenúan esos signos, y la fiebre o la leucocitosis suelen estar ausentes en infecciones leves y moderadas, por lo que no sirven para descartarlas.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: 'Según NICE, ¿qué extensión de eritema define una infección leve del pie diabético?',
    options: [
      'Menos de 0,5 cm',
      'De 0,5 a menos de 2 cm',
      'Más de 2 cm',
      'Cualquier extensión con afectación de estructuras profundas',
    ],
    correctIndex: 1,
    explanation:
      'NICE estratifica la infección por la extensión del eritema: leve cuando mide de 0,5 a menos de 2 cm, moderada cuando supera los 2 cm o afecta a estructuras profundas, y grave cuando hay respuesta inflamatoria sistémica. El sistema IWGDF/IDSA, en cambio, gradúa la infección como leve, moderada o grave sin usar esa medida.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: '¿Por qué hay que interpretar con cautela el índice tobillo-brazo en el pie diabético?',
    options: [
      'Porque solo es fiable cuando la úlcera duele',
      'Porque no detecta la isquemia de localización distal',
      'Porque las arterias calcificadas pueden elevarlo falsamente',
      'Porque la neuropatía lo reduce siempre por debajo de 0,9',
    ],
    correctIndex: 2,
    explanation:
      'El índice tobillo-brazo puede resultar falsamente elevado cuando las arterias están calcificadas, un hallazgo frecuente en la diabetes de larga evolución. Por eso NICE pide interpretarlo con cautela y combinarlo con los pulsos, las ondas Doppler, la presión en tobillo y en dedo, y el índice dedo-brazo.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: '¿Qué hay que recordar sobre la osteomielitis del pie diabético?',
    options: [
      'Que solo aparece cuando la úlcera expone el hueso',
      'Que siempre eleva la PCR y la VSG desde el primer día',
      'Que la radiografía la confirma en todos los casos',
      'Que puede existir con marcadores inflamatorios, radiografía y prueba de sonda normales',
    ],
    correctIndex: 3,
    explanation:
      'La osteomielitis puede cursar con marcadores inflamatorios, radiografía y prueba de sonda normales, de modo que unas pruebas iniciales correctas no la excluyen. Cuando hay duda se confirma con resonancia magnética. La prueba de la sonda hasta el hueso positiva junto con alteraciones radiográficas apoya el diagnóstico.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt:
      'En una úlcera plantar neuropática, no isquémica y no infectada, ¿qué descarga considera preferente el IWGDF?',
    options: [
      'Un dispositivo no removible hasta la rodilla, como el yeso de contacto total o un walker fijado',
      'Un dispositivo removible sin instrucciones de adherencia',
      'Una plantilla de descarga dentro del calzado habitual',
      'Reposo en cama hasta la cicatrización completa',
    ],
    correctIndex: 0,
    explanation:
      'El IWGDF considera preferente un dispositivo no removible hasta la rodilla, como el yeso de contacto total o un walker fijado por el profesional. Solo si está contraindicado o no se tolera se recurre a un dispositivo removible, informando sobre la adherencia. NICE reserva el enyesado para úlceras plantares neuropáticas, no isquémicas y no infectadas.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: '¿Qué hallazgo obliga a considerar imagen vascular urgente y revascularización?',
    options: [
      'Una presión en dedo de 45 mmHg',
      'Una presión en tobillo menor de 50 mmHg o un índice tobillo-brazo menor de 0,4',
      'Una presión transcutánea de oxígeno de 40 mmHg',
      'Una úlcera que no cicatriza en 48 horas',
    ],
    correctIndex: 1,
    explanation:
      'Se considera imagen vascular urgente, con visualización de arterias distales y revascularización, cuando la presión en tobillo es menor de 50 mmHg o el índice tobillo-brazo menor de 0,4. También se valora si la presión en dedo es menor de 30 mmHg o la presión transcutánea de oxígeno menor de 25 mmHg.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: 'Ante una úlcera de pie diabético infectada, ¿qué muestra se prefiere para el cultivo?',
    options: [
      'Un hisopo de la superficie de la úlcera',
      'Un hisopo del exudado purulento',
      'Tejido obtenido por curettage o biopsia',
      'Una muestra de sangre periférica',
    ],
    correctIndex: 2,
    explanation:
      'La infección exige muestras de tejido obtenidas por curettage o biopsia, y debe evitarse el hisopado, que recoge flora superficial y resulta menos fiable. Con la muestra se ajusta el antibiótico empírico: oral frente a Staphylococcus aureus y estreptococos betahemolíticos en la infección leve, y parenteral de amplio espectro en la moderada o grave.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: 'En la infección de partes blandas del pie diabético, ¿cuánto dura habitualmente el antibiótico?',
    options: [
      'De 3 a 5 días',
      'De 4 a 6 semanas',
      'Hasta que la radiografía se normalice',
      'De 1 a 2 semanas',
    ],
    correctIndex: 3,
    explanation:
      'En la infección de partes blandas la duración habitual del antibiótico es de 1 a 2 semanas, y puede prolongarse en las infecciones de lenta resolución o con arteriopatía grave. NICE fija un mínimo de 7 días y hasta 6 semanas en la osteomielitis, con antibiótico oral para los tratamientos prolongados.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: '¿Qué conducta está desaconsejada en una úlcera no infectada con signos de isquemia grave?',
    options: [
      'Desbridar la úlcera',
      'Valorar la revascularización',
      'Aliviar la presión con una descarga adecuada',
      'Documentar la lesión con SINBAD',
    ],
    correctIndex: 0,
    explanation:
      'Desbridar una úlcera no infectada con signos de isquemia grave puede agravar el daño tisular, por eso figura entre los errores frecuentes. En ese contexto la prioridad es valorar la perfusión y la revascularización, además de aliviar la presión. Los tratamientos farmacológicos para mejorar la perfusión no han demostrado beneficio.',
    source: { specialty: 'internal-medicine', topic: 'diabetic-foot' },
  },
  {
    prompt: '¿Cuál es el régimen de insulina de elección en el adulto con diabetes tipo 1?',
    options: [
      'Dos dosis diarias de insulina premezclada',
      'Solo insulina basal, con rescates ocasionales',
      'Basal-bolus en múltiples inyecciones diarias',
      'Solo bolos antes de las comidas, sin insulina basal',
    ],
    correctIndex: 2,
    explanation:
      'En el adulto con diabetes tipo 1 el régimen de elección es el basal-bolus en múltiples inyecciones diarias, y al diagnóstico no deben ofrecerse regímenes no basal-bolus —dos dosis de mezcla, solo basal o solo bolos—. Se añade monitorización continua de glucosa, en tiempo real o intermitente, con elección compartida del dispositivo.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
  {
    prompt: 'Al iniciar insulina basal en la diabetes tipo 2, ¿qué se hace con el resto del tratamiento?',
    options: [
      'Mantener la metformina y suspender los demás fármacos usados solo para la glucemia',
      'Suspender también la metformina para evitar hipoglucemias',
      'Mantener todos los antidiabéticos sin cambios',
      'Sustituir la metformina por un agonista del receptor de GLP-1',
    ],
    correctIndex: 0,
    explanation:
      'Al iniciar insulina basal en la diabetes tipo 2 se mantiene la metformina, se suspenden los demás fármacos usados solo para la glucemia y se comentan con la persona los riesgos y beneficios de continuar los que aportan beneficio cardiovascular o de peso. La insulina basal se ofrece una o dos veces al día como tratamiento inicial.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
  {
    prompt:
      '¿A partir de qué HbA1c considera NICE combinar insulina basal con insulina corta o rápida en la diabetes tipo 2?',
    options: ['53 mmol/mol (7,0 %) o más', '75 mmol/mol (9,0 %) o más', '64 mmol/mol (8,0 %) o más', '86 mmol/mol (10,0 %) o más'],
    correctIndex: 1,
    explanation:
      'NICE considera que, si la HbA1c es de 75 mmol/mol (9,0 %) o superior, puede combinarse insulina basal con insulina corta o rápida, en inyecciones separadas o como preparación premezclada. Ese nivel de HbA1c es el criterio operativo que maneja la guía para iniciar insulina en la diabetes tipo 2.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
  {
    prompt: '¿Dónde se absorbe más rápido la insulina inyectada?',
    options: ['En el muslo', 'En el glúteo', 'En el brazo', 'En el abdomen'],
    correctIndex: 3,
    explanation:
      'La insulina actúa más rápido inyectada en el abdomen; muslo, glúteo y brazo la absorben más lentamente. Además hay que rotar el punto de inyección, porque repetirlo endurece el tejido y dificulta las administraciones siguientes. Algunas personas necesitan de 2 a 4 inyecciones al día y otras una sola.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
  {
    prompt: '¿Qué relación tienen los agonistas del receptor de GLP-1 con la insulina?',
    options: [
      'No son sustitutos de la insulina',
      'Sustituyen a la insulina en la diabetes tipo 1',
      'Solo se emplean cuando la insulina ya ha fallado',
      'Se combinan siempre con insulina basal a dosis fija',
    ],
    correctIndex: 0,
    explanation:
      'Los agonistas del receptor de GLP-1 no son sustitutos de la insulina. Las incretinas, GIP y GLP-1, amplifican la secreción de insulina tras la ingesta y son degradadas por la DPP-4, lo que explica el interés de inhibir esa enzima, pero ese efecto no reemplaza la hormona cuando el páncreas no la produce.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
  {
    prompt: '¿Cuál es el objetivo de HbA1c en el adulto con diabetes tipo 1?',
    options: ['58 mmol/mol (7,5 %) o menos', '48 mmol/mol (6,5 %) o menos', '53 mmol/mol (7,0 %) o menos', '64 mmol/mol (8,0 %) o menos'],
    correctIndex: 1,
    explanation:
      'En la diabetes tipo 1 el objetivo de HbA1c es de 48 mmol/mol (6,5 %) o menos, con glucemia en plasma de 5 a 7 mmol/L en ayunas al despertar, 4 a 7 mmol/L antes de las comidas y 5 a 9 mmol/L a los 90 minutos de comer. NICE exige que la meta no se persiga a costa de hipoglucemia problemática.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
  {
    prompt: 'En el adulto con sospecha de diabetes tipo 1, ¿qué recomienda NICE al diagnóstico?',
    options: [
      'Medir la C-peptidemia de rutina para confirmar el tipo',
      'No medir autoanticuerpos y basarse solo en la edad y el IMC',
      'Medir autoanticuerpos específicos y no medir C-peptidemia de rutina',
      'Repetir la glucemia en ayunas cada tres meses',
    ],
    correctIndex: 2,
    explanation:
      'NICE recomienda medir autoanticuerpos específicos de diabetes al diagnóstico en el adulto y no medir C-peptidemia de rutina para confirmarlo. Si los autoanticuerpos son negativos y la clasificación sigue siendo incierta, puede considerarse C-peptidemia sin ayuno con glucemia pareada, cuyo valor discriminativo aumenta con el tiempo transcurrido desde el diagnóstico.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
  {
    prompt: '¿Por qué se actualizó la guía NG28 en febrero de 2026?',
    options: [
      'Por la publicación de nuevos objetivos de HbA1c',
      'Por la retirada de productos de insulina y los desabastecimientos de marcas',
      'Por la aparición de un nuevo tipo de diabetes',
      'Por el abandono de la monitorización continua de glucosa',
    ],
    correctIndex: 1,
    explanation:
      'La actualización de febrero de 2026 de la guía NG28 respondió a la retirada de productos de insulina y a los desabastecimientos de marcas. Por eso el texto recomienda clases amplias de insulina en lugar de productos concretos, y reconoce el mayor uso de análogos en la práctica.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
  {
    prompt: 'En muchas personas con diabetes, ¿por debajo de qué cifra de glucosa se considera hipoglucemia?',
    options: ['50 mg/dL', '70 mg/dL', '90 mg/dL', '110 mg/dL'],
    correctIndex: 1,
    explanation:
      'Para muchas personas con diabetes se considera hipoglucemia una glucosa por debajo de 70 mg/dL, aunque el umbral individual puede variar y debe acordarse con el equipo tratante. El diagnóstico se establece midiendo la glucosa cuando aparecen los síntomas, y se trata si está por debajo del objetivo o de esa cifra.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: '¿Cuánta glucosa o carbohidratos se administran de inmediato en una hipoglucemia que la persona puede tratarse?',
    options: ['De 5 a 10 gramos', 'De 30 a 40 gramos', 'Una comida completa', 'De 15 a 20 gramos'],
    correctIndex: 3,
    explanation:
      'Se administran de inmediato 15 a 20 gramos de glucosa o carbohidratos —cuatro tabletas de glucosa, un tubo de gel, media taza de zumo sin edulcorar o una cucharada de azúcar—, se esperan 15 minutos, se vuelve a medir y, si sigue baja, se repiten otros 15 a 20 gramos hasta recuperar el objetivo.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: 'Si la siguiente comida queda a más de una hora, ¿qué se añade tras corregir la hipoglucemia?',
    options: [
      'Una colación, como galletas o una pieza de fruta',
      'Otra dosis de 15 a 20 gramos de glucosa',
      'Glucagón intramuscular',
      'Nada, hasta la hora de la comida',
    ],
    correctIndex: 0,
    explanation:
      'Cuando la siguiente comida queda a más de una hora, después de corregir la cifra se añade una colación, como galletas o una pieza de fruta. No se sustituye el tratamiento de rescate por una comida completa si se busca un ascenso rápido y cuantificable de la glucosa.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: '¿Qué conviene usar en quien toma fármacos que enlentecen la digestión de los carbohidratos?',
    options: [
      'Un caramelo o una pieza de fruta',
      'Un vaso de leche con azúcar',
      'Tabletas o gel de glucosa',
      'Una comida rica en carbohidratos complejos',
    ],
    correctIndex: 2,
    explanation:
      'Quien toma fármacos que enlentecen la digestión de los carbohidratos necesita tabletas o gel de glucosa, porque otros alimentos no elevan la glucosa con la rapidez suficiente. Con esos tratamientos el rescate con comida puede no ser eficaz a tiempo, de modo que la glucosa de acción rápida es la opción adecuada.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: 'En la enfermedad renal, ¿qué fuente de carbohidrato conviene evitar para corregir la hipoglucemia?',
    options: [
      'El zumo de manzana',
      'El zumo de naranja, por su contenido en potasio',
      'El zumo de uva',
      'El zumo de arándano',
    ],
    correctIndex: 1,
    explanation:
      'En la enfermedad renal conviene evitar el zumo de naranja por su contenido en potasio y elegir otras fuentes, como manzana, uva o arándano. La corrección de la hipoglucemia debe adaptarse a las comorbilidades sin renunciar al objetivo de elevar la glucosa con rapidez.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: '¿Cómo puede manifestarse la hipoglucemia durante el sueño?',
    options: [
      'Con pesadillas, sudoración que empapa la ropa o cansancio al despertar',
      'Con temblor aislado sin sudoración',
      'Con poliuria y sed intensa',
      'Con dolor abdominal y vómitos',
    ],
    correctIndex: 0,
    explanation:
      'Durante el sueño la hipoglucemia puede manifestarse con llanto o pesadillas, sudoración que empapa la ropa o las sábanas, y sensación de cansancio, irritabilidad o confusión al despertar. Puede pasar inadvertida y reducir la capacidad de reconocer y responder a los síntomas durante el día.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: '¿La ausencia de síntomas permite descartar una hipoglucemia?',
    options: [
      'Sí, sin síntomas no hay hipoglucemia',
      'No: la hipoglucemia inadvertida es un problema reconocido',
      'Solo si la glucemia es normal',
      'Solo en personas sin diabetes',
    ],
    correctIndex: 1,
    explanation:
      'La ausencia de síntomas no descarta la hipoglucemia: la hipoglucemia inadvertida es un problema reconocido, en el que la persona pierde la capacidad de reconocer los síntomas de alarma. Por eso la conducta se decide por la cifra de glucosa medida y no por cómo se siente el paciente, repitiendo la medición a los 15 minutos tras corregirla.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: '¿Cómo se decide tratar una hipoglucemia?',
    options: [
      'Según la intensidad de los síntomas que refiere el paciente',
      'Solo si hay pérdida de conciencia',
      'Por la cifra de glucosa medida, repitiendo la medición a los 15 minutos',
      'Por la glucemia de la última analítica',
    ],
    correctIndex: 2,
    explanation:
      'La hipoglucemia se trata por la cifra de glucosa medida, no por los síntomas: se mide, se trata y se repite la medición a los 15 minutos para comprobar que asciende. Tratar según síntomas lleva a corregir cuadros leves y a pasar por alto los que no dan síntomas. La clasificación adrenérgica o neuroglucopénica sirve para reconocerla, no para graduar la gravedad.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: '¿Qué corrección de la hipoglucemia permite comprobar que la glucemia asciende?',
    options: [
      'Un caramelo suelto',
      'Una comida completa',
      'Una cantidad medida de glucosa, con nueva medición a los 15 minutos',
      'Esperar a la siguiente comida',
    ],
    correctIndex: 2,
    explanation:
      'Una cantidad medida de glucosa o carbohidrato, seguida de una nueva medición a los 15 minutos, es lo que permite comprobar que la glucemia asciende. Un caramelo suelto aporta poco y una comida completa tarda en absorberse, de modo que la corrección no se puede cuantificar. El glucagón queda para quien no puede tratarse por sí mismo.',
    source: { specialty: 'internal-medicine', topic: 'hypoglycemia' },
  },
  {
    prompt: 'Al pautar insulina, ¿qué medida de seguimiento no debe olvidarse?',
    options: [
      'Rotar los puntos de inyección',
      'Cambiar de pluma cada semana',
      'Suspender la metformina',
      'Medir la glucemia solo en ayunas',
    ],
    correctIndex: 0,
    explanation:
      'La rotación de los puntos de inyección es una medida que no debe olvidarse: repetir siempre el mismo punto altera la absorción y favorece la lipodistrofia. Forma parte de la educación estructurada que acompaña a la insulinización, junto con la titulación y la prevención de la hipoglucemia. No es un detalle cosmético: es parte de que la dosis funcione igual cada día.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
  {
    prompt: '¿Cómo se elige el tipo de insulina cuando hay varias opciones válidas?',
    options: [
      'Eligiendo siempre la más barata',
      'Eligiendo siempre la de acción más prolongada',
      'Con una decisión compartida y después optimizando el coste',
      'Con el producto que use el centro de salud',
    ],
    correctIndex: 2,
    explanation:
      'La elección es compartida con la persona y se guía por lo que le resulta adecuado; después se optimiza el coste. Elegir la insulina más barata cuando no es igual de adecuada invierte el orden: primero la idoneidad clínica y la educación, luego el precio. La guía recomienda clases amplias de insulina antes que productos concretos.',
    source: { specialty: 'internal-medicine', topic: 'insulin' },
  },
]

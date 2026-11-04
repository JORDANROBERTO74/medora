import type { QuizQuestion } from '@/lib/content'

/** Obstetricia. */
export const questions: QuizQuestion[] = [
  {
    prompt: '¿Cuándo se considera que un embarazo está datado de forma subóptima?',
    options: [
      'Cuando no hay ninguna ecografía que confirme o corrija la fecha antes de las 22+0 semanas',
      'Cuando la primera ecografía se realiza después de las 14+1 semanas',
      'Cuando la fecha de la última menstruación es insegura, aunque haya ecografía precoz',
      'Cuando no se ha realizado la ecografía morfológica antes de las 20+6 semanas',
    ],
    correctIndex: 0,
    explanation:
      'Un embarazo sin ecografía que confirme o corrija la fecha antes de las 22+0 semanas se considera datado de forma subóptima. La datación tardía se asocia a más inducciones por postérmino, y por eso la OMS incluye la ecografía precoz entre las medidas que reducen esa práctica. La ecografía de datación se ofrece entre las 11+2 y las 14+1 semanas.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt: '¿Qué calendario de contactos prenatales propone la OMS como mínimo?',
    options: [
      'Cuatro contactos, con el primero antes de las 12 semanas',
      'Siete contactos en multíparas, con la primera visita antes de las 10+0 semanas',
      'Ocho contactos, el primero antes de las 12 semanas y los siguientes en torno a las 20, 26, 30, 34, 36, 38 y 40 semanas',
      'Diez contactos en nulíparas, con la primera cita antes de las 12 semanas',
    ],
    correctIndex: 2,
    explanation:
      'La OMS propone un mínimo de ocho contactos: el primero antes de las 12 semanas y los siguientes alrededor de las 20, 26, 30, 34, 36, 38 y 40 semanas. El modelo de ocho contactos reduce la mortalidad perinatal hasta en 8 por 1000 nacimientos frente al de cuatro visitas. NICE planifica 10 citas en nulíparas y 7 en multíparas, con la primera antes de las 10+0 semanas.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt:
      'Cuando la fecha de la última menstruación y la ecografía del primer trimestre no coinciden, ¿cuál prevalece?',
    options: [
      'La fecha de la última menstruación, si el ciclo era regular',
      'La ecografía del primer trimestre',
      'La altura uterina medida a partir de las 24+0 semanas',
      'La percepción de los movimientos fetales',
    ],
    correctIndex: 1,
    explanation:
      'La jerarquía de datación prefiere la FUM con ciclo regular y seguro, pero la ecografía del primer trimestre prevalece sobre ella cuando difiere. La estimación por FUM presupone una ovulación alrededor del día 14, de modo que la variabilidad del ciclo la vuelve inexacta. Con ciclos irregulares la FUM pierde valor y manda la ecografía.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt: '¿Desde cuándo y con qué frecuencia se mide la altura uterina en los controles?',
    options: [
      'Desde las 20+0 semanas, en cada control semanal',
      'Desde las 24+0 semanas, sin superar una medición cada 4 semanas',
      'Desde las 36+0 semanas, en cada control',
      'Desde las 24+0 semanas, con una frecuencia no superior a cada 2 semanas',
    ],
    correctIndex: 3,
    explanation:
      'La altura uterina se mide en cada control a partir de las 24+0 semanas, con una frecuencia no superior a cada 2 semanas, y se representa en una curva. Sirve para cribar alteraciones del crecimiento, no para datar el embarazo. La palpación abdominal se realiza en todos los controles desde las 36+0 semanas para detectar presentación podálica.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt:
      'Una ecografía muestra un embrión con longitud cráneo-caudal de 5,0 mm y sin latido. ¿Qué conducta corresponde?',
    options: [
      'Repetir la ecografía un mínimo de 7 días',
      'Diagnosticar el aborto y ofrecer tratamiento inmediato',
      'Solicitar una segunda opinión sin repetir la ecografía',
      'Repetir la ecografía un mínimo de 14 días',
    ],
    correctIndex: 0,
    explanation:
      'Con una LCR menor de 7,0 mm y sin latido, la ecografía debe repetirse un mínimo de 7 días antes de concluir nada. Si la LCR es de 7,0 mm o más y no hay latido, se exige segunda opinión o repetición a los 7 días. No debe usarse la edad gestacional derivada solo de la FUM para decidir si un latido debería ser visible.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt:
      'El diámetro medio del saco gestacional es menor de 25,0 mm y no se ve polo fetal. Si la medición fue transabdominal, ¿cuándo se repite?',
    options: ['A los 3 días', 'A los 7 días', 'Un mínimo de 14 días', 'A las 4 semanas'],
    correctIndex: 2,
    explanation:
      'Un diámetro medio del saco menor de 25,0 mm sin polo fetal obliga a repetir la ecografía a los 7 días por vía transvaginal; cuando la medición fue transabdominal, la repetición se difiere un mínimo de 14 días. El diagnóstico de aborto con una sola ecografía no es seguro en edades gestacionales muy precoces.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt: '¿Entre qué semanas se hace el cribado de diabetes gestacional con sobrecarga oral?',
    options: [
      'Entre las 18+0 y las 20+6 semanas',
      'Entre las 24+0 y las 28+0 semanas',
      'Entre las 28+0 y las 32+0 semanas',
      'En la primera visita, antes de las 10+0 semanas',
    ],
    correctIndex: 1,
    explanation:
      'El cribado de diabetes gestacional con sobrecarga oral se realiza entre las 24+0 y las 28+0 semanas. En la primera visita se piden hemograma, grupo sanguíneo y Rh, y se valora el riesgo de preeclampsia. La profilaxis anti-D se administra a las 28 semanas en gestantes Rh negativas no sensibilizadas y la ecografía morfológica se hace entre las 18+0 y 20+6.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt: '¿Cuándo se administra la profilaxis anti-D a una gestante Rh negativa no sensibilizada?',
    options: [
      'En la primera visita, antes de las 10+0 semanas',
      'Entre las 18+0 y las 20+6 semanas, con la ecografía morfológica',
      'Entre las 24+0 y las 28+0 semanas, con el cribado de diabetes',
      'A las 28 semanas',
    ],
    correctIndex: 3,
    explanation:
      'La profilaxis anti-D se administra a las 28 semanas en gestantes Rh negativas no sensibilizadas. El grupo sanguíneo y el Rh se determinan en la primera visita, junto con el hemograma. La ecografía morfológica de las 18+0 a 20+6 semanas incluye la localización placentaria, y el cribado de diabetes se hace entre las 24+0 y 28+0.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt: '¿Qué incluye la ecografía morfológica de las 18+0 a 20+6 semanas?',
    options: [
      'La localización placentaria',
      'La medición de la longitud cervical como único objetivo',
      'El cálculo definitivo de la fecha probable de parto',
      'El cribado de diabetes gestacional',
    ],
    correctIndex: 0,
    explanation:
      'La ecografía morfológica se realiza entre las 18+0 y las 20+6 semanas e incluye la localización placentaria, dato que permite anticipar una placenta previa o de inserción baja. La localización placentaria debe constar en esa ecografía de cribado. La datación no se reajusta con ella: se fija una sola vez con la primera ecografía fiable.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt: '¿Qué suplementación diaria recomienda la OMS en el embarazo?',
    options: [
      '60 mg de hierro elemental y 1 mg de ácido fólico',
      '30–60 mg de hierro elemental y 400 µg de ácido fólico',
      '30 mg de hierro elemental y 4 mg de ácido fólico',
      '100 mg de hierro elemental y 400 µg de ácido fólico',
    ],
    correctIndex: 1,
    explanation:
      'La OMS recomienda una suplementación diaria con 30–60 mg de hierro elemental y 400 µg de ácido fólico, junto con la vacunación antitetánica según el antecedente. El ácido acetilsalicílico se reserva para las gestantes con riesgo de preeclampsia, valorado en la primera consulta y en el segundo trimestre.',
    source: { specialty: 'obstetrics-gynecology', topic: 'pregnancy-dating-and-prenatal-care' },
  },
  {
    prompt:
      'En un aborto confirmado sin factores de riesgo añadidos, ¿cuál es el tratamiento de primera línea?',
    options: [
      'Legrado por aspiración en todos los casos',
      'Mifepristona sola',
      'Tratamiento expectante durante 7 a 14 días',
      'Misoprostol a dosis repetidas hasta la expulsión',
    ],
    correctIndex: 2,
    explanation:
      'En el aborto confirmado el tratamiento expectante durante 7 a 14 días es la primera línea, salvo riesgo aumentado de hemorragia, antecedente traumático, coagulopatía o infección. También son válidas la aspiración al vacío y el tratamiento médico. Antes de dar el aborto por completo hay que comprobar la cavidad, porque un embarazo de localización desconocida puede ser ectópico.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt: '¿Cuál es la pauta de tratamiento médico del aborto retenido?',
    options: [
      '200 mg de mifepristona oral y, 48 horas después, 800 µg de misoprostol vaginal, oral o sublingual',
      '600 µg de mifepristona oral y, 24 horas después, 400 µg de misoprostol',
      '800 µg de mifepristona oral y, 48 horas después, 200 µg de misoprostol',
      '400 µg de misoprostol cada 3 horas durante 24 horas',
    ],
    correctIndex: 0,
    explanation:
      'El aborto retenido se trata con 200 mg de mifepristona por vía oral y, 48 horas después, 800 µg de misoprostol por vía vaginal, oral o sublingual, salvo que el saco se haya expulsado. En el aborto incompleto, en cambio, la evidencia solo respalda misoprostol y no se ofrece mifepristona.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt: '¿Qué dosis única de misoprostol se emplea en el aborto incompleto?',
    options: [
      '200 µg',
      '400 µg en pauta repetida cada 3 horas',
      '800 µg por vía intramuscular',
      '600 µg por vía vaginal, oral o sublingual',
    ],
    correctIndex: 3,
    explanation:
      'En el aborto incompleto se usa una dosis única de 600 µg de misoprostol por vía vaginal, oral o sublingual, con 800 µg como alternativa para alinear protocolos. No se recomienda mifepristona en este escenario. La OMS acepta aspiración al vacío o tratamiento médico con útero menor de 14 semanas, con 600 µg de misoprostol oral o 400 µg sublingual.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt: 'En el aborto incompleto a partir de 14 semanas, ¿qué pauta de misoprostol se usa?',
    options: [
      '600 µg en dosis única por vía oral',
      'Dosis repetidas de 400 µg cada 3 horas',
      '200 µg cada 6 horas durante 48 horas',
      '800 µg sublingual en dosis única',
    ],
    correctIndex: 1,
    explanation:
      'A partir de 14 semanas se emplean dosis repetidas de 400 µg de misoprostol cada 3 horas. Por debajo de esa edad gestacional, la OMS acepta aspiración al vacío o tratamiento médico con 600 µg de misoprostol oral o 400 µg sublingual. En el aborto incompleto la dosis única de referencia es de 600 µg y no se añade mifepristona.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt:
      'En una amenaza de aborto con sangrado y antecedente de aborto previo, ¿qué se ofrece si se confirma latido?',
    options: [
      'Reposo absoluto hasta el final del embarazo',
      'Ácido acetilsalicílico a dosis baja',
      'Progesterona micronizada vaginal 400 mg dos veces al día hasta las 16 semanas',
      'Cerclaje cervical urgente',
    ],
    correctIndex: 2,
    explanation:
      'En la amenaza de aborto con sangrado y antecedente de aborto previo se ofrece progesterona micronizada vaginal 400 mg dos veces al día, mantenida hasta las 16 semanas si se confirma latido. Con embarazo intrauterino confirmado y latido presente, se aconseja consultar si el sangrado empeora o persiste más de 14 días.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt:
      'Dos determinaciones de hCG separadas 48 horas muestran un descenso del 60 %. ¿Qué sugiere?',
    options: [
      'Una gestación intrauterina en desarrollo',
      'Un embarazo ectópico confirmado',
      'Una mola hidatidiforme',
      'Una gestación que no prosperará',
    ],
    correctIndex: 3,
    explanation:
      'En el embarazo de localización desconocida, la hCG no sirve para determinar la localización: solo orienta el manejo según su tendencia. Una elevación superior al 63 % en 48 horas sugiere gestación intrauterina en desarrollo, y un descenso superior al 50 % sugiere gestación que no prosperará. La progesterona sérica no se usa como adjuvante diagnóstico.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt: '¿Qué abarca la enfermedad trofoblástica gestacional?',
    options: [
      'Desde la mola completa y parcial hasta la mola invasora, el coriocarcinoma y el tumor trofoblástico del lecho placentario',
      'Solo la mola completa y la mola parcial',
      'Únicamente el coriocarcinoma',
      'La mola completa y el embarazo ectópico',
    ],
    correctIndex: 0,
    explanation:
      'La enfermedad trofoblástica gestacional abarca desde la mola completa y parcial hasta la mola invasora, el coriocarcinoma y el tumor trofoblástico del lecho placentario. Cuando persiste la elevación de la β-hCG se denomina neoplasia trofoblástica gestacional. Tras un evento molar, la vigilancia de la β-hCG es la herramienta para detectarla.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt:
      'Tras un evento molar, ¿qué herramienta detecta una neoplasia trofoblástica gestacional?',
    options: [
      'La ecografía transvaginal seriada',
      'La vigilancia de la β-hCG',
      'La progesterona sérica',
      'El hemograma mensual',
    ],
    correctIndex: 1,
    explanation:
      'Tras un evento molar, la vigilancia de la β-hCG es la herramienta para detectar una neoplasia trofoblástica gestacional, que se sospecha por elevación persistente. En la mola hidatidiforme, la proliferación trofoblástica anómala y el edema vellositario explican el útero mayor de lo esperado, los vómitos y los quistes tecaluteínicos.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt:
      'Después de un tratamiento médico o expectante del aborto, ¿qué seguimiento forma parte del manejo estándar?',
    options: [
      'Una ecografía semanal durante 6 semanas',
      'Una β-hCG a las 48 horas y nada más',
      'Ninguno si el sangrado ha cedido',
      'Prueba de embarazo en orina a las 3 semanas y revisión si es positiva',
    ],
    correctIndex: 3,
    explanation:
      'El seguimiento con prueba de embarazo en orina a las 3 semanas, y la revisión si es positiva, forma parte del manejo estándar tras tratamiento médico o expectante. El manejo del aborto incompleto espontáneo y del postinducido es idéntico. Las complicaciones que hay que vigilar son la hemorragia, los restos retenidos y la infección.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt: '¿Cómo se define clínicamente el aborto incompleto?',
    options: [
      'Por un orificio cervical cerrado y ausencia de sangrado',
      'Por la ausencia de saco gestacional en la ecografía',
      'Por un orificio cervical abierto con sangrado y productos de la concepción no expulsados por completo',
      'Por una β-hCG que desciende más del 50 % en 48 horas',
    ],
    correctIndex: 2,
    explanation:
      'El aborto incompleto se define clínicamente por un orificio cervical abierto con sangrado, en el que no se han expulsado todos los productos de la concepción o los expulsados no corresponden a la duración estimada del embarazo. Sus síntomas habituales son sangrado vaginal y dolor abdominal, y la expulsión parcial deja restos que sangran y pueden infectarse.',
    source: { specialty: 'obstetrics-gynecology', topic: 'first-trimester-bleeding' },
  },
  {
    prompt: '¿Cuál es la incidencia aproximada de embarazo ectópico en el Reino Unido?',
    options: [
      '1 por 1000 embarazos',
      '11 por 1000 embarazos',
      '50 por 1000 embarazos',
      '1 por 100 embarazos',
    ],
    correctIndex: 1,
    explanation:
      'En el Reino Unido la incidencia ronda 11 por 1000 embarazos, con unos 11 000 diagnósticos anuales. Sigue habiendo muertes maternas por esta causa, aunque la letalidad ha descendido, lo que sugiere que el diagnóstico y el tratamiento más precoces han tenido impacto.',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt: '¿Qué factores de riesgo de embarazo ectópico confirma la guía?',
    options: [
      'La endometriosis y el aborto previo',
      'El uso de DIU y las malformaciones tubáricas',
      'La edad mayor de 35 años y la enfermedad inflamatoria pélvica',
      'El daño tubárico por cirugía o infección, el tabaquismo y la fecundación in vitro',
    ],
    correctIndex: 3,
    explanation:
      'La guía confirma como factores de riesgo el daño tubárico posquirúrgico o posinfeccioso, el tabaco y la reproducción asistida. El material base añade enfermedad inflamatoria pélvica, clamidia, gonorrea, cirugías pélvicas, edad mayor de 35 años, antecedente de ectópico, endometriosis, aborto previo, malformaciones tubáricas y DIU, pero el resto no se ha podido contrastar.',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt:
      'Una masa anexial con saco gestacional vacío que se desplaza separada del ovario, ¿qué probabilidad de ectópico tubárico indica?',
    options: [
      'Alta probabilidad: anillo tubárico o signo del bagel',
      'Indica ectópico de forma definitiva, sin más criterios',
      'Solo posibilidad: puede ser un pseudosaco',
      'Descarta el ectópico si no hay líquido libre',
    ],
    correctIndex: 0,
    explanation:
      'Una masa anexial que se desplaza separada del ovario con un saco gestacional vacío —anillo tubárico o signo del bagel— es un signo de alta probabilidad de ectópico tubárico. Indica ectópico de forma definitiva cuando el saco contiene saco vitelino, o saco y polo fetal con o sin latido (signo del deslizamiento). El útero vacío o el pseudosaco son solo signos de posibilidad.',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt: '¿Cómo se distingue un pseudosaco de un saco intrauterino precoz?',
    options: [
      'Por la cifra de hCG',
      'Por la presencia de líquido en el fondo de saco de Douglas',
      'Por su situación excéntrica y el signo de doble decidua',
      'Por la respuesta a la progesterona sérica',
    ],
    correctIndex: 2,
    explanation:
      'El pseudosaco es una colección líquida intracavitaria que debe diferenciarse del saco intrauterino precoz por su situación excéntrica y el signo de doble decidua. Puede simular un saco gestacional y retrasar el diagnóstico. La hCG no determina la localización de la gestación: solo valora la proliferación trofoblástica y orienta el manejo.',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt: '¿Qué requisitos se piden para ofrecer manejo expectante de un ectópico?',
    options: [
      'Heterotópico descartado por resonancia y hCG menor de 5000 UI/L',
      'Estabilidad clínica sin dolor, tamaño menor de 35 mm sin latido y hCG ≤ 1000 UI/L',
      'Cualquier ectópico menor de 50 mm, con independencia de la hCG',
      'Solo un ectópico con latido positivo y hCG en descenso',
    ],
    correctIndex: 1,
    explanation:
      'El manejo expectante se ofrece si la paciente está clínicamente estable y sin dolor, el ectópico mide menos de 35 mm sin latido y la hCG es ≤ 1000 UI/L, con posibilidad de seguimiento; entre 1000 y 1500 UI/L se considera. Se repite la hCG en los días 2, 4 y 7, y si cae ≥ 15 % se continúa semanalmente hasta negativizar (< 20 UI/L).',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt:
      'En el seguimiento expectante de un ectópico, ¿qué descenso de hCG permite continuar el seguimiento semanal?',
    options: [
      'Un descenso de cualquier magnitud en 24 horas',
      'Un descenso ≥ 50 % respecto al valor previo',
      'Un descenso ≥ 5 % respecto al valor previo',
      'Un descenso ≥ 15 % respecto al valor previo',
    ],
    correctIndex: 3,
    explanation:
      'Se repite la hCG en los días 2, 4 y 7; si cae ≥ 15 % respecto al valor previo, se continúa el seguimiento semanalmente hasta negativizar, con el umbral de < 20 UI/L. Si la cifra se meseta o asciende, hay que revaluar la conducta. El descenso del 50 % es el criterio del embarazo de localización desconocida, no del seguimiento del ectópico.',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt: '¿Qué requisito es imprescindible antes de indicar metotrexato sistémico?',
    options: [
      'Diagnóstico definitivo de ectópico y exclusión de gestación intrauterina viable',
      'Que la hCG supere 5000 UI/L',
      'Que exista latido visible en la masa anexial',
      'Que la masa mida 35 mm o más',
    ],
    correctIndex: 0,
    explanation:
      'El metotrexato solo se indica con diagnóstico definitivo y tras excluir una gestación intrauterina viable; se ofrece si no hay dolor significativo, el ectópico mide menos de 35 mm sin latido, la hCG es < 1500 UI/L y es posible el seguimiento. Se miden dos hCG en la primera semana, en los días 4 y 7, y luego semanalmente hasta negativizar.',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt: '¿Cuándo es la cirugía la primera línea en el embarazo ectópico?',
    options: [
      'Cuando la hCG es menor de 1000 UI/L y la paciente está estable',
      'Cuando la masa mide 20 mm sin latido y el seguimiento es posible',
      'Con dolor significativo, masa ≥ 35 mm, latido visible, hCG ≥ 5000 UI/L o imposibilidad de seguimiento',
      'Siempre que se diagnostique un ectópico tubárico',
    ],
    correctIndex: 2,
    explanation:
      'La cirugía es de primera línea si hay dolor significativo, masa ≥ 35 mm, latido visible, hCG ≥ 5000 UI/L o imposibilidad de seguimiento. Entre 1500 y 5000 UI/L se ofrece elegir entre metotrexato y cirugía, advirtiendo que con metotrexato aumenta la probabilidad de necesitar otra intervención. Se realiza por laparoscopia siempre que sea posible.',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt: '¿En qué caso se prefiere la salpingotomía a la salpingectomía?',
    options: [
      'Cuando la trompa contralateral está sana',
      'Cuando existe daño tubárico contralateral',
      'Cuando la hCG supera 5000 UI/L',
      'Cuando la paciente no desea más embarazos',
    ],
    correctIndex: 1,
    explanation:
      'Se ofrece salpingectomía salvo factores de infertilidad, y salpingotomía si existe daño tubárico contralateral, informando de que hasta 1 de cada 5 mujeres puede requerir tratamiento adicional. Tras salpingotomía se mide hCG a los 7 días y luego semanalmente; tras salpingectomía, se hace prueba de embarazo en orina a las 3 semanas.',
    source: { specialty: 'obstetrics-gynecology', topic: 'ectopic-pregnancy' },
  },
  {
    prompt: '¿Cómo se define la hemorragia anteparto?',
    options: [
      'Cualquier sangrado vaginal antes de las 20+0 semanas',
      'El sangrado que aparece solo durante el trabajo de parto',
      'El sangrado procedente o hacia el tracto genital desde las 24+0 semanas y antes del nacimiento',
      'El sangrado que sigue al alumbramiento',
    ],
    correctIndex: 2,
    explanation:
      'La hemorragia anteparto se define como sangrado procedente o hacia el tracto genital desde las 24+0 semanas y antes del nacimiento. Complica el 3–5 % de los embarazos, y sus causas más importantes —aunque no las más frecuentes— son la placenta previa y el desprendimiento placentario. La vasa previa es rara pero letal si no se diagnostica antes del parto.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt:
      'A partir de las 16 semanas, ¿cuándo se informa una placenta de inserción baja?',
    options: [
      'Cuando el borde placentario está a menos de 20 mm del orificio cervical interno sin cubrirlo',
      'Cuando la placenta cubre parcialmente el orificio cervical interno',
      'Cuando el borde placentario está a menos de 50 mm del orificio sin cubrirlo',
      'Cuando la placenta cubre totalmente el orificio cervical interno',
    ],
    correctIndex: 0,
    explanation:
      'A partir de las 16 semanas se informa placenta previa si cubre total o parcialmente el orificio cervical interno, e inserción baja si el borde placentario está a menos de 20 mm del orificio sin cubrirlo. Se recomienda ecografía de seguimiento a las 32 semanas y otra a las 36 para planificar el parto.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt:
      'Una placenta catalogada de inserción baja a mitad de gestación: ¿qué cabe esperar?',
    options: [
      'Que se mantenga igual hasta el parto en la mayoría de los casos',
      'Que requiera cesárea programada antes de las 34 semanas',
      'Que se confirme con resonancia magnética en todos los casos',
      'Que más del 90 % deje de serlo antes de las 37 semanas',
    ],
    correctIndex: 3,
    explanation:
      'Más del 90 % de las placentas catalogadas como de inserción baja a mitad de gestación dejan de serlo antes de las 37 semanas, y la ecografía transvaginal reclasifica hasta el 60 % de los casos. Por eso no tranquiliza una placenta de inserción baja sin repetir la ecografía: la mayoría migra y hay que documentarlo.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt: '¿Qué odds ratio de placenta previa se asocia a la fecundación in vitro?',
    options: ['1,42', '3,76', '1,74', '2,21'],
    correctIndex: 1,
    explanation:
      'La fecundación in vitro multiplica el riesgo de placenta previa con una odds ratio de 3,76. El antecedente de cesárea se asocia con una odds ratio de 1,74 y el riesgo crece con el número de cesáreas; la endometriosis lo eleva a 3,31, el tabaquismo a 1,42 y los fibromas a 2,21. La mayoría de los casos de espectro accreta se originan en una placentación sobre un defecto de cicatriz de cesárea.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt:
      '¿Qué se ofrece entre las 24+0 y 34+6 semanas cuando se prevé un parto pretérmino inminente?',
    options: [
      'Cerclaje cervical de rescate',
      'Tocólisis indefinida hasta el término',
      'Corticosteroides, y sulfato de magnesio hasta las 30+0',
      'Resonancia magnética para valorar el espectro accreta',
    ],
    correctIndex: 2,
    explanation:
      'Se ofrecen corticosteroides entre las 24+0 y 34+6 semanas y sulfato de magnesio hasta las 30+0 cuando se prevé un parto pretérmino inminente. La tocólisis puede considerarse 48 horas para completar los corticoides, pero el cerclaje cervical no está recomendado. La recuperación intraoperatoria de sangre es útil y segura.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt: 'En la placenta previa no complicada, ¿hasta cuándo se puede esperar el nacimiento?',
    options: [
      'No más tarde de las 37+6 semanas',
      'Hasta las 40+0 semanas si no hay sangrado',
      'No más tarde de las 34+6 semanas',
      'Hasta que aparezca sangrado, sin límite de edad gestacional',
    ],
    correctIndex: 0,
    explanation:
      'En la placenta previa no complicada, el nacimiento se planifica según los síntomas y no más tarde de las 37+6 semanas. En el espectro accreta de alta probabilidad, el parto planificado entre las 36+1 y 37+0 semanas ofrece el mejor equilibrio entre prematuridad y complicaciones. El nacimiento debe tener lugar en una unidad con banco de sangre y acceso a cuidados críticos.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt: 'En el espectro accreta, ¿qué conducta es correcta durante la cesárea?',
    options: [
      'Separar la placenta para reducir el sangrado',
      'Administrar metotrexato adyuvante si se deja la placenta in situ',
      'Incidir a través de la placenta para extraer al feto',
      'No intentar separar la placenta ni incidir a través de ella',
    ],
    correctIndex: 3,
    explanation:
      'En el espectro accreta no debe intentarse separar la placenta ni incidir a través de ella para extraer al feto; si se deja in situ, no se administra metotrexato adyuvante. Si fallan los uterotónicos y el ácido tranexámico, se recurre al balón de taponamiento intrauterino y a las suturas de compresión uterina. La resonancia no se recomienda de forma rutinaria si hay experiencia ecográfica.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt:
      '¿Qué diferencia la vasa previa diagnosticada antes del parto de la diagnosticada durante el parto?',
    options: [
      'La supervivencia es del 60 % si se diagnostica antes y superior al 95 % si se detecta en el parto',
      'Con diagnóstico antenatal y cesárea planificada la supervivencia supera el 95 %, frente a una mortalidad fetal de al menos el 60 % diagnosticada en el parto',
      'No hay diferencias de supervivencia si hay banco de sangre disponible',
      'La diagnosticada en el parto tiene mejor pronóstico porque se actúa de inmediato',
    ],
    correctIndex: 1,
    explanation:
      'En la vasa previa, el diagnóstico antenatal con cesárea planificada eleva la supervivencia por encima del 95 %, frente a una mortalidad fetal de al menos el 60 % cuando se diagnostica durante el parto. Los vasos fetales, sin protección de tejido placentario ni de la gelatina de Wharton, se rompen en el trabajo de parto activo o al realizar amniotomía.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt: '¿Cómo se clasifica la vasa previa?',
    options: [
      'Según el número de vasos, en única o múltiple',
      'Según la edad gestacional del diagnóstico',
      'Según el volumen del sangrado',
      'En tipo I, si el vaso se conecta a un cordón de inserción velamentosa, y tipo II, si conecta la placenta con un lóbulo succenturiado o accesorio',
    ],
    correctIndex: 3,
    explanation:
      'La vasa previa se clasifica en tipo I, cuando el vaso se conecta a un cordón de inserción velamentosa, y tipo II, cuando conecta la placenta con un lóbulo succenturiado o accesorio. Puede detectarse al tacto como vasos pulsátiles en el orificio interno, pero ese tacto no debe repetirse: confirma el diagnóstico y puede desencadenar la rotura.',
    source: { specialty: 'obstetrics-gynecology', topic: 'second-trimester-bleeding' },
  },
  {
    prompt:
      '¿Cuántas muertes maternas causa aproximadamente la hemorragia postparto al año en el mundo?',
    options: ['Cerca de 45 000', 'Cerca de 4500', 'Cerca de 500 000', 'Cerca de 450'],
    correctIndex: 0,
    explanation:
      'La hemorragia postparto sigue siendo una de las principales causas de muerte materna y causa cerca de 45 000 muertes al año en el mundo. Incluso cuando no es fatal, puede dejar secuelas físicas y psicológicas duraderas, desde daño orgánico mayor hasta histerectomía, ansiedad y trauma. Muchos casos ocurren sin factores de riesgo identificables.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
  {
    prompt: '¿Qué guía se publicó en octubre de 2025 sobre hemorragia postparto?',
    options: [
      'Una guía de NICE con 8 recomendaciones',
      'Un consenso de la ACOG con 300 recomendaciones',
      'La primera guía consolidada de la OMS, la FIGO y la ICM, con 51 recomendaciones',
      'Una actualización de la guía de vasa previa',
    ],
    correctIndex: 2,
    explanation:
      'En octubre de 2025 la OMS, la FIGO y la ICM publicaron la primera guía consolidada dedicada exclusivamente a la hemorragia postparto, con 51 recomendaciones que cubren prevención, diagnóstico y tratamiento. El cambio más relevante es diagnóstico: además del umbral clásico de 500 mL, se recomienda actuar a los 300 mL si hay signos vitales anormales.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
  {
    prompt: '¿Qué causas ordena el marco de las «4 T»?',
    options: [
      'Tono, tiempo, transfusión y tratamiento',
      'Tono, tejido, trauma y trombina',
      'Tono, tejido, transfusión y trombina',
      'Tamaño, tejido, trauma y trombina',
    ],
    correctIndex: 1,
    explanation:
      'El marco de las «4 T» ordena las causas de hemorragia postparto en tono (fallo contráctil), tejido (restos placentarios), trauma (lesiones del canal del parto) y trombina (coagulopatía). Las recomendaciones de 2025 se organizan por intervención más que por causa, pero comparten la lógica de corregir secuencialmente el factor desencadenante. La anemia es un factor modificable.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
  {
    prompt: '¿Qué incluye el paquete MOTIVE?',
    options: [
      'Masaje uterino, oxitocina, transfusión, fluidos, examen vaginal y escalada',
      'Masaje uterino, antibióticos, ácido tranexámico, fluidos, examen vaginal y escalada',
      'Masaje uterino, oxitocina, ácido tranexámico, sondaje, examen vaginal y cirugía',
      'Masaje uterino, fármacos oxitócicos, ácido tranexámico, fluidos intravenosos, examen vaginal y del tracto genital, y escalada de cuidados',
    ],
    correctIndex: 3,
    explanation:
      'Una vez diagnosticada la hemorragia postparto se aplica de inmediato el paquete MOTIVE: masaje uterino, fármacos oxitócicos, ácido tranexámico, fluidos intravenosos, examen vaginal y del tracto genital, y escalada de cuidados si el sangrado persiste. La escalada es parte explícita del paquete y no debe demorarse.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
  {
    prompt: '¿Qué uterotónico se recomienda en el alumbramiento?',
    options: [
      'Oxitocina, con carbetocina termoestable como alternativa',
      'Misoprostol, por su estabilidad a temperatura ambiente',
      'Ergometrina, por su acción sostenida',
      'Carbetocina, con oxitocina como alternativa',
    ],
    correctIndex: 0,
    explanation:
      'En el alumbramiento se recomienda administrar un uterotónico de calidad garantizada, preferiblemente oxitocina o carbetocina termoestable como alternativa. El misoprostol se reserva como último recurso cuando no hay opciones intravenosas y la cadena de frío no es fiable; no es la primera opción profiláctica si se dispone de oxitocina o carbetocina.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
  {
    prompt:
      '¿Cuándo puede usarse misoprostol como último recurso en la prevención de la hemorragia postparto?',
    options: [
      'Siempre, porque no necesita cadena de frío ni vía intravenosa',
      'Cuando se dispone de oxitocina pero la paciente la rechaza',
      'Cuando no hay opciones intravenosas y la cadena de frío no es fiable',
      'Solo después de una histerectomía',
    ],
    correctIndex: 2,
    explanation:
      'El misoprostol puede usarse como último recurso en el alumbramiento cuando no hay opciones intravenosas y la cadena de frío no es fiable. La primera elección es un uterotónico de calidad garantizada, preferiblemente oxitocina o carbetocina termoestable como alternativa. No se usa misoprostol como primera opción profiláctica si se dispone de ellas.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
  {
    prompt: '¿Para qué sirven los campos graduados?',
    options: [
      'Para estimar el volumen de líquido amniótico',
      'Para recoger y cuantificar la sangre perdida',
      'Para medir la altura uterina tras el parto',
      'Para valorar la diuresis de la puérpera',
    ],
    correctIndex: 1,
    explanation:
      'Los campos graduados son dispositivos sencillos que recogen y cuantifican la sangre perdida, de modo que se actúe en cuanto se cumplen los criterios. No hay que confiar en la estimación visual de la pérdida. La monitorización estrecha de la puérpera y la cuantificación objetiva son claves porque el sangrado puede escalar con gran rapidez.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
  {
    prompt: 'En una gestante con anemia, ¿cuándo se recomienda hierro intravenoso?',
    options: [
      'En todas las gestantes anémicas, como primera medida',
      'Solo después del parto, nunca durante el embarazo',
      'Cuando la hemoglobina es normal pero hay antecedente familiar de anemia',
      'Cuando se necesita una corrección rápida, incluida la situación poshemorragia o el fracaso del tratamiento oral',
    ],
    correctIndex: 3,
    explanation:
      'En gestantes anémicas se recomienda hierro oral y folato diarios, y hierro intravenoso cuando se necesita corrección rápida, incluida la situación poshemorragia o el fracaso del tratamiento oral. La anemia es un factor modificable: aumenta la probabilidad de hemorragia y agrava el desenlace si ocurre.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
  {
    prompt: '¿Qué prácticas se promueven para reducir el trauma y el sangrado grave?',
    options: [
      'Evitar la episiotomía rutinaria y hacer masaje perineal al final del embarazo',
      'Realizar episiotomía rutinaria en todas las primíparas',
      'Sustituir el masaje perineal por antibioticoterapia profiláctica',
      'Limitar el control prenatal a una sola visita',
    ],
    correctIndex: 0,
    explanation:
      'Se desaconsejan prácticas inseguras como la episiotomía rutinaria y se promueven técnicas preventivas como el masaje perineal al final del embarazo, para reducir el trauma y el sangrado grave. La prevención se apoya además en un buen control prenatal y posnatal que corrija factores como la anemia.',
    source: { specialty: 'obstetrics-gynecology', topic: 'postpartum-hemorrhage' },
  },
]

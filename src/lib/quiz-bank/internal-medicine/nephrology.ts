import type { QuizQuestion } from '@/lib/content'

/** Nefrología. */
export const questions: QuizQuestion[] = [
  {
    prompt: '¿En qué se basa la clasificación ISN/RPS de la nefritis lúpica?',
    options: [
      'En la microscopía óptica',
      'En el patrón de inmunofluorescencia',
      'En los títulos de anti-ADN de doble cadena',
      'En la microscopía electrónica, que define la clase',
    ],
    correctIndex: 0,
    explanation:
      'La clasificación ISN/RPS se establece por microscopía óptica, que define las seis clases. La microscopía electrónica solo ayuda a precisar el daño podocitario y la localización de los depósitos, y el patrón de inmunofluorescencia no forma parte de los criterios de clase. La serología tampoco sustituye a la biopsia, porque la clase y los índices de actividad y cronicidad cambian la conducta terapéutica.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: '¿Qué distingue la clase III de la clase IV en el esquema ISN/RPS?',
    options: [
      'La clase III es proliferativa difusa y la IV, proliferativa focal',
      'La clase III afecta a menos del 50 % de los glomérulos y la IV, al 50 % o más',
      'La clase III es membranosa y la IV, esclerosante avanzada',
      'La clase III se define por proteinuria nefrótica y la IV, por hematuria microscópica',
    ],
    correctIndex: 1,
    explanation:
      'La clase III es proliferativa focal y afecta a menos del 50 % de los glomérulos; la clase IV es proliferativa difusa y afecta al 50 % o más. La clase V es membranosa y la VI, esclerosante avanzada. Ese corte entre focal y difusa es el que separa ambas clases proliferativas dentro del esquema ISN/RPS.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: 'Un índice de cronicidad alto en la biopsia de una nefritis lúpica indica:',
    options: [
      'Lesión inflamatoria aguda potencialmente reversible con inmunosupresión',
      'Mejor respuesta esperable a la inducción',
      'Peor pronóstico renal',
      'Que solo hay que valorarlo en la clase V',
    ],
    correctIndex: 2,
    explanation:
      'El índice de cronicidad del NIH informa de daño establecido y un valor alto predice peor pronóstico renal. El índice de actividad, en cambio, refleja lesión inflamatoria aguda potencialmente reversible con inmunosupresión. Ambos acompañan al informe de la biopsia y ayudan a decidir la intensidad y la duración del tratamiento.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: '¿Cuánto debe prolongarse como mínimo la inmunosupresión total de la nefritis proliferativa?',
    options: ['12 meses', '24 meses', '36 meses', '60 meses'],
    correctIndex: 2,
    explanation:
      'La inmunosupresión total de la nefritis proliferativa, es decir, la inducción más el mantenimiento, debe prolongarse al menos 36 meses. Retirarla antes es uno de los errores frecuentes que describe el apunte, porque los episodios de actividad destruyen masa nefronal y la enfermedad tiende a progresar incluso cuando el brote agudo se controla.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: 'En la inducción de la clase III/IV activa, ¿qué esquemas añaden un tercer fármaco a los glucocorticoides?',
    options: [
      'MPAA o ciclofosfamida intravenosa a dosis baja, cada uno con glucocorticoides',
      'Belimumab (con MPAA o ciclofosfamida) o un inhibidor de calcineurina con MPAA',
      'Ciclofosfamida intravenosa junto con un inhibidor de calcineurina',
      'MPAA junto con ciclofosfamida intravenosa a dosis baja',
    ],
    correctIndex: 1,
    explanation:
      'La inducción de la clase III/IV activa admite cuatro esquemas con glucocorticoides: MPAA, ciclofosfamida intravenosa a dosis baja, belimumab junto con MPAA o ciclofosfamida, y MPAA con un inhibidor de calcineurina. Solo estos dos últimos añaden un tercer fármaco, y el de calcineurina exige una función renal no gravemente comprometida.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: '¿Cuándo hay que extremar la cautela con un inhibidor de calcineurina en la nefritis lúpica?',
    options: [
      'Cuando la TFG estimada es inferior a 45 ml/min por 1,73 m² o hay fibrosis extensa',
      'Cuando la TFG estimada supera 60 ml/min por 1,73 m²',
      'Cuando la proteinuria es inferior a 500 mg/día',
      'En las clases I y II con función renal normal',
    ],
    correctIndex: 0,
    explanation:
      'Los inhibidores de calcineurina se usan con cautela cuando la TFG estimada es inferior a 45 ml/min por 1,73 m² o existe fibrosis extensa. Voclosporina, en concreto, se indica con 23,7 mg dos veces al día solo si la TFG estimada es mayor de 45. El apunte también recuerda que su duración descrita llega hasta tres años.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: '¿Qué proporción de todas las nefritis lúpicas corresponde a la clase V?',
    options: [
      'Entre el 30 y el 40 %',
      'Menos del 1 %',
      'Alrededor de la mitad',
      'Entre el 5 y el 10 %',
    ],
    correctIndex: 3,
    explanation:
      'La clase V representa entre el 5 y el 10 % de todas las nefritis lúpicas. Entre el 10 y el 30 % de los pacientes con clase V acaba en insuficiencia renal, y ese riesgo se asocia a la magnitud de la proteinuria. La clase V tampoco suele remitir de forma espontánea, a diferencia de la nefropatía membranosa primaria.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: '¿Qué umbral de proteinuria de 24 horas se propone para cuantificar y seguir la nefritis lúpica?',
    options: ['300 mg/día', '500 mg/día', '1 g/día', '3 g/día'],
    correctIndex: 1,
    explanation:
      'El estudio se activa ante una proteinuria anormal en la tira reactiva (2+ o más), un sedimento con acantocitos del 5 % o más, cilindros hemáticos o leucocitarios, o un descenso de la TFG no atribuible a otra causa. Para cuantificar y seguir se propone el umbral de proteinuria de 24 horas de 500 mg/día o más.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: 'En las clases I y II sin proteinuria nefrótica, ¿qué actitud es la correcta?',
    options: [
      'Inmunosupresión específica con belimumab',
      'No precisan inmunosupresión específica más allá de la del lupus extrarrenal',
      'Ciclofosfamida intravenosa en seis dosis',
      'Voclosporina durante tres años',
    ],
    correctIndex: 1,
    explanation:
      'Las clases I y II suelen cursar con función renal normal o proteinuria de bajo grado. No precisan inmunosupresión específica más allá de la del lupus extrarrenal, salvo que exista proteinuria nefrótica: ese escenario corresponde a podocitopatía lúpica y se maneja como una enfermedad por cambios mínimos.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: '¿Qué diferencia describe el apunte entre belimumab y voclosporina según la proteinuria?',
    options: [
      'Belimumab rinde mejor con proteinuria inferior a 3 g/día; voclosporina mantiene eficacia en cualquier nivel',
      'Voclosporina solo funciona si la proteinuria es inferior a 3 g/día',
      'Ambos pierden eficacia por igual por encima de 3 g/día',
      'Belimumab solo se usa en la clase V pura',
    ],
    correctIndex: 0,
    explanation:
      'Belimumab rinde mejor cuando la proteinuria es inferior a 3 g/día, mientras que voclosporina mantiene su eficacia en cualquier nivel de proteinuria. Es una de las perlas del apunte y ayuda a elegir el tercer fármaco. En el embarazo, en cambio, no se recomienda ni voclosporina ni belimumab, y se sugiere tacrolimus como alternativa.',
    source: { specialty: 'internal-medicine', topic: 'lupus-nephritis' },
  },
  {
    prompt: '¿Qué cifras definen la acidosis metabólica?',
    options: [
      'pH inferior a 7,45 con bicarbonato por debajo de 28 mEq/l',
      'pH inferior a 7,35 con bicarbonato por debajo de 28 mEq/l',
      'pH inferior a 7,35 con bicarbonato por debajo de 22 mEq/l',
      'pH inferior a 7,30 con bicarbonato por debajo de 15 mEq/l',
    ],
    correctIndex: 2,
    explanation:
      'Se considera acidosis metabólica un pH inferior a 7,35 con bicarbonato plasmático por debajo de 22 mEq/l. El rango de referencia del bicarbonato es 22-28 mEq/l y el del pH, 7,35-7,45. En la enfermedad renal crónica el bicarbonato desciende de forma progresiva cuando la TFG cae por debajo de 60 ml/min por 1,73 m².',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
  {
    prompt: '¿Cómo se calcula el hiato aniónico y cuál es su rango de normalidad?',
    options: [
      'Cloro menos la suma de sodio y bicarbonato; 10 ± 2 mEq/l',
      'Sodio menos el bicarbonato; 12 ± 4 mEq/l',
      'Sodio menos la suma de potasio y cloro; 8 ± 2 mEq/l',
      'Sodio menos la suma de cloro y bicarbonato; 10 ± 2 mEq/l',
    ],
    correctIndex: 3,
    explanation:
      'El hiato aniónico se calcula como sodio menos la suma de cloro y bicarbonato, con un rango de normalidad de 10 ± 2 mEq/l, que baja a 8 ± 2 si el laboratorio emplea electrodos selectivos. Corregirlo por la albúmina es imprescindible antes de descartar una acidosis de hiato elevado en pacientes hipoalbuminémicos.',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
  {
    prompt: '¿Cuánto reduce el hiato aniónico cada descenso de 1 g/dl de albúmina?',
    options: [
      'Unos 2,5 mEq/l',
      'Unos 0,6 mEq/l',
      'Unos 5 mEq/l',
      'No lo modifica; solo cambia el bicarbonato',
    ],
    correctIndex: 0,
    explanation:
      'La albúmina es el principal anión no medido, por lo que cada descenso de 1 g/dl reduce el hiato aniónico en torno a 2,5 mEq/l. Esa corrección es imprescindible en pacientes hipoalbuminémicos: sin ella se puede pasar por alto una acidosis de hiato elevado y atribuirla a una pérdida de bicarbonato.',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
  {
    prompt: '¿Qué grupo de causas produce una acidosis de hiato aumentado?',
    options: [
      'La diarrea grave y las acidosis tubulares',
      'El suero salino fisiológico en volúmenes grandes',
      'La pérdida digestiva de bicarbonato',
      'La cetoacidosis, la acidosis láctica y la intoxicación por metanol o etilenglicol',
    ],
    correctIndex: 3,
    explanation:
      'Las acidosis de hiato aumentado se deben a ganancia de ácido, endógeno o exógeno: cetoacidosis, acidosis láctica e intoxicación por metanol o etilenglicol. Son normoclorémicas porque los aniones acumulados no se miden en la fórmula. Las de hiato normal provienen de pérdida de bicarbonato, renal o digestiva, como la diarrea y las acidosis tubulares.',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
  {
    prompt: 'En la acidosis metabólica, ¿cómo debe responder la pCO₂?',
    options: [
      'Debe subir 1 mmHg por cada mmol/l de descenso del bicarbonato',
      'Debe mantenerse sin cambios',
      'Debe bajar aproximadamente 1 mmHg por cada mmol/l de descenso del bicarbonato',
      'Debe bajar 2,5 mmHg por cada mmol/l de descenso del bicarbonato',
    ],
    correctIndex: 2,
    explanation:
      'En la acidosis metabólica la pCO₂ debe bajar aproximadamente 1 mmHg por cada mmol/l de descenso del bicarbonato. Si la compensación no alcanza esa proporción, hay un trastorno mixto asociado. La valoración de la respuesta secundaria forma parte del diagnóstico y evita atribuir a una sola causa un cuadro con dos trastornos simultáneos.',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
  {
    prompt: '¿Qué tres elementos simultáneos exige el diagnóstico de cetoacidosis diabética?',
    options: [
      'Glucemia superior a 11 mmol/l, cetonemia superior a 1 mmol/l y bicarbonato inferior a 22 mmol/l',
      'Glucemia superior a 11 mmol/l o diabetes conocida, cetonemia superior a 3 mmol/l y bicarbonato inferior a 15 mmol/l y/o pH venoso inferior a 7,3',
      'Glucemia superior a 250 mg/dl, cetonuria de 1+ y pH arterial inferior a 7,45',
      'Glucemia superior a 11 mmol/l, cetonemia superior a 0,6 mmol/l y pH venoso superior a 7,3',
    ],
    correctIndex: 1,
    explanation:
      'El diagnóstico de cetoacidosis diabética exige tres elementos simultáneos: glucemia superior a 11 mmol/l o diabetes conocida; cetonemia capilar o sanguínea superior a 3 mmol/l, o cetonuria de 2+ o más; y bicarbonato inferior a 15 mmol/l y/o pH venoso inferior a 7,3. La resolución se define por cetonas inferiores a 0,6 mmol/l y pH venoso superior a 7,3.',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
  {
    prompt: 'En la cetoacidosis asociada a iSGLT2, ¿qué particularidad tiene la glucemia?',
    options: [
      'Siempre supera 250 mg/dl',
      'Debe superar 11 mmol/l para poder diagnosticarla',
      'Solo se diagnostica si hay cetonuria de 2+ o más',
      'Puede ser inferior a 250 mg/dl; el diagnóstico se apoya en la acidosis con hiato elevado y la cetonemia',
    ],
    correctIndex: 3,
    explanation:
      'En la cetoacidosis asociada a iSGLT2 la glucemia puede ser inferior a 250 mg/dl, de modo que el diagnóstico se apoya en la acidosis con hiato elevado y en la cetonemia, no en la cifra de glucosa. Por eso una glucemia no muy alta no descarta el cuadro y hay que buscar la cetonemia.',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
  {
    prompt: 'Cuando se administra bicarbonato intravenoso en una acidosis aguda con hiato elevado, ¿cuál es el objetivo?',
    options: [
      'Normalizar el bicarbonato en 24 horas',
      'Alcanzar un bicarbonato de 22-28 mEq/l',
      'Alcanzar un valor de seguridad de 8-12 mEq/l',
      'Mantener el pH por encima de 7,45',
    ],
    correctIndex: 2,
    explanation:
      'Cuando se administra bicarbonato intravenoso en una acidosis aguda con hiato elevado, el objetivo no es normalizar el bicarbonato sino alcanzar un valor de seguridad de 8-12 mEq/l. Debe garantizarse una ventilación adecuada, porque la reposición genera CO₂. El bicarbonato se reserva para hiperpotasemia grave o descensos del pH potencialmente letales.',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
  {
    prompt: 'Por cada 0,1 unidades de aumento del pH, ¿cuánto desciende el potasio plasmático?',
    options: [
      'Alrededor de 0,6 mmol/l',
      'Alrededor de 0,1 mmol/l',
      'Alrededor de 2,5 mmol/l',
      'No desciende; el potasio depende solo del bicarbonato',
    ],
    correctIndex: 0,
    explanation:
      'Por cada 0,1 unidades de aumento del pH, el potasio plasmático desciende alrededor de 0,6 mmol/l. Por eso un potasio normal en una acidosis puede ocultar un déficit importante, y el tratamiento debe vigilar siempre el potasio. La corrección del trastorno sin reponerlo puede desenmascarar una hipopotasemia peligrosa.',
    source: { specialty: 'internal-medicine', topic: 'metabolic-acidosis' },
  },
]

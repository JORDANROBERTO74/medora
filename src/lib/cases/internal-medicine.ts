import type { ClinicalCase } from './types'

/** Medicina Interna / Semiología. Generado desde data/cases/authored — no editar a mano. */
export const cases: ClinicalCase[] = [
  {
    "id": "anaphylaxis-generalized-erythema",
    "specialtySlug": "internal-medicine",
    "title": "Inconsciencia y eritema generalizado",
    "reason": "Inconsciencia y eritema generalizado",
    "history": "Paciente de 39 años, sexo masculino, que consulta por un cuadro de 5 horas de evolución caracterizado por prurito y eritema palmar que se extiende a todo el cuerpo, y que agrega convulsión. Es trasladado del domicilio al hospital.",
    "background": "Alergia a alimentos de mar y maní.",
    "exam": "PA 60/30 mmHg · FC 100 lpm · FR 25 rpm · T 36 °C\nNeurológico: Glasgow 7/15.\nPiel y mucosas: rubicunda, eritema generalizado que predomina en miembros superiores.\nRespiratorio: frecuencia respiratoria elevada, patrón costoabdominal, expansibilidad torácica disminuida.",
    "labs": "Leucocitosis con eosinofilia. Gasometría con insuficiencia respiratoria.",
    "studies": "RX de tórax: hiperinsuflación y síndrome de distrés respiratorio.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Anafilaxia con shock distributivo",
      "Angioedema hereditario",
      "Síndrome carcinoide",
      "Crisis asmática grave"
    ],
    "correctIndex": 0,
    "rationales": [
      "El prurito y el eritema generalizados tras exponerse a alérgenos conocidos, la hipotensión marcada, el deterioro de conciencia y el broncoespasmo configuran una anafilaxia con shock distributivo.",
      "El angioedema hereditario cursa sin prurito ni urticaria y no se desencadena por alérgenos: se debe a un déficit de C1-inhibidor.",
      "El síndrome carcinoide produce flushing y sibilancias, pero no prurito generalizado ni hipotensión de instauración rápida tras un alérgeno.",
      "La crisis asmática explica la disnea y las sibilancias, pero no el eritema generalizado, el prurito ni el shock."
    ],
    "hint": "Fíjate en el desencadenante (alérgenos conocidos), el prurito generalizado y una presión de 60/30.",
    "discussion": "Adrenalina intramuscular en la cara anterolateral del muslo lo antes posible, repetible a los 5-15 minutos; retirar el alérgeno, oxígeno, cristaloides y soporte de la vía aérea. Observación por riesgo de reacción bifásica.",
    "studyQuestions": [
      {
        "prompt": "Nombre el diagnóstico presuntivo",
        "answer": "Anafilaxia con shock distributivo desencadenada por alérgenos alimentarios (marisco y maní)."
      },
      {
        "prompt": "Nombre los diagnósticos diferenciales",
        "answer": "Crisis asmática grave, angioedema (hereditario o por IECA), shock séptico o cardiogénico, síndrome carcinoide y reacción vasovagal."
      },
      {
        "prompt": "Nombre la etiología y los factores de riesgo",
        "answer": "Reacción de hipersensibilidad mediada por IgE frente a alérgenos alimentarios. La atopia, el asma y una alergia alimentaria conocida —que aquí consta en los antecedentes— son factores de riesgo."
      },
      {
        "prompt": "Nombre la conducta con el paciente",
        "answer": "Adrenalina intramuscular precoz, retirada del alérgeno, oxígeno y cristaloides; soporte de la vía aérea si hay compromiso y observación por riesgo de reacción bifásica."
      }
    ]
  },
  {
    "id": "subarachnoid-hemorrhage-sudden-headache",
    "specialtySlug": "internal-medicine",
    "title": "Desviación de la comisura labial y cefalea intensa",
    "reason": "Desviación de la comisura labial, cefalea intensa",
    "history": "Paciente masculino de 67 años que consulta por un cuadro clínico de 2 horas de evolución, caracterizado por cefalea súbita intensa, náuseas y vómitos, acompañado de disartria y desviación de la comisura labial.",
    "background": "Hipertensión arterial mal controlada. Infarto agudo de miocardio hace 10 años, con angioplastia en la descendente anterior.",
    "exam": "PA 210/110 mmHg · FC 100 lpm · FR 18 rpm · SatO₂ 93 %\nNeurológico: Glasgow 13, rigidez de nuca, desviación de la comisura labial.\nTAC de cerebro: imagen hiperdensa en las cisternas basales.",
    "labs": "Glucemia 110 mg/dL. Urea y creatinina normales. Electrocardiograma sin alteraciones.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Hemorragia subaracnoidea por rotura aneurismática",
      "Hemorragia intracerebral hipertensiva",
      "Meningitis bacteriana aguda",
      "Infarto cerebral isquémico"
    ],
    "correctIndex": 0,
    "rationales": [
      "La cefalea súbita e intensa con rigidez de nuca, vómitos y deterioro de conciencia, junto con sangre hiperdensa en las cisternas basales, define una hemorragia subaracnoidea; la hipertensión de 210/110 explica el factor de riesgo.",
      "La hemorragia intracerebral hipertensiva suele asentar en el parénquima —putamen, tálamo, protuberancia o cerebelo— y dar un déficit focal de instalación progresiva; aquí la sangre está en las cisternas y no en el parénquima.",
      "La meningitis aguda comparte cefalea y rigidez de nuca, pero cursa con fiebre y el líquido cefalorraquídeo es inflamatorio, no hemorrágico; la TAC no muestra sangre en las cisternas.",
      "El infarto isquémico puede debutar con disartria y desviación de la comisura labial, pero la TAC sería normal o hipodensa en las primeras horas, no hiperdensa en las cisternas."
    ],
    "hint": "Fíjate en el inicio en segundos, la rigidez de nuca y el lugar donde se deposita la sangre en la TAC.",
    "discussion": "Ingreso en cuidados neurocríticos con control de la vía aérea, analgesia y presión arterial moderadamente controlada sin provocar hipotensión. Nimodipino durante 21 días para prevenir el vasoespasmo, y estudio del aneurisma con angio-TAC o angiografía para ocluirlo de forma precoz. Si la TAC fuera negativa con sospecha persistente, se realiza punción lumbar. Hay que vigilar el resangrado, el vasoespasmo y la hidrocefalia.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Hemorragia subaracnoidea por rotura aneurismática. La cefalea súbita e intensa con náuseas y vómitos, la rigidez de nuca, el Glasgow de 13 y la imagen hiperdensa en las cisternas basales de la TAC configuran el cuadro."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Hemorragia intracerebral hipertensiva, meningitis aguda, infarto cerebral isquémico, trombosis venosa cerebral y encefalopatía hipertensiva. La instalación en segundos, la ausencia de fiebre y la distribución cisternal de la sangre separan la hemorragia subaracnoidea de las demás."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Rotura de un aneurisma sacular de la circulación cerebral, sobre todo en las bifurcaciones del polígono de Willis. En este paciente consta hipertensión arterial mal controlada —210/110 mmHg al ingreso— y cardiopatía isquémica previa con angioplastia, marcadores de enfermedad vascular. Tabaquismo, alcohol, edad avanzada y antecedente familiar de aneurisma son los otros factores clásicos."
      },
      {
        "prompt": "¿Cuál es la fisiopatología del cuadro clínico?",
        "answer": "La rotura vierte sangre arterial en el espacio subaracnoideo y eleva bruscamente la presión intracraneal: de ahí la cefalea máxima en segundos, los vómitos y el deterioro de conciencia. La sangre irrita las meninges y produce rigidez de nuca. La hemoglobina en las cisternas desencadena vasoespasmo entre los días 3 y 14 con isquemia cerebral, y puede obstruir la reabsorción del líquido cefalorraquídeo y causar hidrocefalia. La disartria y la desviación de la comisura labial corresponden al compromiso focal asociado al sangrado."
      },
      {
        "prompt": "¿Cuál es la conducta ante el cuadro clínico?",
        "answer": "Soporte vital con vía aérea permeable, analgesia y control moderado de la presión arterial evitando la hipotensión, en un medio con vigilancia neurológica. Nimodipino 60 mg cada 4 horas durante 21 días, prevención del estreñimiento y de los esfuerzos. Angio-TAC o angiografía para localizar el aneurisma y oclusión precoz por clipado o coil. Si la TAC es negativa y la sospecha persiste, punción lumbar a partir de las 12 horas; se vigilan resangrado, vasoespasmo e hidrocefalia."
      }
    ]
  },
  {
    "id": "septic-shock-severe-community-pneumonia",
    "specialtySlug": "internal-medicine",
    "title": "Disminución de conciencia, dolor torácico y hemoptisis",
    "reason": "Disminución de conciencia",
    "history": "Paciente de 35 años, sexo masculino, derivado a urgencias tras haber sido encontrado en la calle con disminución de la conciencia; agrega dolor en hemitórax derecho, hemoptisis y dolor abdominal. Pocos minutos después de la llegada presenta deterioro del nivel de conciencia.",
    "background": "Alcoholismo y drogodependencia.",
    "exam": "PA 80/40 mmHg · FC 138 lpm · FR 30 rpm · T 38 °C\nNeurológico: Glasgow 12/15.\nRespiratorio: crepitantes en ambos campos pulmonares.",
    "labs": "Neutropenia grave. Glucosa 19 (unidad no consignada). Trombocitopenia moderada. Creatinina 4,2. Gasometría: acidosis mixta; pH 6,7; PCO₂ 91; PO₂ 31; bicarbonato 6,7; Na 129. Lactato 25. TGO 138; LDH 390 (225).",
    "studies": "Imagen de tórax: múltiples consolidaciones bilaterales en lóbulos inferiores y colapso del lóbulo superior derecho. Se inicia antibioticoterapia empírica con piperacilina-tazobactam. El paciente intercurre con parada cardiorrespiratoria; se realiza reanimación cardiopulmonar avanzada sin éxito.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Shock séptico por neumonía grave adquirida en la comunidad",
      "Neumonía por Pneumocystis jirovecii",
      "Endocarditis infecciosa derecha con embolias pulmonares sépticas",
      "Neumonía aspirativa con absceso pulmonar por anaerobios"
    ],
    "correctIndex": 0,
    "rationales": [
      "Fiebre, hipotensión de 80/40 mmHg, lactocidemia de 25, acidosis mixta, creatinina de 4,2 y consolidaciones bilaterales con colapso lobar configuran un shock séptico con fallo multiorgánico de origen pulmonar en un paciente alcohólico y drogodependiente con neutropenia grave.",
      "La neumonía por Pneumocystis jirovecii da infiltrado intersticial bilateral y hipoxemia desproporcionada, no consolidaciones lobares con colapso, y por sí sola no explica el dolor torácico focal ni la neutropenia.",
      "La endocarditis derecha con embolias pulmonares sépticas es posible en un usuario de drogas intravenosas, pero produce infiltrados periféricos cambiantes y hemocultivos positivos, no consolidaciones bilaterales con colapso del lóbulo superior derecho.",
      "La neumonía aspirativa por anaerobios suele asentar en los segmentos dependientes del lóbulo inferior y evoluciona de forma subaguda; no justifica la fiebre alta con shock fulminante ni el colapso lobar descrito."
    ],
    "hint": "El foco está en el tórax, pero lo que mata es la reperfusión: cruza la presión de 80/40 con el lactato de 25 y la acidosis mixta.",
    "discussion": "Reanimación inmediata con vía aérea, oxígeno, dos accesos venosos, cristaloides y vasopresores para sostener la presión; hemocultivos y cultivos dirigidos antes de los antibióticos, que deben administrarse en la primera hora con cobertura de gramnegativos y anaerobios. Corregir la glucemia, el sodio y el potasio, valorar transfusión por la trombocitopenia y trasladar a cuidados intensivos. En este caso la evolución fue hacia la parada cardiorrespiratoria refractaria.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Shock séptico por neumonía grave adquirida en la comunidad, con fallo multiorgánico: deterioro del nivel de conciencia, insuficiencia renal aguda, acidosis mixta y lactato de 25."
      },
      {
        "prompt": "¿Cuáles serían los diagnósticos diferenciales?",
        "answer": "Neumonía por Pneumocystis jirovecii, endocarditis infecciosa derecha con embolias pulmonares sépticas, neumonía aspirativa con absceso por anaerobios, tuberculosis pulmonar y tromboembolismo pulmonar con infarto. La neutropenia grave obliga además a considerar infecciones por gérmenes oportunistas."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "El cuadro corresponde a una neumonía bacteriana grave que evoluciona a sepsis; la viñeta no identifica el germen. Son factores de riesgo el alcoholismo, la drogodependencia y la neutropenia grave, que reducen la defensa frente a la colonización orofaríngea y favorecen la aspiración y la diseminación."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "La microaspiración de secreciones colonizadas alcanza el alvéolo y produce consolidación e inundación del espacio aéreo, con hipoxemia y colapso lobar. La respuesta inflamatoria sistémica genera vasodilatación y extravasación capilar —shock distributivo—, hipoperfusión tisular con lactato de 25, acidosis mixta y fracaso renal agudo con creatinina de 4,2."
      },
      {
        "prompt": "¿Cuál sería la conducta y el tratamiento?",
        "answer": "Soporte vital inmediato: vía aérea, oxígeno, accesos venosos, cristaloides y noradrenalina para alcanzar presión de perfusión. Cultivos y antibioticoterapia empírica de amplio espectro en la primera hora, con cobertura de gramnegativos y anaerobios, junto con corrección de glucemia y electrolitos y valoración transfusional. Traslado a cuidados intensivos y reevaluación del foco."
      }
    ]
  },
  {
    "id": "dengue-warning-signs-abdominal-pain",
    "specialtySlug": "internal-medicine",
    "title": "Dolor abdominal y fiebre de seis días",
    "reason": "Dolor abdominal y fiebre",
    "history": "Paciente de 30 años, sexo masculino, que consulta por un cuadro de 6 días de evolución caracterizado por dolor abdominal tipo cólico, epigástrico, de moderada intensidad (7/10), irradiado a flancos y mesogastrio, con náuseas, vómitos y alzas térmicas de 39 °C.",
    "background": "No refiere antecedentes de interés.",
    "exam": "PA 130/70 mmHg · FC 95 lpm · FR 25 rpm · T 38,5 °C\nPiel y mucosas: palidez cutánea generalizada.\nAbdomen: globoso, peristaltismo presente, blando, depresible, doloroso a la palpación superficial y profunda en epigastrio y flancos, sin hepatomegalia ni signos de irritación peritoneal.",
    "labs": "Hipertransaminasemia. Hematocrito 35,4 %; hemoglobina 12 g/dL; plaquetas 97 000; leucocitos 4000. Sodio 132 mEq/L. Creatinina 8,6 mg/dL. Coagulograma normal.",
    "studies": "Ecografía abdominal: líquido libre en escasa cantidad. Se solicita panel viral para arbovirosis.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Dengue con signos de alarma en fase crítica",
      "Leptospirosis grave (enfermedad de Weil)",
      "Pielonefritis aguda complicada",
      "Pancreatitis aguda intersticial"
    ],
    "correctIndex": 0,
    "rationales": [
      "Al sexto día de fiebre, el descenso térmico con dolor abdominal, vómitos, líquido libre en la ecografía, plaquetas de 97 000, leucocitos de 4000 y transaminasas elevadas corresponde a la fase crítica del dengue con signos de alarma, en la que la extravasación plasmática explica el líquido libre; la palidez cutánea acompaña la fase de defervescencia.",
      "La leptospirosis comparte fiebre, dolor abdominal, trombocitopenia y fallo renal, y es la alternativa más cercana, pero suele añadir ictericia con bilirrubina elevada, mialgias intensas y sufusión conjuntival, y el cuadro hematológico con líquido libre apunta a extravasación plasmática por dengue.",
      "La pielonefritis aguda da fiebre y dolor en el flanco, pero cursa con leucocitosis, síntomas urinarios y piuria, y no explica la leucopenia, la trombocitopenia ni las transaminasas elevadas.",
      "La pancreatitis aguda reproduce el dolor epigástrico irradiado a flancos, los vómitos y el líquido libre, pero requeriría amilasa y lipasa elevadas, y no explica las citopenias ni la hipertransaminasemia del caso."
    ],
    "hint": "Sitúa el día de la enfermedad junto al hemograma: la caída de plaquetas y leucocitos con líquido libre no encaja en un abdomen quirúrgico.",
    "discussion": "Cristaloides isotónicos ajustados al estado hemodinámico, paracetamol como único antitérmico y analgésico, y prohibición de AINE, aspirina e inyecciones intramusculares. Control diario de hematocrito, plaquetas y diuresis hasta 24-48 horas después de la defervescencia, vigilando el shock por extravasación. La lesión renal aguda obliga a ajustar líquidos, evitar nefrotóxicos y valorar depuración extrarrenal; no se transfunden plaquetas de forma profiláctica ni se usan corticoides.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál sería el diagnóstico presuntivo?",
        "answer": "Dengue con signos de alarma en fase crítica. El sexto día de fiebre con defervescencia, dolor abdominal, vómitos, líquido libre en la ecografía, plaquetas de 97 000, leucocitos de 4000 e hipertransaminasemia configuran el cuadro, y la solicitud de panel viral para arbovirosis lo respalda. La creatinina de 8,6 mg/dL añade una lesión renal aguda que complica la evolución."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Leptospirosis grave, pielonefritis aguda, pancreatitis aguda, colecistitis o colangitis, apendicitis o abdomen quirúrgico incipiente, fiebre tifoidea y otras arbovirosis como chikungunya y Zika. La leptospirosis es la alternativa más difícil de separar, porque comparte fiebre, dolor abdominal, trombocitopenia y fallo renal."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Infección por virus del dengue (DENV 1-4) transmitida por mosquitos Aedes, sobre todo Aedes aegypti, de hábitos diurnos. El riesgo de dengue grave aumenta con una segunda infección por un serotipo distinto, la edad extrema, el embarazo y las comorbilidades. La exposición en zonas endémicas y el control deficiente de criaderos son los factores epidemiológicos principales."
      },
      {
        "prompt": "¿Cuál es la fisiopatología de la enfermedad?",
        "answer": "La infección por DENV induce una respuesta inflamatoria con aumento de la permeabilidad capilar, que en la fase crítica —entre el tercer y el séptimo día, coincidiendo con la defervescencia— produce extravasación de plasma al intersticio y a las cavidades serosas. Esa extravasación explica el líquido libre, la hemoconcentración relativa y el riesgo de shock. La trombocitopenia y la leucopenia acompañan el cuadro, y la hipoperfusión y la inflamación sistémica pueden lesionar el riñón y el hígado."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Hidratación con cristaloides isotónicos según el estado hemodinámico, paracetamol como antipirético y analgésico, y evitar AINE, aspirina e inyecciones intramusculares por el riesgo hemorrágico. Monitorizar hematocrito, plaquetas, diuresis y signos de alarma hasta 24-48 horas después de la defervescencia, y manejar el shock con bolos de cristaloides. En este paciente se añade el manejo de la lesión renal aguda, con ajuste de líquidos, retirada de nefrotóxicos y valoración de depuración extrarrenal; no se usan corticoides ni transfusión profiláctica de plaquetas."
      }
    ]
  },
  {
    "id": "pneumocystis-pneumonia-copd-hypercapnia",
    "specialtySlug": "internal-medicine",
    "title": "Disnea progresiva y tos con expectoración",
    "reason": "Tos y dificultad respiratoria",
    "history": "Paciente de 40 años, sexo femenino, con antecedentes de tabaquismo, consumidora de heroína y cocaína inhalada, y antecedente de EPOC grave con FEV1 del 48 %. Acude a urgencias por disnea progresiva de 72 horas de evolución, tos con expectoración blanquecina, cefalea holocraneal, sensación febril, y agrega mialgias y artralgias con astenia intensa.",
    "exam": "Glasgow 13/15 · PA 115/70 mmHg · FR 22 rpm · T 37,7 °C\nPulmonar: sibilancias inspiratorias y espiratorias, crepitantes de predominio basal.",
    "labs": "Linfopenia. LDH y PCR elevadas. Gasometría arterial: pH 7,18; PCO2 118; PO2 71; BI 44.",
    "studies": "Tórax: hiperinsuflación pulmonar e infiltrado intersticial bilateral de predominio",
    "question": "La gasometría muestra pH 7,18, PCO₂ 118 mmHg, PO₂ 71 mmHg y bicarbonato 44 mEq/L. ¿Qué trastorno ácido-base describe?",
    "options": [
      "Acidosis respiratoria aguda sobre crónica",
      "Acidosis metabólica con compensación respiratoria",
      "Alcalosis respiratoria aguda",
      "Acidosis respiratoria aguda sin componente crónico"
    ],
    "correctIndex": 0,
    "rationales": [
      "El pH bajo con una PCO₂ de 118 mmHg define acidosis respiratoria; un bicarbonato de 44 mEq/L no se alcanza en 72 horas, así que hay retención crónica previa: acidosis respiratoria aguda sobre crónica.",
      "La acidosis metabólica daría bicarbonato bajo y una PCO₂ descendida por compensación, no una PCO₂ de 118 con bicarbonato de 44.",
      "La alcalosis respiratoria cursa con pH alto y PCO₂ baja, lo contrario de esta gasometría.",
      "Si fuera solo aguda, el bicarbonato estaría cerca de lo normal (22-26 mEq/L); un valor de 44 indica retención crónica de CO₂."
    ],
    "hint": "Un bicarbonato de 44 no se genera en 72 horas: piensa qué componente es antiguo.",
    "discussion": "Oxígeno titulado con objetivo de saturación del 88-92 %, broncodilatadores y corticosteroides sistémicos, y ventilación no invasiva si el pH de 7,18 se mantiene y la paciente colabora. Se añade tratamiento antibiótico de la agudización y cobertura de Pneumocystis jirovecii, con estudio de inmunosupresión y de la cefalea. El Glasgow de 13/15 obliga a vigilar el nivel de conciencia y a descartar compromiso neurológico.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Neumonía por Pneumocystis jirovecii sobre una EPOC grave, con insuficiencia respiratoria hipercápnica agudizada: PCO2 de 118, pH de 7,18 y bicarbonato de 44, con linfopenia, LDH elevada e infiltrado intersticial bilateral."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Agudización de EPOC por infección bacteriana, neumonía viral bilateral, edema agudo de pulmón cardiogénico, tuberculosis pulmonar y neumonía atípica. La cefalea holocraneal con Glasgow de 13/15 obliga además a descartar una infección del sistema nervioso central."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Pneumocystis jirovecii es un hongo oportunista que ataca a pacientes con inmunosupresión celular; la linfopenia de esta paciente es la clave y debe completarse el estudio, incluida la infección por VIH. Suman riesgo el tabaquismo, la EPOC grave, el consumo de heroína y cocaína inhaladas y la desnutrición asociada al consumo de drogas."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El microorganismo se adhiere al neumocito tipo I y produce una alveolitis con exudado eosinófilo, lo que altera la difusión y genera hipoxemia con infiltrado intersticial bilateral. Sobre una EPOC con FEV1 del 48 % y atrapamiento aéreo, el aumento del trabajo respiratorio y la fatiga de los músculos respiratorios llevan a hipoventilación alveolar: el CO2 asciende a 118, el bicarbonato compensa hasta 44 de forma crónica y el pH cae a 7,18 cuando la compensación ya no alcanza."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Soporte con oxígeno titulado al 88-92 %, broncodilatadores, corticosteroides sistémicos y ventilación no invasiva si persiste la acidosis con pH de 7,18 y hay colaboración. Tratamiento antibiótico de la agudización y cobertura específica de Pneumocystis jirovecii, con valoración de corticosteroides asociados por la hipoxemia. Ingreso con monitorización, estudio de inmunosupresión y evaluación dirigida de la cefalea y del nivel de conciencia."
      }
    ]
  },
  {
    "id": "acute-viral-hepatitis-jaundice",
    "specialtySlug": "internal-medicine",
    "title": "Astenia, ictericia y artralgias",
    "reason": "Debilidad, cansancio",
    "history": "Paciente de 25 años que consulta por un cuadro clínico de 48 horas de evolución caracterizado por astenia, anorexia y adinamia extrema, con artralgias de pequeñas articulaciones e ictericia. Refiere además episodios de alzas térmicas no cuantificadas.",
    "background": "Apendicitis aguda a los 15 años.",
    "exam": "PA 110/0 mmHg · FC 70 lpm · FR 20 rpm · SatO₂ 99 %\nPiel y mucosas: ictéricas, hidratadas.\nAbdomen: ruidos hidroaéreos presentes; blando, depresible, doloroso a la palpación de cuadrantes superiores con predominio derecho.\nRespiratorio: sin alteraciones.",
    "labs": "Proteínas totales 6 mg/dL. Bilirrubina directa 4 mg/dL. Albúmina 4,0. Bilirrubina total 6 mg/dL. Transaminasas: TGO 3450, TGP 3300. TP 14 segundos, TTPA 30 segundos. Amilasa 50, lipasa 140.",
    "studies": "Ecografía abdominal: leve inflamación hepática, sin dilatación de las vías extrahepáticas; páncreas de ecogenicidad normal.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Hepatitis aguda viral",
      "Colangitis aguda por coledocolitiasis",
      "Hepatitis autoinmune",
      "Hepatitis tóxica por fármacos"
    ],
    "correctIndex": 0,
    "rationales": [
      "El pródromo de astenia, anorexia, fiebre y artralgias de pequeñas articulaciones, seguido de ictericia con bilirrubina directa predominante y transaminasas en miles, es el patrón de una hepatitis aguda viral; la ecografía descarta la obstrucción biliar.",
      "La colangitis comparte fiebre, ictericia y dolor en el hipocondrio derecho, pero cursa con dilatación de la vía biliar y colestasis, no con transaminasas de 3450 y 3300 con vía biliar no dilatada.",
      "La hepatitis autoinmune da el mismo patrón hepatocelular, pero suele instaurarse de forma subaguda, sin fiebre alta ni pródromo artralgico, y predomina en mujeres; se confirma con autoanticuerpos e IgG.",
      "La hepatitis tóxica produce también necrosis hepatocelular, pero exige el antecedente de fármaco o tóxico —aquí no consta— y no explica el pródromo febril con artralgias."
    ],
    "hint": "Ictericia con transaminasas en miles y una ecografía sin dilatación biliar apuntan al parénquima hepático, no a la vía biliar.",
    "discussion": "Ingreso con medidas de higiene y aislamiento de contacto, hidratación y control de electrolitos, glucemia y coagulación; suspender hepatotóxicos y ajustar fármacos. Solicitar serología de hepatitis A, B, C y E, autoanticuerpos y perfil tóxico, y vigilar la encefalopatía o el descenso del TP. La mayoría de las hepatitis virales agudas se resuelven con tratamiento de soporte.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Hepatitis aguda de probable origen viral, con ictericia, fiebre y artralgias, necrosis hepatocelular marcada (TGO 3450, TGP 3300) y vía biliar no dilatada en la ecografía."
      },
      {
        "prompt": "¿Cuál es el diagnóstico diferencial?",
        "answer": "Colangitis aguda por coledocolitiasis, hepatitis autoinmune, hepatitis tóxica o medicamentosa, hepatitis isquémica, pancreatitis aguda y otras causas de ictericia obstructiva o hemolítica."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Infección por virus hepatotropos —A, B, C o E—, que la viñeta no permite precisar sin serología; el pródromo con artralgias de pequeñas articulaciones es característico de la hepatitis B. La edad joven y la exposición fecal-oral u oral-sangre son los factores de riesgo habituales; el antecedente de apendicitis no se relaciona."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "La respuesta inmunitaria frente a los hepatocitos infectados produce necrosis y liberación de transaminasas. La colestasis intrahepática eleva la bilirrubina conjugada y la ictericia. Los complejos inmunes explican la fiebre y las artralgias del pródromo, y la afectación grave puede alterar la síntesis de factores de coagulación."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Tratamiento de soporte: hidratación, control de electrolitos y glucemia, y vigilancia de la coagulación y del estado neurológico. Se suspenden los hepatotóxicos y se evita el alcohol, con serología viral y estudio etiológico dirigido. La hepatitis fulminante —encefalopatía o TP prolongado— obliga a valorar traslado a unidad de trasplante."
      }
    ]
  },
  {
    "id": "iron-deficiency-anemia-gastric-neoplasm",
    "specialtySlug": "internal-medicine",
    "title": "Astenia de 2 meses",
    "reason": "Astenia de 2 meses",
    "history": "Paciente de 41 años, sexo femenino, que consulta por astenia de 2 meses de evolución, sin anorexia ni pérdida de peso y sin alteración del hábito intestinal. Actualmente en lactancia materna de su hija de 3 años.",
    "background": "No refiere antecedentes de interés.",
    "exam": "PA 100/60 mmHg · FC 105 lpm · FR 20 rpm · T 37 °C · SatO₂ 98 %\nPiel y mucosas: hidratadas, pálidas.\nResto del examen físico sin alteraciones.",
    "labs": "Hemoglobina 6 g/dL. Urea 60 mg/dL. Creatinina 1,6 mg/dL. Ionograma normal. Sangre oculta en heces: positiva.",
    "studies": "Endoscopia digestiva alta y colonoscopia: neoplasia en cuerpo gástrico.\nTAC de abdomen: no evidencia de metástasis. Se indica cirugía laparoscópica.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Anemia ferropénica secundaria a neoplasia gástrica",
      "Anemia ferropénica por lactancia prolongada y déficit dietético",
      "Anemia megaloblástica por déficit de vitamina B12",
      "Anemia por enfermedad crónica"
    ],
    "correctIndex": 0,
    "rationales": [
      "La hemoglobina de 6 g/dL con palidez y taquicardia, la sangre oculta en heces positiva, la lesión neoplásica del cuerpo gástrico y la mejoría con hierro configuran una anemia ferropénica por sangrado digestivo crónico.",
      "La lactancia prolongada y el déficit dietético pueden agravar una ferropenia, pero no explican la sangre oculta en heces positiva ni la neoplasia gástrica demostrada por endoscopia.",
      "La anemia megaloblástica por déficit de vitamina B12 da anemia macrocítica, a menudo con afectación neurológica; aquí la pérdida digestiva de sangre y la respuesta al hierro apuntan a ferropenia.",
      "La anemia de enfermedad crónica acompaña a procesos inflamatorios o tumorales, pero cursa con depósitos de hierro bloqueados y no con sangrado digestivo oculto que responde al hierro."
    ],
    "hint": "Fíjate en la pérdida crónica de sangre y en cómo respondió la anemia al hierro.",
    "discussion": "Anemia ferropénica grave sintomática: valorar transfusión si hay inestabilidad o hemoglobina muy baja y corregir el déficit con hierro intravenoso, seguido de hierro oral. El tratamiento de fondo es oncológico: cirugía laparoscópica tras la estadificación, que aquí no muestra metástasis. Control de la hemoglobina, erradicación de Helicobacter pylori si procede y seguimiento posterior.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Anemia ferropénica grave secundaria a neoplasia del cuerpo gástrico, con sangrado digestivo crónico oculto. Lo apoyan la hemoglobina de 6 g/dL, la sangre oculta en heces positiva, la lesión endoscópica y la mejoría de los parámetros de anemia con hierro."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Anemia megaloblástica por déficit de vitamina B12 o folato, anemia de trastornos crónicos, anemia hemolítica, anemia por insuficiencia renal —la creatinina es de 1,6 mg/dL— y mielodisplasia. También otras causas de sangrado digestivo crónico, como úlcera péptica, angiodisplasia o varices."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Adenocarcinoma gástrico como causa del sangrado crónico. Son factores de riesgo la infección por Helicobacter pylori, la gastritis atrófica, el tabaco, el consumo de alimentos salados o ahumados, el antecedente familiar de cáncer gástrico y el grupo sanguíneo A. La lactancia y las pérdidas menstruales pueden agravar la ferropenia, pero no la explican por sí solas."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El tumor ulcera la mucosa gástrica y sangra de forma continua y oculta, de modo que la pérdida de hierro supera su absorción. Se agotan los depósitos de hierro y la eritropoyesis se vuelve ferropénica, con anemia microcítica e hipocrómica. La hemoglobina baja reduce el transporte de oxígeno y produce astenia, palidez y taquicardia compensadora."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Corregir la anemia con hierro intravenoso —ya recibido— y después hierro oral, con transfusión si hay inestabilidad hemodinámica o hemoglobina muy baja. El tratamiento de fondo es la resección quirúrgica laparoscópica tras la estadificación, que en este caso no muestra metástasis. Se añade erradicación de Helicobacter pylori si está presente y control posterior de la hemoglobina."
      }
    ]
  },
  {
    "id": "sars-cov-2-pneumonia-pleural-effusion",
    "specialtySlug": "internal-medicine",
    "title": "Fiebre, dolor pleurítico y disnea",
    "reason": "Fiebre, dolor pleurítico y disnea",
    "history": "Paciente de 63 años, sexo femenino, que consulta por un cuadro de 5 días de evolución caracterizado por febrícula (37,7 °C), tos no productiva, náuseas, cefalea, astenia y artromialgias, al que se añaden en las últimas 48 horas dolor pleurítico en la región costal derecha y disnea progresiva hasta mínimos esfuerzos, con trepopnea derecha.",
    "exam": "PA 117/77 mmHg · FC 90 lpm · FR 35 rpm · SatO₂ 85 % (99 % con reservorio)\nPiel y mucosas: hidratada y perfundida.\nPulmonar: hipofonía en la base derecha con disminución de las vibraciones vocales; crepitantes en el campo medio derecho y en la base izquierda.\nMama: masa pétrea de 3 cm en el cuadrante superoexterno de la mama derecha.",
    "labs": "Dímero D y LDH elevados. Urea y creatinina elevadas. Gasometría: hipoxemia con alcalosis respiratoria.",
    "studies": "Radiografía de tórax: infiltrado alveolointersticial bilateral, más marcado en el lóbulo superior izquierdo, con derrame pleural derecho y atelectasia del lóbulo inferior derecho.\nAngio-TC de arterias pulmonares: solicitada por la hipoxemia con alcalosis respiratoria, el dolor pleurítico, el derrame pleural unilateral y el dímero D elevado, en contexto epidemiológico de SARS-CoV-2.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Neumonía por SARS-CoV-2 con derrame pleural derecho",
      "Tromboembolia pulmonar con infarto pulmonar",
      "Carcinoma de mama con derrame pleural maligno",
      "Neumonía bacteriana con derrame paraneumónico"
    ],
    "correctIndex": 0,
    "rationales": [
      "El cuadro febril de cinco días con mialgias, el infiltrado alveolointersticial bilateral, la hipoxemia con alcalosis respiratoria, la LDH elevada y el contexto epidemiológico de SARS-CoV-2 configuran una neumonía viral; el derrame derecho con atelectasia explica la hipofonía, la disminución de las vibraciones vocales y la trepopnea.",
      "La tromboembolia explica el dolor pleurítico, la hipoxemia y el dímero D elevado, pero no la fiebre de cinco días, las mialgias ni el infiltrado bilateral; el dímero D es inespecífico en la infección y la angio-TC se solicitó precisamente para descartarla.",
      "La masa pétrea obliga a estudiarla, pero un derrame maligno no produce un cuadro febril agudo con mialgias e infiltrado bilateral; además, el derrame es unilateral y se acompaña de atelectasia pasiva.",
      "La neumonía bacteriana con derrame paraneumónico es posible, pero el patrón intersticial bilateral, el contexto epidémico y la ausencia de expectoración purulenta favorecen la etiología viral."
    ],
    "hint": "Separa el proceso agudo febril del hallazgo mamario y comprueba qué explica un infiltrado bilateral con hipoxemia.",
    "discussion": "Ingreso con oxigenoterapia para mantener una saturación superior al 92-94 %, corticoide sistémico si precisa oxígeno, profilaxis tromboembólica y control analítico y gasométrico. El derrame derecho se maneja según su tamaño y repercusión, y la atelectasia pasiva se resuelve al tratar la causa. La masa mamaria pétrea se estudia con triple evaluación —clínica, imagen y biopsia— una vez superada la fase aguda.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Neumonía por SARS-CoV-2 con derrame pleural derecho y atelectasia del lóbulo inferior derecho. El cuadro agudo febril con mialgias y el infiltrado alveolointersticial bilateral en contexto epidémico son los datos que lo sostienen."
      },
      {
        "prompt": "¿Cuál es el diagnóstico diferencial?",
        "answer": "Tromboembolia pulmonar con infarto, neumonía bacteriana con derrame paraneumónico, derrame pleural maligno por carcinoma de mama, insuficiencia cardíaca con edema pulmonar y neumonitis por otros virus. La masa mamaria hace obligado considerar el origen maligno del derrame."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Infección por SARS-CoV-2 en una paciente de 63 años, en un contexto epidemiológico compatible. La edad y la afectación pulmonar bilateral con hipoxemia son los factores que condicionan la gravedad. La masa mamaria es un hallazgo independiente que exige estudio, no un factor de riesgo del cuadro respiratorio agudo."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El virus lesiona el epitelio alveolar y desencadena una respuesta inflamatoria difusa que altera la relación ventilación-perfusión y produce hipoxemia; la hiperventilación compensadora genera alcalosis respiratoria. El derrame pleural derecho comprime el lóbulo inferior y añade un componente restrictivo, con hipofonía, disminución de las vibraciones vocales y trepopnea."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Oxigenoterapia titulada, corticoide sistémico si requiere oxígeno, profilaxis tromboembólica y control de la gasometría y de la función renal. Se trata el derrame según su tamaño y repercusión y se vigila la sobreinfección bacteriana. La masa mamaria se completa con triple evaluación tras la fase aguda."
      }
    ]
  },
  {
    "id": "diabetic-ketoacidosis-debut",
    "specialtySlug": "internal-medicine",
    "title": "Poliuria y polidipsia",
    "reason": "Poliuria y polidipsia",
    "history": "Paciente de 38 años, sexo masculino, que acude a emergencia por un cuadro de 2 días de evolución caracterizado por malestar general, poliuria y polidipsia intensa.",
    "background": "No refiere antecedentes de interés.",
    "exam": "PA 120/70 mmHg · FC 95 lpm · T 37,8 °C · SatO₂ 98 %\nPiel y mucosas: deshidratadas.\nAbdomen: dolor abdominal espontáneo, ruidos hidroaéreos presentes, blando y depresible, no doloroso a la palpación superficial ni profunda.",
    "labs": "Glucemia 611 mg/dL. HbA1c 12 %. Hemograma normal. pH 7,11; bicarbonato 9,5 mEq/L; anión gap 17; lactato 2,3 mmol/L. Orina: cuerpos cetónicos +++ y glucosa +++.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Cetoacidosis diabética",
      "Estado hiperosmolar hiperglucémico",
      "Acidosis láctica",
      "Cetoacidosis alcohólica"
    ],
    "correctIndex": 0,
    "rationales": [
      "Hiperglucemia de 611 mg/dL, cetonuria marcada, pH 7,11 y bicarbonato de 9,5 mEq/L definen cetoacidosis diabética; la HbA1c del 12 % sugiere un debut.",
      "El estado hiperosmolar alcanza glucemias más altas y osmolaridad elevada, pero sin cetosis ni acidosis metabólica significativa.",
      "La acidosis láctica da pH bajo con lactato elevado; aquí el lactato es 2,3 mmol/L y la cetosis es la que explica la acidosis.",
      "La cetoacidosis alcohólica cursa con cetosis y acidosis, pero con glucemia normal o baja, no con 611 mg/dL."
    ],
    "hint": "Cruza glucemia, cetonuria y gasometría: los tres tienen que encajar en el mismo cuadro.",
    "discussion": "Hidratación con cristaloides isotónicos y corrección del potasio antes de iniciar insulina —no se inicia con potasio inferior a 3,3 mEq/L—; después infusión de insulina rápida con control horario de glucemia y electrolitos, y búsqueda del factor desencadenante. El bicarbonato se reserva para pH inferior a 6,9.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico del paciente?",
        "answer": "Cetoacidosis diabética como debut de diabetes mellitus, con deshidratación y acidosis metabólica de anión gap elevado."
      },
      {
        "prompt": "¿Cuál es el diagnóstico diferencial?",
        "answer": "Estado hiperosmolar hiperglucémico, acidosis láctica, cetoacidosis alcohólica, acidosis por tóxicos (metanol o salicilatos) y cetosis de ayuno."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Déficit absoluto de insulina —aquí un debut diabético con HbA1c del 12 %— desencadenado por infección, transgresión dietética o mal cumplimiento. La deshidratación y la propia cetosis agravan el cuadro."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El déficit de insulina impide la entrada de glucosa en la célula y activa la lipólisis, con producción de cuerpos cetónicos —sobre todo 3-β-hidroxibutirato— que consumen bicarbonato y generan acidosis de anión gap elevado. La diuresis osmótica provoca deshidratación y pérdida de potasio."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Cristaloides isotónicos, corrección del potasio antes de la insulina —no se inicia si el potasio es inferior a 3,3 mEq/L— y perfusión de insulina rápida; control horario de glucemia, cetonemia y electrolitos. Se busca y se trata el desencadenante, y el bicarbonato se reserva para un pH inferior a 6,9."
      }
    ]
  },
  {
    "id": "palpitations-paroxysmal-svt",
    "specialtySlug": "internal-medicine",
    "title": "Palpitaciones y taquiarritmia supraventricular",
    "reason": "Palpitaciones",
    "history": "Paciente de 63 años que consulta por un cuadro de 24 horas de evolución caracterizado por malestar general y palpitaciones. Se realiza electrocardiograma que evidencia taquiarritmia supraventricular con respuesta ventricular de 140.",
    "background": "Hipertensión arterial de 5 años en tratamiento con enalapril. Tabaquismo de 10 cigarrillos al día. Bebedor diario de una copa de vino. Sedentarismo; IMC 26.",
    "exam": "PA 125/80 mmHg · FC 66 lpm · FR 20 rpm · T normal · SatO₂ 99 %\nCardiovascular: no se auscultan soplos carotídeos; ritmo cardíaco sinusal sin soplos.\nPulmonar: normoventilación, sin ruidos sobreañadidos.\nPulsos: periféricos presentes y simétricos, sin edemas.",
    "labs": "",
    "question": "El ECG registra una taquiarritmia supraventricular con respuesta ventricular de 140 lpm que revierte antes del ingreso. ¿Cómo se clasifica el episodio?",
    "options": [
      "Taquiarritmia supraventricular",
      "Taquiarritmia ventricular",
      "Bradiarritmia sintomática",
      "Bloqueo auriculoventricular completo"
    ],
    "correctIndex": 0,
    "rationales": [
      "El propio ECG la define como supraventricular y la frecuencia de 140 lpm la convierte en taquiarritmia; que revierta sola y el episodio ceda la clasifica como paroxística.",
      "La taquiarritmia ventricular tiene origen en el ventrículo y un trazado distinto; el informe del ECG la descarta explícitamente.",
      "La bradiarritmia cursa con frecuencias bajas, no con 140 lpm.",
      "El bloqueo auriculoventricular completo produce bradicardia y disociación, no una respuesta ventricular de 140 lpm."
    ],
    "hint": "El ECG ya dice de dónde viene y a qué velocidad va: clasifica, no adivines el subtipo.",
    "discussion": "El episodio revirtió de forma espontánea, así que la conducta es documentarlo y buscar la causa: electrocardiograma de 12 derivaciones, monitorización o Holter, función tiroidea y electrolitos. Si reaparece con inestabilidad, cardioversión sincronizada; si está estable, maniobras vagales y adenosina. Se controlan los desencadenantes —tabaco, alcohol, hipertensión— y se valora ablación si las recurrencias son frecuentes.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Taquicardia supraventricular paroxística: una taquiarritmia supraventricular de 140 lpm documentada por electrocardiograma, que revirtió espontáneamente a ritmo sinusal a 66 lpm."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Fibrilación auricular paroxística, flutter auricular con bloqueo 2:1, taquicardia sinusal por causa secundaria y taquicardia por reentrada nodal o por vía accesoria. También se consideran el hipertiroidismo, la anemia y el consumo de estimulantes como causas de taquicardia."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "El mecanismo habitual es un circuito de reentrada en el nodo auriculoventricular o a través de una vía accesoria; en esta viñeta no hay cardiopatía estructural demostrada. Como factores del paciente constan la hipertensión arterial de 5 años, el tabaquismo de 10 cigarrillos al día, el consumo diario de alcohol, el sedentarismo y la edad de 63 años, todos ellos capaces de favorecer o desencadenar el episodio."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "Un impulso prematuro entra en un circuito de reentrada, nodal o auriculoventricular, y lo recorre de forma circular; cada vuelta despolariza los ventrículos, de modo que la frecuencia ventricular depende de la velocidad del circuito y no del nodo sinusal. La conducción es por vía suprahisiana, por lo que el complejo QRS es estrecho. La arritmia suele empezar y terminar de forma brusca, y al cesar el circuito el nodo sinusal retoma el mando."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Con el paciente ya en ritmo sinusal, la conducta es documentar el episodio con electrocardiograma, monitorización u Holter y descartar causas secundarias con función tiroidea, hemograma y electrolitos. En una recurrencia inestable se impone cardioversión sincronizada; en una recurrencia estable, maniobras vagales y adenosina. Se corrigen los desencadenantes —tabaco, alcohol, control de la hipertensión— y se plantea ablación del circuito si las crisis se repiten."
      }
    ]
  },
  {
    "id": "acute-ischemic-stroke-right-mca",
    "specialtySlug": "internal-medicine",
    "title": "Pérdida del equilibrio y hemiparesia izquierda",
    "reason": "Pérdida del equilibrio",
    "history": "Paciente de 44 años, sexo femenino, que consulta por un cuadro clínico de inicio súbito con pérdida del equilibrio, acompañado de hemiparesia en hemicuerpo izquierdo y asociado a cefalea holocraneal.",
    "background": "Cefalea crónica (migrañosa) con auras visuales desde la juventud. Hace 8 años presentó un episodio de cefalea de características migrañosas con trastorno del habla, paresia e hipoestesia en la extremidad superior izquierda.",
    "exam": "PA 107/67 mmHg · T 36 °C · Glucemia 74 mg/dL\nNeurológico: vigil y orientada en tiempo, espacio y persona; lenguaje normal, disartria moderada; pupilas isocóricas y normorreactivas; campimetría por confrontación con hemianopsia homónima izquierda.\nSistema vestibular hipofuncionante.\nParesia facial periférica izquierda completa.\nHemiparesia braquiocrural izquierda con hemihipoestesia izquierda; reflejos 2/5 globales.",
    "labs": "",
    "studies": "Doppler transcraneal: oclusión de la arteria cerebral media derecha.\nResonancia magnética cerebral: lesión isquémica en lóbulo frontal derecho y en sustancia blanca, con retraso del tiempo circulatorio en el territorio irrigado por la arteria cerebral media.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Infarto cerebral isquémico en territorio de la arteria cerebral media derecha",
      "Hemiplejía migrañosa con aura persistente",
      "Hemorragia intracerebral lobar derecha",
      "Isquemia vertebrobasilar (síndrome de Wallenberg)"
    ],
    "correctIndex": 0,
    "rationales": [
      "El déficit de instauración súbita que reúne hemiparesia, hemihipoestesia y hemianopsia homónima izquierdas, con disartria, traduce una lesión hemisférica derecha; el Doppler documenta la oclusión de la arteria cerebral media derecha y la resonancia la lesión isquémica con retraso circulatorio en ese territorio.",
      "La hemiplejía migrañosa reproduce el déficit de forma transitoria durante el aura, sin oclusión arterial ni lesión establecida; aquí el déficit es persistente y la imagen muestra un infarto.",
      "La hemorragia lobar derecha también produce hemiparesia y cefalea, pero la resonancia describe una lesión isquémica sin sangre y el Doppler una oclusión arterial.",
      "El síndrome de Wallenberg cursa con disartria, vértigo y afectación facial, pero sus signos son cruzados —hemicara ipsilateral y hemicuerpo contralateral— y no explica la hemiparesia ni la hemianopsia homónima del mismo lado."
    ],
    "hint": "El inicio súbito y la suma de déficit motor, sensitivo y campimétrico en el mismo hemicuerpo apuntan a una lesión única de un hemisferio, no a un aura.",
    "discussion": "Código ictus: TC craneal sin contraste para descartar hemorragia y valorar trombólisis intravenosa dentro de las primeras 4,5 horas si no hay contraindicaciones; en oclusión de gran vaso, trombectomía mecánica según ventana y criterios de imagen. Ingreso en unidad de ictus con antiagregación precoz y control de glucemia y temperatura; no descender la presión arterial salvo cifras muy elevadas o antes de la reperfusión. Estudio etiológico —ECG, Holter, ecocardiograma y troncos supraaórticos— para la prevención secundaria.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico de la paciente?",
        "answer": "Infarto cerebral isquémico agudo en el territorio de la arteria cerebral media derecha, con hemiparesia, hemihipoestesia y hemianopsia homónima izquierdas y disartria. El Doppler transcraneal documenta la oclusión de la arteria cerebral media derecha y la resonancia magnética la lesión isquémica frontal derecha con retraso del tiempo circulatorio en ese territorio. El antecedente de migraña con aura no explica un déficit persistente con infarto establecido."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Hemiplejía migrañosa o aura persistente, que es transitoria y no deja lesión en la imagen; hemorragia intracerebral lobar; crisis epiléptica focal con parálisis de Todd; hipoglucemia —aquí la glucemia es de 74 mg/dL— y síndrome de Wallenberg o isquemia vertebrobasilar, con signos cruzados."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Oclusión de la arteria cerebral media derecha, de mecanismo aterotrombótico o embólico. La migraña con aura se asocia a mayor riesgo de ictus isquémico, en especial en mujeres jóvenes y si se suman tabaquismo o anticoncepción hormonal, factores que no constan en esta paciente. El episodio de hace 8 años sugiere un déficit neurológico transitorio previo, y el estudio etiológico debe buscar la fuente embólica y el estado vascular."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "La oclusión arterial interrumpe el flujo en el territorio de la cerebral media y deja un núcleo infartado rodeado de una zona de penumbra con perfusión crítica. La hemiparesia y la hemihipoestesia izquierdas corresponden a la afectación del hemisferio derecho, y la hemianopsia homónima a la vía óptica retroquiasmática derecha. Sin reperfusión, la penumbra evoluciona a necrosis en pocas horas."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Código ictus con TC craneal urgente para excluir hemorragia. Trombólisis intravenosa dentro de las primeras 4,5 horas si no hay contraindicaciones y trombectomía mecánica en la oclusión de gran vaso, según ventana y criterios de imagen. Ingreso en unidad de ictus, antiagregación, control de glucemia y temperatura, sin descender la presión salvo cifras muy elevadas o antes de reperfundir, y estudio etiológico para la prevención secundaria."
      }
    ]
  },
  {
    "id": "acute-pulmonary-edema-rapid-atrial-fibrillation",
    "specialtySlug": "internal-medicine",
    "title": "Disnea súbita y palpitaciones",
    "reason": "Disnea súbita y palpitaciones",
    "history": "Cuadro de 2 días de evolución caracterizado por aumento progresivo de la disnea, ortopnea y edemas. El día de hoy inicia con palpitaciones rápidas, mareo intenso y sudoración fría.",
    "background": "Cardiopatía isquémica con infarto previo hace 3 años (FEVI previa 35 %). Hipertensión arterial de 8 años de evolución tratada con enalapril. Hipotiroidismo tratado con levotiroxina.",
    "exam": "PA 82/55 mmHg · FC 148 lpm (irregular) · FR 28 rpm · T 36,6 °C · SatO₂ 86 %\nGeneral: mal estado general, consciente pero somnolienta.\nCuello: ingurgitación yugular marcada.\nCardiovascular: soplo holosistólico mitral.\nRespiratorio: crepitantes en ambas bases pulmonares.\nExtremidades: edema de miembros inferiores +++.",
    "labs": "Na 126 mEq/L · K 4,8 mEq/L · creatinina 1,9 mg/dL · BNP 3100 pg/mL · troponina elevada · INR 1,0.",
    "studies": "ECG: taquicardia irregular de QRS estrecho, ausencia de onda P.\nRX de tórax: cardiomegalia y edema alveolar difuso.\nEcocardiograma: FEVI 25 %, dilatación severa de cavidades izquierdas, insuficiencia mitral funcional moderada e hipertensión pulmonar (65 mmHg).",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Edema agudo de pulmón cardiogénico precipitado por fibrilación auricular rápida",
      "Tromboembolia pulmonar masiva",
      "Neumonía bilateral grave con sepsis",
      "Síndrome coronario agudo complicado con edema pulmonar"
    ],
    "correctIndex": 0,
    "rationales": [
      "La disnea progresiva con ortopnea, la ingurgitación yugular, el edema alveolar difuso, el BNP de 3100 pg/mL y una FEVI del 25 % definen insuficiencia cardíaca congestiva; el ECG muestra fibrilación auricular con respuesta ventricular de 148 lpm, que es la que descompensa el cuadro, y la hipotensión con somnolencia indica shock cardiogénico.",
      "La tromboembolia pulmonar da disnea y taquicardia, pero no edema alveolar difuso, cardiomegalia, ingurgitación yugular marcada ni un BNP tan elevado.",
      "La neumonía grave cursa con fiebre y foco infeccioso, ausentes aquí, y no explica la cardiomegalia, el soplo mitral ni la fibrilación auricular.",
      "La troponina elevada es frecuente en la insuficiencia cardíaca descompensada y en la fibrilación auricular por lesión miocárdica tipo 2; sin dolor torácico ni cambios isquémicos en el ECG, no sostiene un síndrome coronario agudo como causa del cuadro."
    ],
    "hint": "Separa la congestión (BNP, edema alveolar, ingurgitación yugular) de la arritmia que la descompensó.",
    "discussion": "Oxígeno y ventilación no invasiva, furosemida intravenosa y noradrenalina si persiste la hipotensión. Control de la frecuencia con digoxina o amiodarona, evitando betabloqueantes y calcioantagonistas no dihidropiridínicos en el shock. Buscar el desencadenante, corregir la hiponatremia con cautela y controlar la función renal.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Edema agudo de pulmón cardiogénico por insuficiencia cardíaca con fracción de eyección reducida descompensada, precipitado por fibrilación auricular con respuesta ventricular rápida, con shock cardiogénico asociado."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Tromboembolia pulmonar, neumonía grave con sepsis, síndrome coronario agudo, taponamiento cardíaco, crisis hipertensiva con edema pulmonar y edema pulmonar no cardiogénico (SDRA)."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Miocardiopatía isquémica con infarto previo: la FEVI cayó del 35 % al 25 % y hay dilatación severa de cavidades izquierdas con insuficiencia mitral funcional. La fibrilación auricular, favorecida por la dilatación auricular, elimina el componente auricular y acorta la diástole, lo que descompensa la insuficiencia cardíaca. La hipertensión arterial, la hiponatremia y la disfunción renal añadida agravan el pronóstico. El hipotiroidismo en tratamiento obliga a verificar la adherencia a la levotiroxina."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Se trata un shock cardiogénico con congestión: oxígeno y ventilación no invasiva, furosemida intravenosa, noradrenalina para mantener la perfusión y control de la frecuencia con digoxina o amiodarona; los betabloqueantes y los calcioantagonistas no dihidropiridínicos están contraindicados con esta presión. Hay que buscar y tratar el desencadenante, corregir la hiponatremia con cautela, vigilar la función renal y valorar la anticoagulación por la fibrilación auricular."
      }
    ]
  },
  {
    "id": "hyperthyroidism-weight-loss-vomiting",
    "specialtySlug": "internal-medicine",
    "title": "Disminución de peso y vómitos severos",
    "reason": "Disminución de peso y vómitos severos",
    "history": "Paciente femenina de 59 años que acude por disminución de peso, dolor epigástrico y vómitos severos de 3 semanas de evolución, con crisis de nerviosismo en los últimos días, insomnio e hiperdefecación.",
    "exam": "PA 130/72 mmHg · FC 110 lpm · T 37,9 °C\nAbdomen: doloroso a la palpación.\nNeurológico: temblor fino de las manos e hiperreflexia.",
    "labs": "",
    "studies": "Ecografía abdominal: normal.\nEndoscopia digestiva alta: normal.\nGammagrafía de tiroides: glándula con hiperfunción difusa.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Hipertiroidismo por enfermedad de Graves",
      "Feocromocitoma",
      "Síndrome carcinoide",
      "Trastorno de ansiedad"
    ],
    "correctIndex": 0,
    "rationales": [
      "La pérdida de peso con hiperdefecación, el temblor fino, la hiperreflexia, la taquicardia con presión conservada, el nerviosismo y el insomnio configuran un hipertiroidismo, y la gammagrafía con hiperfunción difusa apunta a la enfermedad de Graves y descarta el bocio nodular.",
      "El feocromocitoma produce crisis de nerviosismo, temblor, taquicardia y pérdida de peso, pero cursa con hipertensión paroxística —aquí la presión es 130/72— y no da hiperfunción tiroidea difusa en la gammagrafía.",
      "El síndrome carcinoide explica la hiperdefecación y el enrojecimiento, pero no el temblor fino, la hiperreflexia ni una glándula tiroides hiperfuncionante.",
      "El trastorno de ansiedad justifica el nerviosismo, el insomnio, el temblor y la taquicardia, pero no la pérdida de peso con hiperdefecación ni el hallazgo gammagráfico."
    ],
    "hint": "Agrupa temblor fino, hiperreflexia, taquicardia e hiperdefecación: los cuatro apuntan a un mismo exceso hormonal, y la gammagrafía señala de dónde viene.",
    "discussion": "Metimazol 10-30 mg/día con propranolol para el temblor y la taquicardia, más hidratación y antieméticos por los vómitos severos; control de función tiroidea cada 4-6 semanas. Tratamiento definitivo con yodo radiactivo o tiroidectomía, y advertencia sobre agranulocitosis y hepatotoxicidad.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Hipertiroidismo por enfermedad de Graves (bocio difuso tóxico), con pérdida de peso, vómitos severos, temblor fino, hiperreflexia, taquicardia e hiperdefecación, y gammagrafía tiroidea con hiperfunción difusa."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Feocromocitoma, síndrome carcinoide, trastorno de ansiedad o crisis de angustia, diabetes mellitus descompensada, síndrome de intestino irritable y otras causas de hipertiroidismo, como el bocio multinodular tóxico y la tiroiditis. Las causas digestivas de vómitos y pérdida de peso quedan descartadas por la endoscopia y la ecografía normales."
      },
      {
        "prompt": "¿Cuáles son los factores de riesgo y la etiología?",
        "answer": "Enfermedad de Graves, de origen autoinmune, con anticuerpos contra el receptor de TSH que estimulan la glándula. Predomina en mujeres, sobre todo entre los 30 y los 60 años. El tabaquismo, el estrés y la predisposición genética —antecedentes familiares de enfermedad tiroidea— son factores de riesgo; en esta paciente no constan antecedentes personales ni familiares."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "Los anticuerpos estimulan el receptor de TSH y la glándula sintetiza y libera hormona tiroidea en exceso. El hipermetabolismo explica la pérdida de peso, la hiperdefecación y la taquicardia; la mayor sensibilidad adrenérgica, el temblor fino, el nerviosismo, el insomnio y la hiperreflexia. El vómito severo añade intolerancia digestiva y deshidratación, y la fiebre de 37,9 °C obliga a vigilar una tormenta tiroidea."
      },
      {
        "prompt": "¿Cuál es la conducta y el tratamiento?",
        "answer": "Tionamida —metimazol 10-30 mg/día— para bloquear la síntesis hormonal, betabloqueante para el temblor y la taquicardia, hidratación y antieméticos por los vómitos. Control de función tiroidea cada 4-6 semanas y aviso de agranulocitosis y hepatotoxicidad. Tratamiento definitivo con yodo radiactivo o tiroidectomía según el tamaño del bocio y las preferencias."
      }
    ]
  },
  {
    "id": "acute-heart-failure-atrial-fibrillation",
    "specialtySlug": "internal-medicine",
    "title": "Disnea progresiva con palpitaciones y síncope",
    "reason": "Disnea",
    "history": "Paciente de 50 años que consulta por un cuadro clínico de 24 horas de evolución caracterizado por progresión de la disnea de clase funcional 1 a 3, con palpitaciones y tos seca, y un episodio de síncope con restitución ad integrum, sin foco motor, sensitivo ni sensorial.",
    "background": "Hipertensión arterial en tratamiento con losartán. Infarto agudo de miocardio con colocación de stent en la arteria descendente anterior, tercio medio (2018). Tabaquismo de 20 paquetes/año.",
    "exam": "PA 100/60 mmHg · FC 115 lpm · FR 26 rpm · T 36 °C · SatO₂ 91 %\nPulmonar: mecánica ventilatoria regular, crepitantes bilaterales en los campos pulmonares inferiores.\nCardiovascular: R3, sin soplos, ingurgitación yugular 2/3.\nElectrocardiograma: taquiarritmia irregular.\nEcocardiograma: FEVI 40 %, dilatación de cavidades derechas.\nCatéter de Swan-Ganz: presión de enclavamiento pulmonar 50 mmHg.\nRadiografía de tórax: imagen de oligohemia (signo de Westermark).",
    "labs": "",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Edema agudo de pulmón cardiogénico por fibrilación auricular rápida",
      "Tromboembolia pulmonar aguda",
      "Exacerbación aguda de enfermedad pulmonar obstructiva crónica",
      "Neumonía bilateral con derrame pleural"
    ],
    "correctIndex": 0,
    "rationales": [
      "La disnea de esfuerzo que progresa en 24 horas, los crepitantes bilaterales, el R3, la ingurgitación yugular, la FEVI del 40 % y una presión de enclavamiento de 50 mmHg configuran un edema agudo de pulmón cardiogénico, desencadenado por la taquiarritmia irregular.",
      "La tromboembolia pulmonar explica la disnea, el síncope, la hipoxemia, la dilatación de cavidades derechas y el signo de Westermark, pero no una presión de enclavamiento de 50 mmHg ni los crepitantes bilaterales con R3.",
      "El tabaquismo de 20 paquetes/año y la tos seca permiten plantearla, pero la mecánica ventilatoria es regular, hay R3 e ingurgitación yugular y las presiones de llenado están elevadas.",
      "La neumonía justificaría la hipoxemia y los crepitantes, pero no hay fiebre ni datos de laboratorio que la respalden y no explica la presión de enclavamiento ni la taquiarritmia."
    ],
    "hint": "Compara la fracción de eyección con la presión de enclavamiento: el problema está en las presiones de llenado, y el electrocardiograma señala el desencadenante.",
    "discussion": "Oxígeno o ventilación no invasiva según la tolerancia, furosemida intravenosa y control de la frecuencia ventricular; se valora anticoagulación por la fibrilación auricular y se busca el desencadenante (isquemia, infección, transgresión). En la fracción de eyección reducida se evitan verapamilo y diltiazem.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Edema agudo de pulmón cardiogénico por fibrilación auricular con respuesta ventricular rápida, en un paciente con cardiopatía isquémica y fracción de eyección del 40 %."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Tromboembolia pulmonar aguda, exacerbación de enfermedad pulmonar obstructiva crónica, neumonía con derrame pleural, síndrome coronario agudo y taponamiento cardíaco."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Cardiopatía isquémica con infarto previo y stent en la descendente anterior, hipertensión arterial y tabaquismo de 20 paquetes/año, que dejan una fracción de eyección reducida. La fibrilación auricular actúa como desencadenante al acortar el llenado diastólico."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "La disfunción sistólica y la taquicardia acortan el tiempo de llenado y elevan la presión auricular izquierda, que se transmite al capilar pulmonar y produce trasudación alveolar con crepitantes e hipoxemia. El gasto cardíaco bajo y la congestión explican el síncope y la ingurgitación yugular."
      },
      {
        "prompt": "¿Cuál es el tratamiento?",
        "answer": "Soporte respiratorio con oxígeno o ventilación no invasiva, diurético de asa intravenoso, control de la frecuencia ventricular y tratamiento del desencadenante; anticoagulación según el riesgo tromboembólico y optimización posterior del tratamiento de la insuficiencia cardíaca."
      }
    ]
  },
  {
    "id": "post-traumatic-acute-subdural-hematoma",
    "specialtySlug": "internal-medicine",
    "title": "Pérdida súbita de la conciencia con convulsión",
    "reason": "Pérdida súbita de la conciencia",
    "history": "Paciente de 60 años, sexo masculino, que consulta por un cuadro clínico de 20 minutos de evolución caracterizado por pérdida súbita de la conciencia, con caída desde su propia altura y contusión en la región temporoparietal derecha, y un episodio de convulsión tónico-clónica. Un familiar lo socorre y lo traslada a la emergencia del hospital.",
    "background": "Diabetes mellitus tipo 1 insulinorrequiriente en tratamiento con NPH. Dislipidemia en tratamiento con simvastatina.",
    "exam": "PA 110/70 mmHg · FC 111 lpm · FR 22 rpm · T 36 °C · SatO₂ 91 % (98 % con mascarilla de Venturi)\nNeurológico: Glasgow 11/15, desorientado, sin déficit motor, sensitivo ni sensorial; reflejos conservados.\nCardiopulmonar: sin alteraciones.\nPiel y mucosas: sudorosas.",
    "labs": "Na 140 · glucemia 18 · K 4 · urea 50 · Cl 106 · creatinina 1,6 · TFG 70 mL/kg · Hb 12 · Hto 37 %.",
    "studies": "TC de cerebro: imagen hiperdensa en la región temporoparietal derecha, con forma de semiluna.",
    "question": "El paciente llega con bajo nivel de conciencia y una glucemia de 18 mg/dL. ¿Cuál es la primera medida?",
    "options": [
      "Glucosa intravenosa inmediata",
      "TC de cráneo antes de tratar",
      "Manitol en bolo",
      "Intubación orotraqueal electiva"
    ],
    "correctIndex": 0,
    "rationales": [
      "La hipoglucemia grave es reversible y potencialmente letal: se corrige de inmediato, sin esperar a la imagen, y se reevalúa el nivel de conciencia.",
      "La TC es necesaria, pero posponer el tratamiento de una glucemia de 18 mg/dL para hacerla retrasa una medida que puede revertir el coma en minutos.",
      "El manitol se reserva para la hipertensión intracraneal con signos de herniación; no es la primera medida en un paciente hipoglucémico.",
      "La intubación se indica por protección de la vía aérea o fallo respiratorio, no de entrada por un bajo nivel de conciencia reversible."
    ],
    "hint": "Antes de la imagen, corrige lo que se revierte en minutos.",
    "discussion": "Vía aérea, oxígeno y normocapnia, control de la glucemia y valoración neuroquirúrgica inmediata. El hematoma subdural agudo sintomático se evacúa mediante craneotomía o craniectomía; el manitol o la solución salina hipertónica se reservan para signos de hipertensión intracraneal y la crisis se controla con antiepilépticos. Vigilancia en unidad de cuidados intensivos con tomografía de control.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Hematoma subdural agudo traumático derecho, tras una caída desde su propia altura con impacto temporoparietal, en un paciente con Glasgow de 11/15 y crisis convulsiva al inicio del cuadro."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Hematoma epidural agudo, hemorragia subaracnoidea, contusión cerebral con hematoma intraparenquimatoso, accidente cerebrovascular isquémico o hemorrágico y coma hipoglucémico en un diabético insulinorrequiriente. La forma biconvexa y el intervalo lúcido orientan al epidural, mientras que la glucemia capilar descarta la hipoglucemia."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Traumatismo craneoencefálico por caída desde la propia altura, con impacto directo en la región temporoparietal derecha que rompe las venas puente. La edad, la diabetes mellitus y el deterioro del nivel de conciencia al ingreso empeoran el pronóstico; en este caso no consta tratamiento anticoagulante."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El desplazamiento brusco del encéfalo rompe las venas puente que cruzan el espacio subdural y la sangre se acumula entre la duramadre y la aracnoides, adoptando la forma de semiluna sobre la convexidad. La colección ejerce efecto de masa, eleva la presión intracraneal y desplaza la línea media, lo que explica el descenso del nivel de conciencia; la irritación de la corteza desencadena la convulsión."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Asegurar la vía aérea, la oxigenación y la perfusión, con control de la glucemia y de la crisis convulsiva. La valoración neuroquirúrgica es urgente: se evacúa el hematoma por craneotomía o craniectomía cuando supera los 10 mm de grosor, desplaza la línea media más de 5 mm o provoca deterioro neurológico. Para la hipertensión intracraneal se usan cabecera elevada, manitol o solución salina hipertónica, y el paciente queda en vigilancia intensiva con tomografía de control."
      }
    ]
  },
  {
    "id": "decompensated-cirrhosis-suspected-peritonitis",
    "specialtySlug": "internal-medicine",
    "title": "Astenia y adinamia",
    "reason": "Astenia y adinamia",
    "history": "Paciente de 63 años, sexo masculino, que consulta a la emergencia por un cuadro clínico de 24 horas de evolución caracterizado por astenia y adinamia, y que agrega un episodio de alza térmica cuantificada de 38,5 °C.",
    "background": "Hipertensión portal con múltiples episodios de sangrado por varices esofágicas y síndrome ascítico-edematoso. Alcoholismo desde hace 32 años, con ingesta de 5 de cada 7 días.",
    "exam": "PA 135/90 mmHg · FC 100 lpm · FR 20 rpm · T 37,8 °C\nNeurológico: Glasgow 12/15, desorientado, pupilas isocóricas y normorreflexas.\nPiel y mucosas: hidratadas, pálidas e ictéricas, sin adenopatías cervicales.\nCardíaco: ruidos cardíacos rítmicos, sin soplos.\nPulmonar: murmullo vesicular presente.\nAbdomen: ruidos hidroaéreos disminuidos, distensión abdominal marcada, matidez desplazable en ambos flancos y en hipogastrio.\nExtremidades: disminución del trofismo muscular en ambos miembros inferiores, con desaparición del vello corporal y circulación colateral abdominal.",
    "labs": "BT 6,06 mg/dL; bilirrubina indirecta 4,7 mg/dL; glucosa 140 mg/dL; proteínas 6,8 g/dL; albúmina 2,6 g/dL; calcio 8,5 mg/dL; creatinina 1,6 mg/dL; Na 127 mEq/L; K 4,85 mEq/L; Cl 95 mEq/L; leucocitos 9400/µL; eritrocitos 4,5 millones/µL; Hto 32 %; Hb 8,2 g/dL; plaquetas 80 000/µL; TGO 421 U/L; TGP 177 U/L; FAL 316 U/L.",
    "studies": "Endoscopia digestiva alta: mucosa eritematosa, con erosión en la superficie de la mucosa y coágulos sanguíneos adheridos a varices esofágicas.",
    "question": "Con estos hallazgos, ¿cuál es la conducta inicial más adecuada?",
    "options": [
      "Paracentesis diagnóstica con recuento de polimorfonucleares y cultivo, e inicio de antibiótico empírico",
      "Endoscopia digestiva alta urgente con ligadura de varices",
      "Lactulosa y rifaximina, sin otros estudios, por la encefalopatía hepática",
      "Tomografía abdominal con contraste para descartar absceso o perforación"
    ],
    "correctIndex": 0,
    "rationales": [
      "Todo cirrótico con ascitis que ingresa, y más aún si tiene fiebre y encefalopatía, necesita una paracentesis diagnóstica: un recuento de polimorfonucleares de 250/µL o más define peritonitis bacteriana espontánea e indica antibiótico empírico precoz.",
      "La endoscopia ya se realizó y describe varices con coágulos adheridos, sin sangrado activo; la ligadura se plantea en la hemorragia aguda, no como primer paso ante fiebre y desorientación.",
      "La lactulosa y la rifaximina tratan la encefalopatía, pero no buscan su desencadenante: en un cirrótico con fiebre y ascitis hay que descartar infección del líquido ascítico antes de limitarse al tratamiento sintomático.",
      "La tomografía no es el primer estudio: retrasa el diagnóstico de una infección frecuente y añade contraste a un paciente con creatinina de 1,6 mg/dL."
    ],
    "hint": "En un cirrótico con ascitis, fiebre y desorientación, pregúntate qué estudio cambia la conducta en la primera hora.",
    "discussion": "Paracentesis diagnóstica precoz con recuento de polimorfonucleares y cultivo; si son 250/µL o más, ceftriaxona y albúmina. En paralelo, lactulosa y rifaximina para la encefalopatía, control de electrolitos y de la función renal, y tratamiento del desencadenante. Evitar sedantes y fármacos nefrotóxicos, y valorar la hemorragia reciente con coágulos en las varices.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Cirrosis hepática de origen alcohólico descompensada, con hipertensión portal, ascitis, ictericia, hipoalbuminemia de 2,6 g/dL, trombocitopenia y encefalopatía hepática (Glasgow 12/15). La fiebre de 38,5 °C obliga a descartar una peritonitis bacteriana espontánea, que el caso no permite confirmar porque no hay análisis del líquido ascítico. La anemia de 8,2 g/dL y los coágulos adheridos a las varices sugieren además una hemorragia digestiva reciente."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Peritonitis bacteriana espontánea frente a peritonitis secundaria, hepatitis alcohólica aguda, hemorragia digestiva por varices, síndrome hepatorrenal y encefalopatía metabólica por hiponatremia de 127 mEq/L o por sedantes. También hay que descartar otros focos infecciosos —urinario, pulmonar, cutáneo— y una trombosis portal, que explicaría el dolor y la descompensación."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "El alcoholismo de 32 años con ingesta de 5 de cada 7 días es la causa más probable de la cirrosis, y la hipertensión portal con varices y ascitis confirma la enfermedad avanzada. Los episodios previos de sangrado por varices, la desnutrición que traduce la pérdida de trofismo muscular y la hipoalbuminemia son factores de riesgo de infección del líquido ascítico y de encefalopatía."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El daño hepatocelular crónico por alcohol produce fibrosis y hipertensión portal, de la que derivan las varices esofágicas y la ascitis por retención hidrosalina. El hígado pierde capacidad de síntesis —albúmina de 2,6 g/dL— y de detoxificación, y el amonio no aclarado, sumado a la hiponatremia, explica la encefalopatía. La translocación bacteriana desde el intestino, favorecida por la hipertensión portal, es el mecanismo de la peritonitis bacteriana espontánea, que a su vez precipita la descompensación."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Paracentesis diagnóstica con recuento de polimorfonucleares y cultivo; si alcanzan 250/µL o más, ceftriaxona con albúmina intravenosa y ajuste según el antibiograma. Lactulosa y rifaximina para la encefalopatía, corrección de la hiponatremia con restricción hídrica y control de la función renal. Si se confirma hemorragia por varices, ligadura endoscópica con vasoactivo y profilaxis antibiótica; abstinencia alcohólica, soporte nutricional y valoración para trasplante."
      }
    ]
  },
  {
    "id": "type-1-diabetes-new-onset",
    "specialtySlug": "internal-medicine",
    "title": "Pérdida de peso y poliuria en un adulto joven",
    "reason": "Pérdida de peso y orinas abundantes",
    "history": "Paciente de 23 años, sexo masculino, que consulta por un cuadro de 3 días de evolución caracterizado por poliuria y astenia intensa, con pérdida de 5 kg de peso en la última semana, motivo por el cual acude al hospital.",
    "background": "Múltiples infecciones virales en la infancia (paperas).",
    "exam": "PA 115/70 mmHg · FC 108 lpm · FR 28 rpm · T 36,5 °C · SatO₂ 99 % (FiO₂ 0,21)\nNeurológico: Glasgow 15/15; motor, sensitivo y reflejos conservados.\nCardiovascular: R1 y R2 normofonéticos, sin soplos.\nAbdomen y respiratorio: sin particularidades.\nUrinario: ritmo diurético aumentado.\nPiel: sin acantosis nigricans.",
    "labs": "Glucemia 232 mg/dL. HbA1c 6,8 %. Anticuerpos negativos. Péptido C basal (valor no consignado).",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Diabetes mellitus tipo 1 de debut",
      "Diabetes mellitus tipo 2",
      "Diabetes autoinmune latente del adulto (LADA)",
      "Diabetes insípida central"
    ],
    "correctIndex": 0,
    "rationales": [
      "La poliuria con astenia intensa, la pérdida de 5 kg en una semana y una glucemia de 232 mg/dL en un adulto joven y sin acantosis nigricans configuran el debut de una diabetes por déficit de insulina. La HbA1c de 6,8 % es baja para esa glucemia, lo que indica que la hiperglucemia es muy reciente y encaja con un fallo brusco de la célula beta.",
      "La diabetes tipo 2 suele instalarse de forma insidiosa en un paciente con obesidad y acantosis nigricans, con una HbA1c más alta para el tiempo de evolución; la pérdida de 5 kg en una semana no forma parte de ese patrón.",
      "El LADA aparece en el adulto y se define por autoanticuerpos positivos frente a la célula beta, que aquí son negativos, con una progresión más lenta hacia la insulinodependencia.",
      "La diabetes insípida central produce poliuria por déficit de hormona antidiurética, pero cursa sin hiperglucemia y no explica la glucemia de 232 mg/dL ni la pérdida de peso rápida."
    ],
    "hint": "Fíjate en la forma de inicio: poliuria de días, 5 kg perdidos en una semana y una HbA1c baja para la glucemia que presenta.",
    "discussion": "Valoración hospitalaria del debut: gasometría y cetonemia para descartar cetoacidosis, hidratación y insulina en pauta basal-bolo con análogos, más educación diabetológica antes del alta. Se completa el estudio con péptido C, autoanticuerpos, función tiroidea y anticuerpos antitransglutaminasa, y se busca el desencadenante. La negatividad de los autoanticuerpos no descarta el déficit de insulina: obliga a repetir el péptido C y a revisar el subtipo según la evolución.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Diabetes mellitus tipo 1 de debut en un varón de 23 años con poliuria de tres días, astenia intensa y pérdida de 5 kg en una semana, glucemia de 232 mg/dL y HbA1c de 6,8 %. El inicio agudo, la pérdida de peso rápida y la ausencia de acantosis nigricans orientan a un déficit de insulina. Los autoanticuerpos negativos y el péptido C, cuyo valor no consta, son los datos que faltan para confirmar el subtipo."
      },
      {
        "prompt": "¿Cuál es el diagnóstico diferencial?",
        "answer": "Diabetes mellitus tipo 2 del adulto joven, diabetes autoinmune latente del adulto (LADA), diabetes monogénica tipo MODY, diabetes secundaria a pancreatitis o a fármacos y diabetes insípida. También se consideran las causas de poliuria sin hiperglucemia —diuresis osmótica de otro origen, hipercalcemia, hipopotasemia y polidipsia primaria—, que la glucemia de 232 mg/dL deja en segundo plano."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Destrucción de la célula beta en un individuo genéticamente susceptible, con factores ambientales que precipitan el debut; el antecedente de infecciones virales en la infancia, entre ellas las paperas, es uno de los propuestos. La edad joven, el comienzo abrupto y la pérdida de peso rápida son los datos clínicos que apoyan el mecanismo. Con autoanticuerpos negativos hay que contemplar una forma idiopática, la denominada tipo 1B."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El déficit de insulina impide la entrada de glucosa en músculo y tejido adiposo y desinhibe la producción hepática de glucosa, con hiperglucemia. La carga filtrada supera la capacidad de reabsorción tubular y la glucosa arrastra agua y electrolitos —diuresis osmótica—, de donde vienen la poliuria, la deshidratación y la pérdida de peso. La falta de insulina activa además la lipólisis y la cetogénesis, que en el debut pueden llevar a cetoacidosis, mientras la astenia refleja el déficit de sustrato energético intracelular."
      },
      {
        "prompt": "¿Cuál es el tratamiento?",
        "answer": "Reposición de volumen e insulina desde el inicio, en pauta basal-bolo con análogos y ajuste por glucemia capilar; el debut se valora en el hospital para descartar cetoacidosis con gasometría y cetonemia. Se completa el estudio con péptido C, autoanticuerpos, función tiroidea, anticuerpos antitransglutaminasa y perfil lipídico, y se trata el desencadenante si lo hay. La educación diabetológica —autocontrol, técnica de inyección, manejo de la hipoglucemia y conteo de hidratos de carbono— forma parte del tratamiento. El seguimiento debe confirmar el subtipo si la evolución no es la esperada."
      }
    ]
  },
  {
    "id": "prerenal-aki-diarrhea-diuretics-nsaids",
    "specialtySlug": "internal-medicine",
    "title": "Diarrea prolongada y oliguria",
    "reason": "Diarrea de 23 días",
    "history": "Paciente de 63 años que consulta por un cuadro de 20 días de evolución caracterizado por náuseas y vómitos abundantes junto con deposiciones diarreicas líquidas (4 o 5 al día), sin productos patológicos. No refiere alzas térmicas y agrega disminución del ritmo diurético. Se le prescribieron diuréticos por la disminución de la diuresis, sin presentar mejoría del cuadro, por lo que asiste a emergencias.",
    "background": "Hipertensión arterial en tratamiento farmacológico. Diabetes mellitus tipo 2 de 7 años de evolución en tratamiento con antidiabéticos orales, sin nefropatía conocida. Hepatopatía conocida. Herpes zóster en 2007. Función renal previa: creatinina 1,2. Tratamiento actual: AINEs por un proceso doloroso en la rodilla.",
    "exam": "TA 90/50 mmHg · FC 100 lpm · T 36 °C\nGeneral: consciente, orientado en espacio, tiempo y persona; buen estado general, normoperfundido, deshidratado, eupneico; signo del pliegue positivo.\nCardiovascular: R1 y R2 normofonéticos, carótidas rítmicas y simétricas, no se auscultan soplos.\nPulmonar: murmullo vesicular conservado, no se auscultan soplos.\nAbdomen: blando, globoso y depresible, no doloroso a la palpación superficial ni profunda; no se palpan masas ni megalias, ruidos hidroaéreos presentes, no se palpa globo vesical, puñopercusión renal negativa, no ascitis, sin signos de peritonismo.\nExtremidades: no edemas, no signos de TVP, pulsos pedios positivos.",
    "labs": "Leucocitos 10 400. Hemoglobina 13,7. Hematocrito 40,2. VCM 88. HCM 29,9. CHCM 34. Plaquetas 270 000.\nOrina: pH 5,5; albúmina ++; glucosa, acetona y bilirrubina negativas.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Insuficiencia renal aguda prerrenal por depleción de volumen",
      "Necrosis tubular aguda",
      "Nefritis intersticial aguda por AINEs",
      "Pielonefritis aguda"
    ],
    "correctIndex": 0,
    "rationales": [
      "La diarrea prolongada con vómitos, la hipotensión de 90/50 mmHg, la deshidratación con pliegue positivo y la oliguria, sumadas al uso de AINEs y diuréticos, describen una caída del volumen circulante eficaz: el riñón pierde perfusión antes que parénquima.",
      "La necrosis tubular aguda es la evolución de la isquemia mantenida, pero el cuadro es de instauración reciente, sin datos de lesión establecida, y se explica por la hipovolemia mientras no haya fracaso de la reposición.",
      "La nefritis intersticial por AINEs suele acompañarse de fiebre, exantema, eosinofilia y alteraciones del sedimento; aquí la temperatura es normal, no hay lesiones cutáneas y el contexto de pérdida de volumen es evidente.",
      "La pielonefritis cursa con fiebre, dolor lumbar y puñopercusión renal positiva; en este paciente la temperatura es normal, el abdomen no duele y la puñopercusión es negativa."
    ],
    "hint": "Piensa en qué necesita el riñón para filtrar antes de suponer que está lesionado: volumen, presión de perfusión y fármacos que cierran la arteriola aferente.",
    "discussion": "Suspender los AINEs y los diuréticos y restituir volumen con cristaloides isotónicos, con control de diuresis, peso, presión arterial y función renal; la respuesta a la expansión confirma el origen prerrenal. Los diuréticos no tienen papel en la oliguria por hipovolemia y agravan la depleción. Si la diarrea persiste, estudiar su causa y vigilar la conversión a necrosis tubular.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Insuficiencia renal aguda prerrenal por deshidratación secundaria a diarrea prolongada con vómitos, agravada por diuréticos y AINEs en un paciente hipertenso y diabético tipo 2. La hipotensión, el signo del pliegue positivo y la oliguria sostienen el diagnóstico, que se confirma con la respuesta a la reposición de volumen."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Necrosis tubular aguda, nefritis intersticial aguda por AINEs, pielonefritis aguda y glomerulonefritis, además de una insuficiencia renal crónica reagudizada sobre la creatinina previa de 1,2. En el terreno digestivo hay que descartar diarrea infecciosa, inflamatoria, malabsortiva o por neuropatía diabética, que son las que explican la depleción."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Diarrea de tres semanas con vómitos que provoca pérdida de agua y sodio. A ello se suman los diuréticos indicados por la oliguria y los AINEs del dolor de rodilla, que inhiben las prostaglandinas vasodilatadoras de la arteriola aferente y reducen el filtrado glomerular. La edad, la hipertensión y la diabetes tipo 2 de 7 años de evolución disminuyen la reserva renal, y la hepatopatía conocida puede reducir aún más el volumen circulante eficaz."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "La pérdida digestiva de volumen baja el volumen circulante eficaz y la presión de perfusión renal. El riñón responde con vasoconstricción de la arteriola aferente mediada por angiotensina II y catecolaminas, y con reabsorción de sodio y agua en el túbulo proximal, lo que produce oliguria con orina concentrada y pobre en sodio. Los AINEs bloquean la prostaglandina que mantiene dilatada la aferente y los diuréticos profundizan la depleción: la filtración cae sin daño estructural todavía, y se restituye al corregir el volumen."
      },
      {
        "prompt": "¿Cuál es el tratamiento?",
        "answer": "Suspender AINEs y diuréticos y expandir con cristaloides isotónicos guiados por la diuresis, la presión arterial y el estado de hidratación, con control diario de peso, creatinina y electrolitos, incluido el potasio. Tratar la causa de la diarrea y los vómitos y corregir los trastornos hidroelectrolíticos. Si la oliguria persiste pese a la reposición, sospechar necrosis tubular. Los diuréticos no se usan en la oliguria prerrenal y los vasopresores se reservan para la hipotensión refractaria."
      }
    ]
  },
  {
    "id": "community-acquired-pneumonia-parapneumonic-effusion",
    "specialtySlug": "internal-medicine",
    "title": "Tos, fiebre y dolor torácico pleurítico",
    "reason": "Tos y dolor torácico",
    "history": "Paciente de 20 años, sexo masculino, que consulta por un cuadro de 72 horas de evolución caracterizado por tos seca, fiebre de hasta 38,5 °C y dolor torácico izquierdo irradiado a la espalda, en relación con los movimientos respiratorios.",
    "background": "No refiere hábitos tóxicos ni alergias conocidas. No HTA, no DM. Hepatitis hace 20 años. Apendicectomía. Medicamentos habituales: anticonceptivos orales.",
    "exam": "Glasgow 15/15 · FC 92 lpm · TA 110/80 mmHg · FR 20 rpm · SatO₂ 95 % · T 37,5 °C\nGeneral: consciente y orientada, sudorosa, bien hidratada y perfundida.\nCardiovascular: R1 y R2 normofonéticos en los cuatro focos, sin ingurgitación yugular, sin adenopatías, sin soplos.\nPulmonar: matidez a la percusión, disminución del murmullo vesicular y de las vibraciones vocales en los dos tercios inferiores del pulmón izquierdo.\nAbdomen: blando, depresible, sin masas ni megalias; ruidos hidroaéreos normales.\nExtremidades: sin edemas ni signos de trombosis profunda, pulsos positivos.",
    "labs": "",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Neumonía adquirida en la comunidad con derrame pleural paraneumónico",
      "Neumotórax espontáneo izquierdo",
      "Derrame pleural tuberculoso",
      "Tromboembolia pulmonar con infarto pulmonar"
    ],
    "correctIndex": 0,
    "rationales": [
      "El cuadro agudo de 72 horas con tos seca, fiebre de 38,5 °C y dolor pleurítico, junto con matidez y disminución del murmullo vesicular y de las vibraciones vocales en los dos tercios inferiores del pulmón izquierdo, traduce un proceso de condensación con derrame pleural asociado, propio de una neumonía con derrame paraneumónico.",
      "El neumotórax da dolor pleurítico e hipofonía, pero a la percusión sería hiperresonante y no mate, y las vibraciones vocales estarían abolidas sin fiebre de 38,5 °C.",
      "El derrame tuberculoso es un exudado que puede cursar con fiebre y dolor pleurítico, pero suele ser subagudo, en un paciente con factores de riesgo epidemiológico que aquí no constan; el inicio en 72 horas con fiebre alta favorece una causa bacteriana.",
      "La tromboembolia con infarto pulmonar explica el dolor pleurítico y la hipofonía, pero no la fiebre de 38,5 °C con matidez extensa ni la disminución de las vibraciones vocales en dos tercios del hemitórax; el paciente no presenta signos de trombosis en las extremidades."
    ],
    "hint": "Separa lo que indica condensación de lo que indica líquido pleural: la percusión y las vibraciones vocales no se comportan igual en ambos.",
    "discussion": "Confirmar con radiografía de tórax y hemograma, y valorar la gravedad con CURB-65: en un paciente joven sin comorbilidad, tratamiento ambulatorio con amoxicilina o amoxicilina-clavulánico y analgesia. Si el derrame es significativo, toracocentesis diagnóstica con bioquímica, Gram y cultivo, y drenaje si el pH es inferior a 7,20, la glucosa inferior a 60 mg/dL, la LDH superior a 1.000 U/L o hay pus. Control clínico en 48-72 horas y seguimiento radiológico hasta la resolución.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Neumonía adquirida en la comunidad con derrame pleural paraneumónico izquierdo. Lo sostienen el síndrome febril agudo de 72 horas con tos seca y dolor pleurítico, junto con un síndrome de condensación con matidez, disminución del murmullo vesicular y de las vibraciones vocales en los dos tercios inferiores del pulmón izquierdo. La disminución de las vibraciones vocales añade un componente de derrame pleural, que en este contexto es paraneumónico. Faltan radiografía, hemograma y estudio del líquido pleural para confirmarlo."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Neumotórax espontáneo, tromboembolia pulmonar con infarto pulmonar, derrame pleural tuberculoso, derrame pleural maligno, neumonía atípica o vírica, absceso pulmonar y pleuritis por otras causas. También cuadros de dolor torácico no pleural, como pericarditis o costocondritis, aunque no explican la fiebre ni los hallazgos auscultatorios. La matidez con vibraciones vocales disminuidas orienta a líquido pleural y no a un neumotórax."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "La causa más frecuente es la infección por Streptococcus pneumoniae, seguida de Haemophilus influenzae, Mycoplasma pneumoniae y, en pacientes con comorbilidad, bacilos gramnegativos y anaerobios por microaspiración. Los factores de riesgo son la edad extrema, el tabaquismo, el alcoholismo, la enfermedad pulmonar crónica, la diabetes, la inmunosupresión, la disfagia y la mala higiene bucal. En este paciente no constan hábitos tóxicos, diabetes ni otra comorbilidad, de modo que el episodio se explica por una neumonía comunitaria en un adulto joven previamente sano."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "La microaspiración de flora orofaríngea alcanza el espacio alveolar, donde la respuesta inflamatoria produce exudado y consolidación del parénquima. La inflamación aumenta la permeabilidad de la pleura y genera un exudado pleural paraneumónico que comprime el pulmón subyacente. Ese líquido explica la matidez, la disminución del murmullo vesicular y la caída de las vibraciones vocales. Si progresa, el exudado se hace fibrinopurulento y puede organizarse en empiema, lo que condiciona la necesidad de drenaje."
      },
      {
        "prompt": "¿Cuál es el tratamiento?",
        "answer": "Antibiótico empírico precoz: amoxicilina o amoxicilina-clavulánico, con un macrólido si se sospecha un agente atípico. Añadir analgesia y control térmico, y valorar el ingreso según CURB-65 y la repercusión clínica. La radiografía de tórax confirma el diagnóstico y cuantifica el derrame; si es significativo, se realiza toracocentesis con bioquímica, Gram y cultivo. Se drena si el pH es inferior a 7,20, la glucosa inferior a 60 mg/dL, la LDH superior a 1.000 U/L o hay pus, y se revisa la evolución en 48-72 horas."
      }
    ]
  },
  {
    "id": "megaloblastic-anemia-b12-deficiency",
    "specialtySlug": "internal-medicine",
    "title": "Astenia progresiva",
    "reason": "Astenia progresiva",
    "history": "Paciente de 60 años, sexo femenino, que consulta por un cuadro de 3 a 4 meses de evolución caracterizado por astenia progresiva con fatiga y debilidad muscular marcada, con empeoramiento en los últimos 15 días a la realización de pequeños esfuerzos. Agrega pérdida de peso de 4-5 kilos, pequeñas hemorragias puntiformes con pequeños traumatismos en extremidades inferiores, así como pequeños sangrados gingivales con el cepillado de dientes. Presenta además deposiciones múltiples de características diarreicas, sin moco ni sangre, durante 4 días.",
    "background": "No refiere alergias.",
    "exam": "PA 125/70 mmHg · FC 115 lpm · T 37,4 °C · SatO₂ 97 %\nGeneral: buen estado general, palidez mucocutánea, buena perfusión periférica, bien hidratada.\nCabeza y cuello: sin alteraciones; no adenopatías cervicales ni supraclaviculares, no bocio; sin adenopatías axilares.\nCardiovascular: ruidos cardíacos rítmicos, soplo sistólico en la base, sin irradiación, de intensidad 2/6.\nPulmonar: murmullo vesicular conservado.\nAbdomen: blando, depresible, no doloroso a la palpación, hepatomegalia, no esplenomegalia; Murphy y Blumberg negativos, no ascitis, ruidos hidroaéreos aumentados, no adenopatías inguinales.\nExtremidades inferiores: no edemas ni signos de TVP, pulsos pedios positivos, hemorragias petequiales.",
    "labs": "",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Anemia megaloblástica por déficit de vitamina B12",
      "Leucemia aguda",
      "Anemia aplásica",
      "Síndrome mielodisplásico"
    ],
    "correctIndex": 0,
    "rationales": [
      "La anemia con palidez, taquicardia y soplo sistólico, la trombocitopenia con petequias y sangrado gingival, la diarrea con pérdida de peso y una debilidad muscular de meses de evolución encajan con una anemia megaloblástica; la hepatomegalia sin esplenomegalia puede reflejar hematopoyesis extramedular en los casos graves.",
      "La leucemia aguda produce pancitopenia y hepatomegalia, pero suele evolucionar en semanas, con fiebre, adenopatías o esplenomegalia, y no explica la diarrea ni la debilidad muscular de meses de evolución.",
      "La anemia aplásica da pancitopenia, pero no cursa con hepatomegalia, diarrea ni déficit neurológico, y la médula ósea sería hipocelular.",
      "El síndrome mielodisplásico es propio de esta edad y causa citopenias, pero no explica la diarrea, la pérdida de peso ni la debilidad muscular, y la hepatomegalia es atípica."
    ],
    "hint": "Separa los síndromes anémico, hemorrágico y digestivo, y busca una sola causa que explique los tres a la vez.",
    "discussion": "Confirmar con hemograma —macrocitosis y neutrófilos hipersegmentados—, reticulocitos, LDH, haptoglobina y niveles de vitamina B12 y ácido fólico; si hay duda, aspirado medular. Tratar con cianocobalamina intramuscular y vigilar el potasio en las primeras 48 horas, porque desciende al iniciar la respuesta medular. No dar folato solo, porque corrige la anemia y deja progresar la lesión neurológica. Buscar la causa con anticuerpos anti-célula parietal y anti-factor intrínseco, y endoscopia si procede.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Anemia megaloblástica por déficit de vitamina B12, probablemente por anemia perniciosa. Lo sugieren la palidez con taquicardia y soplo sistólico, las petequias y el sangrado gingival por trombocitopenia, la diarrea con pérdida de peso y la debilidad muscular de meses de evolución. La hepatomegalia sin esplenomegalia puede corresponder a hematopoyesis extramedular. Falta confirmarlo con hemograma, frotis y niveles de vitamina B12."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Leucemia aguda, síndrome mielodisplásico, anemia aplásica, mielofibrosis, infiltración medular por linfoma o metástasis y otras causas de pancitopenia, como hiperesplenismo —poco probable sin esplenomegalia—, lupus o fármacos. La diarrea y la debilidad muscular de meses de evolución, junto con la ausencia de adenopatías y de esplenomegalia, favorecen un origen carencial."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Déficit de vitamina B12 por malabsorción: anemia perniciosa por gastritis atrófica autoinmune con anticuerpos contra la célula parietal y el factor intrínseco, gastrectomía, resección ileal, enfermedad de Crohn, sobrecrecimiento bacteriano, parasitosis por Diphyllobothrium latum, dieta vegetariana estricta o fármacos como metformina e inhibidores de la bomba de protones. La edad avanzada, el sexo femenino y el antecedente de enfermedad tiroidea u otras enfermedades autoinmunes son factores de riesgo de anemia perniciosa."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El déficit de vitamina B12 bloquea la síntesis de timidilato y de ADN, de modo que los precursores maduran despacio y aparecen macrocitos, neutrófilos hipersegmentados y una eritropoyesis ineficaz que destruye precursores dentro de la médula. Esa eritropoyesis ineficaz produce anemia, leucopenia y trombocitopenia, con LDH elevada y reticulocitos bajos. En el sistema nervioso, la B12 es necesaria para la metilación de la mielina y su falta causa degeneración combinada subaguda, con debilidad, pérdida de la sensibilidad vibratoria y propioceptiva, y ataxia. En la mucosa digestiva se produce atrofia y diarrea."
      }
    ]
  },
  {
    "id": "obesity-hypoventilation-syndrome",
    "specialtySlug": "internal-medicine",
    "title": "Disnea de esfuerzo y dolor torácico",
    "reason": "Disnea y dolor torácico esporádico",
    "history": "Paciente de 54 años, sexo masculino, que consulta por un cuadro clínico de 4 semanas de evolución caracterizado por disnea de medianos esfuerzos, sin progresión, que agrega dolor torácico precordial, opresivo, sin irradiación, en reposo.",
    "background": "Tabaquismo desde los 20 años. Obesidad central.",
    "exam": "PA 140/90 mmHg · FC 95 lpm · FR 22 rpm · T 36,5 °C · SatO₂ 92 % (FiO₂ 0,21)\nNeurológico: sin alteraciones.\nRespiratorio: buena mecánica ventilatoria, hipoventilación en ambos campos pulmonares, sin ruidos adventicios.\nAbdomen: sin alteraciones.\nCardiovascular: R1 y R2 en los cuatro focos, sin soplos; sin ingurgitación yugular, sin crepitantes; diuresis positiva.",
    "labs": "Gasometría arterial pendiente (estado ácido-base).",
    "studies": "Radiografía de tórax: sin alteraciones.\nElectrocardiograma: leve infradesnivel del segmento ST con alteración de la onda T, sin secuelas de infarto previo.",
    "question": "La gasometría está pendiente. Si el cuadro es un síndrome de hipoventilación por obesidad, ¿qué alteración esperaría?",
    "options": [
      "Hipercapnia con hipoxemia y acidosis respiratoria crónica compensada",
      "Hipoxemia sin hipercapnia",
      "Alcalosis respiratoria por hiperventilación",
      "Acidosis metabólica con anión gap elevado"
    ],
    "correctIndex": 0,
    "rationales": [
      "La hipoventilación alveolar reduce el recambio de gas y retiene CO₂: aparece hipercapnia con hipoxemia y, cuando es crónica, el riñón compensa reteniendo bicarbonato.",
      "La hipoxemia sin hipercapnia corresponde a un trastorno de la difusión o del cociente ventilación/perfusión, no a un fallo de la bomba ventilatoria.",
      "La alcalosis respiratoria aparece por hiperventilación, lo contrario de la hipoventilación que describe la exploración.",
      "La acidosis metabólica con anión gap elevado no deriva de hipoventilar; aquí el trastorno primario es respiratorio."
    ],
    "hint": "Si la bomba falla, se retiene CO₂.",
    "discussion": "Confirmar con gasometría arterial —hipercapnia con bicarbonato compensador—, espirometría y, si hay datos de apnea, polisomnografía; valorar ecocardiograma por la posible hipertensión pulmonar. Tratar con pérdida de peso, ventilación no invasiva nocturna si hay hipercapnia sintomática y oxígeno titulado sin sobretratar. Estudiar en paralelo el dolor torácico y los cambios del ST como posible enfermedad coronaria.",
    "studyQuestions": [
      {
        "prompt": "Diagnóstico presuntivo",
        "answer": "Síndrome de hipoventilación por obesidad con insuficiencia respiratoria crónica hipercápnica, en un varón de 54 años con obesidad central y tabaquismo. La disnea de medianos esfuerzos, la hipoventilación en ambos campos pulmonares, la saturación de 92 % y la radiografía normal apuntan a una hipoventilación alveolar y no a una enfermedad del parénquima. La gasometría arterial pendiente debe mostrar una PaCO₂ elevada con bicarbonato compensador; el dolor torácico y los cambios del ST obligan a descartar cardiopatía isquémica concomitante."
      },
      {
        "prompt": "Diagnóstico diferencial",
        "answer": "EPOC, insuficiencia cardíaca con fracción de eyección preservada, tromboembolia pulmonar crónica, apnea obstructiva del sueño, hipoventilación de origen neuromuscular o central e hipotiroidismo. La EPOC y la apnea obstructiva del sueño pueden coexistir con el síndrome de hipoventilación por obesidad, de modo que la espirometría y la polisomnografía completan el estudio."
      },
      {
        "prompt": "Etiología y factores de riesgo",
        "answer": "La obesidad central es el factor principal: la grasa torácica y abdominal reduce la distensibilidad de la pared torácica y el volumen de reserva espiratorio. El tabaquismo añade riesgo de EPOC y de enfermedad coronaria, y la hipertensión de 140/90 mmHg forma parte del mismo perfil metabólico. La resistencia a la leptina y la alteración del centro respiratorio explican por qué estos pacientes no compensan la hipercapnia."
      },
      {
        "prompt": "Fisiopatología",
        "answer": "La carga mecánica de la obesidad aumenta el trabajo respiratorio y reduce la capacidad residual funcional, sobre todo en decúbito. El centro respiratorio responde menos a la hipercapnia y a la hipoxemia, la ventilación alveolar cae y el CO₂ asciende; el riñón retiene bicarbonato y compensa la acidosis respiratoria. La hipoxemia crónica puede producir vasoconstricción pulmonar, hipertensión pulmonar y cor pulmonale, y explicar parte de los cambios del ST."
      },
      {
        "prompt": "Tratamiento",
        "answer": "Gasometría arterial para confirmar la hipercapnia y valorar la compensación; espirometría, polisomnografía y ecocardiograma según los hallazgos. El tratamiento de base es la pérdida de peso —dieta, ejercicio y cirugía bariátrica en casos seleccionados— y la ventilación no invasiva nocturna cuando hay hipercapnia sintomática. Se añade oxígeno titulado sin sobretratar, tratamiento de la apnea del sueño y control de la hipertensión y del riesgo cardiovascular; el dolor torácico con cambios del ST se estudia en paralelo."
      }
    ]
  },
  {
    "id": "obstructive-uropathy-acute-kidney-injury",
    "specialtySlug": "internal-medicine",
    "title": "Dolor lumbar derecho y hematuria macroscópica",
    "reason": "Dolor de espalda",
    "history": "Paciente de 34 años, sexo masculino, que consulta por un cuadro de 2 días de evolución caracterizado por dolor lumbar derecho de moderada intensidad, con hematuria macroscópica y reducción del ritmo diurético; no refiere fiebre ni equivalentes febriles. En las últimas horas agrega dolor muscular de predominio en miembros y refiere un episodio de palpitaciones.",
    "background": "Dolor lumbar de 5 meses de evolución. Pielonefritis en dos oportunidades en los últimos meses. Diabetes LADA de reciente diagnóstico.",
    "exam": "PA 130/80 mmHg · FC 98 lpm · FR 20 rpm · T 37 °C · SatO₂ 98 % (FiO₂ 0,21)\nNeurológico: Glasgow 15/15, orientado en tiempo, espacio y persona.\nPulmonar y cardiovascular: sin alteraciones.\nUrinario: ritmo diurético disminuido (600 mL/día).\nAbdomen: ruidos hidroaéreos presentes, blando y depresible, dolor espontáneo, sin dolor a la puñopercusión.",
    "labs": "Cuerpos cetónicos negativos. Hematocrito 38 %; hemoglobina 12 g/dL. Sodio 132 mEq/L; potasio 6 mEq/L; cloro 106 mEq/L. Urea 60 mg/dL; creatinina 1,6 mg/dL; glucosa 150 mg/dL. EAB: pH 7,30; pCO₂ 32 mmHg; bicarbonato 18 mEq/L; exceso de base −3; pO₂ 85 mmHg; SatO₂ 98 %.",
    "studies": "Imagen abdominal pendiente.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Lesión renal aguda por uropatía obstructiva, probablemente litiásica, con hipercalemia",
      "Pielonefritis aguda complicada",
      "Necrosis papilar renal",
      "Rabdomiólisis con lesión renal aguda"
    ],
    "correctIndex": 0,
    "rationales": [
      "El dolor lumbar derecho con hematuria macroscópica y oliguria de instauración aguda, en un paciente con cólicos lumbares a repetición y dos pielonefritis recientes, dibuja una uropatía obstructiva —lo más frecuente, un cálculo—. La obstrucción explica la lesión renal aguda (creatinina 1,6 mg/dL, urea 60 mg/dL y diuresis de 600 mL/día), la hipercalemia de 6 mEq/L y la acidosis metabólica hiperclorémica de anión gap normal (132 − [106 + 18] = 8), por el descenso de la excreción de potasio y de protones.",
      "La pielonefritis aguda justifica el dolor lumbar y los antecedentes, pero cursa con fiebre, escalofríos y leucocitosis; aquí la temperatura es de 37 °C, sin equivalentes febriles, y el cuadro no explica por sí solo la oliguria con potasio de 6 mEq/L.",
      "La necrosis papilar es una alternativa razonable en un diabético con pielonefritis, porque produce hematuria, dolor lumbar y deterioro renal, pero suele acompañarse de fiebre y sepsis, y el diagnóstico se apoya en defectos papilares en la imagen, que aún está pendiente.",
      "La rabdomiólisis explicaría el dolor muscular, la hipercalemia y la lesión renal aguda, pero no el dolor lumbar unilateral con hematuria macroscópica; además exige una creatincinasa muy elevada y una orina con sangre sin hematíes, datos que no constan en el caso."
    ],
    "hint": "Un dolor lumbar con hematuria y una diuresis de 600 mL/día obliga a mirar la vía urinaria como causa del fallo renal y del potasio de 6 mEq/L.",
    "discussion": "Ante una hipercalemia de 6 mEq/L con dolor muscular y palpitaciones: monitorización continua con ECG, gluconato de calcio si hay cambios electrocardiográficos, insulina con glucosa y salbutamol nebulizado para desplazar el potasio al interior de la célula, y medidas de eliminación (diuresis, resinas, diálisis si es refractaria). En paralelo, imagen urgente de la vía urinaria y desobstrucción —catéter ureteral o nefrostomía—, que es el tratamiento definitivo de la lesión renal aguda postrenal. Evitar AINE, contraste y fármacos que retengan potasio, tratar la infección si se confirma y ajustar el tratamiento de la diabetes.",
    "studyQuestions": [
      {
        "prompt": "Diagnóstico",
        "answer": "Lesión renal aguda por uropatía obstructiva, probablemente litiásica, con hipercalemia y acidosis metabólica hiperclorémica. Lo apoyan el dolor lumbar derecho con hematuria macroscópica, la diuresis de 600 mL/día, la creatinina de 1,6 mg/dL con urea de 60 mg/dL, los antecedentes de cólicos lumbares y de pielonefritis a repetición, y la hipercalemia sintomática. La imagen abdominal está pendiente y es la que confirma el nivel y la causa de la obstrucción."
      },
      {
        "prompt": "Diagnóstico diferencial",
        "answer": "Pielonefritis aguda complicada, necrosis papilar renal, rabdomiólisis, nefritis intersticial aguda, infarto renal, glomerulonefritis aguda y acidosis tubular renal tipo 4. La necrosis papilar y la acidosis tubular tipo 4 son las más cercanas, porque comparten diabetes, hipercalemia y acidosis de anión gap normal; se separan por la fiebre, la imagen y el grado de disfunción renal."
      },
      {
        "prompt": "Etiología y factores de riesgo",
        "answer": "La causa más frecuente de obstrucción urinaria en un adulto joven es la litiasis, y el cálculo impactado en el uréter derecho explicaría el dolor y la hematuria. Las dos pielonefritis previas y el dolor lumbar de 5 meses sugieren además una anomalía persistente de la vía urinaria, como estenosis, litiasis de larga data o una cicatriz que deja un riñón con poca reserva funcional. La diabetes LADA favorece las infecciones urinarias y la necrosis papilar, y la deshidratación agrava la obstrucción y la hipercalemia."
      },
      {
        "prompt": "Fisiopatología",
        "answer": "La obstrucción eleva la presión intratubular y reduce el filtrado glomerular, con oliguria y retención de urea y creatinina. El menor aporte de sodio al túbulo distal y el daño tubular disminuyen la secreción de potasio, y el hipoaldosteronismo que acompaña a la lesión renal aguda la agrava, de ahí el potasio de 6 mEq/L. La caída de la excreción de amonio y de protones produce una acidosis metabólica hiperclorémica de anión gap normal, con hiperventilación compensadora que baja la pCO₂ a 32 mmHg. La hipercalemia despolariza la membrana muscular y cardíaca y explica el dolor muscular, la debilidad y las palpitaciones."
      },
      {
        "prompt": "Tratamiento",
        "answer": "La hipercalemia de 6 mEq/L con síntomas es una urgencia: ECG y monitorización, gluconato de calcio si hay cambios en el trazado, insulina con glucosa y salbutamol nebulizado para el traslado intracelular, y eliminación con diuresis, resinas o diálisis si es refractaria. En paralelo se pide imagen urgente de la vía urinaria y se desobstruye con catéter ureteral o nefrostomía, que es lo que resuelve la lesión renal aguda postrenal. Se evitan AINE, contraste yodado y fármacos que retengan potasio, se trata la infección si se confirma, se ajusta la insulinoterapia de su diabetes y se corrige la volemia con cristaloides isotónicos sin potasio."
      }
    ]
  },
  {
    "id": "transient-ischemic-attack-left-carotid",
    "specialtySlug": "internal-medicine",
    "title": "Ptosis palpebral y alteración de la visión",
    "reason": "Ptosis palpebral y alteración de la visión",
    "history": "Paciente de 55 años, sexo femenino, que consulta por un cuadro clínico de 1 hora de evolución caracterizado por disminución de la agudeza visual izquierda con ptosis palpebral izquierda, sin hemiplejía, hemiparesia ni hemihipoestesia. La paciente refiere mejoría del cuadro clínico durante la estadía en la sala de espera.",
    "background": "Diabetes mellitus en tratamiento con insulina NPH. Hipertensión arterial en tratamiento con IECA y amlodipino. Insuficiencia cardíaca congestiva en tratamiento.",
    "exam": "PA 160/90 mmHg · FC 98 lpm · FR 20 rpm · T 36,5 °C · SatO₂ 98 %\nNeurológico: Glasgow 15/15, orientada en tiempo, espacio y persona, sin déficit motor, sensitivo ni sensorial; reflejos conservados; sin ptosis palpebral ni midriasis izquierda.\nPulmonar, cardiovascular y abdominal: sin alteraciones.",
    "labs": "",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Ataque isquémico transitorio del territorio carotídeo izquierdo",
      "Ictus isquémico establecido de la arteria cerebral media izquierda",
      "Neuropatía isquémica del III par craneal izquierdo por diabetes",
      "Crisis migrañosa con aura visual"
    ],
    "correctIndex": 0,
    "rationales": [
      "La pérdida brusca de la agudeza visual con ptosis del mismo lado en una paciente con diabetes, hipertensión e insuficiencia cardíaca, que se resuelve por completo en menos de una hora y deja la exploración neurológica normal, define un ataque isquémico transitorio del territorio carotídeo izquierdo.",
      "El ictus establecido deja un déficit persistente y una lesión en la neuroimagen; aquí la paciente mejora en la sala de espera y el examen neurológico al momento de la valoración es normal.",
      "La neuropatía isquémica del III par es frecuente en el diabético, pero cursa con ptosis y diplopía sin pérdida de agudeza visual, suele ser dolorosa y tarda semanas en recuperarse, no una hora.",
      "La migraña con aura visual produce un escotoma centelleante que se desplaza y suele acompañarse de cefalea; no provoca ptosis ni se limita a la pérdida de visión de un ojo."
    ],
    "hint": "Un déficit focal de instauración brusca que desaparece por completo y deja la exploración normal no es un ictus establecido; valora los factores de riesgo vascular y que el síntoma afecta a un solo ojo.",
    "discussion": "El ataque isquémico transitorio es una urgencia: el riesgo de ictus es máximo en las primeras 48 horas. Ingreso o valoración urgente con TC o RM cerebral, ECG, ecocardiograma y eco-Doppler de troncos supraaórticos. Antiagregación con ácido acetilsalicílico y estatina de alta potencia —anticoagulación si se documenta fibrilación auricular— y control estricto de la presión arterial y la glucemia, sin descensos bruscos en la fase aguda.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico de la paciente?",
        "answer": "Ataque isquémico transitorio del territorio carotídeo izquierdo, manifestado como pérdida transitoria de la agudeza visual con ptosis palpebral ipsolateral y resolución completa en menos de una hora, con exploración neurológica normal en el momento de la valoración. La diabetes mellitus, la hipertensión arterial y la insuficiencia cardíaca son los factores de riesgo que lo explican."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Ictus isquémico establecido, que dejaría un déficit persistente y una lesión en la neuroimagen; neuropatía isquémica del III par craneal por diabetes, con ptosis y diplopía pero sin pérdida de agudeza visual y de recuperación lenta; migraña con aura visual, con escotoma centelleante y cefalea; hipoglucemia en una paciente tratada con insulina; y amaurosis fugax, que es la forma monocular del mismo mecanismo isquémico carotídeo."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Isquemia cerebral focal y reversible por un embolismo o una trombosis transitoria en el territorio de la carótida izquierda, con restitución del flujo antes de que se produzca necrosis. Los factores de riesgo son los de la paciente: diabetes mellitus insulinorrequiriente, hipertensión arterial, insuficiencia cardíaca congestiva —posible fuente cardioembólica— y la edad. La hipertensión y la diabetes también favorecen la enfermedad ateromatosa del tronco carotídeo."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "Una reducción transitoria del flujo en la arteria oftálmica, rama de la carótida interna, produce isquemia de la retina y pérdida de la agudeza visual de ese ojo; la afectación de las estructuras dependientes del mismo territorio puede acompañarse de ptosis. Cuando la perfusión se restablece antes de que el tejido se necrose, el déficit revierte sin dejar lesión. La misma fuente embólica puede después ocluir una arteria cerebral y producir un ictus establecido, por eso el episodio anuncia un riesgo inmediato."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Ingreso o valoración urgente en unidad de ictus, con TC o RM cerebral para descartar hemorragia y lesión establecida, ECG, ecocardiograma y eco-Doppler de troncos supraaórticos para buscar la fuente. Se inicia antiagregación con ácido acetilsalicílico y estatina de alta potencia; si se documenta fibrilación auricular se anticoagula. Hay que controlar la presión arterial y la glucemia sin descensos bruscos y corregir los factores de riesgo; la endarterectomía o el stent carotídeo se valoran si hay estenosis significativa sintomática."
      }
    ]
  },
  {
    "id": "acute-pulmonary-edema-cardiogenic-shock-chagas",
    "specialtySlug": "internal-medicine",
    "title": "Disnea de pequeños esfuerzos con esputo asalmonado",
    "reason": "Disnea",
    "history": "Paciente de 70 años que consulta por un cuadro clínico de disnea de pequeños esfuerzos y disnea paroxística nocturna, asociado a tos con expectoración asalmonada, con mala mecánica ventilatoria y edemas de miembros inferiores hasta la raíz del muslo.",
    "background": "Insuficiencia cardíaca. Enfermedad de Chagas de 30 años de evolución.",
    "exam": "PA 70/40 mmHg · FC 160 lpm · FR 30 rpm · T 36 °C · SatO₂ 88 % con FiO₂ 0,40\nNeurológico: somnoliento, orientado, resto sin particularidades.\nRespiratorio: mala mecánica ventilatoria por tiraje intercostal y supraclavicular, regular entrada de aire, crepitantes, roncus y sibilancias.\nCardiovascular: R1 y R2 en los cuatro focos, silencios impresionan libres, ingurgitación yugular 2/3 con colapso, edemas de miembros inferiores hasta la raíz del muslo.\nUrinario: diuresis +, puño-percusión negativa.",
    "labs": "pH 7,35 · CO₂ 35 mmHg · bicarbonato 18 mEq/L · pO₂ 55 mmHg · SatO₂ 89 % · urea 60 mg/dL · creatinina 1,6 mg/dL.",
    "studies": "ECG: ausencia de onda P, complejo QRS estrecho (menos de 0,2 s).",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Edema agudo de pulmón cardiogénico con shock cardiogénico por miocardiopatía chagásica descompensada",
      "Tromboembolia pulmonar aguda con cor pulmonale",
      "Neumonía grave con síndrome de distrés respiratorio agudo",
      "Exacerbación de enfermedad pulmonar obstructiva crónica con broncoespasmo"
    ],
    "correctIndex": 0,
    "rationales": [
      "La disnea paroxística nocturna, el esputo asalmonado, los crepitantes bilaterales, la ingurgitación yugular y los edemas hasta la raíz del muslo son congestión pulmonar y sistémica; con presión de 70/40 mmHg, somnolencia, oliguria y creatinina de 1,6 mg/dL el cuadro es un edema agudo de pulmón con shock cardiogénico, sobre una miocardiopatía chagásica de 30 años.",
      "La tromboembolia pulmonar explica la hipoxemia, la taquicardia y la ingurgitación yugular, pero no el esputo asalmonado, los crepitantes difusos ni los edemas hasta la raíz del muslo, que son de congestión izquierda.",
      "La neumonía con distrés justificaría la hipoxemia y los crepitantes, pero faltan fiebre y foco infeccioso, y no explica la ingurgitación yugular, los edemas masivos ni el antecedente de insuficiencia cardíaca y Chagas.",
      "Los roncus y las sibilancias pueden confundir, pero el CO₂ de 35 mmHg y el pH de 7,35 descartan la acidosis respiratoria de la exacerbación, y la congestión sistémica no forma parte de ella."
    ],
    "hint": "El esputo asalmonado y los crepitantes señalan el pulmón, pero la ingurgitación yugular, los edemas hasta la raíz del muslo y la presión de 70/40 mmHg señalan el corazón.",
    "discussion": "Soporte respiratorio con oxígeno y ventilación no invasiva, e invasiva si hay deterioro; noradrenalina para sostener la perfusión y diurético de asa intravenoso una vez corregida la hipotensión, con control de diuresis, electrolitos y función renal. Control de la frecuencia ventricular con amiodarona o digoxina, evitando betabloqueantes y calcioantagonistas no dihidropiridínicos en el shock. Traslado a unidad coronaria, búsqueda del desencadenante y valoración de anticoagulación.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Edema agudo de pulmón cardiogénico con shock cardiogénico, en el contexto de una miocardiopatía chagásica de 30 años de evolución con insuficiencia cardíaca crónica. La presión de 70/40 mmHg, la somnolencia, la diuresis escasa y la creatinina de 1,6 mg/dL expresan la hipoperfusión. La taquicardia de 160 lpm sin onda P y de QRS estrecho actúa como desencadenante."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Tromboembolia pulmonar aguda, neumonía grave con síndrome de distrés respiratorio agudo, exacerbación de enfermedad pulmonar obstructiva crónica con broncoespasmo, síndrome coronario agudo complicado con edema pulmonar, taponamiento cardíaco y edema pulmonar no cardiogénico. La crisis hipertensiva con edema pulmonar no encaja con una presión de 70/40 mmHg."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Miocardiopatía chagásica crónica por Trypanosoma cruzi, con 30 años de evolución e insuficiencia cardíaca ya establecida en los antecedentes. La fibrosis y la disfunción sistólica dejan cavidades dilatadas, favorecen las arritmias auriculares y ventriculares y reducen la reserva cardíaca. La taquicardia rápida acorta el llenado diastólico y descompensa el cuadro. La edad, la disfunción renal y la hipoxemia agravan el pronóstico."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "La disfunción sistólica eleva la presión de llenado del ventrículo izquierdo y la transmite al capilar pulmonar, con trasudación alveolar que produce la disnea paroxística nocturna, los crepitantes y el esputo asalmonado. La taquicardia de 160 lpm acorta aún más el llenado y agrava la congestión, mientras el gasto cardíaco cae y aparece hipoperfusión tisular. Esa hipoperfusión explica la acidosis metabólica con bicarbonato de 18 mEq/L y CO₂ de 35 mmHg —compensación respiratoria adecuada— y la elevación de urea y creatinina. Con pO₂ de 55 mmHg y FiO₂ de 0,40 hay insuficiencia respiratoria parcial."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Soporte respiratorio con oxígeno y ventilación no invasiva, y ventilación invasiva si hay deterioro o agotamiento. Noradrenalina para mantener la perfusión y diurético de asa intravenoso una vez sostenida la presión, con control estricto de diuresis, electrolitos y función renal. Control de la frecuencia ventricular con amiodarona o digoxina; los betabloqueantes y los calcioantagonistas no dihidropiridínicos están contraindicados en el shock. Se buscan y tratan los desencadenantes, se valora anticoagulación y se completa el estudio de la miocardiopatía."
      }
    ]
  },
  {
    "id": "diabetic-ketoacidosis-acute-kidney-injury",
    "specialtySlug": "internal-medicine",
    "title": "Orina abundante y malestar general",
    "reason": "Orina abundante y malestar general",
    "history": "Paciente de 50 años, sexo masculino, que consulta por un cuadro clínico de 72 horas de evolución caracterizado por astenia y adinamia, que agrega en las últimas 12 horas polidipsia, polifagia y poliuria, motivo por el cual acude a emergencia.",
    "background": "Diabetes mellitus en tratamiento con antidiabéticos orales.",
    "exam": "PA 90/60 mmHg · FC 110 lpm · FR 28 rpm · T 37 °C · SatO₂ 95 %\nNeurológico: Glasgow 12/15, somnoliento, orientado; resto sin particularidades.\nRespiratorio: taquipnea de 28 rpm con mecánica ventilatoria regular y buena entrada de aire bilateral.\nAbdomen: ruidos hidroaéreos presentes, blando y depresible, dolor espontáneo, no doloroso a la palpación superficial ni profunda.",
    "labs": "Hemoglobina 12 g/dL; leucocitos 19 000/µL con neutrófilos 85 %. Gasometría: pH 7,10; PO₂ 80 mmHg; PCO₂ 11 mmHg; bicarbonato 7 mEq/L; exceso de bases −21 mEq/L. Na 130 mEq/L; urea 150 mg/dL; creatinina 2 mg/dL.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Cetoacidosis diabética",
      "Acidosis láctica por metformina",
      "Estado hiperosmolar hiperglucémico",
      "Acidosis urémica por insuficiencia renal aguda"
    ],
    "correctIndex": 0,
    "rationales": [
      "El cortejo de poliuria, polidipsia y polifagia de instauración aguda en un diabético tratado con antidiabéticos orales, con deshidratación, taquipnea y acidosis metabólica grave (pH 7,10; bicarbonato 7 mEq/L; PCO₂ 11 mmHg como compensación respiratoria), corresponde a una cetoacidosis diabética.",
      "La acidosis láctica por metformina es una causa de acidosis de anión gap elevado en el diabético con fallo renal, pero no explica el inicio agudo de poliuria, polidipsia y polifagia ni la respiración de Kussmaul.",
      "El estado hiperosmolar produce deshidratación e hiperglucemia intensas, pero sin acidosis metabólica significativa; aquí el pH es 7,10 y el bicarbonato 7 mEq/L.",
      "La acidosis urémica da acidosis de anión gap elevado en la insuficiencia renal avanzada, pero una urea de 150 mg/dL con creatinina de 2 mg/dL no la justifica por sí sola ni explica el cuadro osmótico previo."
    ],
    "hint": "Fíjate en la secuencia: 72 horas de astenia y solo 12 de poliuria, en un diabético que llega deshidratado, taquipneico y con el sensorio deprimido.",
    "discussion": "Cristaloides isotónicos y corrección del potasio antes de la insulina —no se inicia con potasio inferior a 3,3 mEq/L—, seguidos de perfusión de insulina rápida con control horario de glucemia y electrolitos. Hay que buscar y tratar el desencadenante y vigilar el sensorio; el bicarbonato se reserva para pH inferior a 6,9.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico?",
        "answer": "Cetoacidosis diabética en un paciente de 50 años con diabetes mellitus tratada con antidiabéticos orales, deshidratado, con taquipnea, sensorio deprimido y acidosis metabólica grave (pH 7,10; bicarbonato 7 mEq/L). Se acompaña de insuficiencia renal aguda (urea 150 mg/dL, creatinina 2 mg/dL) y de leucocitosis con neutrofilia, que obliga a descartar un proceso infeccioso desencadenante."
      },
      {
        "prompt": "¿Cuál es el diagnóstico diferencial?",
        "answer": "Estado hiperosmolar hiperglucémico, acidosis láctica —incluida la asociada a metformina en el contexto de fallo renal—, acidosis urémica, cetoacidosis alcohólica y acidosis por tóxicos como metanol o salicilatos. En un paciente con alteración del sensorio también hay que descartar hipoglucemia, sepsis y un evento neurológico agudo."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "Déficit relativo de insulina en un diabético tipo 2 tratado con antidiabéticos orales, precipitado por infección, mal cumplimiento, transgresión dietética o fármacos. La deshidratación, la insuficiencia renal aguda y la propia edad agravan el cuadro. La cetoacidosis no es exclusiva de la diabetes tipo 1: en la tipo 2 aparece sobre todo con infecciones o estrés intercurrente."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El déficit de insulina con exceso de hormonas contrarreguladoras activa la lipólisis y la cetogénesis, y los cuerpos cetónicos consumen bicarbonato y generan acidosis metabólica de anión gap elevado. La hiperglucemia provoca diuresis osmótica, con deshidratación y pérdidas de sodio y potasio. La acidosis y la deshidratación deprimen el sensorio, y la taquipnea es la compensación respiratoria, reflejada en el PCO₂ de 11 mmHg."
      },
      {
        "prompt": "¿Cuál es el tratamiento?",
        "answer": "Hidratación con cristaloides isotónicos y corrección del potasio antes de iniciar la insulina —no se inicia con potasio inferior a 3,3 mEq/L—; después, perfusión de insulina rápida con control horario de glucemia, electrolitos y estado ácido-base. Se busca y se trata el desencadenante y el bicarbonato se reserva para pH inferior a 6,9."
      }
    ]
  }
]

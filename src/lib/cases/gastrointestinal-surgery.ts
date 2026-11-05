import type { ClinicalCase } from './types'

/** Cirugía / Traumatología. Generado desde data/cases/authored — no editar a mano. */
export const cases: ClinicalCase[] = [
  {
    "id": "upper-gi-bleeding-gastric-ulcer",
    "specialtySlug": "gastrointestinal-surgery",
    "title": "Sangrado digestivo y heces sanguinolentas",
    "reason": "Sangrado digestivo y heces sanguinolentas",
    "history": "Paciente de 45 años que consulta por un cuadro de 2 semanas de evolución caracterizado por mialgias, artralgias y cefaleas, al que se añaden dolor epigástrico, náuseas y vómitos. Refiere además melena en varias ocasiones y hematemesis de unos 200 mL.",
    "background": "Artrosis en tratamiento con AINE.",
    "exam": "PA 90/50 mmHg · FC 101 lpm · T 35,5 °C · SatO₂ 91 %\nPiel y mucosas: deshidratadas, palidez.\nAbdomen: ruidos hidroaéreos presentes, blando y depresible; tacto rectal positivo.\nCardiovascular: taquicárdico, R1 y R2 sin soplos.",
    "labs": "Hematocrito 27 %. Hemoglobina 7,6 g/dL. Urea 48 mg/dL. Creatinina 0,8 mg/dL.",
    "studies": "Endoscopia digestiva alta: lesiones hemorrágicas en antro gástrico y curvatura menor.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Hemorragia digestiva alta por úlcera gástrica",
      "Hemorragia digestiva baja por enfermedad diverticular",
      "Varices esofágicas por cirrosis",
      "Síndrome de Mallory-Weiss por vómitos"
    ],
    "correctIndex": 0,
    "rationales": [
      "Melena y hematemesis con anemización (hemoglobina 7,6 g/dL) y lesiones hemorrágicas en antro y curvatura menor: el sangrado es alto y de origen gástrico.",
      "La enfermedad diverticular sangra en el colon y produce rectorragia, no hematemesis; además la endoscopia alta no la vería.",
      "Las varices exigen hipertensión portal y no hay datos de cirrosis; la lesión descrita es gástrica y no varicosa.",
      "El Mallory-Weiss es un desgarro esofagogástrico tras vómitos, pero la endoscopia describe lesiones en antro y curvatura menor, no un desgarro."
    ],
    "hint": "Distingue sangrado alto de bajo por lo que sale y por lo que ve la endoscopia.",
    "discussion": "Estabilización hemodinámica con dos accesos, cristaloides y transfusión según necesidad; inhibidor de bomba de protones intravenoso y endoscopia terapéutica precoz. Se suspende el AINE y se trata el Helicobacter pylori si se confirma.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico probable?",
        "answer": "Hemorragia digestiva alta por úlcera gástrica, con anemia aguda y signos de shock hipovolémico incipiente."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Varices esofagogástricas, síndrome de Mallory-Weiss, gastropatía erosiva por AINE, tumor gástrico sangrante y hemorragia digestiva baja."
      },
      {
        "prompt": "¿Etiología y factores de riesgo?",
        "answer": "Lesión de la mucosa gástrica por AINE en un paciente con artrosis; la infección por Helicobacter pylori, el tabaco y la edad añaden riesgo. La anemia previa y la deshidratación reducen la tolerancia a la pérdida."
      },
      {
        "prompt": "¿Fisiopatología del cuadro clínico?",
        "answer": "La úlcera erosiona un vaso submucoso: la sangre digerida produce melena y, si el volumen es alto, hematemesis. La pérdida aguda reduce la volemia y el transporte de oxígeno, con taquicardia, hipotensión y palidez. La urea elevada con creatinina normal —cociente superior a 40— orienta a sangrado digestivo alto."
      },
      {
        "prompt": "¿Conducta en el cuadro clínico?",
        "answer": "Reanimación con cristaloides, control de la hemoglobina y transfusión si procede, inhibidor de bomba de protones intravenoso y endoscopia urgente con hemostasia. Suspender el AINE y erradicar Helicobacter pylori si se confirma."
      }
    ]
  },
  {
    "id": "acute-biliary-pancreatitis-choledocholithiasis",
    "specialtySlug": "gastrointestinal-surgery",
    "title": "Dolor epigástrico, vómitos e ictericia",
    "reason": "Dolor abdominal",
    "history": "Paciente de sexo masculino, de 41 años de edad, que ingresa a terapia intensiva por presentar dolor epigástrico intenso, vómitos, fiebre, ictericia y síndrome de respuesta inflamatoria de 48 horas de evolución. Antecedentes: obesidad y diabetes mellitus en tratamiento con biguanidas.",
    "exam": "PA 100/60 mmHg · FC 112 lpm · FR 26 rpm · T 37,8 °C · SatO₂ 99 %\nAbdomen: ruidos hidroaéreos disminuidos, distendido, doloroso a la palpación en cuadrantes superiores.",
    "labs": "Leucocitos 23 000 (neutrófilos 82 %). Amilasa 1500, lipasa 2200. Bilirrubina total 6 mg/dL con predominio de directa. Triglicéridos 1731.",
    "studies": "Ecografía abdominal: dilatación de la vía biliar intra y extrahepática, coledocolitiasis y páncreas edematoso. Tomografía de abdomen: Balthazar D. CPRE: colocación de stent plástico por coledocolitiasis gigante impactada y edema duodenal. El paciente evoluciona estable hasta el día 35, cuando presenta fiebre, dolor y distensión abdominal.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Pancreatitis aguda de origen biliar",
      "Colangitis aguda por coledocolitiasis",
      "Pancreatitis aguda por hipertrigliceridemia",
      "Colecistitis aguda complicada"
    ],
    "correctIndex": 0,
    "rationales": [
      "El dolor epigástrico intenso con vómitos, la amilasa de 1500 y la lipasa de 2200 junto con el páncreas edematoso definen una pancreatitis aguda, y la coledocolitiasis con dilatación de la vía biliar intra y extrahepática establece su origen biliar; la bilirrubina directa explica la ictericia.",
      "La colangitis comparte fiebre, ictericia y dolor del hipocondrio derecho, y aquí coexiste con la obstrucción, pero no explica por sí sola la elevación marcada de amilasa y lipasa ni el páncreas edematoso, que definen la pancreatitis.",
      "Los triglicéridos de 1731 podrían causar pancreatitis, pero la litiasis coledociana documentada por imagen y la dilatación de la vía biliar señalan el origen biliar; la hipertrigliceridemia no explica el patrón colestásico.",
      "La colecistitis aguda da fiebre, leucocitosis y dolor en el hipocondrio derecho, pero cursa sin dilatación de la vía biliar ni coledocolitiasis y no eleva amilasa y lipasa de esta magnitud."
    ],
    "hint": "Cruza las enzimas pancreáticas con la ictericia: la dilatación de la vía biliar y el cálculo en el colédoco indican de dónde viene el cuadro.",
    "discussion": "Cristaloides, analgesia, monitorización y control de la glucemia y los triglicéridos. La vía biliar obstruida se descomprime por CPRE —aquí con stent plástico por el cálculo gigante impactado— y la colecistectomía diferida completa el tratamiento. Ante la fiebre con dolor y distensión al día 35 hay que descartar necrosis pancreática infectada: TC con contraste, hemocultivos, antibióticos con penetración pancreática y drenaje percutáneo o necrosectomía diferida.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Pancreatitis aguda de origen biliar por coledocolitiasis gigante impactada, con síndrome de respuesta inflamatoria sistémica e ictericia obstructiva. El páncreas edematoso y la dilatación de la vía biliar sostienen el diagnóstico. La fiebre con dolor y distensión al día 35 hace sospechar una complicación infecciosa de la colección pancreática."
      },
      {
        "prompt": "¿Cuál es el diagnóstico diferencial?",
        "answer": "Colangitis aguda, colecistitis aguda, pancreatitis por hipertrigliceridemia o alcohólica, úlcera péptica perforada, isquemia mesentérica y cólico biliar complicado. En la evolución tardía se añaden el seudoquiste pancreático, la necrosis pancreática infectada y el absceso intraabdominal."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "La causa es la litiasis coledociana, que en este paciente se ve favorecida por la obesidad y la diabetes mellitus. Los triglicéridos de 1731 actúan como factor agravante y como etiología alternativa. El tamaño gigante del cálculo con impactación y edema duodenal dificultó el drenaje biliar y condicionó la colocación de un stent plástico."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El cálculo impactado en el colédoco eleva la presión del conducto pancreático y desencadena la activación intrapancreática de las enzimas digestivas, con autodigestión, edema y necrosis. La obstrucción biliar asociada produce hiperbilirrubinemia directa e ictericia. La liberación de mediadores inflamatorios explica el síndrome de respuesta inflamatoria, y la sobreinfección de la necrosis explica el deterioro tardío."
      },
      {
        "prompt": "¿Cuál es la conducta y el tratamiento del caso clínico?",
        "answer": "Soporte con cristaloides, analgesia, monitorización y control metabólico, con descompresión de la vía biliar por CPRE y extracción del cálculo. Se programa la colecistectomía diferida para evitar la recurrencia. Si al día 35 aparecen fiebre, dolor y distensión, se realiza TC con contraste y hemocultivos, se inician antibióticos con penetración pancreática y se valora drenaje percutáneo o necrosectomía diferida."
      }
    ]
  },
  {
    "id": "acute-liver-failure-coagulopathy",
    "specialtySlug": "gastrointestinal-surgery",
    "title": "Dolor abdominal, fiebre y hematemesis",
    "reason": "Dolor abdominal y hematemesis",
    "history": "Paciente de 47 años, sexo femenino, que consulta por un cuadro de 48 horas de evolución de fiebre acompañada de dolor abdominal, vómitos oscuros y epistaxis, que agrega melena, dolor abdominal y hematemesis.",
    "exam": "PA 110/65 mmHg · FC 100 lpm · T 37,7 °C · SatO₂ 95 % · glucemia capilar 110 mg/dL\nNeurológico: consciente, orientada.\nPiel y mucosas: ictericia.\nCardiológico: R1 y R2 sin soplos.\nAbdomen: distendido, doloroso a la palpación en hipocondrio derecho, hepatomegalia, ruidos hidroaéreos disminuidos.",
    "labs": "Hematocrito 32,4 %; hemoglobina 11; leucocitos 1200 (neutrófilos 36,9 %, linfocitos 56 %); VCM 118; plaquetas 22 000. TP 46,5; INR 4; TTPA 69,73. Glucosa 38; Na 128; K 3,9. Bilirrubina total 4,56; bilirrubina directa 3,55. TGO 258; TGP 76; amilasa 57; proteínas totales 8,1. Gasometría: pH 7,14; pCO₂ 37; pO₂ 35,4; bicarbonato 12,6; exceso de base −15,5.",
    "studies": "Radiografía de abdomen y decúbito lateral: ascitis y obstrucción paralítica de intestino delgado. En la sala de urgencias se avisa de parada cardiorrespiratoria.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Insuficiencia hepática aguda grave con coagulopatía",
      "Hemorragia digestiva alta por úlcera péptica",
      "Colangitis aguda ascendente",
      "Sepsis abdominal con coagulación intravascular diseminada"
    ],
    "correctIndex": 0,
    "rationales": [
      "La ictericia con bilirrubina de predominio directo, el INR de 4, la hipoglucemia de 38, la ascitis y la progresión a parada cardiorrespiratoria traducen un fallo hepatocelular agudo grave; la hemorragia —hematemesis, melena y epistaxis— se explica por la coagulopatía.",
      "La úlcera péptica explica la hematemesis y la melena, pero no la ictericia, la hipoglucemia de 38, la ascitis ni un INR de 4.",
      "La colangitis comparte fiebre, ictericia y dolor en hipocondrio derecho, pero no se documenta dilatación de la vía biliar y no explica el fallo de síntesis con hipoglucemia ni la ascitis.",
      "La sepsis con coagulación intravascular diseminada justifica la trombocitopenia y la coagulopatía, pero no explica por sí sola la ictericia con transaminasas elevadas, la hipoglucemia ni la ascitis."
    ],
    "hint": "Cruza la ictericia con el INR de 4 y la glucosa de 38: el hígado ha dejado de sintetizar factores de coagulación y de producir glucosa.",
    "discussion": "Asegurar la vía aérea y la hemodinámica, corregir la hipoglucemia y administrar vitamina K, plasma fresco congelado y plaquetas si hay sangrado activo. Iniciar omeprazol y practicar endoscopia digestiva una vez estabilizada, con N-acetilcisteína si se sospecha paracetamol. Traslado a cuidados intensivos y contacto con un centro de trasplante hepático, tratando el desencadenante.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Insuficiencia hepática aguda grave con fallo de síntesis —INR de 4 e hipoglucemia de 38 mg/dL— y hemorragia digestiva por la coagulopatía, con ascitis e íleo paralítico. La evolución a parada cardiorrespiratoria refleja el fallo multiorgánico. Los datos del caso no permiten establecer la etiología."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Hemorragia digestiva alta por úlcera péptica o por varices, colangitis aguda, pancreatitis aguda, sepsis abdominal con coagulación intravascular diseminada y hepatopatía crónica descompensada. En zona endémica hay que considerar dengue grave, fiebre amarilla y leptospirosis, además de hepatitis viral o tóxica."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "El caso no permite precisar la causa: hay que descartar hepatitis viral, tóxicos como paracetamol, alcohol o setas, fármacos, hepatitis autoinmune, enfermedad de Wilson, isquemia hepática y obstrucción venosa. No constan antecedentes de hepatopatía, transfusiones, viajes ni ingesta de tóxicos, que son los datos que orientarían el estudio. La fiebre de 48 horas y la citopenia obligan a descartar también una causa infecciosa o hematológica."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El daño hepatocelular masivo suprime la síntesis de factores de coagulación, albúmina y glucosa, de donde vienen el INR de 4, la hipoglucemia y la ascitis. La hipertensión portal y la coagulopatía explican la hemorragia digestiva y el íleo paralítico, y la hipoperfusión añade la acidosis metabólica del pH 7,14. El amonio no aclarado y los mediadores inflamatorios explican la encefalopatía que puede preceder al deterioro final."
      },
      {
        "prompt": "¿Cuál es el tratamiento y la conducta?",
        "answer": "Soporte en cuidados intensivos con vía aérea protegida, cristaloides, corrección de la hipoglucemia y de los electrolitos. Vitamina K, plasma fresco congelado y plaquetas si hay sangrado activo, junto con omeprazol y endoscopia digestiva tras la estabilización. N-acetilcisteína si se sospecha paracetamol, tratamiento del desencadenante y valoración urgente en un centro de trasplante hepático, evitando sedantes y fármacos hepatotóxicos."
      }
    ]
  },
  {
    "id": "acute-cholangitis-choledocholithiasis",
    "specialtySlug": "gastrointestinal-surgery",
    "title": "Dolor abdominal de varios días con fiebre e ictericia",
    "reason": "Dolor abdominal de varios días con fiebre e ictericia",
    "history": "Paciente de 73 años, sexo femenino, que consulta por dolor abdominal de varios días de evolución con náuseas y vómitos biliosos abundantes, y fiebre de 38,9.",
    "background": "Hipertensión arterial mal controlada, dislipidemia, prediabetes, bronquiectasias.",
    "exam": "PA 130/80 mmHg · FC 81 lpm · T 37,8 °C · SatO₂ 93 %\nNeurológico: consciente, orientada.\nPiel y mucosas: hidratadas, normocoloreadas, ictericia generalizada.\nAbdomen: blando, depresible, doloroso a la palpación de hipocondrio derecho con irradiación hacia fosa ilíaca derecha, hipocondrio derecho y fosa ilíaca izquierda; McBurney positivo.\nEcografía abdominal: vesícula biliar distendida, con imágenes litiásicas en su interior, y dilatación de las vías biliares intrahepáticas.\nPor persistencia de la fiebre (39,8 °C), taquicardia (112 lpm) y del dolor se decide realizar CPRE, que informa colédoco dilatado (11 mm) y coledocolitiasis (dos cálculos de 10 mm); se realiza papilotomía y litotripsia mecánica.",
    "labs": "",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Colangitis aguda por coledocolitiasis",
      "Colecistitis aguda litiásica",
      "Pancreatitis aguda biliar",
      "Apendicitis aguda"
    ],
    "correctIndex": 0,
    "rationales": [
      "La tríada de fiebre, ictericia generalizada y dolor en hipocondrio derecho, junto con la dilatación de la vía biliar y los cálculos en el colédoco confirmados por CPRE, define una colangitis aguda por coledocolitiasis; la fiebre de 39,8 °C con taquicardia de 112 lpm apunta a un cuadro séptico.",
      "La colecistitis aguda da fiebre y dolor en hipocondrio derecho, pero la ictericia marcada y la dilatación de la vía biliar con cálculos en el colédoco no se explican por la inflamación vesicular aislada.",
      "La pancreatitis aguda biliar puede acompañar a la coledocolitiasis, pero predomina el dolor epigástrico irradiado en cinturón y no explica la ictericia con dilatación de la vía biliar intrahepática.",
      "La apendicitis aguda se apoyaría en el McBurney positivo y la irradiación a fosa ilíaca derecha, pero no produce ictericia generalizada ni dilatación de la vía biliar con coledocolitiasis."
    ],
    "hint": "Junta fiebre alta, ictericia y dolor en hipocondrio derecho, y busca después dónde está el obstáculo en la vía biliar.",
    "discussion": "Reanimación con cristaloides, analgesia y antibioterapia de amplio espectro con cobertura de gramnegativos y anaerobios; el drenaje biliar por CPRE con esfinterotomía y extracción del cálculo no debe demorarse, sobre todo si hay sepsis. Tras el control del cuadro se plantea colecistectomía laparoscópica diferida y se vigila la aparición de pancreatitis post-CPRE.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Colangitis aguda por coledocolitiasis: fiebre de 39,8 °C, ictericia generalizada y dolor en hipocondrio derecho, con vía biliar intrahepática dilatada y colédoco de 11 mm con dos cálculos de 10 mm."
      },
      {
        "prompt": "¿Cuál es el diagnóstico diferencial?",
        "answer": "Colecistitis aguda, pancreatitis aguda biliar, coledocolitiasis sin colangitis, síndrome de Mirizzi, absceso hepático, hepatitis aguda y apendicitis aguda por el McBurney positivo y la irradiación a fosa ilíaca derecha."
      },
      {
        "prompt": "¿Cuáles son los factores de riesgo y la etiología?",
        "answer": "Litiasis biliar como causa de la obstrucción del colédoco; la edad de 73 años, el sexo femenino, la dislipidemia y la prediabetes son factores de riesgo de colelitiasis. La estasis biliar favorece la infección por enterobacterias."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El cálculo impactado en el colédoco provoca estasis biliar y sobrecrecimiento bacteriano —Escherichia coli, Klebsiella, Enterococcus y anaerobios—. La presión en la vía biliar aumenta y favorece el reflujo colangiovenoso y linfático, con bacteriemia y respuesta sistémica; la obstrucción explica la ictericia conjugada."
      },
      {
        "prompt": "¿Cuál es la conducta clínica-quirúrgica?",
        "answer": "Soporte hemodinámico, analgesia y antibióticos de amplio espectro, con drenaje biliar precoz por CPRE mediante esfinterotomía y extracción del cálculo. La vesícula se resuelve después con colecistectomía laparoscópica diferida, y en el postoperatorio se vigila la pancreatitis post-CPRE."
      }
    ]
  },
  {
    "id": "mallory-weiss-upper-gi-bleeding",
    "specialtySlug": "gastrointestinal-surgery",
    "title": "Hematemesis y dolor torácico",
    "reason": "Hematemesis y dolor torácico",
    "history": "Paciente de 45 años que consulta por un cuadro de 6 horas de evolución caracterizado por dolor torácico en la región precordial, de moderada a gran intensidad, que se inicia en el contexto de vómitos intensos y recurrentes de contenido alimentario tras una ingesta copiosa de alcohol, con hematemesis de 100 a 200 mL y astenia extrema.",
    "background": "Diabetes tipo LADA diagnosticada a los 42 años, en tratamiento con insulina NPH. Consumo social de alcohol.",
    "exam": "PA 80/40 mmHg · FC 130 lpm · FR 28 rpm · T 36 °C · SatO₂ 93 %\nCardiovascular: R1 y R2 sin soplos, pulsos disminuidos y filiformes en las extremidades, sin ingurgitación yugular, sin edemas.\nRespiratorio: sin particularidades.\nAbdomen: ruidos hidroaéreos presentes, blando, depresible, doloroso en epigastrio de forma espontánea, no a la palpación superficial ni profunda.\nNeurológico: Glasgow 12/15.",
    "labs": "Glucemia 140 mg/dL. Hb 8 g/dL; Hto 28 %. Urea 60; creatinina 1,5. Na 134; K 3,3; Cl 100.",
    "studies": "Endoscopia digestiva alta: sangrado a chorro, con dificultad de visualización en la región del esfínter esofágico inferior; se instila adrenalina. Radiografía de tórax sin alteraciones.",
    "question": "¿Cuál es el diagnóstico más probable?",
    "options": [
      "Síndrome de Mallory-Weiss con hemorragia digestiva alta y shock hipovolémico",
      "Síndrome de Boerhaave",
      "Hemorragia digestiva por várices esofágicas",
      "Úlcera péptica sangrante"
    ],
    "correctIndex": 0,
    "rationales": [
      "Los vómitos intensos y repetidos tras una ingesta copiosa de alcohol, el dolor precordial y la hematemesis configuran un desgarro de la unión esofagogástrica; la endoscopia muestra sangrado a chorro en el esfínter esofágico inferior y la radiografía de tórax es normal. La presión de 80/40 mmHg con pulso filiforme y 130 lpm añade un shock hipovolémico.",
      "El síndrome de Boerhaave es una rotura transmural del esófago distal, con dolor torácico intenso y shock, pero cursa con neumomediastino, enfisema subcutáneo o derrame pleural; aquí la radiografía de tórax es normal y la endoscopia describe un sangrado, no una perforación.",
      "Las várices esofágicas sangran de forma masiva en pacientes con hipertensión portal; aquí no hay antecedentes de hepatopatía ni estigmas de cirrosis, y el desencadenante son los vómitos, no la rotura de una variz.",
      "La úlcera péptica puede sangrar y dar hematemesis, pero el dolor epigástrico suele preceder al sangrado y la endoscopia habría mostrado el cráter ulceroso; aquí el episodio está precedido por vómitos repetidos y el sangrado se localiza en el esfínter esofágico inferior."
    ],
    "hint": "Distingue una lesión mucosa que sangra de una perforación: la radiografía de tórax y el mediastino deciden.",
    "discussion": "Reanimación con cristaloides y hemoderivados según el estado hemodinámico, con control de la vía aérea si el deterioro de conciencia lo exige. Inhibidor de bomba de protones intravenoso y endoscopia urgente con hemostasia (adrenalina, clips o ligadura); si falla, embolización arterial o cirugía. Control de la glucemia y abordaje posterior del consumo de alcohol.",
    "studyQuestions": [
      {
        "prompt": "¿Cuál es el diagnóstico presuntivo?",
        "answer": "Síndrome de Mallory-Weiss: desgarro longitudinal de la mucosa en la unión esofagogástrica tras vómitos repetidos, con hemorragia digestiva alta y shock hipovolémico (PA 80/40 mmHg, FC 130 lpm, Hb 8 g/dL)."
      },
      {
        "prompt": "¿Cuáles son los diagnósticos diferenciales?",
        "answer": "Síndrome de Boerhaave (rotura esofágica), hemorragia por várices esofágicas, úlcera péptica sangrante, gastropatía erosiva o hemorrágica alcohólica, lesión de Dieulafoy y desgarro de la unión por otras causas, como la iatrogenia o la reanimación cardiopulmonar."
      },
      {
        "prompt": "¿Cuál es la etiología y los factores de riesgo?",
        "answer": "El desgarro se produce por un aumento brusco de la presión intraabdominal e intragástrica contra un esfínter esofágico cerrado, como ocurre con los vómitos intensos. Los factores de riesgo son el consumo excesivo de alcohol, la ingestión copiosa de alimentos, la gastritis, la hernia hiatal y cualquier proceso que provoque vómitos repetidos; aquí se suman la diabetes LADA y la deshidratación por el vómito."
      },
      {
        "prompt": "¿Cuál es la fisiopatología?",
        "answer": "El esfuerzo del vómito eleva de golpe la presión dentro del estómago y la transmite al cardias, que no se relaja; la mucosa, más frágil que la capa muscular, se desgarra en la unión esofagogástrica. El desgarro compromete vasos submucosos y produce hematemesis, que puede ser a chorro si alcanza una arteriola, con pérdida de volumen y shock. El dolor precordial o epigástrico aparece por la distensión y la irritación de la zona."
      },
      {
        "prompt": "¿Cuál es el tratamiento?",
        "answer": "Reanimación hemodinámica con cristaloides y transfusión según necesidad —aquí Hb 8 g/dL con shock—, corrección del potasio de 3,3 mEq/L y control de la glucemia. Inhibidor de bomba de protones intravenoso y endoscopia urgente con hemostasia: adrenalina, clips, ligadura o escleroterapia. La mayoría de los casos cede; si el sangrado persiste, se recurre a embolización angiográfica o cirugía. Después, abordaje del consumo de alcohol y seguimiento de la diabetes."
      }
    ]
  }
]

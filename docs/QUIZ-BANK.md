# Quiz bank

Contrato de contenido para `src/lib/quiz-bank/`. Léelo entero antes de escribir preguntas.

## Estructura

```
src/lib/quiz-bank/
  seed.ts                        ← las 20 originales (no se tocan)
  index.ts                       ← agrega los lotes y exporta quizGroups / randomQuizGroup
  internal-medicine/<lote>.ts
  gastrointestinal-surgery/<lote>.ts
  obstetrics-gynecology/<lote>.ts
  pediatrics/<lote>.ts
```

Cada fichero de lote exporta **una sola constante**:

```ts
import type { QuizQuestion } from '@/lib/content'

export const questions: QuizQuestion[] = [
  {
    prompt: '¿…?',
    options: ['…', '…', '…', '…'],
    correctIndex: 2,
    explanation: '…',
    source: { specialty: 'internal-medicine', topic: 'cushing-triad' },
  },
]
```

`explanation` es obligatoria y de **600 caracteres como máximo** (un test lo verifica).

## Dónde está el contenido

Cada apunte es un JSON en `data/medical/<carpeta>/<archivo>.json`. Lee el apunte **antes**
de escribir cada pregunta. Los bloques que más rinden son los titulados
`Puntos clave` y `Perlas y errores frecuentes`; también valen las tablas, definiciones,
clasificaciones y dosis.

## Reglas de autoría

1. **Solo hechos escritos en el apunte.** Si el apunte no lo dice, no existe la pregunta.
2. **Cifras, dosis, umbrales y porcentajes se copian literalmente.** Nunca se deducen ni se
   redondean.
3. **Cuatro opciones, exactamente una correcta**, y las cuatro deben ser plausibles.
4. **El distractorio bueno es un error que el apunte menciona**: usar «Perlas y errores
   frecuentes» como cantera de respuestas falsas.
5. **Sin opciones absurdas** ni de relleno («ninguna de las anteriores», «todas son
   correctas», «no se puede saber», «el médico decide»).
6. **Sin dos opciones ciertas** ni dos que digan lo mismo con otras palabras.
7. **`correctIndex` repartido.** No pongas más de dos respuestas seguidas en la misma
   posición; el banco debe poder responderse sin memorizar letras.
8. **`explanation`**: 40-80 palabras, en tercera persona, sin repetir el enunciado. Es la
   frase que el usuario leerá al pulsar «¿Por qué esta respuesta?».
9. **`source.topic`**: el slug exacto que se te entrega, sin inventar ni traducir.
10. **Español de España/neutro**, tuteo, sin anglicismos innecesarios.

## Cantidad

~9 preguntas por apunte, repartidas según lo que el apunte dé de sí. Los apuntes cortos
(tríadas) suelen dar 4-6; un apunte largo con tablas puede dar 15-20. **La cobertura manda
sobre la media**: ningún apunte se queda sin al menos una pregunta.

## Prohibido

- Copiar una pregunta de otro lote o de `seed.ts`.
- Preguntar lo mismo dos veces con distinto enunciado dentro del mismo apunte.
- Tocar cualquier fichero que no sea el tuyo.
- Añadir dependencias, imports de React o lógica: esto es solo datos.

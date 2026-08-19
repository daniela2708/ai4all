## Why

El sitio se publica el mismo día que arranca el piloto (`content.ts:97` fija la
sesión 01 el 2026-08-19), pero el copy está escrito en presente consumado, como si
los resultados ya existieran: `impact.title` proclama "El impacto no se intuye. Se
demuestra." sobre tres métricas en `—`, en la tercera sección del DOM. Afirmar el
resultado antes de tenerlo es lo que el lector registra como tono vendedor, y de
ahí se desprende el síntoma visible: una misma figura retórica —la antítesis "X no
es A, es B"— repetida unas 18 veces en los titulares, llenando el hueco donde
debería ir especificidad.

En paralelo, el copy desactiva a las dos personas que diseñaron el programa. La
sección Equipo está bien ubicada (2ª del DOM) pero su lenguaje las minimiza:
"QUIÉNES ACOMPAÑAN", "facilitan el recorrido", contribuciones genéricas. Trabajo de
diseño descrito con el verbo más débil disponible.

## What Changes

- Se reescribe la **capa informe** del sitio (Hero, Team, Impact, Manifesto, Model,
  Why) para que declare en qué punto real del programa está: qué se va a medir, en
  qué fecha aparece el dato, y qué mecanismo lo produce.
- Se reduce la antítesis a un presupuesto de **4 apariciones en toda la página**,
  conservando `manifesto.a`/`manifesto.b` como la única del bloque superior.
- Se corrigen los verbos de atribución **solo donde Daniela y Cristian ya
  aparecen**: `team.*`, `model.phaseOne.owner`, `model.phaseTwo.owner` y
  `people[].contribution`. Sin menciones nuevas en hero ni footer.
- Se elimina el slogan `footer.tagline` ("Doing and making with AI").
- Se corrige la numeración de las etiquetas de sección, que hoy contradice el orden
  de lectura del DOM (`Impact` lleva "09" y aparece 3ª; `Model` lleva "01" y
  aparece 5ª).
- Se mueven a `copy.ts` los divisores de fase hardcodeados en `App.tsx:84-86` y
  `91-93`, que hoy escapan al tipado que garantiza la paridad ES/EN.
- Las reglas editoriales quedan escritas como capability, no como diff, porque la
  página se sigue escribiendo seis semanas más: cada sesión publica materiales, las
  métricas se llenan el 2 de octubre.

**La capa manual** (Method, Cases, Program, Challenge, Library, Ops, Responsible)
no se toca en registro ni en retórica. Es el mejor copy del sitio: tiene
destinatario claro y detalle operativo real, y ese detalle es el impacto. La
única excepción es una palabra en `content.ts:270` —"Acá" pasa a "Aquí"— por
consistencia de neutralidad del español con el resto del sitio.

**Deuda registrada.** El presupuesto de antítesis se cumple en la capa informe,
que queda en cuatro. La capa manual excede hoy el presupuesto con seis
apariciones —`cases.title`, `cases.lead`, `cases.notes[0]`, `challenge.lead`,
`challenge.dynamicBody`, y los `why` de los días 3 y 5 en `content.ts`—. Queda
fuera de alcance por decisión explícita y anotada en el spec, no resuelta en
silencio.

## Capabilities

### New Capabilities
- `voz-editorial`: reglas que gobiernan cómo se escribe el copy del sitio — tiempo
  verbal según el estado real del programa, atribución acotada al trabajo,
  presupuesto de figuras retóricas, evidencia o fecha para toda afirmación de
  valor, registro por capa de audiencia, y paridad ES/EN por reescritura.

### Modified Capabilities

Ninguna. Es el primer spec del repo.

## Impact

| Archivo | Alcance |
|---|---|
| `src/copy.ts` | Bloques `hero`, `manifesto`, `why`, `model`, `impact`, `team`, `footer` y los `label` de sección — en `es` (4-348) **y** en `en` (349-693) |
| `src/content.ts` | `people[].contribution`, vía `c(es, en)` |
| `src/App.tsx` | Divisores de fase hardcodeados (84-86, 91-93) movidos a `copy.ts` |
| `openspec/config.yaml` | Bloque `context:`, hoy vacío, recibe el resumen de las reglas |

Sin cambios de UI, layout, tipografía ni color. Ningún archivo de `src/sections/`
cambia: todo el texto se lee vía `t.<bloque>` y `pick(copy, lang)`.

El tipado `const en: typeof es` (`copy.ts:349`) hace fallar el build si una llave
queda sin par en inglés, así que la paridad está garantizada por el compilador.

## ADDED Requirements

### Requirement: Tiempo verbal según el estado real del programa

El copy MUST NOT afirmar resultados que todavía no ocurrieron. Cuando un bloque
muestra datos pendientes —métricas en `—`, biblioteca sin materiales, contador de
sesiones en cero—, el texto que lo rodea MUST declarar qué se va a medir y en qué
fecha aparece el dato, en lugar de afirmar que el resultado ya está demostrado.

La estructura del sitio ya es honesta con el tiempo: `lib.ts` calcula el estado en
vivo con `sessionState()`, `nextSession()`, `completedCount()` y `dayIsPast()`. El
copy debe sostener esa misma honestidad.

#### Scenario: Bloque de métricas todavía sin datos

- **WHEN** un bloque de métricas muestra valores marcador de posición (`—`)
- **THEN** el titular y el lead que lo acompañan enuncian qué se medirá y en qué
  fecha se publican los números
- **AND** no afirman que el impacto está demostrado, comprobado ni cuantificado

#### Scenario: La fecha del dato pendiente es texto de primer nivel

- **WHEN** el copy compromete un dato futuro
- **THEN** la fecha aparece en el cuerpo del bloque, no en una nota al pie
- **AND** se redacta como compromiso verificable, no como disculpa por la ausencia

### Requirement: Atribución acotada al trabajo, no al estatus

Toda mención a una persona que lidera el programa MUST nombrar un artefacto
concreto que diseñó o un acto concreto que ejecuta, nunca únicamente una posición
o un rol. El mismo bloque MUST atribuir los casos, los datos y los resultados al
equipo participante.

El crédito específico es a la vez menos discutible y más impresionante que el
genérico: "diseñó las 12 sesiones y el instrumento de priorización" es un hecho
verificable, "lidera la iniciativa" es una afirmación de estatus.

#### Scenario: Copy que nombra a una persona líder

- **WHEN** el copy menciona a Daniela Ríos o a Cristian Villamil
- **THEN** nombra qué diseñaron o qué hacen, en concreto
- **AND** el bloque atribuye explícitamente los casos, los datos y las
  automatizaciones resultantes a People/Ops

#### Scenario: Verbos prohibidos para describir el aporte de quien diseñó

- **WHEN** se describe el aporte de quien diseñó o dirige una fase
- **THEN** no se usan "acompañar" ni "facilitar" como verbo principal
- **AND** se usa un verbo que describa el trabajo realizado

### Requirement: Presupuesto de figuras retóricas

Cada capa de audiencia MUST contener como máximo cuatro antítesis o paralelismos
negativos —construcciones del tipo "X no es A, es B" o "no se P: se Q"— y nunca
dos dentro de la misma sección.

Una antítesis es filosa. Repetida, se vuelve un tic, y el tic es lo que el oído
registra como pitch de venta. La retórica repetida llena el hueco donde debería ir
la especificidad.

La capa informe queda en cumplimiento al cerrar este change. La capa manual
excede hoy el presupuesto —seis apariciones entre `cases`, `challenge` y los días
del Challenge en `content.ts`— y queda registrada como deuda conocida, fuera del
alcance acordado. El presupuesto rige de inmediato para todo copy nuevo o
editado en cualquiera de las dos capas.

#### Scenario: Se escribe un titular nuevo

- **WHEN** se redacta o reescribe un titular
- **AND** la capa a la que pertenece ya está en su presupuesto de cuatro
- **THEN** el titular nuevo se escribe en forma declarativa

#### Scenario: Auditoría del presupuesto

- **WHEN** se revisa el copy antes de publicar
- **THEN** las antítesis presentes se pueden enumerar de forma explícita, por capa
- **AND** ninguna sección contiene dos

#### Scenario: Deuda heredada en la capa manual

- **WHEN** se edita una sección de la capa manual por cualquier motivo
- **THEN** se aprovecha para bajar su conteo de antítesis
- **AND** no se agregan nuevas mientras la capa siga por encima del presupuesto

### Requirement: Toda afirmación de valor exige evidencia o fecha

Una afirmación sobre resultados, impacto o beneficio MUST publicarse solo si el dato
que la respalda está presente en la página, o si el texto declara explícitamente
cuándo aparecerá ese dato.

Las predicciones sobre el futuro sin respaldo MUST NOT publicarse.

#### Scenario: Claim sin dato en la página

- **WHEN** el copy afirma un beneficio o un resultado
- **AND** no hay dato que lo respalde a la vista
- **THEN** la afirmación se reformula como compromiso fechado, o se elimina

#### Scenario: Predicción sobre el futuro del sector o de la organización

- **WHEN** el copy contiene una predicción sobre lo que va a pasar
- **THEN** se elimina, salvo que cite una fuente verificable

### Requirement: Registro por capa de audiencia

El sitio sirve a dos audiencias y MUST hacerlo en capas separadas y deliberadas,
no en un registro promedio.

La **capa informe** —Hero, Team, Impact, Manifesto, Model, Why— le habla a
liderazgo: tercera persona, foco en mecanismo, costo y evidencia. La **capa
manual** —Method, Cases, Program, Challenge, Library, Ops, Responsible— le habla a
quien participa: foco en qué hago, cuándo y qué me llevo.

La persona gramatical MUST NOT mezclarse dentro de una misma capa.

#### Scenario: Se agrega o reescribe copy en una sección

- **WHEN** se escribe copy para una sección
- **THEN** se identifica primero a qué capa pertenece
- **AND** se usa la persona gramatical y el foco de esa capa

#### Scenario: Detalle operativo en la capa manual

- **WHEN** una sección de la capa manual describe un mecanismo
- **THEN** conserva el detalle operativo concreto —umbrales, minutos, pasos—
- **AND** ese detalle no se sustituye por lenguaje promocional

### Requirement: Paridad ES/EN por reescritura, no por traducción

Todo cambio de copy MUST aplicarse en español y en inglés. El objeto `en` está
tipado contra `es` (`copy.ts:349`), así que el compilador garantiza que la llave
exista, pero no que el texto funcione.

Las figuras retóricas y los juegos de palabras no sobreviven la traducción
literal, así que el inglés MUST reescribirse aplicando las mismas reglas, no se
traduce palabra por palabra.

#### Scenario: Se edita una llave de copy

- **WHEN** se modifica una llave en el bloque `es`
- **THEN** se modifica su par en el bloque `en` en el mismo cambio
- **AND** `npm run build` compila sin errores de tipo

#### Scenario: Texto bilingüe fuera de copy.ts

- **WHEN** se necesita texto visible en ambos idiomas
- **THEN** vive en `copy.ts` o en `content.ts` vía `c(es, en)`
- **AND** no se escribe como ternario `lang === "es" ? … : …` dentro de un
  componente, porque eso escapa al tipado que garantiza la paridad

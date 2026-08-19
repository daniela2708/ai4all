## 1. Instalar las reglas editoriales

- [ ] 1.1 Escribir `openspec/specs/voz-editorial/spec.md` (lo hace `openspec archive` al cerrar el change)
- [x] 1.2 Llenar el bloque `context:` de `openspec/config.yaml`, hoy vacío, con el resumen de las reglas 1-4, para que cualquier agente que escriba copy después las reciba sin leer el spec

## 2. Capa informe — bajar la afirmación, subir el dato

Todo en `src/copy.ts`, en el bloque `es` (4-348) y en el bloque `en` (349-693).

- [x] 2.1 `impact.title`: reemplazar "El impacto no se intuye. Se demuestra." por un titular que feche el compromiso. Es la 3ª sección del DOM y hoy proclama demostración sobre tres `—`
- [x] 2.2 `impact.metricsNote`: subir la fecha del 2 de octubre de nota al pie a texto de primer nivel
- [x] 2.3 `impact.lead`: **conservar tal cual**. Es concreta, honesta y falsable
- [x] 2.4 `manifesto.body`: quitar "democratiza" y la tesis de "empresa impulsada por IA". Declarar qué es el piloto y por qué empieza en People/Ops
- [x] 2.5 `manifesto.a` / `manifesto.b`: **conservar**. Es la mejor antítesis del sitio y consume 1 de las 4 del presupuesto
- [x] 2.6 `why.title`: "Un multiplicador, no un oráculo" pasa a declarativo
- [x] 2.7 `why.lead`: cortar la predicción ("La brecha real no estará entre…"), dejar la premisa operativa
- [x] 2.8 `why.cards[0].body`: reescribir sin duplicar el manifiesto — por qué People/Ops y no otro equipo
- [x] 2.9 `model.bridge.title`: "Tres cosas listas, o no se entra" pasa a firme sin ultimátum
- [x] 2.10 `footer.tagline`: eliminar "Doing and making with AI" o reemplazar por la línea factual
- [x] 2.11 Auditar el resto de la capa informe contra el presupuesto de 4 antítesis

## 3. Atribución — verbos reales donde ya aparecen

Sin menciones nuevas en hero ni footer. `footer.internal` queda como está.

- [x] 3.1 `team.label`: "QUIÉNES ACOMPAÑAN" pasa a nombrar diseño y dirección
- [x] 3.2 `team.title`: separar las dos afirmaciones — quién lo diseñó, quién lo construye
- [x] 3.3 `team.lead`: "facilitan el recorrido" pasa a "diseñaron / dirigen", y en la misma frase la propiedad de casos, datos y resultados a People/Ops
- [x] 3.4 `model.phaseOne.owner` y `model.phaseTwo.owner`: verbo que distinga diseño de facilitación
- [x] 3.5 `content.ts` `people[0].contribution`: las 12 sesiones y el instrumento de priorización. Dirige la Fase 1
- [x] 3.6 `content.ts` `people[1].contribution`: el sprint de 5 días y el caso maestro construido en vivo. Dirige la Fase 2. Aprovechar que el rol es "Senior Software Engineer, Android" — que la Fase 2 la dirija alguien de fuera de People es señal, hoy enterrada en un campo de rol
- [x] 3.7 Verificar que `challenge.dynamicBody` (ya nombra a Cristian) no contradiga la regla 2

## 4. Defectos detectados

Grupo descartable sin tocar lo anterior.

- [x] 4.1 Corregir la numeración de las etiquetas de sección contra el orden real del DOM en `App.tsx:76-101`: hoy `Impact` lleva "09" y aparece 3ª, `Model` lleva "01" y aparece 5ª. ~11 strings en ES y 11 en EN
- [x] 4.2 Mover los divisores de fase de `App.tsx:84-86` y `91-93` a `copy.ts`: los ternarios `lang === "es" ? … : …` escapan al tipado que garantiza la paridad ES/EN
- [x] 4.4 Mover a `copy.ts` los cinco ternarios `lang === "es" ? … : …` restantes en `Hero.tsx` (aria-label de los marcos y las etiquetas IMAGEN PRINCIPAL / SECUNDARIA) y `Program.tsx` (cabeceras FECHA / CHARLA). Detectado en `/simplify`: la tarea 4.2 cerraba la misma clase de defecto solo en `App.tsx` y dejaba el resto, con lo que el escenario "Texto bilingüe fuera de copy.ts" del spec quedaba violado
- [~] 4.3 **Descartada.** Se propuso mover `impact.videoLabel` / `videoTitle` / `videoLead` / `videoParts` de North Star a `Ops` por leerse como plan de promoción interna. Cristian aclara que el microvideo es un componente adicional de la iniciativa, no difusión, así que se queda donde está. Pendiente aparte: `videoLead` lo enmarca como alcance ("El resto de Wizeline conoce el piloto por lo que produce…") y no como entregable, que es lo que indujo la lectura errada

## 4b. Reencuadre del bloque de microtutoriales

- [x] 4.5 `impact.videoLabel` y `videoLead`, ES y EN: el bloque describía difusión ("DIFUSIÓN INTERNA", "El resto de Wizeline conoce el piloto por lo que produce, no por lo que promete"), pero los microvideos son contenido educativo — enseñar IA y dejar microtutoriales replicables. El copy ahora dice qué son en vez de a quién alcanzan. Efecto secundario: sale una antítesis de la capa informe, que baja de 4 a 3 y recupera holgura en el presupuesto de la regla 3

## 5. Verificación

- [x] 5.1 `npm run build` — `tsc --noEmit` hace fallar el build si una llave quedó sin par en inglés (`const en: typeof es`, `copy.ts:349`)
- [x] 5.2 `npm run dev` y revisar Hero → Team → Impact en ES y en EN con el toggle del header
- [x] 5.3 Verificar que ningún titular reescrito desborde su caja: varios usan la clase `display` y las longitudes cambian bastante entre idiomas
- [x] 5.4 Contar antítesis contra el presupuesto: `grep -o 'no es\|no se\|no reemplaza\|no arranca\|no empieza' src/copy.ts | wc -l`, y verificar que las que quedan son las 4 elegidas
- [ ] 5.5 Leer en voz alta el bloque superior completo. Si suena a alguien explicando algo, pasó; si suena a alguien convenciendo de algo, no
- [ ] 5.6 Que Daniela lea la sección Equipo antes de publicar — que se lea como crédito y no como reclamo es la prueba que importa
- [x] 5.7 `openspec validate ajustar-registro-editorial`

## 6. Correcciones de `/code-review`

- [x] 6.1 `copy.ts` manifesto.body: decía "piloto de seis semanas" cuando son siete (6 de charlas, 19 ago–25 sep, más la del Challenge, 28 sep–02 oct). Contradecía el calendario del hero
- [x] 6.2 `copy.ts` EN `model.phaseTwo.lead2`: el recorte de la antítesis se aplicó solo al ES; el inglés seguía diciendo "not as a course", así que las dos versiones afirmaban cosas distintas
- [x] 6.3 `copy.ts` `metricsNote` ES y EN: decía "el piloto empieza hoy", que caduca al día siguiente en una página cuyo estado lo calcula `lib.ts` en vivo. Ahora solo compromete la fecha
- [x] 6.4 `content.ts` `people[].contribution`: "Dirige la Fase N." repetía lo que ya dicen el badge de fase y la línea LIDERA en la misma tarjeta. La contribución queda solo con el trabajo concreto

## 6b. Neutralidad de los dos idiomas

Auditoría de marcadores regionales, calcos e idiomatismos sobre `copy.ts` y `content.ts`.
Limpio de entrada: sin voseo, sin vosotros, sin léxico exclusivo de España, sin
colombianismos, sin britanismos ni jerga corporativa en el inglés.

- [x] 6.5 ES `why.cards[0].body`: "Una automatización **acá**…" pasa a "aquí". "Acá" es rioplatense/colombiano y el resto del sitio ya usaba "aquí" en tres lugares. La inconsistencia la introdujo este mismo change
- [x] 6.6 EN `why.title`: "AI multiplies the judgment already **in the room**" pasa a "that already exists". "In the room" es idiomático y no se lee literal para quien tiene el inglés como segunda lengua, que es buena parte de Wizeline. Además no reflejaba el español
- [x] 6.7 EN `impact.metricsNote`: "the numbers each case **defends**" pasa a "presents". Calco de "defender el ROI"
- [x] 6.8 EN `impact.videoLead`: "because the task they solve **happens to more people**" pasa a "because more people do the task they solve". Calco de "le pasa a más gente"
- [x] 6.9 `content.ts:270` (día 3 del Challenge): "**Acá** se paga el prompting de la Fase 1" pasa a "Aquí". Es la única edición de este change en la capa manual, hecha por consistencia de neutralidad y no por registro
- [~] 6.10 Falso positivo descartado: "the **instrument** that prioritizes cases" parecía calco de "instrumento", pero `content.ts:367` ya traía "Cross-cutting instrument" desde antes. Es el término establecido del sitio; cambiarlo habría roto la consistencia

## 7. Deuda registrada en `/simplify`, no resuelta

- [ ] 7.1 Los números de sección siguen hardcodeados en cada `label` de `copy.ts` (18 literales entre `es` y `en`) y deben coincidir a mano con el orden de render de `App.tsx:79-98`. Reordenar una sección los desincroniza en silencio otra vez. Fix proporcionado: quitar el prefijo `"NN / "` de los strings, definir un array ordenado de secciones junto al JSX que establece el orden, y componer el número con `index + 1` en el punto de render. Fuera del alcance quirúrgico acordado
- [ ] 7.2 `dividers.one.tag` / `.title` duplican literalmente `people[0].phase` / `.leads` de `content.ts`, y lo mismo para la fase 02 — cuatro copias de "FASE 01 / Fundación estratégica" contando `model.phaseOne.tag`. No se dedupe sourcing desde `people[]` porque acoplaría el divisor de una sección al badge de una persona, que es un acoplamiento falso. El arreglo correcto sería una constante única de fases, y excede el diff

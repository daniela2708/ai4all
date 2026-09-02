export type Lang = "es" | "en";
export type Copy = { es: string; en: string };

export const c = (es: string, en: string): Copy => ({ es, en });
export const pick = (copy: Copy, lang: Lang) => copy[lang];

/* ------------------------------------------------------------------ *
 * Materiales
 * ------------------------------------------------------------------
 * Cada sesión reserva su espacio de material desde el primer día.
 * Para publicar: agrega un objeto al arreglo `materials` de la sesión.
 *
 *   materials: [
 *     { kind: "slides",    label: c("Slides de la sesión", "Session slides"), href: "/materials/s01-slides.pdf" },
 *     { kind: "recording", label: c("Grabación", "Recording"),                href: "https://..." },
 *   ]
 *
 * Los archivos locales viven en `public/materials/`.
 * Mientras el arreglo esté vacío, la tarjeta se muestra como espacio reservado.
 * ------------------------------------------------------------------ */

export type MaterialKind = "slides" | "recording" | "artifact" | "template";
export type Material = { kind: MaterialKind; label: Copy; href: string };

export type Session = {
  n: string;
  week: number;
  /** Inicio real de la sesión (Colombia, UTC-5). Define el estado en la web. */
  start: string;
  end: string;
  date: Copy;
  weekday: Copy;
  title: Copy;
  live: Copy;
  deliverable: Copy;
  materials: Material[];
};

export type Week = {
  n: number;
  title: Copy;
  focus: Copy;
};

export type ChallengeDay = {
  n: string;
  start: string;
  date: Copy;
  weekday: Copy;
  title: Copy;
  focus: Copy;
  deliverable: Copy;
  why: Copy;
};

export const program = {
  start: "2026-09-12T15:00:00-05:00",
  demoDay: "2026-10-19T09:00:00-05:00",
};

export const weeks: Week[] = [
  {
    n: 1,
    title: c("Inventario y contexto", "Inventory and context"),
    focus: c("Identificar las tareas del rol y documentar cómo se hacen hoy.", "Identify role tasks and document how they are done today."),
  },
  {
    n: 2,
    title: c("Tu valor", "Your value"),
    focus: c("El corazón para People: cuantificar el aporte del propio rol.", "The core for People: quantifying the value of your own role."),
  },
  {
    n: 3,
    title: c("Hojas de cálculo", "Spreadsheets"),
    focus: c("Excel y Google Workspace resueltos con datos reales del equipo.", "Excel and Google Workspace solved with the team's real data."),
  },
  {
    n: 4,
    title: c("Código, procesos y costos", "Code, processes, and costs"),
    focus: c("Qué hace el código, dónde entra la IA, cómo se mapea un proceso y cuánto cuesta.", "What code does, where AI fits, how to map a process, and what it costs."),
  },
  {
    n: 5,
    title: c("Herramientas, construir y descubrir", "Tools, build, and discover"),
    focus: c("Automatización, taller abierto y priorización de los casos que entran al Challenge.", "Automation, open lab, and prioritization of the cases entering the Challenge."),
  },
];

export const sessions: Session[] = [
  {
    n: "01",
    week: 1,
    start: "2026-09-12T15:00:00-05:00",
    end: "2026-09-12T16:30:00-05:00",
    date: c("12 sep", "Sep 12"),
    weekday: c("Sábado", "Saturday"),
    title: c("Inventario de tareas", "Task inventory"),
    live: c("Enumera las tareas que hacen parte de tu rol", "List the tasks that are part of your role"),
    deliverable: c("Inventario inicial de tareas", "Initial task inventory"),
    materials: [],
  },
  {
    n: "02",
    week: 1,
    start: "2026-09-13T15:00:00-05:00",
    end: "2026-09-13T16:30:00-05:00",
    date: c("13 sep", "Sep 13"),
    weekday: c("Domingo", "Sunday"),
    title: c("Describe cómo haces cada tarea", "Describe how you do each task"),
    live: c("Documenta los pasos, herramientas y decisiones de cada tarea", "Document each task's steps, tools, and decisions"),
    deliverable: c("Descripción de tareas con pantallazos", "Task descriptions with screenshots"),
    materials: [],
  },
  {
    n: "03",
    week: 2,
    start: "2026-09-19T15:00:00-05:00",
    end: "2026-09-19T16:30:00-05:00",
    date: c("19 sep", "Sep 19"),
    weekday: c("Sábado", "Saturday"),
    title: c("¿Cuánto vale cada tarea?", "What is each task worth?"),
    live: c("Asigna valor a las tareas de tu inventario", "Assign value to the tasks in your inventory"),
    deliverable: c("Inventario de tareas valorado", "Valued task inventory"),
    materials: [],
  },
  {
    n: "04",
    week: 2,
    start: "2026-09-20T15:00:00-05:00",
    end: "2026-09-20T16:30:00-05:00",
    date: c("20 sep", "Sep 20"),
    weekday: c("Domingo", "Sunday"),
    title: c("Medir y mostrar tu valor en números", "Measure and show your value in numbers"),
    live: c("Cuantifica 2 o 3 métricas de tu rol", "Quantify 2 or 3 metrics from your role"),
    deliverable: c("Ficha de valor por persona", "Personal value card"),
    materials: [],
  },
  {
    n: "05",
    week: 3,
    start: "2026-09-26T15:00:00-05:00",
    end: "2026-09-26T16:30:00-05:00",
    date: c("26 sep", "Sep 26"),
    weekday: c("Sábado", "Saturday"),
    title: c("Excel desde cero, parte 1", "Excel from scratch, part 1"),
    live: c("Resuelve un set de datos real de People", "Solve a real People data set"),
    deliverable: c("Hoja resuelta con fórmulas base", "Spreadsheet solved with core formulas"),
    materials: [],
  },
  {
    n: "06",
    week: 3,
    start: "2026-09-27T15:00:00-05:00",
    end: "2026-09-27T16:30:00-05:00",
    date: c("27 sep", "Sep 27"),
    weekday: c("Domingo", "Sunday"),
    title: c("Google Workspace y hojas, parte 2", "Google Workspace and sheets, part 2"),
    live: c("Arma un flujo de formulario a hoja", "Build a form to spreadsheet flow"),
    deliverable: c("Formulario y hoja funcionando", "Working form and spreadsheet"),
    materials: [],
  },
  {
    n: "07",
    week: 4,
    start: "2026-10-01T15:00:00-05:00",
    end: "2026-10-01T16:30:00-05:00",
    date: c("01 oct", "Oct 01"),
    weekday: c("Jueves", "Thursday"),
    title: c("¿Qué es el código y qué hace?", "What is code, and what does it do?"),
    live: c("Abre un script y cambia un valor", "Open a script and change a value"),
    deliverable: c("Automatización, código e IA en tus palabras", "Automation, code, and AI in your own words"),
    materials: [],
  },
  {
    n: "08",
    week: 4,
    start: "2026-10-03T15:00:00-05:00",
    end: "2026-10-03T16:30:00-05:00",
    date: c("03 oct", "Oct 03"),
    weekday: c("Sábado", "Saturday"),
    title: c("Automatización, IA y procesos", "Automation, AI, and processes"),
    live: c("Mapea un proceso real del equipo", "Map a real team process"),
    deliverable: c("Un proceso propio mapeado", "A mapped process of your own"),
    materials: [],
  },
  {
    n: "09",
    week: 4,
    start: "2026-10-04T15:00:00-05:00",
    end: "2026-10-04T16:30:00-05:00",
    date: c("04 oct", "Oct 04"),
    weekday: c("Domingo", "Sunday"),
    title: c("El costo de la IA: tokens y planes", "The cost of AI: tokens and plans"),
    live: c("Estima costo y ahorro de un caso", "Estimate cost and savings for one case"),
    deliverable: c("Estimación de costo contra ahorro", "Cost versus savings estimate"),
    materials: [],
  },
  {
    n: "10",
    week: 5,
    start: "2026-10-08T15:00:00-05:00",
    end: "2026-10-08T16:30:00-05:00",
    date: c("08 oct", "Oct 08"),
    weekday: c("Jueves", "Thursday"),
    title: c("Conoce las herramientas: n8n y Make", "Meet the tools: n8n and Make"),
    live: c("Construye un flujo básico en Make", "Build a basic workflow in Make"),
    deliverable: c("Un flujo simple en Make", "A simple Make workflow"),
    materials: [],
  },
  {
    n: "11",
    week: 5,
    start: "2026-10-10T15:00:00-05:00",
    end: "2026-10-10T16:30:00-05:00",
    date: c("10 oct", "Oct 10"),
    weekday: c("Sábado", "Saturday"),
    title: c("Taller abierto: construye con IA", "Open lab: build with AI"),
    live: c("Construye algo útil con IA en vivo", "Build something useful with AI, live"),
    deliverable: c("Un artefacto real por persona", "One real artifact per person"),
    materials: [],
  },
  {
    n: "12",
    week: 5,
    start: "2026-10-11T15:00:00-05:00",
    end: "2026-10-11T16:30:00-05:00",
    date: c("11 oct", "Oct 11"),
    weekday: c("Domingo", "Sunday"),
    title: c("Descubrimiento: tu día a día y tus casos", "Discovery: your day to day and your cases"),
    live: c("Prioriza tus casos de uso", "Prioritize your use cases"),
    deliverable: c("5 casos de uso priorizados", "5 prioritized use cases"),
    materials: [],
  },
];

export const challenge: ChallengeDay[] = [
  {
    n: "01",
    start: "2026-10-15T09:00:00-05:00",
    date: c("15 oct", "Oct 15"),
    weekday: c("Jueves", "Thursday"),
    title: c("Diseñar", "Design"),
    focus: c("Dibujan el flujo de punta a punta, definen qué significa producción para su caso y miden el tiempo actual a mano.", "Draw the flow end to end, define what production means for your case, and measure how long it takes by hand today."),
    deliverable: c("Blueprint de 1 página y métrica base en minutos por ocurrencia", "One-page blueprint and baseline metric in minutes per run"),
    why: c("Sin la línea base del Día 1, el ROI del Día 5 es un invento.", "Without the Day 1 baseline, the Day 5 ROI is fiction."),
  },
  {
    n: "02",
    start: "2026-10-16T09:00:00-05:00",
    date: c("16 oct", "Oct 16"),
    weekday: c("Viernes", "Friday"),
    title: c("Conectar", "Connect"),
    focus: c("Conectan disparador y acciones en Make (formulario, hoja, notificación) y prueban con datos de mentira.", "Connect trigger and actions in Make (form, sheet, notification) and test with dummy data."),
    deliverable: c("El esqueleto del flujo corriendo", "The workflow backbone running"),
    why: c("Primero camina el tubo vacío: si falla todo junto, no sabes si falló el tubo o el prompt.", "The empty pipe walks first: if everything fails at once, you cannot tell the pipe from the prompt."),
  },
  {
    n: "03",
    start: "2026-10-17T09:00:00-05:00",
    date: c("17 oct", "Oct 17"),
    weekday: c("Sábado", "Saturday"),
    title: c("Integrar IA", "Add AI"),
    focus: c("Insertan el nodo de IA y adaptan el prompt de la Fase 1 a los datos reales, iterando hasta una calidad aceptable.", "Insert the AI node and adapt the Phase 1 prompt to real data, iterating until quality is acceptable."),
    deliverable: c("El flujo con IA produciendo salida aceptable sobre muestras reales", "The AI-powered flow producing acceptable output on real samples"),
    why: c("Aquí se paga el prompting de la Fase 1: no se enseña, se aplica.", "This is where Phase 1 prompting pays off: it is applied, not taught."),
  },
  {
    n: "04",
    start: "2026-10-18T09:00:00-05:00",
    date: c("18 oct", "Oct 18"),
    weekday: c("Domingo", "Sunday"),
    title: c("Probar", "Test"),
    focus: c("Corren con datos reales, ven campos vacíos y entradas raras, agregan manejo de errores y definen el punto de control humano.", "Run with real data, hit empty fields and odd inputs, add error handling, and define the human checkpoint."),
    deliverable: c("El flujo sobre datos reales, con fallas documentadas y checkpoint humano", "The flow on real data, with documented failures and a human checkpoint"),
    why: c("Para People, el control humano no es opcional: hay criterio y datos sensibles de por medio.", "For People, human control is not optional: judgment and sensitive data are involved."),
  },
  {
    n: "05",
    start: "2026-10-19T09:00:00-05:00",
    date: c("19 oct", "Oct 19"),
    weekday: c("Lunes", "Monday"),
    title: c("Demostrar", "Demo"),
    focus: c("Cada quien presenta en vivo, calcula su ROI y documenta el traspaso: dueño, dónde vive y qué lo rompe.", "Everyone presents live, calculates ROI, and documents the handover: owner, where it lives, what breaks it."),
    deliverable: c("Métrica estrella, ROI y una página de propiedad y runbook", "Star metric, ROI, and a one-page ownership runbook"),
    why: c("Producción no es que funcione el viernes: es que siga funcionando el mes siguiente sin nadie encima.", "Production is not working on Friday: it is still working next month with nobody watching."),
  },
];

/* --------------------------------- Equipo --------------------------------- */

export type Person = {
  photo: string;
  name: string;
  role: Copy;
  leads: Copy;
  phase: Copy;
  contribution: Copy;
};

export const people: Person[] = [
  {
    photo: "/team/daniela-rios.jpg",
    name: "Daniela Ríos",
    role: c("Data Analyst", "Data Analyst"),
    phase: c("FASE 01", "PHASE 01"),
    leads: c("Fundación estratégica", "Strategic foundation"),
    contribution: c("Diseñó las 12 sesiones y el instrumento que prioriza los casos.", "Designed the 12 sessions and the instrument that prioritizes cases."),
  },
  {
    photo: "/team/cristian-villamil.jpg",
    name: "Cristian Villamil",
    role: c("Senior Software Engineer, Android", "Senior Software Engineer, Android"),
    phase: c("FASE 02", "PHASE 02"),
    leads: c("5-Day Challenge", "5-Day Challenge"),
    contribution: c("Diseñó el sprint de 5 días y construye el caso maestro en vivo, frente al equipo.", "Designed the 5-day sprint and builds the master case live, in front of the team."),
  },
];

/* ---------------------------------- Stack --------------------------------- */

export type Tool = { name: string; status: Copy; tone: "on" | "next" | "off"; note: Copy };

export const stack: Tool[] = [
  {
    name: "Make",
    status: c("Elegido para el piloto", "Chosen for the pilot"),
    tone: "on",
    note: c("Interfaz visual, plan gratuito amplio e integración nativa con Google y Slack. Sostiene los Días 2, 3 y 4.", "Visual interface, generous free plan, and native Google and Slack integration. It carries Days 2, 3, and 4."),
  },
  {
    name: "n8n",
    status: c("Candidato para el escalado", "Candidate for scale-up"),
    tone: "next",
    note: c("Nodos avanzados de IA y la opción de mantener los datos de People dentro de la infraestructura de Wizeline. Requiere hosting.", "Advanced AI nodes and the option to keep People data inside Wizeline infrastructure. Requires hosting."),
  },
  {
    name: "Google Apps Script",
    status: c("Solo como caja negra", "Black box only"),
    tone: "off",
    note: c("Gratis y dentro de Google, sin fricción de IT, pero requiere JavaScript: los participantes no lo editan.", "Free and inside Google, with no IT friction, but it needs JavaScript: participants do not edit it."),
  },
];

/* -------------------------------- Cronograma ------------------------------- */

export type Stage = { label: Copy; when: Copy; detail: Copy };

export const timeline: Stage[] = [
  {
    label: c("Preparación", "Preparation"),
    when: c("Antes del 12 sep", "Before Sep 12"),
    detail: c("Herramientas probadas, accesos listos, plantillas creadas y bloques agendados.", "Tools tested, access granted, templates created, and calendar blocks booked."),
  },
  {
    label: c("Fase 1 · Fundación", "Phase 1 · Foundation"),
    when: c("12 sep a 11 oct", "Sep 12 to Oct 11"),
    detail: c("12 charlas de 3:00 a 4:30 p. m., comenzando con el inventario, la descripción y la valoración de tareas.", "12 talks from 3:00 to 4:30 p.m., starting with task inventory, description, and valuation."),
  },
  {
    label: c("Selección de casos", "Case selection"),
    when: c("Cierre de Fase 1", "End of Phase 1"),
    detail: c("Instrumento de transversalidad: un caso maestro y los casos individuales.", "Cross-cutting instrument: one master case plus the individual ones."),
  },
  {
    label: c("Fase 2 · Challenge", "Phase 2 · Challenge"),
    when: c("15 a 19 oct", "Oct 15 to Oct 19"),
    detail: c("Sprint de entrega de 2 horas diarias que cierra con Demo Day.", "Two hours a day delivery sprint closing with Demo Day."),
  },
  {
    label: c("Difusión", "Internal reach"),
    when: c("Semana siguiente", "The following week"),
    detail: c("Primer microvideo en Slack con material grabado durante el Challenge.", "First Slack microvideo built from footage recorded during the Challenge."),
  },
];

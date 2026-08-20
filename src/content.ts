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
  start: "2026-08-19T09:00:00-05:00",
  demoDay: "2026-10-02T09:00:00-05:00",
};

export const weeks: Week[] = [
  {
    n: 1,
    title: c("Fundamentos", "Foundations"),
    focus: c("Qué es la IA generativa y cómo se le dan instrucciones útiles.", "What generative AI is, and how to give it useful instructions."),
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
    title: c("Código y procesos", "Code and processes"),
    focus: c("Qué hace el código, dónde entra la IA y cómo se mapea un proceso.", "What code does, where AI fits, and how to map a process."),
  },
  {
    n: 5,
    title: c("Costo y herramientas", "Cost and tools"),
    focus: c("Cuánto cuesta usar IA y cómo se arma un flujo automatizado.", "What AI costs, and how an automated workflow is built."),
  },
  {
    n: 6,
    title: c("Construir y descubrir", "Build and discover"),
    focus: c("Taller abierto y priorización de los casos que entran al Challenge.", "Open lab and prioritization of the cases entering the Challenge."),
  },
];

export const sessions: Session[] = [
  {
    n: "01",
    week: 1,
    start: "2026-08-19T09:00:00-05:00",
    end: "2026-08-19T10:30:00-05:00",
    date: c("19 ago", "Aug 19"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("¿Qué es (y qué no) la IA?", "What AI is (and isn't)"),
    live: c("Crea tu primera tabla o documento con IA", "Create your first table or document with AI"),
    deliverable: c("Tu primer artefacto con IA", "Your first AI-made artifact"),
    materials: [],
  },
  {
    n: "02",
    week: 1,
    start: "2026-08-21T09:00:00-05:00",
    end: "2026-08-21T10:30:00-05:00",
    date: c("21 ago", "Aug 21"),
    weekday: c("Viernes", "Friday"),
    title: c("Pensar con criterio", "Thinking with judgment"),
    live: c("Reescribe 2 de tus prompts en vivo", "Rewrite 2 of your prompts live"),
    deliverable: c("2 prompts reescritos", "2 rewritten prompts"),
    materials: [],
  },
  {
    n: "03",
    week: 2,
    start: "2026-08-26T09:00:00-05:00",
    end: "2026-08-26T10:30:00-05:00",
    date: c("26 ago", "Aug 26"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("¿Cuánto vale lo que haces?", "What is your work worth?"),
    live: c("Clasifica tus tareas: criterio o ejecución", "Sort your tasks: judgment or execution"),
    deliverable: c("Inventario de tareas", "Task inventory"),
    materials: [],
  },
  {
    n: "04",
    week: 2,
    start: "2026-08-28T09:00:00-05:00",
    end: "2026-08-28T10:30:00-05:00",
    date: c("28 ago", "Aug 28"),
    weekday: c("Viernes", "Friday"),
    title: c("Medir y mostrar tu valor en números", "Measure and show your value in numbers"),
    live: c("Cuantifica 2 o 3 métricas de tu rol", "Quantify 2 or 3 metrics from your role"),
    deliverable: c("Ficha de valor por persona", "Personal value card"),
    materials: [],
  },
  {
    n: "05",
    week: 3,
    start: "2026-09-02T09:00:00-05:00",
    end: "2026-09-02T10:30:00-05:00",
    date: c("02 sep", "Sep 02"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("Excel desde cero, parte 1", "Excel from scratch, part 1"),
    live: c("Resuelve un set de datos real de People", "Solve a real People data set"),
    deliverable: c("Hoja resuelta con fórmulas base", "Spreadsheet solved with core formulas"),
    materials: [],
  },
  {
    n: "06",
    week: 3,
    start: "2026-09-04T09:00:00-05:00",
    end: "2026-09-04T10:30:00-05:00",
    date: c("04 sep", "Sep 04"),
    weekday: c("Viernes", "Friday"),
    title: c("Google Workspace y hojas, parte 2", "Google Workspace and sheets, part 2"),
    live: c("Arma un flujo de formulario a hoja", "Build a form to spreadsheet flow"),
    deliverable: c("Formulario y hoja funcionando", "Working form and spreadsheet"),
    materials: [],
  },
  {
    n: "07",
    week: 4,
    start: "2026-09-09T09:00:00-05:00",
    end: "2026-09-09T10:30:00-05:00",
    date: c("09 sep", "Sep 09"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("¿Qué es el código y qué hace?", "What is code, and what does it do?"),
    live: c("Abre un script y cambia un valor", "Open a script and change a value"),
    deliverable: c("Automatización, código e IA en tus palabras", "Automation, code, and AI in your own words"),
    materials: [],
  },
  {
    n: "08",
    week: 4,
    start: "2026-09-11T09:00:00-05:00",
    end: "2026-09-11T10:30:00-05:00",
    date: c("11 sep", "Sep 11"),
    weekday: c("Viernes", "Friday"),
    title: c("Automatización, IA y procesos", "Automation, AI, and processes"),
    live: c("Mapea un proceso real del equipo", "Map a real team process"),
    deliverable: c("Un proceso propio mapeado", "A mapped process of your own"),
    materials: [],
  },
  {
    n: "09",
    week: 5,
    start: "2026-09-16T09:00:00-05:00",
    end: "2026-09-16T10:30:00-05:00",
    date: c("16 sep", "Sep 16"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("El costo de la IA: tokens y planes", "The cost of AI: tokens and plans"),
    live: c("Estima costo y ahorro de un caso", "Estimate cost and savings for one case"),
    deliverable: c("Estimación de costo contra ahorro", "Cost versus savings estimate"),
    materials: [],
  },
  {
    n: "10",
    week: 5,
    start: "2026-09-18T09:00:00-05:00",
    end: "2026-09-18T10:30:00-05:00",
    date: c("18 sep", "Sep 18"),
    weekday: c("Viernes", "Friday"),
    title: c("Conoce las herramientas: n8n y Make", "Meet the tools: n8n and Make"),
    live: c("Construye un flujo básico en Make", "Build a basic workflow in Make"),
    deliverable: c("Un flujo simple en Make", "A simple Make workflow"),
    materials: [],
  },
  {
    n: "11",
    week: 6,
    start: "2026-09-23T09:00:00-05:00",
    end: "2026-09-23T10:30:00-05:00",
    date: c("23 sep", "Sep 23"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("Taller abierto: construye con IA", "Open lab: build with AI"),
    live: c("Construye algo útil con IA en vivo", "Build something useful with AI, live"),
    deliverable: c("Un artefacto real por persona", "One real artifact per person"),
    materials: [],
  },
  {
    n: "12",
    week: 6,
    start: "2026-09-25T09:00:00-05:00",
    end: "2026-09-25T10:30:00-05:00",
    date: c("25 sep", "Sep 25"),
    weekday: c("Viernes", "Friday"),
    title: c("Descubrimiento: tu día a día y tus casos", "Discovery: your day to day and your cases"),
    live: c("Prioriza tus casos de uso", "Prioritize your use cases"),
    deliverable: c("5 casos de uso priorizados", "5 prioritized use cases"),
    materials: [],
  },
];

export const challenge: ChallengeDay[] = [
  {
    n: "01",
    start: "2026-09-28T09:00:00-05:00",
    date: c("28 sep", "Sep 28"),
    weekday: c("Lunes", "Monday"),
    title: c("Diseñar", "Design"),
    focus: c("Dibujan el flujo de punta a punta, definen qué significa producción para su caso y miden el tiempo actual a mano.", "Draw the flow end to end, define what production means for your case, and measure how long it takes by hand today."),
    deliverable: c("Blueprint de 1 página y métrica base en minutos por ocurrencia", "One-page blueprint and baseline metric in minutes per run"),
    why: c("Sin la línea base del Día 1, el ROI del Día 5 es un invento.", "Without the Day 1 baseline, the Day 5 ROI is fiction."),
  },
  {
    n: "02",
    start: "2026-09-29T09:00:00-05:00",
    date: c("29 sep", "Sep 29"),
    weekday: c("Martes", "Tuesday"),
    title: c("Conectar", "Connect"),
    focus: c("Conectan disparador y acciones en Make (formulario, hoja, notificación) y prueban con datos de mentira.", "Connect trigger and actions in Make (form, sheet, notification) and test with dummy data."),
    deliverable: c("El esqueleto del flujo corriendo", "The workflow backbone running"),
    why: c("Primero camina el tubo vacío: si falla todo junto, no sabes si falló el tubo o el prompt.", "The empty pipe walks first: if everything fails at once, you cannot tell the pipe from the prompt."),
  },
  {
    n: "03",
    start: "2026-09-30T09:00:00-05:00",
    date: c("30 sep", "Sep 30"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("Integrar IA", "Add AI"),
    focus: c("Insertan el nodo de IA y adaptan el prompt de la Fase 1 a los datos reales, iterando hasta una calidad aceptable.", "Insert the AI node and adapt the Phase 1 prompt to real data, iterating until quality is acceptable."),
    deliverable: c("El flujo con IA produciendo salida aceptable sobre muestras reales", "The AI-powered flow producing acceptable output on real samples"),
    why: c("Aquí se paga el prompting de la Fase 1: no se enseña, se aplica.", "This is where Phase 1 prompting pays off: it is applied, not taught."),
  },
  {
    n: "04",
    start: "2026-10-01T09:00:00-05:00",
    date: c("01 oct", "Oct 01"),
    weekday: c("Jueves", "Thursday"),
    title: c("Probar", "Test"),
    focus: c("Corren con datos reales, ven campos vacíos y entradas raras, agregan manejo de errores y definen el punto de control humano.", "Run with real data, hit empty fields and odd inputs, add error handling, and define the human checkpoint."),
    deliverable: c("El flujo sobre datos reales, con fallas documentadas y checkpoint humano", "The flow on real data, with documented failures and a human checkpoint"),
    why: c("Para People, el control humano no es opcional: hay criterio y datos sensibles de por medio.", "For People, human control is not optional: judgment and sensitive data are involved."),
  },
  {
    n: "05",
    start: "2026-10-02T09:00:00-05:00",
    date: c("02 oct", "Oct 02"),
    weekday: c("Viernes", "Friday"),
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
    when: c("Antes del 19 ago", "Before Aug 19"),
    detail: c("Herramientas probadas, accesos listos, plantillas creadas y bloques agendados.", "Tools tested, access granted, templates created, and calendar blocks booked."),
  },
  {
    label: c("Fase 1 · Fundación", "Phase 1 · Foundation"),
    when: c("19 ago a 25 sep", "Aug 19 to Sep 25"),
    detail: c("12 charlas, miércoles y viernes de 9:00 a 10:30 a. m.", "12 talks, Wednesdays and Fridays from 9:00 to 10:30 a.m."),
  },
  {
    label: c("Selección de casos", "Case selection"),
    when: c("Cierre de Fase 1", "End of Phase 1"),
    detail: c("Instrumento de transversalidad: un caso maestro y los casos individuales.", "Cross-cutting instrument: one master case plus the individual ones."),
  },
  {
    label: c("Fase 2 · Challenge", "Phase 2 · Challenge"),
    when: c("28 sep a 02 oct", "Sep 28 to Oct 02"),
    detail: c("Sprint de entrega de 2 horas diarias que cierra con Demo Day.", "Two hours a day delivery sprint closing with Demo Day."),
  },
  {
    label: c("Difusión", "Internal reach"),
    when: c("Semana siguiente", "The following week"),
    detail: c("Primer microvideo en Slack con material grabado durante el Challenge.", "First Slack microvideo built from footage recorded during the Challenge."),
  },
];

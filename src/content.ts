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
  start: "2026-09-02T15:00:00-05:00",
  demoDay: "2026-10-16T09:00:00-05:00",
};

export const weeks: Week[] = [
  {
    n: 1,
    title: c("Observar el trabajo", "Observe the work"),
    focus: c("Identificar tareas, contexto y decisiones antes de proponer soluciones.", "Identify tasks, context, and decisions before proposing solutions."),
  },
  {
    n: 2,
    title: c("Entender el valor", "Understand value"),
    focus: c("Reconocer el impacto del trabajo y dónde existe una oportunidad real.", "Recognize the impact of the work and where a real opportunity exists."),
  },
  {
    n: 3,
    title: c("Fundamentos y herramientas de IA", "AI foundations and tools"),
    focus: c("Entender la IA y aplicar herramientas útiles con contexto y criterio.", "Understand AI and apply useful tools with context and judgment."),
  },
  {
    n: 4,
    title: c("Pensamiento sistémico", "Systems thinking"),
    focus: c("Mapear procesos, actores, reglas, excepciones y dependencias antes de automatizar.", "Map processes, actors, rules, exceptions, and dependencies before automating."),
  },
  {
    n: 5,
    title: c("Experimentar y construir", "Experiment and build"),
    focus: c("Convertir oportunidades en casos de uso, integraciones y prototipos útiles.", "Turn opportunities into use cases, integrations, and useful prototypes."),
  },
];

export const sessions: Session[] = [
  {
    n: "01",
    week: 1,
    start: "2026-09-02T15:00:00-05:00",
    end: "2026-09-02T16:30:00-05:00",
    date: c("02 sep", "Sep 02"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("Inventario de tareas", "Task inventory"),
    live: c("Enumera las tareas que hacen parte de tu rol", "List the tasks that are part of your role"),
    deliverable: c("Inventario inicial de tareas", "Initial task inventory"),
    materials: [],
  },
  {
    n: "02",
    week: 1,
    start: "2026-09-03T15:00:00-05:00",
    end: "2026-09-03T16:30:00-05:00",
    date: c("03 sep", "Sep 03"),
    weekday: c("Jueves", "Thursday"),
    title: c("Describe cómo haces cada tarea", "Describe how you do each task"),
    live: c("Documenta los pasos, herramientas y decisiones de cada tarea", "Document each task's steps, tools, and decisions"),
    deliverable: c("Descripción de tareas con pantallazos", "Task descriptions with screenshots"),
    materials: [],
  },
  {
    n: "03",
    week: 2,
    start: "2026-09-09T15:00:00-05:00",
    end: "2026-09-09T16:30:00-05:00",
    date: c("09 sep", "Sep 09"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("¿Cuánto vale cada tarea?", "What is each task worth?"),
    live: c("Asigna valor a las tareas de tu inventario", "Assign value to the tasks in your inventory"),
    deliverable: c("Inventario de tareas valorado", "Valued task inventory"),
    materials: [],
  },
  {
    n: "04",
    week: 2,
    start: "2026-09-10T15:00:00-05:00",
    end: "2026-09-10T16:30:00-05:00",
    date: c("10 sep", "Sep 10"),
    weekday: c("Jueves", "Thursday"),
    title: c("Medir y mostrar tu valor en números", "Measure and show your value in numbers"),
    live: c("Cuantifica 2 o 3 métricas de tu rol", "Quantify 2 or 3 metrics from your role"),
    deliverable: c("Ficha de valor por persona", "Personal value card"),
    materials: [],
  },
  {
    n: "05",
    week: 3,
    start: "2026-09-16T15:00:00-05:00",
    end: "2026-09-16T16:30:00-05:00",
    date: c("16 sep", "Sep 16"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("AI Foundations", "AI Foundations"),
    live: c("Distingue IA, automatización y sistemas deterministas", "Distinguish AI, automation, and deterministic systems"),
    deliverable: c("Mapa comparativo de sistemas y decisiones", "Comparison map of systems and decisions"),
    materials: [],
  },
  {
    n: "06",
    week: 3,
    start: "2026-09-17T15:00:00-05:00",
    end: "2026-09-17T16:30:00-05:00",
    date: c("17 sep", "Sep 17"),
    weekday: c("Jueves", "Thursday"),
    title: c("AI at Work", "AI at Work"),
    live: c("Aplica Gemini a un escenario real con contexto", "Apply Gemini to a real scenario with context"),
    deliverable: c("Experimento documentado con una herramienta de IA", "Documented experiment with an AI tool"),
    materials: [],
  },
  {
    n: "07",
    week: 4,
    start: "2026-09-23T15:00:00-05:00",
    end: "2026-09-23T16:30:00-05:00",
    date: c("23 sep", "Sep 23"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("Systems Thinking", "Systems Thinking"),
    live: c("Identifica actores, entradas, salidas y excepciones", "Identify actors, inputs, outputs, and exceptions"),
    deliverable: c("Mapa sistémico de un proceso real", "System map of a real process"),
    materials: [],
  },
  {
    n: "08",
    week: 4,
    start: "2026-09-24T15:00:00-05:00",
    end: "2026-09-24T16:30:00-05:00",
    date: c("24 sep", "Sep 24"),
    weekday: c("Jueves", "Thursday"),
    title: c("AI Tools for Work", "AI Tools for Work"),
    live: c("Elige la herramienta correcta para un problema real", "Choose the right tool for a real problem"),
    deliverable: c("Matriz de decisión de herramientas", "Tool decision matrix"),
    materials: [],
  },
  {
    n: "09",
    week: 4,
    start: "2026-09-30T15:00:00-05:00",
    end: "2026-09-30T16:30:00-05:00",
    date: c("30 sep", "Sep 30"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("From Process to Use Case", "From Process to Use Case"),
    live: c("Convierte un punto de dolor en una oportunidad definida", "Turn a pain point into a defined opportunity"),
    deliverable: c("Ficha de caso de uso con valor y alcance", "Use case brief with value and scope"),
    materials: [],
  },
  {
    n: "10",
    week: 5,
    start: "2026-10-01T15:00:00-05:00",
    end: "2026-10-01T16:30:00-05:00",
    date: c("01 oct", "Oct 01"),
    weekday: c("Jueves", "Thursday"),
    title: c("Practical Integrations", "Practical Integrations"),
    live: c("Combina herramientas, automatización e IA", "Combine tools, automation, and AI"),
    deliverable: c("Un flujo integrado funcionando", "A working integrated flow"),
    materials: [],
  },
  {
    n: "11",
    week: 5,
    start: "2026-10-07T15:00:00-05:00",
    end: "2026-10-07T16:30:00-05:00",
    date: c("07 oct", "Oct 07"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("Build & Experiment", "Build & Experiment"),
    live: c("Construye algo útil con IA en vivo", "Build something useful with AI, live"),
    deliverable: c("Un artefacto real por persona", "One real artifact per person"),
    materials: [],
  },
  {
    n: "12",
    week: 5,
    start: "2026-10-08T15:00:00-05:00",
    end: "2026-10-08T16:30:00-05:00",
    date: c("08 oct", "Oct 08"),
    weekday: c("Jueves", "Thursday"),
    title: c("Share & Evolve", "Share & Evolve"),
    live: c("Comparte aprendizajes y prioriza lo que sigue", "Share learnings and prioritize what comes next"),
    deliverable: c("Backlog de oportunidades priorizado", "Prioritized opportunity backlog"),
    materials: [],
  },
];

export const challenge: ChallengeDay[] = [
  {
    n: "01",
    start: "2026-10-12T09:00:00-05:00",
    date: c("12 oct", "Oct 12"),
    weekday: c("Lunes", "Monday"),
    title: c("Diseñar", "Design"),
    focus: c("Dibujan el flujo de punta a punta, definen qué significa producción para su caso y miden el tiempo actual a mano.", "Draw the flow end to end, define what production means for your case, and measure how long it takes by hand today."),
    deliverable: c("Blueprint de 1 página y métrica base en minutos por ocurrencia", "One-page blueprint and baseline metric in minutes per run"),
    why: c("Sin la línea base del Día 1, el ROI del Día 5 es un invento.", "Without the Day 1 baseline, the Day 5 ROI is fiction."),
  },
  {
    n: "02",
    start: "2026-10-13T09:00:00-05:00",
    date: c("13 oct", "Oct 13"),
    weekday: c("Martes", "Tuesday"),
    title: c("Conectar", "Connect"),
    focus: c("Conectan disparador y acciones en Make (formulario, hoja, notificación) y prueban con datos de mentira.", "Connect trigger and actions in Make (form, sheet, notification) and test with dummy data."),
    deliverable: c("El esqueleto del flujo corriendo", "The workflow backbone running"),
    why: c("Primero camina el tubo vacío: si falla todo junto, no sabes si falló el tubo o el prompt.", "The empty pipe walks first: if everything fails at once, you cannot tell the pipe from the prompt."),
  },
  {
    n: "03",
    start: "2026-10-14T09:00:00-05:00",
    date: c("14 oct", "Oct 14"),
    weekday: c("Miércoles", "Wednesday"),
    title: c("Integrar IA", "Add AI"),
    focus: c("Insertan el nodo de IA y adaptan el prompt de la Fase 1 a los datos reales, iterando hasta una calidad aceptable.", "Insert the AI node and adapt the Phase 1 prompt to real data, iterating until quality is acceptable."),
    deliverable: c("El flujo con IA produciendo salida aceptable sobre muestras reales", "The AI-powered flow producing acceptable output on real samples"),
    why: c("Aquí se paga el prompting de la Fase 1: no se enseña, se aplica.", "This is where Phase 1 prompting pays off: it is applied, not taught."),
  },
  {
    n: "04",
    start: "2026-10-15T09:00:00-05:00",
    date: c("15 oct", "Oct 15"),
    weekday: c("Jueves", "Thursday"),
    title: c("Probar", "Test"),
    focus: c("Corren con datos reales, ven campos vacíos y entradas raras, agregan manejo de errores y definen el punto de control humano.", "Run with real data, hit empty fields and odd inputs, add error handling, and define the human checkpoint."),
    deliverable: c("El flujo sobre datos reales, con fallas documentadas y checkpoint humano", "The flow on real data, with documented failures and a human checkpoint"),
    why: c("Para People, el control humano no es opcional: hay criterio y datos sensibles de por medio.", "For People, human control is not optional: judgment and sensitive data are involved."),
  },
  {
    n: "05",
    start: "2026-10-16T09:00:00-05:00",
    date: c("16 oct", "Oct 16"),
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
    when: c("Antes del 02 sep", "Before Sep 02"),
    detail: c("Herramientas probadas, accesos listos, plantillas creadas y bloques agendados.", "Tools tested, access granted, templates created, and calendar blocks booked."),
  },
  {
    label: c("Fase 1 · Fundación", "Phase 1 · Foundation"),
    when: c("02 sep a 08 oct", "Sep 02 to Oct 08"),
    detail: c("12 charlas de 3:00 a 4:30 p. m., comenzando con el inventario, la descripción y la valoración de tareas.", "12 talks from 3:00 to 4:30 p.m., starting with task inventory, description, and valuation."),
  },
  {
    label: c("Selección de casos", "Case selection"),
    when: c("Cierre de Fase 1", "End of Phase 1"),
    detail: c("Instrumento de transversalidad: un caso maestro y los casos individuales.", "Cross-cutting instrument: one master case plus the individual ones."),
  },
  {
    label: c("Fase 2 · Challenge", "Phase 2 · Challenge"),
    when: c("12 a 16 oct", "Oct 12 to Oct 16"),
    detail: c("Sprint de entrega de 2 horas diarias que cierra con Demo Day.", "Two hours a day delivery sprint closing with Demo Day."),
  },
  {
    label: c("Difusión", "Internal reach"),
    when: c("Semana siguiente", "The following week"),
    detail: c("Primer microvideo en Slack con material grabado durante el Challenge.", "First Slack microvideo built from footage recorded during the Challenge."),
  },
];

/* Todo el texto de interfaz, en español e inglés.
   `en` está tipado contra `es`, así que ninguna cadena puede quedar sin traducir. */

const es = {
  nav: [
    { id: "programa", label: "Programa" },
    { id: "metodo", label: "Método" },
    { id: "casos", label: "Casos" },
    { id: "biblioteca", label: "Biblioteca" },
    { id: "equipo", label: "Equipo" },
  ],
  langLabel: "Cambiar a inglés",
  menuLabel: "Abrir menú",

  hero: {
    eyebrow: "COLOMBIA · PILOTO 2026",
    lines: ["Entender.", "Aplicar.", "Construir."],
    intro:
      "Un programa práctico creado con People/Ops y diseñado alrededor de las necesidades reales de la cohorte.",
    meta: [
      { k: "CALENDARIO", v: "02 SEP — 16 OCT 2026" },
      { k: "FORMATO", v: "LEARNING JOURNEY + BUILD SPRINT" },
      { k: "LUGAR", v: "BOGOTÁ · PRESENCIAL" },
    ],
    ctaPrimary: "Conoce el programa",
    ctaSecondary: "Ver biblioteca",
    scroll: "DESLIZA",
    nextLabel: "PRÓXIMA SESIÓN",
    liveLabel: "EN VIVO AHORA",
    doneLabel: "PROGRAMA COMPLETADO",
    inDays: "EN {n} DÍAS",
    tomorrow: "MAÑANA",
    today: "HOY",
    hostsLabel: "Momentos reales del programa AI4All",
    imagePrimary: "TRABAJO COLABORATIVO",
    imageSecondary: "EXPERIMENTACIÓN EN EQUIPO",
    collageImages: [
      "Trabajo colaborativo",
      "Práctica con ChatGPT",
      "Prototipado en equipo",
      "Participantes del taller",
      "Sesión virtual: qué es la IA",
      "Sesión virtual: fundamentos",
    ],
    tickerLabel: "PROGRAMA",
  },

  manifesto: {
    tag: "AI4ALL / MANIFIESTO",
    a: "La IA no reemplaza el criterio.",
    b: "Lo amplifica.",
    body: "AI4All combina fundamentos, comprensión del trabajo real, herramientas, pensamiento sistémico y experimentación. Sigue una dirección clara, mientras las preguntas y necesidades de la cohorte ayudan a definir lo que sigue.",
  },

  why: {
    label: "03 / POR QUÉ AHORA",
    title: "La IA multiplica el criterio que ya existe.",
    lead: "La IA acelera decisiones que alguien ya tomó. Por eso el programa arranca por el criterio propio y la herramienta entra después.",
    cards: [
      {
        icon: "users",
        title: "Empezar por la gente",
        body: "People/Ops sostiene procesos que usa toda la compañía, empezando por contratación. Una automatización aquí no se queda en un equipo.",
      },
      {
        icon: "chart",
        title: "Medir antes de contar",
        body: "En una consultoría, los roles facturables se leen como valor. Los equipos horizontales necesitan datos propios para mostrar lo que aportan.",
      },
      {
        icon: "target",
        title: "La salida no es trabajar más",
        body: "Es cuantificar el impacto en métricas y en dinero, y saber comunicarlo con evidencia verificable.",
      },
    ],
    metricsTitle: "Métricas de People que se traducen a dinero",
    metrics: [
      { icon: "timer", label: "Tiempo y costo por contratación" },
      { icon: "retention", label: "Retención y rotación evitada" },
      { icon: "repeat", label: "Horas ahorradas en tareas repetitivas" },
      { icon: "quality", label: "Calidad de contratación y satisfacción interna" },
    ],
  },

  model: {
    label: "02 / EL MODELO",
    title: "Dos fases que se encadenan.",
    lead: "La Fase 1 asegura que la Fase 2 no arranque desde cero: cada persona llega sabiendo qué va a construir y por qué.",
    phaseOne: {
      tag: "FASE 01 · FUNDACIÓN ESTRATÉGICA",
      title: "De cero a criterio",
      meta: "12 encuentros · del 2 de septiembre al 8 de octubre · miércoles y jueves · 3:00 a 4:30 p. m.",
      lead: "Entender la IA, elegir la herramienta correcta y cuantificar el valor del propio trabajo.",
      lead2: "Cierra con cinco casos de uso propios, priorizados y documentados.",
      owner: "Diseña y dirige Daniela Ríos",
    },
    bridge: {
      tag: "BOLETO DE ENTRADA",
      title: "Tres cosas listas antes del Día 1",
      items: [
        "Un caso elegido entre los cinco priorizados",
        "El borrador de prompt de ese caso",
        "Su flujo base construido en Make",
      ],
      note: "Diez horas de Challenge no alcanzan para elegir el caso y además construirlo. La elección viene hecha desde la Fase 1.",
    },
    phaseTwo: {
      tag: "FASE 02 · 5-DAY CHALLENGE",
      title: "Del problema a producción",
      meta: "5 días · 2 horas diarias · sprint de entrega",
      lead: "Taller de construcción: del problema a la automatización funcionando, con su ROI calculado.",
      lead2: "Funciona como sprint de entrega.",
      owner: "Diseña y dirige Cristian Villamil",
    },
    outcomeLabel: "RESULTADO",
    outcome: "Automatizaciones funcionando, con dueño definido y ROI documentado.",
  },

  program: {
    label: "06 / PROGRAMA",
    title: "De fundamentos a soluciones útiles.",
    lead: "El recorrido avanza desde entender la IA y observar el trabajo real hasta experimentar, construir y compartir soluciones.",
    stats: [
      { v: 7, suffix: "", k: "EJES DE APRENDIZAJE" },
      { v: 5, suffix: "", k: "SEMANAS" },
      { v: 1, suffix: "", k: "COHORTE" },
    ],
    outcomesTitle: "El recorrido conecta conocimiento con aplicación",
    outcomes: [
      "Entender cómo representan información los computadores y qué hace diferente a la IA.",
      "Reconocer dónde la IA crea valor y dónde sigue siendo indispensable el criterio humano.",
      "Mapear flujos, actores, reglas, excepciones y dependencias antes de automatizar.",
      "Elegir la herramienta adecuada para el problema, no al revés.",
      "Convertir puntos de dolor reales en oportunidades y experimentos claramente definidos.",
      "Construir, validar y compartir soluciones basadas en el trabajo real.",
    ],
    progressLabel: "AVANCE",
    progressValue: "{done} de 12 charlas",
    dateLabel: "FECHA",
    talkLabel: "CHARLA",
    weekLabel: "SEMANA",
    liveLabel: "RETO EN VIVO",
    deliverableLabel: "ENTREGABLE",
    materialLabel: "VER MATERIAL",
    materialPending: "PRÓXIMAMENTE",
    materialSoon: "Se publica después de la sesión",
    state: {
      done: "COMPLETADA",
      live: "EN VIVO",
      next: "PRÓXIMA",
      scheduled: "AGENDADA",
    },
  },

  method: {
    label: "04 / EL RITUAL",
    title: "Pensar primero. Usar IA después.",
    lead: "Todas las sesiones siguen el mismo ritual de cuatro movimientos. Así la IA amplifica el criterio propio en lugar de reemplazarlo, y el aprendizaje se vuelve colectivo.",
    openLabel: "VER PASO",
    closeLabel: "Cerrar detalle",
    steps: [
      {
        icon: "pen",
        n: "01",
        title: "En papel",
        body: "Piensan y escriben a mano, sin IA. El punto de partida es el criterio propio.",
      },
      {
        icon: "sparkles",
        n: "02",
        title: "Refinar con IA",
        body: "Usan la IA para mejorar, ampliar o cuestionar lo que ya escribieron.",
      },
      {
        icon: "shapes",
        n: "03",
        title: "Hacerlo visual",
        body: "Convierten el resultado en una imagen, un diagrama o un esquema.",
      },
      {
        icon: "share",
        n: "04",
        title: "Puesta en común",
        body: "Comparten el resultado y aprenden de cómo otros resolvieron lo mismo.",
      },
    ],
  },

  cases: {
    label: "05 / SELECCIÓN DE CASOS",
    title: "Transversal no es que muchos lo hagan. Es que muchos lo hagan igual.",
    lead: "Una tarea que hacen cinco personas, cada quien a su manera, no es una automatización: son cinco disfrazadas de una. Por eso cada caso candidato se mide en dos ejes separados.",
    formulas: [
      {
        icon: "network",
        name: "Índice de transversalidad",
        formula: "Alcance × factor de estandarización",
        detail: "Estandarización alta 1.0 · media 0.6 · baja 0.2. Un caso es candidato transversal desde 1.8, es decir, tres personas haciéndolo parecido o dos haciéndolo idéntico.",
      },
      {
        icon: "clock",
        name: "Ahorro mensual estimado",
        formula: "Alcance × Frecuencia × Tiempo por vez",
        detail: "Se calcula en minutos reales, no en puntajes abstractos: es la misma unidad que se defiende en el Demo Day y la que alimenta el cálculo de ROI.",
      },
    ],
    quadrantTitle: "Cuatro cuadrantes, cuatro decisiones",
    axisX: "AHORRO",
    axisY: "TRANSVERSALIDAD",
    high: "ALTO",
    low: "BAJO",
    quadrants: [
      {
        tone: "master",
        title: "Caso maestro",
        body: "Se construye en vivo durante los cinco días y alimenta los microvideos de Slack.",
      },
      {
        tone: "video",
        title: "Material de difusión",
        body: "Sirve para microvideo, no para quemar el sprint completo del equipo.",
      },
      {
        tone: "solo",
        title: "Caso individual valioso",
        body: "Esa persona lo construye para sí durante el Challenge, con acompañamiento.",
      },
      {
        tone: "out",
        title: "Fuera del piloto",
        body: "Se documenta y se guarda para una siguiente ronda del programa.",
      },
    ],
    notes: [
      {
        icon: "shield",
        label: "COMPUERTA DE DATOS SENSIBLES",
        body: "No puntúa: decide. Si un caso toca datos personales sensibles y la herramienta aún no tiene aprobación de IT, no entra con datos reales. Se de-identifica o se pospone.",
      },
      {
        icon: "hand",
        label: "CÓMO SE MIDE EL ALCANCE",
        body: "No se pregunta en abstracto, porque la gente sobreestima. Cada persona lee su lista de tareas en voz alta y los demás levantan la mano si también la hacen. Veinte minutos y evidencia empírica.",
      },
    ],
  },

  challenge: {
    label: "07 / 5-DAY CHALLENGE",
    title: "Cinco días para dejar algo funcionando.",
    lead: "No se viene a aprender a automatizar: se viene a poner una automatización en producción, con dueño y con ROI.",
    dynamicLabel: "LA DINÁMICA",
    dynamicTitle: "Primero lo hago, luego lo hacen",
    dynamicBody: "Cristian construye en vivo el caso maestro transversal a lo largo de los cinco días. Cada día, después de la demo, cada persona aplica ese mismo paso a su propio caso. Así no copian el resultado: copian la técnica.",
    rhythmLabel: "CADA SESIÓN DE 2 HORAS",
    rhythm: [
      { t: "20 a 30 min", h: "Demo en vivo", d: "El caso maestro avanza un paso frente al equipo." },
      { t: "45 a 60 min", h: "Manos en el teclado", d: "Cada quien replica ese paso en su propio caso." },
      { t: "20 a 30 min", h: "Desatasque", d: "Se resuelven bloqueos y se comparte lo aprendido." },
    ],
    focusLabel: "FOCO",
    deliverableLabel: "ENTREGABLE",
    whyLabel: "POR QUÉ IMPORTA",
  },

  library: {
    label: "08 / BIBLIOTECA VIVA",
    title: "Todo lo que hacemos alimenta lo siguiente.",
    lead: "La base de conocimiento, el inventario de procesos, el repositorio validado y los experimentos crecen con cada encuentro y quedan disponibles para futuras cohortes.",
    filters: [
      { id: "all", label: "TODO" },
      { id: "slides", label: "SLIDES" },
      { id: "recording", label: "GRABACIONES" },
      { id: "artifact", label: "ARTEFACTOS" },
      { id: "template", label: "PLANTILLAS" },
    ],
    reserved: "ESPACIO RESERVADO",
    available: "DISPONIBLE",
    empty: "Todavía no hay material de este tipo. Aparecerá aquí después de las próximas sesiones.",
    note: "La página y su archivo crecen clase por clase.",
    kinds: {
      slides: "Slides",
      recording: "Grabación",
      artifact: "Artefacto",
      template: "Plantilla",
    },
  },

  team: {
    label: "QUIÉN LO DISEÑÓ Y LO DIRIGE",
    title: "Dos personas lo diseñaron. People/Ops lo construye.",
    lead: "Daniela Ríos y Cristian Villamil diseñaron el programa completo y dirigen una fase cada uno. Los casos, los datos y las automatizaciones que salgan de aquí son de People/Ops.",
    leadsLabel: "LIDERA",
    groupLabel: "EQUIPO PARTICIPANTE",
    groupName: "People/Ops Colombia",
    groupPlace: "Bogotá",
    groupBody: "El piloto se hace presencial en Bogotá: mismo salón, mismas manos en el teclado. Trabajar en el mismo espacio permite ver de cerca el efecto de cada sesión, resolver bloqueos en el momento y comprobar si el impacto es real antes de escalar el programa.",
    groupPhotoAlt: "Participantes de AI4All prototipando soluciones en equipo",
    groupStats: [
      { v: "05", k: "PERSONAS EN EL PILOTO" },
      { v: "17", k: "ENCUENTROS PRESENCIALES" },
    ],
    closingLabel: "JORNADA DE CIERRE",
    closingBody: "El Demo Day reúne al equipo para mostrar en vivo lo construido, defender el ROI de cada caso y entregar los runbooks.",
  },

  impact: {
    label: "01 / NORTH STAR",
    title: "Tres números el 16 de octubre.",
    lead: "La métrica de éxito es una sola: cuántas automatizaciones quedan funcionando en producción al final del Día 5.",
    metrics: [
      { v: "—", k: "AUTOMATIZACIONES EN PRODUCCIÓN" },
      { v: "—", k: "HORAS AHORRADAS POR MES" },
      { v: "—", k: "ROI DOCUMENTADO" },
    ],
    metricsNote: "Se llenan el 16 de octubre con los números que cada caso defienda en el Demo Day.",
    howTitle: "Cómo se mide",
    how: [
      "Demo en vivo: cada persona muestra su automatización funcionando.",
      "ROI por caso: la línea base del Día 1 menos el tiempo nuevo, traducido a dinero.",
      "Traspaso documentado: quién es el dueño, dónde vive y qué la rompe.",
    ],
    demoTag: "DEMO DAY",
    demoDate: "16 OCT 2026 · BOGOTÁ",
    demoBody: "Demos en vivo, ROI por caso y entrega de runbooks.",
    videoLabel: "MICROTUTORIALES",
    videoTitle: "Sesenta segundos en Slack",
    videoLead: "Cada caso construido deja material para un microtutorial: un minuto en Slack que enseña algo concreto de IA y que cualquiera puede replicar. Los casos transversales son los mejores, porque la tarea que resuelven le pasa a más gente.",
    videoParts: [
      { t: "0:00 a 0:10", h: "Gancho", d: "Un dolor real y reconocible del día a día." },
      { t: "0:10 a 0:45", h: "La solución", d: "Timelapse de la automatización construyéndose en pantalla." },
      { t: "0:45 a 1:00", h: "Invitación", d: "Una puerta abierta para quien quiera aprender lo mismo." },
    ],
  },

  ops: {
    label: "09 / OPERACIÓN",
    stackTitle: "Con qué se construye",
    stackLead: "Orquestación visual, sin instalaciones ni código. El equipo ya opera dentro de Google Workspace y el piloto se queda ahí.",
    timelineTitle: "Cronograma consolidado",
    timelineLead: "Cinco etapas encadenadas, de la preparación a la difusión interna.",
  },

  responsible: {
    label: "USO RESPONSABLE",
    title: "La IA acelera el trabajo. Las decisiones siguen siendo humanas.",
    body: "Cada solución protege la información confidencial y tiene una persona responsable de validar datos, fuentes, supuestos y resultados antes de que salgan del equipo.",
    rules: [
      "Verificar datos, fuentes y supuestos",
      "Proteger la información confidencial",
      "Aplicar criterio humano en cada decisión",
      "Escalar los casos sensibles a su dueño",
    ],
  },

  dividers: {
    one: {
      tag: "FASE 01",
      title: "Fundación estratégica",
      body: "Doce charlas para llegar con criterio, un caso elegido y las bases listas para construir.",
    },
    two: {
      tag: "FASE 02",
      title: "5-Day Challenge",
      body: "Cinco días para convertir lo aprendido en una automatización funcionando.",
    },
  },

  footer: {
    tagline: "IA aplicada al trabajo de People/Ops",
    internal: "Iniciativa interna · People/Ops · Colombia",
    confidential: "Documento de uso interno. Puede contener información privilegiada o confidencial.",
    rights: "© 2026 Wizeline",
    backToTop: "VOLVER ARRIBA",
  },
};

const en: typeof es = {
  nav: [
    { id: "programa", label: "Program" },
    { id: "metodo", label: "Method" },
    { id: "casos", label: "Cases" },
    { id: "biblioteca", label: "Library" },
    { id: "equipo", label: "Team" },
  ],
  langLabel: "Switch to Spanish",
  menuLabel: "Open menu",

  hero: {
    eyebrow: "COLOMBIA · 2026 PILOT",
    lines: ["Understand.", "Apply.", "Build."],
    intro:
      "A hands-on learning program created with People/Ops and shaped around the real needs of the cohort.",
    meta: [
      { k: "CALENDAR", v: "SEP 02 — OCT 16, 2026" },
      { k: "FORMAT", v: "LEARNING JOURNEY + BUILD SPRINT" },
      { k: "PLACE", v: "BOGOTÁ · IN PERSON" },
    ],
    ctaPrimary: "Explore the program",
    ctaSecondary: "Open the library",
    scroll: "SCROLL",
    nextLabel: "NEXT SESSION",
    liveLabel: "LIVE NOW",
    doneLabel: "PROGRAM COMPLETED",
    inDays: "IN {n} DAYS",
    tomorrow: "TOMORROW",
    today: "TODAY",
    hostsLabel: "Real moments from the AI4All program",
    imagePrimary: "COLLABORATIVE WORK",
    imageSecondary: "TEAM EXPERIMENTATION",
    collageImages: [
      "Collaborative work",
      "ChatGPT practice",
      "Team prototyping",
      "Workshop participants",
      "Virtual session: what AI is",
      "Virtual session: foundations",
    ],
    tickerLabel: "PROGRAM",
  },

  manifesto: {
    tag: "AI4ALL / MANIFESTO",
    a: "AI does not replace judgment.",
    b: "It amplifies it.",
    body: "AI4All combines foundations, an understanding of real work, tools, systems thinking, and experimentation. It follows a clear direction while questions and needs surfaced by the cohort help shape what comes next.",
  },

  why: {
    label: "03 / WHY NOW",
    title: "AI multiplies the judgment that already exists.",
    lead: "AI speeds up decisions someone already made. That is why the program starts with judgment and brings in the tool afterwards.",
    cards: [
      {
        icon: "users",
        title: "Start with people",
        body: "People/Ops runs processes the whole company depends on, starting with hiring. An automation here does not stay inside one team.",
      },
      {
        icon: "chart",
        title: "Measure before telling",
        body: "In a consultancy, billable roles read as value. Horizontal teams need data of their own to show what they contribute.",
      },
      {
        icon: "target",
        title: "The answer is not more hours",
        body: "It is quantifying impact in metrics and in money, and communicating it with verifiable evidence.",
      },
    ],
    metricsTitle: "People metrics that translate into money",
    metrics: [
      { icon: "timer", label: "Time and cost per hire" },
      { icon: "retention", label: "Retention and avoided turnover" },
      { icon: "repeat", label: "Hours saved on repetitive tasks" },
      { icon: "quality", label: "Quality of hire and internal satisfaction" },
    ],
  },

  model: {
    label: "02 / THE MODEL",
    title: "Two phases, one chain.",
    lead: "Phase 1 makes sure Phase 2 does not start from zero: everyone arrives knowing what they will build and why.",
    phaseOne: {
      tag: "PHASE 01 · STRATEGIC FOUNDATION",
      title: "From zero to judgment",
      meta: "12 meetings · September 2 to October 8 · Wednesdays and Thursdays · 3:00 to 4:30 p.m.",
      lead: "Understand AI, choose the right tool, and quantify the value of your own work.",
      lead2: "It closes with five personal use cases, prioritized and documented.",
      owner: "Designed and led by Daniela Ríos",
    },
    bridge: {
      tag: "ENTRY TICKET",
      title: "Three things ready before Day 1",
      items: [
        "One case chosen from the five prioritized",
        "The draft prompt for that case",
        "Their base workflow built in Make",
      ],
      note: "Ten hours of Challenge are not enough to pick the case and build it too. The choice comes ready from Phase 1.",
    },
    phaseTwo: {
      tag: "PHASE 02 · 5-DAY CHALLENGE",
      title: "From problem to production",
      meta: "5 days · 2 hours a day · delivery sprint",
      lead: "A build workshop: from the problem to a working automation, with its ROI calculated.",
      lead2: "It runs as a delivery sprint.",
      owner: "Designed and led by Cristian Villamil",
    },
    outcomeLabel: "OUTCOME",
    outcome: "Automations running, with a named owner and documented ROI.",
  },

  program: {
    label: "06 / PROGRAM",
    title: "From foundations to useful solutions.",
    lead: "The journey moves from understanding AI and observing real work to experimenting, building, and sharing solutions.",
    stats: [
      { v: 7, suffix: "", k: "LEARNING THEMES" },
      { v: 5, suffix: "", k: "WEEKS" },
      { v: 1, suffix: "", k: "COHORT" },
    ],
    outcomesTitle: "The journey connects knowledge with application",
    outcomes: [
      "Understand how computers represent information and what makes AI different.",
      "Recognize where AI creates value and where human judgment remains essential.",
      "Map workflows, actors, rules, exceptions, and dependencies before automating.",
      "Choose the right tool for the problem, not the other way around.",
      "Turn real pain points into clearly defined opportunities and experiments.",
      "Build, validate, and share solutions based on real work.",
    ],
    progressLabel: "PROGRESS",
    progressValue: "{done} of 12 talks",
    dateLabel: "DATE",
    talkLabel: "TALK",
    weekLabel: "WEEK",
    liveLabel: "LIVE CHALLENGE",
    deliverableLabel: "DELIVERABLE",
    materialLabel: "OPEN MATERIALS",
    materialPending: "COMING SOON",
    materialSoon: "Published after the session",
    state: {
      done: "COMPLETED",
      live: "LIVE",
      next: "NEXT",
      scheduled: "SCHEDULED",
    },
  },

  method: {
    label: "04 / THE RITUAL",
    title: "Think first. Use AI second.",
    lead: "Every session follows the same four-move ritual. That way AI amplifies your own judgment instead of replacing it, and learning becomes collective.",
    openLabel: "VIEW STEP",
    closeLabel: "Close detail",
    steps: [
      {
        icon: "pen",
        n: "01",
        title: "On paper",
        body: "Think and write by hand, with no AI. Your own judgment is the starting point.",
      },
      {
        icon: "sparkles",
        n: "02",
        title: "Refine with AI",
        body: "Use AI to improve, expand, or challenge what you already wrote.",
      },
      {
        icon: "shapes",
        n: "03",
        title: "Make it visual",
        body: "Turn the result into an image, a diagram, or a framework.",
      },
      {
        icon: "share",
        n: "04",
        title: "Share it",
        body: "Show the result and learn how others solved the same thing.",
      },
    ],
  },

  cases: {
    label: "05 / CASE SELECTION",
    title: "Cross-cutting is not many people doing it. It is many people doing it the same way.",
    lead: "A task five people do, each in their own way, is not one automation: it is five disguised as one. That is why every candidate case is measured on two separate axes.",
    formulas: [
      {
        icon: "network",
        name: "Cross-cutting index",
        formula: "Reach × standardization factor",
        detail: "Standardization high 1.0 · medium 0.6 · low 0.2. A case qualifies from 1.8 up, meaning three people doing it similarly or two doing it identically.",
      },
      {
        icon: "clock",
        name: "Estimated monthly savings",
        formula: "Reach × Frequency × Time per run",
        detail: "Calculated in real minutes, not abstract scores: the same unit defended on Demo Day and the one feeding the ROI calculation.",
      },
    ],
    quadrantTitle: "Four quadrants, four decisions",
    axisX: "SAVINGS",
    axisY: "CROSS-CUTTING",
    high: "HIGH",
    low: "LOW",
    quadrants: [
      {
        tone: "master",
        title: "Master case",
        body: "Built live across the five days and used as material for the Slack microvideos.",
      },
      {
        tone: "video",
        title: "Outreach material",
        body: "Good for a microvideo, not worth burning the team's full sprint on.",
      },
      {
        tone: "solo",
        title: "Valuable individual case",
        body: "That person builds it for themselves during the Challenge, with support.",
      },
      {
        tone: "out",
        title: "Out of the pilot",
        body: "Documented and kept for a following round of the program.",
      },
    ],
    notes: [
      {
        icon: "shield",
        label: "SENSITIVE DATA GATE",
        body: "It does not score: it decides. If a case touches sensitive personal data and the tool is not yet approved by IT, it does not enter with real data. It is de-identified or postponed.",
      },
      {
        icon: "hand",
        label: "HOW REACH IS MEASURED",
        body: "It is never asked in the abstract, because people overestimate. Each person reads their task list out loud and the others raise a hand if they do it too. Twenty minutes and empirical evidence.",
      },
    ],
  },

  challenge: {
    label: "07 / 5-DAY CHALLENGE",
    title: "Five days to leave something running.",
    lead: "Nobody comes to learn how to automate: they come to put an automation into production, with an owner and an ROI.",
    dynamicLabel: "THE DYNAMIC",
    dynamicTitle: "First I do it, then they do it",
    dynamicBody: "Cristian builds the cross-cutting master case live across the five days. Each day, right after the demo, everyone applies that same step to their own case. They do not copy the result: they copy the technique.",
    rhythmLabel: "EVERY 2-HOUR SESSION",
    rhythm: [
      { t: "20 to 30 min", h: "Live demo", d: "The master case moves one step forward in front of the team." },
      { t: "45 to 60 min", h: "Hands on keyboard", d: "Everyone replicates that step on their own case." },
      { t: "20 to 30 min", h: "Unblocking", d: "Blockers get solved and learnings are shared." },
    ],
    focusLabel: "FOCUS",
    deliverableLabel: "DELIVERABLE",
    whyLabel: "WHY IT MATTERS",
  },

  library: {
    label: "08 / LIVING LIBRARY",
    title: "Everything we make feeds what comes next.",
    lead: "The knowledge base, process inventory, validated repository, and experiments grow with every meeting and remain available for future cohorts.",
    filters: [
      { id: "all", label: "ALL" },
      { id: "slides", label: "SLIDES" },
      { id: "recording", label: "RECORDINGS" },
      { id: "artifact", label: "ARTIFACTS" },
      { id: "template", label: "TEMPLATES" },
    ],
    reserved: "SPACE RESERVED",
    available: "AVAILABLE",
    empty: "No material of this type yet. It will show up here after the coming sessions.",
    note: "The page and its archive grow class by class.",
    kinds: {
      slides: "Slides",
      recording: "Recording",
      artifact: "Artifact",
      template: "Template",
    },
  },

  team: {
    label: "WHO DESIGNED AND RUNS IT",
    title: "Two people designed it. People/Ops builds it.",
    lead: "Daniela Ríos and Cristian Villamil designed the whole program and each runs one phase. The cases, the data, and any automations that come out of it belong to People/Ops.",
    leadsLabel: "LEADS",
    groupLabel: "PARTICIPATING TEAM",
    groupName: "People/Ops Colombia",
    groupPlace: "Bogotá",
    groupBody: "The pilot runs in person in Bogotá: same room, same hands on the keyboard. Working in the same space makes it possible to see the effect of each session up close, unblock people on the spot, and confirm the impact is real before scaling the program.",
    groupPhotoAlt: "AI4All participants prototyping solutions together",
    groupStats: [
      { v: "05", k: "PEOPLE IN THE PILOT" },
      { v: "17", k: "IN-PERSON MEETINGS" },
    ],
    closingLabel: "CLOSING DAY",
    closingBody: "Demo Day brings the team together to show what was built, defend the ROI of each case, and hand over the runbooks.",
  },

  impact: {
    label: "01 / NORTH STAR",
    title: "Three numbers on October 16.",
    lead: "There is a single success metric: how many automations are still running in production at the end of Day 5.",
    metrics: [
      { v: "—", k: "AUTOMATIONS IN PRODUCTION" },
      { v: "—", k: "HOURS SAVED PER MONTH" },
      { v: "—", k: "DOCUMENTED ROI" },
    ],
    metricsNote: "They get filled in on October 16 with the numbers each case presents at Demo Day.",
    howTitle: "How it is measured",
    how: [
      "Live demo: each person shows their automation running.",
      "ROI per case: the Day 1 baseline minus the new time, translated into money.",
      "Documented handover: who owns it, where it lives, and what breaks it.",
    ],
    demoTag: "DEMO DAY",
    demoDate: "OCT 16, 2026 · BOGOTÁ",
    demoBody: "Live demos, ROI per case, and runbook handover.",
    videoLabel: "MICRO-TUTORIALS",
    videoTitle: "Sixty seconds on Slack",
    videoLead: "Every case built leaves material for a micro-tutorial: one minute on Slack that teaches something concrete about AI and that anyone can copy. Cross-cutting cases work best, because more people do the task they solve.",
    videoParts: [
      { t: "0:00 to 0:10", h: "Hook", d: "A real, recognizable pain from the everyday." },
      { t: "0:10 to 0:45", h: "The solution", d: "Timelapse of the automation being built on screen." },
      { t: "0:45 to 1:00", h: "Invitation", d: "An open door for anyone who wants to learn the same." },
    ],
  },

  ops: {
    label: "09 / OPERATIONS",
    stackTitle: "What it is built with",
    stackLead: "Visual orchestration, with no installs and no code. The team already works inside Google Workspace and the pilot stays there.",
    timelineTitle: "Consolidated timeline",
    timelineLead: "Five chained stages, from preparation to internal reach.",
  },

  responsible: {
    label: "RESPONSIBLE USE",
    title: "AI accelerates work. Decisions remain human.",
    body: "Every solution protects confidential information and has a person responsible for validating data, sources, assumptions, and results before they leave the team.",
    rules: [
      "Verify data, sources, and assumptions",
      "Protect confidential information",
      "Apply human judgment to every decision",
      "Escalate sensitive cases to their owner",
    ],
  },

  dividers: {
    one: {
      tag: "PHASE 01",
      title: "Strategic foundation",
      body: "Twelve talks to arrive with judgment, a chosen use case, and the groundwork ready to build.",
    },
    two: {
      tag: "PHASE 02",
      title: "5-Day Challenge",
      body: "Five days to turn what was learned into a working automation.",
    },
  },

  footer: {
    tagline: "AI applied to People/Ops work",
    internal: "Internal initiative · People/Ops · Colombia",
    confidential: "For internal use. May contain privileged or confidential information.",
    rights: "© 2026 Wizeline",
    backToTop: "BACK TO TOP",
  },
};

export const copy = { es, en };
export type UICopy = typeof es;

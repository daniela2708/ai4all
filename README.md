# AI4All · Wizeline

Sitio bilingüe (español e inglés) del piloto AI4All de People/Ops Colombia.
Es una carpeta autónoma: no depende de la web de AI at Work y puede moverse
completa a otro repositorio.

## Ejecutar

```bash
npm install
npm run dev        # desarrollo en http://localhost:5173
npm run build      # typecheck + build de producción en dist/
npm run preview    # revisar el build
```

## Desplegar en Vercel

Importa el repositorio desde Vercel. El framework se detecta automáticamente
como Vite y usa `npm run build` con `dist/` como directorio de salida. El archivo
`vercel.json` aplica en producción las cabeceras de seguridad y caché del sitio.

## Dónde vive cada cosa

| Archivo | Qué contiene |
|---|---|
| `src/content.ts` | Datos del programa: sesiones, días del Challenge, equipo, stack, cronograma y **materiales**. |
| `src/copy.ts` | Todo el texto de interfaz en español e inglés. El objeto `en` está tipado contra `es`, así que si falta una traducción el build falla. |
| `src/sections/` | Una sección por archivo (hero, programa, método, casos, biblioteca, equipo, impacto, operación). |
| `src/styles.css` | Sistema visual completo: tokens de marca, componentes y animaciones. |
| `src/lib.ts` | Estado del programa en vivo, reveal por scroll, contadores y validación de enlaces. |
| `public/materials/` | Archivos descargables (slides, plantillas). |
| `public/team/` | Fotos del equipo. |
| `public/hero/` | Imágenes editoriales de portada. Agrega `hero-01.jpg` y `hero-02.jpg` para llenar los dos marcos. |

Las fotos de Daniela y Cristian se muestran únicamente en la sección Equipo.
Los marcos de la portada son espacios independientes para fotografías de
talleres, artefactos o momentos del programa.

## Publicar el material de una sesión

El sitio ya reserva el espacio de cada sesión: mientras no haya material, la
tarjeta aparece como **espacio reservado**. Para publicar, agrega los enlaces al
arreglo `materials` de esa sesión en `src/content.ts`:

```ts
{
  n: "01",
  // ...
  materials: [
    { kind: "slides",    label: c("Slides de la sesión", "Session slides"), href: "/materials/s01-slides.pdf" },
    { kind: "recording", label: c("Grabación", "Recording"),                href: "https://drive.google.com/..." },
    { kind: "artifact",  label: c("Lo que construimos", "What we built"),   href: "https://..." },
    { kind: "template",  label: c("Plantilla", "Template"),                 href: "/materials/s01-plantilla.xlsx" },
  ],
}
```

Reglas:

1. `kind` acepta `slides`, `recording`, `artifact` o `template`. Cada uno tiene
   su icono y su filtro en la biblioteca.
2. Los archivos propios van en `public/materials/` y se enlazan como
   `/materials/nombre-del-archivo.pdf`. Se sirven como descarga.
3. Los enlaces externos deben ser `https://`. Cualquier otro esquema se ignora
   por seguridad.
4. Al agregar el primer material, la tarjeta cambia sola de espacio reservado a
   disponible, y la fila de la sesión en el programa pasa de PRÓXIMAMENTE a VER
   MATERIAL.

## Estado en vivo

Las fechas de `src/content.ts` están en hora de Colombia (UTC-5) y el sitio las
usa para calcular, sin intervención manual:

- la tarjeta de próxima sesión del hero, con su cuenta de días;
- el estado de cada charla: agendada, en vivo o completada;
- la barra de avance del programa;
- los días del Challenge ya cursados.

## Métricas del Demo Day

Los tres indicadores del North Star viven en `src/copy.ts`, en `impact.metrics`.
Mientras el valor sea `—` se muestran como pendientes. El 2 de octubre se
reemplazan por los números reales del Demo Day, en español y en inglés.

## Marca

- Tipografía: Space Mono en mayúsculas para etiquetas y frases cortas, Nunito
  Sans para títulos y cuerpo.
- Paleta: Velocity Red `#E93D44`, Contrast Dark `#211E1E`, Contrast Light
  `#FCFBF5`, con neutros, fríos y el acento Streak `#DDFD58` en dosis pequeñas.
- Iconos de `lucide-react` con grosor de trazo uniforme. Sin emojis.
- El logo se usa tal cual, sin recolorear ni deformar.
- Todas las animaciones respetan `prefers-reduced-motion`.

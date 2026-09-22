import participantsPhoto from "../../Fotos/participantes-en-taller-presencial.jpeg";
import definitionPhoto from "../../Fotos/taller-virtual-definicion-ia.jpeg";
import foundationsPhoto from "../../Fotos/taller-virtual-fundamentos-ia.jpeg";
import type { UICopy } from "../copy";

const MOMENTS = {
  workshop: {
    src: participantsPhoto,
    width: 1280,
    height: 720,
    captionIndex: 3,
    meta: "BOGOTÁ / IN PERSON",
    number: "01",
  },
  definition: {
    src: definitionPhoto,
    width: 1600,
    height: 672,
    captionIndex: 4,
    meta: "REMOTE / LIVE SESSION",
    number: "02",
  },
  foundations: {
    src: foundationsPhoto,
    width: 1600,
    height: 753,
    captionIndex: 5,
    meta: "AI FOUNDATIONS / 2026",
    number: "03",
  },
} as const;

type MomentKind = keyof typeof MOMENTS;

export function PhotoMoment({ kind, t }: { kind: MomentKind; t: UICopy }) {
  const moment = MOMENTS[kind];
  const caption = t.hero.collageImages[moment.captionIndex];

  return (
    <aside className={`page-moment page-moment-${kind}`} aria-label={caption}>
      <figure className="page-moment-figure reveal">
        <div className="page-moment-photo">
          <img
            src={moment.src}
            alt={caption}
            width={moment.width}
            height={moment.height}
            loading="lazy"
            decoding="async"
          />
          <span className="page-moment-number" aria-hidden="true">
            {moment.number}
          </span>
        </div>
        <figcaption>
          <span>AI4ALL / {moment.number}</span>
          <strong>{caption}</strong>
          <small>{moment.meta}</small>
        </figcaption>
      </figure>
    </aside>
  );
}

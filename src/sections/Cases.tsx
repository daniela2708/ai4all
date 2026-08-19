import type { CSSProperties } from "react";
import { Archive, Film, UserRound, Zap } from "lucide-react";
import { Icon } from "../icons";
import type { UICopy } from "../copy";

const QUADRANT_ICONS = { master: Zap, video: Film, solo: UserRound, out: Archive };

export function Cases({ t }: { t: UICopy }) {
  return (
    <section className="cases" id="casos">
      <header className="section-head">
        <span className="label">{t.cases.label}</span>
        <div>
          <h2 className="display display-tight reveal">{t.cases.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.cases.lead}
          </p>
        </div>
      </header>

      <div className="formulas">
        {t.cases.formulas.map((item, i) => (
          <article
            className="formula reveal"
            key={item.name}
            style={{ "--d": `${i * 100}ms` } as CSSProperties}
          >
            <span className="icon-tile">
              <Icon name={item.icon} size={19} />
            </span>
            <h3>{item.name}</h3>
            <p className="formula-code">{item.formula}</p>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="quadrant-block reveal">
        <p className="quadrant-title">{t.cases.quadrantTitle}</p>

        <div className="quadrant-frame">
          <div className="axis axis-y">
            <span>{t.cases.axisY}</span>
            <em className="axis-high">{t.cases.high}</em>
            <em className="axis-low">{t.cases.low}</em>
          </div>

          <div className="quadrant-grid">
            {t.cases.quadrants.map((quadrant, i) => {
              const Glyph =
                QUADRANT_ICONS[quadrant.tone as keyof typeof QUADRANT_ICONS] ?? Zap;
              return (
                <article
                  className={`quadrant quadrant-${quadrant.tone} reveal`}
                  key={quadrant.title}
                  style={{ "--d": `${i * 80}ms` } as CSSProperties}
                >
                  <Glyph size={18} strokeWidth={1.7} />
                  <h4>{quadrant.title}</h4>
                  <p>{quadrant.body}</p>
                </article>
              );
            })}
          </div>

          <div className="axis axis-x">
            <em className="axis-high">{t.cases.high}</em>
            <span>{t.cases.axisX}</span>
            <em className="axis-low">{t.cases.low}</em>
          </div>
        </div>
      </div>

      <div className="notes">
        {t.cases.notes.map((note, i) => (
          <article
            className="note reveal"
            key={note.label}
            style={{ "--d": `${i * 90}ms` } as CSSProperties}
          >
            <span className="icon-tile icon-tile-soft">
              <Icon name={note.icon} size={18} />
            </span>
            <div>
              <span className="label">{note.label}</span>
              <p>{note.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

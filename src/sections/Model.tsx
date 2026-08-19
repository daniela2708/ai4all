import type { CSSProperties } from "react";
import { CalendarDays, Rocket, Ticket, UserRound } from "lucide-react";
import type { UICopy } from "../copy";

function FlowLink() {
  return (
    <div className="flow-link" aria-hidden="true">
      <span className="flow-line" />
      <span className="flow-dot" />
    </div>
  );
}

export function Model({ t }: { t: UICopy }) {
  const phases = [t.model.phaseOne, t.model.phaseTwo];

  return (
    <section className="model">
      <header className="section-head">
        <span className="label">{t.model.label}</span>
        <div>
          <h2 className="display reveal">{t.model.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.model.lead}
          </p>
        </div>
      </header>

      <div className="model-flow">
        <article className="phase-card phase-card-one reveal">
          <span className="label">{phases[0].tag}</span>
          <h3>{phases[0].title}</h3>
          <p className="phase-meta">
            <CalendarDays size={14} strokeWidth={1.7} />
            {phases[0].meta}
          </p>
          <p>{phases[0].lead}</p>
          <p className="phase-note">{phases[0].lead2}</p>
          <p className="phase-owner">
            <UserRound size={14} strokeWidth={1.7} />
            {phases[0].owner}
          </p>
        </article>

        <FlowLink />

        <article
          className="ticket-card reveal"
          style={{ "--d": "120ms" } as CSSProperties}
        >
          <span className="label label-light">
            <Ticket size={14} strokeWidth={1.7} />
            {t.model.bridge.tag}
          </span>
          <h3>{t.model.bridge.title}</h3>
          <ol>
            {t.model.bridge.items.map((item, i) => (
              <li key={item}>
                <em>{`0${i + 1}`}</em>
                {item}
              </li>
            ))}
          </ol>
          <p className="ticket-note">{t.model.bridge.note}</p>
        </article>

        <FlowLink />

        <article
          className="phase-card phase-card-two reveal"
          style={{ "--d": "220ms" } as CSSProperties}
        >
          <span className="label">{phases[1].tag}</span>
          <h3>{phases[1].title}</h3>
          <p className="phase-meta">
            <CalendarDays size={14} strokeWidth={1.7} />
            {phases[1].meta}
          </p>
          <p>{phases[1].lead}</p>
          <p className="phase-note">{phases[1].lead2}</p>
          <p className="phase-owner">
            <UserRound size={14} strokeWidth={1.7} />
            {phases[1].owner}
          </p>
        </article>
      </div>

      <div className="model-outcome reveal">
        <span className="icon-tile icon-tile-solid">
          <Rocket size={18} strokeWidth={1.7} />
        </span>
        <div>
          <span className="label">{t.model.outcomeLabel}</span>
          <p>{t.model.outcome}</p>
        </div>
      </div>
    </section>
  );
}

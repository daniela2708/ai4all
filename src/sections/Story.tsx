import type { CSSProperties } from "react";
import { Icon, SignalDivider } from "../icons";
import type { UICopy } from "../copy";

export function Manifesto({ t }: { t: UICopy }) {
  return (
    <section className="manifesto">
      <SignalDivider tone="ink" />
      <div className="manifesto-inner">
        <p className="manifesto-statement reveal">
          {t.manifesto.a}
          <br />
          <em>{t.manifesto.b}</em>
        </p>
        <div className="manifesto-side reveal" style={{ "--d": "120ms" } as CSSProperties}>
          <span className="label label-light">{t.manifesto.tag}</span>
          <p>{t.manifesto.body}</p>
        </div>
      </div>
    </section>
  );
}

export function Why({ t }: { t: UICopy }) {
  return (
    <section className="why" id="por-que">
      <header className="section-head">
        <span className="label">{t.why.label}</span>
        <div>
          <h2 className="display reveal">{t.why.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.why.lead}
          </p>
        </div>
      </header>

      <div className="why-cards">
        {t.why.cards.map((card, i) => (
          <article
            className="card card-hover reveal"
            key={card.title}
            style={{ "--d": `${i * 90}ms` } as CSSProperties}
          >
            <span className="card-ghost" aria-hidden="true">{`0${i + 1}`}</span>
            <span className="icon-tile">
              <Icon name={card.icon} size={19} />
            </span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>

      <div className="metric-strip reveal">
        <p className="metric-strip-title">
          <span className="dot" aria-hidden="true" />
          {t.why.metricsTitle}
        </p>
        <ul>
          {t.why.metrics.map((metric, i) => (
            <li key={metric.label} style={{ "--d": `${i * 70}ms` } as CSSProperties}>
              <Icon name={metric.icon} size={17} />
              {metric.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

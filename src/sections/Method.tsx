import type { CSSProperties } from "react";
import { Icon, SignalDivider } from "../icons";
import type { UICopy } from "../copy";

export function Method({ t }: { t: UICopy }) {
  return (
    <section className="method" id="metodo">
      <SignalDivider tone="ink" />
      <header className="section-head section-head-light">
        <span className="label label-light">{t.method.label}</span>
        <div>
          <h2 className="display reveal">{t.method.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.method.lead}
          </p>
        </div>
      </header>

      <ol className="steps">
        {t.method.steps.map((step, i) => (
          <li
            className="step reveal"
            key={step.n}
            style={{ "--d": `${i * 110}ms` } as CSSProperties}
          >
            <span className="step-num">{step.n}</span>
            <span className="step-icon">
              <Icon name={step.icon} size={20} />
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

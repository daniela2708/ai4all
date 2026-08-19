import type { CSSProperties } from "react";
import { Check, Route, Wrench } from "lucide-react";
import { Icon } from "../icons";
import { pick, stack, timeline, type Lang } from "../content";
import type { UICopy } from "../copy";

export function Ops({ t, lang }: { t: UICopy; lang: Lang }) {
  return (
    <section className="ops">
      <div className="ops-block">
        <header className="ops-head">
          <span className="label">
            <Wrench size={14} strokeWidth={1.8} />
            {t.ops.label}
          </span>
          <h2 className="reveal">{t.ops.stackTitle}</h2>
          <p className="reveal" style={{ "--d": "70ms" } as CSSProperties}>
            {t.ops.stackLead}
          </p>
        </header>

        <ul className="stack">
          {stack.map((tool, i) => (
            <li
              className={`tool tool-${tool.tone} reveal`}
              key={tool.name}
              style={{ "--d": `${i * 80}ms` } as CSSProperties}
            >
              <strong>{tool.name}</strong>
              <span className={`chip chip-${tool.tone}`}>
                {pick(tool.status, lang)}
              </span>
              <p>{pick(tool.note, lang)}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="ops-block">
        <header className="ops-head">
          <span className="label">
            <Route size={14} strokeWidth={1.8} />
            {t.ops.timelineTitle}
          </span>
          <p className="reveal">{t.ops.timelineLead}</p>
        </header>

        <ol className="timeline">
          {timeline.map((stage, i) => (
            <li
              className="stage reveal"
              key={stage.label.es}
              style={{ "--d": `${i * 80}ms` } as CSSProperties}
            >
              <span className="stage-dot" aria-hidden="true">
                <Check size={11} strokeWidth={2.6} />
              </span>
              <span className="stage-when">{pick(stage.when, lang)}</span>
              <strong>{pick(stage.label, lang)}</strong>
              <p>{pick(stage.detail, lang)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Responsible({ t }: { t: UICopy }) {
  return (
    <section className="responsible">
      <span className="icon-tile icon-tile-soft responsible-icon">
        <Icon name="shield" size={26} />
      </span>
      <div className="responsible-copy">
        <span className="label">{t.responsible.label}</span>
        <h2 className="reveal">{t.responsible.title}</h2>
        <p className="reveal" style={{ "--d": "70ms" } as CSSProperties}>
          {t.responsible.body}
        </p>
      </div>
      <ul className="responsible-rules">
        {t.responsible.rules.map((rule, i) => (
          <li
            className="reveal"
            key={rule}
            style={{ "--d": `${i * 70}ms` } as CSSProperties}
          >
            <Check size={14} strokeWidth={2.2} />
            {rule}
          </li>
        ))}
      </ul>
    </section>
  );
}

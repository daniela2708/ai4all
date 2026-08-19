import type { CSSProperties } from "react";
import { Check, Repeat2, Zap } from "lucide-react";
import { challenge, pick, type Lang } from "../content";
import type { UICopy } from "../copy";
import { dayIsPast } from "../lib";

export function Challenge({
  t,
  lang,
  now,
}: {
  t: UICopy;
  lang: Lang;
  now: Date;
}) {
  return (
    <section className="challenge">
      <div className="challenge-frame">
      <header className="section-head section-head-light">
        <span className="label label-light">{t.challenge.label}</span>
        <div>
          <h2 className="display reveal">{t.challenge.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.challenge.lead}
          </p>
        </div>
      </header>

      <div className="challenge-top">
        <article className="dynamic reveal">
          <span className="label label-light">
            <Repeat2 size={14} strokeWidth={1.8} />
            {t.challenge.dynamicLabel}
          </span>
          <h3>{t.challenge.dynamicTitle}</h3>
          <p>{t.challenge.dynamicBody}</p>
        </article>

        <div className="rhythm reveal" style={{ "--d": "120ms" } as CSSProperties}>
          <span className="label label-light">{t.challenge.rhythmLabel}</span>
          <ol>
            {t.challenge.rhythm.map((block) => (
              <li key={block.h}>
                <span className="rhythm-time">{block.t}</span>
                <strong>{block.h}</strong>
                <p>{block.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="days">
        {challenge.map((day, i) => {
          const past = dayIsPast(day, now);
          return (
            <article
              className={`day${past ? " day-done" : ""} reveal`}
              key={day.n}
              style={{ "--d": `${i * 80}ms` } as CSSProperties}
            >
              <span className="day-num">
                D{day.n}
                {past ? <Check size={13} strokeWidth={2.4} /> : null}
              </span>
              <time className="day-date">
                <strong>{pick(day.date, lang)}</strong>
                <span>{pick(day.weekday, lang)}</span>
              </time>
              <div className="day-main">
                <h3>{pick(day.title, lang)}</h3>
                <p>{pick(day.focus, lang)}</p>
              </div>
              <p className="day-deliverable">
                <span className="mini-label">{t.challenge.deliverableLabel}</span>
                {pick(day.deliverable, lang)}
              </p>
              <p className="day-why">
                <Zap size={14} strokeWidth={1.8} />
                <span className="mini-label">{t.challenge.whyLabel}</span>
                {pick(day.why, lang)}
              </p>
            </article>
          );
        })}
      </div>
      </div>
    </section>
  );
}

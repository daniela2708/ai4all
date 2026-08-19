import type { CSSProperties } from "react";
import { ArrowRight, Check, CircleDashed, Radio, Sparkles } from "lucide-react";
import { pick, sessions, weeks, type Lang } from "../content";
import type { UICopy } from "../copy";
import { completedCount, fill, sessionState, useCountUp, useInView } from "../lib";

function Stat({ value, label }: { value: number; label: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const shown = useCountUp(value, seen);
  return (
    <div className="stat" ref={ref}>
      <strong>{shown}</strong>
      <span>{label}</span>
    </div>
  );
}

function StateBadge({ state, t }: { state: string; t: UICopy }) {
  if (state === "done") {
    return (
      <span className="state state-done">
        <Check size={12} strokeWidth={2.2} />
        {t.program.state.done}
      </span>
    );
  }
  if (state === "live") {
    return (
      <span className="state state-live">
        <Radio size={12} strokeWidth={2} />
        {t.program.state.live}
      </span>
    );
  }
  return (
    <span className="state state-next">
      <CircleDashed size={12} strokeWidth={1.8} />
      {t.program.state.scheduled}
    </span>
  );
}

export function Program({
  t,
  lang,
  now,
}: {
  t: UICopy;
  lang: Lang;
  now: Date;
}) {
  const done = completedCount(sessions, now);
  const progress = Math.round((done / sessions.length) * 100);

  return (
    <section className="program" id="programa">
      <header className="section-head">
        <span className="label">{t.program.label}</span>
        <div>
          <h2 className="display reveal">{t.program.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.program.lead}
          </p>
        </div>
      </header>

      <div className="program-top">
        <div className="stats reveal">
          {t.program.stats.map((stat) => (
            <Stat key={stat.k} value={stat.v} label={stat.k} />
          ))}
        </div>

        <div className="progress reveal" style={{ "--d": "100ms" } as CSSProperties}>
          <div className="progress-head">
            <span className="label">{t.program.progressLabel}</span>
            <strong>{fill(t.program.progressValue, { done })}</strong>
          </div>
          <div className="progress-track">
            <span
              className="progress-fill"
              style={{ "--w": `${progress}%` } as CSSProperties}
            />
          </div>
        </div>
      </div>

      <div className="outcomes reveal">
        <p className="outcomes-title">
          <Sparkles size={16} strokeWidth={1.7} />
          {t.program.outcomesTitle}
        </p>
        <ul>
          {t.program.outcomes.map((item, i) => (
            <li key={item} style={{ "--d": `${i * 50}ms` } as CSSProperties}>
              <Check size={14} strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="talks-menu">
        <div className="talks-head" aria-hidden="true">
          <span>#</span><span>{lang === "es" ? "FECHA" : "DATE"}</span><span>{lang === "es" ? "CHARLA" : "TALK"}</span><span>{t.program.liveLabel}</span><span>{t.program.deliverableLabel}</span>
        </div>
        <div className="session-list">
          {sessions.map((session, i) => {
                  const state = sessionState(session, now);
                  const week = weeks.find((item) => item.n === session.week);
                  return (
                    <article
                      className={`session is-${state} reveal`}
                      key={session.n}
                      style={{ "--d": `${i * 70}ms` } as CSSProperties}
                    >
                      <span className="session-num">{session.n}</span>
                      <time className="session-date">
                        <strong>{pick(session.date, lang)}</strong>
                        <span>{pick(session.weekday, lang)}</span>
                      </time>
                      <div className="session-body">
                        <span className="session-week">{t.program.weekLabel} {session.week} · {week ? pick(week.title, lang) : ""}</span>
                        <h4>{pick(session.title, lang)}</h4>
                      </div>
                      <p className="session-live">{pick(session.live, lang)}</p>
                      <p className="session-deliverable">
                        {pick(session.deliverable, lang)}
                      </p>
                      <div className="session-side">
                        <StateBadge state={state} t={t} />
                        {session.materials.length > 0 ? <a className="session-link" href="#biblioteca">{t.program.materialLabel}<ArrowRight size={11} strokeWidth={2} /></a> : null}
                      </div>
                    </article>
                  );
          })}
        </div>
      </div>
    </section>
  );
}

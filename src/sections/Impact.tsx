import type { CSSProperties } from "react";
import { CalendarCheck, Film, Target } from "lucide-react";
import type { UICopy } from "../copy";

export function Impact({ t }: { t: UICopy }) {
  return (
    <>
      <section className="impact" id="impacto">
        <div className="impact-copy">
          <span className="label">{t.impact.label}</span>
          <h2 className="display reveal">{t.impact.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.impact.lead}
          </p>

          <div className="how reveal">
            <p className="how-title">
              <Target size={16} strokeWidth={1.7} />
              {t.impact.howTitle}
            </p>
            <ol>
              {t.impact.how.map((item, i) => (
                <li key={item} style={{ "--d": `${i * 70}ms` } as CSSProperties}>
                  <em>{`0${i + 1}`}</em>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div className="demo-card reveal">
            <CalendarCheck size={22} strokeWidth={1.6} />
            <div>
              <span className="label">{t.impact.demoTag}</span>
              <strong>{t.impact.demoDate}</strong>
              <p>{t.impact.demoBody}</p>
            </div>
          </div>
        </div>

        <div className="metrics">
          {t.impact.metrics.map((metric, i) => (
            <div
              className={`metric${metric.v === "—" ? " is-pending" : ""} reveal`}
              key={metric.k}
              style={{ "--d": `${i * 100}ms` } as CSSProperties}
            >
              <strong>{metric.v}</strong>
              <span>{metric.k}</span>
            </div>
          ))}
          <p className="metrics-note reveal">{t.impact.metricsNote}</p>
        </div>
      </section>

      <section className="videos">
        <div className="videos-copy">
          <span className="label label-light">
            <Film size={14} strokeWidth={1.8} />
            {t.impact.videoLabel}
          </span>
          <h2 className="reveal">{t.impact.videoTitle}</h2>
          <p className="reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.impact.videoLead}
          </p>
        </div>

        <ol className="video-parts">
          {t.impact.videoParts.map((part, i) => (
            <li
              className="reveal"
              key={part.h}
              style={{ "--d": `${i * 90}ms` } as CSSProperties}
            >
              <span className="video-time">{part.t}</span>
              <strong>{part.h}</strong>
              <p>{part.d}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

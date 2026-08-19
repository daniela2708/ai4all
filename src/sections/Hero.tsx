import type { CSSProperties } from "react";
import { ArrowDown, ArrowRight, Radio } from "lucide-react";
import { pick, sessions, type Lang } from "../content";
import type { UICopy } from "../copy";
import { fill, nextSession } from "../lib";

function NextSession({ t, lang, now }: { t: UICopy; lang: Lang; now: Date }) {
  const next = nextSession(sessions, now);
  if (!next) {
    return (
      <div className="hero-next">
        <span className="hero-next-label">{t.hero.doneLabel}</span>
      </div>
    );
  }

  const when = next.live
    ? t.hero.liveLabel
    : next.days === 0
      ? t.hero.today
      : next.days === 1
        ? t.hero.tomorrow
        : fill(t.hero.inDays, { n: next.days });

  return (
    <div className={`hero-next${next.live ? " is-live" : ""}`}>
      <span className="hero-next-label">
        <Radio size={13} strokeWidth={1.8} />
        {next.live ? t.hero.liveLabel : t.hero.nextLabel}
      </span>
      <p className="hero-next-title">
        <em>{next.session.n}</em> {pick(next.session.title, lang)}
      </p>
      <p className="hero-next-meta">
        {pick(next.session.weekday, lang)} {pick(next.session.date, lang)} · 9:00
        <span className="hero-next-when">{when}</span>
      </p>
    </div>
  );
}

export function Hero({ t, lang, now }: { t: UICopy; lang: Lang; now: Date }) {
  return (
    <section className="hero" id="top">
      <div className="hero-signal" aria-hidden="true"><span /></div>
      <div className="hero-editorial">
        <div className="hero-inner">
        <p className="eyebrow hero-eyebrow">
          <span className="pulse" aria-hidden="true" />
          {t.hero.eyebrow}
        </p>

        <h1 className="hero-title">
          {t.hero.lines.map((line, i) => (
            <span
              className="hero-line"
              key={line}
              style={{ "--d": `${120 + i * 110}ms` } as CSSProperties}
            >
              {i === 2 ? <em>{line}</em> : line}
            </span>
          ))}
        </h1>

        <div className="hero-lower">
          <p className="hero-intro">{t.hero.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#programa">
              {t.hero.ctaPrimary}
              <ArrowRight size={16} strokeWidth={1.8} />
            </a>
            <a className="btn btn-ghost" href="#biblioteca">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <NextSession t={t} lang={lang} now={now} />
        </div>

        <div className="hero-hosts" aria-label={lang === "es" ? "Espacios para imágenes del programa" : "Program image placeholders"}>
          <div className="hero-host hero-host-1">
            <div className="hero-host-photo hero-image-primary"><span>{lang === "es" ? "IMAGEN PRINCIPAL" : "PRIMARY IMAGE"}</span></div>
            <p className="hero-image-note">public/hero/hero-01.jpg</p>
          </div>
          <div className="hero-host hero-host-2">
            <div className="hero-host-photo hero-image-secondary"><span>{lang === "es" ? "IMAGEN SECUNDARIA" : "SECONDARY IMAGE"}</span></div>
            <p className="hero-image-note">public/hero/hero-02.jpg</p>
          </div>
        </div>
      </div>

      <ul className="hero-meta">
        {t.hero.meta.map((item) => (
          <li key={item.k}>
            <span>{item.k}</span>
            <strong>{item.v}</strong>
          </li>
        ))}
      </ul>

      <a className="scroll-cue" href="#por-que">
        <ArrowDown size={15} strokeWidth={1.8} />
        {t.hero.scroll}
      </a>
    </section>
  );
}

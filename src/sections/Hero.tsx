import type { CSSProperties } from "react";
import { ArrowDown, ArrowRight, Radio } from "lucide-react";
import primaryPhoto from "../../Fotos/trabajo-colaborativo-en-portatiles.jpeg";
import secondaryPhoto from "../../Fotos/practica-chatgpt-en-equipo.jpeg";
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
        {pick(next.session.weekday, lang)} {pick(next.session.date, lang)} · 15:00
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

        <div className="hero-hosts" aria-label={t.hero.hostsLabel}>
          <div className="hero-host hero-host-1">
            <div
              className="hero-host-photo hero-image-primary"
              role="img"
              aria-label={t.hero.imagePrimary}
              style={{
                backgroundImage: `linear-gradient(145deg, rgba(233, 61, 68, 0.25), rgba(186, 34, 41, 0.08)), url("${primaryPhoto}")`,
              }}
            >
              <span>{t.hero.imagePrimary}</span>
            </div>
            <p className="hero-image-note">AI4ALL / BOGOTÁ / 2026</p>
          </div>
          <div className="hero-host hero-host-2">
            <div
              className="hero-host-photo hero-image-secondary"
              role="img"
              aria-label={t.hero.imageSecondary}
              style={{
                backgroundImage: `linear-gradient(145deg, rgba(33, 30, 30, 0.22), rgba(33, 30, 30, 0.04)), url("${secondaryPhoto}")`,
              }}
            >
              <span>{t.hero.imageSecondary}</span>
            </div>
            <p className="hero-image-note">PEOPLE/OPS / HANDS-ON</p>
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

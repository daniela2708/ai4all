import { useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  Download,
  FileText,
  Lock,
  MonitorPlay,
  Presentation,
  Sparkles,
  Table2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { pick, sessions, type Lang, type MaterialKind } from "../content";
import type { UICopy } from "../copy";
import { isExternal, safeHref, sessionState } from "../lib";

const KIND_ICONS: Record<MaterialKind, LucideIcon> = {
  slides: Presentation,
  recording: MonitorPlay,
  artifact: Sparkles,
  template: Table2,
};

export function Library({
  t,
  lang,
  now,
}: {
  t: UICopy;
  lang: Lang;
  now: Date;
}) {
  const [filter, setFilter] = useState<"all" | MaterialKind>("all");

  const visible =
    filter === "all"
      ? sessions
      : sessions.filter((session) =>
          session.materials.some((material) => material.kind === filter),
        );

  return (
    <section className="library" id="biblioteca">
      <header className="section-head">
        <span className="label">{t.library.label}</span>
        <div>
          <h2 className="display reveal">{t.library.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.library.lead}
          </p>
        </div>
      </header>

      <div className="filters reveal">
        {t.library.filters.map((option) => (
          <button
            key={option.id}
            type="button"
            className={filter === option.id ? "is-active" : ""}
            onClick={() => setFilter(option.id as "all" | MaterialKind)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="library-empty reveal">
          <Lock size={15} strokeWidth={1.7} />
          {t.library.empty}
        </p>
      ) : (
        <div className="material-grid">
          {visible.map((session, i) => {
            const hasMaterial = session.materials.length > 0;
            const state = sessionState(session, now);
            return (
              <article
                className={`material${hasMaterial ? " is-ready" : ""} reveal`}
                key={session.n}
                style={{ "--d": `${(i % 4) * 70}ms` } as CSSProperties}
              >
                <div className="material-cover">
                  <span className="material-num">{session.n}</span>
                  <span className="material-week">
                    {t.program.weekLabel} {String(session.week).padStart(2, "0")}
                  </span>
                  <span className="material-badge">
                    {hasMaterial ? t.library.available : t.library.reserved}
                  </span>
                  <FileText
                    className="material-watermark"
                    size={120}
                    strokeWidth={0.6}
                    aria-hidden="true"
                  />
                </div>

                <div className="material-body">
                  <time>
                    {pick(session.date, lang)} · {t.program.state[state]}
                  </time>
                  <h3>{pick(session.title, lang)}</h3>

                  {hasMaterial ? (
                    <ul className="material-links">
                      {session.materials.map((material) => {
                        const href = safeHref(material.href);
                        if (!href) return null;
                        const Glyph = KIND_ICONS[material.kind];
                        const external = isExternal(material.href);
                        return (
                          <li key={material.href}>
                            <a
                              href={href}
                              {...(external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : { download: true })}
                            >
                              <Glyph size={14} strokeWidth={1.7} />
                              {pick(material.label, lang)}
                              {external ? (
                                <ArrowUpRight size={13} strokeWidth={1.8} />
                              ) : (
                                <Download size={13} strokeWidth={1.8} />
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="material-soon">{t.program.materialSoon}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      <p className="library-note reveal">
        <span className="dot" aria-hidden="true" />
        {t.library.note}
      </p>
    </section>
  );
}

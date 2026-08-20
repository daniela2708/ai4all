import { useEffect, useState, type CSSProperties } from "react";
import { ArrowUp, Globe2, Menu, X } from "lucide-react";
import type { Lang } from "./content";
import { copy } from "./copy";
import { Brand } from "./icons";
import { useNow, useReveal, useScrollProgress } from "./lib";
import { Hero } from "./sections/Hero";
import { Manifesto, Why } from "./sections/Story";
import { Model } from "./sections/Model";
import { Program } from "./sections/Program";
import { Method } from "./sections/Method";
import { Cases } from "./sections/Cases";
import { Challenge } from "./sections/Challenge";
import { Library } from "./sections/Library";
import { Team } from "./sections/Team";
import { Impact } from "./sections/Impact";
import { Ops, Responsible } from "./sections/Ops";

export default function App() {
  const [lang, setLang] = useState<Lang>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const now = useNow();
  const progress = useScrollProgress();
  const t = copy[lang];

  useReveal();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <header className="site-header">
        <Brand />

        <nav className={`site-nav${menuOpen ? " is-open" : ""}`}>
          {t.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label={t.langLabel}
          >
            <Globe2 size={14} strokeWidth={1.8} />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.menuLabel}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <span
          className="header-progress"
          style={{ "--p": progress } as CSSProperties}
          aria-hidden="true"
        />
      </header>

      <main>
        <Hero t={t} lang={lang} now={now} />
        <Team t={t} lang={lang} />
        <Impact t={t} />
        <Manifesto t={t} />
        <Model t={t} />
        <Why t={t} />
        <Method t={t} />
        <Cases t={t} />
        <div className="phase-divider phase-divider-one">
          <span>{t.dividers.one.tag}</span>
          <strong>{t.dividers.one.title}</strong>
          <p>{t.dividers.one.body}</p>
        </div>
        <Program t={t} lang={lang} now={now} />
        <div className="phase-divider phase-divider-two">
          <span>{t.dividers.two.tag}</span>
          <strong>{t.dividers.two.title}</strong>
          <p>{t.dividers.two.body}</p>
        </div>
        <Challenge t={t} lang={lang} now={now} />
        <Library t={t} lang={lang} now={now} />
        <Ops t={t} lang={lang} />
        <Responsible t={t} />
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <Brand />
          <p className="footer-tagline">{t.footer.tagline}</p>
          <a className="footer-up" href="#top">
            {t.footer.backToTop}
            <ArrowUp size={14} strokeWidth={1.8} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.internal}</span>
          <span>{t.footer.confidential}</span>
          <span>{t.footer.rights}</span>
        </div>
      </footer>
    </>
  );
}

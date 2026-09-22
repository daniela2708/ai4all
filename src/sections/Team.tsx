import type { CSSProperties } from "react";
import { CalendarDays, MapPin, Users } from "lucide-react";
import cohortPhoto from "../../Fotos/prototipado-web-en-equipo.jpeg";
import { people, pick, type Lang } from "../content";
import type { UICopy } from "../copy";

export function Team({ t, lang }: { t: UICopy; lang: Lang }) {
  return (
    <section className="team" id="equipo">
      <header className="section-head">
        <span className="label">{t.team.label}</span>
        <div>
          <h2 className="display reveal">{t.team.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.team.lead}
          </p>
        </div>
      </header>

      <div className="people">
        {people.map((person, i) => (
          <article
            className="person card-hover reveal"
            key={person.name}
            style={{ "--d": `${i * 110}ms` } as CSSProperties}
          >
            <div className="person-top">
              <img src={person.photo} alt={person.name} loading="lazy" />
              <span className="person-phase">{pick(person.phase, lang)}</span>
            </div>
            <h3>{person.name}</h3>
            <p className="person-role">{pick(person.role, lang)}</p>
            <p className="person-leads">
              <span className="mini-label">{t.team.leadsLabel}</span>
              {pick(person.leads, lang)}
            </p>
            <p className="person-body">{pick(person.contribution, lang)}</p>
          </article>
        ))}

        <article
          className="group-card reveal"
          style={{ "--d": "220ms" } as CSSProperties}
        >
          <div className="group-story">
            <img
              className="group-story-photo"
              src={cohortPhoto}
              alt={t.team.groupPhotoAlt}
              loading="lazy"
            />
            <div className="group-head">
              <span className="label label-light">
                <Users size={14} strokeWidth={1.8} />
                {t.team.groupLabel}
              </span>
              <span className="group-place">
                <MapPin size={13} strokeWidth={1.8} />
                {t.team.groupPlace}
              </span>
            </div>
            <h3>{t.team.groupName}</h3>
            <p>{t.team.groupBody}</p>
          </div>

          <div className="group-stats">
            {t.team.groupStats.map((stat) => (
              <div key={stat.k}>
                <strong>{stat.v}</strong>
                <span>{stat.k}</span>
              </div>
            ))}
          </div>

          <div className="group-closing">
            <CalendarDays size={15} strokeWidth={1.7} />
            <div>
              <span className="mini-label">{t.team.closingLabel}</span>
              <p>{t.team.closingBody}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

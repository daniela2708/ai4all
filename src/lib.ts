import { useEffect, useRef, useState } from "react";
import type { ChallengeDay, Session } from "./content";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Reloj compartido: la web refleja el estado real del programa sin recargar. */
export function useNow(intervalMs = 60_000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}

/** Revela con scroll cualquier elemento marcado con `.reveal`, incluido el
 *  contenido que aparece después (filtros de la biblioteca, cambio de idioma). */
export function useReveal() {
  useEffect(() => {
    const pending = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));

    if (prefersReducedMotion()) {
      const show = () => pending().forEach((node) => node.classList.add("in"));
      show();
      const mutations = new MutationObserver(show);
      mutations.observe(document.body, { childList: true, subtree: true });
      return () => mutations.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    const scan = () => pending().forEach((node) => observer.observe(node));
    scan();

    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);
}

/** Devuelve true la primera vez que el elemento entra en pantalla. */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || seen) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [seen]);

  return { ref, seen };
}

/** Cuenta de 0 al objetivo cuando el bloque entra en pantalla. */
export function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    let frame = 0;
    const started = performance.now();
    const tick = (time: number) => {
      const progress = Math.min(1, (time - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

/** Progreso de lectura, usado por la línea del header. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

/* ----------------------------- Estado del programa ----------------------------- */

export type SessionState = "done" | "live" | "next" | "scheduled";

export function sessionState(session: Session, now: Date): SessionState {
  const start = new Date(session.start).getTime();
  const end = new Date(session.end).getTime();
  const time = now.getTime();
  if (time >= end) return "done";
  if (time >= start) return "live";
  return "scheduled";
}

export function nextSession(sessions: Session[], now: Date) {
  const time = now.getTime();
  const live = sessions.find(
    (session) =>
      time >= new Date(session.start).getTime() &&
      time < new Date(session.end).getTime(),
  );
  if (live) return { session: live, live: true, days: 0 };

  const upcoming = sessions.find(
    (session) => new Date(session.start).getTime() > time,
  );
  if (!upcoming) return null;

  const days = Math.ceil(
    (new Date(upcoming.start).getTime() - time) / 86_400_000,
  );
  return { session: upcoming, live: false, days: Math.max(0, days) };
}

export function completedCount(sessions: Session[], now: Date) {
  return sessions.filter((session) => sessionState(session, now) === "done")
    .length;
}

export function dayIsPast(day: ChallengeDay, now: Date) {
  return now.getTime() > new Date(day.start).getTime() + 2 * 3_600_000;
}

export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));

/** Solo se enlaza lo que es seguro enlazar: rutas propias o http(s). */
export function safeHref(href: string) {
  const value = href.trim();
  if (value.startsWith("/") || value.startsWith("#")) return value;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

export const isExternal = (href: string) => /^https?:/i.test(href.trim());

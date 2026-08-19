import {
  Award,
  BarChart3,
  Clock3,
  Hand,
  HeartHandshake,
  MessagesSquare,
  Network,
  PenLine,
  Repeat,
  Shapes,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  UserCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Un solo set de iconos, mismo grosor de trazo, sin emojis. */
const registry: Record<string, LucideIcon> = {
  users: Users,
  chart: BarChart3,
  target: Target,
  timer: Timer,
  retention: UserCheck,
  repeat: Repeat,
  quality: Award,
  satisfaction: HeartHandshake,
  pen: PenLine,
  sparkles: Sparkles,
  shapes: Shapes,
  share: MessagesSquare,
  network: Network,
  clock: Clock3,
  shield: ShieldCheck,
  hand: Hand,
};

export function Icon({
  name,
  size = 18,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Glyph = registry[name] ?? Sparkles;
  return <Glyph size={size} strokeWidth={1.6} className={className} aria-hidden="true" />;
}

/** Marca de la iniciativa: logo oficial sin alterar, más el lockup tipográfico. */
export function Brand({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <a href="#top" className={`brand brand-${tone}`} aria-label="AI4All">
      <img src="/wizeline.svg" alt="Wizeline" />
      <span className="brand-rule" aria-hidden="true" />
      <strong>
        AI<span>4</span>ALL
      </strong>
    </a>
  );
}

/** Señal de datos: motivo gráfico de marca para separar bloques. */
export function SignalDivider({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const line = tone === "ink" ? "rgba(252,251,245,.22)" : "rgba(33,30,30,.16)";
  return (
    <div className={`signal signal-${tone}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
        <path id="signal-path" d="M0 20H430l26-13 26 26 26-13h236l26-13 26 26 26-13h378" fill="none" stroke={line} strokeWidth="1" />
        <circle r="3.5" fill="#E93D44" className="signal-dot">
          <animateMotion dur="7s" repeatCount="indefinite">
            <mpath href="#signal-path" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

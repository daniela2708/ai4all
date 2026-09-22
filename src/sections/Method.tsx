import { useEffect, useState, type CSSProperties } from "react";
import { X } from "lucide-react";
import { Icon, SignalDivider } from "../icons";
import type { UICopy } from "../copy";

export function Method({ t }: { t: UICopy }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const selectedStep = activeStep === null ? null : t.method.steps[activeStep];

  useEffect(() => {
    if (activeStep === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveStep(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeStep]);

  return (
    <section className="method" id="metodo">
      <SignalDivider tone="ink" />
      <header className="section-head section-head-light">
        <span className="label label-light">{t.method.label}</span>
        <div>
          <h2 className="display reveal">{t.method.title}</h2>
          <p className="lead reveal" style={{ "--d": "80ms" } as CSSProperties}>
            {t.method.lead}
          </p>
        </div>
      </header>

      <ol className="steps" aria-label={t.method.title}>
        {t.method.steps.map((step, i) => (
          <li
            className="step reveal"
            key={step.n}
            style={{ "--d": `${i * 110}ms` } as CSSProperties}
          >
            <button type="button" className="step-trigger" onClick={() => setActiveStep(i)} aria-haspopup="dialog">
              <span className="step-orbit" aria-hidden="true">
                <span className="step-num">{step.n}</span>
                <span className="step-icon"><Icon name={step.icon} size={28} /></span>
              </span>
              <span className="step-title">{step.title}</span>
              <span className="step-hint">{t.method.openLabel}</span>
            </button>
          </li>
        ))}
      </ol>

      {selectedStep ? (
        <div className="method-modal" role="dialog" aria-modal="true" aria-labelledby="method-modal-title" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setActiveStep(null);
        }}>
          <div className="method-modal-card">
            <button type="button" className="method-modal-close" onClick={() => setActiveStep(null)} aria-label={t.method.closeLabel} autoFocus>
              <X size={19} />
            </button>
            <span className="method-modal-kicker">{selectedStep.n} / 04</span>
            <span className="method-modal-icon" aria-hidden="true"><Icon name={selectedStep.icon} size={34} /></span>
            <h3 id="method-modal-title">{selectedStep.title}</h3>
            <p>{selectedStep.body}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

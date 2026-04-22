import { useEffect, useRef, useState } from 'react';

const DIVIDER = '1px solid rgba(255,255,255,0.15)';
const LINE_COLOR = 'rgba(255,255,255,0.055)';

const variables = [
  { symbol: 'E',  label: 'Éxito' },
  { symbol: 'P',  label: 'Procesos y Tecnología Clave' },
  { symbol: 'ΔT', label: 'Transformación' },
  { symbol: 'n',  label: 'Grado de Elevación Organizacional' },
];

export function TheFormula() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const vis = (delayMs: number): React.CSSProperties => ({
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.6s cubic-bezier(0.25,0,0,1) ${delayMs}ms, transform 0.6s cubic-bezier(0.25,1,0.5,1) ${delayMs}ms`,
  });

  return (
    <section
      ref={sectionRef}
      id="formula-exito"
      aria-label="Fórmula del Éxito"
      style={{
        backgroundColor: 'var(--henka-navy)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 0,
        padding: '48px 0',
      }}
    >
      {/* Blueprint grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${LINE_COLOR} 1px, transparent 1px),
            linear-gradient(90deg, ${LINE_COLOR} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          opacity: revealed ? 1 : 0,
          transition: 'opacity 1.2s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Top edge separator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '1px',
          backgroundColor: 'rgba(255,255,255,0.08)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content wrapper ── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 max(32px, 5vw)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section header / eyebrow */}
        <div
          style={{
            ...vis(60),
            fontFamily: 'var(--font-open-sans)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '3px',
            color: '#84bd2a',
            textTransform: 'uppercase' as const,
            marginBottom: '24px',
          }}
        >
          La Fórmula del Éxito
        </div>

        {/* ── Two-column block ── */}
        <div
          className="formula-block"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: DIVIDER,
            borderRadius: 0,
            marginBottom: '28px',
            overflow: 'hidden',
          }}
        >
          {/* LEFT — equation, vertically centered */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px 32px',
              borderRight: DIVIDER,
              borderRadius: 0,
            }}
          >
            <div
              role="img"
              aria-label="E igual a paréntesis P más delta T paréntesis elevado a la n"
              className="equation-display"
              style={{
                fontFamily: 'var(--font-math)',
                fontSize: 'clamp(40px, 6vw, 96px)',
                lineHeight: 1.05,
                userSelect: 'none',
                whiteSpace: 'nowrap' as const,
              }}
            >
              <span style={{ ...vis(160), display: 'inline-block', fontStyle: 'italic', color: '#ffffff' }}>
                E
              </span>
              <span style={{ ...vis(230), display: 'inline-block', color: 'rgba(255,255,255,0.3)', margin: '0 0.1em' }}>
                =
              </span>
              <span style={{ ...vis(300), display: 'inline-block', color: 'rgba(255,255,255,0.3)' }}>
                (
              </span>
              <span style={{ ...vis(370), display: 'inline-block', fontStyle: 'italic', color: '#84bd2a' }}>
                P
              </span>
              <span style={{ ...vis(430), display: 'inline-block', color: 'rgba(255,255,255,0.3)', margin: '0 0.07em' }}>
                +
              </span>
              <span style={{ ...vis(490), display: 'inline-block', fontStyle: 'italic', color: '#84bd2a' }}>
                ΔT
              </span>
              <span style={{ ...vis(550), display: 'inline-block', color: 'rgba(255,255,255,0.3)' }}>
                )
              </span>
              <sup
                style={{
                  display: 'inline-block',
                  fontSize: '0.46em',
                  fontStyle: 'italic',
                  color: '#ffffff',
                  verticalAlign: 'super',
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'scale(1) translateY(0)' : 'scale(0.3) translateY(6px)',
                  transition: 'opacity 0.4s cubic-bezier(0.25,0,0,1) 640ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) 640ms',
                }}
              >
                n
              </sup>
            </div>
          </div>

          {/* RIGHT — 2×2 variable legend */}
          <div
            className="formula-vars"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              borderRadius: 0,
            }}
          >
            {variables.map((v, i) => {
              const isLeftCol  = i % 2 === 0;
              const isTopRow   = i < 2;
              return (
                <div
                  key={v.symbol}
                  style={{
                    ...vis(580 + i * 80),
                    padding: '28px 24px',
                    borderRight:  isLeftCol ? DIVIDER : 'none',
                    borderBottom: isTopRow  ? DIVIDER : 'none',
                    borderRadius: 0,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-math)',
                      fontSize: 'clamp(20px, 2.2vw, 32px)',
                      fontStyle: 'italic',
                      color: '#84bd2a',
                      lineHeight: 1,
                      marginBottom: '8px',
                    }}
                  >
                    {v.symbol}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.5,
                    }}
                  >
                    {v.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom insight — full width, centered */}
        <div style={{ ...vis(960), textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'clamp(14px, 1.5vw, 19px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Cuando eleva el potencial de su gente, el crecimiento de su empresa{' '}
            <strong style={{ fontWeight: 700, color: '#ffffff' }}>
              no solo suma, se vuelve exponencial.
            </strong>
          </p>
        </div>
      </div>

      <style>{`
        /* Tablet/mobile: stack equation above legend */
        @media (max-width: 767px) {
          .formula-block {
            grid-template-columns: 1fr !important;
          }
          .formula-block > div:first-child {
            border-right: none !important;
            border-bottom: ${DIVIDER} !important;
            padding: 32px 24px !important;
          }
          .equation-display {
            font-size: clamp(44px, 12vw, 80px) !important;
          }
          .formula-vars {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        /* Small mobile: vars go single column */
        @media (max-width: 420px) {
          .formula-vars {
            grid-template-columns: 1fr !important;
          }
          .formula-vars > div {
            border-right: none !important;
          }
          .formula-vars > div:nth-child(odd) {
            border-right: none !important;
          }
          .formula-vars > div:last-child {
            border-bottom: none !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #formula-exito * {
            transition: opacity 0.1ms !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

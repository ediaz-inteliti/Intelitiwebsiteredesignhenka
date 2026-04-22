import { useEffect, useRef, useState } from 'react';

export function FormulaExitoSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const LINE_COLOR = 'rgba(255,255,255,0.055)';

  const variables = [
    { symbol: 'E', label: 'Éxito' },
    { symbol: 'P', label: 'Procesos y Tecnología Clave' },
    { symbol: 'ΔT', label: 'Transformación' },
    { symbol: 'n', label: 'Grado de Elevación Organizacional' },
  ];

  // Helper: base slide-up + fade transition style
  const vis = (delayMs: number): React.CSSProperties => ({
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 0.65s ease ${delayMs}ms, transform 0.65s cubic-bezier(0.25,1,0.5,1) ${delayMs}ms`,
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
        padding: '120px 0 128px',
      }}
    >
      {/* Blueprint grid — signature brand texture on dark sections */}
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

      {/* Top edge: thin separator line from the white section above */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '1px',
          backgroundColor: 'rgba(11,51,76,0.18)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 max(32px, 5vw)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            ...vis(80),
            fontFamily: 'var(--font-open-sans)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '3px',
            color: '#84bd2a',
            textTransform: 'uppercase' as const,
            marginBottom: '56px',
          }}
        >
          La Fórmula del Éxito
        </div>

        {/* Formula: E = (P+ΔT)ⁿ */}
        <div
          role="img"
          aria-label="E igual a paréntesis P más delta T paréntesis elevado a la n"
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: 'clamp(60px, 10.5vw, 148px)',
            lineHeight: 1.05,
            marginBottom: '64px',
            userSelect: 'none',
          }}
        >
          {/* E */}
          <span
            style={{
              ...vis(180),
              display: 'inline-block',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            E
          </span>

          {/* = */}
          <span
            style={{
              ...vis(260),
              display: 'inline-block',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.32)',
              margin: '0 0.08em',
            }}
          >
            =
          </span>

          {/* ( */}
          <span
            style={{
              ...vis(340),
              display: 'inline-block',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.32)',
            }}
          >
            (
          </span>

          {/* P */}
          <span
            style={{
              ...vis(420),
              display: 'inline-block',
              fontWeight: 700,
              color: '#84bd2a',
            }}
          >
            P
          </span>

          {/* + */}
          <span
            style={{
              ...vis(490),
              display: 'inline-block',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.32)',
              margin: '0 0.07em',
            }}
          >
            +
          </span>

          {/* ΔT */}
          <span
            style={{
              ...vis(560),
              display: 'inline-block',
              fontWeight: 700,
              color: '#84bd2a',
            }}
          >
            ΔT
          </span>

          {/* ) */}
          <span
            style={{
              ...vis(630),
              display: 'inline-block',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.32)',
            }}
          >
            )
          </span>

          {/* ⁿ — superscript: pops in with a scale kick */}
          <sup
            style={{
              display: 'inline-block',
              fontSize: '0.46em',
              fontWeight: 700,
              color: '#ffffff',
              verticalAlign: 'super',
              opacity: revealed ? 1 : 0,
              transform: revealed
                ? 'scale(1) translateY(0)'
                : 'scale(0.35) translateY(6px)',
              transition:
                'opacity 0.4s ease 720ms, transform 0.5s cubic-bezier(0.22,1.5,0.36,1) 720ms',
            }}
          >
            n
          </sup>
        </div>

        {/* Variable legend */}
        <div
          className="formula-vars"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            marginBottom: '80px',
          }}
        >
          {variables.map((v, i) => (
            <div
              key={v.symbol}
              style={{
                ...vis(680 + i * 90),
                padding: '28px 24px',
                paddingLeft: i === 0 ? '0' : '24px',
                borderRight:
                  i < variables.length - 1
                    ? '1px solid rgba(255,255,255,0.12)'
                    : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: 'clamp(22px, 2.4vw, 34px)',
                  fontWeight: 700,
                  color: '#84bd2a',
                  lineHeight: 1,
                  marginBottom: '10px',
                }}
              >
                {v.symbol}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.58)',
                  lineHeight: 1.5,
                }}
              >
                {v.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div style={{ ...vis(1060), maxWidth: '740px' }}>
          <p
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'clamp(18px, 2.1vw, 26px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.55,
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
        /* Tablet: 2-column variable grid */
        @media (max-width: 768px) {
          .formula-vars {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .formula-vars > div {
            border-right: none !important;
          }
          .formula-vars > div:nth-child(odd) {
            padding-left: 0 !important;
            border-right: 1px solid rgba(255,255,255,0.12) !important;
          }
          .formula-vars > div:nth-child(even) {
            padding-left: 24px !important;
          }
          .formula-vars > div:nth-child(-n+2) {
            border-bottom: 1px solid rgba(255,255,255,0.12);
            padding-bottom: 28px;
          }
          .formula-vars > div:nth-child(n+3) {
            padding-top: 28px;
          }
        }

        /* Mobile: single column */
        @media (max-width: 480px) {
          .formula-vars {
            grid-template-columns: 1fr !important;
          }
          .formula-vars > div {
            padding-left: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.12) !important;
          }
          .formula-vars > div:last-child {
            border-bottom: none !important;
          }
        }

        /* Respect user motion preferences */
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

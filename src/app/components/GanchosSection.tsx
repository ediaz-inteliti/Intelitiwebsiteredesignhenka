import { useState } from 'react';
import { Globe, Users, Building2, Target, BarChart3, TrendingUp } from 'lucide-react';

export function GanchosSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const ganchos = [
    { question: '¿Está su empresa realmente preparada para el cambio digital?', icon: Globe },
    { question: '¿Sus líderes cuentan con las herramientas para guiar la reinvención?', icon: Users },
    { question: '¿Es su cultura organizacional una aliada o un obstáculo?', icon: Building2 },
    { question: '¿Cómo garantiza que su equipo adopte nuevas metodologías?', icon: Target },
    { question: '¿Mide el impacto real de sus procesos de transformación?', icon: BarChart3 },
    { question: '¿Sus proyectos de cambio logran resultados sostenibles?', icon: TrendingUp },
  ];

  const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';

  // Vertical line percentages within the container (0%, 33.33%, 66.67%, 100%)
  const vLinePcts = [0, 33.3333, 66.6667, 100];
  // Horizontal line indices: top, middle, bottom
  const hLineKeys = ['top', 'middle', 'bottom'];

  return (
    <section
      id="ganchos"
      style={{ backgroundColor: '#ffffff', paddingTop: '48px', paddingBottom: '0px' }}
    >
      {/* Grid zone — relative wrapper */}
      <div className="effica-zone" style={{ position: 'relative' }}>

        {/* === HORIZONTAL LINES — removed full-viewport top/bottom, now inside container === */}

        {/* === VERTICAL LINES + H-LINES — aligned to container === */}
        {/* This ghost container mirrors the content grid's maxWidth & padding */}
        <div
          className="effica-lines-container"
          style={{
            position: 'absolute',
            inset: 0,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 max(32px, 5vw)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {/* Inner positioned frame matching the grid area */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>

            {/* Top horizontal line — trimmed to grid width */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '1px',
                backgroundColor: LINE_COLOR,
              }}
            />

            {/* Bottom horizontal line — trimmed to grid width */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '1px',
                backgroundColor: LINE_COLOR,
              }}
            />

            {/* 4 Vertical lines spanning full section height */}
            {vLinePcts.map((xPct, i) => (
              <div
                key={`vl-${i}`}
                className="effica-vline"
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${xPct}%`,
                  width: '1px',
                  backgroundColor: LINE_COLOR,
                }}
              />
            ))}

            {/* Middle horizontal line — trimmed to grid width */}
            <div
              className="effica-hline-mid"
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: '100%',
                height: '1px',
                backgroundColor: LINE_COLOR,
              }}
            />
          </div>
        </div>

        {/* === CONTENT GRID — within 1200px container === */}
        <div
          className="effica-content-grid"
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, auto)',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 max(32px, 5vw)',
          }}
        >
          {ganchos.map((gancho, index) => {
            const IconComponent = gancho.icon;
            const isHovered = hoveredIndex === index;
            const label = String(index + 1).padStart(2, '0');

            return (
              <div
                key={index}
                className="effica-cell transition-colors duration-300"
                style={{
                  padding: '48px',
                  position: 'relative',
                  backgroundColor: isHovered ? '#f4f6f9' : 'transparent',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon — top-left */}
                <div
                  className="transition-transform duration-300"
                  style={{
                    marginBottom: '24px',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transformOrigin: 'top left',
                  }}
                >
                  <IconComponent
                    size={28}
                    strokeWidth={1.5}
                    style={{ color: '#84bd2a' }}
                  />
                </div>

                {/* Question text */}
                <p
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#0b334c',
                    lineHeight: 1.4,
                    letterSpacing: '-0.2px',
                    margin: 0,
                  }}
                >
                  {gancho.question}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 70% Impact Statement — Technical Data Module */}
      <div
        style={{
          backgroundColor: '#f4f6f9',
          marginTop: '80px',
          position: 'relative',
        }}
      >
        {/* Top full-width 1px line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100vw',
            height: '1px',
            backgroundColor: 'rgba(11, 51, 76, 0.15)',
          }}
        />

        <div
          className="mx-auto"
          style={{ maxWidth: '1200px', padding: '80px max(32px, 5vw)' }}
        >
          {/* Value — 96px Bold Green */}
          <div
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'clamp(64px, 10vw, 96px)',
              fontWeight: 700,
              color: '#84bd2a',
              lineHeight: '1',
              letterSpacing: '-3px',
              textAlign: 'left',
              marginBottom: '24px',
            }}
          >
            70%
          </div>

          {/* Description — 24px Regular, max-width 600px */}
          <p
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'clamp(18px, 2vw, 24px)',
              fontWeight: 400,
              color: '#0b334c',
              lineHeight: '1.5',
              maxWidth: '600px',
              margin: '0',
              textAlign: 'left',
            }}
          >
            de las empresas que{' '}
            <span style={{ fontWeight: 700, color: '#82bd23' }}>
              no implementan
            </span>{' '}
            gestión del cambio tienen una tasa de{' '}
            <span style={{ fontWeight: 700, color: '#82bd23' }}>
              fracaso crítica
            </span>{' '}
            en sus proyectos.
          </p>
        </div>

        {/* Bottom full-width 1px line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100vw',
            height: '1px',
            backgroundColor: 'rgba(11, 51, 76, 0.15)',
          }}
        />
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Tablet: simplify to bordered cells */
        @media (max-width: 900px) {
          .effica-content-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .effica-cell {
            padding: 36px !important;
            border-bottom: 1px solid rgba(11, 51, 76, 0.15);
          }
          .effica-cell:nth-child(odd) {
            border-right: 1px solid rgba(11, 51, 76, 0.15);
          }
          /* Hide infinite lines infrastructure */
          .effica-zone > div:first-child,
          .effica-zone > div:nth-child(2),
          .effica-lines-container {
            display: none !important;
          }
          .effica-zone {
            border-top: 1px solid rgba(11, 51, 76, 0.15);
          }
        }

        /* Mobile: single column */
        @media (max-width: 560px) {
          .effica-content-grid {
            grid-template-columns: 1fr !important;
          }
          .effica-cell {
            padding: 32px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(11, 51, 76, 0.15) !important;
          }
          .effica-cell:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
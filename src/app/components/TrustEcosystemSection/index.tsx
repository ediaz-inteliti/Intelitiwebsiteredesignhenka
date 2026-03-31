import { SectionHeader } from '../SectionHeader';


const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';

const clients = [
  { name: 'Pfizer', url: 'https://henkaconsulting.com/app/uploads/2021/05/pfizer-1.jpg' },
  { name: 'P&G', url: 'https://henkaconsulting.com/app/uploads/2021/06/PROCTER-181x138-1.png' },
  { name: 'PepsiCo', url: 'https://henkaconsulting.com/app/uploads/2021/06/PepsiCo.jpg' },
  { name: 'Banistmo', url: 'https://henkaconsulting.com/app/uploads/2021/05/banistmo-logo-1-1.jpg' },
  { name: 'Atlas', url: 'https://henkaconsulting.com/app/uploads/2021/05/atlas.jpg' },
];

const dataNodes = [
  { top: '35%', left: '25%', label: 'NORTEAMÉRICA' },
  { top: '65%', left: '32%', label: 'LATINOAMÉRICA' },
  { top: '28%', left: '50%', label: 'EUROPA' },
  { top: '48%', left: '72%', label: 'ASIA-PAC' },
];

export function TrustEcosystemSection() {
  return (
    <section id="trust-ecosystem" style={{ overflowX: 'hidden' }}>
      {/* === GLOBAL IMPACT — Map + Text + Logo Band === */}
      <div style={{ backgroundColor: '#ffffff', paddingTop: '64px', paddingBottom: '0' }}>

        {/* Eyebrow + Hairline — unified SectionHeader component */}
        <SectionHeader label="RESULTADOS & CONFIANZA" />

        {/* Spacer after hairline */}
        <div style={{ height: '48px' }} />

        {/* Main row: Map (expanded left) + Text (flush-right) */}
        <div
          className="mx-auto px-8"
          style={{ maxWidth: '1200px' }}
        >
          <div
            className="trust-main-row"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '64px',
              marginBottom: '48px',
            }}
          >
            {/* Map — fills all available space */}
            <div
              className="trust-map-container"
              style={{
                position: 'relative',
                flex: '1 1 0%',
                minWidth: 0,
                overflow: 'visible',
              }}
            >
              <img
                src="/map.svg"
                alt="Mapa de alcance global de Henka Consulting"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  minHeight: '280px',
                  maxHeight: '450px',
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  borderRadius: '0px',
                }}
              />

              {/* Data nodes */}
              {dataNodes.map((node, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    top: node.top,
                    left: node.left,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-6px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(132, 189, 42, 0.15)',
                      animation: 'trustNodePulse 2.4s ease-in-out infinite',
                    }}
                  />
                  <div
                    style={{
                      position: 'relative',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#84bd2a',
                      borderRadius: '50%',
                      boxShadow:
                        '0 0 0 2px #ffffff, 0 0 10px 3px rgba(132, 189, 42, 0.65)',
                      zIndex: 1,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Text block — flush-right */}
            <div
              className="trust-text-block"
              style={{ flexShrink: 0, textAlign: 'right' }}
            >
              <h2
                className="trust-title-brand"
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: 'clamp(48px, 5vw, 72px)',
                  fontWeight: 800,
                  color: '#0b334c',
                  lineHeight: '1.05',
                  letterSpacing: '-2px',
                  textAlign: 'right',
                  margin: 0,
                }}
              >
                Henka
              </h2>
              <span
                className="trust-title-subtitle"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: 'clamp(32px, 3.3vw, 48px)',
                  fontWeight: 300,
                  color: '#0b334c',
                  lineHeight: '1.2',
                  letterSpacing: '-1px',
                  textAlign: 'right',
                  marginTop: '8px',
                }}
              >
                estuvo aquí.
              </span>
            </div>
          </div>
        </div>

        {/* ── Hairline divider above logos (1200px wide, 1px Navy 15% opacity) ── */}
        <div
          className="trust-hairline mx-auto"
          style={{
            maxWidth: '1200px',
            height: '1px',
            backgroundColor: LINE_COLOR,
          }}
        />

        {/* ── Client Logo Band — single row, full original colors, scaled up ── */}
        <div
          className="mx-auto px-8"
          style={{ maxWidth: '1200px' }}
        >
          {/* Desktop: single row with vertical hairlines */}
          <div
            className="trust-logos-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '120px',
            }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1,
                  height: '100%',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    padding: '0 24px',
                  }}
                >
                  <img
                    src={client.url}
                    alt={client.name}
                    loading="lazy"
                    className="trust-logo-img"
                    style={{
                      maxHeight: '100px',
                      maxWidth: '180px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '0px',
                      background: 'transparent',
                      transition: 'transform 200ms cubic-bezier(0.25, 0, 0, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                {/* Vertical hairline between logos */}
                {index < clients.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      width: '1px',
                      height: '48px',
                      backgroundColor: LINE_COLOR,
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: 2-column grid, no vertical hairlines */}
          <div
            className="trust-logos-mobile"
            style={{
              display: 'none',
              gridTemplateColumns: 'repeat(2, 1fr)',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    height: '96px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 16px',
                  }}
                >
                  <img
                    src={client.url}
                    alt={client.name}
                    loading="lazy"
                    style={{
                      maxHeight: '64px',
                      maxWidth: '140px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '0px',
                      background: 'transparent',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom closing hairline */}
        <div
          className="trust-hairline mx-auto"
          style={{
            maxWidth: '1200px',
            height: '1px',
            backgroundColor: LINE_COLOR,
          }}
        />
      </div>

      <style>{`
        .trust-hairline {
          width: 100%;
        }
        @media (max-width: 1199px) {
          .trust-hairline {
            max-width: calc(100% - 64px) !important;
          }
        }
        @media (max-width: 767px) {
          .trust-hairline {
            max-width: calc(100% - 48px) !important;
          }
        }

        /* Desktop (≥1024px) */
        @media (min-width: 1024px) {
          .trust-main-row { flex-direction: row !important; }
          .trust-text-block { text-align: right !important; }
          .trust-logos-desktop { display: flex !important; }
          .trust-logos-mobile { display: none !important; }
          .trust-eyebrow { text-align: left !important; }
        }

        /* Tablet (768–1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .trust-main-row {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .trust-map-container { order: 0; width: 100%; }
          .trust-text-block { order: 1; text-align: center !important; }
          .trust-title-brand { text-align: center !important; }
          .trust-title-subtitle { text-align: center !important; }
          .trust-logos-desktop { display: flex !important; }
          .trust-logos-mobile { display: none !important; }
          .trust-eyebrow { text-align: left !important; }
        }

        /* Mobile (<768px) */
        @media (max-width: 767px) {
          .trust-main-row {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .trust-map-container { order: 0; width: 100%; }
          .trust-text-block { order: 1; text-align: center !important; }
          .trust-title-brand { text-align: center !important; font-size: clamp(36px, 10vw, 48px) !important; }
          .trust-title-subtitle { text-align: center !important; font-size: clamp(24px, 7vw, 32px) !important; }
          .trust-logos-desktop { display: none !important; }
          .trust-logos-mobile { display: grid !important; }
          .trust-eyebrow { text-align: center !important; }
        }

        @keyframes trustNodePulse {
          0%, 100% { transform: scale(1);   opacity: 0.15; }
          50%       { transform: scale(1.6); opacity: 0.35; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="trustNodePulse"] { animation: none !important; }
          .trust-logo-img { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

import { SectionHeader } from '../SectionHeader';
import { ClientLogos } from '../ClientLogos';

const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';

const dataNodes = [
  { top: '35%', left: '25%', label: 'NORTEAMÉRICA' },
  { top: '65%', left: '32%', label: 'LATINOAMÉRICA' },
  { top: '28%', left: '50%', label: 'EUROPA' },
  { top: '48%', left: '72%', label: 'ASIA-PAC' },
];

const testimonials = [
  {
    photo:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&crop=faces,top',
    name: 'Ana Martínez',
    role: 'Directora de Transformación Digital',
    company: 'Pfizer',
    quote:
      'Henka nos guió con precisión durante nuestra transformación digital. Su metodología convirtió la incertidumbre en momentum real para los equipos.',
  },
  {
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop&crop=faces,top',
    name: 'Carlos Restrepo',
    role: 'VP de Operaciones',
    company: 'PepsiCo',
    quote:
      'Logramos una adopción del 95% en tiempo récord. Lo que más valoramos fue la claridad del proceso — sin caos, sin resistencia innecesaria.',
  },
  {
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=600&fit=crop&crop=faces,top',
    name: 'Daniela Torres',
    role: 'Gerente de Desarrollo Organizacional',
    company: 'P&G',
    quote:
      'El modelo de madurez nos permitió identificar brechas críticas y diseñar un plan robusto. Es la diferencia entre cambio gestionado y cambio sufrido.',
  },
];

export function TrustEcosystemSection() {
  return (
    <section id="trust-ecosystem" style={{ overflowX: 'hidden' }}>

      {/* ═══════════════════════════════════════════════════════
       *  GLOBAL IMPACT — Map + "Henka estuvo aquí" + Logo Band
       * ═══════════════════════════════════════════════════════ */}
      <div style={{ backgroundColor: '#ffffff', paddingTop: '64px', paddingBottom: '0' }}>

        <SectionHeader label="RESULTADOS & CONFIANZA" />

        <div style={{ height: '48px' }} />

        {/* Map row */}
        <div className="mx-auto px-8" style={{ maxWidth: '1200px' }}>
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
            {/* Map — fills available space */}
            <div
              className="trust-map-container"
              style={{ position: 'relative', flex: '1 1 0%', minWidth: 0, overflow: 'visible' }}
            >
              <img
                src={`${import.meta.env.BASE_URL}map.svg`}
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

              {/* Geo nodes */}
              {dataNodes.map((node, i) => (
                <div
                  key={i}
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
                      boxShadow: '0 0 0 2px #ffffff, 0 0 10px 3px rgba(132, 189, 42, 0.65)',
                      zIndex: 1,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Title — flush right */}
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
                  color: 'var(--henka-navy)',
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
                  color: 'var(--henka-navy)',
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

        {/* Hairline above logo band — aligned to 1200px grid */}
        <div
          className="trust-hairline mx-auto"
          style={{ maxWidth: '1200px', height: '1px', backgroundColor: LINE_COLOR }}
        />

        {/* ── Infinite Marquee Logo Band ── */}
        <ClientLogos />

      </div>

      {/* ═══════════════════════════════════════════════════════
       *  TESTIMONIALS — "Lo que dicen nuestros clientes"
       * ═══════════════════════════════════════════════════════ */}
      <div
        id="resultados"
        style={{
          backgroundColor: '#f4f6f9',
          paddingTop: '80px',
          paddingBottom: '80px',
          position: 'relative',
        }}
      >
        {/* Full-width boundary hairline — top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: LINE_COLOR,
          }}
        />

        <SectionHeader label="LO QUE DICEN NUESTROS CLIENTES" />

        <div className="mx-auto px-8" style={{ maxWidth: '1200px', paddingTop: '48px' }}>

          {/* Section heading */}
          <h3
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: 700,
              color: 'var(--henka-navy)',
              lineHeight: '1.2',
              textAlign: 'center',
              margin: '0 0 64px 0',
            }}
          >
            Nuestra mayor garantía es la voz de quienes ya transformaron su organización.
          </h3>

          {/* 3-column testimonial grid — uniform height via CSS grid row stretch */}
          <div
            className="tcard-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              alignItems: 'stretch',
              borderTop: `1px solid ${LINE_COLOR}`,
              borderBottom: `1px solid ${LINE_COLOR}`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="tcard"
                style={{
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderLeft: index > 0 ? `1px solid ${LINE_COLOR}` : 'none',
                }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('.tcard-portrait') as HTMLImageElement;
                  if (img) img.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('.tcard-portrait') as HTMLImageElement;
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Portrait — fixed height so the text block is the variable area */}
                <div style={{ width: '100%', height: '260px', overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="tcard-portrait"
                    loading="lazy"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      borderRadius: '0px',
                      transition: 'transform 400ms cubic-bezier(0.25, 0, 0, 1)',
                    }}
                  />
                </div>

                {/* Quote block — flex:1 ensures cards fill row height uniformly */}
                <div
                  style={{
                    padding: '28px 32px 32px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: '52px',
                      lineHeight: '0.75',
                      color: '#84bd2a',
                      opacity: 0.45,
                      marginBottom: '14px',
                      flexShrink: 0,
                      userSelect: 'none',
                    }}
                  >
                    "
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '15px',
                      fontStyle: 'italic',
                      color: 'var(--henka-navy)',
                      lineHeight: '1.75',
                      flex: 1,
                      margin: '0 0 24px 0',
                    }}
                  >
                    {testimonial.quote}
                  </p>

                  {/* Attribution — anchored to bottom of card via flex layout */}
                  <div style={{ borderTop: `1px solid ${LINE_COLOR}`, paddingTop: '20px', flexShrink: 0 }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-open-sans)',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'var(--henka-navy)',
                        letterSpacing: '0.2px',
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-open-sans)',
                        fontSize: '13px',
                        color: 'var(--henka-navy)',
                        opacity: 0.55,
                        marginTop: '3px',
                        letterSpacing: '0.1px',
                      }}
                    >
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width boundary hairline — bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: LINE_COLOR,
          }}
        />
      </div>

      <style>{`
        /* Hairlines respect the 1200px container and inset on narrower viewports */
        .trust-hairline { width: 100%; }
        @media (max-width: 1199px) {
          .trust-hairline { max-width: calc(100% - 64px) !important; }
        }
        @media (max-width: 767px) {
          .trust-hairline { max-width: calc(100% - 48px) !important; }
        }

        /* Desktop (≥1024px) */
        @media (min-width: 1024px) {
          .trust-main-row   { flex-direction: row !important; }
          .trust-text-block { text-align: right !important; }
          .tcard-grid       { grid-template-columns: repeat(3, 1fr) !important; }
        }

        /* Tablet (768–1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .trust-main-row       { flex-direction: column !important; gap: 40px !important; }
          .trust-map-container  { order: 0; width: 100%; }
          .trust-text-block     { order: 1; text-align: center !important; }
          .trust-title-brand    { text-align: center !important; }
          .trust-title-subtitle { text-align: center !important; }
          .tcard-grid           { grid-template-columns: 1fr !important; }
          .tcard                { border-left: none !important; border-top: 1px solid rgba(11,51,76,0.15) !important; }
          .tcard:first-child    { border-top: none !important; }
        }

        /* Mobile (<768px) */
        @media (max-width: 767px) {
          .trust-main-row       { flex-direction: column !important; gap: 32px !important; }
          .trust-map-container  { order: 0; width: 100%; }
          .trust-text-block     { order: 1; text-align: center !important; }
          .trust-title-brand    { text-align: center !important; font-size: clamp(36px, 10vw, 48px) !important; }
          .trust-title-subtitle { text-align: center !important; font-size: clamp(24px, 7vw, 32px) !important; }
          .tcard-grid           { grid-template-columns: 1fr !important; }
          .tcard                { border-left: none !important; border-top: 1px solid rgba(11,51,76,0.15) !important; }
          .tcard:first-child    { border-top: none !important; }
        }

        @keyframes trustNodePulse {
          0%, 100% { transform: scale(1);   opacity: 0.15; }
          50%      { transform: scale(1.6); opacity: 0.35; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="trustNodePulse"] { animation: none !important; }
          .tcard-portrait { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

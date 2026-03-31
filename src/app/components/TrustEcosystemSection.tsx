import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TrustEcosystemSection() {
  const [, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Client logos with actual brand images
  const clients = [
    { name: 'Pfizer', url: 'https://henkaconsulting.com/app/uploads/2021/05/pfizer-1.jpg' },
    { name: 'P&G', url: 'https://henkaconsulting.com/app/uploads/2021/06/PROCTER-181x138-1.png' },
    { name: 'PepsiCo', url: 'https://henkaconsulting.com/app/uploads/2021/06/PepsiCo.jpg' },
    { name: 'Banistmo', url: 'https://henkaconsulting.com/app/uploads/2021/05/banistmo-logo-1-1.jpg' },
    { name: 'Atlas', url: 'https://henkaconsulting.com/app/uploads/2021/05/atlas.jpg' }
  ];

  // Map Data Nodes
  const dataNodes = [
    { top: '35%', left: '25%', label: 'NORTEAMÉRICA' },
    { top: '65%', left: '32%', label: 'LATINOAMÉRICA' },
    { top: '28%', left: '50%', label: 'EUROPA' },
    { top: '48%', left: '72%', label: 'ASIA-PAC' }
  ];

  // Testimonials — exactly 3 portrait-first cards, blueprint aesthetic
  const testimonials = [
    {
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&crop=faces,top',
      name: 'Ana Martínez',
      role: 'Directora de Transformación Digital',
      company: 'Pfizer',
      quote: 'Henka nos guió con precisión durante nuestra transformación digital. Su metodología convirtió la incertidumbre en momentum real para los equipos.',
    },
    {
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop&crop=faces,top',
      name: 'Carlos Restrepo',
      role: 'VP de Operaciones',
      company: 'PepsiCo',
      quote: 'Logramos una adopción del 95% en tiempo récord. Lo que más valoramos fue la claridad del proceso — sin caos, sin resistencia innecesaria.',
    },
    {
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=600&fit=crop&crop=faces,top',
      name: 'Daniela Torres',
      role: 'Gerente de Desarrollo Organizacional',
      company: 'P&G',
      quote: 'El modelo de madurez nos permitió identificar brechas críticas y diseñar un plan robusto. Es la diferencia entre cambio gestionado y cambio sufrido.',
    },
  ];

  // Blog insights data
  const insights = [
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      tag: 'Gestión del Cambio',
      title: 'Cómo construir una cultura resiliente ante la transformación digital',
      excerpt: 'Las organizaciones exitosas no solo adoptan tecnología, sino que transforman su ADN cultural para prosperar.'
    },
    {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
      tag: 'Liderazgo',
      title: 'El rol del liderazgo ejecutivo en procesos de cambio complejos',
      excerpt: 'Los líderes modernos deben ser arquitectos del cambio, no solo gestores del presente.'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tag: 'Metodología',
      title: 'Modelos de madurez: Diagnosticando la capacidad de transformación',
      excerpt: 'Una evaluación rigurosa es el primer paso para diseñar estrategias efectivas de cambio.'
    },
    {
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop',
      tag: 'Estrategia',
      title: 'De la resistencia al compromiso: El viaje emocional del cambio',
      excerpt: 'Comprender las emociones organizacionales es clave para diseñar estrategias efectivas.'
    },
    {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
      tag: 'Innovación',
      title: 'Agilidad organizacional: Preparando equipos para lo impredecible',
      excerpt: 'La flexibilidad estructural es el nuevo diferenciador competitivo en mercados volátiles.'
    },
    {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop',
      tag: 'Cultura',
      title: 'El poder de la comunicación transparente en tiempos de incertidumbre',
      excerpt: 'Las organizaciones que comunican con claridad y honestidad construyen mayor confianza.'
    }
  ];

  const handleNextInsight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth + 32;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrevInsight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth + 32;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="trust-ecosystem" style={{ overflowX: 'hidden' }}>
      {/* === GLOBAL IMPACT DASHBOARD (#ffffff background) === */}
      <div style={{ backgroundColor: '#ffffff', paddingTop: '64px', paddingBottom: '48px' }}>

        {/* ── [section-header] Eyebrow: left-aligned, contained in 1200px grid ── */}
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
          <span
            className="section-eyebrow-left"
            style={{
              display: 'block',
              fontFamily: 'var(--font-open-sans)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#0b334c',
              opacity: 0.6,
              letterSpacing: '1.5px',
              lineHeight: '1',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              marginBottom: '16px',
            }}
          >
            RESULTADOS &amp; CONFIANZA
          </span>
        </div>

        {/* ── [hairline-top] 1200px structural hairline — matches grid boundary ── */}
        <div
          className="section-hairline mx-auto"
          style={{
            maxWidth: '1200px',
            height: '1px',
            backgroundColor: 'rgba(11, 51, 76, 0.15)',
            marginBottom: '48px',
          }}
        />

        {/* ── [main-body] Flex Row: Map (flex-grow left) + Title Block (flush-right) ── */}
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
          <div
            className="results-main-row"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '64px',
              marginBottom: '48px',
            }}
          >
            {/* [map-expanded-container] Left: Map fills all available space */}
            <div
              className="map-expanded-container"
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

              {/* Action Green data nodes — glow against navy dot matrix */}
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
                  {/* Outer glow ring — pulsing halo */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-6px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(132, 189, 42, 0.15)',
                      animation: 'nodePulse 2.4s ease-in-out infinite',
                    }}
                  />
                  {/* Core dot */}
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

            {/* [text-anchor-right] Right: Brand message flush-right */}
            <div
              className="text-anchor-right"
              style={{
                flexShrink: 0,
                textAlign: 'right',
              }}
            >
              <h2
                className="title-brand"
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
                className="title-subtitle"
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

        {/* ── [hairline-bottom] 1200px centered hairline above logo strip ── */}
        <div
          className="section-hairline mx-auto"
          style={{
            maxWidth: '1200px',
            height: '1px',
            backgroundColor: 'rgba(11, 51, 76, 0.15)',
            marginBottom: '0',
          }}
        />

        {/* ── [trust-band] Logo row — constrained to 1200px grid ── */}
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
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
              <div key={index} style={{ display: 'flex', alignItems: 'center', flex: 1, height: '100%' }}>
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
                      maxHeight: '80px',
                      maxWidth: '170px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '0px',
                      background: 'transparent',
                      transition: 'transform 200ms ease-in-out',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                </div>
                {index < clients.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      width: '1px',
                      height: '32px',
                      backgroundColor: 'rgba(11, 51, 76, 0.15)',
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Tablet: 3-column grid */}
          <div
            className="trust-logos-tablet"
            style={{
              display: 'none',
              gridTemplateColumns: 'repeat(3, 1fr)',
              justifyItems: 'center',
              alignItems: 'center',
              gap: '0',
            }}
          >
            {clients.map((client, index) => (
              <div key={index} style={{ position: 'relative', width: '100%' }}>
                <div
                  style={{
                    height: '104px',
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
                {index % 3 !== 2 && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: 0,
                      transform: 'translateY(-50%)',
                      width: '1px',
                      height: '32px',
                      backgroundColor: 'rgba(11, 51, 76, 0.15)',
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
              <div key={index} style={{ position: 'relative', width: '100%' }}>
                <div
                  style={{
                    height: '88px',
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
                      maxHeight: '52px',
                      maxWidth: '120px',
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

        {/* ── [hairline-close] 1200px centered hairline — closes the trust band ── */}
        <div
          className="section-hairline mx-auto"
          style={{
            maxWidth: '1200px',
            height: '1px',
            backgroundColor: 'rgba(11, 51, 76, 0.15)',
            marginTop: '0',
          }}
        />

        {/* Responsive breakpoints + animation */}
        <style>{`
          /* Hairlines: 1200px on wide viewports, inset on narrow ones */
          .section-hairline {
            width: 100%;
          }
          @media (max-width: 1199px) {
            .section-hairline {
              max-width: calc(100% - 64px) !important;
            }
          }
          @media (max-width: 767px) {
            .section-hairline {
              max-width: calc(100% - 48px) !important;
            }
          }

          /* Desktop (≥1024px): flex row — map grows left, text flush-right */
          @media (min-width: 1024px) {
            .results-main-row  { flex-direction: row !important; }
            .text-anchor-right { text-align: right !important; }
            .trust-logos-desktop { display: flex !important; }
            .trust-logos-tablet  { display: none !important; }
            .trust-logos-mobile  { display: none !important; }
            .section-eyebrow-left { text-align: left !important; }
          }
          /* Tablet (768–1023px): vertical stack — map on top, text centered below */
          @media (min-width: 768px) and (max-width: 1023px) {
            .results-main-row {
              flex-direction: column !important;
              gap: 40px !important;
            }
            .map-expanded-container { order: 0; width: 100%; }
            .text-anchor-right { order: 1; text-align: center !important; }
            .title-brand       { text-align: center !important; }
            .title-subtitle    { text-align: center !important; }
            .trust-logos-desktop { display: none !important; }
            .trust-logos-tablet  { display: grid !important; }
            .trust-logos-mobile  { display: none !important; }
            .section-eyebrow-left { text-align: left !important; }
          }
          /* Mobile (<768px): vertical stack — map on top, text centered, smaller type */
          @media (max-width: 767px) {
            .results-main-row {
              flex-direction: column !important;
              gap: 32px !important;
            }
            .map-expanded-container { order: 0; width: 100%; }
            .text-anchor-right { order: 1; text-align: center !important; }
            .title-brand       { text-align: center !important; font-size: clamp(36px, 10vw, 48px) !important; }
            .title-subtitle    { text-align: center !important; font-size: clamp(24px, 7vw, 32px) !important; }
            .trust-logos-desktop { display: none !important; }
            .trust-logos-tablet  { display: none !important; }
            .trust-logos-mobile  { display: grid !important; }
            .section-eyebrow-left { text-align: center !important; }
          }
          @keyframes nodePulse {
            0%, 100% { transform: scale(1);   opacity: 0.15; }
            50%       { transform: scale(1.6); opacity: 0.35; }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="nodePulse"] { animation: none !important; }
          }
        `}</style>
      </div>

      {/* === UNIFIED TESTIMONIALS BLOCK — divider + content in same #f4f6f9 frame === */}
      <div
        id="resultados"
        style={{
          backgroundColor: '#f4f6f9',
          paddingTop: '80px',
          paddingBottom: '80px',
          position: 'relative',
        }}
      >
        {/* Top full-width 1px structural line */}
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

        {/* [04] RESULTADOS & EXPERIENCIA — Divider INSIDE the gray block */}
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-open-sans)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#0b334c',
              opacity: 0.6,
              letterSpacing: '1.5px',
              lineHeight: '1',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              marginBottom: '16px',
            }}
          >
            RESULTADOS & EXPERIENCIA
          </span>
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(11, 51, 76, 0.15)' }} />
        </div>

        {/* 48px air between line and heading */}
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '48px max(32px, 5vw) 0' }}>
          {/* Typographic Statement — Left-aligned Hook */}
          <h3
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '28px',
              fontWeight: '700',
              color: '#0b334c',
              lineHeight: '1.4',
              maxWidth: '640px',
              marginBottom: '48px'
            }}
          >
            Nuestra mayor garantía es la voz de quienes ya transformaron su organización.
          </h3>

          {/* 3-card portrait grid — flex row, structural hairlines between cards */}
          <div
            className="tcard-grid"
            style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}
          >
            {testimonials.flatMap((testimonial, index) => {
              const card = (
                <div
                  key={`c-${index}`}
                  className="tcard"
                  style={{
                    flex: '1 1 0%',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('.tcard-portrait') as HTMLImageElement;
                    if (img) img.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('.tcard-portrait') as HTMLImageElement;
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  {/* Portrait — center-cropped, fills top of card */}
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

                  {/* Text content */}
                  <div style={{ padding: '28px 32px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Opening quote mark */}
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

                    {/* Quote */}
                    <p
                      style={{
                        fontFamily: 'var(--font-open-sans)',
                        fontSize: '15px',
                        fontStyle: 'italic',
                        color: '#0b334c',
                        lineHeight: '1.75',
                        flex: 1,
                        marginBottom: '24px',
                      }}
                    >
                      {testimonial.quote}
                    </p>

                    {/* Attribution */}
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-open-sans)',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0b334c',
                          letterSpacing: '0.2px',
                        }}
                      >
                        {testimonial.name}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-open-sans)',
                          fontSize: '13px',
                          color: '#0b334c',
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
              );

              if (index === 0) return [card];
              return [
                <div
                  key={`h-${index}`}
                  aria-hidden="true"
                  style={{
                    width: '1px',
                    flexShrink: 0,
                    alignSelf: 'stretch',
                    backgroundColor: 'rgba(11, 51, 76, 0.15)',
                  }}
                />,
                card,
              ];
            })}
          </div>
        </div>

        {/* Bottom full-width 1px structural line */}
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

      {/* === BLOG / INSIGHTS SECTION — Back to White === */}
      <div
        style={{
          backgroundColor: '#ffffff',
          paddingTop: '96px',
          paddingBottom: '120px'
        }}
      >
        {/* [05] PERSPECTIVAS — Divider inside blog area */}
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)', marginBottom: '64px' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-open-sans)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#0b334c',
              opacity: 0.6,
              letterSpacing: '1.5px',
              lineHeight: '1',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              marginBottom: '16px',
            }}
          >
            PERSPECTIVAS
          </span>
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(11, 51, 76, 0.15)' }} />
        </div>

        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
          {/* 3. Interactive Insights/Blog - Hotjar Editorial Layout */}
          <div>
            {/* Header Row: Controls Right */}
            <div className="flex items-center justify-end" style={{ marginBottom: '48px' }}>
              {/* Arrow Controls - Top Right */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevInsight}
                  className="transition-all duration-300 group"
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#ffffff',
                    borderRadius: '0px',
                    border: '1.5px solid #0c344d',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#84bd2a';
                    e.currentTarget.style.borderColor = '#84bd2a';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#0c344d';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.color = '#0c344d';
                  }}
                  aria-label="Previous insights"
                >
                  <ChevronLeft size={20} style={{ color: '#0c344d', transition: 'color 300ms ease' }} />
                </button>
                <button
                  onClick={handleNextInsight}
                  className="transition-all duration-300 group"
                  style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#ffffff',
                    borderRadius: '0px',
                    border: '1.5px solid #0c344d',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#84bd2a';
                    e.currentTarget.style.borderColor = '#84bd2a';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#0c344d';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) svg.style.color = '#0c344d';
                  }}
                  aria-label="Next insights"
                >
                  <ChevronRight size={20} style={{ color: '#0c344d', transition: 'color 300ms ease' }} />
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Editorial Carousel */}
            <div
              ref={carouselRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex" style={{ gap: '32px', minWidth: 'min-content' }}>
                {insights.map((insight, index) => (
                  <article
                    key={`insight-${index}`}
                    className="flex-shrink-0 cursor-pointer group"
                    style={{
                      width: '360px',
                      backgroundColor: '#ffffff'
                    }}
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector('.insight-image') as HTMLImageElement;
                      if (img) img.style.transform = 'scale(1.03)';
                      const title = e.currentTarget.querySelector('.insight-title') as HTMLElement;
                      if (title) title.style.color = '#84bd2a';
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector('.insight-image') as HTMLImageElement;
                      if (img) img.style.transform = 'scale(1)';
                      const title = e.currentTarget.querySelector('.insight-title') as HTMLElement;
                      if (title) title.style.color = '#0b334c';
                    }}
                  >
                    {/* Full-bleed Image */}
                    <div
                      style={{
                        width: '100%',
                        height: '220px',
                        overflow: 'hidden',
                        borderRadius: '0px',
                        marginBottom: '16px'
                      }}
                    >
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="insight-image w-full h-full object-cover"
                        style={{
                          borderRadius: '0px',
                          transition: 'transform 400ms ease-in-out'
                        }}
                      />
                    </div>

                    {/* Content - Left-aligned, minimal padding */}
                    <div style={{ padding: '0 4px' }}>
                      {/* Category */}
                      <span
                        style={{
                          fontFamily: 'var(--font-open-sans)',
                          fontSize: '12px',
                          fontWeight: 'var(--font-weight-bold)',
                          color: '#82bd23',
                          textTransform: 'uppercase',
                          letterSpacing: '0.8px',
                          display: 'block',
                          marginBottom: '12px'
                        }}
                      >
                        {insight.tag}
                      </span>

                      {/* Title */}
                      <h3
                        className="insight-title"
                        style={{
                          fontFamily: 'var(--font-open-sans)',
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#0b334c',
                          lineHeight: '1.35',
                          marginBottom: '12px',
                          transition: 'color 300ms ease'
                        }}
                      >
                        {insight.title}
                      </h3>

                      {/* Excerpt */}
                      <p
                        style={{
                          fontFamily: 'var(--font-open-sans)',
                          fontSize: '14px',
                          color: '#4b5563',
                          lineHeight: '1.6',
                          marginBottom: '0px',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {insight.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Testimonial card grid — 3-col on desktop, stack on tablet/mobile */
        .tcard-grid {
          flex-direction: row;
        }
        @media (max-width: 1023px) {
          .tcard-grid {
            flex-direction: column;
          }
          .tcard-grid > [aria-hidden="true"] {
            width: 100% !important;
            height: 1px !important;
            align-self: auto !important;
          }
          .tcard {
            flex: 1 1 auto !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .tcard-portrait { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export function TrustEcosystemSection() {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  // Client logos with actual brand images
  const clients = [
    {
      name: 'Pfizer',
      url: 'https://henkaconsulting.com/app/uploads/2021/05/pfizer-1.jpg'
    },
    {
      name: 'Atlas',
      url: 'https://henkaconsulting.com/app/uploads/2021/05/atlas.jpg'
    },
    {
      name: 'P&G',
      url: 'https://henkaconsulting.com/app/uploads/2021/06/PROCTER-181x138-1.png'
    },
    {
      name: 'PepsiCo',
      url: 'https://henkaconsulting.com/app/uploads/2021/06/PepsiCo.jpg'
    },
    {
      name: 'Banistmo',
      url: 'https://henkaconsulting.com/app/uploads/2021/05/banistmo-logo-1-1.jpg'
    },
    {
      name: 'Pfizer',
      url: 'https://henkaconsulting.com/app/uploads/2021/05/pfizer-1.jpg'
    },
    {
      name: 'Atlas',
      url: 'https://henkaconsulting.com/app/uploads/2021/05/atlas.jpg'
    },
    {
      name: 'P&G',
      url: 'https://henkaconsulting.com/app/uploads/2021/06/PROCTER-181x138-1.png'
    },
    {
      name: 'PepsiCo',
      url: 'https://henkaconsulting.com/app/uploads/2021/06/PepsiCo.jpg'
    },
    {
      name: 'Banistmo',
      url: 'https://henkaconsulting.com/app/uploads/2021/05/banistmo-logo-1-1.jpg'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: 'Henka Consulting nos guió con precisión y empatía durante nuestra transformación digital. Su enfoque metodológico marcó la diferencia.',
      name: 'María González',
      role: 'CEO, Tech Innovations SA',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
      quote: 'La gestión del cambio implementada por Henka superó nuestras expectativas. Logramos una adopción del 95% en tiempo récord.',
      name: 'Carlos Ramírez',
      role: 'Director de Transformación, Global Corp',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
    },
    {
      quote: 'Su modelo de madurez nos permitió identificar brechas críticas y diseñar un plan de acción robusto y realista.',
      name: 'Ana Martínez',
      role: 'VP de Operaciones, Industrias Del Futuro',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop'
    }
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
      const scrollAmount = carouselRef.current.offsetWidth + 32; // Card width + gap
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevInsight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth + 32; // Card width + gap
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const startAutoScroll = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth + 32; // Card width + gap
      autoScrollInterval.current = setInterval(() => {
        carouselRef.current?.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }, 6000); // 6 seconds interval
    }
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying && !isHovering) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [isPlaying, isHovering]);

  return (
    <section 
      id="trust-ecosystem"
      style={{ overflowX: 'hidden' }}
    >
      {/* === [03] RESULTADOS & CONFIANZA — Divider === */}
      <div style={{ backgroundColor: '#ffffff', paddingTop: '128px' }}>
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
            RESULTADOS & CONFIANZA
          </span>
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(11, 51, 76, 0.15)' }} />
        </div>
      </div>

      {/* === LOGOS SECTION — White Background === */}
      <div
        style={{ 
          backgroundColor: '#ffffff',
          paddingTop: '64px',
          paddingBottom: '0px'
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
        {/* 1. Clients & Allies Carousel */}
        <div>
          <h3 
            className="mb-12"
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '28px',
              fontWeight: 'var(--font-weight-bold)',
              color: '#0b334c',
              lineHeight: '1.3',
              textAlign: 'left'
            }}
          >
            Organizaciones que confían en nuestra metodología
          </h3>
          
          {/* Infinite Scroll Carousel */}
          <div 
            className="overflow-hidden"
            style={{ 
              backgroundColor: '#ffffff',
              paddingTop: '40px',
              paddingBottom: '40px'
            }}
          >
            <div 
              className="flex gap-16 animate-scroll"
              style={{
                animation: 'scroll 30s linear infinite'
              }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    width: '160px',
                    height: '80px',
                    filter: 'grayscale(100%)',
                    opacity: 0.6
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.opacity = '0.6';
                  }}
                >
                  <img
                    src={client.url}
                    alt={client.name}
                    className="object-cover"
                    style={{
                      width: '160px',
                      height: '80px',
                      borderRadius: '0px'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '32px' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '0px',
                  border: '1px solid rgba(11, 51, 76, 0.15)',
                  borderLeft: '4px solid #84bd2a',
                  boxShadow: 'none',
                  padding: '40px',
                  minHeight: '320px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Client Headshot */}
                <div className="mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '0px'
                    }}
                  />
                </div>

                {/* Quote */}
                <p 
                  className="mb-6"
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '16px',
                    fontStyle: 'italic',
                    color: '#0b334c',
                    lineHeight: '1.7',
                    opacity: 0.9
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Client Info */}
                <div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '16px',
                      fontWeight: 'var(--font-weight-bold)',
                      color: '#0b334c',
                      marginBottom: '4px'
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '14px',
                      color: '#0b334c',
                      opacity: 0.7
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
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
          {/* Header Row: Title Left, Controls Right */}
          <div className="flex items-center justify-between" style={{ marginBottom: '48px' }}>
            <span
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: '14px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#0b334c',
                textTransform: 'uppercase',
                letterSpacing: '1.5px'
              }}
            >
              Perspectivas sobre el Cambio
            </span>

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
      `}</style>
    </section>
  );
}
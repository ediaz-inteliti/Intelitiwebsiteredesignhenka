import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';
const BTN_BORDER  = 'rgba(12, 52, 77, 0.18)';
const BTN_HOVER_BG = 'rgba(12, 52, 77, 0.05)';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    tag: 'GESTIÓN DEL CAMBIO',
    date: '14 ABR 2026',
    title: 'Cómo construir una cultura resiliente ante la transformación digital',
    excerpt:
      'Las organizaciones exitosas no solo adoptan tecnología — transforman su ADN cultural para prosperar en entornos de cambio constante.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
    tag: 'LIDERAZGO EJECUTIVO',
    date: '02 ABR 2026',
    title: 'El rol del liderazgo ejecutivo en procesos de cambio complejos',
    excerpt:
      'Los líderes modernos deben ser arquitectos del cambio, no solo gestores del presente. Descubra cómo preparar a su equipo directivo.',
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    tag: 'METODOLOGÍA',
    date: '21 MAR 2026',
    title: 'Modelos de madurez: Diagnosticando la capacidad de transformación',
    excerpt:
      'Una evaluación rigurosa del estado actual es el primer paso para diseñar estrategias de cambio efectivas y sostenibles.',
  },
];

export function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('.blog-card') as HTMLElement | null;
    const amount = card ? card.offsetWidth : Math.round(scrollRef.current.offsetWidth / 3);
    scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section
      id="blog"
      style={{ backgroundColor: '#ffffff', paddingTop: '96px', paddingBottom: '96px' }}
    >
      {/* ── Custom header row: eyebrow left, nav buttons right ── */}
      <div className="w-full max-w-[1200px] mx-auto px-8">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '16px',
          }}
        >
          {/* Eyebrow label */}
          <span
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--henka-navy)',
              opacity: 0.6,
              letterSpacing: '1.5px',
              lineHeight: '1',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            NUESTRO BLOG
          </span>

          {/* Prev / Next — adjacent squares share the collapsed middle border */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Artículo anterior"
              className="blog-nav-btn"
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: `1px solid ${BTN_BORDER}`,
                borderRadius: '0px',
                cursor: 'pointer',
                padding: 0,
                transition: 'background-color 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = BTN_HOVER_BG; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <ChevronLeft
                size={18}
                strokeWidth={1.75}
                style={{ color: 'var(--henka-navy)', opacity: 0.7, display: 'block' }}
              />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Artículo siguiente"
              className="blog-nav-btn"
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: `1px solid ${BTN_BORDER}`,
                borderRadius: '0px',
                cursor: 'pointer',
                padding: 0,
                marginLeft: '-1px',
                transition: 'background-color 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = BTN_HOVER_BG; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <ChevronRight
                size={18}
                strokeWidth={1.75}
                style={{ color: 'var(--henka-navy)', opacity: 0.7, display: 'block' }}
              />
            </button>
          </div>
        </div>

        {/* Hairline — spans full container width, aligned to 1200px grid */}
        <div style={{ height: '1px', backgroundColor: LINE_COLOR }} />
      </div>

      <div style={{ height: '48px' }} />

      {/* ── Card container — grid on desktop, snap-scroll on tablet/mobile ── */}
      <div className="mx-auto px-8" style={{ maxWidth: '1200px' }}>
        <div
          ref={scrollRef}
          className="blog-scroll"
          style={{
            borderTop: `1px solid ${LINE_COLOR}`,
            borderBottom: `1px solid ${LINE_COLOR}`,
          }}
        >
          {posts.map((post, index) => (
            <article
              key={index}
              className="blog-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderLeft: index > 0 ? `1px solid ${LINE_COLOR}` : 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('.blog-img') as HTMLImageElement;
                if (img) img.style.filter = 'grayscale(0.45) contrast(1.05) brightness(0.95)';
                const title = e.currentTarget.querySelector('.blog-title') as HTMLElement;
                if (title) title.style.color = '#84bd2a';
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('.blog-img') as HTMLImageElement;
                if (img) img.style.filter = 'grayscale(0.88) contrast(1.08) brightness(0.88)';
                const title = e.currentTarget.querySelector('.blog-title') as HTMLElement;
                if (title) title.style.color = 'var(--henka-navy)';
              }}
            >
              {/* Image — technical greyscale, 0px radius */}
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="blog-img"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0px',
                    filter: 'grayscale(0.88) contrast(1.08) brightness(0.88)',
                    transition: 'filter 400ms ease',
                  }}
                />
              </div>

              {/* Hairline between image and content */}
              <div style={{ width: '100%', height: '1px', backgroundColor: LINE_COLOR, flexShrink: 0 }} />

              {/* Content */}
              <div
                style={{
                  padding: '28px 28px 32px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Tag + Date */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#84bd2a',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {post.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'var(--henka-navy)',
                      opacity: 0.45,
                      letterSpacing: '0.5px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="blog-title"
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--henka-navy)',
                    lineHeight: '1.4',
                    margin: '0 0 16px 0',
                    flex: 1,
                    transition: 'color 300ms ease',
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '14px',
                    color: 'var(--henka-navy)',
                    opacity: 0.65,
                    lineHeight: '1.65',
                    margin: '0 0 24px 0',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Read more */}
                <a
                  href="#"
                  className="blog-read-more"
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--henka-navy)',
                    textDecoration: 'none',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    borderBottom: `1px solid ${LINE_COLOR}`,
                    paddingBottom: '2px',
                    transition: 'color 250ms ease, border-color 250ms ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#84bd2a';
                    e.currentTarget.style.borderColor = '#84bd2a';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--henka-navy)';
                    e.currentTarget.style.borderColor = LINE_COLOR;
                  }}
                >
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        /* Desktop: 3-column static grid */
        .blog-scroll {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          overflow: hidden;
        }

        /* Tablet (768–1023px): horizontal snap-scroll — nav buttons now functional */
        @media (max-width: 1023px) {
          .blog-scroll {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .blog-scroll::-webkit-scrollbar { display: none; }
          .blog-card {
            flex: 0 0 80% !important;
            scroll-snap-align: start;
            border-left: 1px solid rgba(11, 51, 76, 0.15) !important;
          }
          .blog-card:first-child { border-left: none !important; }
        }

        /* Mobile (<768px): single card visible per snap */
        @media (max-width: 767px) {
          .blog-card {
            flex: 0 0 92% !important;
          }
        }

        /* Nav button focus ring */
        .blog-nav-btn:focus-visible {
          outline: 2px solid var(--henka-navy);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .blog-img        { transition: none !important; }
          .blog-title      { transition: none !important; }
          .blog-read-more  { transition: none !important; }
          .blog-nav-btn    { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

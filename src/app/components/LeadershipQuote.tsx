import { useEffect, useRef, useState } from 'react';

/**
 * LeadershipQuote
 *
 * Bridge section between BlogSection and Footer.
 * 40/60 split: CEO quote (left, 4/10) + dominant chameleon mascot (right, 6/10).
 *
 * Design contracts (.impeccable.md / Swiss Blueprint aesthetic):
 * - 0px border-radius throughout
 * - No shadows, no glow, no decorative borders
 * - 1px vertical hairline at 15% opacity — blueprint metaphor
 * - mix-blend-mode: multiply on image — white JPEG BG vanishes into section white
 * - Image container: fixed 520px height, overflow: hidden — intentional artistic crop
 * - object-position targets chameleon head/eye area — deliberate, not accidental
 * - Staggered IntersectionObserver fade-in (opacity + translateY, GPU only)
 * - 8pt spacing grid: top-padding reduced to 64px to bridge tightly with BlogSection
 * - Master constraint: max-width 1200px, padding 0 32px
 * - Respects prefers-reduced-motion
 *
 * Spacing rationale:
 * BlogSection paddingBottom = 96px → LeadershipQuote paddingTop = 64px
 * Total gap = 160px — cohesive, not detached.
 */
export function LeadershipQuote() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Reduced motion: reveal immediately, skip animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Expo-out deceleration — no bounce, no elastic
  const easeOut = 'cubic-bezier(0.16, 1, 0.3, 1)';

  const fadeIn = (delayMs: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 800ms ${easeOut} ${delayMs}ms, transform 800ms ${easeOut} ${delayMs}ms`,
  });

  const revealImage = (): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    // No translateY on image container — keeps the crop frame stable
    transition: `opacity 1100ms ${easeOut} 100ms`,
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Liderazgo — Cita de Raquel, CEO Henka"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 0,
        // Reduced from clamp(80px,10vw,128px) to 64px — 8pt token --space-8
        // Creates a cohesive transition from BlogSection's 96px bottom padding
        paddingTop: '64px',
        paddingBottom: '96px',
      }}
    >
      {/* ── Master grid constraint ────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* ── Section eyebrow label ─────────────────────────────────────── */}
        <p
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--henka-green-label)',
            margin: '0 0 32px',
            ...fadeIn(0),
          }}
        >
          Adaptabilidad
        </p>

        {/* ── 40/60 grid: quote (4fr) + dominant image (6fr) ───────────── */}
        {/*
         * Dominance shift: image column is now 60% of the track width.
         * The mascot owns the visual weight; the quote is the anchor,
         * not the hero.
         */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '4fr 6fr',
            gap: 0,
            alignItems: 'stretch',
          }}
          className="leadership-quote-grid"
        >
          {/* ── LEFT COLUMN: CEO Quote (4/10) ─────────────────────────── */}
          <div
            style={{
              paddingRight: '56px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              // Blueprint vertical hairline — 1px, 15% navy opacity
              borderRight: '1px solid rgba(12, 52, 77, 0.15)',
              // Maintain vertical rhythm with the image column height
              paddingTop: '48px',
              paddingBottom: '48px',
            }}
          >
            {/* Opening quotation mark — editorial anchor */}
            <span
              aria-hidden="true"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(96px, 12vw, 140px)',
                lineHeight: 0.7,
                color: 'var(--henka-green)',
                display: 'block',
                marginBottom: '16px',
                userSelect: 'none',
                letterSpacing: '-0.02em',
                ...fadeIn(60),
              }}
            >
              {'\u201C'}
            </span>

            {/* The CEO quote — serif italic for typographic contrast */}
            <blockquote
              style={{
                margin: 0,
                padding: 0,
              }}
            >
              <p
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(18px, 1.9vw, 24px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--henka-navy)',
                  margin: '0 0 32px',
                  // Keep line length comfortable — quote column is ~40% width
                  maxWidth: '38ch',
                  ...fadeIn(140),
                }}
              >
                La verdadera transformación no es un destino, es la capacidad
                de evolucionar con el entorno sin perder la esencia.
              </p>

              {/* Attribution — Open Sans small-caps for system contrast */}
              <footer
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  ...fadeIn(260),
                }}
              >
                {/* Short structural rule — blueprint precision */}
                <div
                  aria-hidden="true"
                  style={{
                    width: '28px',
                    height: '1px',
                    backgroundColor: 'var(--henka-green)',
                    flexShrink: 0,
                  }}
                />
                <cite
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--henka-navy)',
                    opacity: 0.6,
                  }}
                >
                  Raquel, CEO Henka
                </cite>
              </footer>
            </blockquote>
          </div>

          {/* ── RIGHT COLUMN: Dominant mascot image (6/10) ─────────────── */}
          {/*
           * Fixed 520px height creates a stable, intentional crop frame.
           * The image fills 100% of this container via absolute positioning.
           * objectPosition: '60% 25%' focuses on the chameleon's head/eye —
           * the most expressive and brand-distinctive part of the mascot.
           *
           * Why not object-fit: contain?
           * contain would show the full mascot on a white rectangle — no crop
           * effect, no editorial feel. cover + controlled position IS the design.
           *
           * mix-blend-mode: multiply — white JPEG pixels × white section = white.
           * The mascot's coloured pixels are preserved with zero masking.
           */}
          <div
            style={{
              position: 'relative',
              height: '520px',
              overflow: 'hidden',
              // Hairline removed from left — handled by right border of quote col
              ...revealImage(),
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}chamaleon.jpg`}
              alt="Camaleón Henka — símbolo de adaptabilidad y transformación continua"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                // Focus on head + eye area — the most recognisable crop
                objectPosition: '55% 22%',
                borderRadius: 0,
                // Dissolves JPEG white into section white
                mixBlendMode: 'multiply',
                userSelect: 'none',
                pointerEvents: 'none',
                // Subtle scale slightly above 1 to blur the hard boundaries
                // of the image and make the crop feel intentional
                transform: 'scale(1.04)',
                transformOrigin: '55% 22%',
              } as React.CSSProperties}
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* ── Responsive overrides ──────────────────────────────────────────── */}
      <style>{`
        /* Mobile: stack columns vertically */
        @media (max-width: 768px) {
          .leadership-quote-grid {
            grid-template-columns: 1fr !important;
          }

          /* Quote column: remove right hairline, add bottom hairline */
          .leadership-quote-grid > div:first-child {
            border-right: none !important;
            padding-right: 0 !important;
            padding-top: 0 !important;
            border-bottom: 1px solid rgba(12, 52, 77, 0.15);
            padding-bottom: 40px;
            margin-bottom: 40px;
          }

          /* Image column: reduce height on mobile for proportion */
          .leadership-quote-grid > div:last-child {
            height: 300px !important;
          }
        }

        /* Tablet: slightly smaller image height */
        @media (min-width: 769px) and (max-width: 1024px) {
          .leadership-quote-grid > div:last-child {
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}

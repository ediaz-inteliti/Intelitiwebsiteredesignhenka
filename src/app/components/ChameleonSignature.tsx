import { useEffect, useRef, useState } from 'react';

/**
 * ChameleonSignature
 *
 * Transition section placed strictly between BlogSection and Footer.
 * Displays the Henka chameleon mascot (JPEG, NOT SVG) centred on a white
 * background. mix-blend-mode: multiply dissolves the JPEG white background
 * into the section's white surface — no masking, no clipping required.
 *
 * Design constraints (.impeccable.md / Swiss Blueprint aesthetic):
 * - 0px border-radius throughout
 * - No shadows, no borders, no glow, no cards
 * - Scroll-driven opacity + translateY fade-in via IntersectionObserver
 * - Master 1200px grid (max-w-[1200px] mx-auto px-8) matching all other sections
 * - 8pt spacing scale: 8, 16, 24, 32, 48, 64, 96
 * - Respects prefers-reduced-motion
 */
export function ChameleonSignature() {
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
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Cubic bezier: expo-out deceleration — natural, no bounce
  const easeOut = 'cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <section
      ref={sectionRef}
      aria-label="Henka — símbolo de adaptabilidad y cambio continuo"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 0,
        // Varied section padding: top more generous than bottom to ease into the navy footer
        paddingTop: 'clamp(64px, 10vw, 120px)',
        paddingBottom: 'clamp(32px, 5vw, 64px)',
      }}
    >
      {/* Master grid constraint — 1200px, matching every other section site-wide */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* ── Eyebrow label ─────────────────────────────────────────────── */}
        {/* Blueprint precision: tight letterSpacing uppercase metadata row  */}
        <p
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--henka-navy)',
            margin: '0 0 24px',
            opacity: isVisible ? 0.4 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: `opacity 600ms ${easeOut}, transform 600ms ${easeOut}`,
          }}
        >
          Henka — Cambio Continuo
        </p>

        {/* ── 1px structural rule above mascot — blueprint metaphor ──────── */}
        <div
          aria-hidden="true"
          style={{
            width: '100%',
            maxWidth: '480px',
            height: '1px',
            backgroundColor: 'var(--henka-navy)',
            opacity: isVisible ? 0.1 : 0,
            marginBottom: '48px',
            transition: `opacity 500ms ${easeOut} 150ms`,
          }}
        />

        {/* ── Chameleon mascot image ─────────────────────────────────────── */}
        {/*
         * maxWidth: 560px — significant presence without exceeding horizontal rhythm.
         * mix-blend-mode: multiply — dissolves JPEG white into section white.
         * Only transform + opacity animated (GPU-composited, no layout thrash).
         */}
        <div
          style={{
            borderRadius: 0,
            width: '100%',
            maxWidth: '560px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(28px) scale(0.98)',
            transition: `opacity 900ms ${easeOut} 200ms, transform 900ms ${easeOut} 200ms`,
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}chamaleon.jpg`}
            alt="Camaleón Henka — símbolo de adaptabilidad y transformación continua"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: 0,
              /*
               * mix-blend-mode: multiply
               * White JPEG background × white section background = white.
               * The mascot's coloured pixels are preserved perfectly.
               * No SVG recreation, no masking, no clipping paths needed.
               */
              mixBlendMode: 'multiply',
              userSelect: 'none',
              WebkitUserDrag: 'none',
            } as React.CSSProperties}
            draggable={false}
          />
        </div>

        {/* ── Tagline beneath mascot ─────────────────────────────────────── */}
        {/* Delayed after mascot settles; adds editorial weight to the transition */}
        <p
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: 'var(--henka-navy)',
            margin: '32px 0 0',
            opacity: isVisible ? 0.3 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: `opacity 600ms ${easeOut} 700ms, transform 600ms ${easeOut} 700ms`,
          }}
        >
          Hacemos del cambio un lugar seguro
        </p>
      </div>
    </section>
  );
}

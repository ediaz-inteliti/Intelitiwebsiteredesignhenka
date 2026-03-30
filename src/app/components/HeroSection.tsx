export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-[600px] md:min-h-[100vh]"
      style={{
        overflow: 'hidden',
        marginTop: '0px',
        paddingTop: '0px',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://github.com/ediaz-inteliti/henka-web/raw/refs/heads/main/mixkit-green-vailed-chameleon-seen-from-one-side-1489-hd-ready.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navy Overlay at 65% opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(12, 52, 77, 0.65)',
          zIndex: 1,
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            'radial-gradient(ellipse 80% 70% at 40% 50%, transparent 40%, rgba(0, 0, 0, 0.35) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Transparent Navigation Bar — Logo left, single CTA right */}
      <nav
        className="relative z-10 w-full"
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: '1200px',
            padding: '0 max(32px, 5vw)',
            height: '80px',
          }}
        >
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="https://henkaconsulting.com/app/uploads/2026/02/logo_henka.svg"
              alt="Henka Consulting"
              className="h-10 md:h-12 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Single CTA — Right */}
          <button
            className="px-8 py-3"
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '14px',
              fontWeight: 700,
              backgroundColor: '#84bd2a',
              color: '#ffffff',
              borderRadius: '0px',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.3px',
              transition: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '2px 2px 0px rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'translate(-1px, -1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translate(0, 0)';
            }}
          >
            Consulta Gratuita
          </button>
        </div>
      </nav>

      {/* Hero Content — Left-aligned with generous top spacing */}
      <div
        className="relative z-10 flex-1 flex items-center"
        style={{ width: '100%' }}
      >
        <div
          className="w-full relative"
          style={{
            maxWidth: '1200px',
            padding: '0 max(32px, 5vw)',
            margin: '0 auto',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            {/* H1 — 80px Bold, left-aligned, tight tracking (-2%) */}
            <h1
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: 'clamp(40px, 5.8vw, 80px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.05,
                marginBottom: '32px',
                letterSpacing: '-0.02em',
              }}
            >
              Hacemos del
              <br />
              cambio
              <br />
              un lugar seguro
            </h1>

            {/* Sub-heading — 20px Regular, 85% opacity, max-width 550px */}
            <p
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: 'clamp(16px, 1.4vw, 20px)',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.4,
                maxWidth: '550px',
                margin: 0,
              }}
            >
              Acompañamos a las organizaciones en sus procesos de
              transformación con metodologías probadas y un enfoque humano.
            </p>

            {/* Primary CTA — below subheading */}
            <button
              style={{
                marginTop: '40px',
                fontFamily: 'var(--font-open-sans)',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: '#84bd2a',
                color: '#ffffff',
                borderRadius: '0px',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.3px',
                padding: '16px 40px',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '2px 2px 0px rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'translate(-1px, -1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translate(0, 0)';
              }}
            >
              Consulta Gratuita
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL indicator — anchored to hero section bottom-right */}
      <div
        className="hidden md:flex flex-col items-center"
        style={{
          position: 'absolute',
          right: 'max(32px, 5vw)',
          bottom: '48px',
          gap: '8px',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: '12px',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 0.5)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            writingMode: 'vertical-lr',
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '60px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          }}
        />
      </div>

      {/* Bottom accent line — solid green brand border */}
      <div
        className="relative z-10 w-full"
        style={{
          height: '3px',
          backgroundColor: '#84bd2a',
        }}
      />
    </section>
  );
}
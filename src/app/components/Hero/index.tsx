export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-[600px] md:min-h-[100vh]"
      style={{ overflow: 'hidden' }}
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
        style={{ backgroundColor: 'rgba(12, 52, 77, 0.65)', zIndex: 1 }}
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

      {/* Transparent Navigation Bar */}
      <nav
        className="relative z-10 w-full"
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: '1200px',
            padding: '0 max(32px, 5vw)',
            height: '80px',
          }}
        >
          <div className="flex items-center flex-shrink-0">
            <img
              src="https://henkaconsulting.com/app/uploads/2026/02/logo_henka.svg"
              alt="Henka Consulting"
              className="h-10 md:h-12 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

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
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '2px 2px 0px rgba(255,255,255,0.3)';
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

      {/* ─────────────────────────────────────────────────────────────
       *  Hero Content Area — flex-1 fills remaining section height
       * ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center w-full">

        {/*
         * hero-inner-container
         * ─────────────────────────────────────────────────────────
         * • max-w-[1200px] centered: the master grid boundary
         * • position: relative  → containing block for scroll indicator
         * • alignSelf: stretch  → fills full flex-1 height so absolute
         *   children can reference the container top/bottom accurately
         * ─────────────────────────────────────────────────────────
         */}
        <div
          className="hero-inner-container"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            alignSelf: 'stretch',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Text content — padded to match 1200px inner grid */}
          <div style={{ padding: '0 max(32px, 5vw)' }}>
            <div style={{ maxWidth: '720px' }}>
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
                  e.currentTarget.style.boxShadow =
                    '2px 2px 0px rgba(255,255,255,0.3)';
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

          {/*
           * scroll-indicator-technical
           * ─────────────────────────────────────────────────────────
           * • absolute to hero-inner-container (1200px boundary)
           * • right: 0  → aligns with the 1200px right edge on wide viewports
           * • bottom: 48px (6 × 8pt) → consistent bottom margin
           * • Hidden on mobile — no visual clutter at 390px
           * ─────────────────────────────────────────────────────────
           */}
          <div
            className="scroll-indicator-technical hidden md:flex flex-col items-center"
            style={{
              position: 'absolute',
              right: 0,
              bottom: '48px',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: '10px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.45)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                writingMode: 'vertical-lr',
                lineHeight: 1,
              }}
            >
              SCROLL
            </span>

            {/* 1px hairline — matches blueprint 15% opacity language */}
            <div
              aria-hidden="true"
              style={{
                width: '1px',
                height: '64px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="relative z-10 w-full"
        style={{ height: '3px', backgroundColor: '#84bd2a' }}
      />
    </section>
  );
}

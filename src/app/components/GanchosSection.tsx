import { useState } from 'react';

/**
 * GanchosSection — LOS DESAFÍOS
 * v3.5 · 1x4 Dashboard Layout · Responsive Hairlines
 * ──────────────────────────────────────────────────
 * Layout:  1×4 CSS Grid, 1200px container
 * Images:  16:9 landscape aspect ratio → clean horizontal horizon
 *          Colorize v2.2: Technical greyscale NOT marketing green
 *            Layer 1: grayscale(0.88) contrast(1.08) brightness(0.88) — industrial mono
 *            Layer 2: rgba(132,189,42,0.06) multiply overlay — engineered green whisper
 *            Hover:   grayscale(0.45), overlay → 0.10 — photo breathes, stays technical
 *            Radius:  0px enforced on container + img
 * Content: Question only — no body copy
 * Type:    Open Sans Bold clamp(16px,1.5vw,20px), strictly Left-Aligned
 *          Question fill: Solid Dark Navy var(--henka-navy) @ 100% opacity
 *          Label accent:  Action Green #84bd2a (overlay chip only)
 * Radius:  0px everywhere — cells, images, overlays, section
 * Lines:   1px hairlines at rgba(11,51,76,0.15)
 *          Edge-to-Edge: 1x4 grids touch 1px vertical hairlines
 * Surface: Quieter v2.2 — section bg = Surface Light #f4f6f9
 *          Cells always #ffffff — "white card tray on light surface" composition
 *          32px vertical padding (8pt × 4) — non-aggressive breathing room
 * Spacing: 8pt system — minimal internal padding
 * Feel:    Single "Technical Dashboard" unit — refined, not aggressive
 * Typeset: v2.2 — question color locked to NAVY via inline + .desafio-question rule
 */

const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';
const NAVY = 'var(--henka-navy)';
const GREEN = '#84bd2a';

interface DesafioModule {
  id: string;
  label: string;
  question: string;
  imageUrl: string;
  imageAlt: string;
}

const modules: DesafioModule[] = [
  {
    id: 'madurez',
    label: '01 — MADUREZ',
    question: '¿Está tu organización lo suficientemente madura para afrontar la transformación?',
    imageUrl: `${import.meta.env.BASE_URL}pexels-sora-shimazaki-5668492.jpg`,
    imageAlt: 'Arquitectura corporativa moderna — solidez organizacional',
  },
  {
    id: 'adopcion',
    label: '02 — ADOPCIÓN',
    question: '¿Tu equipo adoptó los cambios o herramientas implementadas?',
    imageUrl: `${import.meta.env.BASE_URL}pexels-gustavo-fring-6285082.jpg`,
    imageAlt: 'Colaboración profesional en entorno técnico',
  },
  {
    id: 'roi',
    label: '03 — ROI',
    question: '¿Tus proyectos están dando el retorno de inversión esperado?',
    imageUrl: `${import.meta.env.BASE_URL}pexels-vlada-karpovich-7433836.jpg`,
    imageAlt: 'Reflejos en edificio de vidrio — crecimiento financiero',
  },
  {
    id: 'velocidad',
    label: '04 — VELOCIDAD',
    question: '¿Tus proyectos avanzan a la velocidad esperada?',
    imageUrl: `${import.meta.env.BASE_URL}pexels-mikael-blomkvist-6476261.jpg`,
    imageAlt: 'Estelas de luz en movimiento — velocidad de ejecución',
  },
];

interface ModuleCellProps {
  module: DesafioModule;
}

function ModuleCell({ module }: ModuleCellProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        /* Quieter v2.2: always white — "card on surface" contrast with #f4f6f9 section bg */
        /* Hover feedback delivered by colorize image layers (filter + green overlay) */
        backgroundColor: '#ffffff',
        borderRadius: '0px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Photo block · 3:1 landscape (horizontal / slim) ── */}
      {/*
       * Colorize v2.2 — Three-layer technical greyscale system:
       *   L1 img filter  : grayscale(0.88) contrast(1.08) brightness(0.88)
       *   L2 tint overlay: rgba(132,189,42,0.06) · mix-blend-mode: multiply
       *   Hover          : grayscale recedes to 0.45 · overlay lifts to 0.10
       *   Radius         : 0px on both container and img — never rounded
       */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '21 / 9',
          overflow: 'hidden',
          flexShrink: 0,
          borderRadius: '0px',
        }}
      >
        {/* L1 — Base image: near-monochrome, high-contrast industrial */}
        <img
          src={module.imageUrl}
          alt={module.imageAlt}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            display: 'block',
            borderRadius: '0px',
            filter: hovered
              ? 'grayscale(0.45) contrast(1.05) brightness(0.95)'
              : 'grayscale(0.88) contrast(1.08) brightness(0.88)',
            transition: 'filter 400ms ease',
          }}
        />

        {/* L2 — Action Green engineered tint (multiply blend, not a wash) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(132, 189, 42, 1)',
            mixBlendMode: 'multiply',
            opacity: hovered ? 0.10 : 0.06,
            transition: 'opacity 400ms ease',
            borderRadius: '0px',
            pointerEvents: 'none',
          }}
        />

        {/* L3 — Navy darkening vignette: gives depth, anchors label chip */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(11,51,76,0.28) 0%, transparent 45%)',
            borderRadius: '0px',
            pointerEvents: 'none',
          }}
        />

        {/* Label overlay — axis anchor (24px on 8pt system) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '24px',
            backgroundColor: 'rgba(12, 52, 77, 0.90)',
            padding: '4px 8px',
            borderRadius: '0px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: GREEN,
              textTransform: 'uppercase',
            }}
          >
            {module.label}
          </span>
        </div>
      </div>

      {/* ── Question block · minimal padding ── */}
      <div
        style={{
          padding: '24px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '16px',
        }}
        className="desafio-text-block"
      >
        <p
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: 'clamp(14px, 1.3vw, 18px)',
            fontWeight: 700,
            /* Typeset v2.2: Solid Dark Navy var(--henka-navy) @ 100% — locked */
            color: 'var(--henka-navy)',
            lineHeight: '24px',
            margin: 0,
            letterSpacing: '-0.2px',
            textAlign: 'left',
          }}
          className="desafio-question"
        >
          {module.question}
        </p>

        {/* Axis accent bar */}
        <div
          style={{
            width: hovered ? '40px' : '24px',
            height: '2px',
            backgroundColor: NAVY,
            transition: 'width 300ms ease',
            flexShrink: 0,
          }}
        />
      </div>
    </div>
  );
}

export function GanchosSection() {
  return (
    <section
      id="ganchos"
      aria-label="Los Desafíos"
      className="desafio-section-surface"
      style={{
        /*
         * Quieter v2.2 — Surface Light background layer
         * Background : #f4f6f9 (Surface Light)
         * Boundaries : 1px solid rgba(11,51,76,0.15) hairlines above + below
         * Unification: Wraps title and grid. 64px top pad, 48px gap to grid.
         * Radius     : 0px — strict engineering aesthetic
         */
        width: '100%',
        backgroundColor: '#f4f6f9',
        borderTop: `1px solid ${LINE_COLOR}`,
        borderBottom: `1px solid ${LINE_COLOR}`,
        paddingTop: '64px',
        paddingBottom: '32px',
      }}
    >
      {/* ── SECTION HEADER ── */}
      <div 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          marginBottom: '0px',
          position: 'relative'
        }}
        className="desafio-header-wrapper"
      >
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-open-sans)',
            fontSize: '12px',
            fontWeight: 700,
            color: NAVY,
            opacity: 0.6,
            letterSpacing: '1.5px',
            lineHeight: '1',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            padding: '0 24px',
            marginBottom: '16px',
          }}
        >
          EL DESAFÍO
        </span>
        {/* Full-width schematic line */}
        <div style={{ width: '100%', height: '1px', backgroundColor: LINE_COLOR }} />
      </div>
      {/*
       * Outer wrapper — full-width for hairline bleed,
       * inner constrained to 1200px master grid
       */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          margin: '0 auto',
          padding: '16px 0 0 0',
        }}
        className="desafio-master-wrapper"
      >
        {/* ═══════════════════════════════════
         *  HAIRLINE INFRASTRUCTURE — zIndex 10
         * ═══════════════════════════════════ */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          {/* Perimeter hairlines */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,  height: '1px', backgroundColor: LINE_COLOR }} />
          <div style={{ position: 'absolute', top: '16px', bottom: 0, left: 0,   width: '1px',  backgroundColor: LINE_COLOR }} />
          <div style={{ position: 'absolute', top: '16px', bottom: 0, right: 0,  width: '1px',  backgroundColor: LINE_COLOR }} />
          {/* Default 1x4 dividers */}
          <div className="divider-25" style={{ position: 'absolute', top: '16px', bottom: 0, left: '25%', width: '1px', backgroundColor: LINE_COLOR }} />
          <div className="divider-50" style={{ position: 'absolute', top: '16px', bottom: 0, left: '50%', width: '1px', backgroundColor: LINE_COLOR }} />
          <div className="divider-75" style={{ position: 'absolute', top: '16px', bottom: 0, left: '75%', width: '1px', backgroundColor: LINE_COLOR }} />
          {/* Fallback 2x2 row divider */}
          <div className="divider-row-50" style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', backgroundColor: LINE_COLOR, display: 'none' }} />
        </div>

        {/* ═══════════════════════════════════
         *  2×2 GRID
         * ═══════════════════════════════════ */}
        <div
          className="desafio-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {modules.map((mod) => (
            <ModuleCell key={mod.id} module={mod} />
          ))}
        </div>
      </div>

      {/* ── Responsive overrides ── */}
      <style>{`
        /* Typeset v2.2 — Question fill: Solid Dark Navy var(--henka-navy) @ 100% */
        .desafio-question {
          color: var(--henka-navy) !important;
          font-family: var(--font-open-sans) !important;
          font-weight: 700 !important;
          text-align: left !important;
        }
        /* Quieter v2.2 — Surface boundary hairlines on section element */
        /* borderTop/borderBottom are set inline; this rule documents the token */
        .desafio-section-surface {
          background-color: #f4f6f9;
        }
        @media (max-width: 1024px) {
          .desafio-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .divider-25, .divider-75 {
            display: none !important;
          }
          .divider-row-50 {
            display: block !important;
          }
        }
        @media (max-width: 720px) {
          .desafio-grid {
            grid-template-columns: 1fr !important;
          }
          .desafio-header-wrapper {
            margin-bottom: 0px !important;
          }
          .desafio-master-wrapper {
            /* Restore typical viewport padding structurally on mobile if strictly needed */
            padding: 16px 16px 0 16px !important;
          }
          .desafio-text-block {
            padding: 24px !important;
          }
          /* Hide all inner absolute hairlines as they no longer map to simple columns */
          .divider-25, .divider-50, .divider-75, .divider-row-50 {
            display: none !important;
          }
          /* On mobile, reduce vertical padding */
          .desafio-section-surface {
            padding-top: 48px !important;
            padding-bottom: 24px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .desafio-grid img {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
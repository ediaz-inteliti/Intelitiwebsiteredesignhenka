import { useState } from 'react';
import { SectionHeader } from '../SectionHeader';

const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';
const NAVY = '#0b334c';
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
    imageUrl: '/pexels-sora-shimazaki-5668492.jpg',
    imageAlt: 'Arquitectura corporativa moderna — solidez organizacional',
  },
  {
    id: 'adopcion',
    label: '02 — ADOPCIÓN',
    question: '¿Tu equipo adoptó los cambios o herramientas implementadas?',
    imageUrl: '/pexels-gustavo-fring-6285082.jpg',
    imageAlt: 'Colaboración profesional en entorno técnico',
  },
  {
    id: 'roi',
    label: '03 — ROI',
    question: '¿Tus proyectos están dando el retorno de inversión esperado?',
    imageUrl: '/pexels-vlada-karpovich-7433836.jpg',
    imageAlt: 'Reflejos en edificio de vidrio — crecimiento financiero',
  },
  {
    id: 'velocidad',
    label: '04 — VELOCIDAD',
    question: '¿Tus proyectos avanzan a la velocidad esperada?',
    imageUrl: '/pexels-mikael-blomkvist-6476261.jpg',
    imageAlt: 'Estelas de luz en movimiento — velocidad de ejecución',
  },
];

function ModuleCell({ module }: { module: DesafioModule }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo block — 21:9 landscape */}
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
            transition: 'filter 400ms cubic-bezier(0.25, 0, 0, 1)',
          }}
        />

        {/* Green tint overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(132, 189, 42, 1)',
            mixBlendMode: 'multiply',
            opacity: hovered ? 0.1 : 0.06,
            transition: 'opacity 400ms cubic-bezier(0.25, 0, 0, 1)',
            borderRadius: '0px',
            pointerEvents: 'none',
          }}
        />

        {/* Navy vignette */}
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

        {/* Label chip */}
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

      {/* Question block */}
      <div
        className="desafio-text-block"
        style={{
          padding: '24px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '16px',
        }}
      >
        <p
          className="desafio-question"
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: 'clamp(14px, 1.3vw, 18px)',
            fontWeight: 700,
            color: NAVY,
            lineHeight: '24px',
            margin: 0,
            letterSpacing: '-0.2px',
            textAlign: 'left',
          }}
        >
          {module.question}
        </p>

        <div
          style={{
            width: hovered ? '40px' : '24px',
            height: '2px',
            backgroundColor: NAVY,
            transition: 'width 300ms cubic-bezier(0.25, 0, 0, 1)',
            flexShrink: 0,
          }}
        />
      </div>
    </div>
  );
}

export function TheChallenge() {
  return (
    <section
      id="ganchos"
      aria-label="Los Desafíos"
      className="desafio-section-surface"
      style={{
        width: '100%',
        backgroundColor: '#f4f6f9',
        borderTop: `1px solid ${LINE_COLOR}`,
        borderBottom: `1px solid ${LINE_COLOR}`,
        paddingTop: '64px',
        paddingBottom: '32px',
      }}
    >
      {/* Section Header */}
      <SectionHeader label="EL DESAFÍO" />

      {/* Grid wrapper — constrained to 1200px to align with SectionHeader hairline */}
      <div
        className="desafio-master-wrapper"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 0 0 0',
          position: 'relative',
        }}
      >
        {/* Hairline infrastructure — positioned relative to 1200px container */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', backgroundColor: LINE_COLOR }} />
          <div style={{ position: 'absolute', top: '16px', bottom: 0, left: 0, width: '1px', backgroundColor: LINE_COLOR }} />
          <div style={{ position: 'absolute', top: '16px', bottom: 0, right: 0, width: '1px', backgroundColor: LINE_COLOR }} />
          <div className="divider-25" style={{ position: 'absolute', top: '16px', bottom: 0, left: '25%', width: '1px', backgroundColor: LINE_COLOR }} />
          <div className="divider-50" style={{ position: 'absolute', top: '16px', bottom: 0, left: '50%', width: '1px', backgroundColor: LINE_COLOR }} />
          <div className="divider-75" style={{ position: 'absolute', top: '16px', bottom: 0, left: '75%', width: '1px', backgroundColor: LINE_COLOR }} />
          <div className="divider-row-50" style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', backgroundColor: LINE_COLOR, display: 'none' }} />
        </div>

        {/* 1×4 Grid */}
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

      <style>{`
        .desafio-question {
          color: #0b334c !important;
          font-family: var(--font-open-sans) !important;
          font-weight: 700 !important;
          text-align: left !important;
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
            padding: 16px 16px 0 16px !important;
          }
          .desafio-text-block {
            padding: 24px !important;
          }
          .divider-25, .divider-50, .divider-75, .divider-row-50 {
            display: none !important;
          }
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

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/*
 * Henka Style Guide v2.2 — "Pure Swiss Grid · Services"
 * ──────────────────────────────────────────────────────
 * Grid lines:   #0b334c at 15% opacity (subtle skeleton)
 * Labels:       12px Regular, #82bd23
 * Titles:       32px Bold, #0b334c
 * Tags:         14px Regular, #0b334c, 16px gap
 * Spacing:      8pt system — 64px vertical row padding
 * Hover:        Full-viewport-width #f4f6f9, instant swap
 * Radius:       Strict 0px
 * Arrow:        1px stroke, 45°, appears on hover
 */

const NAVY = '#0b334c';
const GREEN = '#82bd23';
const GRID_LINE = 'rgba(11, 51, 76, 0.15)';
const HOVER_BG = '#f4f6f9';

interface Service {
  number: string;
  title: string;
  capabilities: string[];
}

const services: Service[] = [
  {
    number: '01',
    title: 'Diagnóstico Organizacional',
    capabilities: ['Modelo de Madurez', 'Evaluación de Capacidad', 'Mapeo de Stakeholders', 'Análisis de Brechas'],
  },
  {
    number: '02',
    title: 'Gestión del Cambio',
    capabilities: ['Estrategia de Adopción', 'Comunicación del Cambio', 'Planes de Mitigación', 'Gestión de Resistencia'],
  },
  {
    number: '03',
    title: 'Coaching Ejecutivo',
    capabilities: ['Liderazgo Transformacional', 'Desarrollo de Competencias', 'Alineación Estratégica', 'Mentoría C-Suite'],
  },
  {
    number: '04',
    title: 'Formación & Desarrollo',
    capabilities: ['Programas On-Demand', 'Talleres Presenciales', 'Certificaciones Internas', 'E-Learning Corporativo'],
  },
  {
    number: '05',
    title: 'Transformación Cultural',
    capabilities: ['Diseño de Cultura', 'Valores Organizacionales', 'Medición de Clima', 'Rituales de Innovación'],
  },
];

/**
 * Full-viewport 1px grid line — subtle structural divider.
 * No markers; structure is felt through precision alignment.
 */
function GridLine() {
  return (
    <div
      className="svc-grid-line"
      style={{
        position: 'relative',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        height: '1px',
        backgroundColor: GRID_LINE,
      }}
    />
  );
}

/**
 * Full-viewport-width service row.
 * The hover background bleeds edge-to-edge while
 * content stays constrained to the 1200px master grid.
 */
function ServiceRow({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="svc-row-outer"
      style={{
        /* Full viewport bleed for hover background */
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        backgroundColor: isHovered ? HOVER_BG : 'transparent',
        /* Mechanical: instant swap, zero transition */
        transition: 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content container — matches master grid */}
      <div
        className="svc-row-inner"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px max(32px, 5vw)',
          display: 'grid',
          gridTemplateColumns: '72px 1fr',
          alignItems: 'start',
          gap: '0',
        }}
      >
        {/* ── Col 1: Accent marker ── */}
        <span
          style={{
            display: 'block',
            width: '24px',
            height: '2px',
            backgroundColor: GREEN,
            marginTop: '16px',
          }}
          aria-hidden="true"
        />

        {/* ── Col 2: Title + Tags ── */}
        <div>
          {/* Title row with hover arrow */}
          <div className="flex items-start gap-3" style={{ marginBottom: '16px' }}>
            <h3
              className="svc-title"
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: '32px',
                fontWeight: 700,
                color: NAVY,
                lineHeight: 1.25,
                margin: 0,
                letterSpacing: '-0.5px',
              }}
            >
              {service.title}
            </h3>
            {/* Precision 45° arrow — 1px stroke, instant show on hover */}
            <div
              className="svc-arrow"
              style={{
                opacity: isHovered ? 1 : 0,
                transition: 'none',
                flexShrink: 0,
                marginTop: '8px',
              }}
            >
              <ArrowUpRight size={20} strokeWidth={1} style={{ color: NAVY }} />
            </div>
          </div>

          {/* Sub-service tags — auto layout flow */}
          <div
            className="svc-tags-wrap"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 16px',
            }}
          >
            {service.capabilities.map((cap, capIdx) => (
              <span
                key={capIdx}
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: NAVY,
                  lineHeight: 1.6,
                  padding: '4px 0',
                  borderBottom: isHovered
                    ? `1px solid ${GRID_LINE}`
                    : '1px solid transparent',
                  transition: 'none',
                }}
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <div
      className="services-grid-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Service rows — each row bleeds full width for hover */}
      {services.map((service) => (
        <div key={service.number}>
          <div
            className="mx-auto"
            style={{
              maxWidth: '1200px',
              padding: '0 max(32px, 5vw)',
            }}
          >
            <GridLine />
          </div>
          <ServiceRow service={service} />
        </div>
      ))}

      {/* Bottom closing grid line */}
      <div
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          padding: '0 max(32px, 5vw)',
        }}
      >
        <GridLine />
      </div>

      {/* ── Responsive overrides ── */}
      <style>{`
        /* Tablet */
        @media (max-width: 900px) {
          .svc-row-inner {
            grid-template-columns: 56px 1fr !important;
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
          .svc-title {
            font-size: 24px !important;
          }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .svc-row-inner {
            grid-template-columns: 1fr !important;
            padding-top: 24px !important;
            padding-bottom: 24px !important;
            gap: 8px !important;
          }
          .svc-title {
            font-size: 20px !important;
          }
          .svc-tags-wrap {
            gap: 8px 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
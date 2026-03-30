import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/*
 * Henka Style Guide v2.3 — "Engineering Table · 2×5 Services Grid"
 * ──────────────────────────────────────────────────────────────────────────
 * Layout:      2-column CSS Grid (5 items × 2 cols), 1px center divider
 * Grid lines:  #0b334c at 15% opacity — top, bottom, between rows, center col
 * Labels:      11px Bold #84bd2a — index numbers
 * Titles:      22px Bold #0b334c — Open Sans
 * Tags:        11px Regular #0b334c at 55% — capability annotations
 * Spacing:     8pt system — 28px vertical cell padding
 * Hover:       Cell-scoped #f4f6f9, cursor pointer
 * Radius:      Strict 0px
 * Arrow:       1px stroke, appears on hover
 * Icons:       1px stroke, schematic line-art SVG, 24×24, fixed left axis
 */

const NAVY = '#0b334c';
const GREEN = '#84bd2a';
const GRID_LINE = 'rgba(11, 51, 76, 0.15)';
const HOVER_BG = '#f4f6f9';

// ── Schematic 1px line-art SVG icons ──
const SvcIcons: Record<string, React.FC> = {
  diagnostico: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="9" x2="22" y2="9" stroke={GREEN} strokeWidth="1" />
      <line x1="9" y1="2" x2="9" y2="22" stroke={GREEN} strokeWidth="1" />
      <circle cx="15.5" cy="15.5" r="3" stroke={GREEN} strokeWidth="1" />
      <line x1="17.5" y1="17.5" x2="22" y2="22" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  cambio: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <polyline points="2,18 7,12 11,15 16,7 22,10" stroke={GREEN} strokeWidth="1" fill="none" />
      <line x1="2" y1="22" x2="22" y2="22" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="2" x2="2" y2="22" stroke={GREEN} strokeWidth="1" />
      <circle cx="16" cy="7" r="2" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  coaching: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7" r="3.5" stroke={GREEN} strokeWidth="1" />
      <circle cx="5" cy="18" r="2.5" stroke={GREEN} strokeWidth="1" />
      <circle cx="19" cy="18" r="2.5" stroke={GREEN} strokeWidth="1" />
      <line x1="12" y1="10.5" x2="5" y2="15.5" stroke={GREEN} strokeWidth="1" />
      <line x1="12" y1="10.5" x2="19" y2="15.5" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  formacion: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" stroke={GREEN} strokeWidth="1" />
      <line x1="3" y1="10" x2="21" y2="10" stroke={GREEN} strokeWidth="1" />
      <line x1="9" y1="10" x2="9" y2="19" stroke={GREEN} strokeWidth="1" />
      <line x1="6" y1="13" x2="7.5" y2="13" stroke={GREEN} strokeWidth="1" />
      <line x1="6" y1="15.5" x2="7.5" y2="15.5" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  cultura: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="12" width="20" height="10" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="12" x2="12" y2="3" stroke={GREEN} strokeWidth="1" />
      <line x1="22" y1="12" x2="12" y2="3" stroke={GREEN} strokeWidth="1" />
      <line x1="8" y1="12" x2="8" y2="22" stroke={GREEN} strokeWidth="1" />
      <line x1="16" y1="12" x2="16" y2="22" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="17" x2="22" y2="17" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  estrategia: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="9" height="9" stroke={GREEN} strokeWidth="1" />
      <rect x="13" y="2" width="9" height="9" stroke={GREEN} strokeWidth="1" />
      <rect x="2" y="13" width="9" height="9" stroke={GREEN} strokeWidth="1" />
      <rect x="13" y="13" width="9" height="9" stroke={GREEN} strokeWidth="1" />
      <line x1="11" y1="6.5" x2="13" y2="6.5" stroke={GREEN} strokeWidth="1" />
      <line x1="11" y1="17.5" x2="13" y2="17.5" stroke={GREEN} strokeWidth="1" />
      <line x1="6.5" y1="11" x2="6.5" y2="13" stroke={GREEN} strokeWidth="1" />
      <line x1="17.5" y1="11" x2="17.5" y2="13" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  tecnologia: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="14" stroke={GREEN} strokeWidth="1" />
      <line x1="3" y1="14" x2="21" y2="14" stroke={GREEN} strokeWidth="1" />
      <line x1="9" y1="20" x2="15" y2="20" stroke={GREEN} strokeWidth="1" />
      <line x1="12" y1="18" x2="12" y2="20" stroke={GREEN} strokeWidth="1" />
      <line x1="7" y1="8" x2="10" y2="11" stroke={GREEN} strokeWidth="1" />
      <line x1="10" y1="11" x2="14" y2="7" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  comunicacion: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="15" height="11" stroke={GREEN} strokeWidth="1" />
      <line x1="5" y1="7" x2="14" y2="7" stroke={GREEN} strokeWidth="1" />
      <line x1="5" y1="10" x2="11" y2="10" stroke={GREEN} strokeWidth="1" />
      <polyline points="2,14 7,19 17,14" stroke={GREEN} strokeWidth="1" fill="none" />
      <rect x="14" y="10" width="8" height="8" stroke={GREEN} strokeWidth="1" />
      <line x1="16" y1="13" x2="20" y2="13" stroke={GREEN} strokeWidth="1" />
      <line x1="16" y1="15.5" x2="19" y2="15.5" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  medicion: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="16" width="4" height="6" stroke={GREEN} strokeWidth="1" />
      <rect x="10" y="10" width="4" height="12" stroke={GREEN} strokeWidth="1" />
      <rect x="17" y="4" width="4" height="18" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="22" x2="22" y2="22" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="4" x2="22" y2="4" stroke={GREEN} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  ),
  sostenibilidad: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={GREEN} strokeWidth="1" />
      <circle cx="12" cy="12" r="4" stroke={GREEN} strokeWidth="1" />
      <line x1="12" y1="3" x2="12" y2="8" stroke={GREEN} strokeWidth="1" />
      <line x1="12" y1="16" x2="12" y2="21" stroke={GREEN} strokeWidth="1" />
      <line x1="3" y1="12" x2="8" y2="12" stroke={GREEN} strokeWidth="1" />
      <line x1="16" y1="12" x2="21" y2="12" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
};

interface Service {
  number: string;
  title: string;
  capabilities: string[];
  iconKey: string;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Diagnóstico Organizacional',
    capabilities: ['Modelo de Madurez', 'Evaluación de Capacidad', 'Mapeo de Stakeholders', 'Análisis de Brechas'],
    iconKey: 'diagnostico',
  },
  {
    number: '02',
    title: 'Gestión del Cambio',
    capabilities: ['Estrategia de Adopción', 'Comunicación del Cambio', 'Planes de Mitigación', 'Gestión de Resistencia'],
    iconKey: 'cambio',
  },
  {
    number: '03',
    title: 'Coaching Ejecutivo',
    capabilities: ['Liderazgo Transformacional', 'Desarrollo de Competencias', 'Alineación Estratégica', 'Mentoría C-Suite'],
    iconKey: 'coaching',
  },
  {
    number: '04',
    title: 'Formación & Desarrollo',
    capabilities: ['Programas On-Demand', 'Talleres Presenciales', 'Certificaciones Internas', 'E-Learning Corporativo'],
    iconKey: 'formacion',
  },
  {
    number: '05',
    title: 'Transformación Cultural',
    capabilities: ['Diseño de Cultura', 'Valores Organizacionales', 'Medición de Clima', 'Rituales de Innovación'],
    iconKey: 'cultura',
  },
  {
    number: '06',
    title: 'Estrategia de Transformación',
    capabilities: ['Visión Estratégica', 'Roadmap por Fases', 'OKRs de Cambio', 'Gestión de Portafolio'],
    iconKey: 'estrategia',
  },
  {
    number: '07',
    title: 'Adopción Tecnológica',
    capabilities: ['ERP / CRM / HRIS', 'Rollout Strategy', 'Superuser Network', 'Hypercare Post-Go-Live'],
    iconKey: 'tecnologia',
  },
  {
    number: '08',
    title: 'Comunicación Estratégica',
    capabilities: ['Narrativa de Cambio', 'Planes Multicanal', 'Segmentación de Audiencias', 'Crisis Communication'],
    iconKey: 'comunicacion',
  },
  {
    number: '09',
    title: 'Medición & ROI Transformacional',
    capabilities: ['ROI-T Dashboard', 'NPS Interno', 'Retention Analytics', 'Executive Reports'],
    iconKey: 'medicion',
  },
  {
    number: '10',
    title: 'Sostenibilidad del Cambio',
    capabilities: ['Change Champions', 'Gobierno del Cambio', 'Health Reviews', 'Self-Sufficiency Model'],
    iconKey: 'sostenibilidad',
  },
];

// ── Cell: one service entry ──
function ServiceCell({ service, side }: { service: Service; side: 'left' | 'right' }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = SvcIcons[service.iconKey];

  return (
    <div
      className="svc-cell"
      style={{
        backgroundColor: isHovered ? HOVER_BG : 'transparent',
        cursor: 'pointer',
        // Inner padding: 28px top/bottom; 40px toward center divider, 0 toward outer edge
        padding: side === 'left' ? '28px 40px 28px 0' : '28px 0 28px 40px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Row: [index 28px] [icon 24px + 12px gap] [title + arrow] */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>

        {/* Index number — fixed width anchors vertical axis */}
        <span
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            color: GREEN,
            minWidth: '28px',
            flexShrink: 0,
            paddingTop: '3px',
            lineHeight: 1,
          }}
        >
          {service.number}
        </span>

        {/* Icon — 24×24, aligned to column axis (28px from cell edge) */}
        <div style={{ width: '24px', flexShrink: 0, paddingTop: '1px' }}>
          {Icon && <Icon />}
        </div>

        {/* Content: title + capability tags */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Title row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
            }}
          >
            <h3
              className="svc-title"
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: '22px',
                fontWeight: 700,
                color: NAVY,
                lineHeight: 1.2,
                margin: 0,
                letterSpacing: '-0.3px',
                textAlign: 'left',
              }}
            >
              {service.title}
            </h3>
            <div
              style={{
                opacity: isHovered ? 1 : 0,
                transition: 'none',
                flexShrink: 0,
              }}
            >
              <ArrowUpRight size={15} strokeWidth={1} style={{ color: NAVY }} />
            </div>
          </div>

          {/* Capability tags — Open Sans Regular per spec */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px' }}>
            {service.capabilities.map((cap, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                  color: NAVY,
                  opacity: 0.55,
                  lineHeight: 1.6,
                  textTransform: 'uppercase',
                  textAlign: 'left',
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

// ── Hairline divider ──
function Hairline() {
  return <div style={{ height: '1px', backgroundColor: GRID_LINE }} />;
}

export function ServicesGrid() {
  const leftCol = services.slice(0, 5);
  const rightCol = services.slice(5, 10);

  return (
    <div className="services-grid-section" style={{ position: 'relative' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>

        {/* Top bounding hairline */}
        <Hairline />

        {/* 2-column engineering table: [left col] [1px divider] [right col] */}
        <div
          className="svc-table"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1px 1fr',
          }}
        >
          {/* Left column: 01–05 */}
          <div>
            {leftCol.map((svc, i) => (
              <div key={svc.number}>
                {i > 0 && <Hairline />}
                <ServiceCell service={svc} side="left" />
              </div>
            ))}
          </div>

          {/* Vertical center divider — stretches to full table height via Grid */}
          <div style={{ backgroundColor: GRID_LINE }} />

          {/* Right column: 06–10 */}
          <div>
            {rightCol.map((svc, i) => (
              <div key={svc.number}>
                {i > 0 && <Hairline />}
                <ServiceCell service={svc} side="right" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bounding hairline */}
        <Hairline />
      </div>

      <style>{`
        /* Tablet: narrow columns, reduce font size */
        @media (max-width: 900px) {
          .svc-title {
            font-size: 19px !important;
          }
          .svc-cell {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
        /* Mobile: single column, remove center divider */
        @media (max-width: 680px) {
          .svc-table {
            grid-template-columns: 1fr !important;
          }
          /* Hide the 1px center divider column */
          .svc-table > div:nth-child(2) {
            display: none !important;
          }
          .svc-cell {
            padding: 24px 0 !important;
          }
          .svc-title {
            font-size: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}

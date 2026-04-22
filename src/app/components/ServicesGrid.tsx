import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/*
 * Henka Style Guide v3.0 — "Engineering Table · 3×3 Business Solutions Grid"
 * ──────────────────────────────────────────────────────────────────────────────
 * Layout:      3-column CSS Grid (3×3 = 9 items), 1px hairlines via gap trick
 * Grid lines:  GRID_LINE color bleeds through 1px gap — no doubled borders
 * Labels:      11px Bold #84bd2a — index numbers 01–09
 * Titles:      clamp(15px, 1.3vw, 18px) Bold var(--henka-navy) — Open Sans
 * Tags:        10px Regular var(--henka-navy) at 55% — uppercase sub-points
 * Spacing:     8pt system — 28px vertical, 24px horizontal cell padding
 * Hover:       Cell-scoped #f4f6f9, cursor pointer
 * Radius:      Strict 0px
 * Arrow:       1px stroke, snaps in on hover (no transition — blueprint precision)
 * Icons:       1px stroke, schematic line-art SVG, 24×24, fixed left axis
 */

const NAVY = 'var(--henka-navy)';
const GREEN = '#84bd2a';
const GRID_LINE = 'rgba(11, 51, 76, 0.15)';
const HOVER_BG = '#f4f6f9';

// ── Schematic 1px line-art SVG icons — mapped to 9 solutions ──
const SvcIcons: Record<string, React.FC> = {
  // PVE — bar chart with dashed ROI target line
  pve: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="16" width="4" height="6" stroke={GREEN} strokeWidth="1" />
      <rect x="10" y="10" width="4" height="12" stroke={GREEN} strokeWidth="1" />
      <rect x="17" y="4" width="4" height="18" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="22" x2="22" y2="22" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="4" x2="22" y2="4" stroke={GREEN} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  ),
  // Adopción Tecnológica — monitor with upward check
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
  // Gestión del Cambio — trend line with apex circle
  cambio: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <polyline points="2,18 7,12 11,15 16,7 22,10" stroke={GREEN} strokeWidth="1" fill="none" />
      <line x1="2" y1="22" x2="22" y2="22" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="2" x2="2" y2="22" stroke={GREEN} strokeWidth="1" />
      <circle cx="16" cy="7" r="2" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  // Transformación del Negocio — 4-quadrant connected matrix
  transformacion: () => (
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
  // Dimensionamiento del Talento — analysis grid with search lens
  talento: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" stroke={GREEN} strokeWidth="1" />
      <line x1="2" y1="9" x2="22" y2="9" stroke={GREEN} strokeWidth="1" />
      <line x1="9" y1="2" x2="9" y2="22" stroke={GREEN} strokeWidth="1" />
      <circle cx="15.5" cy="15.5" r="3" stroke={GREEN} strokeWidth="1" />
      <line x1="17.5" y1="17.5" x2="22" y2="22" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  // Organización Centrada en el Cliente — hub-and-spoke people network
  cliente: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7" r="3.5" stroke={GREEN} strokeWidth="1" />
      <circle cx="5" cy="18" r="2.5" stroke={GREEN} strokeWidth="1" />
      <circle cx="19" cy="18" r="2.5" stroke={GREEN} strokeWidth="1" />
      <line x1="12" y1="10.5" x2="5" y2="15.5" stroke={GREEN} strokeWidth="1" />
      <line x1="12" y1="10.5" x2="19" y2="15.5" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  // Modelos de Conocimiento Sostenible — concentric target with cardinal axes
  conocimiento: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={GREEN} strokeWidth="1" />
      <circle cx="12" cy="12" r="4" stroke={GREEN} strokeWidth="1" />
      <line x1="12" y1="3" x2="12" y2="8" stroke={GREEN} strokeWidth="1" />
      <line x1="12" y1="16" x2="12" y2="21" stroke={GREEN} strokeWidth="1" />
      <line x1="3" y1="12" x2="8" y2="12" stroke={GREEN} strokeWidth="1" />
      <line x1="16" y1="12" x2="21" y2="12" stroke={GREEN} strokeWidth="1" />
    </svg>
  ),
  // Endomarketing Corporativo — dual message bubbles
  endomarketing: () => (
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
  // Educación — curriculum table with header row
  educacion: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" stroke={GREEN} strokeWidth="1" />
      <line x1="3" y1="10" x2="21" y2="10" stroke={GREEN} strokeWidth="1" />
      <line x1="9" y1="10" x2="9" y2="19" stroke={GREEN} strokeWidth="1" />
      <line x1="6" y1="13" x2="7.5" y2="13" stroke={GREEN} strokeWidth="1" />
      <line x1="6" y1="15.5" x2="7.5" y2="15.5" stroke={GREEN} strokeWidth="1" />
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
    title: 'Project Value Ecosystem',
    capabilities: ['PMO de Valor', 'ROI de Inversión', 'Value Tracker App'],
    iconKey: 'pve',
  },
  {
    number: '02',
    title: 'Adopción Tecnológica',
    capabilities: ['Go-Live', 'Curva de Aprendizaje', 'Centro de Competencias'],
    iconKey: 'tecnologia',
  },
  {
    number: '03',
    title: 'Gestión del Cambio',
    capabilities: ['Estrategia de Adopción', 'Agentes de Cambio', 'Cultura Corporativa'],
    iconKey: 'cambio',
  },
  {
    number: '04',
    title: 'Transformación del Negocio',
    capabilities: ['Hoja de Ruta', 'Modelos Operativos', 'Rediseño de Procesos'],
    iconKey: 'transformacion',
  },
  {
    number: '05',
    title: 'Dimensionamiento del Talento',
    capabilities: ['Analítica de Datos', 'Headcount Inteligente', 'KPIs de Negocio'],
    iconKey: 'talento',
  },
  {
    number: '06',
    title: 'Organización Centrada en el Cliente',
    capabilities: ['Customer Centric', 'Customer Journey', 'Cultura de Servicio'],
    iconKey: 'cliente',
  },
  {
    number: '07',
    title: 'Modelos de Conocimiento Sostenible',
    capabilities: ['Capital Intelectual', 'Retención del Saber', 'Continuidad Operativa'],
    iconKey: 'conocimiento',
  },
  {
    number: '08',
    title: 'Endomarketing Corporativo',
    capabilities: ['Marca Empleadora', 'Employee Centric', 'Comunicación Estratégica'],
    iconKey: 'endomarketing',
  },
  {
    number: '09',
    title: 'Educación',
    capabilities: ['CMC Certificación', 'Diplomado Henka', 'Talleres In-Company'],
    iconKey: 'educacion',
  },
];

// ── Cell: one business solution entry ──
function ServiceCell({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = SvcIcons[service.iconKey];

  return (
    <div
      className="svc-cell"
      style={{
        backgroundColor: isHovered ? HOVER_BG : '#ffffff',
        cursor: 'pointer',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Row: [index 28px] [icon 24px] [title + tags] */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>

        {/* Index number — green, fixed-width axis anchor */}
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

        {/* Icon — 24×24, schematic line-art */}
        <div style={{ width: '24px', flexShrink: 0, paddingTop: '1px' }}>
          {Icon && <Icon />}
        </div>

        {/* Content: title + capability sub-points */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Title row with snap-in arrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              marginBottom: '8px',
            }}
          >
            <h3
              className="svc-title"
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: 'clamp(15px, 1.3vw, 18px)',
                fontWeight: 700,
                color: NAVY,
                lineHeight: 1.25,
                margin: 0,
                letterSpacing: '-0.2px',
                textAlign: 'left',
                flex: 1,
              }}
            >
              {service.title}
            </h3>
            <div
              style={{
                opacity: isHovered ? 1 : 0,
                transition: 'none',
                flexShrink: 0,
                paddingTop: '2px',
              }}
            >
              <ArrowUpRight size={15} strokeWidth={1} style={{ color: NAVY }} />
            </div>
          </div>

          {/* Capability sub-points — uppercase, 10px, 55% navy */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px' }}>
            {service.capabilities.map((cap, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                  color: NAVY,
                  opacity: 0.55,
                  lineHeight: 1.6,
                  textTransform: 'uppercase',
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
    <div className="services-grid-section" style={{ position: 'relative' }}>
      <div className="mx-auto px-8" style={{ maxWidth: '1200px' }}>

        {/*
         * 3×3 grid using the gap-as-hairline technique:
         * backgroundColor on the container shows through 1px gap = clean hairlines.
         * border on container provides the outer frame.
         * No doubled lines, no margin hacks.
         */}
        <div
          className="svc-table"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            backgroundColor: GRID_LINE,
            border: `1px solid ${GRID_LINE}`,
          }}
        >
          {services.map((svc) => (
            <ServiceCell key={svc.number} service={svc} />
          ))}
        </div>
      </div>

      <style>{`
        /* Tablet: 2-column layout */
        @media (max-width: 960px) {
          .svc-table {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .svc-title {
            font-size: 17px !important;
          }
        }
        /* Mobile: single column, flush padding */
        @media (max-width: 640px) {
          .svc-table {
            grid-template-columns: 1fr !important;
          }
          .svc-cell {
            padding: 24px 0 !important;
          }
          .svc-title {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}

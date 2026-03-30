import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/*
 * Henka Style Guide v2.2 — "Pure Swiss Grid · Services (Expanded 10-item)"
 * ──────────────────────────────────────────────────────────────────────────
 * Grid lines:   #0b334c at 15% opacity (subtle skeleton)
 * Labels:       12px Regular, #84bd2a
 * Titles:       28px Bold, #0b334c
 * Description:  14px Regular, rgba(11,51,76,0.65)
 * Tags:         13px Regular, #0b334c, 16px gap
 * Spacing:      8pt system — 48px vertical row padding
 * Hover:        Full-viewport-width #f4f6f9, instant swap
 * Radius:       Strict 0px
 * Arrow:        1px stroke, 45°, appears on hover
 * Icons:        1px stroke, schematic line-art SVG, 24×24
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
  description: string;
  capabilities: string[];
  iconKey: string;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Diagnóstico Organizacional',
    description:
      'Evaluación de madurez en cinco ejes críticos: procesos, personas, tecnología, liderazgo y cultura. Entregable: Índice de Preparación con benchmark sectorial y hoja de ruta priorizada.',
    capabilities: ['Modelo de Madurez', 'Evaluación de Capacidad', 'Mapeo de Stakeholders', 'Análisis de Brechas'],
    iconKey: 'diagnostico',
  },
  {
    number: '02',
    title: 'Gestión del Cambio',
    description:
      'Despliegue del modelo ADKAR con planes de comunicación segmentados. Dashboards en tiempo real para monitorear tasas de adopción y alertas de resistencia organizacional.',
    capabilities: ['Estrategia de Adopción', 'Comunicación del Cambio', 'Planes de Mitigación', 'Gestión de Resistencia'],
    iconKey: 'cambio',
  },
  {
    number: '03',
    title: 'Coaching Ejecutivo',
    description:
      'Programa LEAD™ de 12 semanas con coaching 1:1 certificado. Desarrollo de capacidades directivas: escucha activa, ejecución estratégica, alineación organizacional y toma de decisiones.',
    capabilities: ['Liderazgo Transformacional', 'Desarrollo de Competencias', 'Alineación Estratégica', 'Mentoría C-Suite'],
    iconKey: 'coaching',
  },
  {
    number: '04',
    title: 'Formación & Desarrollo',
    description:
      'Ecosistema de aprendizaje híbrido: talleres presenciales, módulos e-learning corporativos y programas a demanda. Certificaciones internas alineadas a marcos internacionales (PMI, Prosci, ICF).',
    capabilities: ['Programas On-Demand', 'Talleres Presenciales', 'Certificaciones Internas', 'E-Learning Corporativo'],
    iconKey: 'formacion',
  },
  {
    number: '05',
    title: 'Transformación Cultural',
    description:
      'Mapeo de artefactos culturales, valores implícitos y rituales operativos. Diseño de arquitectura cultural objetivo con KPIs de clima medidos en ciclos de 90 días y revisiones de Cultura OS™.',
    capabilities: ['Diseño de Cultura', 'Valores Organizacionales', 'Medición de Clima', 'Rituales de Innovación'],
    iconKey: 'cultura',
  },
  {
    number: '06',
    title: 'Estrategia de Transformación',
    description:
      'Co-diseño de la visión estratégica de transformación. Definición de OKRs de cambio, roadmap ejecutivo por fases e identificación de quick-wins de alto impacto en los primeros 90 días.',
    capabilities: ['Visión Estratégica', 'Roadmap por Fases', 'OKRs de Cambio', 'Gestión de Portafolio'],
    iconKey: 'estrategia',
  },
  {
    number: '07',
    title: 'Adopción Tecnológica',
    description:
      'Gestión de la adopción de plataformas ERP, CRM, HRIS y herramientas de colaboración. Estrategias de rollout, capacitación de superusuarios y hypercare post-implementación.',
    capabilities: ['ERP / CRM / HRIS', 'Rollout Strategy', 'Superuser Network', 'Hypercare Post-Go-Live'],
    iconKey: 'tecnologia',
  },
  {
    number: '08',
    title: 'Comunicación Estratégica',
    description:
      'Diseño de narrativas de cambio y planes de comunicación multicanal. Segmentación por stakeholder, medición de efectividad de mensajes y gestión de momentos críticos de la transición.',
    capabilities: ['Narrativa de Cambio', 'Planes Multicanal', 'Segmentación de Audiencias', 'Crisis Communication'],
    iconKey: 'comunicacion',
  },
  {
    number: '09',
    title: 'Medición & ROI Transformacional',
    description:
      'Sistema de métricas de ROI transformacional: productividad, retención de talento, velocidad de decisión y NPS interno. Reportes ejecutivos con modelos de correlación causal validados.',
    capabilities: ['ROI-T Dashboard', 'NPS Interno', 'Retention Analytics', 'Executive Reports'],
    iconKey: 'medicion',
  },
  {
    number: '10',
    title: 'Sostenibilidad del Cambio',
    description:
      'Institucionalización del cambio mediante gobierno, roles de Change Champion y revisiones de salud organizacional trimestrales. Modelo de auto-suficiencia a 18 meses post-proyecto.',
    capabilities: ['Change Champions', 'Gobierno del Cambio', 'Health Reviews', 'Self-Sufficiency Model'],
    iconKey: 'sostenibilidad',
  },
];

function GridLine() {
  return (
    <div
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

function ServiceRow({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = SvcIcons[service.iconKey];

  return (
    <div
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        backgroundColor: isHovered ? HOVER_BG : 'transparent',
        transition: 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="svc-row-inner"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '48px max(32px, 5vw)',
          display: 'grid',
          gridTemplateColumns: '56px 52px 1fr',
          alignItems: 'start',
          gap: '0 24px',
        }}
      >
        {/* Col 1: Index number */}
        <span
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            color: GREEN,
            paddingTop: '4px',
          }}
        >
          {service.number}
        </span>

        {/* Col 2: Schematic icon */}
        <div style={{ paddingTop: '2px' }}>
          {Icon && <Icon />}
        </div>

        {/* Col 3: Content */}
        <div>
          {/* Title row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
            <h3
              className="svc-title"
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: '28px',
                fontWeight: 700,
                color: NAVY,
                lineHeight: 1.2,
                margin: 0,
                letterSpacing: '-0.4px',
              }}
            >
              {service.title}
            </h3>
            <div
              style={{
                opacity: isHovered ? 1 : 0,
                transition: 'none',
                flexShrink: 0,
                marginTop: '6px',
              }}
            >
              <ArrowUpRight size={18} strokeWidth={1} style={{ color: NAVY }} />
            </div>
          </div>

          {/* Technical description */}
          <p
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(11, 51, 76, 0.65)',
              lineHeight: 1.65,
              margin: '0 0 14px 0',
              maxWidth: '680px',
            }}
          >
            {service.description}
          </p>

          {/* Capability tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px' }}>
            {service.capabilities.map((cap, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  color: NAVY,
                  lineHeight: 1.6,
                  padding: '3px 0',
                  borderBottom: isHovered ? `1px solid ${GRID_LINE}` : '1px solid transparent',
                  transition: 'none',
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
    <div
      className="services-grid-section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {services.map((service) => (
        <div key={service.number}>
          <div
            className="mx-auto"
            style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}
          >
            <GridLine />
          </div>
          <ServiceRow service={service} />
        </div>
      ))}

      {/* Bottom closing grid line */}
      <div
        className="mx-auto"
        style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}
      >
        <GridLine />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .svc-row-inner {
            grid-template-columns: 40px 40px 1fr !important;
            gap: 0 16px !important;
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
          .svc-title {
            font-size: 22px !important;
          }
        }
        @media (max-width: 560px) {
          .svc-row-inner {
            grid-template-columns: 1fr !important;
            padding-top: 24px !important;
            padding-bottom: 24px !important;
          }
          .svc-title {
            font-size: 19px !important;
          }
        }
      `}</style>
    </div>
  );
}
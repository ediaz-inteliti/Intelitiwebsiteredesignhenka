import { ClipboardCheck, Workflow, UserCog, GraduationCap, Zap } from 'lucide-react';
import { useState } from 'react';

export function MainContent() {
  // Set first panel (index 0) as expanded by default
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const services = [
    {
      icon: ClipboardCheck,
      title: 'Modelo de Madurez y Diagnóstico',
      description: 'Evaluación profunda de la capacidad de cambio.'
    },
    {
      icon: Workflow,
      title: 'Gestión del Cambio Estratégico',
      description: 'Metodologías probadas para la adopción organizacional.'
    },
    {
      icon: UserCog,
      title: 'Coaching y Liderazgo Ejecutivo',
      description: 'Preparando a la alta gerencia para la reinvención.'
    },
    {
      icon: GraduationCap,
      title: 'Educación y Formación On-Demand',
      description: 'Capacitación ágil y escalable para equipos modernos.'
    },
    {
      icon: Zap,
      title: 'Transformación Cultural Digital',
      description: 'Alineando la cultura con la nueva era tecnológica.'
    }
  ];

  return (
    <section id="servicios" style={{ backgroundColor: '#ffffff', paddingTop: '48px', paddingBottom: '0px', overflowX: 'hidden' }}>
      <div className="mx-auto mb-12" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '64px' }}>
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: 'var(--font-open-sans)',
              fontSize: '48px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--henka-navy)',
              lineHeight: '1.2',
              textAlign: 'left'
            }}
          >
            Nuestras Áreas de Experticia
          </h2>
          <p 
            style={{ 
              fontFamily: 'var(--font-open-sans)',
              fontSize: '16px',
              color: 'var(--henka-navy)',
              lineHeight: '1.6',
              maxWidth: '640px',
              textAlign: 'left'
            }}
          >
            Soluciones integrales diseñadas para guiar su proceso de transformación con rigor y agilidad.
          </p>
        </div>
      </div>

      {/* Horizontal Expansion Accordion - Full Width */}
      <div 
        className="horizontal-accordion"
        style={{
          display: 'flex',
          width: '100%',
          height: '500px',
          borderRadius: '0px',
          overflow: 'hidden'
        }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredIndex === index;
          const isCollapsed = hoveredIndex !== null && !isHovered;
          
          // Calculate width based on state
          const width = isHovered 
            ? '45%' 
            : isCollapsed 
              ? `${55 / (services.length - 1)}%`
              : `${100 / services.length}%`;
          
          return (
            <div
              key={index}
              className="accordion-panel"
              style={{
                width,
                backgroundColor: isHovered 
                  ? 'var(--henka-navy)' 
                  : index % 2 === 0 ? '#ffffff' : '#f4f6f9',
                transition: 'all 400ms ease-in-out',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: isHovered ? '40px' : '40px',
                borderLeft: isHovered ? '4px solid #84bd2a' : '1px solid #97bde6',
                borderRadius: '0px',
                boxShadow: isHovered
                  ? '0 8px 24px rgba(12, 52, 77, 0.08)'
                  : '0 4px 15px rgba(0, 0, 0, 0.06)',
                minHeight: '0'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              {/* Collapsed State - Vertical Layout */}
              {!isHovered && (
                <>
                  {/* Icon at Top */}
                  <div style={{ marginBottom: '24px', flexShrink: 0 }}>
                    <Icon 
                      size={40} 
                      strokeWidth={1.5}
                      style={{ color: '#84bd2a' }} 
                    />
                  </div>
                  
                  {/* Vertical Title */}
                  <div
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '18px',
                      fontWeight: '700',
                      color: 'var(--henka-navy)',
                      lineHeight: '1.4',
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {service.title}
                  </div>
                </>
              )}

              {/* Expanded State - Horizontal Layout */}
              {isHovered && (
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '24px',
                  alignItems: 'flex-start',
                  width: '100%'
                }}>
                  {/* Icon */}
                  <div style={{ flexShrink: 0 }}>
                    <Icon 
                      size={48} 
                      strokeWidth={1.5}
                      style={{ color: '#84bd2a' }} 
                    />
                  </div>
                  
                  {/* Horizontal Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '28px',
                      fontWeight: '700',
                      color: '#ffffff',
                      lineHeight: '1.3',
                      margin: 0,
                      width: '100%',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '16px',
                      fontWeight: 'var(--font-weight-normal)',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      opacity: 0.9,
                      margin: 0,
                      width: '100%',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* "Saber más" Link */}
                  <a
                    href="#"
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '16px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: '#84bd2a',
                      textDecoration: 'none',
                      borderBottom: '1px solid #84bd2a',
                      paddingBottom: '2px',
                      transition: 'opacity 200ms ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    Saber más →
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Responsive Styles */}
      <style>{`
        /* Mobile & Tablet - Vertical Stack */}
        @media (max-width: 1024px) {
          .horizontal-accordion {
            flex-direction: column !important;
            height: auto !important;
          }
          
          .accordion-panel {
            width: 100% !important;
            min-height: 120px;
            padding: 40px !important;
          }
          
          .accordion-panel > div:first-child {
            flex-direction: row !important;
            align-items: center !important;
            gap: 24px;
          }
          
          .accordion-panel > div:first-child > div:first-child {
            margin-bottom: 0 !important;
          }
          
          .accordion-panel > div:first-child > div:last-child {
            writing-mode: horizontal-tb !important;
            white-space: normal !important;
          }
        }

        @media (max-width: 640px) {
          .accordion-panel {
            padding: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
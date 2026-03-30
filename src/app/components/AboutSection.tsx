import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const achievements = [
    'Más de 20 años de experiencia en consultoría estratégica',
    'Más de 500 proyectos exitosos en América Latina',
    'Equipo de 60+ consultores especializados',
    'Presencia en 12 países de la región'
  ];

  const stats = [
    { value: '20+', label: 'Años de Experiencia' },
    { value: '500+', label: 'Proyectos Exitosos' },
    { value: '60+', label: 'Consultores' },
    { value: '12', label: 'Países' }
  ];

  return (
    <section 
      id="nosotros"
      className="py-24"
      style={{ backgroundColor: 'var(--henka-navy)' }}
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--henka-white)',
                lineHeight: '1.3'
              }}
            >
              Liderando la Transformación Empresarial en América Latina
            </h2>
            <p 
              className="mb-8"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: 'var(--text-body)',
                color: 'var(--henka-white)',
                opacity: 0.9,
                lineHeight: '1.7'
              }}
            >
              Henka Consulting nace de la visión de crear un puente entre la estrategia y la ejecución. 
              Trabajamos con empresas líderes para diseñar e implementar soluciones que generan 
              valor sostenible y ventajas competitivas duraderas.
            </p>

            {/* Achievements List */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 
                    size={24} 
                    style={{ color: 'var(--henka-green)', flexShrink: 0, marginTop: '2px' }} 
                  />
                  <p 
                    style={{ 
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: 'var(--text-body)',
                      color: 'var(--henka-white)',
                      opacity: 0.9
                    }}
                  >
                    {achievement}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="px-8 py-4 transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-semibold)',
                backgroundColor: 'var(--henka-green)',
                color: 'var(--henka-white)',
                borderRadius: '0px'
              }}
            >
              Conozca Más Sobre Nosotros
            </button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 text-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div 
                  className="mb-2"
                  style={{ 
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '48px',
                    fontWeight: 'var(--font-weight-extrabold)',
                    color: 'var(--henka-green)',
                    lineHeight: '1'
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  style={{ 
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '14px',
                    color: 'var(--henka-white)',
                    opacity: 0.85
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

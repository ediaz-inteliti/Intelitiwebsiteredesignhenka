import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      {/* Background with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#0c344d'
        }}
      />
      
      <div className="relative mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
        <h2 
          className="mb-6"
          style={{ 
            fontFamily: 'var(--font-open-sans)',
            fontSize: '48px',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--henka-white)',
            lineHeight: '1.2',
            textAlign: 'left'
          }}
        >
          ¿Listo para Transformar Su Empresa?
        </h2>
        
        <p 
          className="mb-10"
          style={{ 
            fontFamily: 'var(--font-open-sans)',
            fontSize: 'var(--text-body)',
            color: 'var(--henka-white)',
            opacity: 0.9,
            lineHeight: '1.7',
            maxWidth: '640px',
            textAlign: 'left'
          }}
        >
          Agende una consulta gratuita con nuestros expertos y descubra cómo podemos 
          ayudarle a alcanzar sus objetivos estratégicos más ambiciosos.
        </p>

        <div className="flex flex-col sm:flex-row justify-start items-stretch" style={{ gap: '24px' }}>
          <button
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-semibold)',
              backgroundColor: '#84bd2a',
              color: '#ffffff',
              borderRadius: '0px',
              border: 'none',
              cursor: 'pointer',
              transition: 'none',
              height: '56px',
              padding: '0 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '2px 2px 0px #0b334c';
              e.currentTarget.style.transform = 'translate(-1px, -1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translate(0, 0)';
            }}
          >
            <span className="flex items-center gap-2">
              Agendar Consulta Gratuita
              <ArrowRight size={20} />
            </span>
          </button>

          <button
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-semibold)',
              backgroundColor: 'transparent',
              color: '#ffffff',
              borderRadius: '0px',
              border: '1px solid #ffffff',
              cursor: 'pointer',
              transition: 'none',
              height: '56px',
              padding: '0 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
            <span className="flex items-center gap-2">
              <Mail size={20} />
              Contáctenos
            </span>
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div>
            <div 
              className="mb-2"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '28px',
                fontWeight: 'var(--font-weight-extrabold)',
                color: 'var(--henka-green)'
              }}
            >
              98%
            </div>
            <div 
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '14px',
                color: 'var(--henka-white)',
                opacity: 0.85
              }}
            >
              Satisfacción del Cliente
            </div>
          </div>

          <div>
            <div 
              className="mb-2"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '28px',
                fontWeight: 'var(--font-weight-extrabold)',
                color: 'var(--henka-green)'
              }}
            >
              24/7
            </div>
            <div 
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '14px',
                color: 'var(--henka-white)',
                opacity: 0.85
              }}
            >
              Soporte Disponible
            </div>
          </div>

          <div>
            <div 
              className="mb-2"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '28px',
                fontWeight: 'var(--font-weight-extrabold)',
                color: 'var(--henka-green)'
              }}
            >
              100%
            </div>
            <div 
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '14px',
                color: 'var(--henka-white)',
                opacity: 0.85
              }}
            >
              Garantía de Calidad
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
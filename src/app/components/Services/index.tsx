import { ServicesGrid } from '../ServicesGrid';
import { SectionHeader } from '../SectionHeader';

const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';
const NAVY = 'var(--henka-navy)';

export function Services() {
  return (
    <section
      id="servicios"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '96px',
        paddingBottom: '0px',
        overflowX: 'clip',
      }}
    >
      {/* Section Divider — eyebrow + hairline */}
      <SectionHeader label="SOLUCIONES DE NEGOCIO" />

      {/* Section heading */}
      <div
        className="mx-auto px-8"
        style={{ maxWidth: '1200px' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.2,
            textAlign: 'center',
            marginTop: '64px',
            marginBottom: '48px',
          }}
        >
          Metodologías probadas por personas, para personas.
        </h2>
      </div>

      {/* Services Grid Table */}
      <ServicesGrid />
    </section>
  );
}

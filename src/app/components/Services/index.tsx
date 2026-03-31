import { ServicesGrid } from '../ServicesGrid';
import { SectionHeader } from '../SectionHeader';

const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';
const NAVY = '#0b334c';

export function Services() {
  return (
    <section
      id="servicios"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '96px',
        paddingBottom: '0px',
        overflowX: 'hidden',
      }}
    >
      {/* Section Divider — eyebrow + hairline */}
      <SectionHeader label="NUESTROS SERVICIOS" />

      {/* Section heading */}
      <div
        className="mx-auto"
        style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: '48px',
            fontWeight: 700,
            color: NAVY,
            lineHeight: 1.2,
            textAlign: 'left',
            maxWidth: '720px',
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

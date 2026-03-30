import { ServicesGrid } from './ServicesGrid';

export function TeamSection() {
  return (
    <section
      id="servicios"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '0px',
        paddingBottom: '0px',
        overflowX: 'hidden',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
        <h2
          style={{
            fontFamily: 'var(--font-open-sans)',
            fontSize: '48px',
            fontWeight: '700',
            color: '#0b334c',
            lineHeight: '1.2',
            textAlign: 'left',
            maxWidth: '720px',
            marginTop: '64px',
            marginBottom: '48px',
          }}
        >
          Metodologías probadas por personas, para personas.
        </h2>
      </div>

      <ServicesGrid />
    </section>
  );
}
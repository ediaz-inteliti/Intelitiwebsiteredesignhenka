export function BlockSection() {
  return (
    <section 
      className="py-24"
      style={{ backgroundColor: 'var(--henka-white)' }}
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 
            className="mb-6"
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--henka-navy)',
              lineHeight: '1.3'
            }}
          >
            Block
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'var(--text-body)',
              color: 'var(--henka-navy)',
              opacity: 0.7,
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Contenido adicional de bloque informativo que complementa la propuesta de valor de Henka Consulting.
          </p>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  // Anonymous attribution tied to verified client logos
  const testimonials = [
    {
      quote: "Henka Consulting transformó completamente nuestra organización. Su enfoque estratégico y metodología nos permitieron alcanzar resultados que superaron nuestras expectativas.",
      role: "CEO",
      company: "Banistmo",
      logo: "https://henkaconsulting.com/app/uploads/2021/05/banistmo-logo-1-1.jpg"
    },
    {
      quote: "El acompañamiento durante nuestro proceso de transformación digital fue excepcional. El equipo de Henka demostró un profundo entendimiento de nuestras necesidades.",
      role: "Director de Operaciones",
      company: "Atlas",
      logo: "https://henkaconsulting.com/app/uploads/2021/05/atlas.jpg"
    },
    {
      quote: "Trabajar con Henka fue un punto de inflexión para nuestra empresa. Su experiencia en gestión del cambio hizo la diferencia en la adopción exitosa de nuevos procesos.",
      role: "VP de Recursos Humanos",
      company: "Pfizer",
      logo: "https://henkaconsulting.com/app/uploads/2021/05/pfizer-1.jpg"
    }
  ];

  return (
    <section 
      id="testimoniales"
      className="py-24"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="mx-auto max-w-7xl px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--henka-navy)',
              marginBottom: '16px'
            }}
          >
            Clientes, aliados y testimoniales
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: 'var(--text-body)',
              color: 'var(--henka-navy)',
              opacity: 0.7,
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Lo que nuestros clientes dicen sobre nosotros
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                backgroundColor: 'var(--henka-white)',
                padding: '40px',
                borderRadius: '0px',
                boxShadow: '0 2px 8px rgba(12, 52, 77, 0.05)'
              }}
            >
              {/* Company Logo */}
              <div className="mb-5">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="object-contain"
                  style={{
                    width: '90px',
                    height: '40px',
                    filter: 'grayscale(100%)',
                    opacity: 0.65
                  }}
                />
              </div>

              {/* Quote */}
              <p
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: '15px',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--henka-navy)',
                  lineHeight: '1.7',
                  fontStyle: 'italic',
                  flex: 1
                }}
              >
                "{testimonial.quote}"
              </p>

              {/* Attribution */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--henka-navy)',
                    marginBottom: '2px'
                  }}
                >
                  {testimonial.role}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '13px',
                    fontWeight: 'var(--font-weight-normal)',
                    color: 'var(--henka-navy)',
                    opacity: 0.6
                  }}
                >
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
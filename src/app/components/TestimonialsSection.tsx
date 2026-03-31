interface Person {
  name: string;
  role: string;
  company: string;
  imageSrc: string;
}

const people: Person[] = [
  {
    name: 'Ana Martínez',
    role: 'Directora de Transformación Digital',
    company: 'Sector Farmacéutico',
    imageSrc:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=700&fit=crop&crop=faces,top',
  },
  {
    name: 'Carlos Restrepo',
    role: 'VP de Operaciones',
    company: 'Consumo Masivo',
    imageSrc:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=700&fit=crop&crop=faces,top',
  },
  {
    name: 'Daniela Torres',
    role: 'Gerente de Desarrollo Organizacional',
    company: 'Bienes de Consumo',
    imageSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=700&fit=crop&crop=faces,top',
  },
  {
    name: 'Miguel Herrera',
    role: 'Director General',
    company: 'Sector Financiero',
    imageSrc:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=700&fit=crop&crop=faces,top',
  },
  {
    name: 'Valeria Sánchez',
    role: 'Chief People Officer',
    company: 'Infraestructura',
    imageSrc:
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=700&fit=crop&crop=faces,top',
  },
];

const HAIRLINE = '1px solid rgba(11, 51, 76, 0.15)';
const H_DESKTOP = 140;
const H_MOBILE = 180;

export function TestimonialsSection() {
  return (
    <div className="mx-auto ts-root" style={{ maxWidth: '1200px' }}>

      {/* ── Desktop (≥1024px): 5-column horizontal strip ── */}
      <div
        className="ts-desktop"
        style={{ display: 'flex', alignItems: 'stretch', width: '100%', height: `${H_DESKTOP}px` }}
      >
        {people.map((person, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'stretch', flex: 1 }}>
            {/* Portrait frame — overflow:hidden clips the scale transform */}
            <div style={{ flex: 1, overflow: 'hidden', height: `${H_DESKTOP}px` }}>
              <img
                src={person.imageSrc}
                alt={`${person.name} — ${person.role}`}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  borderRadius: '0px',
                  transition: 'transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
            {/* Vertical blueprint hairline between frames */}
            {index < people.length - 1 && (
              <div
                aria-hidden="true"
                style={{
                  width: '1px',
                  height: `${H_DESKTOP}px`,
                  backgroundColor: 'rgba(11, 51, 76, 0.15)',
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ── Tablet (768–1023px): 3×2 grid ── */}
      <div className="ts-tablet" style={{ display: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {people.map((person, index) => (
            <div
              key={index}
              style={{
                overflow: 'hidden',
                height: `${H_DESKTOP}px`,
                borderRight:
                  index % 3 !== 2 && index !== people.length - 1 ? HAIRLINE : 'none',
                borderBottom:
                  Math.floor(index / 3) < Math.floor((people.length - 1) / 3) ? HAIRLINE : 'none',
              }}
            >
              <img
                src={person.imageSrc}
                alt={`${person.name} — ${person.role}`}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  borderRadius: '0px',
                  transition: 'transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile (<768px): 2-column stack ── */}
      <div className="ts-mobile" style={{ display: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {people.map((person, index) => (
            <div
              key={index}
              style={{
                overflow: 'hidden',
                height: `${H_MOBILE}px`,
                borderRight:
                  index % 2 === 0 && index !== people.length - 1 ? HAIRLINE : 'none',
                borderBottom:
                  Math.floor(index / 2) < Math.floor((people.length - 1) / 2) ? HAIRLINE : 'none',
              }}
            >
              <img
                src={person.imageSrc}
                alt={`${person.name} — ${person.role}`}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  borderRadius: '0px',
                  transition: 'transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .ts-desktop { display: flex  !important; }
          .ts-tablet  { display: none  !important; }
          .ts-mobile  { display: none  !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .ts-desktop { display: none  !important; }
          .ts-tablet  { display: block !important; }
          .ts-mobile  { display: none  !important; }
        }
        @media (max-width: 767px) {
          .ts-desktop { display: none  !important; }
          .ts-tablet  { display: none  !important; }
          .ts-mobile  { display: block !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ts-root img { transition: none !important; }
        }
      `}</style>
    </div>
  );
}

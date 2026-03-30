import { useState } from 'react';
import { ServicesGrid } from './ServicesGrid';

interface TeamDot {
  id: string;
  label: string;
  name: string;
  role: string;
  x: string;
  y: string;
}

export function TeamSection() {
  const [activeDot, setActiveDot] = useState<string | null>(null);

  const teamDots: TeamDot[] = [
    { id: 'A', label: 'A', name: 'Adriana M.', role: 'Change Management Director', x: '22%', y: '38%' },
    { id: 'L', label: 'L', name: 'Luis R.', role: 'Organizational Transformation Lead', x: '52%', y: '30%' },
    { id: 'M', label: 'M', name: 'Mariela G.', role: 'Change Management Expert', x: '75%', y: '45%' },
    { id: 'C', label: 'C', name: 'Carlos D.', role: 'Executive Leadership Coach', x: '40%', y: '58%' },
  ];

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

        {/* 1. Methodology Headline — positioned below METODOLOGÍA divider */}
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
            marginBottom: '32px',
          }}
        >
          Metodologías probadas por personas, para personas.
        </h2>

        {/* 2. Interactive Human Canvas */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            marginBottom: '80px',
            borderRadius: '0px',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=1400&h=600&fit=crop"
            alt="Equipo de consultores Henka en sesión de trabajo colaborativo"
            style={{
              width: '100%',
              height: '520px',
              objectFit: 'cover',
              borderRadius: '0px',
              display: 'block',
            }}
          />

          {/* Interactive Tag Dots */}
          {teamDots.map((dot) => {
            const isActive = activeDot === dot.id;
            return (
              <div
                key={dot.id}
                style={{
                  position: 'absolute',
                  left: dot.x,
                  top: dot.y,
                  zIndex: isActive ? 20 : 10,
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setActiveDot(dot.id)}
                onMouseLeave={() => setActiveDot(null)}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: isActive ? '#84bd2a' : '#0c344d',
                    borderRadius: '0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 300ms ease, transform 300ms ease',
                    transform: isActive ? 'scale(1.15)' : 'scale(1)',
                    boxShadow: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#ffffff',
                      lineHeight: '1',
                    }}
                  >
                    {dot.label}
                  </span>
                </div>

                {/* Tooltip */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 'calc(100% + 12px)',
                    left: '50%',
                    transform: `translateX(-50%) ${isActive ? 'translateY(0)' : 'translateY(4px)'}`,
                    backgroundColor: '#0c344d',
                    borderRadius: '0px',
                    padding: '14px 20px',
                    whiteSpace: 'nowrap',
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                    transition: 'opacity 250ms ease, transform 250ms ease',
                    boxShadow: 'none',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%) rotate(45deg)',
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#0c344d',
                    }}
                  />
                  <div
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#ffffff',
                      lineHeight: '1.3',
                      marginBottom: '4px',
                    }}
                  >
                    {dot.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '12px',
                      fontWeight: '400',
                      color: 'rgba(255, 255, 255, 0.75)',
                      lineHeight: '1.3',
                    }}
                  >
                    {dot.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Services Blueprint Grid */}
      <ServicesGrid />
    </section>
  );
}
import React from 'react';

const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';

const clients = [
  { name: 'Pfizer',    url: 'https://henkaconsulting.com/app/uploads/2021/05/pfizer-1.jpg' },
  { name: 'P&G',       url: 'https://henkaconsulting.com/app/uploads/2021/06/PROCTER-181x138-1.png' },
  { name: 'PepsiCo',   url: 'https://henkaconsulting.com/app/uploads/2021/06/PepsiCo.jpg' },
  { name: 'Banistmo',  url: 'https://henkaconsulting.com/app/uploads/2021/05/banistmo-logo-1-1.jpg' },
  { name: 'Atlas',     url: 'https://henkaconsulting.com/app/uploads/2021/05/atlas.jpg' },
];

// Triple the set so the track is always wider than any viewport;
// animation shifts by exactly -1/3 of total width (= one set width) for a seamless loop.
const marqueeLogos = [...clients, ...clients, ...clients];

export function ClientLogos() {
  return (
    <div
      className="cl-outer"
      aria-label="Clientes de Henka Consulting"
      style={{ height: '120px', overflow: 'hidden', position: 'relative' }}
    >
      <div
        className="cl-track"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          width: 'max-content',
          animation: 'clMarquee 32s linear infinite',
          willChange: 'transform',
        }}
      >
        {marqueeLogos.map((client, i) => (
          <React.Fragment key={i}>
            {/* Logo slot */}
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 48px',
                flexShrink: 0,
              }}
            >
              <img
                src={client.url}
                alt={client.name}
                loading="lazy"
                className="cl-logo"
                style={{
                  maxHeight: '80px',
                  maxWidth: '160px',
                  height: 'auto',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '0px',
                  background: 'transparent',
                  display: 'block',
                  flexShrink: 0,
                  transition: 'transform 250ms cubic-bezier(0.25, 0, 0, 1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
            {/* 1px vertical hairline separator */}
            <div
              aria-hidden="true"
              style={{
                width: '1px',
                height: '48px',
                backgroundColor: LINE_COLOR,
                flexShrink: 0,
              }}
            />
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes clMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        /* Pause the whole track on hover; individual logos still scale via onMouseEnter */
        .cl-outer:hover .cl-track {
          animation-play-state: paused;
        }
        .cl-logo {
          cursor: default;
        }
        @media (prefers-reduced-motion: reduce) {
          .cl-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

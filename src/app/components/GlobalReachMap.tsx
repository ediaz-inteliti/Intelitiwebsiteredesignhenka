import { useEffect, useRef, useState } from 'react';

/**
 * GlobalReachMap — Module [03]
 * Architectural schematic world map with:
 * - Continental contours at 15% navy opacity (SVG paths)
 * - Green (#84bd2a) solid dots = office / engagement nodes
 * - Network connection lines between nodes
 * - Surface-light (#f4f6f9) background, 1px hairline top/bottom
 * - Adjacent statistical annotation block (left-aligned)
 */

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  region: string;
}

// Nodes positioned on a 800×400 SVG viewBox (approximate geographic centroids)
const NODES: Node[] = [
  { id: 'MEX', x: 140,  y: 185, label: 'MEX',  region: 'NORTEAMÉRICA' },
  { id: 'COL', x: 178,  y: 232, label: 'COL',  region: 'LATINOAMÉRICA' },
  { id: 'BRA', x: 220,  y: 265, label: 'BRA',  region: 'LATINOAMÉRICA' },
  { id: 'ARG', x: 198,  y: 320, label: 'ARG',  region: 'LATINOAMÉRICA' },
  { id: 'ESP', x: 378,  y: 148, label: 'ESP',  region: 'EUROPA' },
  { id: 'GBR', x: 375,  y: 120, label: 'GBR',  region: 'EUROPA' },
  { id: 'DEU', x: 400,  y: 128, label: 'DEU',  region: 'EUROPA' },
  { id: 'UAE', x: 510,  y: 185, label: 'UAE',  region: 'ORIENTE MEDIO' },
  { id: 'IND', x: 560,  y: 200, label: 'IND',  region: 'ASIA-PAC' },
  { id: 'SGP', x: 620,  y: 240, label: 'SGP',  region: 'ASIA-PAC' },
  { id: 'USA', x: 130,  y: 160, label: 'USA',  region: 'NORTEAMÉRICA' },
  { id: 'CAN', x: 130,  y: 125, label: 'CAN',  region: 'NORTEAMÉRICA' },
];

// Edges — pairs of node IDs forming the network
const EDGES: [string, string][] = [
  ['USA',  'MEX'], ['MEX',  'COL'], ['COL',  'BRA'], ['BRA',  'ARG'],
  ['USA',  'GBR'], ['GBR',  'ESP'], ['ESP',  'DEU'], ['DEU',  'UAE'],
  ['UAE',  'IND'], ['IND',  'SGP'], ['GBR',  'UAE'], ['COL',  'ESP'],
  ['MEX',  'ESP'], ['USA',  'DEU'], ['CAN',  'USA'], ['BRA',  'DEU'],
];

// Simplified continental contour paths for a 800×400 viewBox
// These are approximate stylized outlines — blueprint aesthetic
const CONTINENTS = [
  // North America
  'M 80 80 L 100 70 L 160 75 L 185 95 L 200 120 L 190 150 L 175 170 L 165 200 L 155 215 L 145 210 L 135 180 L 110 160 L 90 140 L 80 120 Z',
  // South America
  'M 155 215 L 175 210 L 200 225 L 215 250 L 225 280 L 215 320 L 200 350 L 185 340 L 175 310 L 165 280 L 155 250 Z',
  // Europe
  'M 355 90 L 420 80 L 440 100 L 430 125 L 410 140 L 380 150 L 360 140 L 350 120 Z',
  // Africa
  'M 370 165 L 430 160 L 460 185 L 455 240 L 430 290 L 400 310 L 375 285 L 360 250 L 355 200 Z',
  // Asia + Middle East
  'M 440 90 L 560 80 L 640 100 L 680 130 L 670 170 L 620 185 L 560 190 L 510 175 L 470 160 L 450 130 Z',
  // Southeast Asia
  'M 600 195 L 660 200 L 680 230 L 650 255 L 620 250 L 595 235 Z',
  // Australia
  'M 610 275 L 680 270 L 710 295 L 700 330 L 660 345 L 620 330 L 600 305 Z',
];

function getNodeById(id: string) {
  return NODES.find((n) => n.id === id);
}

export function GlobalReachMap() {
  const [revealed, setRevealed] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const LINE_COLOR = 'rgba(11, 51, 76, 0.15)';
  const NAVY = 'var(--henka-navy)';
  const GREEN = '#84bd2a';

  const stats = [
    { value: '+12', label: 'Países con presencia activa' },
    { value: '6', label: 'Regiones de operación global' },
    { value: '70%', label: 'Tasa de adopción sostenida' },
    { value: '18M', label: 'Personas impactadas / año' },
  ];

  return (
    <div
      ref={sectionRef}
      id="global-reach"
      style={{
        backgroundColor: '#f4f6f9',
        position: 'relative',
      }}
    >
      {/* Top 1px hairline */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '1px',
          backgroundColor: LINE_COLOR,
        }}
      />
      {/* Bottom 1px hairline */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '1px',
          backgroundColor: LINE_COLOR,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px max(32px, 5vw)',
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: '64px',
          alignItems: 'center',
        }}
        className="reach-layout"
      >
        {/* === LEFT: Map schematic === */}
        <div style={{ position: 'relative' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '3px',
              color: GREEN,
              textTransform: 'uppercase',
              marginBottom: '24px',
              opacity: revealed ? 1 : 0,
              transition: 'opacity 0.6s ease 0.1s',
            }}
          >
            ALCANCE GLOBAL / NETWORK MAP v2.1
          </div>

          {/* SVG World Map */}
          <div
            style={{
              border: `1px solid ${LINE_COLOR}`,
              position: 'relative',
              overflow: 'hidden',
              opacity: revealed ? 1 : 0,
              transition: 'opacity 0.8s ease 0.2s',
            }}
          >
            <svg
              viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              {/* Background grid — blueprint texture */}
              <defs>
                <pattern id="grid-reach" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke={LINE_COLOR} strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="800" height="400" fill="#f4f6f9" />
              <rect width="800" height="400" fill="url(#grid-reach)" />

              {/* Continental contours — 15% navy opacity, no fill */}
              {CONTINENTS.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="rgba(11, 51, 76, 0.06)"
                  stroke={`rgba(11, 51, 76, 0.15)`}
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              ))}

              {/* Network edges — connecting lines */}
              {EDGES.map(([fromId, toId], i) => {
                const from = getNodeById(fromId);
                const to = getNodeById(toId);
                if (!from || !to) return null;
                const isActiveEdge =
                  hoveredNode === fromId || hoveredNode === toId;
                return (
                  <line
                    key={i}
                    x1={from.x} y1={from.y}
                    x2={to.x}   y2={to.y}
                    stroke={isActiveEdge ? GREEN : `rgba(11, 51, 76, 0.18)`}
                    strokeWidth={isActiveEdge ? 1.2 : 0.75}
                    strokeDasharray={isActiveEdge ? '' : '3 3'}
                    style={{ transition: 'stroke 200ms ease, stroke-width 200ms ease' }}
                  />
                );
              })}

              {/* Node dots */}
              {NODES.map((node) => {
                const isActive = hoveredNode === node.id;
                return (
                  <g key={node.id}>
                    {/* Outer ring on hover */}
                    {isActive && (
                      <circle
                        cx={node.x} cy={node.y} r={10}
                        fill="none"
                        stroke={GREEN}
                        strokeWidth="0.75"
                        opacity={0.5}
                      />
                    )}
                    {/* Main dot */}
                    <circle
                      cx={node.x} cy={node.y}
                      r={isActive ? 5 : 3.5}
                      fill={GREEN}
                      stroke="#f4f6f9"
                      strokeWidth="1"
                      style={{
                        cursor: 'pointer',
                        transition: 'r 200ms ease',
                      }}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    />
                    {/* Node label */}
                    <text
                      x={node.x + 7} y={node.y + 3}
                      fontFamily="var(--font-open-sans)"
                      fontSize="7"
                      fontWeight="700"
                      fill={isActive ? NAVY : `rgba(11, 51, 76, 0.4)`}
                      style={{ transition: 'fill 200ms ease', userSelect: 'none', pointerEvents: 'none' }}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}

              {/* Active node tooltip */}
              {hoveredNode && (() => {
                const n = getNodeById(hoveredNode);
                if (!n) return null;
                const tx = n.x > 700 ? n.x - 85 : n.x + 12;
                const ty = n.y > 350 ? n.y - 38 : n.y - 22;
                return (
                  <g>
                    <rect x={tx} y={ty} width="80" height="28" fill={NAVY} />
                    <text x={tx + 6} y={ty + 10} fontFamily="var(--font-open-sans)" fontSize="7" fontWeight="700" fill="#84bd2a">
                      {n.region}
                    </text>
                    <text x={tx + 6} y={ty + 21} fontFamily="var(--font-open-sans)" fontSize="8" fontWeight="700" fill="#ffffff">
                      {n.label}
                    </text>
                  </g>
                );
              })()}

              {/* Corner axis labels */}
              <text x="4" y="12" fontFamily="var(--font-open-sans)" fontSize="7" fill={`rgba(11,51,76,0.3)`} fontWeight="700">LAT 90°N</text>
              <text x="4" y="396" fontFamily="var(--font-open-sans)" fontSize="7" fill={`rgba(11,51,76,0.3)`} fontWeight="700">LAT 90°S</text>
              <text x="720" y="12" fontFamily="var(--font-open-sans)" fontSize="7" fill={`rgba(11,51,76,0.3)`} fontWeight="700">LON 180°W</text>
            </svg>
          </div>

          {/* Legend row */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '16px',
              opacity: revealed ? 1 : 0,
              transition: 'opacity 0.6s ease 0.4s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: GREEN }} />
              <span style={{ fontFamily: 'var(--font-open-sans)', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', color: `rgba(11,51,76,0.5)`, textTransform: 'uppercase' }}>Nodo activo</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '1px', backgroundColor: `rgba(11,51,76,0.25)`, backgroundImage: 'repeating-linear-gradient(90deg, rgba(11,51,76,0.25) 0px, rgba(11,51,76,0.25) 3px, transparent 3px, transparent 6px)' }} />
              <span style={{ fontFamily: 'var(--font-open-sans)', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', color: `rgba(11,51,76,0.5)`, textTransform: 'uppercase' }}>Enlace de red</span>
            </div>
          </div>
        </div>

        {/* === RIGHT: Technical annotation === */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '2.5px',
              color: GREEN,
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            DATOS TÉCNICOS / GLOBAL KPIs
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '28px',
              fontWeight: 700,
              color: NAVY,
              lineHeight: 1.25,
              margin: '0 0 32px 0',
              letterSpacing: '-0.3px',
            }}
          >
            Presencia que cruza fronteras, impacto que trasciende industrias.
          </h3>

          {/* Stats list */}
          <div style={{ borderTop: `1px solid ${LINE_COLOR}` }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr',
                  gap: '16px',
                  alignItems: 'baseline',
                  padding: '20px 0',
                  borderBottom: `1px solid ${LINE_COLOR}`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: GREEN,
                    lineHeight: 1,
                    letterSpacing: '-1px',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '13px',
                    fontWeight: 400,
                    color: `rgba(11,51,76,0.65)`,
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p
            style={{
              fontFamily: 'var(--font-open-sans)',
              fontSize: '10px',
              fontWeight: 400,
              color: `rgba(11,51,76,0.35)`,
              lineHeight: 1.6,
              marginTop: '20px',
              letterSpacing: '0.5px',
            }}
          >
            Datos consolidados Q4-2025. Proyección 2026 incluye expansión a 4 mercados adicionales en APAC y EMEA.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reach-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}

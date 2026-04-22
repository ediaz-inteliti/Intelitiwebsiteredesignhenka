import React from 'react';

const LINE_COLOR = 'rgba(11, 51, 76, 0.15)'; // Equivalent to var(--henka-navy) at 15% opacity
const NAVY = 'var(--henka-navy)';

interface SectionHeaderProps {
  label: string;
}

export function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-8 relative">
      <span
        style={{
          display: 'block',
          fontFamily: 'var(--font-open-sans)',
          fontSize: '12px',
          fontWeight: 700,
          color: NAVY,
          opacity: 0.6,
          letterSpacing: '1.5px',
          lineHeight: '1',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          marginBottom: '16px',
        }}
      >
        {label}
      </span>
      <div 
        style={{ 
          width: '100%', 
          height: '1px', 
          backgroundColor: LINE_COLOR,
          /* Ensure crisp 1px line rendering */
          transform: 'translateZ(0)', 
          willChange: 'transform'
        }} 
      />
    </div>
  );
}

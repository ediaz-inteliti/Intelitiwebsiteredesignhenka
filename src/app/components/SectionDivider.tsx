interface SectionDividerProps {
  label: string;
  bgColor?: string;
  paddingTop?: string;
}

export function SectionDivider({ label, bgColor = '#ffffff', paddingTop = '128px' }: SectionDividerProps) {
  return (
    <div style={{ backgroundColor: bgColor, paddingTop, overflowX: 'hidden' as const }}>
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-open-sans)',
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--henka-navy)',
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
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(11, 51, 76, 0.15)' }} />
      </div>
    </div>
  );
}
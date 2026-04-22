import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Instagram, Linkedin, Youtube } from 'lucide-react';

const NAVY = 'var(--henka-navy)';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return reduced;
}

function WhatsAppSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: 'Historia', href: '#historia' },
  { label: 'Valores', href: '#valores' },
  { label: 'Misión', href: '#mision' },
  { label: 'Visión', href: '#vision' },
  { label: 'Postúlate', href: '#postulate' },
];

type SocialItem = {
  label: string;
  href: string;
  renderIcon: (size: number) => React.ReactNode;
};

const socialItems: SocialItem[] = [
  { label: 'Instagram', href: '#', renderIcon: (s) => <Instagram size={s} /> },
  { label: 'LinkedIn', href: '#', renderIcon: (s) => <Linkedin size={s} /> },
  { label: 'YouTube', href: '#', renderIcon: (s) => <Youtube size={s} /> },
  { label: 'WhatsApp', href: '#', renderIcon: (s) => <WhatsAppSVG size={s} /> },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Prevent keyboard access to drawer contents when closed
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;
    if (mobileMenuOpen) {
      drawer.removeAttribute('inert');
    } else {
      drawer.setAttribute('inert', '');
    }
  }, [mobileMenuOpen]);

  const motion = (ms: number, easing = 'ease') =>
    reducedMotion ? 'none' : `${ms}ms ${easing}`;

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(11, 51, 76, 0.08)',
      }}
    >
      {/* Main bar */}
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: '1200px',
          padding: '0 32px',
          height: '80px',
        }}
      >
        {/* Logo — flush left, high priority above-fold asset */}
        <a
          href="/"
          aria-label="Henka Consulting — inicio"
          className="block flex-shrink-0"
        >
          <img
            src="https://henkaconsulting.com/app/uploads/2026/02/logo_henka.svg"
            alt="Henka Consulting"
            fetchPriority="high"
            style={{ height: '44px', width: 'auto', display: 'block' }}
          />
        </a>

        {/* Desktop nav — centered, equidistant */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center"
          style={{ gap: '40px' }}
        >
          {navItems.map((item) => {
            const isHovered = hoveredItem === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1"
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: NAVY,
                  textDecoration: 'none',
                  letterSpacing: '0.015em',
                  opacity: hoveredItem !== null && !isHovered ? 0.4 : 1,
                  transition: `opacity ${motion(200)}`,
                }}
              >
                <span>{item.label}</span>
                <ChevronDown
                  size={13}
                  aria-hidden="true"
                  style={{
                    color: NAVY,
                    opacity: 0.55,
                    flexShrink: 0,
                    transition: `transform ${motion(200)}`,
                    transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </a>
            );
          })}
        </nav>

        {/* Social icons — flush right */}
        <div className="hidden lg:flex items-center flex-shrink-0" style={{ gap: '8px' }}>
          {socialItems.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex items-center justify-center"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: NAVY,
                color: '#ffffff',
                flexShrink: 0,
                transition: `opacity ${motion(200)}`,
                // Focus ring visible against navy fill
                outline: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.72'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 3px #ffffff, 0 0 0 5px ${NAVY}`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {social.renderIcon(15)}
            </a>
          ))}
        </div>

        {/* Mobile hamburger — 44×44 touch target */}
        <button
          className="lg:hidden flex items-center justify-center"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
          style={{
            width: '44px',
            height: '44px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: NAVY,
            flexShrink: 0,
          }}
        >
          {mobileMenuOpen
            ? <X size={22} strokeWidth={1.5} />
            : <Menu size={22} strokeWidth={1.5} />
          }
        </button>
      </div>

      {/* Mobile drawer — keyboard-inaccessible when closed via inert */}
      <div
        ref={drawerRef}
        aria-hidden={!mobileMenuOpen}
        className="lg:hidden"
        style={{
          display: 'grid',
          gridTemplateRows: mobileMenuOpen ? '1fr' : '0fr',
          opacity: mobileMenuOpen ? 1 : 0,
          transition: reducedMotion
            ? 'none'
            : `grid-template-rows 320ms cubic-bezier(0.25, 0, 0, 1), opacity 200ms ease`,
          backgroundColor: '#ffffff',
          borderTop: mobileMenuOpen ? '1px solid rgba(12, 52, 77, 0.08)' : 'none',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
        <nav
          aria-label="Menú móvil"
          style={{ padding: '8px 32px 28px' }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between"
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: '15px',
                fontWeight: 600,
                color: NAVY,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(11, 51, 76, 0.07)',
                padding: '15px 0',
                transition: `opacity ${motion(150)}`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.55'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              <span>{item.label}</span>
              <ChevronDown size={15} aria-hidden="true" style={{ opacity: 0.4, color: NAVY }} />
            </a>
          ))}

          {/* Social icons — 44×44 touch targets in drawer */}
          <div className="flex items-center" style={{ gap: '10px', paddingTop: '22px' }}>
            {socialItems.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex items-center justify-center"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: NAVY,
                  color: '#ffffff',
                  flexShrink: 0,
                  transition: `opacity ${motion(200)}`,
                  outline: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.72'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 3px #ffffff, 0 0 0 5px ${NAVY}`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {social.renderIcon(18)}
              </a>
            ))}
          </div>
        </nav>
        </div>
      </div>
    </header>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAVY = '#0b334c';
const GREEN = '#84bd2a';

const navItems = [
  { label: 'Hero', href: '#hero' },
  { label: 'El Desafío', href: '#ganchos' },
  { label: 'La Fórmula', href: '#formula-exito' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Resultados', href: '#trust-ecosystem' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setIsVisible(false);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className="fixed z-40 w-full top-0"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(12, 52, 77, 0.08)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 300ms cubic-bezier(0.25, 0, 0, 1), transform 300ms cubic-bezier(0.25, 0, 0, 1)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: '1200px',
          padding: '0 max(32px, 5vw)',
          height: '80px',
        }}
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="https://henkaconsulting.com/app/uploads/2026/02/logo_henka.svg"
            alt="Henka Consulting"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation — centered, evenly spaced */}
        <nav className="hidden lg:flex items-center gap-16">
          {navItems.map((item) => {
            const isActive = activeNav === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveNav(item.href)}
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: NAVY,
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: isActive
                    ? `2px solid ${GREEN}`
                    : '2px solid transparent',
                  transition: 'border-color 200ms ease, opacity 200ms ease',
                  opacity: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Spacer to balance layout (CTA removed) */}
        <div className="hidden lg:block" style={{ width: '120px' }} />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            color: '#0c344d',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '0px',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden py-6"
          style={{
            borderTop: '1px solid rgba(12, 52, 77, 0.1)',
            backgroundColor: '#ffffff',
            padding: '24px max(32px, 5vw)',
          }}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeNav === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.href);
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: NAVY,
                    textDecoration: 'none',
                    borderLeft: isActive
                      ? `3px solid ${GREEN}`
                      : '3px solid transparent',
                    borderRadius: '0px',
                    paddingLeft: '16px',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    transition: 'opacity 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

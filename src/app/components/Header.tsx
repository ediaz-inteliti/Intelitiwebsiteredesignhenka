import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  
  const navItems = [
    { label: 'Consultoría', href: '#consultoria' },
    { label: 'Educación', href: '#educacion' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacto', href: '#contacto' }
  ];

  // Handle scroll direction and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // At the very top (0-50px), always hide navbar
      if (currentScrollY <= 50) {
        setIsVisible(false);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // Determine scroll direction and visibility
      if (currentScrollY < lastScrollY) {
        // Scrolling UP - show navbar
        setIsVisible(true);
        setScrollDirection('up');
      } else if (currentScrollY > lastScrollY) {
        // Scrolling DOWN - hide navbar
        setIsVisible(false);
        setScrollDirection('down');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className="fixed z-40 w-full transition-all duration-300 ease-in-out top-0"
      style={{ 
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(12, 52, 77, 0.08)',
        boxShadow: 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div className="Nav-Main-Container mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <div className="Nav-Logo-Container flex items-center flex-shrink-0">
            <img 
              src="https://henkaconsulting.com/app/uploads/2026/02/logo_henka.svg"
              alt="Henka Consulting"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="Nav-Links-Container hidden lg:flex items-center gap-10 flex-1 justify-center">
            {navItems.map((item, index) => {
              const isActive = activeNav === item.href;
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setActiveNav(item.href)}
                  className="Nav-Link relative transition-all duration-300 hover:opacity-70"
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: '#0b334c',
                    textDecoration: 'none',
                    paddingBottom: '4px',
                    borderBottom: isActive ? '2px solid #84bd2a' : '2px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button - Right */}
          <div className="Nav-CTA-Container hidden lg:flex items-center flex-shrink-0">
            <button
              className="CTA-Primary px-8 py-3"
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-semibold)',
                backgroundColor: '#84bd2a',
                color: '#ffffff',
                borderRadius: '0px',
                border: 'none',
                cursor: 'pointer',
                transition: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '2px 2px 0px #0b334c';
                e.currentTarget.style.transform = 'translate(-1px, -1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translate(0, 0)';
              }}
            >
              Consulta Gratuita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              color: '#0c344d',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '0px'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            className="Nav-Mobile-Menu lg:hidden py-6 border-t"
            style={{ 
              borderColor: 'rgba(12, 52, 77, 0.1)',
              backgroundColor: '#ffffff',
              borderRadius: '0px'
            }}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => {
                const isActive = activeNav === item.href;
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => {
                      setActiveNav(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="Nav-Link-Mobile py-2 transition-colors hover:opacity-70"
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: '#0b334c',
                      textDecoration: 'none',
                      borderLeft: isActive ? '3px solid #84bd2a' : '3px solid transparent',
                      borderRadius: '0px',
                      paddingLeft: '16px'
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
              <button
                className="CTA-Primary-Mobile mt-4 px-8 py-3 transition-all duration-300 hover:bg-[#6fa324]"
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  fontSize: 'var(--text-body)',
                  fontWeight: 'var(--font-weight-semibold)',
                  backgroundColor: '#84bd2a',
                  color: '#ffffff',
                  borderRadius: '0px',
                  border: 'none'
                }}
              >
                Consulta Gratuita
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
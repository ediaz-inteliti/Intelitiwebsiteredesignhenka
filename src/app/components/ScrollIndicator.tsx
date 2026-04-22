import { useState, useEffect } from 'react';

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'ganchos', label: 'Desafíos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'contacto', label: 'Contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = sections.map(section => document.getElementById(section.id));
      
      // Check if footer is in viewport
      const footer = document.getElementById('contacto');
      if (footer) {
        const footerTop = footer.offsetTop;
        const viewportBottom = window.scrollY + window.innerHeight;
        
        // Hide indicator when footer starts to appear in viewport
        if (viewportBottom >= footerTop) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      sectionElements.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 transition-opacity duration-300"
      style={{
        right: '24px',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      role="navigation"
      aria-label="Page navigation"
    >
      {sections.map((section, index) => (
        <div 
          key={section.id}
          className="relative flex items-center justify-end gap-3"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Text Label Box - Hidden below 1200px to prevent overflow */}
          <div
            className="transition-all duration-300 whitespace-nowrap scroll-indicator-label"
            style={{
              opacity: hoveredIndex === index || activeSection === index ? 1 : 0,
              transform: hoveredIndex === index || activeSection === index ? 'translateX(0)' : 'translateX(8px)',
              pointerEvents: 'none',
              backgroundColor: '#ffffff',
              borderRadius: '0px',
              border: '1px solid rgba(11, 51, 76, 0.15)',
              boxShadow: 'none',
              padding: '8px 16px'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: '13px',
                fontWeight: '700',
                color: 'var(--henka-navy)',
                letterSpacing: '0.3px',
                lineHeight: '1.2'
              }}
            >
              {section.label}
            </span>
          </div>
          
          {/* Dot Button */}
          <button
            onClick={() => {
              const element = document.getElementById(section.id);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="transition-all duration-300 flex items-center justify-center flex-shrink-0"
            style={{
              width: '44px',
              height: '44px',
              padding: '0',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label={`Navegar a ${section.label}`}
            aria-current={activeSection === index ? 'true' : 'false'}
          >
            <div
              className="transition-all duration-300"
              style={{
                width: activeSection === index ? '10px' : '8px',
                height: activeSection === index ? '10px' : '8px',
                backgroundColor: activeSection === index ? '#84bd2a' : 'rgba(255, 255, 255, 0.3)',
                borderRadius: '0px'
              }}
            />
          </button>
        </div>
      ))}

      {/* Hide labels on screens narrower than 1200px */}
      <style>{`
        @media (max-width: 1200px) {
          .scroll-indicator-label {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
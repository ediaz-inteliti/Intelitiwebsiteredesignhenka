import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section (approximately 100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
      style={{
        width: '48px',
        height: '48px',
        backgroundColor: '#0c344d',
        borderRadius: '0px',
        border: 'none',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        boxShadow: 'none',
        transition: 'opacity 300ms ease, transform 300ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#84bd2a';
        e.currentTarget.style.boxShadow = '2px 2px 0px #0b334c';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#0c344d';
        e.currentTarget.style.boxShadow = 'none';
      }}
      aria-label="Volver arriba"
    >
      <ArrowUp size={24} style={{ color: '#ffffff' }} />
    </button>
  );
}
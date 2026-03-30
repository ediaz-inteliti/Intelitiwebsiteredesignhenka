import { Linkedin, Twitter, Facebook, Instagram, Mail, Globe } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const serviceLinks = [
    { label: 'Consultoría', href: '#consultoria' },
    { label: 'Transformación Digital', href: '#transformacion' },
    { label: 'Desarrollo Organizacional', href: '#desarrollo' },
    { label: 'Gestión del Cambio', href: '#gestion-cambio' }
  ];

  const quickLinks = [
    { label: 'Historia', href: '#historia' },
    { label: 'Valores', href: '#valores' },
    { label: 'Trabaja con nosotros', href: '#carreras' },
    { label: 'Blog', href: '#blog' }
  ];

  return (
    <footer 
      id="contacto"
      className="pt-20 pb-8"
      style={{ backgroundColor: '#0c344d' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div>
            {/* Logo Placeholder */}
            <div className="mb-6">
              <img 
                src="https://henkaconsulting.com/app/uploads/2026/02/logo_henka.svg"
                alt="Henka Consulting"
                className="h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            
            {/* Tagline */}
            <p 
              className="mb-6"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '14px',
                color: '#ffffff',
                opacity: 0.8,
                lineHeight: '1.6'
              }}
            >
              Change as a Safe Place. Transformando organizaciones con metodologías probadas y un enfoque humano.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-100"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '0px',
                      color: '#ffffff',
                      opacity: 0.8
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 
              className="mb-6"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '16px',
                fontWeight: 'var(--font-weight-bold)',
                color: '#ffffff',
                letterSpacing: '0.5px'
              }}
            >
              Servicios
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-opacity duration-300 hover:opacity-100"
                    style={{ 
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '14px',
                      color: '#ffffff',
                      opacity: 0.8,
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 
              className="mb-6"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '16px',
                fontWeight: 'var(--font-weight-bold)',
                color: '#ffffff',
                letterSpacing: '0.5px'
              }}
            >
              Empresa
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-opacity duration-300 hover:opacity-100"
                    style={{ 
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '14px',
                      color: '#ffffff',
                      opacity: 0.8,
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h4 
              className="mb-6"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '16px',
                fontWeight: 'var(--font-weight-bold)',
                color: '#ffffff',
                letterSpacing: '0.5px'
              }}
            >
              Suscríbete
            </h4>
            <p 
              className="mb-4"
              style={{ 
                fontFamily: 'var(--font-open-sans)',
                fontSize: '14px',
                color: '#ffffff',
                opacity: 0.8,
                lineHeight: '1.6'
              }}
            >
              Recibe insights y tendencias del sector directamente en tu correo.
            </p>

            {/* Newsletter Form with 0px radius */}
            <form className="mb-6">
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 outline-none transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    borderRadius: '0px',
                    border: '1px solid #f4f6f9'
                  }}
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 transition-all duration-300 hover:opacity-90"
                  style={{
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '14px',
                    fontWeight: 'var(--font-weight-semibold)',
                    backgroundColor: '#84bd2a',
                    color: '#ffffff',
                    borderRadius: '0px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Enviar
                </button>
              </div>
            </form>

            {/* Generic Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: '#84bd2a', flexShrink: 0 }} />
                <a
                  href="mailto:contact@henkaconsulting.com"
                  className="transition-opacity duration-300 hover:opacity-100"
                  style={{ 
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '14px',
                    color: '#ffffff',
                    opacity: 0.8,
                    textDecoration: 'none'
                  }}
                >
                  contact@henkaconsulting.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} style={{ color: '#84bd2a', flexShrink: 0 }} />
                <a
                  href="https://henkaconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-300 hover:opacity-100"
                  style={{ 
                    fontFamily: 'var(--font-open-sans)',
                    fontSize: '14px',
                    color: '#ffffff',
                    opacity: 0.8,
                    textDecoration: 'none'
                  }}
                >
                  www.henkaconsulting.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div 
          className="pt-8 text-center"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}
        >
          <p 
            style={{ 
              fontFamily: 'var(--font-open-sans)',
              fontSize: '14px',
              color: '#ffffff',
              opacity: 0.6
            }}
          >
            © {new Date().getFullYear()} Henka Consulting. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
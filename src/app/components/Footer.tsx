'use client';

import { useState } from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Globe } from 'lucide-react';

type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error';

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * ChameleonBlueprint — Module [05]
 * Subtle, high-impact line-art schematic of a chameleon as engineered texture.
 * Rendered as inline SVG at low opacity — a blueprint pattern, not an illustration.
 */
function ChameleonBlueprint() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '160px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        marginTop: '32px',
      }}
    >
      <svg
        viewBox="0 0 1200 160"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '160px',
          opacity: 0.065,
        }}
        aria-hidden="true"
      >
        {/* Blueprint grid behind */}
        <defs>
          <pattern id="bp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="1200" height="160" fill="url(#bp-grid)" />

        {/* ── CHAMELEON SCHEMATIC ── centered ~x=600 */}
        {/* Body — main oval */}
        <ellipse cx="600" cy="105" rx="130" ry="42" fill="none" stroke="#ffffff" strokeWidth="1" />

        {/* Dorsal ridge — spines along the back */}
        {[0, 15, 30, 45, 60, 75, 90, 105, 120].map((dx, i) => (
          <line
            key={i}
            x1={475 + dx} y1={105 - (i < 3 ? 30 : i < 6 ? 42 : 40 - (i - 6) * 6)}
            x2={475 + dx} y2={105 - (i < 3 ? 42 : i < 6 ? 52 : 52 - (i - 6) * 7)}
            stroke="#ffffff" strokeWidth="0.8"
          />
        ))}

        {/* Head */}
        <path
          d="M 470 95 Q 455 75 440 80 Q 420 68 445 110 Q 460 112 470 105 Z"
          fill="none" stroke="#ffffff" strokeWidth="1"
        />

        {/* Eye — circle with crosshair */}
        <circle cx="440" cy="82" r="6" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <line x1="434" y1="82" x2="446" y2="82" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="440" y1="76" x2="440" y2="88" stroke="#ffffff" strokeWidth="0.5" />

        {/* Snout / tongue line */}
        <line x1="428" y1="90" x2="390" y2="88" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 2" />
        <circle cx="388" cy="88" r="2.5" fill="none" stroke="#ffffff" strokeWidth="0.8" />

        {/* Casque / head crest */}
        <path d="M 455 75 L 445 58 L 435 75" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        <line x1="445" y1="58" x2="445" y2="68" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 2" />

        {/* Front legs */}
        <path d="M 510 130 L 505 148 L 495 148" fill="none" stroke="#ffffff" strokeWidth="1" />
        <path d="M 505 148 L 505 155" fill="none" stroke="#ffffff" strokeWidth="0.7" />
        <path d="M 530 132 L 528 150 L 518 152" fill="none" stroke="#ffffff" strokeWidth="1" />

        {/* Rear legs */}
        <path d="M 660 130 L 668 150 L 678 152" fill="none" stroke="#ffffff" strokeWidth="1" />
        <path d="M 680 132 L 689 148 L 699 148" fill="none" stroke="#ffffff" strokeWidth="1" />

        {/* Tail — curled spiral */}
        <path
          d="M 730 105 Q 760 90 775 100 Q 795 115 780 130 Q 762 145 748 135 Q 738 125 748 118 Q 756 110 760 120"
          fill="none" stroke="#ffffff" strokeWidth="1"
        />

        {/* Belly segmentation lines */}
        {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200].map((dx, i) => (
          <line
            key={i}
            x1={490 + dx} y1={117 + (i < 5 ? 0 : i < 8 ? 2 : 0)}
            x2={490 + dx} y2={128}
            stroke="#ffffff" strokeWidth="0.6"
          />
        ))}

        {/* Scale hex-pattern overlay — small repeating orthogonal markers */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => {
            const cx = 490 + col * 13 + (row % 2) * 6;
            const cy = 98 + row * 7;
            return (
              <rect
                key={`${row}-${col}`}
                x={cx - 3} y={cy - 3} width="6" height="6"
                fill="none" stroke="#ffffff" strokeWidth="0.3"
                transform={`rotate(45 ${cx} ${cy})`}
              />
            );
          })
        )}

        {/* Annotation labels — schematic text */}
        <text x="390" y="70" fontFamily="monospace" fontSize="8" fill="#ffffff" letterSpacing="1">CASQUE</text>
        <line x1="400" y1="71" x2="440" y2="72" stroke="#ffffff" strokeWidth="0.4" />
        <text x="315" y="90" fontFamily="monospace" fontSize="8" fill="#ffffff" letterSpacing="1">TONGUE</text>
        <line x1="365" y1="90" x2="387" y2="88" stroke="#ffffff" strokeWidth="0.4" />
        <text x="600" y="55" fontFamily="monospace" fontSize="8" fill="#ffffff" letterSpacing="1">DORSAL CREST</text>
        <line x1="645" y1="58" x2="600" y2="75" stroke="#ffffff" strokeWidth="0.4" />
        <text x="740" y="55" fontFamily="monospace" fontSize="8" fill="#ffffff" letterSpacing="1">PREHENSILE TAIL</text>
        <line x1="752" y1="60" x2="752" y2="95" stroke="#ffffff" strokeWidth="0.4" />

        {/* Axis markers — bottom reference line */}
        <line x1="400" y1="155" x2="800" y2="155" stroke="#ffffff" strokeWidth="0.4" />
        {[400, 450, 500, 550, 600, 650, 700, 750, 800].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="152" x2={x} y2="158" stroke="#ffffff" strokeWidth="0.4" />
            <text x={x - 5} y="165" fontFamily="monospace" fontSize="6" fill="#ffffff">{x - 400}mm</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [status, setStatus] = useState<NewsletterStatus>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!email.trim()) {
      setEmailError('Por favor ingrese su correo electrónico.');
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError('Ingrese un correo electrónico válido.');
      return;
    }

    setStatus('loading');
    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.05 ? resolve() : reject(new Error('Server error'));
        }, 1200);
      });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  const socialLinks = [
    { icon: Linkedin,  href: '#', label: 'LinkedIn'  },
    { icon: Twitter,   href: '#', label: 'Twitter'   },
    { icon: Facebook,  href: '#', label: 'Facebook'  },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const serviceLinks = [
    { label: 'Diagnóstico Organizacional', href: '#diagnostico' },
    { label: 'Gestión del Cambio',         href: '#cambio'      },
    { label: 'Coaching Ejecutivo',         href: '#coaching'    },
    { label: 'Formación & Desarrollo',     href: '#formacion'   },
    { label: 'Transformación Cultural',    href: '#cultura'     },
  ];

  const quickLinks = [
    { label: 'Historia',              href: '#historia'  },
    { label: 'Valores',               href: '#valores'   },
    { label: 'Trabaja con nosotros',  href: '#carreras'  },
    { label: 'Blog',                  href: '#blog'      },
  ];

  return (
    <footer
      id="contacto"
      className="pt-20 pb-0"
      style={{ backgroundColor: '#0c344d' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1200px', padding: '0 max(32px, 5vw)' }}>
        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & Social */}
          <div>
            <div className="mb-6">
              <img
                src="https://henkaconsulting.com/app/uploads/2026/02/logo_henka.svg"
                alt="Henka Consulting"
                className="h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: '14px',
                color: '#ffffff',
                opacity: 0.8,
                lineHeight: '1.6',
              }}
            >
              Hacemos del cambio un lugar seguro. Transformando organizaciones con metodologías probadas y un enfoque humano.
            </p>
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
                      opacity: 0.8,
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
                letterSpacing: '0.5px',
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
                      display: 'block',
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
                letterSpacing: '0.5px',
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
                      display: 'block',
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
                letterSpacing: '0.5px',
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
                lineHeight: '1.6',
              }}
            >
              Reciba insights y tendencias del sector directamente en su correo.
            </p>

            {status === 'success' ? (
              <div
                className="mb-6 px-4 py-4"
                role="status"
                style={{
                  border: '1px solid rgba(132, 189, 42, 0.5)',
                  backgroundColor: 'rgba(132, 189, 42, 0.08)',
                }}
              >
                <p style={{ fontFamily: 'var(--font-open-sans)', fontSize: '14px', color: '#84bd2a', lineHeight: '1.5' }}>
                  ¡Listo! Te has suscrito correctamente. Recibirás nuestros insights pronto.
                </p>
              </div>
            ) : (
              <form className="mb-6" onSubmit={handleNewsletterSubmit} noValidate>
                <div className="flex flex-col gap-2">
                  <div>
                    <input
                      type="email"
                      placeholder="Su correo"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError('');
                        if (status === 'error') setStatus('idle');
                      }}
                      disabled={status === 'loading'}
                      aria-label="Correo electrónico para newsletter"
                      aria-describedby={emailError ? 'newsletter-error' : undefined}
                      aria-invalid={!!emailError}
                      className="w-full px-4 py-3 outline-none transition-all duration-300"
                      style={{
                        fontFamily: 'var(--font-open-sans)',
                        fontSize: '14px',
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                        borderRadius: '0px',
                        border: emailError ? '1px solid #f87171' : '1px solid #f4f6f9',
                        opacity: status === 'loading' ? 0.6 : 1,
                      }}
                    />
                    {emailError && (
                      <p
                        id="newsletter-error"
                        role="alert"
                        style={{ fontFamily: 'var(--font-open-sans)', fontSize: '12px', color: '#f87171', marginTop: '4px' }}
                      >
                        {emailError}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 transition-all duration-300 hover:opacity-90"
                    style={{
                      fontFamily: 'var(--font-open-sans)',
                      fontSize: '14px',
                      fontWeight: 'var(--font-weight-semibold)',
                      backgroundColor: '#84bd2a',
                      color: '#ffffff',
                      borderRadius: '0px',
                      border: 'none',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      opacity: status === 'loading' ? 0.7 : 1,
                    }}
                  >
                    {status === 'loading' ? 'Enviando…' : 'Suscribirme'}
                  </button>
                  {status === 'error' && (
                    <p
                      role="alert"
                      style={{ fontFamily: 'var(--font-open-sans)', fontSize: '12px', color: '#f87171' }}
                    >
                      Ocurrió un error. Por favor intenta nuevamente.
                    </p>
                  )}
                </div>
              </form>
            )}

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: '#84bd2a', flexShrink: 0 }} />
                <a
                  href="mailto:contact@henkaconsulting.com"
                  className="transition-opacity duration-300 hover:opacity-100"
                  style={{ fontFamily: 'var(--font-open-sans)', fontSize: '14px', color: '#ffffff', opacity: 0.8, textDecoration: 'none' }}
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
                  style={{ fontFamily: 'var(--font-open-sans)', fontSize: '14px', color: '#ffffff', opacity: 0.8, textDecoration: 'none' }}
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
              opacity: 0.6,
            }}
          >
            © {new Date().getFullYear()} Henka Consulting. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* ── Module [05]: Chameleon Blueprint Texture ── */}
      <ChameleonBlueprint />
    </footer>
  );
}
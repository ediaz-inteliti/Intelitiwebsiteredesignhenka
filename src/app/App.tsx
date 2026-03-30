import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { GanchosSection } from './components/GanchosSection';
import { FormulaExitoSection } from './components/FormulaExitoSection';
import { GlobalReachMap } from './components/GlobalReachMap';
import { SectionDivider } from './components/SectionDivider';
import { TeamSection } from './components/TeamSection';
import { TrustEcosystemSection } from './components/TrustEcosystemSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ScrollIndicator } from './components/ScrollIndicator';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-open-sans)', margin: 0, padding: 0, overflowX: 'hidden', maxWidth: '100vw' }}>
      {/* Header - Appears on Scroll */}
      <Header />

      {/* Hero Section - Full viewport with integrated nav */}
      <HeroSection />

      {/* EL DESAFÍO — Unified 1x4 Module */}
      <GanchosSection />

      {/* Fórmula del Éxito — Inspiration pivot: anxiety → aspiration */}
      <FormulaExitoSection />

      {/* Global Reach Map — Network schematic / KPI annotation */}
      <GlobalReachMap />

      {/* NUESTROS SERVICIOS — Divider */}
      <SectionDivider label="NUESTROS SERVICIOS" bgColor="#ffffff" paddingTop="128px" />

      {/* Promoted Services Section */}
      <TeamSection />

      {/* Trust Ecosystem Section (includes internal dividers) */}
      <TrustEcosystemSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer - Contáctanos */}
      <Footer />

      {/* Scroll Indicator - Right Side Navigation Dots */}
      <ScrollIndicator />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
import { Header } from './components/Header';
import { HeroSection } from './components/Hero';
import { TheChallenge } from './components/TheChallenge';
import { TheFormula } from './components/TheFormula';
import { Services } from './components/Services';
import { TrustEcosystemSection } from './components/TrustEcosystemSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: 'var(--font-open-sans)',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        maxWidth: '100vw',
      }}
    >
      <Header />
      <HeroSection />
      <TheChallenge />
      <TheFormula />
      <Services />
      <TrustEcosystemSection />
      <CTASection />
      <Footer />
      <BackToTop />
    </div>
  );
}

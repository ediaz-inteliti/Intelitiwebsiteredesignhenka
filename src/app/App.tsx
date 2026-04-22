import { Header } from './components/Header';
import { HeroSection } from './components/Hero';
import { TheChallenge } from './components/TheChallenge';
import { TheFormula } from './components/TheFormula';
import { Services } from './components/Services';
import { TrustEcosystemSection } from './components/TrustEcosystemSection';
import { BlogSection } from './components/BlogSection';
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
        overflowX: 'clip',
        maxWidth: '100vw',
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white"
        style={{ color: 'var(--henka-navy)', outline: '2px solid var(--henka-navy)', outlineOffset: '0px' }}
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">
      <HeroSection />
      <TheChallenge />
      <TheFormula />
      <Services />
      <TrustEcosystemSection />
      <BlogSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

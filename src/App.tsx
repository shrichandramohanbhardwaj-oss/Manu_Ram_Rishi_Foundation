import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { InitiativesSection } from './components/InitiativesSection';
import { LeadershipSection } from './components/LeadershipSection';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { MediaGallerySection } from './components/MediaGallerySection';
import { DonationSection } from './components/DonationSection';
import { OfficesContactSection } from './components/OfficesContactSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  useScrollReveal();

  const [legalModal, setLegalModal] = useState<{
    open: boolean;
    type: 'privacy' | 'terms';
  }>({
    open: false,
    type: 'privacy',
  });

  const [selectedInitiative, setSelectedInitiative] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectInitiative = (initiativeId: string) => {
    setSelectedInitiative(initiativeId);
    scrollToSection('donate');
  };

  return (
    <div className="min-h-screen bg-[#FAF5EB] text-[#2D241E] selection:bg-amber-500/30 selection:text-[#2D241E] font-sans antialiased overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        onOpenPrivacy={() => setLegalModal({ open: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModal({ open: true, type: 'terms' })}
        onOpenDonation={() => scrollToSection('donate')}
      />

      {/* Hero Section */}
      <Hero
        onExploreSeva={() => scrollToSection('initiatives')}
        onSupportMission={() => scrollToSection('donate')}
      />

      {/* About Section */}
      <AboutSection />

      {/* 7 Key Initiatives */}
      <InitiativesSection onSelectInitiative={handleSelectInitiative} />

      {/* Leadership & Hierarchy */}
      <LeadershipSection />

      {/* Official Mobile App Showcase */}
      <AppShowcaseSection />

      {/* Media & Dynamic Animated Gallery */}
      <MediaGallerySection />

      {/* Donation & Seva Contribution with 80G Receipt Generator */}
      <DonationSection selectedInitiativeId={selectedInitiative} />

      {/* Dual Offices & Devotee Connect Form */}
      <OfficesContactSection />

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModal({ open: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModal({ open: true, type: 'terms' })}
        onOpenDonation={() => scrollToSection('donate')}
      />

      {/* Sticky mobile Donate CTA — always reachable on small screens */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2 bg-gradient-to-t from-[#FAF5EB] via-[#FAF5EB]/95 to-transparent">
        <button
          onClick={() => scrollToSection('donate')}
          className="saffron-btn w-full rounded-full py-3 text-sm cursor-pointer"
        >
          <Heart className="w-4 h-4 fill-[#2b1200] text-[#2b1200] animate-pulse relative z-10" />
          <span className="relative z-10">
            {t("Donate Now / सहयोग करें", "सहयोग करें / Donate Now")}
          </span>
        </button>
      </div>

      {/* Legal Modals (Privacy Policy & Terms) */}
      <LegalModals
        isOpen={legalModal.open}
        type={legalModal.type}
        onClose={() => setLegalModal({ ...legalModal, open: false })}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

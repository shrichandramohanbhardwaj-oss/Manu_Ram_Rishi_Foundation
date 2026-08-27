import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Shield, Sparkles, ChevronRight, ChevronDown, ScrollText, Crown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AudioChantPlayer } from './AudioChantPlayer';

interface NavbarProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDonation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenDonation
}) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelEn: 'Home', labelHi: 'मुख्य पृष्ठ' },
    { href: '#about', labelEn: 'About Us', labelHi: 'हमारे बारे में' },
    { href: '#initiatives', labelEn: 'Initiatives', labelHi: 'सेवा प्रकल्प' },
    { href: '#leadership', labelEn: 'Leadership', labelHi: 'नेतृत्व मंडल' },
    { href: '#app', labelEn: 'Mobile App', labelHi: 'मोबाइल ऐप' },
    { href: '#gallery', labelEn: 'Media & Gallery', labelHi: 'मीडिया और गैलरी' },
    { href: '#donate', labelEn: 'Donate', labelHi: 'दान करें' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#FDFBF7]/95 backdrop-blur-md border-b border-amber-200/70 text-[11px] sm:text-xs text-[#382A1E] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Vrindavan Dham Seva Mantra / Badge */}
          <div className="flex items-center space-x-2 text-[#2D241E]">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-600">
              <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
              <span>|| राधे राधे ||</span>
            </span>
            <span className="hidden md:inline text-amber-300">|</span>
            <span className="hidden md:inline text-[#4A3B32]">
              {t("Dedicated to Vrindavan Heritage, Gau Seva & Vedic Wisdom", "श्री धाम वृन्दावन सेवा, गौ संवर्धन व सनातन संस्कृति को समर्पित")}
            </span>
          </div>

          {/* Right: Audio + Policies + Language Switcher */}
          <div className="flex items-center space-x-3 ml-auto">
            {/* Audio Ambient Player */}
            <AudioChantPlayer />

            {/* Legal Utility Links */}
            <div className="hidden lg:flex items-center space-x-3 text-[#4A3B32]">
              <button
                onClick={onOpenPrivacy}
                className="hover:text-amber-700 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Shield className="w-3 h-3 text-amber-600" />
                {t("Privacy Policy", "गोपनीयता नीति")}
              </button>
              <span>•</span>
              <button
                onClick={onOpenTerms}
                className="hover:text-amber-700 transition-colors cursor-pointer"
              >
                {t("Terms & Conditions", "नियम एवं शर्तें")}
              </button>
            </div>

            {/* Language Switcher Button */}
            <div className="flex items-center bg-[#F5EFE0] border border-amber-300/60 rounded-full p-0.5 shadow-inner">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow'
                    : 'text-[#5C4A3E] hover:text-[#2D241E]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all cursor-pointer font-hindi ${
                  lang === 'hi'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow'
                    : 'text-[#5C4A3E] hover:text-[#2D241E]'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 px-4 sm:px-8 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-amber-200/80 py-2.5 shadow-md shadow-amber-950/5'
            : 'bg-gradient-to-b from-[#FDFBF7]/95 via-[#FAF5EB]/85 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center space-x-3 group shrink-0">
            {/* Official High-Resolution Foundation Golden Logo */}
            <div className="relative w-12 h-12 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 p-[2px] shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/logo-clean.png"
                alt="Manu Ram Rishi Foundation Logo"
                className="w-12 h-12 rounded-full object-contain"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>

            <div>
              <span className="block font-cinzel text-base sm:text-lg font-bold tracking-wider text-[#2D241E] group-hover:text-amber-700 transition-colors">
                Manu Ram Rishi
              </span>
              <span className="block text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-amber-700 font-hindi">
                {t("FOUNDATION • न्यास", "फाउंडेशन • श्री धाम वृन्दावन")}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-5 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#382A1E] hover:text-amber-700 font-semibold transition-colors relative py-1 group"
              >
                {t(link.labelEn, link.labelHi)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Dedicated Quick Links Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setQuickLinksOpen(true)}
              onMouseLeave={() => setQuickLinksOpen(false)}
            >
              <button
                onClick={() => setQuickLinksOpen((v) => !v)}
                className="text-[#382A1E] hover:text-amber-700 font-semibold transition-colors flex items-center gap-1 py-1 cursor-pointer"
              >
                <span>{t("Quick Links", "त्वरित लिंक")}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${quickLinksOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {quickLinksOpen && (
                <div className="absolute right-0 top-full pt-3 animate-dropIn">
                  <div className="w-72 rounded-2xl bg-[#FDFBF7] backdrop-blur-xl border border-amber-200/80 shadow-xl overflow-hidden">
                    <div className="px-4 py-2.5 bg-gradient-to-r from-amber-100/60 to-transparent border-b border-amber-200/60 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-800">
                      {t("Quick Links", "त्वरित लिंक")}
                    </div>
                    {[
                      {
                        label: 'Privacy Policy',
                        labelHi: 'गोपनीयता नीति',
                        icon: Shield,
                        onClick: onOpenPrivacy,
                      },
                      {
                        label: 'Terms & Conditions',
                        labelHi: 'नियम एवं शर्तें',
                        icon: ScrollText,
                        onClick: onOpenTerms,
                      },
                      {
                        label: 'Initiatives',
                        labelHi: 'सेवा प्रकल्प',
                        icon: Sparkles,
                        href: '#initiatives',
                      },
                      {
                        label: 'Leadership',
                        labelHi: 'नेतृत्व मंडल',
                        icon: Crown,
                        href: '#leadership',
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setQuickLinksOpen(false);
                            item.onClick?.();
                          }}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#382A1E] hover:text-amber-800 hover:bg-amber-100/40 transition-colors cursor-pointer"
                        >
                          <Icon className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>{t(item.label, item.labelHi)}</span>
                          <ChevronRight className="w-3.5 h-3.5 ml-auto text-amber-400" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Main Action Button - Glowing Saffron (#FF9933) CTA "Donate Now / सहयोग करें" */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenDonation}
              className="saffron-btn rounded-full px-6 py-2.5 text-sm cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-[#2b1200] text-[#2b1200] animate-pulse relative z-10" />
              <span className="relative z-10">{t("Donate Now", "सहयोग करें")}</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2D241E] hover:text-amber-700 rounded-lg bg-[#F5EFE0] border border-amber-300/40 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FDFBF7] backdrop-blur-2xl border-b border-amber-200/80 px-6 py-6 transition-all animate-fadeIn shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#2D241E] hover:text-amber-700 py-2 border-b border-amber-200/50 text-base font-semibold"
              >
                <span>{t(link.labelEn, link.labelHi)}</span>
                <ChevronRight className="w-4 h-4 text-amber-500" />
              </a>
            ))}

            <div className="pt-2 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonation();
                }}
                className="saffron-btn w-full rounded-full py-3.5 text-base cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-[#2b1200] text-[#2b1200] animate-pulse relative z-10" />
                <span className="relative z-10">
                  {t("Donate Now / सहयोग करें", "सहयोग करें / Donate Now")}
                </span>
              </button>

              {/* Dedicated Quick Links block (mobile) */}
              <div className="rounded-2xl border border-amber-200/80 bg-[#FAF5EB] overflow-hidden">
                <div className="px-4 py-2 bg-gradient-to-r from-amber-100/70 to-transparent border-b border-amber-200/60 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-800">
                  {t("Quick Links", "त्वरित लिंक")}
                </div>
                {[
                  { label: 'Privacy Policy', labelHi: 'गोपनीयता नीति', icon: Shield, onClick: onOpenPrivacy },
                  { label: 'Terms & Conditions', labelHi: 'नियम एवं शर्तें', icon: ScrollText, onClick: onOpenTerms },
                  { label: 'Initiatives', labelHi: 'सेवा प्रकल्प', icon: Sparkles, href: '#initiatives' },
                  { label: 'Leadership', labelHi: 'नेतृत्व मंडल', icon: Crown, href: '#leadership' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        item.onClick?.();
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#382A1E] hover:text-amber-800 hover:bg-amber-100/40 transition-colors cursor-pointer border-b border-amber-200/40 last:border-b-0"
                    >
                      <Icon className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{t(item.label, item.labelHi)}</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-auto text-amber-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

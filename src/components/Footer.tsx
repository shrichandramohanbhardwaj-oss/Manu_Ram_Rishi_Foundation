import React from 'react';
import { MapPin, Heart, Shield, ArrowUp, ScrollText, Sparkles, Crown, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { OFFICES } from '../data/foundationData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDonation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenDonation
}) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#2D241E] text-slate-200 border-t border-amber-800/40 pt-16 pb-24 sm:pb-8 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-amber-900/60">
          
          {/* Col 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              {/* Official Foundation Circular Golden Logo */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 p-[1.5px] shadow-md shadow-amber-500/20 shrink-0">
                <img
                  src="/logo-clean.png"
                  alt="Manu Ram Rishi Foundation Logo"
                  className="w-12 h-12 rounded-full object-contain shadow-inner"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
              <div>
                <span className="block font-cinzel text-lg font-bold text-amber-100">
                  Manu Ram Rishi
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-amber-400 uppercase font-semibold">
                  {t("FOUNDATION • न्यास", "फाउंडेशन • श्री धाम वृन्दावन")}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed font-sans font-medium">
              {t(
                "A registered public charitable trust dedicated to Gau Seva, Sant Seva, Vedic Gurukulam education, holy Kund restoration, and Maa Yamuna cleaning in Sri Dham Vrindavan and Assam.",
                "श्री धाम वृन्दावन एवं असम में गौ सेवा, संत सेवा, वैदिक गुरुकुल शिक्षा, विलुप्त कुंडों के पुनरुद्धार और माँ यमुना की निर्मलता को समर्पित एक पंजीकृत धर्मार्थ सेवा न्यास।"
              )}
            </p>

            {/* Registration & Contact Details */}
            <div className="pt-2 space-y-1.5 text-xs text-amber-100/90 bg-[#382A1E]/80 p-3 rounded-xl border border-amber-800/60 font-sans shadow-sm">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:manurishifoundation777@gmail.com" className="hover:underline text-xs">
                  manurishifoundation777@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1 pt-1.5 border-t border-amber-800/40 font-mono text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold font-sans">CIN:</span>
                  <span className="text-amber-200">U88900AS2026NPL031074</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold font-sans">Reg. No:</span>
                  <span className="text-amber-200">U88900AS2026NPL031</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-[#382A1E] border border-amber-800/60 flex items-center justify-center text-amber-200 hover:text-red-400 hover:border-red-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-[#382A1E] border border-amber-800/60 flex items-center justify-center text-amber-200 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-[#382A1E] border border-amber-800/60 flex items-center justify-center text-amber-200 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded-lg bg-[#382A1E] border border-amber-800/60 flex items-center justify-center text-amber-200 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Tax Exemption Note */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>{t("80G Tax Exemption Eligible", "80G आयकर छूट मान्य")}</span>
            </div>
          </div>

          {/* Col 2: Dedicated Quick Links (Privacy, Terms, Initiatives, Leadership) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-200 font-cinzel uppercase tracking-wider">
              {t("Quick Links", "त्वरित लिंक")}
            </h4>

            {/* Priority legal + core destination links */}
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <Shield className="w-3 h-3 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="underline decoration-dotted underline-offset-2">
                    {t("Privacy Policy", "गोपनीयता नीति")}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ScrollText className="w-3 h-3 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="underline decoration-dotted underline-offset-2">
                    {t("Terms & Conditions", "नियम एवं शर्तें")}
                  </span>
                </button>
              </li>
              <li>
                <a
                  href="#initiatives"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                >
                  <Sparkles className="w-3 h-3 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="underline decoration-dotted underline-offset-2">
                    {t("Initiatives", "सेवा प्रकल्प")}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                >
                  <Crown className="w-3 h-3 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="underline decoration-dotted underline-offset-2">
                    {t("Leadership", "नेतृत्व मंडल")}
                  </span>
                </a>
              </li>
            </ul>

            {/* Secondary navigation */}
            <ul className="space-y-2 text-xs pt-3 border-t border-amber-900/60 font-medium">
              {[
                { href: '#home', en: 'Home', hi: 'मुख्य पृष्ठ' },
                { href: '#about', en: 'About Us', hi: 'हमारे बारे में' },
                { href: '#app', en: 'Mobile App', hi: 'फाउंडेशन ऐप' },
                { href: '#gallery', en: 'Media & Gallery', hi: 'मीडिया व गैलरी' },
                { href: '#contact', en: 'Contact Offices', hi: 'कार्यालय संपर्क' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    <span className="text-amber-500">•</span>
                    <span>{t(link.en, link.hi)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: 7 Seva Initiatives (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-200 font-cinzel uppercase tracking-wider">
              {t("Sacred Seva Projects", "पावन सेवा प्रकल्प")}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { en: 'Gau Seva & Protection', hi: 'गौ माता सेवा एवं संरक्षण' },
                { en: 'Sadhu Sant Seva & Bhandara', hi: 'साधु संत सेवा व भण्डारा' },
                { en: 'Rishikul Gurukulam', hi: 'ऋषिकुल इंटरनेशनल गुरुकुलम' },
                { en: 'Revival of Sacred Kunds', hi: 'विलुप्त कुंड और सरोवर पुनरुद्धार' },
                { en: 'Maa Yamuna Cleaning Drive', hi: 'माँ यमुना स्वच्छता अभियान' },
                { en: 'Mandir Prasadi & Annadaan', hi: 'मंदिर प्रसादी एवं अन्नदान' },
                { en: 'Rishikul Ashram Retreat', hi: 'ऋषिकुल आश्रम साधना केंद्र' },
              ].map((proj, idx) => (
                <li key={idx}>
                  <a
                    href="#initiatives"
                    className="hover:text-amber-300 transition-colors flex items-center gap-1 text-amber-100/80"
                  >
                    <span className="text-amber-500">•</span>
                    <span>{t(proj.en, proj.hi)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dual Office Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-amber-200 font-cinzel uppercase tracking-wider">
              {t("Our Offices", "कार्यालय संपर्क")}
            </h4>

            {/* Vrindavan Office */}
            <div className="p-3 rounded-xl bg-[#382A1E] border border-amber-800/60 text-xs space-y-1 font-medium">
              <div className="font-bold text-amber-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{t("Office 2 (Vrindavan)", "कार्यालय २ (वृन्दावन)")}</span>
              </div>
              <p className="text-amber-100/90">
                {OFFICES.officeVrindavan.addressEn}
              </p>
              <p className="text-amber-300 font-mono text-[11px]">
                {OFFICES.officeVrindavan.phone}
              </p>
            </div>

            {/* Assam Office */}
            <div className="p-3 rounded-xl bg-[#382A1E] border border-amber-800/60 text-xs space-y-1 font-medium">
              <div className="font-bold text-amber-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{t("Office 1 (Assam)", "कार्यालय १ (असम)")}</span>
              </div>
              <p className="text-amber-100/90">
                {OFFICES.officeAssam.addressEn}
              </p>
              <p className="text-amber-300 font-mono text-[11px]">
                {OFFICES.officeAssam.phone}
              </p>
            </div>

            {/* Instant Donate Button in Footer — Divine Saffron */}
            <button
              onClick={onOpenDonation}
              className="saffron-btn w-full rounded-full py-2.5 text-xs cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-[#2b1200] text-[#2b1200] animate-pulse relative z-10" />
              <span className="relative z-10 font-bold">
                {t("Donate Now / सहयोग करें", "सहयोग करें / Donate Now")}
              </span>
            </button>
          </div>

        </div>

        {/* Bottom Sub-Footer: Policies, Copyright, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/70 font-medium">
          <div>
            <p>
              Copyright © {new Date().getFullYear()} <span className="text-amber-100 font-bold">Manu Ram Rishi Foundation</span>. {t("All Rights Reserved.", "सर्वाधिकार सुरक्षित।")}
            </p>
            <p className="text-[11px] text-amber-300/80 mt-0.5 font-sans">
              पंजीकृत धर्मार्थ न्यास • CIN: <span className="font-mono text-amber-100 font-bold">U88900AS2026NPL031074</span> | Reg. No: <span className="font-mono text-amber-100 font-bold">U88900AS2026NPL031</span>
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-amber-300 transition-colors underline cursor-pointer"
            >
              {t("Privacy Policy", "गोपनीयता नीति")}
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-amber-300 transition-colors underline cursor-pointer"
            >
              {t("Terms & Conditions", "नियम एवं शर्तें")}
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#382A1E] border border-amber-800/60 hover:border-amber-400 text-amber-300 flex items-center gap-1 cursor-pointer transition-colors"
              title={t("Scroll to top", "शीर्ष पर जाएं")}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

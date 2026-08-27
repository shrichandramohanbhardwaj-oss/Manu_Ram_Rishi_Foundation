import React from 'react';
import { Sparkles, ArrowRight, Heart, ShieldCheck, MapPin, Feather } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreSeva: () => void;
  onSupportMission: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSeva, onSupportMission }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF5EB]">
      {/* Atmospheric Background Video & Soft Warm Amber Glow Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        {/* HTML5 background video rotated -90deg */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video absolute pointer-events-none"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vh',
            height: '100vw',
            minWidth: '100vh',
            minHeight: '100vw',
            transform: 'translate(-50%, -50%) rotate(-90deg)',
            objectFit: 'cover',
            pointerEvents: 'none',
            zIndex: -1,
          }}
          poster="/images/hero-divine-vrindavan.jpg"
        >
          <source
            src="https://drive.google.com/uc?export=download&id=18fW1b_77Vu39m8mNQRSvO1nUD110aC3y"
            type="video/mp4"
          />
          <source
            src="/hero-bg.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle 20% Warm Sandalwood & 20% Dark Contrast Overlay so video is bright & vibrant */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[#FAF5EB]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FAF5EB]" />

        {/* Subtle bottom fade transition into next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FAF5EB] to-transparent pointer-events-none z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Restored Floating Circular Golden Logo Emblem */}
        <div className="mb-6 animate-float-slow">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 p-[3px] shadow-2xl shadow-amber-500/50 group hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-md overflow-hidden flex items-center justify-center p-0.5 border border-amber-300/60">
              <img
                src="/logo-clean.png"
                alt="Manu Ram Rishi Foundation Official Emblem"
                className="w-full h-full rounded-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
            {/* Subtle Divine Golden Aura Glow Ring */}
            <div className="absolute -inset-1 rounded-full bg-amber-400/30 blur-md -z-10 animate-pulse" />
          </div>
        </div>

        {/* Divine Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-amber-400/80 text-amber-950 shadow-lg mb-6 backdrop-blur-md animate-float-slow">
          <Feather className="w-4 h-4 text-amber-600" />
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase font-cinzel text-amber-950">
            {t("Sri Vrindavan Dham • Sanatan Seva Mission", "श्री धाम वृन्दावन • पावन सनातन सेवा संकल्प")}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
        </div>

        {/* English & Hindi Headlines with Text-Shadow for crisp contrast over video */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-5xl leading-tight mb-4 font-cinzel drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)]">
          {lang === 'hi' ? (
            <span className="block font-hindi text-3xl sm:text-5xl lg:text-6xl text-amber-200 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
              सनातन धर्म और श्री धाम वृन्दावन की पावन धरोहर का संरक्षण
            </span>
          ) : (
            <span className="block text-amber-100 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
              Preserving Sanatan Dharma &amp; The Divine Heritage of Vrindavan
            </span>
          )}
        </h1>

        {/* Secondary Title */}
        <p className="text-amber-200 text-sm sm:text-lg font-bold max-w-3xl mb-6 font-hindi tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          {lang === 'en'
            ? "सनातन धर्म और श्री धाम वृन्दावन की पावन धरोहर का संरक्षण"
            : "Preserving Sanatan Dharma & The Divine Heritage of Vrindavan"}
        </p>

        {/* Bilingual Subtitle with subtle glass backdrop */}
        <div className="bg-black/35 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white/20 shadow-xl max-w-3xl mb-8">
          <p className="text-base sm:text-xl text-white leading-relaxed font-semibold font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            {t(
              "Dedicated to Gau Seva, Sant Seva, Vedic Gurukulam, and the Sacred Restoration of Holy Kunds & Maa Yamuna.",
              "गौ सेवा, संत सेवा, गुरुकुल शिक्षा, विलुप्त कुंडों के पुनरुद्धार और माँ यमुना की निर्मलता को समर्पित।"
            )}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none mb-12">
          {/* Button 1: Explore Seva (White/Gold border with dark text) */}
          <button
            onClick={onExploreSeva}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/95 hover:bg-white border-2 border-amber-500 text-[#2D241E] hover:text-amber-900 font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{t("Explore Seva", "सेवा प्रकल्प देखें")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 text-amber-700 transition-transform" />
          </button>

          {/* Button 2: PRIMARY SAFFRON CTA — Donate Now / सहयोग करें */}
          <div className="relative flex flex-col items-center gap-2.5 w-full sm:w-auto">
            <div className="saffron-halo">
              <button
                onClick={onSupportMission}
                className="saffron-btn w-full sm:w-auto rounded-full px-9 py-4 text-base sm:text-lg cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-[#2b1200] text-[#2b1200] animate-pulse" />
                <span className="relative z-10 font-bold">
                  {t("Donate Now / सहयोग करें", "सहयोग करें / Donate Now")}
                </span>
                <Sparkles className="w-5 h-5 relative z-10" />
              </button>
            </div>
            <span className="text-[11px] text-amber-100 font-bold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              {t("80G Tax Exempt • Instant Digital Receipt", "80G कर-मुक्त • तुरंत डिजिटल रसीद")}
            </span>
          </div>
        </div>

        {/* Key Credibility & Location Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white pt-3 pb-3 px-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 shadow-lg w-full max-w-4xl font-semibold mb-6">
          <div className="flex items-center gap-1.5 text-amber-200">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">{t("Headquarters: Vrindavan & Guwahati", "प्रधान केंद्र: वृन्दावन एवं गुवाहाटी")}</span>
          </div>
          <div className="hidden sm:inline text-amber-300">•</div>
          <div className="flex items-center gap-1.5 text-amber-200">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">{t("Registered Religious & Charitable Trust", "पंजीकृत धार्मिक एवं धर्मार्थ सेवा न्यास")}</span>
          </div>
          <div className="hidden sm:inline text-amber-300">•</div>
          <div className="flex items-center gap-1.5 text-amber-200">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">{t("Tax Exemption 80G Eligible", "80G आयकर छूट मान्य")}</span>
          </div>
        </div>

        {/* Live Impact Counters Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full max-w-5xl mt-2">
          {[
            { num: '5,200+', en: 'Sacred Cows Protected', hi: 'संरक्षित गौ माताएं', color: 'from-emerald-50 to-emerald-100/60', border: 'border-emerald-300/80', text: 'text-emerald-900' },
            { num: '15,000+', en: 'Sadhus Served Monthly', hi: 'मासिक सेवित साधु-संत', color: 'from-amber-50 to-amber-100/60', border: 'border-amber-300/80', text: 'text-amber-900' },
            { num: '14+', en: 'Sacred Kunds Restored', hi: 'पुनर्जीवित पवित्र कुंड', color: 'from-orange-50 to-orange-100/60', border: 'border-orange-300/80', text: 'text-orange-900' },
            { num: '18 Lakh+', en: 'Meals Distributed', hi: 'वितरित सात्विक महाप्रसाद', color: 'from-yellow-50 to-amber-100/60', border: 'border-amber-300/80', text: 'text-amber-900' },
            { num: '550+', en: 'Gurukul Scholars', hi: 'ऋषिकुल गुरुकुल विद्यार्थी', color: 'from-amber-50 to-orange-100/60', border: 'border-amber-300/80', text: 'text-amber-900' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-3.5 sm:p-4 rounded-xl bg-gradient-to-b ${stat.color} border ${stat.border} shadow-sm backdrop-blur-md text-center transform transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`text-xl sm:text-2xl font-extrabold font-cinzel ${stat.text}`}>
                {stat.num}
              </div>
              <div className="text-[11px] sm:text-xs text-[#382A1E] mt-1 font-semibold">
                {t(stat.en, stat.hi)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

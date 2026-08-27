import React, { useState } from 'react';
import { Smartphone, Download, QrCode, Sparkles, MessageSquareHeart, Activity, Eye, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { APP_FEATURES } from '../data/foundationData';

export const AppShowcaseSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'consult' | 'darshan' | 'track' | 'receipt'>('consult');
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'MessageSquareHeart': return <MessageSquareHeart className="w-5 h-5 text-amber-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-teal-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-yellow-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="app" className="relative py-24 bg-[#FAF5EB] overflow-hidden border-t border-amber-200/60">
      {/* Mystical Ambient Glows */}
      <div className="absolute top-1/2 -left-20 w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-up">
        
        {/* Main Grid: Info + 3D Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: App Information & Features */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <Smartphone className="w-3.5 h-3.5 text-amber-600" />
                <span>{t("Official Foundation Mobile App", "फाउंडेशन आधिकारिक मोबाइल ऐप")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D241E] font-cinzel mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900">
                  All Consultation Solution
                </span>
              </h2>

              {/* Bilingual Description matching prompt */}
              <div className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-md backdrop-blur-md mb-6">
                <p className="text-base text-[#2D241E] leading-relaxed font-medium mb-3">
                  {t(
                    "A modern spiritual and consultation platform integrating spiritual guidance, direct donation tracking, live seva updates, and consultation services in one place.",
                    "आध्यात्मिकता और आधुनिक मार्गदर्शन का संगम। लाइव सेवा अपडेट्स, परामर्श, और सहयोग का एक सरल माध्यम।"
                  )}
                </p>
                <p className="text-xs text-[#5C4A3E] font-hindi border-t border-amber-200/60 pt-2 leading-relaxed font-medium">
                  {lang === 'en'
                    ? "आध्यात्मिकता और आधुनिक मार्गदर्शन का संगम। लाइव सेवा अपडेट्स, परामर्श, और सहयोग का एक सरल माध्यम।"
                    : "A modern spiritual and consultation platform integrating spiritual guidance, direct donation tracking, live seva updates, and consultation services in one place."}
                </p>
              </div>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {APP_FEATURES.map((feat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-amber-200/80 hover:border-amber-400 transition-all duration-300 group shadow-sm shadow-amber-950/5"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    {getFeatureIcon(feat.icon)}
                  </div>
                  <h4 className="text-sm font-bold text-[#2D241E] group-hover:text-amber-800 transition-colors mb-1">
                    {t(feat.titleEn, feat.titleHi)}
                  </h4>
                  <p className="text-xs text-[#4A3B32] leading-relaxed font-medium">
                    {t(feat.descEn, feat.descHi)}
                  </p>
                </div>
              ))}
            </div>

            {/* Download Badges & QR Code Trigger */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {/* Google Play Button */}
              <button
                onClick={() => alert(t("Opening Google Play Store...", "गूगल प्ले स्टोर खोला जा रहा है..."))}
                className="px-5 py-3 rounded-xl bg-[#2D241E] hover:bg-[#382A1E] text-white flex items-center space-x-3 transition-all cursor-pointer shadow-md group"
              >
                <svg className="w-6 h-6 fill-current text-amber-400 group-hover:text-amber-300 transition-colors" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.033 2.033 0 0 1-.22-.924V2.738c0-.337.078-.654.219-.924zm11.235 11.238l2.58 2.58-12.75 7.362 10.17-9.942zm0-2.104L4.674.996l12.75 7.362-2.58 2.59zM18.73 10.74l3.19 1.842a1.077 1.077 0 0 1 0 1.836l-3.19 1.842-2.316-2.316 2.316-2.316z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-amber-200/80 uppercase tracking-wider leading-none">GET IT ON</div>
                  <div className="text-sm font-bold text-white leading-tight">Google Play</div>
                </div>
              </button>

              {/* App Store Button */}
              <button
                onClick={() => alert(t("Opening Apple App Store...", "एप्पल ऐप स्टोर खोला जा रहा है..."))}
                className="px-5 py-3 rounded-xl bg-[#2D241E] hover:bg-[#382A1E] text-white flex items-center space-x-3 transition-all cursor-pointer shadow-md group"
              >
                <svg className="w-6 h-6 fill-current text-amber-400 group-hover:text-amber-300 transition-colors" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 0.6-2.65 1.35-.58.66-1.09 1.73-.95 2.76.99.08 2.05-.51 2.67-1.26z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-amber-200/80 uppercase tracking-wider leading-none">Download on the</div>
                  <div className="text-sm font-bold text-white leading-tight">App Store</div>
                </div>
              </button>

              {/* Instant QR Code Button */}
              <button
                onClick={() => setShowQrModal(true)}
                className="px-4 py-3 rounded-xl bg-amber-100/90 hover:bg-amber-200 border border-amber-300 text-amber-900 text-xs font-bold flex items-center space-x-2 transition-all cursor-pointer shadow-sm"
              >
                <QrCode className="w-4 h-4 text-amber-700" />
                <span>{t("Scan App QR", "ऐप QR स्कैन करें")}</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center perspective-1000">
            <div className="relative w-[300px] sm:w-[340px] rounded-[46px] p-3 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 shadow-2xl border-4 border-amber-300 transform hover:scale-[1.02] transition-all duration-500">
              
              {/* Phone Speaker Notch & Camera */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#2D241E] rounded-full z-30 flex items-center justify-center space-x-2 shadow-md">
                <div className="w-2 h-2 rounded-full bg-amber-800" />
                <div className="w-8 h-1 bg-amber-800 rounded-full" />
              </div>

              {/* Screen Area featuring uploaded real App UI screenshot */}
              <div className="w-full h-[580px] sm:h-[630px] rounded-[36px] bg-black overflow-hidden relative border-2 border-amber-300/50 shadow-inner group">
                <img
                  src="/app-screen.jpg"
                  alt="All Consultation Solution App Screen"
                  className="w-full h-full object-cover object-top rounded-[36px] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle top & bottom shadow gradient inside phone for realism */}
                <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-black/40 to-transparent pointer-events-none rounded-t-[36px] z-20" />
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-b-[36px] z-20" />
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-amber-100/90 rounded-full z-30 shadow" />
            </div>
          </div>

        </div>

      </div>

      {/* QR Code Modal for Mobile App */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FDFBF7] border border-amber-300 rounded-3xl p-6 max-w-sm w-full text-center relative shadow-2xl text-[#2D241E]">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-[#5C4A3E] hover:text-[#2D241E] p-1 font-bold cursor-pointer"
            >
              ✕
            </button>
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto mb-3 text-amber-800">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2D241E] font-cinzel mb-1">
              {t("Scan to Download App", "ऐप डाउनलोड करने हेतु स्कैन करें")}
            </h3>
            <p className="text-xs text-[#382A1E] mb-4 font-hindi font-medium">
              {t(
                "Point your mobile camera to instantly download 'All Consultation Solution'.",
                "अपने फोन के कैमरे से 'All Consultation Solution' ऐप तुरंत इंस्टॉल करें।"
              )}
            </p>

            {/* Clean QR Code Graphic */}
            <div className="bg-white p-4 rounded-2xl inline-block shadow-lg mx-auto mb-4 border border-amber-200">
              <div className="w-48 h-48 bg-amber-950 p-2 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                <div className="grid grid-cols-6 gap-1 w-full h-full p-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-xs ${
                        (i % 2 === 0 || i % 5 === 0) ? 'bg-amber-400' : 'bg-amber-900'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-2.5 py-1 rounded bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-black tracking-wider uppercase shadow">
                    APP SCAN
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
            >
              {t("Close", "बंद करें")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

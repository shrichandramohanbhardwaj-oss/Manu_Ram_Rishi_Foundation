import React from 'react';
import { Sparkles, Heart, ChevronRight, Check, Droplets, Waves, Utensils, Building2, GraduationCap, HandHeart, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { INITIATIVES } from '../data/foundationData';
import { InitiativeItem } from '../types';

interface InitiativesSectionProps {
  onSelectInitiative: (initiativeId: string) => void;
}

export const InitiativesSection: React.FC<InitiativesSectionProps> = ({ onSelectInitiative }) => {
  const { lang, t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-emerald-400" />;
      case 'HandHeart': return <HandHeart className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-teal-400" />;
      case 'Waves': return <Waves className="w-5 h-5 text-sky-400" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-orange-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="initiatives" className="relative z-0 py-24 bg-[#FAF5EB]/30 overflow-hidden border-t border-amber-200/60">
      {/* Background Image Layer - Clearly Visible */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-35 filter saturate-[1.15] contrast-[1.05] pointer-events-none"
        style={{ backgroundImage: "url('/initiatives-bg.jpg')" }}
      />

      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-up">
        
        {/* Section Header with Targeted Overlay ONLY behind text */}
        <div className="text-center max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-[#FAF5EB]/70 backdrop-blur-md border border-amber-300/60 shadow-md">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t("7 Key Seva Initiatives", "7 मुख्य सेवा प्रकल्प")}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1410] font-cinzel mb-4 drop-shadow-sm">
            {t(
              "Divine Undertakings in Sri Dham Vrindavan",
              "श्री धाम वृन्दावन के सात पावन सेवा प्रकल्प"
            )}
          </h2>

          <p className="text-[#2b221b] text-base sm:text-lg leading-relaxed font-semibold">
            {t(
              "Explore our seven cornerstone initiatives dedicated to living Sanatan values, cow welfare, ascetic veneration, Vedic scholarship, and waterbody conservation.",
              "गौ सेवा, साधु सेवा, गुरुकुल शिक्षा, ऐतिहासिक कुंड जीर्णोद्धार और माँ यमुना की शुद्धि के लिए समर्पित हमारी सात प्रमुख सेवा परियोजनाएं।"
            )}
          </p>
        </div>

        {/* 7 Interactive 3D Perspective Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIATIVES.map((initiative: InitiativeItem, index: number) => {
            const isHighlighted = index === 0 || index === 2; // Subtle spotlight styling
            return (
              <div
                key={initiative.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between backdrop-blur-md ${
                  isHighlighted
                    ? 'border-2 border-amber-300 bg-white/95 shadow-md shadow-amber-950/5'
                    : 'border border-amber-300/80 bg-white/90 shadow-sm shadow-amber-950/5'
                } hover:border-amber-400`}
              >
                {/* Top Image Preview with Badge & Number */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={lang === 'hi' ? initiative.titleHi : initiative.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Seva Sequence Number */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300 flex items-center justify-center text-amber-900 font-bold text-sm font-cinzel shadow-md">
                    #{initiative.number}
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-white font-bold text-xs shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>{initiative.impactMetric.number}</span>
                  </div>

                  {/* Icon Badge Floating */}
                  <div className="absolute -bottom-4 right-6 w-11 h-11 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                    {getIcon(initiative.icon)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Bilingual Titles */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-[#2D241E] font-cinzel group-hover:text-amber-800 transition-colors">
                        {lang === 'hi' ? initiative.titleHi : initiative.titleEn}
                      </h3>
                      <p className="text-xs font-semibold text-amber-700 font-hindi mt-0.5">
                        {lang === 'hi' ? initiative.titleEn : initiative.titleHi}
                      </p>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xs text-amber-900/80 italic font-medium mb-4">
                      {t(initiative.subtitleEn, initiative.subtitleHi)}
                    </p>

                    {/* Primary Bilingual Description */}
                    <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 mb-5">
                      <p className="text-sm text-[#2D241E] leading-relaxed font-medium">
                        {t(initiative.descEn, initiative.descHi)}
                      </p>
                      {/* Alternate language secondary snippet */}
                      <p className="text-xs text-[#5C4A3E] mt-2 pt-2 border-t border-amber-200/60 font-hindi leading-relaxed">
                        {lang === 'en' ? initiative.descHi : initiative.descEn}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      {(lang === 'hi' ? initiative.highlightsHi : initiative.highlightsEn).slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-[#382A1E] font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-4 border-t border-amber-200/60">
                    <button
                      onClick={() => onSelectInitiative(initiative.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-amber-500/20 cursor-pointer"
                    >
                      <Heart className="w-4 h-4 text-white fill-white" />
                      <span>{t("Contribute to this Seva", "इस सेवा में सहयोग करें")}</span>
                      <ChevronRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Subtle Saffron Border line on Hover */}
                <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

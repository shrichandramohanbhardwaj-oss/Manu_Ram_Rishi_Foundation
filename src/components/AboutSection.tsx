import React from 'react';
import { Compass, Heart, BookOpen, Droplet, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      titleEn: 'Compassion & Gau Seva',
      titleHi: 'करुणा एवं गौ सेवा',
      descEn: 'Honoring the holy cow as the mother of the cosmos, providing unconditional sanctuary and affection.',
      descHi: 'गौ माता को समस्त ब्रह्मांड की जननी मानकर उनकी निस्वार्थ सेवा, सुरक्षा और संवर्धन।'
    },
    {
      icon: BookOpen,
      titleEn: 'Vedic Knowledge Revival',
      titleHi: 'वैदिक ज्ञान पुनरुद्धार',
      descEn: 'Preserving the sacred oral traditions of the Vedas, Sanskrit literature, and spiritual ethics.',
      descHi: 'वेदों की पावन गुरु-शिष्य परंपरा, संस्कृत भाषा और सदाचार का आधुनिक युग में पुनर्जागरण।'
    },
    {
      icon: Droplet,
      titleEn: 'Sacred Ecology & Yamuna',
      titleHi: 'पवित्र पर्यावरण व यमुना',
      descEn: 'Revitalizing historical tirtha ponds and keeping holy river Yamuna clean and flowing.',
      descHi: 'ब्रज के विलुप्त तीर्थ सरोवरों का उद्धार और पतित पावनी माँ यमुना की निर्मलता का सतत संकल्प।'
    },
    {
      icon: Compass,
      titleEn: 'Spiritual Community Welfare',
      titleHi: 'आध्यात्मिक जन कल्याण',
      descEn: 'Selfless Sant Seva, Annadaan, and bringing practical consultation solutions to all seekers.',
      descHi: 'साधु-संत सेवा, नित्य अन्नदान और प्रत्येक जिज्ञासु तक आध्यात्मिक समाधान पहुंचाना।'
    }
  ];

  return (
    <section id="about" className="relative z-0 py-24 bg-[#FDFBF7]/30 overflow-hidden border-t border-amber-200/60">
      {/* Background Image Layer - Clearly Visible */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-35 filter saturate-[1.15] contrast-[1.05] pointer-events-none"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      />

      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-up">
        {/* Section Header with Targeted Overlay ONLY behind text */}
        <div className="text-center max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-[#FDFBF7]/70 backdrop-blur-md border border-amber-300/60 shadow-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t("About The Foundation", "हमारे बारे में • पावन संकल्प")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1410] font-cinzel mb-4 drop-shadow-sm">
            {t(
              "Rooted in Sri Vrindavan Dham, Serving the Sanatan World",
              "श्री धाम वृन्दावन में स्थापित, सनातन विश्व की सेवा में तत्पर"
            )}
          </h2>
          <p className="text-[#2b221b] text-base sm:text-lg leading-relaxed font-semibold">
            {t(
              "Manu Ram Rishi Foundation is a revered spiritual and humanitarian trust established to nurture the sacred heritage of Sri Dham Vrindavan. From the banks of holy Maa Yamuna to the hills of Assam, we strive to revive ancient dharma and serve every living soul.",
              "मनु राम ऋषि फाउंडेशन एक समर्पित आध्यात्मिक एवं धर्मार्थ न्यास है, जिसका उद्देश्य श्री धाम वृन्दावन की दिव्य धरोहर का संरक्षण, वैदिक संस्कारों का प्रचार और समग्र जीव कल्याण करना है। यमुना के पावन तटों से लेकर असम के अंचल तक, हमारा प्रत्येक कार्य धर्म और सेवा को समर्पित है।"
            )}
          </p>
        </div>

        {/* 2-Column Split: Visual Story & Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Featured Image with Temple Aesthetic Border */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300/60 shadow-xl shadow-amber-950/10 group">
              <img
                src="https://images.pexels.com/photos/29651534/pexels-photo-29651534.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Vrindavan Temple Architecture"
                className="w-full h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300/80 shadow-md">
                <div className="flex items-center space-x-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t("Divine Inspiration", "दिव्य प्रेरणा स्रोत")}</span>
                </div>
                <div className="text-[#2D241E] font-cinzel font-bold text-lg">
                  {t("Yugal Jodi Sarkar Vrindavan", "युगल जोड़ी सरकार वृन्दावन")}
                </div>
                <p className="text-[#4A3B32] text-xs mt-1 font-medium">
                  {t(
                    "Guided by the eternal divine blessings of Sri Radha Krishna and the sacred lineage of Braj saints.",
                    "श्री राधा कृष्ण की असीम कृपा और ब्रज के तपस्वी संतों के पावन आशीर्वाद से संचालित।"
                  )}
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white p-4 rounded-2xl shadow-xl font-bold text-center border-2 border-white">
              <span className="block text-2xl font-black font-cinzel">100%</span>
              <span className="block text-[11px] uppercase tracking-wider font-semibold">
                {t("Selfless Seva", "निस्वार्थ सेवा")}
              </span>
            </div>
          </div>

          {/* Right Column: Values & Sacred Commitments */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 font-cinzel">
                {t(
                  "Our Sacred Pillars of Dharma & Transformation",
                  "धर्म, सेवा और संस्कृति के चार पावन आधार स्तंभ"
                )}
              </h3>
              <p className="text-[#382A1E] text-sm sm:text-base leading-relaxed font-medium">
                {t(
                  "Our work bridges timeless spiritual devotion with rigorous modern execution. We ensure every donation is put to sacred use with maximum transparency and verifiable impact across Vrindavan and regional chapters.",
                  "हमारा कार्य सनातन भक्ति भाव और पारदर्शी आधुनिक प्रबंधन का एक सुंदर संतुलन है। हम सुनिश्चित करते हैं कि श्रद्धालुओं का प्रत्येक सहयोग प्रत्यक्ष सेवा में रूपांतरित हो और ब्रज की गरिमा सदैव अक्षुण्ण रहे।"
                )}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-amber-200/80 hover:border-amber-400 transition-all duration-300 group hover:shadow-md hover:shadow-amber-900/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <h4 className="text-base font-bold text-[#2D241E] mb-1 group-hover:text-amber-800 transition-colors">
                      {t(val.titleEn, val.titleHi)}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed">
                      {t(val.descEn, val.descHi)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Guarantees / Bullets */}
            <div className="pt-2 border-t border-amber-200/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#382A1E] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t("Verified 80G Tax Deductible Receipts", "80G अधिकृत एवं कर-मुक्त दान रसीद")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t("Transparent Financial Audits & Live Updates", "पारदर्शी लेखा-जोखा व लाइव सेवा अपडेट्स")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t("Daily Ground Seva in Sri Dham Vrindavan", "वृन्दावन धाम में 365 दिन निरंतर सेवा")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t("Dedicated Volunteer Teams in Assam & UP", "असम और उत्तर प्रदेश में समर्पित सेवा दल")}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

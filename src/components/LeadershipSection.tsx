import React from 'react';
import { Sparkles, MapPin, Award, Shield, Crown, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LEADERSHIP } from '../data/foundationData';
import { LeadershipMember } from '../types';

export const LeadershipSection: React.FC = () => {
  const { t } = useLanguage();

  const getRoleIcon = (type: string) => {
    switch (type) {
      case 'divine':
        return <Crown className="w-5 h-5 text-amber-400" />;
      case 'leader':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'director':
        return <Shield className="w-5 h-5 text-teal-400" />;
      case 'director2':
        return <UserCheck className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="leadership" className="relative py-24 bg-[#F5EFE0] overflow-hidden border-t border-amber-200/60">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-up">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>{t("Leadership & Hierarchy", "नेतृत्व मंडल • क्रम अनुसार")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D241E] font-cinzel mb-4">
            {t(
              "Visionary Guardians of Manu Ram Rishi Foundation",
              "संस्था के मार्गदर्शक एवं नेतृत्वकारी महानुभाव"
            )}
          </h2>

          <p className="text-[#382A1E] text-base sm:text-lg leading-relaxed font-medium">
            {t(
              "Steered by transcendent spiritual blessings and committed administrative stewardship across Vrindavan Dham and Assam.",
              "परम पावन आध्यात्मिक प्रेरणा और समर्पित संगठनात्मक संचालन का दिव्य समन्वय।"
            )}
          </p>
        </div>

        {/* Level 1: Supreme Spiritual Guide (Ambassador & Advisor) */}
        <div className="max-w-4xl mx-auto mb-12">
          {LEADERSHIP.filter(m => m.rank === 1).map((member: LeadershipMember) => (
            <div
              key={member.id}
              className="relative rounded-3xl p-6 sm:p-8 bg-white border-2 border-amber-300 shadow-lg shadow-amber-950/5 backdrop-blur-xl group hover:border-amber-400 transition-all duration-500"
            >
              {/* Divine halo accent behind */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                {/* Visual Avatar / Divine Image */}
                <div className="relative shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-1 shadow-md shadow-amber-500/20 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-[14px]"
                        style={{ objectPosition: '85% 20%' }}
                      />
                    ) : (
                      <div className="w-full h-full rounded-[14px] bg-[#FAF5EB] flex flex-col items-center justify-center text-center p-2">
                        <Crown className="w-8 h-8 text-amber-600 mb-1 drop-shadow-[0_0_6px_rgba(217,119,6,0.4)]" />
                        <span className="text-[10px] uppercase font-bold text-amber-900 tracking-wider">
                          {t("Supreme Guide", "सर्वोच्च मार्गदर्शक")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-amber-500 text-white text-[10px] font-black tracking-widest shadow z-10">
                    #1
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>{t(member.roleEn, member.roleHi)}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D241E] font-cinzel tracking-wide mb-1">
                    {member.name}
                  </h3>

                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs sm:text-sm text-amber-800 font-semibold mb-3">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{member.address}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-[#382A1E] text-sm leading-relaxed font-sans">
                    <p className="font-semibold text-amber-900 mb-1 font-hindi text-base">
                      {member.descriptionHi}
                    </p>
                    <p className="text-[#5C4A3E] text-xs italic">
                      {member.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Level 2: Chief Executive Officer - CEO */}
        <div className="max-w-4xl mx-auto mb-12">
          {LEADERSHIP.filter(m => m.rank === 2).map((member: LeadershipMember) => (
            <div
              key={member.id}
              className="relative rounded-2xl p-6 sm:p-7 bg-white border border-amber-200/80 shadow-md shadow-amber-950/5 backdrop-blur-xl group hover:border-amber-400 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Visual Avatar */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-400 to-amber-600 p-1 shadow-md shadow-amber-500/20 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top rounded-[14px]"
                      />
                    ) : (
                      <div className="w-full h-full rounded-[14px] bg-[#FAF5EB] flex flex-col items-center justify-center text-center p-2">
                        <Award className="w-7 h-7 text-amber-600 mb-1" />
                        <span className="text-[10px] uppercase font-bold text-amber-900 tracking-wider">
                          CEO
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-amber-500 text-white text-[10px] font-black tracking-widest shadow z-10">
                    #2
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>{t(member.roleEn, member.roleHi)}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#2D241E] font-cinzel mb-1">
                    {member.name}
                  </h3>

                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs sm:text-sm text-amber-800 font-semibold mb-3">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{member.address}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-[#382A1E] text-sm leading-relaxed">
                    <p className="font-semibold text-[#2D241E] mb-1 font-hindi">
                      {member.descriptionHi}
                    </p>
                    <p className="text-[#5C4A3E] text-xs italic">
                      {member.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Level 3 & 4: The Two Directors (Guwahati, Assam) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {LEADERSHIP.filter(m => m.rank >= 3).map((member: LeadershipMember) => (
            <div
              key={member.id}
              className="relative rounded-2xl p-6 bg-white border border-amber-200/80 shadow-md shadow-amber-950/5 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold">
                    {getRoleIcon(member.specialIcon)}
                    <span>{t(member.roleEn, member.roleHi)}</span>
                  </div>
                  <span className="text-xs font-bold text-amber-800 font-cinzel px-2 py-0.5 rounded bg-amber-100/70">
                    #{member.rank}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#2D241E] font-cinzel mb-1">
                  {member.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold mb-4">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{member.address}</span>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs sm:text-sm text-[#382A1E] mb-4 leading-relaxed font-medium">
                  <p className="font-hindi text-[#2D241E] mb-1">
                    {member.descriptionHi}
                  </p>
                  <p className="text-[#5C4A3E] text-xs italic">
                    {member.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-800 font-semibold">
                <span>{t(member.badgeEn, member.badgeHi)}</span>
                <span className="text-amber-400">•</span>
                <span className="text-[#5C4A3E]">{t("Trust Leadership", "न्यास प्रबंधन")}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

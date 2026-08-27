import React, { useState } from 'react';
import { MapPin, Phone, Mail, Sparkles, Send, CheckCircle2, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { OFFICES } from '../data/foundationData';

export const OfficesContactSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'volunteer',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', interest: 'volunteer', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#F5EFE0] overflow-hidden border-t border-amber-200/60">
      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-up">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>{t("Dual Regional Presence & Contact", "दोहरे क्षेत्रीय कार्यालय एवं संपर्क")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D241E] font-cinzel mb-4">
            {t(
              "Visit Our Seva Kendras in Vrindavan & Assam",
              "वृन्दावन धाम एवं असम स्थित सेवा केंद्रों में आपका स्वागत है"
            )}
          </h2>

          <p className="text-[#382A1E] text-base sm:text-lg leading-relaxed font-medium">
            {t(
              "Reach out to participate in holy seva, volunteer at Rishikul Gurukulam, sponsor cow care, or seek spiritual consultation.",
              "गौ सेवा, गुरुकुल स्वयंसेवा, तीर्थ कुंड जीर्णोद्धार अथवा व्यक्तिगत परामर्श हेतु हमारे सेवा केंद्रों से संपर्क करें।"
            )}
          </p>
        </div>

        {/* Dual Office Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Office 1: Vrindavan Head Seva Kendra */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-white border-2 border-amber-300 shadow-lg group hover:border-amber-400 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 font-cinzel">
                {t("Headquarters • Sri Vrindavan Dham", "प्रधान मुख्यालय • श्री धाम वृन्दावन")}
              </span>
              <Sparkles className="w-4 h-4 text-amber-600" />
            </div>

            <h3 className="text-2xl font-bold text-[#2D241E] font-cinzel mb-2">
              {t(OFFICES.officeVrindavan.nameEn, OFFICES.officeVrindavan.nameHi)}
            </h3>

            <div className="space-y-3 text-sm text-[#382A1E] mb-6 font-medium">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {t(OFFICES.officeVrindavan.addressEn, OFFICES.officeVrindavan.addressHi)}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="font-mono">{OFFICES.officeVrindavan.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <a href={`mailto:${OFFICES.officeVrindavan.email}`} className="hover:underline text-amber-900 font-semibold">{OFFICES.officeVrindavan.email}</a>
              </div>
              <div className="text-xs font-mono text-amber-950 bg-amber-50 p-2.5 rounded-xl border border-amber-200/80 flex flex-wrap items-center gap-x-4 gap-y-1">
                <div><span className="font-bold text-amber-800 font-sans">CIN:</span> {OFFICES.officeVrindavan.cin}</div>
                <div><span className="font-bold text-amber-800 font-sans">Reg. No:</span> {OFFICES.officeVrindavan.regNo}</div>
              </div>
              <div className="flex items-center space-x-3 text-xs text-[#5C4A3E]">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t("Daily Darshan & Office Hours: 06:00 AM - 09:00 PM", "नित्य दर्शन एवं कार्यालय समय: प्रातः 06:00 - रात्रि 09:00")}</span>
              </div>
            </div>

            {/* Features Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-amber-200/60 mb-5">
              {(lang === 'hi' ? OFFICES.officeVrindavan.featuresHi : OFFICES.officeVrindavan.featuresEn).map((f, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                  {f}
                </span>
              ))}
            </div>

            <a
              href={OFFICES.officeVrindavan.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors"
            >
              <span>{t("Open in Google Maps", "गूगल मैप्स पर देखें")}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Office 2: Assam Regional Office */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-white border-2 border-amber-300 shadow-lg group hover:border-amber-400 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 font-cinzel">
                {t("Regional Office • Assam Chapter", "क्षेत्रीय कार्यालय • पूर्वोत्तर असम")}
              </span>
              <Sparkles className="w-4 h-4 text-amber-600" />
            </div>

            <h3 className="text-2xl font-bold text-[#2D241E] font-cinzel mb-2">
              {t(OFFICES.officeAssam.nameEn, OFFICES.officeAssam.nameHi)}
            </h3>

            <div className="space-y-3 text-sm text-[#382A1E] mb-6 font-medium">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {t(OFFICES.officeAssam.addressEn, OFFICES.officeAssam.addressHi)}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="font-mono">{OFFICES.officeAssam.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <a href={`mailto:${OFFICES.officeAssam.email}`} className="hover:underline text-amber-900 font-semibold">{OFFICES.officeAssam.email}</a>
              </div>
              <div className="text-xs font-mono text-amber-950 bg-amber-50 p-2.5 rounded-xl border border-amber-200/80 flex flex-wrap items-center gap-x-4 gap-y-1">
                <div><span className="font-bold text-amber-800 font-sans">CIN:</span> {OFFICES.officeAssam.cin}</div>
                <div><span className="font-bold text-amber-800 font-sans">Reg. No:</span> {OFFICES.officeAssam.regNo}</div>
              </div>
              <div className="flex items-center space-x-3 text-xs text-[#5C4A3E]">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t("Regional Office Hours: 09:00 AM - 06:00 PM (Mon-Sat)", "क्षेत्रीय कार्यालय समय: प्रातः 09:00 - सायं 06:00 (सोम-शनि)")}</span>
              </div>
            </div>

            {/* Features Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-amber-200/60 mb-5">
              {(lang === 'hi' ? OFFICES.officeAssam.featuresHi : OFFICES.officeAssam.featuresEn).map((f, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                  {f}
                </span>
              ))}
            </div>

            <a
              href={OFFICES.officeAssam.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors"
            >
              <span>{t("Open in Google Maps", "गूगल मैप्स पर देखें")}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Devotee Connect & Seva Inquiry Form */}
        <div className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-8 bg-white border border-amber-200/80 shadow-xl backdrop-blur-xl">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2D241E] font-cinzel">
              {t("Connect with Foundation Volunteers", "सेवा संकल्प एवं स्वयंसेवक पंजीकरण")}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4A3E] mt-1 font-hindi font-medium">
              {t(
                "Leave a message for seva inquiry, cow adoption, or consultation appointment.",
                "गौ सेवा, गुरुकुल सहयोग अथवा व्यक्तिगत आध्यात्मिक परामर्श हेतु संदेश भेजें।"
              )}
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <div className="text-lg font-bold text-emerald-950 font-cinzel">
                {t("Pranam! Your Message Has Been Received", "प्रणाम! आपका पावन संदेश प्राप्त हो गया है")}
              </div>
              <p className="text-xs text-emerald-800 font-medium">
                {t(
                  "Our Vrindavan seva coordinator will get in touch with you shortly. Radhe Radhe!",
                  "हमारा सेवा दल अतिशीघ्र आपसे संपर्क करेगा। राधे राधे!"
                )}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#382A1E] font-semibold mb-1">
                    {t("Your Name / आपका नाम", "आपका नाम / Your Name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Krishna"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-amber-50/30 border border-amber-200 text-[#2D241E] text-xs focus:border-amber-500 focus:outline-none font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#382A1E] font-semibold mb-1">
                    {t("Phone Number / मोबाइल नंबर", "मोबाइल नंबर / Phone Number")} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98XXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-amber-50/30 border border-amber-200 text-[#2D241E] text-xs focus:border-amber-500 focus:outline-none font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#382A1E] font-semibold mb-1">
                    {t("Email / ईमेल", "ईमेल / Email")}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anand@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-amber-50/30 border border-amber-200 text-[#2D241E] text-xs focus:border-amber-500 focus:outline-none font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#382A1E] font-semibold mb-1">
                    {t("Interest Area / रुचि का क्षेत्र", "रुचि का क्षेत्र / Interest Area")}
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-amber-50/30 border border-amber-200 text-[#2D241E] text-xs focus:border-amber-500 focus:outline-none font-medium"
                  >
                    <option value="volunteer">{t("Volunteer for Gau Seva / Yamuna Cleanup", "गौ सेवा / यमुना स्वच्छता में स्वयंसेवा")}</option>
                    <option value="gurukulam">{t("Vedic Gurukulam Sponsorship", "ऋषिकुल गुरुकुल छात्र सहयोग")}</option>
                    <option value="kund">{t("Kund Revival Partnership", "विलुप्त कुंड जीर्णोद्धार सहयोग")}</option>
                    <option value="consult">{t("Spiritual Consultation Request", "आध्यात्मिक परामर्श अनुरोध")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#382A1E] font-semibold mb-1">
                  {t("Message or Devotional Prayer / संदेश", "संदेश अथवा सेवा संकल्प / Message")}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("Write your message here...", "अपना संदेश अथवा जिज्ञासा यहां लिखें...")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-amber-50/30 border border-amber-200 text-[#2D241E] text-xs focus:border-amber-500 focus:outline-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>{t("Submit Seva Inquiry", "सेवा संदेश प्रेषित करें")}</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};

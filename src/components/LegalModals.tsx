import React from 'react';
import { X, Shield, FileText, CheckCircle2, Lock, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModals: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative max-w-3xl w-full bg-[#FDFBF7] border border-amber-300 rounded-3xl overflow-hidden shadow-2xl my-8 text-[#2D241E] max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 bg-amber-100/90 border-b border-amber-300/80 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800">
              {type === 'privacy' ? <Shield className="w-5 h-5" /> : <Scale className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D241E] font-cinzel">
                {type === 'privacy'
                  ? t("Privacy Policy • गोपनीयता नीति", "गोपनीयता नीति • Privacy Policy")
                  : t("Terms & Conditions • नियम एवं शर्तें", "नियम एवं शर्तें • Terms & Conditions")}
              </h3>
              <p className="text-[11px] text-amber-800 font-semibold">
                Manu Ram Rishi Foundation • श्री धाम वृन्दावन
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#5C4A3E] hover:text-[#2D241E] rounded-lg hover:bg-amber-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#382A1E] text-xs sm:text-sm leading-relaxed font-medium">
          
          {type === 'privacy' ? (
            <>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20 text-cyan-200 text-xs">
                {t(
                  "Last Updated: January 2026 • Valid for all online donations, seva registrations, and consultation mobile app services.",
                  "अंतिम अद्यतन: जनवरी 2026 • सभी ऑनलाइन दान, सेवा पंजीकरण एवं मोबाइल ऐप परामर्श सेवाओं हेतु मान्य।"
                )}
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2 font-cinzel flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  {t("1. Information We Collect", "१. एकत्रित की जाने वाली जानकारी")}
                </h4>
                <p className="mb-2">
                  {t(
                    "When you make a donation, register for seva, or use the 'All Consultation Solution' app, Manu Ram Rishi Foundation collects your name, mobile phone number, email address, mailing address, and Permanent Account Number (PAN) strictly for generating verified 80G tax exemption receipts as mandated by the Income Tax Department of India.",
                    "जब आप कोई दान करते हैं, सेवा हेतु पंजीकरण कराते हैं या 'All Consultation Solution' ऐप का उपयोग करते हैं, तो मनु राम ऋषि फाउंडेशन आपका नाम, संपर्क नंबर, ईमेल पता और पैन कार्ड नंबर केवल आयकर अधिनियम के अंतर्गत 80G अधिकृत रसीद जारी करने के लिए संकलित करता है।"
                  )}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2 font-cinzel flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  {t("2. Data Security & Financial Protection", "२. डेटा सुरक्षा एवं वित्तीय गोपनीयता")}
                </h4>
                <p className="mb-2">
                  {t(
                    "We do NOT store any sensitive banking credentials, card CVV numbers, or UPI PINs. All financial transactions are encrypted through 256-bit SSL protocols and processed through RBI-authorized payment gateways.",
                    "हम आपके बैंक खाते का पासवर्ड, कार्ड CVV या UPI पिन कभी भी अपने सर्वर पर सुरक्षित नहीं करते हैं। समस्त भुगतान भारतीय रिज़र्व बैंक (RBI) द्वारा अधिकृत सुरक्षित पेमेंट गेटवे के माध्यम से 256-बिट एन्क्रिप्शन द्वारा संपन्न होते हैं।"
                  )}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2 font-cinzel flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  {t("3. Non-Disclosure & Devotee Trust", "३. गोपनीयता एवं डेटा का गैर-विक्रय")}
                </h4>
                <p>
                  {t(
                    "Manu Ram Rishi Foundation adheres to the highest Sanatan principles of trust. We never sell, rent, or trade your personal data to commercial third parties or advertising brokers.",
                    "मनु राम ऋषि फाउंडेशन सनातन धर्म के विश्वास और शुचिता का पालन करता है। हम किसी भी श्रद्धालु की व्यक्तिगत जानकारी को किसी भी विज्ञापनदाता या वाणिज्यिक तृतीय पक्ष को कभी नहीं बेचते।"
                  )}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2 font-cinzel">
                  {t("4. Grievance Officer & Contact", "४. शिकायत निवारण अधिकारी")}
                </h4>
                <p>
                  {t(
                    "For any privacy queries or receipt corrections, please contact: privacy@manuramrishifoundation.org or visit Radha Niwas, Vrindavan, Mathura - 281121.",
                    "किसी भी गोपनीयता प्रश्न या रसीद में सुधार हेतु संपर्क करें: privacy@manuramrishifoundation.org अथवा राधा निवास, वृन्दावन, मथुरा - 281121।"
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 text-amber-200 text-xs">
                {t(
                  "Terms of Use & Seva Contribution Regulations • Manu Ram Rishi Foundation Trust.",
                  "सेवा एवं दान नियम व शर्तें • मनु राम ऋषि फाउंडेशन धर्मार्थ न्यास।"
                )}
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2 font-cinzel flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  {t("1. Voluntary Nature of Seva Donations", "१. दान एवं सहयोग की स्वैच्छिक प्रकृति")}
                </h4>
                <p>
                  {t(
                    "All contributions made towards Gau Seva, Rishikul Gurukulam, Kund Revival, Maa Yamuna conservation, and Sant Bhandara are purely voluntary and non-refundable charitable gifts given without any commercial consideration.",
                    "गौ सेवा, ऋषिकुल गुरुकुल, विलुप्त कुंड पुनरुद्धार, यमुना स्वच्छता और संत भंडारे हेतु दिया गया समस्त सहयोग पूरी तरह स्वैच्छिक और धर्मार्थ है। यह किसी व्यावसायिक प्रतिफल के बिना समर्पित किया जाता है।"
                  )}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2 font-cinzel flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t("2. Utilization of Funds", "२. सेवा कोष का पारदर्शी उपयोग")}
                </h4>
                <p>
                  {t(
                    "The Foundation pledges that all donations are exclusively deployed for the declared Sanatan dharma and community welfare causes, subject to regular statutory audits by certified chartered accountants in accordance with Indian trust laws.",
                    "न्यास वचनबद्ध है कि प्राप्त समस्त सहयोग केवल घोषित सेवा प्रकल्पों में ही उपयोग किया जाएगा और भारतीय न्यास नियमों के अंतर्गत सीए द्वारा नियमित रूप से आडिट किया जाएगा।"
                  )}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2 font-cinzel flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-400" />
                  {t("3. Jurisdiction & Applicable Law", "३. कानूनी क्षेत्राधिकार")}
                </h4>
                <p>
                  {t(
                    "These terms are governed by the laws of India. Any disputes arising out of online contributions or foundation operations shall be subject to the exclusive jurisdiction of the competent courts in Mathura, Uttar Pradesh, India.",
                    "ये नियम भारत के कानूनों द्वारा शासित हैं। किसी भी विवाद की स्थिति में न्यायिक क्षेत्राधिकार केवल मथुरा जिला न्यायालय, उत्तर प्रदेश, भारत का होगा।"
                  )}
                </p>
              </div>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#051124] border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-slate-950 font-bold text-xs cursor-pointer transition-all"
          >
            {t("I Understand / सहमत हूँ", "सहमत हूँ / Close")}
          </button>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { X, Printer, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DonationReceipt } from '../types';

interface DonationReceiptModalProps {
  receipt: DonationReceipt | null;
  onClose: () => void;
}

export const DonationReceiptModal: React.FC<DonationReceiptModalProps> = ({ receipt, onClose }) => {
  const { t } = useLanguage();

  if (!receipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative max-w-2xl w-full bg-[#07152b] border-2 border-amber-400/60 rounded-3xl overflow-hidden shadow-2xl my-8 text-white">
        
        {/* Top Header Controls (Hidden during print) */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{t("Official 80G Tax Exemption Receipt", "अधिकृत 80G आयकर छूट दान रसीद")}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t("Print / Save PDF", "प्रिंट / PDF सहेजें")}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Paper Container */}
        <div id="printable-receipt" className="p-6 sm:p-8 bg-gradient-to-b from-[#091f3d] via-[#06162d] to-[#040e1f] relative">
          
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <span className="text-8xl font-black font-cinzel tracking-widest text-amber-300 select-none">
              MRRF
            </span>
          </div>

          {/* Receipt Header */}
          <div className="border-b-2 border-amber-400/40 pb-6 mb-6 text-center relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold uppercase tracking-widest mb-2 border border-amber-400/30">
              || श्री हरि: शरणम् ||
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel">
              MANU RAM RISHI FOUNDATION
            </h2>
            <p className="text-xs sm:text-sm text-amber-300 font-hindi font-medium mt-0.5">
              मनु राम ऋषि फाउंडेशन • श्री धाम वृन्दावन एवं गुवाहाटी
            </p>
            <p className="text-[11px] text-slate-300 mt-2 max-w-lg mx-auto">
              Registered Public Charitable Trust • Reg. No. IV-1209/VRN/2021<br />
              Donations Exempt from Income Tax U/S 80G of the I.T. Act 1961 (CIT(E)/80G/2022-23/A/10492)
            </p>
          </div>

          {/* Receipt Status Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs mb-6 relative z-10">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Receipt No:</span>
              <span className="font-mono font-bold text-amber-300">{receipt.receiptNumber}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Date &amp; Time:</span>
              <span className="font-medium text-white">{receipt.date}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Payment Mode:</span>
              <span className="font-semibold text-cyan-300">{receipt.paymentMode}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Transaction ID:</span>
              <span className="font-mono text-slate-300 truncate block">{receipt.transactionId}</span>
            </div>
          </div>

          {/* Donor & Contribution Details Table */}
          <div className="space-y-4 mb-6 relative z-10 text-xs sm:text-sm">
            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">{t("Received With Thanks From:", "श्रद्धालु / दानदाता का नाम:")}</span>
              <span className="font-bold text-white text-right">{receipt.donorName}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">{t("Contact Details:", "संपर्क विवरण:")}</span>
              <span className="text-slate-200 text-right">{receipt.donorPhone} | {receipt.donorEmail}</span>
            </div>

            {receipt.donorPan && (
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">{t("Donor PAN (For 80G Credit):", "दानदाता पैन नंबर (80G हेतु):")}</span>
                <span className="font-mono font-bold text-amber-300 uppercase">{receipt.donorPan}</span>
              </div>
            )}

            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">{t("Dedicated Seva Project:", "समर्पित सेवा प्रकल्प:")}</span>
              <span className="font-semibold text-cyan-300 text-right">
                {t(receipt.sevaProjectEn, receipt.sevaProjectHi)}
              </span>
            </div>

            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">{t("Contribution Frequency:", "सहयोग आवृत्ति:")}</span>
              <span className="text-slate-200 uppercase tracking-wider font-semibold">
                {receipt.frequency === 'monthly' ? t("Monthly Nitya Seva", "मासिक नित्य सेवा") : t("One-Time Seva", "एकमुश्त सेवा")}
              </span>
            </div>

            {/* Total Amount Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent border border-amber-400/40 flex items-center justify-between mt-4">
              <div>
                <span className="block text-xs uppercase text-amber-300 font-bold tracking-wider">
                  {t("Total Amount Received", "कुल प्राप्त दान राशि")}
                </span>
                <span className="text-[11px] text-slate-300 italic">
                  {t("Sanatan Seva Contribution", "सनातन सेवा सहयोग")}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-cinzel">
                ₹ {receipt.amount.toLocaleString('en-IN')}.00
              </div>
            </div>
          </div>

          {/* Signatures & Stamp Footer */}
          <div className="grid grid-cols-2 items-end pt-4 border-t-2 border-slate-800 relative z-10">
            {/* Digital Stamp */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-teal-400 p-1 flex flex-col items-center justify-center text-center text-teal-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-[8px] font-black uppercase">VERIFIED</span>
              </div>
              <div className="text-[10px] text-slate-400">
                <span className="text-emerald-400 font-bold block">✓ 80G Certified</span>
                <span>Manu Ram Rishi Trust</span>
              </div>
            </div>

            {/* Signatory */}
            <div className="text-right">
              <div className="font-cinzel text-xs font-bold text-slate-200">
                Authorized Signatory
              </div>
              <div className="text-[10px] text-slate-400 font-hindi">
                मुख्य कार्यकारी अधिकारी / अधिकृत हस्ताक्षरकर्ता
              </div>
              <div className="text-[9px] text-amber-400/80 mt-0.5">
                Radha Niwas, Vrindavan, Mathura
              </div>
            </div>
          </div>

          {/* Blessing Message */}
          <div className="mt-6 text-center text-xs text-amber-300/90 font-hindi border-t border-slate-800/80 pt-3">
            "गौ माता, संत जनों और पतित पावनी यमुना की कृपा आप और आपके परिवार पर सदैव बनी रहे।"
          </div>

        </div>

      </div>
    </div>
  );
};

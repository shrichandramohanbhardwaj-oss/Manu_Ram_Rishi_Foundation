import React, { useState, useEffect } from 'react';
import { Heart, ShieldCheck, QrCode, CreditCard, Landmark, Check, Sparkles, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { PRESET_AMOUNTS } from '../data/foundationData';
import { DonationReceipt } from '../types';
import { DonationReceiptModal } from './DonationReceiptModal';

interface DonationSectionProps {
  selectedInitiativeId?: string | null;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ selectedInitiativeId }) => {
  const { lang, t } = useLanguage();

  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedProject, setSelectedProject] = useState<string>('gau-seva');
  const [amount, setAmount] = useState<number>(2100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMode, setPaymentMode] = useState<'UPI' | 'QR Code' | 'Net Banking' | 'Card'>('UPI');

  // Donor Details Form
  const [donorName, setDonorName] = useState<string>('');
  const [donorPhone, setDonorPhone] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [donorPan, setDonorPan] = useState<string>('');
  const [copiedUpi, setCopiedUpi] = useState<boolean>(false);

  // Processing state
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Dynamically load Razorpay SDK script safely with window & document checks
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    if (!document.getElementById('razorpay-checkout-sdk')) {
      const script = document.createElement('script');
      script.id = 'razorpay-checkout-sdk';
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Update selected project if props change
  useEffect(() => {
    if (selectedInitiativeId) {
      setSelectedProject(selectedInitiativeId);
    }
  }, [selectedInitiativeId]);

  const projects = [
    { id: 'gau-seva', en: 'Gau Seva (Cow Protection & Care)', hi: 'गौ सेवा (गौ माता संरक्षण एवं पोषण)' },
    { id: 'gurukulam', en: 'Rishikul International Gurukulam', hi: 'ऋषिकुल इंटरनेशनल गुरुकुलम' },
    { id: 'kund-revival', en: 'Revival of Sacred Kunds', hi: 'विलुप्त कुंड और सरोवर का पुनरुद्धार' },
    { id: 'mandir-prasadi', en: 'Mandir Prasadi & Annadaan', hi: 'मंदिर प्रसादी एवं अन्नदान' },
    { id: 'sant-seva', en: 'Sadhu Sant Seva', hi: 'साधु संत सेवा' },
    { id: 'yamuna-cleaning', en: 'Maa Yamuna Cleaning', hi: 'यमुना मां की सफाई' },
    { id: 'rishikul-ashram', en: 'Rishikul Ashram Sanctuary', hi: 'ऋषिकुल आश्रम आध्यात्मिक केंद्र' },
    { id: 'general', en: 'General Sanatan Seva Corpus', hi: 'सामान्य सनातन सेवा कोष' },
  ];

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setCustomAmount(val);
    if (val) {
      setAmount(parseInt(val, 10));
    }
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('manuramrishi@sbi');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const handleSubmitDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window === 'undefined') return;

    if (!donorName.trim()) {
      alert(t("Please enter your name", "कृपया अपना नाम दर्ज करें"));
      return;
    }
    if (!amount || amount < 1) {
      alert(t("Minimum contribution amount is ₹1", "न्यूनतम सहयोग राशि ₹1 है"));
      return;
    }

    setIsProcessing(true);

    try {
      const activeProj = projects.find(p => p.id === selectedProject) || projects[0];
      const amountInPaise = amount * 100;
      const receiptId = `MRRF_${Date.now()}`;

      // STEP 1: BACKEND - Create Order
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: 'INR',
          receipt: receiptId,
        }),
      });

      if (!orderResponse.ok) {
        const errorData = await orderResponse.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.details || `Server returned ${orderResponse.status}`);
      }

      const orderData = await orderResponse.json();

      // STEP 2: FRONTEND - Razorpay Checkout Modal
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_TWIVok7dOWi2Fw';

      const options: any = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: 'Manu Ram Rishi Foundation',
        description: `Seva Contribution for ${t(activeProj.en, activeProj.hi)}`,
        image: '/logo-clean.png',
        order_id: orderData.order_id,
        prefill: {
          name: donorName.trim(),
          email: donorEmail.trim() || 'devotee@sanatanseva.org',
          contact: donorPhone.trim() || '',
        },
        notes: {
          project: selectedProject,
          frequency: frequency,
          pan: donorPan.trim() ? donorPan.toUpperCase().trim() : '',
        },
        theme: {
          color: '#d97706',
        },
        handler: async function (response: any) {
          try {
            // STEP 3: BACKEND - Verify Signature
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              // Trigger celebratory confetti
              confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#00e5ff', '#f59e0b', '#10b981', '#fbbf24', '#ffffff']
              });

              // Generate Receipt
              const newReceipt: DonationReceipt = {
                receiptNumber: `MRRF-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
                donorName: donorName.trim(),
                donorEmail: donorEmail.trim() || 'devotee@sanatanseva.org',
                donorPhone: donorPhone.trim() || '+91 98XXXXXXXX',
                donorPan: donorPan.trim() ? donorPan.toUpperCase().trim() : undefined,
                sevaProjectEn: activeProj.en,
                sevaProjectHi: activeProj.hi,
                amount: amount,
                frequency: frequency,
                paymentMode: 'Card',
                transactionId: response.razorpay_payment_id || `TXN${Date.now().toString().slice(-8)}`,
                date: new Date().toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                }),
                is80GEligible: true
              };

              setReceipt(newReceipt);
              setShowReceiptModal(true);
            } else {
              alert(t(
                `Payment verification failed: ${verifyData.error || 'Invalid Signature'}`,
                `भुगतान सत्यापन विफल: ${verifyData.error || 'अमान्य हस्ताक्षर'}`
              ));
            }
          } catch (err: any) {
            console.error('Verification Error:', err);
            alert(t("Server error verifying payment.", "भुगतान सत्यापन के दौरान त्रुटि हुई।"));
          } finally {
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            console.log('Razorpay payment modal closed by user');
          }
        }
      };

      if (typeof (window as any).Razorpay === 'undefined') {
        throw new Error('Razorpay SDK script failed to load. Please check network connection.');
      }

      const rzp = new (window as any).Razorpay(options);

      rzp.on('payment.failed', function (resp: any) {
        console.error('Razorpay Payment Failed:', resp.error);
        alert(t(
          `Payment Failed: ${resp.error?.description || resp.error?.reason || 'Transaction could not be completed'}`,
          `भुगतान असफल: ${resp.error?.description || 'लेनदेन पूरा नहीं हो सका'}`
        ));
        setIsProcessing(false);
      });

      rzp.open();
    } catch (error: any) {
      console.error('Razorpay Checkout Init Error:', error);
      alert(t(
        `Failed to start payment: ${error.message || 'Server connection error'}`,
        `भुगतान प्रारंभ करने में असमर्थ: ${error.message || 'सर्वर संपर्क त्रुटि'}`
      ));
      setIsProcessing(false);
    }
  };

  return (
    <section id="donate" className="relative py-24 bg-[#FAF5EB] overflow-hidden border-t border-amber-200/60">
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-up">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            <span>{t("Donation & Seva Contribution", "दान एवं पावन सहयोग")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D241E] font-cinzel mb-4">
            {t(
              "Support Sacred Heritage & Seva in Vrindavan",
              "श्री धाम वृन्दावन सेवा एवं सनातन धर्म हेतु पावन आहुति"
            )}
          </h2>

          <p className="text-[#382A1E] text-base sm:text-lg leading-relaxed font-medium">
            {t(
              "Your sacred contribution directly supports Gau Seva, Sant Bhandara, Vedic Gurukulam education, and the cleaning of Maa Yamuna. Transparent receipts with 80G tax exemption provided instantly.",
              "आपका पावन सहयोग सीधे गौ रक्षा, संत भंडारा, गुरुकुल शिक्षा और माँ यमुना की निर्मलता में उपयोग होता है। प्रत्येक सहयोग पर तुरंत 80G अधिकृत रसीद प्राप्त करें।"
            )}
          </p>
        </div>

        {/* Main Donation Container */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-white border-2 border-amber-200/80 shadow-xl shadow-amber-950/5 backdrop-blur-xl">
          
          <form onSubmit={handleSubmitDonation} className="space-y-8">
            
            {/* 1. Frequency Switcher (One-time vs Monthly) */}
            <div className="flex justify-center">
              <div className="inline-flex p-1 rounded-2xl bg-[#F5EFE0] border border-amber-300/80 shadow-inner">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    frequency === 'one-time'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                      : 'text-[#5C4A3E] hover:text-[#2D241E]'
                  }`}
                >
                  {t("One-Time Seva Contribution", "एकमुश्त पावन सहयोग")}
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    frequency === 'monthly'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                      : 'text-[#5C4A3E] hover:text-[#2D241E]'
                  }`}
                >
                  {t("Monthly Nitya Seva (Pledge)", "मासिक नित्य सेवा (संकल्प)")}
                </button>
              </div>
            </div>

            {/* 2. Project Selection Options */}
            <div>
              <label className="block text-sm font-bold text-amber-900 mb-3 font-cinzel">
                {t("1. Select Sacred Seva Project", "१. पावन सेवा प्रकल्प चुनें")}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {projects.map((proj) => {
                  const isSelected = selectedProject === proj.id;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => setSelectedProject(proj.id)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer border flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-sm ring-1 ring-amber-400'
                          : 'bg-amber-50/50 border-amber-200 text-[#382A1E] hover:border-amber-300'
                      }`}
                    >
                      <span className="truncate pr-1">{t(proj.en, proj.hi)}</span>
                      {isSelected && <Check className="w-4 h-4 text-amber-700 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Preset & Custom Amount Selection */}
            <div>
              <label className="block text-sm font-bold text-amber-900 mb-3 font-cinzel">
                {t("2. Choose Contribution Amount (₹ INR)", "२. सहयोग राशि चुनें (₹ INR)")}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 mb-3">
                {PRESET_AMOUNTS.map((val) => {
                  const isSelected = amount === val && !customAmount;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleAmountSelect(val)}
                      className={`py-3 rounded-xl font-bold text-sm transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-400 shadow-md scale-105'
                          : 'bg-amber-50/50 border-amber-200 text-[#2D241E] hover:border-amber-400'
                      }`}
                    >
                      ₹ {val.toLocaleString('en-IN')}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount Input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-800 font-bold">
                  ₹
                </span>
                <input
                  type="text"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder={t("Or enter custom amount in Rupees...", "या अन्य स्वेच्छा सहयोग राशि दर्ज करें...")}
                  className="w-full pl-9 pr-4 py-3 rounded-xl bg-amber-50/30 border border-amber-200 focus:border-amber-500 text-[#2D241E] placeholder-[#5C4A3E] text-sm focus:outline-none transition-colors font-medium"
                />
              </div>
            </div>

            {/* 4. Payment Modes Tabs */}
            <div>
              <label className="block text-sm font-bold text-amber-900 mb-3 font-cinzel">
                {t("3. Select Payment Channel", "३. भुगतान का माध्यम चुनें")}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'UPI', label: 'UPI / VPA', icon: Sparkles, hint: 'GPay, PhonePe, Paytm' },
                  { id: 'QR Code', label: 'Dynamic QR', icon: QrCode, hint: 'Scan & Pay Instantly' },
                  { id: 'Net Banking', label: 'Net Banking', icon: Landmark, hint: 'All Major Indian Banks' },
                  { id: 'Card', label: 'Debit / Card', icon: CreditCard, hint: 'Visa, Rupay, Mastercard' },
                ].map(mode => {
                  const isSelected = paymentMode === mode.id;
                  const Icon = mode.icon;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setPaymentMode(mode.id as any)}
                      className={`p-3 rounded-xl text-center transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-sm'
                          : 'bg-amber-50/50 border-amber-200 text-[#5C4A3E] hover:border-amber-300'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mx-auto mb-1 ${isSelected ? 'text-amber-700' : 'text-amber-600'}`} />
                      <div className="text-xs font-bold">{mode.label}</div>
                      <div className="text-[10px] text-[#5C4A3E]">{mode.hint}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Payment Details Panel based on mode */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-[#2D241E]">
              {paymentMode === 'UPI' && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-[#5C4A3E] block text-[11px] font-semibold">Official Foundation UPI ID (VPA):</span>
                    <span className="font-mono text-base font-bold text-amber-900">manuramrishi@sbi</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-200 border border-amber-300 text-amber-900 font-bold flex items-center space-x-1.5 hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedUpi ? t("Copied!", "कॉपी हो गया!") : t("Copy UPI ID", "UPI कॉपी करें")}</span>
                  </button>
                </div>
              )}

              {paymentMode === 'QR Code' && (
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center sm:text-left">
                  <div className="bg-white p-2.5 rounded-xl shadow-md shrink-0 border border-amber-200">
                    <div className="w-28 h-28 bg-[#2D241E] p-1 rounded-md flex flex-col items-center justify-center relative">
                      <div className="grid grid-cols-5 gap-1 w-full h-full p-1.5">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-xs ${
                              (i % 2 === 0 || i % 3 === 0) ? 'bg-amber-400' : 'bg-[#4A3B32]'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="absolute text-[8px] bg-amber-500 text-white font-black px-1 rounded">
                        UPI QR
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[#2D241E] text-sm mb-1">
                      {t("Dynamic Seva QR for ₹", "₹ के लिए सेवा QR कोड: ")} {amount.toLocaleString('en-IN')}
                    </div>
                    <p className="text-[#4A3B32] text-[11px] leading-relaxed font-medium">
                      {t(
                        "Scan using PhonePe, Google Pay, BHIM, or Paytm. Your transaction will automatically sync with your receipt.",
                        "PhonePe, Google Pay, BHIM या Paytm से सीधे स्कैन करें। दान रसीद तुरंत तैयार हो जाएगी।"
                      )}
                    </p>
                  </div>
                </div>
              )}

              {paymentMode === 'Net Banking' && (
                <div className="text-[#382A1E] space-y-1 font-medium">
                  <div className="font-bold text-[#2D241E]">{t("Supported Banks:", "प्रमुख सहयोगी बैंक:")}</div>
                  <p className="text-[#4A3B32] text-[11px]">
                    State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Punjab National Bank, Bank of Baroda &amp; 50+ Scheduled Indian Banks.
                  </p>
                </div>
              )}

              {paymentMode === 'Card' && (
                <div className="text-[#382A1E] space-y-1 font-medium">
                  <div className="font-bold text-[#2D241E]">{t("Debit / Credit / International Cards:", "डेबिट / क्रेडिट कार्ड:")}</div>
                  <p className="text-[#4A3B32] text-[11px]">
                    Supports RuPay, Visa, MasterCard, and Maestro with 256-Bit SSL bank-grade encryption.
                  </p>
                </div>
              )}
            </div>

            {/* 5. Donor Information Form */}
            <div>
              <label className="block text-sm font-bold text-amber-900 mb-3 font-cinzel">
                {t("4. Devotee Details (For 80G Tax Exemption Receipt)", "४. श्रद्धालु विवरण (80G आयकर छूट रसीद हेतु)")}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#382A1E] font-semibold mb-1">
                    {t("Full Name / श्रद्धालु का नाम", "श्रद्धालु का नाम / Full Name")} <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-amber-50/30 border border-amber-200 focus:border-amber-500 text-[#2D241E] text-sm focus:outline-none font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#382A1E] font-semibold mb-1">
                    {t("Mobile Phone Number", "मोबाइल नंबर")} <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-amber-50/30 border border-amber-200 focus:border-amber-500 text-[#2D241E] text-sm focus:outline-none font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#382A1E] font-semibold mb-1">
                    {t("Email Address (For Instant Receipt PDF)", "ईमेल (रसीद PDF प्राप्त करने हेतु)")}
                  </label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="ramesh@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-amber-50/30 border border-amber-200 focus:border-amber-500 text-[#2D241E] text-sm focus:outline-none font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#382A1E] font-semibold mb-1">
                    {t("PAN Number (Optional, for 80G Tax Credit)", "पैन कार्ड नंबर (वैकल्पिक, 80G छूट हेतु)")}
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    value={donorPan}
                    onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                    placeholder="ABCDE1234F"
                    className="w-full px-4 py-2.5 rounded-xl bg-amber-50/30 border border-amber-200 focus:border-amber-500 text-[#2D241E] text-sm focus:outline-none uppercase font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Tax Exemption Note */}
            <div className="flex items-start space-x-2 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {t(
                  "All contributions are eligible for 50% tax deduction under Section 80G of the Indian Income Tax Act. A verified digital receipt with Trust registration number will be generated immediately upon confirmation.",
                  "आयकर अधिनियम की धारा 80G के अंतर्गत सभी दान 50% कर-मुक्त हैं। सहयोग पूर्ण होते ही ट्रस्ट पंजीकरण संख्या युक्त अधिकृत डिजिटल रसीद तुरंत प्रदान की जाती है।"
                )}
              </span>
            </div>

            {/* Final Glowing Submit CTA */}
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white text-base sm:text-lg font-bold shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer ${
                isProcessing ? 'opacity-70 cursor-not-allowed scale-100' : 'hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>
                    {t(
                      "Initializing Razorpay Secure Checkout...",
                      "सुरक्षित रेज़रपे भुगतान गेटवे प्रारंभ हो रहा है..."
                    )}
                  </span>
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5 fill-white text-white" />
                  <span>
                    {t(
                      `Pay via Razorpay • ₹ ${amount.toLocaleString('en-IN')}`,
                      `रेज़रपे द्वारा सहयोग करें • ₹ ${amount.toLocaleString('en-IN')}`
                    )}
                  </span>
                  <Sparkles className="w-5 h-5" />
                </>
              )}
            </button>

          </form>

        </div>

      </div>

      {/* Instant 80G Receipt Modal */}
      {showReceiptModal && (
        <DonationReceiptModal
          receipt={receipt}
          onClose={() => setShowReceiptModal(false)}
        />
      )}

    </section>
  );
};

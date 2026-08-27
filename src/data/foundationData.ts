import { InitiativeItem, LeadershipMember, GalleryMediaItem, VideoMediaItem } from '../types';

export const INITIATIVES: InitiativeItem[] = [
  {
    id: 'gau-seva',
    number: 1,
    titleEn: 'Gau Seva (Cow Protection & Care)',
    titleHi: 'गौ सेवा (गौ माता संरक्षण एवं पोषण)',
    subtitleEn: 'Sacred Shelter, Medical Treatment & Nutritious Fodder',
    subtitleHi: 'पवित्र आश्रय, निःशुल्क चिकित्सा एवं पौष्टिक आहार',
    descEn: 'Comprehensive care, nutritious fodder, medical treatment, and shelter for sacred cows in Vrindavan.',
    descHi: 'श्री वृन्दावन धाम में बेसहारा एवं बीमार गौ माताओं के लिए नित्य पोषण, उत्तम चिकित्सा और सुरक्षित आश्रय।',
    icon: 'HeartHandshake',
    image: 'https://images.pexels.com/photos/38422340/pexels-photo-38422340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    accentColor: '#10b981',
    impactMetric: {
      number: '5,200+',
      labelEn: 'Cows Protected Daily',
      labelHi: 'नित्य संरक्षित गौ माताएं'
    },
    highlightsEn: [
      '24x7 Emergency Bovine Ambulance & Veterinary Hospital',
      'Nutritious green fodder, jaggery, and mineral supplements',
      'Specialized care shelter for aged and injured cows',
      'Eco-friendly Panchagavya and organic compost production'
    ],
    highlightsHi: [
      '24 घंटे निःशुल्क गौ एम्बुलेंस एवं समर्पित पशु चिकित्सालय',
      'प्रतिदिन हरा चारा, गुड़ और पौष्टिक खनिज आहार व्यवस्था',
      'वृद्ध, अस्वस्थ एवं लाचार गौवंश के लिए विशेष देखभाल कक्ष',
      'पंचगव्य आधारित जैविक खाद एवं प्राकृतिक पर्यावरण संवर्धन'
    ]
  },
  {
    id: 'sant-seva',
    number: 2,
    titleEn: 'Sadhu Sant Seva (Serving Holy Ascetics)',
    titleHi: 'साधु संत सेवा (तपस्वी संतों की सेवा)',
    subtitleEn: 'Honoring Vrindavan Ascetics With Care & Dignity',
    subtitleHi: 'ब्रज के तपस्वियों का आदर, स्वास्थ्य एवं जीवन सुरक्षा',
    descEn: 'Honoring and providing medical aid, warm clothing, food, and daily essentials to holy saints and ascetics.',
    descHi: 'ब्रज के तपस्वी साधु-संतों की सेवा, स्वास्थ्य सुरक्षा, वस्त्र और दैनिक आवश्यकताओं की निस्वार्थ पूर्ति।',
    icon: 'HandHeart',
    image: '/images/sadhu-sant-seva.jpg',
    accentColor: '#f59e0b',
    impactMetric: {
      number: '15,000+',
      labelEn: 'Sadhus Served Monthly',
      labelHi: 'मासिक सेवित साधु-संत'
    },
    highlightsEn: [
      'Daily Sant Bhandara with sanctified sattvic prasadam',
      'Free monthly health checkup camps and essential medicines',
      'Distribution of warm woolen blankets and clothing in winter',
      'Emergency medical assistance and elderly ascetic care'
    ],
    highlightsHi: [
      'नित्य संत भण्डारा एवं शुद्ध सात्विक महाप्रसाद सेवा',
      'निःशुल्क मासिक स्वास्थ्य परीक्षण एवं जीवन रक्षक दवाइयां',
      'शीतकाल में गर्म ऊनी कंबल, वस्त्र एवं पादुका वितरण',
      'अस्पताल भर्ती सहायता एवं वयोवृद्ध संतों की व्यक्तिगत सुश्रूषा'
    ]
  },
  {
    id: 'gurukulam',
    number: 3,
    titleEn: 'Rishikul International Gurukulam',
    titleHi: 'ऋषिकुल इंटरनेशनल गुरुकुलम',
    subtitleEn: 'Vedic Wisdom Harmonized With Modern Science',
    subtitleHi: 'प्राचीन वैदिक संस्कृति एवं आधुनिक वैश्विक शिक्षा का संगम',
    descEn: 'Blending ancient Vedic wisdom, Sanskrit, and moral values with modern high-standard education.',
    descHi: 'प्राचीन वैदिक ज्ञान, संस्कृत संस्कृति और उच्च आधुनिक शिक्षा का दिव्य समन्वय।',
    icon: 'GraduationCap',
    image: '/images/gurukulam-vedic.jpg',
    accentColor: '#00e5ff',
    impactMetric: {
      number: '550+',
      labelEn: 'Scholars Enrolled',
      labelHi: 'अध्ययनरत वैदिक विद्यार्थी'
    },
    highlightsEn: [
      'Vedas, Upanishads, Sanskrit grammar, and Shrimad Bhagavatam',
      'Modern STEM curriculum, English proficiency, and computer labs',
      'Character development, Yogic lifestyle, and cultural values',
      '100% free boarding, lodging, uniforms, and textbooks'
    ],
    highlightsHi: [
      'वेद, उपनिषद, संस्कृत व्याकरण और श्रीमद्भागवत का सघन अध्ययन',
      'आधुनिक विज्ञान, गणित, कंप्यूटर शिक्षा और अंग्रेजी संचार कौशल',
      'चरित्र निर्माण, यौगिक जीवनशैली और आध्यात्मिक संस्कारों की नींव',
      'पूर्णतः निःशुल्क आवासीय व्यवस्था, भोजन, वस्त्र एवं पाठ्य सामग्री'
    ]
  },
  {
    id: 'kund-revival',
    number: 4,
    titleEn: 'Revival of Sacred Kunds',
    titleHi: 'विलुप्त कुंड और सरोवर का पुनरुद्धार',
    subtitleEn: 'Restoring Sacred Pilgrimage Waterbodies of Braj',
    subtitleHi: 'ब्रज के ऐतिहासिक जलतीर्थों और सरोवर धरोहर का पुनर्जीवन',
    descEn: 'Rejuvenating, cleaning, and reviving ancient, dried-up historical waterbodies and holy pilgrimage ponds.',
    descHi: 'ब्रज के प्राचीन, ऐतिहासिक और उपेक्षित पवित्र सरोवरों व कुंडों का जीर्णोद्धार एवं जल संरक्षण।',
    icon: 'Droplets',
    image: '/images/sacred-kund-vrindavan.jpg',
    accentColor: '#06b6d4',
    impactMetric: {
      number: '14+',
      labelEn: 'Sacred Kunds Rejuvenated',
      labelHi: 'पुनर्जीवित पवित्र कुंड'
    },
    highlightsEn: [
      'De-silting, ecological dredging, and rainwater recharge systems',
      'Traditional heritage stone ghat and stepped pavilion restoration',
      'Biological water purification with natural lotus flora and aeration',
      'Solar lighting, clean pathways, and tree plantations around kunds'
    ],
    highlightsHi: [
      'वैज्ञानिक गाद निकासी, गहरीकरण और वर्षा जल संचयन प्रणाली',
      'पारंपरिक नक्काशीदार पत्थर के घाटों और छतरियों का सुंदर जीर्णोद्धार',
      'प्राकृतिक कमल और जैव-शोधन तकनीक द्वारा जल की निर्मलता',
      'सौर ऊर्जा प्रकाश व्यवस्था, परिक्रमा मार्ग और सघन हरितिमा वृक्षारोपण'
    ]
  },
  {
    id: 'yamuna-cleaning',
    number: 5,
    titleEn: 'Maa Yamuna Cleaning & Conservation',
    titleHi: 'यमुना मां की सफाई एवं संरक्षण',
    subtitleEn: 'Pristine Purity For The Sacred River of Vrindavan',
    subtitleHi: 'श्री धाम वृन्दावन की जीवनदायिनी पतित पावनी धारा की शुद्धि',
    descEn: 'Continuous ground-level cleaning campaigns and awareness drives to keep the sacred Yamuna pristine and pure.',
    descHi: 'पतित पावनी माँ यमुना की स्वच्छता, जल निर्मलता और तटों के संरक्षण के लिए निरंतर जमीनी अभियान।',
    icon: 'Waves',
    image: 'https://images.pexels.com/photos/32111239/pexels-photo-32111239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    accentColor: '#0284c7',
    impactMetric: {
      number: '120+',
      labelEn: 'Tons Waste Removed / Year',
      labelHi: 'वार्षिक अपशिष्ट निष्कासन (टन)'
    },
    highlightsEn: [
      'Daily morning cleaning drives at Keshi Ghat, Cheer Ghat & Kaliya Ghat',
      'Eco-friendly mesh trash-traps preventing non-biodegradable debris',
      'Organizing sacred Yamuna Sandhya Aarti to inspire citizen devotion',
      'Active youth and pilgrim awareness programs against plastic waste'
    ],
    highlightsHi: [
      'केशी घाट, चीर घाट और कालिया दह पर नित्य प्रातःकालीन स्वच्छता सेवा',
      'नदी के प्रवाह में तैरते प्लास्टिक कचरे को रोकने हेतु जालीदार ट्रैप',
      'जन-चेतना और आध्यात्मिक समर्पण हेतु दिव्य यमुना महाआरती का आयोजन',
      'तीर्थयात्रियों और स्थानीय युवाओं में प्लास्टिक निषेध जन-जागरूकता'
    ]
  },
  {
    id: 'mandir-prasadi',
    number: 6,
    titleEn: 'Mandir Prasadi & Annadaan',
    titleHi: 'मंदिर प्रसादी एवं अन्नदान सेवा',
    subtitleEn: 'Nectarous Mahaprasadam For Devotees & Underprivileged',
    subtitleHi: 'नित्य सात्विक महाप्रसाद वितरण, कोई भी भूखा न सोए',
    descEn: 'Distributing sanctified Vedic Mahaprasad daily to devotees, sadhus, and underprivileged families.',
    descHi: 'साधु-संतों, तीर्थयात्रियों और असहाय जनों के लिए नित्य शुद्ध सात्विक महाप्रसाद वितरण।',
    icon: 'Utensils',
    image: 'https://images.pexels.com/photos/31689675/pexels-photo-31689675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    accentColor: '#d97706',
    impactMetric: {
      number: '18 Lakh+',
      labelEn: 'Meals Served Annually',
      labelHi: 'वार्षिक वितरित महाप्रसाद'
    },
    highlightsEn: [
      'Cooked in pure desi cow ghee with pristine hygiene and devotion',
      'Daily mobile prasadam vans reaching remote Braj villages',
      'Nutritious feasts during festivals like Janmashtami, Radhashtami & Holi',
      'Eco-friendly sal leaf patra dona used for zero environmental impact'
    ],
    highlightsHi: [
      'विशुद्ध देशी गौ घृत और परम पवित्रता के साथ तैयार दिव्य महाप्रसाद',
      'मोबाइल प्रसादी वाहन द्वारा ब्रज के सुदूर गावों तक गर्म भोजन सेवा',
      'जन्माष्टमी, राधाष्टमी और ब्रज होली उत्सवों पर भव्य विशेष महाभण्डारा',
      'पर्यावरण संरक्षण हेतु पारंपरिक पत्तल और दोने में सात्विक परोस'
    ]
  },
  {
    id: 'rishikul-ashram',
    number: 7,
    titleEn: 'Rishikul Ashram (Spiritual Sanctuary)',
    titleHi: 'ऋषिकुल आश्रम (आध्यात्मिक आश्रय स्थल)',
    subtitleEn: 'Sacred Oasis For Meditation, Satsang & Vedic Reflection',
    subtitleHi: 'आत्मिक शांति, साधना और वेदाध्ययन का पावन धाम',
    descEn: 'A peaceful Vrindavan spiritual retreat for meditation, satsang, Vedic study, and spiritual discourse.',
    descHi: 'आत्मिक शांति, सत्संग, साधना और वेदाध्ययन के लिए वृन्दावन में स्थापित एक पावन आध्यात्मिक केंद्र।',
    icon: 'Building2',
    image: 'https://images.pexels.com/photos/29651534/pexels-photo-29651534.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    accentColor: '#8b5cf6',
    impactMetric: {
      number: '365',
      labelEn: 'Days Daily Satsang',
      labelHi: 'दिन निरंतर सत्संग व साधना'
    },
    highlightsEn: [
      'Peaceful meditation halls surrounded by blooming Kadamba & Tulsi groves',
      'Daily Shrimad Bhagavad Gita and Upanishadic discourse sessions',
      'Spiritual library housing rare Sanskrit scriptures and manuscripts',
      'Devotee stay facilities for intensive sadhana retreats in Vrindavan'
    ],
    highlightsHi: [
      'कदंब और तुलसी कुंजों से घिरा ध्यान और आत्म-चिंतन का शांत प्रांगण',
      'प्रतिदिन श्रीमद्भगवद्गीता एवं उपनिषद के व्याख्यान व नाम-संकीर्तन',
      'दुर्लभ संस्कृत ग्रंथों और पाण्डुलिपियों से युक्त समृद्ध आध्यात्मिक पुस्तकालय',
      'साधकों के लिए वृन्दावन में एकांत साधना और प्रवास की दिव्य व्यवस्था'
    ]
  }
];

export const LEADERSHIP: LeadershipMember[] = [
  {
    id: 'ambassador-advisor',
    rank: 1,
    roleEn: 'Ambassador & Advisor',
    roleHi: 'मार्गदर्शक एवं राजदूत',
    name: 'Yugal Jodi Sarkar Vrindavan',
    address: 'Radha Niwas, Vrindavan, Mathura - 281121',
    descriptionEn: 'Supreme Spiritual Guide and Divine Inspiration.',
    descriptionHi: 'संस्था के सर्वोच्च आध्यात्मिक मार्गदर्शक और प्रेरणापुंज।',
    badgeEn: 'Supreme Spiritual Guide',
    badgeHi: 'सर्वोच्च आध्यात्मिक मार्गदर्शक',
    image: '/ambassador.jpg',
    specialIcon: 'divine'
  },
  {
    id: 'ceo',
    rank: 2,
    roleEn: 'Chief Executive Officer (CEO)',
    roleHi: 'मुख्य कार्यकारी अधिकारी (CEO)',
    name: 'Shri Chandra Mohan Bhardwaj',
    address: 'Near Rangji Mandir, Vrindavan, Mathura - 281121',
    descriptionEn: 'Strategic Leadership, Visionary Direction & Foundation Operations.',
    descriptionHi: 'संस्था के समग्र प्रबंधन, रणनीतिक विकास और प्रकल्पों का संचालन।',
    badgeEn: 'Visionary Leader & CEO',
    badgeHi: 'दूरदर्शी नेतृत्व एवं मुख्य कार्यकारी',
    image: '/ceo.jpg',
    specialIcon: 'leader'
  },
  {
    id: 'director-barsha',
    rank: 3,
    roleEn: 'Director',
    roleHi: 'निदेशक',
    name: 'Barsha Rani Das',
    address: 'Guwahati, Assam',
    descriptionEn: 'Regional Growth, Institutional Coordination & Outreach.',
    descriptionHi: 'क्षेत्रीय विस्तार, सामाजिक समन्वय एवं सेवा प्रबंधन।',
    badgeEn: 'Institutional Outreach',
    badgeHi: 'संस्थागत समन्वय एवं विस्तार',
    specialIcon: 'director'
  },
  {
    id: 'director-himashree',
    rank: 4,
    roleEn: 'Director',
    roleHi: 'निदेशक',
    name: 'Himashree Das',
    address: 'Guwahati, Assam',
    descriptionEn: 'Community Engagement, Social Programs & Welfare Initiatives.',
    descriptionHi: 'सामाजिक कल्याण, जनसंपर्क और संगठनात्मक संचालन।',
    badgeEn: 'Community & Social Welfare',
    badgeHi: 'सामुदायिक सहभागिता एवं कल्याण',
    specialIcon: 'director2'
  }
];

export const OFFICES = {
  officeAssam: {
    id: 'assam',
    nameEn: 'Assam Registered Head Office',
    nameHi: 'असम पंजीकृत प्रधान कार्यालय',
    addressEn: 'Azara Nagar, Guwahati, Assam - 781017',
    addressHi: 'अजरा नगर, गुवाहाटी, असम - 781017',
    phone: '+91 98765 43210',
    email: 'manurishifoundation777@gmail.com',
    cin: 'U88900AS2026NPL031074',
    regNo: 'U88900AS2026NPL031',
    mapLink: 'https://maps.google.com/?q=Azara+Nagar+Guwahati+Assam',
    featuresEn: ['Registered Head Office', 'Gurukulam Coordination', 'Volunteer Hub'],
    featuresHi: ['पंजीकृत प्रधान कार्यालय', 'गुरुकुलम शिक्षा सहयोग', 'स्वयंसेवक संपर्क']
  },
  officeVrindavan: {
    id: 'vrindavan',
    nameEn: 'Vrindavan Head Seva Kendra',
    nameHi: 'वृन्दावन प्रधान सेवा केंद्र',
    addressEn: 'Radha Niwas, Near Rangji Mandir, Vrindavan, Mathura, UP - 281121',
    addressHi: 'राधा निवास, रंगजी मंदिर के निकट, वृन्दावन, मथुरा, उत्तर प्रदेश - 281121',
    phone: '+91 98765 43211',
    email: 'manurishifoundation777@gmail.com',
    cin: 'U88900AS2026NPL031074',
    regNo: 'U88900AS2026NPL031',
    mapLink: 'https://maps.google.com/?q=Radha+Niwas+Vrindavan+Mathura',
    featuresEn: ['Headquarters & Goshala Seva', 'Yamuna Action Office', 'Sant Prasadi Hub'],
    featuresHi: ['प्रधान मुख्यालय एवं गौशाला सेवा', 'माँ यमुना संरक्षण प्रकल्प', 'साधु संत महाप्रसाद केंद्र']
  }
};

export const GALLERY_ITEMS: GalleryMediaItem[] = [
  {
    id: 'gal-media-1',
    titleEn: 'Sacred Gau Mata Protection & Seva',
    titleHi: 'गौ माता नित्य सेवा एवं सुरक्षा संकल्प',
    category: 'gau-seva',
    imageUrl: '/media/gau mata.jpg',
    locationEn: 'Surabhi Goshala, Vrindavan',
    locationHi: 'सुरभि गौशाला, वृन्दावन',
    descriptionEn: 'Loving care, green fodder feeding, and medical shelter for cows in Vrindavan.',
    descriptionHi: 'वृन्दावन गौशाला में गौ माताओं का नित्य सेवा-श्रृंगार, हरा चारा एवं चिकित्सा देखरेख।'
  },
  {
    id: 'gal-media-3',
    titleEn: 'Sacred Hawan Yajna at Ramtal Kund',
    titleHi: 'पवित्र रामताल कुंड पर दिव्य हवन-यज्ञ आहुति',
    category: 'kund-yamuna',
    imageUrl: '/media/hawan ramtal.jpeg',
    locationEn: 'Ramtal Kund, Braj',
    locationHi: 'रामताल कुंड, ब्रज',
    descriptionEn: 'Performers offering sacred samagri and chanting mantras for environmental purity.',
    descriptionHi: 'पर्यावरण शुद्धि और जगत कल्याण हेतु रामताल कुंड पर आयोजित पावन महायज्ञ।'
  },
  {
    id: 'gal-media-4',
    titleEn: 'Sri Radha Kripa Hawan Active Seva',
    titleHi: 'श्री राधा कृपा सर्वकल्याण हवन यज्ञ सेवा',
    category: 'sant-seva',
    imageUrl: '/media/hawan rk active.jpeg',
    locationEn: 'Vrindavan Seva Ashram',
    locationHi: 'वृन्दावन सेवा आश्रम',
    descriptionEn: 'Continuous Vedic yajna performed for world peace and spiritual welfare.',
    descriptionHi: 'विश्व शांति और मानव कल्याण हेतु अखंड वैदिक हवन यज्ञ अनुष्ठान।'
  },
  {
    id: 'gal-media-5',
    titleEn: 'Sri Radha Vallabh Temple Divine View',
    titleHi: 'श्री राधा वल्लभ लाल जू के दिव्य दर्शन',
    category: 'vrindavan',
    imageUrl: '/media/radhavalaabh 1.jpeg',
    locationEn: 'Radha Vallabh Temple, Vrindavan',
    locationHi: 'श्री राधा वल्लभ मंदिर, वृन्दावन',
    descriptionEn: 'Sanctum sanctorum of Sri Radha Vallabh Temple radiating spiritual bliss.',
    descriptionHi: 'श्री धाम वृन्दावन के सुप्रसिद्ध राधा वल्लभ मंदिर प्रांगण का पावन दृश्य।'
  },
  {
    id: 'gal-media-6',
    titleEn: 'Sri Radha Raman Ju & Divine Sky Horizon',
    titleHi: 'श्री राधा रमण जू एवं नीलमणि आकाश दर्शन',
    category: 'vrindavan',
    imageUrl: '/media/RK PHOTO WITH SKY.jpeg',
    locationEn: 'Vrindavan Sanctum',
    locationHi: 'वृन्दावन पावन धाम',
    descriptionEn: 'Glorious view of deity shrine under the celestial sky of Sri Dham Vrindavan.',
    descriptionHi: 'श्री धाम वृन्दावन में दिव्य मंदिर और अनंत नील गगन का मनमोहक दृश्य।'
  },
  {
    id: 'gal-media-7',
    titleEn: 'Maa Yamuna Purity & Bank Conservation',
    titleHi: 'पतित पावनी माँ यमुना तट स्वच्छता अभियान',
    category: 'kund-yamuna',
    imageUrl: '/media/yamuna ji tumb for website.jpg',
    locationEn: 'Keshi Ghat, Yamuna Bank',
    locationHi: 'केशी घाट, यमुना तट',
    descriptionEn: 'Continuous cleanup, trash traps, and river conservation initiatives in Vrindavan.',
    descriptionHi: 'माँ यमुना के पावन घाटों की नित्य स्वच्छता एवं पर्यावरण संरक्षण सेवा।'
  },
  {
    id: 'gal-media-8',
    titleEn: 'Yugal Jodi Sarkar Guidance Milestone',
    titleHi: 'युगल जोड़ी सरकार - 19 लाख श्रद्धालुओं का मार्गदर्शन',
    category: 'vrindavan',
    imageUrl: '/media/yugal jodi 19 lakh pamplaet red.jpeg',
    locationEn: 'Vrindavan Foundation HQ',
    locationHi: 'वृन्दावन न्यास मुख्यालय',
    descriptionEn: 'Empowering over 1.9 million lives through spiritual guidance, Seva, and consultations.',
    descriptionHi: '19 लाख से अधिक जीवन में सनातन मूल्यों, ज्योतिष और सेवा का संचार।'
  },
  {
    id: 'gal-media-11',
    titleEn: 'Sacred Rituals & Devotional Seva',
    titleHi: 'दिव्य अनुष्ठान एवं सेवा क्षण',
    category: 'sant-seva',
    imageUrl: '/media/IMG_20260118_171713882~2.jpg',
    locationEn: 'Vrindavan Dham',
    locationHi: 'वृन्दावन धाम',
    descriptionEn: 'Devotees participating in daily seva activities in Vrindavan.',
    descriptionHi: 'वृन्दावन धाम में श्रद्धालुओं द्वारा नित्य सेवा एवं भक्ति अनुष्ठान।'
  },
  {
    id: 'gal-media-12',
    titleEn: 'Sant Feeding & Mahaprasad Camp',
    titleHi: 'साधु संत सेवा एवं सात्विक महाप्रसाद वितरण',
    category: 'sant-seva',
    imageUrl: '/media/IMG_20260217_162544875_HDR.jpg',
    locationEn: 'Vrindavan Seva Camp',
    locationHi: 'वृन्दावन सेवा शिविर',
    descriptionEn: 'Glimpse of devotional service and sadhu feeding camp.',
    descriptionHi: 'साधु संत सेवा एवं सात्विक महाप्रसाद वितरण शिविर का दृश्य।'
  },
  {
    id: 'gal-media-13',
    titleEn: 'Sacred Temple Evening Aarti',
    titleHi: 'मंदिर संध्या महाआरती एवं प्रकाश दर्शन',
    category: 'vrindavan',
    imageUrl: '/media/IMG_20260217_201710955_HDR.jpg',
    locationEn: 'Vrindavan Heritage Temple',
    locationHi: 'वृन्दावन हेरिटेज मंदिर',
    descriptionEn: 'Golden brass lamp lighting during evening Mangala and Sandhya Aarti.',
    descriptionHi: 'संध्या समय दीपों की रोशनी में अलौकिक आरती दर्शन।'
  },
  {
    id: 'gal-media-14',
    titleEn: 'Kund Revival Project Site Inspection',
    titleHi: 'विलुप्त कुंड पुनरुद्धार स्थल निरीक्षण',
    category: 'kund-yamuna',
    imageUrl: '/media/IMG_20260307_104118097_HDR.jpg',
    locationEn: 'Historical Braj Kund',
    locationHi: 'ऐतिहासिक ब्रज कुंड',
    descriptionEn: 'Ground-level engineering and heritage restoration work at ancient stepwell.',
    descriptionHi: 'ऐतिहासिक जलतीर्थ और बावड़ी के जीर्णोद्धार का जमीनी कार्य।'
  },
  {
    id: 'gal-media-15',
    titleEn: 'Sacred Kund Stone Ghat Restoration',
    titleHi: 'कुंड के पारंपरिक पत्थर घाटों का जीर्णोद्धार',
    category: 'kund-yamuna',
    imageUrl: '/media/IMG_20260329_104956643_HDR.jpg',
    locationEn: 'Pawan Kund, Vrindavan',
    locationHi: 'पावन कुंड, वृन्दावन',
    descriptionEn: 'De-silting, stone carved steps, and lotus planting in holy waterbody.',
    descriptionHi: 'जल शोधन, नक्काशीदार सीढ़ियां एवं कमल रोपण कार्य।'
  },
  {
    id: 'gal-media-16',
    titleEn: 'Gurukulam Scholars Morning Practice',
    titleHi: 'गुरुकुल छात्रों का प्रातःकालीन योगाभ्यास व प्रार्थना',
    category: 'gurukulam',
    imageUrl: '/media/IMG_20260413_102154424_HDR.jpg',
    locationEn: 'Rishikul Campus, Vrindavan',
    locationHi: 'ऋषिकुल परिसर, वृन्दावन',
    descriptionEn: 'Scholars performing morning Surya Namaskar and chanting mantras.',
    descriptionHi: 'वैदिक शिष्यों का नित्य सूर्य नमस्कार एवं योगाभ्यास सत्र।'
  },
  {
    id: 'gal-media-17',
    titleEn: 'Gau Seva Green Fodder Feed',
    titleHi: 'गौ माता को हरा चारा एवं गुड़ अर्पण',
    category: 'gau-seva',
    imageUrl: '/media/IMG_20260426_070123712_HDR.jpg',
    locationEn: 'Vrindavan Sanctuary',
    locationHi: 'वृन्दावन गौ अभयारण्य',
    descriptionEn: 'Feeding fresh green fodder and organic jaggery to indigenous cows.',
    descriptionHi: 'देसी गौ माताओं को पौष्टिक हरा चारा एवं गुड़ खिलाते स्वयंसेवक।'
  },
  {
    id: 'gal-media-18',
    titleEn: 'Sant Mahaprasadam Bhandara Seva',
    titleHi: 'संत भंडारा सात्विक महाप्रसाद वितरण',
    category: 'sant-seva',
    imageUrl: '/media/IMG_20260427_094039869_HDR.jpg',
    locationEn: 'Parikrama Marg, Vrindavan',
    locationHi: 'परिक्रमा मार्ग, वृन्दावन',
    descriptionEn: 'Serving hot satvik meals and water to wandering sadhus.',
    descriptionHi: 'परिक्रमा कर रहे साधु संतों को ताज़ा सात्विक भोजन व जल सेवा।'
  },
  {
    id: 'gal-media-19',
    titleEn: 'Vridha & Sant Clothes Distribution',
    titleHi: 'साधु संतों एवं वृद्ध जनों को वस्त्र सेवा',
    category: 'sant-seva',
    imageUrl: '/media/IMG_20260427_100856308_HDR.jpg',
    locationEn: 'Vrindavan Ashram',
    locationHi: 'वृन्दावन आश्रम',
    descriptionEn: 'Distributing warm dhotis, shawls, and essential items to revered sadhus.',
    descriptionHi: 'पूज्य महात्माओं को अंगवस्त्रम, शॉल एवं वस्त्र अर्पण।'
  },
  {
    id: 'gal-media-20',
    titleEn: 'Yamuna River Bank Cleanup Drive',
    titleHi: 'यमुना नदी तट स्वच्छता एवं प्लास्टिक निष्कासन',
    category: 'kund-yamuna',
    imageUrl: '/media/IMG_20260427_161655506_HDR.jpg',
    locationEn: 'Cheer Ghat, Vrindavan',
    locationHi: 'चीर घाट, वृन्दावन',
    descriptionEn: 'Volunteers collecting plastic debris along the sacred banks of Yamuna.',
    descriptionHi: 'यमुना जी के पावन तटों से प्लास्टिक अपशिष्ट हटाने का संकल्प।'
  },
  {
    id: 'gal-media-21',
    titleEn: 'Maa Yamuna Sandhya Aarti Preparations',
    titleHi: 'यमुना संध्या महाआरती की भव्य तैयारियाँ',
    category: 'kund-yamuna',
    imageUrl: '/media/IMG_20260427_164648050_HDR.jpg',
    locationEn: 'Keshi Ghat',
    locationHi: 'केशी घाट',
    descriptionEn: 'Setting up oil lamps and floral decorations for evening Yamuna Aarti.',
    descriptionHi: 'सायं काल की आरती हेतु पुष्प एवं दीप सज्जा।'
  },
  {
    id: 'gal-media-22',
    titleEn: 'Braj Parikrama Pilgrims Service',
    titleHi: 'ब्रज चौरासी कोस परिक्रमा यात्रिक सेवा',
    category: 'vrindavan',
    imageUrl: '/media/IMG_20260529_070243904_HDR.jpg',
    locationEn: 'Braj Mandal Route',
    locationHi: 'ब्रज मण्डल मार्ग',
    descriptionEn: 'Providing drinking water and medical aid to Braj Parikrama pilgrims.',
    descriptionHi: 'परिक्रमा यात्रियों के लिए विश्राम, शीतल जल व प्राथमिक चिकित्सा व्यवस्था।'
  },
  {
    id: 'gal-media-23',
    titleEn: 'Sanatan Dharma Cultural Exhibition',
    titleHi: 'सनातन धर्म एवं संस्कृति प्रदर्शनी',
    category: 'vrindavan',
    imageUrl: '/media/IMG_20260529_070248488_HDR.jpg',
    locationEn: 'Vrindavan Cultural Pavilion',
    locationHi: 'वृन्दावन सांस्कृतिक मण्डप',
    descriptionEn: 'Exhibiting rare scriptures, traditional art, and spiritual history.',
    descriptionHi: 'प्राचीन पांडुलिपियों एवं धार्मिक कला की विशेष प्रदर्शनी।'
  },
  {
    id: 'gal-media-24',
    titleEn: 'Gurukulam Computer & STEM Education',
    titleHi: 'ऋषिकुल छात्रों की आधुनिक कंप्यूटर शिक्षा',
    category: 'gurukulam',
    imageUrl: '/media/IMG_20260620_090939693_HDR.jpg',
    locationEn: 'Vedic-Tech Lab, Vrindavan',
    locationHi: 'वैदिक-तकनीक प्रयोगशाला, वृन्दावन',
    descriptionEn: 'Balancing traditional Vedic wisdom with modern computer skills.',
    descriptionHi: 'वैदिक ज्ञान के साथ कंप्यूटर और आधुनिक विज्ञान की शिक्षा।'
  },
  {
    id: 'gal-media-25',
    titleEn: 'Tree Plantation & Environmental Seva',
    titleHi: 'वृन्दावन परिक्रमा मार्ग पर सघन वृक्षारोपण',
    category: 'kund-yamuna',
    imageUrl: '/media/IMG_20260620_091156367_HDR.jpg',
    locationEn: 'Parikrama Green Belt',
    locationHi: 'परिक्रमा हरितिमा पट्टी',
    descriptionEn: 'Planting Kadamba, Tulsi, and Neem saplings along parikrama route.',
    descriptionHi: 'कदंब, तुलसी, पीपल और नीम के पौधों का रोपण व देखभाल।'
  },
  {
    id: 'gal-media-26',
    titleEn: 'Medical Care for Injured Gau Mata',
    titleHi: 'निराश्रित व घायल गौ माताओं का प्राथमिक उपचार',
    category: 'gau-seva',
    imageUrl: '/media/IMG_20260622_082444883_HDR.jpg',
    locationEn: 'Goshala Hospital, Vrindavan',
    locationHi: 'गौ चिकित्सालय, वृन्दावन',
    descriptionEn: '24/7 veterinary team treating injured and sick street cattle.',
    descriptionHi: 'पशु चिकित्सकों द्वारा चोटिल गौवंश का नित्य उपचार एवं देखभाल।'
  },
  {
    id: 'gal-media-27',
    titleEn: 'Organic Green Fodder Harvesting',
    titleHi: 'गौशाला हेतु जैविक हरे चारे की कटाई',
    category: 'gau-seva',
    imageUrl: '/media/IMG_20260622_084224831_HDR.jpg',
    locationEn: 'Foundation Organic Farm',
    locationHi: 'फाउंडेशन जैविक कृषि फार्म',
    descriptionEn: 'Cultivating chemical-free Napier grass and fodder for Goshala.',
    descriptionHi: 'रसायन-मुक्त पौष्टिक चारे की खेती एवं गौशाला आपूर्ति।'
  },
  {
    id: 'gal-media-28',
    titleEn: 'Surabhi Goshala Calf Shelter',
    titleHi: 'सुरभि गौशाला बछड़ा पोषण केंद्र',
    category: 'gau-seva',
    imageUrl: '/media/IMG_20260622_084232141_HDR.jpg',
    locationEn: 'Vrindavan Sanctuary',
    locationHi: 'वृन्दावन गौ अभयारण्य',
    descriptionEn: 'Nurturing newborn calves with clean milk and warm bedding.',
    descriptionHi: 'नन्हे बछड़ों की विशेष देखरेख और स्वास्थ्य सेवा।'
  },
  {
    id: 'gal-media-29',
    titleEn: 'Sanatan Deepotsav Celebration',
    titleHi: 'श्री धाम वृन्दावन पावन दीपोत्सव उत्सव',
    category: 'vrindavan',
    imageUrl: '/media/IMG_20260627_205726591_HDR.jpg',
    locationEn: 'Rangji Temple Square',
    locationHi: 'रंगजी मंदिर प्रांगण',
    descriptionEn: 'Thousands of earthen diyas lit celebrating Sanatan heritage.',
    descriptionHi: 'हजारों मिटटी के दीपों से सजी वृन्दावन की पावन संध्या।'
  },
  {
    id: 'gal-media-30',
    titleEn: 'Devotional Assembly at Foundation HQ',
    titleHi: 'न्यास मुख्यालय पर पावन संकीर्तन सभा',
    category: 'vrindavan',
    imageUrl: '/media/WhatsApp Image 2026-08-27 at 3.05.04 PM.jpeg',
    locationEn: 'Vrindavan HQ',
    locationHi: 'वृन्दावन मुख्यालय',
    descriptionEn: 'Devotees gathered for kirtan, discourse, and prasadam distribution.',
    descriptionHi: 'हरिनाम संकीर्तन और आध्यात्मिक चर्चा का पावन समागम।'
  },
  {
    id: 'gal-media-31',
    titleEn: 'Sri Radha Krishna Shringar Photo Archive 1',
    titleHi: 'श्री राधा कृष्ण दिव्य दर्शन संकलन - 1',
    category: 'vrindavan',
    imageUrl: '/media/WhatsApp_Image_2026-08-08_at_6.18.31_202608081911.jpeg',
    locationEn: 'Radha Niwas Shrine',
    locationHi: 'राधा निवास पीठ',
    descriptionEn: 'Beautiful floral decoration and shringar of Thakurji.',
    descriptionHi: 'ठाकुरजी का अनुपम पुष्प श्रृंगार और मनमोहक रूप।'
  },
  {
    id: 'gal-media-32',
    titleEn: 'Sri Radha Krishna Shringar Photo Archive 2',
    titleHi: 'श्री राधा कृष्ण दिव्य दर्शन संकलन - 2',
    category: 'vrindavan',
    imageUrl: '/media/WhatsApp_Image_2026-08-08_at_6.18.32_202608081911.jpeg',
    locationEn: 'Vrindavan Sanctum',
    locationHi: 'वृन्दावन पावन पीठ',
    descriptionEn: 'Divine deity darshan from Vrindavan mandir.',
    descriptionHi: 'वृन्दावन धाम से ठाकुरजी के परम पावन अलौकिक दर्शन।'
  },
  {
    id: 'gal-media-33',
    titleEn: 'Sri Radha Krishna Shringar Photo Archive 3',
    titleHi: 'श्री राधा कृष्ण दिव्य दर्शन संकलन - 3',
    category: 'vrindavan',
    imageUrl: '/media/WhatsApp_Image_2026-08-08_at_6.18.32_202608081911_2.jpeg',
    locationEn: 'Vrindavan Sanctum',
    locationHi: 'वृन्दावन पावन पीठ',
    descriptionEn: 'Ornate peacock feather and saffron attire on Thakurji.',
    descriptionHi: 'मोरमुकुट पीतांबरधारी श्री भगवान का दिव्य श्रृंगार।'
  },
  {
    id: 'gal-media-34',
    titleEn: 'Sri Radha Krishna Shringar Photo Archive 4',
    titleHi: 'श्री राधा कृष्ण दिव्य दर्शन संकलन - 4',
    category: 'vrindavan',
    imageUrl: '/media/WhatsApp_Image_2026-08-08_at_6.18.32_202608081911_3.jpeg',
    locationEn: 'Vrindavan Sanctum',
    locationHi: 'वृन्दावन पावन पीठ',
    descriptionEn: 'Devotional offering of tulsi leaves and lotus garlands.',
    descriptionHi: 'तुलसी दल एवं कमल पुष्पों का पावन अर्पण।'
  },
  {
    id: 'gal-media-35',
    titleEn: 'Sri Radha Krishna Shringar Photo Archive 5',
    titleHi: 'श्री राधा कृष्ण दिव्य दर्शन संकलन - 5',
    category: 'vrindavan',
    imageUrl: '/media/WhatsApp_Image_2026-08-08_at_6.18.33_202608081911.jpeg',
    locationEn: 'Vrindavan Sanctum',
    locationHi: 'वृन्दावन पावन पीठ',
    descriptionEn: 'Nectarous darshan of Sri Radha Krishna deity.',
    descriptionHi: 'श्री राधा रानी व नटनागर श्री कृष्ण का रसप्रद दर्शन।'
  },
  {
    id: 'gal-media-36',
    titleEn: 'Sri Radha Krishna Shringar Photo Archive 6',
    titleHi: 'श्री राधा कृष्ण दिव्य दर्शन संकलन - 6',
    category: 'vrindavan',
    imageUrl: '/media/WhatsApp_Image_2026-08-08_at_6.18.33_202608081911_2.jpeg',
    locationEn: 'Vrindavan Sanctum',
    locationHi: 'वृन्दावन पावन पीठ',
    descriptionEn: 'Sacred aarti light reflection on deity altar.',
    descriptionHi: 'दिव्य आरती ज्योति से प्रकाशित मनमोहक मंदिर प्रांगण।'
  },
  {
    id: 'gal-media-37',
    titleEn: 'Sri Radha Krishna Shringar Photo Archive 7',
    titleHi: 'श्री राधा कृष्ण दिव्य दर्शन संकलन - 7',
    category: 'vrindavan',
    imageUrl: '/media/WhatsApp_Image_2026-08-08_at_6.18.34_202608081911.jpeg',
    locationEn: 'Vrindavan Sanctum',
    locationHi: 'वृन्दावन पावन पीठ',
    descriptionEn: 'Spiritual bliss and quiet contemplation at mandir.',
    descriptionHi: 'शांत चित्त एवं आत्मिक शांति प्रदायक अलौकिक दृश्य।'
  },
  {
    id: 'gal-media-38',
    titleEn: 'Sri Radha Krishna Shringar Photo Archive 8',
    titleHi: 'श्री राधा कृष्ण दिव्य दर्शन संकलन - 8',
    category: 'vrindavan',
    imageUrl: '/media/WhatsApp_Image_2026-08-08_at_6.18.34_202608081911_2.jpeg',
    locationEn: 'Vrindavan Sanctum',
    locationHi: 'वृन्दावन पावन पीठ',
    descriptionEn: 'Blessed moments of daily worship and seva in Vrindavan.',
    descriptionHi: 'श्री धाम वृन्दावन की नित्य उपासना और पावन सेवा।'
  }
];

export const VIDEOS: VideoMediaItem[] = [
  {
    id: 'vid-media-1',
    titleEn: 'Sacred Gau Seva & Goshala Morning Care Drive',
    titleHi: 'पावन गौ सेवा एवं गौशाला प्रातःकालीन सेवा अभियान',
    duration: '02:45',
    views: '128K Views',
    thumbnailUrl: '/media/gau mata.jpg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.06.28 PM.mp4',
    categoryEn: 'Gau Seva Drive',
    categoryHi: 'गौ सेवा अभियान'
  },
  {
    id: 'vid-media-2',
    titleEn: 'Maa Yamuna Sandhya Aarti & River Cleanup Drive',
    titleHi: 'माँ यमुना पावन आरती एवं नदी स्वच्छता महाअभियान',
    duration: '03:12',
    views: '95K Views',
    thumbnailUrl: '/media/yamuna ji tumb for website.jpg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.07.01 PM.mp4',
    categoryEn: 'Yamuna Seva',
    categoryHi: 'यमुना सेवा'
  },
  {
    id: 'vid-media-3',
    titleEn: 'Vedic Hawan Yajna at Ramtal Kund Restoration',
    titleHi: 'रामताल कुंड पर आयोजित पावन वैदिक यज्ञ एवं मंत्रोच्चार',
    duration: '04:18',
    views: '84K Views',
    thumbnailUrl: '/media/hawan ramtal.jpeg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.07.34 PM.mp4',
    categoryEn: 'Kund Revival',
    categoryHi: 'कुंड पुनरुद्धार'
  },
  {
    id: 'vid-media-4',
    titleEn: 'Sant Seva & Daily Mahaprasadam Bhandara',
    titleHi: 'पूज्य साधु संत सेवा एवं सात्विक महाप्रसाद भंडारा',
    duration: '02:50',
    views: '110K Views',
    thumbnailUrl: '/media/hawan rk active.jpeg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.08.02 PM.mp4',
    categoryEn: 'Sant Seva',
    categoryHi: 'संत सेवा'
  },
  {
    id: 'vid-media-5',
    titleEn: 'Vedic Gurukulam Scholars Chanting & STEM Learning',
    titleHi: 'ऋषिकुल गुरुकुल छात्रों का वेदोच्चार एवं कंप्यूटर शिक्षा',
    duration: '03:30',
    views: '76K Views',
    thumbnailUrl: '/media/1 gita baner.jpeg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.09.29 PM.mp4',
    categoryEn: 'Vedic Gurukulam',
    categoryHi: 'गुरुकुलम'
  },
  {
    id: 'vid-media-6',
    titleEn: 'Vrindavan Temple Darshan & Spiritual Kirtan',
    titleHi: 'श्री धाम वृन्दावन मंदिर दर्शन एवं हरिनाम संकीर्तन',
    duration: '05:05',
    views: '142K Views',
    thumbnailUrl: '/media/RK PHOTO WITH SKY.jpeg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.09.44 PM.mp4',
    categoryEn: 'Vrindavan Heritage',
    categoryHi: 'वृन्दावन धरोहर'
  },
  {
    id: 'vid-media-7',
    titleEn: 'Yugal Jodi Sarkar Spiritual Guidance & Consultation',
    titleHi: 'युगल जोड़ी सरकार - आध्यात्मिक मार्गदर्शन एवं जीवन दिशा',
    duration: '04:15',
    views: '210K Views',
    thumbnailUrl: '/media/yugal jodi 19 lakh pamplaet red.jpeg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.29.59 PM.mp4',
    categoryEn: 'Spiritual Guidance',
    categoryHi: 'आध्यात्मिक मार्गदर्शन'
  },
  {
    id: 'vid-media-8',
    titleEn: 'Braj Parikrama Seva & Medical Camp Documentary',
    titleHi: 'ब्रज परिक्रमा यात्रिक सेवा एवं स्वास्थ्य शिविर',
    duration: '03:40',
    views: '68K Views',
    thumbnailUrl: '/media/radhavalaabh 1.jpeg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.39.10 PM.mp4',
    categoryEn: 'Seva Mission',
    categoryHi: 'सेवा मिशन'
  },
  {
    id: 'vid-media-9',
    titleEn: 'Sacred Kund Revival Engineering & Stone Restoration',
    titleHi: 'पवित्र कुंड जल शोधन एवं सीढ़ीदार घाट जीर्णोद्धार',
    duration: '02:55',
    views: '54K Views',
    thumbnailUrl: '/media/IMG_20260329_104956643_HDR.jpg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.41.36 PM.mp4',
    categoryEn: 'Kund Revival',
    categoryHi: 'कुंड पुनरुद्धार'
  },
  {
    id: 'vid-media-10',
    titleEn: 'Surabhi Goshala Green Fodder & Veterinary Care',
    titleHi: 'सुरभि गौशाला हरा चारा संवर्धन व चिकित्सा सेवा',
    duration: '04:00',
    views: '99K Views',
    thumbnailUrl: '/media/IMG_20260426_070123712_HDR.jpg',
    videoUrl: '/media/WhatsApp Video 2026-08-27 at 3.42.04 PM.mp4',
    categoryEn: 'Gau Seva Drive',
    categoryHi: 'गौ सेवा अभियान'
  }
];

export const PRESET_AMOUNTS = [501, 1100, 2100, 5100, 11000, 25000];

export const APP_FEATURES = [
  {
    icon: 'MessageSquareHeart',
    titleEn: 'Spiritual Consultation',
    titleHi: 'आध्यात्मिक परामर्श',
    descEn: 'One-on-one Vedic & spiritual guidance from experienced scholars.',
    descHi: 'अनुभवी आचार्यों और विद्वानों से व्यक्तिगत आध्यात्मिक व वैदिक मार्गदर्शन।'
  },
  {
    icon: 'Activity',
    titleEn: 'Live Seva Tracking',
    titleHi: 'लाइव सेवा ट्रैकिंग',
    descEn: 'Track your Gau Seva, Annadaan & Kund restoration contributions transparently.',
    descHi: 'अपनी गौ सेवा, अन्नदान और कुंड जीर्णोद्धार के प्रभाव को लाइव ट्रैक करें।'
  },
  {
    icon: 'Eye',
    titleEn: 'Daily Vrindavan Darshan',
    titleHi: 'नित्य वृन्दावन दर्शन',
    descEn: 'High-definition live streams of Vrindavan Yamuna Aarti and temple deities.',
    descHi: 'वृन्दावन के प्रमुख मंदिरों और यमुना महाआरती का नित्य एचडी लाइव दर्शन।'
  },
  {
    icon: 'FileText',
    titleEn: 'Instant 80G Tax Receipts',
    titleHi: 'त्वरित 80G दान रसीद',
    descEn: 'Download tax-exempt verified donation receipts within seconds.',
    descHi: 'मात्र कुछ सेकंड में आयकर छूट मान्य 80G अधिकृत रसीद डाउनलोड करें।'
  }
];

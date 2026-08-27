export type Language = 'en' | 'hi';

export interface InitiativeItem {
  id: string;
  number: number;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  descEn: string;
  descHi: string;
  icon: string;
  image: string;
  accentColor: string;
  impactMetric: {
    number: string;
    labelEn: string;
    labelHi: string;
  };
  highlightsEn: string[];
  highlightsHi: string[];
}

export interface LeadershipMember {
  id: string;
  rank: number;
  roleEn: string;
  roleHi: string;
  name: string;
  address: string;
  descriptionEn: string;
  descriptionHi: string;
  badgeEn: string;
  badgeHi: string;
  avatarPlaceholder?: string;
  image?: string;
  specialIcon: 'divine' | 'leader' | 'director' | 'director2';
}

export interface GalleryMediaItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'gau-seva' | 'kund-yamuna' | 'gurukulam' | 'sant-seva' | 'vrindavan';
  imageUrl: string;
  locationEn: string;
  locationHi: string;
  descriptionEn: string;
  descriptionHi: string;
}

export interface VideoMediaItem {
  id: string;
  titleEn: string;
  titleHi: string;
  duration: string;
  views: string;
  thumbnailUrl: string;
  videoUrl: string;
  categoryEn: string;
  categoryHi: string;
}

export interface DonationReceipt {
  receiptNumber: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  donorPan?: string;
  sevaProjectEn: string;
  sevaProjectHi: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  paymentMode: 'UPI' | 'QR Code' | 'Net Banking' | 'Card';
  transactionId: string;
  date: string;
  is80GEligible: boolean;
}

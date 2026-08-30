import React, { useState } from 'react';
import { Camera, Video, Sparkles, Play, Maximize2, X, MapPin, Film } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_ITEMS, VIDEOS } from '../data/foundationData';
import { GalleryMediaItem, VideoMediaItem } from '../types';

export const MediaGallerySection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeMediaTab, setActiveMediaTab] = useState<'photos' | 'videos'>('photos');
  const [photoFilter, setPhotoFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryMediaItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoMediaItem | null>(null);

  const filteredPhotos = photoFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === photoFilter);

  return (
    <section id="gallery" className="relative py-24 bg-[#FDFBF7] overflow-hidden border-t border-amber-200/60">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-up">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t("Media & Divine Gallery", "मीडिया एवं पावन गैलरी")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D241E] font-cinzel mb-4">
            {t(
              "Glimpses of Vrindavan Seva & Sacred Heritage",
              "श्री धाम वृन्दावन सेवा एवं अलौकिक दर्शन"
            )}
          </h2>

          <p className="text-[#382A1E] text-base sm:text-lg leading-relaxed font-medium">
            {t(
              "Experience the vibrancy of Gau Seva, Yamuna Aarti, Vedic Gurukulam classes, and revived Kunds through our dynamic photo and video archive.",
              "गौ संवर्धन, पावन यमुना महाआरती, गुरुकुल में वेद पाठ और सरोवर जीर्णोद्धार के अविस्मरणीय क्षणों की एक झलक।"
            )}
          </p>
        </div>

        {/* Top Switcher: Photos vs Videos */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F5EFE0] border border-amber-300/80 shadow-sm backdrop-blur-md">
            <button
              onClick={() => setActiveMediaTab('photos')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                activeMediaTab === 'photos'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                  : 'text-[#5C4A3E] hover:text-[#2D241E]'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{t("Photo Gallery (3D Masonry)", "चित्र गैलरी (3D ग्रिड)")}</span>
            </button>

            <button
              onClick={() => setActiveMediaTab('videos')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                activeMediaTab === 'videos'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                  : 'text-[#5C4A3E] hover:text-[#2D241E]'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>{t("Video Archives & Drives", "वीडियो एवं सेवा वृत्तचित्र")}</span>
            </button>
          </div>
        </div>

        {/* 1. PHOTO GALLERY (3D Masonry with Category Filters & Lightbox) */}
        {activeMediaTab === 'photos' && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {[
                { id: 'all', en: 'All Media', hi: 'सभी दृश्य' },
                { id: 'foundation-members', en: 'Foundation Members', hi: 'फाउंडेशन सदस्य व पदाधिकारी' },
                { id: 'gau-seva', en: 'Gau Seva', hi: 'गौ सेवा' },
                { id: 'kund-yamuna', en: 'Yamuna & Kunds', hi: 'यमुना व कुंड' },
                { id: 'gurukulam', en: 'Vedic Gurukulam', hi: 'गुरुकुलम' },
                { id: 'sant-seva', en: 'Sant Seva', hi: 'संत सेवा' },
                { id: 'vrindavan', en: 'Vrindavan Heritage', hi: 'वृन्दावन धरोहर' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setPhotoFilter(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    photoFilter === cat.id
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'bg-white text-[#382A1E] border border-amber-200 hover:border-amber-400 hover:text-amber-900'
                  }`}
                >
                  {t(cat.en, cat.hi)}
                </button>
              ))}
            </div>

            {/* 3D Masonry Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredPhotos.map((photo: GalleryMediaItem) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer border border-amber-200/80 bg-white shadow-md hover:border-amber-400 transition-all duration-500 transform hover:-translate-y-1.5 hover:shadow-xl"
                >
                  {/* Photo Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={photo.imageUrl}
                      alt={lang === 'hi' ? photo.titleHi : photo.titleEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Zoom Icon Overlay */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 border border-amber-300 flex items-center justify-center text-amber-800 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-col justify-end">
                      <div className="flex items-center space-x-1 text-[11px] text-amber-300 font-bold mb-0.5">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{t(photo.locationEn, photo.locationHi)}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug group-hover:text-amber-200 transition-colors">
                        {t(photo.titleEn, photo.titleHi)}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. VIDEO GALLERY GRID */}
        {activeMediaTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map((vid: VideoMediaItem) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className="group relative rounded-2xl overflow-hidden border border-amber-200/80 bg-white shadow-md hover:border-amber-400 transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={vid.thumbnailUrl}
                    alt={lang === 'hi' ? vid.titleHi : vid.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E] via-transparent to-black/30" />

                  {/* Play Button Glow Pulse */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-amber-600 transition-all duration-300">
                      <Play className="w-7 h-7 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Category & Duration Badges */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                    <Film className="w-3 h-3 text-amber-700" />
                    <span>{t(vid.categoryEn, vid.categoryHi)}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/80 text-white text-xs font-mono font-bold">
                    {vid.duration}
                  </div>
                </div>

                {/* Video Info Card */}
                <div className="p-5 bg-white">
                  <h3 className="text-base sm:text-lg font-bold text-[#2D241E] group-hover:text-amber-800 transition-colors mb-1 font-cinzel">
                    {t(vid.titleEn, vid.titleHi)}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#5C4A3E] pt-2 border-t border-amber-200/60 font-medium">
                    <span>{t("Sri Vrindavan Dham Seva Drive", "श्री वृन्दावन धाम सेवा अभियान")}</span>
                    <span className="text-amber-800 font-bold">{vid.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL FOR PHOTOS */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FDFBF7] border border-amber-300 rounded-3xl overflow-hidden shadow-2xl text-[#2D241E]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 hover:bg-amber-200 flex items-center justify-center cursor-pointer transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-res Image */}
            <div className="max-h-[65vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={lang === 'hi' ? selectedPhoto.titleHi : selectedPhoto.titleEn}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            {/* Details Bar */}
            <div className="p-6 bg-amber-50/90 border-t border-amber-300/80">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{t(selectedPhoto.locationEn, selectedPhoto.locationHi)}</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#2D241E] font-cinzel mb-2">
                {t(selectedPhoto.titleEn, selectedPhoto.titleHi)}
              </h3>
              <p className="text-sm text-[#4A3B32] leading-relaxed font-medium">
                {t(selectedPhoto.descriptionEn, selectedPhoto.descriptionHi)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO PLAYER MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FDFBF7] border border-amber-300 rounded-3xl overflow-hidden shadow-2xl text-[#2D241E]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 hover:bg-amber-200 flex items-center justify-center cursor-pointer transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            {/* Video Meta */}
            <div className="p-6 bg-amber-50/90 border-t border-amber-300/80">
              <div className="flex items-center justify-between mb-1">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-200/80 text-amber-900 border border-amber-300">
                  {t(selectedVideo.categoryEn, selectedVideo.categoryHi)}
                </span>
                <span className="text-xs text-amber-800 font-bold">{selectedVideo.views}</span>
              </div>
              <h3 className="text-lg font-bold text-[#2D241E] font-cinzel">
                {t(selectedVideo.titleEn, selectedVideo.titleHi)}
              </h3>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

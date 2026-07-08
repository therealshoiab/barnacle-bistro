import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Maximize2, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

// A sub-component to handle video intersection observer autoplay
const GalleryVideoCard: React.FC<{
  videoUrl: string;
  thumbnail: string;
  title: string;
  isMuted: boolean;
  onOpenLightbox: () => void;
}> = ({ videoUrl, thumbnail, title, isMuted, onOpenLightbox }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
              .then(() => setIsPlaying(true))
              .catch((err) => console.log('Autoplay blocked or paused:', err));
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <div className="relative w-full h-full group overflow-hidden rounded-2xl glass-panel border-[var(--border-glass)]">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={thumbnail}
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Autoplay Play Overlay Indicator when not playing */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
          <div className="p-3 rounded-full bg-white/20 backdrop-blur text-white">
            <Play size={20} fill="currentColor" />
          </div>
        </div>
      )}

      {/* Hover Glass Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
        <span className="text-[10px] bg-[var(--accent)] text-[#121317] font-bold uppercase tracking-widest px-2.5 py-1 rounded self-start">
          Video Reel
        </span>
        <div className="flex items-center justify-between w-full">
          <h4 className="text-white text-sm font-semibold tracking-wide font-sans">{title}</h4>
          <button
            onClick={onOpenLightbox}
            className="p-2 rounded-full bg-white/25 hover:bg-[var(--accent)] hover:text-[#121317] text-white transition-all"
            aria-label="View Fullscreen"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const Gallery: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close Lightbox on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null) handleNext();
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === 0 ? siteConfig.gallery.length - 1 : prev! - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === siteConfig.gallery.length - 1 ? 0 : prev! + 1
    );
  };

  const activeMedia = lightboxIndex !== null ? siteConfig.gallery[lightboxIndex] : null;

  return (
    <section id="gallery" className="section bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="section-header reveal-up flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="section-title-sub">Visual Feasts</span>
            <h2 className="section-title text-3xl md:text-4xl">Ambience & Craft</h2>
            <p className="section-desc md:mx-0">
              Take a visual stroll through Barnacle Bistro’s sophisticated aesthetic, dynamic kitchen craft, and signature platings.
            </p>
          </div>
          
          {/* Global Mute Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="btn-secondary self-center md:self-end flex items-center gap-2 border-[var(--border-glass)] shrink-0"
          >
            {isMuted ? (
              <>
                <VolumeX size={16} />
                Unmute Reels
              </>
            ) : (
              <>
                <Volume2 size={16} className="text-[#25D366] animate-pulse" />
                Mute Reels
              </>
            )}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="reveal-up grid grid-3 gap-6 mt-12">
          {siteConfig.gallery.map((item, index) => (
            <div key={item.id} className="aspect-video md:aspect-square">
              {item.type === 'video' ? (
                <GalleryVideoCard
                  videoUrl={item.url}
                  thumbnail={item.thumbnail || ''}
                  title={item.title}
                  isMuted={isMuted}
                  onOpenLightbox={() => setLightboxIndex(index)}
                />
              ) : (
                /* Image Card */
                <div
                  onClick={() => setLightboxIndex(index)}
                  className="relative w-full h-full group overflow-hidden rounded-2xl glass-panel border-[var(--border-glass)] cursor-pointer"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Glass Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
                    <span className="text-[10px] bg-[var(--accent)] text-[#121317] font-bold uppercase tracking-widest px-2.5 py-1 rounded self-start">
                      Ambience Shot
                    </span>
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-white text-sm font-semibold tracking-wide font-sans">{item.title}</h4>
                      <div className="p-2 rounded-full bg-white/25 text-white">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && activeMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300">
          
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[var(--accent)] hover:text-[#121317] text-white transition-all z-[110]"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-[var(--accent)] hover:text-[#121317] text-white transition-all z-[110]"
            aria-label="Previous Media"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Media Display Area */}
          <div className="max-w-[85vw] max-h-[80vh] flex flex-col items-center justify-center gap-4">
            {activeMedia.type === 'video' ? (
              <video
                src={activeMedia.url}
                controls
                autoPlay
                className="max-w-full max-h-[70vh] rounded-lg shadow-2xl"
              />
            ) : (
              <img
                src={activeMedia.url}
                alt={activeMedia.title}
                className="max-w-full max-h-[70vh] rounded-lg object-contain shadow-2xl"
              />
            )}
            <h4 className="text-white text-lg font-semibold tracking-wide font-sans">
              {activeMedia.title}
            </h4>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-[var(--accent)] hover:text-[#121317] text-white transition-all z-[110]"
            aria-label="Next Media"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

    </section>
  );
};

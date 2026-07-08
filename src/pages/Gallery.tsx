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
    <div className="relative w-full h-full group overflow-hidden rounded-2xl glass-panel border-[var(--border-color)]">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={thumbnail}
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      
      {/* Autoplay Play Overlay Indicator when not playing */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}
        >
          <div 
            className="p-3 rounded-full bg-white/20 backdrop-blur text-white"
            style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', color: '#ffffff' }}
          >
            <Play size={20} fill="currentColor" />
          </div>
        </div>
      )}

      {/* Hover Glass Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1rem',
          zIndex: 10,
          transition: 'opacity 0.3s ease'
        }}
      >
        <span 
          style={{
            fontSize: '10px',
            background: 'var(--primary-color)',
            color: '#000000',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            padding: '0.25rem 0.65rem',
            borderRadius: '4px',
            alignSelf: 'flex-start'
          }}
        >
          Video Reel
        </span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px' }}>{title}</h4>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox();
            }}
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.25)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
            className="video-zoom-btn"
            aria-label="View Fullscreen"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [isMuted, setIsMuted] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
    <section 
      style={{
        padding: '8rem 2rem 6rem 2rem',
        backgroundColor: 'var(--bg-color)',
        minHeight: '90vh'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div className="gallery-header">
          <div style={{ textAlign: 'left' }}>
            <span className="section-title-sub">Visual Feasts</span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
              Ambience & Craft
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: 0 }}>
              Take a visual stroll through Barnacle Bistro’s sophisticated aesthetic, dynamic kitchen craft, and signature platings.
            </p>
          </div>
          
          {/* Global Mute Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              padding: '0.65rem 1.35rem'
            }}
          >
            {isMuted ? (
              <>
                <VolumeX size={16} />
                Unmute Reels
              </>
            ) : (
              <>
                <Volume2 size={16} style={{ color: '#25D366' }} className="animate-pulse" />
                Mute Reels
              </>
            )}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid-layout">
          {siteConfig.gallery.map((item, index) => (
            <div key={item.id} className="gallery-item-aspect">
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
                  className="relative w-full h-full group overflow-hidden rounded-2xl glass-panel border-[var(--border-color)] cursor-pointer"
                  style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: '16px', cursor: 'pointer' }}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  {/* Hover Glass Overlay */}
                  <div 
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      zIndex: 10,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <span 
                      style={{
                        fontSize: '10px',
                        background: 'var(--primary-color)',
                        color: '#000000',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                        alignSelf: 'flex-start'
                      }}
                    >
                      Ambience Shot
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px' }}>{item.title}</h4>
                      <div 
                        style={{
                          padding: '0.5rem',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255,255,255,0.25)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
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
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              padding: '0.75rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#ffffff',
              display: 'flex',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10010,
              transition: 'background-color 0.2s'
            }}
            className="lightbox-close-btn"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '1.5rem',
              padding: '0.75rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#ffffff',
              display: 'flex',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10010
            }}
            aria-label="Previous Media"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Media Display Area */}
          <div style={{ maxWidth: '85vw', maxHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            {activeMedia.type === 'video' ? (
              <video
                src={activeMedia.url}
                controls
                autoPlay
                style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.8)' }}
              />
            ) : (
              <img
                src={activeMedia.url}
                alt={activeMedia.title}
                style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '8px', objectFit: 'contain', boxShadow: '0 10px 40px rgba(0,0,0,0.8)' }}
              />
            )}
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.5px' }}>
              {activeMedia.title}
            </h4>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '1.5rem',
              padding: '0.75rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#ffffff',
              display: 'flex',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10010
            }}
            aria-label="Next Media"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      <style>{`
        .gallery-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }
        .gallery-grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .gallery-item-aspect {
          aspect-ratio: 1 / 1;
        }
        .video-zoom-btn:hover, .lightbox-close-btn:hover {
          background-color: var(--primary-color) !important;
          color: #000000 !important;
        }
        @media (max-width: 900px) {
          .gallery-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .gallery-header > div {
            text-align: center !important;
          }
          .gallery-grid-layout {
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }
          .gallery-item-aspect {
            aspect-ratio: 1.5 / 1;
          }
        }
        @media (max-width: 550px) {
          .gallery-grid-layout {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlideshowProps {
  onNavigate: (page: string) => void;
}

export default function HeroSlideshow({ onNavigate }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides = siteConfig.slideshow;
  const totalSlides = slides.length;

  // Auto-play slideshow every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="hero-slideshow-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0b0d'
      }}
    >
      {/* 1. Slides Background Images Layer with smooth Crossfade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1.02)' : 'scale(1.08)',
              transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 5s cubic-bezier(0.25, 1, 0.5, 1)',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        );
      })}

      {/* 2. Cinematic Gradient & Frosted Overlay to Guarantee Text Legibility */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at center, rgba(10, 11, 13, 0.45) 0%, rgba(10, 11, 13, 0.78) 75%, rgba(10, 11, 13, 0.94) 100%),
            linear-gradient(to bottom, rgba(10, 11, 13, 0.6) 0%, transparent 20%, transparent 75%, rgba(10, 11, 13, 0.95) 100%)
          `,
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* 3. Slide Metadata Pill Badge (Top Right) */}
      <div 
        style={{
          position: 'absolute',
          top: '6.5rem',
          right: '2rem',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.4rem 0.9rem',
          borderRadius: '30px',
          background: 'rgba(18, 18, 22, 0.65)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
          fontSize: '0.75rem',
          letterSpacing: '0.5px'
        }}
        className="slide-counter-badge"
      >
        <span style={{ color: 'var(--primary-color)', fontWeight: 700 }}>
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
          {slides[currentSlide].title}
        </span>
      </div>

      {/* 4. Left Arrow Control */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          background: 'rgba(15, 16, 20, 0.55)',
          backdropFilter: 'blur(10px)',
          color: '#ffffff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        className="slideshow-arrow-btn"
      >
        <ChevronLeft size={22} />
      </button>

      {/* 5. Right Arrow Control */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          background: 'rgba(15, 16, 20, 0.55)',
          backdropFilter: 'blur(10px)',
          color: '#ffffff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        className="slideshow-arrow-btn"
      >
        <ChevronRight size={22} />
      </button>

      {/* 6. CENTERED HERO CONTENT (From 2nd Image) */}
      <div 
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '850px',
          margin: '0 auto',
          padding: '7rem 1.5rem 5rem 1.5rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem'
        }}
      >
        {/* Top Tagline Badge */}
        <div 
          className="hero-tagline"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.85rem',
            color: 'var(--primary-color)',
            letterSpacing: '3px',
            fontWeight: 700,
            textTransform: 'uppercase',
            border: '1px solid var(--border-color)',
            padding: '0.45rem 1.25rem',
            borderRadius: '30px',
            backgroundColor: 'rgba(15, 16, 20, 0.75)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}
        >
          Srinagar's Premium Bistro
        </div>

        {/* H1 Main Heading */}
        <h1 
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
            lineHeight: '1.12',
            fontWeight: 800,
            fontFamily: "'Playfair Display', serif",
            color: '#ffffff',
            letterSpacing: '0px',
            wordSpacing: '0.08em',
            margin: '0.2rem 0',
            textShadow: '0 3px 20px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)'
          }}
        >
          Where <span style={{ color: 'var(--primary-color)' }}>Culinary Art</span>
          <br />
          Meets <span style={{ color: 'var(--primary-color)' }}>Premium Vibes.</span>
        </h1>

        {/* Hero Subtitle Description */}
        <p 
          className="hero-subtitle"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: '680px',
            lineHeight: '1.7',
            margin: '0.4rem auto 0.8rem auto',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}
        >
          Barnacle Bistro — Srinagar's high-end dining sanctuary in Hyderpora, serving exceptional continental grills, signature momos, mocktails, and unforgettable family dining moments.
        </p>

        {/* Call to Action Buttons */}
        <div 
          className="hero-btn-container"
          style={{
            display: 'flex',
            gap: '1.25rem',
            marginTop: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <button 
            onClick={() => onNavigate('menu')} 
            className="btn btn-primary"
            style={{
              padding: '0.9rem 2.2rem',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              boxShadow: '0 8px 25px rgba(212, 175, 55, 0.35)'
            }}
          >
            View Menu
          </button>
          <button 
            onClick={() => onNavigate('order')} 
            className="btn btn-secondary"
            style={{
              padding: '0.9rem 2.2rem',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              background: 'rgba(20, 20, 25, 0.75)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(255, 255, 255, 0.25)',
              color: '#ffffff'
            }}
          >
            Order Online
          </button>
        </div>

        {/* Key Stats Row */}
        <div 
          className="hero-badges-row"
          style={{
            display: 'flex',
            gap: 'clamp(1.2rem, 4vw, 3rem)',
            marginTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <div className="hero-badge-container" style={{ textAlign: 'center', alignItems: 'center' }}>
            <span className="badge-stat" style={{ color: 'var(--primary-color)', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              4.5 ★
            </span>
            <span className="badge-label" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Zomato Rating
            </span>
          </div>
          <div className="hero-badge-container" style={{ textAlign: 'center', alignItems: 'center' }}>
            <span className="badge-stat" style={{ color: 'var(--primary-color)', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              500+
            </span>
            <span className="badge-label" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Happy Patrons
            </span>
          </div>
          <div className="hero-badge-container" style={{ textAlign: 'center', alignItems: 'center' }}>
            <span className="badge-stat" style={{ color: 'var(--primary-color)', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              11:30 AM - 11 PM
            </span>
            <span className="badge-label" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Hours of Service
            </span>
          </div>
        </div>
      </div>

      {/* 7. Bottom Navigation Dots / Indicators */}
      <div 
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          padding: '0.4rem 0.8rem',
          borderRadius: '20px',
          background: 'rgba(15, 16, 20, 0.55)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === currentSlide ? '24px' : '7px',
              height: '7px',
              borderRadius: '6px',
              background: i === currentSlide ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.35)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        ))}
      </div>

      {/* Embedded CSS for Arrow & Pill Hover Styles */}
      <style>{`
        .slideshow-arrow-btn:hover {
          background: rgba(212, 175, 55, 0.85) !important;
          color: #000000 !important;
          border-color: #d4af37 !important;
          transform: translateY(-50%) scale(1.08) !important;
        }
        @media (max-width: 768px) {
          .slideshow-arrow-btn {
            display: none !important;
          }
          .slide-counter-badge {
            top: 5.5rem !important;
            right: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}

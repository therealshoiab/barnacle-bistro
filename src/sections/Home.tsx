import React, { useState, Suspense, useEffect } from 'react';
import { ChevronDown, Star, Clock, MapPin, ShoppingBag } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ErrorBoundary } from '../components/ErrorBoundary';
import gsap from 'gsap';

// Lazy load the Spline component for faster initial page load
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export const Home: React.FC = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);

  // Animate hero elements immediately on mount for premium stagger entry
  useEffect(() => {
    gsap.fromTo(
      '.hero-reveal',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.35,
        stagger: 0.15,
        clearProps: 'transform,opacity',
      }
    );
  }, []);
  const [isUrlChecking, setIsUrlChecking] = useState(true);
  const [isUrlValid, setIsUrlValid] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Verify Spline scene URL accessibility before rendering it
  useEffect(() => {
    if (!siteConfig.spline.sceneUrl) {
      setIsUrlChecking(false);
      setSplineError(true);
      return;
    }

    fetch(siteConfig.spline.sceneUrl)
      .then((res) => {
        if (res.ok) {
          setIsUrlValid(true);
        } else {
          console.warn(`Spline scene URL is not accessible (Status: ${res.status}). Falling back.`);
          setSplineError(true);
        }
      })
      .catch((err) => {
        console.warn('Spline scene URL failed to load. Falling back.', err);
        setSplineError(true);
      })
      .finally(() => {
        setIsUrlChecking(false);
      });
  }, []);

  // Pre-load check (optional timeout fallback if 3D scene takes > 8 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!splineLoaded && !splineError) {
        // Force fallback if Spline is taking too long
        setSplineError(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [splineLoaded, splineError]);

  return (
    <section id="home" className="relative min-height-screen h-screen flex flex-col justify-between overflow-hidden">
      
      {/* 3D Scene / Fallback Background */}
      <div className="absolute inset-0 z-0">
        {/* If Spline errored or check complete and URL is invalid */}
        {(splineError || !isUrlValid) && !isUrlChecking ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 11, 13, 0.6), rgba(10, 11, 13, 0.85)), url(${siteConfig.spline.fallbackImage})`,
            }}
          />
        ) : (
          <>
            {/* Loading / Skeleton Fallback Layer during checking or loading */}
            {(isUrlChecking || !splineLoaded) && (
              <div
                className="absolute inset-0 bg-cover bg-center skeleton flex items-center justify-center transition-opacity duration-1000"
                style={{
                  backgroundImage: `linear-gradient(rgba(10, 11, 13, 0.7), rgba(10, 11, 13, 0.9)), url(${siteConfig.spline.fallbackImage})`,
                }}
              >
                <div className="text-center px-4">
                  <div className="w-16 h-16 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-sm font-light text-[var(--text-secondary)] tracking-wider">
                    Entering the Bistro 3D Sanctuary...
                  </p>
                </div>
              </div>
            )}
            
            {/* Spline Interactive Canvas with Error Boundary (rendered only if URL check passes) */}
            {!isUrlChecking && isUrlValid && (
              <ErrorBoundary
                fallback={
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(10, 11, 13, 0.6), rgba(10, 11, 13, 0.85)), url(${siteConfig.spline.fallbackImage})`,
                    }}
                  />
                }
                onError={() => {
                  setSplineError(true);
                  setSplineLoaded(true);
                }}
              >
                <Suspense fallback={null}>
                  <Spline
                    scene={siteConfig.spline.sceneUrl}
                    onLoad={() => setSplineLoaded(true)}
                    onError={() => {
                      setSplineError(true);
                      setSplineLoaded(true); // Stop loader spinner
                    }}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${
                      splineLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Suspense>
              </ErrorBoundary>
            )}
            
            {/* Dark Overlay to make text legible over Spline elements */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{
                background: 'linear-gradient(180deg, rgba(10, 11, 13, 0.5) 0%, rgba(10, 11, 13, 0.8) 80%, rgba(10, 11, 13, 0.95) 100%)',
              }}
            />
          </>
        )}
      </div>

      {/* Hero Content (Centered) */}
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center items-center text-center relative z-10 pt-20">
        <div className="max-w-3xl flex flex-col items-center gap-6">
          
          {/* Welcome Badge */}
          <div className="hero-reveal glass-panel px-4 py-1.5 rounded-full flex items-center gap-2 border-[var(--border-glass)] text-xs font-semibold tracking-widest text-[var(--accent)] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Now Serving Hyderpora, Srinagar
          </div>

          {/* Restaurant Title */}
          <h1 className="hero-reveal text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-none">
            {siteConfig.brand.name}
          </h1>

          {/* Tagline */}
          <p className="hero-reveal text-lg md:text-2xl text-[var(--text-secondary)] font-light tracking-wide max-w-2xl leading-relaxed">
            {siteConfig.brand.tagline}
          </p>

          {/* CTAs */}
          <div className="hero-reveal flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={() => scrollToSection('#menu')}
              className="btn-primary"
            >
              View Menu
            </button>
            <button
              onClick={() => scrollToSection('#order')}
              className="btn-secondary"
            >
              <ShoppingBag size={16} />
              Order Online
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Strip (Bottom Teaser Ribbon) */}
      <div className="relative z-10 border-t border-[var(--border-glass)]" style={{ background: 'var(--surface-glass)', backdropFilter: 'blur(10px)' }}>
        <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* Rating */}
          <div className="flex flex-col md:flex-row items-center gap-4 px-4 justify-center md:justify-start">
            <div className="p-3 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
              <Star size={20} fill="currentColor" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">4.0 ★ Star Rated</h4>
              <p className="text-xs text-[var(--text-secondary)]">Loved by foodies on Zomato & Google</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col md:flex-row items-center gap-4 px-4 justify-center md:justify-start border-y md:border-y-0 md:border-x border-[var(--border-glass)] py-4 md:py-0">
            <div className="p-3 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Open Daily</h4>
              <p className="text-xs text-[var(--text-secondary)]">{siteConfig.contact.hours}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col md:flex-row items-center gap-4 px-4 justify-center md:justify-start">
            <div className="p-3 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Hyderpora Bypass</h4>
              <p className="text-xs text-[var(--text-secondary)]">Gulshanabad Road, Srinagar</p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
        onClick={() => scrollToSection('#about')}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Discover More</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>

    </section>
  );
};

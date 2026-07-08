import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

// Import Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Import Sections
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Menu } from './sections/Menu';
import { Signatures } from './sections/Signatures';
import { Gallery } from './sections/Gallery';
import { Reviews } from './sections/Reviews';
import { OrderOnline } from './sections/OrderOnline';
import { Contact } from './sections/Contact';
import { FAQ } from './sections/FAQ';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Track Active Section for Navbar Highlighting
  useEffect(() => {
    const sectionIds = ['home', 'about', 'menu', 'signatures', 'gallery', 'reviews', 'order', 'contact', 'faq'];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the middle of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // GSAP Scroll Reveal Implementation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // Animate using GSAP
            gsap.fromTo(
              target,
              {
                opacity: 0,
                y: 35,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                clearProps: 'transform,opacity', // Clear styles after animation to keep layout responsive
              }
            );

            // Unobserve after revealing once
            observer.unobserve(target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before element enters viewport
        threshold: 0.05,
      }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Pages / Sections */}
      <main>
        <Home />
        <About />
        <Menu />
        <Signatures />
        <Gallery />
        <Reviews />
        <OrderOnline />
        <Contact />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;

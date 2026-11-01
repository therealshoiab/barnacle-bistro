import React, { useState, useEffect } from 'react';
import HeroSlideshow from '../components/HeroSlideshow';
import { siteConfig } from '../data/siteConfig';
import { 
  Star, Quote, ChevronDown, HelpCircle, Flame, 
  ShieldCheck, Heart, ArrowRight, Utensils, CheckCircle2 
} from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(siteConfig.faqs[0]?.id || null);
  const [visibleReviews, setVisibleReviews] = useState(8);

  // Check if hash has a section target to scroll to (e.g., #about, #faq, #reviews)
  useEffect(() => {
    const handleScrollTarget = () => {
      const hash = window.location.hash;
      if (hash.includes('about')) {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      } else if (hash.includes('faq')) {
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
      } else if (hash.includes('reviews')) {
        document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Small delay to ensure DOM is painted
    const timer = setTimeout(handleScrollTarget, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCTA = (page: string) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => Math.min(prev + 12, siteConfig.reviews.length));
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      
      {/* 1. HERO SLIDESHOW (10 Themed Images + Centered Data + No Glowing Dots) */}
      <HeroSlideshow onNavigate={handleCTA} />

      {/* 2. CORE FEATURES & HIGHLIGHTS STRIP */}
      <section style={{ padding: '5rem 2rem 4rem 2rem', backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3.5rem' }}>
            <span className="section-title-sub">The Barnacle Standard</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>
              Traditional Kashmiri Soul Meets Modern Bistro Art
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Located in Gulshanabad, Hyderpora near Srinagar Bypass, we blend authentic wazwan traditions with high-end continental sizzlers, momos, and warm ambient spaces.
            </p>
          </div>

          <div className="teaser-cards-grid">
            {/* Card 1 */}
            <div className="glass-panel teaser-card">
              <div className="teaser-icon-wrapper">
                <Flame size={24} style={{ color: 'var(--primary-color)' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>
                Continental Grills & Sizzlers
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.6' }}>
                Expert chicken steaks, lamb skewers, and piping-hot cast iron sizzlers with herb-infused butter.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="glass-panel teaser-card">
              <div className="teaser-icon-wrapper">
                <Utensils size={24} style={{ color: 'var(--primary-color)' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>
                Artisan Momos & Dumplings
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.6' }}>
                Srinagar’s favorite crispy kurkure momos, tandoori malai momos, and steamed delicacies with fiery dips.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-panel teaser-card">
              <div className="teaser-icon-wrapper">
                <ShieldCheck size={24} style={{ color: 'var(--primary-color)' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>
                100% Halal & Fresh Valley Sourced
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.6' }}>
                Strict adherence to 100% Halal preparations with fresh meats, vegetables, and genuine saffron from Pampore.
              </p>
            </div>

            {/* Card 4 */}
            <div className="glass-panel teaser-card">
              <div className="teaser-icon-wrapper">
                <Heart size={24} style={{ color: 'var(--primary-color)' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>
                Warm Ambient Dining
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.6' }}>
                Frosted glass aesthetics, dark wood textures, and ambient Edison lighting for unforgettable family gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MERGED ABOUT SECTION */}
      <section 
        id="about" 
        style={{ 
          padding: '6rem 2rem', 
          backgroundColor: 'var(--surface-color)', 
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
          position: 'relative' 
        }}
      >
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-title-sub">Our Heritage</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
              About Barnacle Bistro
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
              Discover Srinagar’s finest culinary journey, blending local valley traditions with contemporary gourmet standards.
            </p>
          </div>

          <div className="about-grid">
            {/* Story Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.85rem', fontFamily: "'Playfair Display', serif", color: 'var(--primary-color)', lineHeight: '1.3' }}>
                Redefining Casual Gourmet Dining in Srinagar
              </h3>
              
              <p style={{ color: 'var(--text-color)', fontWeight: 300, lineHeight: '1.75', fontSize: '1.02rem' }}>
                {siteConfig.brand.aboutLong}
              </p>

              <p style={{ color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.7', fontSize: '0.96rem' }}>
                {siteConfig.brand.ambianceNote}
              </p>

              {/* Highlights Pill Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
                <div className="glass-panel" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-heading)' }}>Wazwan Heritage</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Recipes perfected by master wazas</p>
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-heading)' }}>Valley Sourced</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pampore saffron & fresh Kashmir dairy</p>
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-heading)' }}>Cozy Atmosphere</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Perfect for cold Srinagar evenings</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button 
                  onClick={() => handleCTA('menu')} 
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>Explore Our Food Menu</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Visual Photo Showcase */}
            <div className="about-photos-grid">
              <div
                className="glass-panel"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=85&w=800")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  minHeight: '280px'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div
                  className="glass-panel"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                    flex: 1,
                    minHeight: '135px'
                  }}
                />
                <div
                  className="glass-panel"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                    flex: 1,
                    minHeight: '135px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION — BEFORE REVIEWS */}
      <section id="faq" style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-title-sub">Got Questions?</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto', fontSize: '1rem' }}>
              All essential details regarding our timings, delivery options, reservations, and location in Srinagar.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {siteConfig.faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-panel"
                  style={{
                    background: 'var(--glass-bg)',
                    border: isOpen ? '1px solid var(--primary-color)' : '1px solid var(--glass-border)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: isOpen ? 'var(--glass-shadow)' : 'none'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      cursor: 'pointer',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)'
                    }}
                    className="faq-toggle-btn"
                    aria-expanded={isOpen}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <HelpCircle size={18} style={{ color: isOpen ? 'var(--primary-color)' : 'var(--text-muted)', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: '1rem' }}>{faq.question}</span>
                    </div>
                    
                    <ChevronDown
                      size={18}
                      style={{
                        color: isOpen ? 'var(--primary-color)' : 'var(--text-muted)',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>

                  <div
                    style={{
                      overflow: 'hidden',
                      maxHeight: isOpen ? '300px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      borderTop: isOpen ? '1px solid var(--border-color)' : 'none'
                    }}
                  >
                    <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--surface-color)' }}>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-color)', fontWeight: 300, lineHeight: '1.65' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS & TESTIMONIALS SECTION — AFTER FAQ (50 Kashmiri Reviews) */}
      <section 
        id="reviews" 
        style={{ 
          padding: '6rem 2rem', 
          backgroundColor: 'var(--surface-color)',
          borderTop: '1px solid var(--border-color)'
        }}
      >
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-title-sub">Verified Guest Stories</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
              Customer Reviews & Ratings ({siteConfig.reviews.length})
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto', fontSize: '1rem' }}>
              Here is what food lovers from Srinagar, Kashmir and visiting guests have to say about their Barnacle Bistro experience.
            </p>
          </div>

          {/* Rating Summary Strip */}
          <div 
            className="glass-panel" 
            style={{ 
              maxWidth: '750px', 
              margin: '0 auto 3rem auto', 
              padding: '1.5rem 2rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '1.5rem',
              borderRadius: '20px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-color)', fontFamily: "'Playfair Display', serif" }}>
                4.5
              </span>
              <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginTop: '0.2rem' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="#24963f" style={{ color: '#24963f' }} />
                ))}
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Average Rating</p>
            </div>

            <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--border-color)' }} className="desktop-only-divider" />

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-heading)' }}>500+</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Google & Zomato Reviews</p>
            </div>

            <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--border-color)' }} className="desktop-only-divider" />

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#24963f' }}>98%</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Recommendation Rate</p>
            </div>
          </div>

          {/* Reviews Grid (Green Stars, No Profile Avatars) */}
          <div className="reviews-grid">
            {siteConfig.reviews.slice(0, visibleReviews).map((review) => (
              <div key={review.id} className="review-card glass-panel">
                <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', color: 'var(--primary-color)', opacity: 0.08, pointerEvents: 'none' }}>
                  <Quote size={64} fill="currentColor" />
                </div>

                {/* Stars — Green */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? '#24963f' : 'none'}
                      style={{ color: i < review.rating ? '#24963f' : 'var(--text-muted)' }}
                    />
                  ))}
                </div>

                <p style={{ fontSize: '0.98rem', color: 'var(--text-color)', fontWeight: 300, fontStyle: 'italic', lineHeight: '1.7', flex: 1, position: 'relative', zIndex: 1 }}>
                  "{review.text}"
                </p>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '2px' }}>{review.author}</h4>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{review.date}</p>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: '#24963f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', background: 'rgba(36,150,63,0.1)', padding: '0.25rem 0.6rem', borderRadius: '20px' }}>
                    ✓ Verified Dining
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Reviews Button */}
          {visibleReviews < siteConfig.reviews.length && (
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <button
                onClick={loadMoreReviews}
                className="btn btn-primary"
                style={{ padding: '0.9rem 2.5rem', fontSize: '0.95rem', fontWeight: 700 }}
              >
                Load More Reviews ({siteConfig.reviews.length - visibleReviews} Remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Inline Styles */}
      <style>{`
        .teaser-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .teaser-card {
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          border-radius: 20px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .teaser-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-hover);
        }
        .teaser-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--accent-glow);
          display: flex;
          align-items: center;
          justifyContent: center;
          margin-bottom: 0.5rem;
          border: 1px solid var(--border-color);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
        }
        .about-photos-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 1rem;
          height: 380px;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1rem;
        }
        .review-card {
          padding: 2.25rem;
          position: relative;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .reviews-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .about-photos-grid { height: 260px; }
          .desktop-only-divider { display: none !important; }
        }
      `}</style>
    </div>
  );
}

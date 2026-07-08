import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ShieldCheck, Flame, Heart } from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-title-sub">Our Story</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
            About Barnacle Bistro
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Discover Srinagar’s finest culinary journey, blending local tradition with global standards.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          
          {/* Story Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontFamily: "'Playfair Display', serif", color: 'var(--primary-color)', lineHeight: '1.3' }}>
              Redefining Casual Gourmet Dining in Jammu & Kashmir
            </h3>
            
            <p style={{ color: 'var(--text-color)', fontWeight: 300, lineHeight: '1.7' }}>
              {siteConfig.brand.aboutLong}
            </p>

            <p style={{ color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.7' }}>
              {siteConfig.brand.ambianceNote}
            </p>

            {/* Highlights Columns */}
            <div className="about-highlights">
              
              <div className="glass-panel highlight-card">
                <div className="highlight-icon">
                  <Flame size={20} />
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Wazwan Heritage</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Authentic recipes passed down through generations</p>
              </div>

              <div className="glass-panel highlight-card">
                <div className="highlight-icon">
                  <ShieldCheck size={20} />
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>100% Fresh</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sourced from the fresh fields of the Valley</p>
              </div>

              <div className="glass-panel highlight-card">
                <div className="highlight-icon">
                  <Heart size={20} />
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Cozy Ambiance</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Warmest meeting spot in Srinagar’s chill</p>
              </div>

            </div>
          </div>

          {/* Visual Grid */}
          <div className="about-photos-grid">
            <div
              className="glass-panel"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '24px',
                height: '100%',
                minHeight: '250px'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              <div
                className="glass-panel"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '20px',
                  flex: 1,
                  minHeight: '120px'
                }}
              />
              <div
                className="glass-panel"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '20px',
                  flex: 1,
                  minHeight: '120px'
                }}
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }
        .about-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .highlight-card {
          padding: 1.25rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }
        .highlight-icon {
          padding: 0.5rem;
          border-radius: 50%;
          background: var(--accent-glow);
          color: var(--primary-color);
          display: inline-flex;
        }
        .about-photos-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          height: 450px;
        }
        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-photos-grid {
            height: 380px;
          }
        }
        @media (max-width: 600px) {
          .about-highlights {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .about-photos-grid {
            grid-template-columns: 1fr;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}

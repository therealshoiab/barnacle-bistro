import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
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
          <span className="section-title-sub">Client Stories</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
            Guest Testimonials
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Here is what our guests from around the valley and beyond have to say about their dining experiences at Barnacle Bistro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="reviews-grid">
          {siteConfig.reviews.map((review) => (
            <div
              key={review.id}
              className="glass-panel review-card"
            >
              {/* Quote Icon Background */}
              <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', color: 'var(--primary-color)', opacity: 0.1, pointerEvents: 'none' }}>
                <Quote size={60} fill="currentColor" />
              </div>

              {/* Review Text */}
              <p style={{ fontSize: '1rem', color: 'var(--text-color)', fontWeight: 300, fontStyle: 'italic', lineHeight: '1.65', position: 'relative', zIndex: 1 }}>
                "{review.text}"
              </p>

              {/* Reviewer Details */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  borderTop: '1px solid var(--border-color)', 
                  paddingTop: '1rem', 
                  marginTop: '1.5rem',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src={review.avatar}
                    alt={review.author}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1px solid var(--primary-color)'
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>{review.author}</h4>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', color: 'var(--primary-color)' }}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      fill={index < review.rating ? 'currentColor' : 'none'}
                      style={{ color: index < review.rating ? 'var(--primary-color)' : 'var(--text-muted)' }}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        .review-card {
          padding: 2.25rem;
          position: relative;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .review-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--glass-shadow);
        }
        @media (max-width: 900px) {
          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section style={{ padding: '8rem 2rem 6rem 2rem', backgroundColor: 'var(--bg-color)', minHeight: '90vh' }}>
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

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {siteConfig.reviews.map((review) => (
            <div key={review.id} className="review-card glass-panel">

              {/* Background Quote Icon */}
              <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', color: 'var(--primary-color)', opacity: 0.08, pointerEvents: 'none' }}>
                <Quote size={64} fill="currentColor" />
              </div>

              {/* Stars — green */}
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

              {/* Review Text */}
              <p style={{ fontSize: '0.97rem', color: 'var(--text-color)', fontWeight: 300, fontStyle: 'italic', lineHeight: '1.7', flex: 1, position: 'relative', zIndex: 1 }}>
                "{review.text}"
              </p>

              {/* Author — no avatar, just name + date */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '2px' }}>{review.author}</h4>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{review.date}</p>
                </div>
                {/* Verified badge */}
                <span style={{ fontSize: '0.65rem', color: '#24963f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', background: 'rgba(36,150,63,0.1)', padding: '0.25rem 0.6rem', borderRadius: '20px' }}>
                  ✓ Verified
                </span>
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
          gap: 0;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--glass-shadow);
        }
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr; gap: 1.5rem; }
        }
      `}</style>
    </section>
  );
}

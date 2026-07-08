import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function Signatures() {
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
          <span className="section-title-sub">Bistro Exclusives</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
            Signature Showcase
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Indulge in our most celebrated creations. Hand-crafted, locally sourced, and designed to inspire your palate.
          </p>
        </div>

        {/* Signatures Grid */}
        <div className="signatures-grid">
          {siteConfig.signatures.map((dish) => (
            <div
              key={dish.id}
              className="glass-panel signature-card"
            >
              
              {/* Image Container with Hover Zoom */}
              <div className="signature-img-container">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="signature-img"
                />
                
                {/* Tag Badge */}
                <span className="signature-badge">
                  <Sparkles size={10} />
                  {dish.tag}
                </span>
              </div>

              {/* Dish Content */}
              <div className="signature-content">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: "'Playfair Display', serif", color: '#ffffff' }}>
                      {dish.name}
                    </h3>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: "'Playfair Display', serif", color: 'var(--primary-color)' }}>
                      ₹{dish.price}
                    </span>
                  </div>
                  
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.6' }}>
                    {dish.description}
                  </p>
                </div>

                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    borderTop: '1px solid var(--border-color)', 
                    paddingTop: '1rem', 
                    marginTop: '1.5rem', 
                    fontSize: '0.75rem', 
                    color: 'var(--text-muted)' 
                  }}
                >
                  <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.65rem' }}>
                    Signature Culinary Art
                  </span>
                  
                  <a
                    href="#/order"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--primary-color)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                    className="sig-order-link"
                  >
                    <ShoppingBag size={14} />
                    Order Now
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .signatures-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        .signature-card {
          overflow: hidden;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: row;
        }
        .signature-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--glass-shadow);
        }
        .signature-img-container {
          width: 40%;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .signature-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .signature-card:hover .signature-img {
          transform: scale(1.08);
        }
        .signature-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--primary-color);
          color: #000000;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0.45rem 0.85rem;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          box-shadow: 0 4px 10px rgba(212, 175, 55, 0.25);
        }
        .signature-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }
        .sig-order-link:hover {
          color: var(--primary-hover) !important;
          text-decoration: underline;
        }
        @media (max-width: 900px) {
          .signatures-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        @media (max-width: 600px) {
          .signature-card {
            flex-direction: column;
          }
          .signature-img-container {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}

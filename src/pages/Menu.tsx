import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Flame, Star } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(siteConfig.menu[0]?.id || 'starters');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const activeCategoryData = siteConfig.menu.find(
    (category) => category.id === activeCategory
  );

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
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span className="section-title-sub">Gourmet Selection</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1.5rem' }}>
            Our Menu
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Explore our curated culinary collection, featuring authentic Wazwan delicacies, crispy momos, and fresh local brews.
          </p>
        </div>

        {/* Categories Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.65rem', marginBottom: '3.5rem', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto' }}>
          {siteConfig.menu.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                padding: '0.65rem 1.35rem',
                borderRadius: '30px',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: activeCategory === category.id ? 'var(--primary-color)' : 'var(--glass-bg)',
                color: activeCategory === category.id ? '#000000' : 'var(--text-color)',
                border: activeCategory === category.id ? '1px solid var(--primary-color)' : '1px solid var(--border-color)',
                boxShadow: activeCategory === category.id ? 'rgba(212, 175, 55, 0.24) 0px 8px 20px' : 'none'
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="menu-items-grid">
          {activeCategoryData?.items.map((item) => (
            <div
              key={item.id}
              className="glass-panel menu-item-card"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  
                  {/* Name and Indicators */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>
                        {item.name}
                      </h3>
                      
                      {/* Veg indicator */}
                      {item.isVeg && (
                        <span 
                          style={{
                            width: '14px',
                            height: '14px',
                            border: '1px solid #24963f',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1px',
                            borderRadius: '2px',
                            flexShrink: 0
                          }}
                          title="Vegetarian"
                        >
                          <span style={{ width: '6px', height: '6px', backgroundColor: '#24963f', borderRadius: '50%' }} />
                        </span>
                      )}
                      
                      {/* Spicy indicator */}
                      {item.isSpicy && (
                        <span 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2px',
                            fontSize: '9px',
                            color: '#ff453a',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            flexShrink: 0
                          }} 
                          title="Spicy"
                        >
                          <Flame size={12} fill="currentColor" />
                          <span>Spicy</span>
                        </span>
                      )}

                      {/* Popular indicator */}
                      {item.isPopular && (
                        <span 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2px',
                            fontSize: '9px',
                            color: 'var(--primary-color)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            flexShrink: 0
                          }} 
                          title="Popular"
                        >
                          <Star size={12} fill="currentColor" />
                          <span>Popular</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', flexShrink: 0 }}>
                    ₹{item.price}
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>

              {/* Order Teaser Action */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  fontSize: '0.75rem', 
                  marginTop: '1.5rem', 
                  borderTop: '1px solid var(--border-color)', 
                  paddingTop: '0.85rem', 
                  color: 'var(--text-muted)' 
                }}
              >
                <span>Dine-In • Takeaway • Delivery</span>
                <a
                  href="#/order"
                  style={{
                    color: 'var(--primary-color)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '0.7rem'
                  }}
                  className="menu-order-link"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Note */}
        <div style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <p>* Prices are exclusive of local taxes. Real menu items & pricing configuration is loaded from code configuration.</p>
        </div>

      </div>

      <style>{`
        .menu-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          min-height: 350px;
        }
        .menu-item-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }
        .menu-item-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--glass-shadow);
        }
        .menu-order-link:hover {
          color: var(--primary-hover) !important;
          text-decoration: underline;
        }
        @media (max-width: 900px) {
          .menu-items-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}

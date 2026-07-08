import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Flame, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(siteConfig.menu[0]?.id || 'starters');
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const activeCategoryData = siteConfig.menu.find(c => c.id === activeCategory);

  const scrollTabs = (dir: 'left' | 'right') => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: '8rem 2rem 6rem 2rem', backgroundColor: 'var(--bg-color)', minHeight: '90vh' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-title-sub">Gourmet Selection</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
            Our Menu
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Explore our curated culinary collection — authentic Wazwan delicacies, crispy momos, hearty mains, and fresh local brews.
          </p>
        </div>

        {/* Horizontal Scroll Category Tabs */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          {/* Left Arrow */}
          <button onClick={() => scrollTabs('left')} className="tab-arrow tab-arrow-left">
            <ChevronLeft size={18} />
          </button>

          {/* Scrollable Pills */}
          <div ref={tabsRef} className="category-tabs-scroll">
            {siteConfig.menu.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`category-pill ${activeCategory === category.id ? 'category-pill-active' : ''}`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={() => scrollTabs('right')} className="tab-arrow tab-arrow-right">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Menu Items Grid — Card with image left, content right */}
        <div className="menu-items-grid">
          {activeCategoryData?.items.map((item) => (
            <div key={item.id} className="menu-item-card glass-panel">

              {/* Food Image */}
              <div className="menu-item-img-wrap">
                <img
                  src={item.image || PLACEHOLDER_IMG}
                  alt={item.name}
                  className="menu-item-img"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMG; }}
                />
                {/* Veg badge on image */}
                {item.isVeg && (
                  <span className="veg-dot-badge" title="Vegetarian">
                    <span />
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="menu-item-content">
                {/* Name row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <h3 className="menu-item-name">{item.name}</h3>
                  <span className="menu-item-price">₹{item.price}</span>
                </div>

                {/* Badges */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                  {item.isSpicy && (
                    <span className="badge badge-spicy">
                      <Flame size={10} fill="currentColor" /> Spicy
                    </span>
                  )}
                  {item.isPopular && (
                    <span className="badge badge-popular">
                      <Star size={10} fill="currentColor" /> Popular
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="menu-item-desc">{item.description}</p>

                {/* Footer */}
                <div className="menu-item-footer">
                  <span>Dine-In · Takeaway · Delivery</span>
                  <a href="#/order" className="menu-order-link">Order Now →</a>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          * Prices are exclusive of local taxes.
        </div>
      </div>

      <style>{`
        /* ── Scrollable Category Tabs ── */
        .category-tabs-scroll {
          display: flex;
          gap: 0.6rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 0.5rem 3rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .category-tabs-scroll::-webkit-scrollbar { display: none; }

        .category-pill {
          white-space: nowrap;
          flex-shrink: 0;
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: all 0.25s ease;
          background: var(--glass-bg);
          color: var(--text-color);
          border: 1px solid var(--border-color);
          font-family: var(--font-sans);
        }
        .category-pill:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
        .category-pill-active {
          background: var(--primary-color) !important;
          color: #000 !important;
          border-color: var(--primary-color) !important;
          box-shadow: 0 4px 16px rgba(212,175,55,0.3);
        }

        /* Arrow Buttons */
        .tab-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: var(--glass-bg);
          color: var(--text-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.2s;
          backdrop-filter: blur(10px);
        }
        .tab-arrow:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
        .tab-arrow-left { left: 0; }
        .tab-arrow-right { right: 0; }

        /* ── Menu Item Card ── */
        .menu-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          /* Every row is locked to the same height — no stretching */
          grid-auto-rows: 192px;
        }
        .menu-item-card {
          display: flex;
          flex-direction: row;
          overflow: hidden;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
          /* Hard lock — every card is exactly this tall */
          height: 192px;
        }
        .menu-item-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--glass-shadow);
        }

        /* Image — fills card height exactly, no min-height that could push things */
        .menu-item-img-wrap {
          width: 38%;
          height: 100%;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }
        .menu-item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
          display: block;
        }
        .menu-item-card:hover .menu-item-img {
          transform: scale(1.07);
        }
        .veg-dot-badge {
          position: absolute;
          top: 0.6rem;
          left: 0.6rem;
          width: 18px;
          height: 18px;
          border: 2px solid #24963f;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
        }
        .veg-dot-badge span {
          width: 8px;
          height: 8px;
          background: #24963f;
          border-radius: 50%;
          display: block;
        }

        /* Content */
        .menu-item-content {
          flex: 1;
          padding: 1.25rem 1.4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .menu-item-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-heading);
          font-family: var(--font-sans);
          line-height: 1.3;
        }
        .menu-item-price {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-color);
          font-family: var(--font-serif);
          flex-shrink: 0;
        }
        .menu-item-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.55;
          font-weight: 300;
          flex: 1;
          margin: 0;
          /* Clamp to 2 lines — prevents long descriptions from making cards taller */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .menu-item-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
          margin-top: 0.85rem;
          font-size: 0.7rem;
          color: var(--text-muted);
        }
        .menu-order-link {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .menu-order-link:hover { text-decoration: underline; }

        /* Badges */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.2rem 0.5rem;
          border-radius: 20px;
        }
        .badge-spicy { color: #ff453a; background: rgba(255,69,58,0.1); }
        .badge-popular { color: var(--primary-color); background: var(--accent-glow); }

        @media (max-width: 900px) {
          .menu-items-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 180px;
          }
          .menu-item-card { height: 180px; }
        }
        @media (max-width: 580px) {
          .menu-items-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 160px;
          }
          .menu-item-card { height: 160px; }
          .menu-item-img-wrap { width: 40%; }
          .menu-item-content { padding: 0.85rem; }
          .menu-item-name { font-size: 0.88rem; }
        }
      `}</style>
    </section>
  );
}

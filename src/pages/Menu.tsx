import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Flame, Star, ChevronLeft, ChevronRight, Search, Sparkles } from 'lucide-react';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Compute all items with their category title
  const allItems = siteConfig.menu.flatMap(c => 
    c.items.map(item => ({ ...item, categoryTitle: c.title }))
  );

  const scrollTabs = (dir: 'left' | 'right') => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
    }
  };

  // Filter items based on activeCategory and searchQuery
  const filteredItems = (activeCategory === 'all' 
    ? allItems 
    : (siteConfig.menu.find(c => c.id === activeCategory)?.items.map(item => ({
        ...item,
        categoryTitle: siteConfig.menu.find(c => c.id === activeCategory)?.title || ''
      })) || [])
  ).filter(item => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return item.name.toLowerCase().includes(query) || 
           item.description.toLowerCase().includes(query) ||
           item.categoryTitle.toLowerCase().includes(query);
  });

  return (
    <section style={{ padding: '8rem 2rem 6rem 2rem', backgroundColor: 'var(--bg-color)', minHeight: '90vh' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-title-sub">Gourmet Selection</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', color: 'var(--text-heading)' }}>
            Our Menu ({allItems.length} Dishes)
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Explore our extensive culinary collection — authentic Wazwan delicacies, crunchy momos, continental sizzlers, fragrant biryanis, and artisan coolers.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '520px', margin: '0 auto 2.5rem auto', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-color)' }} />
          <input
            type="text"
            placeholder="Search our 50+ dishes (e.g. momos, sizzler, rista, biryani)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 1.25rem 0.85rem 3rem',
              borderRadius: '30px',
              border: '1px solid var(--border-color)',
              background: 'var(--surface-color)',
              color: 'var(--text-color)',
              fontSize: '0.92rem',
              fontFamily: "'Outfit', sans-serif",
              outline: 'none',
              boxSizing: 'border-box',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        {/* Horizontal Scroll Category Tabs */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          {/* Left Arrow */}
          <button onClick={() => scrollTabs('left')} className="tab-arrow tab-arrow-left" aria-label="Scroll left">
            <ChevronLeft size={18} />
          </button>

          {/* Scrollable Pills */}
          <div ref={tabsRef} className="category-tabs-scroll">
            {/* "All Items" tab */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`category-pill ${activeCategory === 'all' ? 'category-pill-active' : ''}`}
            >
              All Items ({allItems.length})
            </button>

            {/* Individual categories */}
            {siteConfig.menu.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`category-pill ${activeCategory === category.id ? 'category-pill-active' : ''}`}
              >
                {category.title} ({category.items.length})
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={() => scrollTabs('right')} className="tab-arrow tab-arrow-right" aria-label="Scroll right">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Showing Items Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Showing <strong style={{ color: 'var(--primary-color)' }}>{filteredItems.length}</strong> items {activeCategory !== 'all' && `in ${siteConfig.menu.find(c => c.id === activeCategory)?.title}`}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ background: 'transparent', border: 'none', color: 'var(--primary-color)', fontSize: '0.82rem', cursor: 'pointer', fontWeight: 600 }}
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Menu Items Grid — Card with image left, content right */}
        <div className="menu-items-grid">
          {filteredItems.map((item) => (
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
                  {item.categoryTitle && activeCategory === 'all' && (
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)', background: 'var(--accent-glow)', padding: '2px 8px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                      {item.categoryTitle}
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

        {filteredItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>No dishes found matching "{searchQuery}".</p>
            <button onClick={() => setSearchQuery('')} className="btn btn-primary" style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
              View All Dishes
            </button>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '3.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          * All dishes are prepared 100% Halal using fresh ingredients. Prices are exclusive of local taxes.
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

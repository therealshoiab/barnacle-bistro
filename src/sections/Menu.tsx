import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Flame, Star } from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(siteConfig.menu[0]?.id || 'starters');

  const activeCategoryData = siteConfig.menu.find(
    (category) => category.id === activeCategory
  );

  return (
    <section id="menu" className="section bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="section-header reveal-up">
          <span className="section-title-sub">Gourmet Selection</span>
          <h2 className="section-title text-3xl md:text-4xl">Our Menu</h2>
          <p className="section-desc">
            Explore our curated culinary collection, featuring authentic Wazwan delicacies, crispy momos, and fresh local brews.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="reveal-up flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {siteConfig.menu.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[var(--accent)] text-[#121317] shadow-lg shadow-[rgba(var(--accent-rgb),0.2)]'
                  : 'glass-panel text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-glass)]'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="reveal-up grid grid-2 gap-6 min-h-[400px]">
          {activeCategoryData?.items.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 border-[var(--border-glass)] flex flex-col justify-between gap-4 glass-panel-hover"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start gap-4">
                  {/* Name and Indicators */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold font-sans tracking-wide">
                        {item.name}
                      </h3>
                      
                      {/* Indicators */}
                      {item.isVeg && (
                        <span className="w-4 h-4 border border-green-600 flex items-center justify-center p-[2px] rounded-sm shrink-0" title="Vegetarian">
                          <span className="w-2 h-2 bg-green-600 rounded-full" />
                        </span>
                      )}
                      
                      {item.isSpicy && (
                        <span className="flex items-center gap-0.5 text-xs text-red-500 font-semibold uppercase shrink-0" title="Spicy">
                          <Flame size={12} fill="currentColor" />
                          <span className="text-[9px] tracking-wide">Spicy</span>
                        </span>
                      )}

                      {item.isPopular && (
                        <span className="flex items-center gap-0.5 text-xs text-[var(--accent)] font-semibold uppercase shrink-0" title="Popular">
                          <Star size={12} fill="currentColor" />
                          <span className="text-[9px] tracking-wide">Popular</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <span className="text-lg font-bold font-serif text-[var(--accent)] shrink-0">
                    ₹{item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Order Teaser Action */}
              <div className="flex items-center justify-between text-xs mt-2 border-t border-[var(--border-glass)] pt-3 text-[var(--text-muted)]">
                <span>Dine-In • Takeaway • Delivery</span>
                <a
                  href="#order"
                  className="text-[var(--accent)] hover:underline font-semibold uppercase tracking-wider text-[10px]"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Note */}
        <div className="text-center mt-12 text-xs text-[var(--text-muted)] reveal-up">
          <p>* Prices are exclusive of local taxes. Real menu items & pricing configuration is loaded from <code className="glass-panel px-2 py-0.5 rounded text-[var(--accent)]">src/data/siteConfig.ts</code>.</p>
        </div>

      </div>
    </section>
  );
};

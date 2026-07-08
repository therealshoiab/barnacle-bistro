import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, ShoppingBag } from 'lucide-react';

export const Signatures: React.FC = () => {
  return (
    <section id="signatures" className="section bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="section-header reveal-up">
          <span className="section-title-sub">Bistro Exclusives</span>
          <h2 className="section-title text-3xl md:text-4xl">Signature Showcase</h2>
          <p className="section-desc">
            Indulge in our most celebrated creations. Hand-crafted, locally sourced, and designed to inspire your palate.
          </p>
        </div>

        {/* Signatures Grid */}
        <div className="reveal-up grid grid-2 gap-8 mt-12">
          {siteConfig.signatures.map((dish) => (
            <div
              key={dish.id}
              className="glass-panel overflow-hidden border-[var(--border-glass)] flex flex-col md:flex-row glass-panel-hover"
            >
              
              {/* Image Container with Hover Zoom */}
              <div className="w-full md:w-[40%] h-[200px] md:h-auto relative overflow-hidden shrink-0">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Tag Badge */}
                <span className="absolute top-4 left-4 bg-[var(--accent)] text-[#121317] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                  <Sparkles size={10} />
                  {dish.tag}
                </span>
              </div>

              {/* Dish Content */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-bold font-serif text-white tracking-wide">
                      {dish.name}
                    </h3>
                    <span className="text-xl font-bold font-serif text-[var(--accent)]">
                      ₹{dish.price}
                    </span>
                  </div>
                  
                  <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[var(--border-glass)] pt-4 mt-auto">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-medium">
                    Signature Culinary Art
                  </span>
                  
                  <a
                    href="#order"
                    className="flex items-center gap-1.5 text-xs text-[var(--accent)] font-semibold uppercase tracking-wider hover:underline"
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
    </section>
  );
};

import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ShieldCheck, Flame, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="section-header reveal-up">
          <span className="section-title-sub">Our Story</span>
          <h2 className="section-title text-3xl md:text-4xl">About Barnacle Bistro</h2>
          <p className="section-desc">
            Discover Srinagar’s finest culinary journey, blending local tradition with global standards.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-2 items-center gap-12 mt-12">
          
          {/* Story Text */}
          <div className="reveal-up flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-serif text-[var(--accent)] font-semibold leading-snug">
              Redefining Casual Gourmet Dining in Jammu & Kashmir
            </h3>
            
            <p className="text-[var(--text-secondary)] font-light leading-relaxed">
              {siteConfig.brand.aboutLong}
            </p>

            <p className="text-[var(--text-secondary)] font-light leading-relaxed">
              {siteConfig.brand.ambianceNote}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-3 gap-4 mt-4">
              
              <div className="glass-panel p-4 flex flex-col items-center text-center gap-2 border-[var(--border-glass)]">
                <div className="p-2 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                  <Flame size={20} />
                </div>
                <h4 className="text-sm font-semibold">Wazwan Heritage</h4>
                <p className="text-[10px] text-[var(--text-muted)]">Authentic recipes passed down through generations</p>
              </div>

              <div className="glass-panel p-4 flex flex-col items-center text-center gap-2 border-[var(--border-glass)]">
                <div className="p-2 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-sm font-semibold">100% Fresh</h4>
                <p className="text-[10px] text-[var(--text-muted)]">Sourced from the fresh fields of the Valley</p>
              </div>

              <div className="glass-panel p-4 flex flex-col items-center text-center gap-2 border-[var(--border-glass)]">
                <div className="p-2 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                  <Heart size={20} />
                </div>
                <h4 className="text-sm font-semibold">Cozy Ambiance</h4>
                <p className="text-[10px] text-[var(--text-muted)]">Warmest meeting spot in Srinagar’s chill</p>
              </div>

            </div>
          </div>

          {/* Visual Grid */}
          <div className="reveal-up grid grid-2 gap-4 h-[350px] md:h-[450px]">
            <div
              className="glass-panel rounded-2xl bg-cover bg-center border-[var(--border-glass)] h-full"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800")',
              }}
            />
            <div className="flex flex-col gap-4 h-full">
              <div
                className="glass-panel rounded-2xl bg-cover bg-center border-[var(--border-glass)] flex-1"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800")',
                }}
              />
              <div
                className="glass-panel rounded-2xl bg-cover bg-center border-[var(--border-glass)] flex-1"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800")',
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

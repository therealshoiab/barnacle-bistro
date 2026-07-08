import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="section bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="section-header reveal-up">
          <span className="section-title-sub">Client Stories</span>
          <h2 className="section-title text-3xl md:text-4xl">Guest Testimonials</h2>
          <p className="section-desc">
            Here is what our guests from around the valley and beyond have to say about their dining experiences at Barnacle Bistro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="reveal-up grid grid-2 gap-8 mt-12">
          {siteConfig.reviews.map((review) => (
            <div
              key={review.id}
              className="glass-panel p-8 border-[var(--border-glass)] relative flex flex-col justify-between gap-6 glass-panel-hover"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-4 right-6 text-[var(--accent-muted)] pointer-events-none opacity-20">
                <Quote size={60} fill="currentColor" />
              </div>

              {/* Review Text */}
              <p className="text-base text-[var(--text-primary)] font-light italic leading-relaxed relative z-10">
                "{review.text}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between border-t border-[var(--border-glass)] pt-4 relative z-10">
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover border border-[var(--accent)]"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{review.author}</h4>
                    <p className="text-[10px] text-[var(--text-muted)]">{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-[var(--accent)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      fill={index < review.rating ? 'currentColor' : 'none'}
                      className={index < review.rating ? '' : 'text-[var(--text-muted)]'}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

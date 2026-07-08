import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>(siteConfig.faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="section-header reveal-up">
          <span className="section-title-sub">Got Questions?</span>
          <h2 className="section-title text-3xl md:text-4xl">Frequently Asked Questions</h2>
          <p className="section-desc">
            All the key operational, dining, and delivery details of Barnacle Bistro clarified in one place.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="reveal-up max-w-3xl mx-auto flex flex-col gap-4 mt-12">
          {siteConfig.faqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel border-[var(--border-glass)] overflow-hidden transition-all duration-300"
              >
                {/* Header (Question) */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-sans text-base font-semibold hover:text-[var(--accent)] transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[var(--accent)] shrink-0" />
                    <span className="text-white font-medium">{faq.question}</span>
                  </div>
                  
                  <ChevronDown
                    size={18}
                    className={`text-[var(--text-secondary)] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[var(--accent)]' : ''
                    }`}
                  />
                </button>

                {/* Body (Answer) */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-[var(--border-glass)] opacity-100 py-5 px-6' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

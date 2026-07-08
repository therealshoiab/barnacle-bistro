import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<string | null>(siteConfig.faqs[0]?.id || null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

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
          <span className="section-title-sub">Got Questions?</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            All the key operational, dining, and delivery details of Barnacle Bistro clarified in one place.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div style={{ maxWidth: '750px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '3rem' }}>
          {siteConfig.faqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel"
                style={{
                  background: 'var(--glass-bg)',
                  border: isOpen ? '1px solid var(--primary-color)' : '1px solid var(--glass-border)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? 'var(--glass-shadow)' : 'none'
                }}
              >
                {/* Header (Question) */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontFamily: 'var(--font-sans)'
                  }}
                  className="faq-toggle-btn"
                  aria-expanded={isOpen}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} style={{ color: isOpen ? 'var(--primary-color)' : 'var(--text-muted)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: '1rem' }}>{faq.question}</span>
                  </div>
                  
                  <ChevronDown
                    size={18}
                    style={{
                      color: isOpen ? 'var(--primary-color)' : 'var(--text-muted)',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>

                {/* Body (Answer) */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    borderTop: isOpen ? '1px solid var(--border-color)' : 'none'
                  }}
                >
                  <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--surface-color)' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-color)', fontWeight: 300, lineHeight: '1.6' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .faq-toggle-btn:hover span {
          color: var(--primary-color) !important;
        }
      `}</style>
    </section>
  );
}

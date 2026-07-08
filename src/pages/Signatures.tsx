import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function Signatures() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section style={{ padding: '8rem 2rem 6rem 2rem', backgroundColor: 'var(--bg-color)', minHeight: '90vh' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-title-sub">Bistro Exclusives</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
            Signature Showcase
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Indulge in our most celebrated creations — hand-crafted, locally sourced, and designed to inspire your palate.
          </p>
        </div>

        {/* Uniform 2-column grid — every card is identical height */}
        <div className="sig-grid">
          {siteConfig.signatures.map((dish) => (
            <div key={dish.id} className="sig-card glass-panel">

              {/* Left: fixed-size image */}
              <div className="sig-img-wrap">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="sig-img"
                  loading="lazy"
                />
                <span className="sig-badge">
                  <Sparkles size={10} />
                  {dish.tag}
                </span>
              </div>

              {/* Right: info */}
              <div className="sig-body">
                <div>
                  <p className="sig-sub">Signature Culinary Art</p>
                  <h3 className="sig-name">{dish.name}</h3>
                  <p className="sig-price">₹{dish.price}</p>
                  <p className="sig-desc">{dish.description}</p>
                </div>

                <a href="#/order" className="sig-order-btn">
                  <ShoppingBag size={14} />
                  Order Now
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Signature Grid — strict uniform height ── */
        .sig-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.75rem;
          margin-top: 2rem;
          /* All rows the same height — driven by the tallest card only */
          grid-auto-rows: 1fr;
          align-items: stretch;
        }

        /* Card */
        .sig-card {
          display: flex;
          flex-direction: row;
          overflow: hidden;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          /* Force every card to fill its row fully */
          height: 100%;
        }
        .sig-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-hover);
          box-shadow: var(--glass-shadow);
        }

        /* Image — fixed width, stretches full height of card */
        .sig-img-wrap {
          width: 200px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }
        .sig-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
          display: block;
        }
        .sig-card:hover .sig-img { transform: scale(1.08); }

        /* Badge over image */
        .sig-badge {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          background: var(--primary-color);
          color: #000;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          box-shadow: 0 4px 12px rgba(212,175,55,0.3);
          white-space: nowrap;
        }

        /* Text body */
        .sig-body {
          flex: 1;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
        }
        .sig-sub {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
          font-weight: 600;
        }
        .sig-name {
          font-size: 1.15rem;
          font-weight: 600;
          font-family: "'Playfair Display', serif";
          color: var(--text-heading);
          line-height: 1.3;
          margin-bottom: 0.3rem;
        }
        .sig-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary-color);
          font-family: var(--font-serif);
          margin-bottom: 0.6rem;
        }
        .sig-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 300;
          line-height: 1.6;
          margin: 0;
        }

        /* Order Button */
        .sig-order-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--primary-color);
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-top: 1px solid var(--border-color);
          padding-top: 0.85rem;
          transition: color 0.2s;
        }
        .sig-order-btn:hover { color: var(--primary-hover); text-decoration: underline; }

        @media (max-width: 991px) {
          .sig-grid { grid-template-columns: 1fr; }
          .sig-img-wrap { width: 180px; }
        }
        @media (max-width: 580px) {
          .sig-card { flex-direction: column; }
          .sig-img-wrap { width: 100%; height: 200px; }
        }
      `}</style>
    </section>
  );
}

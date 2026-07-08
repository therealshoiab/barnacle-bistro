import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Phone, MessageSquare, ShieldCheck, MapPin, CalendarDays, Bike } from 'lucide-react';

export default function OrderOnline() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const whatsappNumber = siteConfig.contact.whatsappNumber;
  const directOrderMessage = encodeURIComponent(
    "Hi Barnacle Bistro, I would like to place an order for delivery/takeaway. Could you please share the active daily menu specials?"
  );
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${directOrderMessage}`;

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
          <span className="section-title-sub">Instant Delivery</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
            Order Online
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Get your favorite bistro meals delivered hot and fresh directly to your doorstep in Srinagar, or pick it up yourself.
          </p>
        </div>

        <div className="order-grid">
          
          {/* Left: Food Delivery Partners */}
          <div className="glass-panel order-card-full">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="order-badge">
                Partner Delivery
              </span>
              <h3 style={{ fontSize: '1.6rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>
                Order via Delivery Apps
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.6' }}>
                We are partnered with Srinagar’s leading food delivery services to bring Barnacle Bistro right to your dining room. Click below to open our listings.
              </p>
            </div>

            <div className="order-btn-row">
              {/* Zomato Button */}
              <a
                href={siteConfig.delivery.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="btn order-app-btn"
                style={{
                  background: '#E23744',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 15px rgba(226, 55, 68, 0.3)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.6 15.6c-.773 0-1.4-.627-1.4-1.4s.627-1.4 1.4-1.4 1.4.627 1.4 1.4-.627 1.4-1.4 1.4zm0-5.2c-.773 0-1.4-.627-1.4-1.4s.627-1.4 1.4-1.4 1.4.627 1.4 1.4-.627 1.4-1.4 1.4zm3.6 5.2c-.773 0-1.4-.627-1.4-1.4s.627-1.4 1.4-1.4 1.4.627 1.4 1.4-.627 1.4-1.4 1.4zm0-5.2c-.773 0-1.4-.627-1.4-1.4s.627-1.4 1.4-1.4 1.4.627 1.4 1.4-.627 1.4-1.4 1.4zm3.6 5.2c-.773 0-1.4-.627-1.4-1.4s.627-1.4 1.4-1.4 1.4.627 1.4 1.4-.627 1.4-1.4 1.4zm0-5.2c-.773 0-1.4-.627-1.4-1.4s.627-1.4 1.4-1.4 1.4.627 1.4 1.4-.627 1.4-1.4 1.4zm-1.8-4.4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
                </svg>
                <span>Order on Zomato</span>
              </a>

              {/* Swiggy Button */}
              <a
                href={siteConfig.delivery.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn order-app-btn"
                style={{
                  background: '#FC8019',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 15px rgba(252, 128, 25, 0.3)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 18.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-2-5.5v-3h2v3h-2zm-3-1v-2h2v2h-2zm6 0v-2h2v2h-2zm-3-7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
                </svg>
                <span>Order on Swiggy</span>
              </a>
            </div>
          </div>

          {/* Right: Direct Ordering & Inquiries */}
          <div className="glass-panel order-card-full">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="order-badge">
                Direct Bistro Channels
              </span>
              <h3 style={{ fontSize: '1.6rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>
                Direct Ordering & Call
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.6' }}>
                Order directly from our kitchen desk for self-takeaways or priority local delivery. Connect with us on WhatsApp or call our desk directly.
              </p>
            </div>

            <div className="order-btn-row">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn order-app-btn"
                style={{
                  background: '#25D366',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageSquare size={18} />
                <span>WhatsApp Order</span>
              </a>

              {/* Call Button */}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="btn btn-secondary order-app-btn"
              >
                <Phone size={18} style={{ color: 'var(--primary-color)' }} />
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

        </div>

        {/* Dine-In / Takeaway Details cards */}
        <div className="order-details-grid">
          
          <div className="glass-panel detail-teaser-card">
            <div className="detail-teaser-icon">
              <MapPin size={20} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-heading)' }}>Fine Dine-In</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.5' }}>
              Experience upscale dining in our cozy, premium Srinagar-inspired bistro environment.
            </p>
          </div>

          <div className="glass-panel detail-teaser-card">
            <div className="detail-teaser-icon">
              <Bike size={20} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-heading)' }}>Contactless Takeaway</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.5' }}>
              Pre-order via WhatsApp and have your fresh meals packaged and ready when you arrive.
            </p>
          </div>

          <div className="glass-panel detail-teaser-card">
            <div className="detail-teaser-icon">
              <ShieldCheck size={20} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-heading)' }}>Drive-Through Pickup</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.5' }}>
              Call us when you pull up to Gulshanabad Hyderpora, and we will hand over your order to your car.
            </p>
          </div>

          <div className="glass-panel detail-teaser-card">
            <div className="detail-teaser-icon">
              <CalendarDays size={20} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-heading)' }}>Table Reservations</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.5' }}>
              Planning an evening out? Reserve your spot in advance using our simple WhatsApp reservation form.
            </p>
          </div>

        </div>

      </div>

      <style>{`
        .order-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-top: 3rem;
        }
        .order-card-full {
          padding: 2.5rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
        }
        .order-card-full:hover {
          border-color: var(--border-hover);
          box-shadow: var(--glass-shadow);
        }
        .order-badge {
          font-size: 10px;
          background: var(--accent-glow);
          color: var(--primary-color);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
          width: fit-content;
        }
        .order-btn-row {
          display: flex;
          gap: 1rem;
        }
        .order-app-btn {
          flex: 1;
          gap: 0.5rem;
          padding: 0.95rem 1rem;
          font-size: 0.85rem;
        }
        .order-app-btn:hover {
          transform: translateY(-2px);
        }
        .order-details-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
        }
        .detail-teaser-card {
          padding: 1.75rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .detail-teaser-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
        }
        .detail-teaser-icon {
          padding: 0.65rem;
          border-radius: 50%;
          background: var(--accent-glow);
          color: var(--primary-color);
          align-self: flex-start;
          display: inline-flex;
        }
        @media (max-width: 991px) {
          .order-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .order-details-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }
        }
        @media (max-width: 580px) {
          .order-btn-row {
            flex-direction: column;
            gap: 0.75rem;
          }
          .order-details-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

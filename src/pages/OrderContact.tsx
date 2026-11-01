import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { 
  MapPin, Phone, Clock, Send, ExternalLink, 
  MessageSquare, ShieldCheck, Bike, Check, Copy 
} from 'lucide-react';

export default function OrderContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Structure message for WhatsApp reservation
    const whatsappMessage = `*Table Reservation Request — Barnacle Bistro*
• Guest Name: ${formData.name}
• Contact Number: ${formData.phone || 'Provided via WhatsApp'}
• Date: ${formData.date}
• Time: ${formData.time}
• Party Size: ${formData.guests} Guests
${formData.message ? `• Special Requests: ${formData.message}` : ''}

Please confirm table availability for us. Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleDirectOrder = () => {
    const directOrderMessage = encodeURIComponent(
      "Hello Barnacle Bistro! I would like to place an order for delivery/takeaway. Could you please share today's menu specials?"
    );
    window.open(`https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${directOrderMessage}`, '_blank');
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.contact.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
          <span className="section-title-sub">Delivery & Dine-In</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontFamily: "'Playfair Display', serif", marginBottom: '1rem', color: 'var(--text-heading)' }}>
            Order Online & Table Reservations
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Enjoy our gourmet continental grills and artisan momos delivered right to your doorstep in Srinagar, or book your table at Barnacle Bistro in Gulshanabad, Hyderpora.
          </p>
        </div>

        {/* 1. INSTANT ORDERING & DELIVERY PARTNERS GRID */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.6rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)' }}>
              Order for Home Delivery & Takeaway
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Select your preferred ordering channel below for quick processing.
            </p>
          </div>

          <div className="order-channels-grid">
            
            {/* Zomato Card */}
            <div className="glass-panel order-channel-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#E23744', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800 }}>
                  Z
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', fontWeight: 700 }}>Zomato Delivery</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Live menu & fast delivery</p>
                </div>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1, margin: '0.5rem 0 1rem 0' }}>
                Order directly through our verified Zomato restaurant listing with real-time live order tracking.
              </p>
              <a
                href={siteConfig.delivery.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="btn order-btn-aligned"
                style={{
                  background: '#E23744',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  height: '48px',
                  borderRadius: '24px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 15px rgba(226, 55, 68, 0.35)'
                }}
              >
                <span>Order on Zomato</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Swiggy Card */}
            <div className="glass-panel order-channel-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FC8019', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800 }}>
                  S
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', fontWeight: 700 }}>Swiggy Food</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Doorstep food service</p>
                </div>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1, margin: '0.5rem 0 1rem 0' }}>
                Find Barnacle Bistro on Swiggy for quick deliveries across Chanapora, Hyderpora & Srinagar.
              </p>
              <a
                href={siteConfig.delivery.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn order-btn-aligned"
                style={{
                  background: '#FC8019',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  height: '48px',
                  borderRadius: '24px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 15px rgba(252, 128, 25, 0.35)'
                }}
              >
                <span>Order on Swiggy</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Direct WhatsApp Order Card */}
            <div className="glass-panel order-channel-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <MessageSquare size={22} fill="currentColor" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', fontWeight: 700 }}>WhatsApp Direct</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quick chat ordering</p>
                </div>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1, margin: '0.5rem 0 1rem 0' }}>
                Message our order desk directly on WhatsApp to customize dishes, order takeaway, or ask for daily specials.
              </p>
              <button
                onClick={handleDirectOrder}
                className="btn order-btn-aligned"
                style={{
                  background: '#25D366',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  height: '48px',
                  borderRadius: '24px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)'
                }}
              >
                <span>Order via WhatsApp</span>
                <Send size={15} />
              </button>
            </div>

            {/* Direct Call Card */}
            <div className="glass-panel order-channel-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', fontWeight: 700 }}>Direct Call</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Instant assistance</p>
                </div>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1, margin: '0.5rem 0 1rem 0' }}>
                Speak directly with our bistro desk in Hyderpora for orders, party inquiries, or directions.
              </p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="btn btn-primary order-btn-aligned"
                style={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  height: '48px',
                  borderRadius: '24px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.35)'
                }}
              >
                <span>Call Restaurant</span>
                <Phone size={15} />
              </a>
            </div>

          </div>

          {/* Quick Guarantees Strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              <Bike size={18} style={{ color: 'var(--primary-color)' }} />
              <span>30–45 Mins Average Delivery</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              <ShieldCheck size={18} style={{ color: 'var(--primary-color)' }} />
              <span>100% Halal & Hygienic Packaging</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              <Clock size={18} style={{ color: 'var(--primary-color)' }} />
              <span>11:30 AM – 11:00 PM Service</span>
            </div>
          </div>
        </div>

        {/* 2. TABLE RESERVATION FORM & LOCATION GRID */}
        <div className="reservation-location-grid">
          
          {/* Left: Table Reservation Form */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span className="section-title-sub">Book Your Seat</span>
              <h3 style={{ fontSize: '1.8rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                Table Reservation
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Planning a dinner with family or friends? Reserve your spot in advance via our WhatsApp reservation desk.
              </p>
            </div>

            <form onSubmit={handleReservationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sameer Wani"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. 9906387311"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                    Party Size *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="contact-input"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Couple / Friends)</option>
                    <option value="4">3–4 People (Small Family)</option>
                    <option value="6">5–6 People (Family / Group)</option>
                    <option value="8+">8+ People (Large Gathering / Party)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                    Reservation Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                    Reservation Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                  Special Notes or Dietary Preferences
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="e.g. Window booth seating preferred, celebrating birthday, etc."
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  marginTop: '0.5rem',
                  padding: '1rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem'
                }}
              >
                <span>Confirm Reservation via WhatsApp</span>
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Right: Location, Timings & Google Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            
            {/* Info Cards Panel */}
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--accent-glow)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
                    Restaurant Address
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                    {siteConfig.contact.address}
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--primary-color)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      marginTop: '0.4rem',
                      padding: 0
                    }}
                  >
                    {copied ? <Check size={14} style={{ color: '#24963f' }} /> : <Copy size={14} />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--accent-glow)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
                    Operating Hours
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {siteConfig.contact.hours} (Open All 7 Days)
                  </p>
                  <span style={{ fontSize: '0.72rem', color: '#24963f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    ● Dine-In • Takeaway • Delivery
                  </span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--accent-glow)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
                    Direct Contact
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    Primary: <a href="tel:+919906387311" style={{ color: 'var(--text-heading)', fontWeight: 600 }}>+91 9906387311</a>
                    <br />
                    WhatsApp Desk: <a href="tel:+917780938743" style={{ color: 'var(--text-heading)', fontWeight: 600 }}>+91 7780938743</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="glass-panel" style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                <iframe
                  title="Barnacle Bistro Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.578643862211!2d74.7769480763435!3d34.046082473158914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e191629edf7fb9%3A0xcd6a8651f34f9bfb!2sBarnacle%20Bistro!5e0!3m2!1sen!2sin!4v1719912000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'var(--surface-color)', borderTop: '1px solid var(--border-color)' }}>
                <div>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    Gulshanabad, Hyderpora
                  </span>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Near Main Bypass Highway</p>
                </div>
                <a
                  href="https://www.google.com/maps/place/Barnacle+Bistro/@34.0460824,74.779523,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Get Directions</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`
        .order-channels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          align-items: stretch;
        }
        .order-channel-card {
          padding: 2rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          height: 100%;
          box-sizing: border-box;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .order-channel-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
        }
        .order-btn-aligned {
          width: 100%;
          height: 48px;
          border-radius: 24px;
          box-sizing: border-box;
          white-space: nowrap;
          margin-top: auto;
        }
        .reservation-location-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2.5rem;
        }
        .contact-input {
          width: 100%;
          padding: 0.85rem 1rem;
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-color);
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }
        .contact-input:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
        @media (max-width: 900px) {
          .reservation-location-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

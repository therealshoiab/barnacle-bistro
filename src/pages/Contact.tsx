import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Phone, Clock, Mail, Send, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Structure message for WhatsApp
    const whatsappMessage = `Hello Barnacle Bistro! I would like to make a table reservation:
• Name: ${formData.name}
• Date: ${formData.date}
• Time: ${formData.time}
• Party Size: ${formData.guests} guests
${formData.message ? `• Special Requests: ${formData.message}` : ''}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
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
          <span className="section-title-sub">Visit & Reserve</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
            Get In Touch
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Find us in Gulshanabad Hyderpora or book a premium table reservation instantly via WhatsApp.
          </p>
        </div>

        {/* Content Layout */}
        <div className="contact-grid">
          
          {/* Left: Contact Info & Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Info Cards */}
            <div className="glass-panel contact-info-cards">
              
              <div className="contact-info-item">
                <MapPin size={24} className="contact-info-icon" style={{ color: 'var(--primary-color)' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)' }}>Location</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: '1.5' }}>
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <Phone size={24} className="contact-info-icon" style={{ color: 'var(--primary-color)' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)' }}>Call Us</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <a href={`tel:${siteConfig.contact.phone}`} className="contact-link-hover">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <Clock size={24} className="contact-info-icon" style={{ color: 'var(--primary-color)' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)' }}>Hours</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <Mail size={24} className="contact-info-icon" style={{ color: 'var(--primary-color)' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)' }}>Email</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <a href={`mailto:${siteConfig.contact.email}`} className="contact-link-hover">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="glass-panel" style={{ overflow: 'hidden', border: '1px solid var(--glass-border)', borderRadius: '24px', display: 'flex', flexDirection: 'column' }}>
              <iframe
                title="Barnacle Bistro Location Map"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              />
              <div 
                style={{ 
                  padding: '1rem', 
                  backgroundColor: 'var(--surface-color)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  borderTop: '1px solid var(--border-color)' 
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Gulshanabad, Hyderpora Bypass, Srinagar
                </span>
                
                <a
                  href={siteConfig.contact.googleMapsDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--primary-color)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '0.7rem'
                  }}
                  className="map-dir-link"
                >
                  Get Directions
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Right: WhatsApp-powered Reservation Form */}
          <div className="glass-panel reservation-form-card">
            <h3 style={{ fontSize: '1.6rem', fontFamily: "'Playfair Display', serif", color: 'var(--text-heading)', marginBottom: '1.5rem' }}>
              Reserve A Table
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="name" style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="form-input"
                />
              </div>

              <div className="reservation-row-grid">
                
                {/* Date */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="date" style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                {/* Time */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="time" style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

              </div>

              {/* Guests Count */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="guests" style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input"
                  style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23d1d1d6\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="10">10+ Guests</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                  Special Requests / Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any food allergies, celebrations, or seating preferences?"
                  className="form-input"
                  style={{ resize: 'none' }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  marginTop: '0.75rem',
                  gap: '0.5rem',
                  padding: '0.95rem 1rem',
                  borderRadius: '12px'
                }}
              >
                <Send size={16} />
                Send Inquiry to WhatsApp
              </button>

            </form>
          </div>

        </div>

      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .contact-info-cards {
          padding: 2rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .contact-info-item {
          display: flex;
          gap: 1rem;
        }
        .contact-info-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .contact-link-hover:hover {
          color: var(--primary-color) !important;
        }
        .map-iframe {
          opacity: 0.9;
        }
        body.dark-theme .map-iframe {
          filter: grayscale(30%) contrast(110%) invert(90%) hue-rotate(180deg);
        }
        .map-dir-link:hover {
          color: var(--primary-hover) !important;
          text-decoration: underline;
        }
        .reservation-form-card {
          padding: 2.5rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }
        .form-input {
          width: 100%;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          color: var(--text-heading);
          font-family: var(--font-sans);
          transition: border-color var(--transition-fast);
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        .reservation-row-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 580px) {
          .contact-info-cards {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .reservation-row-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .reservation-form-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}

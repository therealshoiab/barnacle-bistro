import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Phone, Clock, Mail, Send, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

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
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="section-header reveal-up">
          <span className="section-title-sub">Visit & Reserve</span>
          <h2 className="section-title text-3xl md:text-4xl">Get In Touch</h2>
          <p className="section-desc">
            Find us in Gulshanabad Hyderpora or book a premium table reservation instantly via WhatsApp.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-2 gap-12 mt-12 items-start">
          
          {/* Left: Contact Info & Map */}
          <div className="flex flex-col gap-8 reveal-up">
            
            {/* Info Cards */}
            <div className="glass-panel p-6 border-[var(--border-glass)] grid grid-2 gap-6">
              
              <div className="flex gap-4">
                <MapPin size={24} className="text-[var(--accent)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Location</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-light leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={24} className="text-[var(--accent)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Call Us</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-light">
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[var(--accent)] transition-colors">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={24} className="text-[var(--accent)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Hours</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-light">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} className="text-[var(--accent)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Email</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-light">
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--accent)] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="glass-panel overflow-hidden border-[var(--border-glass)] rounded-2xl relative">
              <iframe
                title="Barnacle Bistro Location Map"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 grayscale-[20%] contrast-[110%]"
              />
              <div className="p-4 bg-[var(--surface-glass)] flex items-center justify-between border-t border-[var(--border-glass)]">
                <span className="text-xs text-[var(--text-secondary)] font-light">
                  Gulshanabad, Hyderpora Bypass, Srinagar
                </span>
                
                <a
                  href={siteConfig.contact.googleMapsDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[var(--accent)] font-semibold uppercase tracking-wider hover:underline"
                >
                  Get Directions
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Right: WhatsApp-powered Reservation Form */}
          <div className="glass-panel p-8 border-[var(--border-glass)] reveal-up">
            <h3 className="text-2xl font-serif text-white font-semibold mb-6">
              Reserve A Table
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
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
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-glass)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[var(--accent)] transition-all font-light"
                />
              </div>

              <div className="grid grid-2 gap-4">
                
                {/* Date */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date" className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-glass)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[var(--accent)] transition-all font-light"
                  />
                </div>

                {/* Time */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="time" className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-glass)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[var(--accent)] transition-all font-light"
                  />
                </div>

              </div>

              {/* Guests Count */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="guests" className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-glass)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[var(--accent)] transition-all font-light"
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
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                  Special Requests / Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any food allergies, celebrations, or seating preferences?"
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-glass)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[var(--accent)] transition-all font-light resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary w-full justify-center py-3.5 mt-2 rounded-xl"
              >
                <Send size={16} />
                Send Inquiry to WhatsApp
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

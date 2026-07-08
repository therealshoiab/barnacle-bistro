import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Phone, MessageSquare, ShieldCheck, MapPin, CalendarDays, Bike } from 'lucide-react';

export const OrderOnline: React.FC = () => {
  const whatsappNumber = siteConfig.contact.whatsappNumber;
  const directOrderMessage = encodeURIComponent(
    "Hi Barnacle Bistro, I would like to place an order for delivery/takeaway. Could you please share the active daily menu specials?"
  );
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${directOrderMessage}`;

  return (
    <section id="order" className="section bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="section-header reveal-up">
          <span className="section-title-sub">Instant Delivery</span>
          <h2 className="section-title text-3xl md:text-4xl">Order Online</h2>
          <p className="section-desc">
            Get your favorite bistro meals delivered hot and fresh directly to your doorstep in Srinagar, or pick it up yourself.
          </p>
        </div>

        <div className="grid grid-2 gap-12 mt-12">
          
          {/* Left: Food Delivery Partners */}
          <div className="glass-panel p-8 border-[var(--border-glass)] flex flex-col justify-between gap-8 reveal-up">
            <div className="flex flex-col gap-4">
              <span className="text-xs bg-[var(--accent-muted)] text-[var(--accent)] font-bold uppercase tracking-wider px-3 py-1 rounded self-start">
                Partner Delivery
              </span>
              <h3 className="text-2xl font-serif text-white font-semibold">
                Order via Delivery Apps
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                We are partnered with Srinagar’s leading food delivery services to bring Barnacle Bistro right to your dining room. Click below to open our listings.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              
              {/* Zomato Button */}
              <a
                href={siteConfig.delivery.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg"
                style={{
                  background: '#E23744',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 15px rgba(226, 55, 68, 0.3)',
                }}
              >
                {/* Zomato Custom Logo SVG */}
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
                className="flex-1 py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg"
                style={{
                  background: '#FC8019',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 15px rgba(252, 128, 25, 0.3)',
                }}
              >
                {/* Swiggy Custom Logo SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 18.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-2-5.5v-3h2v3h-2zm-3-1v-2h2v2h-2zm6 0v-2h2v2h-2zm-3-7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
                </svg>
                <span>Order on Swiggy</span>
              </a>

            </div>
          </div>

          {/* Right: Direct Ordering & Inquiries */}
          <div className="glass-panel p-8 border-[var(--border-glass)] flex flex-col justify-between gap-8 reveal-up">
            <div className="flex flex-col gap-4">
              <span className="text-xs bg-[var(--accent-muted)] text-[var(--accent)] font-bold uppercase tracking-wider px-3 py-1 rounded self-start">
                Direct Bistro Channels
              </span>
              <h3 className="text-2xl font-serif text-white font-semibold">
                Direct Ordering & Call
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                Order directly from our kitchen desk for self-takeaways or priority local delivery. Connect with us on WhatsApp or call our desk directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg"
                style={{
                  background: '#25D366',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                }}
              >
                <MessageSquare size={18} />
                <span>WhatsApp Order</span>
              </a>

              {/* Call Button */}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex-1 py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg btn-secondary"
                style={{
                  border: '1px solid var(--border-glass)',
                }}
              >
                <Phone size={18} className="text-[var(--accent)]" />
                <span>Call Restaurant</span>
              </a>

            </div>
          </div>

        </div>

        {/* Dine-In / Takeaway Details cards */}
        <div className="reveal-up grid grid-4 gap-6 mt-12">
          
          <div className="glass-panel p-6 border-[var(--border-glass)] flex flex-col gap-3">
            <div className="p-3 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] self-start">
              <MapPin size={20} />
            </div>
            <h4 className="text-base font-semibold text-white">Fine Dine-In</h4>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              Experience upscale dining in our cozy, premium Srinagar-inspired bistro environment.
            </p>
          </div>

          <div className="glass-panel p-6 border-[var(--border-glass)] flex flex-col gap-3">
            <div className="p-3 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] self-start">
              <Bike size={20} />
            </div>
            <h4 className="text-base font-semibold text-white">Contactless Takeaway</h4>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              Pre-order via WhatsApp and have your fresh meals packaged and ready when you arrive.
            </p>
          </div>

          <div className="glass-panel p-6 border-[var(--border-glass)] flex flex-col gap-3">
            <div className="p-3 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] self-start">
              <ShieldCheck size={20} />
            </div>
            <h4 className="text-base font-semibold text-white">Drive-Through Pickup</h4>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              Call us when you pull up to Gulshanabad Hyderpora, and we will hand over your order to your car.
            </p>
          </div>

          <div className="glass-panel p-6 border-[var(--border-glass)] flex flex-col gap-3">
            <div className="p-3 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] self-start">
              <CalendarDays size={20} />
            </div>
            <h4 className="text-base font-semibold text-white">Table Reservations</h4>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              Planning an evening out? Reserve your spot in advance using our simple WhatsApp reservation form.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

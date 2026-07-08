import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Phone, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-glass)] pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold font-serif text-[var(--accent)]">
            {siteConfig.brand.name}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {siteConfig.brand.aboutShort}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-panel hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-panel hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-panel hover:text-[#25D366] hover:border-[#25D366] transition-all flex items-center justify-center"
              aria-label="WhatsApp"
            >
              {/* WhatsApp custom SVG for realism */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold font-serif text-[var(--text-primary)]">Quick Links</h4>
          <ul className="flex flex-col gap-2 list-none text-sm text-[var(--text-secondary)]">
            <li>
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-[var(--accent)]">
                Home Page
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[var(--accent)]">
                About Bistro
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')} className="hover:text-[var(--accent)]">
                Our Menu
              </a>
            </li>
            <li>
              <a href="#signatures" onClick={(e) => handleLinkClick(e, '#signatures')} className="hover:text-[var(--accent)]">
                Signature Dishes
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="hover:text-[var(--accent)]">
                Photo & Video Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold font-serif text-[var(--text-primary)]">Find Us</h4>
          <ul className="flex flex-col gap-3 list-none text-sm text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[var(--accent)] shrink-0 mt-1" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[var(--accent)] shrink-0" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[var(--accent)]">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold font-serif text-[var(--text-primary)]">Opening Hours</h4>
          <ul className="flex flex-col gap-3 list-none text-sm text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <Clock size={16} className="text-[var(--accent)] shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-[var(--text-primary)]">Monday – Sunday</p>
                <p>{siteConfig.contact.hours}</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="container mx-auto px-6 pt-8 border-t border-[var(--border-glass)] text-center text-xs text-[var(--text-muted)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {currentYear} {siteConfig.brand.name}. All Rights Reserved.</p>
        <p>Built with Premium Aesthetics by SM Web Studio</p>
      </div>
    </footer>
  );
};

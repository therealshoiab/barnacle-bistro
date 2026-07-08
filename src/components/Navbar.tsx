import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Monitor scroll for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggle Logic
  useEffect(() => {
    // Check session storage or default to dark mode
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.add('light-theme');
    } else {
      setIsDarkMode(true);
      document.body.classList.remove('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.add('light-theme');
      sessionStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.remove('light-theme');
      sessionStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signatures', href: '#signatures' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Order Online', href: '#order' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      // Push hash to URL
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-navbar py-4'
          : 'bg-transparent py-6'
      }`}
      style={{
        borderBottom: isScrolled ? undefined : '1px solid transparent',
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo and Name */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <span
            className="text-2xl font-bold tracking-tight font-serif"
            style={{
              background: 'linear-gradient(to right, var(--text-primary), var(--accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {siteConfig.brand.name}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    activeSection === link.href.substring(1)
                      ? 'text-[var(--accent)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--accent)] rounded-full transition-all duration-300" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-panel hover:bg-[var(--surface-glass-hover)] transition-all"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={18} className="text-[var(--accent)]" />
            ) : (
              <Moon size={18} className="text-[var(--text-primary)]" />
            )}
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-panel hover:bg-[var(--surface-glass-hover)] transition-all"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun size={18} className="text-[var(--accent)]" />
            ) : (
              <Moon size={18} className="text-[var(--text-primary)]" />
            )}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg glass-panel text-[var(--text-primary)]"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[73px] bottom-0 w-full z-40 bg-[var(--bg-primary)] transition-all duration-300 lg:hidden border-t border-[var(--border-glass)] flex flex-col justify-between py-8 px-6 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{
          backdropFilter: 'blur(16px)',
          backgroundColor: 'var(--surface-glass)',
        }}
      >
        <ul className="flex flex-col gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xl font-medium tracking-wide block py-2 border-b border-[var(--border-glass)] ${
                  activeSection === link.href.substring(1)
                    ? 'text-[var(--accent)] font-semibold'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Drawer Bottom Info */}
        <div className="flex flex-col gap-2 text-center text-xs text-[var(--text-muted)] mt-auto pt-6">
          <p>{siteConfig.contact.address}</p>
          <p>Call Us: {siteConfig.contact.phoneDisplay}</p>
        </div>
      </div>
    </nav>
  );
};

import React, { useEffect } from 'react';

export default function Legal() {
  const isPrivacy = window.location.hash.includes('privacy');
  
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [isPrivacy]);

  return (
    <section 
      style={{
        padding: '8rem 2rem 4rem 2rem',
        backgroundColor: 'var(--bg-color)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        className="glass-panel container"
        style={{
          maxWidth: '800px',
          padding: '3rem',
          backgroundColor: 'var(--surface-color)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)',
          borderRadius: '24px'
        }}
      >
        {isPrivacy ? (
          <div>
            <h1 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
              Privacy Policy
            </h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Last Updated: July 2026
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>
              Welcome to Barnacle Bistro. We respect your privacy and are committed to protecting any information that may be gathered during your visit to our website.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem', fontFamily: "'Playfair Display', serif" }}>
              1. Information Collection
            </h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              Our website runs entirely client-side. We do not host databases or run direct servers. Any table reservation or food order request forms gather your selected details and submit them directly to WhatsApp. We do not store or process this information ourselves.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem', fontFamily: "'Playfair Display', serif" }}>
              2. Cookies & Analytics
            </h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              We may use local storage and cookies to remember your theme preference (Light/Dark mode) for a more personalized user experience. No personal identifiers are collected.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem', fontFamily: "'Playfair Display', serif" }}>
              3. Contact Us
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>
              If you have any questions about this Privacy Policy, please contact us at +91 9906387311 or visit us at Gulshanabad, Hyderpora, Srinagar.
            </p>
          </div>
        ) : (
          <div>
            <h1 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
              Terms & Conditions
            </h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Last Updated: July 2026
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Barnacle Bistro's website if you do not agree to all of the terms and conditions stated on this page.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem', fontFamily: "'Playfair Display', serif" }}>
              1. Table Reservations & Orders
            </h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              Any table reservations made through our WhatsApp booking form are subject to availability. Barnacle Bistro reserves the right to cancel or amend bookings due to restaurant seating capacities. Online orders are processed by third-party delivery partners (Swiggy/Zomato) whose own terms and conditions apply.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem', fontFamily: "'Playfair Display', serif" }}>
              2. Intellectual Property
            </h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              Unless otherwise stated, Barnacle Bistro and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You must not copy, publish, or reproduce our design, assets, or content without written consent.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem', fontFamily: "'Playfair Display', serif" }}>
              3. Client Disclaimer
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>
              This project is built and maintained by SM Web Studio. For inquiries, please reach out directly via the contact options on the Contact page.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

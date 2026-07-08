import React from 'react';

interface NotFoundProps {
  setCurrentPage: (page: string) => void;
}

export default function NotFound({ setCurrentPage }: NotFoundProps) {
  const handleGoHome = () => {
    setCurrentPage('home');
    window.location.hash = '#/home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      style={{
        padding: '8rem 2rem 4rem 2rem',
        backgroundColor: 'var(--bg-color)',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <div 
        className="glass-panel"
        style={{
          maxWidth: '540px',
          padding: '4rem 3rem',
          backgroundColor: 'var(--surface-color)',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          boxShadow: 'var(--card-shadow)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}
      >
        <span 
          style={{ 
            fontSize: '4.5rem', 
            lineHeight: 1, 
            display: 'block',
            animation: 'float 3s ease-in-out infinite' 
          }}
        >
          🦞
        </span>
        <h1 
          style={{ 
            fontSize: '2.5rem', 
            fontFamily: "'Playfair Display', serif", 
            fontWeight: 800,
            color: 'var(--primary-color)'
          }}
        >
          404
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
          Page Not Found
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Savor the mystery, but the culinary path you are looking for does not exist or has been relocated. Let's get you back to the main dining room!
        </p>
        
        <button 
          onClick={handleGoHome} 
          className="btn btn-primary"
          style={{ marginTop: '1rem' }}
        >
          Back to Home
        </button>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    </section>
  );
}

import React from 'react';

interface BrandLogoProps {
  size?: number;
  showText?: boolean;
}

export default function BrandLogo({ size = 50, showText = true }: BrandLogoProps) {
  return (
    <div 
      className="brand-logo-container" 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.75rem',
        textAlign: 'left',
        userSelect: 'none'
      }}
    >
      {/* Spoon and Fork Circular Icon */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle (Gold Spoon & Fork) */}
        <path 
          d="M 22 50 A 28 28 0 0 1 78 50" 
          stroke="var(--primary-color)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <path 
          d="M 78 50 A 28 28 0 0 1 22 50" 
          stroke="var(--primary-color)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />

        {/* Spoon Head at Top-Left */}
        <path 
          d="M 23 45 C 17 40, 18 28, 28 26 C 36 25, 38 36, 32 43 C 29 46, 26 48, 23 45 Z" 
          fill="var(--primary-color)"
        />

        {/* Fork Prongs at Bottom-Right */}
        <g transform="translate(68, 65) rotate(45)">
          <rect x="0" y="0" width="4" height="15" fill="var(--primary-color)" rx="1" />
          <rect x="6" y="-3" width="4" height="18" fill="var(--primary-color)" rx="1" />
          <rect x="12" y="0" width="4" height="15" fill="var(--primary-color)" rx="1" />
          <rect x="0" y="12" width="16" height="4" fill="var(--primary-color)" rx="1" />
        </g>

        {/* Inner Monogram "BB" */}
        <text 
          x="50%" 
          y="56%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fill="var(--text-heading)" 
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontWeight: 800, 
            fontSize: '28px',
            letterSpacing: '-1px'
          }}
        >
          BB
        </text>

        {/* Diagonal Spoon/Fork Slash Handle */}
        <line 
          x1="32" 
          y1="64" 
          x2="68" 
          y2="36" 
          stroke="var(--bg-color)" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        <line 
          x1="35" 
          y1="61" 
          x2="65" 
          y2="39" 
          stroke="var(--primary-color)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
          <span 
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: size > 60 ? '1.8rem' : '1.25rem', 
              fontWeight: 800, 
              color: 'var(--text-heading)',
              letterSpacing: '0.5px'
            }}
          >
            BARNACLE
          </span>
          <span 
            style={{ 
              fontFamily: "'Outfit', sans-serif", 
              fontSize: size > 60 ? '0.85rem' : '0.65rem', 
              color: 'var(--primary-color)', 
              fontWeight: 700, 
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            BISTRO
          </span>
          <span 
            style={{ 
              fontFamily: "'Outfit', sans-serif", 
              fontSize: size > 60 ? '0.65rem' : '0.5rem', 
              color: 'var(--text-muted)', 
              letterSpacing: '0.5px',
              marginTop: '2px'
            }}
          >
            DINE IN • TAKE AWAY • DELIVERY
          </span>
        </div>
      )}
    </div>
  );
}

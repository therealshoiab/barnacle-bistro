import React, { Suspense, lazy, useState, Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { siteConfig } from '../data/siteConfig';

const Spline = lazy(() => import('@splinetool/react-spline'));

// Error Boundary for catching Spline rendering/buffer errors
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
  onError: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("Spline Render Error caught by Boundary:", error, errorInfo);
    this.props.onError();
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface SplineSceneWrapperProps {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function SplineSceneWrapper({ 
  scene, 
  className = '', 
  fallback 
}: SplineSceneWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.warn("Spline loading error handler triggered.");
    setHasError(true);
  };

  // Default premium fallback skeleton loader
  const defaultFallback = (
    <div 
      className="spline-skeleton-loader"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        zIndex: 1
      }}
    >
      <div 
        className="spline-spinner"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid rgba(212, 175, 55, 0.1)',
          borderTopColor: '#d4af37',
          animation: 'spin 1s linear infinite'
        }}
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  const errorFallback = (
    <div 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        border: '1.5px solid rgba(212,175,55,0.3)'
      }}
    >
      {/* Background image — clearly visible */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(/hero-interior.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        zIndex: 0
      }} />

      {/* Subtle gradient overlay — dark only at bottom so image stays visible */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, rgba(5,5,8,0.25) 0%, rgba(5,5,8,0.55) 60%, rgba(5,5,8,0.82) 100%)',
        zIndex: 1
      }} />

      {/* Text content — on top of overlay */}
      <div style={{ position: 'relative', zIndex: 2, padding: '2rem' }}>
        {/* Gold accent line */}
        <div style={{
          width: '48px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          margin: '0 auto 1rem auto',
          borderRadius: '2px'
        }} />

        <h3 style={{
          fontSize: '1.65rem',
          fontWeight: 700,
          color: '#ffffff',
          fontFamily: "'Playfair Display', serif",
          textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)',
          lineHeight: 1.25,
          marginBottom: '0.65rem',
          letterSpacing: '0.3px'
        }}>
          Welcome to Barnacle Bistro
        </h3>

        <p style={{
          fontSize: '0.88rem',
          color: 'rgba(255,255,255,0.92)',
          fontFamily: "'Outfit', sans-serif",
          textShadow: '0 1px 8px rgba(0,0,0,0.9)',
          lineHeight: 1.55,
          maxWidth: '280px',
          margin: '0 auto 1.25rem auto'
        }}>
          Experience the upscale dining &amp; premium continental grills of Srinagar's finest bistro.
        </p>

        {/* Gold divider */}
        <div style={{
          width: '36px',
          height: '1.5px',
          background: '#d4af37',
          margin: '0 auto',
          borderRadius: '2px',
          opacity: 0.7
        }} />
      </div>
    </div>
  );

  return (
    <div 
      className={`spline-container ${className}`} 
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {!isLoaded && !hasError && (fallback || defaultFallback)}
      
      {!hasError ? (
        <SplineErrorBoundary fallback={errorFallback} onError={() => setHasError(true)}>
          <Suspense fallback={fallback || defaultFallback}>
            <Spline 
              scene={scene} 
              onLoad={handleLoad} 
              onError={handleError}
              style={{ 
                width: '100%', 
                height: '100%',
                opacity: isLoaded ? 1 : 0, 
                transition: 'opacity 0.8s ease'
              }} 
            />
          </Suspense>
        </SplineErrorBoundary>
      ) : (
        errorFallback
      )}
    </div>
  );
}

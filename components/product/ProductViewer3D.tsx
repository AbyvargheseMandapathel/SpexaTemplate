'use client';
import React, { useEffect, useRef, useState } from 'react';

interface ProductViewer3DProps {
  modelPath: string;
  posterImage?: string;
  alt: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string;
          'ios-src'?: string;
          poster?: string;
          alt: string;
          'shadow-intensity'?: string;
          'camera-controls'?: boolean;
          'auto-rotate'?: boolean;
          ar?: boolean;
          'ar-modes'?: string;
          loading?: 'eager' | 'lazy';
          reveal?: 'auto' | 'manual';
          'animation-name'?: string;
        },
        HTMLElement
      >;
    }
  }
}

const ProductViewer3D: React.FC<ProductViewer3DProps> = ({ modelPath, posterImage, alt }) => {
  const modelViewerRef = useRef<any>(null);
  const [animations, setAnimations] = useState<string[]>([]);
  const [currentAnimation, setCurrentAnimation] = useState<string>("");

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.addEventListener('load', () => {
      const modelViewerEl = modelViewerRef.current;
      if (modelViewerEl) {
        modelViewerEl.addEventListener('load', () => {
          if (modelViewerEl.availableAnimations) {
            const animationNames = modelViewerEl.availableAnimations.map((anim: string) =>
              anim.split('|')[1] || anim
            );
            setAnimations(animationNames);
            setCurrentAnimation(animationNames[0]);
          }
        });
      }
    });
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const el = modelViewerRef.current;
      if (el) {
        el.removeEventListener('load', () => {});
      }
    };
  }, []);

  const handleAnimationChange = (animationName: string) => {
    const model = modelViewerRef.current;
    if (model) {
      const fullAnimationName = `RobotArmature|${animationName}`;
      model.animationName = fullAnimationName;
      model.play();
      setCurrentAnimation(animationName);
    }
  };

  return (
    <div className="product-3d-viewer w-100">
      <model-viewer
        ref={modelViewerRef}
        src={modelPath}
        poster={posterImage}
        alt={alt}
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
        ar-modes="webxr scene-viewer quick-look"
        loading="lazy"
        reveal="auto"
        style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }}
      ></model-viewer>

      {/* Styled Dropdown to Match Template */}
      {animations.length > 0 && (
        <div className="mt-3">
          <select
            value={currentAnimation}
            onChange={(e) => handleAnimationChange(e.target.value)}
            className="form-select"
            style={{
              width: '100%',
              padding: '8px 12px',
              fontSize: '1rem',
              borderRadius: '6px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              WebkitAppearance: 'none', // Remove default arrow for custom styling if needed
              appearance: 'none',
            }}
          >
            <option value="" disabled style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Select animation...
            </option>
            {animations.map((anim) => (
              <option
                key={anim}
                value={anim}
                style={{ backgroundColor: 'rgba(0, 27, 43, 0.95)', color: '#ffffff' }}
              >
                {anim}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default ProductViewer3D;
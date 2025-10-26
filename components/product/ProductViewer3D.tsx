'use client';
import React, { useEffect, useRef } from 'react';

interface ProductViewer3DProps {
  modelPath: string;
  posterImage?: string;
  alt: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
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
      }, HTMLElement>;
    }
  }
}

const ProductViewer3D: React.FC<ProductViewer3DProps> = ({ modelPath, posterImage, alt }) => {
  const modelViewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load the model-viewer script dynamically
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="product-3d-viewer">
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
    </div>
  );
};

export default ProductViewer3D;
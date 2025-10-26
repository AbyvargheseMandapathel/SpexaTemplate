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
    // Dynamically load model-viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.body.appendChild(script);

    // Copy the ref value at this point in time
    const modelViewerEl = modelViewerRef.current;

    // Event handler for when the model is fully loaded
    const handleLoad = () => {
      if (modelViewerEl && modelViewerEl.availableAnimations) {
        setAnimations(modelViewerEl.availableAnimations);
        setCurrentAnimation(modelViewerEl.availableAnimations[0]);
      }
    };

    modelViewerEl?.addEventListener('load', handleLoad);

    // Cleanup
    return () => {
      document.body.removeChild(script);
      modelViewerEl?.removeEventListener('load', handleLoad);
    };
  }, []);

  const handleAnimationChange = (animation: string) => {
    const model = modelViewerRef.current;
    if (model) {
      model.animationName = animation;
      model.play();
      setCurrentAnimation(animation);
    }
  };

  return (
    <div className="product-3d-viewer flex flex-col items-center space-y-4">
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

      {animations.length > 0 && (
        <div className="flex space-x-2 flex-wrap justify-center">
          {animations.map((anim) => (
            <button
              key={anim}
              onClick={() => handleAnimationChange(anim)}
              className={`px-4 py-2 rounded ${
                currentAnimation === anim ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              {anim}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductViewer3D;

'use client'
import React, { useEffect, useRef } from 'react'

interface MovingTextBannerProps {
  items: string[];
  backgroundColor?: string;
  textColor?: string;
  speed?: number;
  separator?: React.ReactNode;
}

export default function MovingTextBanner({
  items,
  backgroundColor = '#000',
  textColor = '#fff',
  speed = 30,
  separator = <span className="mx-4">—</span>
}: MovingTextBannerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    // Clone the content for seamless scrolling
    const scrollerContent = Array.from(scrollerInnerRef.current.children);
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInnerRef.current?.appendChild(duplicatedItem);
    });

    // Set animation duration based on content width and speed
    const scrollerInnerWidth = scrollerInnerRef.current.offsetWidth;
    const animationDuration = scrollerInnerWidth / speed;
    
    scrollerInnerRef.current.style.animationDuration = `${animationDuration}s`;
    
    // Pause animation on hover
    const handleMouseEnter = () => {
      if (scrollerInnerRef.current) {
        scrollerInnerRef.current.style.animationPlayState = 'paused';
      }
    };
    
    const handleMouseLeave = () => {
      if (scrollerInnerRef.current) {
        scrollerInnerRef.current.style.animationPlayState = 'running';
      }
    };
    
    const scroller = scrollerRef.current;
    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      scroller.removeEventListener('mouseenter', handleMouseEnter);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [speed]);

  return (
    <div 
      className="scroller" 
      ref={scrollerRef}
      style={{ 
        backgroundColor, 
        color: textColor,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        padding: '12px 0',
      }}
    >
      <div 
        className="scroller__inner" 
        ref={scrollerInnerRef}
        style={{
          display: 'flex',
          gap: '1rem',
          width: 'max-content',
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-uppercase fw-bold letter-spacing-2">{item}</span>
            {index < items.length - 1 && separator}
          </React.Fragment>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .scroller__inner {
          animation: scroll linear infinite;
        }
        
        .letter-spacing-2 {
          letter-spacing: 2px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .scroller__inner {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </div>
  );
}
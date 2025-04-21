'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Updated carousel data structure
const carouselData = [
  {
    id: 1,
    title: "Expert Explosion-Proof Solutions",
    description: "Spexa Electricals delivers reliable explosion-proof services, ensuring safety, compliance, and efficiency for the oil and gas industry with expert support and innovative solutions.",
    image: "public/assets/banner/banner1.png",
    buttonText: "Learn More",
    buttonLink: "/services"
  },
  {
    id: 2,
    title: "Expert Explosion-Proof Solutions",
    description: "Spexa Electricals delivers reliable explosion-proof services, ensuring safety, compliance, and efficiency for the oil and gas industry with expert support and innovative solutions.",
    image: "https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-1-67d12caced734.webp",
    buttonText: "Learn More",
    buttonLink: "/services"
  },
  {
    id: 3,
    title: "Expert Explosion-Proof Solutions",
    description: "Spexa Electricals delivers reliable explosion-proof services, ensuring safety, compliance, and efficiency for the oil and gas industry with expert support and innovative solutions.",
    image: "https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-1-67d12caced734.webp",
    buttonText: "Learn More",
    buttonLink: "/services"
  },
  {
    id:4,
    title: "Expert Explosion-Proof Solutions",
    description: "Spexa Electricals delivers reliable explosion-proof services, ensuring safety, compliance, and efficiency for the oil and gas industry with expert support and innovative solutions.",
    image: "https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-1-67d12caced734.webp",
    buttonText: "Learn More",
    buttonLink: "/services"
  },
  // Other carousel items remain the same
];

export default function CarouselSection1() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = carouselData.length;

  // Handle next slide
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Handle previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  // Auto play functionality - updated to 3 seconds
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextSlide();
    }, 3000); // Changed from 5000 to 3000 ms

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeSlide]);
  
  return (
    <section className="carousel-section position-relative overflow-hidden">
      <div 
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="carousel-slide active-slide"
          >
            <div className="slide-content-wrapper">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 slide-content">
                    <motion.div 
                      className="slide-text"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.7, 
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <motion.span 
                        className="slide-subtitle"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        Spexa Electricals
                      </motion.span>
                      <motion.h2 
                        className="display-ag-2xl mb-4 text-light"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {carouselData[activeSlide].title}
                      </motion.h2>
                      <motion.p 
                        className="paragraph-rubik-r mb-4 text-light-50"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {carouselData[activeSlide].description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <Link href={carouselData[activeSlide].buttonLink} className="btn-wrapper">
                          <span className="btn-learn-more">{carouselData[activeSlide].buttonText}</span>
                          <svg className="btn-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 2L16 9L9 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="col-lg-6 col-md-12 slide-image">
                    <motion.div 
                      className="image-container"
                      initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                      transition={{ 
                        duration: 0.7,
                        type: "spring",
                        bounce: 0.3
                      }}
                    >
                      <div className="image-glow"></div>
                      <img 
                        src={carouselData[activeSlide].image} 
                        alt={carouselData[activeSlide].title} 
                        className="img-fluid rounded-3 shadow-lg"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls - Keeping only prev/next buttons */}
        <div className="carousel-controls">
          <motion.button 
            className="carousel-control prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
            whileHover={{ scale: 1.1, backgroundColor: "#BA1111", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          
          <motion.button 
            className="carousel-control next" 
            onClick={nextSlide}
            aria-label="Next slide"
            whileHover={{ scale: 1.1, backgroundColor: "#BA1111", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Enhanced CSS for the carousel */}
      <style jsx>{`
        .carousel-section {
          padding: 80px 0;
          background: #121212;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        
        .carousel-section:before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(186, 17, 17, 0.1) 0%, rgba(0, 0, 0, 0) 60%);
          z-index: 0;
        }
        
        .carousel-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          z-index: 1;
          perspective: 1000px;
        }
        
        .carousel-slide {
          width: 100%;
          transform-style: preserve-3d;
        }
        
        .active-slide {
          display: block;
        }
        
        .slide-content-wrapper {
          padding: 40px 0;
        }
        
        .slide-content {
          padding-right: 30px;
        }
        
        .slide-subtitle {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #BA1111;
          margin-bottom: 15px;
          padding: 5px 10px;
          border-left: 3px solid #BA1111;
          background: rgba(186, 17, 17, 0.1);
        }
        
        .slide-image {
          display: flex;
          justify-content: center;
        }
        
        .image-container {
          max-width: 100%;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          transform-style: preserve-3d;
        }
        
        .image-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(186, 17, 17, 0.4) 0%, rgba(0, 0, 0, 0) 70%);
          z-index: 1;
          pointer-events: none;
        }
        
        .image-container img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          object-fit: cover;
          aspect-ratio: 16/9;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.5s ease;
        }
        
        .image-container:hover img {
          transform: scale(1.03);
        }
        
        .carousel-controls {
          position: absolute;
          bottom: 30px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 50px;
          z-index: 10;
        }
        
        .carousel-control {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #fff;
          backdrop-filter: blur(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .carousel-control:hover {
          background: #BA1111;
          border-color: #BA1111;
          box-shadow: 0 5px 20px rgba(186, 17, 17, 0.5);
        }
        
        .btn-wrapper {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          padding: 5px;
          border-radius: 30px;
          transition: all 0.4s ease;
        }
        
        .btn-learn-more {
          display: inline-block;
          background: #BA1111;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 600;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 5px 15px rgba(186, 17, 17, 0.3);
        }
        
        .btn-wrapper:hover .btn-learn-more {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(186, 17, 17, 0.5);
        }
        
        .btn-wrapper:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: all 0.6s ease;
          z-index: 1;
        }
        
        .btn-wrapper:hover:before {
          left: 100%;
        }
        
        .btn-icon {
          margin-left: 10px;
          color: white;
          transition: transform 0.3s ease;
        }
        
        .btn-wrapper:hover .btn-icon {
          transform: translateX(4px);
        }
        
        .text-light-50 {
          color: rgba(255, 255, 255, 0.7);
        }
        
        @media (max-width: 991px) {
          .carousel-section {
            padding: 60px 0;
          }
          
          .slide-content {
            padding-right: 0;
            margin-bottom: 30px;
            text-align: center;
          }
          
          .carousel-controls {
            bottom: 15px;
            padding: 0 20px;
          }
        }
        
        @media (max-width: 767px) {
          .carousel-section {
            padding: 40px 0;
          }
          
          .slide-content-wrapper {
            padding: 20px 0;
          }
          
          .carousel-control {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
}
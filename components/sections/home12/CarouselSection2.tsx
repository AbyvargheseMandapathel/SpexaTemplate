'use client'
import Link from "next/link"
import { useState, useEffect, useRef } from 'react'
import ModalVideo from 'react-modal-video'
import { motion, AnimatePresence } from 'framer-motion'

// Updated carousel data with drone content
const carouselData = [
  {
    id: 1,
    subtitle: "Premium Drones",
    title: "Gives you the Visible Difference",
    description: "There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    buttonText: "ASK FOR PRICE",
    buttonLink: "#",
    backgroundImage: "/assets/imgs/pages/home12/drone-bg-dark.jpg",
    droneImage: "/assets/imgs/pages/home12/drone1.png",
    bgColor: "#121212"
  },
  {
    id: 2,
    subtitle: "Advanced Technology",
    title: "Ultraportable Drone for the best Video",
    description: "There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    buttonText: "ASK FOR PRICE",
    buttonLink: "#",
    backgroundImage: "/assets/imgs/pages/home12/drone-bg-red.jpg",
    droneImage: "/assets/imgs/pages/home12/drone2.png",
    bgColor: "#BA1111"
  },
  {
    id: 3,
    subtitle: "Professional Quality",
    title: "Capture Stunning Aerial Footage",
    description: "Our high-performance drones deliver exceptional stability and image quality, perfect for professional photographers and videographers seeking the ultimate aerial perspective.",
    buttonText: "ASK FOR PRICE",
    buttonLink: "#",
    backgroundImage: "/assets/imgs/pages/home12/drone-bg-dark.jpg",
    droneImage: "/assets/imgs/pages/home12/drone3.png",
    bgColor: "#121212"
  }
];

export default function CarouselSection2() {
  const [isOpen, setOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const totalSlides = carouselData.length

  // Handle next slide
  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Handle previous slide
  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto play functionality - 5 seconds
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextSlide()
    }, 5000) // 5 seconds

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current)
      }
    }
  }, [activeSlide])

  return (
    <>
      <section className="position-relative overflow-hidden drone-carousel-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="carousel-slide active-slide"
            style={{
              backgroundColor: carouselData[activeSlide].bgColor,
              backgroundImage: `url(${carouselData[activeSlide].backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0
            }}
          >
            <div className="overlay"></div>
          </motion.div>
        </AnimatePresence>

        <div className="drone-carousel-inner position-relative z-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="drone-content"
                  >
                    <motion.div 
                      className="drone-subtitle"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {carouselData[activeSlide].subtitle}
                    </motion.div>
                    
                    <motion.div 
                      className="drone-title-box"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h2 className="drone-title">
                        {carouselData[activeSlide].title}
                      </h2>
                    </motion.div>
                    
                    <motion.p 
                      className="drone-description"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {carouselData[activeSlide].description}
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Link href={carouselData[activeSlide].buttonLink} className="drone-btn">
                        {carouselData[activeSlide].buttonText}
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="col-lg-6 col-md-12">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeSlide}
                    className="drone-image-container"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -25 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotateY: 0,
                      y: [0, -15, 0],
                      transition: {
                        y: {
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut"
                        }
                      }
                    }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 25 }}
                    transition={{ 
                      duration: 0.8,
                      type: "spring",
                      bounce: 0.4
                    }}
                  >
                    <div className="image-glow"></div>
                    <img 
                      src={carouselData[activeSlide].droneImage} 
                      alt={carouselData[activeSlide].title} 
                      className="drone-image"
                    />
                    <div className="reflection"></div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-navigation">
          <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="nav-btn next" onClick={nextSlide} aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />

      <style jsx>{`
        .drone-carousel-section {
          height: 100vh;
          min-height: 600px;
          position: relative;
          overflow: hidden;
          perspective: 1000px;
          background: #000;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%);
          z-index: 0;
        }
        
        .drone-carousel-inner {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 80px 0;
          transform-style: preserve-3d;
        }
        
        .drone-content {
          padding: 30px;
          transform-style: preserve-3d;
          position: relative;
          z-index: 2;
        }
        
        .drone-subtitle {
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: ${carouselData[activeSlide].bgColor === '#121212' ? '#BA1111' : '#fff'};
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
          padding: 5px 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border-left: 3px solid ${carouselData[activeSlide].bgColor === '#121212' ? '#BA1111' : '#fff'};
        }
        
        .drone-title-box {
          display: inline-block;
          background: ${carouselData[activeSlide].bgColor === '#121212' ? 'rgba(186, 17, 17, 0.9)' : 'rgba(0, 0, 0, 0.8)'};
          padding: 20px 30px;
          margin-bottom: 20px;
          position: relative;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 
                      inset 0 0 15px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border-radius: 5px;
          transform: perspective(1000px) rotateX(2deg);
        }
        
        .drone-title-box:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent
          );
        }
        
        .drone-title {
          color: white;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        
        .drone-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          max-width: 90%;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          position: relative;
          padding-left: 15px;
          border-left: 3px solid ${carouselData[activeSlide].bgColor === '#121212' ? '#BA1111' : 'rgba(255, 255, 255, 0.5)'};
        }
        
        .drone-btn {
          display: inline-block;
          background: ${carouselData[activeSlide].bgColor === '#121212' ? '#BA1111' : '#000'};
          color: white;
          padding: 14px 28px;
          text-decoration: none;
          font-weight: 600;
          border: none;
          border-radius: 30px;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3),
                      inset 0 -2px 5px rgba(0, 0, 0, 0.2),
                      inset 0 2px 5px rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }
        
        .drone-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: all 0.6s ease;
        }
        
        .drone-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
        
        .drone-btn:hover:before {
          left: 100%;
        }
        
        .drone-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
          z-index: 1;
        }
        
        .image-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 50% 50%,
            ${carouselData[activeSlide].bgColor === '#121212' ? 'rgba(186, 17, 17, 0.3)' : 'rgba(255, 255, 255, 0.2)'} 0%,
            transparent 70%
          );
          filter: blur(20px);
          z-index: -1;
          transform: translateZ(-50px);
        }
        
        .drone-image {
          max-width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5));
          transform-style: preserve-3d;
          transform: translateZ(50px);
          transition: all 0.5s ease;
        }
        
        .reflection {
          position: absolute;
          bottom: -20%;
          left: 10%;
          right: 10%;
          height: 20%;
          background: linear-gradient(to bottom, 
            ${carouselData[activeSlide].bgColor === '#121212' ? 'rgba(186, 17, 17, 0.3)' : 'rgba(255, 255, 255, 0.2)'} 0%,
            transparent 100%
          );
          filter: blur(10px);
          transform: rotateX(180deg) scaleY(0.3);
          opacity: 0.5;
          border-radius: 50%;
        }
        
        .carousel-navigation {
          position: absolute;
          bottom: 30px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 50px;
          z-index: 10;
        }
        
        .nav-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .nav-btn:hover {
          background: ${carouselData[activeSlide].bgColor === '#121212' ? '#BA1111' : 'rgba(255, 255, 255, 0.3)'};
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 991px) {
          .drone-carousel-section {
            height: auto;
            min-height: 700px;
          }
          
          .drone-carousel-inner {
            padding: 60px 0;
          }
          
          .drone-content {
            text-align: center;
            padding: 20px;
            margin-bottom: 30px;
          }
          
          .drone-title {
            font-size: 2rem;
          }
          
          .drone-description {
            margin: 0 auto 30px;
            padding-left: 0;
            border-left: none;
            border-bottom: 3px solid ${carouselData[activeSlide].bgColor === '#121212' ? '#BA1111' : 'rgba(255, 255, 255, 0.5)'};
            padding-bottom: 15px;
          }
          
          .drone-image-container {
            margin-top: 30px;
            transform: scale(0.9);
          }
        }
        
        @media (max-width: 767px) {
          .drone-carousel-inner {
            padding: 40px 0;
          }
          
          .drone-title-box {
            padding: 15px 20px;
          }
          
          .drone-title {
            font-size: 1.5rem;
          }
          
          .carousel-navigation {
            bottom: 15px;
            padding: 0 20px;
          }
          
          .nav-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  )
}
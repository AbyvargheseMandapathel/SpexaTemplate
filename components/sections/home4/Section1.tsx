'use client'
import Link from "next/link"
import { useState, useEffect } from 'react'
import ModalVideo from 'react-modal-video'
import { motion, AnimatePresence } from 'framer-motion'

// Content data in JSON format for each slide
const slideContent = [
	{
		heading: "Premium Explosion-Proof Products",
		description: "Spexa Electricals offers high-quality explosion-proof products, ensuring safety, reliability, and compliance for the oil and gas industry with cutting-edge technology and expert craftsmanship.",
		backgroundImage: "https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-1-67d12caced734.webp",
		imageSrc: "https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-3-2-1-67d130542f3f8.webp",
		buttonText: "View Products",
		buttonLink: "#products"
	},
	{
		heading: "Expert Explosion-Proof Solutions",
		description: "Spexa Electricals delivers reliable explosion-proof services, ensuring safety, compliance, and efficiency for the oil and gas industry with expert support and innovative solutions.",
		backgroundImage: "https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-2-67d12cad16ec0.webp",
		imageSrc: "https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-1-67d12caced734.webp",
		buttonText: "Explore Solutions",
		buttonLink: "#solutions"
	},
	{
		heading: "Excellence in Explosion-Proof Projects",
		description: "Spexa Electricals delivers high-quality explosion-proof projects, ensuring safety, reliability, and compliance for the oil and gas industry with innovative solutions and expert execution.",
		backgroundImage: "https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-3-2-1-67d130542f3f8.webp",
		imageSrc: "https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-2-67d12cad16ec0.webp",
		buttonText: "See Projects",
		buttonLink: "#projects"
	}
]

export default function Section1() {
	const [isOpen, setOpen] = useState(false)
	const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0)
	
	// Effect to change content every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentHeadingIndex(prev => (prev + 1) % slideContent.length)
		}, 5000)
		
		return () => clearInterval(interval)
	}, [])
	
	// Get current slide content
	const currentSlide = slideContent[currentHeadingIndex]
	
	return (
		<>
			<section 
				className="position-relative overflow-hidden box-banner-4"
				style={{
					backgroundImage: `url(${currentSlide.backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					transition: 'background-image 1s ease-in-out',
					height: 'auto', // Changed from fixed height to auto
					minHeight: '100vh', // Ensure it takes at least full viewport height
					paddingTop: '80px',
					paddingBottom: '80px'
				}}
			>
				<div className="overlay"></div>
				<div className="container h-100 d-flex align-items-center" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-7 col-md-12 mb-4">
							<div className="banner-2">
								<div className="sub-heading-ag-sm color-white text-uppercase mb-20" data-aos="fade-up">
									<svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
									</svg>
									Spexa Electrical Solutions
								</div>
								
								{/* Animated heading with framer-motion */}
								<div className="heading-container">
									<AnimatePresence mode="wait">
										<motion.h1 
											key={currentHeadingIndex}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.5 }}
											className="display-xl color-white mb-30"
										>
											{currentSlide.heading.split(' ').map((word, i) => (
												<motion.span
													key={i}
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ delay: i * 0.1, duration: 0.3 }}
													style={{ display: 'inline-block', marginRight: '0.5rem' }}
												>
													{word}
												</motion.span>
											))}
										</motion.h1>
									</AnimatePresence>
								</div>
								
								<p className="paragraph-rubik-r color-white desc-banner mb-40" data-aos="fade-up">
									{currentSlide.description}
								</p>
								<div className="d-flex flex-wrap align-items-center" data-aos="fade-up">
									<Link href="#" className="btn btn-primary-square-2-md mb-3 mb-sm-0 me-sm-3">
										Schedule a consultation
										<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
									</Link>
									
									<Link href={currentSlide.buttonLink} className="btn btn-outline-light mb-3 mb-sm-0">
										{currentSlide.buttonText}
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-12 mb-4 text-center" data-aos="fade-right">
							{/* Updated image styling */}
							<motion.div 
								className="box-banner-image"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
							>
								<motion.img 
									src={currentSlide.imageSrc}
									alt={`Spexa ${currentSlide.heading}`}
									className="featured-image"
									initial={{ filter: "brightness(0.8)" }}
									animate={{ 
										filter: "brightness(1.1)",
										y: [0, -10, 0]
									}}
									transition={{
										filter: { duration: 1 },
										y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
									}}
									key={currentHeadingIndex}
								/>
								<div className="image-highlight"></div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
			
			{/* Keep ModalVideo for other potential uses */}
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
			
			<style jsx>{`
				.overlay {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: rgba(0, 0, 0, 0.6);
					z-index: 0;
				}
				
				.container {
					position: relative;
					z-index: 1;
				}
				
				.heading-container {
					min-height: 120px;
					display: flex;
					align-items: center;
				}
				
				.box-banner-image {
					position: relative;
					overflow: hidden;
					z-index: 1;
					max-width: 100%;
					margin: 0 auto;
					border-radius: 20px;
					background: rgba(0, 0, 0, 0.2);
					padding: 15px;
					box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
					backdrop-filter: blur(5px);
				}
				
				.featured-image {
					width: 100%;
					height: auto;
					display: block;
					transition: transform 0.5s ease;
					border-radius: 10px;
					max-height: 500px;
					object-fit: contain;
				}
				
				.image-highlight {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: radial-gradient(circle at 50% 50%, rgba(255, 165, 0, 0.2), transparent 70%);
					pointer-events: none;
					z-index: 2;
					animation: pulse 3s infinite alternate;
				}
				
				@keyframes pulse {
					0% {
						opacity: 0.3;
					}
					100% {
						opacity: 0.7;
					}
				}
				
				.box-banner-image:hover .featured-image {
					transform: scale(1.05);
				}
				
				.color-white {
					color: white;
				}
				
				.btn-outline-light {
					color: white;
					border: 2px solid white;
					background: transparent;
					padding: 12px 24px;
					border-radius: 4px;
					font-weight: 500;
					transition: all 0.3s ease;
				}
				
				.btn-outline-light:hover {
					background: rgba(255, 255, 255, 0.1);
					transform: translateY(-3px);
				}
				
				/* Improved mobile responsiveness */
				@media (max-width: 991px) {
					.heading-container {
						min-height: 80px;
					}
					
					.display-xl {
						font-size: calc(2rem + 1.5vw) !important;
						line-height: 1.2;
					}
					
					.desc-banner {
						font-size: 1rem;
					}
				}
				
				@media (max-width: 767px) {
					.heading-container {
						min-height: 60px;
					}
					
					.display-xl {
						font-size: calc(1.8rem + 1vw) !important;
					}
					
					.box-banner-image {
						max-width: 90%;
						padding: 10px;
					}
					
					.featured-image {
						max-height: 350px;
					}
					
					.btn {
						width: 100%;
						margin-right: 0 !important;
						margin-left: 0 !important;
						text-align: center;
						justify-content: center;
					}
				}
				
				@media (max-width: 575px) {
					.display-xl {
						font-size: calc(1.5rem + 1vw) !important;
					}
					
					.sub-heading-ag-sm {
						font-size: 0.8rem;
					}
					
					.featured-image {
						max-height: 250px;
					}
					
					.box-banner-4 {
						padding-top: 60px;
						padding-bottom: 60px;
					}
				}
			`}</style>
		</>
	)
}
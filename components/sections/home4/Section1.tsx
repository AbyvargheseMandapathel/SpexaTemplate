'use client'
import Link from "next/link"
import { useState, useEffect } from 'react'
import ModalVideo from 'react-modal-video'
import { motion, AnimatePresence } from 'framer-motion'

export default function Section1() {
	const [isOpen, setOpen] = useState(false)
	const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0)
	const [currentBgIndex, setCurrentBgIndex] = useState(0)
	
	// Array of headings to cycle through
	const headings = [
		"Premium Explosion-Proof Products",
		"Expert Explosion-Proof Solutions",
		"Excellence in Explosion-Proof Projects",
	]
	
	// Array of background images to cycle through
	const backgroundImages = [
		"https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-1-67d12caced734.webp",
		"https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-2-67d12cad16ec0.webp",
		"https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-3-2-1-67d130542f3f8.webp"
	]
	
	// Effect to change heading every 5 seconds (slowed down from 3 seconds)
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentHeadingIndex(prev => (prev + 1) % headings.length)
		}, 5000)
		
		return () => clearInterval(interval)
	}, [])
	
	// Effect to change background image every 5 seconds (slowed down from 3 seconds)
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentBgIndex(prev => (prev + 1) % backgroundImages.length)
		}, 5000)
		
		return () => clearInterval(interval)
	}, [])
	
	return (
		<>
			<section 
				className="position-relative overflow-hidden box-banner-4"
				style={{
					backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					transition: 'background-image 1s ease-in-out',
					height: '100vh', // Fixed height to eliminate empty space
					minHeight: '600px' // Minimum height for smaller screens
				}}
			>
				<div className="overlay"></div>
				<div className="container h-100 d-flex align-items-center" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-7 mb-4">
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
											{headings[currentHeadingIndex].split(' ').map((word, i) => (
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
									{currentHeadingIndex === 3 ? 
										"Providing industry-leading electrical safety equipment and solutions to protect your workforce and ensure compliance with safety standards." : 
										"We have been operating for over a decade, providing top-notch services to our clients and building a strong track record"
									}
								</p>
								<div className="d-flex align-items-center" data-aos="fade-up">
									<Link href="#" className="btn btn-primary-square-2-md">
										Schedule a consultation
										<img src="/assets/imgs/template/icons/plus-sm.svg" alt="Vatech" />
									</Link>
									
									{currentHeadingIndex === 3 && (
										<Link href="#safety-equipment" className="btn btn-outline-light ms-3">
											View Safety Equipment
										</Link>
									)}
								</div>
							</div>
						</div>
						<div className="col-lg-5 mb-4 text-center" data-aos="fade-right">
							{/* Updated image styling */}
							<motion.div 
								className="box-banner-image"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
							>
								<motion.img 
									src={`/assets/imgs/pages/home4/banner.png`}
									alt="Spexa Explosion-Proof Solutions" 
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
					min-height: 150px;
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
				
				@media (max-width: 991px) {
					.heading-container {
						min-height: 100px;
					}
				}
			`}</style>
		</>
	)
}
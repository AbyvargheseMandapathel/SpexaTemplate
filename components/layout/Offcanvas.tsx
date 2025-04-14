'use client'
import { useState } from 'react';
import Link from 'next/link'
import { mobileNavigationItems, galleryItems, contactInfo } from '../../data/navigation'

export default function Offcanvas({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	
	return (
		<>
			<div className={`offCanvas__info ${isMobileMenu ? "active" : ""}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleMobileMenu}>
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
							<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
						</svg>
					</button>
				</div>
				<div className="offCanvas__logo mb-20">
					<Link href="/"><img src="/assets/imgs/template/spexa-logo.png" alt="Logo" style={{ maxHeight: '45px', width: 'auto' }} /></Link>
				</div>
				<div className="offCanvas__side-info mb-30">
					<ul className="navbar-nav navbar-nav-mobile">
						{mobileNavigationItems && mobileNavigationItems.map((item, index) => (
							<li key={item.id} className={`nav-item ${item.type !== 'link' ? 'dropdown menu-item-has-children' : ''}`}>
								{item.type === 'link' ? (
									<Link 
										className="nav-link fw-medium" 
										href={item.link}
										onClick={handleMobileMenu}
									>
										{item.title}
									</Link>
								) : (
									<>
										<a 
											className="nav-link fw-medium" 
											onClick={() => handleAccordion(item.id)}
											role="button" 
											data-bs-toggle="dropdown" 
											aria-expanded={isAccordion === item.id}
										>
											{item.title}
										</a>
										{item.children && (
											<ul className={`dropdown-menu ${isAccordion === item.id ? "show" : ""}`}>
												{item.children.map((subItem, subIndex) => (
													<li key={`${item.id}-${subIndex}`}>
														<Link 
															className="dropdown-item" 
															href={subItem.link}
															onClick={handleMobileMenu}
														>
															{subItem.title}
														</Link>
													</li>
												))}
											</ul>
										)}
									</>
								)}
							</li>
						))}
					</ul>
				</div>
				
				<div className="side-gallery mb-4">
					<div className="pt-1" />
					<h4 className="mt-3 mb-3">Gallery</h4>
					<div className="grid-items">
						{galleryItems && galleryItems.map((item) => (
							<div key={item.id} className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src={item.image} alt={item.alt} />
							</div>
						))}
					</div>
				</div>
				<div className="box-contactus mb-30">
					<h5 className="title-contactus neutral-1000 mb-3">Contact Us</h5>
					<div className="contact-info">
						<p className="address-2 text-md-medium neutral-1000"><strong>Address: </strong>{contactInfo.address}</p>
						<p className="hour-work-2 text-md-medium neutral-1000"><strong>Hours: </strong>{contactInfo.hours}</p>
						<p className="hour-work-2 text-md-medium neutral-1000"><strong>Phone: </strong>{contactInfo.phone}</p>
					</div>
				</div>
			</div>

			{isMobileMenu &&
				<div className="offCanvas__overly active" onClick={handleMobileMenu} />
			}
		</>
	)
}
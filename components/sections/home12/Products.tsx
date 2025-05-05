'use client'
import Link from "next/link"

export default function Products() {
	return (
		<>
			<section className="position-relative box-section box-products-12" style={{ 
				backgroundColor: '#ffffff',
				backgroundImage: 'url(/_next/static/media/bg-footer-2.eda2c9e8.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative'
			}}>
				<div className="container" data-aos="fade-up">
					<div className="row mb-70">
						<div className="col-lg-12 text-center">
							<p className="sub-heading-ag-sm text-uppercase text-line-up-down blue letter-space-4 mb-3">OUR PRODUCTS</p>
							<h3 className="heading-ag-3xl mb-3">Explosion-Proof <span className="text-underline blue-under">Solutions</span></h3>
							<p className="paragraph-rubik-r gray-500 mb-0 mx-auto" style={{ maxWidth: '650px' }}>Discover our comprehensive range of explosion-proof products designed for hazardous environments in the oil and gas industry.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="card-product-12">
								<div className="card-image">
									<img src="/assets/imgs/pages/home12/product-1.png" alt="Explosion-Proof Lighting" />
								</div>
								<div className="card-info">
									<h5 className="mb-15">Explosion-Proof Lighting</h5>
									<p className="paragraph-rubik-r gray-500 mb-20">High-performance lighting solutions designed for hazardous areas with Zone 1 & 2 certifications.</p>
									<Link href="#" className="btn btn-link-blue">
										Learn More
										<svg className="ms-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="card-product-12">
								<div className="card-image">
									<img src="/assets/imgs/pages/home12/product-2.png" alt="Junction Boxes & Enclosures" />
								</div>
								<div className="card-info">
									<h5 className="mb-15">Junction Boxes & Enclosures</h5>
									<p className="paragraph-rubik-r gray-500 mb-20">Robust enclosures designed to contain electrical connections in hazardous environments.</p>
									<Link href="#" className="btn btn-link-blue">
										Learn More
										<svg className="ms-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-30">
							<div className="card-product-12">
								<div className="card-image">
									<img src="/assets/imgs/pages/home12/product-3.png" alt="Control Systems" />
								</div>
								<div className="card-info">
									<h5 className="mb-15">Control Systems</h5>
									<p className="paragraph-rubik-r gray-500 mb-20">Advanced control panels and systems with intrinsically safe components for hazardous areas.</p>
									<Link href="#" className="btn btn-link-blue">
										Learn More
										<svg className="ms-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-20">
						<Link href="#" className="btn btn-blue-home none-bd bdrd-10">
							View All Products
							<img src="/assets/imgs/template/icons/arrow-right.svg" alt="Spexa" />
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
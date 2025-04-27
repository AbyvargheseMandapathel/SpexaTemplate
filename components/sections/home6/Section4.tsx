import Link from "next/link"

export default function Section4() {
	return (
		<>
			<section className="position-relative overflow-hidden box-our-services-6">
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-8">
							<h6 className="paragraph-base-fitree-bold grey-100 mb-20" data-aos="fade-up">OUR SERVICES</h6>
							<h3 className="heading-48-fitree color-white" data-aos="fade-up">
								What we Have to Offer<br className="d-none d-lg-block" />
								For your Industrial Needs
							</h3>
						</div>
						<div className="col-lg-4 text-center text-lg-end" data-aos="fade-up">
							<Link href="#" className="btn btn-view-all">
								View all services
								<span>
									<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.7022 11.7956C15.2253 11.2272 14.9576 10.0054 14.8098 8.91541C14.617 7.51069 14.6354 6.12852 14.9144 4.85136C15.1237 3.8938 15.4746 2.84878 16.0543 2.3623M16.0543 2.3623C15.4746 2.84878 14.3839 3.01336 13.4051 3.05268C12.0983 3.10495 10.7339 2.88301 9.3853 2.45076C8.33688 2.11515 7.17885 1.63785 6.70319 1.07098M16.0543 2.3623L1.49947 14.5753" stroke="white" strokeWidth={2} />
									</svg>
								</span>
							</Link>
						</div>
					</div>
					<div className="row mt-5" data-aos="fade-up">
						<div className="col-lg-4 col-md-6">
							<div className="card-service-3">
								<div className="card-image">
									<img src="/assets/imgs/pages/home6/web.png" alt="Industrial Automation" />
								</div>
								<div className="card-info">
									<h5 className="heading-30-fitree color-white">Industrial Automation</h5>
									<p className="paragraph-18-fitree color-white-60">We excel in the integration of our PLC system with the client's low-voltage switchgear and MCC panels, seamlessly accommodating Pump Starters and VFD panels in the process.</p>
									<Link href="#" className="link-white paragraph-base-fitree-bold">
										Read More
										<svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 12C10 11.4142 10.4581 10.5395 10.9219 9.80526C11.5181 8.85789 12.2306 8.03132 13.0475 7.40053C13.66 6.92763 14.4025 6.47368 15 6.47368M15 6.47368C14.4025 6.47368 13.6594 6.01974 13.0475 5.54684C12.2306 4.91526 11.5181 4.08869 10.9219 3.1429C10.4581 2.4079 10 1.53158 10 0.94737M15 6.47368L1.1921e-07 6.47368" stroke="currentColor" strokeWidth={2} />
										</svg>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="card-service-3">
								<div className="card-image">
									<img src="/assets/imgs/pages/home6/ui.png" alt="Site Installation" />
								</div>
								<div className="card-info">
									<h5 className="heading-30-fitree color-white">Site Installation</h5>
									<p className="paragraph-18-fitree color-white-60">Our team comprises highly skilled engineers and technicians who specialize in on-site installations and commissioning services, ensuring a wealth of experience and expertise.</p>
									<Link href="#" className="link-white paragraph-base-fitree-bold">
										Read More
										<svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 12C10 11.4142 10.4581 10.5395 10.9219 9.80526C11.5181 8.85789 12.2306 8.03132 13.0475 7.40053C13.66 6.92763 14.4025 6.47368 15 6.47368M15 6.47368C14.4025 6.47368 13.6594 6.01974 13.0475 5.54684C12.2306 4.91526 11.5181 4.08869 10.9219 3.1429C10.4581 2.4079 10 1.53158 10 0.94737M15 6.47368L1.1921e-07 6.47368" stroke="currentColor" strokeWidth={2} />
										</svg>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="card-service-3">
								<div className="card-image">
									<img src="/assets/imgs/pages/home6/consulting.png" alt="Site Commissioning" />
								</div>
								<div className="card-info">
									<h5 className="heading-30-fitree color-white">Site Commissioning</h5>
									<p className="paragraph-18-fitree color-white-60">Well trained engineers and technicians proficient in providing comprehensive on-site and remote commissioning support, specializing in commissioning a wide range of systems.</p>
									<Link href="#" className="link-white paragraph-base-fitree-bold">
										Read More
										<svg width={15} height={12} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 12C10 11.4142 10.4581 10.5395 10.9219 9.80526C11.5181 8.85789 12.2306 8.03132 13.0475 7.40053C13.66 6.92763 14.4025 6.47368 15 6.47368M15 6.47368C14.4025 6.47368 13.6594 6.01974 13.0475 5.54684C12.2306 4.91526 11.5181 4.08869 10.9219 3.1429C10.4581 2.4079 10 1.53158 10 0.94737M15 6.47368L1.1921e-07 6.47368" stroke="currentColor" strokeWidth={2} />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
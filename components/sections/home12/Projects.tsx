'use client'
import Link from "next/link"

export default function Projects() {
	return (
		<>
			<section className="position-relative box-section box-projects-12" style={{ 
				backgroundColor: '#001b2b',
				backgroundImage: 'url(/_next/static/media/bg-footer-2.eda2c9e8.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative'
			}}>
				{/* Decorative elements */}
				<div className="position-absolute" style={{ top: '50px', left: '5%', width: '150px', height: '150px', background: 'rgba(0, 85, 255, 0.05)', borderRadius: '50%' }}></div>
				<div className="position-absolute" style={{ bottom: '80px', right: '10%', width: '200px', height: '200px', background: 'rgba(0, 85, 255, 0.08)', borderRadius: '50%' }}></div>
				
				<div className="container" data-aos="fade-up">
					<div className="row mb-70">
						<div className="col-lg-12 text-center">
							<p className="sub-heading-ag-sm text-uppercase text-line-up-down white letter-space-4 mb-3">OUR PROJECTS</p>
							<h3 className="heading-ag-3xl color-white mb-3">Featured <span className="text-underline blue-under">Projects</span></h3>
							<p className="paragraph-rubik-r gray-100 mb-0 mx-auto" style={{ maxWidth: '650px' }}>Explore our successful implementations of explosion-proof solutions across various industrial environments.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 mb-30">
							<div className="card-project-12">
								<div className="card-image">
									<img src="/assets/imgs/pages/home12/project-1.png" alt="Offshore Platform Lighting" className="w-100" />
									<div className="card-overlay">
										<Link href="#" className="btn btn-white-sm">View Project</Link>
									</div>
								</div>
								<div className="card-info">
									<span className="badge bg-blue-light mb-10">Oil & Gas</span>
									<h4 className="color-white mb-10">Offshore Platform Lighting</h4>
									<p className="paragraph-rubik-r gray-100 mb-0">Complete explosion-proof lighting solution for a major offshore platform in the Gulf.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-30">
							<div className="card-project-12">
								<div className="card-image">
									<img src="/assets/imgs/pages/home12/project-2.png" alt="Refinery Control Systems" className="w-100" />
									<div className="card-overlay">
										<Link href="#" className="btn btn-white-sm">View Project</Link>
									</div>
								</div>
								<div className="card-info">
									<span className="badge bg-blue-light mb-10">Refinery</span>
									<h4 className="color-white mb-10">Refinery Control Systems</h4>
									<p className="paragraph-rubik-r gray-100 mb-0">Advanced explosion-proof control systems for a major petroleum refinery.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 mb-30">
							<div className="card-project-12 card-project-sm">
								<div className="card-image">
									<img src="/assets/imgs/pages/home12/project-3.png" alt="Chemical Plant Installation" className="w-100" />
									<div className="card-overlay">
										<Link href="#" className="btn btn-white-sm">View Project</Link>
									</div>
								</div>
								<div className="card-info">
									<span className="badge bg-blue-light mb-10">Chemical</span>
									<h5 className="color-white mb-10">Chemical Plant Installation</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-4 mb-30">
							<div className="card-project-12 card-project-sm">
								<div className="card-image">
									<img src="/assets/imgs/pages/home12/project-4.png" alt="LNG Terminal Upgrade" className="w-100" />
									<div className="card-overlay">
										<Link href="#" className="btn btn-white-sm">View Project</Link>
									</div>
								</div>
								<div className="card-info">
									<span className="badge bg-blue-light mb-10">LNG</span>
									<h5 className="color-white mb-10">LNG Terminal Upgrade</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-4 mb-30">
							<div className="card-project-12 card-project-sm">
								<div className="card-image">
									<img src="/assets/imgs/pages/home12/project-5.png" alt="Mining Safety Systems" className="w-100" />
									<div className="card-overlay">
										<Link href="#" className="btn btn-white-sm">View Project</Link>
									</div>
								</div>
								<div className="card-info">
									<span className="badge bg-blue-light mb-10">Mining</span>
									<h5 className="color-white mb-10">Mining Safety Systems</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-20">
						<Link href="#" className="btn btn-white-home none-bd bdrd-10">
							View All Projects
							<img src="/assets/imgs/template/icons/arrow-right-dark.svg" alt="Spexa" />
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
import Link from 'next/link'


export default function Header3({ scroll, isMobileMenu, handleMobileMenu, handleSearch, isSearch }: any) {
	return (
		<>

			<header className="header-style-3">
				<nav className={`navbar navbar-expand-lg navbar-light w-100 ${scroll ? 'navbar-stick position-fixed top-0' : ''}`}>
					<div className="container px-3">
						<div className="header-navar">
							<Link className="navbar-brand pe-4" href="/"><img src="/assets/imgs/template/logo2.svg" alt="" /></Link>
							<ul className="navbar-nav ms-auto gap-1 align-items-lg-center">
								<li className="nav-item dropdown menu-item-has-children">
									<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</Link>
									<div className="mega-menu">
										<div className="row">
											<div className="col-6">
												<ul className="dropdown-menu">
													<li><Link className="dropdown-item" href="/">Home page 01</Link></li>
													<li><Link className="dropdown-item" href="/index-2">Home page 02</Link></li>
													<li><Link className="dropdown-item" href="/index-3">Home page 03</Link></li>
													<li><Link className="dropdown-item" href="/index-4">Home page 04</Link></li>
													<li><Link className="dropdown-item" href="/index-5">Home page 05</Link></li>
													<li><Link className="dropdown-item" href="/index-6">Home page 06</Link></li>
													<li><Link className="dropdown-item" href="/index-7">Home page 07</Link></li>
													<li><Link className="dropdown-item" href="/index-8">Home page 08</Link></li>
												</ul>
											</div>
											<div className="col-6">
												<ul className="dropdown-menu">
													<li><Link className="dropdown-item" href="/index-9">Home page 09</Link></li>
													<li><Link className="dropdown-item" href="/index-10">Home page 10</Link></li>
													<li><Link className="dropdown-item" href="/index-11">Home page 11</Link></li>
													<li><Link className="dropdown-item" href="/index-12">Home page 12</Link></li>
													<li><Link className="dropdown-item" href="/index-13">Home page 13</Link></li>
													<li><Link className="dropdown-item" href="/index-14">Home page 14</Link></li>
													<li><Link className="dropdown-item" href="/index-15">Home page 15</Link></li>
													<li><Link className="dropdown-item" href="/index-16">Home page 16</Link></li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="nav-item dropdown menu-item-has-children">
									<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
									<ul className="dropdown-menu">
										<li><Link className="dropdown-item" href="/about-us">About Us</Link></li>
										<li><Link className="dropdown-item" href="/about-us-2">About Us 2</Link></li>
										<li><Link className="dropdown-item" href="/about-us-3">About Us 3</Link></li>
										<li><Link className="dropdown-item" href="/about-us-4">About Us 4</Link></li>
									</ul>
								</li>
								<li className="nav-item dropdown menu-item-has-children">
									<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
									<ul className="dropdown-menu">
										<li><Link className="dropdown-item" href="/services">Services 01</Link></li>
										<li><Link className="dropdown-item" href="/services-2">Services 02</Link></li>
										<li><Link className="dropdown-item" href="/services-3">Services 03</Link></li>
										<li><Link className="dropdown-item" href="/services-4">Services 04</Link></li>
										<li><Link className="dropdown-item" href="/service-detail">Services Details 01</Link></li>
										<li><Link className="dropdown-item" href="/service-detail-2">Services Details 02</Link></li>
										<li><Link className="dropdown-item" href="/service-detail-3">Services Details 03</Link></li>
										<li><Link className="dropdown-item" href="/service-detail-4">Services Details 04</Link></li>
									</ul>
								</li>
								<li className="nav-item dropdown menu-item-has-children">
									<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
									<ul className="dropdown-menu">
										<li><Link className="dropdown-item" href="/project">Project List</Link></li>
										<li><Link className="dropdown-item" href="/project-detail">Project Details</Link></li>
									</ul>
								</li>
								<li className="nav-item dropdown menu-item-has-children">
									<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</Link>
									<ul className="dropdown-menu">
										<li><Link className="dropdown-item" href="/news-grid">News Grid</Link></li>
										<li><Link className="dropdown-item" href="/news-grid-sidebar">News Grid Sidebar</Link></li>
										<li><Link className="dropdown-item" href="/news-details">Blog Details</Link></li>
									</ul>
								</li>
								<li className="nav-item dropdown menu-item-has-children">
									<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
									<ul className="dropdown-menu">
										<li><Link className="dropdown-item" href="/contact">Contact Us</Link></li>
										<li><Link className="dropdown-item" href="/pricing">Pricing</Link></li>
										<li><Link className="dropdown-item" href="/team">Team</Link></li>
										<li><Link className="dropdown-item" href="/team-detail">Team Details</Link></li>
										<li><Link className="dropdown-item" href="/faq">FAQs</Link></li>
										<li><Link className="dropdown-item" href="/404">Error 404</Link></li>
									</ul>
								</li>
							</ul>
							<div className="d-flex align-items-center ms-5">
								<a className="btn-open-search" onClick={handleSearch}>
									<svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_4249_3239)">
											<path d="M9.96863 0.916016C4.98038 0.916016 0.916992 4.97801 0.916992 9.96458C0.916992 14.9511 4.98038 19.021 9.96863 19.021C12.0993 19.021 14.0588 18.2746 15.6075 17.0353L19.3778 20.8024C19.5681 20.9847 19.8222 21.0853 20.0858 21.0826C20.3494 21.0799 20.6014 20.9742 20.7879 20.788C20.9744 20.6018 21.0805 20.3501 21.0836 20.0866C21.0867 19.8232 20.9864 19.569 20.8043 19.3785L17.0339 15.6094C18.2747 14.0589 19.0222 12.0969 19.0222 9.96458C19.0222 4.97801 14.9569 0.916016 9.96863 0.916016ZM9.96863 2.92727C13.8696 2.92727 17.0083 6.06498 17.0083 9.96458C17.0083 13.8642 13.8696 17.0098 9.96863 17.0098C6.06769 17.0098 2.9289 13.8642 2.9289 9.96458C2.9289 6.06498 6.06769 2.92727 9.96863 2.92727Z" fill="#B91202" />
										</g>
										<defs>
											<clipPath id="clip0_4249_3239">
												<rect width={22} height={22} fill="#B91202" />
											</clipPath>
										</defs>
									</svg>
								</a>
								<a onClick={handleMobileMenu} className="menu-tigger btn-navbar rounded-circle px-2 ms-4 d-flex align-items-center justify-content-center btn-menu">
									<svg width={23} height={10} viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.4688 1.23438L22.057 1.23438" stroke="#B91202" strokeWidth={2} />
										<path d="M0.882812 8.64844L22.0593 8.64844" stroke="#B91202" strokeWidth={2} />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</nav>
				{/* offCanvas-menu */}
				<div className="offCanvas__info">
					<div className="offCanvas__close-icon menu-close">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
								<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
							</svg>
						</button>
					</div>
					<div className="offCanvas__logo mb-20">
						<Link href="/"><img src="/assets/imgs/template/logo3.svg" alt="Logo" /></Link>
					</div>
					<div className="offCanvas__side-info mb-30">
						<ul className="navbar-nav navbar-nav-mobile">
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/">Home page 1</Link></li>
									<li><Link className="dropdown-item" href="/index-2">Home page 2</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 3</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 4</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 5</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 6</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 7</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 8</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 9</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 10</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 11</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 12</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 13</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 14</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 15</Link></li>
									<li><Link className="dropdown-item" href="/index-3">Home page 16</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/about-us">About Us</Link></li>
									<li><Link className="dropdown-item" href="/about-us-2">About Us 2</Link></li>
									<li><Link className="dropdown-item" href="/about-us-3">About Us 3</Link></li>
									<li><Link className="dropdown-item" href="/about-us-4">About Us 4</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/services">Services 01</Link></li>
									<li><Link className="dropdown-item" href="/services-2">Services 02</Link></li>
									<li><Link className="dropdown-item" href="/services-3">Services 03</Link></li>
									<li><Link className="dropdown-item" href="/services-4">Services 03</Link></li>
									<li><Link className="dropdown-item" href="/service-detail">Service Details 01</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-2">Service Details 02</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-3">Service Details 03</Link></li>
									<li><Link className="dropdown-item" href="/service-detail-4">Service Details 04</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/services">Project List</Link></li>
									<li><Link className="dropdown-item" href="/services-2">Project Detail</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/news-grid">News Grid</Link></li>
									<li><Link className="dropdown-item" href="/news-grid-sidebar">News Grid Sidebar</Link></li>
									<li><Link className="dropdown-item" href="/news-details">Blog Details</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown menu-item-has-children">
								<Link className="nav-link fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/contact">Contact Us</Link></li>
									<li><Link className="dropdown-item" href="/pricing">Pricing</Link></li>
									<li><Link className="dropdown-item" href="/team">Team</Link></li>
									<li><Link className="dropdown-item" href="/team-detail">Team Details</Link></li>
									<li><Link className="dropdown-item" href="/faq">FAQs</Link></li>
									<li><Link className="dropdown-item" href="/404">Error 404</Link></li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="side-gallery mb-4">
						<div className="pt-1" />
						<h4 className="mt-3 mb-3">Gallery</h4>
						<div className="grid-items">
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-1.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-2.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-3.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-4.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-5.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-6.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-7.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-8.png" alt="vatech" />
							</div>
							<div className="zoom-img rounded-3 d-inline-flex overflow-hidden">
								<img className="g-col-4" src="/assets/imgs/pages/offcanvas/gallery-9.png" alt="vatech" />
							</div>
						</div>
					</div>
					<div className="box-contactus mb-30">
						<h5 className="title-contactus neutral-1000 mb-3">Contact Us</h5>
						<div className="contact-info">
							<p className="address-2 text-md-medium neutral-1000"><strong>Address: </strong>1285 Crescent Wellington Heights, Louisville, KY 40204</p>
							<p className="hour-work-2 text-md-medium neutral-1000"><strong>Hours: </strong> 8:00 - 17:00, Mon - Sat</p>
							<p className="hour-work-2 text-md-medium neutral-1000"><strong>Phone: </strong> 01 256 986 3</p>
						</div>
					</div>
				</div>
				<div className="offCanvas__overly" />
			</header>

		</>
	)
}

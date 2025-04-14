'use client'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function FooterModern() {
	const [isOpen, setOpen] = useState(false)
	return (
			<footer className="footer-2 footer-style-modern">
				<div className="container-fluid ft-bgr section-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<h4 className="heading-ag-3xl color-white">
									Let's Connected<br />
									together!
								</h4>
								{/* Rest of the content */}
							</div>
							<div className="col-lg-2 col-md-6">
								<h3 className="text-footer pb-1">Services</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Ui Design
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Ux Design
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Digital Marketing
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Video Editing
									</Link>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<h3 className="text-footer pb-1">Recent News</h3>
								<div className="d-flex flex-column align-items-start">
									<ul className="recent-news-list">
										<li>
											<div className="news-image">
												<Link href="#"><img src="/assets/imgs/pages/home7/news4.png" alt="Vatech" /></Link>
											</div>
											<div className="news-info">
												<div className="news-postdate">
													<svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z" fill="#1CBBB4" />
													</svg>
													<span className="paragraph-rubik-r color-white-70">17 oct 23</span>
												</div>
												<Link href="#" className="heading-md news-link">A comprehensive security solution</Link>
											</div>
										</li>
										<li>
											<div className="news-image">
												<Link href="#"><img src="/assets/imgs/pages/home7/news5.png" alt="Vatech" /></Link>
											</div>
											<div className="news-info">
												<div className="news-postdate">
													<svg width={11} height={13} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z" fill="#1CBBB4" />
													</svg>
													<span className="paragraph-rubik-r color-white-70">17 oct 23</span>
												</div>
												<Link href="#" className="heading-md news-link">A comprehensive security solution</Link>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<h3 className="text-footer pb-1">Company</h3>
								<div className="d-flex flex-column align-items-start">
									<Link className="hover-effect paragraph-base grey-100 pt-4" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										About
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Team
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										FAQ
									</Link>
									<Link className="hover-effect paragraph-base grey-100 pt-2" href="#">
										<svg width={8} height={11} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
										</svg>
										Privacy Policy
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid footer-1 px-0">
					<div className="footer">
						<div className="container py-4">
							<div className="footer-bottom">
								<div className="row paragraph-base">
									<div className="col-sm-6 col-12 text-center text-md-start">
										<div className="paragraph-rubik-r color-white-70">Copyright © Spexa {new Date().getFullYear()} . Alright Reserved.</div>
									</div>
									<div className="col-sm-6 col-12 d-flex justify-content-center justify-content-md-end">
										<ul className="menu-footer">
											<li><Link href="#">Trams &amp; Condition</Link></li>
											<li><Link href="#">Privacy Policy</Link></li>
											<li><Link href="#">Contact Us</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
	)
}

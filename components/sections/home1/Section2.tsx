'use client'
import CircleText from '@/components/elements/CircleText'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Section2() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="position-relative overflow-hidden box-agency">
				<div className="container">
					<div className="row position-relative">
						<div className="col-lg-5 mb-5">
							<div className="box-squares">
								<div className="item-square-1">
									<div className="item-square-1-image wow img-custom-anim-left"><img src="/assets/imgs/pages/home1/about.png" alt="Vatech" /></div>
								</div>
								<div className="item-square-2">
									<div className="item-square-2-image wow img-custom-anim-right"><img src="/assets/imgs/pages/home1/about2.png" alt="Vatech" /></div>
								</div>
								<div className="text-square stroke-text">SINCE 1980</div>
							</div>
						</div>
						<div className="col-lg-7 mb-5">
							<div className="box-title-top" data-aos="fade-up">
								<div className="text-rotate-circle">
									<div className="box-circle-round">
										<div className="position-relative bg-primary-500 icon_140  icon-shape rounded-circle">
											<a onClick={() => setOpen(true)} className="popup-video no-pulse">
												<svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx={25} cy={25} r="24.5" stroke="white" />
													<path d="M33.1016 23.8984C33.6484 24.25 34 24.875 34 25.5C34 26.1641 33.6484 26.7891 33.1016 27.1016L21.8516 33.9766C21.2656 34.3281 20.5234 34.3672 19.9375 34.0156C19.3516 33.7031 19 33.0781 19 32.375V18.625C19 17.9609 19.3516 17.3359 19.9375 17.0234C20.5234 16.6719 21.2656 16.6719 21.8516 17.0625L33.1016 23.8984Z" fill="white" />
												</svg>
											</a>
											<div className="position-absolute top-50 start-50 translate-middle w-100">
												<CircleText text="Best - Consulting - Agency -" />
											</div>
										</div>
									</div>
								</div>
								<div className="title-section-2">
									<p className="title-line-2">CONSUlTING AGENCY</p>
									<h4 className="heading-3xl">Successfully Provide Best <span className="primary-500">Business Consulting</span></h4>
								</div>
							</div>
							<p className="color-text paragraph-base mb-40" data-aos="fade-up">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor de los pasajes de Lorem Ipsum disponibles</p>
							<ul className="list-tick-2-col row" data-aos="fade-up">
								<li className="col-lg-7">
									<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_4249_2372)">
											<path d="M9.99995 0C4.48601 0 0 4.36344 0 9.72695C0 15.0905 4.48601 19.454 9.99995 19.454C15.5139 19.454 19.9999 15.0905 19.9999 9.72695C19.9999 4.36344 15.514 0 9.99995 0ZM15.7421 8.08399L9.45963 14.1949C9.1925 14.4548 8.83741 14.5978 8.45967 14.5978C8.08193 14.5978 7.72684 14.4548 7.45971 14.1949L4.2578 11.0804C3.99067 10.8206 3.84354 10.4752 3.84354 10.1078C3.84354 9.74025 3.99067 9.39485 4.2578 9.13501C4.52483 8.87517 4.87992 8.73206 5.25776 8.73206C5.6355 8.73206 5.9907 8.87517 6.25773 9.13511L8.45957 11.2767L13.742 6.13856C14.0091 5.87872 14.3642 5.73571 14.7419 5.73571C15.1197 5.73571 15.4748 5.87872 15.7419 6.13856C16.2935 6.67508 16.2935 7.54767 15.7421 8.08399Z" fill="#0055FF" />
										</g>
										<defs>
											<clipPath id="clip0_4249_2372">
												<rect width={20} height="19.454" fill="white" />
											</clipPath>
										</defs>
									</svg>
									Unlimited Consultation until getting result
								</li>
								<li className="col-lg-5">
									<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_4249_2372)">
											<path d="M9.99995 0C4.48601 0 0 4.36344 0 9.72695C0 15.0905 4.48601 19.454 9.99995 19.454C15.5139 19.454 19.9999 15.0905 19.9999 9.72695C19.9999 4.36344 15.514 0 9.99995 0ZM15.7421 8.08399L9.45963 14.1949C9.1925 14.4548 8.83741 14.5978 8.45967 14.5978C8.08193 14.5978 7.72684 14.4548 7.45971 14.1949L4.2578 11.0804C3.99067 10.8206 3.84354 10.4752 3.84354 10.1078C3.84354 9.74025 3.99067 9.39485 4.2578 9.13501C4.52483 8.87517 4.87992 8.73206 5.25776 8.73206C5.6355 8.73206 5.9907 8.87517 6.25773 9.13511L8.45957 11.2767L13.742 6.13856C14.0091 5.87872 14.3642 5.73571 14.7419 5.73571C15.1197 5.73571 15.4748 5.87872 15.7419 6.13856C16.2935 6.67508 16.2935 7.54767 15.7421 8.08399Z" fill="#0055FF" />
										</g>
										<defs>
											<clipPath id="clip0_4249_2372">
												<rect width={20} height="19.454" fill="white" />
											</clipPath>
										</defs>
									</svg>
									Free demo Consultations
								</li>
								<li className="col-lg-7">
									<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_4249_2372)">
											<path d="M9.99995 0C4.48601 0 0 4.36344 0 9.72695C0 15.0905 4.48601 19.454 9.99995 19.454C15.5139 19.454 19.9999 15.0905 19.9999 9.72695C19.9999 4.36344 15.514 0 9.99995 0ZM15.7421 8.08399L9.45963 14.1949C9.1925 14.4548 8.83741 14.5978 8.45967 14.5978C8.08193 14.5978 7.72684 14.4548 7.45971 14.1949L4.2578 11.0804C3.99067 10.8206 3.84354 10.4752 3.84354 10.1078C3.84354 9.74025 3.99067 9.39485 4.2578 9.13501C4.52483 8.87517 4.87992 8.73206 5.25776 8.73206C5.6355 8.73206 5.9907 8.87517 6.25773 9.13511L8.45957 11.2767L13.742 6.13856C14.0091 5.87872 14.3642 5.73571 14.7419 5.73571C15.1197 5.73571 15.4748 5.87872 15.7419 6.13856C16.2935 6.67508 16.2935 7.54767 15.7421 8.08399Z" fill="#0055FF" />
										</g>
										<defs>
											<clipPath id="clip0_4249_2372">
												<rect width={20} height="19.454" fill="white" />
											</clipPath>
										</defs>
									</svg>
									100% Moneyback Guarantee
								</li>
								<li className="col-lg-5">
									<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_4249_2372)">
											<path d="M9.99995 0C4.48601 0 0 4.36344 0 9.72695C0 15.0905 4.48601 19.454 9.99995 19.454C15.5139 19.454 19.9999 15.0905 19.9999 9.72695C19.9999 4.36344 15.514 0 9.99995 0ZM15.7421 8.08399L9.45963 14.1949C9.1925 14.4548 8.83741 14.5978 8.45967 14.5978C8.08193 14.5978 7.72684 14.4548 7.45971 14.1949L4.2578 11.0804C3.99067 10.8206 3.84354 10.4752 3.84354 10.1078C3.84354 9.74025 3.99067 9.39485 4.2578 9.13501C4.52483 8.87517 4.87992 8.73206 5.25776 8.73206C5.6355 8.73206 5.9907 8.87517 6.25773 9.13511L8.45957 11.2767L13.742 6.13856C14.0091 5.87872 14.3642 5.73571 14.7419 5.73571C15.1197 5.73571 15.4748 5.87872 15.7419 6.13856C16.2935 6.67508 16.2935 7.54767 15.7421 8.08399Z" fill="#0055FF" />
										</g>
										<defs>
											<clipPath id="clip0_4249_2372">
												<rect width={20} height="19.454" fill="white" />
											</clipPath>
										</defs>
									</svg>
									100% Moneyback Guarantee
								</li>
							</ul>
							<div className="row mb-30" data-aos="fade-up">
								<div className="col-lg-6 mb-3">
									<div className="card-image-circle-left">
										<div className="image">
											<img src="/assets/imgs/pages/home1/support.svg" alt="Vatech" />
										</div>
										<div className="info">Inventory management</div>
									</div>
								</div>
								<div className="col-lg-6 mb-3">
									<div className="card-image-circle-left">
										<div className="image">
											<img src="/assets/imgs/pages/home1/team.svg" alt="Vatech" />
										</div>
										<div className="info">Experienced Team members</div>
									</div>
								</div>
							</div>
							<Link href="#" className="btn btn-primary">About More
								<svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634285 11.3333 -3.66907e-07M17 6L7.39105e-07 6" stroke="currentColor" strokeWidth="1.5" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="9HaU8NjH7bI" onClose={() => setOpen(false)} />
		</>
	)
}

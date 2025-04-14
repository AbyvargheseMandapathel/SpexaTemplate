
import Link from "next/link"

export default function Section2() {
	return (
		<>

			<section className="position-relative overflow-hidden box-about-us-10">
				<div className="container" data-aos="fade-up">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-4 text-center text-lg-end">
							<div className="box-image-about-10">
								<div className="image-about-1">
									<img src="/assets/imgs/pages/home10/img-about-1.png" alt="Vatech" />
								</div>
								<div className="image-about-2">
									<img src="/assets/imgs/pages/home10/img-about-2.png" className="mb-3" alt="Vatech" />
									<img src="/assets/imgs/pages/home10/img-about-3.png" alt="Vatech" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<p className="paragraph-base-fitree-bold text-underline text-uppercase primary-500 mb-1">About us</p>
							<h2 className="heading-48-fitree secondery-500 mb-4">
								Investing for your Future<br />
								<span className="primary-500">Business growth</span>
							</h2>
							<p className="paragraph-18-fitree mb-4">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor los pasajes.</p>
							<div className="box-list-ticked">
								<ul className="list-tick">
									<li className="paragraph-20-fitree-medium mb-3">
										<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9.99995 0C4.48601 0 0 4.48591 0 9.99995C0 15.514 4.48601 20 9.99995 20C15.5139 20 19.9999 15.514 19.9999 9.99995C19.9999 4.48591 15.514 0 9.99995 0ZM15.7421 8.31087L9.45963 14.5933C9.1925 14.8605 8.83741 15.0075 8.45967 15.0075C8.08193 15.0075 7.72684 14.8605 7.45971 14.5933L4.2578 11.3914C3.99067 11.1243 3.84354 10.7692 3.84354 10.3915C3.84354 10.0136 3.99067 9.65852 4.2578 9.39139C4.52483 9.12426 4.87992 8.97713 5.25776 8.97713C5.6355 8.97713 5.9907 9.12426 6.25773 9.3915L8.45957 11.5932L13.742 6.31084C14.0091 6.04371 14.3642 5.89669 14.7419 5.89669C15.1197 5.89669 15.4748 6.04371 15.7419 6.31084C16.2935 6.86242 16.2935 7.7595 15.7421 8.31087Z" fill="#0055FF" />
										</svg>
										Unlimited Consultation
									</li>
									<li className="paragraph-20-fitree-medium mb-3">
										<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9.99995 0C4.48601 0 0 4.48591 0 9.99995C0 15.514 4.48601 20 9.99995 20C15.5139 20 19.9999 15.514 19.9999 9.99995C19.9999 4.48591 15.514 0 9.99995 0ZM15.7421 8.31087L9.45963 14.5933C9.1925 14.8605 8.83741 15.0075 8.45967 15.0075C8.08193 15.0075 7.72684 14.8605 7.45971 14.5933L4.2578 11.3914C3.99067 11.1243 3.84354 10.7692 3.84354 10.3915C3.84354 10.0136 3.99067 9.65852 4.2578 9.39139C4.52483 9.12426 4.87992 8.97713 5.25776 8.97713C5.6355 8.97713 5.9907 9.12426 6.25773 9.3915L8.45957 11.5932L13.742 6.31084C14.0091 6.04371 14.3642 5.89669 14.7419 5.89669C15.1197 5.89669 15.4748 6.04371 15.7419 6.31084C16.2935 6.86242 16.2935 7.7595 15.7421 8.31087Z" fill="#0055FF" />
										</svg>
										100% Moneyback Guarantee
									</li>
									<li className="paragraph-20-fitree-medium mb-3">
										<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9.99995 0C4.48601 0 0 4.48591 0 9.99995C0 15.514 4.48601 20 9.99995 20C15.5139 20 19.9999 15.514 19.9999 9.99995C19.9999 4.48591 15.514 0 9.99995 0ZM15.7421 8.31087L9.45963 14.5933C9.1925 14.8605 8.83741 15.0075 8.45967 15.0075C8.08193 15.0075 7.72684 14.8605 7.45971 14.5933L4.2578 11.3914C3.99067 11.1243 3.84354 10.7692 3.84354 10.3915C3.84354 10.0136 3.99067 9.65852 4.2578 9.39139C4.52483 9.12426 4.87992 8.97713 5.25776 8.97713C5.6355 8.97713 5.9907 9.12426 6.25773 9.3915L8.45957 11.5932L13.742 6.31084C14.0091 6.04371 14.3642 5.89669 14.7419 5.89669C15.1197 5.89669 15.4748 6.04371 15.7419 6.31084C16.2935 6.86242 16.2935 7.7595 15.7421 8.31087Z" fill="#0055FF" />
										</svg>
										Free demo Consultation
									</li>
								</ul>
							</div>
							<div className="box-call-help mt-5">
								<Link href="#" className="btn btn-primary">
									Read More
									<svg width={19} height={15} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.6667 14.5C12.6667 13.758 13.247 12.65 13.8344 11.72C14.5896 10.52 15.4921 9.473 16.5268 8.674C17.3027 8.075 18.2432 7.5 19 7.5M19 7.5C18.2432 7.5 17.3019 6.925 16.5268 6.326C15.4921 5.526 14.5896 4.479 13.8344 3.281C13.247 2.35 12.6667 1.24 12.6667 0.500001M19 7.5L-1.70857e-07 7.5" stroke="white" strokeWidth={2} />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

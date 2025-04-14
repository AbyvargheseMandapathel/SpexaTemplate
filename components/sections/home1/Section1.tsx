
import CircleText from '@/components/elements/CircleText'
import Link from "next/link"

export default function Section1() {
	return (
		<>

			<section className="position-relative overflow-hidden box-banner">
				<div className="box-circle-round-banner">
					<div className="position-relative bg-dark-950 border-linear-01 icon_220 icon-shape rounded-circle" data-aos="fade-up">
						<svg width={62} height={61} viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M49.1017 38.1349C47.8531 36.7421 47.1256 33.6429 46.7116 30.8653C46.1722 27.286 46.1787 23.7353 46.8616 20.4179C47.3739 17.9306 48.2491 15.1992 49.7321 13.8697M49.7321 13.8697C48.2491 15.1992 45.4371 15.7733 42.9104 16.0103C39.5367 16.3262 36.0064 15.9462 32.5105 15.024C29.7928 14.3082 26.7878 13.244 25.5425 11.8549M49.7321 13.8697L12.5021 47.2452" stroke="#0055FF" strokeWidth="3.5" />
						</svg>
						<div className="position-absolute top-50 start-50 translate-middle w-100">
						<CircleText text="Best - Consulting - Agency -" />
						</div>
					</div>
				</div>
				<div className="container" data-aos="fade-up">
					<div className="banner img-custom-anim-left">
						<div className="banner-small-title" data-aos="fade-up">CONSUlting AGENCY</div>
						<h1 className="title-banner" data-aos="fade-up">
							Consulting your<br className="d-none d-lg-block" />
							Business Success
						</h1>
						<p className="paragraph-base primary-50 desc-banner" data-aos="fade-up">We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry.</p>
						<Link href="#" className="btn btn-primary mb-3" data-aos="fade-up">
							Discover More
							<svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634286 11.3333 -2.47698e-07M17 6L2.62268e-07 6L17 6Z" fill="currentColor" />
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634285 11.3333 -3.66907e-07M17 6L7.39105e-07 6" stroke="currentColor" strokeWidth="1.5" />
							</svg>
						</Link>
						<span className="mr-20 d-none d-sm-inline-block mb-3" />
						<Link href="#" className="btn btn-border-white mb-3" data-aos="fade-up">
							Contact Us
							<svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634286 11.3333 -2.47698e-07M17 6L2.62268e-07 6L17 6Z" fill="currentColor" />
								<path d="M11.3333 12C11.3333 11.364 11.8525 10.4143 12.3781 9.61714C13.0539 8.58857 13.8614 7.69114 14.7872 7.00629C15.4813 6.49286 16.3228 6 17 6M17 6C16.3228 6 15.4806 5.50714 14.7872 4.99371C13.8614 4.308 13.0539 3.41057 12.3781 2.38371C11.8525 1.58571 11.3333 0.634285 11.3333 -3.66907e-07M17 6L7.39105e-07 6" stroke="currentColor" strokeWidth="1.5" />
							</svg>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

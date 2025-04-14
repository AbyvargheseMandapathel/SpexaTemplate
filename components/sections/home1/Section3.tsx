
import Link from "next/link"

export default function Section3() {
	return (
		<>

			<section className="position-relative overflow-hidden box-process">
				<div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-7">
							<h6 className="title-line color-white mb-30" data-aos="fade-up">Our PROCESS</h6>
							<h3 className="heading-3xl color-white" data-aos="fade-up">
								Helping You Reach Your<br className="d-none d-lg-block" />
								Innovative Services
							</h3>
						</div>
						<div className="col-lg-5">
							<p className="paragraph-base gray-50" data-aos="fade-up">Muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó</p>
						</div>
					</div>
					<div className="box-list-process">
						<div className="item-process" data-aos="fade-up" data-aos-duration={0}>
							<div className="card-process">
								<div className="card-icon">
									<div className="image"><img src="/assets/imgs/pages/home1/process.png" alt="Vatech" /></div>
									<div className="number">01</div>
								</div>
								<div className="card-info">
									<h5 className="heading-lg color-white">Researching Grow</h5>
									<p className="button-sm desc-process">Muchas variaciones de los pasajes de Lorem se le agregó pasajes de</p>
									<Link href="#" className="link-upper">Read More</Link>
								</div>
							</div>
						</div>
						<div className="item-process" data-aos="fade-up" data-aos-duration={400}>
							<div className="card-process">
								<div className="card-icon">
									<div className="image"><img src="/assets/imgs/pages/home1/process2.png" alt="Vatech" /></div>
									<div className="number">02</div>
								</div>
								<div className="card-info">
									<h5 className="heading-lg color-white">Strategic Plan</h5>
									<p className="button-sm desc-process">Muchas variaciones de los pasajes de Lorem se le agregó pasajes de</p>
									<Link href="#" className="link-upper">Read More</Link>
								</div>
							</div>
						</div>
						<div className="item-process" data-aos="fade-up" data-aos-duration={800}>
							<div className="card-process">
								<div className="card-icon">
									<div className="image"><img src="/assets/imgs/pages/home1/process3.png" alt="Vatech" /></div>
									<div className="number">03</div>
								</div>
								<div className="card-info">
									<h5 className="heading-lg color-white">Customizable Solution</h5>
									<p className="button-sm desc-process">Muchas variaciones de los pasajes de Lorem se le agregó pasajes de</p>
									<Link href="#" className="link-upper">Read More</Link>
								</div>
							</div>
						</div>
						<div className="item-process" data-aos="fade-up" data-aos-duration={0}>
							<div className="card-process">
								<div className="card-icon">
									<div className="image"><img src="/assets/imgs/pages/home1/process4.png" alt="Vatech" /></div>
									<div className="number">04</div>
								</div>
								<div className="card-info">
									<h5 className="heading-lg color-white">Payment Proceduce</h5>
									<p className="button-sm desc-process">Muchas variaciones de los pasajes de Lorem se le agregó pasajes de</p>
									<Link href="#" className="link-upper">Read More</Link>
								</div>
							</div>
						</div>
						<div className="item-process" data-aos="fade-up" data-aos-duration={400}>
							<div className="card-process">
								<div className="card-icon">
									<div className="image"><img src="/assets/imgs/pages/home1/process5.png" alt="Vatech" /></div>
									<div className="number">05</div>
								</div>
								<div className="card-info">
									<h5 className="heading-lg color-white">Confirm Way Access</h5>
									<p className="button-sm desc-process">Muchas variaciones de los pasajes de Lorem se le agregó pasajes de</p>
									<Link href="#" className="link-upper">Read More</Link>
								</div>
							</div>
						</div>
						<div className="item-process" data-aos="fade-up" data-aos-duration={800}>
							<div className="card-process">
								<div className="card-icon">
									<div className="image"><img src="/assets/imgs/pages/home1/process6.png" alt="Vatech" /></div>
									<div className="number">06</div>
								</div>
								<div className="card-info">
									<h5 className="heading-lg color-white">Implementation</h5>
									<p className="button-sm desc-process">Muchas variaciones de los pasajes de Lorem se le agregó pasajes de</p>
									<Link href="#" className="link-upper">Read More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

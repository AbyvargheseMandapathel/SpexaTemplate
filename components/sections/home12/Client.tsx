'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function Section6() {
  const partners = [
    { id: 1, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/Adnoc.png", name: "Partner 1" },
    { id: 2, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/Qatar-Petroleum.png", name: "Partner 2" },
    { id: 3, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/Qatar-Petroleum-1.png", name: "Partner 3" },
    { id: 4, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/Minstry-of-Electricity-Water-Kuwait.jpg", name: "Partner 4" },
    { id: 5, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/PDO-Oman.jpg", name: "Partner 5" },
    { id: 6, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/Petrofac.png", name: "Partner 6" },
    { id: 7, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/KOC.png", name: "Partner 7" },
    { id: 8, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/ENOC.png", name: "Partner 8" },
    { id: 9, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/download.jpg", name: "Partner 9" },
    { id: 10, image: "https://spexaelectrical.com/wp-content/uploads/2023/08/C-Luce.png", name: "Partner 10" }
  ];

  return (
    <>
      <section className="position-relative overflow-hidden box-latest-blog-3 box-services-12 bg-light-100" style={{
        background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)',
        padding: '100px 0'
      }}>
        <div className="container" data-aos="fade-up">
					<div className="row position-relative align-items-end">
						<div className="col-lg-7 mb-4 text-center text-lg-start">
							<p className="sub-heading-ag-sm text-uppercase text-line-up-down dark-950 mb-3">OUR PARTNERS</p>
							<h3 className="heading-ag-3xl secondery-500">Trusted Partners in Excellence</h3>
						</div>
						<div className="col-lg-5 mb-4 text-center text-lg-start">
							<p className="paragraph-rubik-r dark-950-70">We are proud to collaborate with industry leaders and innovative organizations that share our commitment to excellence and technological advancement.</p>
						</div>
					</div>

          <div className="partner-slider">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}  // increased space between slides
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 70,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 80,
                },
              }}
              className="swiper-container"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div className="partner-item" data-aos="fade-up" style={{
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '150px'  // fixed container height
                  }}>
                    <div className="partner-logo hover-up-down" style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <img 
                        src={partner.image} 
                        alt={partner.name} 
                        style={{
                          height: '80px',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          margin: '0 auto'
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
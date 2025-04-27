'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

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
      <section className="position-relative overflow-hidden box-latest-blog-3 box-services-12" style={{
        background: 'linear-gradient(135deg, #e6f2ff 0%, #cce5ff 50%, #b3d7ff 100%)',
        padding: '100px 0',
        position: 'relative'
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
              spaceBetween={50}
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
                    height: '150px'
                  }}>
                    <div className="partner-logo hover-up-down" style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      background: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '15px',
                      padding: '20px',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease'
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
        
        {/* Add a subtle wave pattern at the bottom */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "70px",
          background: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1200 120\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><path d=\"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\" opacity=\".25\" fill=\"%23ffffff\"/><path d=\"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\" opacity=\".5\" fill=\"%23ffffff\"/><path d=\"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\" fill=\"%23ffffff\"/></svg>')",
          backgroundSize: "cover"
        }}></div>
      </section>
      
      <style jsx>{`
        .partner-logo:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.8) !important;
        }
        
        .hover-up-down {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </>
  )
}
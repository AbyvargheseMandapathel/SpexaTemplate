'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function BlueClient() {
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
        backgroundColor: '#e0f7fa', // Light blue background color
        backgroundImage: `url(https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-1-67d12caced734.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        position: 'relative'
      }}>
        {/* Blurred background overlay */}
        <div className="blur-background" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(https://spexaelectrical.androfork.com/wp-content/uploads/2025/03/slide-1-67d12caced734.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: 0
        }}></div>

        {/* Color overlay with solid color */}
        <div className="color-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgb(14, 48, 68)',
          opacity: 0.8,
          zIndex: 1
        }}></div>

        <div className="container position-relative" style={{ zIndex: 3 }} data-aos="fade-up">
          <div className="row position-relative align-items-end">
            <div className="col-lg-7 mb-4 text-center text-lg-start">
              <p className="sub-heading-ag-sm text-uppercase text-line-up-down mb-3" style={{ color: 'white' }}>OUR PARTNERS</p>
              <h3 className="heading-ag-3xl" style={{ color: 'white' }}>Trusted Partners in Excellence</h3>
            </div>
            <div className="col-lg-5 mb-4 text-center text-lg-start">
              <p className="paragraph-rubik-r" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>We are proud to collaborate with industry leaders and innovative organizations that share our commitment to excellence and technological advancement.</p>
            </div>
          </div>

          <div className="max-w-[1320px] mx-auto px-4 overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}
              className="swiper-container"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div
                    className="partner-item"
                    data-aos="fade-up"
                    style={{
                      padding: '20px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '150px',
                    }}
                  >
                    <div
                      className="partner-logo hover-up-down"
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '15px',
                        padding: '15px',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <img
                        src={partner.image}
                        alt={partner.name}
                        style={{
                          height: '80px',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          margin: '0 auto',
                        }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            'https://via.placeholder.com/150x80?text=Logo';
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

      <style jsx global>{`
        :root {
          --swiper-theme-color: #007aff;
        }

        .partner-logo:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 1) !important;
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

        /* Make sure the swiper container is visible */
        .swiper-container {
          overflow: visible !important;
          padding: 0 !important;
          margin: 0 -25px !important;
          width: calc(100% + 50px) !important;
        }

        .swiper-wrapper {
          display: flex;
          align-items: center;
        }

        /* Ensure all slides are visible */
        .swiper-slide {
          opacity: 1 !important;
          visibility: visible !important;
        }

        @media (max-width: 767px) {
          .partner-logo {
            padding: 15px !important;
          }

          .partner-item {
            height: 120px !important;
          }

          .partner-logo img {
            height: 60px !important;
          }
        }

        @media (max-width: 575px) {
          .partner-logo {
            padding: 10px !important;
          }

          .partner-item {
            height: 100px !important;
          }

          .partner-logo img {
            height: 50px !important;
          }
        }
      `}</style>
    </>
  )
}

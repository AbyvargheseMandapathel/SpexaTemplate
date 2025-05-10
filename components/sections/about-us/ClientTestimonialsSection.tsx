'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderGroup3 } from '@/util/swiperOptions';

// Define the testimonial interface
interface Testimonial {
  name: string;
  position: string;
  comment: string;
  image?: string;
  rating?: number;
}

export default function ClientTestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Load testimonials from local JSON on mount
  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await import('@/data/aboutus.json');
        if (data.clientTestimonials && Array.isArray(data.clientTestimonials)) {
          setTestimonials(data.clientTestimonials);
        }
      } catch (error) {
        console.error('Error loading testimonials:', error);
      }
    }

    loadTestimonials();
  }, []);

  return (
    <>
      <section
        className="position-relative overflow-hidden box-testimonial-2 py-5"
        style={{
          backgroundImage: 'url("/_next/static/media/bg-footer-2.eda2c9e8.png")',
          backgroundColor: 'rgba(0, 27, 43, 0.9)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container" data-aos="fade-up">
          <div className="row position-relative align-items-end mb-5">
            <div className="col-lg-9">
              <h6 className="banner-small-title-white mb-20" data-aos="fade-up">
                TESTIMONIALS
              </h6>
              <h3 className="heading-ag-3xl color-white" data-aos="fade-up">
                Clients Feedback With<br className="d-none d-lg-block" />
                Our Services
              </h3>
            </div>
            <div className="col-lg-3 text-end">
              <div className="box-button-slider" data-aos="fade-up">
                <div 
                  className="swiper-button-prev swiper-button-inline swiper-button-prev-style-1 swiper-button-prev-style-3"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px'
                  }}
                >
                  <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2.62268e-07C6 0.636 5.45025 1.58571 4.89375 2.38286C4.17825 3.41143 3.32325 4.30886 2.343 4.99371C1.608 5.50714 0.717 6 -2.62268e-07 6M-2.62268e-07 6C0.717 6 1.60875 6.49286 2.343 7.00629C3.32325 7.692 4.17825 8.58943 4.89375 9.61629C5.45025 10.4143 6 11.3657 6 12M-2.62268e-07 6L18 6" stroke="#0056b3" strokeWidth="1.5" />
                  </svg>
                </div>
                <div 
                  className="swiper-button-next swiper-button-inline swiper-button-next-style-1 swiper-button-next-style-3"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C12 11.364 12.5498 10.4143 13.1063 9.61714C13.8218 8.58857 14.6768 7.69114 15.657 7.00629C16.392 6.49286 17.283 6 18 6M18 6C17.283 6 16.3913 5.50714 15.657 4.99371C14.6768 4.308 13.8218 3.41057 13.1063 2.38371C12.5498 1.58571 12 0.634285 12 -3.81478e-07M18 6L2.62268e-07 6" stroke="#0056b3" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="box-testimonials-lists mt-5" data-aos="fade-up">
            <div className="box-swiper">
              <Swiper {...sliderGroup3} className="swiper-container slider-group-3">
                {testimonials.length > 0 ? (
                  testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="card-testimonials-2"
                        style={{
                          minHeight: '300px',
                          display: 'flex',
                          flexDirection: 'column',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '10px',
                          padding: '30px',
                          margin: '10px',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <div className="card-author mb-4">
                          <div className="author-image">
                            <img
                              src={testimonial.image || '/assets/imgs/pages/home2/author.png'}
                              alt={testimonial.name}
                              style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                              }}
                            />
                          </div>
                          <div className="author-info">
                            <div className="rating mb-2">
                              {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <img key={i} src="/assets/imgs/template/icons/star.svg" alt="Star" />
                              ))}
                            </div>
                            <h5
                              className="sub-heading-ag-xl mb-1 testimonial-name"
                              style={{ 
                                color: '#e0e6ed',
                                transition: 'color 0.3s ease'
                              }}
                            >
                              {testimonial.name}
                            </h5>
                            <p
                              className="paragraph-rubik-r"
                              style={{ color: 'white' }}
                            >
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                        <div
                          className="comment-text"
                          style={{
                            flex: 1,
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: '#e0e6ed',
                            display: '-webkit-box',
                            WebkitLineClamp: 6,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {testimonial.comment}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <p style={{ textAlign: 'center', color: '#ccc' }}>No testimonials found.</p>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .card-testimonials-2:hover .testimonial-name {
          color: white !important;
        }
        .swiper-button-prev, .swiper-button-next {
          transition: all 0.3s ease;
        }
        .swiper-button-prev:hover, .swiper-button-next:hover {
          background-color: #f0f0f0 !important;
        }
      `}</style>
    </>
  );
}
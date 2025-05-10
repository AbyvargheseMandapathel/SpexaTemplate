"use client";
import React from 'react';

interface AboutUsProps {
  data?: {
    image: string;
    title: string;
    subtitle?: string;
    description: string;
    stats?: { value: string; label: string }[];
  };
}

const AboutUsSection: React.FC<AboutUsProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section 
      className="about-us-section py-5" 
      style={{ 
        backgroundImage: 'url("/_next/static/media/bg-footer-2.eda2c9e8.png")',
        backgroundColor: 'rgba(0, 27, 43, 0.9)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src={data.image} 
              alt="About Us" 
              className="img-fluid rounded shadow-lg" 
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-4 fw-bold mb-3" style={{ color: '#ffffff' }}>
              {data.title}
            </h2>
            {data.subtitle && (
              <h3 className="h4 mb-4" style={{ color: '#a3c2e3' }}>{data.subtitle}</h3>
            )}
            <p className="lead mb-4" style={{ lineHeight: '1.8', color: '#e0e6ed' }}>
              {data.description}
            </p>
            
            {data.stats && (
              <div className="row mt-4">
                {data.stats.map((stat, index) => (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="text-center p-3 rounded shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <h3 className="fw-bold mb-1" style={{ color: '#ffffff' }}>
                        {stat.value}
                      </h3>
                      <p className="mb-0" style={{ color: '#a3c2e3' }}>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
"use client";
import React from 'react';

interface AboutUsProps {
  data?: {
    image: string;
    title: string;
    description: string;
  };
}

const AboutUsSection: React.FC<AboutUsProps> = ({ data }) => {
  if (!data) return null; // ✅ prevents crash if data is undefined

  return (
    <section className="about-us-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={data.image} alt="About Us" className="img-fluid rounded" />
          </div>
          <div className="col-lg-6">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

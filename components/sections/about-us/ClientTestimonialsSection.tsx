"use client";
import React from "react";

interface Testimonial {
  name: string;
  message: string;
}

interface Props {
  testimonials?: Testimonial[];
}

const ClientTestimonialsSection: React.FC<Props> = ({ testimonials = [] }) => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="text-center">Client Testimonials</h2>
        <div className="row">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="testimonial-card card h-100">
                  <div className="card-body">
                    <p>{testimonial.message}</p>
                    <h5 className="mt-3">{testimonial.name}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-100">No testimonials available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;

"use client";
import React from "react";

interface Value {
  title: string;
  description: string;
}

interface ValuesSectionProps {
  values: Value[];
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ values }) => {
  return (
    <section className="values-section">
      <div className="container">
        <h2 className="text-center">Our Values</h2>
        <div className="row">
          {values.map((value, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="value-card card h-100">
                <div className="card-body">
                  <h5>{value.title}</h5>
                  <p>{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

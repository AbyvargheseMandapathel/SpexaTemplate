'use client';
import React from 'react';

interface JobDescriptionProps {
  responsibilities: string[];
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  responsibilities,
  backgroundColor = 'rgba(255, 255, 255, 0.05)',
  textColor = '#ffffff',
  accentColor = '#0075DC'
}) => {
  return (
    <div style={{ 
      padding: '30px',
      borderRadius: '12px',
      marginBottom: '30px',
      border: `2px solid ${accentColor}`,
      background: backgroundColor,
      color: textColor
    }}>
      <h3 className="mb-4" style={{ color: accentColor }}>Job Description</h3>
      
      <div className="mb-4">
        <h5 style={{ color: accentColor }}>Responsibilities:</h5>
        <ul className="ps-4">
          {responsibilities.map((responsibility, idx) => (
            <li key={idx} className="mb-2">{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
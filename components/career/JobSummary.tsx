'use client';
import React from 'react';

interface JobSummaryProps {
  title: string;
  qualification: string;
  experienceRequired: string;
  location?: string;
  postedDate?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

const JobSummary: React.FC<JobSummaryProps> = ({
  title,
  qualification,
  experienceRequired,
  location = 'Dubai, UAE',
  postedDate = new Date().toLocaleDateString(),
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
      <h4 className="mb-3" style={{ color: accentColor }}>Job Summary</h4>
      <ul className="list-unstyled">
        <li className="mb-3">
          <strong style={{ color: accentColor }}><i className="fa fa-briefcase me-2"></i>Position:</strong>
          <p className="mb-0 mt-2">{title}</p>
        </li>
        <li className="mb-3">
          <strong style={{ color: accentColor }}><i className="fa fa-graduation-cap me-2"></i>Qualification:</strong>
          <p className="mb-0 mt-2">{qualification}</p>
        </li>
        <li className="mb-3">
          <strong style={{ color: accentColor }}><i className="fa fa-clock me-2"></i>Experience:</strong>
          <p className="mb-0 mt-2">{experienceRequired}</p>
        </li>
        <li className="mb-3">
          <strong style={{ color: accentColor }}><i className="fa fa-map-marker me-2"></i>Location:</strong>
          <p className="mb-0 mt-2">{location}</p>
        </li>
        <li className="mb-3">
          <strong style={{ color: accentColor }}><i className="fa fa-calendar me-2"></i>Posted Date:</strong>
          <p className="mb-0 mt-2">{postedDate}</p>
        </li>
      </ul>
    </div>
  );
};

export default JobSummary;
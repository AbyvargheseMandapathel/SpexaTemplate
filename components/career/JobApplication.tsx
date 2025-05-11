'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface JobApplicationProps {
  jobId: string | number;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

const JobApplication: React.FC<JobApplicationProps> = ({
  jobId,
  backgroundColor = 'rgba(255, 255, 255, 0.05)',
  textColor = '#ffffff',
  accentColor = '#0075DC'
}) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    alert('Application submitted successfully!');
    router.push('/career');
  };

  return (
    <div style={{ 
      padding: '30px',
      borderRadius: '12px',
      border: `2px solid ${accentColor}`,
      background: backgroundColor,
      color: textColor
    }}>
      <h3 className="mb-4" style={{ color: accentColor }}>Apply for this Position</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required 
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              border: `1px solid ${accentColor}`,
              padding: '10px 15px',
              height: '50px',
              color: textColor
            }}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required 
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              border: `1px solid ${accentColor}`,
              padding: '10px 15px',
              height: '50px',
              color: textColor
            }}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input 
            type="tel" 
            className="form-control" 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required 
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              border: `1px solid ${accentColor}`,
              padding: '10px 15px',
              height: '50px',
              color: textColor
            }}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">Resume/CV (PDF) *</label>
          <input 
            type="file" 
            className="form-control" 
            id="resume" 
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required 
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              border: `1px solid ${accentColor}`,
              padding: '10px 15px',
              height: '50px',
              color: textColor
            }}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
          <textarea 
            className="form-control" 
            id="coverLetter" 
            name="coverLetter"
            rows={5}
            value={formData.coverLetter}
            onChange={handleInputChange}
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              border: `1px solid ${accentColor}`,
              padding: '10px 15px',
              resize: 'none',
              color: textColor
            }}
          ></textarea>
        </div>
        
        <div className="d-flex gap-3">
          <button type="submit" style={{
            background: `linear-gradient(135deg, ${accentColor}, #004080)`,
            color: 'white',
            padding: '12px 30px',
            borderRadius: '4px',
            border: 'none',
            boxShadow: `0 4px 15px rgba(0, 117, 220, 0.3)`,
            transition: 'all 0.3s ease'
          }}>
            Submit Application
          </button>
          <Link href="/career" style={{
            background: 'transparent',
            color: accentColor,
            padding: '12px 30px',
            borderRadius: '4px',
            border: `1px solid ${accentColor}`,
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}>
            Back to Careers
          </Link>
        </div>
      </form>
    </div>
  );
};

export default JobApplication;
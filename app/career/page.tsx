"use client";
import Layout from "@/components/layout/Layout";
import MovingTextBanner from "@/components/elements/MovingTextBanner";
import { useEffect, useState } from "react";
import Link from "next/link";

// Define the Job interface
interface Job {
  title: string;
  responsibilities: string[];
  qualifications: string[];
  experienceRequired: string;
  qualification: string;
  bannerLink: string;
}

export default function CareerPage() {
  const bannerItems = [
    "JOIN OUR TEAM",
    "GROW YOUR CAREER",
    "INNOVATIVE SOLUTIONS",
    "GLOBAL OPPORTUNITIES"
  ];

  return (
    <Layout headerStyle={12} footerStyle={18}>
      {/* Hero Section */}
      <section className="section-box" style={{
        background: '#001b2b',
        padding: '80px 0'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="heading-jakarta-55" style={{ color: 'white', marginBottom: '20px' }}>
                Career Opportunities
              </h1>
              <p style={{ color: 'white', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                Join our team and be part of our mission to provide exceptional explosion-proof solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <MovingTextBanner 
        items={bannerItems} 
        backgroundColor="#ffffff"
        textColor="#001c3c"
        speed={40}
      />

      {/* Current Openings Section with Background Image */}
      <section className="section-box mt-80" style={{
        backgroundImage: 'url("/_next/static/media/bg-footer-2.eda2c9e8.png")',
        backgroundColor: 'rgba(0, 27, 43, 0.9)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 0'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12">
              <h2 className="heading-jakarta-48 mb-40" style={{ color: 'white' }}>Current Openings</h2>
              <JobListings />
            </div>
          </div>
        </div>
      </section>

      <MovingTextBanner 
        items={bannerItems} 
        backgroundColor="#ffffff"
        textColor="#001c3c"
        speed={40}
      />
    </Layout>
  );
}

function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await import('@/data/jobs.json');
        if (data.jobs && Array.isArray(data.jobs)) {
          setJobs(data.jobs);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading jobs:', error);
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" style={{ color: '#0075DC' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-5">
        <p style={{ color: 'white' }}>No job openings available at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="row">
      {jobs.map((job, index) => (
        <div key={index} className="col-lg-6 col-md-12 col-sm-12 col-12 mb-30">
          <div className="card-grid-border hover-up" style={{ 
            border: '2px solid #0075DC',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            height: '100%'
          }}>
            <div className="card-job-image">
              <img src={job.bannerLink} alt={job.title} style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover' 
              }} />
            </div>
            <div className="card-block-info p-4" style={{ color: 'white' }}>
              <h4 style={{ color: 'white', marginBottom: '15px' }}>{job.title}</h4>
              <div className="mb-3">
                <span className="card-location me-3" style={{ color: '#0075DC' }}>
                  <i className="fa fa-briefcase me-1"></i> {job.qualification}
                </span>
                <span className="card-time" style={{ color: '#0075DC' }}>
                  <i className="fa fa-clock me-1"></i> {job.experienceRequired}
                </span>
              </div>
              
              <div className="mb-3">
                <h6 className="mb-2" style={{ color: 'white' }}>Key Responsibilities:</h6>
                <ul className="ps-3" style={{ color: 'white' }}>
                  {job.responsibilities.slice(0, 3).map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                  {job.responsibilities.length > 3 && <li>And more...</li>}
                </ul>
              </div>
              
              <div className="card-2-bottom mt-4">
                <Link href={`/career/${index}`} style={{
                  background: 'linear-gradient(135deg, #0075DC, #004080)',
                  color: 'white',
                  padding: '10px 25px',
                  borderRadius: '4px',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(0, 117, 220, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  textDecoration: 'none'
                }}>
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
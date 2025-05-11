'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from "@/components/layout/Layout";
import JobDescription from '@/components/career/JobDescription';
import JobSummary from '@/components/career/JobSummary';
import ShareJob from '@/components/career/ShareJob';
import JobApplication from '@/components/career/JobApplication';

// Define the Job interface
interface Job {
  title: string;
  responsibilities: string[];
  qualifications: string[];
  experienceRequired: string;
  qualification: string;
  bannerLink: string;
}

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJob() {
      try {
        const data = await import('@/data/jobs.json');
        const jobId = parseInt(params.id as string);
        
        if (data.jobs && Array.isArray(data.jobs) && jobId >= 0 && jobId < data.jobs.length) {
          setJob(data.jobs[jobId]);
        } else {
          // Job not found, redirect to careers page
          router.push('/career');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading job:', error);
        setLoading(false);
      }
    }

    loadJob();
  }, [params.id, router]);

  if (loading) {
    return (
      <Layout headerStyle={12} footerStyle={18}>
        <div className="container mt-100 mb-100">
          <div className="text-center">
            <div className="spinner-border" style={{ color: '#0075DC' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!job) {
    return (
      <Layout headerStyle={12} footerStyle={18}>
        <div className="container mt-100 mb-100">
          <div className="text-center">
            <h2>Job not found</h2>
            <p>The job you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={12} footerStyle={18}>
      <section className="section-box">
        <div style={{ 
          background: '#001b2b',
          padding: '80px 0',
          position: 'relative'
        }}>
          <div className="container position-relative">
            <div className="text-center">
              <h1 className="heading-jakarta-55" style={{ color: 'white', marginBottom: '20px' }}>
                {job.title}
              </h1>
              <div style={{ color: 'white', fontSize: '18px' }}>
                <span className="me-4"><i className="fa fa-briefcase me-2"></i>{job.qualification}</span>
                <span><i className="fa fa-clock me-2"></i>{job.experienceRequired}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-box" style={{ 
        backgroundImage: 'url("/_next/static/media/bg-footer-2.eda2c9e8.png")', 
        backgroundColor: 'rgba(0, 27, 43, 0.9)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        paddingTop: '80px',
        paddingBottom: '0'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8" style={{ marginBottom: '30px' }}>
              <JobDescription 
                responsibilities={job.responsibilities} 
              />
              
              <JobApplication 
                jobId={params.id as string} 
              />
            </div>
            
            <div className="col-lg-4">
              <JobSummary 
                title={job.title}
                qualification={job.qualification}
                experienceRequired={job.experienceRequired}
              />
              
              <ShareJob 
                jobTitle={job.title} 
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
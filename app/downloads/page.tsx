'use client'

import Layout from "@/components/layout/Layout";
import TabView from "@/components/elements/TabView";

export default function Downloads() {
  return (
    <Layout headerStyle={12} footerStyle={18}>
      <section className="box-section" style={{ background: '#001b2b', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="heading-jakarta-55 text-center mb-5" style={{ color: 'white' }}>
                Downloads
              </h1>
              <p className="text-center mb-5">
                Download our company profiles and certificates below.
              </p>
              
              <DownloadTabs />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function DownloadTabs() {
  const tabs = [
    { id: 'profiles', label: 'Company Profiles' },
    { id: 'certificates', label: 'Certificates' }
  ];

  return (
    <div className="download-tabs">
      <TabView 
        tabs={tabs}
        defaultTab="profiles"
      >
        <ProfilesTab />
        <CertificatesTab />
      </TabView>
    </div>
  );
}

function ProfilesTab() {
  const profiles = [
    {
      id: 1,
      title: "Company Profile 2023",
      description: "Our comprehensive company profile with details about our services, expertise, and projects.",
      fileSize: "3.2 MB",
      fileType: "PDF",
      downloadUrl: "/assets/downloads/company-profile-2023.pdf"
    },
    {
      id: 2,
      title: "Product Catalog",
      description: "Complete catalog of our products with specifications and pricing information.",
      fileSize: "5.8 MB",
      fileType: "PDF",
      downloadUrl: "/assets/downloads/product-catalog.pdf"
    }
  ];

  return (
    <div className="profiles-tab">
      <div className="row">
        {profiles.map(profile => (
          <div key={profile.id} className="col-md-6 mb-4">
            <DownloadCard item={profile} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificatesTab() {
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015 Certification",
      description: "Quality Management System certification valid through 2025.",
      fileSize: "1.2 MB",
      fileType: "PDF",
      downloadUrl: "/assets/downloads/iso-certification.pdf"
    },
    {
      id: 2,
      title: "Industry Compliance Certificate",
      description: "Certification of compliance with industry standards and regulations.",
      fileSize: "0.8 MB",
      fileType: "PDF",
      downloadUrl: "/assets/downloads/compliance-certificate.pdf"
    }
  ];

  return (
    <div className="certificates-tab">
      <div className="row">
        {certificates.map(certificate => (
          <div key={certificate.id} className="col-md-6 mb-4">
            <DownloadCard item={certificate} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DownloadCard({ item }: { item: { 
  id: number;
  title: string;
  description: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
} }) {
  return (
    <div className="download-card" style={{ 
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '30px',
      height: '100%',
      border: '2px solid #0075DC'
    }}>
      <div className="d-flex align-items-center mb-3">
        <i className="fa fa-file-pdf-o fa-2x me-3" style={{ color: '#0075DC' }}></i>
        <h4 className="mb-0" style={{ color: 'white' }}>{item.title}</h4>
      </div>
      <p className="mb-4">{item.description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="file-info">
          <span className="badge bg-light text-dark me-2">{item.fileType}</span>
          <span className="text-muted">{item.fileSize}</span>
        </div>
        <a 
          href={item.downloadUrl} 
          className="btn" 
          download
          style={{
            background: 'linear-gradient(135deg, #0075DC, #004080)',
            color: 'white',
            padding: '8px 20px',
            borderRadius: '4px',
            border: 'none',
            boxShadow: '0 4px 15px rgba(0, 117, 220, 0.3)',
            transition: 'all 0.3s ease'
          }}
        >
          <i className="fa fa-download me-2"></i>
          Download
        </a>
      </div>
    </div>
  );
}
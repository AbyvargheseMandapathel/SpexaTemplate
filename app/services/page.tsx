'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import DetailPage from "@/components/common/DetailPage"
import { AiOutlineArrowRight } from "react-icons/ai" // For the arrow icon in "Learn More"

interface DetailPageProps {
  title: string;
  breadcrumbItems: { label: string; link?: string }[];
  children: React.ReactNode;
  backgroundColor?: string;
  category?: string; // ✅ Add this line
}

export default function ServicesPage() {
  return (
    <Layout headerStyle={12} footerStyle={18}>
      <DetailPage
        breadcrumbItems={[
          { label: 'Home', link: '/' },
          { label: 'Services', link: '/services' }
        ]}
        title="Services"
        backgroundColor="rgba(0, 27, 43, 0.85)"
        category=""
      >
        {/* Services Section */}
        <section
          className="position-relative overflow-hidden box-section"
          style={{
            backgroundColor: '#001b2b',
            backgroundImage: 'url(/_next/static/media/bg-footer-2.eda2c9e8.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div className="container" data-aos="fade-up">
            <div className="text-center mb-5">
              <h2 className="heading-ag-3xl dark-950 text-white">
                Our Professional Services
              </h2>
              <p
                className="paragraph-rubik-r dark-950-70 mx-auto text-white"
                style={{ maxWidth: '800px' }}
              >
                We provide comprehensive solutions tailored to your business needs. Our expert team delivers excellence in every project.
              </p>
            </div>
            <div className="row mt-5">
              {/* Industrial Automation */}
              <div className="col-lg-6 mb-4">
                <div className="card-service-4 hover-up bg-white rounded shadow p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="avatar avatar-circle bg-light-purple border-purple me-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7V17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12H17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="heading-ag-xl dark-950 mb-3 text-dark">Industrial Automation</h4>
                      <p className="paragraph-rubik-r dark-950-70 mb-5 text-dark">
                        Since we deal with Pump Starters & VFD panels, we can flawlessly interface our PLC system with existing or client's LV switchgear and MCC panels.
                      </p>
                      <Link href="#" className="btn btn-border-small bg-light-purple text-dark">
                        Learn More
                        <AiOutlineArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Site Installation & Commissioning */}
              <div className="col-lg-6 mb-4">
                <div className="card-service-4 hover-up bg-white rounded shadow p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="avatar avatar-circle bg-light-purple border-purple me-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7V17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12H17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="heading-ag-xl dark-950 mb-3 text-dark">Site Installation & Commissioning</h4>
                      <p className="paragraph-rubik-r dark-950-70 mb-5 text-dark">
                        We have an experienced team including Engineers and Technicians for site installations and commissioning services.
                      </p>
                      <Link href="#" className="btn btn-border-small bg-light-purple text-dark">
                        Learn More
                        <AiOutlineArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Site Commissioning */}
              <div className="col-lg-6 mb-4">
                <div className="card-service-4 hover-up bg-white rounded shadow p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="avatar avatar-circle bg-light-purple border-purple me-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7V17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12H17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="heading-ag-xl dark-950 mb-3 text-dark">Site Commissioning</h4>
                      <p className="paragraph-rubik-r dark-950-70 mb-5 text-dark">
                        Trained Engineers and Technicians for various site commissioning support, both online and onsite. Mainly in commissioning VFD's and DOL starters, PLC based systems, HMI's, SCADA.
                      </p>
                      <Link href="#" className="btn btn-border-small bg-light-purple text-dark">
                        Learn More
                        <AiOutlineArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* AMC */}
              <div className="col-lg-6 mb-4">
                <div className="card-service-4 hover-up bg-white rounded shadow p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="avatar avatar-circle bg-light-purple border-purple me-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7V17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12H17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="heading-ag-xl dark-950 mb-3 text-dark">Annual Maintenance Contract (AMC)</h4>
                      <p className="paragraph-rubik-r dark-950-70 mb-5 text-dark">
                        Annual maintenance contract for Electrical, Instruments & IT services such as PLC, VFD, Plant Software, MCC/PCC Panel, IT Server, etc.
                      </p>
                      <Link href="#" className="btn btn-border-small bg-light-purple text-dark">
                        Learn More
                        <AiOutlineArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cable Laying */}
              <div className="col-lg-6 mb-4">
                <div className="card-service-4 hover-up bg-white rounded shadow p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="avatar avatar-circle bg-light-purple border-purple me-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7V17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12H17" stroke="#7C5DFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="heading-ag-xl dark-950 mb-3 text-dark">Cable Laying</h4>
                      <p className="paragraph-rubik-r dark-950-70 mb-5 text-dark">
                        We provide support to customers for the cable laying and its related works.
                      </p>
                      <Link href="#" className="btn btn-border-small bg-light-purple text-dark">
                        Learn More
                        <AiOutlineArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DetailPage>
    </Layout>
  )
}
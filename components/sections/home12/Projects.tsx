'use client'
import Link from 'next/link'
import { SetStateAction, useState } from 'react'
import projectsData from '../../../data/projects.json'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  // Extract unique categories from projectsData
  const categories = ['all', ...new Set(projectsData.map((project) => project.category.toLowerCase()))]

  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab)
  }

  // Filter projects based on active tab
  const filteredProjects = projectsData.filter(
    (project) =>
      activeTab === 'all' ||
      project.category.toLowerCase() === activeTab
  )

  return (
    <>
      <section className="position-relative box-section box-projects-12" style={{
        backgroundColor: '#001b2b',
        backgroundImage: 'url(/_next/static/media/bg-footer-2.eda2c9e8.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        {/* Decorative Elements */}
        <div className="position-absolute" style={{ top: '50px', left: '5%', width: '150px', height: '150px', background: 'rgba(0, 85, 255, 0.05)', borderRadius: '50%' }}></div>
        <div className="position-absolute" style={{ bottom: '80px', right: '10%', width: '200px', height: '200px', background: 'rgba(0, 85, 255, 0.08)', borderRadius: '50%' }}></div>
        <div className="position-absolute" style={{ top: '40%', right: '20%', width: '80px', height: '80px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '50%' }}></div>

        <div className="container" data-aos="fade-up">
          <div className="row mb-50">
            <div className="col-lg-12 text-center">
              <p className="sub-heading-ag-sm text-uppercase text-line-up-down white letter-space-4 mb-3" style={{color:'white'}}>OUR PROJECTS</p>
              <h3 className="heading-ag-3xl color-white mb-3">Featured <span className="text-underline blue-under">Projects</span></h3>
              <p className="paragraph-rubik-r gray-100 mb-0 mx-auto" style={{ maxWidth: '650px', color: 'white' }}>
                Explore our successful implementations of explosion-proof solutions across various industrial environments.
              </p>
            </div>
          </div>

          {/* Project Filter Tabs */}
          <div className="row mb-40">
            <div className="col-12">
              <div className="project-filter text-center sticky-tabs">
                <ul className="nav nav-tabs border-0 d-flex flex-wrap justify-content-center" role="tablist">
                  {categories.map((category) => (
                    <li key={category} className="nav-item">
                      <button
                        className={`nav-link border-0 ${activeTab === category ? 'active' : ''}`}
                        onClick={() => handleTabChange(category)}
                        style={{
                          color: activeTab === category ? '#ffffff' : 'rgba(255,255,255,0.7)',
                          background: activeTab === category ? 'rgba(0, 102, 204, 0.2)' : 'transparent',
                          padding: '8px 20px',
                          borderRadius: '30px',
                          margin: '5px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Render Projects Dynamically */}
          <div className="row">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-30">
                <div className="card-project-12" data-aos="fade-up" data-aos-delay="100">
                  <div className="card-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100"
                      style={{ height: '300px', objectFit: 'cover' }} // Ensure uniform image size
                    />
                    <div className="card-overlay">
                    <Link href={`/products/${project.id}`} className="btn btn-blue-sm">
                    View Project
                      </Link>
                    </div>
                  </div>
                  <div className="card-info">
                    <span className="badge bg-blue-light mb-10">{project.category}</span>
                    <h4 className="color-white mb-10">{project.title}</h4>
                    {project.shortDescription && (
                      <p className="paragraph-rubik-r gray-100 mb-0 description clamp-text" style={{ color: 'white' }}>
                        {project.shortDescription}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-40">
            <Link href="/projects" className="btn-blue-home none-bd bdrd-10">
              <span>View All Projects</span>
              <span className="btn-hover-effect"></span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .card-project-12 {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .card-project-12:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        .card-image {
          position: relative;
          overflow: hidden;
        }
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 27, 43, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
        }
        .card-project-12:hover .card-overlay {
          opacity: 1;
        }
        .card-info {
          padding: 20px;
          background: rgba(0, 27, 43, 0.8);
          color: white !important;
        }
        .description.clamp-text {
          display: -webkit-box;
          -webkit-line-clamp: 2; /* Show only 2 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .badge {
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
        }
        .bg-blue-light {
          background: rgba(0, 102, 204, 0.2);
          color: #4da6ff;
        }
        .btn-white-sm {
          background: #ffffff;
          color: #001b2b;
          padding: 8px 20px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-white-sm:hover {
          background: #0066cc;
          color: #ffffff;
        }
        .btn-white-home {
          padding: 12px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-white-home:hover .btn-hover-effect {
          left: 0;
        }
        .project-filter .nav-link:hover {
          color: #ffffff !important;
          background: rgba(0, 102, 204, 0.1) !important;
        }
        @media (max-width: 768px) {
          .project-filter .nav-tabs {
            flex-wrap: wrap;
            justify-content: center;
          }
          .project-filter .nav-item {
            margin: 5px;
          }
          .sticky-tabs {
            position: sticky;
            top: 0;
            background: #001b2b;
            z-index: 1000;
            padding: 10px 0;
          }
        }
      `}</style>
    </>
  )
}

'use client';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faBookReader,
  faHandshake,
  faChartLine,
  faWrench,
  faCogs,
  faBook
} from '@fortawesome/free-solid-svg-icons';

interface Value {
  title: string;
  icon: string;
  description: string;
}

// Map JSON icon strings to actual FontAwesome icons
const getFontAwesomeIcon = (iconName: string) => {
  switch (iconName) {
    case 'fas fa-bullseye':
      return faBullseye;
    case 'fas fa-book-reader':
      return faBookReader;
    case 'fas fa-handshake':
      return faHandshake;
    case 'fas fa-chart-line':
      return faChartLine;
    case 'fas fa-wrench':
      return faWrench;
    case 'fas fa-cogs':
      return faCogs;
    case 'fas fa-book':
      return faBook;
    default:
      return faCogs; // Default icon
  }
};

export default function ValuesSection({ values }: { values: Value[] }) {
  return (
    <>
      <section className="box-section overflow-hidden box-offers-14 py-5" style={{ backgroundColor: '#001b2b' }}>
        <div className="container">
          <div className="row align-items-end mb-5" data-aos="fade-up">
            <div className="col-lg-7 mb-4">
              <div className="sub-heading-ag-sm color-white text-uppercase mb-3 text-border-white">
                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9961 7.01856..." fill="white" />
                </svg>
                OUR VALUES
              </div>
              <h2 className="heading-48-fitree color-white mb-0">Our Core Values</h2>
            </div>
            <div className="col-lg-5 mb-4 text-center text-lg-end">
              <Link href="#" className="btn btn-view-all">
                Learn More
                <span>
                  <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7022 11.7956C15.2253 11.2272 14.9576 10.0054 14.8098 8.91541C14.617 7.51069 14.6354 6.12852 14.9144 4.85136C15.1237 3.8938 15.4746 2.84878 16.0543 2.3623M16.0543 2.3623C15.4746 2.84878 14.3839 3.01336 13.4051 3.05268C12.0983 3.10495 10.7339 2.88301 9.3853 2.45076C8.33688 2.11515 7.17885 1.63785 6.70319 1.07098M16.0543 2.3623L1.49947 14.5753" stroke="white" strokeWidth={2} />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="row g-4">
            {values.map((value, index) => {
              const IconComponent = getFontAwesomeIcon(value.icon);
              return (
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={index * 300} key={index}>
                  <div className="card-service h-100" style={{ 
                    backgroundColor: '#0a2437',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    padding: '40px 30px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderColor: 'rgba(14, 112, 231, 0.1)',
                  }}>
                    <div className="icon-container mb-4" style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <FontAwesomeIcon 
                        icon={IconComponent} 
                        style={{ 
                          fontSize: '28px', 
                          color: 'white' 
                        }} 
                      />
                    </div>
                    
                    <h3 className="text-uppercase mb-4" style={{
                      color: 'white',
                      fontSize: '20px',
                      fontWeight: '600',
                      marginBottom: '15px'
                    }}>
                      {value.title}
                    </h3>
                    
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      marginBottom: '25px',
                      flex: '1'
                    }}>
                      {value.description}
                    </p>
                    
                    <Link href="#" style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '16px',
                      fontWeight: '500',
                      marginTop: 'auto'
                    }}>
                      Read More
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                        <path d="M12.7291 10.1533C12.3596 9.69869 12.1635 8.73092 12.0604 7.86866C11.9256 6.75741 11.9573 5.66659 12.1934 4.66189C12.3705 3.90862 12.6605 3.08807 13.1242 2.71125M13.1242 2.71125C12.6605 3.08807 11.7975 3.20443 11.0244 3.22332C9.99212 3.24835 8.91789 3.05622 7.85869 2.69826C7.03526 2.42032 6.12707 2.02917 5.75863 1.57579M13.1242 2.71125L1.48325 12.1711" stroke="currentColor" strokeWidth={2} />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        .card-service {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-service:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        .icon-container {
          transition: all 0.3s ease;
        }
        .card-service:hover .icon-container {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
}

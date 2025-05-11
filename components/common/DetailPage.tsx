'use client';
import React from 'react';
import Link from 'next/link';

interface DetailPageProps {
  title: string;
  breadcrumbItems: { label: string; link?: string }[];
  children: React.ReactNode;
  backgroundColor?: string;
  category?: string;
}

const DetailPage: React.FC<DetailPageProps> = ({
  title,
  breadcrumbItems,
  children,
  backgroundColor = 'rgb(13, 40, 56)',
  category
}) => {
  return (
    <>
      {/* Banner Section */}
      <section className="box-faq-single-banner box-blog-single-banner" style={{
        width: '100%',
        backgroundColor: backgroundColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}>
        <div className="box-detail-single-banner-inner" style={{
          padding: '40px 0',
          minHeight: 'auto',
          position: 'relative',
          width: '100%'
        }}>
          <div className="container">
            {category && (
              <div className="mb-2">
                <span className="badge" style={{
                  backgroundColor: 'rgba(0, 102, 204, 0.2)',
                  color: '#4da6ff',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '14px'
                }}>
                  {category}
                </span>
              </div>
            )}
            <h1 className="display-ag-2xl color-white mb-3">{title}</h1>
            <div className="box-breadcrumb">
              <ul className="breadcrumb" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                {breadcrumbItems.map((item, index) => (
                  <li key={index} className="breadcrumb-item" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '14px'
                  }}>
                    {index > 0 && <span style={{ margin: '0 8px', color: 'rgba(255, 255, 255, 0.5)' }}>&gt;</span>}
                    {item.link ? (
                      <Link href={item.link} style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
                        {item.label}
                      </Link>
                    ) : (
                      <span style={{ color: '#ffffff' }}>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-end position-absolute" style={{ top: '50%', right: '15px', transform: 'translateY(-50%)' }}>
              <Link href="/contact" className="btn btn-primary" style={{
                backgroundColor: '#0075DC',
                borderColor: '#0075DC',
                padding: '10px 20px',
                borderRadius: '6px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="box-section" style={{
        width: '100%',
        padding: '0'
      }}>
        {children}
      </section>
    </>
  );
};

export default DetailPage;
'use client'
import Link from 'next/link'
import { useState } from 'react'
import productsData from '../../../data/products.json'

export default function Products() {
  const [activeTab, setActiveTab] = useState('all')

  // Extract unique categories from productsData
  const categories = ['all', ...new Set(productsData.map((product) => product.category.toLowerCase()))]

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  // Filter products based on active tab and limit to 8 items
  const filteredProducts = productsData.filter(
    (product) =>
      activeTab === 'all' ||
      product.category.toLowerCase() === activeTab
  ).slice(0, 8) // Limit to 8 items

  return (
    <>
      <section className="position-relative box-section box-products-12" style={{
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
              <p className="sub-heading-ag-sm text-uppercase text-line-up-down white letter-space-4 mb-3" style={{color:'white'}}>OUR PRODUCTS</p>
              <h3 className="heading-ag-3xl color-white mb-3">Featured <span className="text-underline blue-under">Products</span></h3>
              <p className="paragraph-rubik-r gray-100 mb-0 mx-auto" style={{ maxWidth: '650px', color: 'white' }}>
                Explore our successful implementations of explosion-proof solutions across various industrial environments.
              </p>
            </div>
          </div>

          {/* Product Filter Tabs */}
          <div className="row mb-40">
            <div className="col-12">
              <div className="product-filter text-center">
                <ul className="nav nav-tabs border-0 d-inline-flex" role="tablist">
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
                          margin: '0 5px',
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

          {/* Render Products Dynamically */}
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-6 mb-30"> {/* Changed to col-lg-3 for 4 items per row */}
                <div className="card-product-12" data-aos="fade-up" data-aos-delay="100">
                  <div className="card-image">
                    <div className="square-image-container">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }} // Ensure the image covers the container
                      />
                    </div>
                    <div className="card-overlay">
                      <Link href={`/products/${product.id}`} className="btn btn-white-sm">
                        View Product
                      </Link>
                    </div>
                  </div>
                  <div className="card-info">
                    <span className="badge bg-blue-light mb-10">{product.category}</span>
                    <h4 className="color-white mb-10">{product.title}</h4>
                    {product.shortDescription && (
                      <p className="paragraph-rubik-r gray-100 mb-0 description" style={{ color: 'white' }}>
                        {product.shortDescription}
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
              <span>View All Products</span>
              <span className="btn-hover-effect"></span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .card-product-12 {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transform: scale(1);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .card-product-12:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        .card-image {
          position: relative;
          overflow: hidden;
          flex: 1;
        }
        .square-image-container {
          width: 100%;
          padding-top: 100%; /* Maintains a 1:1 aspect ratio */
          position: relative;
        }
        .square-image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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
        .card-product-12:hover .card-overlay {
          opacity: 1;
        }
        .card-info {
          padding: 15px; // Reduced padding
          background: rgba(0, 27, 43, 0.8);
          color: white !important;
          flex: 0 0 auto;
        }
        .description {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 60px; /* Adjust height as needed */
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
        .product-filter .nav-link:hover {
          color: #ffffff !important;
          background: rgba(0, 102, 204, 0.1) !important;
        }
        @media (max-width: 768px) {
          .product-filter .nav-tabs {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 10px;
          }
          .product-filter .nav-item {
            white-space: nowrap;
          }
        }
      `}</style>
    </>
  )
}

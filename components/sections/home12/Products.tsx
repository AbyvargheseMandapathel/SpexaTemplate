'use client'
import Link from 'next/link'
import { SetStateAction, useState, useEffect } from 'react'
import productsData from '../../../data/products.json'

export default function Products({ isHomePage = true }) {
  const [activeTab, setActiveTab] = useState('all')
  const [visibleItems, setVisibleItems] = useState(8)
  const [hasMore, setHasMore] = useState(true)

  // Extract unique categories from productsData
  const categories = ['all', ...new Set(productsData.map((product) => product.category.toLowerCase()))]

  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab)
    setVisibleItems(8) // Reset visible items when changing tab
    setHasMore(true) // Reset hasMore state
  }

  // Filter products based on active tab
  const filteredProducts = productsData.filter(
    (product) =>
      activeTab === 'all' ||
      product.category.toLowerCase() === activeTab
  )

  // Visible products based on current limit
  const visibleProducts = filteredProducts.slice(0, visibleItems)

  // Load more handler
  const handleLoadMore = () => {
    const newVisibleItems = visibleItems + 6
    setVisibleItems(newVisibleItems)
    
    // Check if we've reached the end
    if (newVisibleItems >= filteredProducts.length) {
      setHasMore(false)
    }
  }

  // Check if there are more items to load when tab changes
  useEffect(() => {
    setHasMore(visibleItems < filteredProducts.length)
  }, [filteredProducts, visibleItems])

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
                Explore our range of ATEX & IECEx certified products for hazardous areas
              </p>
            </div>
          </div>

          {/* Product Filter Tabs */}
          <div className="row mb-40">
            <div className="col-12">
              <div className="product-filter text-center sticky-tabs">
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

          {/* Render Products Dynamically */}
          <div className="row">
            {visibleProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-6 mb-30">
                <div className="card-product-12" data-aos="fade-up" data-aos-delay="100">
                  <div className="card-image">
                    <div className="square-image-container">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="card-overlay">
                      <Link href={`/products/${product.id}`} className="btn btn-blue-sm">
                        View Product
                      </Link>
                    </div>
                  </div>
                  <div className="card-info">
                    <span className="badge bg-blue-light mb-10">{product.category}</span>
                    <h4 className="color-white mb-10">{product.title}</h4>
                    {product.shortDescription && (
                      <p className="paragraph-rubik-r gray-100 mb-0 description clamp-text" style={{ color: 'white' }}>
                        {product.shortDescription}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More or End Message - Only show on dedicated pages */}
          {!isHomePage && (
            <div className="text-center mt-40">
              {hasMore ? (
                <button 
                  onClick={handleLoadMore} 
                  className="btn-blue-home none-bd bdrd-10"
                  style={{
                    background: '#0075DC',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span>Load More</span>
                  <span className="btn-hover-effect"></span>
                </button>
              ) : (
                <p className="paragraph-rubik-r" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  You have reached the end
                </p>
              )}
            </div>
          )}

          {/* View All Button - Only show on home page */}
          {isHomePage && (
            <div className="text-center mt-40">
              <Link href="/products" className="btn-blue-home none-bd bdrd-10" style={{
                background: '#0075DC',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '10px',
                display: 'inline-block',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                <span>View All Products</span>
                <span className="btn-hover-effect"></span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .card-product-12 {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .card-product-12:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        .card-image {
          position: relative;
          overflow: hidden;
        }
        .square-image-container {
          position: relative;
          padding-top: 75%; /* 4:3 Aspect Ratio */
          overflow: hidden;
        }
        .square-image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
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
        .btn-blue-sm {
          background: #0075DC;
          color: #ffffff;
          padding: 8px 20px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-blue-sm:hover {
          background: #005aa6;
        }
      `}</style>
    </>
  )
}

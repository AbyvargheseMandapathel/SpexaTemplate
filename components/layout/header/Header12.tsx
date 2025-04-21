import Link from 'next/link'
import { navigationItems, mobileNavigationItems } from '../../../data/navigation'

export default function Header12({ scroll, isMobileMenu, handleMobileMenu, handleSearch, isSearch }: any) {
  // Helper function to generate stable keys for menu items
  const generateKey = (prefix: string, item: { id?: string, title: string, link: string, type?: string, children?: any[] }) => {
    return item.id ? `${prefix}-${item.id}` : `${prefix}-${item.title.toLowerCase().replace(/\s+/g, '-')}-${item.link}`
  }

  return (
    <header className="header-style-11">
      <nav className={`navbar navbar-expand-lg navbar-light w-100 ${scroll ? 'navbar-stick position-fixed top-0' : ''}`}>
        <div className="container-fluid">
          <Link className="navbar-brand pe-4" href="/">
            <img src="/assets/imgs/template/spexa-logo.png" alt="Company Logo" style={{ maxHeight: '50px', width: 'auto' }} />
          </Link>
          
          <ul className="navbar-nav gap-1 align-items-lg-center m-auto">
            {navigationItems.map((item) => {
              const itemKey = generateKey('nav', item)
              return (
                <li key={itemKey} className={`nav-item ${item.type !== 'link' ? 'dropdown menu-item-has-children' : ''}`}>
                  <Link 
                    className="nav-link fw-medium" 
                    href={item.link} 
                    role={item.type !== 'link' ? "button" : undefined} 
                    data-bs-toggle={item.type !== 'link' ? "dropdown" : undefined} 
                    aria-expanded="false"
                  >
                    {item.title}
                  </Link>
                  
                  {item.type === 'dropdown' && item.children && (
                    <ul className="dropdown-menu">
                      {item.children.map((subItem) => {
                        const subItemKey = generateKey('subnav', subItem)
                        return (
                          <li key={subItemKey}>
                            <Link className="dropdown-item" href={subItem.link}>
                              {subItem.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                  
                  {item.type === 'mega-menu' && item.children && (
                    <div className="mega-menu">
                      <div className="row">
                        {item.children.map((column) => {
                          const columnKey = generateKey('col', column)
                          return (
                            <div key={columnKey} className="col-6">
                              <ul className="dropdown-menu">
                                {column.items.map((subItem) => {
                                  const megaItemKey = generateKey('mega', subItem)
                                  return (
                                    <li key={megaItemKey}>
                                      <Link className="dropdown-item" href={subItem.link}>
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Rest of your header content remains the same */}
          <div className="d-flex align-items-center">
            <button onClick={handleMobileMenu} className="menu-tigger btn-navbar rounded-circle px-2 ms-4 d-flex align-items-center justify-content-center btn-menu d-lg-none d-inline-block">
              <svg width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1={12} x2={30} y2={12} stroke="#020e98" strokeWidth={3} />
                <path d="M5 22H30" stroke="#020e98" strokeWidth={3} />
                <path d="M10 2H30" stroke="#020e98" strokeWidth={3} />
              </svg>
            </button>
            {/* <Link href="#" className="btn btn-primary-500-rounded d-none d-lg-inline-block">
              Learn More
            </Link> */}
            <div className="header-need-help">
              <div className="icon-phone">
                <svg width={17} height={18} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9688 13.0938L15.2188 16.25C15.125 16.7188 14.75 17.0312 14.2812 17.0312C6.40625 17 0 10.5938 0 2.71875C0 2.25 0.28125 1.875 0.75 1.78125L3.90625 1.03125C4.34375 0.9375 4.8125 1.1875 5 1.59375L6.46875 5C6.625 5.40625 6.53125 5.875 6.1875 6.125L4.5 7.5C5.5625 9.65625 7.3125 11.4062 9.5 12.4688L10.875 10.7812C11.125 10.4688 11.5938 10.3438 12 10.5L15.4062 11.9688C15.8125 12.1875 16.0625 12.6562 15.9688 13.0938Z" fill="#0055FF" />
                </svg>
              </div>
              <div className="info-help">
                <h3 className="paragraph-rubik-r">Need help?</h3>
                <h4 className="sub-heading-ag-sm">+971564129562 </h4>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu with fixed keys */}
      <div className="offCanvas__info">
        <div className="offCanvas__close-icon menu-close">
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24" fill="#020e98">
			<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
			</svg>
		</button>
        </div>
        <div className="offCanvas__logo mb-20">
          <Link href="/"><img src="/assets/imgs/template/spexa-logo.png" alt="Logo" style={{ maxHeight: '45px', width: 'auto' }} /></Link>
        </div>
        <div className="offCanvas__side-info mb-30">
          <ul className="navbar-nav navbar-nav-mobile">
            {mobileNavigationItems.map((item) => {
              const mobileItemKey = generateKey('mobnav', item)
              return (
                <li key={mobileItemKey} className={`nav-item ${item.type !== 'link' ? 'dropdown menu-item-has-children' : ''}`}>
                  <Link 
                    className="nav-link fw-medium" 
                    href={item.type === 'link' ? item.link : '#'} 
                    role={item.type !== 'link' ? "button" : undefined} 
                    data-bs-toggle={item.type !== 'link' ? "dropdown" : undefined} 
                    aria-expanded="false"
                  >
                    {item.title}
                  </Link>
                  {(item.type === 'dropdown' || item.type === 'mega-menu') && item.children && (
                    <ul className="dropdown-menu">
                      {(item.type === 'mega-menu' 
                        ? [...item.children[0].items, ...item.children[1].items] 
                        : item.children).map((subItem) => {
                          const mobileSubItemKey = generateKey('mobsub', subItem)
                          return (
                            <li key={mobileSubItemKey}>
                              <Link className="dropdown-item" href={subItem.link}>
                                {subItem.title}
                              </Link>
                            </li>
                          )
                        })}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        {/* Rest of your mobile menu content */}
      </div>
      <div className="offCanvas__overly" />
    </header>
  )
}
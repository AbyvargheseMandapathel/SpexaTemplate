import Link from "next/link"

export default function Banner() {
  return (
    <section className="box-faq-single-banner">
      <div className="box-faq-single-banner-inner">
        <div className="container">
          <h1 className="display-ag-2xl color-white">Contact Us</h1>
          <div className="box-breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="#">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <span>Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
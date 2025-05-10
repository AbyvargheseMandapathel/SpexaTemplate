import Link from "next/link";
import { contactInfo } from "../../../data/navigation";

export default function ContactCards() {
  return (
    <div className="row mt-5 pt-4">
      {/* Open Hours Card */}
      <div className="col-lg-4 mb-4">
        <div className="card-contact p-4 rounded shadow-sm h-100" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="card-icon mb-3 d-flex align-items-center">
            <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M51.2133 8.78672C45.5469 3.12047 38.0133 0 30 0C21.9867 0 14.4531 3.12047 8.78672 8.78672C3.12035 14.453 0 21.9867 0 30C0 38.0133 3.12047 45.5469 8.78672 51.2133C14.453 56.8796 21.9867 60 30 60C38.0133 60 45.5469 56.8795 51.2133 51.2133C56.8796 45.547 60 38.0133 60 30C60 21.9867 56.8795 14.4531 51.2133 8.78672ZM49.8874 49.8874C44.5753 55.1995 37.5124 58.125 30 58.125C22.4876 58.125 15.4247 55.1995 10.1126 49.8874C4.80047 44.5753 1.875 37.5124 1.875 30C1.875 22.4876 4.80047 15.4247 10.1126 10.1126C15.4247 4.80047 22.4876 1.875 30 1.875C37.5124 1.875 44.5753 4.80047 49.8874 10.1126C55.1995 15.4247 58.125 22.4876 58.125 30C58.125 37.5124 55.1995 44.5753 49.8874 49.8874Z"
                fill="#007bff"
              />
              <path
                d="M36.5264 42.2404C36.6854 42.2404 36.8467 42.1998 36.9943 42.1146C37.4427 41.8557 37.5963 41.2823 37.3375 40.834L32.1367 31.8259C32.5575 31.3341 32.8125 30.6964 32.8125 30C32.8125 28.7779 32.0286 27.7357 30.9375 27.3488V15C30.9375 14.4823 30.5177 14.0625 30 14.0625C29.4823 14.0625 29.0625 14.4823 29.0625 15V27.3488C27.9714 27.7357 27.1875 28.7779 27.1875 30C27.1875 31.5509 28.4491 32.8125 30 32.8125C30.1754 32.8125 30.347 32.7955 30.5136 32.7647L35.7137 41.7715C35.8874 42.0722 36.2025 42.2404 36.5264 42.2404ZM29.0625 30C29.0625 29.4831 29.4831 29.0625 30 29.0625C30.5169 29.0625 30.9375 29.4831 30.9375 30C30.9375 30.5169 30.5169 30.9375 30 30.9375C29.4831 30.9375 29.0625 30.5169 29.0625 30Z"
                fill="#007bff"
              />
            </svg>
          </div>
          <div className="card-info">
            <h6 className="sub-heading-ag-md mb-3 text-primary">Open Hours</h6>
            <p className="paragraph-rubik-r">{contactInfo.hours}</p>
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="col-lg-4 mb-4">
        <div className="card-contact p-4 rounded shadow-sm h-100" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="card-icon mb-3 d-flex align-items-center">
            <svg width={46} height={60} viewBox="0 0 46 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.0002 0C10.7786 0 0.835938 9.94263 0.835938 22.1643C0.835938 26.1877 2.64037 30.515 2.71599 30.6975C3.29878 32.0808 4.44871 34.2295 5.27792 35.4889L20.4748 58.515C21.0967 59.4589 22.0172 60 23.0002 60C23.9833 60 24.9037 59.4589 25.5256 58.5163L40.7238 35.4889C41.5543 34.2295 42.7029 32.0808 43.2857 30.6975C43.3614 30.5163 45.1645 26.189 45.1645 22.1643C45.1645 9.94263 35.2219 0 23.0002 0ZM40.8816 29.6858C40.3614 30.9257 39.291 32.9244 38.5465 34.0535L23.3483 57.0808C23.0485 57.5359 22.9533 57.5359 22.6534 57.0808L7.45523 34.0535C6.71077 32.9244 5.64037 30.9244 5.12016 29.6845C5.098 29.631 3.4435 25.648 3.4435 22.1643C3.4435 11.3807 12.2166 2.60756 23.0002 2.60756C33.7838 2.60756 42.5569 11.3807 42.5569 22.1643C42.5569 25.6532 40.8985 29.6467 40.8816 29.6858Z"
                fill="#007bff"
              />
              <path
                d="M22.9997 10.4316C16.529 10.4316 11.2656 15.6963 11.2656 22.1657C11.2656 28.635 16.529 33.8997 22.9997 33.8997C29.4703 33.8997 34.7337 28.635 34.7337 22.1657C34.7337 15.6963 29.4703 10.4316 22.9997 10.4316ZM22.9997 31.2921C17.9684 31.2921 13.8732 27.1983 13.8732 22.1657C13.8732 17.1331 17.9684 13.0392 22.9997 13.0392C28.0309 13.0392 32.1261 17.1331 32.1261 22.1657C32.1261 27.1983 28.0309 31.2921 22.9997 31.2921Z"
                fill="#007bff"
              />
            </svg>
          </div>
          <div className="card-info">
            <h6 className="heading-ag-lg text-primary">Address</h6>
            <p className="paragraph-rubik-r">{contactInfo.address}</p>
            <Link href="#" className="text-decoration-none text-primary d-inline-flex align-items-center">
              Check Location
              <svg width={31} height={8} viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                <path d="M30.3536 4.35356C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464468C26.9763 0.269206 26.6597 0.269206 26.4645 0.464468C26.2692 0.659731 26.2692 0.976313 26.4645 1.17158L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53554C26.6597 7.7308 26.9763 7.7308 27.1716 7.53554L30.3536 4.35356ZM-4.37114e-08 4.5L30 4.5L30 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#007bff" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info Card */}
      <div className="col-lg-4 mb-4">
        <div className="card-contact p-4 rounded shadow-sm h-100" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="card-icon mb-3 d-flex align-items-center">
            <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0ZM30 56.25C15.45 56.25 3.75 44.55 3.75 30C3.75 15.45 15.45 3.75 30 3.75C44.55 3.75 56.25 15.45 56.25 30C56.25 44.55 44.55 56.25 30 56.25Z"
                fill="#007bff"
              />
              <path
                d="M45.9375 21.5625H14.0625C13.2053 21.5625 12.5 22.2678 12.5 23.125V36.875C12.5 37.7322 13.2053 38.4375 14.0625 38.4375H45.9375C46.7947 38.4375 47.5 37.7322 47.5 36.875V23.125C47.5 22.2678 46.7947 21.5625 45.9375 21.5625ZM45.9375 23.4375H14.0625V36.5625H45.9375V23.4375Z"
                fill="#007bff"
              />
              <path
                d="M22.5 30L14.0625 25.3125V34.6875L22.5 30ZM47.5 34.6875L37.5 30L47.5 25.3125V34.6875ZM35.625 30.9375L24.375 37.5H35.625V30.9375ZM24.375 22.5H35.625V15.9375L24.375 22.5Z"
                fill="#007bff"
              />
            </svg>
          </div>
          <div className="card-info">
            <h6 className="sub-heading-ag-md text-primary">Get In Touch</h6>
            <p className="paragraph-rubik-r">Phone: <a href={`tel:${contactInfo.phone}`} className="text-decoration-none text-reset">{contactInfo.phone}</a></p>
            <p className="paragraph-rubik-r">Email: <a href={`mailto:${contactInfo.email}`} className="text-decoration-none text-reset">{contactInfo.email}</a></p>
            <Link href="/contact" className="text-decoration-none text-primary d-inline-flex align-items-center">
              Contact Form
              <svg width={31} height={8} viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                <path d="M30.3536 4.35356C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464468C26.9763 0.269206 26.6597 0.269206 26.4645 0.464468C26.2692 0.659731 26.2692 0.976313 26.4645 1.17158L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53554C26.6597 7.7308 26.9763 7.7308 27.1716 7.53554L30.3536 4.35356ZM-4.37114e-08 4.5L30 4.5L30 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#007bff" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
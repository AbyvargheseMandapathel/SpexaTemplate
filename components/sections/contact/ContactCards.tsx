import Link from "next/link";
import { contactInfo } from "../../../data/navigation";

export default function ContactCards() {
  return (
    <div className="row mt-5 pt-4">
      {/* Hours Card */}
      <div className="col-lg-4 mb-4">
        <div className="card-contact p-4 rounded shadow-sm h-100" style={{ 
          backgroundColor: '#001b2b',
          color: 'white'
        }}>
          <div className="card-icon mb-3 d-flex align-items-center">
            <i className="fa fa-clock-o fa-3x text-primary"></i>
          </div>
          <div className="card-info">
            <h6 className="heading-ag-lg text-primary">Open Hours</h6>
            <p className="paragraph-rubik-r text-white">MON-FRI: 9 AM – 22 PM</p>
            <p className="paragraph-rubik-r text-white">SATURDAY: 9 AM – 20 PM</p>
            <p className="paragraph-rubik-r text-white">Sunday: Closed</p>
            <Link href="#" className="text-decoration-none text-primary d-inline-flex align-items-center">
              View Schedule
              <i className="fa fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="col-lg-4 mb-4">
        <div className="card-contact p-4 rounded shadow-sm h-100" style={{ 
          backgroundColor: '#001b2b',
          color: 'white'
        }}>
          <div className="card-icon mb-3 d-flex align-items-center">
            <i className="fa fa-map-marker fa-3x text-primary"></i>
          </div>
          <div className="card-info">
            <h6 className="heading-ag-lg text-primary">Address</h6>
            <p className="paragraph-rubik-r text-white">{contactInfo.address}</p>
            <Link href="#" className="text-decoration-none text-primary d-inline-flex align-items-center">
              Check Location
              <i className="fa fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info Card */}
      <div className="col-lg-4 mb-4">
        <div className="card-contact p-4 rounded shadow-sm h-100" style={{ 
          backgroundColor: '#001b2b',
          color: 'white'
        }}>
          <div className="card-icon mb-3 d-flex align-items-center">
            <i className="fa fa-envelope fa-3x text-primary"></i>
          </div>
          <div className="card-info">
            <h6 className="sub-heading-ag-md text-primary">Get In Touch</h6>
            <p className="paragraph-rubik-r text-white">
              Phone: <a href={`tel:${contactInfo.phone}`} className="text-decoration-none text-white">{contactInfo.phone}</a>
            </p>
            <p className="paragraph-rubik-r text-white">
              Email: <a href={`mailto:${contactInfo.email}`} className="text-decoration-none text-white">{contactInfo.email}</a>
            </p>
            <Link href="/contact" className="text-decoration-none text-primary d-inline-flex align-items-center">
              Contact Form
              <i className="fa fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
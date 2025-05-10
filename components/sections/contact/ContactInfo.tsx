import { contactInfo } from '../../../data/navigation'

export default function ContactInfo() {
  return (
    <div className="box-contact-red">
      <h3 className="heading-ag-xl color-white mb-3">Company info</h3>
      <div className="paragraph-rubik-md-r color-white mb-4">Ignissimos ducimus qui blanditiis prae</div>
      <p className="sub-heading-ag-xl color-white mb-4">
        <img src="/assets/imgs/pages/contact/email.png" alt="Email" className="me-3" />
        {contactInfo.email}
      </p>
      <p className="sub-heading-ag-xl color-white mb-4">
        <img src="/assets/imgs/pages/contact/phone.png" alt="Phone" className="me-3" />
        {contactInfo.phone}
      </p>
      <div className="sub-heading-ag-xl color-white d-flex align-items-center mb-4">
        <img src="/assets/imgs/pages/contact/address.png" alt="Address" className="me-3" />
        <p className="mb-0">{contactInfo.address}</p>
      </div>
    </div>
  )
}
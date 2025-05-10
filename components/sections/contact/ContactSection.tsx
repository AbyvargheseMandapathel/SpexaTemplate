import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"
import ContactCards from "./ContactCards"

export default function ContactSection() {
  return (
    <section className="box-section box-contact-section-2">
      <div className="container" data-aos="fade-up">
        <h1 className="heading-jakarta-55 dark-950 mb-5">
          Have Questions?<br />
          Get in touch!
        </h1>
        <div className="row">
          <div className="col-lg-5">
            <ContactInfo />
          </div>
          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>
        <ContactCards />
      </div>
    </section>
  )
}
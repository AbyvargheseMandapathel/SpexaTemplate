
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/contact/Banner"
import ContactSection from "@/components/sections/contact/ContactSection"

export default function Contact() {
  return (
    <>
      <Layout headerStyle={12} footerStyle={17}>
        <ContactSection />
      </Layout>
    </>
  )
}
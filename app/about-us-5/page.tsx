import Layout from "@/components/layout/Layout";
import AboutUsSection from "@/components/sections/about-us/AboutUsSection";
import ValuesSection from "@/components/sections/about-us/ValuesSection";
import ClientTestimonialsSection from "@/components/sections/about-us/ClientTestimonialsSection";
import aboutUsData from "@/data/aboutus.json";
import MovingTextBanner from "@/components/elements/MovingTextBanner";

export default function AboutUs() {
  const bannerItems = [
    "INDUSTRY-LEADING SOLUTIONS",
    "EXPLOSION-PROOF EXPERTISE",
    "CERTIFIED QUALITY",
    "GLOBAL SERVICE"
  ];

  return (
    <Layout headerStyle={12} footerStyle={18}>
      {/* Main About Us Section with company information */}
      <AboutUsSection data={aboutUsData.aboutUs} />
      
      {/* Moving text banner to create visual separation */}
      <MovingTextBanner 
        items={bannerItems} 
        backgroundColor="#ffffff"
        textColor="#001c3c"
        speed={40}
      />
      
      {/* Company values section */}
      {/* <ValuesSection values={aboutUsData.values} /> */}
      
      {/* Client testimonials section */}
      <ClientTestimonialsSection testimonials={aboutUsData.clientTestimonials} />
    </Layout>
  );
}
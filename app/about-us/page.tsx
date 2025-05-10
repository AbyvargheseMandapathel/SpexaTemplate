import Layout from "@/components/layout/Layout";
import AboutUsSection from "@/components/sections/about-us/AboutUsSection";
import ValuesSection from "@/components/sections/about-us/ValuesSection";
import ClientTestimonialsSection from "@/components/sections/about-us/ClientTestimonialsSection";
import aboutUsData from "@/data/aboutus.json";
import MovingTextBanner from "@/components/elements/MovingTextBanner";
import Section3 from '@/components/sections/home14/Section3'



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
      {/* <Section3 /> */}
      <ValuesSection values={aboutUsData.values} />

      
      {/* Client testimonials section */}
      <ClientTestimonialsSection />
      {/* <ClientTestimonialsSection testimonials={aboutUsData.clientTestimonials} /> */}
    
      <MovingTextBanner 
        items={bannerItems} 
        backgroundColor="#ffffff"
        textColor="#001c3c"
        speed={40}
      />
    
    </Layout>
  );
}
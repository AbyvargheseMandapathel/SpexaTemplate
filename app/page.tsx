import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/home4/Section1'
import Section10 from '@/components/sections/home12/Section10'
import Section2 from '@/components/sections/home12/Section2'
// import Section3 from '@/components/sections/home12/Section3'
import Section4 from '@/components/sections/home6/Section4'
// import Section5 from '@/components/sections/home12/Section5'
import Section6 from '@/components/sections/home12/Section6'
import Client from '@/components/sections/home12/Client'
import Section7 from '@/components/sections/home12/Section7'
// import Section7 from "@/components/sections/home6/Section7"
import Section8 from '@/components/sections/home12/Section8'
import Section9 from '@/components/sections/home12/Section9'
import CarouselSection1 from "@/components/sections/home12/CarouselSection1"
import CarouselSection2 from "@/components/sections/home12/CarouselSection2"
import BlueClient from "@/components/sections/home12/BlueClient"
import AboutUsSection from "@/components/sections/home12/AboutUsSection"
import MovingTextBanner from "@/components/elements/MovingTextBanner"
import Services from "@/components/sections/home12/Services"
import Products from "@/components/sections/home12/Products"
import Projects from "@/components/sections/home12/Projects"

export default function Home12() {

	const bannerItems = [
		"INDUSTRY-LEADING SOLUTIONS",
		"EXPLOSION-PROOF EXPERTISE",
		"CERTIFIED QUALITY",
		"GLOBAL SERVICE"
	  ]

	return (
		<>

			<Layout headerStyle={12} footerStyle={18}>
				{/* <CarouselSection2 /> */}
				<Section1 />
				{/* <Section2 /> */}
				{/* Moving Text Banner */}
				<MovingTextBanner 
        items={bannerItems} 
        backgroundColor="#ffffff"
        textColor="#001c3c"
        speed={40}
      />
				<AboutUsSection />
				{/* <Client /> */}
				<BlueClient />
				{/* <Section3 /> */}
				<Services />
				{/* <Products /> */}
				<Projects />
				{/* <Section7 /> */}
				{/*<Section6 />
				<Section7 />
				<Section8 />
				<Section9 /> */}
				<MovingTextBanner 
        items={bannerItems} 
        backgroundColor="#ffffff"
        textColor="#001c3c"
        speed={40}
      />
				{/* <Section10 /> */}
			</Layout>
		</>
	)
}
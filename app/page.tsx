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
export default function Home12() {

	return (
		<>

			<Layout headerStyle={12} footerStyle={17}>
				{/* <CarouselSection2 /> */}
				<Section1 />
				<Section2 />
				{/* <Client /> */}
				<BlueClient />
				 {/* <Section3 /> */}
				<Section4 />
				{/* <Section7 /> */}
				{/*<Section6 />
				<Section7 />
				<Section8 />
				<Section9 /> */}
				{/* <Section10 /> */}
			</Layout>
		</>
	)
}
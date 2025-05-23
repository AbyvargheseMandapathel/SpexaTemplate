
import "@/node_modules/react-modal-video/css/modal-video.css"
import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/aos.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css"
import "/public/assets/fonts/boxicons/boxicons.min.css"
import "/public/assets/css/main.css"
import type { Metadata } from "next"
import { Inter, Figtree, Rajdhani, Plus_Jakarta_Sans, Rubik } from "next/font/google"

const inter = Inter({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    variable: "--inter",
    display: 'swap',
})

const figtree = Figtree({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    variable: "--figtree",
    display: 'swap',
})

const rajdhani = Rajdhani({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--rajdhani",
    display: 'swap',
})
const rubik = Rubik({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    variable: "--rubik",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700','800'],
    subsets: ['latin'],
    variable: "--jakarta",
    display: 'swap',
})

// This is likely where your metadata is defined
export const metadata = {
  title: 'Spexa - Industrial Automation Solutions',
  description: 'Industrial Automation, Site Installation, and Commissioning Services',
}

// The favicon is referenced in the metadata or in the head section
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${figtree.variable} ${rajdhani.variable} ${rubik.variable} ${jakarta.variable}`}>{children}</body>
        </html>
    )
}

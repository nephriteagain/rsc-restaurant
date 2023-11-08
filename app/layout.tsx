import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


import HomeScroller from '@/components/common/HomeScroller'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Navitems from '@/components/common/NavItems'
import FooterPadder from '@/components/common/FooterPadder'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'CheeryBug',
    description: 'A fast food restaurant',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className={`${inter.className} bg-bgLight`}>
                <Navbar>
                    <Navitems />
                </Navbar>
                {children}
                <HomeScroller />
                <hr className="border-2 border-accentRed w-full" />
                <FooterPadder>
                    <Footer />
                </FooterPadder>
            </body>
        </html>
  )
}

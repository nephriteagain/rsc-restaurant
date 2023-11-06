import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Link from 'next/link'

import Logo from '@/components/common/Logo'
import HomeScroller from '@/components/common/HomeScroller'
import Footer from '@/components/common/Footer'

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
                <nav className='w-full bg-primaryRed text-white flex items-center gap-6 px-6 py-4 text-xl font-semibold'>
                    <Logo />
                    <Link href={'/delivery'}>
                        Delivery
                    </Link>
                    <Link href={'/locations'}>
                        Locations
                    </Link>
                    <Link href={'/menu'}>
                        Menu
                    </Link>
                    <Link href={'/promotions'}>
                        Promotions
                    </Link>
                </nav>
                {children}
                <HomeScroller />
                <hr className="border-2 border-accentRed w-full" />
                <Footer />
            </body>
        </html>
  )
}

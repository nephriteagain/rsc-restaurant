import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { PiBugDroid } from 'react-icons/pi'
import Link from 'next/link'

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
                    <Link className='grow font-bold' href={'/'}>
                        <header className="flex flex-row gap-1 items-center text-4xl">
                            <span>
                            CheeryBug
                            </span>
                            <PiBugDroid />
                    </header>
                    </Link>
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
            </body>
        </html>
  )
}

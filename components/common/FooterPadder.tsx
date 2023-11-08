"use client"

import { usePathname } from "next/navigation"
import { ReactNode } from 'react'

export default function FooterPadder({children}: {children:ReactNode}) {

    const pathname = usePathname()
    const regex = /\/menu.*/
    const inMenuPath = regex.test(pathname)
    return (
        <div className={`${inMenuPath ? 'md:ps-[250px]': ''}`}>
            {children}
        </div>
    )
}
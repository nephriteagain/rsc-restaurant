"use client"


import { useState, useEffect, ReactNode } from "react"

export default function Navbar({children}: {children: ReactNode}) {

    const [ scrollVal, setScrollVal ] = useState(0)

    function updateScrollVal() {        
        setScrollVal(window.scrollY)
    }

    useEffect(() => {
        document.addEventListener('scroll', updateScrollVal)
        return () => document.removeEventListener('scroll',updateScrollVal)
    }, [])


    return (
        <nav className={`w-full bg-primaryRed text-white flex items-center gap-6 px-6 py-4 text-xl font-semibold
            ${scrollVal > 100 ? 'fixed top-0 left-0 z-[9999] animate-flip-down' : ''}`}>
            {children}
        </nav>
    )
}
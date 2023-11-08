"use client"

import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

import { useState, useEffect, ReactNode } from "react"

import NavDropDown from './NavDropDown'

export default function Navbar({children}: {children: ReactNode}) {

    const [ scrollVal, setScrollVal ] = useState(0)
    const [ isDropdownShow, setIsDropdowShow ] = useState(false)

    function updateScrollVal() {        
        setScrollVal(window.scrollY)
    }

    useEffect(() => {
        document.addEventListener('scroll', updateScrollVal)
        return () => document.removeEventListener('scroll',updateScrollVal)
    }, [])


    return (
        <nav className={`relative w-full bg-primaryRed text-white flex items-center px-6 py-4 text-xl font-semibold
            ${scrollVal > 100 ? 'fixed top-0 left-0 z-[9999] animate-flip-down' : ''}`}>        
            {children}
            { 
                !isDropdownShow ?  
                <div 
                    className='md:hidden text-5xl animate-fade' 
                    onClick={() => setIsDropdowShow(true)} 
                    role='button'
                >
                    <RxHamburgerMenu />
                </div> :
                <div 
                    className='md-hidden text-5xl animate-fade' 
                    onClick={() => setIsDropdowShow(false)} 
                    role='button'
                >
                    <AiOutlineClose />
                </div> 
            }
            { isDropdownShow && 
                <NavDropDown 
                    setIsDropdownShow={setIsDropdowShow} 
                />
            }
        </nav>
    )
}
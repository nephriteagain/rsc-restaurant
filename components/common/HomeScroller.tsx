"use client"
import { MdArrowForwardIos } from 'react-icons/md'
import { useEffect, useState } from 'react'

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}



export default function HomeScroller() {
    const [ scrollVal, setScrollVal ] = useState(0)

    function updateScrollVal() {
        setScrollVal(window.scrollY)
    }

    useEffect(() => {
        document.addEventListener('scroll', updateScrollVal)
        return () => document.removeEventListener('scroll',updateScrollVal)
    }, [])

    return (
        <button className={`${scrollVal === 0 ? 'hidden' : 'block'} fixed bottom-6 right-6 z-[100] -rotate-90 w-fit p-3 rounded-full bg-buttonOrange text-2xl text-white cursor-pointer btn-hover shadow-sm drop-shadow-sm animate-fade`}
            onClick={scrollToTop}            
        >
            <MdArrowForwardIos />
        </button>
    )
}
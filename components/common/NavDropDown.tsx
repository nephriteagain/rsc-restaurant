import Link from "next/link"
import {  Dispatch, SetStateAction } from "react"

import { useEffect, useState } from "react";
import { usePathname  } from "next/navigation";

export default function NavDropDown({setIsDropdownShow}: {setIsDropdownShow: Dispatch<SetStateAction<boolean>>}) {
    const pathname = usePathname()
    const [ currentPath, setCurrentPath ] = useState(pathname)

    useEffect(() => {
        if (currentPath !== pathname) {
            setCurrentPath(pathname)
            setIsDropdownShow(false)
        }
    }, [pathname])

    return (
        <div className="absolute bg-white text-black left-0 z-[99999] w-full flex flex-col items-center py-28 gap-12 font-bold text-4xl animate-flip-down"
        >
            <Link href={'/delivery'} className="hover:bg-neutral-100 tall-200 p-4 rounded-lg">
                Delivery
            </Link>
            <Link href={'/menu'} className="hover:bg-neutral-100 tall-200 p-4 rounded-lg">
                Menu
            </Link>
            <Link href={'/promotions'} className="hover:bg-neutral-100 tall-200 p-4 rounded-lg">
                Promotions
            </Link>
        </div>
    )
}
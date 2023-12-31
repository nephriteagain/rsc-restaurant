import { ReactNode } from "react"
import MenuNavigation from "@/components/menu/MenuNavigation"

export default function MenuLayout({children}: {children: ReactNode}) {
    return (
        <div className="w-full flex flex-col md:flex-row">
            <MenuNavigation />
            {children}
        </div>
    )
}
import Logo from "./Logo"
import Link from "next/link"

export default function Navitems() {
    return (
        <>
            <Logo />
                <div className="hidden md:flex flex-row items-center gap-6 ">

                <Link href={'/delivery'}>
                    Delivery
                </Link>
                <Link href={'/menu'}>
                    Menu
                </Link>
                <Link href={'/promotions'}>
                    Promotions
                </Link>
            </div>
        </>
    )
}
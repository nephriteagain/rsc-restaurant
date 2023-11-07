import Logo from "./Logo"
import Link from "next/link"

export default function Navitems() {
    return (
        <>
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
        </>
    )
}
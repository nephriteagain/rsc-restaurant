
import Link from "next/link"
import { PiBugDroid } from "react-icons/pi"

export default function Logo() {
    return (
        <Link className='grow font-bold' href={'/'}>
            <header className="flex flex-row gap-1 items-center text-4xl">
                <span>
                CheeryBug
                </span>
                <PiBugDroid />
            </header>
        </Link>
    )
}
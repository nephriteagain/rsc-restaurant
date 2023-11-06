import Link from "next/link"

export default function NotFound() {
    return (
        <main >
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 font-bold text-2xl">
                <p>
                    PAGE NOT FOUND...
                </p>
                <Link href={'/'} className="w-fit bg-accentRed text-white px-2 py-1 rounded-md btn-hover tall-100">
                    Back to Home Page
                </Link>
            </div>
        </main>
    )
}
import { promoType } from "@/lib/data/promo"
import Link from "next/link"

export default function PromoDetails({
    title,
    desc,
    stores,
    faq
}: Omit<promoType,'link'>) {

    return (
        <div className="w-full flex flex-row gap-8 flex-wrap items-center justify-center">
            <div  className="w-[90vw] sm:w-[500px] md:w-[400px] lg:w-[300px] aspect-[100/161] rounded-2xl shadow-lg bg-secondaryLight" />
            <div className="flex flex-col gap-4 min-w-[300px] max-w-[600px]">
                <h2 className="font-bold text-4xl">{title}</h2>
                <p className="leading-10 border border-gray-400 px-2 py-4 text-lg">{desc}</p>
                <Link href={'/menu'} className="w-fit px-4 py-2 text-xl font-semibold bg-buttonOrange rounded-xl shadow-md">
                    Order Now
                </Link>
            </div>
        </div>
    )  
}
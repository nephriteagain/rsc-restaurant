import Link from "next/link";

import { promos } from "@/lib/data/promo";

export default function PromoList() {
    return (
        <div className="px-4 py-8">
            <div className="pb-12 flex flex-col items-center gap-4">
                <h2 className="font-bold text-center text-4xl text-primaryRed">CheeryBug Promo</h2>
                <p className="text-lg text-center">
                    Get more JOY with these exciting promos! Take advantage of these exclusive and limited time only offers and deals to get big discounts and freebies!
                </p>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center items-center gap-12">
                {promos.map(({link, title}) => {
                    return (
                        <Promo 
                            key={link}
                            link={link}
                            title={title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function Promo({title,link}:{title: string; link:string}) {
    return (
        <div className="flex flex-col items-center  w-[300px] sm:w-[450px] gap-4">
            <div className="w-[300px] sm:w-[400px] aspect-[1618/1000] rounded-xl shadow-lg bg-secondaryLight" />
            <h3 className="text-2xl font-bold">
                {title}
            </h3>
            <div className="flex flex-row gap-8 justify-between items-center font-semibold">
                <Link href={`/promotions/${link}`}
                    className="text-xl underline text-buttonOrange"
                >
                    Learn More
                </Link>
                <Link href={'/menu'}
                    className="px-4 py-2 text-xl bg-buttonOrange text-white shadow-md rounded-2xl"
                >
                    Order Now
                </Link>

            </div>
        </div>
    )
}
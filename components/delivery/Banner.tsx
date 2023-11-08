import Link from "next/link"

export default function Banner() {
    return (
        <div className="w-full">
            <hr className="border-2 border-buttonOrange" />
            <div className="text-center text-5xl font-bold bg-primaryRed text-white py-10">
                CheeryBug Delivery
            </div>
            <div className="px-6 py-12 flex flex-row flex-wrap justify-center gap-20">
                <div className="flex items-center justify-center">
                    <div className="relative w-[300px] sm:w-[400px] aspect-[2/1]">
                        <div className="z-10 absolute top-0 left-0 w-10/12 aspect-[2/1] shadow-md bg-buttonOrange"></div>
                        <div className="absolute bottom-0 right-0 w-10/12 aspect-[2/1] rounded-lg shadow-md bg-primaryRed"></div>
                    </div>
                </div>
                <div className="max-w-[400px] flex flex-col gap-6">
                    <p className="text-3xl font-bold text-primaryRed">Delivery</p>
                    <p>
                    Ordering from CheeryBug has never been easier! Call #97000, Click Order Online to go to CheeryBugDelivery.com or tap the CheeryBug app. Satisfy your cravings and have your CheeryBug favorites delivered right to your doorstep!
                    </p>
                    <Link href={'/menu'} className="w-fit text-2xl text-white font-semibold bg-buttonOrange px-2 py-1 btn-hover rounded-md shadow-md drop-shadow-md">
                        Order Online
                    </Link>
                </div>

            </div>
        </div>
    )
}
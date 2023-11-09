import { promos } from "@/lib/data/promo";
import Link from "next/link";

import PromoDetails from "@/components/promos/PromoDetails.";
import Store from "@/components/promos/Store";
import Question from "@/components/common/Question";

export default function Promotion({params}: {params: {promoLink:string;}}) {
    
    const { promoLink } = params

    const promo = promos.find(p => p.link === promoLink)

    if (promo === undefined) {
        return (
            <div className="px-4 py-8 w-full h-[70vh] flex flex-col items-center justify-center gap-6 text-2xl">
                <p>Promo not found...</p>
                <Link href={'/'} className="w-fit px-4 py-2 font-semibold rounded-lg shadow-md bg-buttonOrange">Back to Homepage</Link>
            </div>
        )
    }

    const { title, desc, stores, faq } = promo

    return (
        <div className="px-4 py-16 w-full flex flex-col items-center gap-12">
            <PromoDetails 
                title={title}
                desc={desc}
                stores={stores}
                faq={faq}
            />
            <section className="w-full flex flex-col gap-12">
                <h3 className="text-center text-accentRed font-bold text-4xl">
                    Participating Stores
                </h3>
                {
                    stores.map(s => {
                        return (
                            <Store store={s} key={s} />
                        )
                    })
                }
            </section>
            <section className="w-full flex flex-col gap-12">
                <h2 className="text-center font-bold text-5xl">Frequently Asked Questions (FAQ)</h2>
            </section>
            {
                faq.map(({q,a}, i) => {
                    return (
                        <Question  
                            key={i}
                            question={q}
                            answer={a}
                        />
                    )
                })
            }
        </div>
    )
}
import Link from "next/link"

const promos = [
    {
        id: 'cheerybug-cheeryjoy-christmas-perfect-pairs',
    },
    {
        id: 'november-choose-your-welcome-gift'
    },
    {
        id: 'november-app-exclusive-deal'
    }
]


export default function Promos() {
    return (
        <div className="py-8 px-4 flex flex-col items-center gap-10">
            <p className="font-bold text-3xl">Exclusive Promos</p>
            <div className="flex flex-row gap-6 flex-wrap items-center justify-center">
            {promos.map(p => {
                const { id } = p
                return (
                    <Promo id={id} key={id} />
                )
            })}
            </div>
            <Link href={'/promotions'} className="w-fit">
                <p className="text-2xl text-white font-semibold bg-buttonOrange px-2 py-1 btn-hover rounded-md shadow-md drop-shadow-md">See All Promos</p>
            </Link>
        </div>
    )   
}

function Promo({id}: {id: string}) {
    return (
            <Link href={`/promotions/${id}`}>
                <div className="w-[350px] min-w-[280px] aspect-[3/4] rounded-2xl bg-secondaryLight shadow-lg drop-shadow-lg"> 
                </div>
            </Link>
        
    )
}
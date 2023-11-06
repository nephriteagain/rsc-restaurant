import Link from "next/link";

const menuSamples = [
    {
        id: 'chicken-cheer',
        item: 'ChickenCheer Bucket',
        description: "Philippines’ best-tasting crispylicious, juicylicious."
    },
    {
        id: 'spaghetti',
        item: 'Spaghetti Pan',
        description: "The meatiest, cheesiest, and sweet-sarap Cheery Spaghetti!"
    },
    {
        id: 'yumburger',
        item: 'Yumburger',
        description: "Your favorite 100% Beefy Langhap-Sarap Burgers."
    }
]


export default function FeaturedMenu() {
    return (
        <div className="w-full py-8 px-4 flex flex-col gap-8 items-center bg-secondaryLight">
            <p className="text-xl font-semibold">Featured Menu Items</p>
            <div className="flex flex-row gap-6 flex-wrap">
                {menuSamples.map(m => {
                    const {id, item, description} = m
                    return (
                        <Menu 
                            key={id}
                            id={id}
                            item={item}
                            description={description}
                        />
                    )
                })}
            </div>
            <Link href={'/menu'} className="w-fit">
                <p className="text-2xl text-white font-semibold bg-buttonOrange px-2 py-1 btn-hover rounded-md shadow-md drop-shadow-md">
                    View Menu
                </p>                
            </Link>
        </div>
    )
}

function Menu({item, description, id}: {item:string, description:string;id:string}) {
    return (
        <div className="min-w-[300px] w-[350px] aspect-[3/4] shadow-lg drop-shadow-lg rounded-2xl overflow-hidden">
            <Link href={`/menu/${id}`}>
                <div className="flex flex-col gap-3 p-8 w-full h-full text-white bg-primaryRed">
                    <p className="text-2xl font-bold">{item}</p>
                    <p className="text-xl font-semibold">{description}</p>
                </div>
            </Link>
        </div>
    )
}
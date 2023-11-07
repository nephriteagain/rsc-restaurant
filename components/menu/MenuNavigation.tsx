import Link from "next/link"

import { links } from "@/lib/data/menu";

export default function MenuNavigation() {
    return (
        <nav className="flex flex-col bg-secondaryLight shadow-md">
            {links.map(({id, name}) => {

                return (
                    <MenuItem 
                        key={id}
                        id={id}
                        name={name}
                    />
                )
            })}
        </nav>
    )
}

function MenuItem({name, id}:{name:string; id:string}) {
    return (
        <Link  href={`/menu/${id}`} className={`p-4 w-[250px] flex flex-row gap-4 items-center cursor-pointer shadow-md`}>
            <div className="w-16 aspect-square bg-accentRed shadow-md drop-shadow-sm rounded-full" />
            <p className="text-xl font-semibold">{name}</p>
        </Link>
    )
}
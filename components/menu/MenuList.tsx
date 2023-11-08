import { menus, links } from "@/lib/data/menu";
import { FaCircleInfo } from 'react-icons/fa6'

export default function MenuList({id}: {id:string}) {
    const menuList = menus[id]
    if (!menuList) {
        return null
    }
    
    const name = links.find(l => l.id === id) 

    return (
        <div className="flex flex-col gap-8 items-center py-4 w-full">
            <div>
                <h2 className="text-center font-bold text-4xl">{name?.name ?? 'Menu'}</h2>
                {Boolean(name?.desc) && <h1>{name?.desc}</h1>}
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center gap-8">
                {menuList.map(({name,desc}) => {
                    return (
                        <MenuItem key={name} name={name} desc={desc} />
                    )
                })}
            </div>
        </div>
    )
}

function MenuItem({name, desc}: {name:string; desc:string}) {
    return (
        <div className="w-[300px] sm:w-[270px] p-6 flex flex-col gap-4  items-center rounded-lg border-4 border-buttonOrange">
            <div className="relative w-[150px] bg-secondaryLight aspect-square shadow-md">
                <FaCircleInfo className="absolute -right-2 -top-2 text-xl fill-accentRed" />
            </div>
            <h3 className="text-3xl text-center leading-12 font-semibold">{name}</h3>
            <p className="text-center leading-8">{desc}</p>
        </div>
    )
}
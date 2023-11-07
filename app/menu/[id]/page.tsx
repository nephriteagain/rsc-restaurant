import MenuList from "@/components/menu/MenuList"
import FoodInfo from "@/components/menu/FoodInfo"

export default function Page({params}: {params:{id:string}}) {
    const id = params.id

    return (
        <div className="px-4 py-8">
            <MenuList id={id} />
            <FoodInfo id={id} />
        </div>
    )
}